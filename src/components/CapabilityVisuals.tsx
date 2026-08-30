import { Eyebrow } from "@/components/UI";

/**
 * Structural drawings for the five capability pages.
 *
 * Same register as SeasonBar, GstFlow and IndiaField: derived from the
 * method, never decorative, HTML or a tiny SVG, no photographs, no
 * pinned scroll. Each one is the argument the surrounding prose is
 * making, so a reader who only looks at the figure still has the point.
 */

const HOURS = ["6", "8", "10", "12", "14", "16", "18", "20", "22"] as const;

type DaypartRow = {
  place: string;
  note: string;
  /* Inclusive start/end indexes into HOURS. */
  spans: [number, number][];
};

const dayparts: DaypartRow[] = [
  {
    place: "Office district",
    note: "The commutes. Mid-afternoon is a different, cheaper product.",
    spans: [
      [1, 2],
      [6, 7],
    ],
  },
  {
    place: "Mall",
    note: "From lunch through evening. Morning weight is usually wasted.",
    spans: [[3, 7]],
  },
  {
    place: "High street",
    note: "The evening. Daylight hours on a high street are a different audience.",
    spans: [[5, 8]],
  },
];

export function CorridorWeight() {
  return (
    <figure data-visual="corridor-weight" className="m-0">
      <Eyebrow muted>Frequency, drawn</Eyebrow>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-(--radius-card) bg-sand-2 p-5 md:p-6">
          <p className="font-mono text-micro tracking-[0.08em] text-violet-deep uppercase">
            Own the corridor
          </p>
          <p className="mt-2 font-display text-h3">Three times on one commute</p>
          <svg
            viewBox="0 0 280 56"
            className="mt-6 h-14 w-full text-violet-deep"
            aria-hidden="true"
          >
            <line
              x1="8"
              y1="28"
              x2="272"
              y2="28"
              stroke="currentColor"
              strokeWidth="2"
            />
            {[48, 140, 232].map((x) => (
              <circle key={x} cx={x} cy="28" r="7" fill="currentColor" />
            ))}
          </svg>
          <p className="mt-4 text-body-s text-on-sand-dim">
            The same person, the same road, three intercepts. This is the
            buy we will argue for.
          </p>
        </div>
        <div className="rounded-(--radius-card) bg-sand-2 p-5 md:p-6">
          <p className="font-mono text-micro tracking-[0.08em] text-on-sand-dim uppercase">
            Dust the map
          </p>
          <p className="mt-2 font-display text-h3">Once, everywhere</p>
          <svg
            viewBox="0 0 280 56"
            className="mt-6 h-14 w-full text-on-sand/35"
            aria-hidden="true"
          >
            {[
              [28, 18],
              [72, 38],
              [118, 14],
              [154, 42],
              [198, 22],
              [246, 36],
            ].map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="4.5" fill="currentColor" />
            ))}
          </svg>
          <p className="mt-4 text-body-s text-on-sand-dim">
            The same budget, no corridor, no second look. A fortnight of
            this is how outdoor is wasted.
          </p>
        </div>
      </div>
    </figure>
  );
}

