import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

if (new URL(site.url).hostname !== "bizex4u.com") {
  throw new Error(
    `robots.txt must emit the apex host (bizex4u.com), got ${site.url}`,
  );
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
