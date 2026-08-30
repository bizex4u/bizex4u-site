import type { Term } from "./types";

/* Production and proof. The three things that happen after the media
   is booked and that decide whether the campaign actually ran. */

export const flexingAndMounting: Term = {
  slug: "flexing-and-mounting",
  term: "Flexing and Mounting",
  alsoCalled: ["Flex printing", "Flex", "Installation", "Pasting"],
  category: "Production",
  metaTitle: "What Is Flexing and Mounting in Outdoor?",
  metaDescription:
    "Flexing is printing a campaign onto flex; mounting is fitting it to the structure. Both sit outside the media rate and both decide how it looks.",
  definition:
    "Flexing is printing a campaign onto flex — the coated PVC sheet most Indian outdoor advertising is printed on — and mounting is fitting the printed sheet to the structure. Both are production costs, quoted separately from the media, and both are usually the client's.",
  body: [
    "Almost every first-time outdoor buyer in India is surprised that the media rate does not include the thing people actually see. The media rate buys the right to occupy the position for a period. Printing the artwork and fixing it to the structure are separate, and on a large campaign they are a meaningful share of the total rather than a rounding error.",
    "Flex is the standard substrate: a woven base coated in PVC, printed by wide-format inkjet, hemmed and eyeleted at the edges so it can be tensioned onto a frame. It is cheap, fast, and tolerant of Indian weather, which is why it dominates. It is also the reason outdoor artwork has to be built differently from press artwork — flex is read at distance, printed at low resolution relative to its size, and stretched on fitting, so fine type, tight registration and subtle gradients do not survive the journey.",
    "Mounting is where most of the avoidable damage happens. A sheet tensioned unevenly ripples and reads as cheap; one fitted loose flaps and tears in the first strong wind; one fitted in the wrong orientation is a wasted cycle. The difference between a campaign that looks like the mock-up and one that does not is almost never the printing.",
  ],
  sections: [
    {
      q: "Is flex printing included in the hoarding rate?",
      a: [
        "Usually not. The media rate buys occupancy of the position for the period. Flexing and mounting are separate line items, and on a multi-position campaign they are a material part of the budget.",
        "Ask for them to be quoted explicitly at the proposal stage rather than discovered at the invoice stage. A proposal that shows only a media rate is not showing you the cost of the campaign.",
      ],
    },
    {
      q: "How should artwork be prepared for flex?",
      a: [
        "Built for the distance it will be read from, not for the screen it is designed on. That means large type, high contrast, few words, and no reliance on fine detail or subtle tonal transitions, because flex is printed at low resolution relative to its physical size and then stretched.",
        "Bleed matters more than designers expect, since the sheet is hemmed and tensioned at the edges and anything close to the margin will be pulled around the frame. And colour will shift: flex printing is not a proofed press process, so a brand colour that must be exact needs a printed sample approved before the full run.",
      ],
    },
    {
      q: "Who is responsible if a flex tears?",
      a: [
        "It depends what the contract says, and this is worth settling before the campaign rather than after. Damage from weather during the cycle is a normal operational risk on outdoor, and a plan running through a monsoon window should carry an explicit maintenance and replacement provision rather than assuming somebody will notice.",
        "Practically, the party who notices is the party who is looking. That is the argument for monitoring photographs on a schedule rather than only at mounting.",
      ],
    },
  ],
  whenItWorks: [
    "Any printed outdoor format — hoarding, unipole, gantry, wall wrap, kiosk, shelter panel.",
    "Campaigns with a fixed message for the full cycle, where printing once is the efficient answer.",
    "Multi-position campaigns where a single print run covers many sites at a low unit cost.",
  ],
  whenItDoesNot:
    "Flex is the wrong answer where the message needs to change during the campaign — every change is a fresh print and a fresh mounting, which is the arithmetic that makes DOOH worth its premium. It is also poor for anything requiring exact colour fidelity or fine detail, and it carries an environmental cost that some brands are no longer willing to sign off: PVC flex is not readily recyclable, and a large campaign generates a great deal of it. Where that matters, it should be raised at the planning stage rather than at the point of disposal.",
  priceFactors: [
    "Total printed area across the campaign — the dominant variable by a wide margin.",
    "Substrate and quality grade, including whether the position requires backlit-grade material.",
    "Number of separate positions, since mounting is priced per site and per access difficulty.",
    "Height and access — mounting a high unipole costs more than a low panel of the same size.",
    "Any mid-cycle replacement or maintenance provision built into the plan.",
  ],
  faq: [
    {
      q: "What is flex material made of?",
      a: "A woven polyester or nylon base coated with PVC, printed by wide-format inkjet. It is cheap, weather-tolerant and fast to produce, which is why it is the default substrate for Indian outdoor. It is also not readily recyclable, which is worth raising early if that matters to the brand.",
    },
    {
      q: "How long does flexing and mounting take?",
      a: "Printing is quick — usually days rather than weeks. Mounting depends on the number of positions, their height and access, and whether any of them need traffic management. The realistic constraint on a launch date is rarely the printing.",
    },
    {
      q: "Can I reuse a flex on another site?",
      a: "Rarely worth it. Sheets are cut and hemmed to a specific frame, and removal usually damages the edges. A campaign moving between positions of different dimensions is a fresh print in practice.",
    },
  ],
  related: ["hoarding", "unipole", "monitoring-photographs", "illumination"],
};

