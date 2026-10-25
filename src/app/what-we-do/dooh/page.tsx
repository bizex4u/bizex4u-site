import type { Metadata, ResolvingMetadata } from "next";
import CapabilityPage from "@/components/CapabilityPage";
import { routeMetadata } from "@/lib/metadata";

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return routeMetadata(parent, {
    path: "/what-we-do/dooh",
    title: "DOOH Advertising in India — LED by Daypart",
    description:
      "DOOH advertising in India: LED screens planned by daypart and location, with the loop confirmed in writing before you book.",
  });
}

export default function Page() {
  return <CapabilityPage slug="dooh" />;
}
