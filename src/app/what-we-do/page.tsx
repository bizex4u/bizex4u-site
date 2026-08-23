import type { Metadata } from "next";
import Stub from "@/components/Stub";

export const metadata: Metadata = { title: "What we do." };

export default function Page() {
  return (
    <Stub
      eyebrow="What We Do"
      title="What we do."
      lede="Six capabilities, one network. Outdoor and transit, digital out-of-home, retail and hyperlocal, broadcast, activations, and the barter model that funds them."
      outline={["The capability index","Each capability in detail","How the six work together on one plan"]}
    />
  );
}
