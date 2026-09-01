"use client";

import { useEffect } from "react";
import { isExternalHref } from "@/lib/href";

/**
 * Next.js Link preventDefaults any href it thinks is local, then the
 * app router handles it. That is correct for `/cities/kanpur`. It is
 * wrong for `https://…`, `//…`, mailto and tel: those must be left to
 * the browser (new tab / mail client), not turned into an in-app
 * navigation that can surface as a downloaded HTML file.
 *
 * Capture-phase stopPropagation keeps React's delegated click off the
 * event. Default action is not cancelled — no preventDefault, no
 * download attribute, no fetch, no blob.
 */
export default function ExternalNavGuard() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0) return;
      const el = e.target;
      if (!(el instanceof Element)) return;
      const a = el.closest("a");
      if (!(a instanceof HTMLAnchorElement)) return;
      if (a.hasAttribute("download")) return;
      if (isExternalHref(a.getAttribute("href"))) {
        e.stopPropagation();
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
