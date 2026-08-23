import Link from "next/link";
import Image from "next/image";
import {
  ArrowLink,
  ButtonLink,
  ContactLedger,
  LedgerList,
  LedgerRow,
  Rise,
  Section,
} from "@/components/Ledger";
import HeroReel from "@/components/HeroReel";
import FormatPlate, { formatSets } from "@/components/FormatPlate";
import {
  atlasModules,
  capabilities,
  perspectives,
  proofFrames,
  proofStats,
  sectorsServed,
  site,
} from "@/lib/site";
import { additionalMarkets, cities } from "@/lib/cities";

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

  /* Outdoor leads the page. Barter is one capability among six and lives
     on its own page — it is the commercial model, not the product. */
  const outdoorFirst = capabilities;

  return (
    <>
      {/* 01 — HERO ------------------------------------------------
          Full-bleed reel of live sites. Type sits on a real gradient,
          not a token overlay — the footage is bright daylight. */}
      <section
        data-hero
        className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden"
      >
        <HeroReel />

        <div data-hero-copy className="shell relative z-10 pt-32 pb-14 md:pb-20">
          <Rise className="max-w-[20ch] border-t border-paper/40 pt-4 md:max-w-none">
            <p className="font-mono text-meta uppercase tracking-[0.09em] text-paper">
              Outdoor Advertising Across India — Independent Since{" "}
              {site.founded}
            </p>
          </Rise>

          <div className="grid-12 mt-8">
            <Rise delay={60} className="col-span-12 lg:col-span-9">
              {/* Accuracy note: an earlier draft read "we own the places it
                  passes". Bizex4U plans and buys this media, it does not
                  own the sites. Do not reinstate that line. */}
              <h1 className="font-display text-display-xl text-balance text-paper">
                We put brands where India actually is.
              </h1>
            </Rise>
          </div>

          <div className="grid-12 mt-10">
            <Rise delay={120} className="col-span-12 lg:col-span-5">
              <p className="text-body-l text-paper-dim">
                Hoardings, LED, transit and retail media planned, bought and
                proven across 40+ Indian cities. Seventeen years of it.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-11 items-center gap-2.5 rounded-[2px] bg-paper px-6 py-4 font-mono text-meta uppercase tracking-[0.09em] text-ink transition-colors duration-200 hover:bg-white"
                >
                  Talk on WhatsApp
                  <span className="row-arrow">→</span>
                </a>
                <Link
                  href="/what-we-do"
                  className="link-underline -my-3 inline-flex min-h-11 items-center py-3 font-mono text-meta uppercase tracking-[0.09em] text-paper"
                >
                  See what we buy <span className="row-arrow">→</span>
                </Link>
              </div>
            </Rise>
          </div>
        </div>
      </section>

      {/* Everything below rises over the pinned hero, so it needs its own
          stacking context and an opaque ground. */}
      <div className="relative z-10 bg-paper">
      {/* 02 — PROOF ---------------------------------------------- */}
      <section className="border-b border-ink bg-paper-2 py-16 md:py-20">
        <div className="shell">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {proofStats.map((s, i) => (
              <Rise key={s.label} delay={i * 70}>
                <dt className="eyebrow">{s.label}</dt>
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
          </Rise>
        </div>
      </section>

      {/* 03 — WHAT WE BUY ---------------------------------------- */}
      <Section index="03" label="What we buy" size="large">
        <LedgerList>
          {outdoorFirst.map((c, i) => (
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

      {/* 04 — CITIES --------------------------------------------- */}
      <Section index="04" label="Where we operate" tone="recessed">
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
          </div>
        </div>
      </Section>

      {/* 05 — PROOF OF DELIVERY ----------------------------------
          Kept deliberately small. The overlays are the argument. */}
      <Section index="05" label="Proof of delivery">
        <div className="grid-12">
          <Rise className="col-span-12 lg:col-span-4">
            <p className="text-body-l">
              Every placement is photographed on site, geo-tagged and dated.
              You get the file, not a summary.
            </p>
            <p className="mt-4 max-w-[38ch] text-[0.9375rem] text-ink-70">
              Where a screen is digital, we verify the run date against that
              morning&rsquo;s newspaper in frame.
            </p>
          </Rise>

          <ul className="col-span-12 mt-10 grid grid-cols-2 gap-4 lg:col-span-7 lg:col-start-6 lg:mt-0 lg:grid-cols-4">
            {proofFrames.map((f, i) => (
              <Rise key={f.src} as="li" delay={i * 60}>
                <div className="relative aspect-square overflow-hidden rounded-[3px] bg-paper-2">
                  <Image
                    src={f.src}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 1024px) 12vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-2.5 text-[0.8125rem] leading-snug font-medium">
                  {f.place}
                </p>
                <p className="font-mono text-[0.6875rem] leading-snug tracking-[0.06em] text-ink-50">
                  {f.stamp}
                </p>
              </Rise>
            ))}
          </ul>
        </div>
      </Section>

      {/* 06 — THE COMMERCIAL MODEL (barter lives on its own page) */}
      <section className="bg-ink py-(--spacing-section-lg) text-paper">
        <div className="shell grid-12">
          <Rise className="col-span-12 lg:col-span-10 lg:col-start-2">
            <p className="eyebrow mb-8 text-paper-dim">06 — And one more thing</p>
            <p className="font-display text-display-l text-balance">
              You can pay for all of this without cash.
            </p>
            <p className="mt-10 max-w-[52ch] text-body-l text-paper-dim">
              We take finished goods, unsold stock, capacity or vouchers
              against media value — contracted, GST-compliant, and valued in
              writing before anything moves. It is a separate conversation,
              and it has its own page.
            </p>
            <div className="mt-10">
              <ButtonLink href="/barter" tone="paper">
                How barter works
              </ButtonLink>
            </div>
          </Rise>
        </div>
      </section>

      {/* 07 — ATLAS ---------------------------------------------- */}
      <Section index="07" label="How we plan">
        <div className="grid-12">
          <Rise className="col-span-12 lg:col-span-5">
            <h3 className="font-display text-display-l">Atlas</h3>
            <p className="mt-8 max-w-[46ch] text-body-l text-ink-70">
              Our in-house intelligence layer. It maps brands, catchments,
              markets and media into one view, and every campaign this
              network plans is built on it.
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
            Tell us the market and the objective.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-2.5 rounded-[2px] bg-ink px-6 py-4 font-mono text-meta uppercase tracking-[0.09em] text-paper transition-colors duration-200 hover:bg-accent-text"
            >
              Talk on WhatsApp
              <span className="row-arrow">→</span>
            </a>
            <ArrowLink href="/contact">Or send a brief</ArrowLink>
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
      </div>
    </>
  );
}
