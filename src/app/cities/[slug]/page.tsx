import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Band, Btn, Card, Eyebrow, Rise } from "@/components/UI";
import { Faq } from "@/components/Ledger";
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
      {/* HERO ---------------------------------------------------- */}
      <section className="grain relative overflow-hidden bg-sand pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="shell relative z-10">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap gap-2 font-mono text-[0.75rem] tracking-[0.08em] text-on-sand-dim uppercase">
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
              <li className="text-violet-deep">{city.name}</li>
            </ol>
          </nav>

          <div className="grid-12 items-end gap-y-10">
            <div className="col-span-12 lg:col-span-7">
              <Rise>
                <Eyebrow>Cities — {city.state}</Eyebrow>
              </Rise>
              <Rise delay={60}>
                <h1 className="mt-6 font-display text-display-xl text-balance">
                  Advertising in{" "}
                  <span className="em-serif text-violet-deep">{city.name}</span>
                  .
                </h1>
              </Rise>
              <Rise delay={120}>
                <p className="mt-7 max-w-[52ch] text-body-l text-on-sand-dim">
                  {city.heroLede}
                </p>
                <div className="mt-9">
                  <Btn href={site.whatsapp} external size="lg">
                    Get a plan for {city.name}
                  </Btn>
                </div>
              </Rise>
            </div>

            <Rise delay={180} className="col-span-12 lg:col-span-4 lg:col-start-9">
              <Card>
                <p className="eyebrow text-on-sand-dim">Also planned nearby</p>
                <p className="mt-4 text-h3 text-on-sand-dim">
                  {city.nearby.join(" · ")}
                </p>
              </Card>
            </Rise>
          </div>
        </div>
      </section>

      {/* 01 — THE MARKET ----------------------------------------- */}
      <Band tone="sand2" grain>
        <div className="grid-12 gap-y-8">
          <Rise className="col-span-12 lg:col-span-3">
            <Eyebrow>The market</Eyebrow>
          </Rise>
          <div className="col-span-12 grid gap-x-8 gap-y-6 lg:col-span-8 lg:col-start-5 lg:grid-cols-2">
            {city.market.map((para, i) => (
              <Rise key={i} delay={i * 60}>
                <p
                  className={
                    i === 0 ? "text-body-l" : "text-on-sand-dim"
                  }
                >
                  {para}
                </p>
              </Rise>
            ))}
          </div>
        </div>
      </Band>

      {/* 02 — WHERE THE CROWDS ARE -------------------------------
          The section a local reads to decide whether we actually know
          their city. Places and crowds only — never a site we hold. */}
      <Band tone="plum" grain>
        <div className="grid-12 items-end">
          <Rise className="col-span-12 lg:col-span-7">
            <Eyebrow tone="plum" deva="भीड़ कहाँ है">
              Where the crowds are
            </Eyebrow>
            <h2 className="mt-5 font-display text-display-l text-balance">
              The places {city.name}{" "}
              <span className="em-serif">actually gathers</span>.
            </h2>
          </Rise>
          <p className="col-span-12 mt-5 max-w-[42ch] text-body-l text-on-plum-dim lg:col-span-5 lg:mt-0">
            Not a site list. These are the parts of the city where people
            concentrate, and why — the starting point for any plan worth
            arguing about.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {city.crowdPlaces.map((p, i) => (
            <Rise key={p.place} as="li" delay={i * 45}>
              <div className="h-full rounded-(--radius-card) bg-plum-2 p-6 md:p-7">
                <h3 className="font-display text-h2 text-balance">{p.place}</h3>
                <p className="mt-3 text-on-plum-dim">{p.note}</p>
              </div>
            </Rise>
          ))}
        </ul>
      </Band>

      {/* 03 — PRESS AND RADIO ------------------------------------ */}
      <Band tone="sand" grain>
        <div className="grid-12 items-end">
          <Rise className="col-span-12 lg:col-span-7">
            <Eyebrow deva="अख़बार और रेडियो">The local press and radio</Eyebrow>
            <h2 className="mt-5 font-display text-display-l text-balance">
              What {city.name}{" "}
              <span className="em-serif text-violet-deep">reads and hears</span>
              .
            </h2>
          </Rise>
          <p className="col-span-12 mt-5 max-w-[44ch] text-body-l text-on-sand-dim lg:col-span-5 lg:mt-0">
            The regional titles carry most of the local weight, and being in
            the right one transfers some of its standing to you. We publish no
            circulation or listenership figures — those are licensed research
            numbers, and we will show you the current ones at planning.
          </p>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-12 lg:grid-cols-2">
          <div>
            <Rise>
              <p className="eyebrow text-on-sand-dim">Newspapers</p>
            </Rise>
            <ul className="mt-5 border-t border-rule-sand">
              {city.localMedia.press.map((t, i) => (
                <Rise key={t.title} as="li" delay={i * 45}>
                  <div className="border-b border-rule-sand py-5">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-h3">{t.title}</h3>
                      <span className="font-mono text-[0.6875rem] tracking-[0.08em] text-violet-deep uppercase">
                        {t.language}
                      </span>
                    </div>
                    <p className="mt-2 max-w-[52ch] text-[0.9375rem] text-on-sand-dim">
                      {t.note}
                    </p>
                  </div>
                </Rise>
              ))}
            </ul>
          </div>

          <div>
            <Rise>
              <p className="eyebrow text-on-sand-dim">Radio</p>
            </Rise>
            <ul className="mt-5 border-t border-rule-sand">
              {city.localMedia.radio.map((r, i) => (
                <Rise key={r.station} as="li" delay={i * 45}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule-sand py-4">
                    <h3 className="text-h3">{r.station}</h3>
                    <p className="max-w-[34ch] text-[0.9375rem] text-on-sand-dim">
                      {r.note}
                    </p>
                  </div>
                </Rise>
              ))}
            </ul>
            <Rise delay={200}>
              <p className="mt-6 max-w-[52ch] text-[0.9375rem] text-on-sand-dim">
                {city.localMedia.radioNote}
              </p>
            </Rise>
          </div>
        </div>
      </Band>

      {/* 04 — FORMATS -------------------------------------------- */}
      <Band tone="sand2" grain>
        <div className="grid-12 gap-y-10">
          <Rise className="col-span-12 lg:col-span-4">
            <Eyebrow>What we plan here</Eyebrow>
            <h2 className="mt-5 max-w-[16ch] font-display text-display-l text-balance">
              Usually two or three,{" "}
              <span className="em-serif text-violet-deep">not all five</span>.
            </h2>
          </Rise>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <ul className="border-t border-rule-sand">
              {city.formats.map((f, i) => (
                <Rise key={f.title} as="li" delay={i * 50}>
                  <div className="grid grid-cols-12 gap-x-5 gap-y-2 border-b border-rule-sand py-5">
                    <span className="col-span-12 font-mono text-[0.8125rem] tracking-[0.08em] text-violet-deep md:col-span-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="col-span-12 text-h3 md:col-span-4">
                      {f.title}
                    </h3>
                    <p className="col-span-12 text-[0.9375rem] text-on-sand-dim md:col-span-7">
                      {f.note}
                    </p>
                  </div>
                </Rise>
              ))}
            </ul>
          </div>
        </div>
      </Band>

      {/* 05 — HOW WE PLAN IT ------------------------------------- */}
      <Band tone="violet" grain>
        <div className="grid-12 items-end gap-y-8">
          <Rise className="col-span-12 lg:col-span-5">
            <Eyebrow tone="violet">How we plan {city.name}</Eyebrow>
            <h2 className="mt-5 max-w-[16ch] font-display text-display-l text-balance">
              Catchment first,{" "}
              <span className="em-serif">sites afterwards</span>.
            </h2>
          </Rise>
          <Rise delay={80} className="col-span-12 lg:col-span-6 lg:col-start-7">
            <p className="max-w-[58ch] text-body-l">{city.planning}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Btn href={site.whatsapp} external variant="sand" size="lg">
                Get a plan for {city.name}
              </Btn>
              <Btn href="/what-we-do" variant="outline-sand" size="lg">
                How we plan a market
              </Btn>
            </div>
          </Rise>
        </div>
      </Band>

      {/* 06 — FAQ ------------------------------------------------ */}
      <Band tone="sand" grain>
        <Rise>
          <Eyebrow deva="सवाल">Questions</Eyebrow>
          <h2 className="mt-5 max-w-[24ch] font-display text-display-l text-balance">
            The ones people{" "}
            <span className="em-serif text-violet-deep">actually ask</span>.
          </h2>
        </Rise>
        <div className="mt-12">
          <Faq items={city.faq} />
        </div>
      </Band>

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
