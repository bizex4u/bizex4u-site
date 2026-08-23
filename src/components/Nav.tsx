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

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname]);

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
        <Link
          href="/"
          className="font-display text-[1.125rem] font-semibold tracking-[-0.04em]"
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
                className="link-underline font-mono text-meta uppercase tracking-[0.08em]"
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
                className="link-underline font-mono text-meta uppercase tracking-[0.08em]"
                data-active={isActive(item.href)}
                onMouseEnter={closeMega}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href="/contact"
            className="link-underline font-mono text-meta uppercase tracking-[0.08em]"
          >
            Start a conversation →
          </Link>
        </nav>

        {/* Mobile trigger */}
        <button
          type="button"
          className="font-mono text-meta uppercase tracking-[0.08em] lg:hidden"
          aria-expanded={mobileOpen}
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
                  c.accent ? "text-accent" : "text-ink-30"
                }`}
              >
                {c.index}
              </span>
              <span className="mt-2 block text-h3">{c.title}</span>
              <span className="mt-1 block max-w-[26ch] text-[0.8125rem] leading-relaxed text-ink-60">
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
              <p className="mt-6 font-mono text-meta uppercase text-ink-60">
                {site.email}
              </p>
              <p className="mt-1 font-mono text-meta uppercase text-ink-60">
                {site.phone}
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
