import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ProblemSolutionSection from "@/components/home/ProblemSolutionSection";
import FeatureGrid from "@/components/home/FeatureGrid";
import IndustriesStrip from "@/components/home/IndustriesStrip";
import RoiCalculator from "@/components/home/RoiCalculator";
import PricingTeaser from "@/components/home/PricingTeaser";
import FaqSection from "@/components/home/FaqSection";
import HomeCta from "@/components/home/HomeCta";

export const metadata: Metadata = {
  title: "KanchanFlow | Manufacturing CRM & Shop-Floor Sales Pipeline",
  description:
    "Accelerate quote-to-order, synchronize multi-level BOMs, track machine hourly rates, and automate WhatsApp dispatch proof for precision machine shops and fabricators.",
  openGraph: {
    title: "KanchanFlow | Manufacturing CRM & Shop-Floor Sales Pipeline",
    description:
      "Turn shop-floor chaos into predictable gross margins. Built specifically for machine shops, fabricators, and OEM suppliers.",
    url: "https://kanchanflow.com",
    siteName: "KanchanFlow",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <FeatureGrid />
      <IndustriesStrip />
      <RoiCalculator />
      <PricingTeaser />
      <FaqSection />
      <HomeCta />
    </>
  );
}
