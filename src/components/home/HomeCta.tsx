"use client";

import React, { useState } from "react";
import { ArrowRight, ShieldCheck, PhoneCall, Calendar } from "lucide-react";
import Button from "@/components/common/Button";
import DemoModal from "@/components/shared/DemoModal";

export default function HomeCta() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="py-20 bg-slate-950 text-slate-100 border-t border-slate-800 relative overflow-hidden industrial-grid">
      {/* Molten Gold Accent Lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-wider font-semibold">
          <span>ZERO HARDWARE OVERHAUL · LIVE IN 14 DAYS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Ready to Bring Order to Your{" "}
          <span className="text-amber-400 underline decoration-amber-500/40 underline-offset-8">
            Shop-Floor Sales Pipeline?
          </span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Stop losing margin on unbilled engineering revisions and blind delivery dates. Schedule a 20-minute tailored walkthrough using your actual machine rates and part blueprints.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button
            variant="primary"
            size="lg"
            onClick={() => setDemoOpen(true)}
            icon={<Calendar className="w-4 h-4" />}
          >
            Schedule 20-Min Live Demo
          </Button>

          <Button
            variant="outline"
            size="lg"
            href="/features"
            className="text-slate-100 border-slate-700 hover:bg-slate-900"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Review Technical Modules
          </Button>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Strict NDA Protection for All Blueprints</span>
          </div>
          <div className="flex items-center gap-1.5">
            <PhoneCall className="w-4 h-4 text-amber-400" />
            <span>Direct Engineering Support (Pune / Gurgaon)</span>
          </div>
        </div>
      </div>

      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}
