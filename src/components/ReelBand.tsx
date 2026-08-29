"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

/**
 * The full-bleed reel band.
 *
 * The site had no moment of scale — everything sat inside the same
 * max-width shell, in a card, with padding. Nothing ever filled the
 * screen, and that containment is a large part of why it read as
 * careful rather than expensive.
 *
 * This is the counterweight: one band that ignores the grid entirely
 * and runs edge to edge. Deliberately carries no headline over it. The
 * brief early on was that type over this footage could not be read,
 * and that was correct — the fix is not a heavier scrim, it is not
 * putting type there in the first place. The only text is a caption in
 * a corner, on its own solid ground.
 *
 * Mobile, reduced motion and Data Saver all get the poster frame
 * instead of the video: 1.5MB of autoplaying H.264 is a real cost on
 * an Indian mobile connection, and this band is decoration rather than
 * content.
 *
 * It is also mounted lazily, which `preload="none"` alone does not
 * achieve. `autoPlay` beats `preload` — a browser told to start playing
 * on its own fetches the file immediately no matter where the element
 * sits in the document. This band is nine thousand pixels down the
 * homepage and was costing 1.5MB of the ~1.9MB first paint before the
 * reader had scrolled a line. The observer holds the poster until the
 * band is one viewport away, which is far enough ahead that it is
 * already playing by the time anyone reaches it.
 */

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

export default function ReelBand() {
  const allowed = useSyncExternalStore(subscribe, shouldPlay, () => false);
  const band = useRef<HTMLElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = band.current;
    if (!el || near) return;
    /* A browser without IntersectionObserver keeps the poster frame.
       That is pre-2019, and the poster is a complete resting state for
       this band — it carries no information the video adds. Forcing the
       video in as a fallback would mean the oldest, slowest clients are
       the only ones that download 1.5MB unconditionally, which is
       exactly backwards. */
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setNear(true);
        io.disconnect();
      },
      { rootMargin: "100% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [near]);

  const play = allowed && near;

  return (
    <section
      ref={band}
      aria-label="Live sites across Delhi NCR"
      className="relative h-[clamp(22rem,58vh,34rem)] w-full overflow-hidden bg-plum"
    >
      {play ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/media/reel.mp4"
          poster="/media/reel-wide-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/media/reel-wide-poster.jpg"
          alt="A digital screen above the walkway at Cyber Hub, Gurugram, with pedestrians passing beneath it"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      )}

      {/* Top and bottom feathering only — the middle of the frame stays
          untouched so the footage reads at full strength. */}
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
            Live sites across Delhi NCR, filmed on location.
            <span className="mt-0.5 block text-caption text-on-plum-dim">
              Cyber Hub · Chanakyapuri · Safdarjung · Vinay Marg
            </span>
          </p>
          <p className="font-mono text-micro tracking-[0.08em] text-on-plum-dim uppercase">
            Not stock footage
          </p>
        </div>
      </div>
    </section>
  );
}
