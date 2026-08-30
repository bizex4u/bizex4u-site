/* ------------------------------------------------------------------
   "India's attention, by the hour."

   The homepage's centrepiece. One day in an Indian city, walked
   through hour by hour, showing where people actually are and which
   format intercepts them there.

   Why this section exists: it teaches the entire business in about
   fifteen seconds of scrolling, using knowledge Bizex4U genuinely has
   and a competitor would have to earn. It is also the only part of
   the site that could not be lifted from a template.

   RULES, same as everywhere: places and behaviour, never inventory.
   The place names below are public locations used as EXAMPLES of a
   kind of environment. None of them asserts a site, a holding, an
   availability or a rate.
------------------------------------------------------------------- */

export type Hour = {
  /* 24h, used for the numeral and for the light/dark tint. */
  time: string;
  /* Devanagari time-of-day word — the section reads as Indian, and
     the word changes with the light. */
  deva: string;
  title: string;
  /* Where people are, in one sentence a planner would recognise. */
  body: string;
  /* Which capability answers it. Matches formatSets keys where a
     plate exists, so the artefact is drawn at true proportion. */
  plate?: "outdoor" | "dooh" | "retail" | "broadcast" | "activation";
  /* The format names, for the tag row. */
  formats: string[];
  /* Real streets that behave this way, as illustration. */
  examples: string;
  /* The card face. Own frames where we have the hour; designed
     photographs for the interiors we do not shoot — mall, office
     floor, cinema. None of these is a site we hold. */
  image: string;
  imageAlt: string;
};

export const dayClock: Hour[] = [
  {
    time: "06:40",
    deva: "सुबह",
    title: "The road fills before the office does",
    body: "The same people, the same lane, the same ninety seconds at the same signal, five days a week. Nothing else in media buys that much repetition against one person.",
    plate: "outdoor",
    formats: ["Hoardings", "Unipoles", "Bus exteriors"],
    examples: "EM Bypass, Kolkata · Gomti Nagar flyover, Lucknow · Sankey Road, Bengaluru",
    image: "/media/streets/agra-1.webp",
    imageAlt: "An elevated carriageway with hoardings along the approach, early in the day",
  },
  {
    time: "09:20",
    deva: "सुबह",
    title: "The office districts absorb the city",
    body: "A dense, higher-income population lands in a few square kilometres and stays until evening. The easiest audience in India to reach precisely, and the easiest to waste citywide.",
    plate: "dooh",
    formats: ["LED façades", "Transit", "Ribbon screens"],
    examples: "Cyber Hub, Gurugram · Salt Lake Sector V, Kolkata",
    image: "/media/hours/office.jpg",
    imageAlt: "A glass office corridor at the hour the districts fill",
  },
  {
    time: "12:15",
    deva: "दोपहर",
    title: "The mall opens and intent changes",
    body: "Footfall here is already in spending mode, worth several times the same count on a road. Close-range attention, so the format changes completely: reading distance, not driving distance.",
    plate: "retail",
    formats: ["Atrium", "Fascia", "Lift panels"],
    examples: "Fun Mall, Lucknow · Khan Market, New Delhi",
    image: "/media/hours/mall.jpg",
    imageAlt: "A mall atrium with shoppers already in the space",
  },
  {
    time: "16:30",
    deva: "दोपहर",
    title: "The school run and the local market",
    body: "The most under-planned hour in Indian outdoor. Movement collapses to a two-kilometre radius and a household decision-maker passes the same corners twice. Catchment is everything.",
    plate: "activation",
    formats: ["Store catchment", "Society media", "Activations"],
    examples: "Naveen Market, Kanpur · Gariahat, Kolkata",
    image: "/media/streets/agra-9.webp",
    imageAlt: "A market street with shopfronts and parked vehicles",
  },
  {
    time: "19:45",
    deva: "शाम",
    title: "The high street peaks",
    body: "Discretionary spending and unhurried movement. The only hour when a brand can expect more than a glance, and the hour digital screens earn their premium on.",
    plate: "dooh",
    formats: ["Digital screens", "Street retail", "Activations"],
    examples: "Park Street, Kolkata · MG Road, Bengaluru",
    image: "/media/streets/kozhikode-6.webp",
    imageAlt: "A high street of stacked retail frontage as the evening crowd arrives",
  },
  {
    time: "22:10",
    deva: "रात",
    title: "The last screen of the day",
    body: "Attention narrows to one screen in a dark room, or the lift on the way up. Small audiences, near-total concentration. Worth buying when the message must be understood, not just seen.",
    plate: "broadcast",
    formats: ["Cinema on-screen", "Broadcast", "Lift panels"],
    examples: "Multiplex circuits · Residential towers",
    image: "/media/hours/cinema.jpg",
    imageAlt: "An empty cinema, seats toward a dark screen",
  },
];
