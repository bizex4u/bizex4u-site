import type { Metadata, ResolvingMetadata } from "next";
import CapabilityPage from "@/components/CapabilityPage";
import { routeMetadata } from "@/lib/metadata";

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return routeMetadata(parent, {
    path: "/what-we-do/broadcast-print-cinema",
    title: "Cinema, Print & Radio Advertising in India",
    description:
      "Cinema, print and radio advertising in India, bought market by market. Every station and masthead is checked before the plan is booked.",
  });
}

export default function Page() {
  return <CapabilityPage slug="broadcast-print-cinema" />;
}
