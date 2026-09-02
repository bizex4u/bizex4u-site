import { cities, marketCount } from "./cities";

const linkedinCompany = "https://www.linkedin.com/company/bizex4u";

export const site = {
  name: "Bizex4U",
  wordmark: "BIZEX4U",
  url: "https://bizex4u.com",
  tagline: "We help brands make better OOH media decisions.",
  description:
    "Independent OOH media planning and buying in India. We do not own inventory. We plan across owners, negotiate, run the campaign and document delivery.",
  email: "yash@bizex4u.com",
  /* Desk notification list. Used only by /api/brief (server). Not a
     public byline — replies still come from `email` above. */
  notifyEmails: ["yash@bizex4u.com", "vansh@bizex4u.com"] as const,
  legalName: "BIZEX 4 U NETWORK PRIVATE LIMITED",
  address: {
    line1: "Mona Enclave",
    line2: "Kanpur, Uttar Pradesh",
    country: "India",
  },
  linkedin: linkedinCompany,
  phone: {
    e164: "+917080382224",
    display: "+91 70803 82224",
    whatsappDigits: "917080382224",
  },
  sla: {
    acknowledge: "We acknowledge a brief within one working day.",
    plan: "A first plan follows within five working days of a complete brief.",
  },
  /* Paste this onto the LinkedIn company About. The live page still
     says Delhi HQ, 17 years, and “India’s #1 barter platform” — that
     is a different firm from this site, and a buyer will notice. */
  linkedinAbout:
    "Independent OOH media planning and buying in India. We do not own hoardings, screens or airtime. We plan the outdoor buy across media owners — audience, comparison, negotiation, execution — then prove that it ran.\n\nPlanning desk: Kanpur, Uttar Pradesh. Markets across metros and tier-2 India. Barter (goods-for-media) is a commercial route when cash is the constraint. It is not the default product.",

  /* THE DATE THE CONTENT WAS LAST GONE THROUGH.
     Fed to schema as dateModified on every page. A generative engine
     with two candidate answers about a 2025 municipal policy will take
     the one that carries a recent date, and a site with no date at all
     reads as undated rather than as current.

     This is a claim, so it has to stay true: bump it when the copy,
     the compliance sections or the station and masthead tables are
     actually reviewed — not on every deploy that changes a colour. */
  contentReviewed: "2026-08-30",

  /* `sameAs` — THE SINGLE BIGGEST THING STILL MISSING FROM THIS SITE.
     Every URL here is a place the same entity is already listed. An
     answer engine uses them to corroborate that this company exists
     outside its own website; with an empty list it has one unlinked
     island and no second source, which is the most common reason a
     real firm gets described vaguely or skipped entirely.

     Paste them in as they exist. Nothing else needs changing — the
     schema reads this array directly:
       LinkedIn company page, Google Business Profile (the "share"
       URL, not the maps pin), Justdial listing, IndiaMART, Facebook,
       Instagram, and any ZaubaCorp / Tofler record of the registered
       entity.

     Only URLs that genuinely resolve to this company. A wrong one is
     worse than none: it merges this entity with somebody else's.

     Company LinkedIn ships. Founder Person, foundingDate, and extra
     profile URLs stay off the graph until they are real. */
  profiles: [linkedinCompany],
} as const;

export function telHref(e164: string): string {
  return `tel:${e164}`;
}

export function whatsappHref(digits: string): string {
  return `https://wa.me/${digits.replace(/\D/g, "")}`;
}

/* ------------------------------------------------------------------
   Capabilities — outdoor first. Barter is a commercial route, not a peer product.
   NOTE: descriptions name categories only. Never inventory, counts,
   site lists, availability or rates. That rule holds site-wide.
------------------------------------------------------------------- */

export type Capability = {
  index: string;
  /* The verb the client cares about. Six product names read as a
     menu; six verbs read as one system with an order to it. This is
     what the homepage leads with — the product name is the subtitle. */
  verb: string;
  title: string;
  short: string;
  long: string;
  href: string;
  accent?: boolean;
  linkLabel?: string;
};

