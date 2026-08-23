import type { Metadata } from "next";
import localFont from "next/font/local";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import { site } from "@/lib/site";
import "./globals.css";

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

const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: [
    {
      path: "../fonts/inter-latin-wght-normal.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
});

/* Devanagari. The site is an Indian media network selling Indian
   streets — city names, formats and section labels carry their Hindi
   setting alongside the Latin. Mukta is by Ek Type, a Mumbai foundry,
   and is open licensed. It is the cheapest way to make the page read
   as Indian rather than as a London template with rupee prices. */
const mukta = localFont({
  variable: "--font-mukta",
  display: "swap",
  src: [
    {
      path: "../fonts/mukta-devanagari-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/mukta-devanagari-600-normal.woff2",
      weight: "600",
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
  metadataBase: new URL(site.url),
  title: {
    default: "Bizex4U — Independent Indian Media Network",
    template: "%s | Bizex4U",
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    url: site.url,
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
      className={`${instrumentSerif.variable} ${instrumentSans.variable} ${inter.variable} ${plexMono.variable} ${mukta.variable}`}
    >
      <body>
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
      </body>
    </html>
  );
}
