import React from "react";
import Link from "next/link";
import { ChevronRight, ArrowDown, Shield, Cpu, Layers } from "lucide-react";
import Badge from "@/components/common/Badge";

export default function FeaturesHero() {
  const jumpLinks = [
    { label: "Quote Engine", href: "#quote-engine" },
    { label: "Multi-Level BOM", href: "#bom" },
    { label: "Shop Pipeline", href: "#pipeline" },
    { label: "WhatsApp Sync", href: "#whatsapp" },
    { label: "Comparison Table", href: "#comparison" },
    { label: "Security & IP", href: "#security" },
  ];

  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 industrial-grid transition-colors">
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
              Features & Architecture
            </li>
          </ol>
        </nav>

        <div className="max-w-4xl space-y-6">
          <Badge variant="gold" size="md">
            ARCHITECTURE SPECIFICATIONS · 2026 RELEASE
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-slate-100 leading-tight">
            Engineered from the Shop Floor Up,{" "}
            <span className="text-amber-600 dark:text-amber-400">
              Not from a Silicon Valley Whiteboard
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
            Explore every module crafted for custom job shop owners, estimating engineers, and floor supervisors. Built specifically for high-mix, low-to-medium volume contract manufacturing.
          </p>

          {/* Jump Links Pill Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold mr-1">
              Quick Jump:
            </span>
            {jumpLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-amber-500 hover:text-amber-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
