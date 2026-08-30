import type { Term } from "./types";

/* Street formats. The five nouns that do most of the work on this
   site and, until now, were never defined on it. */

export const hoarding: Term = {
  slug: "hoarding",
  term: "Hoarding",
  alsoCalled: ["Billboard", "Large-format outdoor"],
  category: "Formats",
  metaTitle: "What Is a Hoarding? Outdoor Advertising Term",
  metaDescription:
    "A hoarding is the Indian term for a large outdoor advertising panel mounted on a structure beside a road. What it is, how it is licensed, when it works.",
  definition:
    "A hoarding is the Indian term for a large-format outdoor advertising panel — a printed or digital display mounted on a fixed structure beside a road, on a rooftop or on a boundary wall, sold for a defined period rather than by the number of people who pass it.",
  body: [
    "In India the noun is hoarding. The rest of the English-speaking world says billboard, and both words appear on this site because Indian buyers use them interchangeably, but the trade, the municipal bye-laws and the invoices all say hoarding. If you are searching, reading a permission document or arguing about a renewal, hoarding is the word that appears.",
    "The word covers a family rather than a single object. A hoarding may sit on its own structure at the roadside, on the roof or terrace of a building, or flat against a boundary wall or the blind side of a building. Which of those it is matters more than the size, because it decides who has to consent — a ground-mounted structure is a matter between the media owner and the municipal authority, while a rooftop or wall display also needs the building owner, and in many cities is licensed under a different head altogether.",
    "A hoarding is almost never owned by the agency selling it to you. The structure belongs to a media owner who holds the site under a lease, a licence or a municipal tender, and a planner negotiates access to it. That distinction is the whole reason to ask who you are actually buying from: a media owner recommends what they are holding, and an independent planner recommends what the brief needs.",
  ],
  sections: [
    {
      q: "What is the difference between a hoarding and a billboard?",
      a: [
        "None, in substance. They are the same format under two names — hoarding in India, the UK and much of the Commonwealth, billboard in American usage. Indian buyers use both, often in the same sentence.",
        "The one place the distinction bites is search and paperwork. Municipal permissions, licence fees and vendor invoices in India are written against hoarding, sky-sign or advertisement, never billboard. If a proposal uses billboard throughout, it was probably written for a deck rather than from a permission file.",
      ],
    },
    {
      q: "How is a hoarding licensed in India?",
      a: [
        "By the urban local body, under state municipal law, and the detail differs city by city. A municipal corporation typically either issues permissions directly against its own advertisement bye-laws or tenders the right to display on defined sites and streets to a concessionaire, who then sublets.",
        "There is no national outdoor advertising regime. The authority, the head under which permission is granted, the renewal cycle and the fee basis all change when you cross a corporation boundary — which is why a campaign across Delhi, Gurugram and Noida is three permission conversations rather than one. Where a rule could not be verified against the issuing body's own published material, this site says so rather than asserting it.",
      ],
    },
    {
      q: "What sizes do hoardings come in?",
      a: [
        "There is no national standard, which surprises people who have bought outdoor in markets that have one. Sizes cluster into rough families — a common roadside panel is wider than it is tall by roughly two or three to one, rooftop displays run larger, and wall displays take whatever the wall gives.",
        "Size is worth much less attention than position. A smaller panel at eye level on a slow, congested stretch is read; a very large one at a speed where nobody has three seconds to spare is seen and not read. Buying by square footage is the most common way to overpay for outdoor in India.",
      ],
    },
  ],
  whenItWorks: [
    "Building recognition for a name people will meet again later — the repeat exposure is the mechanism, not the single sighting.",
    "Anchoring a market you are entering, where the job is to look established rather than to explain anything.",
    "Supporting a retail or distribution push in a defined catchment, where the panel and the outlet are on the same commute.",
    "Category and price-point messages that survive being read at a distance in under three seconds.",
  ],
  whenItDoesNot:
    "A hoarding is a poor place to explain something. If the message needs a sentence, a qualifier or a number the reader has to hold, the format is fighting you — that message belongs in press, radio, retail or digital. Hoardings also do badly as a short burst: a two-week hoarding campaign buys the cost of production and mounting and very little of the repetition that makes the format work at all. And a single hoarding, however large, is a landmark rather than a campaign; presence in a catchment comes from several positions on the routes that catchment actually uses.",
  priceFactors: [
    "Where it is — the corridor, and which side of the road relative to the direction of the peak flow.",
    "How long you hold it. Rates move materially between a one-month and a twelve-month commitment.",
    "Whether it is lit, and if so how — illumination is usually a separate line, not an included one.",
    "Season. A festival or wedding window in a strong local market prices differently from the same site in a dead month.",
    "Production and mounting, which are separate from the media cost and are often quoted separately.",
    "Whether the permission and structural certification are current, and who carries the cost if a renewal falls due mid-campaign.",
  ],
  faq: [
    {
      q: "How much does a hoarding cost in India?",
      a: "We do not publish a rate card, and neither should anyone who does not own the media. A published figure would describe what a firm would like to charge rather than what a market will take. What actually sets the number is the corridor, the hold period, illumination, season, and how many vendors are competing for that brief — the factors listed above. Tell us the market and the objective and we will negotiate against several vendors and show you the working.",
    },
    {
      q: "Do you own the hoardings you recommend?",
      a: "No, and that is deliberate. Bizex4U plans, negotiates and runs campaigns; it does not own hoardings, screens or airtime. A recommendation therefore reflects where a site sits rather than what we happen to be holding this month.",
    },
    {
      q: "How do I know my hoarding actually went up?",
      a: "Dated, geotagged photographs of every position at mounting and again during the cycle. Proof of display is a deliverable, not a favour, and it is the single most common thing a brand discovers it does not have when it asks three months later.",
    },
    {
      q: "Is a rooftop hoarding treated differently from a roadside one?",
      a: "Usually yes. A display on or above a building is commonly licensed as a sky-sign under state municipal law rather than as a ground-mounted advertisement, which can mean a different permission, a different fee basis and the building owner's written consent in addition to the municipal one. The heads differ by state, so we confirm which applies before contracting.",
    },
  ],
  related: ["unipole", "gantry", "sky-sign", "illumination", "flexing-and-mounting"],
  cities: ["kanpur", "mumbai", "bangalore"],
};

