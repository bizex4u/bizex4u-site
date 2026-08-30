import type { City } from "./types";

/* Hyderabad. The Urdu press cluster is a genuinely distinct Old City
   audience and no other market we write has an equivalent — it belongs
   on this page and nowhere else.

   Radio verified against the MIB operational-channels list. Note Mirchi
   runs two frequencies here (98.3 Telugu, 95.0 Hindi) and Fever is 94.3,
   which is Big FM's frequency in Lucknow. */

export const hyderabad: City = {
  slug: "hyderabad",
  name: "Hyderabad",
  state: "Telangana",
  region: "South",

  metaTitle:
    "Outdoor Advertising in Hyderabad — Hoardings",
  metaDescription:
    "Hoarding, unipole, metro and retail advertising in Hyderabad, planned across the Old City, the IT corridor and the ORR rather than a site list.",

  h1Lead: "Outdoor advertising in",
  h1Accent: "Hyderabad",
  heroLede:
    "Hyderabad splits east to west more cleanly than almost any Indian metro. The volume is in the centre and the east; the money moved west to HITEC City, Gachibowli and the Financial District. Buying one and calling it the city is the standard mistake here.",

  market: [
    "Hyderabad is two economies sharing a municipal boundary. The historic and central city — Secunderabad, Abids, Koti, Sultan Bazaar, the Old City around Charminar, and out to Uppal and LB Nagar — carries the volume, the legacy trade and a price-sensitive mass consumer. The western arc — Madhapur, HITEC City, Kondapur, Gachibowli, the Financial District and now Kokapet — carries the IT and GCC employment, the highest household incomes in the state, and an audience that is young, salaried and almost entirely car-borne.",
    "That split is the whole planning problem. Premium rates cluster west, where the money is; reach sits central and east, where the people are. A plan built only on the western corridor reaches a well-paid city of maybe a fifth the size; a plan built only on the centre reaches a large city that will not pay a premium. Which mix is right depends on the category, and it is the first thing worth arguing about on a Hyderabad brief.",
    "The Outer Ring Road defines the modern map. The orbital, and particularly the Nehru ORR stretch running from Gachibowli down to the airport at Shamshabad, is the premium axis of the city — high-speed, high-income, and the corridor every arriving visitor uses. The PVNR Expressway carries that flow into the city on an elevated corridor. The wider Regional Ring Road, when it lands, will move the boundary again.",
    "The metro is the biggest change to the inner-city map in a generation. Three corridors — Miyapur to LB Nagar, JBS to MGBS and Nagole to Raidurg — put continuous elevated structure over the main arterials and gave the city a controlled, repeat-exposure environment it did not previously have. Phase 2 has been sanctioned, extending towards the airport and the western growth areas, which will pull further value along the same axis.",
  ],

  crowdPlaces: [
    {
      place: "Ameerpet",
      note: "The coaching and IT-jobseeker density of the city, and the Red and Blue Line interchange that makes it the metro's busiest node. Peaks mid-morning and through the evening commute, with a young, transitional, aspirational crowd.",
    },
    {
      place: "Secunderabad Railway Station and the Clock Tower",
      note: "The main long-distance interchange, with MMTS suburban rail and a bus feeder on top of it. Sustained volume, peaking early morning and between six and ten, and heavily on festival travel weekends.",
    },
    {
      place: "HITEC City and Madhapur",
      note: "Cyber Towers, Mindspace and the IT campuses around them. A captive white-collar audience with predictable weekday movement and a Friday-evening food and drink peak — and almost nobody at the weekend.",
    },
    {
      place: "Gachibowli and the Financial District",
      note: "The newer corporate, BFSI and global-capability-centre campuses along the ORR exits. High-income, vehicular, weekday-concentrated, and the least visually cluttered premium corridor in the city.",
    },
    {
      place: "Charminar and Laad Bazaar",
      note: "The Old City's retail and tourist heart — bangles, pearls, a dense pedestrian crowd. It transforms at Ramzan, when the night footfall runs for weeks at a level nothing else in the city matches.",
    },
    {
      place: "Abids, Koti and Sultan Bazaar",
      note: "The legacy mass-market retail belt. Price-sensitive shoppers on foot, weekend and festival afternoons, and a crowd that is broad rather than affluent.",
    },
    {
      place: "Tank Bund and Necklace Road",
      note: "Ordinary evening and weekend leisure crowds for most of the year, then the Ganesh Nimajjanam procession, which is the single largest street gathering the city produces.",
    },
    {
      place: "Inorbit Cyberabad and Sarath City Capital Mall",
      note: "The organised retail anchors for the western catchment. Weekend and festival-sale peaks, a shopper already in a spending frame of mind, and dwell time that street formats cannot match.",
    },
  ],

  formatGuide: [
    {
      title: "Hoarding advertising in Hyderabad",
      kicker: "Large format",
      body: "Large format does its best work on the western corridors and the ORR approaches, where speeds are steady and sightlines are long, and on the central arterials — Begumpet, Panjagutta, the Banjara Hills roads — where the traffic slows enough to be read. The regulatory position matters here more than in most cities: the current state advertisement policy has reopened hoardings and unipoles while restricting displays near junctions and flyovers, so a site that was viable two years ago may not be viable now. We check that before recommending, not after.",
    },
    {
      title: "Unipole advertising in Hyderabad",
      kicker: "Arterial",
      body: "Unipoles suit the ORR, the Nehru ORR airport stretch and the wide western arterials, where there is clear ground and a fast, affluent vehicular audience. They carry scale credibly, which is why automotive, real estate and financial services buy them here disproportionately. The airport axis in particular reaches a business-travel audience that no other single format in the city isolates as cleanly.",
    },
    {
      title: "Gantry and junction media",
      kicker: "Overhead",
      body: "Gantries and junction-adjacent formats have historically been among the most valuable positions in Hyderabad, because the city's traffic concentrates hard at a small number of decision points. This is also precisely the category the current advertisement policy has restricted. We treat any junction or flyover-adjacent proposal as requiring confirmation of current permissibility before it enters a plan — and we would rather tell you a site is no longer buyable than sell it to you and find out later.",
    },
    {
      title: "Bus queue shelter (BQS) and street furniture",
      kicker: "Street level",
      body: "Street-level formats reach the central and eastern mass audience that the western corridors miss entirely — the Abids, Koti, Secunderabad, Uppal and LB Nagar belts where a large share of the population moves by bus and on foot. Backlit shelters hold their value into the evening, which matters in a city whose retail runs late. For mid-market and value categories this is often better weight per rupee than an arterial hoarding.",
    },
    {
      title: "Pole kiosks and hyperlocal media",
      kicker: "Catchment",
      body: "Pole kiosks work as a sequence rather than as single sites, and Hyderabad's residential geography suits that well — Kukatpally, Miyapur, LB Nagar and Uppal are dense enough that a run of kiosks along an approach road covers a trade area properly. For store launches, clinics, coaching and anything with a defined catchment, this is where a plan should usually start rather than finish.",
    },
    {
      title: "LED screen and DOOH advertising in Hyderabad",
      kicker: "Digital",
      body: "Digital out-of-home concentrates on the western corridor and around the organised retail, and Hyderabad has one of the more developed DOOH environments in south India. Daypart control is the real advantage — an office-hours message and an evening one from a single buy. Loop share is the real limitation. Note also that illegal LED displays have been the subject of active court attention in the state, so the permission position on a digital site is worth confirming specifically rather than assuming.",
    },
    {
      title: "Hyderabad Metro advertising",
      kicker: "Transit",
      body: "Three operating corridors put a controlled, repeat-exposure environment over the busiest arterials, and Ameerpet as an interchange concentrates an unusually large daily audience in one place. Station, concourse, pillar, lift and in-train formats all exist, and the media rights position is a matter of public record — rights across the corridors, lifts and staircases sit with named concessionaires, and the operator has separately tendered large-format digital screens and exclusive train branding. It is a frequency medium: the same commuters several times a week.",
    },
    {
      title: "Mall, cinema and residential media",
      kicker: "Retail and residential",
      body: "The western malls reach the affluent catchment in a spending frame of mind, and cinema in Hyderabad carries a weight it does not carry in most Indian cities because of the scale of Telugu film-going — a release week here is a genuine media event. Lift branding and residential society media through Banjara Hills, Jubilee Hills, Kokapet and the gated western townships reach high-income households at close range with almost no competing message.",
    },
  ],

  localMedia: {
    press: [
      {
        title: "Eenadu",
        language: "Telugu",
        note: "The mass Telugu daily, with dense city and district supplements. Broad household reach and the default first line of a Telugu press plan.",
      },
      {
        title: "Sakshi",
        language: "Telugu",
        note: "Strong with younger and semi-urban Telugu readers, and a genuinely different reader profile from Eenadu rather than an overlapping one.",
      },
      {
        title: "Namasthe Telangana",
        language: "Telugu",
        note: "Explicitly Telangana-region in its readership and outlook, which matters for campaigns pitched at state identity rather than at the wider Telugu market.",
      },
      {
        title: "Andhra Jyothy",
        language: "Telugu",
        note: "Urban-skewing, with an opinion and political readership that reads more than it browses.",
      },
      {
        title: "Deccan Chronicle",
        language: "English",
        note: "The long-established Hyderabad English masthead, reaching the urban middle and upper-middle household rather than only the corporate desk.",
      },
      {
        title: "Telangana Today",
        language: "English",
        note: "The English daily from the Namasthe Telangana stable, with a city and policy readership.",
      },
      {
        title: "The Times of India and The Hindu",
        language: "English",
        note: "National mastheads with Hyderabad editions. The Times skews consumer and lifestyle; The Hindu skews institutional. Both reach the western IT and corporate belt more efficiently than the centre.",
      },
      {
        title: "The Siasat Daily, Munsif and Rahnuma-e-Deccan",
        language: "Urdu",
        note: "The Urdu cluster is a genuinely distinct Hyderabad audience — Old City and Muslim households — with no equivalent in Chennai, Pune or Bangalore. Rahnuma-e-Deccan is the city's oldest Urdu daily. Ignoring this tier is one of the most common errors a national plan makes here.",
      },
    ],
    radio: [
      {
        station: "Radio Mirchi",
        frequency: "98.3",
        note: "Telugu contemporary — the broadest single commercial station in the market.",
      },
      {
        station: "Mirchi 95",
        frequency: "95.0",
        note: "Hindi. Hyderabad is one of the few southern markets where a Hindi station is a serious buy rather than a niche one.",
      },
      {
        station: "Red FM",
        frequency: "93.5",
        note: "Telugu with Hindi, contemporary and humour-led, skewing younger.",
      },
      {
        station: "Radio City",
        frequency: "91.1",
        note: "Telugu mass, with a broad daytime schedule.",
      },
      {
        station: "Big FM",
        frequency: "92.7",
        note: "Telugu with Hindi, mass and retro.",
      },
      {
        station: "Fever FM",
        frequency: "94.3",
        note: "Hindi contemporary, urban-leaning.",
      },
      {
        station: "Kool FM",
        frequency: "104.0",
        note: "English. Reaches the western IT and expatriate-professional audience that Telugu stations do not.",
      },
      {
        station: "Akashvani Hyderabad",
        frequency: "FM Rainbow 101.9 · Vividh Bharati 102.8",
        note: "Public service, with reach beyond the metro core into the districts.",
      },
    ],
    radioNote:
      "Hyderabad is a three-language radio market — Telugu carries the mass audience, Hindi is a serious buy rather than an afterthought, and English reaches the western corporate belt. That combination is unusual in south India and it is worth planning deliberately rather than defaulting to the Telugu stations. Commercial radio does its real work at drive time, roughly seven to eleven in the morning and five to nine in the evening. Frequencies and branding change; we confirm what is on air at the point of buying.",
  },

  transit: {
    lede:
      "Hyderabad has the most developed transit media environment in the Telugu-speaking market, and unusually, the commercial rights position across most of it is publicly documented.",
    modes: [
      {
        mode: "Hyderabad Metro",
        note: "Three operating corridors with station, concourse, pillar, lift, staircase and in-train inventory. Advertising rights across the corridors sit with named concessionaires as a matter of public record, and the operator has separately tendered large-format digital screens across a set of stations and exclusive train branding rights.",
      },
      {
        mode: "MMTS suburban rail",
        note: "The Secunderabad, Falaknuma and Lingampally corridors. A daily, repetitive commuter audience — frequency rather than reach, and reaching a different income band from the metro.",
      },
      {
        mode: "TGSRTC bus",
        note: "The state transport corporation, renamed from TSRTC. Bus exteriors, back panels and the major terminals at MGBS and JBS, covering the mass commuting population across the centre and east.",
      },
      {
        mode: "Rajiv Gandhi International Airport",
        note: "At Shamshabad, reached along the Nehru ORR stretch. Terminal media plus the approach corridor reach business and premium travel as a single planned sequence rather than as two separate buys.",
      },
    ],
  },

  costDrivers: [
    {
      factor: "West versus centre and east",
      note: "The single largest variable in Hyderabad. A Gachibowli or Madhapur position and an Uppal or Koti position are different products at very different prices, and you are paying for household income rather than for headcount.",
    },
    {
      factor: "Current permissibility",
      note: "More consequential here than in most cities right now. The state advertisement policy has reopened some formats and restricted junction and flyover-adjacent displays, and enforcement is active. A site's price is meaningless if its permission is not current.",
    },
    {
      factor: "Illumination and digital",
      note: "Frontlit, backlit, non-lit and LED are four different products. On a digital site you are also buying a share of a loop, which is the variable most often glossed over in a proposal.",
    },
    {
      factor: "Size and structure type",
      note: "Area sets the base and the structure moves it — unipole, gantry and wall-mounted positions of comparable area price differently because engineering and upkeep differ.",
    },
    {
      factor: "Season",
      note: "Ganesh Chaturthi, the Dussehra-to-Diwali retail run and the IPL window are when demand outruns supply. Sankranti empties the city instead, which is worth knowing before booking January weight.",
    },
    {
      factor: "Production and mounting",
      note: "Printing, material, mounting and re-mounting after weather, quoted separately from media so the two are never confused.",
    },
  ],

  compliance: {
    authority: "GHMC — Greater Hyderabad Municipal Corporation",
    body: [
      "Advertising permissions are issued by GHMC under the GHMC Act, 1955, which governs advertisement permission for hoardings, glow signs and similar displays. Permission is site-specific, and GHMC actively removes unlicensed displays — an advertiser whose brand is on an unpermitted structure is exposed alongside the media owner.",
      "Hyderabad is in the middle of a genuine regulatory transition and it would be misleading to write this page as though it were settled. A new Telangana advertisement policy has reopened unipoles and hoardings after a restrictive period, while reportedly barring displays near junctions and flyovers. It has been welcomed by parts of the industry and contested by others — one Telangana OOH body has argued publicly that it squeezes out smaller operators — and media owners have disputed aspects of GHMC's implementation.",
      "What that means practically: we confirm the current permissibility of every position before it enters a plan, and we treat junction and flyover-adjacent sites as requiring specific confirmation rather than assumption. We have not read a primary gazette copy of the new policy, so we will not quote you size limits, height caps or LED luminance rules from it. Where a specific rule affects your campaign, we check it with GHMC rather than repeating a trade-press summary.",
    ],
  },

  season: [
    {
      window: "August to September — Ganesh Chaturthi",
      note: "The defining Hyderabad season. The Khairatabad idol and the Tank Bund immersion procession produce the largest street crowd of the year, and the mandal environment carries its own sponsorship inventory.",
    },
    {
      window: "Bathukamma and Bonalu",
      note: "Distinctly Telangana festivals with strong local resonance, and an opportunity for state-identity positioning that a pan-India calendar will simply not contain.",
    },
    {
      window: "Ramzan and Bakrid",
      note: "The Old City runs at night for weeks. Charminar and Laad Bazaar reach a footfall level nothing else in the year approaches, and the Urdu press tier matters most in exactly this window.",
    },
    {
      window: "October to November, and January",
      note: "Dussehra to Diwali is the retail peak. Sankranti in January is the opposite — a travel exodus that empties the city, and a poor window for city-level weight.",
    },
  ],

  planning:
    "We plan Hyderabad by settling the east-west split before anything else. The western corridor buys income and the central and eastern belts buy volume, and the right proportion depends on what the category actually needs rather than on which sites look impressive in a deck. After that, permissibility: in the current regulatory climate we confirm that a position is buyable before it goes into a plan, because a site that cannot show current permission is a liability rather than a bargain.",

  faq: [
    {
      q: "How much does hoarding advertising cost in Hyderabad?",
      a:
        "We do not publish a rate card. It depends on the corridor, the size, the illumination and the duration — and in Hyderabad the corridor swings it hard, because a Gachibowli or Madhapur position and an Uppal one are not the same product. We are not selling our own inventory, so a published rate would tell you what we would like to charge rather than what the market will take; we negotiate against several vendors on every plan. Send the brief and the budget and you will get real numbers against real positions.",
    },
    {
      q: "Which areas of Hyderabad are best for outdoor advertising?",
      a: "HITEC City, Madhapur, Kondapur, Gachibowli and the Financial District reach the highest-income, IT and corporate population. Ameerpet, Secunderabad, Abids, Koti, Uppal and LB Nagar reach volume at a different income level. The Old City around Charminar is its own market with its own language and calendar. The ORR and the airport axis reach premium and business travel. Which of those is right depends entirely on the audience, and we would rather establish that first than lead with a location list.",
    },
    {
      q: "Are hoardings allowed in Hyderabad right now?",
      a: "Yes, with conditions, and the position has changed recently. After a restrictive period, a new Telangana advertisement policy has reopened unipoles and hoardings while reportedly restricting displays near junctions and flyovers. GHMC licenses under the GHMC Act, 1955 and actively removes unlicensed displays. Because this is genuinely in transition, we confirm the current permissibility of each position before recommending it rather than working from what was permitted last year.",
    },
    {
      q: "Do you own hoardings in Hyderabad?",
      a: "No. We plan, negotiate and run campaigns; we do not hold media. That means no inventory to push and no incentive to recommend a position because it is empty on our books — and it means we cannot promise a specific structure before we have negotiated for it, which is the honest trade.",
    },
    {
      q: "Is Hyderabad Metro advertising worth buying?",
      a: "For a frequency objective, yes. Three corridors run over the busiest arterials and Ameerpet as an interchange concentrates an unusually large daily audience. Station, pillar, lift and in-train formats all exist and the rights position is publicly documented rather than informal. It reaches the same commuters several times a week, so it builds a message well and announces a one-week offer badly.",
    },
    {
      q: "Which language should a Hyderabad campaign run in?",
      a: "Usually more than one, and the mix is worth arguing about. Telugu carries the mass market. Hindi is a genuine buy here in a way it is not in Chennai or Bangalore. English reaches the western corporate and expatriate-professional belt. And Urdu reaches the Old City audience that a national plan almost always drops. We will tell you where language choice materially changes performance rather than splitting spend evenly.",
    },
    {
      q: "How long should a Hyderabad campaign run?",
      a: "At least a full monthly cycle, and normally longer, since shorter runs cost more per day rather than less. The exception is event-led work around Ganesh Chaturthi or a release week, where a short and heavy presence can be the right trade because the attention itself is concentrated.",
    },
    {
      q: "How do I know my advertisement actually went up?",
      a: "Dated, geotagged photographs of every position at mounting and again through the cycle. In a market with active enforcement and removals, that record does double duty — it proves delivery and it flags immediately if a site has been taken down mid-campaign.",
    },
    {
      q: "Can a campaign be limited to one part of Hyderabad?",
      a: "Yes, and for retail it is usually the stronger option. The income geography changes sharply across this city, so a plan built around a defined catchment — a sequence of street-level and hyperlocal positions along the approach roads into a trade area — normally outperforms a thin city-wide buy at the same budget.",
    },
    {
      q: "How is outdoor advertising measured in Hyderabad?",
      a: "With more caveats than the industry usually offers. Licensed audience research exists and we will show you the current figures at planning, but we will not publish them on a website and we will not present a modelled impression count as though it were a measurement. What we can show directly is proof of execution, the catchment logic behind every position, and movement in the outcome the campaign was bought for.",
    },
    {
      q: "Can you plan Hyderabad alongside other southern markets?",
      a: "Yes. We plan outdoor across 39 Indian cities, and Hyderabad sits naturally with Vijayawada, Visakhapatnam, Warangal and Bengaluru. Buying a cluster in one negotiation rather than city by city changes what is achievable on both price and position — and for Telugu-language work, planning Hyderabad and coastal Andhra together is almost always more efficient than treating them as separate briefs.",
    },
  ],

  nearby: ["Bangalore", "Chennai", "Pune", "Nagpur"],
};
