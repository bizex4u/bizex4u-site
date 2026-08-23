export const site = {
  name: "Bizex4U",
  wordmark: "BIZEX4U",
  founded: 2008,
  yearsLabel: "17 Years",
  url: "https://www.bizex4u.com",
  description:
    "Bizex4U is an independent Indian media network. We plan, negotiate and run outdoor, retail and broadcast campaigns across India.",
  email: "yash@bizex4u.com",
  phone: "+91 8090500009",
  phoneHref: "+918090500009",
  /* Indian B2B closes on WhatsApp. This is the highest-intent action on
     the site — treat it as the primary CTA, not a footer afterthought. */
  whatsapp:
    "https://wa.me/918090500009?text=" +
    encodeURIComponent(
      "Hi Bizex4U — I'd like to talk about an outdoor campaign.",
    ),
  /* TODO(yash): replace with the registered office address before launch. */
  address: {
    line1: "Registered office address",
    line2: "City, State PIN",
    country: "India",
  },
} as const;

/* ------------------------------------------------------------------
   Capabilities — the six rows of the network ledger.
   NOTE: descriptions name categories only. Never inventory, counts,
   site lists, availability or rates. That rule holds site-wide.
------------------------------------------------------------------- */

export type Capability = {
  index: string;
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
    title: "Outdoor & Transit",
    short:
      "Hoardings, billboards, bus and cab media across metros and tier-2 cities.",
    long: "Large-format and transit media planned around how a city actually moves — arterial corridors, commuter routes and the approaches to retail catchments.",
    href: "/what-we-do/outdoor-transit",
  },
  {
    index: "02",
    title: "Digital Out-of-Home",
    short: "LED screens, digital billboards and programmatic DOOH.",
    long: "Digital screens bought by daypart and location rather than by month, so weight lands when the audience is present.",
    href: "/what-we-do/dooh",
  },
  {
    index: "03",
    title: "Retail & Hyperlocal",
    short: "Mall, multiplex, society lift and store-catchment media.",
    long: "Media placed inside the trade area of a specific store or cluster, planned from catchment data rather than city-level reach.",
    href: "/what-we-do/retail-hyperlocal",
  },
  {
    index: "04",
    title: "Broadcast, Print & Cinema",
    short: "News television, radio, national dailies and on-screen.",
    long: "Traditional weight where it still carries a market — regional news, radio drive-time, dailies and cinema on-screen.",
    href: "/what-we-do/broadcast-print-cinema",
  },
  {
    index: "05",
    title: "Activations & Corporate Gifting",
    short: "Ground presence and distributor engagement.",
    long: "Physical presence in the places a brand needs to be seen, and the channel programmes that keep distribution engaged.",
    href: "/what-we-do/activations",
  },
  {
    index: "06",
    title: "Barter & Trade Structuring",
    short: "The commercial model that funds all of the above.",
    long: "Converting what a business already owns into media, contracted and valued in advance.",
    href: "/barter",
    accent: true,
    linkLabel: "Read how it works",
  },
];

/* Atlas modules --------------------------------------------------- */

export const atlasModules = [
  {
    index: "01",
    title: "Brand Intelligence",
    body: "Where a brand is present, where its competitors are, and where the gap between the two is worth buying.",
  },
  {
    index: "02",
    title: "Spatial Intelligence",
    body: "Catchments, trade areas and movement patterns, mapped at street level rather than city level.",
  },
  {
    index: "03",
    title: "Market Intelligence",
    body: "Category density, retail footprint and demand signals for the markets a campaign is entering.",
  },
  {
    index: "04",
    title: "Media Intelligence",
    body: "What media exists in a market, how it performs, and what it should reasonably cost.",
  },
];

/* Navigation ------------------------------------------------------ */

export const primaryNav = [
  { label: "What We Do", href: "/what-we-do", mega: true },
  { label: "Work", href: "/work" },
  { label: "Cities", href: "/cities" },
  { label: "Atlas", href: "/atlas" },
  { label: "About", href: "/about" },
  { label: "Perspectives", href: "/perspectives" },
];

export const footerNav = [
  {
    heading: "What We Do",
    links: capabilities.map((c) => ({ label: c.title, href: c.href })),
  },
  {
    heading: "Cities",
    /* Only cities with a written page are linked. Add to cities.ts and
       the entry appears here automatically. */
    links: [
      { label: "Kolkata", href: "/cities/kolkata" },
      { label: "All cities", href: "/cities" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Atlas", href: "/atlas" },
      { label: "Perspectives", href: "/perspectives" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: site.email, href: `mailto:${site.email}` },
      { label: site.phone, href: `tel:${site.phoneHref}` },
      { label: "Start a conversation", href: "/contact" },
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

export const proofStats = [
  {
    label: "In market since",
    value: "2008",
    note: "Seventeen years planning and buying Indian media.",
  },
  {
    label: "Cities planned",
    value: "40+",
    note: "Metros and tier-2, from own catchment data.",
  },
  {
    label: "Capabilities",
    value: "Six",
    note: "Outdoor, digital, retail, broadcast, activations, barter.",
  },
  {
    label: "Ownership",
    value: "Independent",
    note: "No network mandate. No inherited rate card.",
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
    stamp: "Dated newspaper verification · 30 Aug 2024",
    alt: "Digital screen at Cyber Hub photographed alongside that morning's newspaper as proof of the run date",
  },
  {
    src: "/media/proof-vip-road.jpg",
    place: "VIP Road, Kanpur",
    stamp: "26.4819° N, 80.3454° E · 03 Dec 2025",
    alt: "Hoarding on VIP Road, Kanpur, photographed with a geo-tagged timestamp",
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

export const perspectives = [
  {
    date: "2026-07-14",
    dateLabel: "14 Jul 2026",
    title: "What a media plan should tell you before you sign it",
    category: "Planning",
    href: "/perspectives",
  },
  {
    date: "2026-06-02",
    dateLabel: "02 Jun 2026",
    title: "Catchment, not coverage: rethinking hyperlocal outdoor",
    category: "Retail",
    href: "/perspectives",
  },
  {
    date: "2026-04-21",
    dateLabel: "21 Apr 2026",
    title: "How barter is treated in the books",
    category: "Commercial",
    href: "/perspectives",
  },
];
