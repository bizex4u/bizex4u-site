import type { Metadata, ResolvingMetadata } from "next";
import { site } from "./site";

/**
 * Canonical origin for metadata URLs.
 *
 * NEXT_PUBLIC_SITE_URL is the source of truth (no trailing slash).
 * Falls back to `site.url` so local builds still resolve if the env
 * var has not been copied into `.env.local` yet.
 */
export function siteOrigin(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? site.url;
  return raw.replace(/\/$/, "");
}

/** Absolute URL for a route pathname (`/` → origin, `/about` → origin/about). */
export function pageUrl(pathname: string): string {
  const origin = siteOrigin();
  if (!pathname || pathname === "/") return origin;
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${origin}${path}`;
}

function socialTitle(title: NonNullable<Metadata["title"]>): string {
  if (typeof title === "string") return title;
  if ("absolute" in title && title.absolute) return title.absolute;
  if ("default" in title && typeof title.default === "string") {
    return title.default;
  }
  return site.name;
}

type RouteMetaInput = {
  /** Pathname used for both the canonical tag and og:url. */
  path: string;
  title: NonNullable<Metadata["title"]>;
  description: string;
  ogType?: "website" | "article";
  /**
   * Routes that ship their own `opengraph-image` file must leave this
   * false — setting `openGraph.images` here would suppress that file.
   * Everyone else inherits the root card via `parent`.
   */
  inheritOgImages?: boolean;
};

/**
 * Per-route metadata. Next shallow-replaces `openGraph` and `twitter`
 * from the root layout, so title, description and url have to be set
 * here or social crawlers keep the homepage values.
 */
export async function routeMetadata(
  parent: ResolvingMetadata,
  {
    path,
    title,
    description,
    ogType = "website",
    inheritOgImages = true,
  }: RouteMetaInput,
): Promise<Metadata> {
  const url = pageUrl(path);
  const twitterTitle = socialTitle(title);
  const images = inheritOgImages
    ? (await parent).openGraph?.images
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: ogType,
      locale: "en_IN",
      siteName: site.name,
      url,
      title: twitterTitle,
      description,
      ...(images && images.length > 0 ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: twitterTitle,
      description,
    },
  };
}
