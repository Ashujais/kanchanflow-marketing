import React from "react";
import { XCircle, CheckCircle2, AlertTriangle, ArrowRight, TrendingDown, TrendingUp } from "lucide-react";
import Badge from "@/components/common/Badge";

export default function ProblemSolutionSection() {
  const problems = [
    {
      title: "Metal Price Spikes Erode Margins",
      detail:
        "Raw alloy rates (EN8, SS304, Aluminium) surge after quotation, but static Excel formulas leave plant owners absorbing the 8% to 15% price spike.",
    },
    {
      title: "Expensive Scrap from Rev B Blueprints",
      detail:
        "Customer emails updated Rev C drawings to sales, but the shop-floor operator is still running 500 pcs on outdated Rev B prints.",
    },
    {
      title: "Sales Overpromising Delivery Dates",
      detail:
        "Sales reps commit to a 7-day turnaround without knowing your 5-axis milling machine is booked solid for the next 14 days, resulting in rush overtime.",
    },
    {
      title: "70+ 'Where is My Order?' Phone Calls a Day",
      detail:
        "Procurement managers flood floor supervisors with calls because dispatch details and LR copies are scattered across personal WhatsApp chats.",
    },
  ];

  const solutions = [
    {
      title: "Dynamic Live Metal & Swarf Indexing",
      detail:
        "Quotation margins are locked to live spot metal prices with automated swarf scrap recovery formulas, preserving your target 25%+ gross margin.",
    },
    {
      title: "Strict Drawing Revision Governance",
      detail:
        "Only approved drawing revisions appear on shop-floor traveler QR codes. Any customer revision instantly triggers a floor hold and recalculation.",
    },
    {
      title: "Machine Load-Synced Pipeline",
      detail:
        "Sales engineers see real-time machine capacity before quoting delivery lead times, achieving a 96.2% on-time dispatch record.",
    },
    {
      title: "Automated WhatsApp Dispatch Proof",
      detail:
        "Customers receive automated WhatsApp updates when their batch finishes QA inspection, complete with vehicle number, driver phone, and LR photo.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="rose" size="md">
            THE REAL COST OF SPREADSHEETS
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-slate-100">
            Why Traditional Job Shops Lose 4% to 9% of Gross Margin Every Month
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Manufacturing businesses don’t fail on machining precision. They lose profitability in the gap between the quote, the shop-floor traveler, and customer billing.
          </p>
        </div>

        {/* Side-by-side comparison grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Left: The Old Way (Excel & Disjointed Chats) */}
          <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-950 border border-rose-500/20 shadow-md shadow-rose-500/5 space-y-6">
            <div className="flex items-center justify-between border-b border-rose-500/20 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-rose-500/10 text-rose-500">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-slate-100">
                    The Costly Spreadsheet Reality
                  </h3>
                  <p className="text-xs text-rose-600 dark:text-rose-400 font-mono">
                    Fragmented Excel, Paper Travelers & Chaos
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold uppercase px-2 py-1 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                HIGH RISK
              </span>
            </div>

            <div className="space-y-4">
              {problems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-slate-900 dark:text-slate-200">
                      {item.title}
                    </strong>
                    <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-rose-500/5 border border-rose-500/10 text-xs font-mono text-rose-700 dark:text-rose-400">
              Avg Impact: ₹3.8L to ₹12L lost per machine plant annually in unrecovered price hikes and scrap.
            </div>
          </div>

          {/* Right: The KanchanFlow Standard */}
          <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-950 border border-amber-500/40 shadow-md shadow-amber-500/10 space-y-6 relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"
            />

            <div className="flex items-center justify-between border-b border-amber-500/30 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-slate-100">
                    The KanchanFlow Standard
                  </h3>
                  <p className="text-xs text-amber-600 dark:text-amber-400 font-mono">
                    Shop-Floor Synced & Real-Time Control
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold uppercase px-2 py-1 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30">
                PREDICTABLE
              </span>
            </div>

            <div className="space-y-4">
              {solutions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-slate-900 dark:text-slate-100">
                      {item.title}
                    </strong>
                    <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-800 dark:text-amber-400 font-semibold">
              Result: +4.6% average gross margin lift and 96.2% on-time dispatch rate within 30 days.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
