import { cities, cityBySlug } from "@/lib/cities";
import { cityToMarkdown } from "@/lib/cityMarkdown";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ slug: string }> },
) {
  const { slug } = await context.params;
  const city = cityBySlug(slug);
  if (!city) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(cityToMarkdown(city), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "X-Robots-Tag": "noindex",
      Link: `</llms.txt>; rel="describedby", <${site.url}/cities/${city.slug}>; rel="canonical"`,
    },
  });
}