export const unipole: Term = {
  slug: "unipole",
  term: "Unipole",
  alsoCalled: ["Monopole", "Single-pole hoarding"],
  category: "Formats",
  metaTitle: "What Is a Unipole in Outdoor Advertising?",
  metaDescription:
    "A unipole is a hoarding carried on one vertical column rather than a lattice frame. Why the structure matters, where it works, and what moves its price.",
  definition:
    "A unipole is an outdoor advertising display carried on a single vertical column, so the panel stands clear above the traffic with nothing supporting it from the sides — as distinct from a hoarding on a lattice frame or one fixed to a wall or roof.",
  body: [
    "The distinction is structural, not decorative. A lattice-framed hoarding needs a footprint and something to brace against, which in practice means it sits at the edge of a plot, often behind whatever else is at the edge of that plot. A unipole occupies a few square feet at the base and puts the panel high and free-standing, so it reads over parked vehicles, boundary walls, shop signage and the general visual noise of an Indian arterial.",
    "That is why unipoles cluster on wide, fast roads, ring roads, flyover approaches and highway stretches, and why they are comparatively rare in dense old-city commercial streets where there is neither the setback for the foundation nor the sightline to justify it. In the trade the word monopole is used interchangeably; unipole is the more common Indian usage and is the term that appears in Indian vendor documentation.",
    "Because a unipole is engineered rather than assembled, structural certification matters more here than on almost any other format. Following the Ghatkopar collapse, courts and corporations across several states have tightened inspection and stability requirements for large structures, and a display on an uncertified structure is the advertiser's brand on the advertiser's exposure.",
  ],
  sections: [
    {
      q: "What is the difference between a unipole and a hoarding?",
      a: [
        "A unipole is a kind of hoarding. Hoarding is the family — any large-format outdoor panel — and unipole names the structure carrying it: one column, no side bracing.",
        "In practice the words get used as if they were alternatives, because the structure changes what the position can do. A unipole is bought for height and a clean sightline over traffic; a framed or wall-mounted hoarding is bought for a specific wall, junction or building face.",
      ],
    },
    {
      q: "Where do unipoles work best in an Indian city?",
      a: [
        "On roads where people are moving at speed and looking ahead rather than around: ring roads, bypasses, flyover approaches, the airport axis, and the arterial stretches connecting a city centre to its newer western or eastern development.",
        "They work badly in the places that look most crowded. A dense bazaar street has more people, but at walking pace, at close range, with the sightline broken every few metres — that is kiosk, shelter and shopfront territory, and a unipole there is paying for height nobody can use.",
      ],
    },
    {
      q: "What should I check before booking a unipole?",
      a: [
        "Three things, in order. Whether the structural stability certification is current and who holds it. Whether the municipal permission is current and when it next falls due for renewal — a permission expiring inside your cycle is your problem in practice even when it is the vendor's on paper. And which direction the panel faces relative to the peak flow, because a unipole facing the wrong way on a divided road is a different site from the one in the proposal.",
      ],
    },
  ],
  whenItWorks: [
    "Arterial and ring-road corridors where traffic moves at speed and sightlines are long.",
    "Airport and highway approaches, where a small number of positions covers everyone arriving.",
    "Entering a market where the job is to look established across a whole city rather than to work one catchment.",
    "Campaigns running long enough for repetition on a commute to do its work.",
  ],
  whenItDoesNot:
    "In dense old-city and bazaar streets a unipole is the wrong instrument — you are paying for height and long sightlines in a place that has neither, and the crowd is at walking pace where smaller formats at eye level do more for less. It is also a poor choice for anything with a short window or a deadline, because production, permission and mounting have a lead time that a two-week promotion cannot absorb.",
  priceFactors: [
    "The corridor, and the direction the panel faces relative to peak flow.",
    "Height and whether the position clears the visual clutter around it — the thing you are actually buying.",
    "Hold period. Long commitments move the number more on this format than on most.",
    "Illumination, quoted separately from media.",
    "Production and mounting, which cost more here than on a low panel because access is harder.",
    "The state of permission and structural certification, and who carries a renewal falling due mid-cycle.",
  ],
  faq: [
    {
      q: "Is a unipole the same as a monopole?",
      a: "Yes. Two words for the same structure. Unipole is the standard Indian usage and the one that appears in local vendor paperwork; monopole is more common internationally.",
    },
    {
      q: "How much does a unipole cost per month in India?",
      a: "We do not publish rates. The corridor, the direction it faces, the hold period and whether it is lit move the number far more than the format label does, and because we own no media every plan is negotiated against several vendors rather than quoted off a card.",
    },
    {
      q: "Do unipoles need a structural safety certificate?",
      a: "In practice, yes, and increasingly so. Several corporations tightened inspection and stability requirements for large structures following the Ghatkopar collapse, and the specific requirement is set by the local authority. We confirm current certification before recommending a position, because the exposure of an uncertified structure lands on the brand displayed on it.",
    },
  ],
  related: ["hoarding", "gantry", "illumination", "sky-sign"],
  cities: ["delhi-ncr", "nagpur", "jaipur"],
};

