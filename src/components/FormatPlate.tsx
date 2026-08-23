/**
 * Format plates.
 *
 * A media network site with no imagery reads as unfinished, but stock
 * photography of billboards would be worse — generic, and not actually
 * ours. So the visual system is drawn rather than photographed: each
 * media format at its true aspect ratio, labelled.
 *
 * It gives the page rhythm, it is about the product rather than
 * decorating around it, and it costs nothing to load.
 */

export type Format = {
  label: string;
  /* width / height — the real proportion of the medium */
  ratio: number;
  note: string;
};

export const formatSets: Record<string, Format[]> = {
  outdoor: [
    { label: "Hoarding", ratio: 2, note: "40 × 20 ft" },
    { label: "Unipole", ratio: 2.5, note: "50 × 20 ft" },
    { label: "Bus back", ratio: 1.6, note: "Transit" },
  ],
  dooh: [
    { label: "LED façade", ratio: 1.78, note: "16 : 9" },
    { label: "Portrait screen", ratio: 0.56, note: "9 : 16" },
    { label: "Ribbon", ratio: 4, note: "Wide" },
  ],
  retail: [
    { label: "Lift panel", ratio: 0.62, note: "Residential" },
    { label: "Mall atrium", ratio: 1.2, note: "Standee" },
    { label: "Fascia", ratio: 3.2, note: "Store front" },
  ],
  broadcast: [
    { label: "On-screen", ratio: 2.39, note: "Cinema" },
    { label: "Broadcast", ratio: 1.78, note: "16 : 9" },
    { label: "Quarter page", ratio: 0.78, note: "Daily" },
  ],
};

export default function FormatPlate({
  formats,
  tone = "light",
}: {
  formats: Format[];
  tone?: "light" | "dark";
}) {
  const stroke = tone === "dark" ? "border-rule-dark" : "border-rule-strong";
  const label = tone === "dark" ? "text-paper-dim" : "text-ink-50";
  const title = tone === "dark" ? "text-paper" : "text-ink";

  return (
    <ul className="flex items-end gap-5" aria-hidden="true">
      {formats.map((f) => {
        /* Normalise so every plate occupies the same visual area —
           a wide format reads short, a portrait reads tall. */
        const h = Math.round(84 / Math.sqrt(f.ratio));
        const w = Math.round(h * f.ratio);
        return (
          <li key={f.label} className="shrink-0">
            <div
              className={`border ${stroke}`}
              style={{ width: `${w}px`, height: `${h}px` }}
            />
            <p className={`mt-2.5 text-[0.8125rem] font-medium ${title}`}>
              {f.label}
            </p>
            <p
              className={`font-mono text-[0.6875rem] uppercase tracking-[0.09em] ${label}`}
            >
              {f.note}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
