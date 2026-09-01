/* ------------------------------------------------------------------
   Capability detail — the long-form content behind /what-we-do/*.

   House rules, non-negotiable and repeated here because this is the
   file most likely to be edited by someone who has not read them:

     · Never name a site, a count, an availability window or a rate.
       Categories and method only.
     · Never claim ownership of media. Bizex4U plans, negotiates and
       runs. It does not own the hoardings.
     · No invented awards, no invented client outcomes, no tenure claim.
     · No licensed research figures. No BARC, IRS or RAM numbers.

   Voice: plain, specific, and willing to say when something is a bad
   idea. An Indian marketing head has read a hundred agency decks that
   all say "360-degree integrated solutions". The differentiator on a
   website is being concrete about method.
------------------------------------------------------------------- */

export type CapabilityFrame = {
  src: string;
  city: string;
  alt: string;
  caption: string;
};

export type CapabilityDetail = {
  slug: string;
  /* Sits under the H1. One sentence, no adjectives that cannot be
     defended in a meeting. */
  lede: string;
  /* The sentence the old drawings were trying to carry. Lives as type
     next to a photograph, not as a schematic. */
  thesis: string;
  /* Own photography of the environment this medium actually lives in.
     Caption names the kind of place, never a site we hold. */
  frame: CapabilityFrame;
  /* The argument for planning this medium properly. */
  argument: string[];
  /* How the buy is actually made. This is the section a client reads
     to decide whether we know what we are doing. */
  method: { title: string; body: string }[];
  /* Concrete buying situations. Not a menu of products. */
  whenItWorks: string[];
  /* What lands on their desk. Deliverables, not promises. */
  deliverables: string[];
  /* When to spend elsewhere. Saying this is the cheapest credibility
     on the whole site. */
  notFor: string;
  /* One sentence on how this layer sits with the others. */
  sitsInPlan: string;
  /* Answer first, hedge second. A cost question is wanted; a number
     in the answer is not. */
  faq: { q: string; a: string }[];
};

