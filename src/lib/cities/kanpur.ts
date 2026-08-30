import type { City } from "./types";

/* Kanpur is the home market. Mona Enclave is here. That is a fact worth
   saying on this page and on no other, and it is the one thing a Kanpur
   advertiser can check in thirty seconds.

   Radio, verified: Mirchi 98.3, Mirchi Love 91.9, Fever 95.0, Big 92.7,
   Red 93.5, Radio City 104.8. Note 95.0 — that is Fever here and Big FM
   in Varanasi. Do not copy this table anywhere. */

export const kanpur: City = {
  slug: "kanpur",
  name: "Kanpur",
  state: "Uttar Pradesh",
  region: "North",

  metaTitle:
    "Outdoor Advertising in Kanpur — Hoardings & Metro",
  metaDescription:
    "Hoarding, unipole, transit and retail advertising in Kanpur — the home market of an independent Indian media planning and buying firm.",

  h1Lead: "Outdoor advertising in",
  h1Accent: "Kanpur",
  heroLede:
    "This is where we are. Kanpur is a city of two halves that behave nothing alike — the old commercial core around Naveen Market and Birhana Road, and the planned belt of Civil Lines and Swaroop Nagar — and a plan that treats them as one city wastes most of its money.",

  market: [
    "Kanpur is an industrial city that grew along a road and a river rather than outwards from a centre. The Grand Trunk Road carries the through-traffic and the freight; The Mall Road carries the commerce, the banks and the showrooms; and the Ganga edge holds the old leather and textile economy that gave the city its name in the first place. Movement here is corridor movement, and the corridors are few enough that the same audience can be reached repeatedly without buying half the city.",
    "The money and the volume sit in different places, and this is the single most useful thing to know before planning here. Mall Road, Parwati Bagla Road, Civil Lines and Swaroop Nagar hold the discretionary spend — jewellery, bridal, healthcare, coaching, the professional households. Naveen Market, Nayaganj, Birhana Road and the GT Road belt hold the volume, and it is a price-sensitive volume with entirely different buying triggers. A campaign that buys only the premium addresses reaches a small city; one that buys only the volume reaches a large city that will not pay a premium.",
    "The metro changed the map more than anything else in the last decade. The Orange Line's extension took the corridor underground through the commercial heart, adding stations along the Chunniganj to Kanpur Central stretch. That pulled genuinely premium media into the old core, which had previously been dense but hard to buy well — and it gave the city a captive, repeat-exposure environment it did not have before.",
    "Beyond the city limits, the expressway build-out has repositioned Kanpur as a node rather than a terminus. The Bundelkhand Expressway opened the southern districts; the Ganga Expressway ties the Meerut–Prayagraj axis together. For an advertiser that means Kanpur increasingly works as the anchor of a central-UP plan rather than as a standalone buy, and the arterial approaches carry an audience that is no longer only local.",
  ],

  crowdPlaces: [
    {
      place: "Naveen Market",
      note: "The city's core general-merchandise bazaar, just off The Mall. Family and mid-market shoppers on foot, densest in the evenings and through the Diwali and wedding buying weeks. It is where Kanpur actually shops, as distinct from where Kanpur is photographed shopping.",
    },
    {
      place: "The Mall Road",
      note: "The commercial and institutional spine — showrooms, banks, offices, restaurants. A weekday working audience by day and a retail one after six, with the highest concentration of vehicular exposure in the city.",
    },
    {
      place: "Parwati Bagla Road",
      note: "The established upmarket shopping street running off Mall Road. Apparel and jewellery, a bridal-led seasonal rhythm, and a household audience that skews distinctly higher-income than the old-city bazaars.",
    },
    {
      place: "Z Square Mall",
      note: "The city's largest organised mall, on The Mall Road. Youth and family footfall, peaking on weekend evenings and around film releases — a captive dwell environment rather than a passing one.",
    },
    {
      place: "Kanpur Central",
      note: "One of the busiest junctions on the Delhi–Howrah trunk route. The crowd is continuous, largely outstation, and it waits — which makes it a dwell-time audience rather than a glance one.",
    },
    {
      place: "Swaroop Nagar",
      note: "An affluent residential belt that doubles as the city's clinic and coaching district. Steady daytime movement, a healthcare and education audience, and households with the discretionary income most categories are actually looking for.",
    },
    {
      place: "Green Park Stadium",
      note: "The international cricket venue. Episodic rather than continuous — quiet for most of the year, then very large crowds on match days, with an attention level nothing else in the city matches.",
    },
    {
      place: "Rave Moti and Rave 3",
      note: "The older mall properties, drawing a mass and mid-market crowd that the newer retail does not. Evening and weekend peaks, and a catchment that reaches into the industrial and trans-Ganga neighbourhoods.",
    },
  ],

  formatGuide: [
    {
      title: "Hoarding advertising in Kanpur",
      kicker: "Large format",
      body: "Large-format hoardings do their real work on the arterial approaches — the GT Road belt, the Mall Road spine and the ring approaches — where speed is moderate and dwell is long enough to read more than a logo. Inside the old core the buildings are close and the sightlines are short, so a large hoarding often delivers less than a well-placed smaller one. We plan hoardings here against approach angle and traffic speed rather than against nominal size, and we will argue against a big site with a bad line of sight even when it is the cheaper option.",
    },
    {
      title: "Unipole advertising in Kanpur",
      kicker: "Arterial",
      body: "Unipoles suit the wider stretches — the outer GT Road sections, the approach roads and the newer arterial development where there is room for a structure to stand clear. They read well at vehicular speed and they carry a certain scale of brand credibly. The caveat in Kanpur is regulatory rather than creative: the city has a visible population of non-standard unipoles whose permissions are unclear, and we check tender and permission status before recommending any structure rather than after.",
    },
    {
      title: "Gantry and median advertising in Kanpur",
      kicker: "Overhead",
      body: "Gantries work where a road is wide enough to justify one and busy enough to pay for it, which in Kanpur means a short list of arterial crossings rather than a general option. Median and road-divider media is the more available street-level format, and it is genuinely useful for retail and hyperlocal work because it sits at eye level in slow traffic. Both are permission-sensitive and both are seasonal in effectiveness — an unlit median panel does very little in a Kanpur December fog.",
    },
    {
      title: "Bus queue shelter (BQS) and street furniture",
      kicker: "Street level",
      body: "Bus queue shelters and street-level furniture reach the pedestrian and public-transport audience that vehicular formats miss entirely, and in a city where a large share of the working population does not drive, that audience is not marginal. The strongest positions cluster around the transport and retail nodes — Kanpur Central, the Mall Road corridor, the Naveen Market approaches. Backlit units earn their premium here; unlit ones lose most of their value after dark.",
    },
    {
      title: "Pole kiosks and hyperlocal media",
      kicker: "Catchment",
      body: "Pole kiosks are the workhorse of hyperlocal Kanpur. They are cheap enough to run in a sequence, and a sequence along an approach road into a defined trade area outperforms a single large site for almost any store-level objective. This is the format we recommend most often for retail launches, clinic and coaching catchments, and anything where the trade area is a two-kilometre radius rather than a city.",
    },
    {
      title: "LED screen and DOOH advertising in Kanpur",
      kicker: "Digital",
      body: "Digital out-of-home in Kanpur is a commercial-district medium rather than a city-wide one, concentrated around the organised retail and the Mall Road commercial belt. Its advantage is daypart control — a lunch message and an evening message from the same buy — and its disadvantage is that a shared loop divides your share of the site's attention. We buy DOOH here when the daypart or the creative rotation is actually being used, and we say so when a static site would deliver more for the same money.",
    },
    {
      title: "Kanpur Metro advertising",
      kicker: "Transit",
      body: "The Orange Line gives Kanpur something it has never had: a controlled, repeat-exposure environment carrying a defined commuter population every weekday. Station and in-train formats reach the same faces several times a week, which makes the metro a frequency medium rather than a reach one — better for message-building than for a one-week announcement. UPMRC has publicly tendered advertising rights across Kanpur Metro stations and separately for in-train advertising, so the rights position here is a matter of public record.",
    },
    {
      title: "Mall, cinema and lift branding in Kanpur",
      kicker: "Retail and residential",
      body: "Z Square, Rave Moti and Rave 3 anchor the organised retail environment, and mall media reaches a shopper who is already in a spending frame of mind — a very different proposition from reaching a commuter. Lift branding and residential society media in the Civil Lines, Swaroop Nagar and Shastri Nagar belt reach affluent households at close range and with almost no competing message, which is why they punch well above their cost for categories with a high consideration cycle.",
    },
  ],

  localMedia: {
    press: [
      {
        title: "Dainik Jagran",
        language: "Hindi",
        note: "The default Hindi buy in the city, and Jagran Prakashan's head office is in Kanpur. Being in it carries a local weight that no English title transfers, and the district editions extend the same buy into Kanpur Dehat and the surrounding belt.",
      },
      {
        title: "Amar Ujala",
        language: "Hindi",
        note: "Runs separate Kanpur City and Kanpur Dehat editions, which means the urban and rural halves of the market can be bought apart from each other rather than as one blunt figure.",
      },
      {
        title: "Hindustan",
        language: "Hindi",
        note: "A full Kanpur edition, reading younger and more aspirational than the older Hindi mastheads, and stronger with first-generation professional households.",
      },
      {
        title: "I-Next",
        language: "Hindi and English",
        note: "The bilingual compact from the Jagran stable, launched out of Kanpur. It skews to students and the under-thirty reader in a way none of the broadsheets do.",
      },
      {
        title: "The Times of India",
        language: "English",
        note: "Thin relative to the Hindi titles, as English is everywhere in central UP, but it reaches business owners, professionals and institutional readers who are hard to isolate any other way.",
      },
      {
        title: "Hindustan Times",
        language: "English",
        note: "The other English option, with a similar professional and institutional profile. In Kanpur, English press is a precision buy rather than a reach one, and we plan it that way.",
      },
    ],
    radio: [
      {
        station: "Radio Mirchi",
        frequency: "98.3",
        note: "Hindi mainstream, film-led. The broadest single commercial station in the city.",
      },
      {
        station: "Mirchi Love",
        frequency: "91.9",
        note: "Hindi retro and romantic — an older and more female-skewing listener than 98.3.",
      },
      {
        station: "Big FM",
        frequency: "92.7",
        note: "Hindi mass and retro, with a broad-appeal daytime schedule.",
      },
      {
        station: "Red FM",
        frequency: "93.5",
        note: "Hindi contemporary, humour-led. Younger, and the most distinctive on-air voice in the market.",
      },
      {
        station: "Fever FM",
        frequency: "95.0",
        note: "Hindi contemporary. Note the frequency — 95.0 is Fever in Kanpur and a different network elsewhere in UP.",
      },
      {
        station: "Radio City",
        frequency: "104.8",
        note: "Hindi mass. Carries the frequency that was Radio Mantra before the network rebranded.",
      },
      {
        station: "Akashvani Kanpur",
        frequency: "FM Rainbow 102.2 · Vividh Bharati 103.7",
        note: "Public service, with real reach into the districts where the commercial stations thin out.",
      },
    ],
    radioNote:
      "Radio in Kanpur is a drive-time and Hindi-language medium. The commercial stations do their real work between roughly seven and eleven in the morning and five and nine in the evening, when the city is on the road. Every private transmitter in the city radiates from the same mast on The Mall, so coverage differences between stations are smaller than a rate card implies — the difference is the audience, not the footprint. Station branding and frequencies do change, so we confirm what is on air at the point of buying rather than working from a list.",
  },

  transit: {
    lede:
      "Kanpur's transit media changed shape completely with the metro. Before it, transit here meant the railway station and the bus; now there is a controlled corridor running through the commercial core with a defined daily audience.",
    modes: [
      {
        mode: "Kanpur Metro",
        note: "The Orange Line, including the underground stretch through the commercial heart to Kanpur Central. UPMRC has publicly tendered advertising rights across metro stations and, separately, exclusive in-train advertising — so the concession position is documented rather than claimed. Station, concourse, platform and in-train formats all exist.",
      },
      {
        mode: "Kanpur Central",
        note: "A major junction on the Delhi–Howrah trunk route with continuous outstation footfall and long waiting times. Railway station media sits with the divisional commercial organisation and is bought accordingly.",
      },
      {
        mode: "City bus and intercity road",
        note: "Bus exteriors, back panels and the depot and terminal environment reach the commuting population that neither the metro corridor nor private vehicles cover. Useful for city-wide weight at a lower cost per exposure than large format.",
      },
      {
        mode: "The expressway approaches",
        note: "The Bundelkhand and Ganga Expressway corridors have made the road approaches to Kanpur a regional audience rather than a local one. Worth planning deliberately if the campaign has a central-UP footprint rather than a city one.",
      },
    ],
  },

  costDrivers: [
    {
      factor: "Which side of the city",
      note: "A Mall Road or Parwati Bagla position and a GT Road or Nayaganj position are not the same product and do not price the same. The premium belt costs more because the household income behind it is higher, not because more people pass it — often fewer do.",
    },
    {
      factor: "Illumination",
      note: "Frontlit, backlit and non-lit are three different rates for the same footprint. In Kanpur the gap matters more than it does in a brighter city: winter light is short and the December and January fog takes visible hours off an unlit site.",
    },
    {
      factor: "Size and structure",
      note: "Square footage sets the base, but the structure type moves it — a unipole and a wall-mounted hoarding of the same area sit at different points because the structure, the mounting and the maintenance differ.",
    },
    {
      factor: "Duration and the minimum cycle",
      note: "Most outdoor here is transacted on monthly cycles, and shorter than a month usually costs more per day rather than less. Sustained presence in fewer positions is normally the better trade.",
    },
    {
      factor: "Season",
      note: "The wedding window and the Diwali run are the two periods when Kanpur's demand outruns its supply, and every rate in the city reflects that. Planning around them rather than into them is often worth more than any negotiation.",
    },
    {
      factor: "Production and mounting",
      note: "Printing, flex or vinyl, mounting and the periodic re-mounting after weather are a real line and not a rounding error. We quote them separately so you can see what is media and what is production.",
    },
  ],

  compliance: {
    authority: "Kanpur Nagar Nigam",
    body: [
      "Outdoor advertising in the city is licensed by Kanpur Nagar Nigam, which tenders hoarding and unipole positions. Permission is site-specific and time-bound, and a structure without a current, matching permission is a liability for the advertiser as much as for whoever put it up.",
      "This matters more in Kanpur than the industry generally admits. There is a visible population of non-standard structures in the city carrying advertising whose tender and permission status is not displayed, and local reporting has raised exactly that point. We check permission status before recommending a position, and we would rather lose a site from a plan than put a client's brand on a structure that cannot show its paperwork.",
      "We will not pretend to more certainty than exists. There is no consolidated Uttar Pradesh outdoor advertising policy published in a form we can point you to, and Kanpur Nagar Nigam's advertisement bye-laws are not available as a public document. What is on record is that the state government has been examining road-safety norms for roadside advertising. Where a specific rule matters to your campaign — a size cap, a setback, an LED brightness limit — we confirm it with the Nigam's advertisement department directly rather than quoting something from a website.",
    ],
  },

  season: [
    {
      window: "November to February — wedding season",
      note: "The dominant commercial spike. Jewellery, apparel, bridal, catering and consumer durables all compete for the same weeks, and rates on the premium corridors reflect it.",
    },
    {
      window: "October to November — Dussehra and Diwali",
      note: "The retail peak. Naveen Market and the Mall Road belt run at maximum footfall, and organised retail runs its heaviest calendar of the year.",
    },
    {
      window: "March — Ganga Mela",
      note: "Kanpur's own post-Holi festival, and something no other city in the state shares. A large, local, distinctly Kanpuri crowd that a national plan will always miss.",
    },
    {
      window: "April to June — the second wedding window",
      note: "Smaller than the winter run but genuinely commercial, and considerably less crowded on the media side.",
    },
  ],

  planning:
    "We plan Kanpur from the catchment outwards, and being based here means we plan it from the ground rather than from a map. Before any site list exists we establish the trade area around each priority location — who lives and works inside it, how they move through the week, how dense the category already is — and the plan follows that. In practice that usually means fewer positions than a conventional proposal would offer, held for longer, chosen against movement rather than against a footfall claim, and with permission status confirmed before anything is recommended.",

  faq: [
    {
      q: "How much does hoarding advertising cost in Kanpur?",
      a:
        "We do not publish a rate card, because we are not selling our own inventory — we negotiate against several vendors for each plan, and a published rate would only tell you what we would like to charge rather than what the market will actually take. It depends on the corridor, the size, the illumination and the duration, and any single number quoted without those is guesswork. A Mall Road or Parwati Bagla position prices differently from a GT Road one for the same footprint, backlit differently from non-lit, and the wedding and Diwali windows differently from the rest of the year. Send us the brief and the budget and you will get real numbers against real positions.",
    },
    {
      q: "Which areas of Kanpur work best for outdoor advertising?",
      a: "The Mall Road, Parwati Bagla Road, Civil Lines and Swaroop Nagar belt reaches discretionary spending households. Naveen Market, Nayaganj, Birhana Road and the GT Road corridor reach volume, at a very different income level and with different buying triggers. The metro corridor reaches a defined commuter population repeatedly. Which of those is right depends entirely on who you are trying to reach, and that is the question worth spending time on — we would rather establish the audience first and recommend the corridor second.",
    },
    {
      q: "Do you own hoardings in Kanpur?",
      a: "No, and that is deliberate. We plan, negotiate and run campaigns; we do not hold media. It means we have no inventory to push and no reason to recommend a site because it is sitting empty on our books. The trade-off is that we cannot promise you a specific structure before we have negotiated for it — which is honest, and which is why we plan from the catchment rather than from availability.",
    },
    {
      q: "Can a campaign be limited to one part of Kanpur?",
      a: "Yes, and it is often the stronger option. Hyperlocal planning suits this city particularly well because the trade areas are compact and the income geography changes sharply within a few kilometres. For a store, a clinic or a coaching centre we work from the catchment around the location rather than from city-level reach, and a sequence of smaller positions along the approach roads usually outperforms one large site.",
    },
    {
      q: "How long should a Kanpur campaign run?",
      a: "Longer than a fortnight, in almost every case. Most outdoor here is transacted on monthly cycles, and a shorter run typically costs more per day rather than less. Familiarity compounds in a market this size, so sustained presence in a smaller set of positions generally beats a wide, short sweep — and it leaves room to change the creative once, which matters more than most advertisers expect.",
    },
    {
      q: "Is a permission or licence needed for a hoarding in Kanpur?",
      a: "Yes. Outdoor advertising is licensed by Kanpur Nagar Nigam and permission is site-specific and time-bound. The practical risk is not the fee, it is putting a brand on a structure whose permission cannot be produced — that exposes the advertiser as well as the media owner. We check permission status before recommending a position, and we will drop a site from a plan rather than carry that risk for you.",
    },
    {
      q: "How do I know my advertisement actually went up?",
      a: "You get dated, geotagged photographs of every position at mounting, and again during the cycle. That is the standard we hold ourselves to and it is the one thing an advertiser should insist on from anyone, us included. Monitoring is the part of outdoor most often skipped and the part most often wrong, and it is the reason a campaign quietly underdelivers.",
    },
    {
      q: "How is outdoor advertising measured in Kanpur?",
      a: "Honestly, with more caveats than the industry usually offers. Traffic and audience estimates for the city exist and we will show you the current licensed research at planning, but we will not print those figures on a website and we will not present a modelled impression count as though it were a measurement. What we can show you directly is proof of execution, the catchment logic behind each position, and — where the campaign has a store or a footfall objective — the movement in the outcome you actually care about.",
    },
    {
      q: "Is Kanpur Metro advertising worth buying?",
      a: "For the right objective, yes. The metro reaches a defined commuter population several times a week, which makes it a frequency medium rather than a reach one — good for building a message over weeks, weaker for a single announcement. UPMRC has publicly tendered station and in-train advertising rights, so the format exists on a documented footing. Whether it belongs in your plan depends on whether your audience is on that corridor, and we will tell you when it is not.",
    },
    {
      q: "Do you handle Hindi creative and the local press and radio?",
      a: "Yes. We plan and buy across Hindi and English press, radio, outdoor, transit and retail media, and we will flag where language choice materially changes performance — in Kanpur it usually does. Creative adaptation is coordinated with your agency where you have one and handled in-house where you do not.",
    },
    {
      q: "Can you plan Kanpur alongside other Uttar Pradesh markets?",
      a: "Yes, and it is usually the better way to buy. We plan outdoor across more than forty Indian cities, and Kanpur sits naturally with Lucknow, Prayagraj, Jhansi and Agra in a central-UP plan. Buying the cluster in one negotiation rather than city by city changes what is achievable on both price and position.",
    },
  ],

  nearby: ["Lucknow", "Varanasi", "Agra", "Prayagraj"],
};
