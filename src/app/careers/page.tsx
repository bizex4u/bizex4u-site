import type { Metadata } from "next";
import Stub from "@/components/Stub";

export const metadata: Metadata = { title: "Work here." };

export default function Page() {
  return (
    <Stub
      eyebrow="Careers"
      title="Work here."
      lede="Planning, buying and client roles across the network."
      outline={["What working here is like","Open roles","Speculative applications"]}
    />
  );
}
