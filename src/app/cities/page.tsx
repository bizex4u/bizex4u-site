import type { Metadata } from "next";
import Link from "next/link";
import { Band, Btn, Eyebrow, Rise } from "@/components/UI";
import IndiaField from "@/components/IndiaField";
import BriefButton from "@/components/BriefButton";
import { additionalMarkets, cities, regions } from "@/lib/cities";
import { indexNotes } from "@/lib/cities/notes";
import { site } from "@/lib/site";
import PageSchema from "@/components/PageSchema";

export const metadata: Metadata = {
  title: "Outdoor Advertising in India — Cities We Plan",
  description:
    "Outdoor, hoarding, transit, retail and broadcast media planned across 39 Indian markets — every city from its own catchment, not a national rate card.",
  alternates: { canonical: "/cities" },
  /* NO openGraph BLOCK HERE, deliberately. Declaring one without
     `images` is what dropped this page's social card: Next merges the
     title and description into openGraph on its own, and the
     opengraph-image route supplies the picture. Adding a partial
     openGraph object overrode both and left the page as the only one
     on the site sharing without an image. */
};

/* ------------------------------------------------------------------
   The city index.

   The field in the hero is the argument — a national footprint, honest
   about which dots are written pages and which are only planned. The
   list under it has one job: to support that drawing, not to restate
   it five times.

   It used to. Each region got its own band and the same headline with
   a different count ("8 markets, written in full", then 5, then 5,
   then 2, then 2). That read as one list arbitrarily chopped up.

   One ruled index now. Region is a column and a jump chip. Written
   rows still carry a line of their own; planned markets stay names
   without a link. The field already drew that distinction; the type
   agrees with it.
------------------------------------------------------------------- */

/* Which region an unwritten market belongs to, so the index still reads
   as a complete picture of the network rather than as a list of the
   pages that happen to exist. Anything not named here falls through to
   the tail rather than silently disappearing. */
const regionOf: Record<string, (typeof regions)[number]> = {
  Meerut: "North",
  Prayagraj: "North",
  Gorakhpur: "North",
  Amritsar: "North",
  Jalandhar: "North",
  Jodhpur: "North",
  Udaipur: "North",
  Vadodara: "West",
  Rajkot: "West",
  Nashik: "West",
  Raipur: "Central",
  Kochi: "South",
  Coimbatore: "South",
  Madurai: "South",
  Mysuru: "South",
  Visakhapatnam: "South",
  Vijayawada: "South",
  Patna: "East",
  Guwahati: "East",
  Bhubaneswar: "East",
};

