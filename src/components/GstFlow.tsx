/**
 * The two-invoice diagram.
 *
 * The finance objection is the one that actually kills barter deals in
 * India, and it was previously answered in a paragraph. A CFO cannot
 * forward a paragraph to their CA. This is a picture of the treatment:
 * two distinct supplies, two tax invoices, input credit on both legs,
 * nothing netted off.
 *
 * Built from HTML rather than SVG so it reflows honestly on a phone —
 * the two legs stack, the arrows rotate, and nothing depends on a
 * fixed viewBox. It is also readable as a list by a screen reader,
 * which an SVG of boxes would not be.
 *
 * NOTE ON ACCURACY: this describes the structure Bizex4U contracts
 * under. It deliberately states no rates and no HSN/SAC codes, and the
 * page tells the reader to have their own advisor confirm it. Do not
 * add specific GST percentages here — they vary by product category
 * and change, and a wrong number on this diagram is worse than no
 * diagram at all.
 */

const legs = [
  {
    index: "Leg 1",
    from: "You",
    to: "Bizex4U",
    what: "Goods, capacity or vouchers",
    invoice: "You raise a tax invoice",
    detail:
      "A sale of goods by your company, at the value agreed in the trade agreement. GST charged at your product's applicable rate.",
  },
  {
    index: "Leg 2",
    from: "Bizex4U",
    to: "You",
    what: "Media and activation services",
    invoice: "We raise a tax invoice",
    detail:
      "A supply of advertising services by us, at the media value agreed in the same agreement. GST charged at the applicable services rate.",
  },
];

export default function GstFlow() {
  return (
    <div className="rounded-(--radius-card) bg-sand-2 p-6 md:p-8">
      <p className="eyebrow text-on-sand-dim">
        How the paperwork actually looks
      </p>

      <ol className="mt-7 space-y-4">
        {legs.map((leg) => (
          <li
            key={leg.index}
            className="rounded-xl border border-rule-sand bg-sand p-5 md:p-6"
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="font-mono text-micro tracking-[0.08em] text-violet-deep uppercase">
                {leg.index}
              </span>
              <span className="text-h3">{leg.from}</span>
              <span aria-hidden className="text-violet-deep">
                →
              </span>
              <span className="text-h3">{leg.to}</span>
              <span className="text-body-s text-on-sand-dim">
                {leg.what}
              </span>
            </div>

            <p className="mt-4 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
              <span className="font-display text-h2">{leg.invoice}</span>
              <span className="font-mono text-micro tracking-[0.08em] text-on-sand-dim uppercase">
                GST charged
              </span>
            </p>

            <p className="mt-2.5 max-w-[62ch] text-body-s text-on-sand-dim">
              {leg.detail}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-6 border-t border-rule-sand pt-5">
        <p className="max-w-[64ch] text-on-sand-dim">
          <span className="text-on-sand">Two supplies, not one swap.</span> Both
          invoices are raised in the normal way and the GST on each leg is
          claimable as input credit in the normal way. Nothing is netted off,
          and nothing sits off the books — your auditor sees an ordinary
          purchase and an ordinary sale.
        </p>
        <p className="mt-4 max-w-[64ch] text-body-s text-on-sand-dim">
          We will walk your finance team through this before anything is
          signed. We would also encourage you to have your own tax advisor
          confirm the treatment for your category — it is a straightforward
          structure, but it should be your advisor who says so, not us.
        </p>
      </div>
    </div>
  );
}
