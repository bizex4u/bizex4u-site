import type { City } from "./types";

/* Patna. One fact about this market is worth flagging in the file
   itself, because it is the sort that a local reader will check first.

   FM: Big FM in Patna is 95.0, NOT the 92.7 it carries in most northern
   markets — this is one of the frequency exceptions the rules in
   types.ts warn about. Verified against the Ministry of Information &
   Broadcasting operational-channels list dated 30 March 2026: the four
   private FM stations in Patna are Radio Mirchi 98.3, Radio City 91.1,
   Big FM 95.0 and Red FM 93.5. AIR Patna and Gyan Vani 105.6 sit on
   the public side.

   Compliance: the applicable instrument is the Bihar Municipal Area
   Advertisement Rules, 2023, notified on 9 January 2023 under the
   Bihar Municipal Act, 2007. These rules apply across all municipal
   areas in Bihar and REPLACE the older Patna Municipal Corporation
   (Grant of Permission for Display of Advertisements & Similar
   Devices) Regulations of 2011 and 2019. A brief written against the
   old PMC regime is a brief written against a repealed instrument. */

export const patna: City = {
  slug: "patna",
  name: "Patna",
  alsoKnownAs: ["Pataliputra"],
  state: "Bihar",
  region: "East",

  metaTitle:
    "Outdoor Advertising in Patna — Hoardings & Metro",
  metaDescription:
    "Hoarding, unipole, metro and retail advertising in Patna, planned around Bailey Road, Boring Road and the coaching catchment.",

  h1Lead: "Outdoor advertising in",
  h1Accent: "Patna",
  heroLede:
    "Patna is pinned between the Ganga and the New Bypass, and the plan sits inside that band or wastes money. Two things make the market its own: it is one of India's larger coaching-and-competitive-exam economies, and Chhath is not one festival among several — it is the axis the year turns on.",

  market: [
    "Patna is a linear river city. The Ganga fixes the northern edge, the New Bypass and Kankarbagh Road define the southern one, and almost the entire built city sits inside that east–west band. That geography is the plan. A hoarding on Bailey Road, a station wrap at Patna Junction and a shelter run through Kankarbagh reach three different segments of what is, in effect, the same corridor — and a plan that ignores the shape is buying scattered impressions in a market that punishes them.",
    "The commercial spine is not a single street. Bailey Road — officially Jawaharlal Nehru Marg — runs from the High Court end near Income Tax Golambar out to Danapur and carries the western half of that spine. Boring Road, officially Jai Prakash Narayan Path, is the retail-plus-affluent-residential heart around SK Puri, Shivpuri and Kidwaipuri. Frazer Road and Exhibition Road cluster the hotel and mid-market retail crowd around Patna Junction; Ashok Rajpath runs east through the education quarter towards Patna University; Gandhi Maidan sits at the pivot of all of them. Kankarbagh and the New Bypass carry the eastern residential density.",
    "This is one of India's more concentrated competitive-exam economies, and it is the least advertised thing about the market. Coaching for UPSC, BPSC, IIT-JEE, medical entrance, SSC and banking clusters around Boring Road, the Bazar Samiti belt near Bhootnath Road, Musallahpur Haat and parts of Rajendra Nagar, and pulls a sustained student population from across Bihar and eastern Uttar Pradesh. The consequence for a media plan is category-specific: edtech, test-prep, banking recruitment, stationery and mid-range durables have a structural audience here that most national templates under-weight.",
    "The last piece is migration. Patna is one of India's largest labour-sending cities, and for the six weeks around Chhath — late October into mid-November — a large working population returns from Delhi, Mumbai, Kolkata and the Gulf. Retail, telecom, remittance, jewellery and two-wheelers see a spend concentration in this window that a Diwali-anchored calendar will miss by ten days. Two infrastructure changes matter alongside it: the Loknayak Ganga Path opened a north-side arterial in phases from 2022, and the Kacchi Dargah–Bidupur Bridge — 9.76 km, opened June 2025 — has redistributed north–south long-distance traffic away from the Mahatma Gandhi Setu.",
  ],

  crowdPlaces: [
    {
      place: "Gandhi Maidan and Frazer Road",
      note: "The historic pivot and still the point a Patna crowd converges on for a rally, a fair or a public event. Frazer Road and Exhibition Road carry the hotel and mid-market retail traffic; Dak Bungalow Chauraha is the crossing everyone in that catchment passes through.",
    },
    {
      place: "Boring Road — the SK Puri to Rajapul stretch",
      note: "The affluent retail and residential heart of the city. Showrooms, restaurants, coaching institutes and salons stack tightly on both sides and the daytime and evening crowds are two different populations on the same road.",
    },
    {
      place: "Bailey Road — Income Tax Golambar to Danapur",
      note: "The western spine, carrying the Secretariat, High Court, Patna Women's College, the airport approach and a long ribbon of dealership and institutional buildings. A vehicular audience more than a pedestrian one, and one of the more consistent large-format corridors in the city.",
    },
    {
      place: "Kankarbagh and the New Bypass",
      note: "One of the largest planned residential colonies in eastern India, increasingly a retail catchment in its own right around Gravity Mall and the Ashok Nagar–Rajendra Nagar belt. The New Bypass stitches this eastern half back into the rest of the city.",
    },
    {
      place: "Patna Junction and Rajendra Nagar Terminal",
      note: "Two of the busier long-distance rail stations in India, and the pair that anchor migrant arrivals and departures. The volume is daily and repetitive at Patna Junction and heavier at festival travel weekends across both.",
    },
    {
      place: "Bhootnath Road, Bazar Samiti and Musallahpur Haat",
      note: "The coaching quarter. A dense, young, and specific catchment — students preparing for BPSC, UPSC, JEE, NEET and the banking exams — that behaves as its own market and responds to different creative and different pricing than the retail corridors do.",
    },
    {
      place: "Ganga ghats — Gandhi Ghat, Patliputra Ghat, Collectorate Ghat, Patna Ghat",
      note: "Ordinary daily use for most of the year and something entirely different at Chhath: the sunrise and sunset arghyas draw an enormous focused crowd, and the shopping days leading up to them are the single largest concentration of consumer intent in the Bihari calendar.",
    },
    {
      place: "Jay Prakash Narayan International Airport approach",
      note: "The airport is compact and the run in from Bailey Road and the Sheikhpura crossing is where the arriving business, government and NRI audience is captured, in a market where the airport itself is a small terminal rather than a media environment in its own right.",
    },
  ],

  formatGuide: [
    {
      title: "Hoarding advertising in Patna",
      kicker: "Large format",
      body: "Large format in Patna is a corridor medium. Bailey Road, the New Bypass, Kankarbagh Road and the approaches to Gandhi Maidan carry the vehicular volume at the speeds where a large structure is actually read; the older central lanes around Ashok Rajpath and Patna City have neither the sightlines nor the setback for one. The applicable regime here is the Bihar Municipal Area Advertisement Rules, 2023, which replaced the earlier PMC regulations — a permission cleared under the pre-2023 regime is not the same thing as a currently valid position, and the market is still catching up to the change.",
    },
    {
      title: "Unipole advertising in Patna",
      kicker: "Arterial",
      body: "Unipoles suit the New Bypass, the Loknayak Ganga Path (Patna's north-side arterial along the river, opened in phases from 2022) and the airport approach along Bailey Road, where there is clear ground and a steady vehicular audience. The Ganga Path is the newer of these environments and less visually cluttered than the interior corridors, which means a position there works harder for the same structure than one on the Bypass would.",
    },
    {
      title: "Bus queue shelter (BQS) advertising in Patna",
      kicker: "Street level",
      body: "Shelters reach the share of Patna that moves by city bus, auto and on foot, and it is a large share — the settled residential belts of Kankarbagh, Rajendra Nagar and Bailey Road all generate that traffic in volume. Backlit units hold their value into the evening, which matters here because the retail day on Boring Road and Frazer Road runs late. In the monsoon months, weather-resistance of the unit is not a small consideration.",
    },
    {
      title: "Pole kiosks and hyperlocal media",
      kicker: "Catchment",
      body: "For a store, a coaching institute, a clinic, a jewellery showroom or a two-wheeler dealership, a run of pole kiosks along the approach roads to the catchment normally outperforms a single arterial hoarding at the same budget. Patna's neighbourhood structure — Kankarbagh, Rajendra Nagar, Boring Road, Kidwaipuri, Rajiv Nagar, Danapur, Kurji, Patliputra Colony, Ashiana Nagar — makes this the format that most rewards local knowledge and most punishes a template.",
    },
    {
      title: "LED screen and DOOH advertising in Patna",
      kicker: "Digital",
      body: "Digital screen inventory in Patna is concentrated on Boring Road, Frazer Road, the Dak Bungalow crossing and around the malls — Gravity in Kankarbagh, City Centre in Patliputra — rather than distributed along the arterials in the way that a metro like Bengaluru or Chennai has it. Daypart control is the genuine advantage; loop share is the genuine limitation. We recommend DOOH when the rotation is actually being used and are direct with a client when a static position would do more.",
    },
    {
      title: "Patna Metro advertising",
      kicker: "Transit",
      body: "This is the newest medium in the city and the fastest-moving. The Priority Corridor of the Blue Line — Bhootnath, Zero Mile and Patliputra Bus Terminal (New ISBT), a 3.6 km elevated stretch — opened to the public on 7 October 2025, and the Malahipakri extension came into service in mid-2026. The remaining Blue Line, including the underground segment through Patna Junction and Gandhi Maidan, is targeted around late 2028. Metro media in Patna today is a growing rather than a settled inventory, and the sensible position is to buy it as coverage builds rather than as a plan on its own.",
    },
    {
      title: "Ghat, event-day and Chhath-window media",
      kicker: "Occasion",
      body: "For six weeks around Chhath, the calendar itself becomes the medium — shopping-week presence in the run-up, ghat-adjacent presence on the sandhya and usha arghyas, and route-side presence along the migrant homecoming corridors from the stations and airport. It is a defined window with its own inventory pressure, permission considerations and pricing, and a plan that treats it as an ordinary retail month has misunderstood the city.",
    },
    {
      title: "Coaching-quarter and student-catchment media",
      kicker: "Segment",
      body: "The Boring Road, Bazar Samiti, Bhootnath Road and Musallahpur belts pull exam aspirants from across Bihar and eastern Uttar Pradesh in volume. Kiosks, shelters, wall wraps and hostel-adjacent formats reach that audience at a cost per exposure that no arterial buy matches, and for edtech, banking recruitment and coaching services this catchment usually deserves more budget than a showroom position would.",
    },
  ],

  localMedia: {
    press: [
      {
        title: "Hindustan (Hindi)",
        language: "Hindi",
        note: "The circulation leader in Bihar and the default first line of a Hindi press plan for the state. Strong Patna edition and dedicated district editions across Muzaffarpur, Bhagalpur, Gaya and Darbhanga.",
      },
      {
        title: "Dainik Jagran",
        language: "Hindi",
        note: "Deep Bihar penetration across dozens of district editions from the Jagran Prakashan network. Sits alongside Hindustan at the top of the Hindi state readership rather than behind it, and reaches a broader small-town audience than the metro-only titles do.",
      },
      {
        title: "Dainik Bhaskar",
        language: "Hindi",
        note: "Patna edition of the D B Corp group's national Hindi network. Younger reader profile than Hindustan, and heavier in the metro core than in the district catchments.",
      },
      {
        title: "Prabhat Khabar",
        language: "Hindi",
        note: "Founded in Ranchi and now published from Patna, Kolkata and other eastern cities. A distinctly regional voice with a strong Bihar-and-Jharkhand identity rather than a national title dropped into the state.",
      },
      {
        title: "inext",
        language: "Hindi and English",
        note: "The Jagran Prakashan group's compact, English-inflected Hindi youth broadsheet. Reaches a different reader — younger, urban, coaching-catchment — from the parent title.",
      },
      {
        title: "The Times of India — Patna",
        language: "English",
        note: "The mass English daily. Reaches the corporate, government and institutional readership, and the default English title for a national plan running through the state.",
      },
      {
        title: "Hindustan Times",
        language: "English",
        note: "The other national English daily with genuine Bihar presence and the English stablemate of Hindi Hindustan under the HT Media group.",
      },
      {
        title: "The Telegraph",
        language: "English",
        note: "Kolkata-headquartered and still a title with real standing across the East. Reaches a reader who follows regional and civic affairs closely.",
      },
    ],
    radio: [
      {
        station: "Radio Mirchi",
        frequency: "98.3",
        note: "Hindi contemporary. The broadest single commercial station in the market, and one of the few frequencies that is consistent with its number in other Indian cities.",
      },
      {
        station: "Radio City",
        frequency: "91.1",
        note: "Hindi mass. Broad daytime schedule and strong local RJ presence.",
      },
      {
        station: "Big FM",
        frequency: "95.0",
        note: "Hindi mass. Note the frequency — Big FM in Patna is 95.0, not the 92.7 it carries in most northern markets. This is the mistake we most often catch in received briefs.",
      },
      {
        station: "Red FM",
        frequency: "93.5",
        note: "Hindi contemporary from the Sun group's network. The northern-metro default frequency does apply here.",
      },
      {
        station: "Akashvani Patna",
        frequency: "FM Rainbow / Vividh Bharati",
        note: "The All India Radio Patna services. Reach beyond the metro into the surrounding districts and a genuinely different listener profile from the private stations.",
      },
      {
        station: "Gyan Vani Patna",
        frequency: "105.6",
        note: "Educational broadcasting under the IGNOU-and-Prasar Bharati framework. A narrow but relevant reach for edtech and higher-education advertisers where category rules permit.",
      },
    ],
    radioNote:
      "Patna radio is Hindi. The four private FMs on air here per the current Ministry of Information & Broadcasting operational-channels list are Radio Mirchi 98.3, Radio City 91.1, Big FM 95.0 and Red FM 93.5. Big FM at 95.0 rather than the 92.7 of most northern markets is the frequency exception worth flagging — planning against the wrong number is the mistake we most often catch in received briefs. We verify against the current MIB list at the point of buying rather than working from a rate card.",
  },

  transit: {
    lede:
      "Patna's transit media environment changed more between 2022 and 2026 than in the previous two decades. The Metro is now open in phases, the Loknayak Ganga Path has added a north-side arterial, and the Kacchi Dargah–Bidupur Bridge has quietly redistributed north–south long-distance traffic away from the Mahatma Gandhi Setu. A plan built on a pre-2022 view of the city now misses genuinely important environments.",
    modes: [
      {
        mode: "Patna Metro (PMRCL)",
        note: "The Blue Line's Priority Corridor — Bhootnath, Zero Mile and Patliputra Bus Terminal, 3.6 km elevated — opened on 7 October 2025, and the Malahipakri extension came into service in mid-2026. The remaining Blue Line, including the underground segment through Patna Junction and Gandhi Maidan, is targeted around late 2028; the Red Line is under construction. Inventory here is growing rather than settled, and we treat it accordingly.",
      },
      {
        mode: "Indian Railways at Patna Junction and Rajendra Nagar Terminal",
        note: "Two of the busier long-distance stations in the country, and the pair that anchor migrant arrivals for Chhath and departures after it. Sustained daily volume at both and heavy festival-window peaks in October–November.",
      },
      {
        mode: "Buses — BSRTC, city and Patliputra ISBT",
        note: "The new Patliputra Bus Terminal at Bairiya is the intercity node and shares a metro station with the Priority Corridor. City buses and shared autos reach the residential belts that the arterials do not.",
      },
      {
        mode: "Jay Prakash Narayan International Airport",
        note: "A compact terminal, upgraded in phases, with limited on-site media environment relative to the metros. The arriving business, government and NRI audience is more efficiently reached on the Bailey Road approach than inside the terminal itself.",
      },
      {
        mode: "The Ganga bridges",
        note: "Mahatma Gandhi Setu was the north–south chokepoint for four decades. The Kacchi Dargah–Bidupur Bridge (9.76 km, opened June 2025) has redistributed a substantial share of long-distance and heavy-vehicle traffic away from it, and Aunta–Simaria to the east opened in August 2025. Corridor value on the Setu approaches is not what it was two years ago.",
      },
    ],
  },

  costDrivers: [
    {
      factor: "Corridor",
      note: "Bailey Road, Boring Road, Frazer Road, the New Bypass and Kankarbagh Road are five different products at five different prices, and the Loknayak Ganga Path is a sixth that did not exist a planning generation ago. The audience each one carries is different enough that headcount and value are not the same thing here.",
    },
    {
      factor: "Illumination",
      note: "Frontlit, backlit and non-lit price separately. In a city whose retail life on Boring Road and Frazer Road runs late into the evening, an unlit position loses a meaningful share of its working day.",
    },
    {
      factor: "Duration and the minimum cycle",
      note: "Monthly cycles are the norm and shorter runs usually cost more per day. Patna rewards sustained presence on the corridors where the same commuters pass twice daily; a two-week burst that would work in a metro like Bangalore tends to under-perform here.",
    },
    {
      factor: "Season",
      note: "Chhath compresses a large share of annual retail demand into a six-week window and Sonepur Mela adds a month-long rural-and-trade audience through November. Both move rates in ways that a national calendar built around Diwali will not anticipate.",
    },
    {
      factor: "Permission status under the 2023 rules",
      note: "The applicable instrument is the Bihar Municipal Area Advertisement Rules, 2023, and a rate meaningful under the pre-2023 regime is not the same as a rate against a currently-permitted position.",
    },
    {
      factor: "Production, mounting and monsoon damage",
      note: "Printing, material, mounting and re-mounting. Ganga-basin monsoons — June to September — are hard on flex, and an honest budget for that window carries a maintenance line rather than hoping.",
    },
  ],

  compliance: {
    authority: "Patna Municipal Corporation (PMC)",
    body: [
      "Advertising in Patna is licensed by the Patna Municipal Corporation under the Bihar Municipal Act, 2007. The applicable current instrument is the Bihar Municipal Area Advertisement Rules, 2023, notified by the Government of Bihar on 9 January 2023, which apply across all municipal areas of Bihar and replace the older Patna Municipal Corporation (Grant of Permission for Display of Advertisements & Similar Devices) Regulations of 2011, along with the 2019 amendments to them. Reading only the pre-2023 regulations is reading a superseded regime.",
      "The 2023 rules cover the full range of outdoor devices — hoardings, unipoles, gantries, banners, kiosks, LED and variable-message displays, pole kiosks and street furniture. Permission is site-specific and time-bound. The framework is recent enough that buyer awareness lags the change, and a brief that assumes the old regime will produce surprises at execution.",
      "We will not overstate what we know. We have read the 2023 notification at the level of its scope and licensing architecture, and we will not quote you specific size caps, illumination limits, ward-level restrictions or fee schedules from a website as though we had confirmed them from primary sources. Where a specific rule affects your campaign, we confirm it directly with PMC before recommending a position, and we will remove a site rather than carry an unconfirmed permission on a client's behalf.",
    ],
  },

  season: [
    {
      window: "Late October to mid-November — Chhath Puja",
      note: "Not one festival among several. Chhath is the axis the Bihari commercial year turns on, with a shopping run of two to three weeks before the sandhya arghya evening and a scale of ghat participation, migrant homecoming and route-side visibility that has no equivalent in most Indian cities. A Patna plan that treats this window as an ordinary retail month has misunderstood the market.",
    },
    {
      window: "November — Sonepur Mela",
      note: "Across the Ganga at Sonepur near Hajipur, one of the longest and largest cattle fairs in Asia, running roughly a month. It pulls a very large and specifically rural-and-trade audience through Vaishali district, and the northern approach corridors into Patna carry that traffic. A genuine planning anomaly rather than a footnote.",
    },
    {
      window: "November to February — wedding season and winter",
      note: "The extended retail run through Kartik Purnima, the wedding months and the winter events calendar. Jewellery, apparel, durables and two-wheelers all peak in this window on Boring Road and Bailey Road, and the weather makes it the most usable outdoor stretch of the year.",
    },
    {
      window: "June to September — the monsoon",
      note: "The risk window rather than the opportunity. Ganga-basin storms damage flex and structures; a plan running through it needs a maintenance and replacement provision built in rather than assumed away.",
    },
  ],

  planning:
    "We plan Patna from the catchment outwards, and from the calendar inwards. The city's linear geography means a small number of corridors carry the same commuters daily, and sustained presence on the right two or three usually beats a wide sweep across five. Chhath and the migrant homecoming define a six-week window that is worth planning as its own campaign; Sonepur adds a month-long rural anomaly that a national template will not contain. The Metro is opening in phases and the balance between metro, corridor and hyperlocal is genuinely moving. We build the plan against the current shape of the city rather than the shape it had two years ago.",

  faq: [
    {
      q: "How much does hoarding advertising cost in Patna?",
      a:
        "We do not publish a rate card. It depends on the corridor, the size, the illumination and the duration — and in Patna it depends unusually heavily on the season, because Chhath and Sonepur compress demand into weeks rather than distributing it across quarters. We are not selling our own inventory, so a published rate would tell you what we would like to charge rather than what the market will take; we negotiate against several vendors for every plan. Send the brief and the budget and you will get real numbers against real positions.",
    },
    {
      q: "Which areas of Patna are best for outdoor advertising?",
      a: "Bailey Road reaches the western institutional corridor; Boring Road reaches the affluent retail heart; Frazer Road and Exhibition Road cluster the hotel and mid-market shopping crowd near Patna Junction; the New Bypass and Kankarbagh reach the eastern residential density; Bhootnath Road and Bazar Samiti reach the coaching catchment. Which of those is right depends on the audience, and we would rather establish that first than open with a location list.",
    },
    {
      q: "Do you own hoardings in Patna?",
      a: "No. We plan, negotiate and run campaigns; we do not hold media. That means no inventory to push and no incentive to recommend a position because it happens to be empty on our books. The trade-off is that we cannot promise a specific structure before we have negotiated for it — which is the honest position, and in a market whose regulatory instrument was reset in 2023, it lets us walk away from a site whose paperwork does not stand up.",
    },
    {
      q: "How should a brand approach Chhath in Patna?",
      a: "Deliberately, and early. Chhath is not a seasonal bump — it is the commercial axis of the year, with a shopping run of two to three weeks in the lead-up and a scale of ghat participation and migrant homecoming that gives brand association at the right point a legitimacy it does not have elsewhere. Availability tightens months ahead, so a Chhath plan decided in September has usually already lost its best options.",
    },
    {
      q: "Is Patna Metro advertising worth buying?",
      a: "For a frequency objective and for coverage that will grow rather than shrink, yes. The Priority Corridor opened in October 2025 and the Malahipakri extension in mid-2026, with the underground stretch through Patna Junction and Gandhi Maidan targeted around late 2028. The sensible position today is to buy the metro as coverage builds rather than to base a plan on it alone.",
    },
    {
      q: "Should a Patna campaign be in Hindi?",
      a: "Almost always, and radio in particular is a Hindi medium here in a way that admits very little exception. English press does real work with the corporate, government and institutional readership, so a mixed press plan is often right — but a campaign that runs only in English in Patna is reaching a fraction of the market. Bhojpuri and Magahi creative for cultural and Chhath-window campaigns adds a register the standard Hindi does not carry, and for the right categories that is a genuine advantage rather than an ornament.",
    },
    {
      q: "How long should a Patna campaign run?",
      a: "Longer than most markets. The linear corridor structure of the city means a well-chosen set of positions reaches the same commuters twice daily and familiarity genuinely compounds; runs shorter than a monthly cycle usually cost more per day rather than less. The exception is a Chhath-window or Sonepur-window push, where short and heavy is often the right shape.",
    },
    {
      q: "How do I know my advertisement actually went up?",
      a: "Dated, geotagged photographs of every position at mounting and again during the cycle. In a Ganga-basin city that record matters more than usual — monsoon damage can take a site down mid-campaign, and it shows up in monitoring and nowhere else.",
    },
    {
      q: "Can a campaign be limited to one part of Patna?",
      a: "Yes, and for retail and coaching brands it is often the stronger option. Kankarbagh, Boring Road, Bailey Road, Patliputra Colony and Danapur each behave as their own catchment, and a sequence of street-level positions along the approach roads to one of them normally outperforms a thin city-wide buy at the same budget.",
    },
    {
      q: "Are hoardings allowed in Patna?",
      a: "Yes, under the Bihar Municipal Area Advertisement Rules, 2023, administered by the Patna Municipal Corporation. That instrument replaced the older PMC regulations from 2011 and 2019, so a permission cleared under the earlier regime is not the same as a currently-permitted position. We confirm status against the current rules before a structure enters a plan.",
    },
    {
      q: "Does the coaching-and-competitive-exam economy matter for outdoor here?",
      a: "More than any national plan will assume. Boring Road, the Bazar Samiti and Bhootnath Road belt, Musallahpur Haat and parts of Rajendra Nagar carry a sustained student population preparing for BPSC, UPSC, JEE, NEET, SSC and banking exams from across Bihar and eastern Uttar Pradesh. For edtech, banking recruitment, coaching and first-job financial services this is a structural audience, and it responds to hyperlocal presence far more than to arterial weight.",
    },
    {
      q: "Can you plan Patna alongside other eastern markets?",
      a: "Yes, and it usually buys better. We plan outdoor across 39 Indian cities, and Patna sits naturally with Varanasi, Kolkata, Ranchi and Lucknow. Hindi creative travels across the Bihar–eastern UP–Jharkhand corridor without adaptation, so a multi-city eastern plan is one of the more efficient regional buys available.",
    },
  ],

  nearby: ["Varanasi", "Kolkata", "Lucknow", "Kanpur"],
};
