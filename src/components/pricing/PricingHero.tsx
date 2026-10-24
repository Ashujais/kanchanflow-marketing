import React from "react";
import Link from "next/link";
import { ChevronRight, ShieldCheck, CheckCircle2, Zap } from "lucide-react";
import Badge from "@/components/common/Badge";

export default function PricingHero() {
  return (
    <section className="relative pt-12 pb-14 md:pt-16 md:pb-18 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 industrial-grid transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <li>
              <Link href="/" className="hover:text-amber-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li className="text-amber-600 dark:text-amber-400 font-semibold" aria-current="page">
              Pricing & Plans
            </li>
          </ol>
        </nav>

        <div className="max-w-4xl space-y-5 text-center mx-auto">
          <Badge variant="gold" size="md">
            TRANSPARENT INDUSTRIAL PRICING
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-slate-100 leading-tight">
            Predictable Plans for Every Stage of{" "}
            <span className="text-amber-600 dark:text-amber-400">
              Plant Growth
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Zero per-operator penalty fees. All plans include automated CSV Excel data migration, live onboarding support, and a 14-day risk-free sandboxed pilot.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>14-Day Free Sandboxed Pilot</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Cancel or Upgrade Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
