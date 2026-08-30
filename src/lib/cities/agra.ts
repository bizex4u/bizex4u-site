import type { City } from "./types";

/* Agra. The honest framing this page has to carry: the headline tourist
   number is enormous but it is concentrated in a narrow corridor, sharply
   seasonal, and sitting exactly where signage is most restricted. Resident
   OOH lives somewhere else entirely. Two plans, not one.

   Four private FM stations. Radio City is 91.9 here. Ignore the common
   aggregator errors: "Fever 104" is the Delhi frequency, "Radio Mantra
   91.9" is a legacy brand, "Tadka 94.7" is wrong — it is 94.5.

   AIR Agra: only 1530 kHz AM confirmed. No FM frequency asserted.

   The ASI visitor figure is published government statistics, not licensed
   audience research, which is why it can appear here when a footfall
   count cannot. */

export const agra: City = {
  slug: "agra",
  name: "Agra",
  state: "Uttar Pradesh",
  region: "North",

  metaTitle:
    "Outdoor Advertising in Agra — Hoardings & Metro",
  metaDescription:
    "Hoarding, unipole, metro and retail advertising in Agra, planned around the split between tourist footfall and the resident market.",

  h1Lead: "Outdoor advertising in",
  h1Accent: "Agra",
  heroLede:
    "Agra has the biggest tourist number in India and one of the smallest usable advertising zones around it. The crowd is real, it is concentrated in a corridor where signage is most restricted, and it is not resident. Selling to visitors and selling to Agra are two different media plans.",

  market: [
    "Start with the number, because it is the reason everybody wants to advertise here. Published Archaeological Survey figures put the Taj Mahal at close to seven million visitors in a recent financial year, the most-visited ticketed monument in India. That is genuine and it is enormous. It is also transient, non-resident, sharply seasonal, closed on Fridays, and concentrated in the Taj–Fort–Fatehabad Road corridor, which is precisely the part of the city where signage is most heavily restricted.",
    "Resident Agra lives elsewhere and behaves like a normal large Uttar Pradesh city. Sanjay Place in Civil Lines is the principal commercial and office district and the most reliable local audience in the city. Sadar Bazaar is the main shopping street, genuinely mixed between visitors and residents. Kinari Bazaar in the old city is wedding and wholesale trade, almost entirely local and regional. MG Road, Bodla, Shamshabad Road and Dayalbagh carry the newer residential and retail growth. Almost none of that is where a visitor goes.",
    "The Yamuna Expressway is the demand artery — it makes Agra a Delhi NCR day trip, which is why so much of the visitor economy is driven by a market a hundred and sixty kilometres away. The Agra–Lucknow Expressway runs east. Both are controlled-access, so right-of-way media on them is governed by NHAI and UPEIDA rather than the municipality, a different permitting chain from anything inside the city.",
    "The metro changed the tourist corridor in a way nothing else has. The Yellow Line priority section opened in March 2024 — roughly six kilometres and six stations from Taj East Gate to Mankameshwar, three underground and three elevated — running directly through the tourism spine. That makes metro media the cleanest available way to reach visitor footfall without fighting monument-zone signage rules, and it is the single most useful development for advertisers in this market in years.",
  ],

  crowdPlaces: [
    {
      place: "Sanjay Place, Civil Lines",
      note: "Agra's principal commercial and office district, and the most reliable resident audience in the city. Weekday-peaking, genuinely local, and the part of Agra that behaves like an ordinary commercial market.",
    },
    {
      place: "Sadar Bazaar",
      note: "The main shopping street, near Agra Cantt, and one of the few places where visitor and resident crowds genuinely mix. Evening and weekend peaks across both.",
    },
    {
      place: "Kinari Bazaar",
      note: "The old-city wedding and wholesale market — marble, glassware, zari. Almost entirely local and regional trade, peaking hard through the wedding season and invisible to the tourist economy.",
    },
    {
      place: "Fatehabad Road",
      note: "The hotel and tourist-services corridor, with coach traffic. This is where visitor spending actually happens, as distinct from where visitors stand. Sharply seasonal, peaking October to March.",
    },
    {
      place: "The Taj Mahal — East and West Gates and Shilpgram",
      note: "India's most-visited ticketed monument, and the highest concentration of people in the city by a wide margin. Also the most restricted signage zone in it. Closed on Fridays, which matters for any weekly-cycle plan.",
    },
    {
      place: "Agra Fort",
      note: "The second tourist anchor, feeding footfall into Subhash Bazaar and the surrounding old-city trade.",
    },
    {
      place: "Agra Cantt railway station",
      note: "The city's principal station, mixing tourist arrivals with daily local commuters — one of the few environments in Agra where both audiences are reachable in the same buy.",
    },
    {
      place: "Sikandra and the Mathura Road approach",
      note: "Akbar's Tomb plus heavy through-traffic on the northern approach. A mix of visitor and regional vehicular movement, and one of the more viable arterial positions in the city.",
    },
  ],

  formatGuide: [
    {
      title: "Hoarding advertising in Agra",
      kicker: "Large format",
      body: "Large format in Agra lives away from the monuments. The Sikandra and Mathura Road approach, the Shamshabad Road and Bodla corridors, and the outer arterials carry it; the Taj corridor does not, and the reason is regulatory rather than commercial. Anything near the monument runs into three separate gates — the Taj Trapezium Zone, ASI and the National Monuments Authority, and Nagar Nigam Agra — and clearing one does not clear the others. We settle that before recommending, not after.",
    },
    {
      title: "Advertising near the Taj Mahal",
      kicker: "Restricted",
      body: "Worth being direct about, because it is the request we get most and the one most often mis-sold. The Supreme Court has ordered a halt to commercial activities within five hundred metres of the Taj Mahal and a no-construction zone has been declared in that radius — which is the operative constraint on erecting any built advertising structure near the monument. Lit and digital formats near the Taj are the most legally exposed of anything in this city. The highest-footfall zone in Agra is also its lowest-availability zone, and no rate makes that untrue.",
    },
    {
      title: "Agra Metro advertising",
      kicker: "Transit",
      body: "The most useful answer to the monument-zone problem. The Yellow Line priority section runs six stations from Taj East Gate to Mankameshwar, directly through the tourism spine, which means metro media reaches visitor footfall inside a controlled environment rather than fighting signage rules on the street. UPMRC has been actively tendering it — co-branding and in-station rights at the underground stations, a further tender across nine Corridor-1 stations, exclusive advertising rights across the trainsets on a three-year basis, and advertising on the elevated civil structures from Taj East Gate to Fatehabad Road. Whether those have been awarded and to whom is not something we will assert; we check current status before quoting.",
    },
    {
      title: "Unipole advertising in Agra",
      kicker: "Arterial",
      body: "Unipoles suit the outer arterials, the Sikandra approach and the Shamshabad Road growth corridor, where there is clear ground and steady vehicular speed away from the protected zones. Note that positions on the Yamuna Expressway and the Agra–Lucknow Expressway sit under NHAI and UPEIDA right-of-way rather than the municipality — a separate permitting chain, and the one that reaches the Delhi day-trip traffic that drives so much of this market.",
    },
    {
      title: "Pole kiosks and hyperlocal media",
      kicker: "Catchment",
      body: "Resident Agra is a hyperlocal market and this is how it gets covered properly. Sanjay Place, Civil Lines, Dayalbagh, Bodla, Shamshabad Road and Kamla Nagar each behave as their own trade area, and a run of pole kiosks along the approach roads into one of them reaches the households that live there — which, for any category selling to Agra rather than to visitors, is the entire point. Nagar Nigam Agra tenders kiosk advertising, so the permission route is documented.",
    },
    {
      title: "Bus and railway station media",
      kicker: "Transit",
      body: "Agra Cantt is the city's principal station and one of the few places where visitor and resident audiences overlap in the same environment, with real dwell time on both sides. Agra Fort and Raja Ki Mandi handle the rest. UPSRTC operates from the ISBT and Idgah bus stands, reaching a regional Braj-belt audience. We could not verify a documented advertising concessionaire for the bus or station media here and will not assert one.",
    },
    {
      title: "Retail, mall and society media",
      kicker: "Resident audience",
      body: "This is the tier that reaches the Agra that lives here. Ashok Cosmos and the Sanjay Place commercial cluster serve the local shopper; residential society and lift media through Civil Lines, Dayalbagh, Kamla Nagar and the Shamshabad Road belt reaches households at close range. It sits on private property, entirely outside the monument-zone constraints, and for grocery, durables, healthcare, education and financial services it does more work than anything on Fatehabad Road ever will.",
    },
    {
      title: "Season and event media",
      kicker: "Seasonal",
      body: "Agra's tourist economy runs October to March and is close to dead in May and June — a wider swing than almost any Indian market. The Taj Mahotsav at Shilpgram in February is the city's own signature event. The wedding season drives the Kinari Bazaar and jewellery trade on a completely separate rhythm aimed at residents. And the Taj closes on Fridays, which is a real consideration for anything planned on a weekly cycle.",
    },
  ],

  localMedia: {
    press: [
      {
        title: "Amar Ujala",
        language: "Hindi",
        note: "Runs a dedicated Agra City edition. Mass Hindi readership and historically strong across western Uttar Pradesh — the default first line of an Agra press plan.",
      },
      {
        title: "Dainik Jagran",
        language: "Hindi",
        note: "A dedicated Agra edition. The other mass Hindi masthead, with trader and middle-class household reach across the city and the Braj belt.",
      },
      {
        title: "The Times of India",
        language: "English",
        note: "Thin relative to the Hindi titles, skewing towards the tourism trade, hospitality and the professional segment. In Agra, English press is a niche and tourism-adjacent buy rather than a mass one.",
      },
      {
        title: "Hindustan Times",
        language: "English",
        note: "The other English option, with a similar professional and institutional profile. Same caveat: precision rather than reach.",
      },
    ],
    radio: [
      { station: "Radio City", frequency: "91.9", note: "Hindi contemporary and film-led — the broadest single commercial station in the city." },
      { station: "Big FM", frequency: "92.7", note: "Hindi mass and retro, with a broad daytime schedule." },
      { station: "Fever FM", frequency: "93.7", note: "Hindi and film-led. Note the frequency carefully — Fever is 93.7 in Agra, not the 104 it carries in Delhi." },
      {
        station: "Radio Tadka",
        frequency: "94.5",
        note: "Hindi with regional and local flavour, from the Rajasthan Patrika stable. Frequently misquoted as 94.7 — it is 94.5.",
      },
      {
        station: "Akashvani Agra",
        frequency: "1530 kHz AM",
        note: "Public service on mediumwave. We could not confirm a distinct AIR FM frequency for Agra and will not assert one — where it matters, we confirm with the station before buying.",
      },
    ],
    radioNote:
      "Agra has four private FM stations and a striking number of published lists get their frequencies wrong. The common errors are worth naming: Fever is 93.7 here, not the 104 it carries in Delhi; 91.9 is Radio City, though a legacy Jagran brand held that frequency and still appears on stale lists; and Radio Tadka is 94.5, not 94.7. We work from the Ministry of Information and Broadcasting operational list and confirm what is on air at buying. This is an overwhelmingly Hindi-reading and Hindi-listening market — English media here is a tourism-adjacent niche, not a mass buy.",
  },

  transit: {
    lede:
      "Agra's transit media is unusually valuable relative to its size, because the metro runs straight through the one corridor where street advertising is most restricted.",
    modes: [
      {
        mode: "Agra Metro",
        note: "The Yellow Line priority section — roughly six kilometres and six stations from Taj East Gate to Mankameshwar, three underground and three elevated, operational since March 2024 and running through the tourism spine. UPMRC has tendered co-branding and in-station rights at the underground stations, further rights across nine Corridor-1 stations, exclusive trainset advertising on a three-year basis, and advertising on the elevated civil structures between Taj East Gate and Fatehabad Road. We confirm which of those have been awarded before quoting.",
      },
      {
        mode: "Agra Cantt and the city stations",
        note: "Agra Cantt is the principal station, with Agra Fort and Raja Ki Mandi alongside. Genuine dwell time, and one of the few environments where visitor and resident audiences are reachable together.",
      },
      {
        mode: "UPSRTC — ISBT and Idgah",
        note: "Intercity bus reaching the regional Braj-belt audience — Mathura, Vrindavan, Firozabad and beyond. We could not verify a documented advertising concessionaire and do not assert one.",
      },
      {
        mode: "Airport — pending, not current",
        note: "The existing civil terminal sits inside the Air Force station with restricted access, which is why Agra's air traffic is negligible today. A new civil enclave at Dhanauli received its foundation stone in late 2024 with a substantially larger terminal planned, but it is not open. Worth watching, not worth planning against.",
      },
    ],
  },

  costDrivers: [
    {
      factor: "Visitor audience or resident audience",
      note: "The decision that governs everything else here. Fatehabad Road and the monument corridor price against tourism; Sanjay Place, Sadar and the residential belts price against a normal UP city. A visitor position bought for a resident-facing campaign is expensive reach you cannot convert.",
    },
    {
      factor: "How many permission gates a site crosses",
      note: "Anything near the monuments passes through the Taj Trapezium Zone, ASI and the National Monuments Authority, and Nagar Nigam Agra — three separate gates, and clearing one does not clear the others. That process cost is real, and it is why compliant inventory in the highest-footfall zone is scarce and dear.",
    },
    {
      factor: "The season, and it swings hard",
      note: "October to March carries the tourist economy; May and June are effectively dead for it. A wider annual swing than almost any Indian market, and a flat twelve-month plan here spends a third of its money into an empty city.",
    },
    {
      factor: "Municipal or expressway right of way",
      note: "Positions on the Yamuna Expressway and the Agra–Lucknow Expressway sit under NHAI and UPEIDA rather than the municipality — different chain, different timeline, different cost, and the one that reaches Delhi day-trip traffic.",
    },
    {
      factor: "Illumination",
      note: "Frontlit, backlit and non-lit price separately — and near the monuments, illuminated formats are the most legally exposed of all, which is a risk premium as much as a rate difference.",
    },
    {
      factor: "Production and mounting",
      note: "Printing, material, mounting and re-mounting after weather, quoted separately from media so it is clear which is which.",
    },
  ],

  compliance: {
    authority: "Nagar Nigam Agra · TTZ Authority · ASI and the National Monuments Authority",
    body: [
      "Agra has more layers of restriction than any other market we plan, and it is worth setting them out plainly. Nagar Nigam Agra is the municipal licensing authority; it publishes advertising bye-laws and actively tenders, including kiosk advertising within municipal limits. That is the ordinary chain, and it governs most of the city.",
      "Around the monuments, two further regimes apply. The Taj Trapezium Zone is a roughly ten-thousand-square-kilometre area covering Agra, Firozabad, Mathura, Hathras and Etah plus Bharatpur, established through Supreme Court orders and administered under continuing judicial supervision. Its primary thrust is emissions rather than signage, but it is the umbrella under which everything near the Taj is scrutinised. More directly, the Supreme Court has ordered a halt to commercial activities within five hundred metres of the Taj Mahal, and a no-construction zone has been declared in that radius — which is the operative constraint on erecting any built advertising structure there. Separately, the centrally protected monuments — the Taj, Agra Fort, Sikandra and Fatehpur Sikri — carry statutory prohibited and regulated areas requiring clearance under the Ancient Monuments Act.",
      "Two honest limits on what we are telling you. We have not re-verified the specific distances that define the ASI prohibited and regulated areas, so we do not print those figures. And we could not find a single published document setting out Agra's outdoor advertising rules with explicit digital and LED provisions — the state-level rules and the Nagar Nigam bye-laws need direct confirmation. The practical position stands regardless: in Agra the highest-footfall zone is the lowest-availability zone, and every site in the Taj corridor needs its permission chain confirmed individually.",
    ],
  },

  season: [
    {
      window: "October to March — the tourist season",
      note: "The visitor economy in full, driven substantially by Delhi day trips down the Yamuna Expressway. Fatehabad Road and the hotel corridor at their busiest, and where most of the year's tourism-facing value sits.",
    },
    {
      window: "February — the Taj Mahotsav",
      note: "The city's own signature festival at Shilpgram, concentrating a large crowd of both visitors and residents into a few days — one of the rare moments the two audiences overlap.",
    },
    {
      window: "November to February — wedding season",
      note: "The resident commercial peak, and a completely separate rhythm from tourism. Kinari Bazaar, the jewellery trade and the marble and zari businesses run hardest here, aimed entirely at local and regional buyers.",
    },
    {
      window: "May and June — effectively dead",
      note: "Heat empties the tourist economy almost entirely. A wider annual swing than almost any Indian market, and something we would rather tell you than sell you through.",
    },
  ],

  planning:
    "We plan Agra by splitting the two audiences before anything else, because they need different corridors, different formats and different permissions. If the campaign is selling to visitors, the plan is metro, Fatehabad Road and the seasonal window — and every site in the monument corridor gets its permission chain confirmed individually across three separate authorities. If it is selling to Agra, the plan is Sanjay Place, Sadar, the residential belts and hyperlocal formats, and the monuments are a distraction. Most briefs are the second kind and get planned as the first, which is the most expensive mistake made in this market.",

  faq: [
    {
      q: "Can I advertise near the Taj Mahal?",
      a: "Barely, and this is the most important thing on this page. The Supreme Court has ordered a halt to commercial activities within five hundred metres of the Taj Mahal, and a no-construction zone has been declared in that radius — which effectively rules out erecting a built advertising structure there. On top of that sit the Taj Trapezium Zone and the statutory protected areas around centrally protected monuments. The highest-footfall zone in Agra is its lowest-availability zone. Anyone offering you a hoarding at the Taj is offering you something to check very carefully.",
    },
    {
      q: "How much does hoarding advertising cost in Agra?",
      a:
        "We do not publish a rate card. It depends on whether you are buying the tourist corridor or the resident city, the format, the illumination, the duration and the season — and Agra's season swings harder than almost any Indian market. We are not selling our own inventory, so a published rate would tell you what we would like to charge rather than what the market will take. Send the brief and the budget and you will get real numbers against real positions.",
    },
    {
      q: "Should I advertise to tourists or to Agra residents?",
      a: "They are two different media plans and the answer decides everything. Tourist footfall is enormous — published ASI figures put the Taj at close to seven million visitors in a recent year — but it is transient, non-resident, sharply seasonal and concentrated where signage is most restricted. For hospitality, travel, telecom and gifting, that can be exactly right. For a grocery brand, a bank, a hospital or a local retailer, it is reach you cannot convert, and Sanjay Place, Sadar and the residential belts are where your customer actually is.",
    },
    {
      q: "Is Agra Metro advertising worth buying?",
      a: "For visitor-facing campaigns it is the best answer available. The Yellow Line runs six stations from Taj East Gate to Mankameshwar, straight through the tourism spine, which lets you reach visitor footfall inside a controlled environment rather than fighting monument-zone signage rules. UPMRC has tendered station co-branding, trainset rights and advertising on the elevated civil structures towards Fatehabad Road. We confirm which have been awarded before quoting rather than assuming.",
    },
    {
      q: "Which areas of Agra are best for outdoor advertising?",
      a: "For resident audiences: Sanjay Place and Civil Lines for the commercial and office market, Sadar Bazaar for mixed retail, Kinari Bazaar for wedding and wholesale trade, and Dayalbagh, Bodla, Kamla Nagar and Shamshabad Road for households. For visitors: Fatehabad Road, the Sikandra approach and the metro corridor. The two lists barely overlap, which is the whole planning problem here.",
    },
    {
      q: "Do you own hoardings in Agra?",
      a: "No. We plan, negotiate and run campaigns; we do not hold media. In a city with three overlapping permission regimes near the monuments, that independence means we can tell you a site is not buyable rather than selling it to you and letting the paperwork be someone else's problem.",
    },
    {
      q: "What is the Taj Trapezium Zone and does it affect advertising?",
      a: "It is a roughly ten-thousand-square-kilometre area covering Agra, Firozabad, Mathura, Hathras and Etah plus Bharatpur, established through Supreme Court orders and administered under continuing judicial supervision. Its primary thrust is emissions rather than signage, so it is not principally an advertising regime — but it is the umbrella under which everything near the Taj is scrutinised, and it sits alongside the five-hundred-metre commercial restriction and the ASI protected areas. Three gates, and clearing one does not clear the others.",
    },
    {
      q: "Which newspapers and radio stations matter in Agra?",
      a: "Hindi carries this market. Amar Ujala runs a dedicated Agra City edition and Dainik Jagran an Agra edition — those two are the press plan. English is a tourism-adjacent niche. On radio there are four private stations, and a lot of published lists get the frequencies wrong: Fever is 93.7 here rather than the 104 it carries in Delhi, and Radio Tadka is 94.5 rather than the 94.7 that often appears. We work from the operational list and confirm at buying.",
    },
    {
      q: "When is the best time to advertise in Agra?",
      a: "For visitors, October to March, with the Taj Mahotsav in February as a concentrated peak. For residents, the November-to-February wedding season is the commercial peak, running on an entirely separate rhythm. Agra has two calendars and a plan has to pick one. May and June are effectively dead for the visitor plan, which is worth planning around rather than through. One practical detail: the Taj is closed on Fridays, which matters for anything on a weekly cycle.",
    },
    {
      q: "Is there an airport in Agra worth advertising at?",
      a: "Not meaningfully, today. The existing civil terminal sits inside the Air Force station with restricted access, which is why Agra's air traffic is negligible. A new civil enclave at Dhanauli received its foundation stone in late 2024 with a substantially larger terminal planned, but it is not open. Worth watching; not worth planning against yet.",
    },
    {
      q: "How do I know my advertisement actually went up?",
      a: "Dated, geotagged photographs of every position at mounting and again during the cycle. In a city with this many overlapping enforcement authorities, that record also tells you quickly if something has been removed on grounds you were not expecting — which you want to know early rather than at the end.",
    },
    {
      q: "Can you plan Agra alongside other markets?",
      a: "Yes, and it usually should be planned that way. We plan outdoor across more than forty Indian cities. Agra sits naturally with Mathura and Vrindavan, Firozabad, Aligarh and Gwalior for the regional Braj belt — and with Delhi NCR, which is the demand source for a great deal of Agra's visitor economy via the Yamuna Expressway. For a tourism campaign, planning Delhi, Agra and Jaipur together as the Golden Triangle is usually more effective than treating Agra as a standalone.",
    },
  ],

  nearby: ["Delhi NCR", "Jaipur", "Kanpur", "Lucknow"],
};
