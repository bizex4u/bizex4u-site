import type { Metadata, ResolvingMetadata } from "next";
import CapabilityPage from "@/components/CapabilityPage";
import { routeMetadata } from "@/lib/metadata";

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return routeMetadata(parent, {
    path: "/what-we-do/outdoor-transit",
    title: "Outdoor Advertising in India — Hoardings & Transit, 39 Markets",
    description:
      "Hoardings, unipoles, metro and bus media planned across 39 Indian markets by an independent buyer. Negotiated rates disclosed to you, geo-tagged photo proof, first plan in five working days.",
  });
}

export default function Page() {
  return <CapabilityPage slug="outdoor-transit" />;
}
