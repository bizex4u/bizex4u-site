"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

/**
 * The hero reel, as a contained square panel.
 *
 * v3 ran this full-bleed with the headline over it, and the headline
 * was hard to read against bright daylight footage. Text and video no
 * longer overlap — the type sits on beige, the footage sits in its own
 * frame beside it. Nothing has to fight a scrim.
 *
 * Five clips of live sites in Delhi NCR. The caption names the location
 * on screen, because the point is that this is real inventory rather
 * than stock footage of somebody else's city.
 *
 * The poster is always a next/image, and it is the LCP candidate.
 * Video mounts only on desktop without reduced-motion or Data Saver,
 * and never with preload, so a mobile first paint cannot wait on 1.5MB
 * of H.264.
 */

const SEGMENTS = [
  { at: 0.0, place: "Cyber Hub", city: "Gurugram" },
  { at: 3.4, place: "Chanakyapuri", city: "New Delhi" },
  { at: 6.6, place: "Taj Palace, San Martin Marg", city: "New Delhi" },
  { at: 9.8, place: "Safdarjung Enclave", city: "New Delhi" },
  { at: 13.0, place: "Ashoka Hotel, Vinay Marg", city: "New Delhi" },
];

const POSTER = {
  src: "/media/reel-poster.jpg",
  alt: "A Bizex4U digital screen above the walkway at Cyber Hub, Gurugram",
};

function subscribe(cb: () => void) {
  const qs = [
    window.matchMedia("(min-width: 768px)"),
    window.matchMedia("(prefers-reduced-motion: reduce)"),
  ];
  qs.forEach((q) => q.addEventListener("change", cb));
  return () => qs.forEach((q) => q.removeEventListener("change", cb));
}

function shouldPlay() {
  const conn = (
    navigator as Navigator & { connection?: { saveData?: boolean } }
  ).connection;
  return (
    window.matchMedia("(min-width: 768px)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    !conn?.saveData
  );
}

export default function HeroReel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [index, setIndex] = useState(0);
  const play = useSyncExternalStore(subscribe, shouldPlay, () => false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !play) return;
    const onTime = () => {
      const t = v.currentTime;
      let i = 0;
      for (let n = 0; n < SEGMENTS.length; n++) if (t >= SEGMENTS[n].at) i = n;
      setIndex(i);
    };
    v.addEventListener("timeupdate", onTime);
    return () => v.removeEventListener("timeupdate", onTime);
  }, [play]);

  const current = SEGMENTS[index];

  return (
    <figure className="relative">
      <div className="relative aspect-square overflow-hidden rounded-(--radius-card) bg-plum">
        <Image
          src={POSTER.src}
          alt={POSTER.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority
          fetchPriority="high"
        />
        {play ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src="/media/reel.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
          />
        ) : null}

        {/* A light foot only — enough for the caption, not enough to
            dull the footage. The headline is nowhere near it. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-plum/90 to-transparent"
        />

        <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
          <p className="text-body-s font-medium text-on-plum">
            {current.place}
            <span className="block text-caption text-on-plum-dim">
              {current.city}
            </span>
          </p>
          <div className="flex gap-1.5 pb-1" aria-hidden="true">
            {SEGMENTS.map((s, i) => (
              <span
                key={s.at}
                className={`h-1 w-6 rounded-full transition-colors duration-300 ${
                  i === index ? "bg-violet" : "bg-white/25"
                }`}
              />
            ))}
          </div>
        </figcaption>
      </div>

      <p className="mt-3 text-caption text-on-sand-dim">
        Live sites across Delhi NCR, filmed on location.
      </p>
    </figure>
  );
}
