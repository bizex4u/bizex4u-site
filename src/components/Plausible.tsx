import Script from "next/script";

const PLAUSIBLE_SRC =
  "https://plausible.io/js/pa-H1cPnWKxixH6m34YhowSM.js";

/**
 * Plausible pageviews on every route.
 *
 * This is the v2 snippet from the dashboard: a site-specific hashed
 * script plus `plausible.init()`. Native `next/script` with a stable
 * `id` so Next does not inject it twice (a known App Router issue that
 * double-counts visits). The tracker follows History API navigations,
 * so App Router client transitions do not need a manual pageview call.
 *
 * Unset NEXT_PUBLIC_PLAUSIBLE_DOMAIN and this renders nothing. Preview
 * deployments are skipped so `*.vercel.app` hits do not land in the
 * production dashboard; set NEXT_PUBLIC_PLAUSIBLE_DEV=true to override.
 */
export default function Plausible() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN?.trim();
  if (!domain) return null;
  if (
    process.env.VERCEL_ENV === "preview" &&
    process.env.NEXT_PUBLIC_PLAUSIBLE_DEV !== "true"
  ) {
    return null;
  }

  const src = process.env.NEXT_PUBLIC_PLAUSIBLE_SRC?.trim() || PLAUSIBLE_SRC;

  return (
    <>
      {/* Queue + init so named events fired before the remote script loads still send. */}
      <Script id="plausible-queue" strategy="beforeInteractive">
        {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
      </Script>
      <Script id="plausible-analytics" src={src} strategy="afterInteractive" />
    </>
  );
}
