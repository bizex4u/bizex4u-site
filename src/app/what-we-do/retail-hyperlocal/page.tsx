import type { Metadata } from "next";
import CapabilityPage from "@/components/CapabilityPage";

export const metadata: Metadata = {
  title: "Retail & Hyperlocal Advertising in India",
  description:
    "Mall, multiplex, society lift and store-catchment media planned from catchment behaviour, so weight lands on people who can actually reach the outlet.",
  alternates: { canonical: "/what-we-do/retail-hyperlocal" },
};

export default function Page() {
  return <CapabilityPage slug="retail-hyperlocal" />;
}
