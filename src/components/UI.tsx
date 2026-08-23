import Link from "next/link";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------
   v4 primitives — purple and beige.

   Everything is tone-aware. A Band declares its ground and children
   ask it what colour to be, so a section can move from beige to plum
   without touching its contents.
------------------------------------------------------------------- */

export type Tone = "sand" | "sand2" | "plum" | "plum2" | "violet";

export const toneStyles: Record<
  Tone,
  { bg: string; text: string; dim: string; rule: string; card: string; hl: string }
> = {
  sand: {
    bg: "bg-sand",
    text: "text-on-sand",
    dim: "text-on-sand-dim",
    rule: "border-rule-sand",
    card: "bg-sand-2",
    hl: "text-violet-deep",
  },
  sand2: {
    bg: "bg-sand-2",
    text: "text-on-sand",
    dim: "text-on-sand-dim",
    rule: "border-rule-sand",
    card: "bg-sand",
    hl: "text-violet-deep",
  },
  plum: {
    bg: "bg-plum",
    text: "text-on-plum",
    dim: "text-on-plum-dim",
    rule: "border-rule-plum",
    card: "bg-plum-2",
    hl: "text-violet-lift",
  },
  plum2: {
    bg: "bg-plum-2",
    text: "text-on-plum",
    dim: "text-on-plum-dim",
    rule: "border-rule-plum",
    card: "bg-plum-3",
    hl: "text-violet-lift",
  },
  violet: {
    bg: "bg-violet-deep",
    text: "text-on-violet",
    dim: "text-on-violet-dim",
    rule: "border-white/20",
    card: "bg-white/8",
    hl: "text-on-violet",
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

export function Band({
  tone = "sand",
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
  const grainClass =
    tone === "sand" || tone === "sand2" ? "grain" : "grain grain-light";
  return (
    <section
      id={id}
      className={`relative ${t.bg} ${t.text} ${
        flush ? "" : "py-(--spacing-band)"
      } ${grain ? grainClass : ""} ${className}`}
    >
      <div className="shell relative z-10">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  deva,
  tone = "sand",
  className = "",
}: {
  children: ReactNode;
  deva?: string;
  tone?: Tone;
  className?: string;
}) {
  const t = toneStyles[tone];
  return (
    <p className={`eyebrow ${t.hl} ${className}`}>
      {children}
      {deva && <span className={`deva ml-2.5 normal-case ${t.dim}`}>{deva}</span>}
    </p>
  );
}

/**
 * `bg` replaces the tone's default card ground rather than sitting
 * alongside it. Passing a background through `className` does not
 * work — two `bg-*` utilities both land in the stylesheet and source
 * order there, not attribute order, decides the winner. That silently
 * put white text on beige once. Use `bg` for a card that departs from
 * its band, and pair it with the matching text colour.
 */
export function Card({
  tone = "sand",
  children,
  className = "",
  bg,
  as: Tag = "div",
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
  bg?: string;
  as?: "div" | "li" | "article";
}) {
  const t = toneStyles[tone];
  return (
    <Tag
      className={`rounded-(--radius-card) ${bg ?? t.card} p-6 md:p-7 ${className}`}
    >
      {children}
    </Tag>
  );
}

export type BtnVariant =
  | "violet"
  | "plum"
  | "sand"
  | "outline-plum"
  | "outline-sand";

/* Shared so BriefButton — which is a <button> opening a dialog rather
   than a link — is visually identical to Btn. Two hand-maintained copies
   of this string would drift within a week. */
export function btnClass(
  variant: BtnVariant = "violet",
  size: "md" | "lg" = "md",
  className = "",
) {
  const styles = {
    violet: "bg-violet-deep text-white hover:bg-violet",
    plum: "bg-plum text-on-plum hover:bg-plum-2",
    sand: "bg-sand text-on-sand hover:bg-white",
    "outline-plum":
      "border border-on-sand/25 text-on-sand hover:border-on-sand hover:bg-on-sand/5",
    "outline-sand":
      "border border-on-plum/30 text-on-plum hover:border-on-plum hover:bg-on-plum/8",
  }[variant];

  const dims =
    size === "lg"
      ? "min-h-14 px-7 text-[1rem]"
      : "min-h-12 px-6 text-[0.9375rem]";

  return `group inline-flex items-center justify-center gap-2.5 rounded-full py-3 font-medium transition-colors duration-200 ${dims} ${styles} ${className}`;
}

export function Btn({
  href,
  children,
  variant = "violet",
  external = false,
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: BtnVariant;
  external?: boolean;
  size?: "md" | "lg";
  className?: string;
}) {
  const cls = btnClass(variant, size, className);

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
  tone = "sand",
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

export function Stat({
  value,
  label,
  note,
  tone = "sand",
}: {
  value: string;
  label: string;
  note?: string;
  tone?: Tone;
}) {
  const t = toneStyles[tone];
  return (
    <div>
      <p className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-none">
        {value}
      </p>
      <p className="mt-3 text-h3">{label}</p>
      {note && <p className={`mt-1.5 max-w-[26ch] text-[0.875rem] ${t.dim}`}>{note}</p>}
    </div>
  );
}
