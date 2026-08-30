import type { Term } from "./types";

/* Permission and money owed to the state.

   RULE 5 APPLIES HARDEST HERE. These two entries describe regimes that
   differ between states, have been litigated in more than one High
   Court, and change. Everything below is written to describe the SHAPE
   of the position and the questions to ask, and to say plainly where
   the law is unsettled — never to assert a rule for a city we have not
   checked. This is also the ground the inventory owners will not take,
   because writing honestly about permission is against their interest
   and squarely in ours. */

export const skySign: Term = {
  slug: "sky-sign",
  term: "Sky-Sign",
  alsoCalled: ["Skysign", "Rooftop advertising", "Terrace hoarding"],
  category: "Compliance",
  metaTitle: "What Is a Sky-Sign in Indian Advertising Law?",
  metaDescription:
    "A sky-sign is an advertisement on or above a building, read against the sky. A distinct licensing category in Indian municipal law, not a description.",
  definition:
    "A sky-sign is an advertisement placed on, above or attached to a building — a roof, terrace, parapet or upper facade — so that it is seen against the sky, and in most Indian municipal law it is a distinct licensing category with its own permission and its own fee, not merely a description of where a hoarding sits.",
  body: [
    "The word sounds descriptive and is in fact a legal term of art. Indian municipal statutes typically define sky-sign separately from ground-based advertisements and require a separate licence for it, on the reasoning that a display above a building raises questions a roadside panel does not: structural safety over occupied premises, wind loading on a roof that was not designed for it, obstruction of light and air to neighbours, and the consent of the building's owner and often its occupants.",
    "The practical consequence for a buyer is that a rooftop display and a roadside hoarding on the same street can sit under different heads, with different fee bases, different renewal cycles and different documentation. A proposal that treats them as interchangeable line items has not looked at the permission.",
    "The detail differs by state and by corporation. Some cities license sky-signs individually against published bye-laws; others tender defined sets of positions; some restrict or prohibit them in heritage precincts, near airports, or on particular categories of building. Where we could not verify the current position against the issuing authority's own published material, we say so rather than asserting it.",
  ],
  sections: [
    {
      q: "How is a sky-sign different from a hoarding?",
      a: [
        "By where it sits and therefore how it is licensed. A hoarding in the ordinary sense is ground-mounted or fixed to a wall at street level; a sky-sign is on or above a building and read against the sky.",
        "That difference is not cosmetic in law. Sky-signs commonly require their own licence, the building owner's written consent in addition to the municipal permission, and structural certification appropriate to a load the roof was probably not designed to carry.",
      ],
    },
    {
      q: "What consents does a sky-sign need?",
      a: [
        "Typically the municipal licence, the building owner's consent, and structural certification — and in a housing society or a building with multiple owners, the society's or association's resolution as well.",
        "The one most often missing is the last. A media owner holding a rooftop position under an arrangement with a single flat owner rather than the society is holding something contestable, and the display that comes down mid-campaign is the advertiser's problem in practice regardless of whose fault it is on paper. It is worth asking who consented, not just whether somebody did.",
      ],
    },
    {
      q: "Are sky-signs restricted in some areas?",
      a: [
        "Yes, and the restrictions are local rather than national. Heritage precincts, areas around airports, particular arterial corridors and certain categories of building are commonly restricted or prohibited, and several cities have tightened rooftop rules following structural failures elsewhere.",
        "Because the rules are municipal, they change on crossing a corporation boundary and they change over time. We confirm the current position with the issuing authority before a rooftop position goes into a plan.",
      ],
    },
  ],
  whenItWorks: [
    "Landmark presence on a building that is itself a reference point in the city.",
    "Corridors where ground-level sightlines are broken by trees, flyovers or dense street furniture.",
    "Long-hold brand presence, where the permission and certification effort is amortised over a real term.",
    "Markets where street-level advertising is restricted and rooftop is one of the permitted routes.",
  ],
  whenItDoesNot:
    "A sky-sign is a poor choice for a short campaign: the permission, consent and certification workload is largely fixed and a two-month cycle cannot absorb it. It is also the format where the gap between what a vendor is offering and what they can actually deliver is widest, because rooftop rights are frequently held on thin arrangements with a single owner rather than a society. And if the building itself is unremarkable, the height buys distance without buying attention — a landmark building makes a sky-sign; a sky-sign does not make a landmark building.",
  priceFactors: [
    "The building and its position in the city's mental map, which is most of the value.",
    "Whether the licence is current and how long the term has to run.",
    "The building owner's or society's share of the arrangement.",
    "Structural certification and any strengthening the roof requires.",
    "Illumination and the power arrangement with the building.",
    "Hold period — this format rewards long terms more than any other.",
  ],
  faq: [
    {
      q: "Is a rooftop hoarding the same as a sky-sign?",
      a: "In everyday speech, yes. In municipal law, sky-sign is usually the defined category and the one the licence is issued under, so it is the word that appears in the permission file. If a vendor's paperwork says hoarding for a rooftop position, it is worth asking to see the licence itself.",
    },
    {
      q: "Who is liable if a rooftop display fails structurally?",
      a: "That depends on the contracts and the local regime, and it is not a question to answer for the first time after an incident. What we can say practically is that an advertiser's brand on an uncertified structure is an advertiser's exposure regardless of where liability finally lands, which is why certification is confirmed before a position is recommended.",
    },
    {
      q: "Can I put a sky-sign on any building?",
      a: "No. It needs a municipal licence, the building owner's consent, and in a multi-owner building the society's resolution, plus structural certification. Heritage areas, airport approaches and certain corridors are commonly restricted outright, and the rules differ by corporation.",
    },
  ],
  related: ["hoarding", "advertisement-tax", "unipole", "illumination"],
  cities: ["nagpur", "mumbai", "chandigarh"],
};

