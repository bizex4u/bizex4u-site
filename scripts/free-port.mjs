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

if (!(await inUse())) {
  process.exit(0);
}

console.log(`\n  Port ${PORT} is already in use — stopping whatever holds it.`);

try {
  /* macOS and Linux both ship lsof; -t gives bare PIDs. */
  const pids = execSync(`lsof -ti tcp:${PORT}`, { stdio: ["ignore", "pipe", "ignore"] })
    .toString()
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  for (const pid of pids) {
    try {
      process.kill(Number(pid), "SIGKILL");
      console.log(`  Stopped process ${pid}.`);
    } catch {
      /* Already gone, or not ours to kill. */
    }
  }
} catch {
  /* lsof missing or returned nothing. Fall through to the re-check,
     which decides whether that actually mattered. */
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
