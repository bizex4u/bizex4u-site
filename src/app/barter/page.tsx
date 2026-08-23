import type { Metadata } from "next";
import {
  ContactLedger,
  Faq,
  LedgerList,
  LedgerRow,
  PageHero,
  Rise,
  Section,
} from "@/components/Ledger";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Barter & Trade Structuring — The Commercial Model",
  description:
    "Bizex4U converts what a business already owns — finished goods, unsold stock, capacity, vouchers — into media across India. Contracted, valued in advance, GST-compliant.",
  alternates: { canonical: "/barter" },
};

const problems = [
  {
    index: "01",
    title: "Capital sits still",
    body: "Ageing stock occupies space and depreciates daily. It is a marketing asset being carried as a warehousing cost.",
  },
  {
    index: "02",
    title: "Media costs cash",
    body: "Upfront buys make national campaigns unrealistic for most balance sheets, so reach gets cut before the plan is even written.",
  },
  {
    index: "03",
    title: "Liquidation destroys value",
    body: "Bulk cash sales return a fraction of value, build nothing, and often damage the pricing you spent years defending.",
  },
];

/* The equation. Left is what a business already holds. Right is the
   category of media it converts into. Categories only — never units. */
const equation = [
  { give: "Finished goods", get: "Outdoor across 40+ cities" },
  { give: "Unsold stock", get: "Broadcast and radio" },
  { give: "Capacity", get: "Retail and mall presence" },
  { give: "Vouchers", get: "Digital out-of-home" },
  { give: "Services", get: "Activations and gifting" },
];

const steps = [
  {
    index: "01",
    title: "Agreement & Strategy",
    body: "Objectives, target markets and total media value are locked in a signed reciprocal trade agreement before any work begins. Nothing moves on a handshake.",
  },
  {
    index: "02",
    title: "Media Selection",
    body: "A curated plan across outdoor, broadcast, retail and digital — built to the campaign rather than to whatever needs clearing that quarter.",
  },
  {
    index: "03",
    title: "Campaign Execution",
    body: "Run and managed by our team, with run schedules, placement documentation and post-campaign reporting delivered as a matter of course.",
  },
  {
    index: "04",
    title: "Settlement",
    body: "The agreed media value is fulfilled in goods, distributed through controlled corporate and institutional channels that protect your pricing and your positioning.",
  },
];

const governance = [
  {
    index: "01",
    title: "Contracted",
    body: "A reciprocal trade agreement with valuation fixed in advance, in writing, before either side performs.",
  },
  {
    index: "02",
    title: "Compliant",
    body: "GST-compliant invoicing on both legs of the exchange. Auditable books, treated as two supplies rather than an off-record swap.",
  },
  {
    index: "03",
    title: "Controlled",
    body: "Goods are placed through defined corporate and institutional channels. Never dumped into the open market, never routed through grey channels.",
  },
];

const faq = [
  {
    q: "How are the goods valued?",
    a: "At a value both sides agree in writing before the agreement is signed. We work from your realistic net realisable value rather than from MRP, and the media is valued on the same commercial basis you would be quoted for a cash buy. If we cannot agree on both numbers, there is no deal — which is the point of settling them first.",
  },
  {
    q: "What actually happens to our products?",
    a: "They move through controlled corporate, institutional and channel-partner networks. That protects your pricing and keeps the stock away from the discount channels that would undercut your own trade. Where the category is sensitive, we will agree the placement channels with you in advance and document them.",
  },
  {
    q: "How long does it take to go live?",
    a: "Once the agreement is signed and the media plan is approved, most campaigns launch within three to five weeks. Outdoor and retail placements depend on site availability cycles; broadcast and digital typically move faster.",
  },
  {
    q: "How is this treated in our books?",
    a: "As two distinct transactions — a sale of goods by you and a supply of media services by us — each invoiced and taxed on its own merits, not as a netted-off barter entry. Your auditor should see a clean paper trail on both sides. We will work with your finance team on the treatment before signing, and we would encourage you to take your own tax advice as well.",
  },
  {
    q: "Is there a minimum size?",
    a: "The model works best above a level where a media plan is worth building properly. Below that the structuring effort outweighs the saving. Tell us the value of stock you are holding and we will say plainly whether barter is the right route or whether you are better off with a cash buy.",
  },
  {
    q: "Which media can we get?",
    a: "Outdoor and transit, digital out-of-home, retail and hyperlocal, broadcast, print, radio, cinema, and ground activations. What is available in a specific market at a specific time varies, so we build the plan against your objective first and confirm availability second.",
  },
];

