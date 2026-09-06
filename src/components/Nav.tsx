"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { capabilities, primaryNav, site } from "@/lib/site";
import BriefButton from "@/components/BriefButton";

export default function Nav() {
  const pathname = usePathname();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const coreCaps = capabilities.slice(0, 4);
  const supportCaps = capabilities.slice(4);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-rule-sand bg-sand/95"
      onMouseLeave={closeMega}
    >
      <div className="shell flex h-14 items-center justify-between gap-4 md:h-16">
        <Link
          href="/"
          className="font-sans text-body-s font-semibold tracking-[0.12em] text-on-sand uppercase"
          aria-label={`${site.name} — home`}
        >
          {site.wordmark}
        </Link>

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Primary"
        >
          {primaryNav.map((item) =>
            item.mega ? (
              <button
                key={item.href}
                type="button"
                className={`px-3 py-2 text-body-s transition-colors duration-200 hover:text-violet-deep ${
                  isActive(item.href) ? "text-violet-deep" : "text-on-sand"
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
                className={`px-3 py-2 text-body-s transition-colors duration-200 hover:text-violet-deep ${
                  isActive(item.href) ? "text-violet-deep" : "text-on-sand"
                }`}
                onMouseEnter={closeMega}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          {/* No `context` here: it renders as visible "About {context}."
              copy in the modal, and "About Nav." is UI plumbing shown to
              a person. Placement already travels via `location`. */}
          <BriefButton
            location="header"
            className="hidden !min-h-10 !px-4 !py-0 !text-body-s sm:inline-flex"
          >
            Request a plan
          </BriefButton>
          <button
            type="button"
            className="inline-flex min-h-10 items-center px-3 text-body-s text-on-sand lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {megaOpen && (
        <div
          className="hidden border-t border-rule-sand bg-sand lg:block"
          onMouseEnter={openMega}
        >
          <div className="shell">
            <div className="grid grid-cols-2 gap-px bg-rule-sand">
              {coreCaps.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="bg-sand p-5 transition-colors duration-200 hover:bg-sand-2"
                >
                  <span className="eyebrow text-on-sand-dim">{c.index}</span>
                  <span className="mt-2 block text-h3">{c.title}</span>
                  <span className="mt-1.5 block max-w-[32ch] text-body-s leading-relaxed text-on-sand-dim">
                    {c.short}
                  </span>
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-8 border-t border-rule-sand py-5">
              {supportCaps.map((c) => (
                <Link key={c.href} href={c.href} className="group block">
                  <p className="mono-kicker text-on-sand-dim">
                    {c.title}
                  </p>
                  <p className="mt-1.5 text-body-s text-on-sand-dim">
                    {c.short}{" "}
                    <span className="link-underline">
                      {c.linkLabel ?? "Read"}
                    </span>
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="pointer-events-auto fixed inset-x-0 top-14 bottom-0 overflow-y-auto border-t border-rule-sand bg-sand md:top-16 lg:hidden">
          <nav className="shell py-4" aria-label="Mobile">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block border-b border-rule-sand py-4 text-h3"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-8 grid gap-3">
              <BriefButton location="header" className="w-full">
                Request a plan
              </BriefButton>
              <p className="mt-2 text-body-s text-on-sand-dim">{site.email}</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
