import type { Metadata } from "next";
import CapabilityPage from "@/components/CapabilityPage";

export const metadata: Metadata = {
  title: "Broadcast, Print & Cinema Advertising in India",
  description: "Regional news television, radio drive-time, the dailies people actually read and cinema on-screen \u2014 planned market by market rather than on a national average.",
  alternates: { canonical: "/what-we-do/broadcast-print-cinema" },
};

export default function Page() {
  return <CapabilityPage slug="broadcast-print-cinema" plate="broadcast" />;
}
