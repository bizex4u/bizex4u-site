import Link from "next/link";
import type { ReactNode } from "react";

/* Reveal helper. Stagger is capped at 8 steps by callers — beyond that
   the motion database warns the tail reads as lag, not rhythm. */
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

/* ------------------------------------------------------------------
   Section bands.

   The first pass put every section on the same paper with the same
   padding, which is why it read as flat. Sections now carry a tone —
   paper, recessed, or inverted — and alternate down the page.
------------------------------------------------------------------- */

export function Section({
  index,
  label,
  children,
  className = "",
  id,
  tone = "paper",
  size = "default",
}: {
  index?: string;
  label?: string;
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "paper" | "recessed" | "ink";
  size?: "default" | "large";
}) {
  const bg =
    tone === "ink"
      ? "bg-ink text-paper"
      : tone === "recessed"
        ? "bg-paper-2"
        : "";
  const ruleClass = tone === "ink" ? "border-rule-dark" : "border-ink";
  const labelClass = tone === "ink" ? "text-paper-dim" : "text-ink";

  return (
    <section
      id={id}
      className={`${bg} ${
        size === "large" ? "py-(--spacing-section-lg)" : "py-(--spacing-section)"
      } ${className}`}
    >
      <div className="shell">
        {label && (
          <Rise className={`mb-14 border-t ${ruleClass} pt-4`}>
            <h2
              className={`font-mono text-meta uppercase tracking-[0.09em] ${labelClass}`}
            >
              {index && (
                <span className="text-accent-text">{index}&nbsp;&nbsp;</span>
              )}
              {label}
            </h2>
          </Rise>
        )}
        {children}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   The ledger row.

   Changes from the first pass: the title carries real weight, the
   description is at readable contrast rather than pale grey, and the
   arrow nudges on hover so it is obvious the whole row is a target.
------------------------------------------------------------------- */

export function LedgerRow({
  index,
  title,
  body,
  href,
  linkLabel,
  accent = false,
  delay = 0,
  aside,
  tone = "light",
}: {
  index: string;
  title: string;
  body: string;
  href?: string;
  linkLabel?: string;
  accent?: boolean;
  delay?: number;
  aside?: ReactNode;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const secondary = dark ? "text-paper-dim" : "text-ink-70";
  const idx = accent
    ? dark
      ? "text-accent-lift"
      : "text-accent-text"
    : dark
      ? "text-paper-dim"
      : "text-ink-50";

  const inner = (
    <div className="grid-12 items-baseline gap-y-4 py-8 md:py-11">
      <span
        className={`col-span-12 font-mono text-meta transition-colors md:col-span-1 ${idx} ${
          !accent &&
          (dark
            ? "group-hover:text-accent-lift"
            : "group-hover:text-accent-text")
        }`}
      >
        {index}
      </span>

      <div className="col-span-12 md:col-span-5">
        <h3 className="text-h2">{title}</h3>
        {aside && <div className="mt-7 hidden lg:block">{aside}</div>}
      </div>

      <p
        className={`col-span-12 max-w-[50ch] text-body ${secondary} ${
          linkLabel ? "md:col-span-4" : "md:col-span-5"
        }`}
      >
        {body}
      </p>

      {href && (
        <span
          className={`col-span-12 font-mono text-meta uppercase tracking-[0.09em] md:text-right lg:whitespace-nowrap ${
            linkLabel ? "md:col-span-2" : "hidden md:col-span-1 md:block"
          } ${accent ? idx : dark ? "text-paper-dim" : "text-ink-50"}`}
        >
          {linkLabel ? `${linkLabel} ` : ""}
          <span className="row-arrow">→</span>
        </span>
      )}
    </div>
  );

  const hoverBg = dark ? "hover:bg-white/[0.04]" : "hover:bg-paper-hover";
  const border = dark ? "border-rule-dark" : "border-rule";

  return (
    <Rise as="li" delay={delay} className={`border-t ${border}`}>
      {href ? (
        <Link
          href={href}
          className={`group -mx-3 block px-3 transition-colors duration-200 ${hoverBg}`}
        >
          {inner}
        </Link>
      ) : (
        <div className="group -mx-3 px-3">{inner}</div>
      )}
    </Rise>
  );
}

export function LedgerList({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <ul className={`border-b ${tone === "dark" ? "border-rule-dark" : "border-rule"}`}>
      {children}
    </ul>
  );
}

/* ------------------------------------------------------------------
   Calls to action.

   The trust-authority landing pattern asks for a real primary CTA in
   the nav and repeated down the page. The first pass had only mono
   text links, which is why nothing on the page asked for the meeting.
------------------------------------------------------------------- */

export function ButtonLink({
  href,
  children,
  tone = "ink",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "ink" | "paper";
  className?: string;
}) {
  const styles =
    tone === "paper"
      ? "bg-paper text-ink hover:bg-white"
      : "bg-ink text-paper hover:bg-accent-text";
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 rounded-[2px] px-6 py-4 font-mono text-meta uppercase tracking-[0.09em] transition-colors duration-200 ${styles} ${className}`}
    >
      {children}
      <span className="row-arrow">→</span>
    </Link>
  );
}

export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      /* min-h-11 gives a 44px tap target on touch; the -my offset keeps
         the visual rhythm identical to a plain inline link. */
      className={`link-underline group -my-3 inline-flex min-h-11 items-center py-3 font-mono text-meta uppercase tracking-[0.09em] ${className}`}
    >
      {children} <span className="row-arrow">→</span>
    </Link>
  );
}

/* Page hero — asymmetric, no image, one primary action. */
export function PageHero({
  eyebrow,
  title,
  lede,
  cta,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  cta?: { href: string; label: string };
  children?: ReactNode;
}) {
  return (
    <section className="shell pt-34 pb-14 md:pt-40 md:pb-20">
      <Rise className="border-t border-ink pt-4">
        <p className="eyebrow-ink">{eyebrow}</p>
      </Rise>
      <div className="grid-12 mt-10">
        <Rise delay={60} className="col-span-12 lg:col-span-10">
          <h1 className="text-display-xl font-display text-balance">{title}</h1>
        </Rise>
      </div>
      {lede && (
        <div className="grid-12 mt-10">
          <Rise delay={120} className="col-span-12 lg:col-span-6 lg:col-start-7">
            <p className="text-body-l text-ink-70">{lede}</p>
            {cta && (
              <div className="mt-8">
                <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
              </div>
            )}
          </Rise>
        </div>
      )}
      {children}
    </section>
  );
}

/* Contact ledger — two columns split by a vertical hairline. */
export function ContactLedger({
  email,
  phone,
  address,
  tone = "light",
}: {
  email: string;
  phone: string;
  address: { line1: string; line2: string; country: string };
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className={`grid-12 border-t ${dark ? "border-rule-dark" : "border-ink"} pt-8`}>
      <div
        className={`col-span-12 md:col-span-6 md:border-r md:pr-6 ${
          dark ? "md:border-rule-dark" : "md:border-rule"
        }`}
      >
        <p className={dark ? "eyebrow text-paper-dim" : "eyebrow"}>Talk to us</p>
        <div className="mt-4">
          <a href={`mailto:${email}`} className="link-underline -my-2 inline-flex min-h-11 items-center py-2 text-h3">
            {email}
          </a>
        </div>
        <div className="mt-2">
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="link-underline -my-2 inline-flex min-h-11 items-center py-2 text-h3"
          >
            {phone}
          </a>
        </div>
      </div>
      <div className="col-span-12 mt-10 md:col-span-5 md:col-start-8 md:mt-0">
        <p className={dark ? "eyebrow text-paper-dim" : "eyebrow"}>Office</p>
        <address
          className={`mt-4 not-italic ${dark ? "text-paper-dim" : "text-ink-70"}`}
        >
          {address.line1}
          <br />
          {address.line2}
          <br />
          {address.country}
        </address>
      </div>
    </div>
  );
}

/* FAQ — hairline rules only. No boxes, no shadows, no radius. */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-b border-rule">
      {items.map((item, i) => (
        <Rise key={item.q} delay={Math.min(i, 8) * 60} className="border-t border-rule">
          <details className="group">
            <summary className="-mx-3 flex list-none items-baseline justify-between gap-6 px-3 py-6 transition-colors duration-200 hover:bg-paper-hover [&::-webkit-details-marker]:hidden">
              <h3 className="max-w-[46ch] text-h3">{item.q}</h3>
              <span className="font-mono text-lg leading-none text-ink-50 transition-transform duration-200 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="max-w-[68ch] pb-8 text-body text-ink-70">{item.a}</p>
          </details>
        </Rise>
      ))}
    </div>
  );
}
