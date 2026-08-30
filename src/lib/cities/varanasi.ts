import type { City } from "./types";

/* Varanasi. Only four private FM stations — Fever and Mirchi Love are not
   on air here and must not be listed. 95.0 is Big FM in Varanasi and Fever
   in Kanpur; Radio City is 91.9 here, 91.1 in Lucknow, 104.8 in Kanpur.

   The honest point this page has to make, and that no competitor makes:
   a very large share of Varanasi's footfall is pilgrims and tourists, not
   resident consumers. For most advertisers that inflates the apparent
   reach of the ghats and the corridor. Say it plainly. */

export const varanasi: City = {
  slug: "varanasi",
  name: "Varanasi",
  alsoKnownAs: ["Banaras", "Kashi"],
  state: "Uttar Pradesh",
  region: "North",

  metaTitle:
    "Outdoor Advertising in Varanasi (Banaras)",
  metaDescription:
    "Hoarding, unipole, transit and retail advertising in Varanasi, honest about which crowds are residents and which are pilgrims.",

  h1Lead: "Outdoor advertising in",
  h1Accent: "Varanasi",
  heroLede:
    "Varanasi has two audiences and they are not interchangeable. The pilgrim crowd at the ghats is enormous and mostly not from here; the resident market that actually buys week after week is at Sigra, Lanka and along the ring road. Most plans confuse the two.",

  market: [
    "Varanasi is structurally different from every other market in Uttar Pradesh, and the difference is not scale — it is who the crowd is. A very large share of the city's footfall is transient: pilgrims, domestic tourists and foreign visitors moving between the ghats, Godowlia and the Kashi Vishwanath precinct. They are a real audience for some categories and almost worthless for others, and an outdoor plan that treats ghat footfall as market reach will overstate its own delivery by a wide margin.",
    "The resident city sits elsewhere. Sigra is the organised modern retail and commercial node, with a middle and upper-middle local shopper rather than a visitor. Lanka and the BHU gate hold the university precinct — the city's principal young-adult concentration, with a coaching, hostel and student economy behind it. The Varuna crossing and the northern arterial belt carry the commuter and through-traffic. For most consumer categories, these are the places that matter, and they are not where the postcards are taken.",
    "The ring road is the structural change of the last decade. It moved through-traffic out of the medieval core and, for the first time, created an arterial belt where large-format outdoor is genuinely viable — something the gali geography of the old city had never allowed. Before it, Varanasi was a difficult outdoor market for the simple reason that there was nowhere to stand a hoarding and have it read.",
    "The Kashi Vishwanath corridor, opened at the end of 2021, re-plumbed movement between the ghats and the temple and raised pilgrim throughput sharply through Godowlia and the riverfront. It changed the city's footfall map more than anything in living memory. It also raised the sensitivity of everything near it, which is a planning constraint as much as an opportunity — and one we treat carefully rather than optimistically.",
  ],

  crowdPlaces: [
    {
      place: "Dashashwamedh Ghat",
      note: "The principal ghat and the venue for the evening Ganga Aarti — the single densest concentration of people in the city, peaking sharply at aarti. Overwhelmingly pilgrim and tourist, which makes it powerful for some categories and irrelevant for most.",
    },
    {
      place: "Godowlia",
      note: "The pedestrian-choked crossroads feeding both the ghats and the temple. A mix of local shoppers and visitors, congested for most of the day and close to impassable in festival season. Genuine dwell time, because nobody moves quickly through it.",
    },
    {
      place: "Kashi Vishwanath Corridor",
      note: "The redeveloped temple precinct. Almost entirely pilgrim traffic, with extreme peaks at Mahashivratri and through the month of Shravan. Also the most sensitive precinct in the city for anything commercial.",
    },
    {
      place: "Sigra",
      note: "The organised modern retail and commercial node, and where the resident consumer market actually is. Middle and upper-middle local shoppers, evening and weekend peaks, and almost no pilgrim traffic at all.",
    },
    {
      place: "Lanka and the BHU gate",
      note: "The university precinct — students, faculty, coaching and the hostel economy around them. The city's principal young-adult concentration, and strongly term-time dependent.",
    },
    {
      place: "Varanasi Cantt",
      note: "The main railway station. Heavy outstation and pilgrim transit with sustained waiting time — an audience that is captive rather than passing, and a mix of visitors and returning residents.",
    },
    {
      place: "The Varuna Bridge corridor",
      note: "The northern arterial crossing and one of the city's persistent bottlenecks. Commuter and through-traffic, peaking at rush hours, and one of the few places in the old city's orbit where vehicular formats work properly.",
    },
    {
      place: "The ring road belt",
      note: "The newer arterial ring that took through-traffic out of the core. Regional and freight movement plus the city's own outbound traffic — and the part of Varanasi where large-format outdoor is actually viable.",
    },
  ],

  formatGuide: [
    {
      title: "Hoarding advertising in Varanasi",
      kicker: "Large format",
      body: "Large format in Varanasi lives on the ring road, the NH-19 approaches and the Cantt–Sigra–Lanka axis. It does not live in the old city, where the streets are too narrow and too enclosed for a large structure to have a sightline. This is the most important thing to understand about hoardings here: the geography, not the budget, decides where they can work. A plan that promises large-format presence in Varanasi without naming the corridor is promising something the city's layout will not deliver.",
    },
    {
      title: "Unipole advertising in Varanasi",
      kicker: "Arterial",
      body: "Unipoles suit the ring road and the highway approaches, where there is clear ground and steady vehicular speed. They also reach the regional audience that the expressway build-out has brought into range — a Varanasi arterial position now catches traffic from a much wider catchment than it did five years ago. For brands with a Purvanchal footprint rather than a city one, this is often the most efficient large format available.",
    },
    {
      title: "Bus queue shelter and street furniture",
      kicker: "Street level",
      body: "Street-level formats reach the resident, non-driving population that the ghats and the arterials both miss. The useful positions cluster around Sigra, Lanka, the Cantt approaches and the Varuna corridor — the parts of the city where people are going to work or to shop rather than to pray. Backlit units hold their value into the evening, which matters in a city whose commercial life runs late.",
    },
    {
      title: "Pole kiosks and hyperlocal media",
      kicker: "Catchment",
      body: "Pole kiosks are the practical answer to a city whose core cannot take large format. Run in sequence along the approach roads into Sigra, Mahmoorganj, Bhelupur or the BHU catchment, they build repeated exposure inside a defined trade area at a fraction of arterial cost. For a store, a clinic, a coaching centre or a restaurant, this is almost always where a Varanasi plan should start.",
    },
    {
      title: "LED screen and DOOH advertising in Varanasi",
      kicker: "Digital",
      body: "Digital screens here are a commercial-node medium, concentrated around Sigra and the organised retail rather than distributed across the city. Their strength is daypart control and creative rotation; their weakness is loop share, which divides your presence at the site. In a market this size we recommend DOOH when the rotation is genuinely being used and are straightforward when a static position would deliver more for the same money.",
    },
    {
      title: "Railway station and transit media",
      kicker: "Transit",
      body: "Varanasi has no metro — anyone implying otherwise is describing a different city. Transit here means the railway stations, principally Varanasi Cantt and Banaras, where outstation and pilgrim volume waits with real dwell time. Station media reaches an audience that is captive, bored and reading, which is a different and often better proposition than a glance from a moving vehicle.",
    },
    {
      title: "Festival and event media",
      kicker: "Seasonal",
      body: "Varanasi's calendar drives its attention more than its retail cycle does, and this is the market where event-led planning genuinely beats always-on. Dev Deepawali, Mahashivratri and the Shravan month each produce visitor peaks that no ordinary week approaches. Planning around those windows deliberately — rather than buying a flat annual presence — is usually the single highest-return decision on a Varanasi brief.",
    },
    {
      title: "Retail, mall and residential media",
      kicker: "Resident audience",
      body: "The organised retail and residential media around Sigra, Mahmoorganj and Bhelupur is where the resident consumer is reached at close range, and it is chronically under-planned because the city's more photogenic crowds distract from it. For any category selling to households that live here rather than visit — grocery, durables, financial services, healthcare, education — this is the part of the plan that does the work.",
    },
  ],

  localMedia: {
    press: [
      {
        title: "Dainik Jagran",
        language: "Hindi",
        note: "The dominant mass daily, and the first line of almost any Hindi press plan in the city and the Purvanchal districts around it.",
      },
      {
        title: "Amar Ujala",
        language: "Hindi",
        note: "Strong across Purvanchal, and genuinely competitive with Jagran here rather than a distant second.",
      },
      {
        title: "Hindustan",
        language: "Hindi",
        note: "A full Varanasi edition, reading younger and more urban than the older mastheads.",
      },
      {
        title: "Aj (आज)",
        language: "Hindi",
        note: "Founded in Varanasi in 1920 and still published — a nationalist-era masthead with deep local standing. This is the title a Banarasi reader expects to see named, and the one that generic city pages always miss.",
      },
      {
        title: "The Times of India",
        language: "English",
        note: "A thin resident base by comparison with the Hindi titles, skewing to BHU academia, the hospitality trade and institutional readers. In Varanasi, English press is a precision instrument, not a reach medium.",
      },
    ],
    radio: [
      {
        station: "Radio Mirchi",
        frequency: "98.3",
        note: "Hindi mainstream, film-led. The broadest single commercial station in the city.",
      },
      {
        station: "Red FM",
        frequency: "93.5",
        note: "Hindi contemporary, humour-led, and the youngest-skewing commercial voice here.",
      },
      {
        station: "Big FM",
        frequency: "95.0",
        note: "Hindi mass and retro. Note the frequency — 95.0 is Big FM in Varanasi and a different network in Kanpur.",
      },
      {
        station: "Radio City",
        frequency: "91.9",
        note: "Hindi mass. This frequency carried Radio Mantra before the network rebranded, and a lot of old media kits still say so.",
      },
      {
        station: "Akashvani Varanasi",
        frequency: "Vividh Bharati 100.6 FM · 1242 AM",
        note: "Public service, with reach into the Purvanchal districts where the commercial stations thin out — and still a genuinely used medium outside the city.",
      },
    ],
    radioNote:
      "Varanasi has a noticeably smaller private FM market than Lucknow or Kanpur — four commercial stations, not six. Fever FM and Mirchi Love are not on air here, and any list that includes them is a list copied from another city. Radio works as a drive-time and Hindi medium, roughly seven to eleven in the morning and five to nine in the evening. We confirm what is actually on air at the point of buying rather than working from a rate card.",
  },

  transit: {
    lede:
      "There is no metro in Varanasi. Transit here means the railway stations, the bus network and an airport that is expanding — and the railway is by far the most substantial of the three.",
    modes: [
      {
        mode: "Varanasi Cantt and Banaras stations",
        note: "The principal transit media environment in the city. Heavy outstation and pilgrim volume with long waiting times, which produces the kind of dwell audience that reads rather than glances. Station media is bought through the railway's divisional commercial organisation.",
      },
      {
        mode: "Lal Bahadur Shastri International Airport",
        note: "An expanding airport, with a new terminal building, apron and runway extension documented as an ongoing development. Terminal media reaches visitor and business travel that no other format in the city isolates.",
      },
      {
        mode: "City bus and intercity road",
        note: "Bus exteriors and terminals cover the resident commuting population — the audience that neither the ghats nor the arterials reach properly.",
      },
      {
        mode: "The expressway approaches",
        note: "The Purvanchal Expressway and the Ganga Expressway have made Varanasi the eastern anchor of a drivable corridor rather than an isolated pilgrimage terminus. Arterial and ring-road positions now carry a regional audience, which changes what they are worth.",
      },
    ],
  },

  costDrivers: [
    {
      factor: "Resident audience versus visitor audience",
      note: "The most consequential variable in this city, and the one nobody prices explicitly. A ghat-adjacent position and a Sigra position may cost similarly and deliver completely different value depending on whether your customer lives here.",
    },
    {
      factor: "Corridor and viability",
      note: "The ring road and the arterial belt can take large format; the old city cannot, at any price. What looks like a rate difference is often a difference in what the geography physically permits.",
    },
    {
      factor: "Illumination",
      note: "Frontlit, backlit and non-lit price separately. Varanasi's commercial and religious life runs late into the evening, so unlit positions lose a larger share of their working day here than in a nine-to-six city.",
    },
    {
      factor: "The festival calendar",
      note: "Dev Deepawali, Mahashivratri and Shravan are the windows when demand outruns supply. They are also the windows when the campaign is worth the most. Both facts are in the price.",
    },
    {
      factor: "Duration and the minimum cycle",
      note: "Monthly cycles are the norm and shorter runs usually cost more per day. Event-led buying is the exception — for a festival window, a short, heavy presence can be the right trade.",
    },
    {
      factor: "Production and mounting",
      note: "Printing, material, mounting and re-mounting after weather. Quoted separately from media, so it is clear what you are paying for.",
    },
  ],

  compliance: {
    authority: "Varanasi Nagar Nigam",
    body: [
      "Outdoor advertising in the city is licensed by Varanasi Nagar Nigam. Permission is site-specific and time-bound, and an advertiser carries genuine exposure if a structure cannot produce current paperwork.",
      "Varanasi needs more caution than any other market we plan, and we would rather say so than sell around it. The Kashi Vishwanath corridor and the ghat precinct are heritage and religious environments of the highest sensitivity. We could not locate a published rule set specific to advertising in those precincts — which is not the same as there being none, and we treat it as a reason for care rather than as an opening. Anything proposed near the corridor or the riverfront is confirmed with the Nigam before it is recommended, not after.",
      "More broadly: there is no consolidated Uttar Pradesh outdoor advertising policy published in a form we can point you to, and Varanasi Nagar Nigam's advertisement bye-laws are not publicly available as a document. The state government has been examining road-safety norms for roadside advertising, which bears on the ring road and national highway positions. Where a specific rule matters to your campaign, we confirm it directly rather than quoting an unsourced claim back at you.",
    ],
  },

  season: [
    {
      window: "Kartik Purnima — Dev Deepawali",
      note: "The ghats lit with lamps, and the single largest visitor peak of the Varanasi year. Nothing else in the calendar approaches it for concentrated attention.",
    },
    {
      window: "Shravan and Mahashivratri",
      note: "The Vishwanath precinct at its heaviest, with pilgrim volume through Godowlia and the riverfront that reorganises movement across the whole old city.",
    },
    {
      window: "November to February — wedding season",
      note: "The resident commercial peak — jewellery, silk and Banarasi saree, apparel and durables, concentrated on Sigra and the local retail belt rather than the ghats.",
    },
    {
      window: "July and the academic intake",
      note: "The BHU and coaching calendar refills Lanka and the university precinct, and the education category competes hard for exactly those positions.",
    },
  ],

  planning:
    "We plan Varanasi by separating the two audiences before anything else. If the campaign is selling to residents, the plan is built on Sigra, Lanka, the Varuna corridor and the ring road, with Hindi press and radio behind it — and the ghats are largely a distraction. If it is selling to visitors, the logic inverts and the festival calendar drives everything. Most briefs are the first kind and get planned as though they were the second, which is the most common and most expensive mistake made in this market.",

  faq: [
    {
      q: "How much does hoarding advertising cost in Varanasi?",
      a:
        "We do not publish a rate card. It depends on the corridor, the size, the illumination and the season — and in Varanasi the season swings it more than in most cities, because Dev Deepawali and Shravan compress a year's demand into a few weeks. We are not selling our own inventory, so a published rate would tell you what we would like to charge rather than what the market will take. Send the brief and the budget and you will get real numbers against real positions.",
    },
    {
      q: "Where does outdoor advertising actually work in Varanasi?",
      a: "On the ring road, the highway approaches and the Cantt–Sigra–Lanka axis for large format; at street level and in retail media through Sigra, Mahmoorganj, Bhelupur and the BHU catchment for the resident audience. It does not work well in the old city, where the streets are too narrow and enclosed for a large structure to have a sightline. That is a geography constraint, not a budget one.",
    },
    {
      q: "Should I advertise at the ghats?",
      a: "Only if your customer is a visitor. The ghats and the Vishwanath corridor produce enormous footfall, but most of it is pilgrims and tourists who do not live here and will not return this year. For hospitality, travel, telecom roaming, devotional and gifting categories that can be exactly right. For a grocery brand, a bank or a local retailer, it is reach you cannot convert — and it is also the most regulated and sensitive part of the city. We will tell you which case you are in.",
    },
    {
      q: "Is there a metro in Varanasi?",
      a: "No. Varanasi has no operational metro, and any proposal offering you metro media here is describing another city. Transit advertising in Varanasi means the railway stations — principally Cantt and Banaras — the bus network, and the airport.",
    },
    {
      q: "Do you own hoardings in Varanasi?",
      a: "No. We plan, negotiate and run campaigns; we do not hold media. That means no inventory to push and no reason to recommend a position because it is empty on our books. It also means we cannot promise a specific structure before we have negotiated for it, which is the honest position.",
    },
    {
      q: "Is permission needed for a hoarding in Varanasi?",
      a: "Yes. Outdoor advertising is licensed by Varanasi Nagar Nigam and permission is site-specific and time-bound. The heritage and temple precincts warrant particular care, and we confirm anything near the corridor or the riverfront with the Nigam before recommending it rather than assuming that what is already standing establishes a precedent.",
    },
    {
      q: "When is the best time to run a campaign in Varanasi?",
      a: "For visitors, the festival windows — Dev Deepawali at Kartik Purnima, Mahashivratri and the month of Shravan — concentrate more attention than any other weeks in the year. For residents, the November-to-February wedding season is the commercial peak, and Sigra rather than the ghats is where it happens. Varanasi is the market where event-led planning most clearly beats a flat annual presence.",
    },
    {
      q: "How long should a Varanasi campaign run?",
      a: "For a resident-facing campaign, at least a full monthly cycle and normally longer, because shorter runs cost more per day. For a festival-facing campaign, a short and heavy presence around the window is often the better trade — this is one of the few markets where that is genuinely true rather than a way of selling a small budget.",
    },
    {
      q: "How do I know my advertisement went up?",
      a: "Dated, geotagged photographs of every position at mounting and again during the cycle. In a city with as much seasonal disruption as this one, that record is worth more than usual — it is the only way to know a site was live during the window you actually bought it for.",
    },
    {
      q: "Which newspapers and radio stations matter in Varanasi?",
      a: "Hindi press carries the market — Dainik Jagran, Amar Ujala and Hindustan, alongside Aj, which was founded here in 1920 and still carries real local standing. English press is a precision buy reaching BHU academia, hospitality and institutional readers rather than a reach medium. Radio is a smaller market than Lucknow or Kanpur: four commercial stations, Hindi, working at drive time. We confirm what is on air before buying.",
    },
    {
      q: "Can you plan Varanasi with other eastern UP markets?",
      a: "Yes, and with the Purvanchal Expressway in place it usually makes sense to. We plan outdoor across 39 Indian cities, and Varanasi sits naturally with Prayagraj, Gorakhpur, Lucknow and — genuinely — Patna, since Purvanchal media planning routinely crosses the Bihar line. Negotiating the cluster together changes what is achievable on price and position.",
    },
  ],

  nearby: ["Lucknow", "Kanpur", "Patna", "Prayagraj"],
};
