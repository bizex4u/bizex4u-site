import type { Metadata } from "next";
import Link from "next/link";
import { Band, Btn, Eyebrow, Rise, SectionHead } from "@/components/UI";
import { PageHero } from "@/components/Ledger";
import PageSchema from "@/components/PageSchema";
import { categories, terms, termsByLetter, termsInCategory } from "@/lib/glossary";
import { organisationId } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Indian Outdoor Advertising Glossary",
  description:
    "Hoarding, unipole, BQS, pole kiosk, sky-sign, DOOH loop, flexing, barter — the vocabulary of Indian outdoor advertising, defined by people who buy it.",
  alternates: { canonical: "/glossary" },
};

/**
 * The glossary hub.
 *
 * WHY THIS SECTION EXISTS. This site uses the trade's vocabulary about
 * seventeen hundred times and, until now, defined none of it. That is
 * a gap in two directions: a first-time buyer meets six nouns per page
 * they have to infer, and an engine asked what a bus queue shelter is
 * finds the phrase used fluently here and explained on a competitor's
 * site.
 *
 * The hub is deliberately plain. A glossary is a reference — somebody
 * arrives already knowing the word and wanting the meaning — so the
 * only ordering that helps is the one they can predict. Alphabetical,
 * with the category rail underneath for people browsing rather than
 * looking something up.
 */
