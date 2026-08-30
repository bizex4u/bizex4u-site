import type { Term } from "./types";

/* Digital out-of-home. The two terms that decide whether a DOOH buy is
   a media plan or a guess: what the medium is, and what a loop is. */

export const dooh: Term = {
  slug: "dooh",
  term: "DOOH",
  alsoCalled: ["Digital out-of-home", "LED screen advertising", "Digital billboard"],
  category: "Digital",
  metaTitle: "What Is DOOH (Digital Out-of-Home)?",
  metaDescription:
    "DOOH is outdoor advertising on digital screens, sold by time in a rotating loop rather than by the month. How it differs from a printed hoarding.",
  definition:
    "DOOH — digital out-of-home — is outdoor advertising displayed on electronic screens rather than printed material, sold as slots of time inside a rotating loop that several advertisers share, rather than as sole occupancy of a panel for a month.",
  body: [
    "The unit of purchase is the difference that matters. A printed hoarding is yours alone for a period: nobody else appears on it. A DOOH screen carries a loop of several advertisers, and what you buy is a slot inside that loop — a number of seconds, repeating, for a number of hours a day, across a number of days. Two DOOH proposals quoting the same monthly figure can therefore be selling very different amounts of exposure, and the loop is where the difference hides.",
    "The second difference is that DOOH can be bought by time of day. A printed panel says the same thing at 4am as at 6pm and you pay for both. A screen can carry a lunchtime message at lunchtime, a commute message at the commute, and something else on a Sunday — which is the format's real advantage and the one most Indian DOOH plans do not use.",
    "The third is that a screen can be reconciled. A digital system produces play-out logs, so a booking can be checked against what actually played. That is a materially stronger form of proof than photography, and it is worth asking for by name at the point of contracting rather than at the end of the campaign.",
  ],
  sections: [
    {
      q: "How is DOOH different from a hoarding?",
      a: [
        "Exclusivity and time. A hoarding is sole occupancy for a period; a DOOH screen is a share of a rotating loop, so several brands appear on the same face in sequence.",
        "That makes the comparison between a DOOH rate and a hoarding rate meaningless unless the loop is known. A screen at half the monthly cost of a nearby hoarding may be delivering a small fraction of the exposure, or considerably more, depending entirely on how many advertisers share the loop and how long it runs.",
      ],
    },
    {
      q: "What should be confirmed in writing before booking DOOH?",
      a: [
        "Four things, and all four are routinely left vague. The loop length and how many advertisers are in it. Your slot duration and the number of plays per hour that follows from those two. The operating hours, because a screen that is off overnight is not delivering what a twenty-four-hour figure implies. And whether play-out logs will be provided and reconciled against the booking.",
        "A proposal that quotes a monthly rate and a screen location but none of these has not told you what you are buying. This is the single most common failure in Indian DOOH buying and it is entirely avoidable at the contracting stage.",
      ],
    },
    {
      q: "Is DOOH worth more than printed outdoor?",
      a: [
        "Where the message needs to change, yes, decisively — by daypart, by day of week, by stock position, by weather, by match result. That flexibility is what you are paying for and a printed panel simply cannot do it.",
        "Where the message is fixed for the whole campaign, often no. A static message on a shared loop is paying a premium for a capability it is not using, and the same money in printed large format buys sole occupancy. The question to ask of any DOOH line in a plan is: what is this screen doing that a printed panel could not?",
      ],
    },
  ],
  whenItWorks: [
    "Messages that should change by daypart — a breakfast message at breakfast, a commute message at the commute.",
    "Campaigns tied to something live: a fixture, a weather condition, a stock position, a launch date.",
    "Short windows, because there is no printing or mounting lead time — creative can go up the same day.",
    "Retail and mall environments, where the screen sits close to the point of purchase and the message can be specific.",
    "Any campaign where reconciled play-out logs matter more than a photograph.",
  ],
  whenItDoesNot:
    "If the creative is fixed for the whole campaign, DOOH is usually the wrong instrument: you are sharing a face with other advertisers and paying for a flexibility you are not using, where printed large format would give you sole occupancy for the same money. It is also a poor buy wherever the loop cannot be confirmed in writing — an unconfirmed loop is an unknown quantity of exposure at a known price, which is not a media buy. And screen quality varies enormously; a dim or failing screen in daylight delivers considerably less than the specification implies.",
  priceFactors: [
    "Loop length and the number of advertisers sharing it — the real determinant of what you get.",
    "Slot duration and plays per hour.",
    "Operating hours, and whether the screen genuinely runs them.",
    "Daypart. Peak commute and evening slots price above overnight.",
    "Location and screen size, which matter less than buyers expect once the loop is known.",
    "Whether play-out reconciliation is included or charged.",
  ],
  faq: [
    {
      q: "How much does DOOH advertising cost in India?",
      a: "We do not publish rates, and on this format a rate without a loop is not information. What sets the number is loop length, slot duration, plays per hour, operating hours and daypart — two screens at the same monthly price can deliver wildly different exposure. Tell us the market and the objective and we will negotiate against several operators and show you the loop maths.",
    },
    {
      q: "What is a play-out log?",
      a: "A record produced by the screen's own system of what played, when, and for how long. It is the strongest proof of delivery available in outdoor, and it should be reconciled against the booking rather than filed. Ask for it in the contract, not at the end.",
    },
    {
      q: "Can DOOH creative be changed mid-campaign?",
      a: "Yes, and that is most of the reason to buy it. There is no printing or remounting, so creative can change by daypart, by day, or in response to something that happened that morning. A DOOH plan that never changes its creative has bought the expensive version of a printed panel.",
    },
    {
      q: "Is a digital hoarding the same as DOOH?",
      a: "Yes — digital hoarding, digital billboard and LED screen are all everyday names for the same thing. DOOH is the term the trade and the buying documentation use, and it covers indoor screens in malls, retail and transit as well as roadside ones.",
    },
  ],
  related: ["loop", "hoarding", "illumination", "monitoring-photographs"],
  cities: ["hyderabad", "bangalore", "mumbai"],
};

