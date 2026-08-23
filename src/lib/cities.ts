/* ------------------------------------------------------------------
   City pages.

   RULES, enforced by content not by code:
   1. Never list inventory, site counts, locations, rates or availability.
      Describe the market. Not the stock.
   2. Every city gets genuinely different prose. Never the same paragraph
      with the city name swapped — search engines and readers both notice.

   Adding a city: append an entry below. The route, hub listing, sitemap
   and schema all generate from this file.
------------------------------------------------------------------- */

export type City = {
  slug: string;
  name: string;
  state: string;
  region: "North" | "West" | "South" | "East";
  /* Meta ------------------------------------------------------- */
  metaTitle: string;
  metaDescription: string;
  /* Hero ------------------------------------------------------- */
  heroLede: string;
  /* 01 — The market: 3–4 paragraphs, specific to this city ------ */
  market: string[];
  /* 02 — Format categories planned here (names only) ------------ */
  formats: { title: string; note: string }[];
  /* 03 — How we plan it ---------------------------------------- */
  planning: string;
  /* 05 — FAQ, rendered with FAQPage schema ---------------------- */
  faq: { q: string; a: string }[];
  /* 06 — Nearby markets ---------------------------------------- */
  nearby: string[];
};

export const cities: City[] = [
  {
    slug: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    region: "East",
    metaTitle: "Advertising in Kolkata | Outdoor, Retail & Transit Media | Bizex4U",
    metaDescription:
      "Outdoor, digital, retail and transit advertising in Kolkata, planned from catchment data. Independent Indian media network, planning outdoor across 40+ cities.",
    heroLede:
      "Kolkata is a corridor city. Attention concentrates along a handful of routes that almost everyone uses, which makes the difference between a good buy and a wasted one unusually sharp.",
    market: [
      "Kolkata moves along lines rather than across a grid. The EM Bypass carries the eastern spine of the city, the AJC Bose and Maa flyovers absorb the north–south load, and the Howrah approach funnels an entire commuter population through a small number of decision points every morning. A plan that ignores those lines buys impressions; a plan built around them buys frequency against the same audience day after day.",
      "The audience is not evenly distributed either. Salt Lake Sector V and New Town hold the working professional population and skew younger and higher-income, with predictable weekday movement. Park Street, Camac Street and Gariahat carry discretionary retail footfall that peaks in the evenings and at weekends. North Kolkata behaves differently again — older, denser, more locally rooted, and far more responsive to neighbourhood-level presence than to city-wide weight.",
      "Metro expansion has changed the map in the last few years. Corridors that were peripheral now carry daily commuter volume, and catchments that were considered outer Kolkata are functionally part of the core. Planning from a two-year-old view of the city produces measurably worse results than planning from the current one.",
      "Kolkata also rewards patience. It is a market where brand familiarity compounds and where a short burst rarely does much. Campaigns here tend to work better as sustained presence in fewer, better-chosen locations than as a wide sweep bought for a fortnight.",
    ],
    formats: [
      {
        title: "Outdoor & Transit",
        note: "Large format along the primary corridors, plus bus and cab media following commuter routes.",
      },
      {
        title: "Digital Out-of-Home",
        note: "Screen networks in the commercial districts, bought by daypart.",
      },
      {
        title: "Retail & Hyperlocal",
        note: "Mall, multiplex and residential media inside defined store catchments.",
      },
      {
        title: "Broadcast, Print & Cinema",
        note: "Bengali and English news, radio drive-time, regional dailies and on-screen.",
      },
      {
        title: "Activations",
        note: "Ground presence in high-footfall retail and residential clusters.",
      },
    ],
    planning:
      "We plan Kolkata from the catchment outwards. Before any site list exists we map the trade area around each priority location — who lives and works inside it, how they move through the week, and how dense the category already is — and the plan follows that map. In practice that usually means fewer sites than a conventional proposal would offer, held for longer, positioned against movement rather than against footfall counts.",
    faq: [
      {
        q: "Which parts of Kolkata work best for outdoor advertising?",
        a: "It depends entirely on who you are trying to reach. The EM Bypass and the Howrah approach deliver commuter volume; Park Street, Camac Street and Gariahat deliver discretionary retail audiences; Salt Lake Sector V and New Town deliver a working professional population. We would rather establish the audience first and then recommend the corridor than lead with a location list.",
      },
      {
        q: "Can a campaign be limited to a specific neighbourhood?",
        a: "Yes. Hyperlocal planning is often the stronger option in Kolkata, particularly for retail brands with a defined trade area. We work from the catchment around your store or cluster rather than from city-level reach.",
      },
      {
        q: "How long should a Kolkata campaign run?",
        a: "Longer than most markets. Familiarity compounds here and short bursts tend to underperform. We normally recommend sustained presence in a smaller set of locations over a wide, short buy.",
      },
      {
        q: "Do you handle Bengali-language creative and media?",
        a: "We plan and buy across Bengali and English media, and we will flag where language choice materially changes performance. Creative adaptation is coordinated with your agency or handled in-house where you need it.",
      },
    ],
    nearby: ["Patna", "Bhubaneswar", "Guwahati", "Ranchi"],
  },
];

export const cityBySlug = (slug: string) => cities.find((c) => c.slug === slug);

/* Markets we plan in that do not yet have a written page.
   Listed honestly as text rather than linked to a thin page. */
export const additionalMarkets = [
  "Delhi NCR",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Ahmedabad",
  "Lucknow",
  "Jaipur",
  "Chandigarh",
  "Agra",
  "Meerut",
  "Patna",
  "Indore",
  "Kochi",
];
