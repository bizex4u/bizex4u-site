#!/usr/bin/env node
/**
 * Fail when a published page carries a price (rupees or INR), a commission percentage,
 * an unverified numeric claim, a banned client, or a Gurugram/Gurgaon
 * office address.
 *
 * Reads the HTML emitted by `next build` (`.next/server/app`).
 *
 *   npm run build
 *
 * The build script runs this check after `next build`, so a preview
 * fails when a published page carries a price. `npm test` runs it alone.
 *
 * `scripts/verified-claims.json` lists numeric claims that name a source
 * on the page (an operator, a statute, or this site's own market count).
 * A claim not covered by that file fails. Rupee and INR prices, commission
 * percentages, the names AKAI and Aditya Vision, and a Gurugram or
 * Gurgaon office address are not waiveable.
 *
 * Delhi NCR copy that mentions Gurugram as a market is allowed. An
 * office line, a PostalAddress, or "our office" in that city is not.
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const allowPath = join(root, "scripts", "verified-claims.json");
const buildDir = join(root, ".next", "server", "app");

const AMOUNT =
  "(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|(?:twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)(?:-(?:one|two|three|four|five|six|seven|eight|nine))?|hundred)";

const PRICE_SOURCES = [
  /₹\s*\d[\d,]*(?:\.\d+)?/g,
  /(?<![A-Za-z0-9])Rs\.?\s*\d[\d,]*(?:\.\d+)?/g,
  /(?<![A-Za-z0-9])INR\s*\d[\d,]*(?:\.\d+)?\s*k?\b/gi,
  /\bper\s+sq\.?\s*ft\b/gi,
  new RegExp(
    String.raw`\b(?:\d[\d,]*(?:\.\d+)?|${AMOUNT}(?:[-\s]${AMOUNT})?)\s*[-\s]\s*(?:lakh|lakhs|lac|lacs|crore|crores|cr)\b`,
    "gi",
  ),
  /\d[\d,]*(?:\.\d+)?[^.]{0,24}\bper\s+(?:month|slot)\b/gi,
  /\bper\s+(?:month|slot)\b[^.]{0,24}\d/gi,
];

const CLAIM_SOURCE = new RegExp(
  String.raw`(?<![\w.-])(?:\d+(?:\.\d+)?\s*(?:%|percent\b)|\d+\s*\+|\d+(?:\.\d+)?\s*x\b|(?:\d+(?:\.\d+)?|${AMOUNT})\s*-?\s*(?:km|kilometres?|stations|candela)\b|\d+\s+(?:Indian\s+)?(?:markets?|cities|clients?|media partners?|partners?|campaigns?)\b|(?:two|three|four|five|six|seven|eight|nine|ten|\d+)\s+times\s+the\s+(?:permission\s+)?(?:fee|rate|cost|price)\b)`,
  "g",
);

const BANNED = [/\bAKAI\b/g, /Aditya Vision/gi];

const OFFICE = [
  /"(?:streetAddress|addressLocality|addressRegion)"\s*:\s*"[^"]*\b(?:Gurugram|Gurgaon)\b[^"]*"/g,
  /\bOffice\s*:\s*[^.]{0,200}\b(?:Gurugram|Gurgaon)\b/g,
  /\b(?:our|registered|head|branch)\s+office\b[^.]{0,120}\b(?:Gurugram|Gurgaon)\b/gi,
  /\bheadquartered\s+in\s+(?:Gurugram|Gurgaon)\b/gi,
  /\b(?:Gurugram|Gurgaon)\s+office\b(?![\s-]districts?\b)/gi,
];

function decode(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
      String.fromCodePoint(parseInt(hex, 16)),
    )
    .replace(/&#(\d+);/g, (_, num) => String.fromCodePoint(Number(num)));
}

function visibleText(html) {
  const chunks = [];
  const re =
    /<script\b([^>]*)>([\s\S]*?)<\/script>|<style\b[^>]*>[\s\S]*?<\/style>|<!--[\s\S]*?-->|<[^>]+>/gi;
  let last = 0;
  let match;
  while ((match = re.exec(html))) {
    chunks.push(html.slice(last, match.index));
    if (match[0].startsWith("<script") && /ld\+json/i.test(match[1] || "")) {
      chunks.push(` ${match[2] || ""} `);
    }
    last = match.index + match[0].length;
  }
  chunks.push(html.slice(last));
  return decode(chunks.join(" ")).replace(/\s+/g, " ").trim();
}

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, acc);
    else acc.push(path);
  }
  return acc;
}

function pagePath(file) {
  const rel = file
    .slice(buildDir.length)
    .replace(/\\/g, "/")
    .replace(/\.html$/, "")
    .replace(/\.body$/, "");
  if (rel.endsWith("/llms.txt") || rel === "/llms.txt") return "/llms.txt";
  if (rel === "/index" || rel === "index") return "/";
  return rel.startsWith("/") ? rel : `/${rel}`;
}

function collect(text, regexes) {
  const found = [];
  for (const re of regexes) {
    re.lastIndex = 0;
    for (const match of text.matchAll(re)) {
      found.push({
        start: match.index,
        end: match.index + match[0].length,
        text: match[0],
      });
    }
  }
  found.sort((a, b) => a.start - b.start || b.end - a.end);
  const merged = [];
  for (const hit of found) {
    const prev = merged[merged.length - 1];
    if (prev && hit.start <= prev.end) {
      prev.end = Math.max(prev.end, hit.end);
      prev.text = text.slice(prev.start, prev.end);
      continue;
    }
    merged.push({ ...hit });
  }
  return merged;
}

function skipClaim(text, hit) {
  const after = text.slice(hit.end, hit.end + 24);
  return /^\s*(?:north|south|east|west|away|radius|circle|trade\s+area)\b/i.test(
    after,
  );
}

function commissionHits(text) {
  const percents = collect(text, [
    /\b\d+(?:\.\d+)?\s*(?:%|percent\b|per\s+cent\b)/gi,
  ]);
  const commissions = collect(text, [/\bcommissions?\b/gi]);
  return percents.filter((percent) =>
    commissions.some((item) => Math.abs(item.start - percent.start) <= 80),
  );
}

function coveredByAllowlist(text, hit, claims) {
  for (const claim of claims) {
    let from = 0;
    while (from <= text.length) {
      const at = text.indexOf(claim.text, from);
      if (at < 0) break;
      const end = at + claim.text.length;
      if (hit.start >= at && hit.end <= end) return claim;
      from = at + 1;
    }
  }
  return null;
}

function snippet(text, hit) {
  const start = Math.max(0, hit.start - 70);
  const end = Math.min(text.length, hit.end + 70);
  return text.slice(start, end).replace(/\s+/g, " ");
}

function loadAllowlist() {
  const data = JSON.parse(readFileSync(allowPath, "utf8"));
  if (!Array.isArray(data.claims)) {
    throw new Error("verified-claims.json needs a claims array");
  }
  return data.claims.filter((entry) => entry && typeof entry.text === "string");
}

function selfTest() {
  const failures = [];
  const check = (name, ok) => {
    if (!ok) failures.push(name);
  };

  const price = (value) => collect(value, PRICE_SOURCES);
  check("rupee digits", price("Under ₹25 lakh").length === 1);
  check("inr with commas", price("quoted INR 50,000").length === 1);
  check("inr compact thousands", price("budget INR50k").length === 1);
  check("inr spaced thousands", price("budget INR 50k").length === 1);
  check("inr inside a word", price("INROADS 50").length === 0);
  check("inr without a figure", price("paid in INR only").length === 0);
  check("rs digits", price("won for Rs 7.83 crore").length === 1);
  check("rs dot", price("quoted Rs. 10").length === 1);
  check("per sq ft", price("sold per sq ft").length === 1);
  check("per sq. ft", price("per sq. ft of flex").length === 1);
  check("two-lakh", price("A two-lakh local flex").length === 1);
  check("eight-crore", price("An eight-crore pitch").length === 1);
  check("2.5 Cr", price("a 2.5 Cr campaign").length === 1);
  check("per month beside a number", price("₹0 but 12 per month").some((h) => /per month/i.test(h.text)));
  check("lakhs without an amount", price("crowds in the lakhs").length === 0);
  check("per square metre", price("charged per square metre").length === 0);
  check("hours.08 is not Rs", price("business hours.08Arun").length === 0);
  check("offers.03 is not Rs", price("the city offers.03Gantry").length === 0);
  check(
    "cost per month with no figure",
    price("How much does a unipole cost per month in India?").length === 0,
  );

  const claims = (value) =>
    collect(value, [CLAIM_SOURCE]).filter((hit) => !skipClaim(value, hit));
  check("percent", claims("100% retention").length === 1);
  check("plus clients", claims("50+ clients").length === 1);
  check("multiplier", claims("2x ROI").length === 1);
  check("market count", claims("across 39 Indian markets").length === 1);
  check("tier-2 is not a count", claims("tier-2 markets").length === 0);
  check("section index", claims("01 Market by market").length === 0);
  check("commute line", claims("appears three times on one commute").length === 0);
  check(
    "fee multiplier",
    claims("penalties set at three times the permission fee").length === 1,
  );
  check("trade-area heuristic", claims("a two-kilometre trade area").length === 0);
  check("circle heuristic", claims("an unexamined three-kilometre circle").length === 0);

  const banned = (value) => collect(value, BANNED);
  check("AKAI", banned("the AKAI logo").length === 1);
  check("Aditya Vision", banned("for Aditya Vision").length === 1);
  check("akai inside a word", banned("akaika").length === 0);

  const office = (value) => collect(value, OFFICE);
  check(
    "office line",
    office("Office: Cyber Hub, Gurugram, Haryana").length === 1,
  );
  check(
    "schema locality",
    office('"addressLocality":"Gurugram"').length === 1,
  );
  check(
    "headquartered",
    office("headquartered in Gurgaon").length === 1,
  );
  check(
    "market copy",
    office(
      "Outdoor advertising in Delhi NCR: hoardings across Delhi, Gurugram and Noida.",
    ).length === 0,
  );
  check(
    "office district",
    office("GurugramOffice-district hour. Weight belongs here.").length === 0,
  );
  check(
    "office audience far from the city name",
    office(
      "Gurugram's Cyber City holds corporate incomes. Connaught Place and Nehru Place reach office and trade audiences much further along the same answer.",
    ).length === 0,
  );

  const sample = "We plan across 39 Indian markets from Kanpur.";
  const phrase = "39 Indian markets";
  const at = sample.indexOf(phrase);
  const allowed = coveredByAllowlist(
    sample,
    { start: at, end: at + phrase.length, text: phrase },
    [{ text: phrase, source: "market count" }],
  );
  check("allowlist covers the count", Boolean(allowed));
  const other = "We claim 100% retention.";
  const percentAt = other.indexOf("100%");
  const missed = coveredByAllowlist(
    other,
    { start: percentAt, end: percentAt + 4, text: "100%" },
    [{ text: phrase, source: "market count" }],
  );
  check("allowlist does not cover a different claim", !missed);
  check(
    "commission percentage",
    commissionHits("Our commission is 15% of media.").length === 1,
  );
  check(
    "commission the verb",
    commissionHits("Do not commission Rajasthani-language creative.").length === 0,
  );

  if (failures.length) {
    console.error("self-test failed:");
    for (const name of failures) console.error(`  - ${name}`);
    process.exit(1);
  }
}

function publishedFiles() {
  return walk(buildDir).filter((file) => {
    if (file.includes("opengraph")) return false;
    if (file.endsWith("_global-error.html")) return false;
    if (file.endsWith(".html")) return true;
    return file.endsWith("llms.txt.body");
  });
}

function main() {
  selfTest();
  let claims;
  try {
    claims = loadAllowlist();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }

  let files;
  try {
    files = publishedFiles();
  } catch {
    console.error("No build output at .next/server/app. Run next build first.");
    process.exit(1);
  }
  if (files.length === 0) {
    console.error("No published pages in .next/server/app. Run next build first.");
    process.exit(1);
  }

  const problems = [];
  const present = new Set();

  for (const file of files) {
    const raw = readFileSync(file, "utf8");
    const text = file.endsWith(".body")
      ? decode(raw).replace(/\s+/g, " ").trim()
      : visibleText(raw);
    for (const entry of claims) {
      if (text.includes(entry.text)) present.add(entry.text);
    }
    const path = pagePath(file);
    const pageProblems = [];

    for (const hit of collect(text, PRICE_SOURCES)) {
      pageProblems.push({ kind: "price", hit });
    }
    for (const hit of collect(text, BANNED)) {
      pageProblems.push({ kind: "banned-name", hit });
    }
    for (const hit of collect(text, OFFICE)) {
      pageProblems.push({ kind: "office-address", hit });
    }

    for (const hit of commissionHits(text)) {
      pageProblems.push({ kind: "commission", hit });
    }

    const priceSpans = pageProblems
      .filter((item) => item.kind === "price")
      .map((item) => item.hit);
    for (const hit of collect(text, [CLAIM_SOURCE])) {
      if (skipClaim(text, hit)) continue;
      if (priceSpans.some((price) => hit.start >= price.start && hit.end <= price.end)) {
        continue;
      }
      if (coveredByAllowlist(text, hit, claims)) continue;
      pageProblems.push({ kind: "unverified", hit });
    }

    if (pageProblems.length) problems.push({ path, text, pageProblems });
  }

  if (problems.length === 0) {
    console.log(
      `Published pages are clear (${files.length} files, ${claims.length} allowlisted claims).`,
    );
    return;
  }

  console.error(
    `Published-page check failed on ${problems.length} page${problems.length === 1 ? "" : "s"}.`,
  );
  for (const page of problems) {
    console.error(`\n${page.path}`);
    const seen = new Set();
    for (const item of page.pageProblems) {
      const key = `${item.kind}|${item.hit.text}`;
      if (seen.has(key)) continue;
      seen.add(key);
      console.error(`  ${item.kind}: ${item.hit.text}`);
      console.error(`    ${snippet(page.text, item.hit)}`);
    }
  }
  const missing = claims.filter((entry) => !present.has(entry.text));
  if (missing.length) {
    console.error(
      `\n${missing.length} allowlist entr${missing.length === 1 ? "y is" : "ies are"} not on a published page:`,
    );
    for (const entry of missing) console.error(`  - ${entry.text.slice(0, 120)}`);
  }
  process.exit(1);
}

main();
