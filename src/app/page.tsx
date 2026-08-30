import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import DayClock from "@/components/DayClock";
import ReelBand from "@/components/ReelBand";
import StreetWall from "@/components/StreetWall";
import Marquee from "@/components/Marquee";
import { Band, Btn, Card, Eyebrow, Rise, SectionHead } from "@/components/UI";
import {
  capabilities,
  clients,
  objectives,
  proofFrames,
  proofStats,
  site,
} from "@/lib/site";
import { organisationId, speakable } from "@/lib/schema";
import { additionalMarkets, cities } from "@/lib/cities";
import { exchangeLine, formatLines } from "@/lib/formats";
import FormatPlate, { cityScaleFormats } from "@/components/FormatPlate";
import { heroPlate, statementPlate } from "@/lib/streets";
import MarqueeToggle from "@/components/MarqueeToggle";
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

/* THE HOMEPAGE HAD NO CANONICAL. Every other route declares one; the
   root inherited nothing, because a canonical is not inherited from a
   layout the way a title template is. The root URL is the one most
   likely to be reached through a tracking parameter, a UTM tail or a
   www/non-www variant, so it is the worst page on the site to leave
   undeclared. */
export const metadata: Metadata = {
  alternates: { canonical: "/" },
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
          A street, full bleed, with the type over it.

          This was a split hero: type in one column, the reel in the
          other, on beige. It was safe and it was the reason the page
          opened like a brochure. A company that sells physical
          presence has to open with a physical place, and the frame
          under this type is one of our own — Kozhikode, on a working
          morning, shot standing in the traffic.

          Photograph rather than video, against the obvious reference.
          The reel is a megabyte and a half; this plate is ninety-six
          kilobytes, and the buyer opening it is on Indian mobile data
          in a meeting. The footage still runs further down the page,
          full bleed, where it costs nothing to arrive late.

          The headline reveals line by line — each line is its own
          element because splitting text at runtime breaks screen
          readers. */}
      <section
        data-hero
        className="grain relative isolate flex min-h-[min(88svh,760px)] items-end overflow-hidden bg-plum pt-32 pb-14 text-on-plum md:pt-40 md:pb-20"
      >
        {/* The image sits in its own absolutely-positioned box rather
            than filling the section directly. `[data-hero]` becomes
            `position: sticky` above 1024x860, and next/image warns that
            a `fill` parent must be relative, absolute or fixed — sticky
            does establish a containing block and the layout was correct,
            but a console warning on every dev page load is a warning
            people learn to scroll past. */}
        <div aria-hidden className="absolute inset-0 -z-20 overflow-hidden">
          <Image
            src={heroPlate.src}
            alt={heroPlate.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[58%_46%]"
          />
        </div>
        {/* Scrims, tuned by looking rather than by guessing. The first
            pass ran plum at 85% across two thirds of the frame and the
            street vanished — a dark purple wash with a ghost in it,
            which is decoration pretending to be photography.

            So: opaque only under the first four columns, gone by the
            halfway mark, plus a short bottom fade to seat the section
            against the band below. Everything right of centre is the
            photograph at full strength. */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-linear-to-t from-plum from-38% via-plum/78 via-72% to-plum/40 lg:bg-linear-to-r lg:from-15% lg:via-plum/72 lg:via-45% lg:to-transparent lg:to-72%"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-linear-to-t from-plum/80 to-transparent"
        />
        {/* The sky in this frame blows to white in the top right, which
            put the nav pill and the brief button on near-paper. A short
            top fade seats them without touching the street. */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 -z-10 h-40 bg-linear-to-b from-plum/70 to-transparent"
        />

        <div className="shell relative z-10 w-full">
          <div className="grid-12 items-end gap-y-10">
            <div data-hero-copy className="col-span-12 lg:col-span-7">
              <Rise>
                <Eyebrow tone="plum" deva="भारत भर में">
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
                    it <span className="em-serif text-violet-lift">keeps</span>{" "}
                    seeing.
                  </span>
                </span>
              </h1>

              <Rise delay={120}>
                <p className="speakable-answer mt-7 max-w-[46ch] text-body-l text-on-plum-dim">
                  We put brands into the streets, malls, lifts, papers and
                  screens of more than forty Indian cities — and prove every
                  placement went up. If the cash budget is not there, you can
                  pay in stock instead.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <BriefButton size="lg" context="A plan for my market">
                    Get a plan for your market
                  </BriefButton>
                  <Btn href="/barter" variant="sand" size="lg">
                    Pay in stock instead
                  </Btn>
                </div>

                <p className="mt-5 text-body-s text-on-plum-dim">
                  Two fields, then straight to WhatsApp. Usually answered the
                  same working day.
                </p>
              </Rise>
            </div>

            {/* Says what the reader is looking at. Without it a
                photograph behind type is decoration; with it the
                photograph is evidence, which is the entire argument
                the page goes on to make. */}
            <Rise
              delay={220}
              className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pb-2 lg:text-right"
            >
              <p className="font-mono text-micro leading-relaxed tracking-[0.09em] text-on-plum-dim uppercase">
                {heroPlate.city}
                <span className="mx-2 text-violet-lift">/</span>
                <span className="whitespace-nowrap">our own frame</span>
              </p>
            </Rise>
          </div>
        </div>
      </section>

      {/* 02 — CLIENT MARQUEE --------------------------------------
          Drifts rather than sitting in a wrapped block, and slows on
          hover so a name can actually be read. */}
      <section
        data-marquee-scope
        className="grain relative overflow-hidden bg-sand-2 py-10 text-on-sand md:py-12"
      >
        <div className="shell relative z-10">
          <Rise>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Eyebrow muted>Campaigns planned and run for</Eyebrow>
              <MarqueeToggle label="the client list" tone="sand" />
            </div>
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
          read as one system with an order to it.

          The drawings are gone. Each card used to carry a small
          FormatPlate — rectangles at their real dimensions — and they
          failed twice over. On plum, at card width, they rendered as
          flat grey blocks at a few percent contrast and read as images
          that had not loaded. And the line above them claimed "drawn at
          true proportion" while the component scaled every set
          independently, so a 40 ft hoarding in one card and a 45 ft
          cinema screen in another sat at different pixels-per-foot. The
          section's whole argument was contradicted by its own code.

          The same information is a list now: format name, typical spec.
          Legible at any size, indexable, and it carries the vocabulary
          Indian buyers actually type — hoarding, unipole, bus queue
          shelter. See lib/formats.ts. */}
      <Band tone="plum" grain>
        <SectionHead
            eyebrow="What activation means here"
            tone="plum"
            deva="हम क्या करते हैं"
            title={<>Six ways to be{" "}
              <span className="em-serif">present</span>.</>}
            lede={<>A hoarding and a lift panel are not the same product and should
            not be sold as though they were. These are the formats we plan,
            named the way this market names them.</>}
          />

        <Rise>
          <div className="mt-10 rounded-(--radius-card) bg-plum-2 p-5 md:p-6">
            <p className="font-mono text-micro tracking-[0.08em] text-violet-lift uppercase">
              Drawn at one scale
            </p>
            <p className="mt-2 max-w-[52ch] text-body-s text-on-plum-dim">
              A 40 ft hoarding next to a 2 ft lift panel. The person is
              5&prime;9&Prime;. This is why a format list is not a menu.
            </p>
            <div className="mt-5 overflow-x-auto">
              <FormatPlate
                formats={cityScaleFormats}
                tone="dark"
                base={72}
                maxWidth={420}
              />
            </div>
          </div>
        </Rise>

        {/* Six equal cards was six cards nobody read — card 01 and card
            05 carried identical weight, so nothing led and the eye had
            no route through. The grid states an argument instead: the
            core product takes double width, four sit at normal weight
            beneath it, and barter runs full width because it is the
            thing no competitor offers.

            The 01–06 counter is gone with it. Numbering implies an
            order the reader needs, and there is no reason "be seen"
            precedes "be heard". */}
        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => {
            const lines = formatLines[c.index];
            const lead = i === 0;
            return (
              <Rise
                key={c.href}
                as="li"
                delay={i * 55}
                className={
                  c.accent
                    ? "md:col-span-2 lg:col-span-3"
                    : lead
                      ? "md:col-span-2"
                      : undefined
                }
              >
                <Link
                  href={c.href}
                  className={`lift group flex h-full flex-col rounded-(--radius-card) p-6 md:p-7 ${
                    c.accent
                      ? "bg-violet-deep text-white hover:bg-violet md:flex-row md:items-center md:gap-12"
                      : "bg-plum-2 hover:bg-plum-3"
                  }`}
                >
                  <div className={c.accent ? "md:flex-1" : "contents"}>
                    <p
                      className={`font-mono text-meta tracking-[0.08em] uppercase ${
                        c.accent ? "text-on-violet-dim" : "text-violet-lift"
                      }`}
                    >
                      {c.title}
                    </p>

                    {/* The verb leads. The product name is the kicker. */}
                    <h3
                      className={`mt-3 font-display text-balance ${
                        lead || c.accent ? "text-display-l" : "text-h2"
                      }`}
                    >
                      {c.verb}
                    </h3>
                    <p
                      className={`mt-4 ${
                        lead || c.accent
                          ? "max-w-[46ch] text-body-l"
                          : "max-w-[34ch]"
                      } ${c.accent ? "text-on-violet-dim" : "text-on-plum-dim"}`}
                    >
                      {lead ? c.long : c.short}
                    </p>

                    {c.accent && (
                      <span className="mt-7 inline-flex items-center gap-1.5 text-body-s font-medium">
                        {c.linkLabel ?? "Explore"}{" "}
                        <span className="row-arrow">→</span>
                      </span>
                    )}
                  </div>

                  {/* The spec list. `mt-auto` pins it to the bottom of
                      the card so five cards of unequal copy length still
                      line their lists up along one edge — the thing the
                      old plates never managed, because each one started
                      wherever its paragraph happened to end. */}
                  {lines && (
                    <dl
                      className={`mt-auto grid gap-x-8 pt-8 ${
                        lead ? "sm:grid-cols-2" : ""
                      }`}
                    >
                      {lines.map((f) => (
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

                  {/* Barter is not a medium, so it has no format list.
                      The two legs of the swap, set as type rather than
                      as the pair of bordered boxes that used to sit
                      here. */}
                  {c.accent && (
                    <div className="mt-8 shrink-0 md:mt-0 md:text-right">
                      <p className="font-display text-h2 text-balance">
                        {exchangeLine.give}
                      </p>
                      {/* Left-aligned, this glyph sat off on its own at
                          the far edge of two long right-running lines
                          and read as a stray character. It belongs on
                          the same axis as the things it joins. */}
                      <p
                        aria-hidden
                        className="my-1.5 text-h3 text-on-violet-dim"
                      >
                        ⇄
                      </p>
                      <p className="font-display text-h2 text-balance">
                        {exchangeLine.get}
                      </p>
                    </div>
                  )}

                  {!c.accent && (
                    <span className="inline-flex items-center gap-1.5 pt-7 text-body-s font-medium">
                      {c.linkLabel ?? "Explore"}{" "}
                      <span className="row-arrow">→</span>
                    </span>
                  )}
                </Link>
              </Rise>
            );
          })}
        </ul>

        <Rise delay={340}>
          <p className="mt-8 max-w-[74ch] text-body-s text-on-plum-dim">
            Sizes above are the standard dimensions of each format, not a
            list of what we hold — actual structures vary by site, and
            availability is a conversation rather than a page.
          </p>
        </Rise>
      </Band>

      {/* 05 — THE DAY ---------------------------------------------
          The signature. Pins and scrolls sideways through one day in
          an Indian city. */}
      <DayClock />

      {/* 06 — THE STREETS ------------------------------------------
          Full bleed, edge to edge, no shell. Every other section on
          this page is contained; this one is not, and that contrast
          is the point of putting it here — straight after the day
          clock, which is a diagram, so the abstraction is followed
          immediately by the thing itself. */}
      <StreetWall />

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
                <Eyebrow as="span">{o.index}</Eyebrow>
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
        <SectionHead
            eyebrow="Proof of delivery"
            tone="plum2"
            deva="डिलीवरी का सबूत"
            title={<>You will know it{" "}
              <span className="em-serif">actually went up</span>.</>}
            lede={<>Every placement photographed on site, geo-tagged and dated. You
            get the file, not a summary. Where a screen is digital we verify
            the run date against that morning&rsquo;s newspaper in frame.</>}
          />

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
          heading and behaves like an image.

          It now sits on a street with hoardings stacked up both sides
          of it, which is the whole joke: the sentence says we own
          none of them. On flat beige it was a nicely set claim. On
          this frame it is an argument you can check by looking. */}
      <section className="grain relative isolate flex min-h-[min(86svh,780px)] items-center overflow-hidden bg-plum py-(--spacing-band) text-on-plum">
        <Image
          src={statementPlate.src}
          alt={statementPlate.alt}
          fill
          sizes="100vw"
          className="-z-20 object-cover object-[52%_44%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-plum/62"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-linear-to-b from-plum/75 via-transparent to-plum/80"
        />

        <div className="shell relative z-10 w-full">
          <Rise>
            <p className="max-w-[18ch] font-display text-[clamp(2.5rem,8.5vw,7.5rem)] leading-[0.94] tracking-[-0.025em] text-balance">
              We don&rsquo;t own a single hoarding.{" "}
              <span className="em-serif text-violet-lift">
                That&rsquo;s the point.
              </span>
            </p>
          </Rise>
          <div className="mt-12 grid-12">
            <Rise delay={80} className="col-span-12 lg:col-span-5 lg:col-start-8">
              <p className="text-body-l text-on-plum-dim">
                A media owner recommends what it is holding. A network
                agency recommends what its group holds. We hold nothing, so
                when we argue for a site it is because of where that site
                sits — and when we argue against one, we have nothing to
                lose by saying so.
              </p>
              <div className="mt-8">
                <Btn href="/about" variant="sand">
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
              <Eyebrow tone="violet" muted>What you can trade</Eyebrow>
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
                    <span
                      lang="hi"
                      className="deva text-caption text-violet-deep"
                    >
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
              <Eyebrow as="dt" muted>{s.label}</Eyebrow>
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

      {/* A WebPage node for the root, carrying speakable and the
          review date. It lives here rather than in the shared root
          graph because that graph renders on every route — a WebPage
          whose url is the homepage would then be asserted on all of
          them. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${site.url}/#webpage`,
            url: site.url,
            name: `${site.name} — Independent Indian Media Network`,
            description: site.description,
            isPartOf: { "@id": `${site.url}/#website` },
            about: { "@id": organisationId },
            inLanguage: "en-IN",
            dateModified: site.contentReviewed,
            speakable,
          }),
        }}
      />
    </>
  );
}