export const illumination: Term = {
  slug: "illumination",
  term: "Illumination",
  alsoCalled: ["Frontlit", "Backlit", "Non-lit", "Lighting"],
  category: "Production",
  metaTitle: "Frontlit vs Backlit: Illumination in Outdoor",
  metaDescription:
    "How an outdoor panel is lit — frontlit from external fixtures, backlit through the material, or not at all. A separate cost and a real decision.",
  definition:
    "Illumination is how an outdoor advertising panel is lit after dark: frontlit, where fixtures mounted in front throw light onto the printed face; backlit, where light sits behind a translucent material and passes through it; or non-lit, where the panel is dark once daylight goes.",
  body: [
    "Illumination is almost always a separate commercial line from the media, and a non-lit panel and a lit one on the same structure are different products at different prices. On a plan quoted without it specified, assume nothing.",
    "The distinction between frontlit and backlit is not cosmetic. Frontlit is external floodlighting onto an ordinary printed face: cheaper, simpler, and dependent on the fixtures being aimed properly and actually switched on. Backlit puts the light source behind a translucent substrate so the panel glows evenly, which reads considerably better at night and holds colour, but costs more to build, to print for and to run.",
    "The decision that actually matters is whether the audience is there after dark at all. A panel on an office commute corridor that empties by eight is paying for illumination that reaches very few people. A panel on a market approach, a restaurant strip, a station road or an entertainment belt is doing half its work after sunset, and buying it non-lit throws that half away.",
  ],
  sections: [
    {
      q: "What is the difference between frontlit and backlit?",
      a: [
        "Where the light sits. Frontlit means fixtures in front of the panel throwing light onto the printed surface. Backlit means the light is behind a translucent material and shines through it.",
        "Backlit looks materially better at night — even, saturated, no hot spots or shadowed corners — and it needs a different substrate, so the print specification changes too. Frontlit is cheaper and perfectly adequate where the fixtures are properly aimed and maintained, which is the part worth checking rather than assuming.",
      ],
    },
    {
      q: "Is illumination included in the hoarding rate?",
      a: [
        "Usually not, and this is one of the more common surprises on a first outdoor invoice. Illumination is typically quoted separately, and in some arrangements the running electricity is billed separately again.",
        "Ask three things at the proposal stage: whether the position is lit, what type, and who pays for the power. A panel described as illuminated whose fixtures are not switched on is a non-lit panel at a lit price.",
      ],
    },
    {
      q: "When is a non-lit panel the right choice?",
      a: [
        "Where the audience genuinely is not there after dark. A daytime commercial corridor, an office belt, an industrial approach, a highway stretch with little night traffic — on these, paying for illumination is paying for hours nobody is present.",
        "It is also a reasonable trade when the budget forces a choice between fewer lit positions and more unlit ones in a catchment where frequency matters more than night presence. That is a real decision worth making deliberately rather than defaulting either way.",
      ],
    },
  ],
  whenItWorks: [
    "Market approaches, restaurant and entertainment belts, station and terminal roads — anywhere the crowd is present after sunset.",
    "Festival and wedding-season windows, when evening activity is at its highest in most Indian markets.",
    "Winter months in northern India, where darkness falls early and the evening commute happens in it.",
    "Any position where the brand's competitors are lit and it would otherwise be the dark panel on the row.",
  ],
  whenItDoesNot:
    "Illumination on a corridor that empties after office hours is money spent on an absent audience, and the same budget usually buys more useful frequency elsewhere. It is also worth nothing if it is not maintained — a frontlit panel with two failed fixtures reads worse at night than a clean unlit one, and nobody will tell you unless somebody is checking. If illumination is being paid for, night monitoring photographs should be part of the deliverable.",
  priceFactors: [
    "Frontlit, backlit or non-lit — three different products, not three settings.",
    "Whether the running electricity is included or billed separately.",
    "The substrate, since backlit needs translucent material and a different print specification.",
    "Hours of illumination and whether they are contracted or assumed.",
    "Maintenance of the fixtures over the cycle, and who is responsible for a failure.",
  ],
  faq: [
    {
      q: "Does a lit hoarding cost more than an unlit one?",
      a: "Yes, usually on more than one line — the illumination itself, sometimes the electricity, and on backlit positions the substrate and printing as well. Whether it is worth it depends entirely on whether your audience is on that road after dark.",
    },
    {
      q: "How do I know the lights were actually on?",
      a: "Night monitoring photographs, dated and geotagged, on a schedule rather than only at mounting. If a plan is paying for illumination and only carries daytime proof, it is not proving the thing it is paying for.",
    },
    {
      q: "Is backlit always better than frontlit?",
      a: "Better looking at night, yes. Better value, not always — a well-aimed and properly maintained frontlit panel does the job on most corridors, and the money saved often buys another position. Backlit earns its premium where the panel is close, read at length, and sits among other lit displays it has to compete with.",
    },
  ],
  related: ["hoarding", "unipole", "flexing-and-mounting", "monitoring-photographs"],
};

