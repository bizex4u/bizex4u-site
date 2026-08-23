"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { capabilities, primaryNav, site } from "@/lib/site";

/* Floating pill navigation — the Laqshya container treatment, with a
   mega panel borrowed from JCDecaux's audience-first structure. */
export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className="fixed inset-x-0 top-0 z-50 pt-3 md:pt-4"
      onMouseLeave={closeMega}
    >
      <div className="shell flex items-center justify-between gap-3">
        <Link
          href="/"
          className={`inline-flex min-h-11 items-center rounded-full px-4 font-display text-[1.0625rem] font-semibold tracking-[-0.03em] transition-colors duration-200 ${
            scrolled ? "bg-plum/92 text-on-plum backdrop-blur-md" : ""
          }`}
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
                className={`rounded-full px-4 py-2.5 text-[0.9375rem] transition-colors duration-200 hover:bg-plum-2 ${
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
                className={`rounded-full px-4 py-2.5 text-[0.9375rem] transition-colors duration-200 hover:bg-plum-2 ${
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
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden min-h-11 items-center gap-2 rounded-full bg-violet-deep px-5 text-[0.9375rem] font-medium text-white transition-colors duration-200 hover:bg-violet sm:inline-flex"
          >
            WhatsApp
            <span className="row-arrow">→</span>
          </a>
          <button
            type="button"
            className="inline-flex min-h-11 items-center rounded-full bg-plum/92 px-5 text-[0.9375rem] text-on-plum backdrop-blur-md lg:hidden"
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
              <span className="mt-1.5 block max-w-[30ch] text-[0.875rem] leading-relaxed text-on-plum-dim">
                {c.short}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-20 bottom-0 overflow-y-auto bg-sand lg:hidden">
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
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-violet-deep px-6 font-medium text-white"
              >
                Talk on WhatsApp →
              </a>
              <p className="mt-2 text-on-sand-dim">{site.email}</p>
              <p className="text-on-sand-dim">{site.phone}</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
