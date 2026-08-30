import Link from "next/link";
import type { ReactNode } from "react";
import { Band, Btn, Eyebrow, Rise, toneStyles, type Tone } from "@/components/UI";

/* ------------------------------------------------------------------
   Compatibility layer.

   The inner pages (/barter, /cities, /contact and the stubs) were
   written against the v2 editorial system. These re-express the same
   API on top of the v3 tone system so nothing breaks while those
   pages are rewritten section by section.
------------------------------------------------------------------- */

export { Rise, ArrowLink } from "@/components/UI";

export function ButtonLink({
  href,
  children,
  tone,
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "ink" | "paper";
  className?: string;
}) {
  return (
    <Btn
      href={href}
      variant={tone === "paper" ? "sand" : "violet"}
      className={className}
    >
      {children}
    </Btn>
  );
}

export function Section({
  index,
  label,
  children,
  className = "",
  id,
  tone = "paper",
}: {
  index?: string;
  label?: string;
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "paper" | "recessed" | "ink";
  size?: "default" | "large";
}) {
  const mapped: Tone =
    tone === "recessed" ? "sand2" : tone === "ink" ? "plum" : "sand";
  return (
    <Band tone={mapped} id={id} className={className}>
      {label && (
        <Rise className="mb-10">
          <Eyebrow tone={mapped}>
            {index ? `${index} — ` : ""}
            {label}
          </Eyebrow>
        </Rise>
      )}
      {children}
    </Band>
  );
}

export function LedgerList({ children }: { children: ReactNode; tone?: string }) {
  return <ul className="grid gap-4 md:grid-cols-2">{children}</ul>;
}

export function LedgerRow({
  index,
  title,
  body,
  href,
  linkLabel,
  accent = false,
  delay = 0,
  aside,
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
  const inner = (
    <>
      <span
        className={`eyebrow ${accent ? "text-violet-deep" : "text-on-sand-dim"}`}
      >
        {index}
      </span>
      <h3 className="mt-3 text-h2">{title}</h3>
      <p className="mt-3 max-w-[46ch] text-on-sand-dim">{body}</p>
      {aside && <div className="mt-6">{aside}</div>}
      {href && (
        <span className="mt-5 inline-flex items-center gap-1.5 text-body-s font-medium text-violet-deep">
          {linkLabel ?? "Read more"} <span className="row-arrow">→</span>
        </span>
      )}
    </>
  );

  return (
    <Rise as="li" delay={delay}>
      {href ? (
        <Link
          href={href}
          className="group block h-full rounded-(--radius-card) bg-sand-2 p-6 transition-colors duration-200 hover:bg-sand-3 md:p-7"
        >
          {inner}
        </Link>
      ) : (
        <div className="group h-full rounded-(--radius-card) bg-sand-2 p-6 md:p-7">
          {inner}
        </div>
      )}
    </Rise>
  );
}

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
    <section className="grain relative bg-sand pt-32 pb-14 md:pt-40 md:pb-20">
      <div className="shell relative z-10">
        <Rise>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Rise>
        <div className="grid-12 mt-6">
          <Rise delay={60} className="col-span-12 lg:col-span-9">
            <h1 className="font-display text-display-xl text-balance">
              {title}
            </h1>
          </Rise>
        </div>
        {lede && (
          <div className="grid-12 mt-8">
            <Rise delay={120} className="col-span-12 lg:col-span-6">
              {/* `speakable-answer` is a hook, not a style. It marks the
                  one paragraph on the page written to stand alone, so
                  the speakable schema can point a voice assistant at
                  the answer rather than at whatever sits highest in
                  the DOM. Do not repurpose it for a second paragraph:
                  two speakable answers is the same as none. */}
              <p className="speakable-answer text-body-l text-on-sand-dim">
                {lede}
              </p>
              {cta && (
                <div className="mt-8">
                  <Btn href={cta.href}>{cta.label}</Btn>
                </div>
              )}
            </Rise>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function ContactLedger({
  email,
  phone,
  address,
}: {
  email: string;
  phone: string;
  address: { line1: string; line2: string; country: string };
  tone?: "light" | "dark";
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-(--radius-card) bg-sand-2 p-6 md:p-7">
        <Eyebrow>Talk to us</Eyebrow>
        <div className="mt-4">
          <a
            href={`mailto:${email}`}
            className="link-underline -my-2 inline-flex min-h-11 items-center py-2 text-h3"
          >
            {email}
          </a>
        </div>
        <div className="mt-1">
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="link-underline -my-2 inline-flex min-h-11 items-center py-2 text-h3"
          >
            {phone}
          </a>
        </div>
      </div>
      <div className="rounded-(--radius-card) bg-sand-2 p-6 md:p-7">
        <Eyebrow>Office</Eyebrow>
        <address className="mt-4 text-on-sand-dim not-italic">
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

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item, i) => (
        <Rise key={item.q} delay={Math.min(i, 8) * 60}>
          <details className="group rounded-(--radius-card) bg-sand-2 px-6 py-1 md:px-7">
            <summary className="flex list-none items-baseline justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
              <h3 className="max-w-[46ch] text-h3">{item.q}</h3>
              <span className="font-mono text-lg leading-none text-violet-deep transition-transform duration-200 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="max-w-[68ch] pb-6 text-on-sand-dim">{item.a}</p>
          </details>
        </Rise>
      ))}
    </div>
  );
}

export { toneStyles };
