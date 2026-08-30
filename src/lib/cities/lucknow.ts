import type { City } from "./types";

/* Lucknow. Radio verified: Mirchi 98.3, Mirchi Love 107.2, Fever 104.0,
   Big 94.3, Red 93.5, Radio City 91.1. Every one of those differs from
   Kanpur except Red FM. Two mastheads the research could not confirm an
   edition for were left out rather than guessed at. */

export const lucknow: City = {
  slug: "lucknow",
  name: "Lucknow",
  state: "Uttar Pradesh",
  region: "North",

  metaTitle:
    "Outdoor Advertising in Lucknow — Hoardings & Metro",
  metaDescription:
    "Hoarding, unipole, metro and retail advertising in Lucknow, planned across Hazratganj, Gomti Nagar, Aminabad and Charbagh.",

  h1Lead: "Outdoor advertising in",
  h1Accent: "Lucknow",
  heroLede:
    "Lucknow is the one city in Uttar Pradesh where a genuinely premium plan is defensible — and the one where a purely premium plan will miss most of the market. The old city and Shaheed Path are barely the same economy.",

  market: [
    "Lucknow works as a state capital before it works as a consumer market, and that changes what advertising does here. The secretariat, the judiciary, the universities and the corporate offices create an audience that no other city in the state has — salaried, institutional, English-comfortable and concentrated in a small number of addresses. It is the reason English press and premium formats can be justified in Lucknow when they cannot be justified in Kanpur or Varanasi.",
    "The city has two centres of gravity rather than one. Hazratganj is the historic high street and still the place the city goes in the evening — heritage facades, government workers, promenaders, a crowd that walks. Gomti Nagar and the Shaheed Path belt is the new money: corporate offices, premium residential, the large-format malls, and an audience that arrives by car. Aminabad, Alambagh and Charbagh carry the volume, and they carry it at a very different price point.",
    "Shaheed Path has become the arterial that matters most commercially. It threads the newest premium development — the large malls, the stadium, the corporate belt — and it moves at a speed where large format actually gets read. Kanpur Road and Faizabad Road carry the mass volume in and out of the city, and Gomti Nagar Extension is where the next decade of the market is being built.",
    "The metro's Red Line did something unusual and genuinely favourable: it connects the airport, the main railway station at Charbagh and the primary high street at Hazratganj on a single corridor. That is a rare alignment. It means one transit buy can reach the arriving visitor, the outstation commuter and the city's own evening crowd, which almost no Indian metro corridor of this size manages.",
  ],

  crowdPlaces: [
    {
      place: "Hazratganj",
      note: "The state capital's premier high street, and the one place in the city where a large crowd moves on foot rather than in vehicles. Heritage-facade retail, government offices, restaurants and evening promenaders — densest after six and at weekends.",
    },
    {
      place: "Gomti Nagar",
      note: "The planned new-money district: corporate offices, premium residential, restaurants. Weekday working population by day and a discretionary leisure crowd at the weekend, with the highest household income concentration in the city.",
    },
    {
      place: "Aminabad",
      note: "The dense old-city wholesale and value bazaar — chikankari, jewellery, mass retail. The crowd is broad, price-sensitive and largely local, and it peaks hard through the wedding and festival buying weeks.",
    },
    {
      place: "Charbagh",
      note: "Lucknow Junction and its precinct. Heavy transit volume, outstation and commuter, running round the clock with genuine dwell time — and now interchanged with the metro, which concentrates it further.",
    },
    {
      place: "Phoenix Palassio",
      note: "Premium mall on the Shaheed Path side of Gomti Nagar. Upper-income and younger shoppers, weekend-evening peaks, and a captive dwell environment rather than a passing one.",
    },
    {
      place: "Lulu Mall",
      note: "Very large-format retail drawing footfall from well beyond the city limits. A family and regional crowd, overwhelmingly weekend-weighted, and a catchment that extends into the surrounding districts.",
    },
    {
      place: "Alambagh",
      note: "A major transport and mid-market retail node. Bus terminal traffic and mass commuter movement all day, with a crowd that is neither the old city nor the new belt but its own distinct middle.",
    },
    {
      place: "Ekana Stadium",
      note: "The international cricket and IPL venue on Shaheed Path. Episodic rather than continuous, but the match-day crowds are among the largest single gatherings the city produces.",
    },
  ],

  formatGuide: [
    {
      title: "Hoarding advertising in Lucknow",
      kicker: "Large format",
      body: "Large format works best on Shaheed Path, Kanpur Road and Faizabad Road, where the roads are wide, the speeds are steady and there is room for a structure to be read rather than glimpsed. Inside Hazratganj the calculus inverts — the heritage streetscape is tightly controlled and the audience is on foot, so smaller, closer formats do more than a large one would. We plan hoardings here by corridor speed and approach angle rather than by nominal size, and Shaheed Path is the corridor where the premium is usually worth paying.",
    },
    {
      title: "Unipole advertising in Lucknow",
      kicker: "Arterial",
      body: "Unipoles suit the outer arterials and the newer development around Gomti Nagar Extension and the Shaheed Path corridor, where there is clear ground and a fast-moving, higher-income vehicular audience. They carry scale credibly, which matters for categories that need to look established — automotive, real estate, financial services and premium retail all buy them for that reason as much as for the reach.",
    },
    {
      title: "Gantry and median advertising in Lucknow",
      kicker: "Overhead",
      body: "Gantries make sense on the wide arterial crossings where traffic slows to a decision point, and Lucknow has more of those than most UP cities because of the ring and radial structure. Median and divider media works at street level in slow traffic and is the more available of the two. Both are permission-sensitive; both are worth confirming against current municipal requirements rather than assuming last year's position still stands.",
    },
    {
      title: "Bus queue shelter (BQS) advertising in Lucknow",
      kicker: "Street level",
      body: "Bus queue shelters reach the public-transport and pedestrian population, which in Lucknow is large and skews towards exactly the mid-market households that vehicular formats under-deliver. The strongest positions sit around Charbagh, Alambagh and the Aminabad approaches, and along the Kanpur Road corridor. Backlit units hold their value after dark; unlit ones effectively stop working at six in the winter.",
    },
    {
      title: "Pole kiosks and hyperlocal media",
      kicker: "Catchment",
      body: "Pole kiosks are how a Lucknow retail catchment actually gets covered. Run as a sequence along the approach roads into a defined trade area, they deliver repeated exposure at a fraction of large-format cost, and they work as well in Gomti Nagar as in Alambagh — the creative changes, the format does not. For store launches, clinics, coaching centres and anything with a two-kilometre trade area, this is usually where we start.",
    },
    {
      title: "LED screen and DOOH advertising in Lucknow",
      kicker: "Digital",
      body: "Digital screens concentrate around the organised retail and the commercial belt — the Gomti Nagar and Shaheed Path malls, the Hazratganj commercial core. The real advantage is daypart control: a lunchtime message to the office belt and an evening message to the same location's leisure crowd, from one buy. The real limitation is loop share. We recommend DOOH when the rotation is genuinely being used and say so plainly when a static site would deliver more for the same spend.",
    },
    {
      title: "Lucknow Metro advertising",
      kicker: "Transit",
      body: "The Red Line runs from CCS Airport to Munshipulia, threading Charbagh and Hazratganj — a single corridor connecting the airport, the railway station and the primary high street. Station, concourse and in-train formats reach a defined commuter population repeatedly through the week, so it is a frequency medium. UPMRC has publicly opened station advertising rights and tendered semi-naming rights across network assets, which makes station-level branding a documented, buyable proposition rather than an informal one.",
    },
    {
      title: "Mall, cinema and lift branding in Lucknow",
      kicker: "Retail and residential",
      body: "Phoenix Palassio and Lulu anchor an organised retail environment that pulls a regional catchment, not just a city one — which makes mall media in Lucknow unusually efficient for brands with a state-wide objective. Lift branding and residential society media through Gomti Nagar, Vibhuti Khand and the Shaheed Path residential belt reach affluent households at close range with almost no competing message, and they suit high-consideration categories better than any street format does.",
    },
  ],

  localMedia: {
    press: [
      {
        title: "Dainik Jagran",
        language: "Hindi",
        note: "Mass reach across the capital and the rural hinterland around it, and the default first line of any Hindi press plan in the city.",
      },
      {
        title: "Amar Ujala",
        language: "Hindi",
        note: "Competes head to head with Jagran in Lucknow rather than trailing it, which makes the two genuinely worth planning against each other rather than buying by habit.",
      },
      {
        title: "Hindustan",
        language: "Hindi",
        note: "A full Lucknow edition, reading younger and more aspirational, and strong with first-generation salaried households.",
      },
      {
        title: "The Times of India",
        language: "English",
        note: "Lucknow is by a distance the strongest English press market in Uttar Pradesh, because of the secretariat, the judiciary, the universities and the corporate offices. Unlike Kanpur or Varanasi, English here is a reach buy and not only a precision one.",
      },
      {
        title: "Hindustan Times",
        language: "English",
        note: "The other substantial English option, with an urban professional and administrative readership that overlaps but does not duplicate the Times.",
      },
    ],
    radio: [
      {
        station: "Radio Mirchi",
        frequency: "98.3",
        note: "Hindi mainstream, film-led — the broadest commercial station in the city.",
      },
      {
        station: "Radio City",
        frequency: "91.1",
        note: "Hindi mass. Note the frequency: Radio City is 91.1 here and 104.8 in Kanpur.",
      },
      {
        station: "Red FM",
        frequency: "93.5",
        note: "Hindi contemporary, humour-led, and the youngest-skewing voice in the market.",
      },
      {
        station: "Big FM",
        frequency: "94.3",
        note: "Hindi mass and retro, with a broad daytime schedule.",
      },
      {
        station: "Fever FM",
        frequency: "104.0",
        note: "Hindi contemporary, urban-leaning.",
      },
      {
        station: "Mirchi Love",
        frequency: "107.2",
        note: "Hindi retro and romantic — an older listener than 98.3, and more female-skewing.",
      },
      {
        station: "Akashvani Lucknow",
        frequency: "FM Rainbow 100.7 · Vividh Bharati 101.6 · Gyan Vani 105.6",
        note: "Public service across three services, with reach into the districts and, on Gyan Vani, an educational audience the commercial stations do not touch.",
      },
    ],
    radioNote:
      "Radio in Lucknow is a drive-time medium and overwhelmingly a Hindi one, even though this is the state's strongest English press market — the two do not track each other. The commercial stations do their real work between roughly seven and eleven in the morning and five and nine in the evening. Note that almost every frequency here differs from Kanpur's; anyone quoting you one station list for Uttar Pradesh is quoting you something wrong. We confirm what is on air at the point of buying.",
  },

  transit: {
    lede:
      "Lucknow's transit media is unusually well-aligned. One metro corridor reaches the airport, the main railway station and the primary high street, which is a rare thing to be able to buy in a single plan.",
    modes: [
      {
        mode: "Lucknow Metro",
        note: "The Red Line, CCS Airport to Munshipulia, through Charbagh and Hazratganj. UPMRC has publicly opened station advertising rights and invited bids for semi-naming rights across network assets, so station branding here is a documented commercial format. Concourse, platform, pillar and in-train inventory all exist.",
      },
      {
        mode: "Charbagh — Lucknow Junction",
        note: "The main railway station and now a metro interchange. Heavy outstation and commuter dwell, round the clock, with an audience that is captive and waiting rather than passing.",
      },
      {
        mode: "Chaudhary Charan Singh International Airport",
        note: "A significant airport media market by UP standards, reaching business and government travel that no other format in the state isolates as cleanly. Terminal formats and the approach corridor are planned together.",
      },
      {
        mode: "City bus and the expressway approaches",
        note: "Bus exteriors and terminals cover the mass commuter population. Beyond the city, the Purvanchal Expressway put eastern UP within a day's drive and the Ganga Expressway adds the western vector — which is why Lucknow is now the natural launch market for a Purvanchal campaign rather than just a capital-city buy.",
      },
    ],
  },

  costDrivers: [
    {
      factor: "Shaheed Path versus the old city",
      note: "A Shaheed Path or Gomti Nagar position and an Aminabad or Alambagh position are different products at different prices, and the gap is wider in Lucknow than in most UP cities. You are paying for household income, not for headcount.",
    },
    {
      factor: "Illumination",
      note: "Frontlit, backlit and non-lit price separately for the same footprint. On the Shaheed Path corridor, where a large share of the audience passes after dark, unlit is close to a false economy.",
    },
    {
      factor: "Size and structure type",
      note: "Area sets the base and the structure moves it. A unipole, a gantry and a wall-mounted hoarding of comparable area sit at different points because the mounting, the engineering and the upkeep differ.",
    },
    {
      factor: "Duration and the minimum cycle",
      note: "Outdoor here transacts on monthly cycles and anything shorter usually costs more per day. Lucknow rewards sustained presence particularly well because the premium audience is small enough to be reached repeatedly.",
    },
    {
      factor: "The capital calendar",
      note: "Something no other UP city has: assembly sessions, government campaign cycles and the exam and admission calendar generate their own advertising demand and tighten availability in windows that have nothing to do with retail.",
    },
    {
      factor: "Production and mounting",
      note: "Printing, material, mounting and re-mounting after weather are a real cost line. We quote them apart from media so you can see which is which.",
    },
  ],

  compliance: {
    authority: "Lucknow Nagar Nigam",
    body: [
      "Outdoor advertising in the city is licensed by Lucknow Nagar Nigam. Permission is site-specific and time-bound, and the advertiser carries real exposure if a structure cannot produce current paperwork — this is not only the media owner's problem.",
      "Hazratganj deserves separate mention. It is a controlled heritage streetscape with a deliberate visual character, and signage there is treated differently from signage on an arterial. Anything planned for the Ganj should be confirmed against current requirements rather than assumed from what is already standing.",
      "We will not claim more certainty than we have. There is no consolidated Uttar Pradesh outdoor advertising policy published in a form we can point you to, and Lucknow Nagar Nigam's advertisement bye-laws are not available as a public document. What is on record is that the state government has been examining road-safety norms for roadside advertising, which bears directly on Shaheed Path and Kanpur Road positions. Where a specific rule affects your plan, we confirm it with the Nigam's advertisement department rather than repeating something from a website.",
    ],
  },

  season: [
    {
      window: "November to February — wedding season",
      note: "The commercial peak. Jewellery, chikankari, apparel, catering and durables all compete for the same weeks and availability tightens on the premium corridors.",
    },
    {
      window: "October to November — Dussehra and Diwali",
      note: "The organised retail peak, and the period when the malls run their heaviest calendar and mall media is at its most competitive.",
    },
    {
      window: "The assembly and government calendar",
      note: "Vidhan Sabha sessions and state campaign cycles create advertising demand no other UP market sees, and they do not follow the retail calendar at all.",
    },
    {
      window: "April to July — admissions",
      note: "The education and coaching category runs its own peak against the admission cycle, and it competes hardest for exactly the positions that reach student catchments.",
    },
  ],

  planning:
    "We plan Lucknow as two markets that happen to share a name. The premium plan — Shaheed Path, Gomti Nagar, Hazratganj, the malls, English press, the metro corridor — reaches a small, high-value audience that can genuinely be covered with frequency. The volume plan — Aminabad, Alambagh, Charbagh, Kanpur Road, Hindi press and radio — reaches a much larger one at a different price. Most briefs need a defined proportion of both, and the useful work is deciding that proportion before anyone looks at a site list.",

  faq: [
    {
      q: "How much does hoarding advertising cost in Lucknow?",
      a:
        "We do not publish a rate card. It depends on the corridor, size, illumination and duration — and in Lucknow the corridor matters more than in most cities, because the gap between a Shaheed Path position and an Alambagh one is wide. We are not selling our own inventory, so a published rate would tell you what we would like to charge rather than what the market will take; we negotiate against several vendors for every plan. Send the brief and the budget and you will get real numbers against real positions.",
    },
    {
      q: "Which areas of Lucknow are best for outdoor advertising?",
      a: "Shaheed Path and Gomti Nagar reach the highest-income households and the corporate belt. Hazratganj reaches an evening pedestrian crowd that no arterial site does. Aminabad, Alambagh and Charbagh reach volume at a different income level. The metro corridor reaches a defined commuter population repeatedly. Which of those is right depends entirely on the audience, and we would rather work that out first than open with a location list.",
    },
    {
      q: "Do you own hoardings in Lucknow?",
      a: "No. We plan, negotiate and run campaigns; we do not hold media. That means no inventory to push and no incentive to recommend a position because it happens to be empty on our books. The trade-off is that we cannot promise a specific structure before negotiating for it, which is the honest position and the reason we plan from catchment rather than from availability.",
    },
    {
      q: "Is Lucknow Metro advertising worth buying?",
      a: "For the right objective, unusually so. The Red Line connects the airport, Charbagh and Hazratganj on one corridor, which means a single buy reaches arriving visitors, outstation commuters and the city's own crowd. It is a frequency medium — the same faces several times a week — so it builds a message well and announces a one-week offer badly. UPMRC has publicly opened station advertising and semi-naming rights, so the format is documented rather than informal.",
    },
    {
      q: "Should a Lucknow campaign use English or Hindi media?",
      a: "Usually both, in a proportion worth arguing about. Lucknow is the strongest English press market in Uttar Pradesh because of the government, legal and university population, so English press does real work here that it does not do in Kanpur. Radio, however, is overwhelmingly Hindi regardless. We will tell you where language choice materially changes performance rather than splitting it evenly by default.",
    },
    {
      q: "Is permission needed for a hoarding in Lucknow?",
      a: "Yes. Outdoor advertising is licensed by Lucknow Nagar Nigam, and permission is site-specific and time-bound. Hazratganj is treated separately as a controlled heritage streetscape. We confirm permission status before recommending a position and will drop a site from a plan rather than put your brand on a structure that cannot show its paperwork.",
    },
    {
      q: "How long should a Lucknow campaign run?",
      a: "At least a full monthly cycle, and normally longer. Anything shorter usually costs more per day rather than less. Lucknow rewards sustained presence particularly well because the premium audience is small enough that a well-chosen set of positions can genuinely reach it several times a week over a month.",
    },
    {
      q: "How do I know the advertisement actually went up?",
      a: "Dated, geotagged photographs of every position at mounting and again during the cycle. Monitoring is the part of outdoor most often skipped and most often wrong, and it is the usual reason a campaign quietly underdelivers. Insist on it from anyone, including us.",
    },
    {
      q: "Can a campaign be limited to one part of Lucknow?",
      a: "Yes, and for retail it is often the stronger option. The income geography changes sharply within a few kilometres here, so a plan built around the catchment of a specific store or cluster — a sequence of smaller positions along the approach roads — usually outperforms a wide, thin city-level buy.",
    },
    {
      q: "How is outdoor advertising measured in Lucknow?",
      a: "With more caveats than the industry usually admits. Licensed audience research for the city exists and we will show you the current figures at planning, but we will not publish them on a website and we will not present a modelled impression count as a measurement. What we can show you directly is proof of execution, the catchment logic behind every position, and movement in whatever outcome the campaign was actually bought for.",
    },
    {
      q: "Can you plan Lucknow with other Uttar Pradesh markets?",
      a: "Yes, and it usually buys better. We plan outdoor across more than forty Indian cities. Lucknow sits naturally with Kanpur, Varanasi, Prayagraj and Gorakhpur, and with the Purvanchal Expressway in place it is the practical launch market for an eastern UP campaign. Negotiating the cluster together rather than city by city changes what is achievable on both price and position.",
    },
  ],

  nearby: ["Kanpur", "Varanasi", "Agra", "Patna"],
};
