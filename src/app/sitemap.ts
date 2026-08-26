import type { MetadataRoute } from "next";
import { cities } from "@/lib/cities";
import { capabilities, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/barter", priority: 0.9 },
    { path: "/what-we-do", priority: 0.8 },
    { path: "/cities", priority: 0.8 },
    { path: "/work", priority: 0.7 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.7 },
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
  ];
}
