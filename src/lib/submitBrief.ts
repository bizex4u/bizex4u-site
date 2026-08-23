/**
 * Client-side delivery for both forms.
 *
 * Deliberately never throws and never blocks the WhatsApp hand-off.
 * If the Sheet write fails — endpoint unconfigured, network down,
 * Apps Script quota — the visitor should still reach a human. Losing
 * the row is bad; losing the lead is worse.
 *
 * Returns whether the row was recorded so the UI can be honest about
 * it rather than claiming a delivery that did not happen.
 */

export type BriefFields = {
  brand: string;
  person: string;
  role?: string;
  market?: string;
  context?: string;
  detail?: string;
  /* Barter selector */
  holding?: string;
  value?: string;
  markets?: string;
  source?: "brief" | "barter";
  /* Honeypot — always empty for a human. */
  company_website?: string;
};

export async function submitBrief(fields: BriefFields): Promise<boolean> {
  try {
    const res = await fetch("/api/brief", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...fields,
        page: typeof window !== "undefined" ? window.location.pathname : "",
      }),
      signal: AbortSignal.timeout(9000),
    });
    return res.ok;
  } catch {
    return false;
  }
}
