import type { Metadata } from "next";
import Stub from "@/components/Stub";

export const metadata: Metadata = { title: "Seventeen years. Still independent." };

export default function Page() {
  return (
    <Stub
      eyebrow="About"
      title="Seventeen years. Still independent."
      lede="How the network operates, and what independence changes about a media buy."
      outline={["How we operate","What independence changes","Leadership","The numbers"]}
    />
  );
}