export default function BarterPage() {
  return (
    <>
      <PageHero
        eyebrow="The Commercial Model"
        title="Inventory is a currency."
        lede="Most companies just don’t spend it. Bizex4U converts what a business already owns — finished goods, unsold stock, capacity, vouchers — into media across India. No cash leaves the marketing budget."
      />

      {/* 01 — THE PROBLEM ---------------------------------------- */}
      <Section index="01" label="The problem">
        <LedgerList>
          {problems.map((p, i) => (
            <LedgerRow key={p.index} {...p} delay={i * 60} />
          ))}
        </LedgerList>
      </Section>

      {/* 02 — THE EQUATION --------------------------------------- */}
      <section className="bg-ink py-20 text-paper md:py-28">
        <div className="shell">
          <Rise className="border-t border-rule-dark pt-4">
            <h2 className="eyebrow text-paper-dim">02 — The equation</h2>
          </Rise>

          <div className="mt-12">
            <div className="grid grid-cols-2">
              <p className="eyebrow border-b border-rule-dark pb-3 text-paper-dim">
                What you give
              </p>
              <p className="eyebrow border-b border-rule-dark pb-3 pl-6 text-paper-dim md:pl-10">
                What you get
              </p>
            </div>

            <ul>
              {equation.map((row, i) => (
                <Rise
                  key={row.give}
                  as="li"
                  delay={i * 60}
                  className="grid grid-cols-2 border-b border-rule-dark"
                >
                  <span className="py-5 pr-4 text-h3 md:py-6">{row.give}</span>
                  <span className="border-l border-accent py-5 pl-6 text-h3 md:py-6 md:pl-10">
                    {row.get}
                  </span>
                </Rise>
              ))}
            </ul>
          </div>

          <Rise delay={200} className="mt-10">
            <p className="text-body-l text-paper-dim">
              Agreed at fair market value, in writing, before anything moves.
            </p>
          </Rise>
        </div>
      </section>

      {/* 03 — HOW IT WORKS --------------------------------------- */}
      <Section index="03" label="How it works">
        <div className="border-b border-rule">
          {steps.map((s, i) => (
            <Rise
              key={s.index}
              delay={i * 60}
              className="grid-12 items-start gap-y-4 border-t border-rule py-12 md:py-16"
            >
              <span className="col-span-12 font-mono text-meta text-accent md:col-span-1">
                {s.index}
              </span>
              <h3 className="col-span-12 text-h2 text-balance md:col-span-5">
                {s.title}
              </h3>
              <p className="col-span-12 max-w-[52ch] text-body-l text-ink-70 md:col-span-5 md:col-start-8">
                {s.body}
              </p>
            </Rise>
          ))}
        </div>
      </Section>

      {/* 04 — GOVERNANCE ----------------------------------------- */}
      <Section index="04" label="Governance">
        <Rise className="mb-10 grid-12">
          <p className="col-span-12 max-w-[46ch] text-body-l lg:col-span-6">
            Barter has a reputation problem because it is often done badly.
            Here is how it is done properly.
          </p>
        </Rise>
        <LedgerList>
          {governance.map((g, i) => (
            <LedgerRow key={g.index} {...g} delay={i * 60} />
          ))}
        </LedgerList>
      </Section>

      {/* 05 — WHO THIS SUITS ------------------------------------- */}
      <Section index="05" label="Who this suits">
        <div className="grid-12 gap-y-6">
          <Rise className="col-span-12 md:col-span-5">
            <p className="text-body-l">
              Consumer brands carrying seasonal stock. Manufacturers with
              unused capacity. Retail chains with slow-moving lines.
            </p>
          </Rise>
          <Rise delay={80} className="col-span-12 md:col-span-5 md:col-start-7">
            <p className="text-body-l text-ink-70">
              Companies entering a new region without a budget to match the
              ambition. And any business holding a marketing mandate against a
              cash constraint.
            </p>
          </Rise>
        </div>
      </Section>

      {/* 06 — FAQ ------------------------------------------------ */}
      <Section index="06" label="Questions">
        <Faq items={faq} />
      </Section>

      {/* 07 — CTA ------------------------------------------------ */}
      <section className="shell pt-8 pb-28 md:pb-36">
        <Rise>
          <p className="text-display-l font-display text-balance">
            Send us what you&rsquo;re sitting on.
          </p>
        </Rise>
        <Rise delay={80} className="mt-14">
          <ContactLedger
            email={site.email}
            phone={site.phone}
            address={site.address}
          />
        </Rise>
      </section>

      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
