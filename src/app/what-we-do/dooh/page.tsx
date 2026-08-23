import type { Metadata } from "next";
import Stub from "@/components/Stub";

export const metadata: Metadata = { title: "Digital Out-of-Home." };

export default function Page() {
  return (
    <Stub
      eyebrow="What We Do — Digital Out-of-Home"
      title="Digital Out-of-Home."
      lede="Screens bought by daypart and location rather than by month."
      outline={["Where digital screens beat static","Format categories","Daypart planning","Cities where this runs"]}
    />
  );
}
