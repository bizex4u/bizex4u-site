import type { Metadata } from "next";
import Link from "next/link";
import { Band, Btn, Eyebrow, Rise } from "@/components/UI";
import { exchangeLine, formatLines } from "@/lib/formats";
import { capabilities } from "@/lib/site";
import { capabilityDetail } from "@/lib/capabilityDetail";
import BriefButton from "@/components/BriefButton";
import PageSchema from "@/components/PageSchema";
import PlanAssembly from "@/components/PlanAssembly";

export const metadata: Metadata = {
  title:
    "What We Do — Outdoor, DOOH, Retail & Barter",
  description:
    "Six capabilities on one plan: outdoor and transit, DOOH, retail, broadcast, print and cinema, activations, and the barter model that funds them.",
  alternates: { canonical: "/what-we-do" },
};

/* The order a plan is actually assembled in. Worth stating plainly,
   because the common failure is starting at step four. */
const sequence = [
  {
    title: "The objective",
    body: "Launch, defend, drive footfall, or hold presence on a capped budget. Everything downstream changes depending on which one it is, so it is settled first and in your words rather than ours.",
  },
  {
    title: "The market",
    body: "Which cities, and inside them which corridors and catchments. A national plan that has not been argued at city level is a budget split, not a media plan.",
  },
  {
    title: "The mix",
    body: "Which of the six capabilities carry the weight and which support. Most plans use two or three. A plan that uses all six is usually a plan that has not made a decision.",
  },
  {
    title: "The commercial model",
    body: "Cash, part-barter, or barter. This is a question about your balance sheet rather than your media plan, and it is answered last because it does not change what good media looks like.",
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      {/* HERO ---------------------------------------------------- */}
      <section className="grain relative overflow-hidden bg-sand pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="shell relative z-10">
          <div className="grid-12 items-end gap-y-10">
            <div className="col-span-12 lg:col-span-7">
              <Rise>
                <Eyebrow deva="हम क्या करते हैं">What we do</Eyebrow>
              </Rise>
              <Rise delay={60}>
                <h1 className="mt-6 font-display text-display-xl text-balance">
                  Six capabilities.{" "}
                  <span className="em-serif text-violet-deep">One plan.</span>
                </h1>
              </Rise>
              <Rise delay={120}>
                <p className="speakable-answer mt-7 max-w-[50ch] text-body-l text-on-sand-dim">
                  We plan, negotiate and run campaigns across outdoor, digital,
                  retail, broadcast and ground presence in more than forty
                  Indian cities — and structure the commercial side so the
                  budget is not always the constraint.
                </p>
                <div className="mt-9">
                  <BriefButton size="lg" context="A plan for my market">
                    Get a plan for your market
                  </BriefButton>
                </div>
              </Rise>
            </div>

            <Rise delay={180} className="col-span-12 lg:col-span-4 lg:col-start-9">
              <PlanAssembly
                steps={sequence.map((s, i) => ({
                  index: String(i + 1).padStart(2, "0"),
                  title: s.title,
                }))}
              />
              <p className="mt-6 max-w-[34ch] text-body-s text-on-sand-dim">
                We do not own the sites. We buy them, and being independent of
                any one owner is exactly why we can argue for the right ones.
              </p>
            </Rise>
          </div>
        </div>
      </section>

      {/* 01 — THE INDEX ------------------------------------------ */}
      <Band tone="plum" grain>
        <Rise>
          <Eyebrow tone="plum">The index</Eyebrow>
          {/* Was "Drawn at true proportion" — a claim about a drawing
              that no longer exists, and which the drawing never
              honoured anyway. See lib/formats.ts. */}
          <h2 className="mt-5 max-w-[26ch] font-display text-display-l text-balance">
            Six products, and they are{" "}
            <span className="em-serif">not interchangeable</span>.
          </h2>
        </Rise>

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Rise key={c.href} as="li" delay={i * 55}>
              <Link
                href={c.href}
                className={`group flex h-full flex-col rounded-(--radius-card) p-6 transition-colors duration-200 md:p-7 ${
                  c.accent
                    ? "bg-violet-deep text-white hover:bg-violet"
                    : "bg-plum-2 hover:bg-plum-3"
                }`}
              >
                <span
                  className={`eyebrow ${
                    c.accent ? "text-on-violet-dim" : "text-violet-lift"
                  }`}
                >
                  {c.index}
                </span>
                <h3 className="mt-3 font-display text-h2 text-balance">
                  {c.title}
                </h3>
                <p
                  className={`mt-3 max-w-[38ch] ${
                    c.accent ? "text-on-violet-dim" : "text-on-plum-dim"
                  }`}
                >
                  {c.long}
                </p>

                {formatLines[c.index] && (
                  <dl className="mt-auto grid pt-8">
                    {formatLines[c.index].map((f) => (
                      <div
                        key={f.name}
                        className="flex items-baseline justify-between gap-4 border-t border-white/12 py-2.5"
                      >
                        <dt className="text-body-s">{f.name}</dt>
                        <dd className="shrink-0 font-mono text-nano tracking-[0.06em] text-on-plum-dim uppercase">
                          {f.spec}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                {c.accent && (
                  <div className="mt-auto pt-8">
                    <p className="font-display text-h2 text-balance">
                      {exchangeLine.give}
                    </p>
                    <p aria-hidden className="my-1.5 text-h3 text-on-violet-dim">
                      ⇄
                    </p>
                    <p className="font-display text-h2 text-balance">
                      {exchangeLine.get}
                    </p>
                  </div>
                )}

                <span className="mt-auto inline-flex items-center gap-1.5 pt-7 text-body-s font-medium">
                  {c.linkLabel ?? "Explore"} <span className="row-arrow">→</span>
                </span>
              </Link>
            </Rise>
          ))}
        </ul>
      </Band>

      {/* 02 — HOW A PLAN GETS BUILT ------------------------------ */}
      <Band tone="sand" grain>
        <Rise>
          <Eyebrow deva="योजना कैसे बनती है">How a plan gets built</Eyebrow>
          <h2 className="mt-5 max-w-[22ch] font-display text-display-l text-balance">
            In that order,{" "}
            <span className="em-serif text-violet-deep">every time</span>.
          </h2>
        </Rise>

        <ol className="mt-12 border-t border-rule-sand">
          {sequence.map((s, i) => (
            <Rise key={s.title} as="li" delay={i * 55}>
              <div className="grid grid-cols-12 gap-x-6 gap-y-3 border-b border-rule-sand py-7 md:py-9">
                <span className="col-span-12 font-mono text-caption tracking-[0.08em] text-violet-deep md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="col-span-12 font-display text-h2 text-balance md:col-span-5">
                  {s.title}
                </h3>
                <p className="col-span-12 max-w-[62ch] text-on-sand-dim md:col-span-6">
                  {s.body}
                </p>
              </div>
            </Rise>
          ))}
        </ol>
      </Band>

      {/* 03 — WHEN TO SPEND ELSEWHERE ---------------------------- */}
      <Band tone="sand2" grain>
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
              {capabilities
                .filter((c) => capabilityDetail[c.href.split("/").pop()!])
                .map((c, i) => (
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

      {/* 04 — CTA ------------------------------------------------- */}
      <Band tone="violet" grain>
        <div className="grid-12 items-end gap-y-8">
          <Rise className="col-span-12 lg:col-span-7">
            <Eyebrow tone="violet">Next</Eyebrow>
            <h2 className="mt-5 max-w-[20ch] font-display text-display-l text-balance">
              Tell us the market and the{" "}
              <span className="em-serif">objective</span>.
            </h2>
            <p className="mt-6 max-w-[46ch] text-body-l">
              We will tell you which of the six actually apply, and which do
              not. Usually answered the same working day.
            </p>
          </Rise>
          <Rise delay={80} className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="flex flex-wrap gap-3">
              <BriefButton variant="sand" size="lg" context="What we do">
                Send a brief
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
        name={"What Bizex4U Does"}
        description={"Six capabilities on one plan: outdoor and transit, DOOH, retail, broadcast, print and cinema, activations, and the barter model that funds them."}
      />
    </>
  );
}
