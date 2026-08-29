/**
 * The street frames.
 *
 * Own photography, shot on site during live campaigns. Graded to one
 * look — plum in the shadows, sand in the highlights — because they
 * came from six shoots across two states and read as six different
 * shoots until they were pulled together.
 *
 * City is the finest grain published here. The source frames carry a
 * geo-stamp naming the exact junction, and a junction name is a site
 * listing: it tells a competitor precisely which asset is held. The
 * stamp is cropped off for editorial use and kept only on the proof
 * frames, where the date and location are the entire point and the
 * buyer is the one person entitled to them.
 *
 * `alt` describes the street, not the creative on the hoarding. The
 * brands visible in these frames are clients whose campaigns ran;
 * naming them in alt text would read as a claim about the campaign.
 */

export type Street = {
  src: string;
  city: string;
  state: string;
  w: number;
  h: number;
  alt: string;
};

export const streets: Street[] = [
  { src: "/media/streets/kochi-4.webp", city: "Kochi", state: "Kerala", w: 900, h: 442, alt: "Traffic under a flyover on an arterial road in Kochi, hoardings on both approaches" },
  { src: "/media/streets/kochi-1.webp", city: "Kochi", state: "Kerala", w: 900, h: 451, alt: "Two-wheelers and cars on a divided highway through Kochi" },
  { src: "/media/streets/palakkad-3.webp", city: "Palakkad", state: "Kerala", w: 900, h: 399, alt: "Auto-rickshaws waiting at a junction in Palakkad" },
  { src: "/media/streets/thiruvananthapuram-5.webp", city: "Thiruvananthapuram", state: "Kerala", w: 900, h: 398, alt: "A lorry crossing a commercial stretch in Thiruvananthapuram" },
  { src: "/media/streets/kanpur-1.webp", city: "Kanpur", state: "Uttar Pradesh", w: 900, h: 445, alt: "A wide arterial road through Civil Lines, Kanpur" },
  { src: "/media/streets/kochi-3.webp", city: "Kochi", state: "Kerala", w: 900, h: 415, alt: "An open stretch of highway through Kochi under monsoon cloud" },
  { src: "/media/streets/kozhikode-6.webp", city: "Kozhikode", state: "Kerala", w: 900, h: 441, alt: "A pedestrian crossing a Kozhikode street beside stacked retail frontage" },
  { src: "/media/streets/thiruvananthapuram-1.webp", city: "Thiruvananthapuram", state: "Kerala", w: 900, h: 399, alt: "Shops, palms and overhead cabling along a Thiruvananthapuram road" },
  { src: "/media/streets/palakkad-1.webp", city: "Palakkad", state: "Kerala", w: 900, h: 398, alt: "A junction in Palakkad with signage stacked above the shopfronts" },
  { src: "/media/streets/kochi-5.webp", city: "Kochi", state: "Kerala", w: 900, h: 399, alt: "A raised approach road in Kochi seen from the traffic lane" },
  { src: "/media/streets/kozhikode-3.webp", city: "Kozhikode", state: "Kerala", w: 900, h: 340, alt: "A commercial façade in Kozhikode fronting a busy carriageway" },
  { src: "/media/streets/aluva-1.webp", city: "Aluva", state: "Kerala", w: 900, h: 442, alt: "The national highway through Aluva, tree line to one side" },
  { src: "/media/streets/thiruvananthapuram-3.webp", city: "Thiruvananthapuram", state: "Kerala", w: 900, h: 442, alt: "A shopfront row on a Thiruvananthapuram arterial road" },
  { src: "/media/streets/palakkad-4.webp", city: "Palakkad", state: "Kerala", w: 900, h: 415, alt: "A four-lane road through Palakkad with a central median" },
  { src: "/media/streets/thiruvananthapuram-6.webp", city: "Thiruvananthapuram", state: "Kerala", w: 900, h: 456, alt: "Mid-morning traffic on a Thiruvananthapuram commercial stretch" },
  { src: "/media/streets/kochi-2.webp", city: "Kochi", state: "Kerala", w: 900, h: 285, alt: "A long view down a Kochi road toward the horizon" },
  { src: "/media/streets/kozhikode-1.webp", city: "Kozhikode", state: "Kerala", w: 900, h: 441, alt: "Parked cars and roadside frontage on a Kozhikode street" },
  { src: "/media/streets/palakkad-2.webp", city: "Palakkad", state: "Kerala", w: 900, h: 389, alt: "An underpass approach in Palakkad beside a boundary wall" },
  { src: "/media/streets/thiruvananthapuram-2.webp", city: "Thiruvananthapuram", state: "Kerala", w: 900, h: 443, alt: "A junction in Thiruvananthapuram with an elevated road behind" },
  { src: "/media/streets/thiruvananthapuram-4.webp", city: "Thiruvananthapuram", state: "Kerala", w: 900, h: 397, alt: "A roadside row of shops in Thiruvananthapuram under heavy cloud" },
  { src: "/media/streets/agra-1.webp", city: "Agra", state: "Uttar Pradesh", w: 900, h: 580, alt: "An elevated carriageway through Agra with hoardings along the approach" },
  { src: "/media/streets/agra-3.webp", city: "Agra", state: "Uttar Pradesh", w: 900, h: 580, alt: "Traffic and auto-rickshaws on a divided road through Agra" },
  { src: "/media/streets/agra-5.webp", city: "Agra", state: "Uttar Pradesh", w: 900, h: 580, alt: "A flyover approach in Agra seen from the traffic lane" },
  { src: "/media/streets/agra-7.webp", city: "Agra", state: "Uttar Pradesh", w: 900, h: 580, alt: "A commercial stretch in Agra with overhead signage and a gantry" },
  { src: "/media/streets/agra-9.webp", city: "Agra", state: "Uttar Pradesh", w: 900, h: 580, alt: "A market street in Agra, shopfronts and parked vehicles" },
  { src: "/media/streets/agra-11.webp", city: "Agra", state: "Uttar Pradesh", w: 900, h: 580, alt: "An arterial road through Agra under a clear sky" },
  { src: "/media/streets/delhi-ncr-1.webp", city: "Delhi NCR", state: "Delhi", w: 900, h: 310, alt: "A long hoarding above a commercial frontage in Delhi" },
  { src: "/media/streets/delhi-ncr-3.webp", city: "Delhi NCR", state: "Delhi", w: 900, h: 311, alt: "Traffic passing a run of roadside hoardings in Delhi" },
  { src: "/media/streets/kozhikode-4.webp", city: "Kozhikode", state: "Kerala", w: 900, h: 183, alt: "A wide view along a Kozhikode carriageway" },
];

