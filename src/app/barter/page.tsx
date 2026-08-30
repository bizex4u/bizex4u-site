import type { Metadata } from "next";
import { Band, Btn, Eyebrow, Rise, SectionHead } from "@/components/UI";
import { Faq } from "@/components/Ledger";
import GstFlow from "@/components/GstFlow";
import BarterSelector from "@/components/BarterSelector";
import BarterExchange from "@/components/BarterExchange";
import Image from "next/image";
import { streets } from "@/lib/streets";
import { site } from "@/lib/site";
import BriefButton from "@/components/BriefButton";
import PageSchema from "@/components/PageSchema";

export const metadata: Metadata = {
  title:
    "Barter Advertising in India — Stock for Media",
  description:
    "Convert finished goods, unsold stock, capacity or vouchers into outdoor, retail and broadcast media. Contracted, valued in advance, GST-compliant on both legs.",
  alternates: { canonical: "/barter" },
};

/* Framing note: this page is built around the three objections that
   actually stop the first call — will my pricing be destroyed, will
   my finance team allow it, and am I being short-changed on value.
   Everything else is secondary. */

const problems = [
  {
    index: "01",
    title: "Stock depreciates. Quietly.",
    body: "Ageing inventory costs warehousing, ties up working capital and loses value every month it sits. None of that appears as a line item, which is exactly why it goes unaddressed.",
  },
  {
    index: "02",
    title: "The marketing budget is capped.",
    body: "The mandate to grow is there. The cash to buy national media is not. So reach gets cut before the plan is even written.",
  },
  {
    index: "03",
    title: "Liquidation destroys pricing.",
    body: "Bulk cash sales return a fraction of value, build nothing, and put your product in front of exactly the channels you spent years keeping it away from.",
  },
];

const equation = [
  { give: "Finished goods", get: "Outdoor across 40+ cities" },
  { give: "Unsold or seasonal stock", get: "Broadcast, radio and print" },
  { give: "Manufacturing capacity", get: "Retail and mall presence" },
  { give: "Vouchers and gift cards", get: "Digital out-of-home" },
  { give: "Services and subscriptions", get: "Activations and gifting" },
];

const steps = [
  {
    index: "01",
    title: "Valuation, before anything else",
    body: "You tell us what you hold and what it is realistically worth. We tell you what media that buys. Both numbers are agreed in writing before either side performs — there is no deal until they are.",
  },
  {
    index: "02",
    title: "A signed reciprocal trade agreement",
    body: "Scope, markets, media value, timelines and the channels your goods may move through, all documented. Nothing proceeds on a handshake.",
  },
  {
    index: "03",
    title: "The media plan",
    body: "Built to your objective and your markets — not to whatever happens to be unsold this quarter. You approve the plan before it is booked.",
  },
  {
    index: "04",
    title: "Campaign and documentation",
    body: "Run and managed by our team, with run schedules, geo-tagged placement photographs and post-campaign reporting delivered as standard.",
  },
  {
    index: "05",
    title: "Settlement in goods",
    body: "You fulfil the agreed value in product. It moves through controlled corporate, institutional and channel-partner networks that protect your pricing.",
  },
];

/* These headings used to be our reassurances — "your pricing is
   protected", "your finance team will recognise it". A reassurance
   answers a question the reader has not been allowed to ask yet, and it
   reads as defensiveness even when every word of it is true.

   They are the buyer's own questions now, in the words they would use
   in the meeting. The bodies are unchanged: the answers were already
   the strong part. */
/* Barter does not usually fail on the merits. It fails because the two
   people who would have to agree do not share a budget, a ledger or an
   incentive, and neither of them owns the whole decision — so raising it
   is nobody's job. Marketing cannot spend inventory; finance cannot book
   media. That is a mental-accounting problem, not a commercial one, and
   no amount of argument about media value touches it.

   Naming the gap is the highest-leverage thing this page does. It also
   tells each reader exactly what to ask the other one for, which is the
   only action that moves a deal like this forward. */
