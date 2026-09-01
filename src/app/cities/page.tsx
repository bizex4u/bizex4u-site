import type { Metadata } from "next";
import Link from "next/link";
import { Band, Btn, Eyebrow, Rise } from "@/components/UI";
import BriefForm from "@/components/BriefForm";
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

   One ruled list. Region is a column and a jump chip. Written rows
   carry a line of their own; planned markets stay names without a
   link.
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
      <section className="relative bg-sand pt-14 text-on-sand md:pt-16">
        <div className="shell">
          <div className="grid-12 items-start gap-y-8 py-8 md:py-10">
            <div className="col-span-12 lg:col-span-6 lg:pr-8">
              <Rise>
                <Eyebrow>Markets</Eyebrow>
              </Rise>
              <Rise delay={40}>
                <h1 className="mt-4 font-display text-display-l text-balance">
                  India is not one market.{" "}
                  <span className="em-serif text-violet-deep">
                    It never behaves like one.
                  </span>
                </h1>
              </Rise>
              <Rise delay={80}>
                <p className="mt-5 max-w-[42ch] text-body-s text-on-sand-dim">
                  Every market here is planned from its own catchment — we do
                  not hold the inventory; we buy across owners. The pages are
                  market intelligence, not a site list.
                </p>
              </Rise>
            </div>

            <Rise
              delay={60}
              className="col-span-12 rounded-(--radius-card) bg-sand-2 p-5 md:p-7 lg:col-span-6"
            >
              <BriefForm
                context="Cities index"
                location="cities-hero"
                heading="Ask about a market"
                lede="Name the city. We will write back."
              />
            </Rise>
          </div>
        </div>
      </section>

      {/* THE INDEX ------------------------------------------------ */}
      <Band tone="sand2" grain compact id="index">
        <div className="grid-12 items-end gap-y-4">
          <Rise className="col-span-12 lg:col-span-7">
            <Eyebrow>The index</Eyebrow>
            <h2 className="mt-3 font-display text-h1 text-balance">
              39 markets, planned{" "}
              <span className="em-serif text-violet-deep">city by city</span>.
            </h2>
          </Rise>
        </div>

        <nav aria-label="Regions" className="mt-6">
          <ul className="flex flex-wrap gap-2">
            {regions.map((region) => {
              const target = firstInRegion[region];
              if (!target) return null;
              return (
                <li key={region}>
                  <a
                    href={`#${region.toLowerCase()}`}
                    className="inline-flex min-h-11 items-center rounded-sm border border-on-sand/20 px-4 text-body-s transition-colors duration-200 hover:border-on-sand hover:bg-on-sand/5"
                  >
                    {region}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <ul className="mt-6">
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
                  className="link-row group grid grid-cols-1 items-baseline gap-x-6 gap-y-1 border-b border-rule-sand py-3.5 md:grid-cols-12"
                >
                  <span className="md:col-span-3">
                    <span className="link-underline font-display text-h2">
                      {c.name}
                    </span>
                    <span className="mt-1 block font-mono text-micro tracking-[0.09em] text-on-sand-dim uppercase">
                      {c.state}
                    </span>
                  </span>
                  <span className="font-mono text-micro tracking-[0.09em] text-violet-deep uppercase md:col-span-2">
                    {c.region}
                  </span>
                  <span className="text-body-s text-on-sand-dim md:col-span-6">
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

        <div className="mt-8 border-t border-rule-sand pt-6">
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
      <Band tone="plum" grain compact>
        <div className="grid-12 items-start gap-y-8">
          <Rise className="col-span-12 lg:col-span-5">
            <Eyebrow tone="plum">Why some are only names</Eyebrow>
            <h2 className="mt-3 font-display text-h1 text-balance">
              {cities.length} pages,{" "}
              <span className="em-serif">{total} markets</span>.
            </h2>
            <p className="mt-5 text-body-s">
              The linked cities are written in full. The rest are markets we
              plan regularly, with pages being written now. We would rather
              name a market honestly than publish a thin page with the city
              swapped in.
              {unplaced.length > 0 && <> Also planned: {unplaced.join(", ")}.</>}
            </p>
            <p className="mt-5">
              <Btn href="/what-we-do" variant="outline-sand">
                What we can run there
              </Btn>
            </p>
          </Rise>
          <div className="col-span-12 rounded-(--radius-card) bg-plum-2 p-5 md:p-7 lg:col-span-6 lg:col-start-7">
            <BriefForm
              context="Market not listed"
              location="cities-unlisted"
              surface="plum"
              heading="A market that is not listed"
              lede="Tell us which city. We will write back."
            />
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
