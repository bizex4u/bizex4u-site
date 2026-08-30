import type { NextConfig } from "next";

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

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [wwwToApex];
  },
};

export default nextConfig;
