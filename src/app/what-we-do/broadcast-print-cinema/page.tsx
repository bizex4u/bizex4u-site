import type { Metadata, ResolvingMetadata } from "next";
import CapabilityPage from "@/components/CapabilityPage";
import { routeMetadata } from "@/lib/metadata";

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return routeMetadata(parent, {
    path: "/what-we-do/broadcast-print-cinema",
    title: "Broadcast, Print & Cinema Advertising in India",
    description:
      "Regional news television, radio drive-time, the dailies people actually read and cinema on-screen — planned market by market, not on a national average.",
  });
}

export default function Page() {
  return <CapabilityPage slug="broadcast-print-cinema" />;
}
