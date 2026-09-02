import Script from "next/script";

/**
 * Plausible pageviews on every route.
 *
 * Native `next/script` with a stable `id` so Next does not inject the
 * snippet twice (a known App Router issue that double-counts visits).
 * The default tracker already follows History API navigations, so App
 * Router client transitions do not need a manual pageview call.
 *
 * Unset NEXT_PUBLIC_PLAUSIBLE_DOMAIN and this renders nothing — local
 * and preview stay quiet until the domain is configured. Preview
 * deployments are skipped so `*.vercel.app` hits do not land in the
 * production dashboard; set NEXT_PUBLIC_PLAUSIBLE_DEV=true to override.
 */
export default function Plausible() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN?.trim();
  if (!domain) return null;
  if (process.env.VERCEL_ENV === "preview" && process.env.NEXT_PUBLIC_PLAUSIBLE_DEV !== "true") {
    return null;
  }

  const src =
    process.env.NEXT_PUBLIC_PLAUSIBLE_SRC ?? "https://plausible.io/js/script.js";

  return (
    <>
      {/* Queue so named events fired before the remote script loads still send. */}
      <Script id="plausible-queue" strategy="beforeInteractive">
        {`window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)}`}
      </Script>
      <Script
        id="plausible-analytics"
        src={src}
        data-domain={domain}
        strategy="afterInteractive"
      />
    </>
  );
}
