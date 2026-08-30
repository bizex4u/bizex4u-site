import type { Metadata } from "next";
import CapabilityPage from "@/components/CapabilityPage";

export const metadata: Metadata = {
  title: "Digital Out-of-Home (DOOH) Advertising in India",
  description:
    "LED screens and digital billboards bought by daypart and location, with loop composition confirmed in writing and play-out logs reconciled against the booking.",
  alternates: { canonical: "/what-we-do/dooh" },
};

export default function Page() {
  return <CapabilityPage slug="dooh" plate="dooh" />;
}
