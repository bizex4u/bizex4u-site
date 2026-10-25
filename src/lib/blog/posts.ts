export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** Original publish date of the guide. */
  published: string;
  h1: string;
  lede: string;
  parent: { href: string; label: string };
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  related: { href: string; label: string }[];
};

/* Restored from the pre-cutover guides. Rupee rates, campaign values
   and commission figures are omitted: this site does not publish them. */

export const posts: BlogPost[] = [
  {
    slug: "atl-vs-btl-advertising-india",
    published: "2026-06-18",
    title: "ATL vs BTL Advertising in India",
    description:
      "ATL vs BTL in India: mass media builds reach; sampling and trade drive trial. When to use each, and how a launch uses both.",
    h1: "ATL vs BTL advertising in India.",
    lede:
      "ATL is mass media — television, radio, cinema, print and outdoor — bought for reach. BTL is the targeted work underneath it: sampling, retail, trade and events, bought for trial. Most Indian launches need both, in that order.",
    parent: { href: "/what-we-do", label: "How we work" },
    sections: [
      {
        heading: "What the line actually means",
        paragraphs: [
          "The terms are usually traced to an old agency budget sheet that separated mass media from promotional work. The accounting habit is gone. The planning distinction is not.",
          "ATL speaks to a broad audience and builds awareness and recall. BTL speaks to a defined group and asks for a specific action: a trial, a visit, a retailer putting the pack on the shelf. Digital and DOOH can behave as either, depending on whether the buy is broad or narrowly placed.",
        ],
      },
      {
        heading: "ATL formats in India",
        paragraphs: [
          "Television still carries mass-market goods, especially where digital reach is thinner. Radio is a local ATL tool: drive-time for commuters, retail offers and a city-level message. Cinema is a captive screen, useful for a launch that needs to be understood, not just recognised.",
          "Print still matters in many tier-2 and tier-3 markets, particularly the Hindi and regional dailies people actually read there. Outdoor — hoardings, unipoles, gantries and street furniture — is the ATL format that holds a city once the message is short enough to be read in passing. DOOH adds dayparting on top of that presence.",
        ],
      },
      {
        heading: "BTL formats in India",
        paragraphs: [
          "In-store and trade work sits where the purchase happens: displays, shelf, and visibility inside general trade, which still carries a large share of FMCG volume. Sampling in malls, markets, housing clusters and transit hubs is the BTL format closest to a first purchase.",
          "Area-specific leaflets and door drops still work for hyperlocal retail and services. Events and sponsorships build association rather than reach. Performance media, email, WhatsApp and tightly chosen creators are BTL logic applied to digital: a defined audience, a defined response.",
        ],
      },
      {
        heading: "How the two differ",
        paragraphs: [
          "ATL is for awareness, a broad audience, and a result you read as reach and recall over months. BTL is for trial, a named audience, and a result you can count in days or weeks. ATL usually costs more in total and less per person reached. BTL is often the reverse.",
        ],
        bullets: [
          "Use ATL to enter a market, reposition a brand, or hold share of voice in a season such as Diwali, weddings or the IPL.",
          "Use ATL for a low-involvement FMCG launch, where people meet the product at the shelf soon after they meet the name.",
          "Use BTL when the product is already stocked and the job is the first purchase, a catchment, or the trade.",
          "Use BTL for loyalty. People who already buy you respond to a direct offer better than to another burst of mass media.",
        ],
      },
      {
        heading: "Using both",
        paragraphs: [
          "Sequential: ATL first (outdoor, cinema or radio) so the name exists, then BTL at the shelf and in the trade, then a lighter ATL presence so the name does not vanish during the conversion window. Awareness that finishes weeks before the sampling starts is mostly wasted.",
          "Simultaneous: ATL on the way to the store, BTL inside it. This suits a brand people already know. A rough split to start from — not a rule — is heavier ATL for a new launch or a seasonal burst, and heavier BTL once the job is loyalty in a market you already have.",
          "DOOH sits in the middle. A city network behaves like ATL. Screens chosen around stores, dayparts and frequency behave like BTL. It is the format to look at when you want precision without leaving outdoor.",
        ],
      },
      {
        heading: "Mistakes we keep seeing",
        paragraphs: [
          "Treating the choice as either/or. ATL without a conversion point builds a name nobody can buy. BTL without awareness converts only the people you already reach.",
          "Judging a cinema campaign or a hoarding by direct sales. ATL is measured on reach, frequency and recall. Expecting a click from it sets the wrong test, and then the format gets dropped for failing a job it was not bought to do.",
          "Funding consumer media and ignoring the trade. In Indian distribution, a retailer who has not been briefed will not push a pack just because the street is carrying the film.",
        ],
      },
    ],
    related: [
      { href: "/blog/dooh-advertising-india-guide", label: "DOOH advertising in India" },
      { href: "/what-we-do/outdoor-transit", label: "Outdoor and transit" },
      { href: "/what-we-do/broadcast-print-cinema", label: "Broadcast, print and cinema" },
      { href: "/what-we-do/dooh", label: "How we buy DOOH" },
    ],
  },
  {
    slug: "dooh-advertising-india-guide",
    published: "2026-05-20",
    title: "DOOH Advertising in India Guide",
    description:
      "DOOH advertising in India: roadside LED, malls, metro, airports and dayparting. How to plan a screen buy without a rate card.",
    h1: "DOOH advertising in India.",
    lede:
      "DOOH is outdoor on a screen: several advertisers share a loop, the creative can change by hour, and the file is swapped remotely. In India it now sits on roads, in malls, metros, airports, fuel forecourts, office lobbies and cinema foyers.",
    parent: { href: "/what-we-do/dooh", label: "DOOH" },
    sections: [
      {
        heading: "What you are actually buying",
        paragraphs: [
          "A printed hoarding is sole occupancy for a period. A DOOH screen is a slot inside a rotation. A roadside loop typically runs several advertisers across a minute or two, with a spot of about ten seconds, repeating through the hour. Longer spots exist. They are a different buy, not a free extra.",
          "National networks, airport concessionaires, mall networks and metro contractors all sell some version of this. The environment matters more than the logo on the proposal, because a mall atrium and a flyover face do not reach the same person or hold them for the same length of time.",
        ],
      },
      {
        heading: "Where the screens are",
        paragraphs: [
          "Roadside LED is the visible format: highway and arterial faces in Delhi, Mumbai, Bengaluru, Hyderabad, Chennai and the other large cities. Mall screens — atrium, corridor, food court, lift lobby, store entrance — reach people who are already out to shop, heaviest on weekend retail hours.",
          "Metro screens in metro cities such as Delhi, Mumbai, Bengaluru and Hyderabad reach the same commuter every weekday, which is a frequency buy. Airport screens reach a narrower, higher-income audience with a long dwell, in departure halls, on columns, at baggage reclaim and airside. Fuel-forecourt screens catch a few minutes of waiting. Office-lobby and lift screens are a B2B environment: a still audience, no street noise.",
        ],
      },
      {
        heading: "What targeting actually means",
        paragraphs: [
          "Dayparting is the useful lever. Morning drive, mid-morning, lunch, evening drive and night are different messages and different categories. Weekdays suit a corporate audience. Weekends suit retail and leisure, especially in malls.",
          "Geographic selection is the other lever that is real today: specific screens, specific stations, a short radius around stores. Some networks add audience selection from anonymised mobile footfall. Programmatic, impression-based buying exists but, in our experience, the inventory behind it is still a slice of the market. Most plans that work are still a direct buy, with programmatic added where the audience data is actually on the screen you want.",
        ],
      },
      {
        heading: "Creative that survives the screen",
        paragraphs: [
          "Most roadside and mall DOOH runs without sound. Plan for that. Lead with the brand in the first moments of a ten-second spot. One line, high contrast, no fast cutting. Roadside creative has to work at speed. A mall or metro screen can carry slightly more, because people are standing still. A QR code belongs on those stationary screens, sized for the distance, not on a face people pass at 60.",
          "Files are typically MP4 or a still image, at HD and at 4K for premium faces. Roadside LED often has its own pixel map. Ask for it before the film is finished.",
        ],
      },
      {
        heading: "How to plan the buy",
        paragraphs: [
          "Pick the environment before the city list. Malls, metros, airports, roadsides and offices are different audiences. Then decide whether you need reach or repetition. A metro station repeats against the same people. A mall network spreads wider and repeats less.",
          "Match the creative to the dwell. A roadside face gets one idea. An airport screen can explain a little more because the person is not leaving. A static message on a shared loop is paying for a capability it does not use — if the frame never needs to change, a printed face may be the better instrument.",
          "We can structure part of a deal in goods or services, not only cash, on the same terms as any other barter: value agreed in writing, channels named, media planned to the brief rather than to leftover slots.",
        ],
      },
    ],
    related: [
      { href: "/what-we-do/dooh", label: "How we buy DOOH" },
      { href: "/glossary/dooh", label: "What DOOH means" },
      { href: "/blog/atl-vs-btl-advertising-india", label: "ATL vs BTL" },
      { href: "/cities/delhi-ncr", label: "Outdoor in Delhi NCR" },
      { href: "/cities/bangalore", label: "Outdoor in Bengaluru" },
      { href: "/barter-advertising", label: "Barter advertising" },
    ],
  },
  {
    slug: "airport-advertising-cost-india-2026",
    published: "2026-06-10",
    title: "Airport Advertising Cost in India",
    description:
      "Airport advertising cost in India depends on the airport, the zone, the format and dwell. What to compare before you buy — no rate card.",
    h1: "What airport advertising cost depends on.",
    lede:
      "Airport media in India is not one price. It moves with the airport, the zone inside the terminal, the format, and how long a passenger is actually standing in front of it. We do not publish rates. These are the comparisons that decide a buy.",
    parent: { href: "/what-we-do/airport-advertising", label: "Airport advertising" },
    sections: [
      {
        heading: "How the buy is structured",
        paragraphs: [
          "Three things set the conversation: the format (lightbox, large static, DOOH, aerobridge, floor graphic), the place (which terminal, landside or airside, which corridor), and the tenure. Airport media is usually discussed in blocks of a month, with a longer hold negotiated differently from a short one.",
          "Terminal inventory usually sits with concessionaires who hold long agreements with AAI or the private operator. The approach road is a different market: ordinary outdoor owners, municipal licensing, different economics. A plan that prices only the terminal is half a plan.",
        ],
      },
      {
        heading: "Delhi, Mumbai, Bengaluru, and the smaller airports",
        paragraphs: [
          "Delhi’s Indira Gandhi International is India’s busiest airport by passengers (Airports Authority of India, FY25). Inside T3, international departures are typically the narrowest, highest-spend audience and the longest dwell. Domestic departures are a larger version of a similar traveller. Aerobridge vinyl is seen by everyone boarding that flight and almost nobody else — a route buy, not a terminal buy. Baggage claim and the security hold are where people wait. Check-in is where everyone passes and few people linger.",
          "Mumbai’s T2 is widely seen as carrying a brand association of its own because of the building, which is why it is treated as a premium context rather than as generic terminal space. The same zones apply: departures, gate lounges, aerobridges, arrivals.",
          "Bengaluru’s terminal and the Bellary Road approach are two buys that reach an overlapping business traveller. The approach also reaches the city’s ordinary commuters all day, which the terminal does not. Hyderabad, Chennai and the other metro airports follow the same split.",
          "Smaller airports — domestic piers, and cities such as Coimbatore or Kochi — are not a cheap version of Delhi. They are a different audience. Kochi in particular has real returning-NRI weight, and it should be bought for that reason or not at all.",
        ],
      },
      {
        heading: "What to ask before comparing options",
        paragraphs: [
          "Ask which concession holds the terminal, and who holds the approach, and do not let those quotes be blended into one number. Ask what share of terminal traffic actually passes the panel, and how long they are there. A baggage-claim face and a check-in face can share a terminal and share nothing else.",
          "Ask domestic versus international, and which flight bank a DOOH loop is scheduled against. Morning departures and late arrivals are different people. Ask the tenure you are being sold and what a shorter or longer hold does to the plan. We price those options against each other in writing. We do not put a rate card on this page.",
        ],
      },
    ],
    related: [
      { href: "/what-we-do/airport-advertising", label: "Airport advertising" },
      { href: "/blog/airport-advertising-roi", label: "Airport advertising ROI" },
      { href: "/cities/delhi-ncr", label: "Delhi NCR" },
      { href: "/cities/mumbai", label: "Mumbai" },
      { href: "/cities/bangalore", label: "Bengaluru" },
    ],
  },
  {
    slug: "airport-advertising-roi",
    published: "2026-05-10",
    title: "Airport Advertising ROI in India",
    description:
      "How to measure airport advertising ROI in India: audience quality, dwell and brand lift, and which categories the premium suits.",
    h1: "How to judge airport advertising ROI.",
    lede:
      "A passenger can see an aerobridge and buy weeks later with no path connecting the two. That gap makes airport media easy to drop, and easy to keep funding on the feeling that a premium place must be working. The return is real for some categories and absent for others.",
    parent: { href: "/what-we-do/airport-advertising", label: "Airport advertising" },
    sections: [
      {
        heading: "The measures that are actually available",
        paragraphs: [
          "Daily effective circulation is the outdoor audience estimate: people with an opportunity to see the face that day. At an airport it should be built from published passenger numbers, the share of that flow which passes the panel, and a weight for dwell. An aerobridge is everyone boarding that flight. A check-in hall panel is a fraction of the terminal. Ask for the method. A number that is just a multiple of total passengers is not a method.",
          "Cost per thousand follows from that circulation and from what you are paying. We will calculate it on a plan. We will not publish a benchmark, because a secondary-city static face and a Delhi or Mumbai international screen are not the same product. On this metric alone, in our plans, airport media usually looks expensive next to a metro panel or a roadside hoarding. The case, if there is one, is audience quality and dwell, which a raw cost-per-thousand ignores.",
          "Audience quality is the profile of the pier: business versus leisure, domestic versus international, and the route. A Delhi–Mumbai aerobridge is not a leisure route out of a smaller city. Dwell is the other half. Passengers spend far longer in a terminal than a driver spends in front of a hoarding, and a DOOH screen in that window can be seen more than once per visit. Count those repeat exposures before you decide the terminal is inefficient.",
          "Brand stature is the measure premium brands actually buy: being in that building, next to that set of names. It shows up in tracking — awareness, premium association, intent — in a market where you ran airport media against one where you did not. It does not show up as a next-day sale.",
        ],
      },
      {
        heading: "Who it suits",
        paragraphs: [
          "The strongest fit is a brand whose buyer is already in the building: travel cards, luxury automotive, watches and jewellery, premium grooming and travel packs, business hotels, wealth and private banking. Consumer electronics can work at the premium end and usually should not at the mass end. Insurance and banking reach frequent business travellers and miss retail banking. Mid-market FMCG is often paying an audience premium it does not need.",
          "Mass-market goods, price-led retail and hyperlocal brands rarely get a return here. The audience is too narrow, too affluent, or simply in the wrong city for a brand that sells within a few kilometres of a shop. Those briefs belong on the street, the metro or in retail.",
        ],
      },
      {
        heading: "How to structure the campaign",
        paragraphs: [
          "Pick the terminal for the audience, not for the famous building. At Delhi, international departures are the narrowest premium audience, and domestic departures are volume with quality. A business-travel brand and a consumer brand should not be argued into the same pier.",
          "Put weight where people wait: baggage claim, the security hold, gate lounges. Landside check-in is unique reach with a short dwell. Use it when you need everyone, not when you need to be read.",
          "Returning business travellers are the frequency. A single month is a short window against people who fly that route a few times a season. If the job is stature rather than a one-off announcement, plan a longer hold and judge it on brand measures over several months, not on a week of sales.",
          "A plan across more than one airport is how a frequent inter-city traveller sees the same line twice. It is also how you get a national reading in tracking. Buy it because the audience connects those cities, not because a bundle looks tidier.",
        ],
      },
      {
        heading: "A realistic test",
        paragraphs: [
          "Premium FMCG and luxury brands should look for stature and association, usually through a tracking study. Financial brands should look for brand search and fame among the travelling audience, and should not expect clean lead attribution. B2B brands should compare the quality of that reach with what they already buy in professional media. Electronics brands should look at recall against a control city.",
          "In our experience, brands that buy airport media as direct response are usually disappointed. Brands that buy it to be known among a high-income, travelling audience can give the spend a fair test — over a long enough window, against the right category, with the approach road priced beside the terminal rather than instead of a thought.",
        ],
      },
    ],
    related: [
      { href: "/blog/airport-advertising-cost-india-2026", label: "What the cost depends on" },
      { href: "/what-we-do/airport-advertising", label: "Airport advertising" },
      { href: "/cities/delhi-ncr", label: "Delhi NCR" },
      { href: "/cities/mumbai", label: "Mumbai" },
    ],
  },
];

export function postBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
