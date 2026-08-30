import type { City } from "./types";

/* Kolkata was the first city page written and it has been rebuilt onto
   the fuller shape. The market, crowd-place and press-and-radio copy is
   the original, which was verified when it was written; the format
   guide, transit, cost, compliance and season sections are new.

   Durga Puja is not one festival among several here. It is the axis the
   entire commercial year turns on, and a Kolkata plan that treats it as
   a line item has misunderstood the market. */

export const kolkata: City = {
  slug: "kolkata",
  name: "Kolkata",
  state: "West Bengal",
  region: "East",

  metaTitle:
    "Outdoor Advertising in Kolkata — Hoardings & Metro",
  metaDescription:
    "Hoarding, unipole, metro, suburban rail and bus advertising in Kolkata, planned for a city with unusually high public-transport dependency.",

  h1Lead: "Outdoor advertising in",
  h1Accent: "Kolkata",
  heroLede:
    "Kolkata is a corridor city. Attention concentrates along a handful of routes that almost everyone uses, which makes the difference between a good buy and a wasted one unusually sharp.",

  market: [
    "Kolkata moves along lines rather than across a grid. The EM Bypass carries the eastern spine of the city, the AJC Bose and Maa flyovers absorb the north–south load, and the Howrah approach funnels an entire commuter population through a small number of decision points every morning. A plan that ignores those lines buys impressions; a plan built around them buys frequency against the same audience day after day.",
    "The audience is not evenly distributed either. Salt Lake Sector V and New Town hold the working professional population and skew younger and higher-income, with predictable weekday movement. Park Street, Camac Street and Gariahat carry discretionary retail footfall that peaks in the evenings and at weekends. North Kolkata behaves differently again — older, denser, more locally rooted, and far more responsive to neighbourhood-level presence than to city-wide weight.",
    "Metro expansion has changed the map in the last few years. Corridors that were peripheral now carry daily commuter volume, and catchments that were considered outer Kolkata are functionally part of the core. Planning from a two-year-old view of the city produces measurably worse results than planning from the current one.",
    "Kolkata also rewards patience. It is a market where brand familiarity compounds and where a short burst rarely does much. Campaigns here tend to work better as sustained presence in fewer, better-chosen locations than as a wide sweep bought for a fortnight.",
  ],

  crowdPlaces: [
    {
      place: "Gariahat",
      note: "The city's most concentrated street-retail crowd. Pavement stalls and established stores share the same footpath, and the density peaks on weekend evenings and through the Durga Puja shopping weeks.",
    },
    {
      place: "New Market and Esplanade",
      note: "Central Kolkata's oldest shopping district, sitting directly on top of the bus and metro interchange. The crowd is broad rather than affluent — it is where the whole city converges rather than where any one segment lives.",
    },
    {
      place: "Howrah Bridge and the station approach",
      note: "One of the busiest crossings in the country. An enormous commuter population from across the river funnels through a narrow set of decision points every morning and back again every evening.",
    },
    {
      place: "Sealdah",
      note: "The suburban rail gateway for the eastern districts. Volume here is daily, repetitive and largely the same faces — a frequency audience rather than a reach one.",
    },
    {
      place: "Park Street and Camac Street",
      note: "Discretionary spending and eating out. The crowd is younger and higher-income, it arrives in the evening, and it stays long enough to notice things.",
    },
    {
      place: "Salt Lake Sector V",
      note: "The IT and services district. A predictable weekday population, heavily concentrated at commute hours and at lunch, and almost empty at the weekend.",
    },
    {
      place: "Dakshinapan and Rashbehari",
      note: "South Kolkata's settled residential retail belt — older, locally rooted households who shop close to home and respond to neighbourhood presence far more than to city-wide weight.",
    },
    {
      place: "Maidan and the Eden Gardens approach",
      note: "Ordinary daily crowds through the week, then very large event crowds on match days and through the winter fair and festival calendar.",
    },
  ],

  formatGuide: [
    {
      title: "Hoarding advertising in Kolkata",
      kicker: "Large format",
      body: "Large format in Kolkata is a corridor medium and almost nothing else. The EM Bypass, the AJC Bose and Maa flyover approaches and the Howrah access carry the volume at speeds where a large structure is genuinely read. In the older northern and central neighbourhoods the streets are close and the sightlines short, and a large hoarding there routinely underperforms a well-placed smaller one. We argue about the corridor before we argue about the size.",
    },
    {
      title: "Unipole advertising in Kolkata",
      kicker: "Arterial",
      body: "Unipoles suit the Bypass, the New Town and Rajarhat arterials and the airport approach, where there is clear ground and a steady, higher-income vehicular audience. The New Town corridor in particular is one of the least visually cluttered premium environments in eastern India, which means a position there works harder than the same structure would on a crowded central road.",
    },
    {
      title: "Gantry and flyover-adjacent media",
      kicker: "Overhead",
      body: "Kolkata's flyovers concentrate traffic at a small number of predictable points, and overhead formats at those points buy dwell time rather than a glance. They are also the most scrutinised positions in the city on permission and structural grounds. We treat any flyover-adjacent proposal as needing specific confirmation rather than assuming that a structure already standing establishes that a new one is permissible.",
    },
    {
      title: "Bus shelter and street furniture advertising",
      kicker: "Street level",
      body: "Kolkata has one of the highest public-transport dependencies of any Indian metro, which makes street-level formats disproportionately valuable here. Shelters, kiosks and street furniture around Esplanade, Gariahat, Rashbehari, Sealdah and the Howrah approach reach a pedestrian and bus-borne audience that arterial hoardings miss entirely — and it is a large audience, not a residual one.",
    },
    {
      title: "Pole kiosks and hyperlocal media",
      kicker: "Catchment",
      body: "North and south Kolkata are neighbourhood markets in a way the Bypass corridor is not, and pole kiosks run as a sequence along the approach roads into a defined para or trade area are how those neighbourhoods actually get covered. For retail, clinics, education and anything with a walk-in catchment, this is where a Kolkata plan should usually begin.",
    },
    {
      title: "LED screen and DOOH advertising in Kolkata",
      kicker: "Digital",
      body: "Digital out-of-home concentrates in the commercial districts — Park Street and Camac Street, Salt Lake Sector V, New Town and the malls — and is bought by daypart. The advantage is a lunchtime message and an evening one from a single position; the limitation is loop share. During Durga Puja, digital's ability to change creative daily is worth considerably more here than it is in an ordinary week elsewhere.",
    },
    {
      title: "Kolkata Metro and suburban rail advertising",
      kicker: "Transit",
      body: "The metro network has expanded substantially and now reaches catchments that were peripheral a few years ago, which changes what a station buy is worth. Alongside it, Howrah and Sealdah anchor one of the densest suburban rail systems in the world — a daily, repetitive audience of the same faces, which makes it a frequency medium rather than a reach one. Most national plans under-buy suburban rail in Kolkata and over-buy the arterials.",
    },
    {
      title: "Puja, mall and residential media",
      kicker: "Seasonal and retail",
      body: "Durga Puja pandal association and the media around it is a category of its own in this city, with a scale and a public acceptance that has no equivalent elsewhere in India. Outside that window, mall media in the Bypass and New Town corridors reaches a shopper in a spending frame of mind, and residential and lift media through Salt Lake, New Town and the southern housing belt reaches affluent households at close range.",
    },
  ],

  localMedia: {
    press: [
      {
        title: "Anandabazar Patrika",
        language: "Bengali",
        note: "The masthead with the deepest standing in the state. Being in it carries an implicit local credibility that an English title cannot transfer.",
      },
      {
        title: "Bartaman",
        language: "Bengali",
        note: "Strong household readership with a notably loyal, older reader base across the city and the districts.",
      },
      {
        title: "Sangbad Pratidin",
        language: "Bengali",
        note: "Widely read, with a lighter and more contemporary register than the older Bengali titles.",
      },
      {
        title: "Ei Samay",
        language: "Bengali",
        note: "The newer Bengali daily, skewing urban and younger than the established mastheads.",
      },
      {
        title: "The Telegraph",
        language: "English",
        note: "The English title with genuine Kolkata identity rather than a national edition dropped into the city.",
      },
      {
        title: "The Times of India, Kolkata",
        language: "English",
        note: "Reaches the corporate and expatriate-professional audience, particularly in Salt Lake and New Town.",
      },
    ],
    radio: [
      { station: "Radio Mirchi", frequency: "98.3", note: "Bengali-language mainstream." },
      { station: "Red FM", frequency: "93.5", note: "Bengali, younger and more irreverent." },
      { station: "Friends FM", frequency: "91.9", note: "Bengali, long-established locally." },
      { station: "Big FM", frequency: "92.7", note: "Broad-appeal mainstream." },
      { station: "Fever FM", frequency: "104.0", note: "Skews urban and English-comfortable." },
      { station: "Radio One", frequency: "94.3", note: "Urban, English-leaning playlist." },
      {
        station: "Akashvani Kolkata",
        frequency: "Several frequencies",
        note: "Public service, with real reach outside the metro core into the districts.",
      },
    ],
    radioNote:
      "Radio in Kolkata is a drive-time medium and a Bengali-language one. The commercial stations do their real work between roughly seven and eleven in the morning and five and nine in the evening, when the city is in a vehicle. Station branding and frequencies do change, so we confirm what is on air at the point of buying rather than working from a list.",
  },

  transit: {
    lede:
      "Kolkata has the deepest public-transport dependency of any Indian metro, which makes transit media here a mass medium rather than a supplementary one.",
    modes: [
      {
        mode: "Kolkata Metro",
        note: "India's oldest metro, now substantially expanded, with corridors reaching catchments that were peripheral a few years ago. Station, concourse and in-train formats reach a defined commuter population repeatedly through the week.",
      },
      {
        mode: "Suburban rail — Howrah and Sealdah",
        note: "One of the densest suburban networks anywhere, funnelling an enormous daily population from across the river and the eastern districts. A frequency audience of the same faces every day, and the format most consistently under-bought by national plans.",
      },
      {
        mode: "Bus, tram and street transport",
        note: "Bus exteriors, back panels and shelters reach across the whole city rather than along a single corridor, at the lowest cost per exposure of any format here.",
      },
      {
        mode: "Netaji Subhas Chandra Bose International Airport",
        note: "Terminal media plus the New Town and Rajarhat approach corridor, which can be planned as one continuous sequence rather than as two separate buys.",
      },
    ],
  },

  costDrivers: [
    {
      factor: "Which corridor",
      note: "The Bypass, the Howrah approach, Park Street and Gariahat are four different products. The Bypass and New Town buy income and clear sightlines; Esplanade and Gariahat buy sheer pedestrian density at a different price point entirely.",
    },
    {
      factor: "Durga Puja",
      note: "The single largest variable in the Kolkata year. Demand for almost every format compresses into a few weeks and pricing reflects it. Planning around that window rather than into it is often worth more than any negotiation.",
    },
    {
      factor: "Illumination",
      note: "Frontlit, backlit and non-lit price separately. Kolkata's commercial and social life runs late, and an unlit position loses a larger share of its working day here than in a city that closes at eight.",
    },
    {
      factor: "Size and structure type",
      note: "Area sets the base and the structure moves it. Unipole, gantry and wall-mounted positions of comparable area price differently because engineering, mounting and upkeep differ.",
    },
    {
      factor: "Duration and the minimum cycle",
      note: "Monthly cycles are the norm, and shorter runs usually cost more per day rather than less. Kolkata rewards sustained presence more than most Indian markets — familiarity genuinely compounds here.",
    },
    {
      factor: "Production, mounting and monsoon damage",
      note: "Printing, material, mounting and re-mounting. The monsoon and the pre-monsoon storms are hard on flex, and an honest budget for those months carries a maintenance line rather than hoping.",
    },
  ],

  compliance: {
    authority: "Kolkata Municipal Corporation (KMC)",
    body: [
      "Advertising in the city is licensed by the Kolkata Municipal Corporation, and permission is site-specific and time-bound. Areas of the metropolitan region outside KMC's limits fall under their own municipal authorities, which matters for plans reaching into Howrah, Salt Lake and the New Town and Rajarhat development areas.",
      "The practical point for an advertiser is the same everywhere and worth repeating: a brand on a structure that cannot produce a current permission is exposed alongside the media owner. We confirm permission status before a position enters a plan.",
      "We will not overstate what we know. We have not read a current primary KMC circular setting out size limits, height caps or LED-specific rules, and we will not quote you numbers from a website as though we had. Where a specific rule affects your campaign — a dimension, a setback, an illumination limit, or the position of the boundary between two authorities — we confirm it with the relevant corporation directly.",
    ],
  },

  season: [
    {
      window: "September to October — Durga Puja",
      note: "Not one festival among several. It is the axis the Kolkata commercial year turns on, with weeks of shopping before it and a scale of public participation and pandal-associated media that has no equivalent anywhere else in India.",
    },
    {
      window: "October to November — Kali Puja and Diwali",
      note: "The retail run continuing immediately after Puja, with the organised retail and durables categories at their heaviest.",
    },
    {
      window: "December to January — the winter season",
      note: "Park Street at Christmas, the fair and festival calendar, the book fair and the cricket season. A long, sustained window of high discretionary footfall and pleasant weather for outdoor.",
    },
    {
      window: "April — Poila Boishakh",
      note: "The Bengali new year, and the traditional trade's own commercial marker — a distinctly local peak that a pan-India calendar will not contain.",
    },
  ],

  planning:
    "We plan Kolkata from the catchment outwards. Before any site list exists we map the trade area around each priority location — who lives and works inside it, how they move through the week, and how dense the category already is — and the plan follows that map. In practice that usually means fewer sites than a conventional proposal would offer, held for longer, positioned against movement rather than against footfall counts. It also usually means more weight in transit and street-level formats than a national template would suggest, because this is a city that moves by bus and train.",

  faq: [
    {
      q: "How much does hoarding advertising cost in Kolkata?",
      a:
        "We do not publish a rate card. It depends on the corridor, the size, the illumination and the duration — and more than in most Indian cities, on the season, because Durga Puja compresses a large share of annual demand into a few weeks. We are not selling our own inventory, so a published rate would tell you what we would like to charge rather than what the market will take; we negotiate against several vendors for every plan. Send the brief and the budget and you will get real numbers against real positions.",
    },
    {
      q: "Which parts of Kolkata work best for outdoor advertising?",
      a: "The EM Bypass and the Howrah approach deliver commuter volume; Park Street, Camac Street and Gariahat deliver discretionary retail audiences; Salt Lake Sector V and New Town deliver a working professional population; north and south Kolkata are neighbourhood markets that respond to hyperlocal presence rather than city-wide weight. Which of those is right depends entirely on who you are trying to reach, and we would rather establish the audience first and then recommend the corridor.",
    },
    {
      q: "Do you own hoardings in Kolkata?",
      a: "No. We plan, negotiate and run campaigns; we do not hold media. That means no inventory to push and no incentive to recommend a position because it happens to be empty on our books. The trade-off is that we cannot promise a specific structure before we have negotiated for it, which is the honest position.",
    },
    {
      q: "How should a brand approach Durga Puja in Kolkata?",
      a: "Deliberately, and early. Puja is not a seasonal bump here — it is the commercial axis of the year, with weeks of shopping running up to it and a level of public participation that gives brand association a legitimacy it does not have elsewhere. Pandal association, street-level presence in the shopping weeks and daily-changing digital creative all do more in this window than in any other. Availability tightens months ahead, so a Puja plan decided in August is usually a plan that has already lost its best options.",
    },
    {
      q: "Can a campaign be limited to a specific neighbourhood?",
      a: "Yes. Hyperlocal planning is often the stronger option in Kolkata, particularly for retail brands with a defined trade area. We work from the catchment around your store or cluster rather than from city-level reach, and a sequence of street-level positions along the approach roads normally outperforms one large arterial site at the same budget.",
    },
    {
      q: "How long should a Kolkata campaign run?",
      a: "Longer than most markets. Familiarity compounds here and short bursts tend to underperform, and a run shorter than a monthly cycle usually costs more per day rather than less. We normally recommend sustained presence in a smaller set of locations over a wide, short buy.",
    },
    {
      q: "Is transit advertising worth buying in Kolkata?",
      a: "More than almost anywhere else in India, and it is the format national plans most consistently under-buy here. This city has an unusually high public-transport dependency: the metro has expanded into catchments that were peripheral a few years ago, and Howrah and Sealdah anchor one of the densest suburban rail networks in the world. Buses reach across the whole city at the lowest cost per exposure of any format. If the audience is mid-market, this tier usually deserves more of the budget than the arterials do.",
    },
    {
      q: "Is permission needed for a hoarding in Kolkata?",
      a: "Yes. Advertising is licensed by the Kolkata Municipal Corporation and permission is site-specific and time-bound — and note that Howrah, Salt Lake and the New Town and Rajarhat areas fall under their own authorities, so a metropolitan plan crosses more than one licensing boundary. We confirm permission status before recommending a position rather than after.",
    },
    {
      q: "How do I know my advertisement actually went up?",
      a: "Dated, geotagged photographs of every position at mounting and again during the cycle. Monitoring is the part of outdoor most often skipped and most often wrong, and in a market with Kolkata's weather it is also how you find out that a site needs re-mounting before the client does.",
    },
    {
      q: "Do you handle Bengali-language creative and media?",
      a: "Yes. We plan and buy across Bengali and English media, and we will flag where language choice materially changes performance — in Kolkata it usually does, and the Bengali mastheads carry a local standing that an English title cannot transfer. Creative adaptation is coordinated with your agency where you have one and handled in-house where you do not.",
    },
    {
      q: "How is outdoor advertising measured in Kolkata?",
      a: "With more caveats than the industry usually offers. Licensed audience research exists and we will show you the current figures at planning, but we will not publish them on a website and we will not present a modelled impression count as though it were a measurement. What we can show directly is proof of execution, the catchment logic behind every position, and movement in whatever outcome the campaign was actually bought for.",
    },
  ],

  nearby: ["Patna", "Varanasi", "Hyderabad", "Lucknow"],
};
