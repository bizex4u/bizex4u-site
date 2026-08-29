/**
 * The formats, as words.
 *
 * These used to be drawings — small rectangles scaled to each medium's
 * real dimensions, sitting inside every capability card. Two things were
 * wrong with them and both were mine.
 *
 * The drawing did not survive its own ground. On plum, at card width,
 * the plates rendered as flat grey rectangles at a few percent contrast
 * and read as images that had failed to load. A device whose first
 * impression is "broken" costs more than it returns however good the
 * idea behind it is.
 *
 * And the argument was false. The copy above them said "drawn at true
 * proportion, because a hoarding and a lift panel are not the same
 * product" — while FormatPlate scaled every SET independently, fitting
 * its tallest object to the same pixel height. So the 40 ft hoarding in
 * one card and the 45 ft cinema screen in another were at different
 * pixels-per-foot, and the one sentence the section rested on was
 * contradicted by the code underneath it.
 *
 * As a list the same information is legible at any size, indexable, and
 * carries the vocabulary Indian buyers actually search — hoarding, not
 * billboard; unipole, not monopole; bus queue shelter, not bus stop.
 *
 * SPECS ARE TYPICAL, NOT HELD. Rule 1 in cities/types.ts applies here as
 * everywhere: this is a list of formats the market uses, not a list of
 * sites we have. Nothing here says anything about availability, and the
 * dimensions are the standard sizes of the format, not the measurements
 * of a specific structure. Where a medium is not bought by dimension at
 * all — a radio spot, a press insertion — the spec column says how it IS
 * bought rather than inventing a number for it.
 */

export type FormatLine = { name: string; spec: string };

export const formatLines: Record<string, FormatLine[]> = {
  "01": [
    { name: "Hoarding", spec: "40 × 20 ft" },
    { name: "Unipole", spec: "50 × 20 ft" },
    { name: "Gantry", spec: "spans the carriageway" },
    { name: "Bus queue shelter", spec: "backlit panel" },
    { name: "Bus back and bus side", spec: "10 × 8 ft" },
    { name: "Pole kiosk", spec: "3 × 6 ft, in runs" },
    { name: "Auto and cab branding", spec: "by fleet" },
  ],
  "02": [
    { name: "LED façade", spec: "32 × 18 ft" },
    { name: "Portrait screen", spec: "6 × 11 ft" },
    { name: "Ribbon display", spec: "40 × 10 ft" },
    { name: "In-mall network", spec: "bought by daypart" },
    { name: "Programmatic DOOH", spec: "bought by impression" },
  ],
  "03": [
    { name: "Mall fascia", spec: "16 × 5 ft" },
    { name: "Atrium branding", spec: "12 × 10 ft" },
    { name: "Lift panel", spec: "2 × 3 ft" },
    { name: "Society gate arch", spec: "by gate" },
    { name: "Store catchment cluster", spec: "by trade area" },
  ],
  "04": [
    { name: "Cinema on-screen", spec: "45 × 19 ft" },
    { name: "Regional news television", spec: "bought by spot" },
    { name: "FM radio, drive time", spec: "bought by spot" },
    { name: "Daily press", spec: "bought by column" },
  ],
  "05": [
    { name: "Gate arch", spec: "28 × 10 ft" },
    { name: "Canopy", spec: "10 × 10 ft" },
    { name: "Promoter kiosk", spec: "3 × 6 ft" },
    { name: "Mall atrium activation", spec: "bought by day" },
    { name: "Distributor meet", spec: "by event" },
  ],
};

/* Barter carries no format list, because barter is not a medium — it is
   how the medium gets paid for. The two legs of the swap, as a sentence
   rather than as the pair of bordered boxes that used to sit here. */
export const exchangeLine = {
  give: "Your stock, at list value",
  get: "Our media, at card rate",
};
