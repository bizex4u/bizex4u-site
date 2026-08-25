#!/usr/bin/env node
/**
 * Make sure the port is free before `next start` tries to bind it.
 *
 * This exists because of a failure that wasted real time more than
 * once: a server left running from an earlier session keeps port 3000,
 * `next start` dies with EADDRINUSE, and the OLD process carries on
 * answering. Because `next build` has meanwhile replaced .next, that
 * old process serves HTML pointing at content-hashed chunks that no
 * longer exist — so every CSS and JS request 404s and the site renders
 * as unstyled HTML. It looks like a broken stylesheet. It is actually
 * two servers and one of them is a ghost.
 *
 * Binding a socket is the portable way to test this — lsof is not
 * available or not permitted everywhere. We only shell out to lsof to
 * do the killing, and if that is unavailable we say so plainly rather
 * than failing silently.
 */

import net from "node:net";
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const PORT = Number(process.argv[2] ?? process.env.PORT ?? 3000);

const inUse = () =>
  new Promise((resolve) => {
    const srv = net
      .createServer()
      .once("error", (err) => resolve(err.code === "EADDRINUSE"))
      .once("listening", () => srv.close(() => resolve(false)))
      .listen(PORT, "0.0.0.0");
  });

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * lsof is not always enough.
 *
 * On macOS it is fine. Inside a Linux container it is frequently
 * installed but unable to see the socket at all — `lsof -ti tcp:3000`
 * exits 1 with no output while a server is demonstrably listening on
 * 3000. The old version of this script read that empty result as
 * "nothing to kill", fell through, and then reported that it could not
 * free the port. Which was true, and useless.
 *
 * /proc has the answer directly and needs no external binary. The
 * listening socket appears in /proc/net/tcp (and tcp6) with state 0A;
 * its inode number then appears as `socket:[N]` behind one of the
 * owning process's file descriptors.
 */
function pidsFromProc(port) {
  const inodes = new Set();
  for (const f of ["/proc/net/tcp", "/proc/net/tcp6"]) {
    let text;
    try {
      text = fs.readFileSync(f, "utf8");
    } catch {
      continue; /* not Linux, or not readable */
    }
    for (const line of text.split("\n").slice(1)) {
      const c = line.trim().split(/\s+/);
      if (c.length < 10) continue;
      const [, local, , state] = c;
      if (state !== "0A") continue; /* 0A = LISTEN */
      if (parseInt(local.split(":")[1], 16) !== port) continue;
      inodes.add(c[9]);
    }
  }
  if (!inodes.size) return [];

  const pids = new Set();
  let entries;
  try {
    entries = fs.readdirSync("/proc");
  } catch {
    return [];
  }
  for (const name of entries) {
    if (!/^\d+$/.test(name)) continue;
    let fds;
    try {
      fds = fs.readdirSync(`/proc/${name}/fd`);
    } catch {
      continue; /* someone else's process, or it just exited */
    }
    for (const fd of fds) {
      let link;
      try {
        link = fs.readlinkSync(path.join("/proc", name, "fd", fd));
      } catch {
        continue;
      }
      const m = /^socket:\[(\d+)\]$/.exec(link);
      if (m && inodes.has(m[1])) {
        pids.add(name);
        break;
      }
    }
  }
  return [...pids];
}

function pidsFromLsof(port) {
  try {
    /* macOS and most Linux installs; -t gives bare PIDs. */
    return execSync(`lsof -ti tcp:${port}`, {
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
  } catch {
    /* lsof missing, or it found nothing it could see. */
    return [];
  }
}

if (!(await inUse())) {
  process.exit(0);
}

console.log(`\n  Port ${PORT} is already in use — stopping whatever holds it.`);

/* Both sources, deduplicated. Neither is reliable everywhere and the
   union costs nothing. */
const pids = [...new Set([...pidsFromLsof(PORT), ...pidsFromProc(PORT)])];

if (!pids.length) {
  console.log(
    `  Could not identify what holds port ${PORT} — trying the re-check anyway.`,
  );
}

for (const pid of pids) {
  if (Number(pid) === process.pid) continue; /* never our own shell */
  try {
    process.kill(Number(pid), "SIGKILL");
    console.log(`  Stopped process ${pid}.`);
  } catch {
    /* Already gone, or not ours to kill. */
  }
}

/* Sockets do not always release the instant the process dies. */
for (let i = 0; i < 10; i++) {
  await wait(300);
  if (!(await inUse())) {
    console.log(`  Port ${PORT} is free.\n`);
    process.exit(0);
  }
}

console.error(
  `\n  Could not free port ${PORT}.\n\n` +
    `  Something is still holding it and this build cannot start.\n` +
    `  Find it and stop it, then run the command again:\n\n` +
    `      lsof -ti tcp:${PORT} | xargs kill -9\n\n` +
    `  If you have a terminal tab running the site, press Ctrl+C there.\n`,
);
process.exit(1);
