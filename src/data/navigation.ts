export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Industries", href: "/#industries" },
  { label: "Comparison", href: "/features#comparison", badge: "VS ERP" },
  { label: "ROI Estimator", href: "/#roi-calculator" },
  { label: "Pricing", href: "/pricing" },
];

export const FOOTER_SECTIONS = [
  {
    title: "Product Modules",
    links: [
      { label: "Quote-to-Order Engine", href: "/features#quote-engine" },
      { label: "Multi-Level BOM", href: "/features#bom" },
      { label: "Shop-Floor Pipeline", href: "/features#pipeline" },
      { label: "WhatsApp Dispatch Sync", href: "/features#whatsapp" },
      { label: "OEE & Gross Margin Analytics", href: "/features#reports" },
      { label: "Rugged Mobile App", href: "/features#mobile" },
    ],
  },
  {
    title: "Target Industries",
    links: [
      { label: "CNC Precision Machining", href: "/#industries" },
      { label: "Sheet Metal & Laser Cutting", href: "/#industries" },
      { label: "Plastic Injection Toolrooms", href: "/#industries" },
      { label: "Tier 2/3 Auto Ancillaries", href: "/#industries" },
      { label: "Heavy Industrial Equipment", href: "/#industries" },
      { label: "Electrical Switchgear & Panels", href: "/#industries" },
    ],
  },
  {
    title: "Pricing & ROI",
    links: [
      { label: "Workshop Starter Plan", href: "/pricing" },
      { label: "Precision Plant (Recommended)", href: "/pricing" },
      { label: "Industrial Enterprise", href: "/pricing" },
      { label: "Plant Payback Calculator", href: "/#roi-calculator" },
      { label: "Implementation Roadmap (14 Days)", href: "/features#roadmap" },
      { label: "Security & CAD IP Protection", href: "/features#security" },
    ],
  },
  {
    title: "Resources & Compliance",
    links: [
      { label: "Tally & ERP Integration Guide", href: "/features#integrations" },
      { label: "ISO 9001 Audit Trail System", href: "/features#security" },
      { label: "Machine Hourly Rate Matrix", href: "/features#quote-engine" },
      { label: "Customer Case Studies", href: "/#case-studies" },
      { label: "API & Webhook Documentation", href: "/features#api" },
      { label: "Schedule Engineering Walkthrough", href: "/pricing#demo" },
    ],
  },
];
