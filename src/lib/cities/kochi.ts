import type { City } from "./types";

/* Kochi. Two facts define this market and one of them is not shared
   with any other Indian city.

   Compliance: Kerala is the one state where the High Court is actively
   supervising the removal of unauthorised boards, banners, hoardings,
   flags and festoons. Justice Devan Ramachandran has been running a
   supervisory jurisdiction on this for years; in March 2025 the Court
   issued detailed directions ordering secretaries of local
   self-government institutions to remove illegal displays and file
   action-taken reports, and in January 2025 the Court ordered
   disciplinary action over an illegal flex installation in front of
   the Kerala Secretariat itself. This is not the "everyone has rules
   on paper" that most Indian cities offer. It is active enforcement
   against unauthorised structures at the state's highest court, and
   it changes what is practically buyable in Kochi.

   FM: Mirchi in Kochi is 104.0, NOT the 98.3 it carries in Thiruvana-
   nthapuram, Chennai, Bengaluru, Delhi and most metros. And there is
   no Big FM in Kochi — Trivandrum is the only Kerala city on the
   current MIB list with a Big FM channel. The four private FMs in
   Kochi are Mirchi 104.0, Red FM 93.5, Mango FM 91.9 and Club FM 94.3,
   verified against the MIB operational-channels list of 30 March 2026. */

