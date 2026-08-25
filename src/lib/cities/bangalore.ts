import type { City } from "./types";

/* Bangalore. The regulatory sequence IS the page, and almost every
   competitor's Bangalore page is out of date on it:

   2018  BBMP bye-laws ban commercial hoardings on the public right of way
   2019  State rules conflict with the council ban; the market freezes
   2024  July — the six-year ban is lifted by state notification
   2025  July — BBMP Advertisement Bye-Laws 2024 notified under the
         Greater Bengaluru Governance Act, repealing the 2006 and 2018 rules
   2025  Sep — BBMP CEASES TO EXIST, replaced by the Greater Bengaluru
         Authority and five city corporations
   2026  Jun — the High Court is seeking updates from the GBA on unlawful
         LED billboards

   Anything naming BBMP as the current licensing authority is wrong.

   Named "Bangalore" rather than "Bengaluru" because that is the word the
   buyers type; the prose uses both. */

export const bangalore: City = {
  slug: "bangalore",
  name: "Bangalore",
  alsoKnownAs: ["Bengaluru"],
  state: "Karnataka",
  region: "South",

  metaTitle: "Outdoor Advertising in Bangalore — Hoardings & Metro Media",
  metaDescription:
    "Hoarding, unipole, metro and transit advertising in Bengaluru, planned from catchment rather than from a site list — and current on the post-ban bye-laws and the GBA transition.",

  h1Lead: "Outdoor advertising in",
  h1Accent: "Bangalore",
  heroLede:
    "Bengaluru spent six years with commercial hoardings banned outright. The ban lifted in 2024, new bye-laws landed in 2025, and BBMP — the authority everyone still names — no longer exists. Most Bangalore media plans in circulation are describing a city that is two regulators out of date.",

  market: [
    "Bengaluru is the strangest outdoor market in India right now, and the reason is regulatory rather than commercial. From 2018 the BBMP bye-laws banned commercial billboards and hoardings on the public right of way; competing state rules in 2019 permitted them with restrictions; the two deadlocked and the market effectively froze for six years. Physical large-format stock was dismantled. The ban was lifted by state notification in July 2024, new bye-laws were notified in July 2025 — and then in September 2025 BBMP itself was replaced by the Greater Bengaluru Authority and five new city corporations.",
    "The practical consequence is a supply distortion you will not find anywhere else. Compliant large-format inventory in a city of this size is genuinely scarce and is only now rebuilding, because the structures came down and have not all gone back up. Expect thin availability and firm pricing on legitimate sites. For six years, transit, mall and in-campus media absorbed the demand, which is why Bengaluru's non-street formats are unusually well developed relative to comparable markets.",
    "Geographically the city is radial with a ring, not linear. The Outer Ring Road is the defining corridor and the tech belt from Marathahalli through Bellandur to Sarjapur is arguably the highest-value white-collar audience in India — and the worst congestion, which for advertising means long dwell time. Hosur Road and the Electronic City Elevated Expressway run south; Bellary Road and NH-44 run north to the airport; Whitefield, Sarjapur and Bannerghatta Roads carry the eastern and southern growth; Mysuru and Tumakuru Roads carry the west and northwest.",
    "The metro changed the map decisively and recently. Namma Metro now runs roughly 96 kilometres across 83 stations. The Purple Line completed in October 2023, the Green Line in November 2024, and the Yellow Line from RV Road to Bommasandra opened in August 2025 — that last one matters most commercially, because it finally put Electronic City on the metro. Meanwhile the old core around Majestic, Chickpet, Malleswaram and Basavanagudi holds the vernacular Kannada volume that the ORR corridor never touches.",
  ],

  crowdPlaces: [
    {
      place: "Majestic — Kempegowda Bus Station and KSR City Railway Station",
      note: "The single densest node in the city: intercity bus, long-distance rail and the Purple and Green line metro interchange stacked together. Peaks early morning, evening and very heavily through festival travel weeks.",
    },
    {
      place: "The Outer Ring Road tech belt",
      note: "Marathahalli through Bellandur to Sarjapur. The highest-income commuting crowd in the city and the worst congestion in it — which, for advertising, means unusually long dwell time. Peaks weekday mornings and from six to nine in the evening.",
    },
    {
      place: "MG Road and Brigade Road",
      note: "The central retail and nightlife spine. Young, English-speaking and aspirational, concentrated from Friday to Sunday evening.",
    },
    {
      place: "Commercial Street",
      note: "Dense street retail — apparel and jewellery — with a heavily female crowd. Weekend afternoons and the festive and wedding run.",
    },
    {
      place: "Chickpet and KR Market",
      note: "Wholesale textiles and produce. A trader and mass crowd, Kannada-dominant, peaking in weekday trading mornings — an entirely different Bengaluru from the ORR.",
    },
    {
      place: "Electronic City",
      note: "The southern IT campus concentration, and newly metro-connected via the Yellow Line. A captive weekday commuter audience whose access changed materially in 2025.",
    },
    {
      place: "M. Chinnaswamy Stadium",
      note: "Cricket, in the middle of the central business district beside Cubbon Park. Episodic but very large, peaking through the IPL window.",
    },
    {
      place: "ISKCON Temple, Rajajinagar",
      note: "Religious footfall drawing across income bands, peaking at weekends, Janmashtami and Deepavali.",
    },
  ],

  formatGuide: [
    {
      title: "Hoarding advertising in Bangalore",
      kicker: "Large format",
      body: "Legal again, but on terms that cap density hard. Under the current bye-laws, advertising is allocated by auction on notified roads and areas; it is not permitted on roads narrower than eighteen metres except in defined commercial exceptions; and there is a minimum spacing of 175 metres between hoardings. That spacing rule alone limits how many sites a corridor can carry, which — combined with six years of dismantled stock — is why compliant large-format in Bengaluru is scarce and firmly priced. Anyone offering you abundant Bengaluru hoardings should be asked which auction they came from.",
    },
    {
      title: "Unipole advertising in Bangalore",
      kicker: "Arterial",
      body: "Unipoles suit the ORR, the Bellary Road airport axis and the Hosur Road corridor, where the roads are wide enough to clear the eighteen-metre threshold and the audience is affluent and vehicular. The airport approach in particular reaches a business-travel audience that no other single format in the city isolates. As with all large format here, the question to settle first is whether the position sits on a notified road at all.",
    },
    {
      title: "LED screen and DOOH advertising in Bangalore",
      kicker: "Digital",
      body: "Permitted, with real limits and live enforcement. The bye-laws restrict rapidly flashing LED content and moving video, impose luminance and timing restrictions including a switch-off after eleven at night, and the Karnataka High Court has been seeking updates from the Greater Bengaluru Authority on unlawful LED billboards in the city as recently as mid-2026. Digital in Bengaluru is a good buy on a compliant site and a genuine liability on a non-compliant one, and the difference is not visible from the pavement.",
    },
    {
      title: "Namma Metro advertising",
      kicker: "Transit",
      body: "The format that carried Bengaluru through the ban years and is now the most developed in the city. Roughly 96 kilometres and 83 stations across the Purple, Green and Yellow lines, with the Yellow Line finally connecting Electronic City. Media rights on the Green Line — exterior train wraps and interior advertising across the whole line — sit with a named concessionaire on the public record, and BMRCL has reintroduced pillar advertising after a seven-year gap. It reaches the same commuters several times a week, so it builds a message rather than announcing one.",
    },
    {
      title: "Bus queue shelter and street furniture",
      kicker: "Street level",
      body: "BMTC shelters and street-level furniture reach the pedestrian and bus-borne population across the old core and the outer residential belts — Majestic, Chickpet, Malleswaram, Basavanagudi, Yeshwanthpur — where a large share of the city moves without a car. In a market where large format is capacity-constrained, street-level formats do proportionally more of the work here than they would in Chennai or Hyderabad.",
    },
    {
      title: "Pole kiosks and hyperlocal media",
      kicker: "Catchment",
      body: "Bengaluru's neighbourhoods behave as distinct markets — Koramangala, Indiranagar, Jayanagar, Whitefield, HSR, Hebbal each with their own trade area — and a run of pole kiosks along the approach roads is how one of those catchments actually gets covered. For store launches, clinics, restaurants and anything with a defined trade area, this is normally where a Bengaluru plan should start rather than finish.",
    },
    {
      title: "Mall, campus and in-office media",
      kicker: "Retail and workplace",
      body: "Bengaluru's tech campuses and organised retail are unusually deep as media environments, precisely because they absorbed six years of demand that could not go outdoors. In-campus, mall and multiplex media reach the ORR and Whitefield white-collar audience at close range, in a controlled environment, with none of the auction and spacing constraints that govern the street. For most brands selling to that audience, this tier deserves more of the budget than a national template would give it.",
    },
    {
      title: "Society and lift branding in Bangalore",
      kicker: "Residential",
      body: "The city's large gated developments through Whitefield, Sarjapur, Hebbal and north Bengaluru concentrate high-income households in a way that makes residential media efficient — one negotiation reaching thousands of homes at close range with almost no competing message. It also sidesteps the street-media supply constraint entirely, which is why it has become a disproportionately useful format in this market specifically.",
    },
  ],

  localMedia: {
    press: [
      {
        title: "Vijaya Karnataka",
        language: "Kannada",
        note: "The largest Kannada daily presence in the city, reaching urban and district Kannada readership together. The default first line of a Kannada press plan.",
      },
      {
        title: "Prajavani",
        language: "Kannada",
        note: "From the Deccan Herald group, with an educated and opinion-forming Kannada readership rather than a mass-market one.",
      },
      {
        title: "Kannada Prabha",
        language: "Kannada",
        note: "A Kannada mass daily with a broad household readership.",
      },
      {
        title: "Vijayavani",
        language: "Kannada",
        note: "Kannada with strong district reach — the right title when the campaign extends beyond the metro into Karnataka.",
      },
      {
        title: "Deccan Herald",
        language: "English",
        note: "Bengaluru's home English daily, with a local civic and policy readership. The English title with genuine Bengaluru identity rather than a national edition dropped into the city.",
      },
      {
        title: "The Times of India",
        language: "English",
        note: "The broad English mass-market daily, reaching the tech and corporate population most efficiently.",
      },
      {
        title: "The Hindu",
        language: "English",
        note: "An educated, older and institutional readership, with a strong south India franchise.",
      },
      {
        title: "Bangalore Mirror",
        language: "English",
        note: "Worth naming precisely: unlike its Mumbai and Pune siblings, Bangalore Mirror remained a daily through the 2020 restructuring. It is a compact aimed at young urban professionals and it is still publishing daily.",
      },
    ],
    radio: [
      { station: "Radio Mirchi", frequency: "98.3", note: "Kannada contemporary — the broadest single commercial station in the market." },
      { station: "Radio City", frequency: "91.1", note: "Kannada mass, with a broad daytime schedule." },
      { station: "Big FM", frequency: "92.7", note: "Kannada mass and retro." },
      { station: "Red FM", frequency: "93.5", note: "Hindi. Reaches the very large non-Kannada-speaking working population that Kannada stations do not." },
      { station: "Mirchi 95", frequency: "95.0", note: "Hindi — the second Hindi option, and a genuine segment in a city with this much internal migration." },
      { station: "Radio Indigo", frequency: "91.9", note: "English. Urban, international playlist, reaching the tech and expatriate audience." },
      { station: "Radio One", frequency: "94.3", note: "English-leaning, corporate and professional listenership." },
      { station: "Fever FM", frequency: "104.0", note: "Contemporary, urban-leaning." },
      {
        station: "Akashvani Bengaluru",
        frequency: "FM Rainbow 101.3 · Vividh Bharati 102.9 · Amrutavarshini 100.1",
        note: "Public service across three services, including Amrutavarshini's classical and cultural programming — a distinct and loyal audience the commercial stations do not reach.",
      },
    ],
    radioNote:
      "Bengaluru is a genuinely three-language radio market and that is the thing to get right. Kannada carries the settled local audience and matters for local credibility; Hindi reaches the large internal-migrant working population; English reaches the tech and expatriate belt in a way it does not in Chennai. Drive time is long here because ORR congestion is long — the listening window on the tech corridors stretches well beyond the standard commute hours. Frequencies and branding change, so we confirm what is on air at the point of buying.",
  },

  transit: {
    lede:
      "Bengaluru's transit media is disproportionately developed for a city this size, because for six years it was one of the few places outdoor demand could legally go.",
    modes: [
      {
        mode: "Namma Metro",
        note: "Roughly 96 kilometres and 83 stations across the Purple, Green and Yellow lines, with the Yellow Line connecting Electronic City since August 2025. Exclusive advertising rights for the entire Green Line — exterior train wraps and interior advertising — sit with a named concessionaire on the public record, and BMRCL has reintroduced pillar advertising after a seven-year gap.",
      },
      {
        mode: "BMTC bus",
        note: "The city bus network, reaching across the whole urban area rather than along one corridor, and the format that covers the older core and outer residential belts most efficiently. KSRTC handles intercity.",
      },
      {
        mode: "Kempegowda International Airport",
        note: "Terminals 1 and 2 under BIAL, reached along the Bellary Road and NH-44 axis. Terminal media and the approach corridor can be planned as one sequence to a business-travel audience.",
      },
      {
        mode: "Suburban rail",
        note: "Still under development and not yet a usable commuter media network. We mention it because it will matter, and because it is worth knowing that it does not matter yet.",
      },
    ],
  },

  costDrivers: [
    {
      factor: "Scarcity, and why it exists",
      note: "The dominant variable in Bengaluru. Six years of ban dismantled the physical stock, and the current bye-laws cap density through the 175-metre spacing rule and the eighteen-metre road-width threshold. Compliant large format is genuinely short relative to a city of this size, and the price reflects supply rather than negotiation.",
    },
    {
      factor: "Whether the road is notified",
      note: "Allocation is auction-based on notified roads and areas. A site on a road narrower than eighteen metres, outside the commercial exceptions, cannot be licensed at all. A rate quoted for a position that cannot be permitted is not a rate.",
    },
    {
      factor: "Materials compliance",
      note: "Plastic and PVC flex are banned and biodegradable materials are mandatory, and diesel generators are prohibited. This raises the genuine production cost of a compliant Bengaluru campaign relative to other cities, and it is a line worth seeing rather than absorbing.",
    },
    {
      factor: "Licence horizon",
      note: "Licences run five years, renewable in three-year options. That is a longer commitment than a monthly outdoor cycle and it should be evaluated as an asset decision rather than a campaign one.",
    },
    {
      factor: "ORR versus the old core",
      note: "A Marathahalli or Bellandur position and a Chickpet or Yeshwanthpur position are different products at very different prices. You are paying for household income and dwell time, not for headcount — and on the ORR the dwell time is the point.",
    },
    {
      factor: "Season",
      note: "Dasara through Deepavali is the retail peak, the IPL window lifts stadium-linked and city-centre demand, and Aero India in February brings a national and international audience in alternate years.",
    },
  ],

  compliance: {
    authority: "Greater Bengaluru Authority (GBA) — not BBMP",
    body: [
      "Start with the correction, because almost every Bangalore media deck still gets it wrong: BBMP ceased to exist in September 2025 and was replaced by the Greater Bengaluru Authority and five new city corporations. Any proposal naming BBMP as the current licensing authority was written against a body that no longer issues permissions.",
      "The sequence matters and is worth stating plainly. In 2018 the BBMP council banned commercial billboards and hoardings on the public right of way following a High Court order on illegal hoardings. In 2019 the state issued competing rules permitting hoardings with restrictions, and the resulting deadlock froze the market for six years. In July 2024 the state notified a new advertisement policy ending the ban. In July 2025 the BBMP Advertisement Bye-Laws 2024 were notified under the Greater Bengaluru Governance Act, 2024, repealing the 2006 and 2018 versions. In September 2025 the authority changed hands to the GBA. As of mid-2026 the Karnataka High Court has been seeking updates from the GBA on unlawful LED billboards in the city — enforcement is live.",
      "What is actually permitted now: licensed advertising through auction-based allocation on notified roads and areas; not on roads narrower than eighteen metres except in defined commercial exceptions; a minimum 175 metres between hoardings. Banned: plastic and PVC flex, with biodegradable materials mandatory; diesel generators; rapidly flashing LED content and moving video; misleading or indecent advertising. Digital carries luminance and timing restrictions including a switch-off after eleven at night. Licences run five years with three-year renewal options, the Chief Commissioner oversees licensing, and an Advertisement Regulatory Committee provides appellate oversight. Self-advertisement within size limits is fee-exempt. We confirm the current status of any position against the licensing body before it enters a plan.",
    ],
  },

  season: [
    {
      window: "September to November — Dasara and Deepavali",
      note: "The retail peak, with organised retail and durables at their heaviest and the malls running their busiest calendar of the year.",
    },
    {
      window: "March to May — IPL at Chinnaswamy",
      note: "A central-city stadium in the middle of the business district, which means match-day crowds land on top of an ordinary weekday. Lifts city-centre and stadium-linked demand sharply.",
    },
    {
      window: "Bengaluru Karaga",
      note: "The city's own historic festival and a distinctly local, Kannada, old-core event. A crowd and a moment that a pan-India calendar will not contain.",
    },
    {
      window: "February — Aero India, in alternate years",
      note: "A biennial international event at Yelahanka drawing a national and global trade audience. Worth planning around deliberately when it falls, and worth knowing when it does not.",
    },
  ],

  planning:
    "We plan Bengaluru by settling availability before we settle strategy, which is the reverse of the usual order and is specific to this market. Six years of ban and the current spacing and road-width rules mean compliant large format is short, so the first question is what can legitimately be bought at all. After that, the split: the ORR and Whitefield tech belt buys the highest-value white-collar audience in India, and the old Kannada core buys a settled local one — and the two need different languages as well as different sites. Transit, campus and residential media usually carry more of a Bengaluru plan than they would elsewhere, and that is a strength of this market rather than a compromise.",

  faq: [
    {
      q: "Are hoardings allowed in Bangalore now?",
      a: "Yes — the six-year ban was lifted by state notification in July 2024, and the BBMP Advertisement Bye-Laws 2024 were notified in July 2025 under the Greater Bengaluru Governance Act. But note two constraints that shape every plan: advertising is not permitted on roads narrower than eighteen metres except in defined commercial exceptions, and there is a minimum 175 metres between hoardings. Allocation is auction-based on notified roads. So legal, yes — abundant, no.",
    },
    {
      q: "Who licenses outdoor advertising in Bangalore?",
      a: "The Greater Bengaluru Authority, not BBMP. BBMP ceased to exist in September 2025 and was replaced by the GBA and five new city corporations. This is worth checking on any proposal you receive — a deck that names BBMP as the licensing body was written against an authority that no longer issues permissions, which usually means the rest of its regulatory content is equally stale.",
    },
    {
      q: "How much does hoarding advertising cost in Bangalore?",
      a: "It depends on the corridor, the size, the illumination and the duration — and in Bengaluru, unusually, on scarcity, because six years of ban dismantled the physical stock and the spacing rules cap how much can come back. We do not publish a rate card. We are not selling our own inventory, so a published rate would tell you what we would like to charge rather than what the market will take. Send the brief and the budget and you will get real numbers against real positions.",
    },
    {
      q: "Why is outdoor inventory so limited in Bangalore?",
      a: "Because the structures came down. From 2018 to 2024 commercial hoardings on the public right of way were banned, and the physical stock was dismantled rather than mothballed. It is rebuilding now, but the current bye-laws cap density through the 175-metre spacing requirement and the eighteen-metre road-width threshold. For a city this size, compliant large format is genuinely short — which is also why transit, mall and campus media are unusually well developed here.",
    },
    {
      q: "Can I use PVC flex for a Bangalore campaign?",
      a: "No. Plastic and PVC flex are banned under the current bye-laws and biodegradable materials are mandatory. Diesel generators are also prohibited. This raises the honest production cost of a compliant Bengaluru campaign relative to other cities, and we quote it separately rather than burying it — a quote that matches another city's flex pricing has probably not accounted for this.",
    },
    {
      q: "What are the rules for LED screens in Bangalore?",
      a: "Rapidly flashing LED content and moving video are banned outright, and digital carries luminance and timing restrictions including a switch-off after eleven at night. Enforcement is live — the Karnataka High Court has been seeking updates from the GBA on unlawful LED billboards as recently as mid-2026. A digital site here is a good buy when it is compliant and a real liability when it is not, and the difference is not visible from the street.",
    },
    {
      q: "Which areas of Bangalore are best for outdoor advertising?",
      a: "It depends on the audience. The ORR belt from Marathahalli through Bellandur to Sarjapur, plus Whitefield and Electronic City, reach the highest-income tech population. MG Road, Brigade Road and Commercial Street reach young urban retail. Majestic, Chickpet and KR Market reach vernacular Kannada volume at a different income level. Koramangala, Indiranagar and Jayanagar behave as their own neighbourhood markets. We would rather establish the audience first than lead with a location list.",
    },
    {
      q: "Is Namma Metro advertising worth buying?",
      a: "Often, yes, and more so here than in most Indian cities — partly because it is well developed and partly because street inventory is short. Roughly 96 kilometres and 83 stations, with the Yellow Line now reaching Electronic City. Green Line media rights sit with a named concessionaire on the public record, and pillar advertising has returned after a seven-year gap. It reaches the same commuters repeatedly, so it builds a message well and announces a one-week offer badly.",
    },
    {
      q: "Should a Bangalore campaign be in Kannada?",
      a: "Usually in part, and the balance is worth arguing about rather than defaulting. Kannada carries the settled local audience and carries local credibility that no English title transfers. But Bengaluru has a very large internal-migrant working population, so Hindi does real work here, and English reaches the tech and expatriate belt in a way it does not in Chennai. It is a genuine three-language market and we plan it as one.",
    },
    {
      q: "Do you own hoardings in Bangalore?",
      a: "No. We plan, negotiate and run campaigns; we do not hold media. In a market where supply is short and auction-allocated, that independence is worth more than usual — we have no site we need to fill and no reason to talk you into a position because it happens to be ours.",
    },
    {
      q: "How do I know my advertisement actually went up?",
      a: "Dated, geotagged photographs of every position at mounting and again during the cycle. In Bengaluru that record matters particularly, because enforcement against non-compliant structures is active — a site can come down mid-campaign, and monitoring is how you find out in time to replace it rather than at the end.",
    },
    {
      q: "Can you plan Bangalore alongside other southern markets?",
      a: "Yes, and given the supply constraints here it often makes a plan work better. We plan outdoor across more than forty Indian cities, and Bengaluru sits naturally with Chennai, Hyderabad, Mysuru and Coimbatore. Where Bengaluru large format is short, weight can be redistributed across the cluster rather than overpaying for a scarce local site — which is a decision only someone without inventory to sell will make in your favour.",
    },
  ],

  nearby: ["Chennai", "Hyderabad", "Pune", "Kochi"],
};
