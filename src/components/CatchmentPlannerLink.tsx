"use client";

import { useEffect, useId, useRef, useState, type RefObject } from "react";
import { btnClass, type BtnVariant } from "@/components/UI";

/** Atlas is a separate app. Link out; do not embed it. */
export const CATCHMENT_PLANNER_HREF = "https://atlas.bizex4u.com";

export const CATCHMENT_PLANNER_NOTE =
  "Opens our planning tool. The first load can take up to a minute while it wakes up.";

const LABEL = "Catchment Planner";
const OPENING_LABEL = "Opening…";

/**
 * ExternalNavGuard stops click propagation on external anchors, so a
 * React onClick on this link never runs. A document capture listener
 * still sees the click (stopPropagation does not skip other listeners
 * on document) and can swap the label while the browser opens the tab.
 */
function useOpeningLabel(ref: RefObject<HTMLAnchorElement | null>) {
  const [opening, setOpening] = useState(false);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = ref.current;
      const target = event.target;
      if (!anchor || !(target instanceof Node) || !anchor.contains(target)) {
        return;
      }
      setOpening(true);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [ref]);

  return opening ? OPENING_LABEL : LABEL;
}

export default function CatchmentPlannerLink({
  presentation = "button",
  variant = "outline-plum",
  size = "lg",
  className = "",
  noteClassName = "",
  location = "catchment-planner",
  noteId,
}: {
  presentation?: "button" | "nav" | "nav-mobile";
  variant?: BtnVariant;
  size?: "md" | "lg";
  className?: string;
  noteClassName?: string;
  location?: string;
  /** Visible note rendered by the caller. Used by the desktop nav strip. */
  noteId?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const label = useOpeningLabel(ref);
  const ownNoteId = useId();
  const describedBy = noteId ?? ownNoteId;

  const anchorProps = {
    ref,
    href: CATCHMENT_PLANNER_HREF,
    target: "_blank" as const,
    rel: "noopener" as const,
    "aria-describedby": describedBy,
    "data-cta": "1",
    "data-cta-location": location,
    "data-cta-label": LABEL,
    "data-cta-variant": "default",
  };

  if (presentation === "nav") {
    return (
      <a
        {...anchorProps}
        className={`px-3 py-2 text-body-s text-on-sand transition-colors duration-200 hover:text-violet-deep ${className}`}
      >
        {label}
      </a>
    );
  }

  if (presentation === "nav-mobile") {
    return (
      <div className="border-b border-rule-sand py-4">
        <a {...anchorProps} className="block text-h3">
          {label}
        </a>
        <p
          id={ownNoteId}
          className="mt-2 max-w-[36ch] text-body-s text-on-sand-dim"
        >
          {CATCHMENT_PLANNER_NOTE}
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <a {...anchorProps} className={btnClass(variant, size)}>
        {label}
        <span className="row-arrow" aria-hidden="true">
          →
        </span>
      </a>
      <p
        id={ownNoteId}
        className={`mt-2 max-w-[40ch] text-body-s leading-snug ${noteClassName}`}
      >
        {CATCHMENT_PLANNER_NOTE}
      </p>
    </div>
  );
}
