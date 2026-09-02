/**
 * The only place this site talks to Plausible, PostHog or Vercel Analytics.
 *
 * Pageviews are Plausible (root layout). Named funnel events fan out
 * here. `posthog-js` is imported inside `boot()`, which runs from
 * `next/script strategy="afterInteractive"` — the same reason the
 * unused Inter file was dropped. A static import here would put the
 * analytics bundle back on first paint.
 *
 * Property values are allowlisted. Name, email, phone, company and
 * message text cannot get through even if a caller tries.
 */

import { track as vercelTrack } from "@vercel/analytics";

export type AnalyticsEvent =
  | "cta_view"
  | "cta_click"
  | "brief_open"
  | "brief_field_focus"
  | "brief_abandon"
  | "brief_submit"
  | "brief_result"
  | "whatsapp_click"
  | "scroll_depth";

export type AnalyticsProps = Record<string, string | number | boolean>;

const ALLOWED_KEYS = new Set([
  "location",
  "page",
  "variant",
  "label",
  "scroll_pct",
  "source_location",
  "field",
  "last_field",
  "seconds_open",
  "seconds_to_complete",
  "ok",
  "status",
  "pct",
]);

const BLOCKED_KEYS =
  /^(name|email|phone|tel|company|brand|person|message|detail|text|role|market|holding|value|company_website)$/i;

type Queued = {
  event: AnalyticsEvent;
  props: Record<string, string | number | boolean>;
};

type PostHogClient = {
  capture: (event: string, props?: Record<string, unknown>) => void;
  opt_out_capturing: () => void;
};

let client: PostHogClient | null = null;
let booted = false;
let booting: Promise<void> | null = null;
const queue: Queued[] = [];

export function privacyOptOut(): boolean {
  if (typeof navigator === "undefined") return false;
  const nav = navigator as Navigator & {
    msDoNotTrack?: string;
    globalPrivacyControl?: boolean;
  };
  const dnt =
    nav.doNotTrack === "1" ||
    nav.doNotTrack === "yes" ||
    nav.msDoNotTrack === "1" ||
    (typeof window !== "undefined" &&
      (window as Window & { doNotTrack?: string }).doNotTrack === "1");
  const gpc = nav.globalPrivacyControl === true;
  return Boolean(dnt || gpc);
}

export function pagePath(): string {
  if (typeof window === "undefined") return "";
  return window.location.pathname;
}

export function scrollPct(): number {
  if (typeof window === "undefined") return 0;
  const root = document.documentElement;
  const max = root.scrollHeight - root.clientHeight;
  if (max <= 0) return 100;
  return Math.min(100, Math.max(0, Math.round((window.scrollY / max) * 100)));
}

export function inferCtaLocation(el: Element): string {
  const explicit = el.getAttribute("data-cta-location");
  if (explicit) return explicit;
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  if (el.closest("[data-hero]")) return "hero";
  const section = el.closest("section[id]");
  if (section?.id) return section.id;
  const main = el.closest("main");
  if (main) {
    const first = main.querySelector(":scope > section, :scope > * > section");
    if (first && first.contains(el)) return "hero";
  }
  return "page";
}

function looksLikePii(value: string): boolean {
  if (/\S+@\S+\.\S+/.test(value)) return true;
  const digits = value.replace(/[^\d+]/g, "");
  if (/(?:\+91)?[6-9]\d{9}$/.test(digits)) return true;
  return false;
}

function sanitize(
  raw: AnalyticsProps | undefined,
): Record<string, string | number | boolean> {
  const out: Record<string, string | number | boolean> = {};
  if (!raw) return out;
  for (const [key, value] of Object.entries(raw)) {
    if (BLOCKED_KEYS.test(key)) continue;
    if (!ALLOWED_KEYS.has(key)) continue;
    if (typeof value === "string") {
      if (looksLikePii(value)) continue;
      out[key] = value.slice(0, 120);
    } else if (typeof value === "number" && Number.isFinite(value)) {
      out[key] = value;
    } else if (typeof value === "boolean") {
      out[key] = value;
    }
  }
  return out;
}

type PlausibleFn = ((
  event: string,
  options?: { props?: Record<string, string | number | boolean> },
) => void) & { q?: unknown[] };

function flush(
  event: AnalyticsEvent,
  props: Record<string, string | number | boolean>,
) {
  try {
    vercelTrack(event, props);
  } catch {
    /* Script not injected yet; the next boot flush covers it. */
  }
  client?.capture(event, props);
  if (typeof window !== "undefined") {
    const w = window as Window & {
      plausible?: PlausibleFn;
      __funnelEvents?: Array<{ event: string; props: typeof props }>;
    };
    if (process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && w.plausible) {
      try {
        w.plausible(
          event,
          Object.keys(props).length > 0 ? { props } : undefined,
        );
      } catch {
        /* Script queued; the snippet buffer holds the call. */
      }
    }
    w.__funnelEvents = w.__funnelEvents ?? [];
    w.__funnelEvents.push({ event, props });
    if (w.__funnelEvents.length > 80) w.__funnelEvents.shift();
  }
}

export function track(
  event: AnalyticsEvent,
  properties?: AnalyticsProps,
): void {
  if (typeof window === "undefined") return;
  if (privacyOptOut()) return;
  const props = sanitize(properties);
  if (!booted) {
    queue.push({ event, props });
    return;
  }
  flush(event, props);
}

export async function boot(): Promise<void> {
  if (booting) return booting;
  booting = (async () => {
    if (typeof window === "undefined") return;
    if (privacyOptOut()) {
      booted = true;
      queue.length = 0;
      return;
    }

    const key =
      process.env.NEXT_PUBLIC_POSTHOG_KEY ||
      process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
    const host =
      process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

    if (key) {
      const { default: posthog } = await import("posthog-js");
      posthog.init(key, {
        api_host: host,
        defaults: "2026-05-30",
        respect_dnt: true,
        autocapture: false,
        capture_dead_clicks: false,
        rageclick: false,
        capture_pageview: "history_change",
        disable_session_recording: true,
        disable_surveys: true,
        person_profiles: "identified_only",
        loaded: (ph) => {
          if (privacyOptOut()) ph.opt_out_capturing();
        },
      });
      client = posthog;
    }

    booted = true;
    for (const item of queue.splice(0)) flush(item.event, item.props);
  })();
  return booting;
}

export function useAnalytics() {
  return { track, scrollPct, pagePath };
}