export const capabilities: Capability[] = [
  {
    index: "01",
    verb: "Plan the outdoor buy",
    title: "Outdoor & Transit",
    short:
      "Hoardings, transit and street furniture, compared and bought across owners.",
    long: "Large-format and transit media planned around how a city actually moves — arterial corridors, commuter routes and the approaches to retail catchments.",
    href: "/what-we-do/outdoor-transit",
  },
  {
    index: "02",
    verb: "Time the screens",
    title: "Digital Out-of-Home",
    short: "LED and programmatic DOOH, bought by daypart and location.",
    long: "Digital screens bought by daypart and location rather than by month, so weight lands when the audience is present.",
    href: "/what-we-do/dooh",
  },
  {
    index: "03",
    verb: "Plan the catchment",
    title: "Retail & Hyperlocal",
    short: "Mall, multiplex, society lift and store-catchment media.",
    long: "Media placed inside the trade area of a specific store or cluster, planned from catchment data rather than city-level reach.",
    href: "/what-we-do/retail-hyperlocal",
  },
  {
    index: "04",
    verb: "Add traditional weight",
    title: "Broadcast, Print & Cinema",
    short: "News television, radio, national dailies and on-screen.",
    long: "Traditional weight where it still carries a market — regional news, radio drive-time, dailies and cinema on-screen.",
    href: "/what-we-do/broadcast-print-cinema",
  },
  {
    index: "05",
    verb: "Ground presence",
    title: "Activations & Corporate Gifting",
    short: "When the plan needs a person in the place, not only a board.",
    long: "Physical presence in the places a brand needs to be seen, and the channel programmes that keep distribution engaged.",
    href: "/what-we-do/activations",
  },
  {
    index: "06",
    verb: "Structure the commercial",
    title: "Barter & Trade Structuring",
    short: "When the media plan is right and cash is the constraint.",
    long: "Converting what a business already owns into media, contracted and valued in advance.",
    href: "/barter",
    linkLabel: "How barter works",
  },
];

/* The buy, in the order it is actually made. This is the product. */
export const process = [
  {
    index: "01",
    title: "Brand objective",
    body: "Launch, defend, footfall or presence. The buy is an output of this, not a site list.",
  },
  {
    index: "02",
    title: "Audience and catchment",
    body: "Who must see it, and on which movements. Corridor before site.",
  },
  {
    index: "03",
    title: "Market intelligence",
    body: "How this city moves — owners, permissions, seasonality — not a national rate card.",
  },
  {
    index: "04",
    title: "Access to owners",
    body: "We buy across media owners. There is no mandate to fill anyone’s unsold.",
  },
  {
    index: "05",
    title: "Comparison",
    body: "The same brief, more than one owner, argued on position and dwell.",
  },
  {
    index: "06",
    title: "Negotiation",
    body: "Rates disclosed to you. Independence is the reason we can walk away.",
  },
  {
    index: "07",
    title: "The plan",
    body: "Site-by-site reasoning you can interrogate. You approve before it is booked.",
  },
  {
    index: "08",
    title: "Optimisation",
    body: "Weight moves if the audience does. Digital by daypart; static by corridor hold.",
  },
  {
    index: "09",
    title: "Execution",
    body: "Printing, mounting, permissions. The plan is not the campaign until it is up.",
  },
  {
    index: "10",
    title: "Measurement",
    body: "Geo-tagged photographs, mid-flight checks, a file you can forward.",
  },
];

/* Navigation ------------------------------------------------------ */

