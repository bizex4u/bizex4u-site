import type { ReactNode } from "react";

/**
 * Infinite horizontal drift.
 *
 * The row is rendered twice and Motion.tsx translates the pair by
 * exactly -50%, so the second copy arrives where the first began and
 * the seam is invisible. The duplicate is aria-hidden — a screen
 * reader should hear the client list once, not twice.
 *
 * With no JS it simply sits still, showing the first copy. That is a
 * perfectly acceptable resting state, which is the test any motion
 * device on this site has to pass.
 */
export default function Marquee({
  items,
  speed = 38,
  className = "",
  renderItem,
}: {
  items: string[];
  /* Seconds for one full pass. Longer is slower. */
  speed?: number;
  className?: string;
  renderItem?: (item: string) => ReactNode;
}) {
  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-x-10 pr-10 md:gap-x-14 md:pr-14"
    >
      {items.map((item) => (
        <li key={item} className="shrink-0 whitespace-nowrap">
          {renderItem ? renderItem(item) : item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`marquee-mask overflow-hidden ${className}`}>
      <div data-marquee={speed} className="flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
