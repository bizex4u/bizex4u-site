import type { City } from "@/lib/cities";
import { site } from "@/lib/site";

/**
 * Plain-markdown rendering of a city page for language models.
 *
 * HTML city pages are written for a person. Models that fetch a URL
 * still have to strip layout, navigation and script. Serving the same
 * register as text/markdown at `/cities/<slug>.md` is the llmstxt.org
 * v2 convention: one fetch, the facts, no chrome. Constraints stay
 * in the file so a model does not treat withheld rates as a gap.
 */
export function cityToMarkdown(city: City): string {
  const names = [city.name, ...(city.alsoKnownAs ?? [])].join(" / ");

  const crowds = city.crowdPlaces
    .map((p) => `- **${p.place}** — ${p.note}`)
    .join("\n");

  const formats = city.formatGuide
    .map((f) => `### ${f.title}\n\n${f.kicker}. ${f.body}`)
    .join("\n\n");

  const press = city.localMedia.press
    .map((p) => `- **${p.title}** (${p.language}) — ${p.note}`)
    .join("\n");

  const radio = city.localMedia.radio
    .map((r) => `- **${r.station}** ${r.frequency} — ${r.note}`)
    .join("\n");

  const transit = city.transit.modes
    .map((m) => `- **${m.mode}** — ${m.note}`)
    .join("\n");

  const costs = city.costDrivers
    .map((c) => `- **${c.factor}** — ${c.note}`)
    .join("\n");

  const compliance = city.compliance.body.map((p) => p).join("\n\n");

  const season = city.season
    .map((s) => `- **${s.window}** — ${s.note}`)
    .join("\n");

  const faq = city.faq.map((item) => `### ${item.q}\n\n${item.a}`).join("\n\n");

  const nearby = city.nearby.join(", ");

  return `# Outdoor advertising in ${names}, ${city.state}

> ${city.heroLede}

Canonical page: ${site.url}/cities/${city.slug}
Firm: ${site.name} — independent OOH media planning and buying. We do not own hoardings, screens or airtime. We do not publish rates, inventory, site lists or campaign results.

## The market

${city.market.join("\n\n")}

## Where the crowds are

${crowds}

## Format guide

${formats}

## Press and radio

${press}

${city.localMedia.radioNote}

${radio}

## Transit

${city.transit.lede}

${transit}

## What moves the price

No rates. These are the variables that move a buy in ${city.name}:

${costs}

## Permissions and compliance

Licensing authority: ${city.compliance.authority}.

${compliance}

## Seasonal calendar

${season}

## How we plan it

${city.planning}

## Nearby markets

${nearby}

## FAQ

${faq}

## Freshness

Content last reviewed: ${site.contentReviewed}.
`;
}
