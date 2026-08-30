#!/usr/bin/env node
/**
 * Assert every URL in the live (pre-cutover) sitemap either still exists
 * on this IA or has a permanent redirect in cutover-redirects.json.
 *
 * Snapshot taken 30 Aug 2026 from https://bizex4u.com/sitemap.xml.
 * Pass --fetch to refresh the list from production (requires network).
 *
 * Usage: node scripts/assert-cutover.mjs
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const cutover = JSON.parse(
  readFileSync(join(root, "cutover-redirects.json"), "utf8"),
);

/** Pages that exist on both IAs — no redirect required. */
const CURRENT_PAGES = new Set(["/", "/about", "/contact"]);

/**
 * Live sitemap paths as fetched 30 Aug 2026.
 * 46 loc entries; /, /about, /contact carry over.
 */
const LIVE_SITEMAP_PATHS = [
  "/",
  "/about",
  "/channels",
  "/how-it-works",
  "/contact",
  "/trust",
  "/blog",
  "/barter-advertising",
  "/outdoor-advertising",
  "/metro-branding",
  "/airport-advertising",
  "/dooh-advertising",
  "/airport-advertising-delhi",
  "/airport-advertising-mumbai",
  "/airport-advertising-bangalore",
  "/delhi-metro-advertising",
  "/mumbai-metro-advertising",
  "/gurgaon-hoardings",
  "/noida-hoardings",
  "/delhi-billboard-advertising",
  "/gurgaon-dooh-advertising",
  "/bangalore-dooh-advertising",
  "/advertising-for-fmcg-brands",
  "/advertising-for-d2c-brands",
  "/advertising-for-real-estate",
  "/resources/airport-advertising-media-kit",
  "/resources/metro-branding-media-kit",
  "/resources/barter-advertising-playbook",
  "/resources/dooh-advertising-media-kit",
  "/blog/welcome-to-bizex4u",
  "/blog/atl-vs-btl-advertising-india",
  "/blog/how-brands-save-costs-using-inventory-barter",
  "/blog/cash-vs-barter-explained",
  "/blog/mumbai-airport-advertising-guide",
  "/blog/airport-advertising-cost-india-2026",
  "/blog/delhi-metro-advertising-cost",
  "/blog/ooh-vs-dooh",
  "/blog/barter-advertising-india-guide",
  "/blog/how-fmcg-brands-use-barter",
  "/blog/outdoor-advertising-india-buyers-playbook",
  "/blog/dooh-advertising-india-guide",
  "/blog/media-buying-agency-india",
  "/blog/airport-advertising-roi",
  "/blog/transit-advertising-india",
  "/blog/mall-branding-india",
  "/blog/cinema-advertising-india",
];

const pathToDestination = new Map(
  cutover.paths.map((r) => [r.source, r.destination]),
);

const pathnameOf = (loc) => {
  const u = new URL(loc, "https://bizex4u.com");
  return u.pathname.replace(/\/+$/, "") || "/";
};

const loadLivePaths = async () => {
  if (!process.argv.includes("--fetch")) return LIVE_SITEMAP_PATHS;
  const res = await fetch("https://bizex4u.com/sitemap.xml");
  if (!res.ok) {
    throw new Error(`Failed to fetch live sitemap: ${res.status}`);
  }
  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) =>
    pathnameOf(m[1]),
  );
  if (locs.length === 0) throw new Error("Live sitemap contained no <loc>s");
  return locs;
};

const paths = await loadLivePaths();
const missing = [];
const covered = [];

for (const path of paths) {
  if (CURRENT_PAGES.has(path)) {
    covered.push({ path, via: "current-page" });
    continue;
  }
  const dest = pathToDestination.get(path);
  if (dest) {
    covered.push({ path, via: `redirect → ${dest}` });
    continue;
  }
  missing.push(path);
}

if (missing.length) {
  console.error("Cutover gaps — these live sitemap URLs would 404:\n");
  for (const p of missing) console.error(`  ${p}`);
  console.error(
    `\n${missing.length} uncovered, ${covered.length} covered, ${paths.length} in sitemap.`,
  );
  process.exit(1);
}

console.log(
  `Cutover complete: ${covered.length}/${paths.length} live sitemap URLs resolve or redirect.`,
);
console.log(`Redirect rules: ${cutover.paths.length}.`);
