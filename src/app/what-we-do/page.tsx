import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Band, Btn, Eyebrow, Rise } from "@/components/UI";
import { formatLines } from "@/lib/formats";
import { capabilities, process, buyingPractice, scaleNote, site } from "@/lib/site";
import { capabilityDetail } from "@/lib/capabilityDetail";
import { statementPlate } from "@/lib/streets";
import BriefButton from "@/components/BriefButton";
import PageSchema from "@/components/PageSchema";
import { routeMetadata } from "@/lib/metadata";

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return routeMetadata(parent, {
    path: "/what-we-do",
    title: "How we work — Independent OOH planning and buying",
    description:
      "How Bizex4U plans an outdoor buy: objective, catchment, comparison, negotiation, execution and measurement. We do not own inventory.",
  });
}

const core = capabilities.filter((c) => c.href.startsWith("/what-we-do/")).slice(0, 4);
const supporting = capabilities.filter(
  (c) => c.href.includes("activations") || c.href === "/barter",
);

export default function WhatWeDoPage() {
  return (
    <>
      <section className="relative bg-sand pt-14 text-on-sand md:pt-16">
        <div className="shell">
          <div className="grid-12 items-stretch gap-y-0 lg:min-h-[calc(100svh-10.5rem)]">
            <div className="col-span-12 order-2 flex flex-col justify-center gap-8 py-10 lg:order-1 lg:col-span-6 lg:py-10 lg:pr-10">
              <div>
                <Rise>
                  <Eyebrow>How we work</Eyebrow>
                </Rise>
                <Rise delay={40}>
                  <h1 className="mt-5 max-w-[16ch] font-display text-display-xl text-balance">
                    How an OOH buy{" "}
                    <span className="em-serif text-violet-deep">is decided.</span>
                  </h1>
                </Rise>
                <Rise delay={80}>
                  <p className="speakable-answer mt-6 max-w-[44ch] text-body-l text-on-sand-dim">
                    We do not own the sites. We plan the outdoor buy across
                    owners — objective, catchment, comparison, negotiation —
                    then run and document it. Outdoor first; the rest only
                    when the objective needs it.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                    <BriefButton size="lg" context="A plan for my market">
                      Request a plan
                    </BriefButton>
                    <Btn href="#sequence" variant="outline-plum" size="lg">
                      The ten steps
                    </Btn>
                  </div>
                </Rise>
              </div>

              <Rise delay={140} className="border-t border-rule-sand pt-6">
                <p className="mono-kicker text-violet-deep">
                  Independence
                </p>
                <p className="mt-2 max-w-[44ch] text-body-s text-on-sand-dim">
                  A media owner sells what it holds. We have nothing to fill,
                  which is why we can argue against a site as easily as for
                  one. Starting at the commercial model is how a budget gets
                  spent before a plan exists.
                </p>
              </Rise>
            </div>

            <Rise
              delay={60}
              className="relative col-span-12 order-1 min-h-[18rem] bg-plum sm:min-h-[24rem] lg:order-2 lg:col-span-6 lg:h-auto lg:min-h-full"
            >
              <Link href="/work" className="group absolute inset-0 block">
                <Image
                  src={statementPlate.src}
                  alt={statementPlate.alt}
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover object-[50%_42%] transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-linear-to-t from-plum from-20% to-transparent p-5 text-on-plum md:p-7">
                  <span>
                    <span className="block mono-kicker text-violet-lift">
                      Selected work
                    </span>
                    <span className="mt-1.5 block text-h3">
                      {statementPlate.city}
                    </span>
                    <span className="mt-1 block text-body-s text-on-plum-dim">
                      Photographed on site while it ran.
                    </span>
                  </span>
                  <span className="shrink-0 mono-kicker text-violet-lift">
                    See the work →
                  </span>
                </span>
              </Link>
            </Rise>
          </div>
        </div>
      </section>

      <Band tone="sand2" grain>
        <Rise>
          <Eyebrow>Outdoor first</Eyebrow>
          <h2 className="mt-5 max-w-[24ch] font-display text-display-l text-balance">
            Four ways a plan actually{" "}
            <span className="em-serif text-violet-deep">spends money</span>.
          </h2>
          <p className="mt-6 max-w-[54ch] text-on-sand-dim">
            Activations and barter sit after these. A plan that uses every
            capability is usually a plan that has not made a decision.
          </p>
        </Rise>

        <ul className="mt-12 border-t border-rule-sand">
          {core.map((c, i) => {
            const d = capabilityDetail[c.href.split("/").pop()!];
            const formats = formatLines[c.index];
            const photoLeft = i % 2 === 0;
            return (
              <Rise key={c.href} as="li" delay={Math.min(i, 4) * 40}>
                <article className="grid-12 items-stretch gap-y-6 border-b border-rule-sand py-10 md:py-14">
                  <div
                    className={`relative col-span-12 min-h-[14rem] bg-plum sm:min-h-[18rem] lg:col-span-5 ${
                      photoLeft ? "" : "lg:col-start-8"
                    }`}
                  >
                    <Link href={c.href} className="absolute inset-0 block">
                      <Image
                        src={d.frame.src}
                        alt={d.frame.alt}
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </Link>
                  </div>
                  <div
                    className={`col-span-12 flex flex-col justify-center lg:col-span-6 ${
                      photoLeft ? "lg:col-start-7" : "lg:col-start-1 lg:row-start-1"
                    }`}
                  >
                    <p className="mono-kicker text-violet-deep">
                      {c.index} · {c.verb}
                    </p>
                    <h3 className="mt-3 font-display text-h1 text-balance">
                      {c.title}
                    </h3>
                    <p className="mt-4 max-w-[46ch] text-body-l text-on-sand-dim">
                      {c.long}
                    </p>
                    <p className="mt-4 max-w-[42ch] font-display text-h3 text-balance">
                      {d.thesis}
                    </p>
                    {formats ? (
                      <p className="mt-5 max-w-[46ch] text-body-s text-on-sand-dim">
                        {formats.map((f) => f.name).join(" · ")}
                      </p>
                    ) : null}
                    <p className="mt-6">
                      <Link
                        href={c.href}
                        className="link-underline text-body-s font-medium"
                      >
                        How we plan {c.title.toLowerCase()}
                      </Link>
                    </p>
                  </div>
                </article>
              </Rise>
            );
          })}
        </ul>
      </Band>

      <Band tone="plum" grain id="sequence">
        <div className="grid-12 items-end gap-y-8">
          <Rise className="col-span-12 lg:col-span-7">
            <Eyebrow tone="plum">The sequence</Eyebrow>
            <h2 className="mt-4 max-w-[22ch] font-display text-h1 text-balance">
              Ten steps between the brief and a board that actually ran.
            </h2>
          </Rise>
          <Rise delay={80} className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p className="max-w-[42ch] text-body-s text-on-plum-dim">
              We do not own inventory. Each step is a decision we can argue —
              which is the only reason a brand should let us spend its money.
            </p>
          </Rise>
        </div>

        <ol className="mt-10 grid border-t border-rule-plum md:grid-cols-2">
          {process.map((step, i) => (
            <Rise key={step.index} as="li" delay={Math.min(i, 8) * 30}>
              <div
                className={`grid grid-cols-12 gap-x-4 gap-y-1 border-b border-rule-plum py-4 md:py-5 ${
                  i % 2 === 0 ? "md:pr-8" : "md:border-l md:pl-8"
                }`}
              >
                <span className="col-span-2 mono-kicker text-violet-lift">
                  {step.index}
                </span>
                <div className="col-span-10">
                  <h3 className="font-sans text-h3">{step.title}</h3>
                  <p className="mt-1.5 text-body-s text-on-plum-dim">
                    {step.body}
                  </p>
                </div>
              </div>
            </Rise>
          ))}
        </ol>
      </Band>

      <Band tone="sand2" grain id="how-we-buy">
        <div className="grid-12 items-end gap-y-8">
          <Rise className="col-span-12 lg:col-span-7">
            <Eyebrow>How we buy</Eyebrow>
            <h2 className="mt-4 max-w-[22ch] font-display text-h1 text-balance">
              What a Media Director can diligence before the brief.
            </h2>
          </Rise>
          <Rise delay={80} className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p className="max-w-[42ch] text-body-s text-on-sand-dim">
              {scaleNote}
            </p>
          </Rise>
        </div>
        <ol className="mt-10 border-t border-rule-sand">
          {buyingPractice.map((row, i) => (
            <Rise key={row.title} as="li" delay={Math.min(i, 5) * 40}>
              <div className="grid-12 gap-y-2 border-b border-rule-sand py-6 md:py-8">
                <h3 className="col-span-12 font-display text-h3 md:col-span-4">
                  {row.title}
                </h3>
                <p className="col-span-12 max-w-[62ch] text-body-s text-on-sand-dim md:col-span-7 md:col-start-6">
                  {row.body}
                </p>
              </div>
            </Rise>
          ))}
        </ol>
      </Band>

      <Band tone="sand" grain>
        <div className="grid-12 gap-y-8">
          <Rise className="col-span-12 lg:col-span-4">
            <Eyebrow>When to spend it elsewhere</Eyebrow>
            <h2 className="mt-5 max-w-[16ch] font-display text-display-l text-balance">
              Each of these has a{" "}
              <span className="em-serif text-violet-deep">wrong use</span>.
            </h2>
          </Rise>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <ul className="border-t border-rule-sand">
              {core.map((c, i) => (
                <Rise key={c.href} as="li" delay={i * 50}>
                  <div className="border-b border-rule-sand py-5">
                    <h3 className="text-h3">{c.title}</h3>
                    <p className="mt-2 max-w-[60ch] text-body-s text-on-sand-dim">
                      {capabilityDetail[c.href.split("/").pop()!].notFor}
                    </p>
                  </div>
                </Rise>
              ))}
            </ul>
          </div>
        </div>
      </Band>

      <Band tone="sand2" grain>
        <Rise>
          <Eyebrow>When the objective needs it</Eyebrow>
          <h2 className="mt-5 max-w-[20ch] font-display text-display-l text-balance">
            Supporting, not{" "}
            <span className="em-serif text-violet-deep">a menu</span>.
          </h2>
        </Rise>
        <ul className="mt-10 grid gap-px bg-rule-sand sm:grid-cols-2">
          {supporting.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className="group flex h-full flex-col bg-sand-2 p-6 transition-colors duration-200 hover:bg-sand md:p-8"
              >
                <p className="mono-kicker text-violet-deep">
                  {c.title}
                </p>
                <p className="mt-3 max-w-[42ch] text-body-l">{c.long}</p>
                <span className="mt-6 text-body-s font-medium">
                  {c.linkLabel ?? "Read"} →
                </span>
              </Link>
            </li>
          ))}
          {/* Audience and environment pages. Beside the capabilities,
              not among them — the nav argues the six; these answer the
              two briefs that arrive already named. */}
          <li>
            <Link
              href="/what-we-do/airport-advertising"
              className="group flex h-full flex-col bg-sand-2 p-6 transition-colors duration-200 hover:bg-sand md:p-8"
            >
              <p className="mono-kicker text-violet-deep">
                Airport advertising
              </p>
              <p className="mt-3 max-w-[42ch] text-body-l">
                Terminal media, approach corridors and airport DOOH,
                priced against each other rather than sold as one.
              </p>
              <span className="mt-6 text-body-s font-medium">
                The airport buy →
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/what-we-do/fmcg-advertising"
              className="group flex h-full flex-col bg-sand-2 p-6 transition-colors duration-200 hover:bg-sand md:p-8"
            >
              <p className="mono-kicker text-violet-deep">
                FMCG advertising
              </p>
              <p className="mt-3 max-w-[42ch] text-body-l">
                Frequency formats planned along distribution, with barter
                when the balance sheet is stock rather than cash.
              </p>
              <span className="mt-6 text-body-s font-medium">
                The FMCG playbook →
              </span>
            </Link>
          </li>
        </ul>
      </Band>

      <Band tone="violet" grain>
        <div className="grid-12 items-end gap-y-8">
          <Rise className="col-span-12 lg:col-span-7">
            <Eyebrow tone="violet">Next</Eyebrow>
            <h2 className="mt-5 max-w-[20ch] font-display text-display-l text-balance">
              Tell us the market and the{" "}
              <span className="em-serif">objective</span>.
            </h2>
            <p className="mt-6 max-w-[46ch] text-body-l">
              We will tell you which of these actually apply, and which do
              not. {site.sla.acknowledge} {site.sla.plan}
            </p>
          </Rise>
          <Rise delay={80} className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="flex flex-wrap gap-3">
              <BriefButton variant="sand" size="lg" context="What we do">
                Request a plan
              </BriefButton>
              <Btn href="/contact" variant="outline-sand" size="lg">
                Contact
              </Btn>
            </div>
          </Rise>
        </div>
      </Band>
      <PageSchema
        path="/what-we-do"
        name={"How Bizex4U works"}
        description={
          "Independent OOH planning and buying: outdoor and transit, DOOH, retail, broadcast, print and cinema. We do not own inventory."
        }
      />
    </>
  );
}
