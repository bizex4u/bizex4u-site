"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

/**
 * Stop the drifting rows.
 *
 * WCAG 2.2.2 "Pause, Stop, Hide" is a Level A criterion: anything that
 * moves automatically for more than five seconds needs a mechanism to
 * pause it. Both marquees on this site run indefinitely.
 *
 * They already slowed on hover, and I had been treating that as the
 * control. It is not one. Hover does not exist on a phone, it is not
 * reachable from a keyboard, and slowing is not stopping — a reader who
 * needs the motion to end because it is making them ill, or because it
 * is pulling their eye off the paragraph they are trying to read, gets
 * nothing from it. Hover-slow is a nicety for people who were already
 * fine.
 *
 * The button pauses; hover-slow stays as it was for everyone else.
 *
 * It renders nothing under `prefers-reduced-motion: reduce`, because
 * Motion.tsx returns before creating any marquee tween in that case —
 * a pause control for something that is not moving is a control that
 * lies about the state of the page.
 */

const query = "(prefers-reduced-motion: reduce)";

function subscribe(cb: () => void) {
  const mq = window.matchMedia(query);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

export default function MarqueeToggle({
  label = "the row",
  tone = "plum",
}: {
  /* Named in the accessible label, because a page with two of these
     needs them to be distinguishable in a rotor listing. */
  label?: string;
  tone?: "plum" | "sand";
}) {
  const calm = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
  const ref = useRef<HTMLButtonElement>(null);
  const [paused, setPaused] = useState(false);

  /* Nothing to pause until the engine has built the tweens. Rendering
     the control before then would offer a button that silently does
     nothing on a fast click. */
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 600);
    return () => window.clearTimeout(id);
  }, []);

  const toggle = useCallback(() => {
    const next = !paused;
    setPaused(next);
    /* Dispatched on the nearest scope rather than on the document, so a
       page carrying two independent marquees pauses only the one whose
       control was pressed. Motion.tsx listens on the same element. */
    ref.current
      ?.closest("[data-marquee-scope]")
      ?.dispatchEvent(
        new CustomEvent("marquee:toggle", { detail: { paused: next } }),
      );
  }, [paused]);

  if (calm || !ready) return null;

  const skin =
    tone === "plum"
      ? "border-white/25 text-on-plum-dim hover:border-white/60 hover:text-on-plum"
      : "border-on-sand/25 text-on-sand-dim hover:border-on-sand/60 hover:text-on-sand";

  return (
    <button
      ref={ref}
      type="button"
      onClick={toggle}
      aria-pressed={paused}
      className={`inline-flex min-h-9 items-center gap-2 rounded-full border px-3.5 font-mono text-micro tracking-[0.09em] uppercase transition-colors duration-200 ${skin}`}
    >
      <span aria-hidden="true" className="text-[0.7em] leading-none">
        {paused ? "▶" : "❚❚"}
      </span>
      {paused ? "Play" : "Pause"}
      <span className="sr-only"> {label}</span>
    </button>
  );
}
