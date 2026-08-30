import type { Term } from "./types";

/* The barter vocabulary. Two entries rather than five, because the
   variants — contra deal, trade exchange, reciprocal arrangement —
   describe the same transaction and would produce the same page with
   a word swapped. See rule 7. */

export const mediaBarter: Term = {
  slug: "media-barter",
  term: "Media Barter",
  alsoCalled: ["Barter advertising", "Contra deal", "Trade exchange", "Goods-for-media"],
  category: "Trade",
  metaTitle: "What Is Media Barter? Goods Traded for Advertising",
  metaDescription:
    "Media barter is settling advertising in goods, capacity or vouchers instead of cash. How valuation works and how GST applies to both legs.",
  definition:
    "Media barter is an arrangement in which a brand settles all or part of the cost of its advertising in goods, capacity or vouchers rather than in cash — the advertising is supplied against the stock, both sides are valued in writing before either performs, and each leg carries its own tax invoice.",
  body: [
    "The transaction is two supplies, not one exchange. The media company supplies advertising services; the brand supplies goods or capacity. Under GST both are supplies for consideration, so both attract a tax invoice at the agreed value and both sides account for output tax and claim input credit in the ordinary way. Barter does not put a transaction outside the tax system, and any arrangement presented as though it does should be declined.",
    "The commercial logic is narrow and real. A brand holding stock it cannot move at list price has capital sitting in a warehouse depreciating; a marketing budget capped in cash is not capped in inventory. Barter converts the second problem into the first one's solution, without a discount sale that would tell the market the price was soft. That last point is usually the actual reason a finance head says yes: liquidation resets what customers believe the product is worth, and barter does not.",
    "It is not free advertising and it is not a way to dispose of unsellable goods. Both sides have to be worth something to somebody, which is why valuation comes before the media plan rather than after it.",
  ],
  sections: [
    {
      q: "How is a barter deal valued?",
      a: [
        "Both legs are valued and written down before either side performs, and the valuation of the goods is the harder half. The relevant number is not the brand's list price and not its cost — it is what the stock can realistically be moved for, through channels that do not damage the brand's own pricing.",
        "Getting this wrong in either direction is how barter arrangements sour. Value the stock too high and the media company is carrying the shortfall; value it too low and the brand has effectively taken a deep discount to buy advertising. The valuation conversation is therefore the first conversation, not a formality after the plan is agreed.",
      ],
    },
    {
      q: "How does GST work on a barter transaction?",
      a: [
        "Both legs are taxable supplies. The media company issues a tax invoice for the advertising services; the brand issues a tax invoice for the goods or capacity supplied. Each side accounts for output tax on its own supply and takes input credit on the other in the normal way, subject to the usual conditions.",
        "In practice this means barter is more paperwork than a cash buy, not less, and it should look completely ordinary to an auditor: a valuation, a signed agreement, two invoice trails, and delivery evidence on both sides. If it does not look ordinary, something has been structured badly.",
      ],
    },
    {
      q: "What can actually be traded?",
      a: [
        "Finished goods are the common case, but capacity often works better because it costs the supplier less to give. Unsold hotel room nights, unfilled seats, unused manufacturing or logistics capacity, service hours, vouchers and gift cards are all tradeable, and several of them carry no incremental cost at all to the brand supplying them.",
        "What does not work is anything the media company cannot move without competing with the brand that supplied it. That constraint is the reason the category and the intended channel are settled in the agreement rather than left open.",
      ],
    },
  ],
  whenItWorks: [
    "A brand carrying stock, capacity or vouchers that are depreciating faster than the cash cost of holding them.",
    "A marketing budget capped in cash where the commercial case for advertising is otherwise sound.",
    "Categories where a discount sale would damage price perception more than the stock is worth.",
    "Seasonal businesses with predictable unsold capacity — hospitality, travel, entertainment, events.",
    "Brands entering a new market where cash is committed to distribution and inventory rather than media.",
  ],
  whenItDoesNot:
    "Barter is the wrong instrument for stock nobody wants at any price — if it cannot be moved, it is not consideration, and calling it consideration only moves the problem. It is also wrong where the brand's channel partners would be undercut by the stock reappearing in the market, unless the agreement restricts where it can go, which reduces its value. And it is a poor fit for a campaign that must run to a hard date, because valuation and contracting add time at the front that a cash buy does not.",
  faq: [
    {
      q: "Is media barter legal in India?",
      a: "Yes, and it is ordinary commercial practice. It is two taxable supplies rather than one exchange, so both legs carry a tax invoice under GST and both sides account for output tax and input credit in the normal way. What makes an arrangement questionable is not barter itself but barter done without valuation, contract or invoicing.",
    },
    {
      q: "Does barter mean free advertising?",
      a: "No. It means the advertising is paid for in something other than cash. The media is valued, the goods are valued, and the two are set against each other in a written agreement. A proposal describing barter as free advertising has misunderstood the transaction or is describing something else.",
    },
    {
      q: "Will barter undercut my own pricing?",
      a: "Only if the agreement lets it. This is the objection that stops most first conversations and it is a reasonable one — stock reappearing in your own channel at a lower price is worse than holding it. The answer is contractual: the agreement settles the category, the permitted channels and the geography before anything moves.",
    },
    {
      q: "What does my finance team need to see?",
      a: "A valuation of both legs agreed in advance, a signed reciprocal trade agreement, a tax invoice on each leg, and delivery evidence on both sides. It should look like two ordinary supplies, because that is what it is.",
    },
  ],
  related: ["reciprocal-trade-agreement", "hoarding", "dooh"],
};

