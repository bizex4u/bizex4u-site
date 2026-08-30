import type { City } from "./types";

/* Chennai. IMPORTANT: Radio One 94.3 has dropped off the MIB operational
   list for Chennai — six private FM stations here, not seven. A lot of
   "top 10 radio stations in Chennai" pages are simply wrong, including
   ones that list Red FM, which is not on the Chennai list at all.

   The illegal-banner issue is referred to without naming the person who
   died in 2019. The fact matters; the name is not ours to use for
   marketing copy. */

export const chennai: City = {
  slug: "chennai",
  name: "Chennai",
  alsoKnownAs: ["Madras"],
  state: "Tamil Nadu",
  region: "South",

  metaTitle:
    "Outdoor Advertising in Chennai — Hoardings & Metro",
  metaDescription:
    "Hoarding, unipole, metro, MRTS and bus advertising in Chennai, planned around Anna Salai, OMR and the T. Nagar retail density.",

  h1Lead: "Outdoor advertising in",
  h1Accent: "Chennai",
  heroLede:
    "Chennai grew along a coast rather than around a centre, and it kept growing south. The old volume is still at T. Nagar and Parry's; the money went down OMR and GST Road. The two need different plans and usually get the same one.",

  market: [
    "Chennai is a linear coastal city that expanded south and west rather than outwards in a ring, and the shape of the city is the shape of the media plan. Anna Salai runs as the central spine; OMR — Rajiv Gandhi Salai — carries the IT corridor south towards Sholinganallur; GST Road runs to the airport and the industrial belt; ECR carries the leisure and weekend traffic. Almost everything worth buying sits on one of those four.",
    "The historic core still holds the volume. T. Nagar's Ranganathan Street and Usman Road form one of the densest retail streets in the country, George Town and Parry's Corner carry the wholesale trade, and Koyambedu's bus terminal and wholesale market move a very large daily population. None of that is affluent in the way the southern corridor is, and it does not respond to the same message.",
    "The money migrated south and southwest. The OMR and Perungudi–Sholinganallur belt holds the IT employment; Adyar, Besant Nagar, Anna Nagar and Nungambakkam hold the settled affluent households; Velachery and Pallikaranai hold the young-professional middle. Kathipara at Guindy is where the geography knots together, and it is one of the most valuable positions in the city for exactly that reason.",
    "Metro Phase 2 is redrawing the western half of the map. Three new corridors substantially larger than Phase 1 are building out, with the Poonamallee–Porur stretch among the first sections to come into service. That pulls advertising value west into Porur, Vadapalani and Poonamallee, which were secondary markets until very recently. Planning Chennai from a three-year-old view of the city now produces measurably worse results than planning from the current one.",
  ],

  crowdPlaces: [
    {
      place: "T. Nagar — Ranganathan Street and Usman Road",
      note: "The densest textile and jewellery retail street in the country, and an almost entirely pedestrian crowd. It runs at extraordinary levels through the Aadi discount month, Diwali and the wedding season.",
    },
    {
      place: "Koyambedu — CMBT and the wholesale market",
      note: "The mofussil bus interchange sitting beside the region's largest wholesale vegetable and flower market. Two different crowds on two different clocks — the market peaks before dawn, the terminal in the evening and before festivals.",
    },
    {
      place: "Chennai Central and Park",
      note: "Long-distance rail plus the suburban interchange. Sustained volume all day with genuine dwell time, and heavy peaks on festival travel weekends.",
    },
    {
      place: "Anna Salai — Gemini to Teynampet",
      note: "The central commercial spine. An office and vehicular audience concentrated at commute hours, and the corridor with the most consistent large-format exposure in the city.",
    },
    {
      place: "OMR — Tidel Park to Sholinganallur",
      note: "The IT corridor. A young, salaried, captive audience with predictable weekday movement and congestion long enough that a message actually gets read rather than glimpsed.",
    },
    {
      place: "Marina Beach and Kamarajar Salai",
      note: "The city's mass leisure crowd, evenings and weekends, and very heavy at Kaanum Pongal. Broad rather than affluent, and one of the few genuinely all-city gatherings.",
    },
    {
      place: "Express Avenue and Phoenix Marketcity Velachery",
      note: "The organised retail anchors. Express Avenue also draws the Anna Salai office crowd on weekdays; Phoenix peaks at weekends and through festival sales.",
    },
    {
      place: "Kapaleeshwarar Temple, Mylapore",
      note: "Religious and cultural footfall, peaking at the Panguni Brahmotsavam and through the Margazhi music season — a crowd that is local, settled and often older than the corridor audiences.",
    },
  ],

  formatGuide: [
    {
      title: "Hoarding advertising in Chennai",
      kicker: "Large format",
      body: "Large format in Chennai is best understood through its regulatory history. Tamil Nadu spent years under an effectively restrictive regime on large street hoardings, and the framework was reset under the Tamil Nadu Urban Local Bodies Act, 2022 and its rules, with hoardings being permitted again in the city. That makes Chennai one of the more interesting large-format markets in India right now — and one where the permission position on a specific structure is worth confirming rather than assuming. The corridors that carry it are Anna Salai, OMR, GST Road and the arterial approaches.",
    },
    {
      title: "Unipole advertising in Chennai",
      kicker: "Arterial",
      body: "Unipoles suit the wider southern and western arterials — GST Road towards the airport, the outer OMR stretches, the ORR — where there is clear ground and steady vehicular speed. The GST Road axis in particular reaches arriving business travel and the southern industrial belt in one line, which is a combination no other corridor in the city offers.",
    },
    {
      title: "Gantry and junction media",
      kicker: "Overhead",
      body: "Chennai's traffic knots at a small number of grade-separated interchanges, of which Kathipara at Guindy is the signature. Overhead and junction-adjacent formats at those points deliver dwell time that a free-flowing arterial cannot. They are also the most scrutinised positions in the city on structural and permission grounds, and we treat them as requiring specific confirmation.",
    },
    {
      title: "Bus queue shelter (BQS) advertising in Chennai",
      kicker: "Street level",
      body: "Bus queue shelters reach the very large share of Chennai that moves by MTC bus and on foot — an audience the OMR corridor formats miss completely. The strongest positions cluster around T. Nagar, Koyambedu, Anna Nagar, Adyar and the Central–Parry's belt. Backlit units hold their value into the evening; in the northeast monsoon months, weather-resistance of the unit matters as much as its position.",
    },
    {
      title: "Pole kiosks and hyperlocal media",
      kicker: "Catchment",
      body: "Pole kiosks run as a sequence are how a Chennai trade area actually gets covered, and the city's neighbourhood structure — Adyar, Velachery, Anna Nagar, Porur, Tambaram each behaving as its own market — suits that well. For a store, a clinic, a showroom or a coaching centre, a run of kiosks along the approach roads normally outperforms a single arterial position at the same spend.",
    },
    {
      title: "LED screen and DOOH advertising in Chennai",
      kicker: "Digital",
      body: "Digital screens concentrate on the commercial spine and around the organised retail, with the OMR corridor developing quickly. Daypart control is the genuine advantage — an office-hours message and an evening one from a single buy — and loop share is the genuine limitation. We recommend DOOH when the rotation is actually being used and say so plainly when a static position would deliver more.",
    },
    {
      title: "Chennai Metro advertising",
      kicker: "Transit",
      body: "Phase 1's Blue and Green lines are operating and Phase 2's corridors are building out, which makes this a growing rather than a settled inventory. CMRL has awarded station advertising for non-fare revenue, a major international operator holds a Chennai Metro concession, and the operator has been tendering Phase 2 inventory including pier and portal rights and in-station advertising with semi-naming rights at a set of Corridor 4 stations. It reaches a defined commuter population repeatedly — a frequency medium, not a reach one.",
    },
    {
      title: "Suburban rail, MRTS and bus media",
      kicker: "Mass transit",
      body: "This is the format tier that most national plans under-buy in Chennai and should not. The suburban network — Beach to Tambaram, Central to Arakkonam, Beach to Gummidipoondi — and the elevated MRTS to Velachery carry a mass commuter audience daily, and MTC bus exteriors reach across the whole city rather than along one corridor. For value and mid-market categories the cost per exposure here is difficult to beat with any street format.",
    },
  ],

  localMedia: {
    press: [
      {
        title: "Daily Thanthi (Dina Thanthi)",
        language: "Tamil",
        note: "The mass Tamil daily, with the broadest and most socially inclusive reach across the city and the state. The default first line of a Tamil press plan.",
      },
      {
        title: "Dinakaran",
        language: "Tamil",
        note: "Younger, and heavier on entertainment and politics. A genuinely different reader profile rather than an overlapping one.",
      },
      {
        title: "Dinamalar",
        language: "Tamil",
        note: "Strong urban Tamil readership with a very large digital following alongside the print edition.",
      },
      {
        title: "Dinamani",
        language: "Tamil",
        note: "More literary and editorial in register, reaching a reader who reads the paper rather than scans it.",
      },
      {
        title: "Maalai Malar",
        language: "Tamil",
        note: "An evening daily, which gives it a commuter and afternoon readership that the morning titles do not have.",
      },
      {
        title: "The Hindu",
        language: "English",
        note: "Chennai-headquartered and the establishment English daily. Institutional, educated and civic readership, and the English title with genuine Chennai identity rather than a national edition dropped into the city.",
      },
      {
        title: "The Times of India and The New Indian Express",
        language: "English",
        note: "Chennai editions. The Times skews consumer and lifestyle; the Express skews regional affairs. Both reach the corridor and corporate audience more efficiently than the centre.",
      },
      {
        title: "DT Next",
        language: "English",
        note: "The Daily Thanthi group's English daily, aimed at a younger Chennai reader than the established English mastheads.",
      },
    ],
    radio: [
      {
        station: "Radio Mirchi",
        frequency: "98.3",
        note: "Tamil contemporary — the broadest single commercial station in the market.",
      },
      {
        station: "Suryan FM",
        frequency: "93.5",
        note: "Tamil, from the Sun network. Deep local familiarity and a mass listener base.",
      },
      {
        station: "Radio City",
        frequency: "91.1",
        note: "Tamil mass, with a broad daytime schedule.",
      },
      {
        station: "Big FM",
        frequency: "92.7",
        note: "Tamil mass and retro.",
      },
      {
        station: "Fever FM",
        frequency: "91.9",
        note: "Tamil. Note the frequency — Fever is 91.9 in Chennai, not the number it carries in most northern markets.",
      },
      {
        station: "Hello FM",
        frequency: "106.4",
        note: "Tamil, from the Daily Thanthi group — which makes a combined press and radio buy unusually straightforward here.",
      },
      {
        station: "Akashvani Chennai",
        frequency: "FM Rainbow 101.4",
        note: "Public service, with reach outside the metro core into the surrounding districts.",
      },
    ],
    radioNote:
      "Chennai radio is Tamil, and almost entirely so — this is not a market where a Hindi or English station does meaningful work. There are six private FM stations here, not the seven or more that most online lists claim: at least one national brand has come off the operational list and at least one commonly listed station does not broadcast in Chennai at all. We work from the current Ministry of Information and Broadcasting operational list and confirm what is on air at the point of buying, rather than from a rate card or a blog.",
  },

  transit: {
    lede:
      "Chennai has the deepest mass-transit media environment in south India — metro, suburban rail, the elevated MRTS and a very large bus network — and most national plans buy only the first of those.",
    modes: [
      {
        mode: "Chennai Metro (CMRL)",
        note: "Blue and Green lines operating, with Phase 2's corridors building out and inventory expanding accordingly. Station advertising has been awarded for non-fare revenue, a major international operator holds a concession, and Phase 2 tenders have covered pier and portal rights and in-station advertising with semi-naming rights.",
      },
      {
        mode: "Suburban rail and MRTS",
        note: "Beach–Tambaram, Central–Arakkonam, Beach–Gummidipoondi, and the elevated MRTS to Velachery. High-frequency mass commuter media reaching an income band the metro corridor does not.",
      },
      {
        mode: "MTC bus",
        note: "Bus exteriors, back panels and shelters across the whole city rather than along a single corridor, plus CMBT at Koyambedu as the intercity terminal. The state's growing air-conditioned electric fleet changes which exterior formats are available.",
      },
      {
        mode: "Chennai International Airport",
        note: "The new integrated terminal has significantly expanded premium terminal inventory, and the GST Road approach can be planned as a continuous sequence into it rather than as a separate buy.",
      },
    ],
  },

  costDrivers: [
    {
      factor: "Corridor",
      note: "OMR, Anna Salai, GST Road and T. Nagar are four different products at four different prices. OMR buys a young salaried audience; T. Nagar buys sheer pedestrian density; Anna Salai buys the office corridor. Headcount and value are not the same thing here.",
    },
    {
      factor: "Permission status",
      note: "Chennai's regulatory position has changed recently and enforcement against unauthorised banners and structures is active. A rate is meaningless if the permission behind the structure is not current, and this is the city where that is most true.",
    },
    {
      factor: "Illumination",
      note: "Frontlit, backlit and non-lit price separately. In a city whose retail and dining life runs late, an unlit position loses a meaningful share of its working day.",
    },
    {
      factor: "Season",
      note: "Aadi is the biggest retail discount month of the Chennai year and T. Nagar rates reflect it. Pongal, Margazhi and Diwali each move demand in their own way, and the northeast monsoon is a genuine disruption window rather than a theoretical one.",
    },
    {
      factor: "Duration and the minimum cycle",
      note: "Monthly cycles are the norm and shorter runs usually cost more per day. Chennai rewards sustained presence, particularly on the corridors where the same commuters pass twice daily.",
    },
    {
      factor: "Production, mounting and weather",
      note: "Printing, material and mounting — and in Chennai, re-mounting. The October-to-December monsoon damages flex and structures, and any honest budget for that window carries a maintenance line.",
    },
  ],

  compliance: {
    authority: "Greater Chennai Corporation (GCC)",
    body: [
      "Advertising is licensed by the Greater Chennai Corporation. The core instrument has been the Chennai City Corporation Licensing of Hoardings and Levy and Collection of Advertisement Tax Rules, 2003, framed under the Chennai City Municipal Corporation Act, 1919, and the framework was reset more recently under the Tamil Nadu Urban Local Bodies Act, 2022 and its rules. Hoardings are being permitted again in the city after a long restrictive period.",
      "Unauthorised banners and cut-outs remain the live enforcement issue in Chennai and the reason the state's approach hardened in the first place. A fatal accident in 2019 caused by an illegally erected roadside banner changed public and judicial attitudes permanently, and litigation over unauthorised street banners continues in the Madras High Court. This is not a technicality here — it is the defining compliance fact of the market.",
      "For an advertiser that means one thing above all: never let a brand appear on a structure that cannot produce a current permission. The exposure is not only the media owner's. We confirm permission status before a position enters a plan, and we will remove a site rather than carry that risk on a client's behalf.",
    ],
  },

  season: [
    {
      window: "Mid-July to mid-August — Aadi",
      note: "The single biggest retail discount month of the Chennai year and the T. Nagar peak. Textile and jewellery spend concentrates here more than anywhere else in the calendar.",
    },
    {
      window: "January — Pongal",
      note: "The state's largest festival and a major travel exodus. Retail spikes before it and the city empties during it, which are two different planning implications from one date.",
    },
    {
      window: "December to January — Margazhi",
      note: "The music and dance season plus the Mylapore religious calendar. A distinctly local, older, culturally engaged audience that no corridor buy reaches.",
    },
    {
      window: "October to December — the northeast monsoon",
      note: "The risk window rather than the opportunity. Flooding and wind damage flex and structures, and any plan running through it needs a maintenance and replacement provision built in rather than assumed away.",
    },
  ],

  planning:
    "We plan Chennai along its corridors, because the city is shaped that way and pretending otherwise wastes money. The first decision is which of the four spines the audience actually uses; the second is how much of the plan should sit in mass transit rather than on the street, because Chennai's suburban rail, MRTS and bus network reach an audience that arterial formats systematically under-serve. The third is permission, which in this market is not a formality.",

  faq: [
    {
      q: "How much does hoarding advertising cost in Chennai?",
      a:
        "We do not publish a rate card. It depends on the corridor, the size, the illumination and the duration, and in Chennai it also depends on the season — Aadi and the wedding months move T. Nagar rates in a way no other weeks do. We are not selling our own inventory, so a published rate would tell you what we would like to charge rather than what the market will take. Send the brief and the budget and you will get real numbers against real positions.",
    },
    {
      q: "Are hoardings allowed in Chennai?",
      a: "Yes, and the position has changed. Tamil Nadu spent years under an effectively restrictive regime on large street hoardings; the framework was reset under the Tamil Nadu Urban Local Bodies Act, 2022 and its rules, and hoardings are being permitted again in the city under Greater Chennai Corporation licensing. Unauthorised banners and cut-outs are a separate matter and remain under active enforcement and litigation. We confirm the permission status of a specific structure before recommending it.",
    },
    {
      q: "Which areas of Chennai are best for outdoor advertising?",
      a: "OMR reaches a young, salaried IT population. Anna Salai reaches the central office corridor. T. Nagar reaches extraordinary pedestrian retail density. GST Road reaches arriving travel and the southern industrial belt. Adyar, Anna Nagar and Besant Nagar reach settled affluent households. Velachery and Tambaram reach the mass residential middle. Which of those is right depends on the audience, and we would rather establish that first than open with a location list.",
    },
    {
      q: "Do you own hoardings in Chennai?",
      a: "No. We plan, negotiate and run campaigns; we do not hold media. That means no inventory to push and no reason to recommend a position because it happens to be empty on our books. It also means we cannot promise a specific structure before negotiating for it, which is the honest position — and in Chennai particularly, it lets us walk away from a site whose paperwork does not stand up.",
    },
    {
      q: "Is Chennai Metro advertising worth buying?",
      a: "For a frequency objective, yes, and the inventory is growing rather than static as Phase 2 builds out. Station advertising has been awarded for non-fare revenue and Phase 2 tenders have covered pier, portal and semi-naming rights. It reaches a defined commuter population several times a week, which builds a message well and announces a short offer badly. Whether it beats suburban rail or bus for your audience is a real question and we will answer it honestly.",
    },
    {
      q: "Should a Chennai campaign be in Tamil?",
      a: "Almost always, and radio in particular is a Tamil medium here in a way that admits very little exception. English press does real work reaching institutional, corporate and educated readers, so a mixed press plan is often right — but a campaign that runs only in English in Chennai is reaching a fraction of the market and paying full price for the privilege.",
    },
    {
      q: "How long should a Chennai campaign run?",
      a: "At least a full monthly cycle, and normally longer, since shorter runs cost more per day. The corridor structure of the city means a well-chosen set of positions reaches the same commuters twice daily, so sustained presence compounds unusually well here. The exception is a seasonal push around Aadi or Diwali, where short and heavy can be right.",
    },
    {
      q: "How do I know my advertisement actually went up?",
      a: "Dated, geotagged photographs of every position at mounting and again during the cycle. In Chennai that record matters more than usual for two reasons: active enforcement means a non-compliant site can come down mid-campaign, and the northeast monsoon damages material. Both show up in monitoring and nowhere else.",
    },
    {
      q: "Can a campaign be limited to one part of Chennai?",
      a: "Yes, and for retail it is usually the stronger option. Adyar, Velachery, Anna Nagar, Porur and Tambaram each behave as their own market, and a plan built around one catchment — street-level and hyperlocal formats along the approach roads — normally outperforms a thin city-wide buy at the same budget.",
    },
    {
      q: "Which transit medium works best in Chennai?",
      a: "The metro reaches a defined commuter population repeatedly. Suburban rail and the MRTS reach a much larger and generally less affluent daily audience. MTC buses reach across the whole city rather than along one line, at the lowest cost per exposure of the three. Which one is right depends on the income band you need — and most national plans buy only the metro, which for mid-market categories is usually the wrong call.",
    },
    {
      q: "Can you plan Chennai alongside other Tamil Nadu markets?",
      a: "Yes, and it usually buys better. We plan outdoor across more than forty Indian cities, and Chennai sits naturally with Coimbatore, Madurai, Tiruchirappalli and Bengaluru. Tamil creative travels across the state without adaptation, so a multi-city Tamil Nadu plan is one of the more efficient regional buys available in India.",
    },
  ],

  nearby: ["Bangalore", "Hyderabad", "Kochi", "Coimbatore"],
};
