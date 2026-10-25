import type { Metadata, ResolvingMetadata } from "next";
import CapabilityPage from "@/components/CapabilityPage";
import { routeMetadata } from "@/lib/metadata";

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return routeMetadata(parent, {
    path: "/what-we-do/outdoor-transit",
    title: "Outdoor & Transit Ads in India",
    description:
      "Outdoor and transit advertising in India: hoardings, unipoles, metro and buses, compared across owners and photographed when live.",
  });
}

export default function Page() {
  return <CapabilityPage slug="outdoor-transit" />;
}
