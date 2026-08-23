import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLink,
  ContactLedger,
  Faq,
  LedgerList,
  LedgerRow,
  PageHero,
  Rise,
  Section,
} from "@/components/Ledger";
import { cities, cityBySlug } from "@/lib/cities";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const city = cityBySlug(slug);
  if (!city) return {};
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `/cities/${city.slug}` },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `${site.url}/cities/${city.slug}`,
    },
  };
}

export default async function CityPage({ params }: Params) {
  const { slug } = await params;
  const city = cityBySlug(slug);
  if (!city) notFound();

  return (
    <>
      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="shell pt-28 md:pt-32"
      >
        <ol className="flex gap-2 font-mono text-meta uppercase tracking-[0.08em] text-ink-30">
          <li>
            <Link href="/" className="link-underline">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/cities" className="link-underline">
              Cities
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-ink-60">{city.name}</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={`Cities — ${city.state}`}
        title={`Advertising in ${city.name}.`}
        lede={city.heroLede}
      />

      {/* 01 — THE MARKET ----------------------------------------- */}
      <Section index="01" label="The market">
        <div className="grid-12 gap-y-8">
          {city.market.map((para, i) => (
            <Rise
              key={i}
              delay={i * 60}
              className={`col-span-12 md:col-span-6 ${
                i % 2 === 1 ? "md:col-start-7" : "md:col-start-1"
              }`}
            >
              <p
                className={
                  i === 0 ? "text-body-l" : "text-body-l text-ink-60"
                }
              >
                {para}
              </p>
            </Rise>
          ))}
        </div>
      </Section>

      {/* 02 — FORMATS -------------------------------------------- */}
      <Section index="02" label={`Formats we plan in ${city.name}`}>
        <LedgerList>
          {city.formats.map((f, i) => (
            <LedgerRow
              key={f.title}
              index={String(i + 1).padStart(2, "0")}
              title={f.title}
              body={f.note}
              titleClass="text-h3"
              delay={i * 60}
            />
          ))}
        </LedgerList>
      </Section>

      {/* 03 — HOW WE PLAN IT ------------------------------------- */}
      <Section index="03" label={`How we plan ${city.name}`}>
        <div className="grid-12">
          <Rise className="col-span-12 lg:col-span-7">
            <p className="text-body-l">{city.planning}</p>
            <div className="mt-8">
              <ArrowLink href="/atlas">How Atlas works</ArrowLink>
            </div>
          </Rise>
        </div>
      </Section>

      {/* 04 — WORK ----------------------------------------------- */}
      <Section index="04" label="Work in this market">
        <Rise className="grid-12">
          <p className="col-span-12 text-body-l text-ink-60 lg:col-span-6">
            Campaign documentation for this market is available on request,
            subject to client permission.
          </p>
          <div className="col-span-12 mt-6 lg:col-span-4 lg:col-start-8 lg:mt-0">
            <ArrowLink href="/work">Selected work</ArrowLink>
          </div>
        </Rise>
      </Section>

      {/* 05 — FAQ ------------------------------------------------ */}
      <Section index="05" label="Questions">
        <Faq items={city.faq} />
      </Section>

      {/* 06 — CTA + NEARBY --------------------------------------- */}
      <section className="shell pt-8 pb-28 md:pb-36">
        <Rise>
          <p className="text-display-l font-display text-balance">
            Planning something in {city.name}?
          </p>
        </Rise>
        <Rise delay={80} className="mt-14">
          <ContactLedger
            email={site.email}
            phone={site.phone}
            address={site.address}
          />
        </Rise>
        <Rise delay={140} className="mt-16 border-t border-rule pt-4">
          <p className="eyebrow">Nearby markets</p>
          <p className="mt-3 text-ink-60">{city.nearby.join(" · ")}</p>
        </Rise>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: `Advertising and media planning in ${city.name}`,
              provider: {
                "@type": "Organization",
                name: site.name,
                url: site.url,
                email: site.email,
                telephone: site.phone,
              },
              areaServed: {
                "@type": "City",
                name: city.name,
                containedInPlace: {
                  "@type": "AdministrativeArea",
                  name: city.state,
                },
              },
              url: `${site.url}/cities/${city.slug}`,
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: site.url },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Cities",
                  item: `${site.url}/cities`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: city.name,
                  item: `${site.url}/cities/${city.slug}`,
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: city.faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]),
        }}
      />
    </>
  );
}