const room = [
  {
    who: "If you run marketing",
    deva: "मार्केटिंग",
    gets: "Reach you were not budgeted for, planned and bought at the same rate you would have paid in cash.",
    needs:
      "Finance to agree what the stock is worth and to authorise it moving. Bring them the media plan, not the barter idea.",
  },
  {
    who: "If you run finance",
    deva: "वित्त",
    gets: "Ageing inventory off the books at a defensible value, through channels you name, with a tax invoice on both legs.",
    needs:
      "Marketing to want the plan on its own merits. If they would not buy it for cash, the trade is not a saving.",
  },
];

const governance = [
  {
    title: "Will this undercut my own trade?",
    body: "Goods are placed through defined corporate, institutional and gifting channels, agreed with you in advance and named in the contract. They do not enter the open market and they do not reach the discounters who would undercut your own trade.",
  },
  {
    title: "What does my auditor actually see?",
    body: "This is not an off-record swap. It is two distinct supplies — a sale of goods by you, a supply of media services by us — each separately invoiced and taxed under GST. Your auditor sees a clean paper trail on both sides.",
  },
  {
    title: "Am I being short-changed on value?",
    body: "We work from realistic net realisable value, not MRP, and we quote media on the same commercial basis you would be given for a cash buy. If either number does not stand up to your scrutiny, we would rather you walked.",
  },
];

const faq = [
  {
    q: "How is the value of our goods decided?",
    a: "By agreement, in writing, before the contract is signed. We start from realistic net realisable value rather than MRP, because MRP-based barter is where most of these deals go wrong. The media is priced on the same commercial basis you would be quoted for a cash campaign. If we cannot agree on both numbers there is no transaction — which is precisely why we settle them first.",
  },
  {
    q: "Where do our products actually end up?",
    a: "In controlled corporate, institutional and channel-partner networks — corporate gifting programmes, employee benefit schemes, distributor incentives and similar. The permitted channels are agreed with you before signing and written into the agreement. Your goods do not go to open-market discounters, and if a category is sensitive we will restrict the channels further at your instruction.",
  },
  {
    q: "How does our finance team book this?",
    a: "As two separate transactions, not a netted-off barter entry. You raise a tax invoice for the goods; we raise a tax invoice for the media services. GST applies on both legs and both are claimable in the normal way. We will walk your finance team through the treatment before signing, and we would encourage you to take your own tax advice as well — it is a straightforward structure, but it should be your advisor who confirms that.",
  },
  {
    q: "Are we getting a worse media rate because we are paying in stock?",
    a: "No — and you should ask us to prove it. We quote the media at the rate we would quote for cash, and you are free to benchmark it against any other agency before you sign. The saving to you comes from moving the cost off your cash budget, not from us discounting the media or over-valuing your goods.",
  },
  {
    q: "How long does it take to go live?",
    a: "Typically three to five weeks from a signed agreement and an approved media plan. Outdoor and retail depend on site availability cycles; broadcast and digital usually move faster. Seasonal stock has its own clock, so tell us the deadline early and we will plan backwards from it.",
  },
  {
    q: "Is there a minimum size?",
    a: "The model works best above a level where building a proper media plan is worth the structuring effort. Below that you are better off with a straight cash buy and we will say so. Tell us roughly what you are holding and we will give you a direct answer rather than a proposal.",
  },
  {
    q: "What if we only want to trade part of the campaign?",
    a: "That is common and often sensible. Many engagements are part cash, part goods — you cover the portion your budget allows and trade the remainder. The structure and the documentation are identical.",
  },
];

/* Three markets rather than three frames of one, so the row supports
   the "across India" claim the equation makes two sections above it
   rather than quietly undercutting it. */
