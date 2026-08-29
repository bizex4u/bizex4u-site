"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { capabilities, primaryNav, site } from "@/lib/site";
import BriefButton from "@/components/BriefButton";

/* Floating pill navigation — the Laqshya container treatment, with a
   mega panel borrowed from JCDecaux's audience-first structure. */
export default function Nav() {
  const pathname = usePathname();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* The scroll listener that drove `scrolled` is gone with it. It
     existed only to give the wordmark a pill once the page moved; the
     pill is permanent now, so this was a scroll handler running on
     every frame to compute a value nothing read. */

  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMegaOpen(false);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 130);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    /* The header is fixed and full-width, and the mega panel below the
       bar is `lg:block` with opacity-0 when closed — display:block, so
       it still occupies its 329px of layout. That made the header's own
       box 411px tall in a 720px viewport, and because a header defaults
       to pointer-events:auto it swallowed every click in the top 57% of
       the screen. On /cities exactly one city sat below the band and
       was clickable; every other row was dead. Reported as "only able
       to click and open Chandigarh".

       So the header is transparent to the pointer while the mega is
       closed, and each interactive child opts back in. It reclaims
       pointer-events when the mega opens, because onMouseLeave is what
       closes the panel and a pointer-events:none element never fires
       it. */
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-3 md:pt-4 ${
        megaOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      onMouseLeave={closeMega}
    >
      <div className="shell pointer-events-auto flex items-center justify-between gap-3">
        <Link
          href="/"
          /* The pill is permanent now, not scroll-triggered. Two
             reasons. It was the only naked element in a bar of pills,
             so the wordmark read as unstyled rather than as a mark.
             And it inherited its colour from whatever it happened to
             be floating over — fine while every page opened on beige,
             invisible the moment the homepage opened on a dark
             photograph. A mark that disappears on one page in
             thirteen is a bug waiting for a redesign to trigger it. */
          className="inline-flex min-h-11 items-center rounded-full bg-plum/92 px-4 font-display text-body-l font-semibold tracking-[-0.03em] text-on-plum backdrop-blur-md"
          aria-label={`${site.name} — home`}
        >
          {site.wordmark}
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full bg-plum/92 px-2 py-1.5 text-on-plum backdrop-blur-md lg:flex"
          aria-label="Primary"
        >
          {primaryNav.map((item) =>
            item.mega ? (
              <button
                key={item.href}
                type="button"
                className={`rounded-full px-4 py-2.5 text-body-s transition-colors duration-200 hover:bg-plum-2 ${
                  isActive(item.href) ? "text-violet-lift" : ""
                }`}
                aria-expanded={megaOpen}
                onMouseEnter={openMega}
                onFocus={openMega}
                onClick={() => setMegaOpen((v) => !v)}
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2.5 text-body-s transition-colors duration-200 hover:bg-plum-2 ${
                  isActive(item.href) ? "text-violet-lift" : ""
                }`}
                onMouseEnter={closeMega}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <BriefButton
            context="Nav"
            className="hidden !min-h-11 !px-5 !py-0 !text-body-s sm:inline-flex"
          >
            Send a brief
          </BriefButton>
          <button
            type="button"
            className="inline-flex min-h-11 items-center rounded-full bg-plum/92 px-5 text-body-s text-on-plum backdrop-blur-md lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mega panel */}
      <div
        className={`shell mt-2 hidden transition-opacity duration-200 lg:block ${
          megaOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onMouseEnter={openMega}
      >
        <div className="grid grid-cols-3 gap-3 rounded-2xl bg-plum/96 p-3 text-on-plum backdrop-blur-md">
          {capabilities.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="rounded-xl p-4 transition-colors duration-200 hover:bg-plum-2"
            >
              <span
                className={`eyebrow ${c.accent ? "text-violet-lift" : "text-on-plum-dim"}`}
              >
                {c.index}
              </span>
              <span className="mt-2 block text-h3">{c.title}</span>
              <span className="mt-1.5 block max-w-[30ch] text-body-s leading-relaxed text-on-plum-dim">
                {c.short}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="pointer-events-auto fixed inset-x-0 top-20 bottom-0 overflow-y-auto bg-sand lg:hidden">
          <nav className="shell py-6" aria-label="Mobile">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block border-b border-rule-sand py-5 text-h2"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-8 grid gap-3">
              <BriefButton context="Nav" className="w-full">
                Send a brief
              </BriefButton>
              <p className="mt-2 text-on-sand-dim">{site.email}</p>
              <p className="text-on-sand-dim">{site.phone}</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
