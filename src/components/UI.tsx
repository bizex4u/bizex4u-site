import Link from "next/link";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------
   v3 primitives.

   Everything is tone-aware. A Band declares its background and every
   child asks it what colour to be, so a section can be moved from
   charcoal to cream without touching its contents.
------------------------------------------------------------------- */

export type Tone = "ink" | "ink2" | "cream" | "amber";

export const toneStyles: Record<
  Tone,
  {
    bg: string;
    text: string;
    dim: string;
    rule: string;
    card: string;
    hl: string;
    eyebrow: string;
  }
> = {
  ink: {
    bg: "bg-ink",
    text: "text-on-ink",
    dim: "text-on-ink-dim",
    rule: "border-rule-dark",
    card: "bg-ink-2",
    hl: "text-amber",
    eyebrow: "text-amber",
  },
  ink2: {
    bg: "bg-ink-2",
    text: "text-on-ink",
    dim: "text-on-ink-dim",
    rule: "border-rule-dark",
    card: "bg-ink-3",
    hl: "text-amber",
    eyebrow: "text-amber",
  },
  cream: {
    bg: "bg-cream",
    text: "text-on-cream",
    dim: "text-on-cream-dim",
    rule: "border-rule-light",
    card: "bg-cream-2",
    hl: "text-amber-deep",
    eyebrow: "text-amber-deep",
  },
  amber: {
    bg: "bg-amber",
    text: "text-on-amber",
    dim: "text-on-amber-dim",
    rule: "border-on-amber/20",
    card: "bg-on-amber/6",
    hl: "text-on-amber",
    eyebrow: "text-on-amber-dim",
  },
};

export function Rise({
  delay = 0,
  className = "",
  children,
  as: Tag = "div",
}: {
  delay?: number;
  className?: string;
  children: ReactNode;
  as?: "div" | "li" | "section" | "p" | "h2";
}) {
  return (
    <Tag
      className={`reveal ${className}`}
      style={{ ["--reveal-delay" as string]: `${Math.min(delay, 480)}ms` }}
    >
      {children}
    </Tag>
  );
}

/* A full-width colour band. This is the unit the whole page is
   built from — the references never run one background for more
   than a section at a time. */
export function Band({
  tone = "ink",
  children,
  className = "",
  id,
  grain = false,
  flush = false,
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
  id?: string;
  grain?: boolean;
  flush?: boolean;
}) {
  const t = toneStyles[tone];
  return (
    <section
      id={id}
      className={`relative ${t.bg} ${t.text} ${
        flush ? "" : "py-(--spacing-band)"
      } ${grain ? "grain" : ""} ${className}`}
    >
      <div className="shell relative z-10">{children}</div>
    </section>
  );
}

/* Section label. Mono, amber, with an optional Devanagari companion
   — the cheapest way to make the page read as Indian rather than as
   a template with rupee prices. */
export function Eyebrow({
  children,
  deva,
  tone = "ink",
  className = "",
}: {
  children: ReactNode;
  deva?: string;
  tone?: Tone;
  className?: string;
}) {
  const t = toneStyles[tone];
  return (
    <p className={`eyebrow ${t.eyebrow} ${className}`}>
      {children}
      {deva && (
        <span className={`deva ml-2.5 normal-case ${t.dim}`}>{deva}</span>
      )}
    </p>
  );
}

/* Rounded card. Every reference on the board uses these; v2 banned
   them, which was wrong for this brief. */
export function Card({
  tone = "ink",
  children,
  className = "",
  as: Tag = "div",
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const t = toneStyles[tone];
  return (
    <Tag
      className={`rounded-(--radius-card) ${t.card} p-6 md:p-7 ${className}`}
    >
      {children}
    </Tag>
  );
}

/* Pill buttons. Also banned in v2, also wrong. */
export function Btn({
  href,
  children,
  variant = "amber",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "amber" | "light" | "outline-light" | "outline-dark";
  external?: boolean;
  className?: string;
}) {
  const styles = {
    amber: "bg-amber text-on-amber hover:bg-amber-lift",
    light: "bg-on-ink text-ink hover:bg-white",
    "outline-light":
      "border border-on-ink/30 text-on-ink hover:border-on-ink hover:bg-on-ink/6",
    "outline-dark":
      "border border-on-cream/25 text-on-cream hover:border-on-cream hover:bg-on-cream/6",
  }[variant];

  const cls = `group inline-flex min-h-12 items-center gap-2.5 rounded-full px-6 py-3 text-[0.9375rem] font-medium transition-colors duration-200 ${styles} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        <span className="row-arrow">→</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      <span className="row-arrow">→</span>
    </Link>
  );
}

export function ArrowLink({
  href,
  children,
  tone = "ink",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const t = toneStyles[tone];
  return (
    <Link
      href={href}
      className={`link-underline group -my-3 inline-flex min-h-11 items-center py-3 text-[0.9375rem] font-medium ${t.hl} ${className}`}
    >
      {children} <span className="row-arrow ml-1.5">→</span>
    </Link>
  );
}

/* A big number with a label under it — Laqshya's stat treatment. */
export function Stat({
  value,
  label,
  note,
  tone = "ink",
}: {
  value: string;
  label: string;
  note?: string;
  tone?: Tone;
}) {
  const t = toneStyles[tone];
  return (
    <div>
      <p
        className={`font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-none font-semibold tracking-[-0.035em] ${t.hl}`}
      >
        {value}
      </p>
      <p className="mt-2.5 text-h3">{label}</p>
      {note && <p className={`mt-1.5 max-w-[26ch] text-[0.875rem] ${t.dim}`}>{note}</p>}
    </div>
  );
}
