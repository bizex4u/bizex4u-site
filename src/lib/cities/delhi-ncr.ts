import type { City } from "./types";

/* Delhi NCR. The defining fact is that it is not one market and not one
   regulator: Delhi (MCD and NDMC), Gurugram (MCG, Haryana bye-laws) and
   Noida (the Industrial Development Authorities) permit separately. A
   plan that treats NCR as a city buys under the wrong authority.

   AIR Delhi frequencies: only FM Rainbow 102.6 is corroborated twice.
   The FM Gold / Vividh Bharati split across 100.1 and 106.4 could not be
   resolved and is deliberately NOT published here. */

export const delhiNcr: City = {
  slug: "delhi-ncr",
  name: "Delhi NCR",
  alsoKnownAs: ["Delhi", "New Delhi", "Gurugram", "Noida"],
  state: "Delhi, Haryana & Uttar Pradesh",
  region: "North",

  metaTitle:
    "Outdoor Advertising in Delhi NCR — Hoardings",
  metaDescription:
    "Hoarding, unipole, metro and transit advertising across Delhi, Gurugram and Noida — three licensing authorities, planned as one campaign.",

  h1Lead: "Outdoor advertising in",
  h1Accent: "Delhi NCR",
  heroLede:
    "NCR is three states with three sets of advertising rules pretending to be one city. Delhi, Gurugram and Noida permit separately, price separately and behave separately — and the plans that go wrong here are the ones that forgot that.",

  market: [
    "Delhi NCR is the largest outdoor market in India and the most administratively fragmented. Delhi itself is licensed by MCD, with the Lutyens' core under NDMC. Gurugram sits in Haryana under MCG and the Haryana municipal advertisement bye-laws. Noida and Greater Noida sit in Uttar Pradesh under the Industrial Development Authorities rather than a municipal corporation. One campaign, three permission regimes, three enforcement cultures — and this is the single most consequential planning fact in the region.",
    "The money and the volume are geographically separate. Gurugram's Cyber City and Golf Course Road, Aerocity, and south Delhi — Saket, Vasant Kunj, Greater Kailash — hold the highest household incomes and the corporate audience. West, north and east Delhi, along with Noida, Ghaziabad and Faridabad, hold the volume, at a very different income level and with different buying triggers. A plan built only on the Gurugram corridor reaches a well-paid city of a fraction the size.",
    "The arterials do most of the work. The Ring Road and Outer Ring Road frame Delhi; NH-48 runs to Gurugram; the Dwarka Expressway, DND Flyway, Noida–Greater Noida Expressway, Yamuna Expressway and Delhi–Meerut Expressway carry the regional flows. Inside Gurugram, Golf Course Road, Golf Course Extension and Sohna Road carry the premium traffic. NCR is polycentric — there is no single centre to buy, which is why corridor logic beats city-wide weight here.",
    "Two recent changes matter. The Delhi–Meerut Namo Bharat RRTS corridor became fully operational in February 2026, running 82 kilometres from Sarai Kale Khan to Modipuram across 39 stations — a genuinely new, controlled, high-income commuter environment. Delhi Metro has meanwhile grown to ten lines and 271 stations. Noida International Airport at Jewar was inaugurated but had not begun scheduled commercial flights as of the last verification, so we do not plan inventory against it yet and would tell you if anyone else did.",
  ],

  crowdPlaces: [
    {
      place: "Connaught Place and Rajiv Chowk",
      note: "The central commercial ring plus the Blue and Yellow line metro interchange beneath it. Office workers, shoppers and tourists together — peaks at weekday lunch and from Friday to Sunday evening.",
    },
    {
      place: "DLF Cyber City and Cyber Hub, Gurugram",
      note: "The highest-income daily crowd in the region. Predictable weekday commute peaks, and a food and drink crowd that runs late — a captive white-collar audience with almost no equivalent elsewhere in north India.",
    },
    {
      place: "Kashmere Gate ISBT",
      note: "An interstate bus terminal fused with a three-line metro interchange. A migrant and intercity crowd, peaking early morning, late evening, and very heavily through festival travel weeks.",
    },
    {
      place: "Chandni Chowk and Jama Masjid",
      note: "Wholesale trade layered on religious footfall in an extremely dense pedestrian environment. Peaks through weekday trading hours, Ramzan evenings and the run up to Diwali.",
    },
    {
      place: "Sarojini Nagar Market",
      note: "Bargain apparel, and one of the most female-skewed crowds in the city. Students and young working women, peaking on weekend afternoons and through the October to November festive run.",
    },
    {
      place: "Lajpat Nagar Central Market",
      note: "Mid-market family and wedding shopping. Evening peaks year-round and a very sharp lift through the November to February wedding season.",
    },
    {
      place: "Nehru Place",
      note: "An IT hardware market sitting inside an office district — an SME and trade-buyer crowd rather than a consumer one, concentrated in weekday business hours.",
    },
    {
      place: "Arun Jaitley Stadium, Feroz Shah Kotla",
      note: "Cricket, and therefore episodic. Quiet most of the year, then very large and heavily male-skewed crowds through the IPL window and international fixtures.",
    },
  ],

  formatGuide: [
    {
      title: "Hoarding advertising in Delhi",
      kicker: "Large format",
      body: "Delhi's outdoor advertising is governed by the Delhi Outdoor Advertisement Policy 2017, and the constraints in it are specific enough to reshape a plan. Large-format hoardings, unipoles and bipoles are permitted in commercial, industrial and transportation areas — not in residential ones. Trivision devices are prohibited outright. Prior written permission of the Commissioner is required for every site. That means the useful question in Delhi is not where a hoarding would work but where one is permitted to exist, and we settle that before recommending anything.",
    },
    {
      title: "Unipole advertising in Gurugram",
      kicker: "Arterial",
      body: "Gurugram is the premium arterial market of the region — Golf Course Road, Golf Course Extension, Sohna Road and the NH-48 approach carry a fast, affluent, car-borne audience. It is also the most aggressively enforced. MCG operates under the Haryana Municipal Corporation Advertisement Bye-laws 2022, publishes an approved outdoor media list, removed several hundred unauthorised unipoles in a single year, and has said it will penalise property owners as well as advertisers. Buying an unpermitted structure here is not a grey area, it is a bill.",
    },
    {
      title: "LED screen and DOOH advertising in Delhi NCR",
      kicker: "Digital",
      body: "The rules here are unusually specific and worth knowing before anyone quotes you a digital site. Under the 2017 policy, flashing and non-static illuminated devices are prohibited within municipal limits; luminance must drop to 0.5 candela after eleven at night via an automatic timer; external lighting must be shielded and directed downward; and variable message LED and LCD devices are permitted in commercial areas only. A digital proposal that ignores the night-time luminance requirement is a proposal for a site that will be switched off or taken down.",
    },
    {
      title: "Delhi Metro advertising",
      kicker: "Transit",
      body: "The largest controlled advertising environment in India — ten lines, 271 stations, roughly 374 kilometres, plus the Airport Express. DMRC's co-branding framework has been expanded to 141 stations across eight lines, with licences running ten years on a two-year lock-in and extendable by five, and requiring structural drawings and stability certification. In-train audio advertising has been separately tendered. Station co-branding is a long-horizon commitment rather than a campaign buy, and we say so when a brief is really asking for six weeks of weight.",
    },
    {
      title: "Namo Bharat RRTS advertising",
      kicker: "Regional rail",
      body: "The newest environment in the region and the least cluttered. The Delhi–Meerut corridor runs 82 kilometres and 39 stations from Sarai Kale Khan to Modipuram, end to end in under an hour, and it reaches a commuter who was previously on a road. For brands targeting the Ghaziabad and Meerut catchments alongside Delhi, this is a genuinely new proposition rather than a repackaged one.",
    },
    {
      title: "Bus queue shelter and street furniture",
      kicker: "Street level",
      body: "The 2017 policy explicitly permits advertising on bus shelters, metro trains and public facilities, which makes street furniture one of the cleaner permission positions in Delhi. It also reaches the pedestrian and bus-borne population across west, north and east Delhi that the Gurugram-facing plans miss entirely. DTC and the DIMTS cluster fleet cover Delhi; Gurugram runs GMCBL separately.",
    },
    {
      title: "Pole kiosks and hyperlocal media",
      kicker: "Catchment",
      body: "NCR is too large and too polycentric to buy as a whole for most retail objectives, and pole kiosks run in sequence along the approach roads into a defined trade area are how a Dwarka, an Indirapuram, a Rajouri Garden or a Sector 62 catchment actually gets covered. For store, clinic and service-area briefs this normally outperforms an arterial position at several times the price.",
    },
    {
      title: "Mall, cinema and society media",
      kicker: "Retail and residential",
      body: "NCR has the deepest organised retail environment in India, and mall media reaches a shopper already in a spending frame of mind. Residential society and lift media through the Gurugram condominium belt, Noida's sector housing and south Delhi reaches high-income households at close range with almost no competing message — and it crosses none of the three regulators' arterial restrictions, which makes it unusually straightforward to execute.",
    },
  ],

  localMedia: {
    press: [
      {
        title: "Dainik Jagran",
        language: "Hindi",
        note: "The mass Hindi daily, strongest across NCR's outer districts and working and lower-middle-class households — the reach that English press does not touch.",
      },
      {
        title: "Hindustan",
        language: "Hindi",
        note: "HT Media's Hindi masthead and Delhi's other large Hindi read, skewing more urban than Jagran.",
      },
      {
        title: "Navbharat Times",
        language: "Hindi",
        note: "Urban Hindi, and noticeably more Delhi-city than district in its readership. The Hindi title that sits most naturally alongside an English plan.",
      },
      {
        title: "The Times of India",
        language: "English",
        note: "The broad English mass-market daily — young professionals, corporate readers and students.",
      },
      {
        title: "Hindustan Times",
        language: "English",
        note: "Delhi's home English daily, with a policy, government and professional readership that no other title reaches as efficiently.",
      },
      {
        title: "The Indian Express",
        language: "English",
        note: "Small but genuinely influential — policy, bureaucracy and the political class. A precision buy, not a reach one.",
      },
      {
        title: "The Economic Times and Mint",
        language: "English",
        note: "The business dailies. Corporate and financial decision-makers, and the right vehicle for anything selling to a board rather than a household.",
      },
      {
        title: "Punjab Kesari",
        language: "Hindi",
        note: "Reaches the Delhi and Punjab-belt Hindi readership, with a trader and small-business skew.",
      },
    ],
    radio: [
      { station: "Radio Mirchi", frequency: "98.3", note: "Hindi mainstream, film-led — the broadest single commercial station." },
      { station: "Red FM", frequency: "93.5", note: "Hindi contemporary, humour-led, and the youngest-skewing voice." },
      { station: "Radio City", frequency: "91.1", note: "Hindi mass, broad daytime schedule." },
      { station: "Big FM", frequency: "92.7", note: "Hindi mass and retro." },
      { station: "Fever FM", frequency: "104.0", note: "Hindi contemporary, urban-leaning." },
      { station: "Radio One", frequency: "94.3", note: "English-leaning playlist, reaching the corporate and expatriate audience." },
      { station: "Hit FM", frequency: "95.0", note: "Hindi mainstream." },
      { station: "Ishq FM", frequency: "104.8", note: "Retro and romantic, an older and more female-skewing listener." },
      { station: "Punjabi Fever", frequency: "107.2", note: "Punjabi — a real and distinct NCR audience that most national plans drop entirely." },
      {
        station: "Akashvani Delhi",
        frequency: "FM Rainbow 102.6",
        note: "Public service. AIR runs several FM services in Delhi; we publish only the frequency we could corroborate twice, and confirm the rest at buying rather than printing a number two sources disagree about.",
      },
    ],
    radioNote:
      "Delhi is the deepest commercial radio market in India and a genuinely multi-language one — Hindi carries the mass audience, English reaches the corporate belt, and Punjabi is a real segment rather than a rounding error. Drive time is long here because the commutes are long: the working window stretches well past the usual seven-to-eleven and five-to-nine, particularly on the Gurugram and Noida approaches. Frequencies and branding change, so we confirm what is on air at the point of buying.",
  },

  transit: {
    lede:
      "NCR has the largest transit media environment in India by a wide margin, and after February 2026 it has a second regional network on top of the metro.",
    modes: [
      {
        mode: "Delhi Metro",
        note: "Ten lines, 271 stations, roughly 374 kilometres including the Airport Express. DMRC's co-branding framework covers 141 stations across eight lines, on ten-year licences with a two-year lock-in, requiring structural drawings and stability certification. In-train audio has been tendered separately.",
      },
      {
        mode: "Namo Bharat RRTS",
        note: "Sarai Kale Khan to Modipuram, 82 kilometres and 39 stations, fully operational since February 2026. A new, uncluttered, high-income regional commuter environment reaching the Ghaziabad and Meerut catchments.",
      },
      {
        mode: "Bus — DTC, DIMTS and GMCBL",
        note: "Bus exteriors and shelters across Delhi through DTC and the DIMTS cluster fleet, with Gurugram served separately by GMCBL. The 2017 policy expressly permits bus shelter advertising, which makes the permission position here cleaner than on arterial structures.",
      },
      {
        mode: "Indira Gandhi International Airport",
        note: "Terminals 1, 2 and 3 under DIAL, plus the Aerocity approach — reaching business and premium travel as a single planned sequence. Noida International at Jewar is inaugurated but not yet operating scheduled commercial flights, so we do not plan against it.",
      },
    ],
  },

  costDrivers: [
    {
      factor: "Which of the three jurisdictions",
      note: "Delhi, Gurugram and Noida price differently because they permit differently. Gurugram's premium corridors carry the highest rates in the region; Noida and the outer Delhi belts carry the volume. This is not one market with a rate gradient, it is three markets.",
    },
    {
      factor: "Whether the format is permitted at all",
      note: "More decisive here than anywhere else we plan. Trivision is prohibited in Delhi. Flashing illuminated devices are prohibited within municipal limits. Residential-area advertising is not permitted. A quoted rate on a format that cannot be licensed is not a bargain.",
    },
    {
      factor: "Illumination and the night-time cut-off",
      note: "Frontlit, backlit, non-lit and LED price separately — and in Delhi the 0.5 candela post-eleven luminance requirement with an automatic timer is a real specification with real cost attached to meeting it properly.",
    },
    {
      factor: "Metro licence horizon",
      note: "DMRC station co-branding runs on ten-year licences with a two-year lock-in. That is a different financial instrument from a monthly outdoor cycle and should be evaluated as one.",
    },
    {
      factor: "Season and the GRAP window",
      note: "Diwali is the spike and the November-to-February wedding season sustains it. But GRAP anti-pollution restrictions through November to January can halt construction-linked activity and affect site work, and the April-to-June heat is a genuine lull. Both belong in the plan.",
    },
    {
      factor: "Production, mounting and compliance documentation",
      note: "Printing, material and mounting, plus the structural drawings and stability certification that DMRC and the municipal authorities require. We quote compliance separately rather than burying it, because it is the line most often omitted from a cheaper proposal.",
    },
  ],

  compliance: {
    authority: "MCD and NDMC in Delhi · MCG in Gurugram · the Industrial Development Authorities in Noida",
    body: [
      "Delhi is governed by the Delhi Outdoor Advertisement Policy 2017, finalised under Supreme Court direction. Prior written permission of the Commissioner is required. Large-format billboards, unipoles and bipoles are permitted in commercial, industrial and transportation areas but not residential ones; trivision devices are prohibited; flashing and non-static illuminated devices are prohibited within municipal limits; luminance must drop to 0.5 candela after eleven at night on an automatic timer; and variable message LED and LCD devices are permitted only in commercial areas. The Lutyens' area is separately administered by NDMC, where nothing may be displayed without prior permission of the Chairman, and the Delhi Prevention of Defacement of Property Act, 2007 also applies.",
      "Gurugram operates under the Haryana Municipal Corporation Advertisement Bye-laws, 2022, with MCG as the approving authority for hoardings, billboards and unipoles. Enforcement is genuinely aggressive: several hundred illegal unipoles removed in a single year, penalties set at three times the permission fee, penalty collections up by orders of magnitude year on year, and a stated intention to penalise property owners alongside advertisers. MCG publishes an approved outdoor media list, which is the right place to start rather than a vendor's word.",
      "Noida and Greater Noida are licensed by the Industrial Development Authorities rather than a municipal corporation, and we will be straight with you: we could not locate a published standalone outdoor advertisement policy document for Noida. That is a gap in the public record, not a claim that no rules exist. Where a specific rule affects your campaign we confirm it with the Authority directly rather than quoting something unsourced back at you.",
    ],
  },

  season: [
    {
      window: "October to November — Diwali",
      note: "The spike, and the most competitive window of the NCR year across every format. Availability on the premium corridors tightens months ahead.",
    },
    {
      window: "November to February — wedding season",
      note: "Sustained rather than spiked. Jewellery, apparel, hospitality, automotive and durables all compete for the same weeks, and Lajpat Nagar and the mid-market retail belts run at their heaviest.",
    },
    {
      window: "November to January — GRAP",
      note: "The constraint nobody puts in a proposal. Anti-pollution restrictions can halt construction-linked activity and affect site work, which matters for anything requiring mounting or structural change in that window.",
    },
    {
      window: "April to June — the heat lull",
      note: "Footfall drops, outdoor dwell drops and the market softens. A poor window for street-level formats and a reasonable one for negotiating.",
    },
  ],

  planning:
    "We plan NCR as three permission regimes before we plan it as one audience. The first question is which jurisdictions the campaign actually needs, because that decides what can be bought at all — Delhi prohibits formats Gurugram allows, and Noida is licensed by a body that publishes nothing. The second is the split between the premium western corridor and the volume belts, which is a decision about who the customer is rather than about which sites photograph well. The third is transit, because NCR is the one Indian market where the metro and now the RRTS can genuinely carry a campaign on their own.",

  faq: [
    {
      q: "How much does hoarding advertising cost in Delhi NCR?",
      a:
        "We do not publish a rate card. It depends which of the three jurisdictions the site sits in, the corridor, the size, the illumination and the duration — and Gurugram's premium corridors and outer Delhi price nothing like each other. We are not selling our own inventory, so a published rate would tell you what we would like to charge rather than what the market will take; we negotiate against several vendors on every plan. Send the brief and the budget and you will get real numbers against real positions.",
    },
    {
      q: "Why does Delhi NCR need three separate permissions?",
      a: "Because it is three states. Delhi is licensed by MCD, with the Lutyens' area under NDMC. Gurugram is in Haryana under MCG and the Haryana Municipal Corporation Advertisement Bye-laws 2022. Noida and Greater Noida are in Uttar Pradesh and licensed by the Industrial Development Authorities. Different rules, different fees, different enforcement. A proposal that quotes NCR as one line item has either simplified something important or has not looked.",
    },
    {
      q: "Are LED and digital screens allowed in Delhi?",
      a: "In commercial areas, yes, with conditions that are specific enough to matter. Variable message LED and LCD devices are permitted in commercial areas only. Flashing and non-static illuminated devices are prohibited within municipal limits. Luminance must drop to 0.5 candela after eleven at night via an automatic timer, and external lighting must be shielded and directed downward. Any digital proposal that does not mention the night-time luminance requirement has not been checked.",
    },
    {
      q: "Which areas of Delhi NCR are best for outdoor advertising?",
      a: "Gurugram's Cyber City and Golf Course Road, Aerocity and south Delhi reach the highest-income and corporate population. West, north and east Delhi plus Noida, Ghaziabad and Faridabad reach volume at a different income level. Connaught Place and Nehru Place reach office and trade audiences. Chandni Chowk and Sarojini Nagar reach very dense pedestrian retail. Which of those is right depends entirely on the audience, and we would rather establish that first than lead with a location list.",
    },
    {
      q: "Do you own hoardings in Delhi NCR?",
      a: "No. We plan, negotiate and run campaigns; we do not hold media. That means no inventory to push and no incentive to recommend a position because it is empty on our books. In a region where Gurugram penalises advertisers as well as media owners for unauthorised structures, it also means we can walk away from a site whose paperwork does not stand up.",
    },
    {
      q: "Is Delhi Metro advertising worth buying?",
      a: "For the right horizon, yes — it is the largest controlled advertising environment in the country. But be clear about what it is: DMRC's station co-branding runs on ten-year licences with a two-year lock-in and requires structural drawings and stability certification. That is an asset commitment, not a campaign. If the brief is six weeks of weight, in-train and shorter-form formats or street media will serve you better, and we will say so.",
    },
    {
      q: "Should I plan advertising around the new Noida airport?",
      a: "Not yet. Noida International at Jewar was inaugurated, but as of our last verification it had not begun scheduled commercial flights. There is no meaningful passenger audience to buy against until it does. Anyone selling you inventory there on the basis of projected traffic is selling you a forecast.",
    },
    {
      q: "How long should an NCR campaign run?",
      a: "At least a full monthly cycle for street media, and normally longer, since shorter runs cost more per day. NCR is large enough that a short burst spread thin across three jurisdictions reaches almost nobody with any frequency. The stronger approach in most cases is a defined corridor or catchment held for longer.",
    },
    {
      q: "How do I know my advertisement actually went up?",
      a: "Dated, geotagged photographs of every position at mounting and again through the cycle. In Gurugram particularly this matters — enforcement removals are frequent enough that a site can come down mid-campaign, and monitoring is how you find out rather than discovering it at the end.",
    },
    {
      q: "Can a campaign be limited to one part of NCR?",
      a: "Yes, and for retail it usually should be. Dwarka, Indirapuram, Rajouri Garden, Noida Sector 62 and the Gurugram sectors each behave as their own market. A plan built around one catchment — pole kiosks and street formats along the approach roads — normally outperforms a thin region-wide buy at the same budget.",
    },
    {
      q: "How is outdoor advertising measured in Delhi NCR?",
      a: "With more caveats than the industry usually offers. Licensed audience research exists and we will show you the current figures at planning, but we will not publish them on a website and we will not present a modelled impression count as though it were a measurement. What we can show directly is proof of execution, the catchment logic behind every position, and movement in whatever outcome the campaign was actually bought for.",
    },
    {
      q: "Can you plan NCR alongside other markets?",
      a: "Yes, and NCR is usually the anchor rather than the add-on. We plan outdoor across 39 Indian cities, and it sits naturally with Jaipur, Chandigarh, Lucknow and Agra — the Yamuna Expressway in particular makes Agra a genuine NCR day-trip market. Negotiating the cluster together changes what is achievable on both price and position.",
    },
  ],

  nearby: ["Jaipur", "Chandigarh", "Lucknow", "Agra"],
};