export const capabilityDetail: Record<string, CapabilityDetail> = {
  "outdoor-transit": {
    slug: "outdoor-transit",
    lede: "Large-format and transit media, planned around how a city actually moves rather than around what happens to be free this month.",
    thesis: "Three times on one commute beats once across a city.",
    frame: {
      src: "/media/hours/commute-agra.webp",
      city: "Agra",
      alt: "An Agra arterial at commute hour, a roadside hoarding and traffic on the carriageway",
      caption: "Photographed on site · Agra arterial · commute hour",
    },
    argument: [
      "Outdoor is the only medium a person cannot close, skip or scroll past. That is its whole advantage, and it is squandered the moment a plan is built from an availability list instead of from a route. Two hoardings can carry identical rate cards and identical claimed impressions while one sits on a corridor a million people commit to every morning and the other sits on a road they take when the first is blocked.",
      "So the first question is never which sites are free. It is which movements the brand needs to intercept — the commute, the school run, the weekend retail trip, the approach to a dealership — and which structures sit on those movements at the moment attention is available rather than at the moment traffic is heaviest. A site at a signal where vehicles stop for ninety seconds is a different product from a site on a flyover taken at speed, and it should not be bought as though it were the same thing.",
      "The vocabulary matters because the paperwork uses it. A hoarding, a unipole and a gantry are licensed differently in most Indian cities; a bus queue shelter and a pole kiosk sit on municipal street furniture and a different permission file. Sky-sign and advertisement tax are the heads a corporation actually invoices against — not 'billboard'. We plan in that language because that is the language the licence is written in, and because flexing, mounting, illumination and monitoring photographs are the production steps that decide whether what was booked is what a passer-by actually sees.",
    ],
    method: [
      {
        title: "Corridor before site",
        body: "We map the arterial routes, commuter flows and retail approaches that carry the audience you are actually buying, then look for structures on them. The site list is an output of that work, not the input to it.",
      },
      {
        title: "Dwell, not just volume",
        body: "Traffic count is the number every vendor leads with and the weakest of the signals. Signal position, approach angle, viewing distance, height above the roadline and what else is competing in the same field of view decide whether a passing vehicle registers anything at all.",
      },
      {
        title: "Frequency over spread",
        body: "A brand that appears three times on one commute is remembered. The same budget spread thinly across a city is not. We would rather own a corridor for a month than dust the whole map for a fortnight, and we will argue for that.",
      },
      {
        title: "Transit as the connective layer",
        body: "Bus exteriors, cab branding and station media move through the catchments the static sites anchor. Used together they turn a fixed presence into something that follows the audience; used alone they are a cheaper way to be forgotten.",
      },
    ],
    whenItWorks: [
      "A launch or a defence in a city you can name, where the audience moves on a small number of corridors rather than everywhere at once.",
      "A retail or dealership catchment that people approach on the same roads every week — outdoor on those approaches, not a city-wide dusting.",
      "A brand that can hold a corridor long enough for the commute to see it more than once. Continuity is the product; a fortnight is usually a teaser, not a plan.",
      "A transit layer that has something static to connect to. Bus and cab media earn their keep when they pass the same catchments the hoardings hold.",
      "A market where permission is the constraint as much as the structure is — sky-sign rules and advertisement tax change what can actually go up, and a plan that ignores that is a plan that slips.",
    ],
    deliverables: [
      "A corridor and catchment rationale before any site is proposed",
      "Site-by-site reasoning — position, approach, competing sightlines",
      "Negotiated rates with the media owner, disclosed to you",
      "Mounting and printing managed, with proofing before display",
      "Geo-tagged, dated photographs of every placement once live",
      "Mid-campaign condition checks and a post-campaign report",
    ],
    notFor:
      "If you need a measurable click within a fortnight, buy performance media instead. Outdoor builds familiarity and salience, and it needs continuity to do it. We will tell you when a short outdoor burst is the wrong instrument rather than sell you one.",
    sitsInPlan:
      "Outdoor holds the corridor. Transit follows the commute. DOOH takes the hours that a printed face cannot change. Retail and activations sit at the end of the same journey, where someone can actually walk in.",
    faq: [
      {
        q: "How much does hoarding advertising cost in an Indian city?",
        a: "It depends on the corridor, the side of the road, the height and angle, the illumination, the permission file, the production (flexing and mounting), and how long you hold it — not on a city average. We will show you the variables that move a negotiation in your market. We will not publish a number that would be wrong the moment the next tender or the next season lands.",
      },
      {
        q: "Do you own the hoardings?",
        a: "No. We plan, negotiate and run. The structure belongs to a media owner who holds it under a lease, a licence or a municipal tender. Independence from any one owner is the reason we can argue for the corridor you need rather than the inventory they need to fill.",
      },
      {
        q: "What is the difference between a hoarding, a unipole and a gantry?",
        a: "A hoarding is a large panel on a roadside, rooftop or wall structure. A unipole is a single-pole structure, usually taller and read from further away. A gantry spans the carriageway, so both directions see it and the permission is almost always a different file. They are not interchangeable products, and they are not licensed as one.",
      },
      {
        q: "How do you prove the campaign actually ran?",
        a: "Dated, geo-tagged monitoring photographs of every placement once live, plus mid-campaign condition checks. Non-delivery is the fear this industry has earned. A photograph with a stamp is a duller answer than a case study, and a better one.",
      },
      {
        q: "How long should an outdoor campaign run?",
        a: "Long enough for the same commute to see it more than once. A month on one corridor usually beats a fortnight across a city. Seasonal windows — wedding, festival, exam, harvest — change the answer, and they change it differently in Kanpur than they do in Kochi.",
      },
      {
        q: "Who licenses outdoor in an Indian city?",
        a: "The municipal corporation, a development authority, or both, under heads that are usually called sky-sign or advertisement tax. The issuing body and the bye-law differ by city. Where we have read the current rule we say so on the city page; where we have not, we say we have not, rather than invent a licence we have not seen.",
      },
    ],
  },

  dooh: {
    slug: "dooh",
    lede: "Digital screens bought by daypart and location rather than by the month, so weight lands when the audience is actually in front of them.",
    thesis: "The same screen is a different product at nine and at four.",
    frame: {
      src: "/media/hours/office-cyberhub.jpg",
      city: "Gurugram",
      alt: "A glass office tower above a pedestrian plaza at an Indian commercial hub",
      caption: "Office-district hour. Weight belongs here, not in a flat monthly rate.",
    },
    argument: [
      "The reason to buy a digital screen is not that it is digital. It is that the same structure can carry a different message at eight in the morning than it carries at nine at night, and that a campaign can be changed after it launches without reprinting anything. A brand that buys DOOH and runs one static creative for four weeks has bought an expensive hoarding.",
      "The trap is the loop. A screen sold as a share of a rotation is only worth what the rotation gives it — how many other advertisers, how long each slot, and whether your slot lands when footfall peaks or when the corridor is empty. Those are the questions that decide value, and they are the ones least often asked at the point of purchase.",
      "Illumination is not a production extra on a digital face; it is the face. A screen that cannot hold contrast at noon is a blank rectangle in the one hour an office district is busiest. Monitoring photographs still matter — a play-out log says the file was sent; a dated picture says the screen was on, in colour, and pointing the right way.",
    ],
    method: [
      {
        title: "Buy the daypart, not the month",
        body: "Office-district screens are worth having at commute hours and worth very little at four in the afternoon. Mall and high-street screens invert that. We weight the buy to when your audience is present rather than pay flat across a calendar month.",
      },
      {
        title: "Interrogate the loop",
        body: "Slot length, loop duration and how many advertisers share it decide what a screen is really worth. We ask for it in writing before committing, because a ten-second slot in a two-minute loop and the same slot in an eight-minute loop are not the same purchase.",
      },
      {
        title: "Creative built for the format",
        body: "A portrait lift screen viewed from two metres and an LED façade viewed from two hundred are different design problems. We specify per format — legible word counts, contrast that survives daylight, and a message that completes inside the slot.",
      },
      {
        title: "Change what is not working",
        body: "The advantage of digital is that a message can be replaced mid-flight. We plan for at least one creative decision point during a campaign instead of treating the launch asset as final.",
      },
    ],
    whenItWorks: [
      "A message that should change with the hour — commute versus lunch versus evening — on a screen that can actually change.",
      "A launch that needs a mid-flight edit: a price, a SKU, a date, a language. Reprinting a hoarding for that is the expensive way.",
      "A location whose audience is sharply timed. An office corridor at 9am is not the same purchase as the same corridor at 4pm.",
      "A loop you have seen in writing. Slot, duration, and how many other advertisers share it, agreed before the booking, not after the invoice.",
    ],
    deliverables: [
      "Daypart and location weighting mapped to your audience",
      "Loop composition and slot length confirmed in writing",
      "Format-specific creative specifications before build",
      "Play-out logs reconciled against what was booked",
      "Photographs of the screen live, dated and geo-tagged",
      "Mid-flight creative swap where the plan calls for it",
    ],
    notFor:
      "If the site only justifies one creative and one daypart, a static placement will usually deliver more presence for the same money. Digital earns its premium when you use what makes it digital.",
    sitsInPlan:
      "DOOH takes the hours a printed hoarding cannot change. It is a poor substitute for holding a corridor, and a good one for timing a message to the people who are actually in front of it.",
    faq: [
      {
        q: "How much does DOOH advertising cost in India?",
        a: "By daypart, location, slot length and loop share — not by the month, and not by a city average. A ten-second slot in a two-minute loop and the same slot in an eight-minute loop are different purchases. We price the rotation you are actually in. We do not publish a starting-from figure that would describe none of them.",
      },
      {
        q: "What is a loop, and why does it matter?",
        a: "The loop is the rotation the screen plays: your slot, everyone else's, and how long before yours comes around again. It is the thing that decides how often a passer-by sees you. Ask for it in writing. A screen sold without a loop specification is a screen sold on hope.",
      },
      {
        q: "When is a static hoarding the better buy?",
        a: "When you have one message and one daypart, and the site justifies holding a face rather than a share of a rotation. Digital earns a premium for changeability and for timing. If you use neither, you have bought an expensive hoarding.",
      },
      {
        q: "How do you prove a digital campaign played?",
        a: "Play-out logs reconciled against the booking, and dated, geo-tagged photographs of the screen live. A log without a picture can describe a file that never reached the face. A picture without a log cannot show the hours you paid for.",
      },
      {
        q: "Can creative be changed after launch?",
        a: "Yes — that is the reason to buy digital at all. We plan for at least one decision point mid-flight. The swap is part of the work, not a favour asked after the first week disappoints.",
      },
      {
        q: "Do you own the screens?",
        a: "No. We buy access to them. Ownership would lock the plan to one network's inventory. Independence is what lets us weight an office daypart on one owner's screen and an evening high-street on another's.",
      },
    ],
  },

  "retail-hyperlocal": {
    slug: "retail-hyperlocal",
    lede: "Media placed inside the trade area of a specific store or cluster, planned from catchment behaviour rather than city-level reach.",
    thesis: "Draw the catchment first. The panel is what you go and get.",
    frame: {
      src: "/media/hours/mall-atrium.jpg",
      city: "Mall atrium",
      alt: "A mall atrium with a hanging light installation and shoppers already in the space",
      caption: "Close-range, already in spending mode — a different product from a roadside face.",
    },
    argument: [
      "Most purchase decisions are made within a few kilometres of where the purchase happens. A city-wide plan spends most of its weight on people who will never travel to the store, which looks efficient on a reach number and is not efficient at all on a footfall one. Hyperlocal inverts the arithmetic: fewer people, far more of whom can act.",
      "It is also the layer where India's residential density does unusual work. A society lift panel is seen twice a day by the same household, in a confined space, with nothing else to look at. That is a frequency profile no mass medium can buy, and it is available at a fraction of the cost — provided the catchment has been chosen on evidence rather than on which societies a vendor happens to hold.",
      "The production is small and the permission is local, which is why both get skipped. A lift panel that is poorly flexed or dimly lit is a notice on a wall. A mall fascia treated as a sky-sign, or a pole kiosk run without the corporation's advertisement-tax file, is a booking that does not survive the first inspection. Monitoring photographs still close the loop: the catchment is only as good as the face that actually went up.",
    ],
    method: [
      {
        title: "Draw the catchment first",
        body: "We define the realistic trade area of the outlet — how far people travel to it, which routes they use, which competing outlets truncate it — before looking at any media. A plan built on an unexamined three-kilometre circle is a guess with a radius.",
      },
      {
        title: "Match the format to the moment",
        body: "Lift panels reach a household at the start and end of the day. Mall atrium and fascia reach a shopper already in spending mode. Store-front and last-mile formats reach someone within minutes of the decision. These are different jobs and should not be bought interchangeably.",
      },
      {
        title: "Cluster, do not scatter",
        body: "Saturating the catchment of one outlet reliably moves that outlet. One panel each across thirty societies spread over a city moves nothing measurable. We would rather do three catchments properly than thirty thinly.",
      },
      {
        title: "Read it against footfall",
        body: "Hyperlocal is one of the few outdoor layers where a before-and-after read at the store is practical. We ask for the outlet's own numbers and set the campaign window so the comparison is honest.",
      },
    ],
    whenItWorks: [
      "A store, a cluster, or a dealership with a trade area you can draw — not a brand that only exists on a screen.",
      "A household you can reach twice a day in a lift, on the same route, with nothing else competing for the glance.",
      "A mall or high-street moment where the shopper is already in spending mode, and the fascia or atrium is the last message before the till.",
      "Three catchments done properly. Thirty societies with one panel each is a mailing list, not a plan.",
    ],
    deliverables: [
      "Catchment definition with the reasoning shown",
      "Format mix mapped to the decision moment it serves",
      "Society, mall and outlet-adjacent placement coordinated as one buy",
      "Approvals and permissions handled with the relevant management",
      "Geo-tagged, dated photographs of every placement",
      "A read against the outlet's own footfall or sales window where available",
    ],
    notFor:
      "If the brand has no physical point of purchase and no geographically concentrated audience, this layer will underperform a broader outdoor plan. Hyperlocal earns its keep when there is somewhere specific for the audience to go.",
    sitsInPlan:
      "Retail is the last mile of a corridor the outdoor plan already holds. Activations sit in the same catchment when someone needs to stop, not just pass. City-wide outdoor without this layer is a plan that ends a kilometre too early.",
    faq: [
      {
        q: "How much does retail and mall advertising cost?",
        a: "By catchment, format and permission — a lift panel, a fascia, an atrium and a pole-kiosk run are different purchases, and society management, mall management and the corporation each invoice differently. We will show you the variables. We will not print a band that pretends they are one product.",
      },
      {
        q: "What is a catchment, and how do you draw it?",
        a: "The realistic trade area of the outlet: how far people travel to it, which routes they use, which competing outlets cut it short. It is not a three-kilometre circle on a map. We draw it from how the store actually trades, then look for media inside that shape.",
      },
      {
        q: "Why does a society lift panel work?",
        a: "The same household sees it twice a day, in a confined space, with nothing else to look at. That frequency is the product. It fails when the society is outside the trade area, or when the panel is treated as leftover inventory a vendor happened to hold.",
      },
      {
        q: "Who has to approve mall and society media?",
        a: "Mall management, society management, and in many cities the corporation under sky-sign or advertisement tax. We handle the relevant file before anything goes up. A booking that skips the permission is a booking that comes down.",
      },
      {
        q: "Can you measure whether hyperlocal worked?",
        a: "Against the outlet's own footfall or sales window, when the store will share it and the campaign is timed so the comparison is honest. That is a read, not a research figure, and it is one of the few outdoor layers where it is practical.",
      },
      {
        q: "Do you hold society or mall inventory?",
        a: "No. We plan the catchment and negotiate access. Holding the panels would decide the plan from the stock. The catchment decides the plan; the stock is what we go and get.",
      },
    ],
  },

  "broadcast-print-cinema": {
    slug: "broadcast-print-cinema",
    lede: "Traditional weight where it still carries a market — regional news, radio drive-time, the dailies people actually read, and cinema on-screen.",
    thesis: "The right title in Kanpur is not the right one in Kochi.",
    frame: {
      src: "/media/hours/cinema-screen.jpg",
      city: "Cinema",
      alt: "An empty cinema, red seats facing a dark screen",
      caption: "Comprehension, not reach — a dark room and no second device.",
    },
    argument: [
      "It has become fashionable to write off print and radio nationally, and in several markets that is simply wrong. A regional daily still sets the morning agenda in large parts of India, and a masthead that carries local credibility transfers some of it to what appears in it. Radio owns the drive-time hour in cities where the commute is long and the vehicle is private. Neither is a mass medium any more; both are still a concentrated one.",
      "Cinema is the opposite argument. Its audience is small relative to television and its attention is close to total — a dark room, a captive screen and no second device in hand. For a launch that needs the message understood rather than merely seen, that trade is often worth making.",
      "These media are still licensed and still documented, just not as a hoarding is. Print carries advertisement tax in the cities that levy it on insertions; a sky-sign rule does not apply to a page and applying it anyway is how a plan gets the permission file wrong. Illumination is a cinema-screen problem, not a newspaper one. Monitoring photographs close outdoor; tearsheets and play-out logs close this. We do not print circulation or listenership figures — those are licensed research numbers we do not have the right to repeat.",
    ],
    method: [
      {
        title: "Market by market, not nationally",
        body: "The right print title in Kanpur is not the right one in Kochi, and a national average hides both. We plan these media at the level of the market you are actually trying to move.",
      },
      {
        title: "Radio bought by hour",
        body: "Drive-time is the product. Off-peak inventory is cheap because it is worth less. We buy the hour and the station the audience is genuinely with, and we would rather run fewer, better-placed spots than a large number of filler ones.",
      },
      {
        title: "Print for credibility, not reach",
        body: "Where print still works it works because of the title's standing, not its circulation. Position, section and day of week carry most of the value, and they are the parts a rate card does not describe.",
      },
      {
        title: "Cinema for comprehension",
        body: "On-screen is planned around the release calendar and the properties your audience will turn out for, because the film decides the audience far more than the multiplex does.",
      },
    ],
    whenItWorks: [
      "A market where a regional daily still sets the morning, and the masthead's standing is the thing you are buying — not a national reach number.",
      "A city whose commute is long enough, and private enough, that drive-time radio is a room the brand can enter.",
      "A launch that needs the message understood in the dark, on a cinema screen, for the length of a trailer — not glanced at from a flyover.",
      "A plan argued city by city. A national average of print or radio is how both Kanpur and Kochi get the wrong title.",
    ],
    deliverables: [
      "Title, station and screen selection argued at market level",
      "Position, section, daypart and release-window specifics agreed in advance",
      "Negotiated rates with the owner, disclosed to you",
      "Tearsheets for print, broadcast logs for radio and television",
      "Cinema play-out confirmation by property and location",
      "A consolidated post-campaign report across every channel used",
    ],
    notFor:
      "If your audience is young, urban and streaming-first, most of this will underdeliver against digital and outdoor. These media are precise instruments for particular markets, not a default layer to add for completeness.",
    sitsInPlan:
      "Broadcast and print carry a market outdoor cannot speak to in the morning paper or the car. Cinema is for comprehension. None of them replace a corridor, and a corridor does not replace a masthead that still sets the day.",
    faq: [
      {
        q: "How much does radio, print or cinema advertising cost?",
        a: "By hour and station for radio, by title, section and day for print, by film and property for cinema. A drive-time spot and an off-peak spot are not the same purchase; neither is a masthead on Monday and a filler on Thursday. We will show you the variables in your market. We will not publish a rate.",
      },
      {
        q: "Why don't you publish circulation or listenership figures?",
        a: "Those are licensed research numbers — IRS, RAM, BARC — and we do not have the right to print them. Character of the audience, yes. A figure we have not licensed, no. We will show you the current ones at planning, from the source that owns them.",
      },
      {
        q: "Is print still worth buying in India?",
        a: "In some markets, yes, and in others it is nostalgia. The test is whether a specific title still sets the morning for the people you need. A national write-off hides the markets where it does; a national buy hides the ones where it does not.",
      },
      {
        q: "Why buy cinema instead of a hoarding?",
        a: "For comprehension, not reach. A dark room, a captive screen and no second device is a different product from a roadside face. If the job is to be seen on a commute, buy the hoarding. If the job is to be understood, the screen is often the right trade.",
      },
      {
        q: "How do you prove print, radio or cinema ran?",
        a: "Tearsheets for print, broadcast logs for radio and television, play-out confirmation by property for cinema. Monitoring photographs belong to outdoor. Each medium has a document that matches how it is sold; we collect that document, not a substitute.",
      },
      {
        q: "Do you own airtime or titles?",
        a: "No. We plan market by market and buy from the owner. A network mandate would decide the title before the market did. The market decides; the title is what we go and get.",
      },
    ],
  },

  activations: {
    slug: "activations",
    lede: "Physical presence in the places a brand needs to be seen, and the channel programmes that keep distribution engaged.",
    thesis: "The venue is the campaign. Media pointed at the window is what fills it.",
    frame: {
      src: "/media/hours/sunrise-market.jpg",
      city: "Local market",
      alt: "A local market street in warm light, shoppers walking between stalls",
      caption: "Catchment hour — people already within walking distance of a decision.",
    },
    argument: [
      "Media buys attention. An activation buys a few minutes of it, plus something a person carries away — a demonstration they watched, a sample they tried, a conversation with someone who could answer their question. In categories where the product has to be experienced before it is trusted, that is not a supporting tactic; it is the campaign, and the media around it exists to drive footfall to it.",
      "Corporate gifting and distributor programmes are the same instinct pointed at the trade rather than the consumer. In Indian distribution, the relationship with the channel partner frequently decides shelf position, push and priority. A gifting programme that reaches those people at the right moment does work that no amount of consumer advertising replaces.",
      "The ground kit is media, and it is built like media. A gate arch and a pole kiosk are structures that need flexing, mounting and a permission; a canopy that looks unfinished is a stall, not a brand. Monitoring photographs close every day on site the way they close a hoarding. Where the goods that fund the work move as barter, they move through channels named in advance — the same discipline as a media-barter trade, pointed at the people who actually stock the brand.",
    ],
    method: [
      {
        title: "Site selection is the campaign",
        body: "A mall atrium on a weekend, a society gate on a festival evening and an office park at lunch produce entirely different conversations. We choose for the audience you need to talk to, not for the space that is cheapest to hold.",
      },
      {
        title: "Staffed properly or not at all",
        body: "An under-briefed promoter turns an activation into a nuisance. Briefing, scripting and supervision are part of the cost, and a plan that quietly omits them is not cheaper — it just fails later.",
      },
      {
        title: "Media pointed at the activation",
        body: "Outdoor and hyperlocal in the surrounding catchment during the activation window are what convert a good idea into attendance. Run in isolation, an activation reaches whoever happened to walk past.",
      },
      {
        title: "Gifting through controlled channels",
        body: "Corporate, institutional and distributor gifting is placed through defined channels agreed in advance, so it reaches the people intended and does not leak into the open market.",
      },
    ],
    whenItWorks: [
      "A product that has to be tasted, tried, demonstrated or asked about before anyone will buy it.",
      "A weekend atrium, a festival gate or a weekday lunch crowd — chosen for who will stop, not for which space was free.",
      "Surrounding outdoor or hyperlocal in the same window, so the activation is a destination and not a stall people happen to pass.",
      "A distributor or institutional programme whose recipients you can name, and whose channels you can write into the agreement.",
    ],
    deliverables: [
      "Site selection with the rationale for each location",
      "Permissions and approvals handled with the venue or authority",
      "Staffing, briefing and on-ground supervision",
      "Surrounding media planned to the activation window",
      "Dated, geo-tagged documentation of every day on site",
      "A footfall and interaction report at the end of the activity",
    ],
    notFor:
      "If there is nothing for the audience to do, taste, try or ask about, an activation is an expensive way to hand out leaflets. The format needs a reason to stop, and if the product does not supply one we will say so.",
    sitsInPlan:
      "An activation is the stop at the end of a catchment the outdoor and retail plan already built. Barter is how the goods that fund it can move without cash, through the same controlled channels the gifting programme uses.",
    faq: [
      {
        q: "How much does a brand activation cost in India?",
        a: "By venue, duration, staffing, permissions and the media pointed at the window — a weekend atrium and a festival gate are different jobs, and an unstaffed stall is not a cheaper version of either. We will show you what moves the number. We will not print one.",
      },
      {
        q: "Where should an activation sit?",
        a: "Wherever the people you need to talk to will actually stop. A mall atrium on a weekend, a society gate on a festival evening and an office park at lunch are three different conversations. The space that is cheapest to hold is usually the wrong answer.",
      },
      {
        q: "Why do you insist on surrounding media?",
        a: "Because an activation without a catchment plan reaches whoever walked past. Outdoor and hyperlocal in the same window turn a good idea into attendance. Isolation is how a well-built stall stays empty.",
      },
      {
        q: "What does corporate gifting actually do?",
        a: "It reaches the trade — distributors, institutions, channel partners — at the moment shelf position and push are decided. Consumer advertising does not do that work. The goods move through named channels so they do not leak into the open market and undercut the brand.",
      },
      {
        q: "How do you document an activation?",
        a: "Dated, geo-tagged photographs of every day on site, plus a footfall and interaction report at the end. Same discipline as a hoarding: if it cannot be shown, it did not run.",
      },
      {
        q: "Can activations be funded by barter?",
        a: "Yes, when the goods can move through controlled channels agreed in advance — the same structure as a media-barter trade. The activation is still planned as an activation. The commercial model is a separate question, answered last.",
      },
    ],
  },
};
