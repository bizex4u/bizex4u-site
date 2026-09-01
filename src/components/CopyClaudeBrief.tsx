"use client";

import { useRef, useState } from "react";
import { btnClass } from "@/components/UI";

export default function CopyClaudeBrief({ text }: { text: string }) {
  const pre = useRef<HTMLPreElement>(null);
  const [state, setState] = useState<"idle" | "copied" | "select">("idle");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setState("copied");
      window.setTimeout(() => setState("idle"), 2400);
    } catch {
      const node = pre.current;
      if (node) {
        const range = document.createRange();
        range.selectNodeContents(node);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
      setState("select");
    }
  };

  const download = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "bizex4u-claude-brief.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          className={btnClass("violet", "lg")}
          onClick={copy}
        >
          {state === "copied"
            ? "Copied — paste it into Claude"
            : state === "select"
              ? "Selected — copy it yourself"
              : "Copy briefing"}
        </button>
        <button
          type="button"
          className={btnClass("outline-plum", "lg")}
          onClick={download}
        >
          Download as a file
        </button>
      </div>
      <pre
        ref={pre}
        tabIndex={0}
        className="mt-10 max-h-[32rem] overflow-auto rounded-(--radius-card) bg-sand-2 p-6 font-mono text-body-s whitespace-pre-wrap text-on-sand"
      >
        {text}
      </pre>
    </div>
  );
}
