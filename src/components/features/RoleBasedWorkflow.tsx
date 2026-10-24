"use client";

import React, { useState } from "react";
import { UserCheck, Wrench, Briefcase, CheckCircle2 } from "lucide-react";
import Badge from "@/components/common/Badge";

export default function RoleBasedWorkflow() {
  const [activeRole, setActiveRole] = useState<"sales" | "floor" | "owner">("sales");

  const roles = [
    {
      id: "sales",
      title: "Estimating & Sales Engineers",
      icon: <Briefcase className="w-5 h-5" />,
      responsibilities: "RFQ ingestion, 2D/3D blueprint cycle calculation, customer quotation submission, margin negotiation.",
      tools: [
        "Instant cycle time estimator for milling, turning, and laser cutting",
        "Live metal spot price indexing with swarf recovery deductions",
        "Watermarked PDF quotation generator with automated revision tracking",
        "Machine capacity visibility to quote realistic, achievable delivery lead times",
      ],
      quote: "“I used to spend 3 hours per RFQ looking up raw material prices and guessing machining times. Now I send detailed, professional quotes in 18 minutes.”",
      author: "Vikas Patil, Senior Estimating Engineer · Pune Machining Works",
    },
    {
      id: "floor",
      title: "Shop Floor Leads & Machinists",
      icon: <Wrench className="w-5 h-5" />,
      responsibilities: "Work order execution, traveler QR scanning, tool wear reporting, shift handover, in-process QA checks.",
      tools: [
        "Rugged mobile interface with high-contrast buttons for gloved operation",
        "Camera barcode and QR traveler scanner with immediate revision validation",
        "One-tap machine idle reason logging (e.g., waiting for material, tooling change)",
        "Instant photo upload for dimensional non-conformance and CMM reports",
      ],
      quote: "“Operators never cut superseded drawings anymore. The traveler barcode tells them instantly if a revision has arrived.”",
      author: "Sunil Kadam, Floor Supervisor (28 CNC Machines) · Bhosari MIDC",
    },
    {
      id: "owner",
      title: "Plant Owners & Managing Directors",
      icon: <UserCheck className="w-5 h-5" />,
      responsibilities: "Strategic capacity planning, realized gross margin auditing, customer profitability analysis, cash flow.",
      tools: [
        "Realized Gross Margin per CNC / Press machine hour dashboard",
        "Customer profitability matrix uncovering accounts with excessive unbilled scrap",
        "Two-way synchronization with Tally Prime for e-invoicing and ledger updates",
        "Automated WhatsApp dispatch proof preventing delayed customer payments",
      ],
      quote: "“We uncovered ₹8.4 lakhs in unbilled machining revisions in our first quarter on KanchanFlow. It pays for itself ten times over.”",
      author: "Mahesh Agarwal, Managing Director · Precision Alloy Components",
    },
  ];

  const currentRole = roles.find((r) => r.id === activeRole) || roles[0];

  return (
    <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="gold" size="md">
            ROLE-BASED WORKFLOWS
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-slate-100">
            One Unified Console. Tailored Views for Every Stakeholder.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            See how KanchanFlow delivers value across your commercial office, your plant floor, and the executive boardroom.
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {roles.map((role) => (
            <button
              key={role.id}
              type="button"
              onClick={() => setActiveRole(role.id as any)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer ${
                activeRole === role.id
                  ? "bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              <span>{role.icon}</span>
              <span>{role.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Role Card */}
        <div className="rounded-2xl p-6 sm:p-10 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl max-w-4xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block">
                TARGET PERSPECTIVE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-slate-100 mt-0.5">
                {currentRole.title}
              </h3>
            </div>
            <Badge variant="gold" size="sm">
              ROLE-BASED PERMISSIONS
            </Badge>
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Key Focus:</strong> {currentRole.responsibilities}
          </p>

          <div className="space-y-2.5 pt-1">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block">
              Core Capabilities in KanchanFlow:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {currentRole.tools.map((tool, i) => (
                <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-slate-800 dark:text-slate-200 italic space-y-1">
            <p>{currentRole.quote}</p>
            <span className="not-italic text-xs font-mono text-amber-700 dark:text-amber-400 font-bold block pt-1">
              — {currentRole.author}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
