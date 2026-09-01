import Image from "next/image";
import { reserve } from "@/lib/streets";

/**
 * Square plate of a street we actually photographed.
 *
 * Previously a location reel. That file (and its posters) carried a
 * licensed-talent creative which cannot be republished on this site,
 * so the panel is a still from the same own-photography set used on
 * /work. Not currently mounted; kept so a future hero that wants a
 * contained frame does not reach for the deleted reel.
 */

const plate = reserve.find((s) => s.src.endsWith("agra-12.webp"));
if (!plate) {
  throw new Error("Expected agra-12.webp in streets reserve");
}

export default function HeroReel() {
  return (
    <figure className="relative">
      <div className="relative aspect-square overflow-hidden rounded-(--radius-card) bg-plum">
        <Image
          src={plate.src}
          alt={plate.alt}
          fill
          sizes="(min-width: 768px) 28vw, 92vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-plum/90 to-transparent"
        />
        <figcaption className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-body-s font-medium text-on-plum">
            {plate.city}
            <span className="block text-caption text-on-plum-dim">
              {plate.state}
            </span>
          </p>
        </figcaption>
      </div>
      <p className="mt-3 text-caption text-on-sand-dim">
        Photographed on a working day, not stock footage.
      </p>
    </figure>
  );
}
