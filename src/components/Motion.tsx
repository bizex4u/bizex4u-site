"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
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
 *
 * This component lives in the root layout, so it does not remount on
 * soft navigation. `.reveal` starts at opacity 0; if the triggers are
 * not rebuilt for the new tree, the next page stays blank until a
 * hard refresh. Pathname is the dependency; two rAFs wait until the
 * new `<main>` has been committed and laid out.
 */
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm: ReturnType<typeof gsap.matchMedia> | undefined;
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => {
        mm = gsap.matchMedia();
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
          gsap.set("[data-plate]", { scaleY: 1, clearProps: "transform" });
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
            /* Move the INNER span, not the .line-clip that wraps it.
               This animated the clip box itself, which carries
               `overflow: hidden` — so the mask travelled with the text
               and masked nothing. The line simply slid 108% down the
               page, out of the h1's own box and straight over the lede
               paragraph beneath it. The whole point of the two-element
               markup is that one stays put and clips while the other
               moves inside it. */
            const lines = Array.from(wrap.children).map(
              (line) => (line.firstElementChild ?? line) as HTMLElement,
            );
            if (!lines.length) return;

            gsap.set(lines, { yPercent: 108, opacity: 0 });

            const reveal = {
              yPercent: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.08,
            };

            /* A headline already on screen at setup plays straight away,
               with no ScrollTrigger involved.

               This used to hand every split headline a `once: true`
               trigger, including the hero's — a trigger whose start
               condition was satisfied before the page had finished
               loading. React StrictMode runs this effect twice in
               development, and across the teardown and re-setup that
               already-passed, fires-once trigger did not fire on the
               second pass. The lines stayed at their 108% start state
               and the hero simply had no headline on `next dev`, which
               is the one environment anyone looks at while working.

               A trigger is the wrong tool for an element that is
               visible on arrival regardless. Anything below the fold
               still gets one — there the scroll is real. */
            const box = wrap.getBoundingClientRect();
            if (box.top < window.innerHeight * 0.85) {
              gsap.to(lines, reveal);
              return;
            }

            gsap.to(lines, {
              ...reveal,
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
            /* Reverse runs the pair the other way. It has to start at
               -50% and travel to 0, not start at 0 and travel to +50%:
               the second copy is rendered AFTER the first, so at x=0
               there is nothing to the left to slide in and the row
               would drift off its own leading edge. */
            const back = el.dataset.marqueeReverse !== undefined;
            if (back) gsap.set(el, { xPercent: -50 });
            const anim = gsap.to(el, {
              xPercent: back ? 0 : -50,
              duration: speed,
              ease: "none",
              repeat: -1,
            });
            /* Slow to a crawl on hover so a name can actually be read.
               A nicety, not a control — see MarqueeToggle. */
            const host = el.parentElement ?? el;
            host.addEventListener("pointerenter", () =>
              gsap.to(anim, { timeScale: 0.15, duration: 0.4 }),
            );
            host.addEventListener("pointerleave", () =>
              gsap.to(anim, { timeScale: 1, duration: 0.6 }),
            );

            /* The actual stop, for WCAG 2.2.2. Scoped to the nearest
               [data-marquee-scope] so a section with two rows pauses
               both from one button, and a page with two independent
               marquees does not pause the wrong one. */
            el.closest("[data-marquee-scope]")?.addEventListener(
              "marquee:toggle",
              (e) => {
                const on = (e as CustomEvent<{ paused: boolean }>).detail
                  .paused;
                anim.paused(on);
              },
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

            /* The pinned horizontal track moved to the scrollcraft
               engine — see src/vendor/scrollcraft. ScrollTrigger pins by
               wrapping the node in a .pin-spacer it inserts into the DOM,
               which re-parents a node React owns; on soft navigation
               React's removeChild then throws and unmounts <main>.
               scrollcraft pins with position:sticky and generates no DOM,
               so the failure cannot happen. This block is intentionally
               empty: the section is now data-sc-act="pan". */

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
           5b — Format plates draw themselves in.

           They are the site's signature device and were static
           rectangles. Growing from the baseline reads as something
           being measured out, which is what they depict. Scale rather
           than width/height so it stays off the layout thread.
        ---------------------------------------------------------- */
        const plates = document.querySelectorAll<HTMLElement>("[data-plate]");
        if (plates.length) {
          gsap.set(plates, { scaleY: 0, transformOrigin: "50% 100%" });
          ScrollTrigger.batch(plates, {
            start: "top 92%",
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, {
                scaleY: 1,
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.06,
                overwrite: true,
              }),
          });
        }

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
          /* The hold itself is now position:sticky in globals.css — any
             ScrollTrigger pin creates a pin-spacer and re-parents a node
             React owns, which is the blank-page bug. pinSpacing:false
             still wraps, so there is no safe pin here.

             This block only drifts the copy. It used to fade it to
             opacity 0 as well, which was written to pair with the pin
             and had never actually run, because no page carried
             [data-hero] until the sticky hold was added. Switched on, it
             took the headline to 0.019 by 420px of scroll — invisible
             while the hero was still most of the screen. A pitch line
             that dissolves while you are reading it is a defect, not
             depth. The band climbing over it is the recede cue; the copy
             just needs to move a little slower than the page. */
          const copy = hero.querySelector<HTMLElement>("[data-hero-copy]");
          if (copy) {
            gsap.to(copy, {
              yPercent: -9,
              ease: "none",
              scrollTrigger: {
                trigger: hero,
                start: "top top",
                end: "bottom top",
                scrub: 0.4,
              },
            });
          }
        }

        ScrollTrigger.refresh();

        /* Soft navigation can leave the previous page's scroll
           position for a frame. Anything already in the viewport
           that is still at opacity 0 was missed by batch-onEnter. */
        document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.bottom > 0 && r.top < window.innerHeight) {
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration: 0.45,
              ease: "power2.out",
              overwrite: true,
            });
            el.setAttribute("data-shown", "true");
          }
        });

        /* ScrollTrigger instances created inside a matchMedia context
           are reverted by mm.revert() below, so there is nothing to
           tear down here by hand. */
      },
        );
      });
    });

    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
      mm?.revert();
    };
  }, [pathname]);

  return null;
}
