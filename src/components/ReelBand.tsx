"use client";

import { useSyncExternalStore } from "react";

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
  const play = useSyncExternalStore(subscribe, shouldPlay, () => false);

  return (
    <section
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
