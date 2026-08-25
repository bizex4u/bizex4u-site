/* The city register.

   Adding a city: write a file next to this one, import it, put it in the
   array. The route, the hub listing, the sitemap and the schema all
   generate from here. Read types.ts first — the rules in it are the
   reason these pages can exist at all. */

import type { City } from "./types";

import { delhiNcr } from "./delhi-ncr";
import { kanpur } from "./kanpur";
import { lucknow } from "./lucknow";
import { varanasi } from "./varanasi";
import { jaipur } from "./jaipur";
import { chandigarh } from "./chandigarh";
import { ludhiana } from "./ludhiana";
import { agra } from "./agra";
import { kolkata } from "./kolkata";
import { mumbai } from "./mumbai";
import { pune } from "./pune";
import { nagpur } from "./nagpur";
import { ahmedabad } from "./ahmedabad";
import { surat } from "./surat";
import { indore } from "./indore";
import { bhopal } from "./bhopal";
import { bangalore } from "./bangalore";
import { hyderabad } from "./hyderabad";
import { chennai } from "./chennai";

export type { City } from "./types";

/* Ordered so the home market leads and the rest read as a plan rather
   than as an alphabet. */
export const cities: City[] = [
  kanpur,
  lucknow,
  varanasi,
  delhiNcr,
  jaipur,
  chandigarh,
  ludhiana,
  agra,
  mumbai,
  pune,
  nagpur,
  ahmedabad,
  surat,
  indore,
  bhopal,
  bangalore,
  hyderabad,
  chennai,
  kolkata,
];

export const cityBySlug = (slug: string) => cities.find((c) => c.slug === slug);

/* Markets we plan in that do not yet have a written page.

   Listed honestly as plain text rather than linked to a thin one. A
   near-duplicate city page with the name swapped is worse than no page:
   it reads as filler to a human and as thin content to a search engine,
   and it drags the pages that are real down with it. These get written
   properly or they stay as text. */
export const additionalMarkets = [
  "Patna",
  "Kochi",
  "Coimbatore",
  "Vadodara",
  "Rajkot",
  "Nashik",
  "Meerut",
  "Prayagraj",
  "Gorakhpur",
  "Jodhpur",
  "Udaipur",
  "Amritsar",
  "Jalandhar",
  "Guwahati",
  "Bhubaneswar",
  "Raipur",
  "Visakhapatnam",
  "Vijayawada",
  "Madurai",
  "Mysuru",
];

/* Region groupings for the hub page. */
export const regions = ["North", "West", "South", "East", "Central"] as const;
