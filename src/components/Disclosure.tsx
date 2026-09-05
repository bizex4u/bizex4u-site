import type { ReactNode } from "react";

/**
 * A disclosure row: a heading you can read, and a body you can open.
 *
 * WHY THIS EXISTS. The format guide on a city page is eleven headings,
 * each followed by a paragraph specific to that city. Every one of
 * those paragraphs earns its place — they are the long-tail layer, they
 * are why the page ranks for "bus queue shelter advertising in Kanpur",
 * and cutting them would be cutting the thing that works.
 *
 * But stacked open, they measured 4,093px on a phone: a fifth of the
 * entire page, and eleven consecutive walls with no way to see what the
 * next one is about without reading the last. The reader who wants
 * "which format for my brief" cannot get an overview, and the reader
 * who wants one specific format has to scroll past ten.
 *
 * Collapsed, the same eleven headings become a scannable index in about
 * 800px, and the body is one tap away. Nothing is removed: `<details>`
 * content stays in the DOM and stays indexed, the headings stay real
 * headings, and the browser gives keyboard operation and the open/close
 * state for free — which is why this is a `<details>`, not a div with
 * an onClick and a useState.
 *
 * `defaultOpen` on the first row is not decoration. A column of closed
 * rows does not announce that it is openable; one open row makes the
 * pattern obvious without a hint that says "click to expand".
 */
export function Disclosure({
  title,
  kicker,
  index,
  defaultOpen = false,
  tone = "sand",
  children,
}: {
  title: string;
  /* The small uppercase label — a format category, a section number.
     Sits opposite the title so the column reads as a table of contents
     rather than as a list of links. */
  kicker?: string;
  index?: number;
  defaultOpen?: boolean;
  tone?: "sand" | "plum";
  children: ReactNode;
}) {
  const dark = tone === "plum";
  const rule = dark ? "border-rule-plum" : "border-rule-sand";
  const dim = dark ? "text-on-plum-dim" : "text-on-sand-dim";
  const accent = dark ? "text-violet-lift" : "text-violet-deep";
  const hover = dark ? "hover:bg-on-plum/5" : "hover:bg-on-sand/4";

  return (
    <details
      open={defaultOpen}
      className={`group border-b ${rule} ${hover} transition-colors duration-200`}
    >
      {/* min-h-14 keeps the row above the WCAG 2.2 target minimum with
          room to spare, since this is the primary way through the
          section on a phone. list-none plus the webkit rule removes the
          native triangle in both engines. */}
      <summary className="flex min-h-12 cursor-pointer list-none items-baseline gap-4 py-3 md:py-3.5 [&::-webkit-details-marker]:hidden">
        {index !== undefined && (
          <span
            className={`mono-kicker ${accent} shrink-0 pt-1.5`}
          >
            {String(index).padStart(2, "0")}
          </span>
        )}
        <span className="flex-1">
          <span className="font-display text-h2 text-balance">{title}</span>
          {kicker && (
            <span
              className={`mt-1 block mono-kicker ${dim}`}
            >
              {kicker}
            </span>
          )}
        </span>
        <span
          aria-hidden
          className={`shrink-0 pt-1 font-mono text-lg leading-none ${accent} transition-transform duration-200 group-open:rotate-45`}
        >
          +
        </span>
      </summary>
      <div className={`max-w-[68ch] pb-4 ${dim}`}>{children}</div>
    </details>
  );
}
