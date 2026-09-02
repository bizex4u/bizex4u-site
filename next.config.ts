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

const nextConfig: NextConfig = {
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