export const monitoringPhotographs: Term = {
  slug: "monitoring-photographs",
  term: "Monitoring Photographs",
  alsoCalled: ["Proof of display", "Mounting photos", "Site photos", "End-dated photos"],
  category: "Production",
  metaTitle: "Proof of Display: Monitoring Photographs",
  metaDescription:
    "Monitoring photographs are dated, geotagged pictures proving an outdoor campaign went up and stayed up. What good proof looks like and what to insist on.",
  definition:
    "Monitoring photographs are dated, geotagged photographs of each booked position, taken at mounting and again during the campaign, that evidence the advertisement was actually displayed at the site contracted for the period contracted.",
  body: [
    "Outdoor is the only major medium where the buyer usually cannot see what they bought. A press insertion arrives on a doorstep, a broadcast spot appears on a screen in the room, a digital impression is logged — but a hoarding in a city three states away exists only in a proposal until somebody photographs it. Monitoring photography is what closes that gap, and it is the reason proof of display is a deliverable on this site rather than a courtesy.",
    "Good proof has four properties. It is dated, so the period can be checked. It is geotagged, so the position can be checked. It shows enough context to identify the site rather than a tight crop of artwork that could have been taken anywhere. And it recurs — mounting photographs prove it went up, and photographs during the cycle prove it stayed up, which is a different and more commonly failing claim.",
    "The most useful additional device is the dated newspaper in frame: a local edition of that day's paper held in the shot alongside the display. It is old-fashioned and it is very hard to fake, which is exactly why the trade still uses it for end-dated proof.",
  ],
  sections: [
    {
      q: "What should a monitoring photograph show?",
      a: [
        "The full display, enough surrounding context to identify the location, and the metadata that fixes when and where. A tight crop of the artwork proves the artwork exists, not that it was mounted at the site you paid for.",
        "For end-dating, a dated local newspaper held in frame is the strongest simple proof available, because it establishes the date independently of a file's metadata.",
      ],
    },
    {
      q: "How often should positions be photographed?",
      a: [
        "At mounting, and then on a schedule through the cycle — not only at the start. The failure that costs advertisers money is almost never that the display never went up; it is that it came down early, was damaged in weather, was papered over, or the illumination failed and nobody looked.",
        "On a plan with a maintenance provision, the monitoring schedule is what triggers the maintenance. Without it the provision is theoretical.",
      ],
    },
    {
      q: "Why does geotagging matter?",
      a: [
        "Because position is what you bought. Two panels on the same road can be materially different sites — different direction of flow, different sightline, different traffic — and a photograph without coordinates cannot distinguish them.",
        "It also removes a category of dispute entirely. A geotagged set is either at the contracted position or it is not, and that is a much shorter conversation than an argument about which panel was meant.",
      ],
    },
  ],
  whenItWorks: [
    "Every printed outdoor campaign, without exception — this is a default, not an upgrade.",
    "Multi-city campaigns where the buyer cannot physically visit the sites.",
    "Campaigns running through monsoon or high-wind windows, where damage is a planning assumption rather than a risk.",
    "Any campaign that will need to be justified internally after it ends.",
  ],
  whenItDoesNot:
    "Photography proves the display existed; it does not prove anybody looked at it, and it should never be presented as a performance measure. On DOOH it is also the weaker instrument — a play-out log from the screen's own system is stronger evidence than a photograph of a screen at one moment, and on digital positions the log is what should be reconciled against the booking. Photography there is corroboration, not proof.",
  faq: [
    {
      q: "Is proof of display included as standard?",
      a: "It is on any campaign we run — dated, geotagged photographs at mounting and again during the cycle. It is worth confirming explicitly with any vendor, because it is frequently promised and less frequently scheduled.",
    },
    {
      q: "What is an end-dated photograph?",
      a: "A photograph taken at the close of the display period establishing that the advertisement was still up on that date, most reliably with a dated local newspaper held in frame. It answers the claim that is hardest to verify after the fact: not that it went up, but that it stayed up.",
    },
    {
      q: "Does monitoring photography prove the campaign worked?",
      a: "No, and it should never be sold as though it does. It proves delivery — that what was contracted was displayed where and when it was contracted. Whether the campaign worked is a different question answered by different measurement, and conflating the two is how outdoor gets a reputation for unaccountability.",
    },
  ],
  related: ["flexing-and-mounting", "illumination", "dooh", "loop"],
};
