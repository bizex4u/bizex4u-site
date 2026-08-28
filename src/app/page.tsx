import Link from "next/link";
import Image from "next/image";
import HeroReel from "@/components/HeroReel";
import DayClock from "@/components/DayClock";
import ReelBand from "@/components/ReelBand";
import Marquee from "@/components/Marquee";
import FormatPlate, {
  ExchangePlate,
  formatSets,
} from "@/components/FormatPlate";
import { Band, Btn, Card, Eyebrow, Rise } from "@/components/UI";
import {
  capabilities,
  clients,
  objectives,
  proofFrames,
  proofStats,
} from "@/lib/site";
import { additionalMarkets, cities } from "@/lib/cities";
import BriefButton from "@/components/BriefButton";

/* ------------------------------------------------------------------
   The homepage, positioned as a brand activation company.

   The earlier version led with "outdoor advertising", which is a
   commodity with semi-public rates. Activation is a service with
   judgment in it, and it is the frame that makes the other six things
   — including barter — parts of one system rather than a menu.

   Section mechanisms deliberately differ: split hero, marquee, an
   argument in two columns, a verb ledger, a pinned horizontal day,
   subgrid cards, scroll-scaled proof frames, a violet band, a city
   grid, counting numbers. The old page used the same band-and-cards
   device eight times, which is what made it read as static.
------------------------------------------------------------------- */

const platesFor: Record<string, keyof typeof formatSets> = {
  "01": "outdoor",
  "02": "dooh",
  "03": "retail",
  "04": "broadcast",
  "05": "activation",
};

const deva: Record<string, string> = {
  Kolkata: "कोलकाता",
  "Delhi NCR": "दिल्ली",
  Mumbai: "मुंबई",
  Bangalore: "बेंगलुरु",
  Hyderabad: "हैदराबाद",
  Chennai: "चेन्नई",
  Pune: "पुणे",
  Ahmedabad: "अहमदाबाद",
  Lucknow: "लखनऊ",
  Jaipur: "जयपुर",
  Chandigarh: "चंडीगढ़",
  Agra: "आगरा",
  Meerut: "मेरठ",
  Patna: "पटना",
  Indore: "इंदौर",
  Kochi: "कोच्चि",
  Kanpur: "कानपुर",
  Varanasi: "वाराणसी",
  Ludhiana: "लुधियाना",
  Surat: "सूरत",
  Nagpur: "नागपुर",
  Bhopal: "भोपाल",
  Coimbatore: "कोयंबटूर",
};

/* What a brand can trade. Categories only — never a stock list. */
const tradeable = [
  "Finished goods",
  "Unsold or seasonal stock",
  "Manufacturing capacity",
  "Vouchers and gift cards",
  "Services and subscriptions",
];

