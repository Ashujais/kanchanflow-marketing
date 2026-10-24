import React from "react";
import { Check, X, Info } from "lucide-react";
import { COMPARISON_ROWS } from "@/data/comparisonData";
import Badge from "@/components/common/Badge";

export default function ComparisonTable() {
  return (
    <section id="comparison" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="gold" size="md">
            ARCHITECTURAL BENCHMARK
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-slate-100">
            Why Generic SaaS & Legacy ERPs Fail Job Shops
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Compare KanchanFlow against horizontal CRMs that don’t understand cycle times, and heavy ERPs that take 12 months to deploy.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xl overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/80 text-xs font-mono">
                <th scope="col" className="p-4 sm:p-5 font-bold text-slate-900 dark:text-slate-100 w-1/4">
                  CAPABILITY / REQUIREMENT
                </th>
                <th
                  scope="col"
                  className="p-4 sm:p-5 font-bold text-amber-900 dark:text-amber-400 bg-amber-500/10 border-x border-amber-500/30 w-1/4"
                >
                  <div className="flex items-center gap-1.5">
                    <span>KANCHANFLOW</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500 text-slate-950 font-bold">
                      BUILT FOR MFG
                    </span>
                  </div>
                </th>
                <th scope="col" className="p-4 sm:p-5 font-semibold text-slate-600 dark:text-slate-400 w-1/6">
                  GENERIC SAAS CRM
                  <span className="block text-[10px] text-slate-400 font-normal">
                    (Salesforce / HubSpot)
                  </span>
                </th>
                <th scope="col" className="p-4 sm:p-5 font-semibold text-slate-600 dark:text-slate-400 w-1/6">
                  LEGACY HEAVY ERP
                  <span className="block text-[10px] text-slate-400 font-normal">
                    (SAP / Custom Tally)
                  </span>
                </th>
                <th scope="col" className="p-4 sm:p-5 font-semibold text-slate-600 dark:text-slate-400 w-1/6">
                  EXCEL + WHATSAPP
                  <span className="block text-[10px] text-slate-400 font-normal">
                    (Manual Status Quo)
                  </span>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200 dark:divide-slate-800/80 text-xs sm:text-sm">
              {COMPARISON_ROWS.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors"
                >
                  {/* Parameter & Category */}
                  <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-slate-100">
                    <div>{row.parameter}</div>
                    <span className="text-[10px] font-mono text-slate-500 font-normal block mt-0.5">
                      {row.whyItMatters}
                    </span>
                  </td>

                  {/* KanchanFlow (Highlighted) */}
                  <td className="p-4 sm:p-5 bg-amber-500/5 dark:bg-amber-500/10 border-x border-amber-500/30 font-semibold text-amber-900 dark:text-amber-300">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{row.kanchanflow}</span>
                    </div>
                  </td>

                  {/* Generic CRM */}
                  <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-400">
                    <div className="flex items-start gap-1.5">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{row.genericCrm}</span>
                    </div>
                  </td>

                  {/* Legacy ERP */}
                  <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-400">
                    <span>{row.legacyErp}</span>
                  </td>

                  {/* Excel + WhatsApp */}
                  <td className="p-4 sm:p-5 text-rose-700 dark:text-rose-400/90 font-mono text-xs">
                    <span>{row.excelWhatsapp}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-500 shrink-0" />
            <span>
              Evaluation benchmark conducted across 42 Indian and global machining job shops running 10 to 45 CNC machines.
            </span>
          </div>
          <span className="font-mono text-amber-600 dark:text-amber-400 font-bold">
            Average implementation timeline: 11 calendar days.
          </span>
        </div>
      </div>
    </section>
  );
}
