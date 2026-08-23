import Link from "next/link";
import type { ReactNode } from "react";

/* Reveal helper — keeps the stagger declarative at call sites. */
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
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* Section wrapper — mono eyebrow sitting above a full-width hairline. */
export function Section({
  index,
  label,
  children,
  className = "",
  id,
}: {
  index?: string;
  label?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`shell py-14 md:py-20 ${className}`}>
      {label && (
        <Rise className="mb-12 border-t border-ink pt-4">
          <h2 className="eyebrow">
            {index ? `${index} — ` : ""}
            {label}
          </h2>
        </Rise>
      )}
      {children}
    </section>
  );
}

/**
 * The ledger row. Every list on this site is one of these.
 * Hairline above, index number in the left margin, content to the right.
 */
export function LedgerRow({
  index,
  title,
  body,
  href,
  linkLabel,
  accent = false,
  delay = 0,
  titleClass = "text-h2",
}: {
  index: string;
  title: string;
  body: string;
  href?: string;
  linkLabel?: string;
  accent?: boolean;
  delay?: number;
  titleClass?: string;
}) {
  const inner = (
    <div className="grid-12 items-baseline gap-y-3 px-2 py-7 md:py-9">
      <span
        className={`col-span-12 font-mono text-meta transition-colors md:col-span-1 ${
          accent ? "text-accent" : "text-ink-30 group-hover:text-accent"
        }`}
      >
        {index}
      </span>
      <h3 className={`col-span-12 md:col-span-5 ${titleClass}`}>{title}</h3>
      <p
        className={`col-span-12 max-w-[52ch] text-ink-60 ${
          linkLabel ? "md:col-span-4" : "md:col-span-5"
        }`}
      >
        {body}
      </p>
      {href && (
        <span
          className={`col-span-12 font-mono text-meta whitespace-nowrap uppercase tracking-[0.08em] md:text-right ${
            linkLabel ? "md:col-span-2" : "hidden md:col-span-1 md:block"
          } ${accent ? "text-accent" : "text-ink-30 group-hover:text-ink"}`}
        >
          {linkLabel ? `${linkLabel} →` : "→"}
        </span>
      )}
    </div>
  );

  return (
    <Rise as="li" delay={delay} className="border-t border-rule">
      {href ? (
        <Link
          href={href}
          className="group block transition-colors hover:bg-paper-hover"
        >
          {inner}
        </Link>
      ) : (
        <div className="group">{inner}</div>
      )}
    </Rise>
  );
}

export function LedgerList({ children }: { children: ReactNode }) {
  return <ul className="border-b border-rule">{children}</ul>;
}

/* Text link with the underline that draws in from the left. */
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
      className={`link-underline font-mono text-meta uppercase tracking-[0.08em] ${className}`}
    >
      {children} →
    </Link>
  );
}

/* Page hero — asymmetric, no image, no buttons. */
export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <section className="shell pt-36 pb-12 md:pt-44 md:pb-16">
      <Rise className="border-t border-ink pt-4">
        <p className="eyebrow">{eyebrow}</p>
      </Rise>
      <div className="grid-12 mt-10">
        <Rise delay={60} className="col-span-12 lg:col-span-10">
          <h1 className="text-display-xl font-display text-balance">{title}</h1>
        </Rise>
      </div>
      {lede && (
        <div className="grid-12 mt-12">
          <Rise delay={120} className="col-span-12 lg:col-span-6 lg:col-start-7">
            <p className="text-body-l text-ink-60">{lede}</p>
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
}: {
  email: string;
  phone: string;
  address: { line1: string; line2: string; country: string };
}) {
  return (
    <div className="grid-12 border-t border-ink pt-8">
      <div className="col-span-12 md:col-span-6 md:border-r md:border-rule md:pr-6">
        <p className="eyebrow">Talk to us</p>
        <div className="mt-4">
          <a href={`mailto:${email}`} className="link-underline text-h3">
            {email}
          </a>
        </div>
        <div className="mt-2">
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="link-underline text-h3"
          >
            {phone}
          </a>
        </div>
      </div>
      <div className="col-span-12 mt-10 md:col-span-5 md:col-start-8 md:mt-0">
        <p className="eyebrow">Office</p>
        <address className="mt-4 text-ink-60 not-italic">
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

/* FAQ — hairline rules only. No boxes, no shadows, no rounded corners. */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-b border-rule">
      {items.map((item, i) => (
        <Rise key={item.q} delay={i * 60} className="border-t border-rule">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
              <h3 className="text-h3 max-w-[46ch]">{item.q}</h3>
              <span className="font-mono text-meta text-ink-30 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="max-w-[68ch] pb-7 text-ink-60">{item.a}</p>
          </details>
        </Rise>
      ))}
    </div>
  );
}
