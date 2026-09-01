import Image from "next/image";
import { Eyebrow } from "@/components/UI";
import MarqueeToggle from "@/components/MarqueeToggle";
import { streets } from "@/lib/streets";

/**
 * The streets themselves, full bleed.
 *
 * Eleven of the thirteen routes on this site carried no photograph at
 * all, which is the real reason it read as unfinished rather than any
 * failing of the type or the palette. A media company that cannot show
 * you a street is asking you to take the street on trust.
 *
 * Ocean Outdoor solves the same problem with commissioned motion of
 * screens it owns, at four or five megabytes a section. That is not
 * available here and would not be the right answer if it were: these
 * buyers open the site on Indian mobile data, and the homepage budget
 * is half a megabyte, deliberately. So the device is a drifting band
 * of stills rather than a video wall — same argument, a twentieth of
 * the weight, and it degrades to a plain scrollable row with no JS.
 *
 * Two rows moving in opposite directions rather than one. A single
 * row reads as a carousel, which is a widget; two counter-moving rows
 * read as a field of traffic, which is the subject.
 *
 * The frames are deliberately not captioned with junctions. City is
 * as fine as this gets — see the note in lib/streets.ts.
 */

function Row({
  frames,
  speed,
  reverse = false,
}: {
  frames: typeof streets;
  speed: number;
  reverse?: boolean;
}) {
  const strip = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-stretch gap-3 pr-3 md:gap-4 md:pr-4"
    >
      {frames.map((f) => (
        <li key={f.src} className="shrink-0">
          <figure className="group relative m-0 h-[38vw] max-h-[230px] min-h-[128px] w-[68vw] overflow-hidden rounded-(--radius-card) bg-plum-2 sm:w-[42vw] lg:w-[26vw] lg:max-w-[380px]">
            <Image
              src={f.src}
              alt={hidden ? "" : f.alt}
              fill
              sizes="(min-width: 1024px) 26vw, (min-width: 640px) 42vw, 68vw"
              className="object-cover opacity-[0.92] transition-opacity duration-500 group-hover:opacity-100"
            />
            {/* The city sits on the frame, not under it. A caption row
                under a moving strip is unreadable — it slides out from
                under the eye before it is finished being read. */}
            <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-plum/85 to-transparent p-3.5 pt-10">
              <span className="font-mono text-micro tracking-[0.09em] text-white/85 uppercase">
                {f.city}
              </span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee-mask marquee-mask--plate overflow-hidden">
      <div
        data-marquee={speed}
        data-marquee-reverse={reverse ? "" : undefined}
        className="flex w-max"
      >
        {strip(false)}
        {strip(true)}
      </div>
    </div>
  );
}

export default function StreetWall() {
  /* Split so a city does not appear twice within one eyeful. The
     alternating pick interleaves the two states and the six markets
     rather than running all six Kozhikode frames past in a block. */
  const top = streets.filter((_, i) => i % 2 === 0);
  const bottom = streets.filter((_, i) => i % 2 === 1);

  return (
    <section
      data-marquee-scope
      className="grain relative overflow-hidden bg-plum py-(--spacing-band) text-on-plum"
    >
      <div className="shell relative z-10">
        <div className="grid-12 items-end">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow tone="plum">
              Shot on site, while it was running
            </Eyebrow>
            <h2 className="mt-5 font-display text-display-l text-balance">
              This is what the{" "}
              <span className="em-serif text-violet-lift">work looks like</span>
              .
            </h2>
          </div>
          <div className="col-span-12 mt-5 lg:col-span-5 lg:mt-0">
            <p className="max-w-[42ch] text-body-l text-on-plum-dim">
              Our own frames, not stock. Every one taken standing in front of a
              live placement, on a working day, in traffic — which is the only
              condition under which any of this matters.
            </p>
            <div className="mt-5">
              <MarqueeToggle label="the street frames" tone="plum" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-11 flex flex-col gap-3 md:gap-4">
        <Row frames={top} speed={92} />
        <Row frames={bottom} speed={108} reverse />
      </div>
    </section>
  );
}
