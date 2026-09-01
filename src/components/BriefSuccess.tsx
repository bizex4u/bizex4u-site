import { site } from "@/lib/site";
import { Eyebrow, btnClass } from "@/components/UI";

/**
 * After a brief is posted to /api/brief. Mailto is a fallback, not
 * the system of record — enterprise laptops often block it.
 */
export default function BriefSuccess({
  recorded,
  tone = "sand",
}: {
  recorded: boolean;
  tone?: "sand" | "plum";
}) {
  const plum = tone === "plum";
  const dim = plum ? "text-on-plum-dim" : "text-on-sand-dim";

  return (
    <div role="status">
      <Eyebrow tone={plum ? "plum" : "sand"}>
        {recorded ? "Received" : "Send it yourself"}
      </Eyebrow>
      <h2 className="mt-3 font-display text-h2 text-balance">
        {recorded ? "We have the brief." : "If that did not send, write to us."}
      </h2>
      <p className={`mt-4 max-w-[44ch] text-body-s ${dim}`}>
        {site.sla.acknowledge} {site.sla.plan} Replies come from{" "}
        <a
          href={`mailto:${site.email}`}
          className="link-underline"
        >
          {site.email}
        </a>
        .
      </p>
      {!recorded ? (
        <div className="mt-7">
          <a
            href={`mailto:${site.email}`}
            className={btnClass(plum ? "sand" : "outline-plum", "md")}
          >
            {site.email}
            <span className="row-arrow">→</span>
          </a>
        </div>
      ) : null}
    </div>
  );
}
