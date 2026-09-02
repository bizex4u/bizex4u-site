import type { Metadata, ResolvingMetadata } from "next";
import CapabilityPage from "@/components/CapabilityPage";
import { routeMetadata } from "@/lib/metadata";

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return routeMetadata(parent, {
    path: "/what-we-do/dooh",
    title: "Digital Out-of-Home (DOOH) Advertising in India",
    description:
      "LED screens and digital billboards bought by daypart and location, with loop composition confirmed in writing and play-out logs reconciled against the booking.",
  });
}

export default function Page() {
  return <CapabilityPage slug="dooh" />;
}
