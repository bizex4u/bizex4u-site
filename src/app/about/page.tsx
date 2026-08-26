import type { Metadata } from "next";
import { Band, Btn, Card, Eyebrow, Rise } from "@/components/UI";
import { clients, sectorsServed, site } from "@/lib/site";
import BriefButton from "@/components/BriefButton";

export const metadata: Metadata = {
  title: "About — An Independent Indian Media Network",
  description:
    "Bizex4U is an independent outdoor and media network operating in more than forty Indian cities from Kanpur, Uttar Pradesh. No owner mandate, no inherited rate card.",
  alternates: { canonical: "/about" },
};

/* Independence is the only genuinely defensible position a mid-size
   Indian media company has against a network agency. Everything on
   this page is an argument for it, expressed as a consequence for the
   client rather than as a claim about ourselves. */
const principles = [
  {
    index: "01",
    title: "No owner to please",
    body: "We do not own hoardings, screens or airtime. That means there is no unsold inventory quietly shaping what gets recommended to you. When we argue for a site it is because of where it sits, and when we argue against one we have nothing to lose by saying so.",
  },
  {
    index: "02",
    title: "The plan is argued, not exported",
    body: "A media plan should be able to survive the question why this and not that, site by site. Ours are written to be interrogated by someone who knows the city better than we do, because in your home market you usually will.",
  },
  {
    index: "03",
    title: "Delivery is documented by default",
    body: "Every placement is photographed on site, geo-tagged and dated, and the file goes to you rather than a summary of it. Non-delivery is the loudest unspoken fear in Indian outdoor and no amount of reporting language answers it as well as a photograph does.",
  },
  {
    index: "04",
    title: "Cash is not the only way to buy",
    body: "Where a brand holds goods, capacity or vouchers, we will structure the campaign against them at a value agreed in writing before either side performs. It is a different commercial route to the same media, and it exists because a capped budget should not decide a brand's visibility.",
  },
];

