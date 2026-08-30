import { Eyebrow } from "@/components/UI";

/**
 * How a plan is assembled, drawn.
 *
 * /what-we-do used to state the four-step order only as a list further
 * down the page, under a hero that was entirely type. The order is the
 * argument — start at the objective, not at the commercial model — and
 * a list the reader has not reached yet cannot carry it. This is that
 * order as a compact ladder, in the same register as GstFlow: HTML,
 * reflowable, readable as a list.
 */

const defaultSteps = [
  { index: "01", title: "The objective" },
  { index: "02", title: "The market" },
  { index: "03", title: "The mix" },
  { index: "04", title: "The commercial model" },
];

export default function PlanAssembly({
  steps = defaultSteps,
}: {
  steps?: { index?: string; title: string }[];
}) {
  return (
    <figure data-visual="plan-assembly" className="m-0">
      <Eyebrow muted>How a plan is assembled</Eyebrow>
      <ol className="mt-5 border-t border-rule-sand">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="flex items-baseline gap-4 border-b border-rule-sand py-3.5"
          >
            <span className="font-mono text-micro tracking-[0.08em] text-violet-deep">
              {step.index ?? String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-h3">{step.title}</span>
          </li>
        ))}
      </ol>
      <figcaption className="mt-5 max-w-[34ch] text-body-s text-on-sand-dim">
        In that order, every time. Starting at step four is how a budget
        gets spent before a plan exists.
      </figcaption>
    </figure>
  );
}