export default function GlossaryPage() {
  const letters = termsByLetter();

  return (
    <>
      <PageHero
        eyebrow="Glossary"
        title={
          <>
            The words the trade uses,{" "}
            <span className="em-serif text-violet-deep">defined plainly</span>.
          </>
        }
        lede="Indian outdoor has its own vocabulary — hoarding rather than billboard, unipole rather than monopole, BQS rather than bus stop — and most of it is used far more often than it is explained. These are the definitions, written by people who buy this media rather than sell it."
      />

      {/* 01 — A TO Z --------------------------------------------- */}
      <Band tone="sand2" grain>
        <SectionHead
          tone="sand2"
          eyebrow="A to Z"
          title={
            <>
              {terms.length} terms,{" "}
              <span className="em-serif text-violet-deep">so far</span>.
            </>
          }
          lede="Written one at a time rather than generated in a batch. Each entry defines the term in its first sentence, says where the format earns its place, says where it does not, and answers the cost question without a rate card."
        />

        <div className="mt-14 grid gap-12">
          {letters.map(([letter, group], gi) => (
            <Rise key={letter} delay={Math.min(gi, 6) * 50}>
              <div className="grid-12 gap-y-6">
                <div className="col-span-12 lg:col-span-2">
                  <p
                    aria-hidden
                    className="font-display text-display-l leading-none text-violet-deep"
                  >
                    {letter}
                  </p>
                </div>
                <ul className="col-span-12 grid gap-3 lg:col-span-10 md:grid-cols-2">
                  {group.map((t) => (
                    <li key={t.slug}>
                      <Link
                        href={`/glossary/${t.slug}`}
                        className="group block h-full rounded-(--radius-card) bg-sand p-5 transition-colors duration-200 hover:bg-sand-3 md:p-6"
                      >
                        <span className="flex items-baseline justify-between gap-4">
                          <span className="text-h3">{t.term}</span>
                          <span className="eyebrow text-on-sand-dim">
                            {t.category}
                          </span>
                        </span>
                        {/* One sentence on the hub, not none. A hub of
                            bare links makes the reader open a page to
                            find out whether it is the one they want. */}
                        <p className="mt-2.5 max-w-[52ch] text-body-s text-on-sand-dim">
                          {t.definition.split(/(?<=[.?!])\s/)[0]}
                        </p>
                        {t.alsoCalled?.length ? (
                          <p className="mt-2 text-caption text-on-sand-dim">
                            Also: {t.alsoCalled.join(" · ")}
                          </p>
                        ) : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Rise>
          ))}
        </div>
      </Band>

      {/* 02 — BY WHAT THEY ARE ABOUT ----------------------------- */}
      <Band tone="plum" grain>
        <SectionHead
          tone="plum"
          eyebrow="By subject"
          title={
            <>
              Or read them <span className="em-serif">in order</span>.
            </>
          }
          lede="The alphabet is right for looking something up and wrong for learning the field. Read a category end to end and the entries argue with each other in a useful way."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => {
            const group = termsInCategory(c);
            if (!group.length) return null;
            return (
              <Rise key={c} delay={i * 55}>
                <div className="h-full rounded-(--radius-card) bg-plum-2 p-6 md:p-7">
                  <Eyebrow tone="plum" as="h2">
                    {c}
                  </Eyebrow>
                  <ul className="mt-5 border-t border-rule-plum">
                    {group.map((t) => (
                      <li key={t.slug}>
                        <Link
                          href={`/glossary/${t.slug}`}
                          className="link-underline flex items-baseline justify-between gap-3 border-b border-rule-plum py-3 text-on-plum"
                        >
                          {t.term}
                          <span aria-hidden className="row-arrow text-violet-lift">
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Rise>
            );
          })}
        </div>
      </Band>

      {/* 03 — WHAT IS NOT HERE ----------------------------------- */}
      <Band tone="sand" grain>
        <div className="grid-12 gap-y-10 items-start">
          <Rise className="col-span-12 lg:col-span-5">
            <Eyebrow>What you will not find</Eyebrow>
            <h2 className="mt-5 max-w-[16ch] font-display text-display-l text-balance">
              No rates.{" "}
              <span className="em-serif text-violet-deep">Anywhere</span>.
            </h2>
          </Rise>
          <Rise delay={80} className="col-span-12 lg:col-span-6 lg:col-start-7">
            <p className="max-w-[58ch] text-body-l">
              Every entry that could carry a price carries the variables
              that move it instead.
            </p>
            <p className="mt-6 max-w-[58ch] text-on-sand-dim">
              We own no hoardings, screens or airtime, so every plan is
              negotiated against several vendors. A published rate would
              describe what we would like to charge rather than what the
              market will take — and on formats like DOOH, a rate without
              a loop length is not information at all.
            </p>
            <p className="mt-6 max-w-[58ch] text-on-sand-dim">
              The compliance entries carry a second caution. Municipal
              advertising rules differ between corporations, several are
              actively litigated, and they change. Those entries describe
              the shape of a position and the questions worth asking. They
              are not legal or tax advice, and where we could not verify a
              rule against the issuing authority&rsquo;s own published
              material, the entry says so rather than asserting it.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Btn href="/what-we-do">See what we actually do</Btn>
              <Btn href="/cities" variant="outline-plum">
                Or start with a market
              </Btn>
            </div>
          </Rise>
        </div>
      </Band>

      <PageSchema
        path="/glossary"
        name="Indian outdoor advertising glossary"
        description="The vocabulary of Indian outdoor advertising, defined — hoarding, unipole, BQS, pole kiosk, sky-sign, DOOH loop, flexing, barter and the compliance terms around them."
        type="CollectionPage"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            /* The set, declared once, so every entry can point at it by
               @id instead of restating what the collection is. */
            "@type": "DefinedTermSet",
            "@id": `${site.url}/glossary#set`,
            name: "Indian outdoor advertising glossary",
            description:
              "Definitions of the vocabulary used in Indian outdoor, transit and digital out-of-home advertising.",
            url: `${site.url}/glossary`,
            inLanguage: "en-IN",
            publisher: { "@id": organisationId },
            dateModified: site.contentReviewed,
            hasDefinedTerm: terms.map((t) => ({
              "@type": "DefinedTerm",
              "@id": `${site.url}/glossary/${t.slug}#term`,
              name: t.term,
              ...(t.alsoCalled?.length
                ? { alternateName: t.alsoCalled }
                : {}),
              description: t.definition,
              url: `${site.url}/glossary/${t.slug}`,
            })),
          }),
        }}
      />
    </>
  );
}
