import Link from "next/link";
import { cities } from "@/lib/cities";
import { cityGeo, plannedGeo, project, VIEW_H, VIEW_W } from "@/lib/geo";

/**
 * The network, drawn.
 *
 * /cities was thirty-nine names in five columns of text — every one the
 * same weight, in a form that tells you nothing about the claim the page
 * is actually making, which is that this is a national footprint. Nobody
 * holds thirty-nine place names in their head. They can hold one
 * picture.
 *
 * No national outline; see the note in lib/geo.ts. That is a legal point
 * rather than a design one, and it turned out to be the better drawing
 * anyway: the cities carry the shape on their own, and the space where
 * there are no dots is honest information about where we do not work.
 *
 * Two states of dot, because the list has always drawn that distinction
 * and the diagram must not quietly erase it — filled and labelled where
 * there is a written page, hollow where the market is planned but the
 * page is not written. Count the solid dots and you get the true number.
 *
 * `focus` lights one market and dims the rest, which is how a city page
 * shows where it sits without needing a drawing of its own.
 *
 * Server-rendered inline SVG: no library, no runtime, and the labels are
 * real text in the DOM, so a screen reader reads them and a crawler
 * indexes them. An image map or a canvas would give up both.
 */

const FS = 21;
/* Instrument Sans is not loaded inside the SVG's own text metrics, so the
   advance width is estimated. The mono stack is close to 0.6em per
   character across the fallbacks, and the de-collision only needs to be
   approximately right — a few pixels of slack per label is invisible,
   a label sitting on another label is not. */
const CHAR = FS * 0.6;
const LINE = 25;

type Placed = {
  slug: string;
  name: string;
  x: number;
  y: number;
  dy: number;
  flip: boolean;
};

/**
 * Greedy label placement.
 *
 * The first version put every label at the dot's own baseline and four
 * pairs collided outright — Ludhiana over Chandigarh, Lucknow over
 * Kanpur, Bangalore over Chennai. Those are the four densest and most
 * commercially important clusters in the country, so the diagram failed
 * hardest exactly where a reader looks first.
 *
 * Each label takes the first vertical slot that does not overlap one
 * already placed, alternating above and below before going further out.
 * Offset labels get a hairline leader back to their dot, or the reader
 * has to guess which name belongs to which point.
 *
 * Deterministic and computed at render, so it is identical on the server
 * and the client and costs nothing at runtime.
 */
function placeLabels(
  pts: { slug: string; name: string; x: number; y: number }[],
): Placed[] {
  const taken: [number, number, number, number][] = [];
  /* North to south. Reading order for a map of India, and it means the
     dense Gangetic belt is resolved before the sparse south rather than
     inheriting whatever the south left behind. */
  const order = [...pts].sort((a, b) => a.y - b.y);

  return order.map(({ slug, name, x, y }) => {
    const flip = x > VIEW_W * 0.76;
    const w = name.length * CHAR;
    const ax = flip ? x - 13 - w : x + 13;

    for (const dy of [0, -LINE, LINE, -2 * LINE, 2 * LINE, -3 * LINE, 3 * LINE]) {
      const box: [number, number, number, number] = [
        ax,
        y + dy - LINE / 2,
        ax + w,
        y + dy + LINE / 2,
      ];
      const clash = taken.some(
        (b) =>
          !(box[2] <= b[0] || box[0] >= b[2] || box[3] <= b[1] || box[1] >= b[3]),
      );
      if (!clash) {
        taken.push(box);
        return { slug, name, x, y, dy, flip };
      }
    }
    /* Seven slots exhausted — draw it anyway rather than drop a city.
       A crowded label is a smaller failure than a missing market. */
    return { slug, name, x, y, dy: 0, flip };
  });
}

