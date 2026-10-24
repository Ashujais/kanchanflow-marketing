import React from "react";
import Link from "next/link";
import {
  FileSpreadsheet,
  Layers,
  GitMerge,
  MessageSquare,
  BarChart3,
  Smartphone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { CORE_FEATURES } from "@/data/features";
import Badge from "@/components/common/Badge";

export default function FeatureGrid() {
  const iconMap: Record<string, React.ReactNode> = {
    FileSpreadsheet: <FileSpreadsheet className="w-6 h-6 text-amber-500" />,
    Layers: <Layers className="w-6 h-6 text-amber-500" />,
    GitMerge: <GitMerge className="w-6 h-6 text-amber-500" />,
    MessageSquare: <MessageSquare className="w-6 h-6 text-amber-500" />,
    BarChart3: <BarChart3 className="w-6 h-6 text-amber-500" />,
    Smartphone: <Smartphone className="w-6 h-6 text-amber-500" />,
  };

  return (
    <section id="modules" className="py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="gold" size="md">
            END-TO-END SHOP-FLOOR SUITE
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-slate-100">
            6 Specialized Modules Built for Precision Manufacturing
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Every feature is designed around physical machining realities—raw material scrap factor, cycle times, subcontract job work, and WhatsApp dispatch proofs.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CORE_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="rounded-2xl p-6 sm:p-7 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm group-hover:scale-105 transition-transform">
                    {iconMap[feature.iconName] || <Layers className="w-6 h-6 text-amber-500" />}
                  </div>
                  <Badge variant="gold" size="sm">
                    {feature.badge}
                  </Badge>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-amber-700 dark:text-amber-400/90 mt-1">
                    {feature.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300">
                  {feature.highlights.slice(0, 3).map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Footer: Metric & Link */}
              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    {feature.metrics.label}
                  </span>
                  <span className="font-mono font-bold text-sm text-amber-700 dark:text-amber-400">
                    {feature.metrics.value}
                  </span>
                </div>

                <Link
                  href={`/features#${feature.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors group-hover:translate-x-1 duration-150"
                  aria-label={`Explore technical specifications for ${feature.title}`}
                >
                  <span>Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Features CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 font-bold text-sm text-amber-700 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition-colors"
          >
            <span>Compare all 6 modules against legacy ERP systems</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