const mediaLeg = ["Kochi", "Kozhikode", "Kanpur"]
  .map((city) => streets.find((f) => f.city === city))
  .filter((f): f is (typeof streets)[number] => Boolean(f));

export default function BarterPage() {
  return (
    <>
      {/* HERO ----------------------------------------------------
          The exchange is the argument, so it sits in the hero — same
          move as IndiaField on /cities and PlanAssembly on /what-we-do.
          The plum card that used to live here restated the lede. */}
      <section className="grain relative overflow-hidden bg-sand pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="shell relative z-10">
          <div className="grid-12 items-center gap-y-10">
            <div className="col-span-12 lg:col-span-7">
              <Rise>
                <Eyebrow deva="बार्टर विज्ञापन">Barter advertising</Eyebrow>
              </Rise>
              <Rise delay={60}>
                <h1 className="mt-6 font-display text-display-xl text-balance">
                  Advertise with what you{" "}
                  <span className="em-serif text-violet-deep">already own</span>.
                </h1>
              </Rise>
              <Rise delay={120}>
                <p className="mt-7 max-w-[52ch] text-body-l text-on-sand-dim">
                  Finished goods, unsold stock, capacity or vouchers, converted
                  into outdoor, retail and broadcast media across India. Valued
                  in writing before anything moves. No cash leaves the marketing
                  budget.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <BriefButton size="lg" context="Barter advertising">
                    Tell us what you&rsquo;re holding
                  </BriefButton>
                  <Btn href="#how" variant="outline-plum" size="lg">
                    How it works
                  </Btn>
                </div>
                <p className="mt-5 text-body-s text-on-sand-dim">
                  Send the category and rough value. You&rsquo;ll get a straight
                  answer on whether barter is right for it — including when it
                  isn&rsquo;t.
                </p>
              </Rise>
            </div>

            <Rise delay={180} className="col-span-12 lg:col-span-4 lg:col-start-9">
              <BarterExchange />
            </Rise>
          </div>
        </div>
      </section>

      {/* 01 — WHY IT EXISTS -------------------------------------- */}
      <Band tone="sand2" grain>
        <Rise>
          <Eyebrow>Why this exists</Eyebrow>
          <h2 className="mt-5 max-w-[22ch] font-display text-display-l text-balance">
            Three costs that never appear{" "}
            <span className="em-serif text-violet-deep">on a line item</span>.
          </h2>
        </Rise>
        {/* A ladder, not a three-up of equal cards. The three costs are
            one argument; a grid of cards makes them look like a menu. */}
        <ul className="mt-12 border-t border-rule-sand">
          {problems.map((p, i) => (
            <Rise key={p.index} as="li" delay={i * 70}>
              <div className="grid grid-cols-12 gap-x-6 gap-y-2 border-b border-rule-sand py-6 md:py-7">
                <span className="col-span-12 font-mono text-caption tracking-[0.08em] text-violet-deep md:col-span-1">
                  {p.index}
                </span>
                <h3 className="col-span-12 font-display text-h2 text-balance md:col-span-4">
                  {p.title}
                </h3>
                <p className="col-span-12 max-w-[62ch] text-on-sand-dim md:col-span-7">
                  {p.body}
                </p>
              </div>
            </Rise>
          ))}
        </ul>
      </Band>

      {/* 02 — THE EQUATION --------------------------------------- */}
      <Band tone="plum" grain>
        <Rise>
          <Eyebrow tone="plum">The exchange</Eyebrow>
          <h2 className="mt-5 font-display text-display-l text-balance">
            What you give, <span className="em-serif">what you get</span>.
          </h2>
        </Rise>

        <div className="mt-12">
          <div className="grid grid-cols-2 gap-4 border-b border-rule-plum pb-4">
            <Eyebrow tone="plum" muted>You give</Eyebrow>
            <Eyebrow tone="plum">You get</Eyebrow>
          </div>
          <ul>
            {equation.map((row, i) => (
              <Rise
                key={row.give}
                as="li"
                delay={i * 55}
                className="grid grid-cols-2 gap-4 border-b border-rule-plum py-5 md:py-6"
              >
                <span className="font-display text-h2">{row.give}</span>
                <span className="font-display text-h2 text-violet-lift">
                  {row.get}
                </span>
              </Rise>
            ))}
          </ul>
          <Rise delay={200}>
            <p className="mt-8 max-w-[56ch] text-body-l text-on-plum-dim">
              Agreed at fair market value, in writing, before either side
              performs.
            </p>
          </Rise>
        </div>
      </Band>

      {/* 02b — THE OTHER HALF, PHOTOGRAPHED ---------------------
          Everything above this point is an argument about value made in
          words, on a page selling something a CFO has to picture before
          they will authorise it. "Outdoor across forty cities" is an
          abstraction; a street with a hoarding on it is the thing being
          bought. Our own frames — same set as the homepage, three of
          them, because this is a supporting exhibit and not a gallery. */}
      <section className="grain relative overflow-hidden bg-plum-2 py-(--spacing-band) text-on-plum">
        <div className="shell relative z-10">
          <SectionHead
            eyebrow="The other half of the trade"
            tone="plum"
            title={<>What the stock{" "}
                <span className="em-serif">turns into</span>.</>}
            lede={<>Not a media schedule on a slide. Placements in the street, in
              traffic, on a working day — photographed by us, on site, while
              they were running.</>}
          />

          <ul className="mt-11 grid gap-4 sm:grid-cols-3">
            {mediaLeg.map((f, i) => (
              <Rise key={f.src} as="li" delay={i * 70}>
                <figure className="m-0 overflow-hidden rounded-(--radius-card) bg-plum">
                  <div className="relative aspect-4/3">
                    <Image
                      src={f.src}
                      alt={f.alt}
                      fill
                      sizes="(min-width: 640px) 31vw, 92vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="p-4 font-mono text-micro tracking-[0.09em] text-on-plum-dim uppercase">
                    {f.city}
                  </figcaption>
                </figure>
              </Rise>
            ))}
          </ul>
        </div>
      </section>

      {/* 03 — HOW IT WORKS --------------------------------------- */}
      <Band tone="sand" id="how" grain>
        <Rise>
          <Eyebrow deva="यह कैसे काम करता है">How it works</Eyebrow>
          <h2 className="mt-5 max-w-[20ch] font-display text-display-l text-balance">
            Five steps. <span className="em-serif text-violet-deep">No surprises.</span>
          </h2>
        </Rise>

        {/* A ladder, not a 3 x 2 grid. Five steps in a three-column grid
            leaves a hole in the second row, and a sequence laid out as a
            grid stops reading as a sequence. The rule between rows is the
            process line. */}
        <ol className="mt-12 border-t border-rule-sand">
          {steps.map((s, i) => (
            <Rise key={s.index} as="li" delay={i * 55}>
              <div className="grid grid-cols-12 gap-x-6 gap-y-3 border-b border-rule-sand py-7 md:py-9">
                <span className="col-span-12 font-mono text-caption tracking-[0.08em] text-violet-deep md:col-span-1">
                  {s.index}
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

      {/* 04 — GOVERNANCE ----------------------------------------- */}
      <Band tone="violet" grain>
        <Rise>
          <Eyebrow tone="violet">The part that usually worries people</Eyebrow>
          <h2 className="mt-5 max-w-[24ch] font-display text-display-l text-balance">
            Barter has a reputation problem because it is often done{" "}
            <span className="em-serif">badly</span>.
          </h2>
        </Rise>

        <ul className="mt-12 border-t border-white/20">
          {governance.map((g, i) => (
            <Rise key={g.title} as="li" delay={i * 70}>
              <div className="grid grid-cols-12 gap-x-6 gap-y-2 border-b border-white/20 py-6 md:py-7">
                <h3 className="col-span-12 font-display text-h2 text-balance md:col-span-5">
                  {g.title}
                </h3>
                <p className="col-span-12 max-w-[62ch] text-on-violet-dim md:col-span-7">
                  {g.body}
                </p>
              </div>
            </Rise>
          ))}
        </ul>
      </Band>

      {/* 05 — WHO IT SUITS --------------------------------------- */}
      <Band tone="sand2" grain>
        <div className="grid-12 gap-y-8">
          <Rise className="col-span-12 lg:col-span-5">
            <Eyebrow>Who it suits</Eyebrow>
            <h2 className="mt-5 font-display text-display-l text-balance">
              And who it doesn&rsquo;t.
            </h2>
          </Rise>
          <Rise delay={80} className="col-span-12 lg:col-span-6 lg:col-start-7">
            <p className="text-body-l">
              Consumer brands carrying seasonal stock. Manufacturers with unused
              capacity. Retail chains with slow-moving lines. Companies entering
              a region without a budget to match the ambition.
            </p>
            <p className="mt-6 text-body-l text-on-sand-dim">
              It suits you less if your stock is fast-moving and fully priced,
              if your category cannot tolerate secondary distribution, or if the
              value you hold is too small to justify building a proper media
              plan around. In any of those cases we will tell you to buy media
              with cash — it is a shorter conversation and a better outcome.
            </p>
          </Rise>
        </div>
      </Band>

      {/* 05b — WHO NEEDS TO BE IN THE ROOM -----------------------
          See the note above `room`. Every other section on this page
          argues that barter works. This one addresses why a company
          that agrees with all of it still does nothing. */}
      <Band tone="plum" grain>
        <SectionHead
            eyebrow="Who actually decides"
            tone="plum"
            deva="कौन तय करता है"
            title={<>This dies in the gap between{" "}
              <span className="em-serif">two budgets</span>.</>}
            lede={<>Marketing has the mandate and no cash. Finance has the stock and no
            way to book media against it. Neither owns the whole decision, so
            raising it is nobody&rsquo;s job — and it never gets raised.</>}
          />

        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {room.map((r, i) => (
            <Rise key={r.who} as="li" delay={i * 80}>
              <div className="flex h-full flex-col rounded-(--radius-card) bg-plum-2 p-6 md:p-8">
                <p className="font-mono text-meta tracking-[0.08em] text-violet-lift uppercase">
                  {r.who}{" "}
                  <span
                    aria-hidden="true"
                    className="mx-2.5 inline-block h-[0.85em] w-px translate-y-[0.06em] bg-current opacity-35"
                  />{" "}
                  <span lang="hi" className="deva normal-case not-italic">
                    {r.deva}
                  </span>
                </p>

                <p className="mt-6 eyebrow text-on-plum-dim">What you get</p>
                <p className="mt-2.5 text-body-l">{r.gets}</p>

                <p className="mt-7 eyebrow text-on-plum-dim">
                  What you need from the other one
                </p>
                <p className="mt-2.5 text-on-plum-dim">{r.needs}</p>
              </div>
            </Rise>
          ))}
        </ul>

        <Rise delay={200}>
          <p className="mt-9 max-w-[62ch] text-body-l text-on-plum-dim">
            The first meeting that goes anywhere has both of you in it. We are
            happy to be on that call and to take the finance questions
            directly — it is a shorter conversation than two rounds of
            forwarding.
          </p>
        </Rise>
      </Band>

      {/* 06 — THE FINANCE TREATMENT ------------------------------
          The finance objection is the one that actually kills these
          deals, and it was previously answered in a paragraph. A CFO
          cannot forward a paragraph to their CA. */}
      <Band tone="sand" grain>
        <div className="grid-12 items-start gap-y-10">
          <Rise className="col-span-12 lg:col-span-4">
            <Eyebrow deva="जीएसटी">For your finance team</Eyebrow>
            <h2 className="mt-5 max-w-[14ch] font-display text-display-l text-balance">
              Two invoices.{" "}
              <span className="em-serif text-violet-deep">
                Nothing netted off
              </span>
              .
            </h2>
            <p className="mt-6 max-w-[40ch] text-on-sand-dim">
              Most objections to barter are really objections to how it used
              to be done — off the books, on a handshake, impossible to
              audit. This is the structure we actually contract under, drawn
              so you can forward it.
            </p>
          </Rise>
          <Rise delay={80} className="col-span-12 lg:col-span-7 lg:col-start-6">
            <GstFlow />
          </Rise>
        </div>
      </Band>

      {/* 07 — THE SELECTOR ---------------------------------------
          Barter stays abstract until someone names their own stock out
          loud. This makes them do it in three taps, then hands the
          answers to WhatsApp. It collects; it never quotes. */}
      <Band tone="sand2" id="start" grain>
        <div className="grid-12 items-start gap-y-10">
          <Rise className="col-span-12 lg:col-span-4">
            <Eyebrow>Start here</Eyebrow>
            <h2 className="mt-5 max-w-[14ch] font-display text-display-l text-balance">
              Three taps and a{" "}
              <span className="em-serif text-violet-deep">real answer</span>.
            </h2>
            <p className="mt-6 max-w-[40ch] text-on-sand-dim">
              We will not put a number on your stock from a web form, and you
              should be suspicious of anyone who does. Tell us the shape of it
              and you will get a straight reply from a person.
            </p>
          </Rise>
          <Rise delay={80} className="col-span-12 lg:col-span-7 lg:col-start-6">
            <BarterSelector />
          </Rise>
        </div>
      </Band>

      {/* 08 — FAQ ------------------------------------------------ */}
      <Band tone="sand" grain>
        <Rise>
          <Eyebrow deva="सवाल">Questions</Eyebrow>
          <h2 className="mt-5 font-display text-display-l text-balance">
            The ones people{" "}
            <span className="em-serif text-violet-deep">actually ask</span>.
          </h2>
        </Rise>
        <div className="mt-12">
          <Faq items={faq} />
        </div>
      </Band>

      {/* 09 — CTA ------------------------------------------------ */}
      <Band tone="plum" grain>
        <div className="grid-12 items-center gap-y-8">
          <Rise className="col-span-12 lg:col-span-7">
            <h2 className="font-display text-display-l text-balance">
              Tell us what you&rsquo;re{" "}
              <span className="em-serif">sitting on</span>.
            </h2>
            <p className="mt-6 max-w-[46ch] text-body-l text-on-plum-dim">
              The category and a rough value is enough to start. We will tell
              you what media it buys, or that it doesn&rsquo;t.
            </p>
          </Rise>
          <Rise delay={80} className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="flex flex-col gap-3">
              {/* These were "Send a brief" and "Send a brief instead",
                  which is one button offered twice. The dialog is the
                  fast path; the second is for someone who would rather
                  see a phone number and an address before they type
                  anything, which on a page about handing over stock is
                  a reasonable thing to want. */}
              <BriefButton size="lg" context="Barter advertising">
                Tell us what you hold
              </BriefButton>
              <Btn href="/contact" variant="outline-sand" size="lg">
                Or just call us
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
              "@type": "Service",
              serviceType: "Barter advertising and media trade structuring",
              provider: {
                "@type": "Organization",
                name: site.name,
                url: site.url,
                email: site.email,
                telephone: site.phone,
              },
              areaServed: { "@type": "Country", name: "India" },
              url: `${site.url}/barter`,
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]),
        }}
      />
      <PageSchema
        path="/barter"
        name={"Barter Advertising in India"}
        description={"Convert finished goods, unsold stock, capacity or vouchers into outdoor, retail and broadcast media. Contracted, valued in advance, GST-compliant on both legs."}
      />
    </>
  );
}
