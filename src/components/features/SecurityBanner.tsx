import React from "react";
import { ShieldCheck, Lock, Database, Server, FileCode, CheckCircle } from "lucide-react";
import Badge from "@/components/common/Badge";

export default function SecurityBanner() {
  const securityItems = [
    {
      title: "256-Bit Blueprint Encryption",
      desc: "All 2D PDF blueprints and 3D CAD/STEP models are encrypted at rest with AES-256 and transmitted via TLS 1.3.",
      icon: <Lock className="w-5 h-5 text-amber-500" />,
    },
    {
      title: "Strict IP & Watermarking",
      desc: "Exported drawings carry traceable dynamic watermarks with company name, user ID, and timestamp to prevent IP leakage.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
    },
    {
      title: "ISO 9001 & IATF 16949 Audit Trail",
      desc: "Every blueprint revision, quotation sign-off, and machine traveler scan is permanently recorded in an immutable audit log.",
      icon: <Database className="w-5 h-5 text-cyan-500" />,
    },
    {
      title: "Offline Edge Deployment Option",
      desc: "For defense, aerospace, or air-gapped shop floors, KanchanFlow provides an on-premise local edge synchronizer agent.",
      icon: <Server className="w-5 h-5 text-purple-500" />,
    },
  ];

  return (
    <section id="security" className="py-20 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="green" size="md">
            ENTERPRISE SECURITY & IP GOVERNANCE
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-slate-100">
            Your Customer Blueprints & Machine Rates Are Sacred
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Manufacturing plants trust us with multi-crore proprietary engineering drawings. Here is how we ensure zero IP leakage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {securityItems.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
            >
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 w-fit">
                {item.icon}
              </div>
              <h3 className="font-bold text-base text-slate-950 dark:text-slate-100">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
