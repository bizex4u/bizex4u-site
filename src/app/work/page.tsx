import type { Metadata } from "next";
import Image from "next/image";
import { Band, Btn, Card, Eyebrow, Rise } from "@/components/UI";
import { clients, proofFrames, sectorsServed } from "@/lib/site";
import BriefButton from "@/components/BriefButton";

export const metadata: Metadata = {
  title: "Work — Campaigns Planned and Run Across India",
  description:
    "Brands Bizex4U has planned and run outdoor, retail and broadcast campaigns for, and the geo-tagged monitoring frames that document delivery.",
  alternates: { canonical: "/work" },
};

/* Deliberately not a case-study page.

   Case studies require written client permission for the name, the
   numbers and the creative — and several of the campaigns in these
   files carry licensed celebrity talent, which cannot be republished
   on a marketing site without a separate clearance. Publishing a
   made-up result to fill the page would undo the exact credibility
   this site is built on.

   So this page shows what can honestly be shown: who the work was
   for, what the work looks like when it is documented, and an open
   offer to take the detail into a conversation. Convert to full case
   studies as each permission arrives. */

const documentation = [
  {
    title: "Every placement photographed",
    body: "On site, geo-tagged and dated. The file goes to you, not a summary of it.",
  },
  {
    title: "Run dates verified",
    body: "Where a screen is digital we photograph it against that morning's newspaper, so the date in frame is not ours to assert.",
  },
  {
    title: "Condition checked mid-flight",
    body: "A torn flex or a dark screen is worth nothing. Sites are re-checked during the campaign, not only at the start.",
  },
  {
    title: "Reported at the end",
    body: "One consolidated file across every channel used, in a form you can forward to someone who was not in the room.",
  },
];

export default function WorkPage() {
  return (
    <>
      {/* HERO ---------------------------------------------------- */}
      <section className="grain relative overflow-hidden bg-sand pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="shell relative z-10">
          <div className="grid-12 items-end gap-y-10">
            <div className="col-span-12 lg:col-span-7">
              <Rise>
                <Eyebrow deva="हमारा काम">Work</Eyebrow>
              </Rise>
              <Rise delay={60}>
                <h1 className="mt-6 font-display text-display-xl text-balance">
                  Campaigns planned{" "}
                  <span className="em-serif text-violet-deep">and run</span>.
                </h1>
              </Rise>
              <Rise delay={120}>
                <p className="mt-7 max-w-[50ch] text-body-l text-on-sand-dim">
                  Outdoor, retail, broadcast and barter-funded campaigns across
                  Indian metros and tier-2 markets, for brands in categories
                  where being seen in the physical world still decides whether
                  a person trusts you.
                </p>
              </Rise>
            </div>

            <Rise delay={180} className="col-span-12 lg:col-span-4 lg:col-start-9">
              <Card>
                <p className="eyebrow text-on-sand-dim">A note on this page</p>
                <p className="mt-5 text-on-sand-dim">
                  We do not publish client results or campaign creative without
                  written permission from the brand, and several of these
                  campaigns carry licensed talent that cannot be republished at
                  all. Ask and we will walk you through the relevant work
                  directly.
                </p>
              </Card>
            </Rise>
          </div>
        </div>
      </section>

      {/* 01 — CLIENTS -------------------------------------------- */}
      <Band tone="sand2" grain>
        <Rise>
          <Eyebrow>Campaigns planned and run for</Eyebrow>
          <h2 className="mt-5 max-w-[22ch] font-display text-display-l text-balance">
            Names, without the{" "}
            <span className="em-serif text-violet-deep">invented numbers</span>.
          </h2>
        </Rise>
        <Rise delay={80}>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {clients.map((c) => (
              <li key={c} className="font-display text-h2 text-on-sand">
                {c}
              </li>
            ))}
          </ul>
        </Rise>
        <Rise delay={140}>
          <ul className="mt-12 flex flex-wrap gap-2 border-t border-rule-sand pt-8">
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
      </Band>

      {/* 02 — PROOF OF DELIVERY ---------------------------------- */}
      <Band tone="plum2" grain>
        <div className="grid-12 items-end">
          <Rise className="col-span-12 lg:col-span-7">
            <Eyebrow tone="plum2" deva="डिलीवरी का सबूत">
              Proof of delivery
            </Eyebrow>
            <h2 className="mt-5 font-display text-display-l text-balance">
              What the work looks like{" "}
              <span className="em-serif">when it is documented</span>.
            </h2>
          </Rise>
          <p className="col-span-12 mt-5 max-w-[42ch] text-body-l text-on-plum-dim lg:col-span-5 lg:mt-0">
            Monitoring frames from live campaigns. Coordinates and dates as
            recorded on site — the same file a client receives, not a
            selection made to look good.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {proofFrames.map((f, i) => (
            <Rise key={f.src} as="li" delay={i * 60}>
              <div className="overflow-hidden rounded-(--radius-card) bg-plum">
                <div className="relative aspect-3/2">
                  <Image
                    src={f.src}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-body-s leading-snug font-medium">
                    {f.place}
                  </p>
                  <p className="mt-1 font-mono text-micro leading-snug tracking-[0.05em] text-on-plum-dim">
                    {f.stamp}
                  </p>
                </div>
              </div>
            </Rise>
          ))}
        </ul>
      </Band>

      {/* 03 — WHAT DOCUMENTATION MEANS --------------------------- */}
      <Band tone="sand" grain>
        <div className="grid-12 gap-y-10">
          <Rise className="col-span-12 lg:col-span-4">
            <Eyebrow>What that involves</Eyebrow>
            <h2 className="mt-5 max-w-[16ch] font-display text-display-l text-balance">
              Four things,{" "}
              <span className="em-serif text-violet-deep">as standard</span>.
            </h2>
          </Rise>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <ul className="border-t border-rule-sand">
              {documentation.map((d, i) => (
                <Rise key={d.title} as="li" delay={i * 55}>
                  <div className="border-b border-rule-sand py-6">
                    <h3 className="text-h3">{d.title}</h3>
                    <p className="mt-2 max-w-[58ch] text-on-sand-dim">
                      {d.body}
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
            <h2 className="mt-5 max-w-[22ch] font-display text-display-l text-balance">
              Ask about the work in{" "}
              <span className="em-serif">your category</span>.
            </h2>
            <p className="mt-6 max-w-[46ch] text-body-l">
              Tell us the sector and the market. We will talk you through what
              we have run there, what worked and what did not.
            </p>
          </Rise>
          <Rise delay={80} className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="flex flex-wrap gap-3">
              <BriefButton variant="sand" size="lg" context="Work in my category">
                Ask about your category
              </BriefButton>
              <Btn href="/cities" variant="outline-sand" size="lg">
                Cities
              </Btn>
            </div>
          </Rise>
        </div>
      </Band>
    </>
  );
}
