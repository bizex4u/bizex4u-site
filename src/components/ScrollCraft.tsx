"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Mounts the vendored scrollcraft engine (see src/vendor/scrollcraft/README).
 *
 * Why this rather than another GSAP ScrollTrigger pin: ScrollTrigger pins by
 * wrapping the pinned node in a `.pin-spacer` div, which re-parents a node
 * React owns. On soft navigation React's `removeChild` then throws and tears
 * out the whole `<main>` subtree — the blank-page bug. scrollcraft pins with
 * `position: sticky` and generates zero DOM, so it cannot do that.
 *
 * The engine is a UMD global rather than an ES module, so it loads through
 * next/script and publishes `window.ScrollCraft`.
 *
 * It exposes no `destroy()`. Every `mount()` pushes an instance and starts a
 * rAF loop, so mounting per route would leak a loop per navigation. This
 * mounts once for the life of the document and calls the engine's own
 * `layout()` on route change to re-measure whatever acts the new page has —
 * `layout` is what its resize handler calls, so it is the supported path.
 */

type ScrollCraftApi = { layout: () => void };

declare global {
  interface Window {
    ScrollCraft?: {
      mount: (root?: Element | Document) => ScrollCraftApi;
      instances: ScrollCraftApi[];
    };
  }
}

export default function ScrollCraft() {
  const pathname = usePathname();
  const ready = useRef(false);

  /* The engine has no breakpoint gate — an act runs at every width. The
     pinned sideways track is a desktop device: it needs horizontal room
     and vertical room, and on a phone the same strip is already a plain
     swipeable overflow region that works with no JS at all. Running the
     act there would spend two and a half screens of scroll re-doing what
     a thumb already does. So the attribute is applied here, against the
     same gate Motion.tsx used, rather than baked into the markup. */
  const gate = useCallback(() => {
    const wide = window.matchMedia(
      "(min-width: 1024px) and (min-height: 860px)",
    ).matches;
    document.querySelectorAll("[data-pin-track]").forEach((el) => {
      if (wide) el.setAttribute("data-sc-act", "pan");
      else el.removeAttribute("data-sc-act");
    });
    return wide;
  }, []);

  const sync = useCallback(() => {
    const sc = window.ScrollCraft;
    if (!sc) return;
    gate();
    const existing = sc.instances[0];
    if (existing) existing.layout();
    else sc.mount(document);
    ready.current = true;
  }, [gate]);

  /* Route changes: the new markup is in the DOM by the time this runs, so a
     re-measure picks up any acts it brought with it. rAF because sticky
     offsets are only correct after the browser has laid the new tree out. */
  useEffect(() => {
    if (!ready.current) return;
    const id = requestAnimationFrame(sync);
    return () => cancelAnimationFrame(id);
  }, [pathname, sync]);

  /* Crossing the gate has to add or remove the act and re-measure, or a
     desktop window dragged narrow keeps a pinned track it can no longer
     fit. */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (min-height: 860px)");
    const onChange = () => {
      if (ready.current) sync();
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [sync]);

  return (
    <Script
      src="/vendor/scrollcraft.js"
      strategy="afterInteractive"
      onReady={sync}
    />
  );
}
