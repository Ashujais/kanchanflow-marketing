import React from "react";
import {
  FileSpreadsheet,
  Layers,
  GitMerge,
  MessageSquare,
  CheckCircle2,
  Clock,
  AlertCircle,
  TrendingUp,
  Cpu,
  Truck,
  ShieldCheck,
} from "lucide-react";
import Badge from "@/components/common/Badge";

export default function AlternatingFeatureRows() {
  return (
    <div className="space-y-24 py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        {/* ROW 1: Quote-to-Order & Live Raw Material Indexing (Text Left, Mockup Right) */}
        <section id="quote-engine" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <Badge variant="gold" size="md">
                MODULE 01 · QUOTE-TO-ORDER ENGINE
              </Badge>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-slate-100">
                Generate Accurate Machining Quotes in Under 18 Minutes
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Traditional estimators lose hours recalculating cutting speeds, swarf recovery weights, and subcontract plating fees in Excel. KanchanFlow automates the full engineering math while locking in your target margin guardrail.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Cycle Time Formula Presets:</strong> Pre-built speed & feed formulas for 3-axis/5-axis CNC milling, CNC turning, and laser cutting.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Dynamic Scrap Factor Indexing:</strong> Automatically deducts swarf recovery credit (e.g. EN8, SS316, Brass) based on current scrap yard rates.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Automated Client PDF Generation:</strong> Professional engineering quotes complete with drawings preview, tolerance limits, and payment milestone terms.
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-800 dark:text-amber-400">
                Benchmark: 6.8x faster turnaround allows shops to submit quotes before competitor plants open their spreadsheets.
              </div>
            </div>

            {/* Mockup Right: Live Cost Matrix */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5 sm:p-6 text-slate-100 shadow-2xl font-mono text-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                    <span className="font-bold text-slate-200">
                      LIVE ESTIMATOR: PART #SS316-FLANGE-B
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-300">
                    Batch: 850 pcs
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                    <div>
                      <span className="text-slate-400 block text-[11px]">RAW ALLOY MATERIAL</span>
                      <span className="text-slate-100 font-bold">SS316 Round Bar Ø110mm</span>
                      <span className="text-[10px] text-slate-500 block">Gross Weight: 3.42 kg @ ₹380/kg</span>
                    </div>
                    <span className="text-sm font-bold text-slate-100">₹1,299.60</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                    <div>
                      <span className="text-slate-400 block text-[11px]">CNC TURNING & MILLING</span>
                      <span className="text-slate-100 font-bold">2 Operations · 340s Cycle Time</span>
                      <span className="text-[10px] text-slate-500 block">Machine Rate: ₹900/hr (Mazak CNC)</span>
                    </div>
                    <span className="text-sm font-bold text-slate-100">₹85.00</span>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex justify-between items-center text-emerald-400">
                    <div>
                      <span className="text-[11px] block">SWARF SCRAP REBATE CREDIT (-)</span>
                      <span className="font-bold">1.18 kg Turnings Recovered</span>
                      <span className="text-[10px] block opacity-80">Local Scrap Index: ₹145/kg</span>
                    </div>
                    <span className="text-sm font-bold">-₹171.10</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                    <div>
                      <span className="text-slate-400 block text-[11px]">HEAT TREATMENT SUBCONTRACT</span>
                      <span className="text-slate-100 font-bold">Solution Annealing & Passivation</span>
                    </div>
                    <span className="text-sm font-bold text-slate-100">₹45.00</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-sm">
                  <div>
                    <span className="text-slate-400 text-xs block">FINAL QUOTED UNIT PRICE:</span>
                    <strong className="text-amber-400 text-lg">₹1,620.00 / pc</strong>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 text-xs block">TARGET MARGIN:</span>
                    <strong className="text-emerald-400 text-base">+27.3% (₹441.50)</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROW 2: Multi-Level Indented BOM (Mockup Left, Text Right) */}
        <section id="bom" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Mockup Left */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5 sm:p-6 text-slate-100 shadow-2xl font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-amber-500" />
                    <span className="font-bold text-slate-200">
                      BOM TREE: 50T HYDRAULIC CYLINDER
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                    COSTED & VERIFIED
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[10px] font-bold">
                        1.0
                      </span>
                      <span className="font-bold text-slate-100">Cylinder Barrel (St52 Honed Tube)</span>
                    </div>
                    <span className="text-slate-300">₹8,400</span>
                  </div>

                  <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800 ml-5 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 text-[10px] font-bold">
                        1.1
                      </span>
                      <span className="text-slate-200">Piston Rod (EN8D Hard Chrome Plated)</span>
                    </div>
                    <span className="text-slate-300">₹4,250</span>
                  </div>

                  <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800 ml-10 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-400 text-[10px] font-bold">
                        1.2
                      </span>
                      <span className="text-slate-300">Hydraulic Seal Kit (Polyurethane / NBR)</span>
                    </div>
                    <span className="text-slate-300">₹1,180</span>
                  </div>

                  <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800 ml-5 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 text-[10px] font-bold">
                        1.3
                      </span>
                      <span className="text-slate-200">Front & Rear Flange End Caps (C45)</span>
                    </div>
                    <span className="text-slate-300">₹2,920</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Total Indented Assembly Cost:</span>
                  <span className="font-bold text-amber-400 text-sm">₹16,750 / Assembly</span>
                </div>
              </div>
            </div>

            {/* Text Right */}
            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              <Badge variant="cyan" size="md">
                MODULE 02 · MULTI-LEVEL BOM
              </Badge>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-slate-100">
                Structure Deep Assemblies with Zero Missing Hardware
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                When a complex sub-assembly has dozens of bought-out fasteners, raw forgings, and subcontracted plating steps, Excel fails. KanchanFlow organizes indented BOMs down to individual washers and subcontract POs.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Subcontract PO Linkage:</strong> Generate purchase orders for surface plating, heat treatment, and powder coating directly from BOM line items.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Raw Material Fluctuation Alerts:</strong> If the market rate for hard chrome bars rises by more than 4%, the system alerts your estimators instantly.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Store Reservation Sync:</strong> Reserve stock for incoming work orders so production never halts mid-shift due to unverified store inventory.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROW 3: Shop-Floor Pipeline & Machine Load Sync (Text Left, Mockup Right) */}
        <section id="pipeline" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <Badge variant="slate" size="md">
                MODULE 03 · CAPACITY-SYNCED PIPELINE
              </Badge>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-slate-100">
                Know Real Machine Load Before Promising Delivery Dates
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Sales teams that sell machine capacity without checking the shop floor cause costly rush penalties and angry procurement managers. KanchanFlow links your active sales pipeline directly to CNC and fabrication bay schedules.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Multi-Station Job Routing:</strong> Follow every work order through cutting, roughing, finish milling, subcontracting, and CMM inspection.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Bottleneck Warning Flags:</strong> Pinpoint when heat treatment subcontractors or fixture delays threaten your dispatch milestones.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Paperless Traveler QR Codes:</strong> Operators scan traveler codes on mobile devices to start setups, log completions, and report scrap.
                  </span>
                </div>
              </div>
            </div>

            {/* Mockup Right: Station Routing Bar */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5 sm:p-6 text-slate-100 shadow-2xl font-mono text-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <span className="font-bold text-amber-400">
                      WO-8840 · STAGE ROUTER STATUS
                    </span>
                    <span className="text-[11px] text-slate-400 block">
                      Part: Automotive Steering Yoke (Forged 40Cr)
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-400">
                    STAGE 3 OF 5
                  </span>
                </div>

                {/* Routing Stepper */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-center gap-3 p-2.5 rounded bg-slate-900 border border-slate-800">
                    <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0">
                      ✓
                    </span>
                    <div className="flex-1">
                      <span className="text-slate-200 font-bold block">Op 1: Cold Saw Blank Cutting</span>
                      <span className="text-[10px] text-slate-400">Completed · 500/500 pcs · Machine #CS-01</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 rounded bg-slate-900 border border-slate-800">
                    <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0">
                      ✓
                    </span>
                    <div className="flex-1">
                      <span className="text-slate-200 font-bold block">Op 2: CNC Facing & Spline Broaching</span>
                      <span className="text-[10px] text-slate-400">Completed · Mazak Integrex #01 · OEE: 91%</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 rounded bg-amber-500/10 border border-amber-500/30">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0 animate-pulse">
                      3
                    </span>
                    <div className="flex-1">
                      <span className="text-amber-400 font-bold block">Op 3: Induction Hardening (Active Bay 2)</span>
                      <span className="text-[10px] text-slate-300">In Progress · 320/500 pcs done · Operator: S. Mane</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 rounded bg-slate-950 border border-slate-800/80 opacity-60">
                    <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center font-bold text-xs shrink-0">
                      4
                    </span>
                    <div className="flex-1">
                      <span className="text-slate-300 block">Op 4: Cylindrical Grinding (Tolerance ±0.008mm)</span>
                      <span className="text-[10px] text-slate-500">Queued · Scheduled Tomorrow Shift A</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex justify-between text-slate-400 text-[11px]">
                  <span>On-Time Delivery Target: Escorts MIDC</span>
                  <strong className="text-emerald-400">Zero Schedule Deviations</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROW 4: WhatsApp Automation & Drawing Revs (Mockup Left, Text Right) */}
        <section id="whatsapp" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Mockup Left */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5 sm:p-6 text-slate-100 shadow-2xl font-sans text-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 font-mono">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="font-bold text-slate-200">
                      WHATSAPP BUSINESS AUTOMATION THREAD
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    VERIFIED SENDER
                  </span>
                </div>

                {/* Simulated WhatsApp Chat Messages */}
                <div className="space-y-3 font-sans">
                  {/* Outbound Message 1: Drawing Sign-Off */}
                  <div className="max-w-[85%] rounded-xl p-3 bg-slate-900 border border-slate-800 space-y-1.5">
                    <div className="flex justify-between items-center text-[10px] font-mono text-amber-400 font-bold">
                      <span>KANCHANFLOW · DRAWING APPROVAL REQUIRED</span>
                      <span className="text-slate-500">10:14 AM</span>
                    </div>
                    <p className="text-slate-200 leading-snug">
                      Hi Mr. Verma, Rev C blueprint for <strong>SS316 Flange (WO-8492)</strong> has been prepared with tolerance update ±0.02mm. Please approve to release tooling.
                    </p>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-center justify-between font-mono text-[11px]">
                      <span>📄 SS316_Flange_RevC.pdf (1.8 MB)</span>
                      <span className="text-emerald-400 font-bold">VIEW & SIGN</span>
                    </div>
                  </div>

                  {/* Inbound Response */}
                  <div className="max-w-[80%] ml-auto rounded-xl p-3 bg-emerald-950/60 border border-emerald-800/60 space-y-1">
                    <div className="flex justify-between items-center text-[10px] font-mono text-emerald-400">
                      <span>SURESH VERMA (PURCHASE HEAD)</span>
                      <span className="text-slate-400">10:28 AM</span>
                    </div>
                    <p className="text-slate-100">
                      Approved Rev C. Please expedite the 450 pcs batch.
                    </p>
                  </div>

                  {/* Outbound Message 2: Dispatch Notice */}
                  <div className="max-w-[85%] rounded-xl p-3 bg-slate-900 border border-slate-800 space-y-1.5">
                    <div className="flex justify-between items-center text-[10px] font-mono text-emerald-400 font-bold">
                      <span>BATCH DISPATCHED · VEHICLE #MH-12-RN-4819</span>
                      <span className="text-slate-500">Yesterday, 4:45 PM</span>
                    </div>
                    <p className="text-slate-200 leading-snug">
                      Your batch of 450 pcs has passed CMM QA & is loaded. Driver: Santosh (98221-XXXXX). Lorry Receipt & Mill Test Certificate attached.
                    </p>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-center justify-between font-mono text-[11px]">
                      <span>🚚 LR_Docket_8492.pdf</span>
                      <span className="text-amber-400">TRACK SHIPMENT</span>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-slate-400 pt-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Two-way message history automatically stored on the customer CRM card.</span>
                </div>
              </div>
            </div>

            {/* Text Right */}
            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              <Badge variant="green" size="md">
                MODULE 04 · WHATSAPP DISPATCH & APPROVALS
              </Badge>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-slate-100">
                Cut Routine Customer Calls by 78% with Automated Proof
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Procurement managers don’t log in to customer portals. They live on WhatsApp. KanchanFlow meets your clients where they already are, sending automated drawing previews, inspection reports, and dispatch LR copies.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Digital Drawing Sign-Offs:</strong> Instant one-tap customer approvals that automatically release machine tools on the shop floor.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Complete Dispatch Docket Packet:</strong> Automatically bundle Tax Invoice, LR copy, and Mill Test Certificates into a single WhatsApp notification.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Audit-Ready Customer Logs:</strong> All chat responses are timestamped and preserved to resolve payment disputes and delivery queries.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
