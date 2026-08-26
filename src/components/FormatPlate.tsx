/**
 * Format plates — each medium drawn at its true aspect ratio.
 *
 * They sit inside the capability cards as the artefact for that
 * section. Cheap, specific to the product, and no stock photography.
 */

export type Format = { label: string; ratio: number; note: string };

export const formatSets: Record<string, Format[]> = {
  outdoor: [
    { label: "Hoarding", ratio: 2, note: "40 × 20 ft" },
    { label: "Unipole", ratio: 2.5, note: "50 × 20 ft" },
    { label: "Bus back", ratio: 1.6, note: "Transit" },
  ],
  dooh: [
    { label: "LED façade", ratio: 1.78, note: "16 : 9" },
    { label: "Portrait", ratio: 0.56, note: "9 : 16" },
    { label: "Ribbon", ratio: 4, note: "Wide" },
  ],
  retail: [
    { label: "Lift panel", ratio: 0.62, note: "Residential" },
    { label: "Atrium", ratio: 1.2, note: "Mall" },
    { label: "Fascia", ratio: 3.2, note: "Store front" },
  ],
  broadcast: [
    { label: "On-screen", ratio: 2.39, note: "Cinema" },
    { label: "Broadcast", ratio: 1.78, note: "16 : 9" },
    { label: "Quarter", ratio: 0.78, note: "Daily" },
  ],
  activation: [
    { label: "Canopy", ratio: 1, note: "10 × 10 ft" },
    { label: "Gate arch", ratio: 2.8, note: "Entry" },
    { label: "Kiosk", ratio: 0.5, note: "Mall court" },
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
            <span className="font-mono text-caption text-on-violet-dim">
              ⇄
            </span>
          )}
          <div className="rounded-[3px] border border-white/35 px-3 py-4">
            <p className="text-[0.75rem] leading-tight font-medium whitespace-nowrap">
              {side}
            </p>
            <p className="mt-1 font-mono text-[0.625rem] tracking-[0.05em] text-on-violet-dim uppercase">
              {i === 0 ? "At list value" : "At card rate"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FormatPlate({
  formats,
  tone = "light",
  base = 58,
}: {
  formats: Format[];
  /* "violet" exists because on-plum-dim only reaches 4.0:1 against
     violet-deep. The violet ground needs on-violet-dim (5.88:1) or
     the format notes fail AA. */
  tone?: "light" | "dark" | "violet";
  /* Height in px of a 1:1 plate. Everything else is derived from it,
     so one number scales the whole set. The day-clock panels run
     smaller because they are fighting for vertical room inside a
     pinned viewport. */
  base?: number;
}) {
  /* A faint fill as well as a stroke. Outline alone reads as an
     unfinished wireframe; the fill makes each plate read as an object
     drawn at a size, which is the whole point of the device. */
  const stroke =
    tone === "light"
      ? "border-on-sand/30 bg-on-sand/5"
      : "border-white/35 bg-white/5";
  const label =
    tone === "light"
      ? "text-on-sand-dim"
      : tone === "violet"
        ? "text-on-violet-dim"
        : "text-on-plum-dim";

  return (
    <ul className="flex items-end gap-3" aria-hidden="true">
      {formats.map((f) => {
        /* Normalised so each plate occupies a similar visual area —
           a wide format reads short, a portrait reads tall. */
        const h = Math.round(base / Math.sqrt(f.ratio));
        const w = Math.round(h * f.ratio);
        return (
          <li key={f.label} className="shrink-0">
            <div
              data-plate
              className={`rounded-[3px] border ${stroke}`}
              style={{ width: `${w}px`, height: `${h}px` }}
            />
            <p className="mt-2 text-[0.75rem] leading-tight font-medium">
              {f.label}
            </p>
            <p
              className={`font-mono text-[0.625rem] tracking-[0.05em] uppercase ${label}`}
            >
              {f.note}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
