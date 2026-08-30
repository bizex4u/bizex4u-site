import type { City } from "./types";

/* Chandigarh. The regulatory position here is the opposite of everywhere
   else we plan: under the 1954 Advertisement Control Order the DEFAULT IS
   PROHIBITION. Legal inventory is what the Municipal Corporation has
   expressly tendered — nothing else. That single fact reorganises the
   whole page.

   Four private FM stations only. AIR Chandigarh's FM frequency could not
   be resolved (sources give 103.1, 100.6 and 107.2), so no number is
   published.

   VR Punjab in Mohali shut indefinitely in April 2026 after earthquake
   damage. It must not appear in a crowd-places list — it was the
   Tricity's leading mall and a local reader would spot it instantly. */

export const chandigarh: City = {
  slug: "chandigarh",
  name: "Chandigarh",
  alsoKnownAs: ["Tricity", "Mohali", "Panchkula"],
  state: "Chandigarh, Punjab & Haryana",
  region: "North",

  metaTitle:
    "Outdoor Advertising in Chandigarh — Unipoles",
  metaDescription:
    "Unipole, panel and transit advertising across Chandigarh, Mohali and Panchkula — three authorities, one market, advertising tendered by exception.",

  h1Lead: "Outdoor advertising in",
  h1Accent: "Chandigarh",
  heroLede:
    "Chandigarh is the one Indian city where outdoor advertising is prohibited by default. Under the 1954 Control Order nothing goes up on a road berm unless the Corporation has expressly tendered it — so the real question here is not where a site would work, but which sites legally exist.",

  market: [
    "Chandigarh inverts the normal logic of an Indian outdoor market. The Chandigarh Advertisement Control Order of 1954 is the governing instrument, and its default position is prohibition — no hoarding, board, banner or advertisement of any sort on road berms. Legal inventory is the defined pool the Municipal Corporation has expressly tendered, and nothing else. Everywhere else in India the question is which site is best; here the first question is which sites exist at all.",
    "It is also three markets wearing one name. Chandigarh is a Union Territory with the strictest controls. Mohali is in Punjab, licensed by MC SAS Nagar, which runs its advertisement rights through its own e-auction. Panchkula is in Haryana under the Haryana municipal bye-laws. The three are physically contiguous and functionally one urban area, and they permit completely separately — which is the single most important thing to know before anyone quotes you a Tricity plan.",
    "The grid is the media plan. Madhya Marg is the primary east–west arterial and runs on into Panchkula; Dakshin Marg, Jan Marg, Himalaya Marg and Purv Marg complete the frame. Because Chandigarh is built on sector roundabouts rather than crossroads, approach angle matters more here than in a conventional city — a position that reads well on one arm of a roundabout may be invisible on the approach that actually carries your audience.",
    "Money sits at Sector 17, the Madhya Marg sectors, Elante and the Industrial Area, and the Rajiv Gandhi Technology Park. Volume sits at Sector 22, Sector 19, Mani Majra, Mohali's Phase 3B2 and Zirakpur. And the practical release valve for large format is outside the UT altogether — Zirakpur, Kharar and Mullanpur catch Chandigarh-bound traffic before it enters the strictest jurisdiction, which is why so much Tricity inventory sits there.",
  ],

  crowdPlaces: [
    {
      place: "Sector 17 Plaza",
      note: "The pedestrian-only civic and retail plaza that functions as the city centre in Le Corbusier's plan — brand showrooms and food, peaking in the evenings and at weekends. ISBT-17 adjoins it.",
    },
    {
      place: "Nexus Elante, Industrial Area Phase I",
      note: "Around a million square feet and the largest mall in the region, drawing a genuinely regional weekend crowd from across Punjab, Haryana and Himachal rather than only from the Tricity.",
    },
    {
      place: "Sukhna Lake",
      note: "The city's promenade — morning walkers and an evening and weekend family crowd, heaviest on winter afternoons. A leisure audience with long dwell and no competing commercial noise.",
    },
    {
      place: "Sector 22 and Shastri Market",
      note: "The dense older value-retail and street-vending zone. A daily resident shopper crowd across the whole day — local rather than tourist, and the volume counterweight to Sector 17.",
    },
    {
      place: "ISBT Sector 43",
      note: "The interstate terminal for Punjab and Himachal routes, with ISBT-17 handling local and Haryana services. All-day commuter flow peaking at weekends and through festival travel.",
    },
    {
      place: "Chandigarh Junction",
      note: "The city's principal railway station, currently under redevelopment through the Amrit Bharat scheme — an outstation and commuter audience with real waiting time.",
    },
    {
      place: "Maharaja Yadavindra Singh Stadium, Mullanpur",
      note: "Punjab Kings' home ground since 2024, in New Chandigarh. Episodic but very large event crowds through the IPL window from March to May.",
    },
    {
      place: "Mata Mansa Devi Temple, Panchkula",
      note: "Mass religious footfall, peaking hard during both Navratras. A cross-income regional crowd that no commercial corridor in the Tricity reaches.",
    },
  ],

  formatGuide: [
    {
      title: "Unipole advertising in Chandigarh",
      kicker: "The main format",
      body: "Unipoles and advertisement panels are what Chandigarh actually sells, and it sells them by tender. The Municipal Corporation has run e-auctions for defined pools of advertisement sites and unipoles — one published notice covers sixty-five sites through the government procurement portal, another covers display on unipoles and panels at various locations. That is the market. There is no free-market billboard trading here, and a vendor offering you a site outside a tendered pool is offering you something that should not be there.",
    },
    {
      title: "Hoarding advertising in Chandigarh",
      kicker: "Restricted",
      body: "Worth stating plainly because it is not what buyers expect: the 1954 Control Order prohibits hoardings, boards, banners and advertisements of any sort on road berms, and enforcement action against non-compliant display is documented. Large-format hoarding in the sense used in Delhi or Mumbai is not a Chandigarh product. Brands that want scale in this market get it from the tendered unipole pool, from transit, or from outside the UT boundary.",
    },
    {
      title: "Advertising in Mohali and Zirakpur",
      kicker: "The release valve",
      body: "Because the UT is so tightly controlled, a great deal of Tricity large format actually sits in Mohali, Zirakpur, Kharar and Mullanpur — catching Chandigarh-bound traffic on the approaches before it enters the strictest jurisdiction. Mohali licenses separately through MC SAS Nagar, which has run its advertisement rights on a design-build-operate-maintain-transfer basis, with the successful bidder required to remove existing unipole and billboard structures. That is an inventory reset, and it is worth timing a plan against.",
    },
    {
      title: "Advertising in Panchkula",
      kicker: "Haryana side",
      body: "Panchkula sits in Haryana under the Haryana municipal advertisement bye-laws, a third permission regime for the same urban area. It carries the Mansa Devi religious footfall and a settled residential catchment, and it is a genuinely separate buy rather than an extension of a Chandigarh plan. Anyone quoting the Tricity as one line item has either simplified something material or has not checked.",
    },
    {
      title: "Bus and transit advertising in Chandigarh",
      kicker: "Transit",
      body: "This is the cleanest permission position in the market and the reason transit carries more weight here than it would elsewhere. CTU tenders marketing rights for display on city buses, and its published scope explicitly names buses, ISBTs, workshops and bus queue shelters. Current listings have covered Tricity buses on multi-year terms, and full-bus branding is a documented, live format. For a brand that wants presence across all three jurisdictions in one negotiation, the bus network is the only format that does it.",
    },
    {
      title: "Signage and shopfront in a planned city",
      kicker: "Architectural control",
      body: "Something specific to Chandigarh: Le Corbusier's architectural controls, frame controls and zoning controls govern facades and shopfront signage sector by sector. Signage conformity here is an architectural question as well as a licensing one, and Sector 17 and Sector 22 in particular have documented controls attached to their built form. Retail signage that would pass unremarked in another city can be non-compliant here on grounds that have nothing to do with advertising law.",
    },
    {
      title: "The Capitol Complex — no commercial media",
      kicker: "Prohibited",
      body: "Stated so nobody wastes time on it. The Capitol Complex in Sector 1 is inscribed on the UNESCO World Heritage list as part of the architectural work of Le Corbusier, and is additionally protected under the Ancient Monuments and Archaeological Sites and Remains Act. Treat it as zero commercial outdoor. Any proposal that includes it has not been checked.",
    },
    {
      title: "Mall, cinema and residential media",
      kicker: "Indoor",
      body: "With street inventory this constrained, indoor and private-property media does proportionally more work in the Tricity than almost anywhere else. Elante anchors a regional retail catchment; residential society and lift media across the Chandigarh sectors, Mohali phases and Panchkula sectors reaches affluent households at close range. Both sit on private property and therefore outside the road-berm prohibition entirely, which is a genuine structural advantage in this market rather than a fallback.",
    },
  ],

  localMedia: {
    press: [
      {
        title: "The Tribune",
        language: "English",
        note: "Published from Chandigarh since 1881 and the establishment paper of the region — bureaucracy, judiciary, services and academia across Punjab, Haryana, Himachal and Jammu. Being in it carries an institutional weight nothing else here transfers.",
      },
      {
        title: "Dainik Tribune",
        language: "Hindi",
        note: "The same house's Hindi masthead, reaching the Hindi-reading urban and Haryana-side readership.",
      },
      {
        title: "Punjabi Tribune",
        language: "Punjabi",
        note: "The Punjabi title from the Tribune stable — the combination lets one house cover all three languages of the region in a single negotiation.",
      },
      {
        title: "Ajit and Jagbani",
        language: "Punjabi",
        note: "The mass Punjabi readership across the region, reaching well beyond the Union Territory into the Punjab catchment. Ajit in particular is the default Punjabi buy.",
      },
      {
        title: "Hindustan Times and The Indian Express",
        language: "English",
        note: "Chandigarh editions with an urban professional readership. Chandigarh is an unusually strong English market for a city of its size, because of the administrative and services population.",
      },
      {
        title: "Amar Ujala and Dainik Bhaskar",
        language: "Hindi",
        note: "Amar Ujala runs a dedicated Chandigarh City edition. Both reach the Hindi-reading household across the Tricity and the surrounding districts.",
      },
      {
        title: "Punjab Kesari",
        language: "Hindi",
        note: "Reaches the Hindi-reading trader and urban readership, with a strong Punjab-belt profile.",
      },
    ],
    radio: [
      { station: "Radio Mirchi", frequency: "98.3", note: "Hindi and Punjabi-led mainstream — the broadest single commercial station in the market." },
      { station: "Big FM", frequency: "92.7", note: "Hindi and Punjabi mass, broad daytime schedule." },
      { station: "Red FM", frequency: "93.5", note: "Contemporary and humour-led, skewing younger, with heavy Punjabi music weighting." },
      { station: "MY FM", frequency: "94.3", note: "From the Dainik Bhaskar stable and the most explicitly Punjab-regional in positioning of the four." },
    ],
    radioNote:
      "Chandigarh has four private FM stations, not the eight or nine a metro carries — a small commercial radio market for a city with this much disposable income, and worth knowing before a plan assumes otherwise. All four run Hindi and Punjabi-led mainstream formats with heavy Punjabi music weighting. On Akashvani: sources conflict on the FM frequency for Chandigarh, giving 103.1, 100.6 and 107.2 in different places, so we do not publish a number. We confirm it with Akashvani Chandigarh before buying rather than printing something we cannot stand behind.",
  },

  transit: {
    lede:
      "There is no metro in the Tricity, and with street advertising prohibited by default in the Union Territory, the bus network carries more of the media load here than in almost any comparable city.",
    modes: [
      {
        mode: "CTU — Chandigarh Transport Undertaking",
        note: "The documented route into this market. CTU tenders marketing rights for display on city buses, with a published scope explicitly covering buses, ISBTs, workshops and bus queue shelters, and current listings running multi-year across Tricity services. Full-bus branding is live and documented. The only format that spans all three jurisdictions in one negotiation.",
      },
      {
        mode: "ISBT Sector 43 and ISBT Sector 17",
        note: "Sector 43 handles Punjab and Himachal routes, Sector 17 local and Haryana services. All-day intercity flow with genuine waiting time, and Sector 17's terminal sits directly beside the city's main retail plaza.",
      },
      {
        mode: "Chandigarh Junction",
        note: "The principal railway station, under redevelopment through the Amrit Bharat Station Scheme. Outstation and commuter dwell.",
      },
      {
        mode: "Shaheed Bhagat Singh International Airport",
        note: "Operated by Chandigarh International Airport Ltd and physically located in Mohali — which means the approach corridor sits under a different licensing authority from the city it serves. A small detail with real consequences for planning a terminal-and-approach sequence.",
      },
    ],
  },

  costDrivers: [
    {
      factor: "Whether the site is in a tendered pool",
      note: "The first and most consequential question in Chandigarh. Advertising is prohibited by default under the 1954 Control Order and legal inventory is the pool the Corporation has expressly tendered. A rate quoted for a position outside that pool is not a rate, it is a risk.",
    },
    {
      factor: "Which of the three jurisdictions",
      note: "Chandigarh UT, Mohali under MC SAS Nagar, and Panchkula under Haryana bye-laws price and permit separately. Zirakpur, Kharar and Mullanpur are cheaper and less constrained precisely because they are outside the UT — that is a regulatory arbitrage, and it is legitimate, but it should be named rather than presented as a bargain.",
    },
    {
      factor: "Architectural and heritage conformity",
      note: "Le Corbusier's frame and zoning controls govern facades and shopfront signage sector by sector, and the Capitol Complex is off limits entirely. Compliance work that does not exist in other cities is a real cost line here.",
    },
    {
      factor: "Illumination",
      note: "Frontlit, backlit and non-lit price separately. Chandigarh's evening retail and dining life is concentrated and late, and the winter is dark early, so unlit positions lose more of their working day than the same site would further south.",
    },
    {
      factor: "The Mohali inventory reset",
      note: "MC SAS Nagar's advertisement rights arrangement has required the successful bidder to remove existing unipole and billboard structures. That kind of reset moves availability and pricing sharply, and timing a plan around it is worth real money.",
    },
    {
      factor: "Season",
      note: "The Rose Festival in February, both Navratras at Mansa Devi, the IPL window at Mullanpur, and the November-to-February wedding season are when demand concentrates. Availability in a tendered market tightens faster than in an open one.",
    },
  ],

  compliance: {
    authority: "MC Chandigarh (UT) · MC SAS Nagar (Mohali) · Haryana bye-laws (Panchkula)",
    body: [
      "Chandigarh is governed by the Chandigarh Advertisement Control Order, 1954, and the position it takes is genuinely different from the rest of India: the default is prohibition. No hoarding, board, banner or advertisement of any sort may be put up on road berms. Legal inventory is what the Municipal Corporation has expressly tendered — published notices have covered e-auctions for defined pools of advertisement sites and unipoles, and display rights on unipoles and panels at named locations. Enforcement action against non-compliant display is documented, including against commercial operators who put boards on road berms.",
      "Layered on top of that is architectural control. Le Corbusier's architectural controls, frame controls and zoning controls govern facades and shopfront signage sector by sector, so signage conformity here is an architectural question as well as a licensing one. The Capitol Complex in Sector 1 is inscribed on the UNESCO World Heritage list and additionally protected under the Ancient Monuments and Archaeological Sites and Remains Act — treat it as zero commercial outdoor advertising.",
      "Mohali and Panchkula are separate. MC SAS Nagar runs Mohali's advertisement rights through its own e-auction on a design-build-operate-maintain-transfer basis, with the successful bidder required to remove existing unipole and billboard structures — an inventory reset worth understanding before contracting. Panchkula sits under the Haryana municipal advertisement bye-laws. Three authorities, one urban area, and a Tricity plan quoted as a single line item has not accounted for that.",
    ],
  },

  season: [
    {
      window: "February — the Rose Festival",
      note: "The city's signature public event at Sector 16, drawing a large regional crowd into a compact area over a few days. A distinctly Chandigarh moment that a national calendar will not contain.",
    },
    {
      window: "Both Navratras — Mata Mansa Devi",
      note: "Mass religious footfall in Panchkula twice a year, reaching a cross-income regional audience that no commercial corridor in the Tricity touches.",
    },
    {
      window: "March to May — IPL at Mullanpur",
      note: "Punjab Kings' home fixtures in New Chandigarh. Episodic but very large, and the reason inventory demand has shifted towards Mullanpur since 2024.",
    },
    {
      window: "November to February — wedding season",
      note: "The sustained commercial peak. Jewellery, apparel, hospitality and automotive all compete for a tendered inventory pool that does not expand to meet them.",
    },
  ],

  planning:
    "We plan Chandigarh by establishing what legally exists before discussing what would work, which is the reverse of the normal order and is specific to this market. Advertising is prohibited by default here and legal inventory is a tendered pool, so a Tricity plan is built from the permitted positions outwards rather than from a wish list inwards. After that, the jurisdictional split: how much sits in the UT, how much in Mohali and Panchkula, and how much on the Zirakpur and Kharar approaches where the constraints loosen. Transit usually carries more of the plan here than it would elsewhere, because it is the one format that crosses all three boundaries in a single negotiation.",

  faq: [
    {
      q: "Are hoardings allowed in Chandigarh?",
      a: "Not in the way they are elsewhere. Under the Chandigarh Advertisement Control Order, 1954, the default is prohibition — no hoarding, board, banner or advertisement of any sort on road berms. Legal inventory is the defined pool the Municipal Corporation has expressly tendered, principally unipoles and advertisement panels through e-auction. If a vendor is offering you a Chandigarh hoarding outside a tendered pool, that is the thing to ask about first.",
    },
    {
      q: "How much does outdoor advertising cost in Chandigarh?",
      a:
        "We do not publish a rate card. It depends on which jurisdiction, whether the position sits in a tendered pool, the format, the illumination and the duration — and in a tendered market, availability moves price more than negotiation does. We are not selling our own inventory, so a published rate would tell you what we would like to charge rather than what the market will take. Send the brief and the budget and you will get real numbers against real positions.",
    },
    {
      q: "Why do Chandigarh, Mohali and Panchkula need separate permissions?",
      a: "Because they are in three different territories. Chandigarh is a Union Territory with the strictest controls, Mohali is in Punjab under MC SAS Nagar, and Panchkula is in Haryana under the Haryana municipal bye-laws. They are physically contiguous and functionally one urban area, but they permit, price and enforce entirely separately. A Tricity plan quoted as one line item has skipped something material.",
    },
    {
      q: "Why is so much Tricity inventory in Zirakpur and Kharar?",
      a: "Because the Union Territory is so tightly controlled. Zirakpur, Kharar and Mullanpur sit outside the UT boundary and catch Chandigarh-bound traffic on the approaches, which is where large format is actually obtainable. It is a legitimate approach and often the right one — but it should be named for what it is rather than presented as a Chandigarh buy.",
    },
    {
      q: "Can I advertise near the Capitol Complex?",
      a: "No. The Capitol Complex in Sector 1 is inscribed on the UNESCO World Heritage list as part of the architectural work of Le Corbusier, and it is additionally protected under the Ancient Monuments and Archaeological Sites and Remains Act. It is zero commercial outdoor advertising, and any proposal including it has not been checked.",
    },
    {
      q: "Is bus advertising worth buying in the Tricity?",
      a: "More than in most Indian cities, and for a structural reason. With street advertising prohibited by default in the UT, transit carries a larger share of the available media. CTU tenders marketing rights covering buses, ISBTs, workshops and bus queue shelters, on multi-year terms across Tricity services, and full-bus branding is a documented live format. It is also the only format that reaches all three jurisdictions in a single negotiation.",
    },
    {
      q: "Do you own hoardings in Chandigarh?",
      a: "No. We plan, negotiate and run campaigns; we do not hold media. In a market where legal inventory is a tendered pool and the default is prohibition, that matters more than usual — we have no site we need to fill, and we can tell you plainly when a position someone is offering you should not be there.",
    },
    {
      q: "How many radio stations are there in Chandigarh?",
      a: "Four private FM stations — Mirchi 98.3, Big FM 92.7, Red FM 93.5 and MY FM 94.3 — all running Hindi and Punjabi-led mainstream formats with heavy Punjabi music weighting. That is a small commercial radio market for a city with this much disposable income. On Akashvani, sources conflict on the Chandigarh FM frequency, so we confirm it with the station rather than publishing a number we cannot stand behind.",
    },
    {
      q: "Which newspapers matter in Chandigarh?",
      a: "The Tribune above all — published here since 1881 and the establishment paper for the bureaucracy, judiciary, services and academia across the region. Its Hindi and Punjabi mastheads, Dainik Tribune and Punjabi Tribune, let one house cover all three languages. Ajit and Jagbani carry the mass Punjabi readership. Chandigarh is an unusually strong English market for its size because of the administrative population.",
    },
    {
      q: "Does shopfront signage need special approval in Chandigarh?",
      a: "It needs to conform architecturally, which is a requirement most other Indian cities do not have. Le Corbusier's architectural controls, frame controls and zoning controls govern facades and shopfront signage sector by sector, and Sector 17 and Sector 22 have documented controls attached to their built form. Retail signage that passes unremarked elsewhere can be non-compliant here on grounds unrelated to advertising law.",
    },
    {
      q: "How do I know my advertisement actually went up?",
      a: "Dated, geotagged photographs of every position at mounting and again during the cycle. In a market with active enforcement against non-compliant display, that record also tells you quickly if something has been removed — which you want to know in week two rather than at the end of the campaign.",
    },
    {
      q: "Can you plan Chandigarh alongside other markets?",
      a: "Yes, and given how constrained the UT is it often makes a plan work better. We plan outdoor across more than forty Indian cities, and Chandigarh sits naturally with Ludhiana, Jalandhar, Ambala and Shimla, with Amritsar and Patiala close behind. Where Chandigarh inventory is short, weight can be redistributed across the Punjab cluster rather than overpaying for a scarce tendered site.",
    },
  ],

  nearby: ["Ludhiana", "Delhi NCR", "Jaipur", "Lucknow"],
};
