import { GoogleAnalytics } from "@next/third-parties/google";

/**
 * GA4, alongside Plausible and Vercel Analytics — not a replacement.
 *
 * `@next/third-parties` is Next's own wrapper around gtag.js: it loads
 * the tag after hydration (the same afterInteractive timing Plausible
 * uses) and reports SPA route changes, so App Router client
 * transitions count as pageviews without a manual gtag call.
 *
 * Unset NEXT_PUBLIC_GA_MEASUREMENT_ID and this renders nothing.
 * Preview deployments are skipped for the same reason Plausible skips
 * them: a `*.vercel.app` visit is not traffic, and GA4 has no
 * per-hostname filter by default.
 *
 * No consent banner and no consent mode: India-only traffic, no GDPR
 * obligation. Events, conversions and enhanced measurement are
 * configured in the GA4 Admin panel, not here.
 */
export default function Ga4() {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  if (!id) return null;
  if (process.env.VERCEL_ENV === "preview") return null;

  return <GoogleAnalytics gaId={id} />;
}
