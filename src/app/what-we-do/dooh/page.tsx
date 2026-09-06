import type { Metadata, ResolvingMetadata } from "next";
import CapabilityPage from "@/components/CapabilityPage";
import { routeMetadata } from "@/lib/metadata";

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return routeMetadata(parent, {
    path: "/what-we-do/dooh",
    title: "DOOH Advertising in India — LED Screens by Daypart, 39 Markets",
    description:
      "Digital out-of-home planned by daypart and location across 39 Indian markets — loop composition confirmed in writing, play-out logs reconciled against the booking, first plan in five working days.",
  });
}

export default function Page() {
  return <CapabilityPage slug="dooh" />;
}
