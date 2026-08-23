"use client";

import { useEffect } from "react";

/**
 * The only animation on the site.
 *
 * Elements carrying `.reveal` fade up 12px once, when 15% of them enters
 * the viewport. Delay comes from `--reveal-delay` set inline by the
 * consumer, which keeps the stagger declarative.
 *
 * Mounted once in the root layout and left alone.
 */
export default function Reveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal");
    if (!nodes.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;

    if (reduced) {
      nodes.forEach((n) => n.setAttribute("data-shown", "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-shown", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" },
    );

    nodes.forEach((n) => {
      // Anything already above the fold on load should not wait for a scroll.
      if (n.getBoundingClientRect().top < window.innerHeight * 0.9) {
        n.setAttribute("data-shown", "true");
      } else {
        observer.observe(n);
      }
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
