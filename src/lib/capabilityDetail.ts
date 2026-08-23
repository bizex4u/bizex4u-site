/* ------------------------------------------------------------------
   Capability detail — the long-form content behind /what-we-do/*.

   House rules, non-negotiable and repeated here because this is the
   file most likely to be edited by someone who has not read them:

     · Never name a site, a count, an availability window or a rate.
       Categories and method only.
     · Never claim ownership of media. Bizex4U plans, negotiates and
       runs. It does not own the hoardings.
     · No invented awards, no invented client outcomes, no tenure claim.

   Voice: plain, specific, and willing to say when something is a bad
   idea. An Indian marketing head has read a hundred agency decks that
   all say "360-degree integrated solutions". The differentiator on a
   website is being concrete about method.
------------------------------------------------------------------- */

export type CapabilityDetail = {
  slug: string;
  /* Sits under the H1. One sentence, no adjectives that cannot be
     defended in a meeting. */
  lede: string;
  /* The argument for planning this medium properly. Two paragraphs. */
  argument: string[];
  /* How the buy is actually made. This is the section a client reads
     to decide whether we know what we are doing. */
  method: { title: string; body: string }[];
  /* What lands on their desk. Deliverables, not promises. */
  deliverables: string[];
  /* When to spend elsewhere. Saying this is the cheapest credibility
     on the whole site. */
  notFor: string;
};

export const capabilityDetail: Record<string, CapabilityDetail> = {
  "outdoor-transit": {
    slug: "outdoor-transit",
    lede: "Large-format and transit media, planned around how a city actually moves rather than around what happens to be free this month.",
    argument: [
      "Outdoor is the only medium a person cannot close, skip or scroll past. That is its whole advantage, and it is squandered the moment a plan is built from an availability list instead of from a route. Two hoardings can carry identical rate cards and identical claimed impressions while one sits on a corridor a million people commit to every morning and the other sits on a road they take when the first is blocked.",
      "So the first question is never which sites are free. It is which movements the brand needs to intercept — the commute, the school run, the weekend retail trip, the approach to a dealership — and which structures sit on those movements at the moment attention is available rather than at the moment traffic is heaviest. A site at a signal where vehicles stop for ninety seconds is a different product from a site on a flyover taken at speed, and it should not be bought as though it were the same thing.",
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
  },

  dooh: {
    slug: "dooh",
    lede: "Digital screens bought by daypart and location rather than by the month, so weight lands when the audience is actually in front of them.",
    argument: [
      "The reason to buy a digital screen is not that it is digital. It is that the same structure can carry a different message at eight in the morning than it carries at nine at night, and that a campaign can be changed after it launches without reprinting anything. A brand that buys DOOH and runs one static creative for four weeks has bought an expensive hoarding.",
      "The trap is the loop. A screen sold as a share of a rotation is only worth what the rotation gives it — how many other advertisers, how long each slot, and whether your slot lands when footfall peaks or when the corridor is empty. Those are the questions that decide value, and they are the ones least often asked at the point of purchase.",
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
  },

  "retail-hyperlocal": {
    slug: "retail-hyperlocal",
    lede: "Media placed inside the trade area of a specific store or cluster, planned from catchment behaviour rather than city-level reach.",
    argument: [
      "Most purchase decisions are made within a few kilometres of where the purchase happens. A city-wide plan spends most of its weight on people who will never travel to the store, which looks efficient on a reach number and is not efficient at all on a footfall one. Hyperlocal inverts the arithmetic: fewer people, far more of whom can act.",
      "It is also the layer where India's residential density does unusual work. A society lift panel is seen twice a day by the same household, in a confined space, with nothing else to look at. That is a frequency profile no mass medium can buy, and it is available at a fraction of the cost — provided the catchment has been chosen on evidence rather than on which societies a vendor happens to hold.",
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
  },

  "broadcast-print-cinema": {
    slug: "broadcast-print-cinema",
    lede: "Traditional weight where it still carries a market — regional news, radio drive-time, the dailies people actually read, and cinema on-screen.",
    argument: [
      "It has become fashionable to write off print and radio nationally, and in several markets that is simply wrong. A regional daily still sets the morning agenda in large parts of India, and a masthead that carries local credibility transfers some of it to what appears in it. Radio owns the drive-time hour in cities where the commute is long and the vehicle is private. Neither is a mass medium any more; both are still a concentrated one.",
      "Cinema is the opposite argument. Its audience is small relative to television and its attention is close to total — a dark room, a captive screen and no second device in hand. For a launch that needs the message understood rather than merely seen, that trade is often worth making.",
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
  },

  activations: {
    slug: "activations",
    lede: "Physical presence in the places a brand needs to be seen, and the channel programmes that keep distribution engaged.",
    argument: [
      "Media buys attention. An activation buys a few minutes of it, plus something a person carries away — a demonstration they watched, a sample they tried, a conversation with someone who could answer their question. In categories where the product has to be experienced before it is trusted, that is not a supporting tactic; it is the campaign, and the media around it exists to drive footfall to it.",
      "Corporate gifting and distributor programmes are the same instinct pointed at the trade rather than the consumer. In Indian distribution, the relationship with the channel partner frequently decides shelf position, push and priority. A gifting programme that reaches those people at the right moment does work that no amount of consumer advertising replaces.",
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
  },
};
