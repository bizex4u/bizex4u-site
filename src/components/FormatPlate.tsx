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
};

export default function FormatPlate({
  formats,
  tone = "light",
}: {
  formats: Format[];
  tone?: "light" | "dark";
}) {
  const stroke =
    tone === "dark" ? "border-on-ink/25" : "border-on-cream/25";
  const label = tone === "dark" ? "text-on-ink-dim" : "text-on-cream-dim";

  return (
    <ul className="flex items-end gap-3" aria-hidden="true">
      {formats.map((f) => {
        /* Normalised so each plate occupies a similar visual area —
           a wide format reads short, a portrait reads tall. */
        const h = Math.round(58 / Math.sqrt(f.ratio));
        const w = Math.round(h * f.ratio);
        return (
          <li key={f.label} className="shrink-0">
            <div
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
