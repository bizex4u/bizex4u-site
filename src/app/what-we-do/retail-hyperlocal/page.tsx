import type { Metadata } from "next";
import Stub from "@/components/Stub";

export const metadata: Metadata = { title: "Retail & Hyperlocal." };

export default function Page() {
  return (
    <Stub
      eyebrow="What We Do — Retail \& Hyperlocal"
      title="Retail & Hyperlocal."
      lede="Media placed inside the trade area of a specific store or cluster."
      outline={["Catchment-led planning","Format categories","Working from a store list","Cities where this runs"]}
    />
  );
}
