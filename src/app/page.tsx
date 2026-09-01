import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Band, Btn, Eyebrow, Rise } from "@/components/UI";
import { capabilities, proofStats, site } from "@/lib/site";
import { organisationId, speakable } from "@/lib/schema";
import { cities } from "@/lib/cities";
import { heroPlate } from "@/lib/streets";
import BriefButton from "@/components/BriefButton";
import BrandStrip from "@/components/BrandStrip";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: {
    absolute: `Bizex4U — Independent OOH planning and buying`,
  },
  description: site.description,
};

const core = capabilities.filter((c) => c.href.startsWith("/what-we-do/")).slice(0, 4);
const featuredMarkets = cities.slice(0, 6);

export default function Home() {
  return (
    <>
      {/* Hero job: read the claim, request a plan. The right plate
          is atmosphere — one own arterial frame, contained, washed,
          not a competing CTA. Motion stays off: the Delhi reel
          carries licensed talent and would pull the eye off the
          buttons. */}
      <section className="relative bg-sand pt-14 text-on-sand md:pt-16">
        <div className="shell">
          <div className="grid-12 items-center gap-y-10 py-10 lg:min-h-[calc(100svh-10.5rem)] lg:gap-x-14">
            <div className="col-span-12 flex flex-col justify-center lg:col-span-6 lg:pr-4">
              <Rise>
                <Eyebrow>Independent OOH planning and buying</Eyebrow>
              </Rise>
              <h1 className="mt-5 max-w-[16ch] font-display text-display-xl text-balance">
                {site.tagline}
              </h1>
              <Rise delay={80}>
                <p className="speakable-answer mt-6 max-w-[40ch] text-body-l text-on-sand-dim">
                  We do not own inventory. We plan the outdoor buy across
                  owners, negotiate, run it, and photograph that it ran.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <BriefButton size="lg" context="A plan for my market">
                    Request a plan
                  </BriefButton>
                  <Btn href="/what-we-do" variant="outline-plum" size="lg">
                    How we work
                  </Btn>
                </div>
              </Rise>
            </div>

            <Rise delay={80} className="col-span-12 lg:col-span-6">
              <figure>
                <div className="relative aspect-3/2 overflow-hidden bg-sand-2">
                  <Image
                    src={heroPlate.src}
                    alt={heroPlate.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 44vw, 92vw"
                    className="object-cover object-[72%_48%] saturate-[0.82]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-sand/10"
                  />
                </div>
                <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="font-mono text-micro tracking-[0.1em] text-on-sand-dim uppercase">
                    {heroPlate.city}
                  </p>
                  <p className="text-caption text-on-sand-dim">
                    Photographed on site while it ran.
                  </p>
                </figcaption>
              </figure>
            </Rise>
          </div>
        </div>

        <div className="shell">
          <dl className="grid grid-cols-2 border-t border-rule-sand lg:grid-cols-4">
            {proofStats.map((s, i) => (
              <div
                key={s.label}
                className={`py-5 pr-6 lg:py-6 lg:pr-8 ${
                  i % 2 === 0 ? "border-r border-rule-sand" : ""
                } ${i < 2 ? "border-b border-rule-sand lg:border-b-0" : ""} ${
                  i < 3 ? "lg:border-r lg:border-rule-sand" : ""
                }`}
              >
                <Eyebrow as="dt" muted>
                  {s.label}
                </Eyebrow>
                <dd className="mt-2 font-display text-h2">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <BrandStrip />

      <Band tone="plum">
        <Rise>
          <Eyebrow tone="plum">What we plan</Eyebrow>
          <h2 className="mt-4 max-w-[18ch] font-display text-h1 text-balance">
            Outdoor first.
          </h2>
        </Rise>
        <ul className="mt-10 border-t border-rule-plum">
          {core.map((c, i) => (
            <Rise key={c.href} as="li" delay={i * 40}>
              <Link
                href={c.href}
                className="group grid grid-cols-12 items-baseline gap-x-6 border-b border-rule-plum py-5"
              >
                <span className="col-span-2 font-mono text-micro tracking-[0.1em] text-violet-lift uppercase md:col-span-1">
                  {c.index}
                </span>
                <span className="col-span-10 font-sans text-h3 md:col-span-5">
                  {c.title}
                </span>
                <span className="col-span-12 mt-2 text-body-s text-on-plum-dim md:col-span-5 md:mt-0">
                  {c.short}
                </span>
                <span className="col-span-12 mt-2 font-mono text-micro text-violet-lift uppercase md:col-span-1 md:mt-0 md:text-right">
                  →
                </span>
              </Link>
            </Rise>
          ))}
        </ul>
        <Rise delay={160}>
          <p className="mt-8">
            <Link
              href="/what-we-do"
              className="link-underline text-body-s font-medium text-on-plum"
            >
              How a buy is decided
            </Link>
          </p>
        </Rise>
      </Band>

      <Band tone="sand">
        <div className="grid-12 items-end">
          <Rise className="col-span-12 lg:col-span-8">
            <Eyebrow>Markets</Eyebrow>
            <h2 className="mt-4 font-display text-h1 text-balance">
              City by city. Not a national rate card.
            </h2>
          </Rise>
          <div className="col-span-12 mt-6 lg:col-span-3 lg:col-start-10 lg:mt-0 lg:text-right">
            <Btn href="/cities" variant="outline-plum">
              All markets
            </Btn>
          </div>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-x-10 border-t border-rule-sand sm:grid-cols-2">
          {featuredMarkets.map((c, i) => (
            <Rise key={c.slug} as="li" delay={i * 30}>
              <Link
                href={`/cities/${c.slug}`}
                className="group flex items-baseline justify-between gap-4 border-b border-rule-sand py-4"
              >
                <span className="link-underline text-h3">{c.name}</span>
                <span className="font-mono text-micro tracking-[0.08em] text-on-sand-dim uppercase">
                  {c.state}
                </span>
              </Link>
            </Rise>
          ))}
        </ul>
      </Band>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${site.url}/#webpage`,
            url: site.url,
            name: `Bizex4U — Independent OOH planning and buying`,
            description: site.description,
            isPartOf: { "@id": `${site.url}/#website` },
            about: { "@id": organisationId },
            inLanguage: "en-IN",
            dateModified: site.contentReviewed,
            speakable,
          }),
        }}
      />
    </>
  );
}
