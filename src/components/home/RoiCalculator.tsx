"use client";

import React, { useState } from "react";
import { Calculator, TrendingUp, Clock, DollarSign, ArrowRight } from "lucide-react";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

interface RoiCalculatorProps {
  onOpenDemo?: () => void;
}

export default function RoiCalculator({ onOpenDemo }: RoiCalculatorProps) {
  const [rfqsPerMonth, setRfqsPerMonth] = useState<number>(65);
  const [currentTurnaroundDays, setCurrentTurnaroundDays] = useState<number>(4);
  const [avgOrderValue, setAvgOrderValue] = useState<number>(180000);

  // Realistic manufacturing economics formulas:
  // 1. Quoting hours saved: avg quote takes 2.5 hrs in Excel vs 20 mins in KanchanFlow (~2.15 hrs saved per RFQ)
  const hoursSavedPerMonth = Math.round(rfqsPerMonth * 2.15);

  // 2. Win rate lift: responding in 2 hours instead of 4 days increases win rate by ~6.5% on commercial manufacturing bids
  const additionalOrdersWonPerMonth = Math.max(1, Math.round(rfqsPerMonth * 0.065));

  // 3. Margin gain from scrap & metal indexing (+3.2% avg margin on existing orders) + new order gross margin (25% on new wins)
  const monthlyRevenueBase = rfqsPerMonth * 0.25 * avgOrderValue;
  const marginLeakageRecovered = monthlyRevenueBase * 0.032;
  const newMarginFromWonBids = additionalOrdersWonPerMonth * avgOrderValue * 0.26;
  const totalMonthlyGain = Math.round(marginLeakageRecovered + newMarginFromWonBids);
  const annualGain = totalMonthlyGain * 12;

  // Payback period vs Precision Plant annual plan (~₹26,399/mo)
  const softwareMonthlyCost = 26399;
  const paybackDays = Math.max(9, Math.round((softwareMonthlyCost / (totalMonthlyGain / 30))));

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="roi-calculator" className="py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="gold" size="md">
            PLANT PAYBACK CALCULATOR
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-slate-100">
            Calculate Your Machine Shop&apos;s Return on Investment
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            See the exact engineering hours saved and gross margin captured when you replace manual spreadsheet quoting with KanchanFlow.
          </p>
        </div>

        <div className="rounded-3xl p-6 sm:p-10 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Controls: Sliders */}
            <div className="lg:col-span-7 space-y-6">
              {/* Slider 1: Monthly RFQs */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="rfq-slider" className="font-semibold text-slate-800 dark:text-slate-200">
                    Monthly Customer RFQs / Quotes:
                  </label>
                  <span className="font-mono font-bold text-amber-600 dark:text-amber-400 text-base">
                    {rfqsPerMonth} quotes/mo
                  </span>
                </div>
                <input
                  id="rfq-slider"
                  type="range"
                  min="15"
                  max="250"
                  step="5"
                  value={rfqsPerMonth}
                  onChange={(e) => setRfqsPerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500">
                  <span>15 (Small Shop)</span>
                  <span>120 (Growing Plant)</span>
                  <span>250+ (Multi-line Enterprise)</span>
                </div>
              </div>

              {/* Slider 2: Turnaround Time */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="turnaround-slider" className="font-semibold text-slate-800 dark:text-slate-200">
                    Current Quote Turnaround:
                  </label>
                  <span className="font-mono font-bold text-amber-600 dark:text-amber-400 text-base">
                    {currentTurnaroundDays} business days
                  </span>
                </div>
                <input
                  id="turnaround-slider"
                  type="range"
                  min="1"
                  max="7"
                  step="1"
                  value={currentTurnaroundDays}
                  onChange={(e) => setCurrentTurnaroundDays(Number(e.target.value))}
                  className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500">
                  <span>1 Day</span>
                  <span>4 Days (Avg)</span>
                  <span>7 Days (Severe Bottleneck)</span>
                </div>
              </div>

              {/* Slider 3: Average Order Value */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="aov-slider" className="font-semibold text-slate-800 dark:text-slate-200">
                    Average Batch / Order Value:
                  </label>
                  <span className="font-mono font-bold text-amber-600 dark:text-amber-400 text-base">
                    {formatCurrency(avgOrderValue)}
                  </span>
                </div>
                <input
                  id="aov-slider"
                  type="range"
                  min="30000"
                  max="800000"
                  step="10000"
                  value={avgOrderValue}
                  onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500">
                  <span>₹30,000 (Small batch)</span>
                  <span>₹3,00,000</span>
                  <span>₹8,00,000 (Heavy assemblies)</span>
                </div>
              </div>
            </div>

            {/* Right Display: Calculated Value Card */}
            <div className="lg:col-span-5 rounded-2xl p-6 sm:p-7 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                  ESTIMATED ANNUAL VALUE CREATED
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-600 dark:text-amber-400 mt-1">
                  {formatCurrency(annualGain)} / year
                </div>
                <span className="text-xs text-slate-500 mt-0.5 block">
                  Net gross margin gain + unbilled scrap recovery
                </span>
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-400">Engineering Time Saved:</span>
                  <strong className="text-emerald-600 dark:text-emerald-400 text-sm">
                    {hoursSavedPerMonth} hrs / mo
                  </strong>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-400">Extra Won Orders (Speed):</span>
                  <strong className="text-emerald-600 dark:text-emerald-400 text-sm">
                    +{additionalOrdersWonPerMonth} orders / mo
                  </strong>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-400">Projected Payback Period:</span>
                  <strong className="text-amber-600 dark:text-amber-400 text-sm">
                    {paybackDays} Days
                  </strong>
                </div>
              </div>

              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={onOpenDemo}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Validate ROI on Your Shop
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