export const gantry: Term = {
  slug: "gantry",
  term: "Gantry",
  alsoCalled: ["Overhead gantry", "Foot-over-bridge panel"],
  category: "Formats",
  metaTitle: "What Is a Gantry in Outdoor Advertising?",
  metaDescription:
    "A gantry is an advertising structure spanning a carriageway overhead, so traffic passes beneath it. Where it works in Indian cities and what it costs to run.",
  definition:
    "A gantry is an outdoor advertising structure that spans a carriageway overhead, so traffic passes underneath it rather than alongside — most often a purpose-built span across a road, or advertising panels carried on a foot-over-bridge.",
  body: [
    "A gantry is the only common street format that sits directly in the driver's line of travel. Everything else asks the eye to move sideways; a gantry is straight ahead. That is its whole advantage and it is a real one, particularly on approaches to a junction where traffic is slowing anyway.",
    "The trade-off is that gantries are scarce and heavily controlled. Because the structure hangs over a live carriageway, permission usually involves the road-owning authority as well as the municipal advertisement wing, and in several cities gantry rights are tendered as a defined set rather than permitted case by case. Foot-over-bridge panels behave similarly — the bridge is public infrastructure, so the advertising rights are typically held under a concession.",
    "A gantry is also the format most likely to be quoted to you as available when it is not. Because it looks impressive in a proposal and everybody wants one, it is worth asking specifically who holds the current right and when it expires, rather than accepting the position on a plan.",
  ],
  sections: [
    {
      q: "How is a gantry different from a hoarding?",
      a: [
        "Position relative to the traffic. A hoarding sits beside the road and is read at an angle; a gantry spans the road and is read head-on by everyone travelling under it.",
        "That changes what it is good at. A gantry delivers near-unavoidable exposure to one direction of traffic on one stretch. A hoarding campaign delivers repeated exposure across a catchment. They are different jobs, and a single gantry is not a substitute for a plan.",
      ],
    },
    {
      q: "Who grants permission for a gantry?",
      a: [
        "Typically more than one body, which is why lead times are longer. The municipal advertisement wing licenses the display, and the authority that owns or maintains the carriageway has a say in the structure over it. Where the road is a state highway or a national highway inside city limits, that adds a further authority.",
        "In several cities the rights are tendered rather than granted individually. We confirm which regime applies and who currently holds the right before a gantry goes into a plan, because a gantry on a proposal is not the same thing as a gantry you can book.",
      ],
    },
  ],
  whenItWorks: [
    "Junction and flyover approaches, where traffic is already slowing and looking ahead.",
    "A single dominant statement on the route into a city — an airport road, a highway entry, a stadium approach.",
    "Event and season windows where one unmissable position beside a broader plan does more than adding another dozen panels.",
    "Foot-over-bridge panels in dense commuter locations, where the audience is on foot and stationary for a moment.",
  ],
  whenItDoesNot:
    "A gantry is a bad first buy. It is expensive per position, scarce, slow to permission, and it covers one direction on one stretch — which means a campaign built around a gantry has bought a landmark and no coverage. It is also the wrong format for anything needing more than a few words, because it is read at speed and head-on, with the reader's attention already committed to the road.",
  priceFactors: [
    "The corridor and which direction of flow it faces.",
    "Whether the right is tendered or individually permitted, and how much of the term is left to run.",
    "Hold period and whether the position is contested by other advertisers that season.",
    "Illumination and, on newer spans, whether the display is printed or digital.",
    "Production, mounting and the traffic-management cost of installing over a live carriageway.",
  ],
  faq: [
    {
      q: "Can I book a single gantry for a two-week campaign?",
      a: "Sometimes, but it is rarely the right buy. The production and mounting cost of a gantry is largely fixed regardless of how long the display runs, so a short window pays full setup for a fraction of the exposure. If the objective genuinely is two weeks, transit and retail formats usually do more with the same money.",
    },
    {
      q: "Are foot-over-bridge panels the same as a gantry?",
      a: "Commercially they behave similarly — both span the road and are usually held under a concession rather than permitted individually — but the audience differs. A gantry is read by traffic passing beneath at speed; a foot-over-bridge is also read by the people using the bridge, at walking pace and close range, which allows a slightly longer message.",
    },
  ],
  related: ["hoarding", "unipole", "bus-queue-shelter", "advertisement-tax"],
  cities: ["jaipur", "delhi-ncr"],
};

