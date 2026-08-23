"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * The motion layer.
 *
 * The brief was that the site felt static, and the diagnosis was that
 * every section used the same mechanism — a coloured band with a
 * heading and some cards. Colour changed; behaviour never did. So the
 * job here is not "more animation", it is a different *kind* of
 * movement per section, driven by data attributes the pages declare:
 *
 *   [data-hero]          hero holds while the page rises over it
 *   [data-marquee]       seamless infinite horizontal drift
 *   [data-pin-track]     pinned section scrolled sideways
 *   [data-scale-in]      image grows into place as it enters
 *   [data-count]         number counts up once, on entry
 *   [data-parallax]      slow drift against the scroll
 *   [data-split]         headline reveals line by line
 *   .reveal              the baseline fade-up
 *
 * Everything lives inside gsap.matchMedia. Under prefers-reduced-motion
 * every element is set to its final state immediately and the
 * horizontal track becomes an ordinary swipeable overflow region
 * rather than a pinned scroll hijack. Reduced motion has to mean the
 * content still works, not that the page half-renders.
 *
 * Scrolling is native. See the note in section 1.
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
        /* The pinned track needs vertical room as well as width. On a
           short laptop the panels would clip inside a 100vh pin, so
           below this the section falls back to the swipe strip. */
        tall: "(min-height: 860px)",
      },
      (ctx) => {
        const { motion, calm, wide, tall } = ctx.conditions as Record<
          string,
          boolean
        >;

        /* Hand opacity control to GSAP. The CSS transition on .reveal is
           the no-JS fallback and would otherwise double-animate. */
        document.documentElement.classList.add("gsap-ready");

        /* ---------------------------------------------------------
           Reduced motion: final state, immediately, and get out.
        ---------------------------------------------------------- */
        if (calm || !motion) {
          gsap.set(".reveal", { opacity: 1, y: 0, clearProps: "transform" });
          document
            .querySelectorAll<HTMLElement>(".reveal")
            .forEach((n) => n.setAttribute("data-shown", "true"));
          gsap.set("[data-scale-in], [data-parallax], [data-split] > *", {
            opacity: 1,
            scale: 1,
            y: 0,
            clearProps: "transform",
          });
          document
            .querySelectorAll<HTMLElement>("[data-count]")
            .forEach((n) => {
              n.textContent = n.dataset.count ?? n.textContent;
            });
          /* The pinned track becomes a plain scrollable strip. */
          document
            .querySelectorAll<HTMLElement>("[data-pin-track]")
            .forEach((n) => n.setAttribute("data-static", "true"));
          return;
        }

        /* ---------------------------------------------------------
           1 — Native scroll, deliberately.

           This used Lenis. Measured under real wheel input, the page
           was still moving 928ms after the input stopped, and on a Mac
           trackpad — which already applies its own momentum — a second
           of extra coast does not read as "smooth", it reads as the
           page lagging behind your fingers. Retuning it to lerp only
           got that to 326ms; removing it gets 10ms.

           Nothing here needed it. ScrollTrigger's own `scrub` does the
           smoothing for the pinned track and the scale-ins, and it
           does that off native scroll perfectly well. Lenis mainly
           earns its place on Windows, where a mouse wheel scrolls in
           coarse discrete jumps; macOS and iOS already scroll well.

           If it ever goes back in, keep it on GSAP's ticker rather
           than its own RAF loop — two independent clocks is what makes
           scroll-linked animation judder.
        ---------------------------------------------------------- */
        gsap.ticker.lagSmoothing(0);

        /* ---------------------------------------------------------
           2 — Baseline reveal, grouped so the stagger reads per
           section rather than marching down the whole document.
        ---------------------------------------------------------- */
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
                stagger: {
                  each: 0.07,
                  amount: Math.min(batch.length, 8) * 0.07,
                },
                overwrite: true,
              }),
          });
        });

        /* ---------------------------------------------------------
           3 — Headlines that arrive line by line.
           The page wraps each line in its own element; we only move
           them. Splitting text nodes at runtime breaks screen readers
           and re-splits badly on resize.
        ---------------------------------------------------------- */
        document
          .querySelectorAll<HTMLElement>("[data-split]")
          .forEach((wrap) => {
            const lines = Array.from(wrap.children) as HTMLElement[];
            if (!lines.length) return;
            gsap.set(lines, { yPercent: 108, opacity: 0 });
            gsap.to(lines, {
              yPercent: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.08,
              scrollTrigger: { trigger: wrap, start: "top 85%", once: true },
            });
          });

        /* ---------------------------------------------------------
           4 — Marquee. Two identical halves; translate the pair by
           exactly -50% and the seam never shows.
        ---------------------------------------------------------- */
        document
          .querySelectorAll<HTMLElement>("[data-marquee]")
          .forEach((el) => {
            const speed = Number(el.dataset.marquee) || 38;
            const anim = gsap.to(el, {
              xPercent: -50,
              duration: speed,
              ease: "none",
              repeat: -1,
            });
            /* Slow to a crawl on hover so a name can actually be read. */
            const host = el.parentElement ?? el;
            host.addEventListener("pointerenter", () =>
              gsap.to(anim, { timeScale: 0.15, duration: 0.4 }),
            );
            host.addEventListener("pointerleave", () =>
              gsap.to(anim, { timeScale: 1, duration: 0.6 }),
            );
          });

        /* ---------------------------------------------------------
           5 — The pinned horizontal track. Desktop only: on touch a
           scroll hijack costs far more than it returns, and the same
           markup works as a native swipe strip instead.
        ---------------------------------------------------------- */
        document
          .querySelectorAll<HTMLElement>("[data-pin-track]")
          .forEach((section) => {
            const track = section.querySelector<HTMLElement>("[data-track]");
            if (!track) return;

            if (!wide || !tall) {
              section.setAttribute("data-static", "true");
              return;
            }
            section.removeAttribute("data-static");

            const distance = () => track.scrollWidth - window.innerWidth;

            gsap.to(track, {
              x: () => -distance(),
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top top",
                /* Scroll length equals the horizontal distance, so the
                   sideways speed matches the wheel. Anything else feels
                   either sticky or out of control. */
                end: () => "+=" + distance(),
                pin: true,
                scrub: 0.6,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            /* Progress rail, if the section declares one. It rides the
               same scroll range as the track rather than its own, so
               the bar and the panels can never disagree. */
            const bar = section.querySelector<HTMLElement>("[data-track-bar]");
            if (bar) {
              gsap.set(bar, { transformOrigin: "left center", scaleX: 0 });
              ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: () => "+=" + distance(),
                scrub: 0.6,
                onUpdate: (self) => gsap.set(bar, { scaleX: self.progress }),
              });
            }
          });

        /* ---------------------------------------------------------
           6 — Images that grow into place. Subtle: 1.08 to 1. Any
           more and it reads as a bug rather than as intent.
        ---------------------------------------------------------- */
        document
          .querySelectorAll<HTMLElement>("[data-scale-in]")
          .forEach((el) => {
            gsap.fromTo(
              el,
              { scale: 1.08, opacity: 0.55 },
              {
                scale: 1,
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: el,
                  start: "top 92%",
                  end: "top 45%",
                  scrub: 0.5,
                },
              },
            );
          });

        /* ---------------------------------------------------------
           7 — Parallax drift. data-parallax is the travel in px.
        ---------------------------------------------------------- */
        document
          .querySelectorAll<HTMLElement>("[data-parallax]")
          .forEach((el) => {
            const travel = Number(el.dataset.parallax) || 60;
            gsap.fromTo(
              el,
              { y: -travel / 2 },
              {
                y: travel / 2,
                ease: "none",
                scrollTrigger: {
                  trigger: el.parentElement ?? el,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.8,
                },
              },
            );
          });

        /* ---------------------------------------------------------
           8 — Counters. Integers count; anything with other
           characters (40+, ₹2.5Cr) counts the numeric part and keeps
           its prefix and suffix.
        ---------------------------------------------------------- */
        document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
          const target = el.dataset.count ?? "";
          const m = target.match(/^(\D*)(\d[\d,.]*)(.*)$/);
          if (!m) {
            el.textContent = target;
            return;
          }
          const [, pre, numRaw, post] = m;
          const decimals = (numRaw.split(".")[1] ?? "").length;
          const value = parseFloat(numRaw.replace(/,/g, ""));
          /* Only zero it out if it is still below the fold. A page
             restored mid-scroll (back navigation) can start with the
             number already on screen, and blanking it to zero there
             would leave it at zero if the trigger never re-fires. */
          const rect = el.getBoundingClientRect();
          const alreadyVisible = rect.top < window.innerHeight * 0.88;
          if (alreadyVisible) return;

          const box = { n: 0 };
          el.textContent = pre + (0).toFixed(decimals) + post;
          gsap.to(box, {
            n: value,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
            onUpdate: () => {
              el.textContent =
                pre +
                box.n.toLocaleString("en-IN", {
                  minimumFractionDigits: decimals,
                  maximumFractionDigits: decimals,
                }) +
                post;
            },
          });
        });

        /* ---------------------------------------------------------
           9 — The hero holds while the page rises over it.
           pinSpacing:false is what makes the next section climb over
           the hero rather than push it down the document.
        ---------------------------------------------------------- */
        const hero = document.querySelector<HTMLElement>("[data-hero]");
        if (hero && wide) {
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

        /* ScrollTrigger instances created inside a matchMedia context
           are reverted by mm.revert() below, so there is nothing to
           tear down here by hand. */
      },
    );

    return () => mm.revert();
  }, []);

  return null;
}
