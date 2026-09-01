import Link from "next/link";
import type { ReactNode } from "react";
import { externalAnchorProps, isExternalHref } from "@/lib/href";

/* ------------------------------------------------------------------
   v4 primitives — paper, ink, violet.

   Everything is tone-aware. A Band declares its ground and children
   ask it what colour to be, so a section can move from paper to ink
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
  compact = false,
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
  id?: string;
  grain?: boolean;
  flush?: boolean;
  /* City and market pages: the default band padding was leaving a
     screen of sand between every section. Compact keeps the same
     type system with less empty ground. */
  compact?: boolean;
}) {
  const t = toneStyles[tone];
  const grainClass =
    tone === "sand" || tone === "sand2" ? "grain" : "grain grain-light";
  const pad = flush
    ? ""
    : compact
      ? "py-10 md:py-12"
      : "py-(--spacing-band)";
  return (
    <section
      id={id}
      /* scroll-mt only where there is an id to jump to. The nav is a
         floating pill over the content, so an untreated anchor drops
         the section heading underneath it — the reader jumps and lands
         looking at the second paragraph. */
      className={`relative ${id ? "scroll-mt-28" : ""} ${t.bg} ${t.text} ${pad} ${grain ? grainClass : ""} ${className}`}
    >
      <div className="shell relative z-10">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  deva,
  tone = "sand",
  as: Tag = "p",
  muted = false,
  className = "",
  htmlFor,
}: {
  children: ReactNode;
  deva?: string;
  tone?: Tone;
  /* The same label does five jobs on this site — a section eyebrow, a
     fieldset legend, a column heading, a definition term, a form label.
     They were thirty-two hand-written copies of the same class string,
     each author picking a colour by eye. That is precisely how the
     wordmark ended up plum-on-plum: a colour chosen by hand against a
     ground that later changed. The tone knows which violet and which
     dim belong to each background; nobody should be choosing. */
  as?: "p" | "span" | "legend" | "dt" | "h2" | "h3" | "label";
  /* Only meaningful when `as="label"`. Typed rather than spread so a
     stray htmlFor on a <dt> is a compile error, not a silent no-op. */
  htmlFor?: string;
  /* Accent (violet) is the section eyebrow. Muted (dim) is a label
     inside something — a card, a fieldset, a table column. */
  muted?: boolean;
  className?: string;
}) {
  const t = toneStyles[tone];
  return (
    <Tag
      className={`eyebrow ${muted ? t.dim : t.hl} ${className}`}
      htmlFor={Tag === "label" ? htmlFor : undefined}
    >
      {children}
      {deva && (
        <>
          {/* A REAL space, not a margin.
              The two scripts used to be separated only by `ml-2.5`,
              which draws a gap and creates no whitespace. So the DOM
              held "What activation means hereहम क्या करते हैं" as one
              unbroken run: that is what a copy-paste produces, what a
              screen reader announces, and what a crawler indexes. It
              looked correct and was not, which is the worst kind of
              wrong. These braces are the fix — a JSX space is a text
              node. */}
          {" "}
          {/* A hairline between the scripts rather than empty space.
              `bg-current` takes the eyebrow's own colour on every one
              of the five tones, so this needs no token of its own and
              cannot drift out of step with the text beside it. */}
          <span
            aria-hidden="true"
            className="mx-2.5 inline-block h-[0.85em] w-px translate-y-[0.06em] bg-current opacity-35"
          />{" "}
          {/* lang="hi" so a screen reader switches voice instead of
              reading Devanagari through an English one. The Devanagari
              is a translation of the line beside it, not extra
              information, and marking it up as such is the difference
              between a second voice and noise. */}
          <span lang="hi" className={`deva normal-case ${t.dim}`}>
            {deva}
          </span>
        </>
      )}
    </Tag>
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
    violet: "bg-violet-deep text-white hover:bg-plum",
    plum: "bg-plum text-on-plum hover:bg-plum-2",
    sand: "bg-sand text-on-sand hover:bg-white",
    "outline-plum":
      "border border-on-sand/25 text-on-sand hover:border-on-sand hover:bg-on-sand/5",
    "outline-sand":
      "border border-on-plum/30 text-on-plum hover:border-on-plum hover:bg-on-plum/8",
  }[variant];

  const dims =
    size === "lg"
      ? "min-h-14 px-7 text-body"
      : "min-h-12 px-6 text-body-s";

  return `group inline-flex items-center justify-center gap-2.5 rounded-sm py-3 font-medium transition-colors duration-200 ${dims} ${styles} ${className}`;
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

  if (external || isExternalHref(href)) {
    return (
      <a {...externalAnchorProps(href)} className={cls}>
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
  const cls = `link-underline group -my-3 inline-flex min-h-11 items-center py-3 text-body-s font-medium ${t.hl} ${className}`;
  if (isExternalHref(href)) {
    return (
      <a {...externalAnchorProps(href)} className={cls}>
        {children} <span className="row-arrow ml-1.5">→</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
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
      {note && <p className={`mt-1.5 max-w-[26ch] text-body-s ${t.dim}`}>{note}</p>}
    </div>
  );
}

/**
 * The section header: eyebrow, heading, and a lede off to the right.
 *
 * Twenty-six near-copies of this shape across nine files. Every one hand
 * wrote the same grid, the same `mt-5`, the same `max-w-[42ch]`, and
 * every one chose its own column split — 7/5 here, 6/5 there, 8/3 on the
 * page nobody had looked at in a while. The variation was not design; it
 * was twenty-six separate guesses at the same decision.
 *
 * What the component fixes is not typing. It is that the next section
 * anyone adds now inherits the rhythm instead of re-deriving it, and
 * that changing the rhythm is one edit rather than twenty-six.
 *
 * `lede` is optional because eight of the twenty-six carry no second
 * column, and `children` takes anything that is not a paragraph — a
 * button, a pause control, a link — so the two-column shape survives
 * contact with the sections that need more than prose.
 */
export function SectionHead({
  eyebrow,
  deva,
  title,
  lede,
  tone = "sand",
  children,
  className = "",
  compact = false,
}: {
  eyebrow?: string;
  deva?: string;
  title: ReactNode;
  lede?: ReactNode;
  tone?: Tone;
  children?: ReactNode;
  className?: string;
  compact?: boolean;
}) {
  const t = toneStyles[tone];
  const wide = Boolean(lede || children);
  return (
    <div className={`grid-12 items-end ${className}`}>
      <Rise className={wide ? "col-span-12 lg:col-span-7" : "col-span-12"}>
        {eyebrow && (
          <Eyebrow tone={tone} deva={deva}>
            {eyebrow}
          </Eyebrow>
        )}
        <h2
          className={`font-display text-balance ${
            compact ? "text-h1" : "text-display-l"
          } ${eyebrow ? (compact ? "mt-3" : "mt-5") : ""}`}
        >
          {title}
        </h2>
      </Rise>

      {wide && (
        <div className="col-span-12 mt-4 lg:col-span-5 lg:col-start-8 lg:mt-0">
          {lede && (
            <p className={`max-w-[42ch] ${compact ? "text-body-s" : "text-body-l"} ${t.dim}`}>
              {lede}
            </p>
          )}
          {children && <div className={lede ? "mt-5" : ""}>{children}</div>}
        </div>
      )}
    </div>
  );
}