export default function Home() {
  return (
    <>
      {/* 01 — HERO ------------------------------------------------
          Split, not overlaid. Type and footage hold separate columns,
          so neither has to compromise for the other. The headline
          reveals line by line — each line is its own element because
          splitting text at runtime breaks screen readers. */}
      <section className="grain relative overflow-hidden bg-sand pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="shell relative z-10">
          <div className="grid-12 items-center gap-y-12">
            <div className="col-span-12 lg:col-span-6">
              <Rise>
                <Eyebrow deva="भारत भर में">
                  Brand activation across India
                </Eyebrow>
              </Rise>

              <h1
                data-split
                className="mt-6 font-display text-display-xl text-balance"
              >
                <span className="line-clip">
                  <span className="block">The brands India</span>
                </span>
                <span className="line-clip">
                  <span className="block">trusts are the ones</span>
                </span>
                <span className="line-clip">
                  <span className="block">
                    it <span className="em-serif text-violet-deep">keeps</span>{" "}
                    seeing.
                  </span>
                </span>
              </h1>

              <Rise delay={120}>
                <p className="mt-7 max-w-[46ch] text-body-l text-on-sand-dim">
                  We put brands into the streets, malls, lifts, papers and
                  screens of more than forty Indian cities — and prove every
                  placement went up. If the cash budget is not there, you can
                  pay in stock instead.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <BriefButton size="lg" context="A plan for my market">
                    Get a plan for your market
                  </BriefButton>
                  <Btn href="/barter" variant="outline-plum" size="lg">
                    Pay in stock instead
                  </Btn>
                </div>

                <p className="mt-5 text-body-s text-on-sand-dim">
                  Two fields, then straight to WhatsApp. Usually answered the same working day.
                </p>
              </Rise>
            </div>

            <Rise
              delay={180}
              className="col-span-12 lg:col-span-5 lg:col-start-8"
            >
              <HeroReel />
            </Rise>
          </div>
        </div>
      </section>

      {/* 02 — CLIENT MARQUEE --------------------------------------
          Drifts rather than sitting in a wrapped block, and slows on
          hover so a name can actually be read. */}
      <section className="grain relative overflow-hidden bg-sand-2 py-10 text-on-sand md:py-12">
        <div className="shell relative z-10">
          <Rise>
            <p className="eyebrow text-on-sand-dim">
              Campaigns planned and run for
            </p>
          </Rise>
        </div>
        <Rise delay={80} className="relative z-10 mt-6">
          <Marquee
            items={clients}
            speed={46}
            renderItem={(name) => (
              <span className="font-display text-[clamp(1.5rem,3vw,2.5rem)] text-on-sand-dim">
                {name}
              </span>
            )}
          />
        </Rise>
      </section>

      {/* 03 — THE ARGUMENT ----------------------------------------
          Why physical presence, now. The old homepage never made this
          case at all; it went straight to what we sell. */}
      <Band tone="sand" grain>
        <div className="grid-12 gap-y-10">
          <Rise className="col-span-12 lg:col-span-6">
            <Eyebrow>Why physical, why now</Eyebrow>
            <h2 className="mt-5 max-w-[16ch] font-display text-display-l text-balance">
              Digital attention got cheap.{" "}
              <span className="em-serif text-violet-deep">
                Physical attention didn&rsquo;t.
              </span>
            </h2>
          </Rise>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <Rise>
              <p className="text-body-l">
                An online impression can be blocked, skipped, muted or
                scrolled past in under a second, and most of them are. A
                hoarding on somebody&rsquo;s commute cannot be closed. They
                pass it going to work and again coming home, five days a
                week, whether or not they were in the mood.
              </p>
            </Rise>
            <Rise delay={80}>
              <p className="mt-6 text-on-sand-dim">
                That is the whole case for physical presence, and it is a
                case about frequency rather than reach. It is also why we
                would rather own one corridor for a month than dust an
                entire city for a fortnight — and why we will say so even
                when the wider plan is the easier sell.
              </p>
            </Rise>
          </div>
        </div>
      </Band>

      {/* 04 — THE SIX, AS VERBS -----------------------------------
          Six product names read as a menu to choose from. Six verbs
          read as one system with an order to it. */}
      <Band tone="plum" grain>
        <div className="grid-12 items-end">
          <Rise className="col-span-12 lg:col-span-7">
            <Eyebrow tone="plum" deva="हम क्या करते हैं">
              What activation means here
            </Eyebrow>
            <h2 className="mt-5 font-display text-display-l text-balance">
              Six ways to be{" "}
              <span className="em-serif">present</span>.
            </h2>
          </Rise>
          <p className="col-span-12 mt-5 max-w-[42ch] text-body-l text-on-plum-dim lg:col-span-5 lg:mt-0">
            Drawn at true proportion, because a hoarding and a lift panel are
            not the same product and should not be sold as though they were.
          </p>
        </div>

        {/* Six equal cards was six cards nobody read — card 01 and card
            05 carried identical weight, so nothing led and the eye had
            no route through. Now the grid states an argument: the core
            product takes double width and a bigger drawing, four sit at
            normal weight beneath it, and barter runs full width because
            it is the thing no competitor offers.

            The 01–06 counter is gone with it. Numbering implies an
            order the reader needs, and there is no reason "be seen"
            precedes "be heard". */}
        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Rise
              key={c.href}
              as="li"
              delay={i * 55}
              className={
                c.accent
                  ? "md:col-span-2 lg:col-span-3"
                  : i === 0
                    ? "md:col-span-2"
                    : undefined
              }
            >
              <Link
                href={c.href}
                className={`lift group flex h-full flex-col rounded-(--radius-card) p-6 md:p-7 ${
                  c.accent
                    ? "bg-violet-deep text-white hover:bg-violet md:flex-row md:items-end md:gap-12"
                    : "bg-plum-2 hover:bg-plum-3"
                }`}
              >
                <div className={c.accent ? "md:flex-1" : undefined}>
                <p
                  className={`font-mono text-[0.75rem] tracking-[0.08em] uppercase ${
                    c.accent ? "text-on-violet-dim" : "text-violet-lift"
                  }`}
                >
                  {c.title}
                </p>

                {/* The verb leads. The product name is the kicker above. */}
                <h3
                  className={`mt-3 font-display text-balance ${
                    i === 0 || c.accent ? "text-display-l" : "text-h2"
                  }`}
                >
                  {c.verb}
                </h3>
                <p
                  className={`mt-4 ${i === 0 || c.accent ? "max-w-[46ch] text-body-l" : "max-w-[34ch]"} ${
                    c.accent ? "text-on-violet-dim" : "text-on-plum-dim"
                  }`}
                >
                  {i === 0 ? c.long : c.short}
                </p>

                {/* On the wide barter card the link closes the copy
                    column, because the exchange drawing sits beside it
                    rather than under it. Everywhere else it closes the
                    card, after the drawing. */}
                {c.accent && (
                  <span className="mt-7 inline-flex items-center gap-1.5 text-body-s font-medium">
                    {c.linkLabel ?? "Explore"}{" "}
                    <span className="row-arrow">→</span>
                  </span>
                )}
                </div>

                {/* The lead card gets a bigger drawing because it has the
                    room; the wide barter card puts its exchange beside
                    the copy rather than under it. */}
                <div className={c.accent ? "mt-7 md:mt-0" : "mt-auto pt-7"}>
                  {c.accent ? (
                    <ExchangePlate />
                  ) : (
                    platesFor[c.index] && (
                      <FormatPlate
                        formats={formatSets[platesFor[c.index]]}
                        tone="dark"
                        base={i === 0 ? 92 : 64}
                        maxWidth={i === 0 ? 470 : 296}
                      />
                    )
                  )}
                </div>

                {!c.accent && (
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-7 text-body-s font-medium">
                    {c.linkLabel ?? "Explore"}{" "}
                    <span className="row-arrow">→</span>
                  </span>
                )}
              </Link>
            </Rise>
          ))}
        </ul>
      </Band>

      {/* 05 — THE DAY ---------------------------------------------
          The signature. Pins and scrolls sideways through one day in
          an Indian city. */}
      <DayClock />

      {/* 06 — OBJECTIVES ------------------------------------------
          Subgrid so the eyebrow, heading, body and rule land on the
          same four lines in every card. Without it each card sets its
          own rhythm and the dividers stagger. */}
      <Band tone="sand" id="objectives" grain>
        <Rise>
          <Eyebrow deva="आप क्या करना चाहते हैं">Start with the objective</Eyebrow>
          <h2 className="mt-5 max-w-[20ch] font-display text-display-l text-balance">
            Tell us what you&rsquo;re{" "}
            <span className="em-serif text-violet-deep">trying to do</span>.
          </h2>
        </Rise>

        <ul className="mt-12 grid gap-4 lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr_auto]">
          {objectives.map((o, i) => (
            <Rise
              key={o.index}
              as="li"
              delay={i * 70}
              className="lg:row-span-4 lg:grid lg:grid-rows-subgrid"
            >
              <Card className="lift flex h-full flex-col lg:row-span-4 lg:grid lg:grid-rows-subgrid lg:gap-0">
                <span className="eyebrow text-violet-deep">{o.index}</span>
                <h3 className="mt-3 font-display text-h2 text-balance">
                  {o.title}
                </h3>
                <p className="mt-4 text-on-sand-dim">{o.body}</p>
                <ul className="mt-6 space-y-2.5 border-t border-rule-sand pt-5">
                  {o.points.map((p) => (
                    <li key={p} className="flex gap-3 text-body-s">
                      <span aria-hidden className="text-violet-deep">
                        —
                      </span>
                      <span className="text-on-sand-dim">{p}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Rise>
          ))}
        </ul>
      </Band>

      {/* 07 — THE REEL, FULL BLEED -------------------------------
          The one band that ignores the grid. Everything else on this
          page sits inside the shell, in a card, with padding, and that
          containment is a large part of why the site read as careful
          rather than confident. No type over it — that was the
          original complaint about the hero and it was right. */}
      <ReelBand />

      {/* 08 — PROOF ------------------------------------------------
          The frames now scale into place on scroll and run two-up at
          a much larger size. Small thumbnails undersold the one thing
          on the site nobody else offers. */}
      <Band tone="plum2" grain>
        <div className="grid-12 items-end">
          <Rise className="col-span-12 lg:col-span-7">
            <Eyebrow tone="plum2" deva="डिलीवरी का सबूत">
              Proof of delivery
            </Eyebrow>
            <h2 className="mt-5 font-display text-display-l text-balance">
              You will know it{" "}
              <span className="em-serif">actually went up</span>.
            </h2>
          </Rise>
          <p className="col-span-12 mt-5 max-w-[42ch] text-body-l text-on-plum-dim lg:col-span-5 lg:mt-0">
            Every placement photographed on site, geo-tagged and dated. You
            get the file, not a summary. Where a screen is digital we verify
            the run date against that morning&rsquo;s newspaper in frame.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {proofFrames.map((f, i) => (
            <Rise key={f.src} as="li" delay={i * 60}>
              <figure className="overflow-hidden rounded-(--radius-card) bg-plum">
                <div className="frame relative aspect-3/2">
                  <div data-scale-in className="absolute inset-0">
                    <Image
                      src={f.src}
                      alt={f.alt}
                      fill
                      sizes="(min-width: 640px) 46vw, 92vw"
                      className="kenburns object-cover"
                    />
                  </div>
                </div>
                <figcaption className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 p-5">
                  <p className="text-h3">{f.place}</p>
                  <p className="font-mono text-micro tracking-[0.05em] text-on-plum-dim">
                    {f.stamp}
                  </p>
                </figcaption>
              </figure>
            </Rise>
          ))}
        </ul>
      </Band>

      {/* 09 — THE STATEMENT --------------------------------------
          One sentence, set larger than anything else on the site. The
          page needed a moment where the type stops behaving like a
          heading and behaves like an image. It also happens to be the
          single most useful thing a buyer can know about us. */}
      <section className="grain relative overflow-hidden bg-sand py-(--spacing-band) text-on-sand">
        <div className="shell relative z-10">
          <Rise>
            <p className="font-display text-[clamp(2.5rem,8.5vw,7.5rem)] leading-[0.94] tracking-[-0.025em] text-balance">
              We don&rsquo;t own a single hoarding.{" "}
              <span className="em-serif text-violet-deep">
                That&rsquo;s the point.
              </span>
            </p>
          </Rise>
          <div className="mt-12 grid-12">
            <Rise delay={80} className="col-span-12 lg:col-span-5 lg:col-start-8">
              <p className="text-body-l text-on-sand-dim">
                A media owner recommends what it is holding. A network
                agency recommends what its group holds. We hold nothing, so
                when we argue for a site it is because of where that site
                sits — and when we argue against one, we have nothing to
                lose by saying so.
              </p>
              <div className="mt-8">
                <Btn href="/about" variant="outline-plum">
                  How we work
                </Btn>
              </div>
            </Rise>
          </div>
        </div>
      </section>

      {/* 10 — BARTER ---------------------------------------------- */}
      <Band tone="violet" grain>
        <div className="grid-12 items-start gap-y-10">
          <Rise className="col-span-12 lg:col-span-6">
            <Eyebrow tone="violet" deva="बार्टर विज्ञापन">
              Barter advertising
            </Eyebrow>
            <h2 className="mt-5 max-w-[16ch] font-display text-display-l text-balance">
              Stock loses value every month.{" "}
              <span className="em-serif">Media doesn&rsquo;t.</span>
            </h2>
            <p className="mt-6 max-w-[48ch] text-body-l">
              If you are holding goods, capacity or vouchers, you are already
              paying for them — in warehousing, in working capital, in
              depreciation. Barter moves that cost off the shelf and onto a
              hoarding, at a value agreed in writing before anything moves.
            </p>
            <div className="mt-9">
              <Btn href="/barter" variant="sand" size="lg">
                See how barter works
              </Btn>
            </div>
          </Rise>

          <Rise delay={100} className="col-span-12 lg:col-span-5 lg:col-start-8">
            <div className="rounded-(--radius-card) bg-white/10 p-6 md:p-7">
              <p className="eyebrow text-on-violet-dim">What you can trade</p>
              <ul className="mt-5 divide-y divide-white/15">
                {tradeable.map((t) => (
                  <li key={t} className="flex items-start gap-3 py-3.5">
                    <span aria-hidden className="text-on-violet-dim">
                      →
                    </span>
                    <span className="text-h3">{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-body-s text-on-violet-dim">
                Valued at fair market value, invoiced on both legs, GST
                compliant. Goods move through controlled corporate channels —
                never the open market.
              </p>
            </div>
          </Rise>
        </div>
      </Band>

      {/* 11 — CITIES ----------------------------------------------
          The corridor field runs behind this band. It is a drawing of
          how the planning actually works — traffic along arterial
          routes, junctions where they cross — rather than a photograph
          of somewhere. Honest about being a diagram, and it moves. */}
      <section className="grain relative overflow-hidden bg-sand py-(--spacing-band) text-on-sand">
        {/* CorridorField used to sit here as a background. Removed: at the
            opacity it needed to stay behind the text it rendered as a few
            faint diagonal scratches across the band, which reads as a
            rendering artefact rather than as art direction. A decorative
            element that looks like a bug is worse than no decorative
            element. The component is still in the repo if it is ever given
            a section of its own where it can be seen properly. */}
        <div className="shell relative z-10">
        <div className="grid-12 items-end">
          <Rise className="col-span-12 lg:col-span-8">
            <Eyebrow deva="शहर">Where we operate</Eyebrow>
            <h2 className="mt-5 font-display text-display-l text-balance">
              Planned from catchment data,{" "}
              <span className="em-serif text-violet-deep">not a rate card</span>
              .
            </h2>
          </Rise>
          <div className="col-span-12 mt-6 lg:col-span-3 lg:col-start-10 lg:mt-0 lg:text-right">
            <Btn href="/cities" variant="outline-plum">
              All cities
            </Btn>
          </div>
        </div>

        {/* Written cities only. The earlier version rendered all forty-two
            markets as identical pills, which read as a sitemap dump rather
            than a considered list — forty-two boxes of equal weight tell a
            visitor nothing about where to look. The markets without a page
            are one quiet line underneath, which is also more honest: those
            are names, not destinations. */}
        <ul className="mt-12 grid grid-cols-1 gap-x-10 border-t border-rule-sand sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c, i) => (
            <Rise key={c.slug} as="li" delay={Math.min(i, 9) * 30}>
              <Link
                href={`/cities/${c.slug}`}
                className="group flex items-baseline justify-between gap-4 border-b border-rule-sand py-4 transition-colors hover:bg-sand-2"
              >
                <span className="flex items-baseline gap-3">
                  <span className="link-underline text-h3">{c.name}</span>
                  {deva[c.name] && (
                    <span className="deva text-caption text-violet-deep">
                      {deva[c.name]}
                    </span>
                  )}
                </span>
                <span className="font-mono text-micro tracking-[0.08em] text-on-sand-dim uppercase">
                  {c.state}
                </span>
              </Link>
            </Rise>
          ))}
        </ul>

        <Rise delay={340}>
          <p className="mt-8 max-w-[76ch] text-body-s text-on-sand-dim">
            <span className="font-mono text-micro tracking-[0.08em] text-violet-deep uppercase">
              Also planned —{" "}
            </span>
            {additionalMarkets.join(" · ")}. Written pages for these are in
            progress. We would rather name a market honestly than publish a
            thin page with the city swapped into someone else&rsquo;s
            paragraph.
          </p>
        </Rise>
        </div>
      </section>

      {/* 12 — NUMBERS ---------------------------------------------
          The values count up once on entry. data-count carries the
          final string so reduced motion and no-JS both land on it. */}
      <Band tone="sand2" grain>
        <Rise>
          <Eyebrow>The short version</Eyebrow>
        </Rise>
        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {proofStats.map((s, i) => (
            <Rise key={s.label} delay={i * 60}>
              <dt className="eyebrow text-on-sand-dim">{s.label}</dt>
              <dd
                data-count={/\d/.test(s.value) ? s.value : undefined}
                className="mt-3 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-none"
              >
                {s.value}
              </dd>
              <p className="mt-2.5 max-w-[24ch] text-body-s text-on-sand-dim">
                {s.note}
              </p>
            </Rise>
          ))}
        </dl>
      </Band>
    </>
  );
}
