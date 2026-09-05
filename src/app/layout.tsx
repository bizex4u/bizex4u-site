import type { Metadata } from "next";
import { Suspense } from "react";
import localFont from "next/font/local";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import ScrollCraft from "@/components/ScrollCraft";
import Plausible from "@/components/Plausible";
import Ga4 from "@/components/Ga4";
import AnalyticsBoot from "@/components/AnalyticsBoot";
import ExternalNavGuard from "@/components/ExternalNavGuard";
import { site } from "@/lib/site";
import { siteOrigin } from "@/lib/metadata";
import "./globals.css";
import { rootGraph } from "@/lib/schema";

/* Fonts are self-hosted rather than pulled from Google.
   Faster first paint, no third-party request, no consent question. */

/* Display: Instrument Serif. One weight, wide range, and the
   fastest way out of the all-grotesk look every AI-built page
   shares. Its italic carries the emphasis inside headlines. */
const instrumentSerif = localFont({
  variable: "--font-instrument-serif",
  display: "swap",
  src: [
    {
      path: "../fonts/instrument-serif-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/instrument-serif-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
});

/* Text: Instrument Sans — same family programme as the serif, so
   they sit together without argument. */
const instrumentSans = localFont({
  variable: "--font-instrument-sans",
  display: "swap",
  src: [
    {
      path: "../fonts/instrument-sans-latin-wght-normal.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
});

/* Inter used to be declared here and shipped on every page — 48 KB
   that could never render. The stack is
   `--font-sans: instrumentSans, inter, system-ui`, so Instrument Sans
   wins every resolution and Inter only ever loaded to sit unused. A
   fallback that cannot fire is not a fallback, it is a download. */

/* Devanagari. City names may still carry Hindi. Section eyebrows on
   the enterprise pages do not — dual script on every band read as
   vernacular when the buyer is a national brand. */
const mukta = localFont({
  variable: "--font-mukta",
  display: "swap",
  src: [
    {
      path: "../fonts/mukta-devanagari-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});

const plexMono = localFont({
  variable: "--font-plex-mono",
  display: "swap",
  src: [
    {
      path: "../fonts/ibm-plex-mono-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ibm-plex-mono-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin()),
  title: {
    default: "Bizex4U — Independent OOH planning and buying",
    template: "%s | Bizex4U",
  },
  description: site.description,
  /* url / twitter title / description are NOT set here. Next shallow-
     replaces nested `openGraph` and `twitter` objects: a homepage url
     or tagline on the root is what every interior page would inherit.
     Each route sets those fields via `routeMetadata`. */
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
  },
  /* summary_large_image, not the default `summary`. With a 1200x630
     card generated per route, `summary` would crop it to a small
     square thumbnail and throw away the headline — which is the part
     doing the work when the link lands in a WhatsApp group. */
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
};

/* The font variables go on <html>, not <body>.
   Tailwind's @theme writes `--font-display: var(--font-instrument-serif)`
   onto :root. A custom property is substituted at computed-value time on the
   element it is DECLARED on — so if --font-instrument-serif only exists
   further down the tree, --font-display is invalid at :root, computes to
   nothing, and every heading silently falls back to system sans. That is
   exactly what happened once. Same element, or it does not resolve. */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${instrumentSerif.variable} ${instrumentSans.variable} ${plexMono.variable} ${mukta.variable}`}
    >
      <body>
        {/* The entity, once, at the root — so every page inherits it and
            a crawler landing anywhere can resolve who this is. It was
            only on /contact, which is the page an answer engine is least
            likely to land on first. See lib/schema.ts. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootGraph) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-100 focus:rounded-full focus:bg-plum focus:px-5 focus:py-3 focus:text-on-plum"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <Motion />
        <ScrollCraft />
        <Plausible />
        <Ga4 />
        <Suspense fallback={null}>
          <AnalyticsBoot />
        </Suspense>
        <ExternalNavGuard />
      </body>
    </html>
  );
}
