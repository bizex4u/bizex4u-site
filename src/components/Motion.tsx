"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * The motion layer. Replaces the old IntersectionObserver reveal.
 *
 * Three things only:
 *   1. Lenis smooth scroll, driven by GSAP's ticker so the two agree on
 *      a single clock. Two independent RAF loops is what makes
 *      scroll-linked animation judder.
 *   2. A fade-up on entry for anything carrying `.reveal`, staggered
 *      within its section and capped at 8 steps.
 *   3. The hero holds while the page slides up over it.
 *
 * Everything is wrapped in gsap.matchMedia so `prefers-reduced-motion`
 * gets the final state immediately and Lenis never starts.
 */
export default function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        calm: "(prefers-reduced-motion: reduce)",
        wide: "(min-width: 1024px)",
      },
      (ctx) => {
        const { motion, calm, wide } = ctx.conditions as Record<
          string,
          boolean
        >;

        /* Hand opacity control to GSAP — the CSS transition on .reveal is
           the no-JS fallback and would otherwise double-animate. */
        document.documentElement.classList.add("gsap-ready");

        if (calm || !motion) {
          gsap.set(".reveal", { opacity: 1, y: 0, clearProps: "transform" });
          document
            .querySelectorAll<HTMLElement>(".reveal")
            .forEach((n) => n.setAttribute("data-shown", "true"));
          return;
        }

        /* 1 — smooth scroll on GSAP's clock */
        const lenis = new Lenis({
          duration: 1.05,
          easing: (t: number) => 1 - Math.pow(1 - t, 3),
          smoothWheel: true,
          touchMultiplier: 1.6,
        });
        lenis.on("scroll", ScrollTrigger.update);
        const tick = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);

        /* 2 — entry reveals, grouped so the stagger reads per section */
        const groups = new Map<Element, HTMLElement[]>();
        document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
          const key = el.closest("section") ?? document.body;
          if (!groups.has(key)) groups.set(key, []);
          groups.get(key)!.push(el);
        });

        groups.forEach((els) => {
          els.forEach((el) => el.setAttribute("data-shown", "true"));
          gsap.set(els, { opacity: 0, y: 18 });
          ScrollTrigger.batch(els, {
            start: "top 88%",
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, {
                opacity: 1,
                y: 0,
                duration: 0.62,
                ease: "power2.out",
                stagger: { each: 0.07, amount: Math.min(batch.length, 8) * 0.07 },
                overwrite: true,
              }),
          });
        });

        /* 3 — the hero holds while the page rises over it.
              Desktop only; on touch it costs more than it returns. */
        const hero = document.querySelector<HTMLElement>("[data-hero]");
        if (hero && wide) {
          /* pinSpacing:false is what makes the next section rise over the
             hero rather than push it down the page. */
          ScrollTrigger.create({
            trigger: hero,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
            anticipatePin: 1,
          });

          const copy = hero.querySelector<HTMLElement>("[data-hero-copy]");
          if (copy) {
            gsap.to(copy, {
              yPercent: -14,
              opacity: 0,
              ease: "none",
              scrollTrigger: {
                trigger: hero,
                start: "top top",
                end: "bottom 45%",
                scrub: 0.4,
              },
            });
          }
        }

        ScrollTrigger.refresh();

        return () => {
          gsap.ticker.remove(tick);
          lenis.destroy();
        };
      },
    );

    return () => mm.revert();
  }, []);

  return null;
}
