import { NextResponse } from "next/server";

/**
 * POST /api/brief
 *
 * Where every form on the site delivers. It forwards the submission to
 * a Google Apps Script web app, which appends a row to a Sheet and
 * emails a notification.
 *
 * Why a server route rather than posting to Apps Script from the
 * browser: Apps Script web apps answer with a 302 to a
 * googleusercontent.com URL, and that redirect has no CORS headers, so
 * a browser fetch either fails or has to run in no-cors mode where the
 * response is opaque and failures are invisible. Going through the
 * server sidesteps CORS completely, keeps the webhook URL out of the
 * client bundle, and — the point — lets us return a real success or
 * failure instead of guessing.
 *
 * Configure BRIEF_WEBHOOK_URL in .env.local. With it unset the route
 * answers 501 and the forms fall back to the WhatsApp hand-off alone,
 * which is exactly how the site behaved before this existed.
 */

export const runtime = "nodejs";
/* Never cached: every request is a distinct submission. */
export const dynamic = "force-dynamic";

type Payload = Record<string, string>;

const MAX_FIELD = 2000;

function clean(v: unknown): string {
  return typeof v === "string" ? v.trim().slice(0, MAX_FIELD) : "";
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  /* Honeypot. Real people never fill a field they cannot see; bots
     fill everything. Answer 200 so a scraper cannot tell it was
     caught and start probing for the real shape. */
  if (clean(body.company_website)) {
    return NextResponse.json({ ok: true, skipped: true });
  }

  const brand = clean(body.brand);
  const person = clean(body.person);

  /* The same two fields the UI enforces. Client-side `required` is a
     convenience, not a guarantee — anything can post here. */
  if (!brand || !person) {
    return NextResponse.json(
      { ok: false, error: "brand_and_name_required" },
      { status: 422 },
    );
  }

  const submission = {
    receivedAt: new Date().toISOString(),
    brand,
    person,
    role: clean(body.role),
    market: clean(body.market),
    context: clean(body.context),
    detail: clean(body.detail),
    /* Barter-selector fields; empty for the general brief form. */
    holding: clean(body.holding),
    value: clean(body.value),
    markets: clean(body.markets),
    source: clean(body.source) || "brief",
    page: clean(body.page),
  };

  const webhook = process.env.BRIEF_WEBHOOK_URL;
  if (!webhook) {
    /* Not an error the visitor caused, and not something to hide from
       whoever is running the site. */
    console.warn(
      "[brief] BRIEF_WEBHOOK_URL is not set — submission not delivered:",
      submission.brand,
    );
    return NextResponse.json(
      { ok: false, error: "not_configured" },
      { status: 501 },
    );
  }

  try {
    /* Apps Script redirects to googleusercontent; follow it. A slow
       Sheet write must not hang the visitor's browser, hence the
       timeout — the WhatsApp hand-off carries on regardless. */
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...submission,
        token: process.env.BRIEF_WEBHOOK_TOKEN ?? "",
      }),
      redirect: "follow",
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      console.error("[brief] webhook responded", res.status);
      return NextResponse.json(
        { ok: false, error: "webhook_failed" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[brief] webhook error", err);
    return NextResponse.json(
      { ok: false, error: "webhook_unreachable" },
      { status: 502 },
    );
  }
}
