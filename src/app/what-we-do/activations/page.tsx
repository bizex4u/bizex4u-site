import type { Metadata } from "next";
import CapabilityPage from "@/components/CapabilityPage";

export const metadata: Metadata = {
  title: "Brand Activations & Corporate Gifting in India",
  description: "Ground presence in the places a brand needs to be seen, and the corporate and distributor gifting programmes that keep the trade engaged.",
  alternates: { canonical: "/what-we-do/activations" },
};

export default function Page() {
  return <CapabilityPage slug="activations" />;
}
