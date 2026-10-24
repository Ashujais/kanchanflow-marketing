import React from "react";
import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { PRICING_TIERS } from "@/data/pricingPlans";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export default function PricingTeaser() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="gold" size="md">
            PLANS & INVESTMENT
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-slate-100">
            Transparent Pricing Built for Manufacturing SMEs
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            No endless per-operator fees. Straightforward plant tiers with complete implementation support and 14-day risk-free pilot.
          </p>
        </div>

        {/* 3 Tier Teaser Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 ${
                tier.isPopular
                  ? "bg-white dark:bg-slate-950 border-2 border-amber-500 shadow-xl shadow-amber-500/10 relative"
                  : "bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-amber-500 text-slate-950 shadow-sm">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-slate-100">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 min-h-[32px]">
                    {tier.tagline}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-950 dark:text-slate-100">
                      ₹{tier.annualPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">/ month</span>
                  </div>
                  <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-semibold block mt-0.5">
                    billed annually · {tier.annualSavings}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono space-y-1">
                  <div className="text-slate-700 dark:text-slate-300">
                    <strong>Capacity:</strong> {tier.machineLimit}
                  </div>
                  <div className="text-slate-700 dark:text-slate-300">
                    <strong>Users:</strong> {tier.userLimit}
                  </div>
                </div>

                {/* Key feature preview */}
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 pt-2">
                  {tier.features.slice(0, 4).map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                <Button
                  variant={tier.isPopular ? "primary" : "outline"}
                  size="md"
                  href="/pricing"
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  View Plan Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 font-bold text-sm text-amber-700 dark:text-amber-400 hover:text-amber-600 transition-colors"
          >
            <span>Compare full feature matrix across all 3 plans</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
