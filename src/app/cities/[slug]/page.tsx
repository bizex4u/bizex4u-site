import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Band, Btn, Card, Eyebrow, Rise, SectionHead } from "@/components/UI";
import Image from "next/image";
import SeasonBar from "@/components/SeasonBar";
import { CityLocator } from "@/components/IndiaField";
import { framesFor } from "@/lib/streets";
import { Faq } from "@/components/Ledger";
import { cities, cityBySlug } from "@/lib/cities";
import { termsForCity } from "@/lib/glossary";
import { site } from "@/lib/site";
import { organisationId, speakable } from "@/lib/schema";
import BriefButton from "@/components/BriefButton";

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
      type: "article",
    },
  };
}

/* A nearby market that has its own page becomes a link; one that does
   not stays as text. Internal links between city pages are the cheapest
   real ranking signal available here, and a link to a page that does not
   exist is worse than no link at all. */
function Nearby({ names }: { names: string[] }) {
  const bySlug = new Map(cities.map((c) => [c.name.toLowerCase(), c.slug]));
  return (
    <p className="mt-4 text-h3 text-on-sand-dim">
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

  const frames = framesFor(city.name);

  return (
    <>
      {/* HERO ---------------------------------------------------- */}
      <section className="grain relative overflow-hidden bg-sand pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="shell relative z-10">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap gap-2 font-mono text-meta tracking-[0.08em] text-on-sand-dim uppercase">
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
                  Cities
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-violet-deep">{city.name}</li>
            </ol>
          </nav>

          <div className="grid-12 items-start gap-y-10">
            <div className="col-span-12 lg:col-span-7">
              <Rise>
                <Eyebrow>Cities — {city.state}</Eyebrow>
              </Rise>
              <Rise delay={60}>
                {/* The H1 carries the city name and the category term.
                    A cleverer headline that omits either is a cleverer
                    headline that does not rank. */}
                <h1 className="mt-6 font-display text-display-xl text-balance">
                  {city.h1Lead}{" "}
                  <span className="em-serif text-violet-deep">
                    {city.h1Accent}
                  </span>
                  .
                </h1>
              </Rise>
              <Rise delay={120}>
                <p className="mt-7 max-w-[52ch] text-body-l text-on-sand-dim">
                  {city.heroLede}
                </p>
                <div className="mt-9">
                  <BriefButton
                    size="lg"
                    context={`Outdoor advertising in ${city.name}`}
                    market={city.name}
                  >
                    Get a plan for {city.name}
                  </BriefButton>
                </div>
              </Rise>
            </div>

            {/* The locator replaces a card that held nothing but a list
                of neighbouring names. Every one of these twenty-two
                pages opened identically — eyebrow, headline, lede, one
                grey box — and the box was the least useful thing on the
                screen. The field answers the question a buyer actually
                arrives with, which is not "what is near this city" but
                "do these people work anywhere near me". The nearby list
                keeps its job underneath, where it belongs. */}
            <Rise delay={180} className="col-span-12 lg:col-span-4 lg:col-start-9">
              <CityLocator slug={city.slug} name={city.name} />
              <div className="mt-4">
                <Card>
                  <Eyebrow muted>Also planned nearby</Eyebrow>
                  <Nearby names={city.nearby} />
                </Card>
              </div>
            </Rise>
          </div>
        </div>
      </section>

      {/* 01 — THE MARKET ----------------------------------------- */}
      <Band tone="sand2" grain>
        <div className="grid-12 gap-y-8">
          <Rise className="col-span-12 lg:col-span-3">
            <Eyebrow>The market</Eyebrow>
            <h2 className="mt-5 font-display text-h2 text-balance">
              How {city.name}{" "}
              <span className="em-serif text-violet-deep">works</span>.
            </h2>
          </Rise>
          <div className="col-span-12 grid gap-x-8 gap-y-6 lg:col-span-8 lg:col-start-5 lg:grid-cols-2">
            {city.market.map((para, i) => (
              <Rise key={i} delay={i * 60}>
                <p className={i === 0 ? "text-body-l" : "text-on-sand-dim"}>
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
        <SectionHead
            eyebrow="Where the crowds are"
            tone="plum"
            deva="भीड़ कहाँ है"
            title={<>The places {city.name}{" "}
              <span className="em-serif">actually gathers</span>.</>}
            lede={<>Not a site list. These are the parts of the city where people
            concentrate, and why — the starting point for any plan worth
            arguing about.</>}
          />

        {/* Six identical cards in a three-column grid was six cards
            nobody read: every place carried the same weight, so nothing
            led and the eye had no route in. The first place named on
            each of these pages is the one a local would name first, and
            it now reads that way — double width, larger type, and a
            counter so the set reads as an argued order rather than as a
            grid that happened to be filled. */}
        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {city.crowdPlaces.map((p, i) => (
            <Rise
              key={p.place}
              as="li"
              delay={i * 45}
              className={i === 0 ? "md:col-span-2" : undefined}
            >
              <div className="flex h-full flex-col rounded-(--radius-card) bg-plum-2 p-6 md:p-7">
                <span className="font-mono text-meta tracking-[0.08em] text-violet-lift">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className={`mt-3 font-display text-balance ${
                    i === 0 ? "text-display-l" : "text-h2"
                  }`}
                >
                  {p.place}
                </h3>
                <p
                  className={`mt-4 text-on-plum-dim ${
                    i === 0 ? "max-w-[62ch] text-body-l" : ""
                  }`}
                >
                  {p.note}
                </p>
              </div>
            </Rise>
          ))}
        </ul>
      </Band>

      {/* 02b — WHAT IT LOOKS LIKE ON THE GROUND -----------------
          Only where we actually hold frames of this market. Two of the
          twenty-two cities do; see the note on framesFor in
          lib/streets.ts for why the other twenty get nothing here
          rather than a street borrowed from elsewhere. */}
      {frames.length > 0 && (
        <section className="grain relative overflow-hidden bg-plum-2 py-(--spacing-band) text-on-plum">
          <div className="shell relative z-10">
            <SectionHead
            eyebrow="On the ground"
            tone="plum"
            title={<>{city.name}, <span className="em-serif">as we found it</span>.</>}
            lede={<>Our own frames, taken standing in front of live placements on a
                working day. Not stock, and not a site list — the geo-stamp is
                cropped off these deliberately.</>}
          />

            <ul
              className={`mt-11 grid gap-4 ${
                frames.length > 1 ? "sm:grid-cols-2" : ""
              }`}
            >
              {frames.slice(0, 4).map((f, i) => (
                <Rise key={f.src} as="li" delay={i * 60}>
                  <figure className="m-0 overflow-hidden rounded-(--radius-card) bg-plum">
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

      {/* 03 — THE FORMAT GUIDE -----------------------------------
          The long-tail layer. Each H3 answers a query somebody actually
          types, and each body has to be about THIS city — a generic
          paragraph explaining what a unipole is helps nobody. */}
      <Band tone="sand" grain>
        <SectionHead
            eyebrow="The formats"
            deva="माध्यम"
            title={<>What actually works{" "}
              <span className="em-serif text-violet-deep">in {city.name}</span>.</>}
            lede={<>Every format below exists in this city. Not all of them belong in
            your plan — most briefs need two or three, and the useful work is
            deciding which.</>}
          />

        <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2">
          {city.formatGuide.map((f, i) => (
            <Rise key={f.title} delay={i * 40}>
              <article className="border-t border-rule-sand pt-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-caption tracking-[0.08em] text-violet-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-micro tracking-[0.08em] text-on-sand-dim uppercase">
                    {f.kicker}
                  </span>
                </div>
                {/* These H3s are the long-tail layer and they are meant
                    to read as headings, not as bolded labels. text-h2 is
                    the right rung — there is no text-h1 in the scale, and
                    reaching for one silently drops to body size. */}
                <h3 className="mt-3 font-display text-h2 text-balance">
                  {f.title}
                </h3>
                <p className="mt-3 max-w-[56ch] text-on-sand-dim">{f.body}</p>
              </article>
            </Rise>
          ))}
        </div>

        {/* The vocabulary rail.

            Every format guide above uses nouns a first-time buyer has
            to infer from context — unipole, BQS, sky-sign, loop. Until
            the glossary existed there was nowhere on this site to send
            them, so the page quietly assumed a reader who already knew.
            These are the terms that carry a local particularity in this
            specific market, not a generic list. */}
        {glossaryTerms.length ? (
          <Rise>
            <div className="mt-16 border-t border-rule-sand pt-8">
              <Eyebrow muted>
                If a word above was doing work you had to guess at
              </Eyebrow>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {glossaryTerms.map((t) => (
                  <li key={t.slug}>
                    <Link
                      href={`/glossary/${t.slug}`}
                      className="inline-flex min-h-11 items-center rounded-full border border-on-sand/20 px-4 text-body-s transition-colors duration-200 hover:border-on-sand hover:bg-on-sand/5"
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

      {/* 04 — PRESS AND RADIO ------------------------------------ */}
      <Band tone="sand2" grain>
        <SectionHead
            eyebrow="The local press and radio"
            deva="अख़बार और रेडियो"
            title={<>What {city.name}{" "}
              <span className="em-serif text-violet-deep">reads and hears</span>.</>}
            lede={<>The regional titles carry most of the local weight, and being in
            the right one transfers some of its standing to you. We publish no
            circulation or listenership figures — those are licensed research
            numbers, and we will show you the current ones at planning.</>}
          />

        <div className="mt-12 grid gap-x-10 gap-y-12 lg:grid-cols-2">
          <div>
            <Rise>
              <Eyebrow muted>Newspapers</Eyebrow>
            </Rise>
            <ul className="mt-5 border-t border-rule-sand">
              {city.localMedia.press.map((t, i) => (
                <Rise key={t.title} as="li" delay={i * 45}>
                  <div className="border-b border-rule-sand py-5">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-h3">{t.title}</h3>
                      <span className="font-mono text-micro tracking-[0.08em] text-violet-deep uppercase">
                        {t.language}
                      </span>
                    </div>
                    <p className="mt-2 max-w-[52ch] text-body-s text-on-sand-dim">
                      {t.note}
                    </p>
                  </div>
                </Rise>
              ))}
            </ul>
          </div>

          <div>
            <Rise>
              <Eyebrow muted>Radio</Eyebrow>
            </Rise>
            <ul className="mt-5 border-t border-rule-sand">
              {city.localMedia.radio.map((r, i) => (
                <Rise key={r.station} as="li" delay={i * 45}>
                  <div className="border-b border-rule-sand py-4">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-h3">{r.station}</h3>
                      <span className="font-mono text-micro tracking-[0.08em] text-violet-deep">
                        {r.frequency}
                      </span>
                    </div>
                    <p className="mt-2 max-w-[52ch] text-body-s text-on-sand-dim">
                      {r.note}
                    </p>
                  </div>
                </Rise>
              ))}
            </ul>
            <Rise delay={200}>
              <p className="mt-6 max-w-[52ch] text-body-s text-on-sand-dim">
                {city.localMedia.radioNote}
              </p>
            </Rise>
          </div>
        </div>
      </Band>

      {/* 05 — TRANSIT -------------------------------------------- */}
      <Band tone="plum" grain>
        <div className="grid-12 items-end gap-y-6">
          <Rise className="col-span-12 lg:col-span-6">
            <Eyebrow tone="plum" deva="आवागमन">Transit media</Eyebrow>
            <h2 className="mt-5 font-display text-display-l text-balance">
              How {city.name} <span className="em-serif">moves</span>.
            </h2>
          </Rise>
          <p className="col-span-12 max-w-[46ch] text-body-l text-on-plum-dim lg:col-span-5 lg:col-start-8">
            {city.transit.lede}
          </p>
        </div>

        <ul className="mt-12 border-t border-rule-plum">
          {city.transit.modes.map((m, i) => (
            <Rise key={m.mode} as="li" delay={i * 50}>
              <div className="grid grid-cols-12 gap-x-6 gap-y-2 border-b border-rule-plum py-6">
                <h3 className="col-span-12 text-h2 md:col-span-4">{m.mode}</h3>
                <p className="col-span-12 text-on-plum-dim md:col-span-8">
                  {m.note}
                </p>
              </div>
            </Rise>
          ))}
        </ul>
      </Band>

      {/* 06 — WHAT DRIVES THE COST -------------------------------
          There is a large body of search demand for "hoarding advertising
          cost in <city>" and every competitor answers it with a rate card.
          We answer it with the variables, and say why. */}
      <Band tone="sand" grain>
        <div className="grid-12 gap-y-8">
          <Rise className="col-span-12 lg:col-span-5">
            <Eyebrow>What it costs</Eyebrow>
            <h2 className="mt-5 max-w-[18ch] font-display text-display-l text-balance">
              What actually moves{" "}
              <span className="em-serif text-violet-deep">the price</span>.
            </h2>
            <p className="mt-6 max-w-[46ch] text-on-sand-dim">
              We do not publish a rate card for {city.name}, and it is worth
              being direct about why. We do not own media here. Every plan is
              negotiated against several vendors, so a published rate would
              tell you what we would like to charge rather than what the
              market will actually take — which is the number you need.
              Below is what genuinely moves it.
            </p>
            <div className="mt-8">
              <BriefButton
                size="lg"
                context={`Costs — outdoor advertising in ${city.name}`}
                market={city.name}
              >
                Get real numbers for {city.name}
              </BriefButton>
            </div>
          </Rise>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <ul className="border-t border-rule-sand">
              {city.costDrivers.map((d, i) => (
                <Rise key={d.factor} as="li" delay={i * 45}>
                  <div className="border-b border-rule-sand py-5">
                    <h3 className="text-h3">{d.factor}</h3>
                    <p className="mt-2 max-w-[56ch] text-body-s text-on-sand-dim">
                      {d.note}
                    </p>
                  </div>
                </Rise>
              ))}
            </ul>
          </div>
        </div>
      </Band>

      {/* 07 — PERMISSIONS AND COMPLIANCE ------------------------- */}
      <Band tone="violet" grain>
        <div className="grid-12 items-end gap-y-8">
          <Rise className="col-span-12 lg:col-span-5">
            <Eyebrow tone="violet">Permissions</Eyebrow>
            <h2 className="mt-5 max-w-[18ch] font-display text-display-l text-balance">
              Who licenses it,{" "}
              <span className="em-serif">and what we actually know</span>.
            </h2>
            <p className="mt-6 font-mono text-caption tracking-[0.06em] text-on-violet-dim uppercase">
              Authority — {city.compliance.authority}
            </p>
          </Rise>
          <div className="col-span-12 grid gap-6 lg:col-span-6 lg:col-start-7">
            {city.compliance.body.map((para, i) => (
              <Rise key={i} delay={i * 60}>
                <p className={i === 0 ? "text-body-l" : "text-on-violet-dim"}>
                  {para}
                </p>
              </Rise>
            ))}
          </div>
        </div>
      </Band>

      {/* 08 — THE CALENDAR --------------------------------------- */}
      <Band tone="sand2" grain>
        <SectionHead
            eyebrow="The calendar"
            deva="मौसम"
            title={<>When {city.name}{" "}
              <span className="em-serif text-violet-deep">pays attention</span>.</>}
            lede={<>Timing moves outcomes more than most negotiations do. These are
            the windows when demand outruns supply — and the ones worth
            planning around rather than into.</>}
          />

        {/* Four cards of prose made the reader assemble the year in
            their head. The question is "when is this market expensive",
            which is a question about a shape. */}
        <Rise className="mt-12 rounded-(--radius-card) bg-sand p-6 md:p-9">
          <SeasonBar seasons={city.season} />
        </Rise>
      </Band>

      {/* 09 — HOW WE PLAN IT ------------------------------------- */}
      <Band tone="plum" grain>
        <div className="grid-12 items-end gap-y-8">
          <Rise className="col-span-12 lg:col-span-5">
            <Eyebrow tone="plum">How we plan {city.name}</Eyebrow>
            <h2 className="mt-5 max-w-[16ch] font-display text-display-l text-balance">
              Catchment first,{" "}
              <span className="em-serif">sites afterwards</span>.
            </h2>
          </Rise>
          <Rise delay={80} className="col-span-12 lg:col-span-6 lg:col-start-7">
            <p className="max-w-[58ch] text-body-l">{city.planning}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <BriefButton
                variant="sand"
                size="lg"
                context={`Outdoor advertising in ${city.name}`}
                market={city.name}
              >
                Get a plan for {city.name}
              </BriefButton>
              <Btn href="/what-we-do" variant="outline-sand" size="lg">
                How we plan a market
              </Btn>
            </div>
          </Rise>
        </div>
      </Band>

      {/* 10 — FAQ ------------------------------------------------ */}
      <Band tone="sand" grain>
        <Rise>
          <Eyebrow deva="सवाल">Questions</Eyebrow>
          <h2 className="mt-5 max-w-[24ch] font-display text-display-l text-balance">
            Outdoor advertising in {city.name} —{" "}
            <span className="em-serif text-violet-deep">the real questions</span>
            .
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
                    description: f.body,
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
