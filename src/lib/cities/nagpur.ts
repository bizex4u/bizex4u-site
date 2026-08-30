import type { City } from "./types";

/* Nagpur. Two things worth carrying that no generic page has:

   1. Every private FM transmitter in the city radiates from the same
      mast on Seminary Hills. Coverage differences between stations are
      smaller than a rate card implies — the difference is the audience,
      not the footprint.
   2. NMC receives 50% of Aapli Bus advertising revenue under a publicly
      documented arrangement. A rare piece of transparency and worth
      knowing before negotiating bus media here.

   Deekshabhoomi on Dhamma Chakra Pravartan Din is the single largest
   dated footfall event in the city, and Marbat is a ~135-year-old
   Nagpur-only procession. Neither appears on a national calendar. */

export const nagpur: City = {
  slug: "nagpur",
  name: "Nagpur",
  state: "Maharashtra",
  region: "West",

  metaTitle:
    "Outdoor Advertising in Nagpur — Hoardings & Metro",
  metaDescription:
    "Sky-sign, hoarding, metro and bus advertising in Nagpur, planned from catchment — and current on the NMC sky-sign licensing regime.",

  h1Lead: "Outdoor advertising in",
  h1Accent: "Nagpur",
  heroLede:
    "Nagpur is central India's logistics hinge and it has just become a great deal better connected. Two metro lines, a fully open Mumbai expressway and a new airport concession have all landed within three years — and the media map has not caught up with any of them.",

  market: [
    "Nagpur is the geographic centre of India and increasingly behaves like a distribution node rather than a regional capital. The Samruddhi Mahamarg opened along its full seven hundred kilometres in June 2025, cutting the Mumbai run from roughly sixteen hours to around eight. That repositions the city commercially — for logistics, warehousing, FMCG distribution and anything with a national supply chain, Nagpur is now closer to the western coast than its map position suggests, and the arterial approaches carry a different kind of traffic because of it.",
    "Inside the city, Wardha Road is the premium corridor: the airport, the MIHAN special economic zone, the Jamtha stadium and the newer gated housing all sit along it. It carries the highest-yield inventory and the lowest raw volume. The volume is elsewhere — Sitabuldi Main Road, Central Avenue, Kamptee Road and Itwari, older and denser and considerably cheaper by format value. Money sits in Dharampeth, Ramdaspeth, Civil Lines and along Wardha Road.",
    "The metro has been running since December 2022 and covers more of the city than most people outside Nagpur assume — roughly thirty-eight kilometres across two lines. The Orange Line runs the Wardha Road axis from Automotive Square to Khapri across twenty-two stations; the Aqua Line runs from Lokmanya Nagar to Prajapati Nagar across twenty; they interchange at Sitabuldi, which makes that node the single most valuable transit position in the city. Phase 2 has an approved detailed report but no confirmed construction timeline.",
    "The airport changed hands in December 2025, moving to a long-term concession, which means the terminal media arrangement is being reset rather than continuing — a moment when early positions are usually worth more than late ones. And the city's calendar has two dates a national plan will never contain: Dhamma Chakra Pravartan Din at Deekshabhoomi, which is the largest dated footfall event Nagpur produces, and Marbat, a roughly hundred-and-thirty-five-year-old effigy procession that exists nowhere else in India.",
  ],

  crowdPlaces: [
    {
      place: "Sitabuldi Main Road",
      note: "The city's principal retail spine and a mass-market apparel and footwear crowd, peaking in the evenings and through Diwali and the wedding season. Sitabuldi is also the metro's two-line interchange, which stacks a transit audience on top of a retail one.",
    },
    {
      place: "Itwari",
      note: "The old-city wholesale cluster — cloth, grain, hardware. Trader and bulk-buyer traffic peaking on weekday mornings, and a genuinely different audience from anything on Wardha Road.",
    },
    {
      place: "Dharampeth and Variety Square",
      note: "Upmarket retail and dining serving the affluent catchment. Evening and weekend peaks, with a settled higher-income household audience.",
    },
    {
      place: "Sadar",
      note: "The cantonment-era retail and dining strip, drawing a mid-to-upper-income browsing crowd in the evenings. Older and more established than the newer commercial nodes.",
    },
    {
      place: "Nagpur Junction",
      note: "A major Central Railway interchange on both the Delhi–Chennai and Mumbai–Howrah trunk routes. Continuous transit volume with genuine dwell — the most consistently busy environment in the city.",
    },
    {
      place: "Deekshabhoomi",
      note: "The Ambedkarite Buddhist site, and the location of the single largest dated footfall event in Nagpur — Dhamma Chakra Pravartan Din at Dussehra draws very large pilgrim crowds from across the country.",
    },
    {
      place: "Empress City",
      note: "The organised retail and multiplex anchor, with weekend and holiday peaks and a shopper already in a spending frame of mind.",
    },
    {
      place: "VCA Stadium, Jamtha",
      note: "The international cricket venue on Wardha Road. Episodic rather than continuous — quiet most of the year, then very large crowds on match days.",
    },
  ],

  formatGuide: [
    {
      title: "Sky-sign and hoarding advertising in Nagpur",
      kicker: "Large format",
      body: "Nagpur is licensed differently from most Indian cities and it is worth understanding the vocabulary. NMC runs a Sky-Sign Licence department with a published schedule of rates, and its permitted categories are explicit: non-illuminated sky-signs, wall advertisements, vehicle-carried boards, sandwich boards, and neon, LED and slide signage. Rates are charged incrementally per square metre rather than by a capped hoarding size, which is an unusual and quite transparent structure. Breach carries a daily penalty plus composition fees on late payment.",
    },
    {
      title: "Unipole advertising in Nagpur",
      kicker: "Arterial",
      body: "The arterial positions that matter are on Wardha Road towards the airport and MIHAN, on the Kamptee Road and Amravati Road approaches, and on the expressway feeders. Wardha Road carries the money; the older arterials carry the volume. One live caution: the Maharashtra state hoarding framework tightened after the 2024 Ghatkopar collapse, and while we could not confirm exactly which of its provisions bind NMC, structural documentation is worth asking about here as it is everywhere in the state.",
    },
    {
      title: "Wall advertising and street-level formats",
      kicker: "Street level",
      body: "Wall advertisements are an expressly named permitted category under the NMC schedule, which makes them a cleaner permission position here than in cities where they sit in a grey area. They work particularly well in the dense older belts — Itwari, Central Avenue, Kamptee Road — where the buildings are close, the sightlines are short and a large elevated structure would underdeliver anyway.",
    },
    {
      title: "Nagpur Metro advertising",
      kicker: "Transit",
      body: "Roughly thirty-eight kilometres across two operational lines and forty-two stations, running since December 2022. The Orange Line covers the Wardha Road axis from Automotive Square to Khapri; the Aqua Line runs east–west from Lokmanya Nagar to Prajapati Nagar; they interchange at Sitabuldi, which sits directly on the city's main retail street. That interchange is the highest-value transit node in Nagpur by some distance, and station, concourse and in-train formats all exist.",
    },
    {
      title: "Aapli Bus advertising in Nagpur",
      kicker: "Street level",
      body: "Worth knowing before you negotiate. Aapli Bus is run by a municipal special purpose vehicle with a fleet of around five hundred and forty buses on a purchase-operate-transfer arrangement, and the documented terms include NMC receiving half the bus advertising revenue. That is a rare piece of public transparency in Indian transit media, and it tells you where the commercial control actually sits. Bus exteriors and back panels reach the whole city rather than one corridor, at the lowest cost per exposure available here.",
    },
    {
      title: "LED screen and DOOH advertising in Nagpur",
      kicker: "Digital",
      body: "Neon, LED and slide signage are expressly named categories in the NMC schedule and charged per unit area, so the permission route is documented rather than ambiguous. Digital concentrates around Sitabuldi, Dharampeth and the organised retail. As anywhere, the honest question is whether the daypart or rotation is genuinely being used — where a static position would deliver more for the same money on a network this size, we will say so.",
    },
    {
      title: "Pole kiosks and hyperlocal media",
      kicker: "Catchment",
      body: "Dharampeth, Ramdaspeth, Civil Lines, Manish Nagar and the Wardha Road residential belt each behave as their own trade area, and a run of street-level positions along the approach roads is how one of them gets covered properly. For retail, healthcare, education and anything with a defined catchment, this normally outperforms a single arterial position at the same spend.",
    },
    {
      title: "Festival and event media",
      kicker: "Seasonal",
      body: "Two Nagpur-specific windows that a national calendar will miss entirely. Dhamma Chakra Pravartan Din at Deekshabhoomi, at Dussehra, is the largest dated crowd the city produces and draws pilgrims from across India. Marbat, at Tari Pornima, is a roughly hundred-and-thirty-five-year-old effigy procession unique to this city. Add the orange harvest season, which brings its own regional trade traffic. Planning around these is worth more here than a rate negotiation.",
    },
  ],

  localMedia: {
    press: [
      {
        title: "Lokmat",
        language: "Marathi",
        note: "Founded in 1971 and headquartered in Nagpur — the largest-read Marathi daily, with broad mass-market readership across Maharashtra. Being in it carries a Vidarbha credibility that no national title transfers.",
      },
      {
        title: "Lokmat Samachar",
        language: "Hindi",
        note: "The same house's Hindi masthead with a Nagpur edition, reaching the Hindi-reading population across the Maharashtra, Madhya Pradesh and Chhattisgarh belt that meets here.",
      },
      {
        title: "Lokmat Times",
        language: "English",
        note: "The group's English title. Between the three, one house covers Marathi, Hindi and English in a single negotiation — which is unusual and genuinely useful in a market this trilingual.",
      },
      {
        title: "The Hitavada",
        language: "English",
        note: "Founded in Nagpur in 1911 and the established Central India English broadsheet, with a Vidarbha supplement and editions reaching Jabalpur, Raipur and Bhopal. The English title with genuine local identity here.",
      },
      {
        title: "Nava Bharat",
        language: "Hindi",
        note: "Founded in 1934, originally in Nagpur, with Hindi readership across the Maharashtra, Madhya Pradesh and Chhattisgarh belt — the right title when a campaign runs across the central India cluster rather than only the city.",
      },
    ],
    radio: [
      { station: "Radio Mirchi", frequency: "98.3", note: "Mainstream contemporary — the broadest single commercial station in the city." },
      { station: "Radio City", frequency: "91.1", note: "Mass-appeal daytime schedule." },
      { station: "Mirchi Love", frequency: "91.9", note: "Retro and romantic, reaching an older listener than 98.3." },
      { station: "Big FM", frequency: "92.7", note: "Mass and retro." },
      { station: "Red FM", frequency: "93.5", note: "Contemporary and humour-led, skewing younger." },
      { station: "MY FM", frequency: "94.3", note: "Mass appeal, from the Dainik Bhaskar stable." },
      {
        station: "Akashvani Nagpur",
        frequency: "Vividh Bharati 100.6",
        note: "Public service, with reach into the Vidarbha districts where the commercial stations thin out.",
      },
    ],
    radioNote:
      "One structural fact about Nagpur radio that a rate card will not tell you: every private transmitter in the city radiates from the same mast on Seminary Hills. Coverage differences between stations are therefore much smaller than a coverage map implies — the difference between them is the audience and the schedule, not the footprint, and anyone selling you a station on reach rather than on listener profile is selling you the wrong thing. Nagpur is a Marathi and Hindi market and the balance varies by station and daypart; we confirm each station's current language split and schedule at buying rather than publishing a claim we cannot stand behind.",
  },

  transit: {
    lede:
      "Nagpur has two operational metro lines and an unusually transparent bus advertising arrangement — and an airport whose media rights have just changed hands.",
    modes: [
      {
        mode: "Nagpur Metro",
        note: "Roughly thirty-eight kilometres, two lines and forty-two stations, running since December 2022. The Orange Line covers the Wardha Road axis, the Aqua Line runs east–west, and they interchange at Sitabuldi — directly on the main retail street, which makes it the premium transit node in the city.",
      },
      {
        mode: "Aapli Bus",
        note: "Run by a municipal special purpose vehicle, around five hundred and forty buses on a purchase-operate-transfer arrangement. The documented terms include the operator paying NMC a fixed per-vehicle royalty and NMC receiving half of bus advertising revenue — a rare piece of public transparency about where commercial control sits.",
      },
      {
        mode: "Nagpur Junction",
        note: "A major Central Railway interchange on both the Delhi–Chennai and Mumbai–Howrah trunk routes. Continuous outstation volume with real waiting time.",
      },
      {
        mode: "Dr. Babasaheb Ambedkar International Airport",
        note: "Moved to a long-term private concession in December 2025, which means the terminal media arrangement is being reset rather than rolled forward. Worth re-checking who currently holds the rights, and worth taking a position early if the answer suits you.",
      },
    ],
  },

  costDrivers: [
    {
      factor: "Wardha Road versus the old city",
      note: "Wardha Road carries the highest yield and the lowest raw volume; Sitabuldi, Central Avenue, Kamptee Road and Itwari carry dense footfall at a much lower format value. You are buying household income on one and headcount on the other.",
    },
    {
      factor: "Area, not size band",
      note: "NMC charges incrementally per square metre rather than by capped size bands, which is unusual and quite transparent. It means a marginal increase in area is a marginal increase in cost rather than a jump to the next tier — useful to know when sizing creative.",
    },
    {
      factor: "Illumination category",
      note: "The schedule separates non-illuminated sky-signs from neon, LED and slide signage as distinct categories at different rates. Choosing the category is a pricing decision as much as a creative one.",
    },
    {
      factor: "Licence fee movement",
      note: "NMC revised hoarding licence fees after the fact in late 2024, which advertisers contested, and further increases have been under consideration. Fees here are an active moving target rather than a settled number, and a long booking should account for that.",
    },
    {
      factor: "The event calendar",
      note: "Dhamma Chakra Pravartan Din at Deekshabhoomi and Marbat both concentrate demand into single dates that no national calendar flags. Add Ganesh, Diwali and the orange harvest trade season.",
    },
    {
      factor: "Production and mounting",
      note: "Printing, material, mounting and re-mounting after the monsoon, quoted separately from media so the two are never confused.",
    },
  ],

  compliance: {
    authority: "Nagpur Municipal Corporation — Sky-Sign Licence Department",
    body: [
      "Nagpur is licensed through NMC's Sky-Sign Licence department, which runs a dedicated portal and publishes its schedule of rates openly — a level of transparency that most Indian municipal advertising regimes do not offer, and one that makes it considerably easier to tell a legitimate quote from an inflated one. The permitted categories are explicit: non-illuminated sky-signs, wall advertisements, vehicle-carried boards, sandwich boards, and neon, LED and slide signage, charged incrementally per square metre. Breach carries a daily penalty for each day it continues, plus composition fees for late permit payment.",
      "The state layer is less settled. Maharashtra's hoarding framework tightened after the 2024 Ghatkopar collapse in Mumbai, with reported size caps and height norms and the civic body chief as final approving authority alongside an independent licensing agency. We could not verify from the sources available whether the structural-audit and identification requirements in that framework bind NMC specifically, so we do not present them as settled here — we confirm against the state order and with the corporation before relying on them.",
      "One practical note on cost: NMC revised hoarding licence fees retrospectively in late 2024, which advertisers contested, and further fee increases have been under consideration. Fees in this market move, and a long booking should be structured with that in mind rather than assuming today's schedule holds.",
    ],
  },

  season: [
    {
      window: "Dussehra — Dhamma Chakra Pravartan Din",
      note: "The single largest dated footfall event in Nagpur. Deekshabhoomi draws very large pilgrim crowds from across India, and nothing else in the city's calendar approaches it for concentrated attention.",
    },
    {
      window: "Tari Pornima — Marbat",
      note: "A roughly hundred-and-thirty-five-year-old effigy procession that exists nowhere else in India. A distinctly Nagpuri moment, and one a national plan will simply not contain.",
    },
    {
      window: "August to November — Ganesh through Diwali",
      note: "The Maharashtra festival run and the retail peak, with organised retail and durables at their heaviest and Sitabuldi at its busiest.",
    },
    {
      window: "The orange harvest season",
      note: "Vidarbha's own trade rhythm, bringing regional buyer traffic into the city on a cycle unrelated to the consumer calendar.",
    },
  ],

  planning:
    "We plan Nagpur as a central India node rather than only as a city, because since the Samruddhi Mahamarg opened that is increasingly what it is. The first question is whether the campaign is city-facing or regional, since the arterial approaches now carry a genuinely different audience from three years ago. The second is the split between Wardha Road's yield and the old city's volume. The third is transit, which here is unusually good value — two metro lines through the retail core, and a bus network whose commercial terms are a matter of public record.",

  faq: [
    {
      q: "How much does hoarding advertising cost in Nagpur?",
      a:
        "We do not publish a rate card of our own; we do not sell inventory, so a published rate would tell you what we would like to charge rather than what the market will take. NMC publishes a schedule of rates for sky-sign licences openly, charged per square metre by category — which is more transparency than most Indian cities offer. What that does not tell you is the media owner's price for a specific position, which depends on the corridor, the size, the illumination category and the duration. Send the brief and you will get real numbers.",
    },
    {
      q: "What advertising formats are permitted in Nagpur?",
      a: "The NMC sky-sign schedule names them explicitly: non-illuminated sky-signs, wall advertisements, vehicle-carried boards, sandwich boards, and neon, LED and slide signage. Charges are incremental per square metre rather than by capped size bands, and breach carries a daily penalty plus composition fees on late payment. The explicit list is genuinely helpful — it removes ambiguity that exists in most Indian markets.",
    },
    {
      q: "Which areas of Nagpur are best for outdoor advertising?",
      a: "Wardha Road towards the airport and MIHAN carries the highest yield and the affluent, vehicular catchment. Sitabuldi Main Road, Central Avenue, Kamptee Road and Itwari carry the volume at a very different income level. Dharampeth, Ramdaspeth and Civil Lines reach the settled affluent household. Sitabuldi is unusual in carrying both retail footfall and the metro interchange in one place. Which of those is right depends on the audience.",
    },
    {
      q: "Is Nagpur Metro advertising worth buying?",
      a: "For a frequency objective, yes, and it is better developed than most people outside the city expect — roughly thirty-eight kilometres, two lines and forty-two stations running since December 2022. The Sitabuldi interchange sits directly on the main retail street, which makes it the premium transit position in the city. It reaches the same commuters repeatedly, so it builds a message well and announces a short offer badly.",
    },
    {
      q: "How does bus advertising work in Nagpur?",
      a: "Unusually transparently, which is worth knowing before you negotiate. Aapli Bus runs around five hundred and forty buses through a municipal special purpose vehicle on a purchase-operate-transfer arrangement, and the documented terms include NMC receiving half of the bus advertising revenue. That tells you where commercial control actually sits. Bus exteriors and back panels reach the whole city rather than one corridor at the lowest cost per exposure available here.",
    },
    {
      q: "Do you own hoardings in Nagpur?",
      a: "No. We plan, negotiate and run campaigns; we do not hold media. That means no inventory to push and no incentive to recommend a position because it is empty on our books — and in a market where licence fees have moved retrospectively, it means we can structure a booking to protect you rather than to protect a site.",
    },
    {
      q: "Which newspapers matter in Nagpur?",
      a: "Lokmat above all — founded here in 1971 and the largest-read Marathi daily, with a Vidarbha standing that no national title transfers. Usefully, the same house publishes Lokmat Samachar in Hindi and Lokmat Times in English, so all three languages can be bought in one negotiation. The Hitavada, founded in Nagpur in 1911, is the established Central India English broadsheet. Nava Bharat carries the Hindi belt across Maharashtra, Madhya Pradesh and Chhattisgarh.",
    },
    {
      q: "Do the radio stations in Nagpur have different coverage?",
      a: "Barely, and this is worth knowing. Every private FM transmitter in the city radiates from the same mast on Seminary Hills, so coverage differences between stations are far smaller than a coverage map suggests. The difference between them is the audience profile and the schedule, not the footprint. Anyone selling you a Nagpur station on reach rather than on listener profile is selling you the wrong argument.",
    },
    {
      q: "When is the best time to advertise in Nagpur?",
      a: "Two dates matter here that no national calendar carries. Dhamma Chakra Pravartan Din at Deekshabhoomi, at Dussehra, is the largest dated crowd the city produces. Marbat at Tari Pornima is a hundred-and-thirty-five-year-old procession unique to Nagpur. Beyond those, the Ganesh-to-Diwali run is the retail peak and the orange harvest brings regional trade traffic on its own rhythm.",
    },
    {
      q: "Has the Samruddhi expressway changed advertising in Nagpur?",
      a: "It has changed the audience on the approaches. The full seven-hundred-kilometre Mumbai–Nagpur corridor opened in June 2025 and cut the run from roughly sixteen hours to around eight, which repositions Nagpur as a logistics and distribution node. For campaigns with a national supply chain or a regional footprint, the arterial approaches now carry a meaningfully different traffic mix than they did three years ago, and that is worth planning for deliberately.",
    },
    {
      q: "How do I know my advertisement actually went up?",
      a: "Dated, geotagged photographs of every position at mounting and again during the cycle. Monitoring is the part of outdoor most often skipped and most often wrong, and in a market with an active enforcement schedule and daily-accruing penalties it also tells you quickly if a site has a compliance problem.",
    },
    {
      q: "Can you plan Nagpur alongside other markets?",
      a: "Yes. We plan outdoor across 39 Indian cities, and Nagpur sits naturally with Amravati, Wardha, Chandrapur and Raipur for the Vidarbha and central India belt, and with Pune and Mumbai for a Maharashtra plan. Marathi creative travels across the state without adaptation, and the Hindi belt to the north and east is reachable from the same city — which is part of why Nagpur works as a regional base.",
    },
  ],

  nearby: ["Pune", "Mumbai", "Hyderabad", "Kolkata"],
};
