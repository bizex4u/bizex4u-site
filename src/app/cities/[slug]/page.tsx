import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Band, Btn, Eyebrow, Rise, SectionHead } from "@/components/UI";
import Image from "next/image";
import { framesFor } from "@/lib/streets";
import { Faq } from "@/components/Ledger";
import { cities, cityBySlug } from "@/lib/cities";
import { termsForCity } from "@/lib/glossary";
import { site } from "@/lib/site";
import { organisationId, speakable } from "@/lib/schema";
import AskAssistants from "@/components/AskAssistants";
import BriefForm from "@/components/BriefForm";
import PageIndex from "@/components/PageIndex";
import { Disclosure } from "@/components/Disclosure";
import { MediaName } from "@/components/MediaName";
import { routeMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  { params }: Params,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const city = cityBySlug(slug);
  if (!city) return {};
  return routeMetadata(parent, {
    path: `/cities/${city.slug}`,
    title: city.metaTitle,
    description: city.metaDescription,
    ogType: "website",
    inheritOgImages: false,
  });
}

/* A nearby market that has its own page becomes a link; one that does
   not stays as text. Internal links between city pages are the cheapest
   real ranking signal available here, and a link to a page that does not
   exist is worse than no link at all. */
function Nearby({ names }: { names: string[] }) {
  const bySlug = new Map(cities.map((c) => [c.name.toLowerCase(), c.slug]));
  return (
    <p className="mt-2 text-body-s text-on-sand-dim">
      {names.map((n, i) => {
        const slug = bySlug.get(n.toLowerCase());
        return (
          <span key={n}>
            {i > 0 && <span aria-hidden> · </span>}
            {slug ? (
              <Link href={`/cities/${slug}`} className="link-underline">
                {n}
              </Link>
            ) : (
              n
            )}
          </span>
        );
      })}
    </p>
  );
}

