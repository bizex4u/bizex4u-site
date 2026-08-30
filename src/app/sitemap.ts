import type { MetadataRoute } from "next";
import { cities } from "@/lib/cities";
import { terms } from "@/lib/glossary";
import { capabilities, site } from "@/lib/site";

if (new URL(site.url).hostname !== "bizex4u.com") {
  throw new Error(
    `sitemap.xml must emit apex URLs (bizex4u.com), got ${site.url}`,
  );
}

/* lastModified used to be `new Date()` — the build clock. That told
   every crawler that all thirty-four pages changed on every deploy,
   including deploys that changed a colour token. A sitemap whose
   lastmod is always "today" is a sitemap whose lastmod is ignored,
   which is worse than not sending one. It now carries the date the
   content was actually reviewed. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date(site.contentReviewed);

  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/barter", priority: 0.9 },
    { path: "/what-we-do", priority: 0.8 },
    { path: "/cities", priority: 0.8 },
    { path: "/work", priority: 0.7 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.7 },
    { path: "/glossary", priority: 0.7 },
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: `${site.url}${r.path}`,
      lastModified: now,
      priority: r.priority,
    })),
    ...capabilities
      .filter((c) => c.href.startsWith("/what-we-do"))
      .map((c) => ({
        url: `${site.url}${c.href}`,
        lastModified: now,
        priority: 0.7,
      })),
    ...cities.map((c) => ({
      url: `${site.url}/cities/${c.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
    /* Generated from the glossary register, same as the cities. A
       term added to that file appears here without anybody editing
       this one — which is the only way a sitemap stays true. */
    ...terms.map((t) => ({
      url: `${site.url}/glossary/${t.slug}`,
      lastModified: now,
      priority: 0.6,
    })),
  ];
}
