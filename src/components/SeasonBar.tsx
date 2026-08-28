/**
 * The trading year, drawn.
 *
 * Every city page carries four or five season windows as prose. Prose is
 * the wrong shape for this: the question a buyer actually has is "when
 * is this market expensive and when is it quiet", and that is a question
 * about a year — a shape, not a sentence. Four paragraphs make the
 * reader assemble the calendar in their head.
 *
 * Parsed from the existing `window` strings rather than from new data,
 * so all 22 cities get it immediately and any city added later gets it
 * for free.
 *
 * Fourteen of the ninety windows across the register carry no month at
 * all — Eid, Navratri, Bengaluru Karaga, Teej and Gangaur. Those are
 * lunar or otherwise movable, and pinning them to a bar would be an
 * invented fact. They are listed separately and labelled as moving,
 * which is the thing a planner most needs to know about them.
 */

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
] as const;

const SHORT = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

export type SeasonWindow = { window: string; note: string };

type Run = { s: number; e: number };
type Band = { runs: Run[]; label: string; note: string };

/** Splits "November to February — wedding season" into its two halves. */
const split = (w: string) => {
  const i = w.indexOf("\u2014");
  return i === -1
    ? { range: w.trim(), label: "" }
    : { range: w.slice(0, i).trim(), label: w.slice(i + 1).trim() };
};

/**
 * Turns a range phrase into a set of months.
 *
 * The naive version took first..last, which is right for "October to
 * March" and badly wrong for Hyderabad's "October to November, and
 * January" — three months found, drawn as one bar spanning January to
 * November, i.e. the entire trading year highlighted for a window that
 * is actually two short ones. So the connector between each pair of
 * month names decides: "to" or a dash fills the span, anything else
 * ("and", a comma) leaves them as separate points.
 */
const monthsIn = (range: string): Set<number> => {
  const hits: { m: number; at: number }[] = [];
  MONTHS.forEach((name, m) => {
    const at = range.indexOf(name);
    if (at !== -1) hits.push({ m, at });
  });
  hits.sort((a, b) => a.at - b.at);

  const set = new Set<number>();
  hits.forEach((h, i) => {
    set.add(h.m);
    const next = hits[i + 1];
    if (!next) return;
    const between = range
      .slice(h.at + MONTHS[h.m].length, next.at)
      .toLowerCase();
    const isSpan = /\bto\b|\u2013|\u2014|-/.test(between);
    if (!isSpan) return;
    /* Fill forward, wrapping the year end so "October to March" is
       Oct, Nov, Dec, Jan, Feb, Mar rather than everything but them. */
    for (let m = h.m; m !== next.m; m = (m + 1) % 12) set.add(m);
    set.add(next.m);
  });
  return set;
};

/**
 * Contiguous runs on a plain January-to-December axis.
 *
 * No wrapping here on purpose. "October to March" really does occupy
 * both ends of a calendar year, so it draws as two bars — Oct-Dec and
 * Jan-Mar — which is what a year actually looks like. An earlier
 * version tried to wrap the scan and ran the end index past December.
 */
const toRuns = (set: Set<number>): Run[] => {
  const runs: Run[] = [];
  let m = 0;
  while (m < 12) {
    if (!set.has(m)) {
      m++;
      continue;
    }
    let e = m;
    while (e + 1 < 12 && set.has(e + 1)) e++;
    runs.push({ s: m, e });
    m = e + 1;
  }
  return runs;
};

export function parseSeasons(seasons: SeasonWindow[]) {
  const bands: Band[] = [];
  const movable: { label: string; note: string }[] = [];

  for (const sw of seasons) {
    const { range, label } = split(sw.window);
    const set = monthsIn(range);
    if (set.size === 0) {
      movable.push({ label: range, note: sw.note });
      continue;
    }
    bands.push({ runs: toRuns(set), label: label || range, note: sw.note });
  }
  return { bands, movable };
}

export default function SeasonBar({
  seasons,
  tone = "sand",
}: {
  seasons: SeasonWindow[];
  tone?: "sand" | "plum";
}) {
  const { bands, movable } = parseSeasons(seasons);
  const dark = tone === "plum";

  const rule = dark ? "border-white/15" : "border-rule-sand";
  const dim = dark ? "text-on-plum-dim" : "text-on-sand-dim";
  const ink = dark ? "text-on-plum" : "text-on-sand";
  const fill = dark ? "bg-violet-lift/85" : "bg-violet-deep/85";

  return (
    <figure className="not-prose m-0">
      {/* Month axis */}
      <div
        className={`grid grid-cols-12 border-b ${rule} pb-1.5 font-mono text-[0.625rem] tracking-[0.08em] ${dim}`}
        aria-hidden="true"
      >
        {SHORT.map((m, i) => (
          <span key={i} className="text-center">
            {m}
          </span>
        ))}
      </div>

      <ul className="mt-2.5 flex flex-col gap-2">
        {bands.map((b, i) => {
          return (
            <li key={i}>
              <div className="relative grid h-6 grid-cols-12 gap-px">
                {b.runs.map((seg, k) => (
                  <span
                    key={k}
                    className={`${fill} rounded-[3px]`}
                    style={{
                      gridColumn: `${seg.s + 1} / ${seg.e + 2}`,
                    }}
                  />
                ))}
              </div>
              <p className={`mt-1 text-body-s ${ink}`}>
                <span className="font-medium">{b.label}</span>
                <span className={dim}> — {b.note}</span>
              </p>
            </li>
          );
        })}
      </ul>

      {movable.length > 0 && (
        <div className={`mt-5 border-t ${rule} pt-3.5`}>
          <p
            className={`font-mono text-[0.625rem] tracking-[0.09em] uppercase ${dim}`}
          >
            Moves each year — plan against the date, not the month
          </p>
          <ul className="mt-2 flex flex-col gap-1.5">
            {movable.map((m, i) => (
              <li key={i} className={`text-body-s ${ink}`}>
                <span className="font-medium">{m.label}</span>
                <span className={dim}> — {m.note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </figure>
  );
}