export const busQueueShelter: Term = {
  slug: "bus-queue-shelter",
  term: "Bus Queue Shelter",
  alsoCalled: ["BQS", "Bus shelter", "Bus stop advertising"],
  category: "Formats",
  metaTitle: "What Is a Bus Queue Shelter (BQS)?",
  metaDescription:
    "A bus queue shelter is the roofed structure at a bus stop carrying advertising panels. Why BQS is the Indian term and when it earns its place.",
  definition:
    "A bus queue shelter, usually written BQS, is the roofed structure at a bus stop that carries advertising panels on its side and rear faces — read at close range by waiting passengers and at short range by passing traffic.",
  body: [
    "BQS is the Indian trade term and the one that appears in municipal tenders, transport-undertaking contracts and vendor rate sheets. Bus stop advertising is what a client says; bus queue shelter is what the paperwork says. If you are reading a concession document, it will say BQS.",
    "The format is unusual in reaching two audiences at once with the same panel. Somebody waiting for a bus is stationary, close, and has minutes rather than seconds — which means a BQS panel can carry a sentence, a price point, an address, a QR code, things a hoarding cannot. The same panel is read at short range by traffic on the same road, briefly, as a small-format street presence.",
    "Rights are almost always held under a concession. A municipal corporation or the city transport undertaking tenders the right to build, maintain and sell advertising on shelters across a network, usually on a multi-year term, in exchange for the shelters themselves. That is why BQS inventory in a given city tends to sit with one or two holders rather than being scattered, and why a plan needs to know which network it is buying into.",
  ],
  sections: [
    {
      q: "What does BQS stand for?",
      a: [
        "Bus queue shelter. It is the standard abbreviation in Indian outdoor and appears throughout municipal and transport tender documents.",
      ],
    },
    {
      q: "Who owns bus queue shelters in an Indian city?",
      a: [
        "Usually a concessionaire rather than the city directly. The municipal corporation or the transport undertaking tenders the right to build and maintain shelters and to sell the advertising on them, typically for several years, and the shelters are the consideration.",
        "The practical consequence for a buyer is that BQS is a network buy, not a site buy. You are choosing which routes and which catchments, and the holder of the concession decides what is available on them.",
      ],
    },
    {
      q: "Is a bus queue shelter better than a hoarding?",
      a: [
        "It is a different instrument, not a cheaper one. A hoarding buys recognition across a catchment at distance; a BQS buys attention at close range from a stationary reader, which is the only street format where a longer message genuinely works.",
        "Where BQS consistently outperforms its reputation is in hyperlocal work — a clinic, a showroom, a coaching centre, a new outlet — because the panels can be selected along the routes that actually feed the location rather than across a city.",
      ],
    },
  ],
  whenItWorks: [
    "Hyperlocal campaigns where the panels sit on the routes that feed a specific outlet or catchment.",
    "Messages that need more than four words — an address, a price point, an offer, a phone number.",
    "Reaching the public-transport-dependent audience that a car-facing arterial plan misses entirely.",
    "Cities where street advertising is restricted and transit carries a larger share of the available media.",
  ],
  whenItDoesNot:
    "BQS will not build city-wide fame on its own. The panels are small, at street level, and each one works a short stretch — reaching a whole city through shelters means a large number of them, at which point an arterial plan usually does the same job for less. It is also a poor buy where the target audience does not use buses: in some markets the affluent catchment simply is not at the shelter, and a plan that buys BQS there is buying the right format in the wrong place.",
  priceFactors: [
    "Which routes and catchments, not how many panels — the network chosen is the decision.",
    "The concession holder, and how much of the term is left to run.",
    "Whether the panels are lit, and whether the shelter is maintained to a standard your brand should sit on.",
    "Hold period and season.",
    "Production, which is cheaper per panel than large format but multiplied across many positions.",
  ],
  faq: [
    {
      q: "How many bus queue shelters do I need for a campaign?",
      a: "It depends on whether the objective is a catchment or a city. For a single outlet, panels on the two or three routes that actually feed it will usually outperform a scattered city-wide count. For city-wide presence you need a great many, and at that volume an arterial plan is often the better instrument. We would rather establish the catchment first than quote a number of panels.",
    },
    {
      q: "Do you own bus queue shelters?",
      a: "No. Bizex4U owns no media. BQS rights sit with the concessionaire who holds the municipal or transport-undertaking tender in that city, and we negotiate access against the brief.",
    },
    {
      q: "Can a bus queue shelter panel carry a QR code?",
      a: "Yes, and it is one of the few street formats where a QR code genuinely works, because the reader is stationary and close for minutes rather than seconds. On a hoarding read at speed it is decoration.",
    },
  ],
  related: ["pole-kiosk", "hoarding", "illumination", "monitoring-photographs"],
  cities: ["chandigarh", "kolkata", "chennai"],
};

