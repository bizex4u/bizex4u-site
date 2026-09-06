import type { Metadata, ResolvingMetadata } from "next";
import CapabilityPage from "@/components/CapabilityPage";
import { routeMetadata } from "@/lib/metadata";

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return routeMetadata(parent, {
    path: "/what-we-do/broadcast-print-cinema",
    title: "Cinema, Print & Radio Advertising in India — Planned by Market",
    description:
      "Cinema on-screen, regional dailies, radio drive-time and news TV bought market by market across 39 Indian cities — every station and masthead verified, first plan in five working days.",
  });
}

export default function Page() {
  return <CapabilityPage slug="broadcast-print-cinema" />;
}
