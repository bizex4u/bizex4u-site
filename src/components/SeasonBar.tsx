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
type Band = {
  runs: Run[];
  label: string;
  note: string;
  irregular: boolean;
  /* False where the source window carries only a date range and no
     event name — "October to November, and January". Those rows were
     printing the range twice, once as the heading and once in the
     month column beside it. */
  named: boolean;
};

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

const ABBR = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
] as const;

/**
 * The months, in words.
 *
 * The bar alone was the only carrier of when a window falls, and a bar
 * with no gridline under it is not a reading — it is a guess. Reviewing
 * the Bengaluru page I read the IPL bar as February to April; it is
 * March to May, and I had written the component. If the person who built
 * it misreads it, a buyer scanning the page has no chance.
 *
 * So the range is set in text beside the label as well as drawn. The
 * drawing carries the shape of the year, which is what it is good at;
 * the words carry the fact.
 */
const rangeLabel = (runs: Run[]) => {
  /* A window that crosses New Year draws as two bars, correctly — a
     November-to-February season really does occupy both ends of a
     calendar year, and toRuns is deliberate about that.
  
     The words should not follow the drawing here. "Nov – Feb" is what
     the source says and what a planner thinks; "Jan – Feb, Nov – Dec"
     is the same fact rearranged into something the reader has to
     reassemble. Nine of the ninety windows in the register wrap, and
     wedding season — the single most commercially important window on
     these pages — is one of them.
  
     The test is exact: two runs, one touching January and the other
     touching December. Hyderabad's "October to November, and January"
     also starts at January but ends in November, so it stays as the two
     separate windows it actually is. */
  const wraps =
    runs.length === 2 && runs[0].s === 0 && runs[runs.length - 1].e === 11;
  if (wraps) return `${ABBR[runs[1].s]} – ${ABBR[runs[0].e]}`;

  return runs
    .map((r) => (r.s === r.e ? ABBR[r.s] : `${ABBR[r.s]} – ${ABBR[r.e]}`))
    .join(", ");
};

/**
 * Things that do not happen every year.
 *
 * Aero India is biennial. Drawn as a solid February bar it asserts "every
 * February", while the note two lines below says the opposite — the
 * drawing and the prose contradicting each other on the same row. These
 * get an outlined bar instead, and the legend says what that means.
 */
const isIrregular = (text: string) =>
  /alternate year|biennial|every other year|odd year|even year/i.test(text);

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
    bands.push({
      runs: toRuns(set),
      label: label || range,
      note: sw.note,
      irregular: isIrregular(`${sw.window} ${sw.note}`),
      named: Boolean(label),
    });
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
  /* An outline rather than a fill, for anything that does not happen
     every year. See isIrregular. */
  const dashed = dark
    ? "border-violet-lift/85 bg-violet-lift/15"
    : "border-violet-deep/85 bg-violet-deep/15";

  return (
    <figure className="not-prose m-0">
      {/* The chart is one positioned box so the gridlines can run its
          full height behind every row.

          Without them the axis sat at the top of a 400px card and the
          third bar floated a quarter of a page below it with nothing to
          measure against. You could see that something happened in
          roughly the middle of the year; you could not see which months,
          which is the entire question. */}
      <div className="relative">
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 top-6 bottom-0 grid grid-cols-12`}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className={`border-l ${rule} ${i === 0 ? "opacity-0" : "opacity-35"}`}
            />
          ))}
        </div>

        {/* Month axis */}
        <div
          className={`relative grid grid-cols-12 border-b ${rule} pb-1.5 font-mono text-[0.625rem] tracking-[0.08em] ${dim}`}
          aria-hidden="true"
        >
          {SHORT.map((m, i) => (
            <span key={i} className="text-center">
              {m}
            </span>
          ))}
        </div>

        <ul className="relative">
          {bands.map((b, i) => (
            <li
              key={i}
              className={`py-4 ${i > 0 ? `border-t ${rule}` : ""}`}
            >
              {/* Name and months on one line. The label used to sit
                  under its bar with the same gap that separated it from
                  the next entry's bar, so a bar read as belonging to
                  whichever row the eye happened to start from. */}
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5">
                {b.named ? (
                  <>
                    <p className={`text-body-s font-medium ${ink}`}>{b.label}</p>
                    <p
                      className={`font-mono text-[0.625rem] tracking-[0.08em] uppercase ${dim}`}
                    >
                      {rangeLabel(b.runs)}
                      {b.irregular && " · not every year"}
                    </p>
                  </>
                ) : (
                  /* Unnamed window: the range IS the heading, so it is
                     set once, on the left, where a name would go. */
                  <p
                    className={`font-mono text-[0.6875rem] tracking-[0.08em] uppercase ${ink}`}
                  >
                    {rangeLabel(b.runs)}
                    {b.irregular && " · not every year"}
                  </p>
                )}
              </div>

              {/* Ten pixels, not twenty-four. A bar this thick reads as
                  a block of colour; a thin one reads as a span of time. */}
              <div className="mt-2.5 grid h-2.5 grid-cols-12 gap-px">
                {b.runs.map((seg, k) => (
                  <span
                    key={k}
                    className={
                      b.irregular
                        ? `rounded-[2px] border ${dashed}`
                        : `${fill} rounded-[2px]`
                    }
                    style={{ gridColumn: `${seg.s + 1} / ${seg.e + 2}` }}
                  />
                ))}
              </div>

              <p className={`mt-2.5 max-w-[74ch] text-body-s ${dim}`}>{b.note}</p>
            </li>
          ))}
        </ul>
      </div>

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