export default function IndiaField({
  focus,
  labels = true,
  caption = true,
  className = "",
  tone = "sand",
}: {
  /* Slug of the city to highlight, if any. */
  focus?: string;
  /* Labels are worth it at full width and unreadable at thumbnail size,
     where the dots alone still say "here, in the north". */
  labels?: boolean;
  caption?: boolean;
  className?: string;
  tone?: "sand" | "plum";
}) {
  const dark = tone === "plum";

  const written = cities
    .filter((c) => cityGeo[c.slug])
    .map((c) => ({
      slug: c.slug,
      name: c.name,
      ...project(cityGeo[c.slug].lat, cityGeo[c.slug].lon),
    }));

  const planned = Object.entries(plannedGeo).map(([name, g]) => ({
    name,
    ...project(g.lat, g.lon),
  }));

  const placed = placeLabels(written);

  const ink = dark ? "#ffffff" : "#1b1030";
  const dim = dark ? "#b9aecd" : "#4a3f5e";
  const hot = dark ? "#9b84ff" : "#5327c9";

  const focusName = written.find((w) => w.slug === focus)?.name;

  /* The locator renders this same 1000-unit viewBox at roughly a third
     the width of the index. A 5.5-unit dot that reads clearly at full
     size lands under two physical pixels there, and the network
     dissolved into grey dust with one violet speck in it. Dot radii are
     not a fixed part of the drawing — they are a function of how large
     the drawing is being shown. */
  const dot = labels ? 1 : 1.9;

  return (
    <figure className={`not-prose m-0 ${className}`}>
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="h-auto w-full"
        role="img"
        aria-label={
          focusName
            ? `The Indian markets Bizex4U plans, plotted at true position, with ${focusName} highlighted`
            : `The ${written.length + planned.length} Indian markets Bizex4U plans, plotted at true position`
        }
      >
        {/* Below 640px the labels set at roughly six pixels — present,
            technically legible, and noise. They come off, and the dots
            grow to compensate, because the phone version of this drawing
            only has to say "everywhere, and mostly north and west". The
            names are in the list directly underneath it.

            `r` as a CSS property is SVG2 geometry; every current browser
            honours it, and one that does not simply keeps the attribute
            value, which is the desktop size. A slightly small dot is an
            acceptable failure mode. */}
        <style>{`
          @media (max-width: 639px) {
            .sc-lab { display: none }
            .sc-dot { r: 10 }
            .sc-dot--on { r: 13 }
            .sc-ring { r: 30 }
            .sc-hollow { r: 9; stroke-width: 2.6 }
          }
        `}</style>

        {/* Planned markets first, so a written city's label always sits
            over a hollow dot rather than under it. */}
        {planned.map((p) => (
          <circle
            key={p.name}
            cx={p.x}
            cy={p.y}
            className="sc-hollow"
            r={5 * dot}
            fill="none"
            stroke={dim}
            strokeWidth={1.6 * dot}
            opacity={focus ? 0.28 : 0.6}
          />
        ))}

        {placed.map((c) => {
          const on = focus === c.slug;
          const faded = Boolean(focus) && !on;
          const ax = c.flip ? c.x - 13 : c.x + 13;
          return (
            <g key={c.slug} opacity={faded ? 0.3 : 1}>
              {on && (
                <circle
                  className="sc-ring"
                  cx={c.x}
                  cy={c.y}
                  r={18 * dot}
                  fill={hot}
                  opacity={0.16}
                />
              )}
              {labels && c.dy !== 0 && (
                <line
                  className="sc-lab"
                  x1={c.x}
                  y1={c.y}
                  x2={ax}
                  y2={c.y + c.dy}
                  stroke={on ? hot : dim}
                  strokeWidth={1}
                  opacity={0.45}
                />
              )}
              <circle
                className={`sc-dot${on ? " sc-dot--on" : ""}`}
                cx={c.x}
                cy={c.y}
                r={(on ? 7.5 : 5.5) * dot}
                fill={on ? hot : ink}
              />
              {labels && (
                <text
                  className="sc-lab"
                  x={ax}
                  y={c.y + c.dy + 5}
                  textAnchor={c.flip ? "end" : "start"}
                  fill={on ? hot : dim}
                  style={{
                    fontFamily: "var(--font-plex-mono), ui-monospace, monospace",
                    fontSize: FS,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {c.name}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {caption && (
        <figcaption
          className={`mt-5 flex flex-wrap items-center gap-x-7 gap-y-2 border-t pt-3.5 font-mono text-micro tracking-[0.08em] uppercase ${
            dark
              ? "border-white/15 text-on-plum-dim"
              : "border-rule-sand text-on-sand-dim"
          }`}
        >
          <span className="inline-flex items-center gap-2.5">
            <svg width="11" height="11" aria-hidden>
              <circle cx="5.5" cy="5.5" r="5" fill={ink} />
            </svg>
            {written.length} written in full
          </span>
          <span className="inline-flex items-center gap-2.5">
            <svg width="11" height="11" aria-hidden>
              <circle
                cx="5.5"
                cy="5.5"
                r="4.4"
                fill="none"
                stroke={dim}
                strokeWidth="1.5"
              />
            </svg>
            {planned.length} planned, page to come
          </span>
          <span className="opacity-70">Plotted at true position</span>
        </figcaption>
      )}
    </figure>
  );
}

/**
 * The same field at the size a city page can spare, with that city lit.
 * No labels and no legend — at this width they are noise, and the point
 * is only "here, relative to everywhere else we work".
 */
export function CityLocator({ slug, name }: { slug: string; name: string }) {
  return (
    <div className="rounded-(--radius-card) border border-rule-sand bg-sand-2 p-6">
      <p className="eyebrow text-on-sand-dim">{name} in the network</p>
      <IndiaField focus={slug} labels={false} caption={false} className="mt-5" />
      <p className="mt-5 border-t border-rule-sand pt-4 text-body-s text-on-sand-dim">
        Every market we plan, at true position.{" "}
        <Link href="/cities" className="link-underline text-on-sand">
          See all of them
        </Link>
        .
      </p>
    </div>
  );
}
