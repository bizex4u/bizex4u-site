import type { City } from "./types";

/* Mumbai. Two facts that change what can honestly be sold here:

   1. Under the BMC Outdoor Advertisement Policy 2025, hoarding sites on
      the Western and Eastern Express Highways are not being renewed.
      Those were prime large-format inventory. The pool has shrunk.
   2. Mumbai Mirror went weekly in Dec 2020 and came back as a daily on
      15 June 2025. Any media kit made between those dates has it wrong
      in one direction or the other. Pune Mirror shut and did not return.

   The 40x40ft size ceiling is reported slightly differently by different
   trade sources, so it is described as a working ceiling to confirm,
   not quoted as gospel. */

export const mumbai: City = {
  slug: "mumbai",
  name: "Mumbai",
  alsoKnownAs: ["Bombay", "Mumbai Metropolitan Region"],
  state: "Maharashtra",
  region: "West",

  metaTitle:
    "Outdoor Advertising in Mumbai — Hoardings & Rail",
  metaDescription:
    "Hoarding, unipole, metro, suburban rail and transit advertising in Mumbai, current on the BMC Outdoor Advertisement Policy 2025.",

  h1Lead: "Outdoor advertising in",
  h1Accent: "Mumbai",
  heroLede:
    "Mumbai is a line, not a circle, which makes corridor buying unusually effective here. It is also a market where the large-format pool has just got smaller — the new BMC policy is not renewing hoarding sites on the Express Highways, and any plan written before that is planning against inventory that is going away.",

  market: [
    "Mumbai runs north to south on two spines — the Western Express Highway and the Eastern Express Highway — with the suburban railway doing the same job for a much larger number of people. That linearity is the market's defining feature. Almost no other Indian metro lets you reach so much of a city by holding so few corridors, and almost no other Indian metro punishes a scattered plan so severely.",
    "The single most important recent change is regulatory, not physical. Under the BMC Outdoor Advertisement Policy 2025, notified in late November 2025, hoarding sites on the Western and Eastern Express Highways are not being renewed. Those were historically the prime large-format positions in the city. The consequence is a genuinely smaller compliant pool and firmer pricing on what remains, and it pushes demand onto other corridors, onto transit and onto digital.",
    "The money sits in BKC, Lower Parel, Worli, Nariman Point, Bandra West and Powai. The volume sits on the suburban rail corridors and out through Thane, Navi Mumbai, Mira-Bhayandar and Kalyan-Dombivli. These are not the same audience and rarely the same campaign — the Bandra Kurla Complex crowd is the highest-value daily audience in India, and it is a small fraction of the people who move through Dadar in a morning.",
    "The physical map has moved a great deal in three years. Atal Setu opened in January 2024 and pulled traffic towards Navi Mumbai. Coastal Road Phase 1 opened in March 2024, running from Marine Lines to Worli and linking into the Bandra–Worli Sea Link, with Phase 2 north to Kandivali under construction. Metro Line 3, the fully underground Aqua line from Cuffe Parade to Aarey, became fully operational in October 2025 and serves BKC and the southern business core directly. Navi Mumbai International Airport began commercial operations in December 2025. Planning Mumbai from a 2023 view of the city is now measurably worse than planning from the current one.",
  ],

  crowdPlaces: [
    {
      place: "Dadar",
      note: "The only interchange between the Western and Central lines, with the flower and textile markets on top of it. Peaks from eight to eleven and six to nine every weekday, and reaches a level during Ganeshotsav that nothing else in the city matches.",
    },
    {
      place: "Chhatrapati Shivaji Maharaj Terminus",
      note: "Suburban and long-distance rail together in a building that is itself a tourist draw. Sustained weekday commuter volume with real dwell time on the concourses.",
    },
    {
      place: "Bandra Kurla Complex",
      note: "The financial and corporate district, and the highest-value daily audience in India. Weekday business hours, plus a separate identity as the city's large-event venue ground.",
    },
    {
      place: "Andheri",
      note: "A Western line interchange with metro connection, sitting beside Lokhandwala and the media and entertainment workforce. Commuter peaks plus weekend evening retail.",
    },
    {
      place: "Linking Road and Hill Road, Bandra",
      note: "Street retail with a young, aspirational and heavily female crowd. Weekend afternoons and evenings, and a pedestrian audience that browses rather than passes.",
    },
    {
      place: "Nariman Point and Fort",
      note: "The legacy central business district — corporate, legal and government. Concentrated in weekday business hours and almost empty at the weekend.",
    },
    {
      place: "Siddhivinayak Temple, Prabhadevi",
      note: "Religious footfall that crosses every income band, with a distinctive weekly rhythm — Tuesdays are the peak, then Angarki Chaturthi and Ganesh Chaturthi.",
    },
    {
      place: "Marine Drive and Wankhede Stadium",
      note: "The city's main promenade, busy every evening year-round and extraordinary on New Year's Eve, with episodic stadium crowds through the IPL window.",
    },
  ],

  formatGuide: [
    {
      title: "Hoarding advertising in Mumbai",
      kicker: "Large format",
      body: "Two things decide a Mumbai hoarding now, and neither is the rate. First, the Express Highway non-renewal has removed a large slice of what used to be the best inventory, so availability on the remaining arterials is genuinely tight. Second, the post-Ghatkopar structural regime is real: certified structural designs with wind-load calculations for coastal conditions, annual structural audits by licensed engineers, mandatory insurance, visible safety and permit plates, and advertisers held responsible in the event of a mishap. A cheap Mumbai hoarding is a question, not a bargain.",
    },
    {
      title: "Unipole and gantry advertising in Mumbai",
      kicker: "Arterial",
      body: "The 2025 policy expressly permits single-sided, back-to-back, V-shape and L-shape formats, gantries, unipoles and rooftop displays with structural certification. It expressly prohibits footpaths and pedestrian infrastructure, most building terraces without certification, anything obstructing traffic signs, road medians and green belts, and buffer zones around schools, hospitals, heritage sites and religious structures. That list is the real map of what can be bought in Mumbai, and it is more restrictive than most proposals admit.",
    },
    {
      title: "LED screen and DOOH advertising in Mumbai",
      kicker: "Digital",
      body: "Digital is where the 2025 policy is most specific and most workable. Luminance is capped at a three-to-one ratio against ambient, with automatic day and night brightness adjustment required; flicker, rapid transitions and animation are restricted; high-intensity screens are limited near intersections and signals; a night-time cut-off on an automatic timer is required; and an NOC from the Joint Commissioner of Police (Traffic) is mandatory for illuminated formats. In return, DOOH is actively encouraged in controlled environments — malls, multiplexes and forecourts. With large format shrinking, this is where a good deal of Mumbai demand is going.",
    },
    {
      title: "Mumbai suburban rail advertising",
      kicker: "Mass transit",
      body: "The format Mumbai does better than anywhere else in India and the one national plans still under-buy. The Western, Central and Harbour lines carry a daily commuting population on a scale no other Indian city approaches, and station and train branding here is a mature, heavily used medium rather than an experiment. It is a frequency proposition — the same faces twice a day, five days a week — which makes it excellent for building a message and poor for a single announcement.",
    },
    {
      title: "Mumbai Metro advertising",
      kicker: "Transit",
      body: "The network has changed shape fast. Line 3 — the fully underground Aqua line from Cuffe Parade to Aarey, 33.5 kilometres and 27 stations — became fully operational in October 2025 and serves BKC and the southern business core directly, which makes it the single most valuable corporate-audience transit corridor in the city. Lines 1, 2A, 7 and now parts of 2B and 9 cover the western and eastern suburbs. Station, concourse and in-train formats all exist, in an environment that is clean, controlled and monsoon-proof.",
    },
    {
      title: "Bus and street furniture advertising",
      kicker: "Street level",
      body: "BEST covers Mumbai proper, with NMMT in Navi Mumbai and TMT in Thane. Bus exteriors and back panels reach across the whole city rather than along one corridor, at the lowest cost per exposure of any format here. Note that the 2025 policy prohibits advertising on footpaths and pedestrian infrastructure, which narrows the street-level options relative to other Indian cities — buses do more of that work in Mumbai than shelters do.",
    },
    {
      title: "Mall, cinema and society media",
      kicker: "Retail and residential",
      body: "DOOH in malls and multiplexes is explicitly encouraged under the current policy, which makes organised retail one of the cleaner permission positions in the city. Residential society and lift media through the Bandra, Powai, Worli and Thane housing stock reaches high-income households at close range and, usefully, is entirely unaffected by both the Express Highway non-renewal and the monsoon.",
    },
    {
      title: "Ganeshotsav and event media",
      kicker: "Seasonal",
      body: "Ganesh Chaturthi is not a seasonal bump in Mumbai, it is the axis of the city's public year. Lalbaugcha Raja alone reshapes central Mumbai footfall for eleven days, and mandal association carries a public legitimacy that has no equivalent in most Indian markets. Availability tightens months ahead, so a Ganeshotsav plan decided in July is a plan that has already lost its best options.",
    },
  ],

  localMedia: {
    press: [
      {
        title: "The Times of India",
        language: "English",
        note: "The largest English daily in the city — young professionals, corporate readers and students, and the broadest single English buy.",
      },
      {
        title: "Hindustan Times",
        language: "English",
        note: "Mumbai edition, with an urban professional readership that overlaps but does not duplicate the Times.",
      },
      {
        title: "Mid-Day",
        language: "English",
        note: "A compact built for the commute, and read as one. Strong afternoon and travel-time readership that the broadsheets do not capture.",
      },
      {
        title: "Mumbai Mirror",
        language: "English",
        note: "Worth stating carefully, because half the media kits in circulation have it wrong: it went weekly in December 2020 and relaunched as a daily in June 2025. It is a daily now. Anything planned from a 2021-to-2024 dataset will misstate it.",
      },
      {
        title: "Maharashtra Times",
        language: "Marathi",
        note: "The most influential Marathi daily in Mumbai proper, reaching the urban Marathi middle class that English press does not.",
      },
      {
        title: "Loksatta",
        language: "Marathi",
        note: "Marathi, skewing educated and opinion-forming — a reader who reads rather than scans.",
      },
      {
        title: "Lokmat",
        language: "Marathi",
        note: "The Marathi mass daily, strongest across the Maharashtra districts and present in Mumbai. The right title when the campaign extends beyond the metro.",
      },
      {
        title: "Navbharat Times",
        language: "Hindi",
        note: "Reaches Mumbai's very large Hindi-speaking and North Indian population — a segment that a purely English-and-Marathi plan drops entirely.",
      },
      {
        title: "The Economic Times and Mint",
        language: "English",
        note: "Business dailies carry disproportionate weight here because Mumbai is the financial capital. The right vehicle for anything selling to a board.",
      },
    ],
    radio: [
      { station: "Radio Mirchi", frequency: "98.3", note: "Hindi mainstream, film-led — the broadest commercial station in the market." },
      { station: "Radio City", frequency: "91.1", note: "Hindi mass, broad daytime schedule." },
      { station: "Radio Nasha", frequency: "91.9", note: "Retro Hindi, reaching an older and more nostalgic listener." },
      { station: "Big FM", frequency: "92.7", note: "Hindi mass and retro." },
      { station: "Red FM", frequency: "93.5", note: "Hindi contemporary, humour-led, skewing younger." },
      { station: "Radio One", frequency: "94.3", note: "English-leaning playlist, reaching the corporate and expatriate audience." },
      { station: "Fever FM", frequency: "104.0", note: "Hindi contemporary, urban-leaning." },
      { station: "Ishq FM", frequency: "104.8", note: "Retro and romantic, older and more female-skewing." },
      { station: "Magic FM", frequency: "106.4", note: "Hindi retro." },
      {
        station: "Akashvani Mumbai",
        frequency: "FM Gold 100.1 · Vividh Bharati 102.8 · FM Rainbow 107.1",
        note: "Public service across three FM services, with reach beyond the metro core into the wider region.",
      },
    ],
    radioNote:
      "Mumbai radio is a long-drive-time market, because Mumbai commutes are long. The working windows stretch well past the usual seven-to-eleven and five-to-nine, particularly on the two Express Highways where a listener can be in a vehicle for over an hour each way. The language mix matters: Hindi carries the mass audience, Marathi reaches the settled local household, and English reaches the corporate belt. Frequencies and branding change, so we confirm what is on air at the point of buying.",
  },

  transit: {
    lede:
      "Mumbai has the deepest transit media market in India, and after October 2025 it has a fully operational underground metro line running directly through the corporate core.",
    modes: [
      {
        mode: "Mumbai suburban railway",
        note: "Western, Central and Harbour lines, operated by Western Railway and Central Railway. Station and train branding is a mature, heavily used medium here in a way it is not in most Indian cities, reaching a daily commuting population on a scale no other Indian city approaches.",
      },
      {
        mode: "Mumbai Metro",
        note: "Line 1 (Blue), 2A, 2B, Line 3 (Aqua — Cuffe Parade to Aarey, fully underground, fully operational since October 2025 and serving BKC directly), Line 7 (Red) and Line 9. Station, concourse and in-train formats in a controlled, monsoon-proof environment.",
      },
      {
        mode: "BEST, NMMT and TMT bus",
        note: "BEST covers Mumbai proper, NMMT Navi Mumbai and TMT Thane. Bus exteriors and back panels reach across the whole city at the lowest cost per exposure of any format. We could not find a single publicly documented exclusive concessionaire across BEST or the suburban network — these run through several contracted agencies, and we say so rather than implying a relationship.",
      },
      {
        mode: "CSMIA and Navi Mumbai International",
        note: "Chhatrapati Shivaji Maharaj International with Terminals 1 and 2, and now Navi Mumbai International, which began commercial operations in December 2025 and has since added international routes. Two airport catchments where there was one.",
      },
    ],
  },

  costDrivers: [
    {
      factor: "Scarcity on the arterials",
      note: "The most consequential variable in Mumbai right now. With Express Highway hoarding sites not being renewed, the compliant large-format pool has shrunk and pricing on what remains has firmed. This is a supply story, not a negotiation story.",
    },
    {
      factor: "Structural compliance",
      note: "Certified structural design with coastal wind-load calculations, annual audits by licensed engineers, insurance and visible safety plates all carry real cost — and the advertiser is held responsible in a mishap. A site priced well below its neighbours is worth asking hard questions about.",
    },
    {
      factor: "Which corridor and which side of the city",
      note: "BKC, Lower Parel, Worli and Nariman Point buy the highest-value audience in India. The suburban rail corridors and the Thane, Navi Mumbai and Kalyan belts buy volume at a different income level. You are paying for the audience, not the traffic count.",
    },
    {
      factor: "Digital specification",
      note: "The three-to-one luminance cap, automatic day and night adjustment, restrictions on flicker and animation, night-time cut-off, and the mandatory traffic police NOC for illuminated formats are all specifications with cost attached to meeting them properly.",
    },
    {
      factor: "Ganeshotsav and the monsoon",
      note: "The two dates that move Mumbai pricing. Ganesh Chaturthi compresses enormous demand into eleven days. The June-to-September monsoon does the opposite — vinyl damage, wind loading and installation restrictions are genuine planning constraints, and any budget running through it needs a maintenance and replacement line.",
    },
    {
      factor: "Permit horizon",
      note: "Under the current policy, permits lapse three months after expiry rather than six. Renewal timing is tighter than it used to be, and a lapse is a site that comes down.",
    },
  ],

  compliance: {
    authority: "Brihanmumbai Municipal Corporation (BMC)",
    body: [
      "Mumbai is governed by the BMC Outdoor Advertisement Policy 2025, announced in late November 2025 — the first major overhaul since the Ghatkopar hoarding collapse, and the most detailed municipal advertising framework in the country. BMC licenses through a single-window online portal, and permits now lapse three months after expiry rather than six.",
      "The structural regime is the heart of it, and it is the part that protects an advertiser as much as it constrains one: certified structural designs with wind-load calculations for coastal conditions, annual structural audits by licensed engineers, mandatory insurance, visible safety and permit plates, seismic and environmental compliance, NOCs from the electricity utility for sites near high-tension lines, formal blacklisting for repeat violators, and advertisers held responsible in the event of a mishap. That last clause is why we confirm structural documentation before recommending a position rather than after.",
      "Two honest caveats. The policy sets a uniform citywide size ceiling around twelve metres by twelve metres per hoarding face, but trade sources characterise the rule slightly differently and we have not read the gazetted text ourselves — treat forty by forty feet as the working ceiling and confirm before committing to it. And reporting two years after the collapse notes that the policy revamp has not eliminated illegal hoardings from the city. Enforcement remains the gap, which is precisely why the permission position on a specific structure is worth checking rather than assuming.",
    ],
  },

  season: [
    {
      window: "August to September — Ganesh Chaturthi",
      note: "The axis of Mumbai's public year. Eleven days that reshape central-city footfall entirely, with mandal association carrying a legitimacy no other window offers. Availability tightens months ahead.",
    },
    {
      window: "October to November — Navratri and Diwali",
      note: "The retail peak, running straight on from Ganeshotsav. Organised retail and durables at their heaviest, and the most competitive period for mall and digital inventory.",
    },
    {
      window: "June to September — the monsoon",
      note: "The genuine constraint. Vinyl damage, wind loading and installation restrictions are real, not theoretical. Any plan running through it needs a maintenance provision; transit and indoor formats become disproportionately attractive.",
    },
    {
      window: "December to January — the season",
      note: "Marine Drive on New Year's Eve, the winter events calendar and comfortable weather for outdoor. A long, sustained window of high discretionary footfall.",
    },
  ],

  planning:
    "We plan Mumbai along its two spines and its railway, because that is how the city actually moves. The first decision is how much of the plan belongs in transit rather than on the street — in this market that is a serious question, not a footnote, and with Express Highway large format going away it is becoming more serious. The second is the split between the high-value southern and BKC corridor and the volume of the suburban belts. The third is compliance, which in Mumbai means structural documentation and a current permit, and which we settle before a position enters a plan.",

  faq: [
    {
      q: "How much does hoarding advertising cost in Mumbai?",
      a:
        "We do not publish a rate card. It depends on the corridor, the size, the illumination, the duration and — increasingly — on scarcity, because the compliant large-format pool has shrunk under the 2025 policy. We are not selling our own inventory, so a published rate would tell you what we would like to charge rather than what the market will take; we negotiate against several vendors on every plan. Send the brief and the budget and you will get real numbers against real positions.",
    },
    {
      q: "Are hoardings still allowed on the Western and Eastern Express Highways?",
      a: "This is the question to ask, and the answer has changed. Under the BMC Outdoor Advertisement Policy 2025, hoarding sites on the Express Highways are not being renewed, per the highway authority directives. Those were historically prime inventory. If a proposal is offering you Express Highway hoardings on a multi-year horizon, ask what happens at renewal — because the honest answer is that the pool is shrinking and demand is moving to other corridors, to transit and to digital.",
    },
    {
      q: "What are the rules for LED and digital screens in Mumbai?",
      a: "Specific, and worth knowing before anyone quotes you a site. Luminance is capped at a three-to-one ratio against ambient with automatic day and night adjustment; flicker, rapid transitions and animation are restricted; high-intensity screens are limited near intersections and signals; a night-time cut-off on an automatic timer is required; and an NOC from the Joint Commissioner of Police (Traffic) is mandatory for illuminated formats. In exchange, DOOH is actively encouraged in controlled environments like malls and multiplexes.",
    },
    {
      q: "Who is liable if a hoarding fails in Mumbai?",
      a: "Under the current policy, advertisers are held responsible in a mishap alongside the media owner. That is not a technicality — it is the direct consequence of the Ghatkopar collapse, and it is the reason we confirm structural certification, the annual audit and insurance before a position enters a plan rather than treating those as the vendor's problem. A brand's name on an uncertified structure is a brand's exposure.",
    },
    {
      q: "Which areas of Mumbai are best for outdoor advertising?",
      a: "BKC, Lower Parel, Worli and Nariman Point reach the highest-value corporate population in India. Bandra's Linking Road and the western suburbs reach young aspirational retail. Dadar, Andheri and the suburban stations reach genuine mass volume. Thane, Navi Mumbai and Kalyan-Dombivli reach the outer residential market at a different price point. Which of those is right depends on the audience, and we would rather establish that first than lead with a location list.",
    },
    {
      q: "Do you own hoardings in Mumbai?",
      a: "No. We plan, negotiate and run campaigns; we do not hold media. In a market where advertisers carry liability for structural failure and where the compliant pool is shrinking, that independence matters more than usual — we have no site we need to defend and no reason to recommend one whose paperwork does not stand up.",
    },
    {
      q: "Is suburban rail advertising worth buying in Mumbai?",
      a: "It is the format we most often argue for and the one national plans most often under-buy here. The Western, Central and Harbour lines carry a daily commuting population no other Indian city approaches, station and train branding is a mature medium, and it is entirely unaffected by the monsoon. It is a frequency proposition — the same faces twice a day — so it builds a message well and announces a one-week offer badly.",
    },
    {
      q: "How should a brand approach Ganeshotsav in Mumbai?",
      a: "Deliberately, and early. It is not a seasonal bump, it is the axis of the city's public year, and mandal association carries a legitimacy that no ordinary sponsorship has. Lalbaugcha Raja alone reshapes central Mumbai footfall for eleven days. Availability tightens months ahead, so a plan decided in July has usually already lost its best options.",
    },
    {
      q: "How does the monsoon affect an outdoor campaign in Mumbai?",
      a: "More than most proposals admit. Vinyl damage, wind loading and installation restrictions between June and September are real constraints, not caveats. We build a maintenance and replacement provision into any plan running through that window, and we normally shift weight towards transit, mall and indoor formats — which is not a compromise here so much as the right answer for those months.",
    },
    {
      q: "How do I know my advertisement actually went up?",
      a: "Dated, geotagged photographs of every position at mounting and again during the cycle. In Mumbai this does double duty: it proves delivery, and it flags monsoon damage or an enforcement removal while there is still time to fix it rather than at the end of the campaign.",
    },
    {
      q: "How is outdoor advertising measured in Mumbai?",
      a: "With more caveats than the industry usually offers. Licensed audience research exists and we will show you the current figures at planning, but we will not publish them on a website and we will not present a modelled impression count as though it were a measurement. What we can show directly is proof of execution, the catchment logic behind every position, and movement in the outcome the campaign was bought for.",
    },
    {
      q: "Can you plan Mumbai alongside other markets?",
      a: "Yes, and Mumbai is usually the anchor of a western India plan rather than a standalone. We plan outdoor across 39 Indian cities, and it sits naturally with Pune, Nashik, Surat and Ahmedabad. Marathi creative travels across the state without adaptation, and negotiating the cluster together changes what is achievable on both price and position.",
    },
  ],

  nearby: ["Pune", "Ahmedabad", "Surat", "Nagpur"],
};