export const loop: Term = {
  slug: "loop",
  term: "Loop",
  alsoCalled: ["Loop length", "Rotation", "Share of voice", "SOV"],
  category: "Digital",
  metaTitle: "What Is a Loop in DOOH Advertising?",
  metaDescription:
    "A loop is the repeating sequence of slots on a digital screen. Loop length decides how often your ad plays, and most proposals leave it out.",
  definition:
    "A loop is the full repeating sequence of advertising slots on a digital screen: every advertiser plays once per loop, so the loop length divided by your slot duration is your share of the screen, and the loop length divided into the operating hours is how often you appear.",
  body: [
    "The loop is the single most important number in a DOOH buy and the one most likely to be missing from the proposal. If a screen runs a sixty-second loop and your spot is ten seconds, you hold a sixth of that screen and you play once a minute. If the same screen runs a three-minute loop, the identical ten-second spot is a eighteenth of the screen and plays a third as often — for a price that may not have moved at all.",
    "Share of voice, usually written SOV, is the same idea expressed as a proportion: your slot duration as a percentage of the loop. It is a useful shorthand as long as it is paired with the loop length, because SOV alone does not tell you how often you appear. Ten per cent of a one-minute loop and ten per cent of a five-minute loop are the same share and completely different campaigns.",
    "Loops are also not always fixed. Some operators lengthen the loop as they sell more advertisers into it, which quietly dilutes everybody already on the screen. That is why the loop length belongs in the contract as a maximum rather than in the proposal as a description.",
  ],
  sections: [
    {
      q: "How do I calculate how often my ad plays?",
      a: [
        "Divide the operating hours by the loop length. A sixty-second loop running fourteen hours a day gives eight hundred and forty plays a day; a hundred-and-eighty-second loop over the same fourteen hours gives two hundred and eighty. Same screen, same hours, a third of the exposure.",
        "Then check that the operating hours are real. A screen quoted as running eighteen hours that is dark from midnight, or dimmed to the point of illegibility in direct afternoon sun, is not delivering the hours in the arithmetic.",
      ],
    },
    {
      q: "What is share of voice in DOOH?",
      a: [
        "Your slot duration as a proportion of the total loop. A ten-second spot in a hundred-second loop is ten per cent share of voice.",
        "It is only half the information. Share of voice tells you how much of the screen is yours; loop length tells you how often that share comes round. Always ask for both, and get the loop length written as a cap so it cannot be extended under you mid-campaign.",
      ],
    },
    {
      q: "Why is the loop missing from most DOOH proposals?",
      a: [
        "Because it is the number that makes two screens comparable, and comparability is not always in the seller's interest. A proposal listing a location, a screen size and a monthly rate looks complete and tells you nothing about how much exposure you are buying.",
        "Asking for it costs nothing and changes the conversation immediately. If an operator will not put loop length and slot duration in writing, that is itself the answer.",
      ],
    },
  ],
  whenItWorks: [
    "Comparing two DOOH proposals — it is the only way to make the rates mean the same thing.",
    "Negotiating, because a capped loop length is often easier to win than a lower rate.",
    "Planning frequency, since plays per day follows directly from loop length and operating hours.",
    "Reconciling play-out logs at the end of a campaign against what was contracted at the start.",
  ],
  whenItDoesNot:
    "Loop arithmetic tells you how often your ad appears and nothing about whether anybody saw it. A screen with an excellent loop in a location nobody looks at is still a bad buy, and a screen that is dim in daylight delivers less than its plays imply. Treat the loop as the floor of the analysis rather than the whole of it — it makes proposals comparable, it does not make a bad position good.",
  faq: [
    {
      q: "What is a good loop length for DOOH in India?",
      a: "Shorter is better for the advertiser, and anything beyond about two minutes should prompt a question about how many advertisers are sharing the screen. But the number matters less than the contract: the point is to have the loop length written as a maximum so it cannot be extended once you are on the screen.",
    },
    {
      q: "Can the operator change the loop after I book?",
      a: "Some do, by selling additional advertisers into the same screen, which dilutes everyone already on it. This is why we contract loop length as a cap rather than accepting it as a description in a proposal.",
    },
    {
      q: "Is share of voice the same as loop length?",
      a: "No. Share of voice is how much of the screen is yours; loop length is how often that share comes round. Ten per cent of a one-minute loop and ten per cent of a five-minute loop are the same share and very different campaigns. You need both numbers.",
    },
  ],
  related: ["dooh", "monitoring-photographs", "hoarding"],
  cities: ["bangalore", "hyderabad"],
};
