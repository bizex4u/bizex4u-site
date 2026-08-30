import { cities } from "./cities";

export const site = {
  name: "Bizex4U",
  wordmark: "BIZEX4U",
  url: "https://bizex4u.com",
  description:
    "Bizex4U is an independent Indian media network. We plan, negotiate and run outdoor, retail and broadcast campaigns across India.",
  email: "yash@bizex4u.com",
  phone: "+91\u00a08090500009", /* nbsp: the number must not break across lines */
  phoneHref: "+918090500009",
  /* Indian B2B closes on WhatsApp. This is the highest-intent action on
     the site — treat it as the primary CTA, not a footer afterthought.
     whatsappBase is exported separately so components that compose
     their own prefilled message (the barter selector) do not have to
     rebuild the deep link and get the number wrong. */
  whatsappBase: "https://wa.me/918090500009",
  whatsapp:
    "https://wa.me/918090500009?text=" +
    encodeURIComponent(
      "Hi Bizex4U — I'd like to talk about a campaign.",
    ),
  address: {
    line1: "Mona Enclave",
    line2: "Kanpur, Uttar Pradesh",
    country: "India",
  },

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
     worse than none: it merges this entity with somebody else's. */
  profiles: ["https://www.linkedin.com/company/bizex4u"],
} as const;

/* ------------------------------------------------------------------
   Capabilities — the six rows of the network ledger.
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
    verb: "Be seen",
    title: "Outdoor & Transit",
    short:
      "Hoardings, billboards, bus and cab media across metros and tier-2 cities.",
    long: "Large-format and transit media planned around how a city actually moves — arterial corridors, commuter routes and the approaches to retail catchments.",
    href: "/what-we-do/outdoor-transit",
  },
  {
    index: "02",
    verb: "Be timed",
    title: "Digital Out-of-Home",
    short: "LED screens, digital billboards and programmatic DOOH.",
    long: "Digital screens bought by daypart and location rather than by month, so weight lands when the audience is present.",
    href: "/what-we-do/dooh",
  },
  {
    index: "03",
    verb: "Be seen where they decide",
    title: "Retail & Hyperlocal",
    short: "Mall, multiplex, society lift and store-catchment media.",
    long: "Media placed inside the trade area of a specific store or cluster, planned from catchment data rather than city-level reach.",
    href: "/what-we-do/retail-hyperlocal",
  },
  {
    index: "04",
    verb: "Be heard",
    title: "Broadcast, Print & Cinema",
    short: "News television, radio, national dailies and on-screen.",
    long: "Traditional weight where it still carries a market — regional news, radio drive-time, dailies and cinema on-screen.",
    href: "/what-we-do/broadcast-print-cinema",
  },
  {
    index: "05",
    verb: "Be there in person",
    title: "Activations & Corporate Gifting",
    short: "Ground presence and distributor engagement.",
    long: "Physical presence in the places a brand needs to be seen, and the channel programmes that keep distribution engaged.",
    href: "/what-we-do/activations",
  },
  {
    index: "06",
    verb: "Be affordable",
    title: "Barter & Trade Structuring",
    short: "The commercial model that funds all of the above.",
    long: "Converting what a business already owns into media, contracted and valued in advance.",
    href: "/barter",
    accent: true,
    linkLabel: "Read how it works",
  },
];

/* Navigation ------------------------------------------------------ */

export const primaryNav = [
  { label: "What We Do", href: "/what-we-do", mega: true },
  { label: "Work", href: "/work" },
  { label: "Cities", href: "/cities" },
  { label: "Barter", href: "/barter" },
  { label: "About", href: "/about" },
];

export const footerNav = [
  {
    heading: "What We Do",
    links: capabilities.map((c) => ({ label: c.title, href: c.href })),
  },
  {
    heading: "Cities",
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
      { label: "All cities", href: "/cities" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Glossary", href: "/glossary" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Connect",
    /* WhatsApp lives here as a direct contact method, not as a call to
       action. Leads start from the brief form so they arrive with a
       brand and a name attached; this is for someone who already knows
       who they want to talk to. */
    links: [
      { label: site.email, href: `mailto:${site.email}` },
      { label: site.phone, href: `tel:${site.phoneHref}` },
      { label: "WhatsApp", href: site.whatsappBase, external: true },
      { label: "Send a brief", href: "/contact" },
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
   not to be stated until they are verified. 40+ cities is confirmed. */
export const proofStats = [
  {
    label: "Cities",
    value: "40+",
    note: "Metros and tier-2, planned from catchment data.",
  },
  {
    label: "Capabilities",
    value: "Six",
    note: "Outdoor, digital, retail, broadcast, activations, barter.",
  },
  {
    label: "Categories",
    value: "10+",
    note: "From consumer electronics to cement.",
  },
  {
    label: "Ownership",
    value: "Independent",
    note: "No network mandate. No inherited rate card.",
  },
];

/* Client names, listed as names only — no logos, no results, no
   creative. Yash confirmed these can be named. Anything beyond the
   name (a logo mark, a campaign photo, a result) still needs that
   client's written permission. */
export const clients = [
  "Zebronics",
  "Sharp",
  "Portronics",
  "Carrera",
  "Safilo",
  "Nisara",
  "Bodycraft",
  "Naturoz",
  "Mishrambu",
  "Aditya Vision",
  "Asian Footwears",
  "Wingreens World",
  "Bangur Cement",
  "BharatBenz",
  "Goldmedal",
  "Giva",
  "Mars Cosmetics",
  "Timezone",
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
    client: "Client name",
    sector: "Beverages",
    markets: "UP · Bihar · MP",
    result: "Seasonal stock converted into a multi-state outdoor campaign.",
    href: "/work",
  },
  {
    index: "02",
    client: "Client name",
    sector: "Consumer electronics retail",
    markets: "Uttar Pradesh",
    result: "Store-catchment media planned across a state retail footprint.",
    href: "/work",
  },
  {
    index: "03",
    client: "Client name",
    sector: "Footwear",
    markets: "North India",
    result: "Regional launch weight delivered without cash media spend.",
    href: "/work",
  },
];

