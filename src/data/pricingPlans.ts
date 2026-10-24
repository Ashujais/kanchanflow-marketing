export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  isPopular?: boolean;
  monthlyPrice: number;
  annualPrice: number; // per month when paid annually
  annualSavings: string;
  targetAudience: string;
  userLimit: string;
  machineLimit: string;
  features: string[];
  notIncluded?: string[];
  ctaLabel: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "workshop",
    name: "Workshop Starter",
    tagline: "Essential quoting & shop-floor pipeline for single-facility machine shops.",
    monthlyPrice: 14999,
    annualPrice: 11999,
    annualSavings: "Save ₹36,000 / year",
    targetAudience: "Job shops with 1 facility and up to 10 machines looking to ditch Excel.",
    userLimit: "Up to 10 active users",
    machineLimit: "Up to 12 CNC / manual machines",
    features: [
      "Standard Quote-to-Order engine with cycle time templates",
      "Shop-floor sales pipeline with visual Kanban boards",
      "Up to 150 customer quotation PDFs per month",
      "Single-level Bill of Materials (BOM) creation",
      "Automated customer revision tracking & drawing history",
      "WhatsApp dispatch alerts (up to 300 automated SMS/WhatsApp alerts/mo)",
      "Basic gross margin reports & customer export",
      "Standard email & phone onboarding support (5 business days)",
    ],
    notIncluded: [
      "Multi-level nested sub-assembly BOMs",
      "Two-way live Tally Prime / ERP connector",
      "Operator barcode mobile app scanner",
      "Custom machine hourly rate scrap indexing",
    ],
    ctaLabel: "Start 14-Day Workshop Trial",
  },
  {
    id: "precision-plant",
    name: "Precision Plant",
    tagline: "Complete manufacturing CRM & floor sync for high-growth precision plants.",
    badge: "MOST POPULAR",
    isPopular: true,
    monthlyPrice: 32999,
    annualPrice: 26399,
    annualSavings: "Save ₹79,200 / year",
    targetAudience: "Growing CNC, fabrication, and OEM supplier plants with 25-100 staff.",
    userLimit: "Up to 35 active users",
    machineLimit: "Up to 40 machines & workstations",
    features: [
      "Everything in Workshop Starter, plus:",
      "Full Multi-Level BOM hierarchy with live scrap factor indexing",
      "Unlimited quotation generations with custom company branding",
      "Live Raw Material Indexing (EN8, SS304, AL6061, Brass, Mild Steel)",
      "Shop-Floor Mobile App with camera barcode & QR traveler scanning",
      "Two-way automated WhatsApp Business integration (unlimited alerts)",
      "Real-time Gross Margin per machine hour & OEE dashboard",
      "Direct connector for Tally Prime (e-invoicing & ledger sync)",
      "Subcontract job work PO tracking (plating, heat treat, powder coat)",
      "Dedicated implementation engineer & 48-hour SLA response",
    ],
    notIncluded: [
      "Multi-plant consolidated headquarters dashboard",
      "Custom SAP / Oracle ERP webhook bidirectional sync",
    ],
    ctaLabel: "Deploy Precision Plant Plan",
  },
  {
    id: "industrial-enterprise",
    name: "Industrial Enterprise",
    tagline: "Custom architecture, multi-plant routing & dedicated SLA for Tier-1 suppliers.",
    badge: "MULTI-PLANT SCALE",
    monthlyPrice: 69999,
    annualPrice: 55999,
    annualSavings: "Save ₹1,68,000 / year",
    targetAudience: "Tier-1 automotive suppliers, multi-unit fabrication groups, and export plants.",
    userLimit: "Unlimited team & plant users",
    machineLimit: "Unlimited machines & subcontractor hubs",
    features: [
      "Everything in Precision Plant, plus:",
      "Multi-facility / Multi-plant unified sales pipeline routing",
      "Enterprise ERP integration (SAP ECC/S4HANA, Oracle Netsuite, Infor)",
      "Custom 3D CAD/STEP file web viewer with model measurements",
      "Offline Edge synchronization agent for secure air-gapped shop floors",
      "Custom ISO 9001, AS9100, and IATF 16949 audit trail compliance modules",
      "Role-based granular access control (Sales vs Estimator vs Operator vs Accounts)",
      "Dedicated Customer Success Manager with on-site quarterly plant review",
      "99.9% Uptime SLA and 2-hour priority emergency engineering hotline",
      "Custom contract terms, NDA, and dedicated private cloud deployment option",
    ],
    ctaLabel: "Contact Enterprise Sales",
  },
];

export const PRICING_FAQS = [
  {
    question: "Do our shop-floor machine operators need individual paid user accounts?",
    answer:
      "No. With KanchanFlow, floor operators log in through plant-floor station kiosks or the mobile app using their operator badge QR code without consuming a separate management license. You only pay for administrative, sales, engineering, and supervisory users.",
  },
  {
    question: "How long does it take to migrate our existing quotation history from Excel?",
    answer:
      "Most machine shops go live within 7 to 14 business days. Our onboarding engineering team imports your raw material price master, customer contacts, machine rate matrices, and standard part numbers using our automated CSV/Excel migration scripts at zero extra cost.",
  },
  {
    question: "How does KanchanFlow connect with our existing accounting software like Tally Prime?",
    answer:
      "KanchanFlow features a native Tally connector. Once a customer quotation is marked as 'Approved' and converted into a Sales Order, the customer ledger, part item codes, tax rates, and purchase orders automatically synchronize with Tally Prime without duplicate manual data entry.",
  },
  {
    question: "Can we test KanchanFlow with our own actual drawings and machine rates?",
    answer:
      "Yes! When you request a live walkthrough, our manufacturing specialists will configure a 14-day sandboxed pilot loaded with your shop's specific CNC or fabrication machines and test a real quotation from your current drawing pipeline.",
  },
  {
    question: "Is our proprietary CAD drawing and customer intellectual property secure?",
    answer:
      "Completely. All 2D PDF blueprints and 3D CAD files uploaded to KanchanFlow are encrypted at rest with AES-256 and in transit with TLS 1.3. Your engineering files are never shared, public, or processed by public models. Role-based permissions allow you to prevent floor operators from downloading proprietary files.",
  },
  {
    question: "What happens if we expand our plant and add more CNC machines later?",
    answer:
      "You can add additional machines and workstations to your account at any time with a single click. Upgrades are prorated immediately without interrupting active shop-floor work orders or quotes.",
  },
];
