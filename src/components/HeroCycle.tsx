"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { dayClock } from "@/lib/dayclock";

/**
 * Intersection's trick, with our hours: the first screen is a
 * sentence that turns. Reduced motion holds the commute. Height is
 * reserved so the CTAs below do not jump when the line changes.
 */

const INTERVAL = 2800;

function subscribeMotion(cb: () => void) {
  const q = window.matchMedia("(prefers-reduced-motion: reduce)");
  q.addEventListener("change", cb);
  return () => q.removeEventListener("change", cb);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

export default function HeroCycle() {
  const reduceMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(
      () => setIndex((n) => (n + 1) % dayClock.length),
      INTERVAL,
    );
    return () => clearInterval(id);
  }, [reduceMotion]);

  const hour = dayClock[index];

  return (
    <p
      className="mt-6 min-h-[2.6em] font-display text-h2 text-balance text-violet-lift"
      aria-live="polite"
    >
      <span className="em-serif">{hour.scene}</span>
      <span className="mx-2.5 font-mono text-micro tracking-[0.1em] text-on-plum-dim uppercase">
        {hour.time}
      </span>
    </p>
  );
}
