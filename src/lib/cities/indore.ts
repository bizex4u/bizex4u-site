import type { City } from "./types";

/* Indore. Four private FM stations, not six — no Radio City here, and
   the short list is correct rather than a truncated PDF. Same four
   frequencies as Bhopal; the AIR frequency is what differs.

   The metro line is a 6 km stub through the low-density Super Corridor,
   NOT through the retail core. That is the opposite of Bhopal's, where
   the line runs through MP Nagar. Anyone selling Indore metro media as
   a core-city proposition has not looked at the route.

   Nai Dunia is alive and published by Jagran Prakashan. It is often
   assumed dead. Free Press status unverified, so not listed.

   No consolidated IMC outdoor advertising policy is publicly available.
   That is a finding, not a research failure — say so on the page. */

export const indore: City = {
  slug: "indore",
  name: "Indore",
  state: "Madhya Pradesh",
  region: "Central",

  metaTitle: "Outdoor Advertising in Indore — Hoardings, AB Road & Bus Media",
  metaDescription:
    "Hoarding, unipole and bus advertising in Indore, planned from catchment rather than from a site list — and honest about what the metro does and does not yet reach.",

  h1Lead: "Outdoor advertising in",
  h1Accent: "Indore",
  heroLede:
    "Indore is the commercial capital of Madhya Pradesh and it runs on one road. AB Road carries the money, the traffic and the contest — and the metro that opened in 2025 does not go anywhere near it.",

  market: [
    "Indore is the commercial engine of Madhya Pradesh and it is unusually concentrated. AB Road — the old Agra–Bombay Road — is the undisputed spine, with Palasia, Geeta Bhavan and Vijay Nagar all hanging off it, and it is the single most contested outdoor corridor in the city. A plan here that gets AB Road wrong has got Indore wrong, and a plan that buys only AB Road has bought a city considerably smaller than the real one.",
    "The split is the familiar old-city-and-new-city one, with the Ring Road and MR-10 as the seam. Money sits in Vijay Nagar, Scheme 54, South Tukoganj and along the Super Corridor. Volume sits in Rajwada, MG Road, Chhawni and Ranipura — dense, older, pedestrian, and reaching a very different household. Both halves are genuinely commercial here in a way they are not in every Indian city, because Indore's trading economy is old and deep.",
    "The metro needs saying plainly because it is easy to mis-sell. Only a six-kilometre priority stretch is operational, opened in May 2025, and the remaining twenty-seven kilometres of the Yellow Line have a completion horizon around 2030. Worse for advertisers, the operational stub runs through the low-density Super Corridor rather than through the retail core. For now Indore's metro is a construction-disruption story and a future opportunity, not a media platform — which is precisely the opposite of the position in Bhopal.",
    "One thing about this city genuinely affects outdoor and is worth stating: Indore's sustained Swachh Survekshan performance — repeatedly India's cleanest city and placed in the Super Swachh League — is not just civic pride. It means the corporation actively removes unauthorised hoardings and banners, and it means the standardised street furniture is unusually well maintained. That is good news for legitimate bus shelters and pole kiosks and hostile to anything placed informally, which is a useful asymmetry for an advertiser who intends to be compliant.",
  ],

  crowdPlaces: [
    {
      place: "Rajwada",
      note: "The historic palace square and the central marketplace around it. A dense mass-market crowd on foot, peaking in the evenings and through festival weeks — the volume heart of the old city.",
    },
    {
      place: "Sarafa Bazaar",
      note: "A jewellery market by day that converts into a street-food bazaar after eight in the evening once the jewellers shut, running late into the night. Two completely different audiences on the same ground twelve hours apart — a genuinely unusual dwell environment.",
    },
    {
      place: "Chhappan Dukan",
      note: "The organised food street, drawing a young, affluent, high-dwell crowd in the evenings. One of the highest-attention environments in the city because people stand still there.",
    },
    {
      place: "Vijay Nagar Square",
      note: "The modern commercial and office node — white-collar and shopper traffic through the working day and into the evening. Where the money in Indore actually spends its time.",
    },
    {
      place: "Palasia Square and AB Road",
      note: "The arterial's principal junction and the most contested vehicular position in the city, with retail footfall layered on top of heavy through-traffic.",
    },
    {
      place: "Phoenix Citadel, Treasure Island and C21",
      note: "The organised retail anchors, with weekend peaks and a shopper already in a spending frame of mind. A captive dwell audience rather than a passing one.",
    },
    {
      place: "Indore Junction",
      note: "The busiest rail node in western Madhya Pradesh. Continuous transit volume with genuine waiting time and an outstation audience.",
    },
    {
      place: "Holkar Stadium",
      note: "The international cricket venue. Episodic rather than continuous, but the match-day crowds are among the largest single gatherings the city produces.",
    },
  ],

  formatGuide: [
    {
      title: "Hoarding advertising in Indore",
      kicker: "Large format",
      body: "AB Road is where large format lives and where it is most contested — Palasia, Geeta Bhavan and the Vijay Nagar stretch carry the highest-value positions in the city. The Ring Road, MR-10 and the Super Corridor approaches carry the newer arterial inventory, generally less cluttered. In the old city around Rajwada and MG Road the streets are close and the crowd is on foot, so smaller and lower formats outperform large elevated ones there regardless of what the rate card implies.",
    },
    {
      title: "Unipole advertising in Indore",
      kicker: "Arterial",
      body: "Unipoles suit the Ring Road, MR-10, the Super Corridor and the outer AB Road stretches, where there is clear ground and steady vehicular speed. The Super Corridor in particular is where Indore's newer development is going, and inventory there is younger and less crowded than on the contested central arterial — which for a brand that wants scale without the AB Road premium is often the better trade.",
    },
    {
      title: "Bus queue shelter and street furniture",
      kicker: "Street level",
      body: "This format works better in Indore than in most Indian cities, and the reason is the Swachh regime. Sustained civic investment means standardised, well-maintained street furniture and active removal of unauthorised display — so a legitimate shelter or kiosk here sits in a cleaner visual field than it would elsewhere and is less likely to be crowded out by informal placement. AICTSL's colour-coded network covers the city, and its shelters are part of that maintained estate.",
    },
    {
      title: "AICTSL bus advertising in Indore",
      kicker: "Transit",
      body: "The city bus operator runs on a public-private model and is the largest CNG bus operator in central India, with colour-coded routes covering the city — the blue services through Rajwada and MG Road, the magenta along AB Road, the orange to the airport. Bus exteriors and back panels reach across the whole city rather than along a single corridor, at the lowest cost per exposure available here. We could not verify a named advertising concessionaire and will not assert one.",
    },
    {
      title: "Pole kiosks and hyperlocal media",
      kicker: "Catchment",
      body: "Vijay Nagar, Scheme 54, South Tukoganj, Sudama Nagar and the Ring Road residential belts each behave as their own trade area. A run of pole kiosks along the approach roads into one of them covers it properly at a fraction of AB Road cost, and for retail, healthcare, coaching and financial services with a defined catchment it normally outperforms a single arterial site at the same spend.",
    },
    {
      title: "LED screen and DOOH advertising in Indore",
      kicker: "Digital",
      body: "Digital concentrates around Vijay Nagar, Palasia and the organised retail, where the audience is affluent and phone-native. It is a smaller network than a metro's, and we would rather say so than sell loop share on a thin one. Where the daypart or rotation is genuinely being used it earns its premium; where a static position on AB Road would deliver more for the same money, we will tell you.",
    },
    {
      title: "Indore Metro — not yet a media platform",
      kicker: "Transit, future",
      body: "Worth being direct about because it is easy to mis-sell. Only a six-kilometre priority stretch is operational, opened in May 2025, and it runs through the low-density Super Corridor rather than the retail core; the remaining twenty-seven kilometres of the Yellow Line have a completion horizon around 2030. Today it is a construction-disruption factor, not a media platform. That is the opposite of the position in Bhopal, where the line runs straight through the commercial district — and it is why we would plan the two cities' transit spend very differently.",
    },
    {
      title: "Rangpanchami and event media",
      kicker: "Seasonal",
      body: "Rangpanchami Ger is Indore's own mass colour procession and it draws crowds in the lakhs — the single biggest dated street event in the city and something no other Indian market has. Around it sit Ganesh, Navratri and Diwali as the retail run. In a city where the street event calendar is this distinctive, timing decisions carry weight that a rate negotiation does not.",
    },
  ],

  localMedia: {
    press: [
      {
        title: "Dainik Bhaskar",
        language: "Hindi",
        note: "Founded in Bhopal in 1958 and dominant across Madhya Pradesh since the mid-nineties — the default mass-market Hindi read. Same group as MY FM, so print and radio can be bought together in one negotiation.",
      },
      {
        title: "Nai Dunia",
        language: "Hindi",
        note: "Indore-rooted and now published by Jagran Prakashan, with Indore, Jabalpur and Gwalior editions. Worth naming precisely because it is often assumed to have closed: it has not, and it reaches an older and more locally embedded Madhya Pradesh readership than Bhaskar does.",
      },
      {
        title: "Rajasthan Patrika",
        language: "Hindi",
        note: "Rajasthan-headquartered with an Indore operation, and a genuinely competitive second Hindi option rather than a token one.",
      },
      {
        title: "Nava Bharat",
        language: "Hindi",
        note: "Has carried an Indore edition since the mid-twentieth century, reaching the Hindi belt across Madhya Pradesh, Maharashtra and Chhattisgarh — useful when a campaign runs across the central India cluster.",
      },
    ],
    radio: [
      { station: "Radio Mirchi", frequency: "98.3", note: "Hindi mainstream, film-led — the broadest single commercial station in the city." },
      { station: "Big FM", frequency: "92.7", note: "Hindi mass and retro, with a broad daytime schedule." },
      { station: "Red FM", frequency: "93.5", note: "Hindi contemporary, humour-led, and the youngest-skewing voice in the market." },
      { station: "MY FM", frequency: "94.3", note: "Hindi mass, from the Dainik Bhaskar stable — which makes a combined print and radio buy straightforward here." },
      {
        station: "Akashvani Indore",
        frequency: "Vividh Bharati 101.6 · Gyan Vani 106.6",
        note: "Public service, with reach into the Malwa districts. These frequencies come from a single secondary source rather than the government list, so we confirm them before booking.",
      },
    ],
    radioNote:
      "Indore has four private FM stations, not the six a metro of comparable size carries — and notably there is no Radio City here. We checked that against two editions of the Ministry of Information and Broadcasting operational list because a short list can just as easily be a truncated one; it is not, the four are correct. Indore and Bhopal share the same four private frequencies, so a Madhya Pradesh radio plan does travel between them — which is unusual, and the opposite of the situation in Gujarat. Radio works at drive time on a Hindi base. The Akashvani frequencies above are single-sourced and we verify before booking.",
  },

  transit: {
    lede:
      "Indore's transit media is a bus story. The metro exists but does not yet go where the audience is, and being straight about that saves a lot of misplaced budget.",
    modes: [
      {
        mode: "AICTSL city bus",
        note: "The main operator, built on a public-private model and the largest CNG bus operator in central India, with colour-coded routes — blue through Rajwada and MG Road, magenta along AB Road, orange to the airport. Reaches the whole city rather than one corridor. We could not verify a named advertising concessionaire and do not assert one.",
      },
      {
        mode: "Indore Metro — operational stub only",
        note: "Six kilometres opened in May 2025, running through the low-density Super Corridor rather than the retail core, with the remaining twenty-seven kilometres of the Yellow Line due around 2030. Negligible advertising inventory today. We list it so nobody sells it to you as a core-city platform.",
      },
      {
        mode: "Indore Junction",
        note: "The busiest rail node in western Madhya Pradesh, with continuous outstation volume and real waiting time.",
      },
      {
        mode: "Devi Ahilya Bai Holkar International Airport",
        note: "The busiest airport in Madhya Pradesh and the state's principal premium-audience catchment. Terminal media reaches business travel that no street position isolates.",
      },
    ],
  },

  costDrivers: [
    {
      factor: "AB Road or elsewhere",
      note: "The single most contested corridor in the city, and priced accordingly. Ring Road, MR-10 and the Super Corridor carry newer, less cluttered inventory at a lower premium — often the better trade for a brand that wants scale rather than the address.",
    },
    {
      factor: "New city or old city",
      note: "Vijay Nagar, Scheme 54 and South Tukoganj price against household income; Rajwada, MG Road, Chhawni and Ranipura price against footfall. Both are genuinely commercial here, which is not true of every Indian city.",
    },
    {
      factor: "Compliance in a Swachh city",
      note: "Sustained civic investment means active removal of unauthorised display. That raises the value of a legitimate position — cleaner visual field, less informal clutter competing with it — and raises the risk on anything placed without permission.",
    },
    {
      factor: "Illumination",
      note: "Frontlit, backlit and non-lit price separately. Indore's commercial life runs late — Sarafa Bazaar peaks near midnight — so unlit positions in the food and retail belts lose a large share of their working day.",
    },
    {
      factor: "Season",
      note: "Rangpanchami Ger concentrates crowds in the lakhs on a single date, and the Ganesh-to-Diwali run is the retail peak. Both tighten availability sharply in a market this concentrated.",
    },
    {
      factor: "Production and mounting",
      note: "Printing, material, mounting and re-mounting after the monsoon, quoted separately from media so it is clear which is which.",
    },
  ],

  compliance: {
    authority: "Indore Municipal Corporation (IMC)",
    body: [
      "We will be straight about the state of the public record here, because it is genuinely thin and pretending otherwise would not serve you. We could not locate a consolidated, published Indore Municipal Corporation outdoor advertising policy document. That is a finding rather than a gap in our research — the Madhya Pradesh cities are materially less transparent about advertising rules than, say, Nagpur, where the corporation publishes its schedule of rates openly.",
      "In practice, licensing appears to run through the Madhya Pradesh state municipal portal, which carries a hoarding module used by urban local bodies across the state. We could not retrieve the process detail from it. What is documented is enforcement activity: IMC runs crackdowns on illegal hoardings alongside its encroachment drives, which is consistent with the city's sustained Swachh Survekshan performance and its investment in standardised street furniture.",
      "The practical position for an advertiser is therefore this. Compliance in Indore is enforced even though the rules are not well published, which is an awkward combination and one worth respecting. We obtain the advertisement bye-laws from the corporation directly rather than representing them as documented on a website, and we confirm permission status on every position before it enters a plan. Anyone quoting you Indore rules with confident specifics from an online source is quoting you something we could not find.",
    ],
  },

  season: [
    {
      window: "March — Rangpanchami Ger",
      note: "Indore's own mass colour procession, drawing crowds in the lakhs. The single biggest dated street event in the city and something no other Indian market has.",
    },
    {
      window: "August to November — Ganesh through Diwali",
      note: "The retail peak, with organised retail and durables at their heaviest and the Rajwada and AB Road belts at their busiest.",
    },
    {
      window: "November to February — wedding season",
      note: "The sustained commercial run. Jewellery, apparel and durables compete for the same weeks, and Sarafa's daytime trade is at its most active.",
    },
    {
      window: "June to September — the monsoon",
      note: "A genuine risk window for flex and structures, and the period when indoor, mall and transit formats carry more of the load than street media does.",
    },
  ],

  planning:
    "We plan Indore around AB Road and then deliberately away from it, because the corridor is contested enough that paying its premium for the whole plan is usually the wrong call. The first question is how much of the campaign genuinely needs the central arterial versus the Ring Road, MR-10 and Super Corridor positions that reach the same city more cheaply. The second is the old-city split, since Rajwada and MG Road carry a real commercial audience rather than only footfall. And we will tell you plainly not to budget for metro media here yet — the operational line does not reach the audience, and in Bhopal it does.",

  faq: [
    {
      q: "How much does hoarding advertising cost in Indore?",
      a: "It depends on whether the position is on AB Road or elsewhere, plus the size, illumination and duration — and AB Road carries a genuine premium because it is the most contested corridor in the city. We do not publish a rate card. We are not selling our own inventory, so a published rate would tell you what we would like to charge rather than what the market will take. Send the brief and the budget and you will get real numbers against real positions.",
    },
    {
      q: "Is Indore Metro advertising worth buying?",
      a: "Not yet, and we would rather say so. Only a six-kilometre priority stretch is operational, opened in May 2025, and it runs through the low-density Super Corridor rather than the retail core — the remaining twenty-seven kilometres of the Yellow Line have a horizon around 2030. It is a construction-disruption factor today rather than a media platform. Bhopal's line, by contrast, runs straight through MP Nagar and is genuinely buyable, which is why we plan the two cities' transit spend very differently.",
    },
    {
      q: "Which areas of Indore are best for outdoor advertising?",
      a: "It depends on the audience. Vijay Nagar, Scheme 54, South Tukoganj and the Super Corridor reach the affluent and white-collar market. Rajwada, MG Road, Chhawni and Ranipura reach dense old-city volume at a different income level — and unusually for an Indian city, both halves are genuinely commercial. Palasia and the AB Road stretch catch almost everyone and price accordingly.",
    },
    {
      q: "Who licenses outdoor advertising in Indore?",
      a: "Indore Municipal Corporation — but we will be honest that the public record here is thin. We could not locate a consolidated published IMC outdoor advertising policy document. Licensing appears to run through the Madhya Pradesh state municipal portal's hoarding module, whose process detail we could not retrieve. Enforcement is nonetheless documented and active, so this is a market where the rules are enforced without being well published. We obtain the bye-laws from the corporation directly rather than quoting an online summary.",
    },
    {
      q: "Does Indore's cleanliness ranking affect advertising?",
      a: "Yes, and usefully. Sustained Swachh Survekshan investment means the corporation actively removes unauthorised hoardings and banners, and the standardised street furniture is well maintained. That is an asymmetry worth exploiting if you intend to be compliant: a legitimate shelter or kiosk here sits in a cleaner visual field, with less informal clutter competing for the same eye, than it would in a comparable city.",
    },
    {
      q: "Do you own hoardings in Indore?",
      a: "No. We plan, negotiate and run campaigns; we do not hold media. That means no inventory to push and no incentive to recommend an AB Road position because it is empty on our books — and in a city where enforcement is active but the rules are poorly published, it means we do the confirming rather than assuming.",
    },
    {
      q: "Which newspapers matter in Indore?",
      a: "Dainik Bhaskar leads and has since the mid-nineties, and being in the same group as MY FM makes a combined print and radio buy straightforward. Nai Dunia is worth naming precisely because it is often assumed to have closed: it has not — it is Indore-rooted, now published by Jagran Prakashan, and reaches an older and more locally embedded readership. Rajasthan Patrika is a genuinely competitive second Hindi option here.",
    },
    {
      q: "How many radio stations are there in Indore?",
      a: "Four private FM stations — Mirchi 98.3, Big FM 92.7, Red FM 93.5 and MY FM 94.3. Notably there is no Radio City in Indore. We checked the short list against two editions of the Ministry of Information and Broadcasting operational list, because a short list can just as easily be a truncated one; it is not. Usefully, Bhopal carries the same four frequencies, so a Madhya Pradesh radio plan travels between the two cities.",
    },
    {
      q: "When is the best time to advertise in Indore?",
      a: "Rangpanchami Ger in March is the single biggest dated street event, drawing crowds in the lakhs, and it exists nowhere else in India. Beyond that, the Ganesh-to-Diwali run is the retail peak and the November-to-February wedding season sustains it. The monsoon from June to September is a genuine risk window for street media and a good time to weight towards mall and transit formats.",
    },
    {
      q: "How long should an Indore campaign run?",
      a: "At least a full monthly cycle, and normally longer, since shorter runs cost more per day rather than less. The exception is event-led work around Rangpanchami or a Holkar Stadium fixture, where a short and heavy presence is genuinely the right trade because the attention itself is that concentrated.",
    },
    {
      q: "How do I know my advertisement actually went up?",
      a: "Dated, geotagged photographs of every position at mounting and again during the cycle. In a city with active enforcement drives, that record also tells you quickly if a site has been removed — which you want to find out in week two rather than at the end of the campaign.",
    },
    {
      q: "Can you plan Indore alongside other Madhya Pradesh markets?",
      a: "Yes, and it usually buys better. We plan outdoor across more than forty Indian cities, and Indore sits naturally with Bhopal, Ujjain, Dewas and Ratlam. Hindi creative travels across the state without adaptation, the two big cities share the same four radio frequencies, and Dainik Bhaskar covers both — so a Madhya Pradesh cluster is one of the more efficient regional plans available in India.",
    },
  ],

  nearby: ["Bhopal", "Ahmedabad", "Nagpur", "Jaipur"],
};