export default function CitiesPage() {
  const plannedByRegion = regions.reduce<Record<string, string[]>>((acc, r) => {
    acc[r] = additionalMarkets.filter((m) => regionOf[m] === r);
    return acc;
  }, {});

  const unplaced = additionalMarkets.filter((m) => !regionOf[m]);
  const total = cities.length + additionalMarkets.length;
  const firstInRegion = Object.fromEntries(
    regions.map((r) => [r, cities.find((c) => c.region === r)?.slug]),
  ) as Record<(typeof regions)[number], string | undefined>;

  return (
    <>
      {/* HERO + FIELD ---------------------------------------------
          The drawing sits in the hero rather than below it. It is the
          argument, not an illustration of the argument, and putting it
          under a fold of prose would have been the old page again with
          a picture added. */}
      <section className="grain relative overflow-hidden bg-sand pt-32 pb-14 text-on-sand md:pt-40 md:pb-20">
        <div className="shell relative z-10">
          <div className="grid-12 items-center gap-y-12">
            <div className="col-span-12 lg:col-span-5">
              <Rise>
                <Eyebrow deva="शहर">Cities</Eyebrow>
              </Rise>
              <Rise delay={60}>
                {/* display-l rather than display-xl. At xl, in a
                    five-column measure, the accent clause ran to three
                    lines of violet italic and the hero became a wall of
                    headline with the drawing stranded beside it. The
                    drawing is the argument on this page; the headline
                    introduces it. */}
                <h1 className="mt-6 font-display text-display-l text-balance">
                  India is not one market.{" "}
                  <span className="em-serif text-violet-deep">
                    It never behaves like one.
                  </span>
                </h1>
              </Rise>
              <Rise delay={120}>
                <p className="mt-7 max-w-[46ch] text-body-l text-on-sand-dim">
                  A hoarding on the EM Bypass and a hoarding on Shaheed Path are
                  not the same product, and the plan that treats them as
                  interchangeable is the plan that underdelivers. Every market
                  here is planned from its own catchment, its own movement and
                  its own media economics.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <BriefButton size="lg" context="Cities index">
                    Tell us your market
                  </BriefButton>
                </div>
              </Rise>
            </div>

            <Rise delay={180} className="col-span-12 lg:col-span-6 lg:col-start-7">
              <IndiaField />
            </Rise>
          </div>
        </div>
      </section>

      {/* THE INDEX ------------------------------------------------
          One instrument. The field already said which dots are pages;
          this is the same distinction as a list — written rows with a
          line of their own, planned markets named without a link.
          Region is a column, a chip, and a hairline when the register
          changes — not five restated headlines. The plum band explains
          written vs planned; the H2 does not restate it. */}
      <Band tone="sand2" grain id="index">
        <div className="grid-12 items-end gap-y-8">
          <Rise className="col-span-12 lg:col-span-7">
            <Eyebrow>The index</Eyebrow>
            <h2 className="mt-5 font-display text-display-l text-balance">
              {cities.length} markets, written{" "}
              <span className="em-serif text-violet-deep">in full</span>.
            </h2>
          </Rise>
        </div>

        <nav aria-label="Regions" className="mt-10">
          <ul className="flex flex-wrap gap-2">
            {regions.map((region) => {
              const target = firstInRegion[region];
              if (!target) return null;
              return (
                <li key={region}>
                  <a
                    href={`#${region.toLowerCase()}`}
                    className="inline-flex min-h-11 items-center rounded-full border border-on-sand/20 px-4 text-body-s transition-colors duration-200 hover:border-on-sand hover:bg-on-sand/5"
                  >
                    {region}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <ul className="mt-10">
          {cities.map((c, i) => {
            const regionChanged = i === 0 || cities[i - 1].region !== c.region;
            return (
              <Rise key={c.slug} as="li" delay={Math.min(i, 8) * 40}>
                {regionChanged ? (
                  <div
                    id={c.region.toLowerCase()}
                    className={`scroll-mt-28 ${
                      i === 0
                        ? "border-t border-rule-sand pt-3 pb-2"
                        : "pt-8 pb-2"
                    }`}
                  >
                    <p className="font-mono text-micro tracking-[0.09em] text-violet-deep uppercase">
                      {c.region}
                    </p>
                  </div>
                ) : null}
                <Link
                  href={`/cities/${c.slug}`}
                  className="link-row group grid grid-cols-1 items-baseline gap-x-8 gap-y-1.5 border-b border-rule-sand py-6 md:grid-cols-12"
                >
                  <span className="md:col-span-3">
                    <span className="link-underline font-display text-h1">
                      {c.name}
                    </span>
                    <span className="mt-1 block font-mono text-micro tracking-[0.09em] text-on-sand-dim uppercase">
                      {c.state}
                    </span>
                  </span>
                  <span className="font-mono text-micro tracking-[0.09em] text-violet-deep uppercase md:col-span-2">
                    {c.region}
                  </span>
                  <span className="text-body-l text-on-sand-dim md:col-span-6">
                    {indexNotes[c.slug]}
                  </span>
                  <span
                    aria-hidden
                    className="link-row__go hidden text-h2 md:col-span-1 md:block md:text-right"
                  >
                    &rarr;
                  </span>
                </Link>
              </Rise>
            );
          })}
        </ul>

        <div className="mt-14 border-t border-rule-sand pt-8">
          <Eyebrow muted>Also planned — pages in progress</Eyebrow>
          <dl className="mt-6 grid gap-4 md:grid-cols-2">
            {regions.map((region) => {
              const planned = plannedByRegion[region] ?? [];
              if (!planned.length) return null;
              return (
                <div key={region} className="flex gap-4">
                  <dt className="w-20 shrink-0 font-mono text-micro tracking-[0.09em] text-violet-deep uppercase">
                    {region}
                  </dt>
                  <dd className="text-body-s text-on-sand">
                    {planned.join(", ")}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </Band>

      {/* WHY SOME ARE ONLY NAMES ---------------------------------
          Kept, and given a section of its own rather than a footnote.
          The honesty is the selling point: a competitor's forty-city
          network is forty near-identical pages and a buyer can tell. */}
      <Band tone="plum" grain>
        <div className="grid-12 items-start gap-y-8">
          <Rise className="col-span-12 lg:col-span-5">
            <Eyebrow tone="plum">Why some are only names</Eyebrow>
            <h2 className="mt-5 font-display text-display-l text-balance">
              {cities.length} pages,{" "}
              <span className="em-serif">{total} markets</span>.
            </h2>
          </Rise>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <Rise>
              <p className="text-body-l">
                The linked cities are written in full — the market, where the
                crowds actually are, which formats work there, the local press
                and radio by name, the transit network, what moves the price and
                who licenses it. Every one of them written from scratch.
              </p>
            </Rise>
            <Rise delay={80}>
              <p className="mt-6 text-on-plum-dim">
                The rest are markets we plan and buy in regularly, with pages
                being written now. We would rather name a market honestly than
                publish a thin page with the city swapped into someone
                else&rsquo;s paragraph — you would spot it, and so would Google.
                {unplaced.length > 0 && <> Also planned: {unplaced.join(", ")}.</>}
              </p>
            </Rise>
            <Rise delay={140}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <BriefButton size="lg" context="Market not listed">
                  Ask about a market not listed
                </BriefButton>
                <Btn href="/what-we-do" variant="outline-sand" size="lg">
                  What we can run there
                </Btn>
              </div>
            </Rise>
          </div>
        </div>
      </Band>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${site.url}/cities#collection`,
            name: "Outdoor advertising in India — cities we plan",
            description: `Markets planned and bought by ${site.name} across India — ${total} listed.`,
            url: `${site.url}/cities`,
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: cities.length,
              itemListElement: cities.map((c, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: `Outdoor advertising in ${c.name}`,
                url: `${site.url}/cities/${c.slug}`,
              })),
            },
          }),
        }}
      />
      <PageSchema
        path="/cities"
        name={"Cities Bizex4U plans"}
        description={"Outdoor, hoarding, transit, retail and broadcast media planned across 39 Indian markets — every city from its own catchment, not a national rate card."}
        type="CollectionPage"
      />
    </>
  );
}
