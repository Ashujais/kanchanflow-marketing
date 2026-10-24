"use client";

import React, { useState } from "react";
import { Check, X, ArrowRight, Zap, Shield, Sparkles } from "lucide-react";
import { PRICING_TIERS } from "@/data/pricingPlans";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";
import DemoModal from "@/components/shared/DemoModal";

export default function PricingCards() {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);
  const [demoOpen, setDemoOpen] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("precision-plant");

  const handlePlanClick = (planId: string) => {
    setSelectedPlan(planId);
    setDemoOpen(true);
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Billing Switcher */}
        <div className="flex flex-col items-center justify-center space-y-3 mb-16">
          <div className="flex items-center gap-3 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer ${
                !isAnnual
                  ? "bg-white dark:bg-slate-800 text-slate-950 dark:text-white shadow-sm font-bold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer ${
                isAnnual
                  ? "bg-amber-500 text-slate-950 shadow-sm font-bold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-slate-950 text-amber-400 font-bold">
                SAVE 20%
              </span>
            </button>
          </div>
          <span className="text-xs font-mono text-slate-500">
            {isAnnual ? "Billed annually · Includes 2 months free + priority onboarding" : "Standard monthly invoicing with zero long-term lock-in"}
          </span>
        </div>

        {/* 3 Tier Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {PRICING_TIERS.map((tier) => {
            const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;

            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-200 ${
                  tier.isPopular
                    ? "bg-slate-50 dark:bg-slate-900 border-2 border-amber-500 shadow-2xl shadow-amber-500/10 relative -translate-y-2"
                    : "bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-amber-500 text-slate-950 shadow-md">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Name & Tagline */}
                  <div>
                    <h3 className="text-2xl font-bold text-slate-950 dark:text-slate-100">
                      {tier.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 min-h-[40px]">
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Price Tag */}
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold font-mono text-slate-950 dark:text-slate-100 tracking-tight">
                        ₹{price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs font-mono text-slate-500">/ month</span>
                    </div>

                    <div className="text-xs font-mono text-amber-700 dark:text-amber-400 font-semibold mt-1">
                      {isAnnual ? tier.annualSavings : "Billed ₹" + tier.monthlyPrice.toLocaleString("en-IN") + " month-to-month"}
                    </div>
                  </div>

                  {/* Target & Scope Box */}
                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-mono space-y-1.5">
                    <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                      <span>Machinery Scope:</span>
                      <strong className="text-slate-950 dark:text-slate-100">{tier.machineLimit}</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                      <span>User Management:</span>
                      <strong className="text-slate-950 dark:text-slate-100">{tier.userLimit}</strong>
                    </div>
                    <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-100 dark:border-slate-900">
                      {tier.targetAudience}
                    </div>
                  </div>

                  {/* Included Features */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                      Plan Inclusions:
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Not Included (Transparency) */}
                  {tier.notIncluded && tier.notIncluded.length > 0 && (
                    <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                        Not in this tier:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-400">
                        {tier.notIncluded.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 opacity-60">
                            <X className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Card Action Button */}
                <div className="pt-8 mt-6 border-t border-slate-200 dark:border-slate-800">
                  <Button
                    variant={tier.isPopular ? "primary" : "outline"}
                    size="lg"
                    className="w-full"
                    onClick={() => handlePlanClick(tier.id)}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    {tier.ctaLabel}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}
