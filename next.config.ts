import type { NextConfig } from "next";
import cutover from "./cutover-redirects.json";

/**
 * Canonical host is the apex. Live production already 302s www → apex;
 * this makes the same hop a permanent redirect from the app, not only DNS.
 *
 * `permanent: true` is Next's permanent redirect. Next emits 308 rather
 * than 301 so the request method is preserved; Google treats 308 as a
 * permanent redirect the same way it treats 301. A 302 here would tell
 * crawlers the move is temporary and would split equity across hosts.
 */
const wwwToApex = {
  source: "/:path*",
  has: [{ type: "host" as const, value: "www.bizex4u.com" }],
  destination: "https://bizex4u.com/:path*",
  permanent: true,
};

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const longLivedCache = [
  {
    key: "Cache-Control",
    value: "public, max-age=31536000, immutable",
  },
];

const ogImageCache = [
  {
    key: "Cache-Control",
    value:
      "public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400",
  },
];

const CANONICAL_BARTER = "https://bizex4u.com/barter-advertising";

/**
 * /barter and /barter/ on the apex and on www each go to the canonical
 * URL in one response. They are listed before the general www→apex
 * rule and before the trailing-slash collapse, otherwise www /barter
 * becomes apex /barter and only then /barter-advertising.
 *
 * skipTrailingSlashRedirect turns off Next's own "/:path+/" → "/:path+"
 * redirect, which otherwise runs first and makes /barter/ a second hop.
 * The same collapse is added back below, after the barter rules.
 */
function barterHop(source: "/barter" | "/barter/", host: string) {
  return {
    source,
    has: [{ type: "host" as const, value: host }],
    destination: CANONICAL_BARTER,
    permanent: true as const,
  };
}

const barterOneHop = [
  ...["www.bizex4u.com", "bizex4u.com"].flatMap((host) => [
    barterHop("/barter", host),
    barterHop("/barter/", host),
  ]),
  // Preview hosts and any other host. Next treats `/barter` as matching
  // `/barter/` as well, so this one rule covers the trailing slash.
  {
    source: "/barter" as const,
    destination: CANONICAL_BARTER,
    permanent: true as const,
  },
];

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/logos/:path*",
        headers: longLivedCache,
      },
      {
        source: "/opengraph-image",
        headers: ogImageCache,
      },
      {
        source: "/opengraph-image.png",
        headers: ogImageCache,
      },
      {
        source: "/:path+/opengraph-image",
        headers: ogImageCache,
      },
      {
        source: "/:path+/opengraph-image.png",
        headers: ogImageCache,
      },
    ];
  },
  async redirects() {
    return [
      ...barterOneHop,
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
      wwwToApex,
      ...cutover.paths.map((r) => ({
        source: r.source,
        destination: r.destination,
        permanent: true as const,
      })),
    ];
  },
};

export default nextConfig;
