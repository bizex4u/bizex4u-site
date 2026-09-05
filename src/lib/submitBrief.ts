import { track } from "@/lib/analytics";

/**
 * Client-side delivery for every form.
 *
 * Posts JSON to Web3Forms. The UI must not claim success unless the
 * response is ok and json.success === true.
 */

export type BriefFields = {
  brand: string;
  person: string;
  email: string;
  phone: string;
  role?: string;
  market?: string;
  context?: string;
  detail?: string;
  holding?: string;
  value?: string;
  markets?: string;
  source?: "brief" | "barter" | "contact";
  company_website?: string;
  /* Where the form sits or was opened from — the same identifier the
     surface already uses for its brief_open tracking. Carried into the
     GA4 generate_lead event as form_location. */
  location?: string;
};

export type BriefResult =
  | { ok: true }
  | { ok: false; error: string };

const ERROR_COPY: Record<string, string> = {
  not_configured:
    "The brief could not be recorded. Write to us and we will pick it up.",
  delivery_failed:
    "The brief did not reach the desk. Write to us and we will pick it up.",
  email_required: "Enter a working email.",
  phone_required: "Enter a working phone number.",
  brand_and_name_required: "Company name and your name are required.",
};

export function briefErrorCopy(error: string): string {
  return ERROR_COPY[error] ?? "The brief did not send. Try again, or write to us.";
}

function messageFrom(fields: BriefFields): string {
  const page =
    typeof window !== "undefined" ? window.location.pathname : "";
  return [
    fields.detail,
    fields.market && `Market: ${fields.market}`,
    fields.context && `About: ${fields.context}`,
    fields.holding && `Holding: ${fields.holding}`,
    fields.value && `Rough value: ${fields.value}`,
    fields.markets && `Markets: ${fields.markets}`,
    fields.source && `Source: ${fields.source}`,
    page && `Page: ${page}`,
  ]
    .filter(Boolean)
    .join("\n");
}

export async function submitBrief(fields: BriefFields): Promise<BriefResult> {
  if (fields.company_website?.trim()) {
    return { ok: true };
  }

  const access_key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  if (!access_key) {
    track("brief_result", { ok: false, status: 0 });
    return { ok: false, error: "not_configured" };
  }

  const name = fields.person.trim();
  const company = fields.brand.trim();

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key,
        name,
        company,
        email: fields.email.trim(),
        phone: fields.phone.trim(),
        message: messageFrom(fields),
        subject: `New Bizex4U lead: ${name} from ${company}`,
        from_name: "Bizex4U Website",
      }),
      signal: AbortSignal.timeout(16000),
    });
    const json = (await res.json().catch(() => ({}))) as {
      success?: boolean;
    };
    const ok = res.ok && json.success === true;
    track("brief_result", { ok, status: res.status });
    if (ok) {
      /* GA4 conversion, fired once for every surface that submits a
         brief — here at the single point where success is confirmed,
         never on open, validation failure or a failed response. The
         honeypot early-return above deliberately does not reach this:
         a bot's fake success is not a lead. Optional chaining because
         gtag may be blocked or unloaded; that must stay a silent no-op. */
      if (typeof window !== "undefined") {
        (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.(
          "event",
          "generate_lead",
          fields.location ? { form_location: fields.location } : {},
        );
      }
      return { ok: true };
    }
    return { ok: false, error: "delivery_failed" };
  } catch {
    track("brief_result", { ok: false, status: 0 });
    return { ok: false, error: "delivery_failed" };
  }
}
