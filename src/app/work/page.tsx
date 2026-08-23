import type { Metadata } from "next";
import Stub from "@/components/Stub";

export const metadata: Metadata = { title: "Work." };

export default function Page() {
  return (
    <Stub
      eyebrow="Work"
      title="Work."
      lede="Campaigns across outdoor, retail, broadcast and barter. Documentation available on request, subject to client permission."
      outline={["Case study index, filterable by capability and city","Individual case studies","Client permissions and what we can publish"]}
    />
  );
}
