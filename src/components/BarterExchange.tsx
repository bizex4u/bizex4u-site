import { Eyebrow } from "@/components/UI";

/**
 * The exchange, drawn.
 *
 * /barter used to open with a plum card that restated the lede, then
 * not draw anything until the street photographs — more than two
 * thousand pixels down. The argument of the page is the swap: stock
 * you already hold for media you would otherwise buy in cash. This is
 * that swap as a compact two-column instrument, in the same register
 * as PlanAssembly. The full five-row equation stays further down; this
 * is the preview that belongs in the hero.
 *
 * Categories only. No city counts, no rates, no implied inventory.
 */

const rows = [
  { give: "Finished goods", get: "Outdoor" },
  { give: "Unsold stock", get: "Broadcast" },
  { give: "Capacity", get: "Retail" },
];

export default function BarterExchange() {
  return (
    <figure data-visual="barter-exchange" className="m-0">
      <div className="grid grid-cols-2 gap-4 border-b border-rule-sand pb-3">
        <Eyebrow muted>You give</Eyebrow>
        <Eyebrow>You get</Eyebrow>
      </div>
      <ul>
        {rows.map((row) => (
          <li
            key={row.give}
            className="grid grid-cols-2 gap-4 border-b border-rule-sand py-3.5"
          >
            <span className="font-display text-h3">{row.give}</span>
            <span className="font-display text-h3 text-violet-deep">
              {row.get}
            </span>
          </li>
        ))}
      </ul>
      <figcaption className="mt-5 max-w-[34ch] text-body-s text-on-sand-dim">
        Your warehouse is a media budget that hasn&rsquo;t been spent yet.
      </figcaption>
    </figure>
  );
}
