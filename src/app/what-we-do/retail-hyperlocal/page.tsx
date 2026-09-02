import type { Metadata, ResolvingMetadata } from "next";
import CapabilityPage from "@/components/CapabilityPage";
import { routeMetadata } from "@/lib/metadata";

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return routeMetadata(parent, {
    path: "/what-we-do/retail-hyperlocal",
    title: "Retail & Hyperlocal Advertising in India",
    description:
      "Mall, multiplex, society lift and store-catchment media planned from catchment behaviour, so weight lands on people who can actually reach the outlet.",
  });
}

export default function Page() {
  return <CapabilityPage slug="retail-hyperlocal" />;
}
