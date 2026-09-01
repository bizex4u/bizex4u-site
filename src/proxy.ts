import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Next's isLocalURL treats any href without a scheme as in-app. If a
 * click is rewritten to a same-origin path like `/https://example.com`,
 * the app would serve HTML or a nosniff text/plain 404 — which Chrome
 * then saves as a file instead of opening the site.
 *
 * Send those mistaken paths out as a normal browser navigation.
 */
function mistakenExternalUrl(pathname: string, search: string): string | null {
  // Next may collapse `//` to `/` before Proxy runs, so both
  // `/https://host` and `/https:/host` have to resolve out.
  for (const scheme of ["https", "http"] as const) {
    const intact = `/${scheme}://`;
    const collapsed = `/${scheme}:/`;
    if (pathname.startsWith(intact)) return pathname.slice(1) + search;
    if (pathname.startsWith(collapsed)) {
      return `${scheme}://${pathname.slice(collapsed.length)}${search}`;
    }
  }
  return null;
}

export function proxy(request: NextRequest) {
  const dest = mistakenExternalUrl(
    request.nextUrl.pathname,
    request.nextUrl.search,
  );
  if (dest) return NextResponse.redirect(dest);
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|api|favicon.ico).*)"],
};