const facts = [
  { label: "Based in", value: "Kanpur", note: "Uttar Pradesh, India" },
  { label: "Operating in", value: "40+", note: "Metros and tier-2 cities" },
  { label: "Capabilities", value: "Six", note: "Outdoor to barter, on one plan" },
  { label: "Ownership", value: "Independent", note: "No network mandate" },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO ---------------------------------------------------- */}
      <section className="grain relative overflow-hidden bg-sand pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="shell relative z-10">
          <div className="grid-12 items-end gap-y-10">
            <div className="col-span-12 lg:col-span-7">
              <Rise>
                <Eyebrow deva="हमारे बारे में">About Bizex4U</Eyebrow>
              </Rise>
              <Rise delay={60}>
                <h1 className="mt-6 font-display text-display-xl text-balance">
                  An independent Indian{" "}
                  <span className="em-serif text-violet-deep">
                    media network
                  </span>
                  .
                </h1>
              </Rise>
              <Rise delay={120}>
                <p className="mt-7 max-w-[50ch] text-body-l text-on-sand-dim">
                  We plan, negotiate and run outdoor, retail and broadcast
                  campaigns in more than forty Indian cities — and structure
                  the commercial side so that a capped budget does not have to
                  decide how visible a brand is.
                </p>
              </Rise>
            </div>

            <Rise delay={180} className="col-span-12 lg:col-span-4 lg:col-start-9">
              <Card bg="bg-plum" className="text-on-plum">
                <p className="eyebrow text-violet-lift">Where we are</p>
                <p className="mt-5 font-display text-h2">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </p>
                <p className="mt-5 text-on-plum-dim">
                  A UP base is not incidental. Most of the growth in Indian
                  outdoor is happening in tier-2 markets, and they are planned
                  best by people who live in one.
                </p>
              </Card>
            </Rise>
          </div>
        </div>
      </section>

      {/* 01 — THE NUMBERS ---------------------------------------- */}
      <Band tone="sand2" className="py-12 md:py-14" grain>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {facts.map((f, i) => (
            <Rise key={f.label} delay={i * 60}>
              <dt className="eyebrow text-on-sand-dim">{f.label}</dt>
              <dd className="mt-3 font-display text-[clamp(2rem,4vw,3.25rem)] leading-none">
                {f.value}
              </dd>
              <p className="mt-2.5 max-w-[24ch] text-body-s text-on-sand-dim">
                {f.note}
              </p>
            </Rise>
          ))}
        </dl>
      </Band>

      {/* 02 — HOW WE WORK ---------------------------------------- */}
      <Band tone="plum" grain>
        <div className="grid-12 items-end">
          <Rise className="col-span-12 lg:col-span-7">
            <Eyebrow tone="plum" deva="हम कैसे काम करते हैं">
              How we work
            </Eyebrow>
            <h2 className="mt-5 font-display text-display-l text-balance">
              Independence is the{" "}
              <span className="em-serif">whole argument</span>.
            </h2>
          </Rise>
          <p className="col-span-12 mt-5 max-w-[42ch] text-body-l text-on-plum-dim lg:col-span-5 lg:mt-0">
            A media owner sells what it has. A network agency sells what its
            group holds. We have neither problem, and everything below is a
            consequence of that.
          </p>
        </div>

        <ol className="mt-12 border-t border-rule-plum">
          {principles.map((p, i) => (
            <Rise key={p.index} as="li" delay={i * 55}>
              <div className="grid grid-cols-12 gap-x-6 gap-y-3 border-b border-rule-plum py-7 md:py-9">
                <span className="col-span-12 font-mono text-caption tracking-[0.08em] text-violet-lift md:col-span-1">
                  {p.index}
                </span>
                <h3 className="col-span-12 font-display text-h2 text-balance md:col-span-5">
                  {p.title}
                </h3>
                <p className="col-span-12 max-w-[62ch] text-on-plum-dim md:col-span-6">
                  {p.body}
                </p>
              </div>
            </Rise>
          ))}
        </ol>
      </Band>

      {/* 03 — WHO WE WORK WITH ----------------------------------- */}
      <Band tone="sand" grain>
        <div className="grid-12 gap-y-10">
          <Rise className="col-span-12 lg:col-span-5">
            <Eyebrow deva="किनके साथ">Who we work with</Eyebrow>
            <h2 className="mt-5 max-w-[18ch] font-display text-display-l text-balance">
              Categories where{" "}
              <span className="em-serif text-violet-deep">
                presence still decides
              </span>
              .
            </h2>
            <p className="mt-6 max-w-[42ch] text-on-sand-dim">
              Electronics, footwear, beverages, cement, commercial vehicles,
              eyewear, cosmetics, quick commerce, retail chains and jewellery —
              categories where a person has to see a brand in the physical
              world before they trust it.
            </p>
          </Rise>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <Rise>
              <p className="eyebrow text-on-sand-dim">Sectors</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {sectorsServed.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-rule-sand px-4 py-2 text-body-s text-on-sand-dim"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Rise>
            <Rise delay={100}>
              <p className="eyebrow mt-10 text-on-sand-dim">
                Campaigns planned and run for
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2.5">
                {clients.map((c) => (
                  <li key={c} className="text-h3 text-on-sand-dim">
                    {c}
                  </li>
                ))}
              </ul>
            </Rise>
          </div>
        </div>
      </Band>

      {/* 04 — CTA ------------------------------------------------- */}
      <Band tone="violet" grain>
        <div className="grid-12 items-end gap-y-8">
          <Rise className="col-span-12 lg:col-span-7">
            <Eyebrow tone="violet">Next</Eyebrow>
            <h2 className="mt-5 max-w-[20ch] font-display text-display-l text-balance">
              Ask us something{" "}
              <span className="em-serif">specific</span>.
            </h2>
            <p className="mt-6 max-w-[46ch] text-body-l">
              A market, a corridor, a category, a budget that does not stretch.
              You will get a direct answer rather than a credentials deck.
            </p>
          </Rise>
          <Rise delay={80} className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="flex flex-wrap gap-3">
              <BriefButton variant="sand" size="lg" context="About Bizex4U">
                Send a brief
              </BriefButton>
              <Btn href="/contact" variant="outline-sand" size="lg">
                Contact
              </Btn>
            </div>
          </Rise>
        </div>
      </Band>
    </>
  );
}
