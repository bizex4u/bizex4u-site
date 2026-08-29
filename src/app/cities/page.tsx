import type { Metadata } from "next";
import Link from "next/link";
import { Band, Btn, Eyebrow, Rise } from "@/components/UI";
import IndiaField from "@/components/IndiaField";
import BriefButton from "@/components/BriefButton";
import { additionalMarkets, cities } from "@/lib/cities";
import { indexNotes } from "@/lib/cities/notes";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Outdoor Advertising in India — Cities We Plan",
  description:
    "Outdoor, hoarding, transit, retail and broadcast media planned across 39 Indian markets. Every city planned from its own catchment, not from a national rate card.",
  alternates: { canonical: "/cities" },
  openGraph: {
    title: "Outdoor Advertising in India — Cities We Plan",
    description:
      "Outdoor, hoarding, transit, retail and broadcast media planned across 39 Indian markets.",
    url: `${site.url}/cities`,
  },
};

/* ------------------------------------------------------------------
   The city index.

   This was five columns of plain text links — thirty-nine names, every
   one the same weight, in the shape of a sitemap. It made the strongest
   claim on the site (a national footprint, each market understood on
   its own terms) in the format least able to carry it, and it gave a
   reader no reason to click any particular row.

   Three changes.

   The field. One picture beats thirty-nine names in a list, and this
   one is honest about which markets have a written page and which do
   not. See IndiaField and the note in lib/geo.ts about why there is no
   national outline under it.

   A line per city. A directory row that carries only a name asks the
   reader to already know why they would want it. A row that says what
   is peculiar about that market is the page doing its job.

   Regions as bands rather than columns. Five short columns forced every
   list to the length of the longest and left three of them half empty.
------------------------------------------------------------------- */

const regions = ["North", "West", "South", "East", "Central"] as const;

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
          One band per region. Written cities are rows with a line of
          their own; planned markets are named quietly underneath,
          which is the same distinction the field draws in dots. */}
      {regions.map((region, ri) => {
        const written = cities.filter((c) => c.region === region);
        const planned = plannedByRegion[region] ?? [];
        if (!written.length && !planned.length) return null;

        return (
          <Band
            key={region}
            tone={ri % 2 === 0 ? "sand2" : "sand"}
            grain
            id={region.toLowerCase()}
          >
            <div className="grid-12 items-end">
              <Rise className="col-span-12 lg:col-span-6">
                <Eyebrow>{region}</Eyebrow>
                <h2 className="mt-5 font-display text-display-l text-balance">
                  {written.length}{" "}
                  {written.length === 1 ? "market" : "markets"}, written{" "}
                  <span className="em-serif text-violet-deep">in full</span>.
                </h2>
              </Rise>
              {planned.length > 0 && (
                <p className="col-span-12 mt-5 max-w-[38ch] text-body-s text-on-sand-dim lg:col-span-4 lg:col-start-9 lg:mt-0 lg:text-right">
                  Also planned across {region.toLowerCase()} India —{" "}
                  {planned.join(", ")}. Pages in progress.
                </p>
              )}
            </div>

            <ul className="mt-11 border-t border-rule-sand">
              {written.map((c, i) => (
                <Rise key={c.slug} as="li" delay={Math.min(i, 8) * 40}>
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
                    <span className="text-body-l text-on-sand-dim md:col-span-8">
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
              ))}
            </ul>
          </Band>
        );
      })}

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
    </>
  );
}
