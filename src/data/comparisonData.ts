export interface ComparisonRow {
  parameter: string;
  category: string;
  kanchanflow: string | boolean;
  genericCrm: string | boolean;
  legacyErp: string | boolean;
  excelWhatsapp: string | boolean;
  whyItMatters: string;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    parameter: "Machining Cycle Time Estimator",
    category: "Quoting & Costing",
    kanchanflow: "Built-in (turning, milling, cutting, EDM)",
    genericCrm: "No (requires complex custom dev)",
    legacyErp: "Clunky / Needs custom module",
    excelWhatsapp: "Brittle formulas / Manual entry",
    whyItMatters: "Quotes based on actual cycle times prevent under-quoting machining hours.",
  },
  {
    parameter: "Live Metal Rate & Scrap Indexing",
    category: "Quoting & Costing",
    kanchanflow: "Automatic live indexing + swarf rebate",
    genericCrm: "No metal knowledge",
    legacyErp: "Static price master only",
    excelWhatsapp: "Outdated metal prices cause losses",
    whyItMatters: "Protects gross margin when alloy spot prices fluctuate between quote and order.",
  },
  {
    parameter: "Multi-Level Indented BOM",
    category: "Engineering & Production",
    kanchanflow: "Native (Assemblies, Hardware, Plating POs)",
    genericCrm: "No BOM capability",
    legacyErp: "Rigid & slow to edit",
    excelWhatsapp: "Broken VLOOKUPs & missing parts",
    whyItMatters: "Ensures no hardware fasteners or heat-treatment subcontract costs are forgotten.",
  },
  {
    parameter: "Shop-Floor Barcode / QR Scanning",
    category: "Engineering & Production",
    kanchanflow: "Included mobile app for operators",
    genericCrm: "No shop-floor tool",
    legacyErp: "Expensive dedicated handheld terminals",
    excelWhatsapp: "Paper travelers lost on greasy benches",
    whyItMatters: "Captures actual machine setup and cycle times in real time without paper.",
  },
  {
    parameter: "Customer Drawing Revision Guardrails",
    category: "Quality & Governance",
    kanchanflow: "Enforced Rev lock (Rev A vs Rev B/C)",
    genericCrm: "Generic attachment storage only",
    legacyErp: "Heavy PLM add-on needed",
    excelWhatsapp: "Machinists run obsolete prints",
    whyItMatters: "Eliminates high-cost scrap caused by machining superseded blueprint revisions.",
  },
  {
    parameter: "Automated WhatsApp Dispatch & LR Proof",
    category: "Customer Communication",
    kanchanflow: "Automated with vehicle & LR photo",
    genericCrm: "Generic email alerts only",
    legacyErp: "No native WhatsApp integration",
    excelWhatsapp: "Disorganized chat pings & lost photos",
    whyItMatters: "Cuts routine customer check-in calls by up to 78% and gives instant delivery proof.",
  },
  {
    parameter: "Implementation Time to Live Plant Use",
    category: "Deployment & ROI",
    kanchanflow: "7 to 14 days",
    genericCrm: "3 to 6 months",
    legacyErp: "9 to 18 months",
    excelWhatsapp: "Immediate (but perpetually broken)",
    whyItMatters: "Fast time-to-value without disrupting active production shifts.",
  },
  {
    parameter: "Tally Prime Two-Way Accounting Sync",
    category: "Deployment & ROI",
    kanchanflow: "Native 1-click connector",
    genericCrm: "Needs 3rd party Zapier / middleware",
    legacyErp: "Competes with Tally (requires total switch)",
    excelWhatsapp: "Double manual data entry",
    whyItMatters: "Synchronizes approved sales orders with your existing accountant's workflow seamlessly.",
  },
];