export default async function CityPage({ params }: Params) {
  const { slug } = await params;
  const city = cityBySlug(slug);
  if (!city) notFound();

  const glossaryTerms = termsForCity(city.slug);

  /* Built here rather than in the component so the labels can use the
     city's own name, and so a section that stops existing on some city
     cannot leave a link pointing at nothing. */
  const index = [
    { id: "market", label: "The market" },
    { id: "crowds", label: "Where the crowds are" },
    { id: "formats", label: "Formats" },
    { id: "press", label: "Press & radio" },
    { id: "transit", label: "Transit" },
    { id: "cost", label: "What it costs" },
    { id: "permission", label: "Permissions" },
    { id: "year", label: "The year" },
    { id: "plan", label: "Request a plan" },
  ];

  const frames = framesFor(city.name);

  return (
    <>
      <section className="relative bg-sand pt-14 text-on-sand md:pt-16">
        <div className="shell">
          <nav aria-label="Breadcrumb" className="py-4">
            <ol className="flex flex-wrap gap-2 eyebrow text-on-sand-dim">
              <li>
                <Link
                  href="/"
                  className="link-underline -my-2 inline-flex min-h-8 items-center py-2"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href="/cities"
                  className="link-underline -my-2 inline-flex min-h-8 items-center py-2"
                >
                  Markets
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-violet-deep">{city.name}</li>
            </ol>
          </nav>

          <div className="grid-12 items-start gap-y-8 pb-8 md:pb-10">
            <div className="col-span-12 lg:col-span-6 lg:pr-8">
              <Rise>
                <Eyebrow>Market intelligence — {city.state}</Eyebrow>
              </Rise>
              <Rise delay={40}>
                <h1 className="mt-4 font-display text-display-l text-balance md:text-display-xl">
                  {city.h1Lead}{" "}
                  <span className="em-serif text-violet-deep">
                    {city.h1Accent}
                  </span>
                  .
                </h1>
              </Rise>
              <Rise delay={80}>
                <p className="speakable-answer mt-5 max-w-[48ch] text-body-l text-on-sand-dim">
                  {city.heroLede}
                </p>
                <p className="mt-4 max-w-[48ch] text-body-s text-on-sand-dim">
                  We do not hold inventory in {city.name}. We plan and buy
                  across media owners, then document delivery.
                </p>
              </Rise>
              <Rise delay={120}>
                <p className="mt-5 mono-kicker text-on-sand-dim">
                  Also planned nearby
                </p>
                <Nearby names={city.nearby} />
              </Rise>
            </div>

            <Rise
              delay={60}
              className="col-span-12 rounded-(--radius-card) bg-sand-2 p-5 md:p-7 lg:col-span-6"
            >
              <BriefForm
                context={`OOH plan for ${city.name}`}
                market={city.name}
                location="city-hero"
                heading={`A plan for ${city.name}`}
                lede="Tell us the objective. We will write back."
              />
            </Rise>
          </div>

          <PageIndex items={index} />
        </div>
      </section>

      <Band id="market" tone="sand2" grain compact>
        <div className="grid-12 gap-y-6">
          <Rise className="col-span-12 lg:col-span-4">
            <Eyebrow>The market</Eyebrow>
            <h2 className="mt-3 font-display text-h1 text-balance">
              How {city.name}{" "}
              <span className="em-serif text-violet-deep">works</span>.
            </h2>
          </Rise>
          <div className="col-span-12 max-w-[62ch] lg:col-span-8">
            {city.market.map((para, i) => (
              <Rise key={i} delay={i * 40}>
                <p
                  className={
                    i === 0 ? "text-body-l" : "mt-4 text-body-s text-on-sand-dim"
                  }
                >
                  {para}
                </p>
              </Rise>
            ))}
          </div>
        </div>
      </Band>

      {frames.length > 0 && (
        <section className="relative overflow-hidden bg-plum-2 py-10 text-on-plum md:py-12">
          <div className="shell relative z-10">
            <SectionHead
              compact
              eyebrow="On the ground"
              tone="plum"
              title={
                <>
                  {city.name}, <span className="em-serif">as we found it</span>.
                </>
              }
              lede={
                <>
                  Own frames from live placements. Not stock, and not a site
                  list — the geo-stamp is cropped off these deliberately.
                </>
              }
            />
            <ul
              className={`mt-8 grid gap-3 ${
                frames.length > 1 ? "sm:grid-cols-2" : ""
              }`}
            >
              {frames.slice(0, 4).map((f, i) => (
                <Rise key={f.src} as="li" delay={i * 40}>
                  <figure className="m-0 overflow-hidden bg-plum">
                    <div className="relative aspect-16/9">
                      <Image
                        src={f.src}
                        alt={f.alt}
                        fill
                        sizes={
                          frames.length > 1
                            ? "(min-width: 640px) 46vw, 92vw"
                            : "(min-width: 640px) 92vw, 92vw"
                        }
                        className="object-cover"
                      />
                    </div>
                  </figure>
                </Rise>
              ))}
            </ul>
          </div>
        </section>
      )}

      <Band id="crowds" tone="plum" grain compact>
        <SectionHead
          compact
          eyebrow="Where the crowds are"
          tone="plum"
          title={
            <>
              The places {city.name}{" "}
              <span className="em-serif">actually gathers</span>.
            </>
          }
          lede={
            <>
              Not a site list. The parts of the city where people concentrate,
              and why.
            </>
          }
        />

        {city.crowdPlaces.length > 0 && (
          <Rise>
            <div className="mt-8 border-t border-rule-plum pt-5">
              <span className="font-mono text-meta tracking-[0.08em] text-violet-lift">
                01
              </span>
              <h3 className="mt-2 max-w-[22ch] font-display text-h2 text-balance">
                {city.crowdPlaces[0].place}
              </h3>
              <p className="mt-2 max-w-[62ch] text-body-s text-on-plum-dim">
                {city.crowdPlaces[0].note}
              </p>
            </div>
          </Rise>
        )}

        <ul className="mt-2 grid border-t border-rule-plum md:grid-cols-2 md:gap-x-10">
          {city.crowdPlaces.slice(1).map((p, i) => (
            <Rise key={p.place} as="li" delay={Math.min(i, 6) * 30}>
              <div className="flex h-full gap-3 border-b border-rule-plum py-3">
                <span className="shrink-0 pt-1 font-mono text-meta tracking-[0.08em] text-violet-lift">
                  {String(i + 2).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-h3 text-balance">{p.place}</h3>
                  <p className="mt-1 max-w-[52ch] text-body-s text-on-plum-dim">
                    {p.note}
                  </p>
                </div>
              </div>
            </Rise>
          ))}
        </ul>
      </Band>

      <Band id="formats" tone="sand" grain compact>
        <SectionHead
          compact
          eyebrow="The formats"
          title={
            <>
              What actually works{" "}
              <span className="em-serif text-violet-deep">in {city.name}</span>.
            </>
          }
          lede={
            <>
              Every format below exists here. Most briefs need two or three —
              the work is deciding which.
            </>
          }
        />

        <div className="mt-8 border-t border-rule-sand">
          {city.formatGuide.map((f, i) => (
            <Disclosure
              key={f.title}
              index={i + 1}
              title={f.title}
              kicker={f.kicker}
              defaultOpen={i === 0}
            >
              <p>{f.body}</p>
            </Disclosure>
          ))}
        </div>

        {glossaryTerms.length ? (
          <Rise>
            <div className="mt-8 border-t border-rule-sand pt-6">
              <Eyebrow muted>
                If a word above was doing work you had to guess at
              </Eyebrow>
              <ul className="mt-4 flex flex-wrap gap-2">
                {glossaryTerms.map((t) => (
                  <li key={t.slug}>
                    <Link
                      href={`/glossary/${t.slug}`}
                      className="inline-flex min-h-10 items-center rounded-sm border border-on-sand/20 px-3 text-body-s transition-colors duration-200 hover:border-on-sand hover:bg-on-sand/5"
                    >
                      {t.term}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Rise>
        ) : null}
      </Band>

      <Band id="press" tone="sand2" grain compact>
        <SectionHead
          compact
          eyebrow="The local press and radio"
          title={
            <>
              What {city.name}{" "}
              <span className="em-serif text-violet-deep">reads and hears</span>.
            </>
          }
          lede={
            <>
              Regional titles carry the local weight. We publish no circulation
              or listenership figures — those are licensed, and we show them at
              planning.
            </>
          }
        />

        <div className="mt-8 grid gap-x-10 gap-y-8 lg:grid-cols-2">
          <div>
            <Eyebrow muted>Newspapers</Eyebrow>
            <ul className="mt-3 border-t border-rule-sand">
              {city.localMedia.press.map((t) => (
                <li key={t.title} className="border-b border-rule-sand py-3">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-h3">
                      <MediaName name={t.title} url={t.url} />
                    </h3>
                    <span className="mono-kicker text-violet-deep">
                      {t.language}
                    </span>
                  </div>
                  <p className="mt-1 max-w-[52ch] text-body-s text-on-sand-dim">
                    {t.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Eyebrow muted>Radio</Eyebrow>
            <ul className="mt-3 border-t border-rule-sand">
              {city.localMedia.radio.map((r) => (
                <li key={r.station} className="border-b border-rule-sand py-3">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-h3">
                      <MediaName name={r.station} url={r.url} />
                    </h3>
                    <span className="mono-kicker text-violet-deep">
                      {r.frequency}
                    </span>
                  </div>
                  <p className="mt-1 max-w-[52ch] text-body-s text-on-sand-dim">
                    {r.note}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-[52ch] text-body-s text-on-sand-dim">
              {city.localMedia.radioNote}
            </p>
          </div>
        </div>
      </Band>

      <Band id="transit" tone="plum" grain compact>
        <div className="grid-12 items-end gap-y-4">
          <Rise className="col-span-12 lg:col-span-6">
            <Eyebrow tone="plum">Transit media</Eyebrow>
            <h2 className="mt-3 font-display text-h1 text-balance">
              How {city.name} <span className="em-serif">moves</span>.
            </h2>
          </Rise>
          <p className="col-span-12 max-w-[46ch] text-body-s text-on-plum-dim lg:col-span-5 lg:col-start-8">
            {city.transit.lede}
          </p>
        </div>

        <ul className="mt-8 border-t border-rule-plum">
          {city.transit.modes.map((m) => (
            <li
              key={m.mode}
              className="grid grid-cols-12 gap-x-6 gap-y-1 border-b border-rule-plum py-4"
            >
              <h3 className="col-span-12 text-h3 md:col-span-4">{m.mode}</h3>
              <p className="col-span-12 text-body-s text-on-plum-dim md:col-span-8">
                {m.note}
              </p>
            </li>
          ))}
        </ul>
      </Band>

      <Band id="cost" tone="sand" grain compact>
        <div className="grid-12 gap-y-6">
          <Rise className="col-span-12 lg:col-span-5">
            <Eyebrow>What it costs</Eyebrow>
            <h2 className="mt-3 max-w-[18ch] font-display text-h1 text-balance">
              What actually moves{" "}
              <span className="em-serif text-violet-deep">the price</span>.
            </h2>
            <p className="mt-4 max-w-[46ch] text-body-s text-on-sand-dim">
              We do not publish a rate card for {city.name}. We do not own
              media here. A published rate would tell you what we would like to
              charge rather than what the market will take. Below is what
              genuinely moves it.
            </p>
            <p className="mt-5">
              <a href="#plan" className="link-underline text-body-s font-medium">
                Get real numbers for {city.name}
              </a>
            </p>
          </Rise>

          <ul className="col-span-12 border-t border-rule-sand lg:col-span-6 lg:col-start-7">
            {city.costDrivers.map((d) => (
              <li key={d.factor} className="border-b border-rule-sand py-3.5">
                <h3 className="text-h3">{d.factor}</h3>
                <p className="mt-1.5 max-w-[56ch] text-body-s text-on-sand-dim">
                  {d.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Band>

      <Band id="permission" tone="violet" grain compact>
        <div className="grid-12 gap-y-6">
          <Rise className="col-span-12 lg:col-span-5">
            <Eyebrow tone="violet">Permissions</Eyebrow>
            <h2 className="mt-3 max-w-[18ch] font-display text-h1 text-balance">
              Who licenses it,{" "}
              <span className="em-serif">and what we actually know</span>.
            </h2>
            <p className="mt-4 font-mono text-caption tracking-[0.06em] text-on-violet-dim uppercase">
              Authority — {city.compliance.authority}
            </p>
          </Rise>
          <div className="col-span-12 max-w-[58ch] lg:col-span-6 lg:col-start-7">
            {city.compliance.body.map((para, i) => (
              <p
                key={i}
                className={
                  i === 0 ? "text-body-l" : "mt-4 text-body-s text-on-violet-dim"
                }
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </Band>

      <Band id="year" tone="sand2" grain compact>
        <SectionHead
          compact
          eyebrow="The year"
          title={
            <>
              When {city.name}{" "}
              <span className="em-serif text-violet-deep">pays attention</span>.
            </>
          }
          lede={
            <>
              The windows when demand outruns supply — worth planning around
              rather than into.
            </>
          }
        />

        <ul className="mt-8 border-t border-rule-sand">
          {city.season.map((s) => (
            <li
              key={s.window}
              className="grid grid-cols-12 gap-x-6 gap-y-1 border-b border-rule-sand py-4"
            >
              <h3 className="col-span-12 font-display text-h3 text-balance md:col-span-4">
                {s.window}
              </h3>
              <p className="col-span-12 max-w-[58ch] text-body-s text-on-sand-dim md:col-span-8">
                {s.note}
              </p>
            </li>
          ))}
        </ul>
      </Band>

      <Band id="plan" tone="plum" grain compact>
        <div className="grid-12 items-start gap-y-8">
          <Rise className="col-span-12 lg:col-span-5">
            <Eyebrow tone="plum">How we plan {city.name}</Eyebrow>
            <h2 className="mt-3 max-w-[16ch] font-display text-h1 text-balance">
              Catchment first,{" "}
              <span className="em-serif">sites afterwards</span>.
            </h2>
            <p className="mt-5 max-w-[52ch] text-body-s text-on-plum-dim">
              {city.planning}
            </p>
            <p className="mt-6">
              <Btn href="/what-we-do" variant="outline-sand">
                How we plan a market
              </Btn>
            </p>
          </Rise>
          <div className="col-span-12 rounded-(--radius-card) bg-plum-2 p-5 md:p-7 lg:col-span-6 lg:col-start-7">
            <BriefForm
              context={`Outdoor advertising in ${city.name}`}
              market={city.name}
              location="city-plan"
              surface="plum"
              heading={`Request a plan for ${city.name}`}
              lede="Brand, name, market. We will write back."
            />
          </div>
        </div>
      </Band>

      <Band tone="sand" grain compact>
        <Rise>
          <Eyebrow>Questions</Eyebrow>
          <h2 className="mt-3 max-w-[24ch] font-display text-h1 text-balance">
            Outdoor advertising in {city.name} —{" "}
            <span className="em-serif text-violet-deep">the real questions</span>
            .
          </h2>
        </Rise>
        <div className="mt-8">
          <Faq items={city.faq} />
        </div>
        <AskAssistants tone="sand" variant="page" />
      </Band>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": `${site.url}/cities/${city.slug}#webpage`,
              url: `${site.url}/cities/${city.slug}`,
              name: city.metaTitle,
              description: city.metaDescription,
              isPartOf: { "@id": `${site.url}/#website` },
              about: { "@id": `${site.url}/cities/${city.slug}#service` },
              publisher: { "@id": organisationId },
              inLanguage: "en-IN",
              dateModified: site.contentReviewed,
              speakable,
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": `${site.url}/cities/${city.slug}#service`,
              name: `Outdoor advertising in ${city.name}`,
              serviceType: "Outdoor advertising and media planning",
              description: city.metaDescription,
              /* By reference, not by restatement. A second inline
                 Organization on twenty-two city pages is twenty-two
                 copies of the name, phone and address to keep in step,
                 and they will not stay in step. */
              provider: { "@id": organisationId },
              areaServed: {
                "@type": "City",
                name: city.name,
                ...(city.alsoKnownAs?.length
                  ? { alternateName: city.alsoKnownAs }
                  : {}),
                containedInPlace: {
                  "@type": "AdministrativeArea",
                  name: city.state,
                },
              },
              /* The format guide is the offer catalogue. It is the one
                 place the long-tail terms can be stated as structured
                 data without ever implying we hold the inventory —
                 these are services planned, not sites owned. */
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: `Media formats planned in ${city.name}`,
                itemListElement: city.formatGuide.map((f, i) => ({
                  "@type": "Offer",
                  position: i + 1,
                  itemOffered: {
                    "@type": "Service",
                    name: f.title,
                  },
                })),
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
              "@id": `${site.url}/cities/${city.slug}#faq`,
              /* Freshness, declared. These pages carry municipal
                 policy — the 2025 BMC policy, the Bengaluru bye-laws,
                 the Jaipur corporation merger — and a page about a
                 rule that changes has to say when it was last looked
                 at, or an answer engine has no way to prefer it over
                 a stale one. Bump site.contentReviewed when the copy
                 is genuinely reviewed. */
              dateModified: site.contentReviewed,
              inLanguage: "en-IN",
              speakable,
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