/* The two frames exported at 1800px, for the places where a single
   photograph carries a whole section rather than sitting in a row.

   Named for their subject, not their slot. They were `hero.webp` and
   `statement.webp` until swapping which photograph filled each slot
   changed the file behind a URL that had not changed — and Next's image
   optimiser, which caches by URL, kept serving the old picture under the
   new caption for two builds. A filename that describes the content
   makes that class of mistake impossible: a different photograph is a
   different path. */
export const heroPlate = {
  src: "/media/streets/plate-hero-kozhikode.webp",
  w: 1800,
  h: 911,
  city: "Kozhikode, Kerala",
  /* First pass used a Kochi flyover. Composed well and argued nothing:
     the half of the frame the scrim leaves visible was a concrete pier,
     a U-turn sign and some grey glazing — not one piece of advertising
     in a hero for an advertising company. This frame puts the medium on
     the exposed side, which is the only test that mattered. */
  alt: "A dense commercial street in Kozhikode at midday, hoardings and shop signage stacked above the traffic on both sides",
};

export const statementPlate = {
  src: "/media/streets/plate-statement-kozhikode.webp",
  w: 1800,
  h: 912,
  city: "Kozhikode, Kerala",
  alt: "A commercial building in Kozhikode carrying three large advertising panels across its face, traffic passing below",
};

/**
 * The frames we hold for a given market, if any.
 *
 * Two of the twenty-two written cities have photography — Kanpur and
 * Kochi. The rest do not, and the template has to be honest about that
 * rather than filling the gap with a street from somewhere else. A
 * Kozhikode hoarding on the Bhopal page would be the single fastest way
 * to lose a buyer who knows Bhopal.
 *
 * So the band renders only where there is something true to show, and
 * every other city page simply does not have it. An inconsistent set of
 * pages is a smaller problem than a consistent set of pages that lies.
 */
export const framesFor = (city: string) =>
  [...streets, ...reserve].filter((s) => s.city === city);

/**
 * Frames held for a market but not shown in the drifting wall.
 *
 * The wall wants variety across the country; a city page wants depth in
 * one place. Agra alone yielded thirty-nine usable frames from a single
 * campaign deck, and putting all of them in the homepage row would have
 * turned "we work across India" into "we work in Agra".
 */
export const reserve: Street[] = [
  { src: "/media/streets/agra-2.webp", city: "Agra", state: "Uttar Pradesh", w: 900, h: 580, alt: "A wide road through Agra with a hoarding on the central median" },
  { src: "/media/streets/agra-4.webp", city: "Agra", state: "Uttar Pradesh", w: 900, h: 580, alt: "A two-wheeler crossing an Agra flyover" },
  { src: "/media/streets/agra-6.webp", city: "Agra", state: "Uttar Pradesh", w: 900, h: 580, alt: "An open stretch of Agra highway with roadside signage" },
  { src: "/media/streets/agra-8.webp", city: "Agra", state: "Uttar Pradesh", w: 900, h: 580, alt: "A junction in Agra with a gantry across the carriageway" },
  { src: "/media/streets/agra-10.webp", city: "Agra", state: "Uttar Pradesh", w: 900, h: 580, alt: "A dense Agra market street with stacked shop signage" },
  { src: "/media/streets/agra-12.webp", city: "Agra", state: "Uttar Pradesh", w: 900, h: 580, alt: "An Agra approach road with hoardings on both sides" },
  { src: "/media/streets/agra-13.webp", city: "Agra", state: "Uttar Pradesh", w: 900, h: 580, alt: "Traffic on a broad Agra arterial road" },
  { src: "/media/streets/delhi-ncr-2.webp", city: "Delhi NCR", state: "Delhi", w: 900, h: 310, alt: "A crowded Delhi market street beneath an overpass" },
  { src: "/media/streets/delhi-ncr-4.webp", city: "Delhi NCR", state: "Delhi", w: 900, h: 310, alt: "A roadside hoarding run in Delhi with traffic passing" },
];
