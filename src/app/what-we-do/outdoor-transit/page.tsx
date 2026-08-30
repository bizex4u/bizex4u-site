import type { Metadata } from "next";
import CapabilityPage from "@/components/CapabilityPage";

export const metadata: Metadata = {
  title: "Outdoor & Transit Advertising in India",
  description:
    "Hoardings, unipoles, bus and cab media planned around how a city actually moves — corridor reasoning before any site list, with geo-tagged proof of placement.",
  alternates: { canonical: "/what-we-do/outdoor-transit" },
};

export default function Page() {
  return <CapabilityPage slug="outdoor-transit" plate="outdoor" />;
}
