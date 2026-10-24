export interface FeatureItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  iconName: string;
  metrics: {
    label: string;
    value: string;
  };
  highlights: string[];
  mockupDetails: {
    category: string;
    subLabel: string;
    activeCode: string;
    tags: string[];
  };
}

export const CORE_FEATURES: FeatureItem[] = [
  {
    id: "quote-engine",
    title: "Quote-to-Order Engine",
    tagline: "Turn technical 2D/3D customer RFQs into high-margin quotations in 18 minutes.",
    description:
      "Eliminate spreadsheet guesswork. Compute exact machining cycle times, raw material gross weight, scrap credit, and machine hourly rates. Output client-ready PDF quotes with automated revision tracking.",
    badge: "ESTIMATION SPEED",
    iconName: "FileSpreadsheet",
    metrics: {
      label: "Average Quote Speedup",
      value: "6.8x Faster",
    },
    highlights: [
      "Dynamic cycle-time estimator for turning, 3-axis/5-axis milling, and laser cutting",
      "Live raw material price indexing (EN8, SS304, AL6061, Brass, Mild Steel)",
      "Automated swarf & scrap recovery rebate formulas with margin guardrails",
      "One-click PDF generation with payment terms and customer revision lock",
    ],
    mockupDetails: {
      category: "Cost Breakdown Matrix",
      subLabel: "Part: SS316 Hex Adapter · Batch: 1,200 pcs",
      activeCode: "RM: ₹182.40 | Machine: ₹94.00 | Plating: ₹28.00 | Margin: 24.5%",
      tags: ["ISO 9001 Rev B", "Auto-Calculated Cycle: 162s", "Tolerances: ±0.02mm"],
    },
  },
  {
    id: "bom",
    title: "Multi-Level Bill of Materials (BOM)",
    tagline: "Deep sub-assembly hierarchy with live metal rate fluctuation indexing.",
    description:
      "Structure complex manufacturing assemblies down to hardware fasteners, heat treatment subcontracting, and surface finishes. When metal spot rates shift, all open quotations update dynamically.",
    badge: "ENGINEERING ACCURACY",
    iconName: "Layers",
    metrics: {
      label: "BOM Cost Precision",
      value: "99.4% Accurate",
    },
    highlights: [
      "Nested tree structure for primary fabrications, sub-assemblies, and bought-out components",
      "Subcontract PO tracking for plating, anodizing, powder coating, and induction hardening",
      "Automatic scrap factor buffer based on cutting kerf and machining allowances",
      "Immediate margin alert when supplier raw material rates spike beyond quote tolerance",
    ],
    mockupDetails: {
      category: "Indented BOM Hierarchy",
      subLabel: "Assembly: Hydraulic Power Unit 50L (Drawing #HPU-2026-A)",
      activeCode: "Level 1: Tank (Sheet Metal) · Level 2: Manifold (AL6061) · Level 3: O-Rings",
      tags: ["Live Scrap Credit", "Subcontract PO Linked", "CAD Spec Verified"],
    },
  },
  {
    id: "pipeline",
    title: "Shop-Floor Sales Pipeline",
    tagline: "Live visual Kanban linking customer RFQs with real machine capacity.",
    description:
      "Stop selling machine capacity you don't have. Track high-value manufacturing RFQs from initial drawing review to tooling sign-off, live machining, final CMM inspection, and dispatch.",
    badge: "CAPACITY VISIBILITY",
    iconName: "GitMerge",
    metrics: {
      label: "On-Time Dispatch Rate",
      value: "96.2% On-Schedule",
    },
    highlights: [
      "Drag-and-drop Kanban columns tuned specifically for contract manufacturing workflows",
      "Real-time sync with machine load so sales engineers never overpromise delivery lead times",
      "Bottleneck alerts when tooling or third-party heat treatment delays an active work order",
      "Direct milestone conversions from RFQ Approval straight into Shop-Floor Work Order",
    ],
    mockupDetails: {
      category: "Kanban Stage: In Machining",
      subLabel: "WO-9104: Turbine Impeller Hubs · Priority: High",
      activeCode: "Bay 2 · Machine: Mazak 5-Axis #02 · Stage 3 of 5 · Load: 84%",
      tags: ["Dispatch: 3 Days", "Customer: Escorts OEM", "Audit Trail: Locked"],
    },
  },
  {
    id: "whatsapp",
    title: "WhatsApp Dispatch & Approvals",
    tagline: "Keep procurement officers updated without endless phone calls.",
    description:
      "Automate high-touch client communications. Send drawing sign-off previews, revision notices, milestone dispatch updates, and Lorry Receipts (LR copies) straight to the customer's WhatsApp.",
    badge: "COMMUNICATION",
    iconName: "MessageSquare",
    metrics: {
      label: "Customer Status Calls",
      value: "-78% Fewer Pings",
    },
    highlights: [
      "Automated WhatsApp drawing sign-off requests with secure watermarked PDF links",
      "Instant dispatch confirmation with vehicle number, driver contact, and LR docket photo",
      "Pre-dispatch inspection report (PDIR) and Mill Test Certificate (MTC) sharing",
      "Two-way customer approval logs recorded directly in the CRM audit history",
    ],
    mockupDetails: {
      category: "WhatsApp Automated Event",
      subLabel: "Recipient: Suresh Verma (Head of Sourcing, Bajaj Auto Ancillary)",
      activeCode: "“Your batch of 450 pcs (WO-8492) passed CMM QA & is loaded on MH-12-RN-4819.”",
      tags: ["LR Attached", "PDIR Certificate", "Digital Signature Confirmed"],
    },
  },
  {
    id: "reports",
    title: "Margin & OEE Reports",
    tagline: "Uncover which machines and customers actually drive plant profitability.",
    description:
      "Standard accounting reports don't reflect shop-floor realities. KanchanFlow gives plant owners true gross margins per machine hour, scrap variance per heat, and operator efficiency metrics.",
    badge: "BUSINESS INTELLIGENCE",
    iconName: "BarChart3",
    metrics: {
      label: "Realized Gross Margin Lift",
      value: "+4.6% Avg Gain",
    },
    highlights: [
      "True Gross Margin per CNC / Press machine hour factoring idle time and power load",
      "Customer profitability matrix highlighting accounts requesting excessive unbilled revisions",
      "Scrap & swarf variance tracking against estimated bill-of-materials allowances",
      "Executive export to PDF and live two-way sync with Tally Prime and SAP Business One",
    ],
    mockupDetails: {
      category: "Plant Performance Summary",
      subLabel: "Shift A + B Output · Plant 1 (Bhosari MIDC, Pune)",
      activeCode: "Total Run Hours: 142.5 hrs · OEE: 88.4% · Gross Margin Realized: ₹4,18,200",
      tags: ["Tally Prime Synced", "Zero Unaccounted Scrap", "Real-Time OEE"],
    },
  },
  {
    id: "mobile",
    title: "Shop-Floor Mobile App",
    tagline: "Rugged, operator-friendly mobile UI with barcode & QR routing.",
    description:
      "Give floor supervisors and CNC operators the tools to log job starts, scan work order travelers, report tool wear, and snap inspection photos without touching a desktop terminal.",
    badge: "SHOP-FLOOR OPERATOR UI",
    iconName: "Smartphone",
    metrics: {
      label: "Floor Data Capture",
      value: "100% Paperless",
    },
    highlights: [
      "Built-in camera barcode and QR scanner for instantaneous traveler card lookup",
      "Large tactile buttons engineered for operators wearing shop-floor industrial gloves",
      "Quick inspection photo uploads for dimensional deviations and non-conformance reports",
      "Offline sync mode ensuring shop floors with zero Wi-Fi never experience data loss",
    ],
    mockupDetails: {
      category: "Operator Terminal · Mobile",
      subLabel: "Operator: Ramesh Shinde · Machine: VMC Brother Speedio #04",
      activeCode: "Scanned Traveler: TRV-8821 · Operation: Finish Boring · Parts Done: 78/100",
      tags: ["Offline Ready", "Tool Wear: 2.1mm", "QA Photo Attached"],
    },
  },
];
