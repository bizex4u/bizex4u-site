import Link from "next/link";
import {
  ArrowLink,
  ButtonLink,
  ContactLedger,
  LedgerList,
  LedgerRow,
  Rise,
  Section,
} from "@/components/Ledger";
import FormatPlate, { formatSets } from "@/components/FormatPlate";
import {
  atlasModules,
  capabilities,
  perspectives,
  proofStats,
  sectorsServed,
  selectedWork,
  site,
} from "@/lib/site";
import { additionalMarkets, cities } from "@/lib/cities";

/* Format plates attach to the capabilities they describe. */
const platesFor: Record<string, keyof typeof formatSets> = {
  "01": "outdoor",
  "02": "dooh",
  "03": "retail",
  "04": "broadcast",
};

export default function Home() {
  const cityLinks: { name: string; href?: string }[] = [
    ...cities.map((c) => ({ name: c.name, href: `/cities/${c.slug}` })),
    ...additionalMarkets.map((name) => ({ name })),
  ];

  return (
    <>
      {/* 01 — HERO -----------------------------------------------
          Trimmed from a full viewport. The first pass left a dead
          band of 300px between the standfirst and the fold, which
          read as an unfinished page rather than as confidence. */}
      <section className="shell pt-34 pb-16 md:pt-44 md:pb-24">
        <Rise className="border-t border-ink pt-4">
          <p className="eyebrow-ink">
            Independent Media Network — India — Est. {site.founded}
          </p>
        </Rise>

        <div className="grid-12 mt-12 md:mt-16">
          <Rise delay={60} className="col-span-12 lg:col-span-10">
            <h1 className="text-display-xl font-display text-balance">
              We put brands where India actually is.
            </h1>
          </Rise>
        </div>

        <div className="grid-12 mt-12">
          <Rise delay={120} className="col-span-12 lg:col-span-5">
            <p className="text-body-l text-ink-70">
              Bizex4U plans, negotiates and runs outdoor, retail and broadcast
              campaigns across India. We have done it for seventeen years — and
              we structure the commercials so clients spend less cash doing it.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <ButtonLink href="/contact">Start a conversation</ButtonLink>
              <ArrowLink href="/barter">How the barter model works</ArrowLink>
            </div>
          </Rise>

          {/* The formats we sell, drawn at true proportion. Gives the
              hero something to look at that is actually the product. */}
          <Rise
            delay={200}
            className="col-span-12 mt-14 hidden lg:col-span-6 lg:col-start-7 lg:mt-2 lg:block"
          >
            <p className="eyebrow mb-6">A sample of what we buy</p>
            <FormatPlate formats={formatSets.outdoor} />
          </Rise>
        </div>
      </section>

      {/* 02 — PROOF ----------------------------------------------
          The trust-authority pattern puts proof directly after the
          hero, before anything is explained. The first pass buried
          credibility at position 07. */}
      <section className="border-y border-ink bg-paper-2 py-16 md:py-20">
        <div className="shell">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {proofStats.map((s, i) => (
              <Rise key={s.label} delay={i * 70}>
                <dt className="eyebrow">{s.label}</dt>
                {/* Sized to the longest value ("Independent"), not to the
                    shortest — display-l clipped it at the grid edge. */}
                <dd className="mt-3 font-display text-[clamp(1.375rem,6vw,3.25rem)] leading-[1] font-semibold tracking-[-0.035em] lg:text-[clamp(2rem,3.4vw,3.25rem)]">
                  {s.value}
                </dd>
                <p className="mt-2 max-w-[24ch] text-[0.9375rem] text-ink-70">
                  {s.note}
                </p>
              </Rise>
            ))}
          </dl>

          <Rise delay={300} className="mt-16 border-t border-rule-strong pt-5">
            <p className="eyebrow mb-4">Categories we have run campaigns for</p>
            <p className="max-w-[80ch] text-body-l">
              {sectorsServed.join(" · ")}
            </p>
            <p className="mt-4 text-[0.9375rem] text-ink-70">
              Client names and campaign results are published only with written
              permission. Ask and we will show you the documentation.
            </p>
          </Rise>
        </div>
      </section>

      {/* 03 — THE NETWORK ---------------------------------------- */}
      <Section index="03" label="What we do" size="large">
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
              aside={
                platesFor[c.index] ? (
                  <FormatPlate formats={formatSets[platesFor[c.index]]} />
                ) : undefined
              }
            />
          ))}
        </LedgerList>
      </Section>

      {/* 04 — POSITION ------------------------------------------- */}
      <section className="bg-ink py-(--spacing-section-lg) text-paper">
        <div className="shell grid-12">
          <Rise className="col-span-12 lg:col-span-10 lg:col-start-2">
            <p className="font-display text-display-l text-balance">
              Most media is bought with cash.
              <br />
              It does not have to be.
            </p>
            <p className="mt-10 max-w-[52ch] text-body-l text-paper-dim">
              Bizex4U converts what a business already owns — finished goods,
              unsold stock, capacity, vouchers — into media across India, at a
              value agreed in writing before anything moves.
            </p>
            <div className="mt-10">
              <ButtonLink href="/barter" tone="paper">
                Our commercial model
              </ButtonLink>
            </div>
          </Rise>
        </div>
      </section>

      {/* 05 — SELECTED WORK -------------------------------------- */}
      <Section index="05" label="Selected work">
        <LedgerList>
          {selectedWork.map((w, i) => (
            <Rise key={w.index} as="li" delay={i * 60} className="border-t border-rule">
              <Link
                href={w.href}
                className="group -mx-3 grid-12 items-baseline gap-y-3 px-3 py-8 transition-colors duration-200 hover:bg-paper-hover md:py-10"
              >
                <span className="col-span-12 font-mono text-meta text-ink-50 transition-colors group-hover:text-accent-text md:col-span-1">
                  {w.index}
                </span>
                <h3 className="col-span-12 text-h3 md:col-span-3">{w.client}</h3>
                <p className="col-span-12 font-mono text-meta uppercase tracking-[0.09em] text-ink-50 md:col-span-3">
                  {w.sector} · {w.markets}
                </p>
                <p className="col-span-12 max-w-[44ch] text-ink-70 md:col-span-4 md:col-start-9">
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

      {/* 06 — WHERE WE OPERATE ----------------------------------- */}
      <Section index="06" label="Where we operate" tone="recessed">
        <div className="grid-12">
          <Rise className="col-span-12 lg:col-span-4">
            <p className="text-h2 text-balance">
              Every market is planned from catchment data, not a rate card.
            </p>
            <div className="mt-8">
              <ArrowLink href="/cities">See all cities</ArrowLink>
            </div>
          </Rise>

          <div className="col-span-12 mt-12 lg:col-span-7 lg:col-start-6 lg:mt-0">
            <ul className="grid grid-cols-2 gap-x-8 border-t border-rule-strong sm:grid-cols-3">
              {cityLinks.map((c, i) => (
                <Rise
                  key={c.name}
                  as="li"
                  delay={Math.min(i, 8) * 40}
                  className="border-b border-rule"
                >
                  {c.href ? (
                    <Link href={c.href} className="link-underline block py-4 text-h3">
                      {c.name}
                    </Link>
                  ) : (
                    <span className="block py-4 text-h3 text-ink-50">
                      {c.name}
                    </span>
                  )}
                </Rise>
              ))}
            </ul>
            <p className="mt-5 text-[0.9375rem] text-ink-70">
              Markets in grey are planned and bought regularly; their pages are
              being written.
            </p>
          </div>
        </div>
      </Section>

      {/* 07 — ATLAS ---------------------------------------------- */}
      <Section index="07" label="Intelligence">
        <div className="grid-12">
          <Rise className="col-span-12 lg:col-span-5">
            <h3 className="font-display text-display-l">Atlas</h3>
            <p className="mt-8 max-w-[46ch] text-body-l text-ink-70">
              Atlas is our in-house intelligence layer. It maps brands,
              catchments, markets and media into one view, and every campaign
              this network plans is built on it.
            </p>
            <p className="mt-5 max-w-[46ch] text-ink-70">
              It is the reason our recommendations tend to be shorter than the
              proposals they compete against.
            </p>
            <div className="mt-9">
              <ArrowLink href="/atlas">Explore Atlas</ArrowLink>
            </div>
          </Rise>

          <Rise
            delay={120}
            className="col-span-12 mt-12 lg:col-span-6 lg:col-start-7 lg:mt-0"
          >
            <ul className="border-t border-rule-strong">
              {atlasModules.map((m) => (
                <li key={m.index} className="border-b border-rule py-6">
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-meta text-accent-text">
                      {m.index}
                    </span>
                    <div>
                      <h4 className="text-h3">{m.title}</h4>
                      <p className="mt-2 max-w-[46ch] text-[0.9375rem] text-ink-70">
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

      {/* 08 — PERSPECTIVES --------------------------------------- */}
      <Section index="08" label="Perspectives" tone="recessed">
        <ul className="border-b border-rule">
          {perspectives.map((p, i) => (
            <Rise key={p.title} as="li" delay={i * 60} className="border-t border-rule">
              <Link
                href={p.href}
                className="group -mx-3 grid-12 items-baseline gap-y-2 px-3 py-8 transition-colors duration-200 hover:bg-paper-hover"
              >
                <time
                  dateTime={p.date}
                  className="col-span-12 font-mono text-meta uppercase tracking-[0.09em] text-ink-50 md:col-span-2"
                >
                  {p.dateLabel}
                </time>
                <h3 className="col-span-12 max-w-[40ch] text-h3 md:col-span-7">
                  {p.title}
                </h3>
                <span className="col-span-12 font-mono text-meta uppercase tracking-[0.09em] text-ink-50 md:col-span-2 md:col-start-11 md:text-right">
                  {p.category}
                </span>
              </Link>
            </Rise>
          ))}
        </ul>
        <Rise delay={200} className="mt-10">
          <ArrowLink href="/perspectives">All perspectives</ArrowLink>
        </Rise>
      </Section>

      {/* 09 — CONTACT -------------------------------------------- */}
      <section className="shell py-(--spacing-section)">
        <Rise>
          <p className="font-display text-display-l text-balance">
            Start a conversation.
          </p>
          <div className="mt-9">
            <ButtonLink href="/contact">Tell us what you need</ButtonLink>
          </div>
        </Rise>
        <Rise delay={80} className="mt-16">
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
