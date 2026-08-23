import type { Metadata } from "next";
import Stub from "@/components/Stub";

export const metadata: Metadata = { title: "Perspectives." };

export default function Page() {
  return (
    <Stub
      eyebrow="Perspectives"
      title="Perspectives."
      lede="Notes on planning, catchment, and the commercial mechanics of Indian media."
      outline={["Article index","Individual articles"]}
    />
  );
}
