import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Band, Btn, Card, Eyebrow, Rise } from "@/components/UI";
import { Faq } from "@/components/Ledger";
import { terms, termBySlug } from "@/lib/glossary";
import { cityBySlug } from "@/lib/cities";
import { organisationId, speakable } from "@/lib/schema";
import { site } from "@/lib/site";
import BriefButton from "@/components/BriefButton";
import { routeMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return terms.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata(
  { params }: Params,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const t = termBySlug(slug);
  if (!t) return {};
  return routeMetadata(parent, {
    path: `/glossary/${t.slug}`,
    title: t.metaTitle,
    description: t.metaDescription,
    ogType: "article",
    inheritOgImages: false,
  });
}

/**
 * A glossary entry.
 *
 * THE SHAPE IS THE STRATEGY. Everything above the fold is the
 * definition and nothing else: H1 is the bare term, and the paragraph
 * under it is one sentence that defines it completely. A snippet and
 * an AI answer are both roughly forty words, so that sentence is the
 * whole extract — and a page that opens with context has spent its
 * extract saying nothing. Every other section can be as long as it
 * needs to be, because by then the reader has chosen to stay.
 *
 * The H2s are the reader's questions verbatim rather than our topic
 * labels. It is the cheapest relevance signal available and it forces
 * the writing to answer rather than describe.
 */
export default async function GlossaryTermPage({ params }: Params) {
  const { slug } = await params;
  const t = termBySlug(slug);
  if (!t) notFound();

  const related = t.related
    .map((r) => termBySlug(r))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const cityLinks = (t.cities ?? [])
    .map((c) => cityBySlug(c))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <>
      {/* 00 — THE DEFINITION ------------------------------------- */}
      <section className="grain relative bg-sand pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="shell relative z-10">
          <Rise>
            <p className="eyebrow text-on-sand-dim">
              {/* WCAG 2.2 Target Size (Minimum) is 24x24 CSS px for web —
                  not the 44pt iOS figure. At the eyebrow's own line-height
                  this link rendered 65x19, so the padding buys the missing
                  five pixels and the negative margin keeps the baseline
                  where the layout expects it. */}
              <Link
                href="/glossary"
                className="link-underline -my-1.5 inline-flex min-h-6 items-center py-1.5"
              >
                Glossary
              </Link>
              <span aria-hidden className="mx-2.5 opacity-40">
                /
              </span>
              {t.category}
            </p>
          </Rise>

          <div className="grid-12 mt-6">
            <Rise delay={60} className="col-span-12 lg:col-span-8">
              {/* The bare noun. The query form — "what is a…" — lives in
                  the title tag where the search happens, not in the H1
                  where it would read as SEO written on the page. */}
              <h1 className="font-display text-display-xl text-balance">
                {t.term}
              </h1>
              {t.alsoCalled?.length ? (
                <p className="mt-4 text-body-s text-on-sand-dim">
                  Also called{" "}
                  {t.alsoCalled.map((a, i) => (
                    <span key={a}>
                      {i > 0 && <span aria-hidden> · </span>}
                      <span className="text-on-sand">{a}</span>
                    </span>
                  ))}
                </p>
              ) : null}
            </Rise>
          </div>

          <div className="grid-12 mt-8">
            <Rise delay={120} className="col-span-12 lg:col-span-8">
              {/* RULE 1, rendered. One sentence, standing alone,
                  carrying the speakable hook. */}
              <p className="speakable-answer max-w-[58ch] border-l-2 border-violet-deep pl-5 text-body-l text-on-sand md:pl-6">
                {t.definition}
              </p>
            </Rise>
          </div>
        </div>
      </section>

      {/* 01 — THE EXPANSION -------------------------------------- */}
      <Band tone="sand2" grain>
        <div className="grid-12 gap-y-8">
          <Rise className="col-span-12 lg:col-span-4">
            <Eyebrow tone="sand2">In more detail</Eyebrow>
          </Rise>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            {t.body.map((para, i) => (
              <Rise key={i} delay={i * 80}>
                <p
                  className={`max-w-[62ch] ${
                    i === 0 ? "text-body-l" : "mt-6 text-on-sand-dim"
                  }`}
                >
                  {para}
                </p>
              </Rise>
            ))}
          </div>
        </div>
      </Band>

      {/* 02 — THE QUESTIONS -------------------------------------- */}
      <Band tone="sand" grain>
        <ol className="border-t border-rule-sand">
          {t.sections.map((s, i) => (
            <Rise key={s.q} as="li" delay={i * 55}>
              <div className="grid grid-cols-12 gap-x-6 gap-y-4 border-b border-rule-sand py-8 md:py-11">
                <span className="col-span-12 font-mono text-caption tracking-[0.08em] text-violet-deep md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* The heading IS the question. */}
                <h2 className="col-span-12 max-w-[24ch] font-display text-h1 text-balance md:col-span-5">
                  {s.q}
                </h2>
                <div className="col-span-12 md:col-span-6">
                  {s.a.map((para, j) => (
                    <p
                      key={j}
                      className={`max-w-[62ch] ${
                        j === 0 ? "" : "mt-5"
                      } text-on-sand-dim`}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </Rise>
          ))}
        </ol>
      </Band>

      {/* 03 — THE DECISION --------------------------------------- */}
      <Band tone="plum" grain>
        <div className="grid-12 gap-y-12">
          <div className="col-span-12 lg:col-span-6">
            <Rise>
              <Eyebrow tone="plum">
                Where it earns its place
              </Eyebrow>
            </Rise>
            <ul className="mt-8 border-t border-rule-plum">
              {t.whenItWorks.map((w, i) => (
                <Rise key={w} as="li" delay={i * 45}>
                  <div className="flex gap-4 border-b border-rule-plum py-4">
                    <span aria-hidden className="text-violet-lift">
                      —
                    </span>
                    <span className="text-on-plum-dim">{w}</span>
                  </div>
                </Rise>
              ))}
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <Rise delay={80}>
              {/* The section a media owner cannot write. Talking a buyer
                  out of a format is against their interest and squarely
                  in ours, so it gets the raised card rather than a
                  footnote. */}
              <Eyebrow tone="plum" muted>
                And where it does not
              </Eyebrow>
              <Card tone="plum" className="mt-6">
                <p className="max-w-[46ch] text-on-plum">{t.whenItDoesNot}</p>
              </Card>
            </Rise>
          </div>
        </div>
      </Band>

      {/* 04 — WHAT MOVES THE PRICE ------------------------------- */}
      {t.priceFactors?.length ? (
        <Band tone="sand2" grain>
          <div className="grid-12 gap-y-10">
            <Rise className="col-span-12 lg:col-span-5">
              <Eyebrow tone="sand2">What moves the price</Eyebrow>
              <h2 className="mt-5 max-w-[18ch] font-display text-display-l text-balance">
                The variables,{" "}
                <span className="em-serif text-violet-deep">not a rate</span>.
              </h2>
              <p className="mt-6 max-w-[40ch] text-on-sand-dim">
                We do not publish a rate card. We own no media, so every
                plan is negotiated against several vendors — a published
                figure would describe what we would like to charge rather
                than what the market will take.
              </p>
            </Rise>

            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <ol className="border-t border-rule-sand">
                {t.priceFactors.map((f, i) => (
                  <Rise key={f} as="li" delay={i * 45}>
                    <div className="flex gap-5 border-b border-rule-sand py-4">
                      <span className="font-mono text-caption tracking-[0.08em] text-violet-deep">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-on-sand-dim">{f}</span>
                    </div>
                  </Rise>
                ))}
              </ol>
            </div>
          </div>
        </Band>
      ) : null}

      {/* 05 — FAQ ------------------------------------------------ */}
      <Band tone="sand" grain>
        <div className="grid-12 items-end">
          <Rise className="col-span-12 lg:col-span-7">
            <Eyebrow>Questions we are actually asked</Eyebrow>
            <h2 className="mt-5 font-display text-display-l text-balance">
              {t.term}, in practice.
            </h2>
          </Rise>
        </div>
        <div className="mt-12">
          <Faq items={t.faq} />
        </div>
      </Band>

      {/* 06 — WHERE TO GO NEXT ----------------------------------- */}
      <Band tone="sand2" grain>
        <div className="grid-12 gap-y-12">
          <div className="col-span-12 lg:col-span-6">
            <Rise>
              <Eyebrow tone="sand2">Read next</Eyebrow>
            </Rise>
            <ul className="mt-8 grid gap-3">
              {related.map((r, i) => (
                <Rise key={r.slug} as="li" delay={i * 45}>
                  <Link
                    href={`/glossary/${r.slug}`}
                    className="group block rounded-(--radius-card) bg-sand p-5 transition-colors duration-200 hover:bg-sand-3 md:p-6"
                  >
                    <span className="text-h3">{r.term}</span>
                    <p className="mt-2 max-w-[52ch] text-body-s text-on-sand-dim">
                      {r.definition.split(/(?<=[.?!])\s/)[0]}
                    </p>
                  </Link>
                </Rise>
              ))}
            </ul>
          </div>

          {cityLinks.length ? (
            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <Rise delay={80}>
                <Eyebrow tone="sand2" muted>
                  Where this has a local particularity
                </Eyebrow>
                <p className="mt-4 max-w-[38ch] text-on-sand-dim">
                  Municipal rules, authorities and even the vocabulary
                  change at a corporation boundary. These markets carry
                  something specific about {t.term.toLowerCase()}.
                </p>
                <ul className="mt-6 border-t border-rule-sand">
                  {cityLinks.map((c, i) => (
                    <Rise key={c.slug} as="li" delay={i * 45}>
                      <Link
                        href={`/cities/${c.slug}`}
                        className="link-underline flex items-baseline justify-between gap-4 border-b border-rule-sand py-3.5"
                      >
                        <span className="text-h3">{c.name}</span>
                        <span className="text-body-s text-on-sand-dim">
                          {c.state}
                        </span>
                      </Link>
                    </Rise>
                  ))}
                </ul>
              </Rise>
            </div>
          ) : null}
        </div>
      </Band>

      {/* 07 — CTA ------------------------------------------------ */}
      <Band tone="violet">
        <div className="grid-12 items-end gap-y-8">
          <Rise className="col-span-12 lg:col-span-7">
            <h2 className="max-w-[20ch] font-display text-display-l text-balance">
              Knowing the word is not the same as{" "}
              <span className="em-serif">buying it well</span>.
            </h2>
          </Rise>
          <Rise delay={80} className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p className="max-w-[38ch] text-on-violet-dim">
              Tell us the market and the objective. We will tell you
              plainly whether this format is the right instrument for it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BriefButton context={`Planning around ${t.term}`}>
                Get a plan for your market
              </BriefButton>
              <Btn href="/glossary" variant="outline-sand">
                Back to the glossary
              </Btn>
            </div>
          </Rise>
        </div>
      </Band>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              /* DefinedTerm is the correct type and almost nobody uses
                 it. It says "this page IS a definition" rather than
                 leaving an engine to infer that from an h1 and a
                 paragraph, and it carries alternateName so both
                 spellings of a term resolve to one entry. */
              "@type": "DefinedTerm",
              "@id": `${site.url}/glossary/${t.slug}#term`,
              name: t.term,
              ...(t.alsoCalled?.length
                ? { alternateName: t.alsoCalled }
                : {}),
              description: t.definition,
              url: `${site.url}/glossary/${t.slug}`,
              inDefinedTermSet: {
                "@type": "DefinedTermSet",
                "@id": `${site.url}/glossary#set`,
                name: "Indian outdoor advertising glossary",
                url: `${site.url}/glossary`,
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": `${site.url}/glossary/${t.slug}#webpage`,
              url: `${site.url}/glossary/${t.slug}`,
              name: t.metaTitle,
              description: t.metaDescription,
              isPartOf: { "@id": `${site.url}/#website` },
              about: { "@id": `${site.url}/glossary/${t.slug}#term` },
              publisher: { "@id": organisationId },
              inLanguage: "en-IN",
              dateModified: site.contentReviewed,
              speakable,
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: site.url },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Glossary",
                  item: `${site.url}/glossary`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: t.term,
                  item: `${site.url}/glossary/${t.slug}`,
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": `${site.url}/glossary/${t.slug}#faq`,
              mainEntity: t.faq.map((f) => ({
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
