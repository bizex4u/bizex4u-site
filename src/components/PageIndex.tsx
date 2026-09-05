"use client";

import { useEffect, useState } from "react";

/**
 * An index for a page that is genuinely long.
 *
 * One nav, restyled by CSS: desktop is a static grid under the hero;
 * mobile is a chip rail that appears after the hero. Two copies of the
 * same list used to ship in the HTML for every city page.
 */
export default function PageIndex({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  const [stuck, setStuck] = useState(false);
  const [wide, setWide] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const syncWide = () => setWide(mq.matches);
    syncWide();
    mq.addEventListener("change", syncWide);

    const onScroll = () => {
      const y = window.scrollY;
      const atEnd =
        y + window.innerHeight > document.documentElement.scrollHeight - 1200;
      setStuck(y > 700 && !atEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      mq.removeEventListener("change", syncWide);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const available = wide || stuck;

  return (
    <nav
      aria-label="On this page"
      aria-hidden={available ? undefined : true}
      data-page-index=""
      data-stuck={stuck ? "true" : undefined}
    >
      <ul>
        {items.map((it, i) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              className="link-underline"
              tabIndex={available ? 0 : -1}
            >
              <span className="page-index-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
