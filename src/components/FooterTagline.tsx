"use client";

import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

/**
 * The footer's closing tagline. On the home page the hero headline is
 * already this exact sentence, so it is dropped there rather than said
 * twice. Every other page keeps it.
 */
export default function FooterTagline() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <p className="font-display text-h1 text-balance">{site.tagline}</p>
  );
}
