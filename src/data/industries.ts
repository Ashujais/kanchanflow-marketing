export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  typicalParts: string[];
  keyBenefit: string;
  iconName: string;
  stats: string;
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "cnc-machining",
    name: "CNC & Precision Machining",
    tagline: "High-tolerance milling, turning, and multi-axis job shops.",
    description:
      "Quote cycle times with pinpoint precision. Track tool wear, fixture costs, and swarf recovery across 3-axis, 4-axis, and 5-axis machining centres.",
    typicalParts: ["Valve bodies", "Turbine flanges", "Aerospace brackets", "Spline shafts"],
    keyBenefit: "Accurate cycle time formulas eliminate unbilled spindle time.",
    iconName: "Cog",
    stats: "32% faster quote generation",
  },
  {
    id: "sheet-metal",
    name: "Sheet Metal & Fabrication",
    tagline: "Laser cutting, CNC turret punching, bending, and robotic welding.",
    description:
      "Account for sheet nesting yield, cutting gas consumption (N2/O2), and bending tonnage. Prevent under-quoting raw coil price spikes.",
    typicalParts: ["Control enclosures", "Server racks", "Automotive chassis clips", "Hopper bins"],
    keyBenefit: "Dynamic sheet nesting scrap factor linked to live steel coil indices.",
    iconName: "Scissors",
    stats: "99.1% sheet utilization tracking",
  },
  {
    id: "injection-moulding",
    name: "Plastic Moulding & Toolrooms",
    tagline: "High-precision mould bases, core/cavity inserts, and custom injection moulding.",
    description:
      "Manage multi-stage tooling development from CAD design to EDM, trial T0/T1 samples, and full-volume plastic injection production runs.",
    typicalParts: ["Medical connectors", "Automotive bezel housings", "Switch enclosures", "Precision gears"],
    keyBenefit: "Tooling milestone gates ensure sample sign-off before mass production.",
    iconName: "Box",
    stats: "14 days saved on mould approvals",
  },
  {
    id: "auto-ancillary",
    name: "Tier 2/3 Automotive Ancillaries",
    tagline: "Forging, casting finish machining, and critical component sub-assemblies.",
    description:
      "Deliver to OEM schedule requirements. Generate full PPAP documentation, PDIR inspection certificates, and synchronize with just-in-time delivery mandates.",
    typicalParts: ["Brake calipers", "Steering knuckles", "Engine mounts", "Piston sleeves"],
    keyBenefit: "Zero OEM penalty fees with automated WhatsApp advance shipping notices.",
    iconName: "Car",
    stats: "99.8% on-time OEM dispatch rate",
  },
  {
    id: "heavy-engineering",
    name: "Heavy Industrial Engineering",
    tagline: "Pressure vessels, heat exchangers, structural weldments, and mining equipment.",
    description:
      "Manage lengthy 60-to-180 day manufacturing cycles with stage-gate payment milestones, third-party inspection (TPI) sign-offs, and NDT test tracking.",
    typicalParts: ["ASME pressure vessels", "Boiler manifolds", "Rotary kiln trunnions", "Skid packages"],
    keyBenefit: "Progress billing linked to milestone inspection approvals.",
    iconName: "Hammer",
    stats: "100% stage-gate audit readiness",
  },
  {
    id: "electrical-switchgear",
    name: "Electrical Panels & Switchgear",
    tagline: "HT/LT switchgear, motor control centres (MCC), and industrial wire harnesses.",
    description:
      "Handle high-complexity custom BOMs with hundreds of bought-out electrical components (MCBs, contactors, busbars, PLC modules) with zero missing parts on assembly day.",
    typicalParts: ["MCC/PCC panels", "VFD panels", "Feeder pillars", "Custom wire harnesses"],
    keyBenefit: "Automated bought-out component shortage alerts before assembly line starts.",
    iconName: "Zap",
    stats: "4.2 hrs saved per engineering BOM",
  },
];
