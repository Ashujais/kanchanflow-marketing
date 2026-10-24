"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, Shield, CheckCircle, Factory, Cpu, Flame } from "lucide-react";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";
import InteractiveDashboardMockup from "@/components/home/InteractiveDashboardMockup";
import DemoModal from "@/components/shared/DemoModal";

export default function HeroSection() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden industrial-grid">
      {/* Background radial accent - Molten Gold industrial lighting (not generic SaaS blob) */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <Badge variant="gold" size="md" dot>
            MANUFACTURING CRM & SHOP-FLOOR PIPELINE
          </Badge>
          <span className="hidden sm:inline-block text-xs font-mono text-slate-500">·</span>
          <span className="text-xs font-mono text-slate-600 dark:text-slate-400">
            For Precision Machinists, Fabricators & OEM Suppliers
          </span>
        </div>

        {/* Hero Main Heading & Copy */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-slate-50 leading-[1.12]">
            Turn Shop-Floor Chaos into{" "}
            <span className="text-amber-600 dark:text-amber-400 underline decoration-amber-500/40 underline-offset-8">
              Predictable Gross Margins
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            The unified B2B manufacturing CRM that connects customer RFQs, multi-level BOMs, machine hour capacity, and automated WhatsApp dispatch updates—replacing brittle spreadsheets with real-time shop-floor control.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() => setDemoOpen(true)}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Schedule 20-Min Live Walkthrough
            </Button>

            <Button
              variant="outline"
              size="lg"
              href="#modules"
              icon={<Flame className="w-4 h-4 text-amber-500" />}
            >
              Explore 6 Core Modules
            </Button>
          </div>

          {/* Trust strip */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-mono text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>140+ Plants Across Pune, Rajkot & Peenya</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Tally Prime & ERP 2-Way Sync</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>ISO 9001:2015 Audit Compliant</span>
            </div>
          </div>
        </div>

        {/* Product UI Mockup */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl p-1 sm:p-2 bg-gradient-to-b from-slate-300 dark:from-slate-700 via-slate-200 dark:via-slate-800 to-transparent shadow-2xl">
            <InteractiveDashboardMockup />
          </div>
          <p className="text-center text-xs font-mono text-slate-500 dark:text-slate-400 mt-3">
            Interactive live shop console preview · Switch tabs above to test the Quote Engine & BOM hierarchy
          </p>
        </div>
      </div>

      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}