export const primaryNav = [
  { label: "How we work", href: "/what-we-do", mega: true },
  { label: "Work", href: "/work" },
  { label: "Markets", href: "/cities" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = [
  {
    heading: "How we work",
    links: capabilities.map((c) => ({ label: c.title, href: c.href })),
  },
  {
    heading: "Markets",
    /* Only cities with a written page are linked, and the list is
       derived rather than typed — the previous version claimed to do
       this in a comment while hardcoding Kolkata, which is how a footer
       ends up six cities out of date. Capped so the footer stays a
       footer; the rest are one click away on the index. */
    links: [
      ...cities.slice(0, 6).map((c) => ({
        label: c.name,
        href: `/cities/${c.slug}`,
      })),
      { label: "All markets", href: "/cities" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Glossary", href: "/glossary" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: site.email, href: `mailto:${site.email}` },
      {
        label: `${site.phone.display} · WhatsApp`,
        href: whatsappHref(site.phone.whatsappDigits),
      },
      { label: "LinkedIn", href: site.linkedin },
      { label: "Request a plan", href: "/contact" },
    ],
  },
];

/* ------------------------------------------------------------------
   Proof band.

   The trust-authority landing pattern puts credibility immediately
   after the hero. These four are drawn from the company introduction
   deck — verify each one before launch, and replace any you cannot
   stand behind rather than rounding it up.
------------------------------------------------------------------- */

/* Tenure claims are deliberately absent — Yash asked for the years
   not to be stated until they are verified. Market count is the
   register: written pages plus named markets without a page yet. */
export const proofStats = [
  {
    label: "Role",
    value: "Independent",
    note: "We plan and buy. We do not own the sites.",
  },
  {
    label: "Markets",
    value: String(marketCount),
    note: "Metros and tier-2, planned city by city.",
  },
  {
    label: "Base",
    value: "Kanpur",
    note: "A North and tier-2 planning desk, not a metro franchise.",
  },
  {
    label: "Measurement",
    value: "On site",
    note: "Every placement photographed, dated and geo-tagged.",
  },
];

/* Client names, listed as names only — no logos, no results, no
   creative. Yash confirmed these can be named. Anything beyond the
   name (a logo mark, a campaign photo, a result) still needs that
   client's written permission. */
export const clients = [
  "Safilo",
  "Sharp",
  "Zebronics",
  "Portronics",
  "Carrera",
  "Giva",
  "Bangur Cement",
  "Goldmedal",
  "Timezone",
  "Wingreens World",
  "Aditya Vision",
  "Bodycraft",
  "Naturoz",
  "Nisara",
  "Mishrambu",
  "Asian Footwears",
  "Mars Cosmetics",
];

/* The Runway move — segment by what the buyer is trying to do, not
   by what we sell. This is also the JCDecaux nav lesson, executed
   as page sections rather than as a menu. */
export const objectives = [
  {
    index: "01",
    title: "Launching in a new market",
    body: "You need presence fast in a city you don't know. We plan from catchment and movement data rather than from whatever is unsold this month.",
    points: [
      "Corridor and catchment mapping before any site list",
      "Local press and radio planned alongside outdoor",
      "Documented delivery so the head office can see it ran",
    ],
    href: "/cities",
    linkLabel: "Markets we plan",
  },
  {
    index: "02",
    title: "Defending a home market",
    body: "You already own the city and a competitor is moving in. Density and frequency matter more than reach, and the buy has to hold long enough to compound.",
    points: [
      "Share-of-voice mapping against competitor sites",
      "Sustained presence over short high-reach bursts",
      "Store-catchment and hyperlocal formats",
    ],
    href: "/what-we-do",
    linkLabel: "How we buy",
  },
  {
    index: "03",
    title: "Marketing without the cash",
    body: "The mandate is there, the budget isn't. You hold stock, capacity or vouchers. We convert them into media at a value agreed in writing first.",
    points: [
      "Valuation fixed before either side performs",
      "GST-compliant invoicing on both legs",
      "Goods placed through controlled channels",
    ],
    href: "/barter",
    linkLabel: "How barter works",
  },
];

/* Proof of delivery.

   These are real monitoring frames. The GPS and timestamp overlays are
   left on deliberately — non-delivery is the loudest unspoken fear an
   Indian media buyer has, and no amount of art direction answers it as
   well as a geo-tagged photograph does. */
export const proofFrames = [
  {
    src: "/media/proof-safdarjung.jpg",
    place: "Safdarjung Enclave, New Delhi",
    stamp: "28.5694° N, 77.2061° E · 30 Aug 2024",
    alt: "Backlit panel above a market row in Safdarjung Enclave, photographed with a geo-tagged timestamp",
  },
  {
    src: "/media/proof-kanpur.jpg",
    place: "Green Park, Kanpur",
    stamp: "26.4819° N, 80.3454° E · 03 Dec 2025",
    alt: "Hoarding near Green Park Stadium, Kanpur, photographed with a geo-tagged timestamp",
  },
  {
    src: "/media/proof-cyberhub.jpg",
    place: "Cyber Hub, Gurugram",
    stamp: "Newspaper-verified · 30 Aug 2024",
    alt: "Digital screen at Cyber Hub photographed alongside that morning's newspaper as proof of the run date",
  },
  {
    src: "/media/proof-vip-road.jpg",
    place: "Naveen Market, Kanpur",
    stamp: "26.4745° N, 80.3448° E · 20 Jan 2026",
    alt: "Hoardings above the Naveen Market crossing, Parmat, Kanpur, photographed with a geo-tagged timestamp",
  },
];

/* Sectors are safe to publish; individual client names are not,
   until written permission exists for each one. */
export const sectorsServed = [
  "Consumer electronics",
  "Footwear",
  "Beverages",
  "Cement & building materials",
  "Commercial vehicles",
  "Eyewear",
  "Cosmetics",
  "Quick commerce",
  "Retail chains",
  "Jewellery",
];

/* ------------------------------------------------------------------
   PLACEHOLDERS — Yash to replace before launch.
   Deliberately unnamed and unquantified: do not publish client names
   or results without written permission from the client.
------------------------------------------------------------------- */

export const selectedWork = [
  {
    index: "01",
    client: "Consumer electronics retailer",
    sector: "Consumer electronics",
    markets: "Uttar Pradesh",
    formats: "Store-catchment hoardings and mall media, bought across owners",
    duration: "Held through a state retail calendar, not a two-week burst",
    compared:
      "Arterial reach against density around the stores. The catchment won.",
    delivery:
      "Every placement photographed, geo-tagged and dated. One file at the end.",
  },
  {
    index: "02",
    client: "Regional beverage brand",
    sector: "Beverages",
    markets: "Uttar Pradesh · Bihar · Madhya Pradesh",
    formats: "Hoardings and transit on the corridors that move the stock",
    duration: "A seasonal window, booked before the peak rather than during it",
    compared:
      "A national rate-card list against city-by-city movement. The cities won.",
    delivery:
      "Mid-flight checks and a consolidated report the head office could forward.",
  },
  {
    index: "03",
    client: "Footwear brand, North India launch",
    sector: "Footwear",
    markets: "North India",
    formats: "Outdoor and retail media, structured against goods not cash",
    duration: "Launch weight across the opening markets, then a hold",
    compared:
      "Paying for presence the budget could not fund, versus sitting dark. Presence won.",
    delivery:
      "Documented on site. The commercial was a reciprocal trade, valued in writing first.",
  },
];

/* How a Media Director diligences the desk. Philosophy is in `process`;
   this is operating detail — owners, rates, time, permissions, people. */
export const buyingPractice = [
  {
    title: "Owners are RFPd, not inherited",
    body: "The same brief goes to more than one owner. There is no mandate to fill anyone’s unsold. We buy DMRC in Delhi, BEST buses in Mumbai, CMRL in Chennai from the operators and concessionaires who hold them — as access, not as inventory we list.",
  },
  {
    title: "Rates are disclosed to you",
    body: "You see what we are being quoted. Independence is the reason we can walk away from a site, and the reason the number on the plan is the number that was negotiated, not a mark-up on unsold.",
  },
  {
    title: "Lead times are named in the plan",
    body: "Static outdoor needs printing and mounting windows. Digital can go live once creative is approved. Transit and mall media follow the concessionaire’s calendar. We write the real window, not a generic SLA for every format.",
  },
  {
    title: "Permissions sit in the plan",
    body: "Municipal sky-sign, police NOC for illumination, transit concessionaire terms. The city pages name the authority. The plan names who files, and quotes compliance separately rather than burying it.",
  },
  {
    title: "Production is not a surprise invoice",
    body: "Printing, flexing and mounting are in the plan before sites are booked. A cheaper proposal that omits them is not cheaper.",
  },
  {
    title: "Staffing a multi-city buy",
    body: "Planning is led from Kanpur. Local supervisors and owner operations run mounting and mid-flight checks. You deal with one desk, not a franchise list.",
  },
];

export const scaleNote =
  "The desk is built for market-by-market and corridor plans. A two-lakh local flex is usually better served locally. An eight-crore national AOR pitch is not this room. We will say so.";

