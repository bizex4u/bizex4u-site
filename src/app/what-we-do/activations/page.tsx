import type { Metadata, ResolvingMetadata } from "next";
import CapabilityPage from "@/components/CapabilityPage";
import { routeMetadata } from "@/lib/metadata";

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return routeMetadata(parent, {
    path: "/what-we-do/activations",
    title: "Brand Activations & Corporate Gifting in India",
    description:
      "Ground presence in the places a brand needs to be seen, and the corporate and distributor gifting programmes that keep the trade engaged.",
  });
}

export default function Page() {
  return <CapabilityPage slug="activations" />;
}
