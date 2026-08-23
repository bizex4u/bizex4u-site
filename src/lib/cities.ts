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
  /* 02b — Where the crowds actually are.
     Named public places with a reason each one is busy. This is the
     section a local reads to decide whether we know their city.
     Describe the place and its crowd — NEVER a site, a structure we
     hold, a count or an availability. */
  crowdPlaces: { place: string; note: string }[];
  /* 02c — The local press and radio that carry the market.
     Mastheads and stations by name. No circulation figures and no
     listenership figures: those are licensed research numbers and we
     do not have the right to publish them. Character of the audience
     only. */
  localMedia: {
    press: { title: string; language: string; note: string }[];
    radio: { station: string; note: string }[];
    radioNote: string;
  };
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
    crowdPlaces: [
      {
        place: "Gariahat",
        note: "The city's most concentrated street-retail crowd. Pavement stalls and established stores share the same footpath, and the density peaks on weekend evenings and through the Durga Puja shopping weeks.",
      },
      {
        place: "New Market and Esplanade",
        note: "Central Kolkata's oldest shopping district, sitting directly on top of the bus and metro interchange. The crowd is broad rather than affluent — it is where the whole city converges rather than where any one segment lives.",
      },
      {
        place: "Howrah Bridge and the station approach",
        note: "One of the busiest crossings in the country. An enormous commuter population from across the river funnels through a narrow set of decision points every morning and back again every evening.",
      },
      {
        place: "Sealdah",
        note: "The suburban rail gateway for the eastern districts. Volume here is daily, repetitive and largely the same faces — a frequency audience rather than a reach one.",
      },
      {
        place: "Park Street and Camac Street",
        note: "Discretionary spending and eating out. The crowd is younger and higher-income, it arrives in the evening, and it stays long enough to notice things.",
      },
      {
        place: "Salt Lake Sector V",
        note: "The IT and services district. A predictable weekday population, heavily concentrated at commute hours and at lunch, and almost empty at the weekend.",
      },
      {
        place: "Dakshinapan and Rashbehari",
        note: "South Kolkata's settled residential retail belt — older, locally rooted households who shop close to home and respond to neighbourhood presence far more than to city-wide weight.",
      },
      {
        place: "Maidan and the Eden Gardens approach",
        note: "Ordinary daily crowds through the week, then very large event crowds on match days and through the winter fair and festival calendar.",
      },
    ],
    localMedia: {
      press: [
        {
          title: "Anandabazar Patrika",
          language: "Bengali",
          note: "The masthead with the deepest standing in the state. Being in it carries an implicit local credibility that an English title cannot transfer.",
        },
        {
          title: "Bartaman",
          language: "Bengali",
          note: "Strong household readership with a notably loyal, older reader base across the city and the districts.",
        },
        {
          title: "Sangbad Pratidin",
          language: "Bengali",
          note: "Widely read, with a lighter and more contemporary register than the older Bengali titles.",
        },
        {
          title: "Ei Samay",
          language: "Bengali",
          note: "The newer Bengali daily, skewing urban and younger than the established mastheads.",
        },
        {
          title: "The Telegraph",
          language: "English",
          note: "The English title with genuine Kolkata identity rather than a national edition dropped into the city.",
        },
        {
          title: "The Times of India, Kolkata",
          language: "English",
          note: "Reaches the corporate and expatriate-professional audience, particularly in Salt Lake and New Town.",
        },
      ],
      radio: [
        { station: "Radio Mirchi 98.3", note: "Bengali-language mainstream." },
        { station: "Red FM 93.5", note: "Bengali, younger and more irreverent." },
        { station: "Friends FM 91.9", note: "Bengali, long-established locally." },
        { station: "Big FM 92.7", note: "Broad-appeal mainstream." },
        { station: "Fever 104", note: "Skews urban and English-comfortable." },
        { station: "Radio One 94.3", note: "Urban, English-leaning playlist." },
        {
          station: "Akashvani Kolkata",
          note: "Public service, on several frequencies, with real reach outside the metro core.",
        },
      ],
      radioNote:
        "Radio in Kolkata is a drive-time medium and a Bengali-language one. The commercial stations do their real work between roughly seven and eleven in the morning and five and nine in the evening, when the city is in a vehicle. Station branding and frequencies do change, so we confirm what is on air at the point of buying rather than working from a list.",
    },
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
