#!/usr/bin/env node
/**
 * One-off page metrics. Not a test suite. Do not add playwright to
 * package.json — invoke with: npx playwright install chromium &&
 * node scripts/measure-pages.mjs [before|after]
 */
import { chromium } from "playwright";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const label = process.argv[2] ?? "measure";
const base = process.env.BASE_URL ?? "http://localhost:3000";
const pages = [
  "/what-we-do",
  "/what-we-do/outdoor-transit",
  "/what-we-do/dooh",
  "/what-we-do/retail-hyperlocal",
  "/what-we-do/broadcast-print-cinema",
  "/what-we-do/activations",
];
const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

const measure = () => {
  const words = (document.body.innerText || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const visualSel =
    "img, [data-visual], [data-plate], svg:not([aria-hidden='true'])";
  const visuals = [...document.querySelectorAll(visualSel)].filter((el) => {
    const r = el.getBoundingClientRect();
    return r.width > 8 && r.height > 8;
  });
  const first = visuals[0];
  const firstTop = first
    ? first.getBoundingClientRect().top + window.scrollY
    : null;

  const sections = [...document.querySelectorAll("main section, body > div section, section")];
  let run = 0;
  let longest = 0;
  for (const s of sections) {
    const hasVisual = s.querySelector(visualSel);
    if (hasVisual) {
      run = 0;
    } else {
      run += 1;
      longest = Math.max(longest, run);
    }
  }

  const relLuminance = (r, g, b) => {
    const f = (c) => {
      c /= 255;
      return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const parseRgb = (s) => {
    const m = s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    return m ? [+m[1], +m[2], +m[3]] : null;
  };
  const contrast = (fg, bg) => {
    const a = parseRgb(fg);
    const b = parseRgb(bg);
    if (!a || !b) return null;
    const L1 = relLuminance(...a);
    const L2 = relLuminance(...b);
    const [hi, lo] = L1 > L2 ? [L1, L2] : [L2, L1];
    return Math.round(((hi + 0.05) / (lo + 0.05)) * 100) / 100;
  };
  const solidBg = (el) => {
    let n = el;
    while (n && n !== document.documentElement) {
      const bg = getComputedStyle(n).backgroundColor;
      const rgb = parseRgb(bg);
      if (rgb && !bg.includes("0)")) return bg;
      n = n.parentElement;
    }
    return getComputedStyle(document.body).backgroundColor;
  };

  const accents = [...document.querySelectorAll("*")].filter((el) => {
    if (el.children.length > 4) return false;
    const t = (el.textContent || "").trim();
    if (!t || t.length > 80) return false;
    const c = getComputedStyle(el).color;
    const rgb = parseRgb(c);
    if (!rgb) return false;
    const [r, g, b] = rgb;
    const isViolet = (r > 60 && b > 140 && r < 180 && g < 160) ||
      (r > 130 && b > 200 && g > 100 && g < 200);
    return isViolet;
  });
  const accentContrast = accents.slice(0, 24).map((el) => {
    const cs = getComputedStyle(el);
    const bg = solidBg(el);
    return {
      text: (el.textContent || "").trim().slice(0, 40),
      color: cs.color,
      background: bg,
      ratio: contrast(cs.color, bg),
    };
  });

  const tapFails = [...document.querySelectorAll("a, button, summary, [role='button']")]
    .map((el) => {
      const r = el.getBoundingClientRect();
      return { tag: el.tagName, w: Math.round(r.width), h: Math.round(r.height), text: (el.textContent || "").trim().slice(0, 40) };
    })
    .filter((t) => t.w > 0 && t.h > 0 && (t.w < 24 || t.h < 24));

  return {
    scrollHeight: document.documentElement.scrollHeight,
    scrollWidth: document.documentElement.scrollWidth,
    viewport: { w: window.innerWidth, h: window.innerHeight },
    overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
    words,
    visuals: visuals.length,
    firstVisualPx: firstTop === null ? null : Math.round(firstTop),
    longestTextOnlyRun: longest,
    accentContrast,
    tapFails: tapFails.slice(0, 20),
    tapFailCount: tapFails.length,
  };
};

const outDir = join(dirname(fileURLToPath(import.meta.url)), "..", ".measure");
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH,
  headless: true,
});

const results = [];
for (const motion of ["no-preference", "reduce"]) {
  for (const vp of viewports) {
    for (const path of pages) {
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        colorScheme: "light",
        reducedMotion: motion === "reduce" ? "reduce" : "no-preference",
      });
      const page = await context.newPage();
      await page.goto(base + path, { waitUntil: "networkidle", timeout: 60000 });
      await page.waitForTimeout(400);
      const metrics = await page.evaluate(measure);
      results.push({ label, path, viewport: vp.name, motion, ...metrics });
      await context.close();
      console.log(
        `${label} ${path} ${vp.name} ${motion} h=${metrics.scrollHeight} words=${metrics.words} vis=${metrics.visuals} first=${metrics.firstVisualPx} overflow=${metrics.overflow} taps=${metrics.tapFailCount}`,
      );
    }
  }
}

await browser.close();
const dest = join(outDir, `${label}.json`);
writeFileSync(dest, JSON.stringify(results, null, 2));
console.log("wrote", dest);
