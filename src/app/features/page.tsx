import type { Metadata } from "next";
import FeaturesHero from "@/components/features/FeaturesHero";
import AlternatingFeatureRows from "@/components/features/AlternatingFeatureRows";
import ComparisonTable from "@/components/features/ComparisonTable";
import RoleBasedWorkflow from "@/components/features/RoleBasedWorkflow";
import SecurityBanner from "@/components/features/SecurityBanner";
import HomeCta from "@/components/home/HomeCta";

export const metadata: Metadata = {
  title: "Manufacturing Features & Modules | KanchanFlow CRM",
  description:
    "Explore the 6 core modules of KanchanFlow: Quote-to-order cycle time engine, multi-level BOMs, capacity-synced sales pipeline, WhatsApp dispatch proof, and operator mobile app.",
  openGraph: {
    title: "KanchanFlow Features | Built from the Shop Floor Up",
    description:
      "Deep dive into quotation cycle calculation, dynamic scrap factor formulas, indented BOM hierarchy, and comparison with legacy ERPs.",
    url: "https://kanchanflow.com/features",
    siteName: "KanchanFlow",
  },
};

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <AlternatingFeatureRows />
      <ComparisonTable />
      <RoleBasedWorkflow />
      <SecurityBanner />
      <HomeCta />
    </>
  );
}