export const reciprocalTradeAgreement: Term = {
  slug: "reciprocal-trade-agreement",
  term: "Reciprocal Trade Agreement",
  alsoCalled: ["RTA", "Barter agreement", "Trade exchange agreement"],
  category: "Trade",
  metaTitle: "What Is a Reciprocal Trade Agreement (RTA)?",
  metaDescription:
    "The contract behind a media barter deal: what is supplied each way, at what value, on what schedule, and where the goods may be sold.",
  definition:
    "A reciprocal trade agreement, usually written RTA, is the contract governing a media barter transaction: it records what each side supplies, the value placed on each leg, the schedule for performing them, and the restrictions on where and how the traded goods may subsequently be sold.",
  body: [
    "The RTA exists because barter has a failure mode that cash buying does not: both sides perform over time, in different currencies, and either can end up materially ahead of the other. A media campaign delivered in month one against stock delivered in month six is an unsecured extension of credit in goods, and the agreement is what stops that being an argument later.",
    "Four clauses carry most of the weight. The valuation of each leg, agreed before performance and not adjustable afterwards by one side. The performance schedule, so neither party is far ahead of the other. The channel and geography restrictions on resale of the goods, which is the clause that protects the supplying brand's own pricing. And the treatment of shortfall — what happens if the media underdelivers or the goods are not supplied in full.",
    "Everything else is ordinary commercial contracting: invoicing under GST on both legs, delivery evidence, termination, and the usual dispute machinery. An RTA that is short is usually short in one of those four places.",
  ],
  sections: [
    {
      q: "What should a reciprocal trade agreement contain?",
      a: [
        "At minimum: a description and agreed value of the advertising, a description and agreed value of the goods or capacity, the schedule on which each is delivered, the restrictions on resale of the goods, the invoicing and GST treatment on both legs, and what happens on shortfall or non-performance by either side.",
        "The resale restriction is the clause brands most often omit and most often regret. Without it, stock supplied under barter can reappear in a channel where it competes with the brand's own distribution, which converts a good trade into an expensive one.",
      ],
    },
    {
      q: "Why does the performance schedule matter?",
      a: [
        "Because a barter deal is two supplies over time, and whichever party performs first is extending credit in kind. A media campaign delivered in full against goods promised over the following two quarters leaves the media company exposed; the reverse leaves the brand exposed.",
        "Matching the schedules, or agreeing explicitly which side leads and what secures it, removes the most common source of dispute in barter arrangements before it can arise.",
      ],
    },
  ],
  whenItWorks: [
    "Any barter arrangement of meaningful value — the agreement is the mechanism, not the formality.",
    "Multi-quarter arrangements where the two legs are performed over different periods.",
    "Trades involving branded goods where channel protection matters to the supplier.",
    "Arrangements a finance or audit function has to be comfortable with, which is most of them.",
  ],
  whenItDoesNot:
    "There is no version of barter where an RTA is unnecessary. If a counterparty is reluctant to put valuation, schedule and resale restrictions in writing, that reluctance is the material information in the conversation. The only situation in which the agreement is genuinely light is a small, single-cycle trade performed simultaneously by both sides — and even then the valuation and the invoices still have to exist.",
  faq: [
    {
      q: "Is an RTA different from a normal media contract?",
      a: "It contains one, and then adds the second leg. A cash media contract governs what advertising is delivered and what is paid. An RTA governs that plus what goods or capacity come the other way, at what value, on what schedule, and with what restrictions on resale.",
    },
    {
      q: "Who values the goods in a reciprocal trade agreement?",
      a: "Both parties, in advance, and the agreed figure goes into the contract. The relevant number is what the stock can realistically be moved for through channels that do not damage the brand's own pricing — not list price and not cost. It is settled before the media plan, because it determines how much media the trade actually buys.",
    },
    {
      q: "What happens if the media underdelivers?",
      a: "Whatever the shortfall clause says, which is why it needs to be there. Common approaches are make-good in additional media, adjustment of the goods leg, or a cash settlement of the difference. Leaving it unaddressed is how a workable trade becomes a dispute.",
    },
  ],
  related: ["media-barter", "monitoring-photographs"],
};
