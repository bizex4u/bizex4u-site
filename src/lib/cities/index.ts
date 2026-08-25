/* The city register.

   Adding a city: write a file next to this one, import it, put it in the
   array. The route, the hub listing, the sitemap and the schema all
   generate from here. Read types.ts first — the rules in it are the
   reason these pages can exist at all. */

import type { City } from "./types";

import { kanpur } from "./kanpur";
import { lucknow } from "./lucknow";
import { varanasi } from "./varanasi";
import { kolkata } from "./kolkata";
import { hyderabad } from "./hyderabad";
import { chennai } from "./chennai";
import { pune } from "./pune";

export type { City } from "./types";

/* Ordered so the home market leads and the rest read as a plan rather
   than as an alphabet. */
export const cities: City[] = [
  kanpur,
  lucknow,
  varanasi,
  kolkata,
  hyderabad,
  chennai,
  pune,
];

export const cityBySlug = (slug: string) => cities.find((c) => c.slug === slug);

/* Markets we plan in that do not yet have a written page.

   Listed honestly as plain text rather than linked to a thin one. A
   near-duplicate city page with the name swapped is worse than no page:
   it reads as filler to a human and as thin content to a search engine,
   and it drags the pages that are real down with it. These get written
   properly or they stay as text. */
export const additionalMarkets = [
  "Delhi NCR",
  "Mumbai",
  "Bangalore",
  "Ahmedabad",
  "Jaipur",
  "Surat",
  "Chandigarh",
  "Nagpur",
  "Indore",
  "Bhopal",
  "Patna",
  "Kochi",
  "Coimbatore",
  "Agra",
  "Ludhiana",
  "Meerut",
  "Prayagraj",
  "Gorakhpur",
];

/* Region groupings for the hub page. */
export const regions = ["North", "West", "South", "East", "Central"] as const;
