import type { Metadata } from "next";
import Image from "next/image";
import { Band, Btn, Eyebrow, Rise } from "@/components/UI";
import { clients, proofFrames, sectorsServed } from "@/lib/site";
import { reserve, streets } from "@/lib/streets";
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

/* One wide frame carries the hero; the rest fill the gallery. Picked
   for spread across markets rather than for being the prettiest, so the
   row supports the national claim the page makes above it. */
const workPlate = { ...reserve[4], city: "Agra, Uttar Pradesh" };

const pool = [...streets, ...reserve];
const pick = (n: string) => pool.find((s) => s.src.includes(`/${n}.webp`));

/* The lead frame was a wet, grey, empty street that also still carried
   its burnt-in date stamp — the crop was eight percent and the stamp
   needed fourteen. Both fixed: every Agra frame is re-cropped, and the
   lead is now the busiest one in the set, because a page arguing that
   physical attention is worth buying should open on a street with
   people in it. */
const gallery = [
  pick("agra-8"),
  pick("delhi-ncr-1"),
  pick("kochi-4"),
  pick("kozhikode-6"),
  pick("kanpur-1"),
  pick("agra-2"),
  pick("delhi-ncr-3"),
  pick("palakkad-1"),
  pick("agra-12"),
].filter((f): f is (typeof streets)[number] => Boolean(f));

export default function WorkPage() {
  return (
    <>
      {/* HERO ------------------------------------------------------
          A street, not a beige column with a disclaimer card in it.

          This page is called Work and its job is to show some. It
          opened on prose and a grey box explaining what it could not
          publish — the caveat arriving before the thing it qualifies,
          which reads as apology. The caveat is still on the page; it
          now sits after the evidence, where a reader has a reason to
          care about it. */}
      <section className="grain relative isolate flex min-h-[min(72svh,620px)] items-end overflow-hidden bg-plum pt-32 pb-14 text-on-plum md:pt-40 md:pb-20">
        <div aria-hidden className="absolute inset-0 -z-20 overflow-hidden">
          <Image
            src={workPlate.src}
            alt={workPlate.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_54%]"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-linear-to-t from-plum from-34% via-plum/76 via-70% to-plum/40 lg:bg-linear-to-r lg:from-14% lg:via-plum/70 lg:via-46% lg:to-transparent lg:to-74%"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 -z-10 h-36 bg-linear-to-b from-plum/70 to-transparent"
        />
        <div className="shell relative z-10 w-full">
          <div className="grid-12 items-end gap-y-10">
            <div className="col-span-12 lg:col-span-7">
              <Rise>
                <Eyebrow tone="plum" deva="हमारा काम">Work</Eyebrow>
              </Rise>
              <Rise delay={60}>
                <h1 className="mt-6 font-display text-display-xl text-balance">
                  Campaigns planned{" "}
                  <span className="em-serif text-violet-deep">and run</span>.
                </h1>
              </Rise>
              <Rise delay={120}>
                <p className="mt-7 max-w-[50ch] text-body-l text-on-plum-dim">
                  Outdoor, retail, broadcast and barter-funded campaigns across
                  Indian metros and tier-2 markets, for brands in categories
                  where being seen in the physical world still decides whether
                  a person trusts you.
                </p>
              </Rise>
            </div>

            <Rise
              delay={180}
              className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pb-2 lg:text-right"
            >
              <p className="font-mono text-micro leading-relaxed tracking-[0.09em] text-on-plum-dim uppercase">
                {workPlate.city}
                <span className="mx-2 text-violet-lift">/</span>
                <span className="whitespace-nowrap">our own frame</span>
              </p>
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

      {/* 01b — THE WORK, PHOTOGRAPHED -----------------------------
          The page went client names, then proof thumbnails, then four
          paragraphs about documentation. Three blocks of words and four
          small pictures, on the one page a visitor opens expecting to
          look at something.

          This is the answer to that: our own frames at a size worth
          looking at, from four markets, before the page explains
          anything. A masonry-ish grid rather than a uniform one — every
          tile the same size reads as a stock library, and these are not
          interchangeable. */}
      <section className="grain relative overflow-hidden bg-plum py-(--spacing-band) text-on-plum">
        <div className="shell relative z-10">
          <div className="grid-12 items-end">
            <Rise className="col-span-12 lg:col-span-7">
              <Eyebrow tone="plum" deva="सड़क पर">Shot on site</Eyebrow>
              <h2 className="mt-5 font-display text-display-l text-balance">
                Placements, <span className="em-serif">while they ran</span>.
              </h2>
            </Rise>
            <p className="col-span-12 mt-5 max-w-[42ch] text-body-l text-on-plum-dim lg:col-span-5 lg:mt-0">
              Agra, Delhi NCR, Kochi, Kozhikode, Kanpur. Photographed by us,
              standing in the traffic, on a working day — the only condition
              under which any of it counts.
            </p>
          </div>

          <ul className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((f, i) => (
              <Rise
                key={f.src}
                as="li"
                delay={Math.min(i, 8) * 50}
                className={i === 0 ? "sm:col-span-2 lg:row-span-2" : undefined}
              >
                <figure className="m-0 h-full overflow-hidden rounded-(--radius-card) bg-plum-2">
                  <div
                    className={`relative ${i === 0 ? "aspect-4/3 lg:h-full" : "aspect-3/2"}`}
                  >
                    <Image
                      src={f.src}
                      alt={f.alt}
                      fill
                      sizes={
                        i === 0
                          ? "(min-width: 1024px) 62vw, 92vw"
                          : "(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 92vw"
                      }
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="px-4 py-3.5 font-mono text-micro tracking-[0.09em] text-on-plum-dim uppercase">
                    {f.city}
                  </figcaption>
                </figure>
              </Rise>
            ))}
          </ul>
        </div>
      </section>

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