export function DaypartWeight() {
  return (
    <figure data-visual="daypart-weight" className="m-0">
      <Eyebrow muted>When the screen is worth having</Eyebrow>
      <div className="relative mt-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-6 bottom-0 grid grid-cols-9"
        >
          {HOURS.map((_, i) => (
            <span
              key={i}
              className={`border-l border-rule-sand ${i === 0 ? "opacity-0" : "opacity-35"}`}
            />
          ))}
        </div>
        <div
          className="relative grid grid-cols-9 border-b border-rule-sand pb-1.5 font-mono text-nano tracking-[0.08em] text-on-sand-dim"
          aria-hidden="true"
        >
          {HOURS.map((h) => (
            <span key={h} className="text-center">
              {h}
            </span>
          ))}
        </div>
        <ul className="relative">
          {dayparts.map((row, i) => (
            <li
              key={row.place}
              className={`py-4 ${i > 0 ? "border-t border-rule-sand" : ""}`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5">
                <p className="text-body-s font-medium">{row.place}</p>
                <p className="font-mono text-nano tracking-[0.08em] text-on-sand-dim uppercase">
                  Weighted hours
                </p>
              </div>
              <div className="mt-2.5 grid h-2.5 grid-cols-9 gap-px">
                {row.spans.map(([s, e]) => (
                  <span
                    key={`${s}-${e}`}
                    className="rounded-(--radius-xs) bg-violet-deep/85"
                    style={{ gridColumn: `${s + 1} / ${e + 2}` }}
                  />
                ))}
              </div>
              <p className="mt-2.5 max-w-[74ch] text-body-s text-on-sand-dim">
                {row.note}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 border-t border-rule-sand pt-5">
        <p className="font-mono text-nano tracking-[0.09em] text-on-sand-dim uppercase">
          The same slot, two loops
        </p>
        <ul className="mt-3 grid gap-3 md:grid-cols-2">
          <li>
            <p className="text-body-s font-medium">Ten seconds in two minutes</p>
            <div className="mt-2 h-2 overflow-hidden rounded-(--radius-xs) bg-on-sand/12">
              <span className="block h-full w-[8.3%] bg-violet-deep/85" />
            </div>
            <p className="mt-1.5 font-mono text-nano tracking-[0.08em] text-on-sand-dim uppercase">
              One face in twelve
            </p>
          </li>
          <li>
            <p className="text-body-s font-medium">Ten seconds in eight minutes</p>
            <div className="mt-2 h-2 overflow-hidden rounded-(--radius-xs) bg-on-sand/12">
              <span className="block h-full w-[2.1%] bg-violet-deep/85" />
            </div>
            <p className="mt-1.5 font-mono text-nano tracking-[0.08em] text-on-sand-dim uppercase">
              One face in forty-eight
            </p>
          </li>
        </ul>
      </div>
    </figure>
  );
}

const moments = [
  {
    when: "Start and end of the day",
    format: "Lift panel",
    job: "The household, twice, with nothing else to look at.",
  },
  {
    when: "Already spending",
    format: "Mall fascia or atrium",
    job: "The shopper in the building, before the till.",
  },
  {
    when: "Minutes from the door",
    format: "Store-front and last mile",
    job: "The last message before the decision is made.",
  },
];

export function DecisionMoments() {
  return (
    <figure data-visual="decision-moments" className="m-0">
      <Eyebrow muted>The last mile, in three moments</Eyebrow>
      <ol className="mt-6 border-t border-rule-sand">
        {moments.map((m, i) => (
          <li
            key={m.format}
            className="grid grid-cols-12 gap-x-6 gap-y-2 border-b border-rule-sand py-5"
          >
            <span className="col-span-12 font-mono text-micro tracking-[0.08em] text-violet-deep md:col-span-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="col-span-12 md:col-span-4">
              <p className="font-display text-h3">{m.format}</p>
              <p className="mt-1 font-mono text-nano tracking-[0.08em] text-on-sand-dim uppercase">
                {m.when}
              </p>
            </div>
            <p className="col-span-12 max-w-[52ch] text-body-s text-on-sand-dim md:col-span-7">
              {m.job}
            </p>
          </li>
        ))}
      </ol>
    </figure>
  );
}

const boughtBy = [
  {
    medium: "Radio",
    unit: "By the hour",
    note: "Drive-time is the product. Off-peak is cheap because it is worth less.",
  },
  {
    medium: "Print",
    unit: "By title, section, day",
    note: "The masthead's standing, not a circulation figure we do not have the right to print.",
  },
  {
    medium: "Cinema",
    unit: "By the release",
    note: "The film decides the audience. The multiplex is only the room.",
  },
];

export function MarketNotNational() {
  return (
    <figure data-visual="market-not-national" className="m-0">
      <Eyebrow muted>How each one is actually bought</Eyebrow>
      <ol className="mt-6 border-t border-rule-sand">
        {boughtBy.map((row, i) => (
          <li
            key={row.medium}
            className="grid grid-cols-12 gap-x-6 gap-y-2 border-b border-rule-sand py-5"
          >
            <span className="col-span-12 font-mono text-micro tracking-[0.08em] text-violet-deep md:col-span-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="col-span-12 font-display text-h3 md:col-span-3">
              {row.medium}
            </p>
            <p className="col-span-12 font-mono text-micro tracking-[0.08em] text-on-sand uppercase md:col-span-3">
              {row.unit}
            </p>
            <p className="col-span-12 max-w-[48ch] text-body-s text-on-sand-dim md:col-span-5">
              {row.note}
            </p>
          </li>
        ))}
      </ol>
    </figure>
  );
}

const sites = [
  {
    place: "Mall atrium",
    when: "Weekend",
    who: "A shopper already in the building, with time and a bag.",
  },
  {
    place: "Society gate",
    when: "Festival evening",
    who: "The household, arriving home, willing to stop.",
  },
  {
    place: "Office park",
    when: "Weekday lunch",
    who: "A short conversation and a sample, then back upstairs.",
  },
];

export function SiteChoice() {
  return (
    <figure data-visual="site-choice" className="m-0">
      <Eyebrow muted>The venue is the campaign</Eyebrow>
      <ol className="mt-6 border-t border-rule-sand">
        {sites.map((s, i) => (
          <li
            key={s.place}
            className="grid grid-cols-12 gap-x-6 gap-y-2 border-b border-rule-sand py-5"
          >
            <span className="col-span-12 font-mono text-micro tracking-[0.08em] text-violet-deep md:col-span-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="col-span-12 md:col-span-4">
              <p className="font-display text-h3">{s.place}</p>
              <p className="mt-1 font-mono text-nano tracking-[0.08em] text-on-sand-dim uppercase">
                {s.when}
              </p>
            </div>
            <p className="col-span-12 max-w-[52ch] text-body-s text-on-sand-dim md:col-span-7">
              {s.who}
            </p>
          </li>
        ))}
      </ol>
      <p className="mt-6 max-w-[62ch] text-body-s text-on-sand-dim">
        <span className="text-on-sand">Media pointed at the window.</span>{" "}
        Outdoor and hyperlocal in the same catchment, for the same days.
        Without that, the stall reaches whoever walked past.
      </p>
    </figure>
  );
}

export const capabilityVisual = {
  "outdoor-transit": CorridorWeight,
  dooh: DaypartWeight,
  "retail-hyperlocal": DecisionMoments,
  "broadcast-print-cinema": MarketNotNational,
  activations: SiteChoice,
} as const;

export type CapabilityVisualKey = keyof typeof capabilityVisual;
