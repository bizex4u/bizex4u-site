"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";
import {
  boot,
  inferCtaLocation,
  pagePath,
  privacyOptOut,
  scrollPct,
  track,
} from "@/lib/analytics";

const DEPTHS = [25, 50, 75, 100] as const;

function ctaLabel(el: Element): string {
  const explicit = el.getAttribute("data-cta-label");
  if (explicit) return explicit.slice(0, 80);
  return (
    (el.textContent ?? "")
      .replace(/→/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 80) || "cta"
  );
}

function ctaVariant(el: Element): string {
  return el.getAttribute("data-cta-variant") || "default";
}

/**
 * Loads analytics after hydration and watches the funnel.
 *
 * CTAs opt in with `data-cta`. Clicks and views are observed here so
 * page components never call `posthog.capture` themselves.
 */
export default function AnalyticsBoot() {
  const pathname = usePathname();

  useEffect(() => {
    void boot();
  }, []);

  useEffect(() => {
    if (privacyOptOut()) return;

    const viewed = new WeakSet<Element>();
    const depths = new Set<number>();

    const reportScroll = () => {
      const pct = scrollPct();
      for (const mark of DEPTHS) {
        if (pct >= mark && !depths.has(mark)) {
          depths.add(mark);
          track("scroll_depth", { page: pagePath(), pct: mark });
        }
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || viewed.has(entry.target)) continue;
          viewed.add(entry.target);
          track("cta_view", {
            location: inferCtaLocation(entry.target),
            page: pagePath(),
            variant: ctaVariant(entry.target),
          });
        }
      },
      { threshold: 0.4 },
    );

    const watch = (root: ParentNode = document) => {
      root.querySelectorAll("[data-cta]").forEach((el) => io.observe(el));
    };
    watch();

    const mo = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches("[data-cta]")) io.observe(node);
          watch(node);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    const onClick = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      const cta = target.closest("[data-cta]");
      if (cta) {
        track("cta_click", {
          location: inferCtaLocation(cta),
          page: pagePath(),
          label: ctaLabel(cta),
          scroll_pct: scrollPct(),
        });
      }
      const wa = target.closest("[data-whatsapp]");
      if (wa) {
        track("whatsapp_click", {
          page: pagePath(),
          source_location: inferCtaLocation(wa),
        });
      }
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("scroll", reportScroll, { passive: true });
    reportScroll();

    return () => {
      io.disconnect();
      mo.disconnect();
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("scroll", reportScroll);
    };
  }, [pathname]);

  return (
    <>
      <Script
        id="posthog-boot"
        strategy="afterInteractive"
        onReady={() => {
          void boot();
        }}
      >
        {`window.__analyticsAfterInteractive=1`}
      </Script>
      <Analytics beforeSend={(event) => (privacyOptOut() ? null : event)} />
    </>
  );
}