export const poleKiosk: Term = {
  slug: "pole-kiosk",
  term: "Pole Kiosk",
  alsoCalled: ["Lamp post panel", "Pole panel", "Street pole branding"],
  category: "Formats",
  metaTitle: "What Is a Pole Kiosk in Outdoor Advertising?",
  metaDescription:
    "A pole kiosk is a small advertising panel fixed to a street light pole, bought in runs along a stretch. How the format works and where it beats large format.",
  definition:
    "A pole kiosk is a small advertising panel — usually a pair, back to back — fixed to a street light or utility pole, and bought as a run of consecutive poles along a stretch of road rather than as a single position.",
  body: [
    "The unit of purchase is the run, not the panel, and that is the whole logic of the format. One pole kiosk is invisible. Thirty consecutive poles along an approach road is a corridor that has visibly been taken, and the repetition over a few hundred metres does the work that a single large panel does through size.",
    "Because the panels are small and close to the reader, pole kiosks sit naturally where traffic is slow — market approaches, college and hospital roads, temple and event routes, the last stretch before a showroom. They are also the standard format for anything with a route: a procession, a festival window, an exhibition, a store opening.",
    "Rights are typically municipal, and often tendered by stretch or by ward rather than individually, because the poles themselves are public property carrying public lighting. In many cities the permission is seasonal or event-linked by design, which suits the format — it is a burst instrument rather than a year-round presence.",
  ],
  sections: [
    {
      q: "How many pole kiosks make a campaign?",
      a: [
        "Enough consecutive poles to be read as a sequence rather than as scattered panels. The effect depends on continuity along a stretch, so a shorter unbroken run generally beats a longer scattered one for the same money.",
        "The corollary is that pole kiosks bought singly, or spread thinly across a city to hit a panel count, waste the format entirely. If a proposal offers you a number of kiosks without naming the stretches, it is selling a count rather than a plan.",
      ],
    },
    {
      q: "When is a pole kiosk better than a hoarding?",
      a: [
        "When the audience is slow, close and on a known route. A market approach, a college road, a hospital or coaching belt, the final approach to an outlet, or a festival and procession route — these are places where a run of small panels at eye level is read and a large panel overhead is not.",
        "Pole kiosks are also the cheaper way to answer a short window. Production and mounting are quick, the permission is often seasonal by design, and a two-week burst does not carry the same setup penalty it does on large format.",
      ],
    },
  ],
  whenItWorks: [
    "Runs along a defined approach — to a market, a campus, an outlet, an event.",
    "Festival, procession and exhibition windows, where the crowd follows a known route.",
    "Store openings and hyperlocal launches, where the last few hundred metres are the whole job.",
    "Adding street-level frequency underneath an arterial hoarding plan.",
  ],
  whenItDoesNot:
    "Pole kiosks do not build city-wide recognition, and buying them by count rather than by stretch is the most common way to waste money on the format. They are also vulnerable in a way large format is not: small panels at street level are exposed to weather, traffic and removal, so a campaign needs a maintenance and replacement provision and somebody actually checking. Without monitoring photographs you will not know what is still up.",
  priceFactors: [
    "The stretch, and how many consecutive poles are available on it.",
    "Season — festival and event windows on a procession route price differently from the same stretch in a quiet month.",
    "Whether the permission is annual or event-linked in that city.",
    "Production volume, since the cost is per panel across many panels.",
    "Maintenance and replacement provision over the cycle.",
  ],
  faq: [
    {
      q: "How much do pole kiosks cost in India?",
      a: "We do not publish rates. On this format the stretch and the season move the number far more than the panel count does, and because the permission regime is municipal it differs between cities on the same road network. Tell us the route and the window and we will negotiate it.",
    },
    {
      q: "Are pole kiosks worth it for a single store?",
      a: "Often, yes — it is one of the few formats where a single-outlet budget buys something that actually works, because a run on the approach road reaches the people who can physically get to the store. A hoarding for the same money reaches a wider audience of whom most will never pass the shop.",
    },
    {
      q: "How long do pole kiosk panels last?",
      a: "Less time than large format, and the honest planning assumption is that some will need replacing inside the cycle. They sit at street level in weather and traffic. Any plan that does not carry a maintenance provision is a plan that quietly degrades.",
    },
  ],
  related: ["bus-queue-shelter", "hoarding", "flexing-and-mounting", "monitoring-photographs"],
  cities: ["varanasi", "indore", "patna"],
};
