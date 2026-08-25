/* ------------------------------------------------------------------
   The shape of a city page.

   RULES, enforced by content and not by code. Read them before adding
   a city — they are the reason this company can publish city pages at
   all when most of the competition cannot.

   1. Never list inventory, site counts, locations held, rates or
      availability. Describe the market. Not the stock.

   2. Never publish a number that is licensed research. No circulation
      figures, no listenership figures, no footfall counts. Those are
      BARC / IRS / RAM numbers and we do not have the right to print
      them. Character of the audience only.

   3. Never publish a rate, a price band, or a "starting from". The
      whole `costDrivers` section exists so we can rank for cost intent
      without ever answering it with a number. There is a large body of
      search demand for "hoarding advertising cost in <city>" and every
      competitor serves it with a rate card. We serve it with the
      variables instead, and say plainly why.

   4. Every city gets genuinely different prose. Never the same
      paragraph with the city name swapped. Readers notice, and so does
      Google — near-duplicate templated pages are the single most
      common reason a city-page network gets classed as thin content.

   5. Nothing goes in that is not verified. Every FM frequency and
      every masthead on these pages was checked against the Ministry of
      Information & Broadcasting's operational-channels list or the
      publisher's own edition pages. Frequencies are NOT constant
      between cities — Big FM is 92.7 in Kanpur and 95.0 in Pune;
      95.0 is Fever in Kanpur and Big FM in Varanasi. Copying a station
      table between two city files is how you publish the one error a
      local reader will definitely catch.

   Adding a city: write a file next to this one and register it in
   index.ts. The route, hub listing, sitemap and schema all generate
   from there.
------------------------------------------------------------------- */

export type City = {
  slug: string;
  name: string;
  /* Where the name needs a qualifier in prose — "Bengaluru (Bangalore)".
     Also fed to schema as alternateName so both spellings resolve. */
  alsoKnownAs?: string[];
  state: string;
  region: "North" | "West" | "South" | "East" | "Central";

  /* Meta -------------------------------------------------------
     metaTitle hedges two terms deliberately. The pages that rank for
     this intent in India all carry both "hoarding" and "outdoor
     advertising" — or "hoarding" and "billboard" — because Indian
     buyers use them interchangeably and neither alone covers the
     query space. */
  metaTitle: string;
  metaDescription: string;

  /* Hero -------------------------------------------------------
     h1Lead + h1Accent compose the visible H1. Keep the whole thing
     reading as "Outdoor advertising in <City>" or near it — the H1
     is the single strongest on-page signal and a clever headline
     that omits the city is a clever headline that does not rank. */
  h1Lead: string;
  h1Accent: string;
  heroLede: string;

  /* 01 — The market: 4 paragraphs, specific to this city -------- */
  market: string[];

  /* 02 — Where the crowds actually are.
     Named public places with a reason each one is busy. This is the
     section a local reads to decide whether we know their city.
     Describe the place and its crowd — NEVER a site, a structure we
     hold, a count or an availability. */
  crowdPlaces: { place: string; note: string }[];

  /* 03 — The format guide.
     The long-tail layer. Each entry is an H3 that answers a real
     query — "hoarding advertising in <city>", "bus queue shelter
     advertising in <city>", "LED screen advertising in <city>" — and
     the body has to be about THIS city, not about the format in
     general. A generic paragraph about what a unipole is helps
     nobody and ranks nowhere.

     Use the Indian vocabulary. Hoarding, not billboard, as the noun.
     Unipole, not monopole. Bus queue shelter or BQS, not bus stop.
     Pole kiosk. Gantry. Lift branding. Auto branding. These are the
     terms with real Indian search demand and almost no international
     competition. */
  formatGuide: { title: string; kicker: string; body: string }[];

  /* 04 — The local press and radio that carry the market.
     Mastheads and stations by name. See rule 2 and rule 5. */
  localMedia: {
    press: { title: string; language: string; note: string }[];
    radio: { station: string; frequency: string; note: string }[];
    radioNote: string;
  };

  /* 05 — Transit media in this city.
     Metro, suburban rail, bus, airport. Where a media concession is
     a matter of public record we can name it; where it is not, we
     say so rather than implying a relationship. */
  transit: {
    lede: string;
    modes: { mode: string; note: string }[];
  };

  /* 06 — What actually drives the cost here.
     No numbers. Ever. See rule 3. The `note` on each factor should
     be city-specific — "which side of the Bypass" means something in
     Kolkata and nothing in Coimbatore. */
  costDrivers: { factor: string; note: string }[];

  /* 07 — Permissions and compliance.
     The licensing authority, and what is actually documented. This
     is ground the inventory owners cannot take, because writing
     honestly about permission is against their interest and squarely
     in ours. Where we could not verify a rule, we say we could not —
     never assert a bye-law we have not read. */
  compliance: {
    authority: string;
    body: string[];
  };

  /* 08 — The calendar. When this city's attention spikes. */
  season: { window: string; note: string }[];

  /* 09 — How we plan it ---------------------------------------- */
  planning: string;

  /* 10 — FAQ, rendered with FAQPage schema.
     Ten to twelve. Shaped around the questions that actually appear
     in People Also Ask for Indian OOH — cost, effectiveness,
     duration, permission, measurement, proof of execution. A cost
     question is allowed and wanted; the ANSWER just never contains a
     number. Capturing the query does not require answering it with a
     rate. */
  faq: { q: string; a: string }[];

  /* 11 — Nearby markets ---------------------------------------- */
  nearby: string[];
};
