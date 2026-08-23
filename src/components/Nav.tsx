"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { capabilities, primaryNav, site } from "@/lib/site";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close both panels when the route changes. Adjusting state during
     render is the supported pattern here — an effect would fire a second
     render pass for no reason. */
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
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const solid = scrolled || megaOpen || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        solid ? "bg-paper border-b border-rule" : "bg-transparent"
      }`}
      onMouseLeave={closeMega}
    >
      <div className="shell flex h-18 items-center justify-between">
        {/* -ml-2 px-2 keeps the wordmark optically flush with the grid
            while giving it a 44px tap target. */}
        <Link
          href="/"
          className="-ml-2 inline-flex min-h-11 items-center px-2 font-display text-[1.125rem] font-semibold tracking-[-0.04em]"
          aria-label={`${site.name} — home`}
        >
          {site.wordmark}
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {primaryNav.map((item) =>
            item.mega ? (
              <button
                key={item.href}
                type="button"
                className="link-underline font-mono text-meta uppercase tracking-[0.09em]"
                data-active={isActive(item.href)}
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
                className="link-underline font-mono text-meta uppercase tracking-[0.09em]"
                data-active={isActive(item.href)}
                onMouseEnter={closeMega}
              >
                {item.label}
              </Link>
            ),
          )}
          {/* A real primary CTA, not another text link. The
              trust-authority pattern asks for one in the nav. */}
          <Link
            href="/contact"
            className="group ml-2 inline-flex items-center gap-2.5 rounded-[2px] bg-ink min-h-11 px-5 py-3 font-mono text-meta uppercase tracking-[0.09em] text-paper transition-colors duration-200 hover:bg-accent-text"
          >
            Start a conversation
            <span className="row-arrow">→</span>
          </Link>
        </nav>

        {/* Mobile trigger */}
        <button
          type="button"
          className="-mr-2 inline-flex min-h-11 items-center px-2 font-mono text-meta uppercase tracking-[0.09em] lg:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mega panel — four hairline columns, plain text, no icons */}
      <div
        className={`absolute inset-x-0 top-full hidden border-b border-rule bg-paper transition-opacity duration-200 lg:block ${
          megaOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onMouseEnter={openMega}
      >
        <div className="shell grid grid-cols-4 gap-x-6 py-10">
          {capabilities.map((c, i) => (
            <Link
              key={c.href}
              href={c.href}
              className={`group border-t pt-4 pr-6 pb-2 transition-colors hover:bg-paper-hover ${
                i === 0 ? "border-ink" : "border-rule"
              }`}
            >
              <span
                className={`font-mono text-meta ${
                  c.accent ? "text-accent-text" : "text-ink-50"
                }`}
              >
                {c.index}
              </span>
              <span className="mt-2 block text-h3">{c.title}</span>
              <span className="mt-1 block max-w-[26ch] text-[0.8125rem] leading-relaxed text-ink-70">
                {c.short}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-18 bottom-0 overflow-y-auto bg-paper lg:hidden">
          <nav className="shell py-8" aria-label="Mobile">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block border-t border-rule py-5 text-h3"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-10 border-t border-ink pt-6">
              <Link href="/contact" className="text-h3">
                Start a conversation →
              </Link>
              <p className="mt-6 font-mono text-meta uppercase text-ink-70">
                {site.email}
              </p>
              <p className="mt-1 font-mono text-meta uppercase text-ink-70">
                {site.phone}
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
