import type { Metadata } from "next";
import PricingHero from "@/components/pricing/PricingHero";
import PricingCards from "@/components/pricing/PricingCards";
import PricingFaq from "@/components/pricing/PricingFaq";
import HomeCta from "@/components/home/HomeCta";

export const metadata: Metadata = {
  title: "Pricing & Plans | KanchanFlow Manufacturing CRM",
  description:
    "Transparent pricing for machine shops and fabrication plants. Workshop Starter, Precision Plant, and Industrial Enterprise plans with zero per-operator fees.",
  openGraph: {
    title: "KanchanFlow Pricing | Transparent Manufacturing Plans",
    description:
      "Save 20% on annual billing. Includes automated Excel migration, Tally connector, multi-level BOMs, and 14-day sandboxed trial.",
    url: "https://kanchanflow.com/pricing",
    siteName: "KanchanFlow",
  },
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <PricingFaq />
      <HomeCta />
    </>
  );
}
