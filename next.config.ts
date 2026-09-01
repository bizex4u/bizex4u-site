import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* /cities/kanpur.md is the llmstxt.org v2 pattern. The city page
     already occupies /cities/[slug], so a rewrite has to win before
     that dynamic segment treats "kanpur.md" as a slug and 404s. */
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/cities/:slug.md",
          destination: "/cities/:slug/md",
        },
      ],
    };
  },
  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml; charset=utf-8",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "Link",
            value: '</llms.txt>; rel="describedby"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
