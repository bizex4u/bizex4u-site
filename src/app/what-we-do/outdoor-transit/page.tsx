import type { Metadata } from "next";
import Stub from "@/components/Stub";

export const metadata: Metadata = { title: "Outdoor & Transit." };

export default function Page() {
  return (
    <Stub
      eyebrow="What We Do — Outdoor \& Transit"
      title="Outdoor & Transit."
      lede="Large-format and transit media planned around how a city actually moves."
      outline={["What large-format outdoor is good for","Format categories","How we plan a corridor","Cities where this runs"]}
    />
  );
}
