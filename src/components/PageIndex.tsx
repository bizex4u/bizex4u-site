"use client";

import { useEffect, useState } from "react";

/**
 * An index for a page that is genuinely long.
 *
 * WHY. A city page runs to roughly nine thousand pixels on desktop and
 * fourteen thousand on a phone. That is not a flaw to be padded away —
 * the depth is the reason these pages rank and the reason a local reads
 * them — but an undifferentiated scroll of that length gives a reader
 * arriving with ONE question ("what does it cost", "who licenses it")
 * no way to reach it except the scrollbar.
 *
 * So the fix is not less content. It is telling the reader what is here
 * and letting them jump.
 *
 * DESKTOP is a static grid under the hero: visible once, at the moment
 * a reader is deciding whether to commit, and then out of the way.
 *
 * MOBILE is a sticky rail that appears only after the reader has passed
 * the hero — a chip row they can thumb through horizontally. It hides
 * again at the foot of the page, where the CTA should have the screen.
 * It is deliberately NOT sticky from the top: a bar that is present
 * before anyone has scrolled is a bar that has taken height from the
 * headline for nothing.
 */
export default function PageIndex({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const atEnd =
        y + window.innerHeight > document.documentElement.scrollHeight - 1200;
      setStuck(y > 700 && !atEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop: stated once, under the hero. */}
      <nav
        aria-label="On this page"
        className="hidden border-t border-rule-sand pt-6 lg:block"
      >
        <p className="eyebrow text-on-sand-dim">On this page</p>
        <ul className="mt-4 grid grid-cols-4 gap-x-6 gap-y-2.5">
          {items.map((it, i) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className="link-underline -my-1.5 inline-flex min-h-6 items-baseline gap-2.5 py-1.5 text-body-s"
              >
                <span className="font-mono text-micro tracking-[0.08em] text-violet-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile: a thumb rail, and only once it is needed.
          aria-hidden while off-screen so a screen reader is not offered
          a navigation that is not there; the desktop nav above stays in
          the accessibility tree regardless of viewport. */}
      <nav
        aria-label="On this page"
        aria-hidden={!stuck}
        className={`fixed inset-x-0 top-0 z-40 border-b border-rule-sand bg-sand/92 backdrop-blur-md transition-transform duration-300 lg:hidden ${
          stuck ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex gap-2 overflow-x-auto px-4 py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((it) => (
            <li key={it.id} className="shrink-0">
              <a
                href={`#${it.id}`}
                tabIndex={stuck ? 0 : -1}
                className="inline-flex min-h-11 items-center rounded-full border border-on-sand/18 px-3.5 text-body-s whitespace-nowrap"
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
