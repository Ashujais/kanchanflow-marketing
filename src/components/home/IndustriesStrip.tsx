"use client";

import React, { useState } from "react";
import { Cog, Scissors, Box, Car, Hammer, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { INDUSTRIES } from "@/data/industries";
import Badge from "@/components/common/Badge";

export default function IndustriesStrip() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>(INDUSTRIES[0].id);

  const iconMap: Record<string, React.ReactNode> = {
    Cog: <Cog className="w-5 h-5" />,
    Scissors: <Scissors className="w-5 h-5" />,
    Box: <Box className="w-5 h-5" />,
    Car: <Car className="w-5 h-5" />,
    Hammer: <Hammer className="w-5 h-5" />,
    Zap: <Zap className="w-5 h-5" />,
  };

  const current = INDUSTRIES.find((ind) => ind.id === selectedIndustry) || INDUSTRIES[0];

  return (
    <section id="industries" className="py-20 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <Badge variant="cyan" size="md">
            SECTOR-SPECIFIC LOGIC
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-slate-100">
            Engineered for the Demands of Your Specific Shop
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Whether you run 5-axis CNC centres in Pune or high-speed laser cutting in Gurgaon, KanchanFlow adapts to your exact machining and subcontract workflows.
          </p>
        </div>

        {/* Industry Pill Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {INDUSTRIES.map((ind) => {
            const isSelected = ind.id === selectedIndustry;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setSelectedIndustry(ind.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer ${
                  isSelected
                    ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                    : "bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <span>{iconMap[ind.iconName] || <Cog className="w-4 h-4" />}</span>
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Detail Card */}
        <div className="rounded-2xl p-6 sm:p-10 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                  {iconMap[current.iconName] || <Cog className="w-5 h-5" />}
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  {current.name}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-slate-100">
                {current.tagline}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {current.description}
              </p>

              <div className="pt-2 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                  Typical Components Managed:
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.typicalParts.map((part, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800"
                    >
                      {part}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{current.keyBenefit}</span>
              </div>
            </div>

            {/* Right Metric Callout */}
            <div className="rounded-xl p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-3">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                VERIFIED IMPACT
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-600 dark:text-amber-400">
                {current.stats}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-snug">
                Measured across active customer production runs in 2025-2026.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
