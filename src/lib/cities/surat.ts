import type { City } from "./types";

/* Surat. The frequency trap in this state is severe and this city is
   where it bites: Mirchi Love is 91.9 here and 104.0 in Ahmedabad; Red
   FM is 95.0 here and 93.5 in Ahmedabad; Big FM is on air here and NOT
   in Ahmedabad. Six stations, almost none of them shared numbers with
   the state capital.

   No metro yet — trial runs only. Anyone selling Surat metro inventory
   is selling a 2027 proposition. */

export const surat: City = {
  slug: "surat",
  name: "Surat",
  state: "Gujarat",
  region: "West",

  metaTitle:
    "Outdoor Advertising in Surat — Hoardings & BRTS",
  metaDescription:
    "Hoarding, unipole, BRTS and retail advertising in Surat, planned around the split between the affluent west and the diamond and textile belts.",

  h1Lead: "Outdoor advertising in",
  h1Accent: "Surat",
  heroLede:
    "Surat is a working city with money in it. The diamond and textile belts hold a young, largely male, high-earning and value-conscious workforce that almost no national media plan is designed to reach — and the clean office corridors most plans are built around barely exist here.",

  market: [
    "Surat does not have the geography most media plans assume. There is no significant office district, no clean commercial corridor separated from where people live, and until Dream City there was nothing resembling a central business district. Instead there are trade clusters: the Ring Road textile markets, the Varachha and Mahidharpura diamond belts, the Udhna and Pandesara industrial areas. Street-level and market-cluster formats consistently outperform corporate-corridor formats here, and a plan ported from Ahmedabad will miss for exactly that reason.",
    "The audience is the reason this market is worth taking seriously. The diamond and textile belts hold a young, largely male, migrant workforce earning genuinely good money and spending it carefully. Surat is one of India's strongest markets for two-wheelers, gold, mobile handsets and remittance and financial products, and it responds to value propositions rather than aspiration. There is a large Marwari and Rajasthani trading population on top of that, which is why Hindi print is not a throwaway here the way it is elsewhere in Gujarat.",
    "The money has moved southwest. Vesu, Piplod, Athwa, City Light and the Dumas Road corridor hold the affluent residential and the organised retail, and Khajod is where the future is being built. The Surat Diamond Bourse — the largest office building in the world — pulled the diamond trade's centre of gravity south into Dream City, which is the single biggest structural change to this market in a generation.",
    "Two other shifts matter. The airport received international designation and a new terminal, materially upgrading the catchment and the premium audience available. And Surat is a station on the Mumbai–Ahmedabad bullet train corridor, which over time makes it far more accessible to a western India campaign than its current road and rail connections suggest.",
  ],

  crowdPlaces: [
    {
      place: "The Ring Road textile market cluster",
      note: "New Textile Market, Millennium Market and the complexes around them. Wholesale saree and fabric trade drawing retailers, boutique owners and exporters from across India — a trade-buyer crowd rather than a consumer one, peaking on weekdays through the middle of the day.",
    },
    {
      place: "Varachha and Mahidharpura",
      note: "The diamond belt. Varachha is the polishing-worker residential and commercial district, Mahidharpura the old-city street diamond market. Footfall follows shift changes, and the audience is young, largely male and earning well.",
    },
    {
      place: "Chowk Bazaar and Bhagal",
      note: "Old-city retail and general merchandise, with an evening family shopping crowd. Dense, pedestrian, and local rather than migrant.",
    },
    {
      place: "Surat Railway Station and the Central bus terminal",
      note: "Rail and intercity bus adjacent to each other, and the entry point for a very large migrant workforce. Continuous churn with real waiting time, and enormous around Diwali and Chhath.",
    },
    {
      place: "Athwalines and City Light Road",
      note: "The affluent local high street — upmarket retail, dining and clinics. A settled, higher-income resident audience that the working belts do not overlap with at all.",
    },
    {
      place: "VR Surat and Rahul Raj Mall",
      note: "Organised mall footfall on Dumas Road and in Piplod, serving the Vesu and Piplod affluent catchment. Weekend and festival peaks, with a shopper already in a spending frame of mind.",
    },
    {
      place: "Dumas Beach",
      note: "Weekend and evening mass leisure along the Dumas Road corridor — a broad, cross-income family crowd that reaches beyond the affluent southwest.",
    },
    {
      place: "Surat Diamond Bourse, Khajod",
      note: "The largest office building in the world, and a concentrated high-value daily trade workforce. The anchor of the new southern growth pole and the closest thing Surat has to a business district.",
    },
  ],

  formatGuide: [
    {
      title: "Hoarding advertising in Surat",
      kicker: "Large format",
      body: "Large format works on the Ring Road, the Dumas Road corridor, the Udhna–Sachin industrial axis and the approaches to Dream City, where the roads are wide and the traffic is steady. It works less well than a proposal usually claims inside the textile market cluster, where the buildings are tall, close and vertical — the crowd there is dense but the sightlines are short, and a smaller format at eye level does more than a big one overhead.",
    },
    {
      title: "Unipole advertising in Surat",
      kicker: "Arterial",
      body: "Unipoles suit the Ring Road, the Dumas Road stretch and the highway approaches, where there is clear ground and steady vehicular speed. The Dream City and Khajod approaches are worth particular attention — the diamond trade's move south created new arterial value in a part of the city that carried almost none five years ago, and inventory there is younger and less cluttered than on the older corridors.",
    },
    {
      title: "Market cluster and trade media",
      kicker: "B2B",
      body: "This is the format tier Surat genuinely needs and that a consumer-shaped plan will skip. A meaningful share of advertising demand here is business to business — reaching textile traders, diamond units, exporters and the buyers who travel in for the season. Media inside and around the Ring Road market complexes, the Mahidharpura street market and the industrial estates reaches a decision-maker that no mass format does, and it is priced as trade media rather than as premium outdoor.",
    },
    {
      title: "Bus queue shelter and BRTS media",
      kicker: "Street level",
      body: "Surat runs its BRTS and city bus as a single integrated system under Sitilink, with two BRTS corridors covering roughly thirty kilometres — Udhana Darwaja to Sachin GIDC, and ONGC Colony through Canal Road to Sarthana — and further corridors largely complete. The enclosed BRTS stations give a captive waiting audience in a controlled environment, and the network runs directly through the working belts where most of this city's spending power actually lives.",
    },
    {
      title: "Pole kiosks and hyperlocal media",
      kicker: "Catchment",
      body: "Surat's wards are unusually self-contained — Varachha, Katargam, Udhna, Limbayat, Vesu and Adajan each behave as their own market with their own language mix and income profile. A run of pole kiosks along the approach roads into one of those covers it properly at a fraction of arterial cost, and for retail, gold, handset and financial-services briefs this is normally where the plan should start.",
    },
    {
      title: "LED screen and DOOH advertising in Surat",
      kicker: "Digital",
      body: "Digital concentrates around the organised retail and the southwestern corridor, where the audience is affluent and phone-native. It is a narrower environment than Ahmedabad's, and we would rather tell you that than sell you loop share on a thin network. Where the daypart or the creative rotation is genuinely being used it earns its premium; where a static position would deliver more for the same money, we say so.",
    },
    {
      title: "Mall, cinema and society media",
      kicker: "Retail and residential",
      body: "VR Surat and Rahul Raj anchor the organised retail for the Vesu and Piplod catchment. Residential society and lift media works unusually well in this city because so much of the workforce lives in dense, uniform housing blocks in Varachha, Katargam and Adajan — one negotiation reaches a very large number of households at close range, and reaches them in the belt where the disposable income actually is.",
    },
    {
      title: "Surat Metro — not yet",
      kicker: "Transit, future",
      body: "Worth saying plainly because we have seen it offered: there is no operational metro in Surat. Two lines totalling roughly forty-two kilometres and thirty-seven stations are under construction, trial runs began in 2026 on a short stretch between Dream City and Althan, and commercial opening is tracking to around 2027. Treat it as a pre-booking conversation for later, not as current inventory — and treat any proposal offering it today as one to read carefully.",
    },
  ],

  localMedia: {
    press: [
      {
        title: "Gujaratmitra",
        language: "Gujarati",
        note: "Published from Surat and the oldest Gujarati newspaper published from within the state. Deeply local trading readership — this is the masthead that carries genuine city authority here, and the one an out-of-town plan always misses.",
      },
      {
        title: "Gujarat Samachar",
        language: "Gujarati",
        note: "Surat edition, with a branch operation in the city. Mass Gujarati household reach across the trading and business-family population.",
      },
      {
        title: "Divya Bhaskar",
        language: "Gujarati",
        note: "Surat edition. Younger and more urban in register, built around city supplements.",
      },
      {
        title: "Sandesh",
        language: "Gujarati",
        note: "Surat edition, reaching an older and more traditional Gujarati readership.",
      },
      {
        title: "Rajasthan Patrika",
        language: "Hindi",
        note: "Genuinely publishes a Surat edition, and it matters here more than the state average would suggest. Surat's Marwari, Rajasthani and Hindi-speaking trading and labour population is large, so Hindi print is a real buy in this city rather than an afterthought.",
      },
      {
        title: "The Times of India",
        language: "English",
        note: "Circulates in Surat reaching the corporate and professional segment. Thin relative to the Gujarati and Hindi titles — a precision buy, not a reach one.",
      },
    ],
    radio: [
      { station: "Radio Mirchi", frequency: "98.3", note: "Hindi and Gujarati mainstream — the broadest commercial station in the city." },
      { station: "Radio City", frequency: "91.1", note: "Gujarati, broad daytime schedule." },
      { station: "Mirchi Love", frequency: "91.9", note: "Retro and romantic. Note carefully: this brand sits on 104.0 in Ahmedabad. The numbers do not travel." },
      { station: "Big FM", frequency: "92.7", note: "Hindi mass. Big FM is on air in Surat and not in Ahmedabad — one of the few brands unique to this city in the state." },
      { station: "MY FM", frequency: "94.3", note: "Hindi and Gujarati mass, from the Dainik Bhaskar stable." },
      { station: "Red FM", frequency: "95.0", note: "Hindi and Gujarati, contemporary. Red FM is 93.5 in Ahmedabad and 95.0 here — the single most common Gujarat frequency error." },
      {
        station: "Akashvani Surat",
        frequency: "Vividh Bharati 101.1",
        note: "Public service, transmitting from the Bhatar Road tower, with reach into the surrounding districts.",
      },
    ],
    radioNote:
      "Surat's frequencies differ from Ahmedabad's almost completely, and this is where most Gujarat media plans go wrong. Red FM is 95.0 here and 93.5 in the capital; Mirchi Love is 91.9 here and 104.0 there; Big FM is on air here and absent there. A single state station list will be wrong for one of the two cities. Radio works as a drive-time medium on a Hindi and Gujarati mix, and Hindi carries more weight here than the state average because of the migrant trading population. We verify against the Ministry of Information and Broadcasting operational list and confirm what is on air at buying.",
  },

  transit: {
    lede:
      "Surat's transit media is a bus story, not a rail one — and the bus network is better than most Indian cities of this size manage.",
    modes: [
      {
        mode: "Sitilink — BRTS and city bus",
        note: "The municipal operator runs BRTS and city bus as one integrated system. Phase 1 covers roughly thirty kilometres over two corridors — Udhana Darwaja to Sachin GIDC, and ONGC Colony through Canal Road to Sarthana — with further corridors largely complete. Enclosed BRTS stations give a captive waiting audience running directly through the working belts.",
      },
      {
        mode: "Surat Railway Station and the Central bus terminal",
        note: "Adjacent rail and intercity bus, and the arrival point for a very large migrant workforce. Continuous volume with genuine dwell, and extraordinary around Diwali and Chhath when the belts empty homewards.",
      },
      {
        mode: "Surat Airport",
        note: "At Magdalla, operated by the Airports Authority of India — not Adani, unlike Ahmedabad. International designation was approved in December 2023 and the terminal is built for several million passengers a year, with traffic growing sharply. A genuinely upgraded premium catchment.",
      },
      {
        mode: "Surat Metro — under construction",
        note: "Two lines, roughly forty-two kilometres and thirty-seven stations, with trial running started in 2026 and commercial opening tracking to around 2027. No inventory exists today. We list it so nobody sells it to you as though it did.",
      },
    ],
  },

  costDrivers: [
    {
      factor: "Which belt",
      note: "Vesu, Piplod, Athwa and Dumas Road price as affluent residential; Varachha, Katargam, Udhna and Pandesara price as working belts; the Ring Road markets price as trade media. Three different products, and the working belts are not the cheap option so much as the different one — the disposable income there is real.",
    },
    {
      factor: "The textile trade cycle",
      note: "Surat's demand is driven by buying seasons rather than only by consumer festivals. Trader travel into the Ring Road markets ahead of Navratri and the wedding season tightens availability on the market-cluster formats specifically, on a rhythm that has nothing to do with retail.",
    },
    {
      factor: "The Diwali and Chhath departure",
      note: "Something to build into a plan rather than discover. A large share of the migrant workforce goes home for Diwali and Chhath, so late October to mid-November sees a genuine footfall dip in the worker belts even while retail peaks in the affluent ones. The same weeks are worth very different amounts in different parts of the city.",
    },
    {
      factor: "Illumination",
      note: "Frontlit, backlit and non-lit price separately. The diamond and textile belts run on shifts and stay awake late, so an unlit position in those areas loses a larger share of its working day than the same site would elsewhere.",
    },
    {
      factor: "Duration and the minimum cycle",
      note: "Monthly cycles are the norm and shorter runs usually cost more per day. Trade-media placements around the market season are the exception, where a short heavy presence timed to the buying weeks is the right trade.",
    },
    {
      factor: "Production and mounting",
      note: "Printing, material, mounting and re-mounting after monsoon weather. Quoted separately from media so the two are never conflated.",
    },
  ],

  compliance: {
    authority: "Surat Municipal Corporation (SMC)",
    body: [
      "Advertising in the city is licensed by the Surat Municipal Corporation, with site allocation running through SMC tenders. Permission is site-specific, and the advertiser is exposed alongside the media owner if a structure cannot produce current paperwork.",
      "We will be honest about the limits of the public record here, because it is thinner than Ahmedabad's. We found no separately published, consolidated SMC outdoor advertisement policy document equivalent to Ahmedabad's 2023 policy. The working assumption is that the Gujarat General Development Control Regulations signage provisions plus SMC's own tender conditions govern — but that is an assumption, and we confirm it with the corporation rather than presenting it as settled.",
      "Two things worth knowing as context. SMC advertising contracts have been litigated before, with at least one documented dispute reaching the courts, so the contractual side of a Surat placement rewards attention. And the Gujarat High Court's post-Ghatkopar direction on hoarding safety applies across the state, which means structural stability certification is the practical gate on large format here as much as in Ahmedabad. We confirm both before a position enters a plan.",
    ],
  },

  season: [
    {
      window: "September to October — Navratri",
      note: "The Gujarat peak, and Surat participates fully. Apparel, jewellery and consumer categories all concentrate into the nine nights and the weeks before them.",
    },
    {
      window: "The textile buying seasons",
      note: "Distinct from the consumer calendar. Trader travel into the Ring Road markets ahead of Navratri and the wedding season is its own demand cycle, and it is the window that matters for anything selling to the trade rather than to households.",
    },
    {
      window: "Late October to mid-November — the migrant departure",
      note: "Diwali and Chhath empty the worker belts as a large share of the migrant workforce travels home, even while retail peaks in Vesu and Athwa. Two opposite effects in one city in the same fortnight, and worth planning for explicitly.",
    },
    {
      window: "June to September — the monsoon",
      note: "A genuine risk window for flex and structures, and a period when transit and indoor formats carry more of the load than street media does.",
    },
  ],

  planning:
    "We plan Surat around its clusters rather than its corridors, because the city is built as clusters. The first question is which audience the campaign is actually for — the affluent southwest, the diamond and textile working belts, or the trade itself — since those are three different media plans and only one of them looks like a conventional outdoor buy. The second is timing, and specifically whether the campaign wants the retail calendar or the textile buying calendar, which are not the same weeks. The third is compliance, where the public record is thinner than we would like and we confirm directly with SMC rather than assuming.",

  faq: [
    {
      q: "How much does hoarding advertising cost in Surat?",
      a:
        "We do not publish a rate card. It depends on the belt, the corridor, the size, the illumination and the duration — and in Surat also on whether you are buying consumer media or trade media, which price differently. We are not selling our own inventory, so a published rate would tell you what we would like to charge rather than what the market will take. Send the brief and the budget and you will get real numbers against real positions.",
    },
    {
      q: "Is there a metro in Surat?",
      a: "Not yet, and this is worth checking on any proposal you receive. Two lines totalling roughly forty-two kilometres and thirty-seven stations are under construction, trial running began in 2026 on a short stretch between Dream City and Althan, and commercial opening is tracking to around 2027. There is no metro advertising inventory in Surat today. Anyone offering it is selling you a future proposition as a current one.",
    },
    {
      q: "Which areas of Surat are best for outdoor advertising?",
      a: "Vesu, Piplod, Athwa, City Light and Dumas Road reach the affluent resident market. Varachha, Katargam, Udhna, Limbayat and Pandesara reach the diamond and textile workforce — young, largely male, earning well and value-conscious. The Ring Road market cluster reaches the trade rather than the consumer. Khajod and Dream City reach the new high-value diamond business audience. Surat splits more sharply than most cities, so the audience has to be settled before the location is.",
    },
    {
      q: "Is Surat a good market for consumer brands?",
      a: "For the right categories, unusually so. The diamond and textile workforce is young, earns genuinely well and spends carefully, which makes Surat one of India's strongest markets for two-wheelers, gold, mobile handsets, and remittance and financial products. It responds to value propositions rather than aspirational ones, and a creative approach ported from Ahmedabad or Mumbai frequently misfires here.",
    },
    {
      q: "Should a Surat campaign run in Gujarati or Hindi?",
      a: "Usually both, and the Hindi share is larger here than elsewhere in Gujarat. Surat has a substantial Marwari, Rajasthani and Hindi-speaking trading and labour population, and Rajasthan Patrika publishes a Surat edition for exactly that reason. Gujaratmitra carries genuine local authority in Gujarati. Radio runs on a mix. We will tell you where language choice materially changes performance rather than defaulting.",
    },
    {
      q: "Do you own hoardings in Surat?",
      a: "No. We plan, negotiate and run campaigns; we do not hold media. That means no inventory to push and no reason to recommend a position because it is empty on our books. It also means we can decline a site whose permission or structural certification does not stand up, which in Gujarat's current safety regime is a real consideration.",
    },
    {
      q: "Is permission needed for a hoarding in Surat?",
      a: "Yes — advertising is licensed by Surat Municipal Corporation and site allocation runs through SMC tenders. We will be straight that the public record here is thinner than in Ahmedabad: we found no separately published consolidated SMC outdoor advertisement policy. Where a specific rule affects your campaign we confirm it with the corporation directly rather than repeating an unsourced summary.",
    },
    {
      q: "When is the best time to advertise in Surat?",
      a: "For consumers, Navratri and Diwali, as across Gujarat. For the trade, the textile buying seasons ahead of Navratri and the wedding season, which are separate weeks with their own demand. And one thing to plan for explicitly: Diwali and Chhath take a large share of the migrant workforce home, so the worker belts thin out in late October and early November even as the affluent belts peak.",
    },
    {
      q: "How long should a Surat campaign run?",
      a: "At least a full monthly cycle for street media, and normally longer, since shorter runs cost more per day. Trade-media placements around the market buying season are the exception — there, a short heavy presence timed to the weeks when buyers are actually in the city is the right trade.",
    },
    {
      q: "How do I know my advertisement actually went up?",
      a: "Dated, geotagged photographs of every position at mounting and again during the cycle. Monitoring is the part of outdoor most often skipped and most often wrong, and in a city with a monsoon this heavy it is also how you find out that a site needs re-mounting before the campaign quietly stops working.",
    },
    {
      q: "Can you plan Surat alongside Ahmedabad?",
      a: "Yes, and it usually buys better as a pair — but with one caution. Gujarati creative travels between the two without adaptation, and negotiating the cluster together changes what is achievable. Radio does not travel: the frequencies differ almost completely between the two cities, and Big FM is on air in Surat but not in Ahmedabad. A single Gujarat station list will be wrong for one of them, and we buy them separately for that reason.",
    },
  ],

  nearby: ["Ahmedabad", "Mumbai", "Pune", "Jaipur"],
};
