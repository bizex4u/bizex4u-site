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
  /* One-line label on the hour dialer. Shorter than the card title
     so six rows stay scannable. */
  scene: string;
  /* The card face. Own streets for the hours we shoot from the
     road; designed photographs for the interiors we do not —
     mall atrium, cinema. None of these is a site we hold. */
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
    scene: "The commute",
    image: "/media/hours/commute-agra.webp",
    imageAlt: "An Agra arterial at commute hour, a roadside hoarding and traffic on the carriageway",
  },
  {
    time: "09:20",
    deva: "सुबह",
    title: "The office districts absorb the city",
    body: "A dense, higher-income population lands in a few square kilometres and stays until evening. The easiest audience in India to reach precisely, and the easiest to waste citywide.",
    plate: "dooh",
    formats: ["LED façades", "Transit", "Ribbon screens"],
    examples: "Cyber Hub, Gurugram · Salt Lake Sector V, Kolkata",
    scene: "Office districts",
    image: "/media/hours/office-cyberhub.jpg",
    imageAlt: "A glass office tower above a pedestrian plaza at an Indian commercial hub",
  },
  {
    time: "12:15",
    deva: "दोपहर",
    title: "The mall opens and intent changes",
    body: "Footfall here is already in spending mode, worth several times the same count on a road. Close-range attention, so the format changes completely: reading distance, not driving distance.",
    plate: "retail",
    formats: ["Atrium", "Fascia", "Lift panels"],
    examples: "Fun Mall, Lucknow · Khan Market, New Delhi",
    scene: "The mall opens",
    image: "/media/hours/mall-atrium.jpg",
    imageAlt: "A mall atrium with a hanging light installation and shoppers already in the space",
  },
  {
    time: "16:30",
    deva: "दोपहर",
    title: "The school run and the local market",
    body: "The most under-planned hour in Indian outdoor. Movement collapses to a two-kilometre radius and a household decision-maker passes the same corners twice. Catchment is everything.",
    plate: "activation",
    formats: ["Store catchment", "Society media", "Activations"],
    examples: "Naveen Market, Kanpur · Gariahat, Kolkata",
    scene: "School run",
    image: "/media/hours/sunrise-market.jpg",
    imageAlt: "A local market street in warm light, shoppers walking between stalls",
  },
  {
    time: "19:45",
    deva: "शाम",
    title: "The high street peaks",
    body: "Discretionary spending and unhurried movement. The only hour when a brand can expect more than a glance, and the hour digital screens earn their premium on.",
    plate: "dooh",
    formats: ["Digital screens", "Street retail", "Activations"],
    examples: "Park Street, Kolkata · MG Road, Bengaluru",
    scene: "High street",
    image: "/media/hours/evening.jpg",
    imageAlt: "An Indian high street at dusk, headlights and stall lights against the sky",
  },
  {
    time: "22:10",
    deva: "रात",
    title: "The last screen of the day",
    body: "Attention narrows to one screen in a dark room, or the lift on the way up. Small audiences, near-total concentration. Worth buying when the message must be understood, not just seen.",
    plate: "broadcast",
    formats: ["Cinema on-screen", "Broadcast", "Lift panels"],
    examples: "Multiplex circuits · Residential towers",
    scene: "Last screen",
    image: "/media/hours/cinema-screen.jpg",
    imageAlt: "An empty cinema, red seats facing a dark screen",
  },
];
