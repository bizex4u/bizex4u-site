/* The glossary register.

   Adding a term: write it into one of the themed files beside this
   one, import it, put it in the array. The route, the hub listing,
   the sitemap, llms.txt and the schema all generate from here. Read
   types.ts first — the rules in it are why this section can exist
   without touching the constraints the rest of the site works under.

   ORDER IS ALPHABETICAL BY TERM, not by category and not by
   importance. A glossary is a reference: somebody arrives knowing the
   word and wanting the meaning, so the only ordering that helps is
   the one they can predict. The hub groups by first letter on top of
   this order. */

import type { Term } from "./types";

import {
  busQueueShelter,
  gantry,
  hoarding,
  poleKiosk,
  unipole,
} from "./formats";
import { dooh, loop } from "./digital";
import {
  flexingAndMounting,
  illumination,
  monitoringPhotographs,
} from "./production";
import { mediaBarter, reciprocalTradeAgreement } from "./trade";
import { advertisementTax, skySign } from "./compliance";

export type { Term, TermCategory } from "./types";

export const terms: Term[] = [
  advertisementTax,
  busQueueShelter,
  dooh,
  flexingAndMounting,
  gantry,
  hoarding,
  illumination,
  loop,
  mediaBarter,
  monitoringPhotographs,
  poleKiosk,
  reciprocalTradeAgreement,
  skySign,
  unipole,
].sort((a, b) => a.term.localeCompare(b.term, "en"));

export const termBySlug = (slug: string) => terms.find((t) => t.slug === slug);

/* Grouped by initial for the hub. Built from the register rather than
   hand-maintained, so a new term appears under its letter without
   anybody remembering to add it. */
export const termsByLetter = () => {
  const map = new Map<string, Term[]>();
  for (const t of terms) {
    const letter = t.term[0].toUpperCase();
    map.set(letter, [...(map.get(letter) ?? []), t]);
  }
  return [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
};

/* Terms grouped by what they are about, for the "read these together"
   rail. Categories are declared on the term rather than derived, so a
   term can be moved without touching this file. */
export const categories = [
  "Formats",
  "Digital",
  "Production",
  "Trade",
  "Compliance",
] as const;

export const termsInCategory = (c: string) =>
  terms.filter((t) => t.category === c);

/* Every related slug a term points at must exist. A glossary whose
   cross-references 404 is worse than one with none — it is the exact
   signal of a page generated rather than written. Thrown at module
   load so it fails the build, not the crawl. */
const slugs = new Set(terms.map((t) => t.slug));
for (const t of terms) {
  for (const r of t.related) {
    if (!slugs.has(r)) {
      throw new Error(
        `Glossary: "${t.slug}" links to "${r}", which is not a registered term.`,
      );
    }
  }
  if (t.related.includes(t.slug)) {
    throw new Error(`Glossary: "${t.slug}" links to itself.`);
  }
}

/* Terms that mention a given city, for the rail on a city page. Keeps
   the dependency pointing one way — the glossary knows about cities,
   the city pages do not have to know about the glossary. */
export const termsForCity = (citySlug: string) =>
  terms.filter((t) => t.cities?.includes(citySlug));

/* Terms a capability page actually uses in its copy. Declared here
   rather than on every term, so a new glossary entry does not have to
   know about /what-we-do, and a dangling slug fails the build. */
const termsByCapability: Record<string, string[]> = {
  "outdoor-transit": [
    "hoarding",
    "unipole",
    "gantry",
    "bus-queue-shelter",
    "pole-kiosk",
    "sky-sign",
    "advertisement-tax",
    "flexing-and-mounting",
    "illumination",
    "monitoring-photographs",
  ],
  dooh: ["dooh", "loop", "illumination", "monitoring-photographs", "hoarding"],
  "retail-hyperlocal": [
    "pole-kiosk",
    "illumination",
    "monitoring-photographs",
    "advertisement-tax",
    "sky-sign",
    "flexing-and-mounting",
  ],
  "broadcast-print-cinema": [
    "monitoring-photographs",
    "illumination",
    "advertisement-tax",
    "hoarding",
    "sky-sign",
  ],
  activations: [
    "monitoring-photographs",
    "pole-kiosk",
    "gantry",
    "flexing-and-mounting",
    "media-barter",
  ],
};

for (const [cap, list] of Object.entries(termsByCapability)) {
  for (const s of list) {
    if (!slugs.has(s)) {
      throw new Error(
        `Glossary: capability "${cap}" links to "${s}", which is not a registered term.`,
      );
    }
  }
}

export const termsForCapability = (capabilitySlug: string) => {
  const list = termsByCapability[capabilitySlug] ?? [];
  return list
    .map((s) => terms.find((t) => t.slug === s))
    .filter((t): t is Term => Boolean(t));
};
