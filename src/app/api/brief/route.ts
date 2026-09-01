import { NextResponse } from "next/server";
import { site } from "@/lib/site";

/**
 * POST /api/brief
 *
 * Where every form on the site delivers. Two independent paths, either
 * of which is enough:
 *   1. Google Apps Script webhook → Sheet row + notification mail
 *   2. Resend → mail to the planning desk, reply-to the sender
 *
 * Configure BRIEF_WEBHOOK_URL and/or RESEND_API_KEY. With neither set
 * the route answers 501 — the UI must not claim success.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = Record<string, string>;

const MAX_FIELD = 2000;
const NOTIFY_TO = [...site.notifyEmails];

function clean(v: unknown): string {
  return typeof v === "string" ? v.trim().slice(0, MAX_FIELD) : "";
}

function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function isPhone(v: string): boolean {
  return v.replace(/\D/g, "").length >= 8;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function leadSubject(submission: Payload): string {
  if (submission.source === "barter") return "BIZEX4U New Lead - Barter";
  if (submission.source === "contact") return "BIZEX4U New Lead - Contact";
  if (submission.market) return `BIZEX4U New Lead - ${submission.market}`;
  return "BIZEX4U New Lead - Request a Plan";
}

function fieldRows(submission: Payload): [string, string][] {
  return (
    [
      ["Form / source", submission.source],
      ["Company", submission.brand],
      ["Name", submission.person],
      ["Email", submission.email],
      ["Phone", submission.phone],
      ["Role", submission.role],
      ["City / market", submission.market],
      ["Enquiry about", submission.context],
      ["Holding", submission.holding],
      ["Rough value", submission.value],
      ["Markets", submission.markets],
      ["Page", submission.page],
      ["Submitted", submission.receivedAt],
    ] as [string, string][]
  ).filter(([, v]) => Boolean(v));
}

async function postWebhook(submission: Payload): Promise<boolean> {
  const webhook = process.env.BRIEF_WEBHOOK_URL;
  if (!webhook) return false;

  /* Apps Script returns 302 to a googleusercontent echo URL. Following
     that is correct — the echo body is doPost's JSON. A follow that
     lands on doGet ({ service: "bizex4u-brief-intake" }) means the POST
     was dropped; treat that as failure, not success. */
  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...submission,
      token: process.env.BRIEF_WEBHOOK_TOKEN ?? "",
      notify: NOTIFY_TO,
    }),
    redirect: "follow",
    signal: AbortSignal.timeout(15000),
  });

  const text = await res.text();
  try {
    const json = JSON.parse(text) as { ok?: boolean; service?: string };
    if (json.service === "bizex4u-brief-intake") {
      console.error("[brief] webhook followed into doGet — POST was lost");
      return false;
    }
    if (json.ok === true) return true;
    console.error("[brief] webhook body", text.slice(0, 200));
    return false;
  } catch {
    if (!res.ok) {
      console.error("[brief] webhook responded", res.status, text.slice(0, 200));
      return false;
    }
    return true;
  }
}

async function sendResend(submission: Payload): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  if (!key || !from) return false;

  const rows = fieldRows(submission);
  const text = [
    ...rows.map(([k, v]) => `${k}: ${v}`),
    submission.detail ? `\nMessage:\n${submission.detail}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const html =
    `<div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;font-size:15px;color:#1b1030">` +
    `<p style="margin:0 0 16px">New lead from the Bizex4U website.</p>` +
    `<table cellpadding="0" cellspacing="0" style="border-collapse:collapse">` +
    rows
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 18px 6px 0;color:#4a3f5e;white-space:nowrap;vertical-align:top">${escapeHtml(k)}</td>` +
          `<td style="padding:6px 0"><strong>${escapeHtml(v)}</strong></td></tr>`,
      )
      .join("") +
    `</table>` +
    (submission.detail
      ? `<p style="margin:20px 0 6px;color:#4a3f5e">Message</p>` +
        `<p style="margin:0;white-space:pre-wrap">${escapeHtml(submission.detail)}</p>`
      : "") +
    `</div>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: NOTIFY_TO,
      ...(submission.email ? { reply_to: [submission.email] } : {}),
      subject: leadSubject(submission),
      text,
      html,
    }),
    signal: AbortSignal.timeout(8000),
  });

  if (!res.ok) {
    console.error("[brief] resend responded", res.status, await res.text());
    return false;
  }
  return true;
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  if (clean(body.company_website)) {
    return NextResponse.json({ ok: true, skipped: true });
  }

  const brand = clean(body.brand);
  const person = clean(body.person);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const source = clean(body.source) || "brief";

  if (!brand || !person) {
    return NextResponse.json(
      { ok: false, error: "brand_and_name_required" },
      { status: 422 },
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "email_required" },
      { status: 422 },
    );
  }

  if (!isPhone(phone)) {
    return NextResponse.json(
      { ok: false, error: "phone_required" },
      { status: 422 },
    );
  }

  const submission = {
    receivedAt: new Date().toISOString(),
    brand,
    person,
    email,
    phone,
    role: clean(body.role),
    market: clean(body.market),
    context: clean(body.context),
    detail: clean(body.detail),
    holding: clean(body.holding),
    value: clean(body.value),
    markets: clean(body.markets),
    source,
    page: clean(body.page),
  };

  const webhookConfigured = Boolean(process.env.BRIEF_WEBHOOK_URL);
  const resendConfigured = Boolean(
    process.env.RESEND_API_KEY && process.env.RESEND_FROM,
  );

  if (!webhookConfigured && !resendConfigured) {
    console.warn(
      "[brief] no BRIEF_WEBHOOK_URL or RESEND_API_KEY — not delivered:",
      submission.brand,
    );
    return NextResponse.json(
      { ok: false, error: "not_configured" },
      { status: 501 },
    );
  }

  const [sheet, mail] = await Promise.allSettled([
    webhookConfigured ? postWebhook(submission) : Promise.resolve(false),
    resendConfigured ? sendResend(submission) : Promise.resolve(false),
  ]);

  const sheetOk = sheet.status === "fulfilled" && sheet.value;
  const mailOk = mail.status === "fulfilled" && mail.value;

  if (sheet.status === "rejected") {
    console.error("[brief] webhook error", sheet.reason);
  }
  if (mail.status === "rejected") {
    console.error("[brief] resend error", mail.reason);
  }

  /* Webhook path already emails via Apps Script. Resend is a second
     path. Either succeeding is a recorded brief. */
  if (!sheetOk && !mailOk) {
    return NextResponse.json(
      { ok: false, error: "delivery_failed" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
