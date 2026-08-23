"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

/**
 * The hero reel.
 *
 * Five clips of live Bizex4U sites in Delhi NCR, cut into one 16.8s loop.
 * A ticker names the location currently on screen — the point being that
 * this is real inventory, not stock footage of somebody else's city.
 *
 * Mobile gets the poster frame only. Autoplaying 1.5MB of video over a
 * 4G connection in a tier-2 city is a bounce, not a brand impression.
 */

const SEGMENTS = [
  { at: 0.0, place: "Cyber Hub", city: "Gurugram" },
  { at: 3.4, place: "Chanakyapuri", city: "New Delhi" },
  { at: 6.6, place: "Taj Palace, San Martin Marg", city: "New Delhi" },
  { at: 9.8, place: "Safdarjung Enclave", city: "New Delhi" },
  { at: 13.0, place: "Ashoka Hotel, Vinay Marg", city: "New Delhi" },
];

/* matchMedia is an external store — reading it with useSyncExternalStore
   keeps SSR honest (always the poster) and avoids a setState-in-effect. */
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
    <div className="absolute inset-0 overflow-hidden bg-ink">
      {play ? (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/media/reel.mp4"
          poster="/media/reel-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/media/reel-poster.jpg"
          alt="A Bizex4U digital screen above the walkway at Cyber Hub, Gurugram"
          className="h-full w-full object-cover"
        />
      )}

      {/* Scrim. The footage is bright daylight, so the type needs a real
          gradient under it rather than a token 20% overlay. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-ink/95 via-ink/55 to-ink/35"
      />

      {/* Location ticker */}
      <div className="absolute right-0 bottom-0 hidden p-8 text-right md:block lg:p-12">
        <p
          key={current.place}
          className="reveal font-mono text-meta uppercase tracking-[0.09em] text-on-ink"
          data-shown="true"
        >
          {current.place}
          <span className="text-on-ink-dim"> — {current.city}</span>
        </p>
        <div className="mt-3 flex justify-end gap-1.5" aria-hidden="true">
          {SEGMENTS.map((s, i) => (
            <span
              key={s.at}
              className={`h-px w-7 transition-colors duration-300 ${
                i === index ? "bg-on-ink" : "bg-on-ink/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
