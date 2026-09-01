/**
 * Internal app routes stay on the Next.js router. Everything else —
 * http(s), protocol-relative, mailto, tel — is a real browser
 * navigation. Next's isLocalURL treats any non-absolute href as local,
 * so `//example.com` and a missed `https://` would otherwise be
 * preventDefaulted and fetched as an in-app route.
 */

const APP_ORIGIN = "https://bizex4u.com";

export function isExternalHref(href: string | null | undefined): boolean {
  if (!href) return false;
  const trimmed = href.trim();
  if (!trimmed || trimmed.startsWith("#") || trimmed.startsWith("?")) {
    return false;
  }
  if (/^(mailto|tel|sms):/i.test(trimmed)) return true;
  if (trimmed.startsWith("//")) return true;
  if (trimmed.startsWith("/")) return false;
  try {
    const origin =
      typeof window !== "undefined" ? window.location.origin : APP_ORIGIN;
    return new URL(trimmed, origin).origin !== origin;
  } catch {
    return false;
  }
}

export function externalAnchorProps(href: string): {
  href: string;
  target?: "_blank";
  rel?: "noopener noreferrer";
} {
  if (/^(mailto|tel|sms):/i.test(href)) return { href };
  return { href, target: "_blank", rel: "noopener noreferrer" };
}
