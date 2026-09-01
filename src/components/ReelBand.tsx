import Image from "next/image";
import { reserve } from "@/lib/streets";

/**
 * The full-bleed band.
 *
 * The site had no moment of scale — everything sat inside the same
 * max-width shell, in a card, with padding. Nothing ever filled the
 * screen, and that containment is a large part of why it read as
 * careful rather than expensive.
 *
 * This is the counterweight: one band that ignores the grid entirely
 * and runs edge to edge. Deliberately carries no headline over it.
 *
 * It used to be a Delhi NCR location reel. That footage, and both
 * posters, carried a licensed-talent creative (Nisara "Midnight
 * Tease") which cannot be republished here. The band now uses one of
 * our own street frames — already on /work — so the scale remains and
 * the claim stays honest: photographed on a working day, not stock,
 * and not someone else's celebrity.
 */

const plate = reserve.find((s) => s.src.endsWith("agra-12.webp"));
if (!plate) {
  throw new Error("Expected agra-12.webp in streets reserve");
}

export default function ReelBand() {
  return (
    <section
      aria-label={`${plate.city} street`}
      className="relative h-[clamp(22rem,58vh,34rem)] w-full overflow-hidden bg-plum"
    >
      <Image
        src={plate.src}
        alt={plate.alt}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Top and bottom feathering only — the middle of the frame stays
          untouched so the photograph reads at full strength. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-plum/70 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-plum/85 to-transparent"
      />

      <div className="shell absolute inset-x-0 bottom-0 pb-7">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <p className="max-w-[34ch] text-body-s text-on-plum">
            Photographed on a working day, not stock footage.
            <span className="mt-0.5 block text-caption text-on-plum-dim">
              {plate.city}, {plate.state}
            </span>
          </p>
          <p className="font-mono text-micro tracking-[0.08em] text-on-plum-dim uppercase">
            Our own frame
          </p>
        </div>
      </div>
    </section>
  );
}