export const advertisementTax: Term = {
  slug: "advertisement-tax",
  term: "Advertisement Tax",
  alsoCalled: ["Hoarding tax", "Advertisement fee", "Licence fee", "Permission fee"],
  category: "Compliance",
  metaTitle: "Advertisement Tax on Hoardings in India, Explained",
  metaDescription:
    "What Indian municipal bodies charge for outdoor advertising, how GST changed the position, and what to confirm before you contract.",
  definition:
    "Advertisement tax is the charge levied by an Indian urban local body on the display of an outdoor advertisement within its limits — now more often framed as a licence or permission fee than as a tax, because the constitutional basis for a separate advertisement tax changed when GST was introduced.",
  body: [
    "Before GST, taxes on advertisements other than those in newspapers sat with the states, and municipal bodies levied advertisement tax under state municipal law on that footing. The constitutional amendment that introduced GST removed that entry, and advertising services became subject to GST instead. That raised an obvious question: could a corporation still charge for a hoarding?",
    "The answer that has largely emerged is that a municipality may still charge, but as a regulatory licence or permission fee for the use of and impact on public space, rather than as a tax on the advertisement itself. Several High Courts have upheld municipal levies on that reasoning; others have struck down levies framed explicitly as advertisement tax. The position is genuinely unsettled in places, differs by state, and continues to be litigated — so a plan that assumes one city's treatment applies in the next one is making an assumption it has not checked.",
    "For a buyer the practical point is simpler than the law. There is a municipal charge, it is separate from GST on the media invoice, and the question that matters is who is paying it and whether it is current. A position whose licence fee is in arrears is a position that can come down.",
  ],
  sections: [
    {
      q: "Do I pay advertisement tax as well as GST?",
      a: [
        "In effect there are two different charges with two different bases, and they are not alternatives. GST applies to the supply of advertising services and appears on the media invoice. The municipal charge — however the local statute labels it — is for permission to display in that authority's area.",
        "Whether the municipal charge is the advertiser's cost or the media owner's depends entirely on the contract, and it is worth settling explicitly. In most arrangements it sits with the media owner and is priced into the rate, but that is a convention rather than a rule.",
      ],
    },
    {
      q: "Why is advertisement tax disputed in court?",
      a: [
        "Because the constitutional entry that supported a state-level advertisement tax was removed when GST was introduced, while municipal statutes levying such charges remained on the books. The dispute is whether what a corporation charges is a tax on the advertisement — which it may no longer have the power to levy — or a regulatory fee for the use of public space, which it does.",
        "Different High Courts have reached different conclusions on differently drafted levies, and some corporations have recast their charges as licence or permission fees in response. This is why we confirm the current basis and the current rate with the issuing authority before contracting, rather than relying on what was true in that city last year.",
      ],
    },
    {
      q: "What should I confirm before signing?",
      a: [
        "Three things. Who bears the municipal charge under the contract. Whether the permission for that specific position is current, and when it falls due for renewal relative to your campaign. And whether any arrears attach to the position.",
        "The renewal date is the one most often skipped. A permission expiring inside your cycle is the advertiser's problem in practice even when it is the media owner's obligation on paper, because the display comes down either way.",
      ],
    },
  ],
  whenItWorks: [
    "Any outdoor campaign in an Indian municipal area — this is a cost to establish, not a choice to make.",
    "Multi-city campaigns, where the basis and the amount change at every corporation boundary.",
    "Long-hold positions, where a renewal will certainly fall due during the term.",
    "Due diligence on a position offered at a rate noticeably below the market for that corridor.",
  ],
  whenItDoesNot:
    "This is not a lever a buyer can pull. Nobody should be structuring an outdoor plan around municipal charges, and any vendor offering a position on the basis that no permission fee applies is describing a risk rather than a saving. Nothing here is tax advice — the treatment differs by state, is actively litigated, and a specific position should be checked with the issuing authority and your own advisers.",
  priceFactors: [
    "The corporation, since the basis and the amount differ at every boundary.",
    "How the local statute frames the charge — tax, licence fee or permission fee.",
    "The size and category of the display, which most fee schedules key on.",
    "Whether the display is illuminated, which several schedules treat separately.",
    "The term, and whether a renewal falls inside the campaign cycle.",
  ],
  faq: [
    {
      q: "Is advertisement tax still applicable after GST?",
      a: "In most places a municipal charge still applies, though increasingly framed as a licence or permission fee rather than a tax, because the constitutional entry supporting a separate advertisement tax was removed when GST came in. Several High Courts have upheld municipal levies on a regulatory-fee reasoning and others have struck down levies drafted as taxes. It differs by state and it is still being litigated, so we confirm the current position with the issuing authority rather than assuming.",
    },
    {
      q: "Who pays the municipal charge — me or the media owner?",
      a: "Whoever the contract says. In most arrangements it sits with the media owner and is priced into the rate, but that is convention rather than law and it should be stated explicitly rather than assumed.",
    },
    {
      q: "What happens if a permission lapses mid-campaign?",
      a: "The display comes down, and the commercial remedy is whatever the contract provides. This is why the renewal date is worth checking before signing rather than discovering: the obligation may be the media owner's, but the absent campaign is yours.",
    },
    {
      q: "Is this tax advice?",
      a: "No. This entry describes the shape of a contested position so you know what to ask. The treatment differs by state and is actively litigated, and a specific case should be taken to the issuing authority and your own advisers.",
    },
  ],
  related: ["sky-sign", "hoarding", "media-barter"],
  cities: ["nagpur", "jaipur", "ahmedabad"],
};
