import type { City } from "./types";

/* Ahmedabad. No BIG FM here — the brand is absent from the MIB list for
   this city, though it IS on air in Surat. Mirchi Love is 104.0 here and
   91.9 in Surat; Red FM is 93.5 here and 95.0 in Surat. Two Gujarat
   cities, almost no overlapping frequencies.

   DNA closed its print edition in 2019 and must not appear in a press
   list. Ahmedabad Mirror's status could not be confirmed, so it is not
   listed either. */

export const ahmedabad: City = {
  slug: "ahmedabad",
  name: "Ahmedabad",
  alsoKnownAs: ["Amdavad"],
  state: "Gujarat",
  region: "West",

  metaTitle:
    "Outdoor Advertising in Ahmedabad — Hoardings",
  metaDescription:
    "Hoarding, unipole, metro, BRTS and retail advertising in Ahmedabad, planned from which side of the Sabarmati you need rather than a site list.",

  h1Lead: "Outdoor advertising in",
  h1Accent: "Ahmedabad",
  heroLede:
    "The Sabarmati splits Ahmedabad into two economies. West of the river is offices, malls and affluent housing; east is industry, trade and dense working-class neighbourhoods. Almost every campaign here needs both halves and almost every plan buys only one.",

  market: [
    "Ahmedabad is one of the few large Indian cities where a river genuinely divides the market rather than just the map. West of the Sabarmati — SG Highway, Prahladnagar, Bodakdev, Thaltej, Satellite, Vastrapur — holds the offices, the organised retail, the affluent housing and, just beyond the city limits, GIFT City. East and in the old city — Maninagar, Bapunagar, Naroda, Odhav, Kalupur, Relief Road — holds the industry, the trading economy and dense working-class residential. Two different price points, two different creative registers, one municipal corporation.",
    "SG Highway is the premium spine and where evening drive-time does its real work: corporate offices, malls, restaurants and car showrooms strung along a single corridor. CG Road in Navrangpura is the legacy brand high street. Ashram Road, Iscon–Bopal and Sindhu Bhavan Road carry the rest. Around all of it runs the Sardar Patel Ring Road, a seventy-six kilometre orbital built by AUDA, crossing the Sabarmati twice and intersecting the Ahmedabad–Vadodara Expressway.",
    "The metro redrew value here more than most people outside the city realise. Roughly sixty kilometres are operational across three sections — the Blue Line from Vastral Gam to Thaltej Gam, the Red Line from APMC up to Gandhinagar Sector 1, and the GIFT City spur — which pulled corridor value northwards towards Motera and Gandhinagar and made GIFT City reachable as a defined audience rather than an aspiration. The Ring Road's six-laning is opening the periphery on the other side.",
    "Ahmedabad's calendar is unlike any other Indian market's. Navratri is not a festival slot here, it is nine nights that reorganise the entire city's commercial year — apparel, jewellery, automotive and FMCG all peak into it, with Law Garden and the garba grounds as the physical focus. Add Uttarayan in mid-January, the Kankaria Carnival in late December, the Flower Show, and the IPL at Motera, and the result is a market where timing decisions routinely matter more than site decisions.",
  ],

  crowdPlaces: [
    {
      place: "SG Highway",
      note: "The premium corridor — corporate offices, malls, restaurants and showrooms along one artery. Evening drive-time is the money slot, and the audience is affluent and almost entirely car-borne.",
    },
    {
      place: "Law Garden Night Market",
      note: "The hawker market in Navrangpura for chaniya-choli, bandhani and handicrafts. Volume is ordinary most of the year and then explodes in the four to six weeks before Navratri — one of the most concentrated seasonal crowds in India.",
    },
    {
      place: "Manek Chowk",
      note: "Bullion and jewellery trade by day, a street-food bazaar by night. Peaks between ten in the evening and one in the morning, heaviest Friday to Sunday — a genuinely nocturnal audience that daytime formats never reach.",
    },
    {
      place: "CG Road, Navrangpura",
      note: "The legacy brand high street, with offices layered above the retail. An evening and weekend shopping crowd with a settled, mid-to-upper-income profile.",
    },
    {
      place: "Kankaria Lakefront",
      note: "Ticketed mass-market family leisure in Maninagar, with strong Sunday peaks and the Kankaria Carnival in late December. Reaches the east-city family audience that the western corridor misses entirely.",
    },
    {
      place: "Kalupur and Geetamandir",
      note: "Ahmedabad Junction and the central bus terminus beside it. Continuous churn, migrant and value-segment, with real waiting time — a dwell audience rather than a passing one.",
    },
    {
      place: "Narendra Modi Stadium, Motera",
      note: "The largest cricket stadium in the world by capacity, and home of the Gujarat Titans. Episodic, but the match-day and final-day crowds are on a scale nothing else in the country produces.",
    },
    {
      place: "Ahmedabad One and Palladium",
      note: "The organised retail anchors for the west-city affluent catchment, in Vastrapur and Thaltej. Weekend and festival-season peaks, and a shopper already in a spending frame of mind.",
    },
  ],

  formatGuide: [
    {
      title: "Hoarding advertising in Ahmedabad",
      kicker: "Large format",
      body: "Large format works along SG Highway, Ashram Road, the Ring Road and the arterial approaches, where the roads are wide and the traffic is steady enough for a structure to be read rather than glimpsed. In the walled city and the eastern trading belts the streets are tight and the audience is on foot, so smaller and closer formats do more. One live constraint to know: following the Ghatkopar collapse in Mumbai, the Gujarat High Court ordered AMC to inspect roughly two thousand hoardings and banners city-wide and remove unsafe ones. Structural stability certification is now the practical gate here, not a formality.",
    },
    {
      title: "Unipole advertising in Ahmedabad",
      kicker: "Arterial",
      body: "Unipoles suit the SG Highway corridor, the Sardar Patel Ring Road and the Gandhinagar and GIFT City approaches, where there is clear ground and a fast, higher-income vehicular audience. The Ring Road in particular has become more useful as the orbital has been widened — it reaches regional and outbound traffic that a city-centre position never sees, which matters for anything with a Gujarat-wide footprint.",
    },
    {
      title: "Bus queue shelter and BRTS media",
      kicker: "Street level",
      body: "Ahmedabad has an unusually well-developed bus system for an Indian city of its size, and it is one of the more useful street-level media environments in the west. AMTS covers the conventional network and Janmarg runs the BRTS with dedicated corridors and enclosed stations — the BRTS station panels in particular reach a captive waiting audience in a controlled environment, which is a different and often better proposition than a shelter on an open pavement.",
    },
    {
      title: "Pole kiosks and hyperlocal media",
      kicker: "Catchment",
      body: "Ahmedabad's neighbourhoods behave as distinct trade areas — Satellite, Bodakdev, Maninagar, Naroda and Bapunagar each with their own catchment and their own income profile. A run of pole kiosks along the approach roads covers one of those properly at a fraction of arterial cost, and for a store, showroom or clinic it normally outperforms a single large site on SG Highway at the same spend.",
    },
    {
      title: "LED screen and DOOH advertising in Ahmedabad",
      kicker: "Digital",
      body: "Digital concentrates on the western corridor and around the organised retail, where the audience is affluent and phone-native. Daypart control is the real advantage — an office-hours message and an evening one from a single buy, which suits SG Highway's rhythm particularly well. We will be straight about one thing: the Ahmedabad Outdoor Advertisement Policy 2023 exists and is notified, but we have not been able to read its clause text, so we do not quote LED-specific limits from it and we confirm them with AMC before recommending a digital position.",
    },
    {
      title: "Ahmedabad Metro advertising",
      kicker: "Transit",
      body: "Roughly sixty kilometres and around thirty-nine stations operational across the Blue Line, the Red Line up to Gandhinagar and the GIFT City spur. The rights position is a matter of public record: exclusive advertising rights for Ahmedabad–Gandhinagar Metro train branding — full exterior coach wraps, interior panels and digital screens — were awarded in early 2026, and GMRC has separately issued expressions of interest for station co-branding on both corridors. It reaches the same commuters repeatedly, so it builds a message rather than announcing one.",
    },
    {
      title: "Navratri and event media",
      kicker: "Seasonal",
      body: "This is the single most Gujarat-specific line in any media plan. Navratri concentrates nine nights of mass public participation, and the garba grounds and Law Garden approach become the most valuable ground in the city. Around it sits Uttarayan in mid-January, the Kankaria Carnival, the Flower Show and the IPL at Motera. In this market, deciding the window is often worth more than negotiating the rate, and we say so before anyone opens a site list.",
    },
    {
      title: "Mall, cinema and society media",
      kicker: "Retail and residential",
      body: "Ahmedabad One and Palladium anchor an organised retail environment reaching the west-city affluent catchment in a spending frame of mind. Residential society and lift media through Satellite, Bodakdev, Thaltej and Prahladnagar reaches high-income households at close range with almost no competing message — and for categories with a long consideration cycle it punches well above its cost.",
    },
  ],

  localMedia: {
    press: [
      {
        title: "Gujarat Samachar",
        language: "Gujarati",
        note: "Founded in 1932 and headquartered here, with editions across Gujarat and beyond. The mass-market Gujarati household daily, with deep trading and business-family readership — the default first line of any Gujarati press plan.",
      },
      {
        title: "Divya Bhaskar",
        language: "Gujarati",
        note: "Launched in Ahmedabad in 2003 and headquartered here, with editions across the state. Younger and more urban than the older mastheads, and built around heavy city supplements.",
      },
      {
        title: "Sandesh",
        language: "Gujarati",
        note: "Founded in 1923 and headquartered in Vastrapur, publishing across Gujarat. An older and more conservative Gujarati readership than the other two.",
      },
      {
        title: "The Times of India",
        language: "English",
        note: "Circulates in Ahmedabad reaching the corporate and professional segment. English press in Gujarat is a precision buy rather than a reach one — the Gujarati mastheads carry the market.",
      },
      {
        title: "The Indian Express",
        language: "English",
        note: "The other English option, with a policy and institutional readership. Same caveat: thin relative to Gujarati, but reaching people who are hard to isolate any other way.",
      },
    ],
    radio: [
      { station: "Radio Mirchi", frequency: "98.3", note: "Hindi and Gujarati mainstream — the broadest single commercial station in the city." },
      { station: "Radio City", frequency: "91.1", note: "Gujarati, with a broad daytime schedule." },
      { station: "Red FM", frequency: "93.5", note: "Hindi and Gujarati, contemporary and irreverent, skewing younger. Note the frequency — Red FM is 93.5 here and 95.0 in Surat." },
      { station: "MY FM", frequency: "94.3", note: "Hindi and Gujarati mass, from the Dainik Bhaskar stable — which makes a combined print and radio buy straightforward." },
      { station: "Fever FM", frequency: "95.0", note: "Hindi and film-led." },
      { station: "Mirchi Love", frequency: "104.0", note: "Retro and romantic, an older listener than 98.3. In Surat this brand sits on 91.9 — do not carry the number across." },
      {
        station: "Akashvani Ahmedabad",
        frequency: "Vividh Bharati 96.7 · Gyan Vani 105.4",
        note: "Public service, with reach into the districts, and on Gyan Vani an educational audience the commercial stations do not touch.",
      },
    ],
    radioNote:
      "One thing to know before anyone quotes you a Gujarat radio plan: there is no Big FM in Ahmedabad, although the brand is on air in Surat. Frequencies here overlap with Surat's barely at all — Red FM and Mirchi Love both sit on different numbers in the two cities. Any list presented as a Gujarat station table is a list that will be wrong for one of them. Radio here is a drive-time medium mixing Hindi and Gujarati, working hardest on the SG Highway and Ring Road commutes. We confirm what is on air at the point of buying.",
  },

  transit: {
    lede:
      "Ahmedabad's transit media is stronger than its size suggests, because the city built a serious BRTS before it built a metro and now has both.",
    modes: [
      {
        mode: "Ahmedabad–Gandhinagar Metro",
        note: "Roughly sixty kilometres and around thirty-nine stations across the Blue Line, the Red Line to Gandhinagar and the GIFT City spur. Exclusive train-branding rights — exterior wraps, interior panels and digital screens — were awarded to a named agency in early 2026, and GMRC has separately sought expressions of interest for station co-branding on both corridors.",
      },
      {
        mode: "BRTS Janmarg and AMTS",
        note: "Janmarg's dedicated corridors and enclosed stations give a captive waiting audience in a controlled environment; AMTS covers the conventional city network. Together they reach the eastern and central volume that the SG Highway corridor does not.",
      },
      {
        mode: "Kalupur — Ahmedabad Junction",
        note: "The main railway station with the Geetamandir central bus terminus beside it. Continuous outstation and migrant volume with genuine dwell time.",
      },
      {
        mode: "Sardar Vallabhbhai Patel International Airport",
        note: "Operated under the Adani airports concession. Terminal media plus the approach corridor reach business and premium travel as one planned sequence.",
      },
    ],
  },

  costDrivers: [
    {
      factor: "Which side of the Sabarmati",
      note: "The defining variable here. A SG Highway or Prahladnagar position and a Naroda or Bapunagar one are different products at very different prices, because the household income behind them is different — not because more people pass one than the other.",
    },
    {
      factor: "Navratri",
      note: "Nine nights that compress a large share of the annual demand for almost every format. Rates through the Navratri run and the weeks before it reflect that, and planning around the window rather than into it is frequently worth more than any negotiation.",
    },
    {
      factor: "Structural certification",
      note: "Following the Gujarat High Court's city-wide hoarding inspection order, stability certification is the practical gate on large format here. It is a real cost on a compliant site and its absence is a real risk on a cheap one.",
    },
    {
      factor: "Illumination",
      note: "Frontlit, backlit and non-lit price separately for the same footprint. Ahmedabad's commercial and social life runs late — Manek Chowk peaks near midnight — so unlit positions lose a larger share of their working day here than in a city that closes early.",
    },
    {
      factor: "Duration and the minimum cycle",
      note: "Monthly cycles are the norm and shorter runs usually cost more per day rather than less. The exception is event-led buying around Navratri or a Motera fixture, where short and heavy is genuinely the right trade.",
    },
    {
      factor: "Production and mounting",
      note: "Printing, material, mounting and re-mounting after weather, quoted separately from media so it is clear which is which.",
    },
  ],

  compliance: {
    authority: "Ahmedabad Municipal Corporation (AMC)",
    body: [
      "Advertising in the city is licensed by the Ahmedabad Municipal Corporation, with the Ahmedabad Outdoor Advertisement Policy 2023 — notified in February 2024 — as the governing instrument, alongside the signage provisions in the General Development Control Regulations. Permission is site-specific and time-bound.",
      "The live enforcement fact is the one worth planning around. In July 2024, following the Ghatkopar hoarding collapse in Mumbai, the Gujarat High Court ordered AMC to inspect roughly two thousand hoardings, banners and billboards across the city within three weeks and to remove unsafe ones, with a stability report from the estate officer. The petition alleged widespread display without AMC permission. Structural stability certification is therefore the practical gate on any large-format position here, and we confirm it before recommending a site rather than after.",
      "We will not overstate what we know. The 2023 policy exists and we can point you to its notification, but the published document is not machine-readable and we have not read its clause text ourselves — so we do not quote size limits, height caps or LED-specific rules from it. Where a specific provision affects your campaign, we obtain it from AMC directly rather than repeating an unsourced summary.",
    ],
  },

  season: [
    {
      window: "September to October — Navratri",
      note: "Nine nights that reorganise the commercial year. Apparel, jewellery, automotive and FMCG all peak into it, with Law Garden and the garba grounds as the physical focus. Nothing else in Gujarat comes close.",
    },
    {
      window: "October to November — Diwali",
      note: "The retail peak running straight on from Navratri, with organised retail and durables at their heaviest and a Gujarati new year on top of it.",
    },
    {
      window: "Mid-January — Uttarayan",
      note: "The kite festival, and a genuinely city-wide outdoor event — rooftops, terraces and open ground for two days. A distinctly Gujarati moment that a national calendar will not contain.",
    },
    {
      window: "December to January — Kankaria Carnival and the Flower Show",
      note: "Sustained high-footfall leisure events in comfortable weather, reaching a broad family audience across both halves of the city.",
    },
  ],

  planning:
    "We plan Ahmedabad across the river before we plan it along a corridor. The first decision is the split between the western affluent belt and the eastern trading and industrial one, because they need different sites, different price assumptions and often different creative. The second is timing, which in Gujarat is not a detail — Navratri concentrates so much of the year's attention that the window frequently matters more than the position. The third is structural certification, which since the High Court's inspection order is the practical gate on anything large-format here.",

  faq: [
    {
      q: "How much does hoarding advertising cost in Ahmedabad?",
      a:
        "We do not publish a rate card. It depends on which side of the river, the corridor, the size, the illumination and the duration — and heavily on the season, because Navratri compresses a large share of annual demand into a few weeks. We are not selling our own inventory, so a published rate would tell you what we would like to charge rather than what the market will take; we negotiate against several vendors for each plan. Send the brief and the budget and you will get real numbers against real positions.",
    },
    {
      q: "Which areas of Ahmedabad are best for outdoor advertising?",
      a: "SG Highway, Prahladnagar, Bodakdev, Thaltej, Satellite and Vastrapur reach the affluent western belt and the corporate audience. Maninagar, Naroda, Bapunagar, Odhav, Kalupur and Relief Road reach volume at a very different income level. CG Road sits in between as the legacy high street. In this city the question usually resolves to which side of the Sabarmati you need, and we would rather establish the audience first than lead with a location list.",
    },
    {
      q: "How should a brand plan for Navratri in Ahmedabad?",
      a: "Early, and as the centre of the plan rather than an addition to it. Navratri is nine nights of mass public participation that reorganise the commercial year — the four to six weeks before it are when Law Garden and the apparel and jewellery trade peak, and the garba grounds are the physical focus of the city's attention. Availability tightens months ahead, so a Navratri plan decided in August has usually already lost its best options.",
    },
    {
      q: "Do you own hoardings in Ahmedabad?",
      a: "No. We plan, negotiate and run campaigns; we do not hold media. That means no inventory to push and no incentive to recommend a position because it is empty on our books — and in a market where the High Court has ordered a city-wide safety inspection, it means we can drop a site whose stability certification does not stand up rather than defend one we own.",
    },
    {
      q: "Do hoardings in Ahmedabad need a safety certificate?",
      a: "Yes, in practice. Following the Ghatkopar collapse in Mumbai, the Gujarat High Court ordered AMC to inspect roughly two thousand hoardings and banners across the city and remove unsafe ones, with a stability report required from the estate officer. Structural certification is the gate on large format here now. We confirm it before recommending a position, because an advertiser's brand on an uncertified structure is an advertiser's exposure.",
    },
    {
      q: "Which newspapers matter in Ahmedabad?",
      a: "The Gujarati mastheads carry this market — Gujarat Samachar, Divya Bhaskar and Sandesh, all three headquartered here, with genuinely different reader profiles rather than overlapping ones. English press is a precision buy reaching corporate and professional readers, not a reach medium. One thing to check on any proposal: DNA closed its print edition in 2019 and should not appear on a plan.",
    },
    {
      q: "Is Ahmedabad Metro advertising worth buying?",
      a: "For a frequency objective, yes. Around sixty kilometres and thirty-nine stations across three sections, reaching Gandhinagar and GIFT City as defined audiences rather than aspirations. Exclusive train-branding rights were awarded to a named agency in early 2026 and GMRC has sought expressions of interest for station co-branding, so the format is documented rather than informal. It reaches the same commuters several times a week, which builds a message well and announces a short offer badly.",
    },
    {
      q: "Should a campaign here be in Gujarati?",
      a: "For most categories, yes, and more decisively than in most Indian markets. The three big Gujarati dailies are all headquartered in this city and carry a local standing that no English title transfers. Radio runs on a Hindi and Gujarati mix. English does real work reaching the corporate and GIFT City audience but reaches a narrow slice. We will tell you where language choice materially changes performance rather than splitting spend evenly.",
    },
    {
      q: "How long should an Ahmedabad campaign run?",
      a: "At least a full monthly cycle for street media, and normally longer, since shorter runs cost more per day. The genuine exception is event-led work around Navratri, Uttarayan or a Motera fixture, where a short and heavy presence is the right trade because the attention itself is that concentrated.",
    },
    {
      q: "How do I know my advertisement actually went up?",
      a: "Dated, geotagged photographs of every position at mounting and again during the cycle. With a city-wide safety inspection regime in force, that record also tells you quickly if a site has been taken down mid-campaign — which is the kind of thing you want to find out in week two rather than at the end.",
    },
    {
      q: "Can a campaign be limited to one part of Ahmedabad?",
      a: "Yes, and for retail it usually should be. Satellite, Bodakdev, Maninagar and Naroda each behave as their own trade area with their own income profile, and a plan built around one catchment — pole kiosks and street formats along the approach roads — normally outperforms a thin city-wide buy at the same budget.",
    },
    {
      q: "Can you plan Ahmedabad alongside other Gujarat markets?",
      a: "Yes, and it usually buys better. We plan outdoor across 39 Indian cities, and Ahmedabad sits naturally with Gandhinagar and GIFT City, Vadodara, Rajkot and Surat. Gujarati creative travels across the state without adaptation, which makes a multi-city Gujarat plan one of the more efficient regional buys available in India — though note that radio frequencies differ city by city and cannot be bought as one list.",
    },
  ],

  nearby: ["Surat", "Mumbai", "Jaipur", "Pune"],
};
