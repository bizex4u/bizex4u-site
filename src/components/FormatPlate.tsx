/**
 * Format plates — each medium drawn at its true physical size.
 *
 * This used to normalise every plate to the same visual area, while the
 * copy above it promised "drawn at true proportion". The two disagreed:
 * a 50 × 20 ft unipole rendered SHORTER than a 40 × 20 ft hoarding even
 * though both are twenty feet tall. A reader cannot articulate that,
 * but they can see it, and it made the whole device read as decoration.
 *
 * Now the plates share one scale within a set, so a hoarding really is
 * an order of magnitude larger than a lift panel — which is the entire
 * argument the section is making. A 5 ft 9 in figure is drawn at that
 * same scale, because "40 × 20 ft" means nothing to a marketing head
 * and a person standing next to it means everything.
 *
 * Cheap, specific to the product, honest, and no stock photography.
 */

export type Format = {
  label: string;
  note: string;
  /* Real dimensions in feet. Both required — the scale depends on it. */
  w: number;
  h: number;
};

export const formatSets: Record<string, Format[]> = {
  outdoor: [
    { label: "Hoarding", note: "40 × 20 ft", w: 40, h: 20 },
    { label: "Unipole", note: "50 × 20 ft", w: 50, h: 20 },
    { label: "Bus back", note: "10 × 8 ft", w: 10, h: 8 },
  ],
  dooh: [
    { label: "LED façade", note: "32 × 18 ft", w: 32, h: 18 },
    { label: "Portrait", note: "6 × 11 ft", w: 6, h: 11 },
    { label: "Ribbon", note: "40 × 10 ft", w: 40, h: 10 },
  ],
  retail: [
    { label: "Fascia", note: "16 × 5 ft", w: 16, h: 5 },
    { label: "Atrium", note: "12 × 10 ft", w: 12, h: 10 },
    { label: "Lift panel", note: "2 × 3 ft", w: 2, h: 3.2 },
  ],
  /* Broadcast carries one plate, not three. Television airtime and a
     newspaper column are not bought by physical dimension, and drawing
     a 10 × 13 in page beside a 45 ft screen renders it as a dot — true
     to scale and completely useless. The cinema screen is the only
     format in this mix that has a size worth showing. */
  broadcast: [{ label: "Cinema screen", note: "45 × 19 ft", w: 45, h: 19 }],
  activation: [
    { label: "Gate arch", note: "28 × 10 ft", w: 28, h: 10 },
    { label: "Canopy", note: "10 × 10 ft", w: 10, h: 10 },
    { label: "Kiosk", note: "3 × 6 ft", w: 3, h: 6 },
  ],
};

/**
 * The barter card carries no format plate — barter is not a medium,
 * it is how the medium gets paid for. It gets its own artefact: the
 * two legs of the swap, drawn as one line.
 */
export function ExchangePlate() {
  return (
    <div aria-hidden="true" className="flex items-center gap-3">
      {["Your stock", "Our media"].map((side, i) => (
        <div key={side} className="flex items-center gap-3">
          {i === 1 && (
            <span className="font-mono text-caption text-on-violet-dim">⇄</span>
          )}
          <div className="rounded-(--radius-xs) border border-white/35 bg-white/10 px-3 py-4">
            <p className="text-meta leading-tight font-medium whitespace-nowrap">
              {side}
            </p>
            <p className="mt-1 font-mono text-nano tracking-[0.05em] text-on-violet-dim uppercase">
              {i === 0 ? "At list value" : "At card rate"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* A person, 5 ft 9 in, drawn to the same scale as the plates beside
   them. Deliberately a silhouette and deliberately small — it is a
   scale bar, not an illustration. */
function Figure({ px, tone }: { px: number; tone: string }) {
  const h = Math.max(px, 6);
  return (
    <svg
      width={h * 0.32}
      height={h}
      viewBox="0 0 32 100"
      className={tone}
      aria-hidden="true"
    >
      <circle cx="16" cy="11" r="8.5" fill="currentColor" />
      <path
        d="M16 21c-7 0-11 4-11 10v26c0 2 1.4 3 3 3h1v33c0 2 1.4 3 3 3s3-1 3-3V60h2v33c0 2 1.4 3 3 3s3-1 3-3V60h1c1.6 0 3-1 3-3V31c0-6-4-10-11-10z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function FormatPlate({
  formats,
  tone = "light",
  /* Pixels per foot at the widest. One number scales a whole set, and
     the tallest plate in the set is what gets pinned to `base`. */
  base = 64,
  maxWidth = 296,
  showFigure = true,
}: {
  formats: Format[];
  /* "violet" exists because on-plum-dim only reaches 4.0:1 against
     violet-deep. The violet ground needs on-violet-dim (5.88:1) or
     the format notes fail AA. */
  tone?: "light" | "dark" | "violet";
  base?: number;
  /* The set has to fit its card. True scale makes these sets far wider
     than the old normalised ones, and the first version of this ran a
     50 ft unipole straight off the right edge. */
  maxWidth?: number;
  showFigure?: boolean;
}) {
  /* One scale for the whole set: the tallest real object becomes `base`
     pixels tall, everything else follows from its actual size. This is
     what makes a lift panel look like a lift panel next to a hoarding. */
  const tallest = Math.max(...formats.map((f) => f.h), 5.75);
  const byHeight = base / tallest;

  /* …then shrink if that would overflow. 12px of gap between plates,
     plus the figure column when it is shown. */
  const gaps = (formats.length - 1) * 12 + (showFigure ? 16 + 5.75 * 0.32 * byHeight : 0);
  const totalFt = formats.reduce((s, f) => s + f.w, 0);
  const byWidth = Math.max(maxWidth - gaps, 40) / totalFt;

  const pxPerFt = Math.min(byHeight, byWidth);

  const surface =
    tone === "light"
      ? "border-on-sand/40 bg-on-sand/12"
      : tone === "violet"
        ? "border-white/45 bg-white/18"
        : "border-white/40 bg-white/14";
  const label =
    tone === "light"
      ? "text-on-sand-dim"
      : tone === "violet"
        ? "text-on-violet-dim"
        : "text-on-plum-dim";
  const figureTone =
    tone === "light" ? "text-on-sand/45" : "text-white/40";

  return (
    <div className="flex items-end gap-4" aria-hidden="true">
      {showFigure && (
        <div className="flex shrink-0 flex-col items-center">
          <Figure px={5.75 * pxPerFt} tone={figureTone} />
          <p
            className={`mt-2 font-mono text-nano tracking-[0.06em] uppercase ${label}`}
          >
            5&prime;9&Prime;
          </p>
        </div>
      )}

      <ul className="flex items-end gap-3">
        {formats.map((f) => {
          const h = Math.max(Math.round(f.h * pxPerFt), 3);
          const w = Math.max(Math.round(f.w * pxPerFt), 3);
          /* The li is pinned to the plate's width, not the label's.
             Without this a 6px-wide lift panel still reserved ~70px for
             the words under it, and the row ran off the card on a 390px
             screen — 13 plates clipped before this line. */
          return (
            <li
              key={f.label}
              className="shrink-0"
              style={{ width: `${Math.max(w, 34)}px` }}
            >
              <div
                data-plate
                className={`rounded-(--radius-xs) border ${surface}`}
                style={{ width: `${w}px`, height: `${h}px` }}
              />
              <p className="mt-2 text-micro leading-tight font-medium hyphens-auto">
                {f.label}
              </p>
              <p
                className={`font-mono text-nano tracking-[0.05em] uppercase ${label}`}
              >
                {f.note}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
