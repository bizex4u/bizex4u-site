import Link from "next/link";
import Image from "next/image";
import { Band, Btn, Eyebrow, Rise } from "@/components/UI";
import { Faq } from "@/components/Ledger";
import PageSchema from "@/components/PageSchema";
import { capabilityDetail } from "@/lib/capabilityDetail";
import { formatLines } from "@/lib/formats";
import { termsForCapability } from "@/lib/glossary";
import { capabilities, site } from "@/lib/site";
import { speakable } from "@/lib/schema";
import AskAssistants from "@/components/AskAssistants";
import BriefButton from "@/components/BriefButton";

/**
 * One template, five pages. The pages differ in content and photograph,
 * not in argument structure — inventing a different rhythm for each
 * would make the site feel assembled rather than designed.
 *
 * Photographs carry the environment. Type carries the judgement.
 * There is no format drawing and no schematic: those asked the reader
 * to decode a diagram before they had the argument.
 */
export default function CapabilityPage({ slug }: { slug: string }) {
  const cap = capabilities.find((c) => c.href === `/what-we-do/${slug}`)!;
  const d = capabilityDetail[slug];
  const others = capabilities.filter((c) => c.href !== cap.href);
  const glossaryTerms = termsForCapability(slug);
  const formats = formatLines[cap.index];

  return (
    <>
      <section className="relative bg-sand pt-14 text-on-sand md:pt-16">
        <div className="shell">
          <nav aria-label="Breadcrumb" className="py-5">
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
                  href="/what-we-do"
                  className="link-underline -my-2 inline-flex min-h-8 items-center py-2"
                >
                  How we work
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-violet-deep">{cap.title}</li>
            </ol>
          </nav>

          <div className="grid-12 items-stretch gap-y-0">
            <div className="col-span-12 order-2 flex flex-col justify-center gap-8 py-10 lg:order-1 lg:col-span-6 lg:py-12 lg:pr-10">
              <div>
                <Rise>
                  <Eyebrow>
                    {cap.index} — How we work
                  </Eyebrow>
                </Rise>
                <Rise delay={40}>
                  <h1 className="mt-5 max-w-[16ch] font-display text-display-xl text-balance">
                    {cap.title}.
                  </h1>
                </Rise>
                <Rise delay={80}>
                  <p className="speakable-answer mt-6 max-w-[44ch] text-body-l text-on-sand-dim">
                    {d.lede}
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                    <BriefButton size="lg" context={cap.title}>
                      Request a plan
                    </BriefButton>
                    <Btn href="/what-we-do" variant="outline-plum" size="lg">
                      The full sequence
                    </Btn>
                  </div>
                </Rise>
              </div>

              <Rise delay={140} className="border-t border-rule-sand pt-6">
                <p className="mono-kicker text-violet-deep">
                  The decision
                </p>
                <p className="mt-2 max-w-[40ch] font-display text-h3 text-balance">
                  {d.thesis}
                </p>
              </Rise>
            </div>

            <Rise
              delay={60}
              className="relative col-span-12 order-1 min-h-[18rem] bg-plum sm:min-h-[24rem] lg:order-2 lg:col-span-6 lg:h-auto lg:min-h-full"
            >
              <figure className="absolute inset-0 m-0">
                <Image
                  src={d.frame.src}
                  alt={d.frame.alt}
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover object-[50%_42%]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-plum from-20% to-transparent p-5 text-on-plum md:p-7">
                  <span className="block mono-kicker text-violet-lift">
                    {d.frame.city}
                  </span>
                  <span className="mt-1.5 block max-w-[36ch] text-body-s text-on-plum-dim">
                    {d.frame.caption}
                  </span>
                </figcaption>
              </figure>
            </Rise>
          </div>
        </div>
      </section>

      <Band tone="sand2" grain>
        <div className="grid-12 gap-y-8">
          <Rise className="col-span-12 lg:col-span-4">
            <Eyebrow>Why it is worth planning</Eyebrow>
          </Rise>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            {d.argument.map((para, i) => (
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

      {formats ? (
        <Band tone="sand" grain>
          <div className="grid-12 gap-y-10">
            <Rise className="col-span-12 lg:col-span-5">
              <Eyebrow>What we plan</Eyebrow>
              <h2 className="mt-5 max-w-[16ch] font-display text-display-l text-balance">
                Categories,{" "}
                <span className="em-serif text-violet-deep">not a holding</span>.
              </h2>
              <p className="mt-6 max-w-[40ch] text-on-sand-dim">
                Typical sizes and how the market buys them. None of this
                is a site we hold.
              </p>
            </Rise>
            <Rise delay={80} className="col-span-12 lg:col-span-6 lg:col-start-7">
              <dl className="border-t border-rule-sand">
                {formats.map((f) => (
                  <div
                    key={f.name}
                    className="flex items-baseline justify-between gap-6 border-b border-rule-sand py-4"
                  >
                    <dt className="text-h3">{f.name}</dt>
                    <dd className="shrink-0 mono-kicker text-on-sand-dim">
                      {f.spec}
                    </dd>
                  </div>
                ))}
              </dl>
            </Rise>
          </div>
        </Band>
      ) : null}

      <Band tone="plum" grain>
        <Rise>
          <Eyebrow tone="plum">How the buy is made</Eyebrow>
          <h2 className="mt-5 max-w-[22ch] font-display text-display-l text-balance">
            The part that decides{" "}
            <span className="em-serif">whether it works</span>.
          </h2>
        </Rise>

        <ol className="mt-12 border-t border-rule-plum">
          {d.method.map((m, i) => (
            <Rise key={m.title} as="li" delay={i * 55}>
              <div className="grid grid-cols-12 gap-x-6 gap-y-3 border-b border-rule-plum py-7 md:py-9">
                <span className="col-span-12 font-mono text-caption tracking-[0.08em] text-violet-lift md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="col-span-12 font-display text-h2 text-balance md:col-span-5">
                  {m.title}
                </h3>
                <p className="col-span-12 max-w-[62ch] text-on-plum-dim md:col-span-6">
                  {m.body}
                </p>
              </div>
            </Rise>
          ))}
        </ol>

        {glossaryTerms.length ? (
          <Rise>
            <div className="mt-16 border-t border-rule-plum pt-8">
              <Eyebrow tone="plum" muted>
                If a word above was doing work you had to guess at
              </Eyebrow>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {glossaryTerms.map((t) => (
                  <li key={t.slug}>
                    <Link
                      href={`/glossary/${t.slug}`}
                      className="inline-flex min-h-11 items-center rounded-sm border border-white/20 px-4 text-body-s transition-colors duration-200 hover:border-white hover:bg-white/8"
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

      <Band tone="sand" grain>
        <div className="grid-12 gap-y-12">
          <Rise className="col-span-12 lg:col-span-6 lg:pr-10">
            <Eyebrow>When it earns its place</Eyebrow>
            <h2 className="mt-5 max-w-[16ch] font-display text-display-l text-balance">
              Concrete situations,{" "}
              <span className="em-serif text-violet-deep">not a menu</span>.
            </h2>
            <ul className="mt-10 border-t border-rule-sand">
              {d.whenItWorks.map((item, i) => (
                <li key={item} className="flex gap-4 border-b border-rule-sand py-5">
                  <span className="mono-kicker text-violet-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="max-w-[52ch] text-on-sand-dim">{item}</span>
                </li>
              ))}
            </ul>
          </Rise>
          <Rise delay={80} className="col-span-12 lg:col-span-6 lg:border-l lg:border-rule-sand lg:pl-10">
            <Eyebrow>When to spend it elsewhere</Eyebrow>
            <h2 className="mt-5 max-w-[16ch] font-display text-display-l text-balance">
              We would rather{" "}
              <span className="em-serif text-violet-deep">say so early</span>.
            </h2>
            <p className="mt-8 max-w-[46ch] text-body-l">{d.notFor}</p>
            <div className="mt-8">
              <BriefButton size="lg" context={cap.title}>
                Tell us the objective
              </BriefButton>
            </div>
          </Rise>
        </div>
      </Band>

      <Band tone="sand2" grain>
        <div className="grid-12 gap-y-10">
          <Rise className="col-span-12 lg:col-span-5">
            <Eyebrow>What lands on your desk</Eyebrow>
            <h2 className="mt-5 max-w-[16ch] font-display text-display-l text-balance">
              Documented,{" "}
              <span className="em-serif text-violet-deep">not described</span>.
            </h2>
            <p className="mt-6 max-w-[40ch] text-on-sand-dim">
              Every campaign ends with a file you can hand to someone who
              was not in the room.
            </p>
          </Rise>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <ul className="border-t border-rule-sand">
              {d.deliverables.map((item) => (
                <Rise key={item} as="li">
                  <div className="flex gap-4 border-b border-rule-sand py-4">
                    <span aria-hidden className="text-violet-deep">
                      —
                    </span>
                    <span className="text-on-sand-dim">{item}</span>
                  </div>
                </Rise>
              ))}
            </ul>
          </div>
        </div>
      </Band>

      <Band tone="sand" grain>
        <Rise>
          <Eyebrow>Questions that actually get asked</Eyebrow>
          <h2 className="mt-5 max-w-[20ch] font-display text-display-l text-balance">
            Including the ones about{" "}
            <span className="em-serif text-violet-deep">cost</span>.
          </h2>
        </Rise>
        <div className="mt-12">
          <Faq items={d.faq} />
        </div>
        <AskAssistants tone="sand" variant="page" />
      </Band>

      <Band tone="plum" grain>
        <Rise>
          <Eyebrow tone="plum">The rest of the plan</Eyebrow>
          <h2 className="mt-5 max-w-[24ch] font-display text-display-l text-balance">
            Most plans use{" "}
            <span className="em-serif">more than one</span>.
          </h2>
          <p className="mt-6 max-w-[58ch] text-on-plum-dim">{d.sitsInPlan}</p>
        </Rise>

        <ul className="mt-12 grid gap-px bg-rule-plum sm:grid-cols-2">
          {others.map((c, i) => (
            <Rise key={c.href} as="li" delay={i * 40}>
              <Link
                href={c.href}
                className="group flex h-full flex-col bg-plum p-6 transition-colors duration-200 hover:bg-plum-2 md:p-7"
              >
                <span className="eyebrow text-violet-lift">{c.index}</span>
                <h3 className="mt-3 font-display text-h2 text-balance">
                  {c.title}
                </h3>
                <p className="mt-3 text-on-plum-dim">{c.short}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-7 text-body-s font-medium">
                  {c.linkLabel ?? "Read"} <span className="row-arrow">→</span>
                </span>
              </Link>
            </Rise>
          ))}
        </ul>
      </Band>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: site.url },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "How we work",
                  item: `${site.url}/what-we-do`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: cap.title,
                  item: `${site.url}${cap.href}`,
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": `${site.url}${cap.href}#faq`,
              dateModified: site.contentReviewed,
              inLanguage: "en-IN",
              speakable,
              mainEntity: d.faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]),
        }}
      />
      <PageSchema
        path={cap.href}
        name={cap.title}
        description={d.lede}
      />
    </>
  );
}
