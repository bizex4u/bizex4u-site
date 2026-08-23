import type { Metadata } from "next";
import Stub from "@/components/Stub";

export const metadata: Metadata = { title: "Atlas." };

export default function Page() {
  return (
    <Stub
      eyebrow="Intelligence"
      title="Atlas."
      lede="The in-house intelligence layer behind every campaign this network plans."
      outline={["Brand Intelligence","Spatial Intelligence","Market Intelligence","Media Intelligence","How Atlas shapes a media plan"]}
    />
  );
}
