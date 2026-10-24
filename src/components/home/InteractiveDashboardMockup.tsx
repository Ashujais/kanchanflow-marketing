"use client";

import React, { useState } from "react";
import {
  Activity,
  Layers,
  FileText,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  TrendingUp,
  Cpu,
  Smartphone,
  Eye,
} from "lucide-react";
import Badge from "@/components/common/Badge";

export default function InteractiveDashboardMockup() {
  const [activeTab, setActiveTab] = useState<"kanban" | "quote" | "bom">("kanban");
  const [activeFilter, setActiveFilter] = useState<"all" | "cnc" | "fabrication">("all");

  const jobs = [
    {
      id: "WO-8492",
      partName: "SS316 High-Pressure Flange",
      client: "Escorts Kubota OEM",
      qty: 450,
      stage: "Machining (Op 2/3)",
      machine: "Mazak 5-Axis #02",
      oee: "89.2%",
      margin: "+29.4%",
      status: "on-track",
      delivery: "In 2 Days",
      type: "cnc",
    },
    {
      id: "WO-8493",
      partName: "AL6061 Extruded Heat Sink Enclosure",
      client: "Schneider Electric",
      qty: 1200,
      stage: "Anodizing Subcontract",
      machine: "Surface Plant Bay 4",
      oee: "94.0%",
      margin: "+24.8%",
      status: "subcontract",
      delivery: "In 4 Days",
      type: "fabrication",
    },
    {
      id: "WO-8494",
      partName: "EN24 Hardened Pinion Shaft (Rev C)",
      client: "Bharat Forge Ancillary",
      qty: 320,
      stage: "CMM QA Inspection",
      machine: "Zeiss CMM Lab",
      oee: "98.1%",
      margin: "+33.1%",
      status: "ready-qa",
      delivery: "Today (Ready for Truck)",
      type: "cnc",
    },
  ];

  const filteredJobs =
    activeFilter === "all" ? jobs : jobs.filter((j) => j.type === activeFilter);

  return (
    <div className="w-full rounded-2xl border border-slate-700/80 bg-slate-950 text-slate-100 shadow-2xl overflow-hidden font-sans">
      {/* Top Application Bar */}
      <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="h-4 w-px bg-slate-800" />
          <span className="font-mono text-slate-400">
            KANCHANFLOW-OS <span className="text-amber-400">v3.2_SHOP_CONSOLE</span>
          </span>
          <Badge variant="green" size="sm" dot>
            PLANT 01: BHOSARI LIVE
          </Badge>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
          <button
            type="button"
            onClick={() => setActiveTab("kanban")}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              activeTab === "kanban"
                ? "bg-amber-500 text-slate-950 font-bold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Shop-Floor Pipeline
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("quote")}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              activeTab === "quote"
                ? "bg-amber-500 text-slate-950 font-bold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Live Quote Engine
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("bom")}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              activeTab === "bom"
                ? "bg-amber-500 text-slate-950 font-bold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            BOM & Scrap Index
          </button>
        </div>
      </div>

      {/* Live Plant Telemetry Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-800/80 border-b border-slate-800">
        <div className="bg-slate-950 p-3 sm:p-4">
          <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span>ACTIVE PIPELINE VALUE</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="text-lg sm:text-xl font-bold font-mono text-slate-100 mt-1">
            ₹1,42,80,000
          </div>
          <div className="text-[10px] text-emerald-400 font-mono mt-0.5">
            +18.4% vs last month · 24 RFQs
          </div>
        </div>

        <div className="bg-slate-950 p-3 sm:p-4">
          <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span>CNC MACHINE OEE</span>
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="text-lg sm:text-xl font-bold font-mono text-cyan-400 mt-1">
            88.6%
          </div>
          <div className="text-[10px] text-slate-400 font-mono mt-0.5">
            14 machines running · Shift B
          </div>
        </div>

        <div className="bg-slate-950 p-3 sm:p-4">
          <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span>REALIZED GROSS MARGIN</span>
            <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="text-lg sm:text-xl font-bold font-mono text-amber-400 mt-1">
            28.4%
          </div>
          <div className="text-[10px] text-amber-400/80 font-mono mt-0.5">
            Guardrail: 24.0% min met
          </div>
        </div>

        <div className="bg-slate-950 p-3 sm:p-4">
          <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span>QUOTE VELOCITY</span>
            <Clock className="w-3.5 h-3.5 text-purple-400" />
          </div>
          <div className="text-lg sm:text-xl font-bold font-mono text-slate-100 mt-1">
            2.1 Hours
          </div>
          <div className="text-[10px] text-slate-400 font-mono mt-0.5">
            Industry Avg: 4 Days
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="p-4 sm:p-6 bg-slate-950">
        {activeTab === "kanban" && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Filter Bay:
                </span>
                <button
                  type="button"
                  onClick={() => setActiveFilter("all")}
                  className={`px-2.5 py-1 rounded text-xs font-mono ${
                    activeFilter === "all"
                      ? "bg-slate-800 text-amber-400 border border-slate-700"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  All (3)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter("cnc")}
                  className={`px-2.5 py-1 rounded text-xs font-mono ${
                    activeFilter === "cnc"
                      ? "bg-slate-800 text-amber-400 border border-slate-700"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  CNC Milling/Turning
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter("fabrication")}
                  className={`px-2.5 py-1 rounded text-xs font-mono ${
                    activeFilter === "fabrication"
                      ? "bg-slate-800 text-amber-400 border border-slate-700"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Fabrication & Subcontract
                </button>
              </div>

              <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                <span>3 Operators Clocked In on Mobile</span>
              </div>
            </div>

            {/* Work Order Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="rounded-xl p-4 bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 transition-all space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-amber-400">
                      {job.id}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                      {job.delivery}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm text-slate-100 group-hover:text-amber-400 transition-colors line-clamp-1">
                      {job.partName}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">{job.client}</p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80 space-y-1 text-xs font-mono">
                    <div className="flex justify-between text-slate-400">
                      <span>Station:</span>
                      <span className="text-slate-200">{job.machine}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Batch Qty:</span>
                      <span className="text-slate-200">{job.qty} pcs</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Stage:</span>
                      <span className="text-cyan-400">{job.stage}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-slate-800 text-xs font-mono">
                    <div className="text-slate-400">
                      OEE: <strong className="text-emerald-400">{job.oee}</strong>
                    </div>
                    <div className="text-slate-400">
                      Margin: <strong className="text-amber-400">{job.margin}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Status Feed */}
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-slate-300 font-mono">
                  WhatsApp Auto-Alert Sent: Driver picked up WO-8494 (LR #MH12-8821 attached)
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">2 mins ago</span>
            </div>
          </div>
        )}

        {activeTab === "quote" && (
          <div className="space-y-4">
            <div className="rounded-xl p-4 bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <span className="text-xs font-mono text-amber-400 font-bold uppercase">
                    RFQ-2026-0814 · Live Cost Estimation Breakdown
                  </span>
                  <h4 className="text-base font-bold text-slate-100">
                    Component: Hydraulic Distributor Block (EN8 Alloy)
                  </h4>
                </div>
                <Badge variant="gold" size="sm">
                  PROPOSED MARGIN: 28.5%
                </Badge>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">RAW MATERIAL (EN8)</span>
                  <div className="text-sm font-bold text-slate-100 mt-1">₹312.40 / pc</div>
                  <span className="text-[10px] text-slate-500">4.6 kg @ ₹68/kg</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">CYCLE TIME (4-AXIS)</span>
                  <div className="text-sm font-bold text-slate-100 mt-1">₹185.00 / pc</div>
                  <span className="text-[10px] text-slate-500">740s @ ₹900/hr</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">SWARF RECOVERY (-)</span>
                  <div className="text-sm font-bold text-emerald-400 mt-1">-₹38.20 / pc</div>
                  <span className="text-[10px] text-slate-500">1.4 kg scrap @ ₹27/kg</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">SUBCONTRACT PLATING</span>
                  <div className="text-sm font-bold text-slate-100 mt-1">₹42.00 / pc</div>
                  <span className="text-[10px] text-slate-500">Zinc Nickel 12µm</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="text-slate-200">
                  Target Quote Price: <strong className="text-amber-400 text-sm">₹642.50 / unit</strong> (Total Batch Value: ₹3,85,500 for 600 pcs)
                </div>
                <button
                  type="button"
                  className="px-3 py-1.5 rounded bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition-colors"
                >
                  Generate Client PDF Quote
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "bom" && (
          <div className="space-y-4">
            <div className="rounded-xl p-4 bg-slate-900 border border-slate-800 space-y-3 text-xs font-mono">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="font-bold text-slate-200">
                  Indented BOM Hierarchy: Gearbox Reduction Sub-assembly (Drawing #GR-404)
                </span>
                <span className="text-emerald-400">Total Items: 14 · Zero Shortages</span>
              </div>

              <div className="space-y-1.5">
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[10px] font-bold">
                      LEVEL 0
                    </span>
                    <span className="font-bold text-slate-100">Main Cast Housing (FG260 Grade)</span>
                  </div>
                  <span className="text-slate-400">1 unit · In-house Boring Bay</span>
                </div>

                <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800 ml-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 text-[10px] font-bold">
                      LEVEL 1
                    </span>
                    <span className="text-slate-200">Input Spline Shaft (EN36C Case Hardened)</span>
                  </div>
                  <span className="text-slate-400">1 unit · Heat Treatment PO #HT-194</span>
                </div>

                <div className="p-2.5 rounded bg-slate-950/60 border border-slate-800 ml-8 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-400 text-[10px] font-bold">
                      LEVEL 2
                    </span>
                    <span className="text-slate-300">Taper Roller Bearings (SKF 32008X)</span>
                  </div>
                  <span className="text-emerald-400">2 units · Reserved in Stores</span>
                </div>
              </div>

              <div className="pt-2 text-slate-400 text-[11px] flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Live metal scrap indexing enabled: EN36C swarf scrap credit automatically recalculated daily.</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
