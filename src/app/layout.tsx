import type { Metadata } from "next";
import localFont from "next/font/local";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import { site } from "@/lib/site";
import "./globals.css";

/* Fonts are self-hosted rather than pulled from Google.
   Faster first paint, no third-party request, no consent question. */

const archivo = localFont({
  variable: "--font-archivo",
  display: "swap",
  src: [
    {
      path: "../fonts/archivo-latin-wght-normal.woff2",
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
  variable: "--font-deva",
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body
        className={`${archivo.variable} ${inter.variable} ${plexMono.variable} ${mukta.variable}`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-100 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
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
