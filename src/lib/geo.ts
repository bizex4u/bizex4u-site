/**
 * Where the markets are.
 *
 * Approximate city centroids, used only to position a dot in a diagram.
 * They are not published as data and nothing on the site quotes them, so
 * a tenth of a degree either way is invisible at this scale — but they
 * are real coordinates rather than hand-placed dots, which is why the
 * constellation reads as India rather than as a decorative scatter.
 *
 * DELIBERATELY NO NATIONAL OUTLINE.
 *
 * The obvious way to draw this is cities plotted on a map of India. We
 * do not, for one reason: any outline of India is a statement about
 * borders, and an Indian company publishing a map whose Kashmir, Ladakh
 * or Arunachal boundary does not match the official depiction has a
 * problem that has nothing to do with advertising. The Survey of India
 * rules on this are specific and the penalty is not nominal.
 *
 * The cities alone are enough. Thirty-nine points placed at their true
 * positions describe the shape of the country without asserting a single
 * border — and the negative space where we do not operate is honest
 * information in its own right.
 */

export type Marker = { name: string; lat: number; lon: number };

/* Written pages — keyed by slug so the field can link them. */
export const cityGeo: Record<string, { lat: number; lon: number }> = {
  kanpur: { lat: 26.45, lon: 80.33 },
  lucknow: { lat: 26.85, lon: 80.95 },
  varanasi: { lat: 25.32, lon: 82.97 },
  "delhi-ncr": { lat: 28.61, lon: 77.21 },
  jaipur: { lat: 26.91, lon: 75.79 },
  chandigarh: { lat: 30.73, lon: 76.78 },
  ludhiana: { lat: 30.9, lon: 75.85 },
  agra: { lat: 27.18, lon: 78.02 },
  mumbai: { lat: 19.08, lon: 72.88 },
  pune: { lat: 18.52, lon: 73.86 },
  nagpur: { lat: 21.15, lon: 79.09 },
  ahmedabad: { lat: 23.02, lon: 72.57 },
  surat: { lat: 21.17, lon: 72.83 },
  indore: { lat: 22.72, lon: 75.86 },
  bhopal: { lat: 23.26, lon: 77.41 },
  bangalore: { lat: 12.97, lon: 77.59 },
  hyderabad: { lat: 17.39, lon: 78.49 },
  chennai: { lat: 13.08, lon: 80.27 },
  kochi: { lat: 9.93, lon: 76.27 },
  coimbatore: { lat: 11.02, lon: 76.96 },
  kolkata: { lat: 22.57, lon: 88.36 },
  patna: { lat: 25.59, lon: 85.14 },
};

/* Markets planned but not yet written up. Same treatment on the field,
   hollow rather than filled — the diagram tells the same truth the list
   does, which is that some of these have a page and some do not. */
export const plannedGeo: Record<string, { lat: number; lon: number }> = {
  Vadodara: { lat: 22.31, lon: 73.18 },
  Rajkot: { lat: 22.3, lon: 70.8 },
  Nashik: { lat: 20.0, lon: 73.79 },
  Meerut: { lat: 28.98, lon: 77.71 },
  Prayagraj: { lat: 25.44, lon: 81.85 },
  Gorakhpur: { lat: 26.76, lon: 83.37 },
  Jodhpur: { lat: 26.24, lon: 73.02 },
  Udaipur: { lat: 24.58, lon: 73.68 },
  Amritsar: { lat: 31.63, lon: 74.87 },
  Jalandhar: { lat: 31.33, lon: 75.58 },
  Guwahati: { lat: 26.14, lon: 91.74 },
  Bhubaneswar: { lat: 20.3, lon: 85.82 },
  Raipur: { lat: 21.25, lon: 81.63 },
  Visakhapatnam: { lat: 17.69, lon: 83.22 },
  Vijayawada: { lat: 16.51, lon: 80.65 },
  Madurai: { lat: 9.93, lon: 78.12 },
  Mysuru: { lat: 12.3, lon: 76.64 },
};

/* Bounds, with room for the labels that sit beside the outermost dots. */
const LON0 = 69.6;
const LON1 = 93.4;
const LAT0 = 8.4;
const LAT1 = 32.6;

/* Longitude degrees are shorter than latitude degrees away from the
   equator. Without the cosine correction India renders noticeably wide
   and the peninsula loses its taper — the one part of the shape everyone
   recognises. Taken at the mid-latitude of the plotted set. */
const K = Math.cos((21 * Math.PI) / 180);

export const VIEW_W = 1000;
export const VIEW_H = Math.round(
  (VIEW_W * (LAT1 - LAT0)) / ((LON1 - LON0) * K),
);

export const project = (lat: number, lon: number) => ({
  x: ((lon - LON0) / (LON1 - LON0)) * VIEW_W,
  y: VIEW_H - ((lat - LAT0) / (LAT1 - LAT0)) * VIEW_H,
});
