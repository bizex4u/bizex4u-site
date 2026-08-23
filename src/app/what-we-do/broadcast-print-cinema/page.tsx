import type { Metadata } from "next";
import Stub from "@/components/Stub";

export const metadata: Metadata = { title: "Broadcast, Print & Cinema." };

export default function Page() {
  return (
    <Stub
      eyebrow="What We Do — Broadcast, Print \& Cinema"
      title="Broadcast, Print & Cinema."
      lede="Traditional weight where it still carries a market."
      outline={["Where broadcast still works","Format categories","Regional language planning","Markets covered"]}
    />
  );
}