export const kochi: City = {
  slug: "kochi",
  name: "Kochi",
  alsoKnownAs: ["Cochin", "Ernakulam"],
  state: "Kerala",
  region: "South",

  metaTitle:
    "Outdoor Advertising in Kochi — Hoardings & Metro",
  metaDescription:
    "Hoarding, unipole, metro, Water Metro and retail advertising in Kochi, planned across the mainland arterial, Kakkanad and the airport approach.",

  h1Lead: "Outdoor advertising in",
  h1Accent: "Kochi",
  heroLede:
    "Kochi is the one Indian city where the High Court is actively removing unauthorised hoardings — and the one Indian city with a functioning water metro. Both change the plan, and most received briefs know neither.",

  market: [
    "Kochi is a bay city broken into pieces. The mainland — Ernakulam, from Aluva in the north through MG Road and Panampilly Nagar to Kundannoor in the south — carries the commercial weight; Kakkanad to the east holds the IT employment; and the islands and Fort Kochi–Mattancherry on the other side of the harbour carry the tourism, heritage and port audiences. A plan that treats the metropolitan area as a single continuous city is buying the wrong things in the wrong places. It is a set of catchments separated by water.",
    "The commercial spine on the mainland runs along MG Road from Kaloor through Ravipuram, with Marine Drive on the waterfront, Panampilly Nagar as the settled affluent residential, and Kadavanthra as the everyday mid-market. NH-544 — the Edappally–Vyttila bypass and its Aroor extension — carries the arterial vehicular volume, and Vyttila is where road, metro, water metro and KSRTC intercity all meet at the mobility hub. Kakkanad is a different market: the Infopark and SEZ audience is younger, higher-income, and reaches its office by the Seaport–Airport Road and by Metro Phase 2 as it comes online.",
    "The tourism belt runs on its own clock. Fort Kochi, Mattancherry, Willingdon Island, Bolgatty and the backwater island network draw a domestic and international leisure audience heavier from October through February, with the Kochi-Muziris Biennale season adding a specifically cultural crowd. This is not a suburb — it is a distinct market with different formats, different creative and different timing, and one that a mainland-only plan misses entirely.",
    "The last piece is the calendar. Onam in August–September is the axis the Kerala commercial year turns on, with a shopping run of two to three weeks before it that concentrates apparel, jewellery, appliance and durables spend more heavily than any other window. Christmas and New Year are the second axis — Kerala's Christian population makes the December–January window a materially bigger commercial event here than in most Indian cities. The southwest monsoon (June to September) and the northeast monsoon (October to November) frame both, and outdoor material choice in Kochi is a monsoon decision as much as a creative one.",
  ],

  crowdPlaces: [
    {
      place: "MG Road Ernakulam — Ravipuram to Kaloor",
      note: "The central commercial spine, carrying showrooms, banks, offices and evening retail. A vehicular and pedestrian audience together, with weekday commute peaks and evening dwell on the retail stretches.",
    },
    {
      place: "Marine Drive Ernakulam and the boat jetty",
      note: "The waterfront walkway and the mainland's mass leisure destination, especially at weekends and in the December–February season. Also the ferry gateway to Fort Kochi, Mattancherry and Vypin, which makes it the pivot between the two Kochis.",
    },
    {
      place: "Vyttila Mobility Hub",
      note: "The single point where metro, water metro, city bus, KSRTC intercity and private long-distance operators intersect. Sustained daily volume at commute hours and heavy peaks around Onam and Christmas travel.",
    },
    {
      place: "Kakkanad — Infopark, SEZ and Kinfra",
      note: "The IT employment belt. A young, salaried, higher-income captive audience on the Seaport–Airport Road, with predictable weekday movement and long enough congestion at commute hours for a message to be genuinely read.",
    },
    {
      place: "Edappally junction and LuLu Mall",
      note: "The single largest organised retail draw in the state and one of the largest in India. Weekend and evening peaks are extreme; the NH-544 junction itself carries the arterial traffic through the metro core.",
    },
    {
      place: "Fort Kochi and Mattancherry",
      note: "The heritage-and-leisure crowd. Broad-based domestic tourism through the year, an international traveller season October to March, and a distinct creative-industry audience during Biennale years.",
    },
    {
      place: "Ernakulam Junction and Ernakulam Town railway stations",
      note: "The two long-distance rail nodes on the mainland. Sustained daily volume and heavy festival travel peaks around Onam, Christmas and Vishu.",
    },
    {
      place: "Cochin International Airport, Nedumbassery",
      note: "One of India's higher-traffic airports and unusually important for a market of this size because of Kerala's Gulf-diaspora traffic. Weekly returning-NRI volume through the year and heavy concentrations before Onam and Christmas.",
    },
  ],

  formatGuide: [
    {
      title: "Hoarding advertising in Kochi",
      kicker: "Large format",
      body: "Large format in Kochi is a corridor medium along NH-544, the Seaport–Airport Road and the arterial approaches to the city. It is also the format most exposed to the state's active enforcement environment: Kerala is the one Indian jurisdiction where the High Court is running a live supervisory jurisdiction over unauthorised boards, banners and hoardings, and a structure whose paperwork does not stand up can come down mid-campaign. We argue about permission before we argue about size, in a way that is more true here than in any other market.",
    },
    {
      title: "Unipole advertising in Kochi",
      kicker: "Arterial",
      body: "Unipoles suit the NH-544 bypass, the Seaport–Airport Road towards Kakkanad and the Aroor approach from the south, where there is clear ground and steady vehicular audience. The Kakkanad corridor in particular is one of the least visually cluttered premium environments in south India, which makes a well-placed position there work harder than a comparable structure on a saturated central road would.",
    },
    {
      title: "Bus queue shelter and street furniture advertising",
      kicker: "Street level",
      body: "Shelters reach the pedestrian and bus audience along MG Road, Kaloor, Kadavanthra, Panampilly Nagar and the residential belts. Kerala's monsoons — southwest June to September and northeast October to November — are hard on street furniture, and backlit units with genuine weatherproofing keep their value where cheaper installations do not. This is also the format where the Court's flex-and-banner scrutiny is most concentrated, and unpermitted street-level installations are removed with unusual regularity here.",
    },
    {
      title: "Pole kiosks and hyperlocal media",
      kicker: "Catchment",
      body: "For a showroom, a clinic, a hospital, an educational institution or a coaching centre, a sequence of kiosks along the approach roads to the catchment normally outperforms a single arterial position at the same spend. Kochi's neighbourhood structure — Panampilly Nagar, Kadavanthra, Palarivattom, Edappally, Aluva, Tripunithura — supports this well. Permission at kiosk level is where the local enforcement pressure is most immediate, and the format only works with the paperwork in order.",
    },
    {
      title: "LED screen and DOOH advertising in Kochi",
      kicker: "Digital",
      body: "Digital screen inventory concentrates along MG Road, the Kaloor–Kadavanthra stretch and around the organised retail — LuLu, Oberon, Centre Square, Gold Souk Grande — rather than distributed along the arterials. Daypart control and creative rotation are the genuine advantages; loop share is the limitation. We recommend DOOH when the rotation is actually being used and are direct with a client when a static position would deliver more.",
    },
    {
      title: "Kochi Metro advertising",
      kicker: "Transit",
      body: "The metro has been operating since June 2017 between Aluva and the southern extension through Petta and SN Junction (Tripunithura came into service in 2024), and Phase 2 to Kakkanad via Palarivattom, Chembumukku, Kunnumpuram and Infopark is under construction. Kochi Metro Rail Limited has awarded station and train inventory for non-fare revenue, and this is a defined commuter frequency medium reaching an income band that arterial formats systematically under-serve. The Phase 2 build-out through 2026–27 is materially expanding the addressable audience.",
    },
    {
      title: "Kochi Water Metro — the format no other Indian city offers",
      kicker: "Transit",
      body: "The Water Metro, operational since April 2023 under KMRL, is the only functioning urban water transport network of its scale in the country — a planned 78 km network connecting ten islands to the mainland through air-conditioned battery-powered boats. Terminals came online in phases through 2024 (Eloor, Cheranallur, South Chittoor, Fort Kochi) and 2025 (Mattancherry, October 2025). It reaches the island commuter and, at Fort Kochi and Mattancherry, the tourist audience — two audiences that no other transit format touches. We treat it as its own environment rather than as an extension of the metro plan.",
    },
    {
      title: "Airport, port and tourism-adjacent media",
      kicker: "Occasion and gateway",
      body: "Cochin International at Nedumbassery is unusually important for a market of this size because of the Gulf-diaspora returning traveller. Along the airport approach, the Seaport–Airport Road, the Willingdon Island port belt, and the Fort Kochi and Marine Drive tourism circuits, formats reach a specifically defined audience that a metro-core buy will not. For remittance, jewellery, real estate, healthcare and premium consumer categories, this tier is worth planning as its own campaign.",
    },
  ],

  localMedia: {
    press: [
      {
        title: "Malayala Manorama",
        language: "Malayalam",
        note: "The circulation leader in Kerala and one of the largest-circulation dailies of any language in India. Deep Ernakulam edition. The default first line of a Malayalam press plan.",
      },
      {
        title: "Mathrubhumi",
        language: "Malayalam",
        note: "The other pillar of the Malayalam press. Kozhikode-headquartered, with a strong Ernakulam edition and a distinctly literary and civic register that reaches a genuinely different reader from Manorama.",
      },
      {
        title: "Deshabhimani",
        language: "Malayalam",
        note: "The CPI(M) party organ and a title with real reach into the party's organised base across the state. A specific readership rather than a broad one.",
      },
      {
        title: "Madhyamam",
        language: "Malayalam",
        note: "Owned by the Jamaat-e-Islami Hind Kerala group; strong urban and Gulf reach through its associated titles. Reaches a Muslim-majority readership across northern Kerala and metro Ernakulam.",
      },
      {
        title: "Deepika",
        language: "Malayalam",
        note: "Kottayam-headquartered, established in 1887; the oldest Malayalam daily. Strong central-Kerala Christian readership and a title with a distinct constituency in Ernakulam.",
      },
      {
        title: "Kerala Kaumudi",
        language: "Malayalam",
        note: "Long-established title with meaningful state readership, particularly in central and southern Kerala.",
      },
      {
        title: "The Hindu — Kochi",
        language: "English",
        note: "The default English daily in the market for institutional, corporate and educated readership. Local Kochi edition with genuine city coverage rather than a national edition dropped in.",
      },
      {
        title: "The Times of India and The New Indian Express — Kochi",
        language: "English",
        note: "Kochi editions. TOI skews consumer and lifestyle; Express carries stronger regional-affairs weight. Both reach the corporate and corridor audience more efficiently than the state's centre.",
      },
    ],
    radio: [
      {
        station: "Radio Mango",
        frequency: "91.9",
        note: "Malayalam contemporary from the Malayala Manorama group, headquartered in Kochi. Kerala's first Malayalam private FM and one of the broadest single stations in the state.",
      },
      {
        station: "Club FM",
        frequency: "94.3",
        note: "Malayalam mass from the Mathrubhumi group. A combined Mathrubhumi press and Club FM buy is unusually straightforward here.",
      },
      {
        station: "Red FM",
        frequency: "93.5",
        note: "Malayalam from the Sun group's Kal Radio operation. Younger, entertainment-heavy programming.",
      },
      {
        station: "Mirchi",
        frequency: "104.0",
        note: "Note the frequency — Mirchi in Kochi is 104.0, not the 98.3 it carries in Thiruvananthapuram, Chennai, Bengaluru and most other metros. Planning to the wrong number is the mistake we most often catch in received Kerala briefs.",
      },
      {
        station: "Akashvani Kochi",
        frequency: "FM Rainbow / Vividh Bharati",
        note: "The All India Radio Kochi services. Reach beyond the metro into the surrounding coastal districts and a genuinely different listener profile from the private stations.",
      },
    ],
    radioNote:
      "Kochi radio is Malayalam. The four private FMs on air per the current Ministry of Information & Broadcasting operational-channels list are Radio Mango 91.9, Club FM 94.3, Red FM 93.5 and Mirchi 104.0. Two facts worth flagging: Mirchi in Kochi is 104.0 rather than the 98.3 of most metros, and there is no Big FM channel in Kochi — Thiruvananthapuram is the only Kerala city on the current list with Big FM. A national plan that adds 'Big FM Kerala' by reflex has added something that does not reach this market.",
  },

  transit: {
    lede:
      "Kochi has the deepest and most unusual mass-transit media environment in India. The metro has been operating since 2017 and expanding, the Water Metro since 2023 is the only functioning urban water transport network in the country at this scale, and the two together reach audiences no other Indian city can offer.",
    modes: [
      {
        mode: "Kochi Metro (KMRL)",
        note: "Blue Line operational from Aluva through Kaloor, MG Road, Ernakulam South, Vyttila, Petta and SN Junction Tripunithura, following the southern extension in 2024. Phase 2 to Kakkanad through Palarivattom, Chembumukku, Kunnumpuram and Infopark is under construction. Station and train inventory has been awarded for non-fare revenue.",
      },
      {
        mode: "Kochi Water Metro",
        note: "The only functioning urban water transport network of its kind in India. Operational since April 2023 under KMRL with battery-powered air-conditioned boats connecting ten islands and mainland terminals; expansion has continued through 2024 (Eloor, Cheranallur, South Chittoor, Fort Kochi) and 2025 (Mattancherry). Reaches island residents and tourists, both of whom are unreachable through other formats.",
      },
      {
        mode: "Indian Railways at Ernakulam Junction and Ernakulam Town",
        note: "The two long-distance rail nodes on the mainland, with sustained daily volume and heavy Onam, Christmas and Vishu travel peaks.",
      },
      {
        mode: "KSRTC and Vyttila Mobility Hub",
        note: "Vyttila is where road, metro, water metro and KSRTC intercity converge — the single most concentrated transit environment in the metro area. City buses reach across the mainland at the lowest cost per exposure of any format.",
      },
      {
        mode: "Cochin International Airport, Nedumbassery",
        note: "Unusually important for a market of this size, because of Kerala's Gulf-diaspora traveller. Weekly returning-NRI volume through the year and heavy pre-Onam and pre-Christmas concentrations, with a premium retail environment on the approach road and inside the terminal.",
      },
    ],
  },

  costDrivers: [
    {
      factor: "Permission and enforcement risk",
      note: "In Kochi this is the first driver, not the last. Kerala is the one Indian jurisdiction where the High Court is actively supervising removal of unauthorised installations, and a structure whose paperwork does not stand up carries a live mid-campaign removal risk. A rate against such a position is not the same product as a rate against a currently permitted one.",
    },
    {
      factor: "Corridor and catchment",
      note: "MG Road, NH-544, the Seaport–Airport Road, the Kakkanad IT belt, the Aroor approach and the Fort Kochi tourism belt are six different products at six different prices. Headcount and value diverge widely across them.",
    },
    {
      factor: "Illumination",
      note: "Frontlit, backlit and non-lit price separately. In a city whose retail day around MG Road and the malls runs late, an unlit position loses a meaningful share of its working day.",
    },
    {
      factor: "Duration and the minimum cycle",
      note: "Monthly cycles are the norm and shorter runs usually cost more per day. Kochi rewards sustained corridor presence, particularly on NH-544 and the Seaport–Airport Road where the same commuters pass twice daily.",
    },
    {
      factor: "Season",
      note: "Onam in August–September compresses a large share of annual retail demand into three or four weeks; Christmas and New Year add a second material window that Indian cities without a large Christian population do not have. Both move rates in ways a Diwali-anchored national calendar will miss.",
    },
    {
      factor: "Monsoon damage and material",
      note: "Southwest monsoon June to September and northeast monsoon October to November are both hard on flex and structures. An honest budget for any plan running through them carries a maintenance and re-mounting line rather than hoping.",
    },
  ],

  compliance: {
    authority: "Kochi Municipal Corporation, under the Kerala Municipality Act, 1994",
    body: [
      "Advertising in Kochi is licensed by the Kochi Municipal Corporation under the Kerala Municipality Act, 1994 and the state-level rules made under it. That framework is standard for the region — municipal licensing, site-specific permissions, time-bound approvals — but the enforcement environment around it is not standard, and it is the enforcement environment that matters here.",
      "Kerala is the one Indian state where the High Court is actively supervising the removal of unauthorised boards, banners, hoardings, flags and festoons. Justice Devan Ramachandran has been running a supervisory jurisdiction on the issue for years; in March 2025 the Court issued detailed directions ordering secretaries of local self-government institutions to remove illegal displays, framing the problem as 'visual pollution' and requiring action-taken reports; and in January 2025 the Court ordered disciplinary action over an illegal flex installation in front of the Kerala Secretariat itself. This is active enforcement at the state's highest court, not a rulebook that sits on a website.",
      "The practical position for an advertiser is clear. A brand on a structure that cannot produce a current permission carries a mid-campaign removal risk here that it does not carry in most Indian cities, and the reputational exposure of appearing on a Court-flagged unauthorised installation is real. We confirm permission status before a position enters a Kochi plan, and we will remove a site rather than carry the risk on a client's behalf. Where a specific corporation rule affects a campaign — a dimension, an illumination limit, a ward-level restriction — we confirm it directly with KMC rather than relying on a website reproduction.",
    ],
  },

  season: [
    {
      window: "August to September — Onam",
      note: "The axis the Kerala commercial year turns on. A shopping run of two to three weeks before Thiruvonam that concentrates apparel, jewellery, appliance and durables spend more heavily than any other window in the state.",
    },
    {
      window: "December to January — Christmas and New Year",
      note: "Kerala's Christian population makes this a materially bigger commercial window here than in most Indian cities. Discretionary spend on food, apparel, gifting and travel peaks alongside the tourism season.",
    },
    {
      window: "April — Vishu",
      note: "The Malayalam new year and a distinct household and retail marker that a pan-India calendar will not contain. Smaller than Onam but a genuine planning window in its own right.",
    },
    {
      window: "October to March — the tourism and Biennale season",
      note: "The dry-season leisure window along the Fort Kochi–Mattancherry belt, and in Biennale years the December-through-March cultural crowd. A distinct catchment with different formats and creative from the metro core.",
    },
    {
      window: "June to November — the monsoons",
      note: "Southwest and northeast monsoons together account for roughly half the year. This is not a footnote — it is the defining material and maintenance consideration for any Kochi plan.",
    },
  ],

  planning:
    "We plan Kochi from the catchment outwards and from permission inwards. The mainland, Kakkanad, the airport approach and the Fort Kochi tourism belt behave as their own markets and rarely deserve equal weight in the same plan. Onam and Christmas each earn their own planning window rather than a line-item treatment. And in a market where the High Court is actively removing unauthorised installations, every position is confirmed for current permission before it enters the plan — because in Kochi more than anywhere else in India, a rate is meaningless if the paperwork does not stand up.",

  faq: [
    {
      q: "How much does hoarding advertising cost in Kochi?",
      a:
        "We do not publish a rate card. It depends on the corridor, the size, the illumination, the duration and the season — and in Kochi it depends unusually heavily on whether the position's permission is current, because unauthorised structures can be removed mid-campaign here. We are not selling our own inventory, so a published rate would tell you what we would like to charge rather than what the market will take. Send the brief and the budget and you will get real numbers against real, permission-confirmed positions.",
    },
    {
      q: "Are hoardings allowed in Kochi?",
      a: "Yes, under the Kerala Municipality Act, 1994 and administered by the Kochi Municipal Corporation, with permission site-specific and time-bound. The distinguishing fact of this market is enforcement: the Kerala High Court has been running an active supervisory jurisdiction over unauthorised boards, banners and hoardings, and non-compliant installations are removed with a regularity you will not see in most Indian cities. We confirm permission before recommending a position.",
    },
    {
      q: "Which areas of Kochi are best for outdoor advertising?",
      a: "NH-544 and MG Road reach the mainland arterial commuter; Kakkanad and the Seaport–Airport Road reach the IT and services professional; Panampilly Nagar and Kadavanthra reach settled affluent households; Edappally around LuLu reaches the family retail crowd; Fort Kochi and Mattancherry reach the tourism audience; the airport approach reaches the returning Gulf traveller. Which of those is right depends on the audience, and we would rather establish that first than open with a location list.",
    },
    {
      q: "Do you own hoardings in Kochi?",
      a: "No. We plan, negotiate and run campaigns; we do not hold media. That means no inventory to push and no incentive to recommend a position because it happens to be empty on our books. In a market with Kochi's enforcement environment, this is a genuine advantage: it lets us walk away from a site whose paperwork does not stand up rather than trying to defend one.",
    },
    {
      q: "Is Kochi Metro and Water Metro advertising worth buying?",
      a: "Yes, and for reasons no other Indian city offers. The metro reaches a defined commuter frequency audience and is expanding towards Kakkanad; the Water Metro reaches the island commuter and the Fort Kochi tourist together, and it is the only such network operating anywhere in India. For frequency objectives on the mainland and for reach into audiences that no other format touches, both belong in most Kochi plans.",
    },
    {
      q: "Should a Kochi campaign be in Malayalam?",
      a: "Almost always. Radio in particular is a Malayalam medium here in a way that admits very little exception, and Malayalam press does most of the work on the reach side. English press does real work with the corporate, institutional and NRI audiences, so a mixed press plan is often right — but a campaign that runs only in English in Kochi is reaching a fraction of the market and paying full price for the privilege.",
    },
    {
      q: "How long should a Kochi campaign run?",
      a: "At least a full monthly cycle, and normally longer, since shorter runs cost more per day. NH-544 and the Seaport–Airport Road reach the same commuters twice daily, and sustained corridor presence compounds well. The exception is an Onam or Christmas push, where short and heavy can be right — but availability tightens months ahead, so an Onam plan decided in July has usually lost its best options.",
    },
    {
      q: "How do I know my advertisement actually went up?",
      a: "Dated, geotagged photographs of every position at mounting and again during the cycle. In Kochi that record matters more than usual for two reasons: enforcement can remove a non-compliant site mid-campaign, and Kerala's monsoons damage flex and structures. Both show up in monitoring and nowhere else.",
    },
    {
      q: "Can a campaign be limited to one part of Kochi?",
      a: "Yes, and for retail and hospitality brands it is often the stronger option. Panampilly Nagar, Kadavanthra, Edappally, Kakkanad, Aluva and Tripunithura each behave as their own catchment, and a sequence of street-level positions along the approach roads normally outperforms a thin city-wide buy at the same budget.",
    },
    {
      q: "Is the Gulf-diaspora returning traveller a real audience here?",
      a: "Yes, and Kochi is one of the few Indian cities where planning around it makes measurable sense. The volume through Cochin International, particularly in the pre-Onam and pre-Christmas weeks, is large enough that airport-approach positions and MG Road formats can be planned specifically for the returning-NRI audience — jewellery, real estate, remittance, healthcare and premium durables all buy against it consistently.",
    },
    {
      q: "Which transit medium works best in Kochi?",
      a: "The metro reaches a defined commuter population repeatedly across the mainland. The Water Metro reaches the island commuter and the Fort Kochi tourist that no other format touches. KSRTC buses and the Vyttila hub reach across the whole metropolitan area at the lowest cost per exposure. Which one is right depends on the audience — and most national plans buy only the metro, which for tourism, hospitality and NRI-adjacent categories is usually the wrong call.",
    },
    {
      q: "Can you plan Kochi alongside other Kerala or south Indian markets?",
      a: "Yes, and it usually buys better. We plan outdoor across 39 Indian cities, and Kochi sits naturally with Thiruvananthapuram, Kozhikode, Coimbatore and Bengaluru. Malayalam creative travels across Kerala without adaptation, and a combined Kerala plan is one of the more efficient regional buys available in south India.",
    },
  ],

  nearby: ["Coimbatore", "Bangalore", "Chennai", "Hyderabad"],
};
