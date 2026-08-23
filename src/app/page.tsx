import Link from "next/link";
import {
  ArrowLink,
  ContactLedger,
  LedgerList,
  LedgerRow,
  Rise,
  Section,
} from "@/components/Ledger";
import {
  atlasModules,
  capabilities,
  perspectives,
  selectedWork,
  site,
} from "@/lib/site";
import { additionalMarkets, cities } from "@/lib/cities";

const heroStats = [
  "17 Years",
  "40+ Cities",
  "6 Capabilities",
  "Independent",
];

/* Clients — placeholder marks until Yash confirms written permission
   to name each client publicly. Rendered as wordmarks, not logos. */
const clients = [
  "Client",
  "Client",
  "Client",
  "Client",
  "Client",
  "Client",
  "Client",
  "Client",
  "Client",
  "Client",
];

export default function Home() {
  /* Cities with a written page are links. The rest are listed honestly
     as plain text rather than pointed at a thin page. */
  const cityLinks: { name: string; href?: string }[] = [
    ...cities.map((c) => ({ name: c.name, href: `/cities/${c.slug}` })),
    ...additionalMarkets.map((name) => ({ name })),
  ];

  return (
    <>
      {/* 01 — HERO ------------------------------------------------ */}
      <section className="shell flex min-h-svh flex-col justify-between pt-32 pb-8 md:pt-40">
        <div>
          <Rise className="border-t border-ink pt-4">
            <p className="eyebrow">
              Independent Media Network — India — Est. {site.founded}
            </p>
          </Rise>

          <div className="grid-12 mt-14 md:mt-20">
            <Rise delay={60} className="col-span-12 lg:col-span-9">
              <h1 className="text-display-xl font-display text-balance">
                We put brands where India actually is.
              </h1>
            </Rise>
          </div>

          <div className="grid-12 mt-14">
            <Rise
              delay={120}
              className="col-span-12 lg:col-span-6 lg:col-start-7"
            >
              <p className="text-body-l text-ink-60">
                Bizex4U plans, negotiates and runs outdoor, retail and
                broadcast campaigns across India. We have done it for
                seventeen years — and we structure the commercials so clients
                spend less cash doing it.
              </p>
            </Rise>
          </div>
        </div>

        <Rise delay={180} className="mt-16 border-t border-rule pt-4">
          <dl className="grid grid-cols-2 gap-y-3 sm:flex sm:flex-wrap">
            {heroStats.map((stat, i) => (
              <div
                key={stat}
                className={`pr-6 md:pr-10 ${
                  i > 0 ? "sm:border-l sm:border-rule sm:pl-6 md:pl-10" : ""
                }`}
              >
                <dd className="font-mono text-meta uppercase tracking-[0.08em] text-ink-60">
                  {stat}
                </dd>
              </div>
            ))}
          </dl>
        </Rise>
      </section>

      {/* 02 — THE NETWORK ---------------------------------------- */}
      <Section index="02" label="What we do">
        <LedgerList>
          {capabilities.map((c, i) => (
            <LedgerRow
              key={c.href}
              index={c.index}
              title={c.title}
              body={c.short}
              href={c.href}
              linkLabel={c.linkLabel}
              accent={c.accent}
              delay={i * 60}
            />
          ))}
        </LedgerList>
      </Section>

      {/* 03 — POSITION ------------------------------------------- */}
      <section className="bg-ink py-28 text-paper md:py-40">
        <div className="shell grid-12">
          <Rise className="col-span-12 lg:col-span-9 lg:col-start-2">
            <p className="text-display-l font-display text-balance">
              Most media is bought with cash.
              <br />
              It does not have to be.
            </p>
            <Link
              href="/barter"
              className="link-underline mt-12 inline-block font-mono text-meta uppercase tracking-[0.08em] text-paper/70 hover:text-paper"
            >
              Our commercial model →
            </Link>
          </Rise>
        </div>
      </section>

      {/* 04 — SELECTED WORK -------------------------------------- */}
      <Section index="04" label="Selected work">
        <LedgerList>
          {selectedWork.map((w, i) => (
            <Rise key={w.index} as="li" delay={i * 60} className="border-t border-rule">
              <Link
                href={w.href}
                className="group grid-12 items-baseline gap-y-3 px-2 py-7 transition-colors hover:bg-paper-hover md:py-9"
              >
                <span className="col-span-12 font-mono text-meta text-ink-30 transition-colors group-hover:text-accent md:col-span-1">
                  {w.index}
                </span>
                <h3 className="col-span-12 text-h3 md:col-span-3">{w.client}</h3>
                <p className="col-span-12 font-mono text-meta uppercase tracking-[0.08em] text-ink-30 md:col-span-3">
                  {w.sector} · {w.markets}
                </p>
                <p className="col-span-12 max-w-[44ch] text-ink-60 md:col-span-4 md:col-start-9">
                  {w.result}
                </p>
              </Link>
            </Rise>
          ))}
        </LedgerList>
        <Rise delay={200} className="mt-10">
          <ArrowLink href="/work">All work</ArrowLink>
        </Rise>
      </Section>

      {/* 05 — WHERE WE OPERATE ----------------------------------- */}
      <Section index="05" label="Where we operate">
        <div className="grid-12">
          <Rise className="col-span-12 lg:col-span-4">
            <p className="text-body-l text-balance">
              Every market is planned from catchment data, not a rate card.
            </p>
            <div className="mt-6">
              <ArrowLink href="/cities">See all cities</ArrowLink>
            </div>
          </Rise>

          <div className="col-span-12 mt-10 lg:col-span-7 lg:col-start-6 lg:mt-0">
            <ul className="grid grid-cols-2 gap-x-6 border-t border-rule sm:grid-cols-3">
              {cityLinks.map((c, i) => (
                <Rise
                  key={c.name}
                  as="li"
                  delay={Math.min(i, 8) * 40}
                  className="border-b border-rule"
                >
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="link-underline block py-4 text-h3"
                    >
                      {c.name}
                    </Link>
                  ) : (
                    <span className="block py-4 text-h3 text-ink-30">
                      {c.name}
                    </span>
                  )}
                </Rise>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 06 — ATLAS ---------------------------------------------- */}
      <Section index="06" label="Intelligence">
        <div className="grid-12">
          <Rise className="col-span-12 lg:col-span-5">
            <h3 className="text-display-l font-display">Atlas</h3>
            <p className="mt-8 max-w-[46ch] text-body-l text-ink-60">
              Atlas is our in-house intelligence layer. It maps brands,
              catchments, markets and media into one view, and every campaign
              this network plans is built on it.
            </p>
            <p className="mt-5 max-w-[46ch] text-ink-60">
              It is the reason our recommendations tend to be shorter than the
              proposals they compete against.
            </p>
            <div className="mt-8">
              <ArrowLink href="/atlas">Explore Atlas</ArrowLink>
            </div>
          </Rise>

          {/* Restrained product still — white base, hairline UI, violet only.
              Drawn rather than mocked so there is no device chrome or tilt. */}
          <Rise delay={120} className="col-span-12 mt-12 lg:col-span-6 lg:col-start-7 lg:mt-0">
            <ul className="border-t border-rule">
              {atlasModules.map((m) => (
                <li key={m.index} className="border-b border-rule py-5">
                  <div className="flex items-baseline gap-5">
                    <span className="font-mono text-meta text-accent">
                      {m.index}
                    </span>
                    <div>
                      <h4 className="text-h3">{m.title}</h4>
                      <p className="mt-1.5 max-w-[46ch] text-[0.9375rem] text-ink-60">
                        {m.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Rise>
        </div>
      </Section>

      {/* 07 — CLIENTS -------------------------------------------- */}
      <Section index="07" label="Selected clients">
        <ul className="grid grid-cols-2 border-t border-l border-rule sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((c, i) => (
            <li
              key={i}
              className="flex h-24 items-center justify-center border-r border-b border-rule"
            >
              <span className="font-mono text-meta uppercase tracking-[0.08em] text-ink-30 transition-colors hover:text-ink">
                {c}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-mono text-meta uppercase tracking-[0.08em] text-ink-30">
          Client marks to be added on written permission
        </p>
      </Section>

      {/* 08 — PERSPECTIVES --------------------------------------- */}
      <Section index="08" label="Perspectives">
        <LedgerList>
          {perspectives.map((p, i) => (
            <Rise key={p.title} as="li" delay={i * 60} className="border-t border-rule">
              <Link
                href={p.href}
                className="group grid-12 items-baseline gap-y-2 px-2 py-7 transition-colors hover:bg-paper-hover"
              >
                <time
                  dateTime={p.date}
                  className="col-span-12 font-mono text-meta uppercase tracking-[0.08em] text-ink-30 md:col-span-2"
                >
                  {p.dateLabel}
                </time>
                <h3 className="col-span-12 max-w-[40ch] text-h3 md:col-span-7">
                  {p.title}
                </h3>
                <span className="col-span-12 font-mono text-meta uppercase tracking-[0.08em] text-ink-30 md:col-span-2 md:col-start-11 md:text-right">
                  {p.category}
                </span>
              </Link>
            </Rise>
          ))}
        </LedgerList>
        <Rise delay={200} className="mt-10">
          <ArrowLink href="/perspectives">All perspectives</ArrowLink>
        </Rise>
      </Section>

      {/* 09 — CONTACT -------------------------------------------- */}
      <section className="shell pt-10 pb-28 md:pb-36">
        <Rise>
          <p className="text-display-l font-display">Start a conversation.</p>
        </Rise>
        <Rise delay={80} className="mt-14">
          <ContactLedger
            email={site.email}
            phone={site.phone}
            address={site.address}
          />
        </Rise>
      </section>
    </>
  );
}
