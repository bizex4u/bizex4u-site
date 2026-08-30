import type { City } from "./types";

/* Pune. TWO things here that nobody else's city page gets right:
   1. Big FM is 95.0 in Pune, NOT the 92.7 the brand carries almost
      everywhere else. Red FM is 93.5 as usual but a different licensee.
   2. PCMC is a separate municipal corporation with its own advertisement
      permissions. A "Pune" plan that ignores Pimpri-Chinchwad misses a
      large part of the agglomeration and buys under a different authority.

   Station language formats could not be verified per-station, so the
   language point is made in radioNote rather than asserted station by
   station. Pune Mirror and Sakal Times are both closed and must never
   appear in a press list — they still sit in stale media kits. */

export const pune: City = {
  slug: "pune",
  name: "Pune",
  state: "Maharashtra",
  region: "West",

  metaTitle:
    "Outdoor Advertising in Pune & Pimpri-Chinchwad",
  metaDescription:
    "Hoarding, unipole, metro and bus advertising across Pune and Pimpri-Chinchwad — two municipal corporations, permissioned separately.",

  h1Lead: "Outdoor advertising in",
  h1Accent: "Pune",
  heroLede:
    "Pune is an old city with two IT wings bolted on, and a second municipal corporation next door that most plans forget entirely. Getting the Peths, Hinjewadi, Kharadi and Pimpri-Chinchwad into one coherent buy is the actual work here.",

  market: [
    "Pune has a historic commercial heart and two modern employment wings, and they behave nothing alike. The Peths — Laxmi Road, Budhwar Peth, Shaniwar Peth — and the Camp area around MG Road and East Street carry the traditional retail volume and a settled Marathi household audience. West Pune, meaning Hinjewadi, Baner, Balewadi and Wakad, and east Pune, meaning Kharadi, Magarpatta, Viman Nagar and Koregaon Park, carry the IT employment, the highest incomes and a much younger, more transient population.",
    "The single most-missed fact about this market is that Pimpri-Chinchwad is a separate municipal corporation. PCMC has its own advertisement permissions, its own industrial and manufacturing catchment and its own arterial running through Pimpri, Chinchwad and Nigdi. A campaign planned as though the urban agglomeration were one city will both under-reach and, more awkwardly, buy under the wrong licensing authority. We plan the two together and permission them separately.",
    "The arterials are the Mumbai–Pune Expressway and the old highway coming in from the northwest, Nagar Road running east to Kharadi and the airport, Solapur Road southeast, Satara Road south through Swargate, Karve and Paud Road west, and the Baner–Aundh–University Road axis. The highest-value positions are at the grade-separated knots — University Chowk and Sancheti, and Chandni Chowk, which was rebuilt as a multi-level interchange and changed one of the city's worst chokepoints.",
    "The map is moving fast. The MSRDC Pune Ring Road is under construction and will redraw the periphery; the Expressway's Missing Link shortens the Mumbai run and raises that corridor's value. Maha-Metro's Purple and Aqua lines are operating, and Line 3 from Hinjewadi to Shivajinagar is the commercially critical one — a corridor connecting the largest IT cluster to the city core. Anyone selling you a Pune plan should be able to tell you the current operating status of that line rather than describing it as though it were finished.",
  ],

  crowdPlaces: [
    {
      place: "Laxmi Road and the Peths",
      note: "The traditional Marathi mass-retail street — sarees, jewellery, household goods. Almost entirely pedestrian, peaking through Diwali, the wedding season and Ganeshotsav, when the visarjan procession runs along it.",
    },
    {
      place: "Dagdusheth Halwai Ganpati Temple, Budhwar Peth",
      note: "The city's principal religious footfall site, busy year-round and extraordinary during Ganeshotsav. A local, cross-income crowd that no corridor position reaches.",
    },
    {
      place: "Fergusson College Road and JM Road",
      note: "The student and young-adult strip — food, coffee, apparel. Peaks late afternoon and evening, heavily term-time dependent, and one of the youngest audiences in any Indian city.",
    },
    {
      place: "MG Road and East Street, Camp",
      note: "Legacy premium and mid retail with a distinct cantonment catchment. Weekend afternoons and evenings, and an older, more settled shopper than the IT belts.",
    },
    {
      place: "Hinjewadi Rajiv Gandhi Infotech Park",
      note: "The largest IT employment cluster in the region. A captive white-collar audience with predictable weekday movement, and the Hinjewadi–Wakad chokepoint delivers dwell time that few positions anywhere can match.",
    },
    {
      place: "Kharadi EON IT Park and Magarpatta City",
      note: "The eastern IT and township cluster. High-income young professionals, weekday commute peaks, and a walk-to-work population inside the townships themselves.",
    },
    {
      place: "Pune Railway Station and the Swargate and Shivajinagar ST stands",
      note: "Rail and intercity bus interchange in close proximity. Morning and evening peaks and very heavy on Mumbai-corridor weekends, with real waiting time.",
    },
    {
      place: "Phoenix Marketcity Viman Nagar and Amanora Town Centre",
      note: "The organised retail anchors for the eastern affluent catchment. Weekend and festival-sale peaks and a shopper already in a spending frame of mind.",
    },
  ],

  formatGuide: [
    {
      title: "Hoarding advertising in Pune",
      kicker: "Large format",
      body: "Large format works on the Expressway approach, Nagar Road, Satara Road, the Baner–Aundh axis and the PCMC arterial, where roads are wide and speeds steady. Inside the Peths the streets are narrow and the audience is on foot, so smaller and closer formats do more. Pune has one compliance requirement that other Indian cities do not: PMC has made QR codes mandatory on hoardings so that any display can be scanned and checked against its permission. That is a production requirement, not a footnote, and it needs to be in the artwork brief.",
    },
    {
      title: "Unipole advertising in Pune",
      kicker: "Arterial",
      body: "Unipoles suit the Expressway corridor, the outer Nagar Road and Solapur Road stretches, and the newer western development around Balewadi and Baner, where there is clear ground and a fast, affluent vehicular audience. Structural safety scrutiny across Maharashtra tightened considerably after the 2024 hoarding collapse in Mumbai, and a unipole's engineering documentation is now something worth asking about rather than assuming.",
    },
    {
      title: "Gantry and junction media in Pune",
      kicker: "Overhead",
      body: "Pune's traffic knots hard at a small number of interchanges — Chandni Chowk, University Chowk, the Hinjewadi–Wakad approach — and overhead positions at those points buy dwell time rather than a glance. They are also the positions where permission and structural documentation are scrutinised most closely, which is a reason to confirm rather than a reason to avoid.",
    },
    {
      title: "Bus queue shelter (BQS) advertising in Pune",
      kicker: "Street level",
      body: "PMPML shelters reach the pedestrian and public-transport population across both Pune and Pimpri-Chinchwad, since the operator is a joint PMC and PCMC undertaking. That makes street furniture one of the few formats that naturally spans the whole agglomeration in a single buy. The strongest positions cluster around the Peths, Swargate, Shivajinagar, the FC Road belt and the PCMC arterial.",
    },
    {
      title: "Pole kiosks and hyperlocal media",
      kicker: "Catchment",
      body: "Pune's neighbourhoods behave as distinct markets — Kothrud, Aundh, Viman Nagar, Wakad, Nigdi each with their own trade area — and pole kiosks run as a sequence along the approach roads are how those get covered properly. For store launches, clinics, education and anything with a defined catchment, this is normally where a Pune plan should start.",
    },
    {
      title: "LED screen and DOOH advertising in Pune",
      kicker: "Digital",
      body: "Digital screens concentrate around the IT belts and the organised retail, where the audience is young, salaried and phone-native. Daypart control is the real advantage — a commute message and an evening one from a single buy, which suits the Hinjewadi and Kharadi rhythms particularly well. Loop share remains the real limitation, and we say so when a static position would deliver more for the same money.",
    },
    {
      title: "Pune Metro advertising",
      kicker: "Transit",
      body: "Maha-Metro's Purple line from PCMC to Swargate and Aqua line from Vanaz to Ramwadi are operating, with Phase 1A extensions building out and the PMRDA-delivered Hinjewadi–Shivajinagar corridor as the commercially decisive one. Exclusive media rights for Pune Metro sit with a named concessionaire as a matter of public record, and the operator has publicly pursued non-fare revenue including station naming. It is a frequency medium reaching the same commuters repeatedly.",
    },
    {
      title: "Mall, cinema and society media",
      kicker: "Retail and residential",
      body: "The eastern malls reach the affluent catchment in a spending frame of mind. Residential society and lift media is unusually effective in Pune because so much of the high-income population lives in large gated townships — Magarpatta, Amanora, Blue Ridge, the Baner and Balewadi complexes — where a single negotiation reaches thousands of households at close range with almost no competing message.",
    },
  ],

  localMedia: {
    press: [
      {
        title: "Sakal",
        language: "Marathi",
        note: "Pune-headquartered and the dominant Marathi daily in the city, with the strongest local-news franchise. Being in it carries a Punekar credibility that a Mumbai title does not transfer.",
      },
      {
        title: "Lokmat",
        language: "Marathi",
        note: "Statewide Marathi daily with a Pune Main edition and a Hello Pune city supplement, so city and state weight can be bought apart from each other.",
      },
      {
        title: "Loksatta",
        language: "Marathi",
        note: "More editorial and opinion-led, reaching an educated urban Marathi reader who reads rather than scans.",
      },
      {
        title: "Maharashtra Times",
        language: "Marathi",
        note: "Urban and consumer-facing, and the Marathi title that sits most comfortably alongside an English plan.",
      },
      {
        title: "Pudhari and Punya Nagari",
        language: "Marathi",
        note: "Mass-market Marathi dailies with strong reach across western Maharashtra around Pune — useful when the campaign extends past the city into the district.",
      },
      {
        title: "The Times of India",
        language: "English",
        note: "The main English consumer daily for the IT and student population, and the most efficient single English buy in the city.",
      },
      {
        title: "The Indian Express and Hindustan Times",
        language: "English",
        note: "Pune editions with policy, civic and urban professional readerships. Both reach the corporate belt rather than the Peths.",
      },
    ],
    radio: [
      { station: "Radio Mirchi", frequency: "98.3", note: "Mainstream contemporary — the broadest single commercial station in the city." },
      { station: "Radio City", frequency: "91.1", note: "Mass-appeal daytime schedule." },
      { station: "Red FM", frequency: "93.5", note: "Contemporary and humour-led, skewing younger." },
      { station: "Fever FM", frequency: "94.3", note: "Contemporary, urban-leaning." },
      {
        station: "Big FM",
        frequency: "95.0",
        note: "Note the frequency. Big FM is 95.0 in Pune, not the 92.7 the brand carries in most other cities — this is the single most common error in a Pune media plan.",
      },
      { station: "Mirchi Love", frequency: "104.2", note: "Retro and romantic, reaching an older listener than 98.3." },
    ],
    radioNote:
      "Pune radio runs on a Marathi and Hindi mix, and the balance differs by station and by daypart in ways a rate card will not tell you. We confirm each station's current language split and schedule with the station at the point of buying rather than publishing a claim we cannot stand behind. What is settled is the frequency list above, checked against the Ministry of Information and Broadcasting's operational-channels list — and note Big FM on 95.0, which trips up plans copied from another city. Drive time is roughly seven to eleven in the morning and five to nine in the evening, and in Pune it is longer than that on the Hinjewadi and Kharadi approaches.",
  },

  transit: {
    lede:
      "Pune's transit media spans two municipal corporations, and the bus network is the only format that naturally covers both in one buy.",
    modes: [
      {
        mode: "Pune Metro",
        note: "Maha-Metro's Purple line (PCMC–Swargate) and Aqua line (Vanaz–Ramwadi) operating, with the PMRDA-delivered Hinjewadi–Shivajinagar corridor as the commercially critical addition. Exclusive media rights sit with a named concessionaire as a matter of public record, and the operator has publicly pursued advertising and station naming as non-fare revenue.",
      },
      {
        mode: "PMPML bus",
        note: "The joint PMC and PCMC operator, covering both Pune and Pimpri-Chinchwad. Bus exteriors, back panels, shelters and depots — the one format that reaches the whole agglomeration without splitting the buy.",
      },
      {
        mode: "Rail",
        note: "Pune Junction as the main hub, plus the Pune–Lonavala local corridor. MSRTC handles intercity from the Swargate and Shivajinagar ST stands, which carry very heavy Mumbai-corridor weekend traffic.",
      },
      {
        mode: "Pune Airport",
        note: "At Lohegaon, with a new terminal that significantly increased terminal inventory. Reached along Nagar Road, so the approach and the terminal can be planned as one sequence.",
      },
    ],
  },

  costDrivers: [
    {
      factor: "Which wing of the city",
      note: "Hinjewadi, Baner and Balewadi in the west, Kharadi and Magarpatta in the east, and the Peths and Camp in the middle are three different markets at three different prices. You are buying income and audience age, not just traffic count.",
    },
    {
      factor: "PMC or PCMC",
      note: "A Pimpri-Chinchwad position is permissioned by a different authority and priced in a different market. Neither is simply cheaper — they are different products, and a plan that treats them as one line item is hiding something.",
    },
    {
      factor: "Compliance and documentation",
      note: "PMC's mandatory QR code on hoardings and the tightened structural-safety scrutiny across Maharashtra both add real, legitimate cost to a compliant site. A position priced well below its neighbours is worth asking questions about.",
    },
    {
      factor: "Illumination",
      note: "Frontlit, backlit and non-lit price separately for the same footprint. On the IT corridors, where a large share of the audience passes after dark, unlit is close to a false economy.",
    },
    {
      factor: "Ganeshotsav and the monsoon",
      note: "The two dates that move Pune pricing most. Ganeshotsav compresses a large share of annual demand into ten days. The June-to-September monsoon is the opposite — a genuine risk window for flex and structures that any honest budget carries a provision for.",
    },
    {
      factor: "Production, mounting and re-mounting",
      note: "Printing, material, mounting and the post-monsoon re-mounting that Pune genuinely needs. Quoted separately from media so the two are never conflated.",
    },
  ],

  compliance: {
    authority: "Pune Municipal Corporation (PMC) — and PCMC separately",
    body: [
      "Advertising in the city is licensed by the Pune Municipal Corporation's sky-sign and advertisement department, and Pimpri-Chinchwad Municipal Corporation licenses separately for its own area. The governing state instrument is the Maharashtra Municipal Corporations (Regulation and Control of the Display of Sky-signs and Advertisement) Rules, 2022, which is the post-2022 framework across Maharashtra municipal corporations.",
      "Pune carries a compliance requirement that no other Indian city we plan in does: PMC has made QR codes mandatory on hoardings, so that any display can be scanned and checked against its permission. This is a practical, unavoidable production step — the code has to be in the artwork — and it is also a useful thing for an advertiser, because it makes permission verifiable from the pavement rather than from a file.",
      "Structural safety scrutiny across Maharashtra tightened significantly after the 2024 hoarding collapse in Mumbai, and the direction of travel set by that state-level response applies here. We confirm permission and, where relevant, structural documentation before a position enters a plan. We have not read a current primary PMC circular setting out size caps and LED-specific rules, so we will not quote you those numbers from a website — where a specific limit matters to your campaign, we check it with the corporation.",
    ],
  },

  season: [
    {
      window: "August to September — Ganeshotsav",
      note: "The defining Pune season and unlike anywhere else in India. Ten days of mandal pandals, the Dagdusheth crowd and the Laxmi Road visarjan procession, with street footfall and sponsorship inventory that no other window approaches.",
    },
    {
      window: "October to November — Diwali and the wedding run",
      note: "The retail peak, and the Laxmi Road and Camp belts at their densest. Organised retail runs its heaviest calendar of the year alongside it.",
    },
    {
      window: "June to September — the monsoon",
      note: "A real risk window rather than a theoretical one. Flex and structures take damage, and any plan running through it needs a maintenance provision rather than optimism.",
    },
    {
      window: "June to July — the academic intake",
      note: "Pune's student population is very large and it arrives on a schedule. Education, housing, mobility, banking and food delivery all compete hardest for the FC Road and university-belt positions in exactly these weeks.",
    },
  ],

  planning:
    "We plan Pune as an agglomeration rather than a city, because that is what it is. The first decision is the split between the Peths and Camp, the western IT wing, the eastern IT wing and PCMC — four audiences with different ages, incomes and languages. The second is which of those PMPML and the metro can cover in a single buy, since transit is the one tier that crosses the municipal boundary cleanly. The third is compliance, which in Pune means the QR code and the structural documentation, and which we settle before recommending anything.",

  faq: [
    {
      q: "How much does hoarding advertising cost in Pune?",
      a:
        "We do not publish a rate card. It depends on which part of the agglomeration, the size, the illumination and the duration — and in Pune it also depends on whether the position sits under PMC or PCMC, which are separate markets with separate permissions. We are not selling our own inventory, so a published rate would tell you what we would like to charge rather than what the market will take. Send the brief and the budget and you will get real numbers against real positions.",
    },
    {
      q: "Do hoardings in Pune need a QR code?",
      a: "Yes. PMC has made QR codes mandatory on hoardings so that any display can be scanned and checked against its permission. It is a production requirement — the code has to be in the artwork before printing — and it is genuinely useful for an advertiser, because it makes a site's permission verifiable from the street rather than from a file somebody promises to send.",
    },
    {
      q: "Does a Pune campaign need to cover Pimpri-Chinchwad?",
      a: "Usually, and this is the most frequently missed point in a Pune brief. PCMC is a separate municipal corporation with its own advertisement permissions, its own arterial and a large industrial and manufacturing catchment. A plan that ignores it under-reaches the urban area substantially. We plan the two together and permission them separately, and PMPML buses are the one format that spans both cleanly in a single negotiation.",
    },
    {
      q: "Which areas of Pune are best for outdoor advertising?",
      a: "Hinjewadi, Baner, Balewadi and Wakad reach the western IT population. Kharadi, Magarpatta, Viman Nagar and Koregaon Park reach the eastern one. Laxmi Road, the Peths and Camp reach traditional Marathi retail volume. FC Road and the university belt reach students. Nigdi, Pimpri and Chinchwad reach the industrial catchment. Which of those is right depends on the audience, and we would rather establish that first than lead with a location list.",
    },
    {
      q: "Do you own hoardings in Pune?",
      a: "No. We plan, negotiate and run campaigns; we do not hold media. That means no inventory to push and no incentive to recommend a position because it is empty on our books — and in a state where structural safety scrutiny has tightened sharply, it means we can decline a site whose documentation does not stand up rather than defend one we own.",
    },
    {
      q: "Is Pune Metro advertising worth buying?",
      a: "For a frequency objective, yes, and increasingly so as the network extends. The Purple and Aqua lines are operating and the Hinjewadi–Shivajinagar corridor is the commercially decisive addition, because it connects the largest IT cluster to the city core. Exclusive media rights sit with a named concessionaire on the public record. It reaches the same commuters repeatedly, which builds a message well and announces a one-week offer badly.",
    },
    {
      q: "Should a Pune campaign run in Marathi?",
      a: "For most categories, yes, at least in part. Sakal is Pune-headquartered and carries a local credibility no Mumbai title transfers, and the Marathi press tier reaches the settled household audience that the IT corridors do not. English does real work reaching the IT and student population. Radio runs on a Marathi and Hindi mix that varies by station and daypart, and we confirm it at buying rather than assuming.",
    },
    {
      q: "How long should a Pune campaign run?",
      a: "At least a full monthly cycle, and normally longer, since shorter runs cost more per day. The exception is Ganeshotsav, where a short and heavy presence around the ten days is genuinely the right trade because the attention is that concentrated. Avoid planning a delicate creative through the monsoon without a replacement provision.",
    },
    {
      q: "How do I know my advertisement actually went up?",
      a: "Dated, geotagged photographs of every position at mounting and again during the cycle. In Pune the QR code adds a second, independent check — you or we can scan a display and confirm its permission from the pavement, which is a verification most Indian markets simply do not offer.",
    },
    {
      q: "Can a campaign be limited to one part of Pune?",
      a: "Yes, and for retail it usually should be. Kothrud, Aundh, Viman Nagar, Wakad and Nigdi each behave as their own market, and a plan built around one catchment — pole kiosks and street-level formats along the approach roads — normally outperforms a thin buy spread across the whole agglomeration at the same budget.",
    },
    {
      q: "Can you plan Pune alongside Mumbai?",
      a: "Yes, and Pune is more often planned as part of a Maharashtra buy than as a standalone. We plan outdoor across more than forty Indian cities, and Pune sits naturally with Mumbai, Nashik, Nagpur and Chhatrapati Sambhajinagar. Marathi creative travels across the state without adaptation, and negotiating the cluster together changes what is achievable on both price and position.",
    },
  ],

  nearby: ["Mumbai", "Nagpur", "Ahmedabad", "Hyderabad"],
};
