/* Per-city cards. Twenty-two markets, so a shared card would put the
   wrong city name in front of anyone sharing a city page — which is
   exactly the page most likely to be shared, because it is the one
   that ranks. generateImageMetadata is not needed: one image per
   route segment, keyed off the slug. */
import { notFound } from "next/navigation";
import { cities, cityBySlug } from "@/lib/cities";
import { ogCard, size, contentType } from "@/lib/ogCard";

export const alt = "Outdoor advertising planned from catchment data";
export { size, contentType };

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = cityBySlug(slug);
  if (!city) notFound();

  return ogCard({
    eyebrow: `Cities — ${city.state}`,
    title: `${city.h1Lead}`,
    accent: `${city.h1Accent}.`,
    footnote: "Planned from catchment data, not a rate card",
  });
}
