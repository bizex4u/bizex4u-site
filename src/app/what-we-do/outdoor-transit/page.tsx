import type { Metadata, ResolvingMetadata } from "next";
import CapabilityPage from "@/components/CapabilityPage";
import { routeMetadata } from "@/lib/metadata";

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return routeMetadata(parent, {
    path: "/what-we-do/outdoor-transit",
    title: "Outdoor & Transit Advertising in India",
    description:
      "Hoardings, unipoles, bus and cab media planned around how a city actually moves — corridor reasoning before any site list, with geo-tagged proof of placement.",
  });
}

export default function Page() {
  return <CapabilityPage slug="outdoor-transit" />;
}
