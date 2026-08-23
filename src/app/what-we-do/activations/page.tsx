import type { Metadata } from "next";
import Stub from "@/components/Stub";

export const metadata: Metadata = { title: "Activations & Corporate Gifting." };

export default function Page() {
  return (
    <Stub
      eyebrow="What We Do — Activations"
      title="Activations & Corporate Gifting."
      lede="Physical presence, and the channel programmes that keep distribution engaged."
      outline={["Activation formats","Corporate gifting and channel engagement","How this pairs with media","Markets covered"]}
    />
  );
}
