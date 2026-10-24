"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FOOTER_SECTIONS } from "@/data/navigation";
import { CheckCircle2, ArrowRight, ShieldCheck, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid engineering email");
      return;
    }
    setError("");
    setSubscribed(true);
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 transition-colors">
      {/* Top Banner / Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold">
                Quarterly Shop-Floor Benchmark Report
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-slate-100 tracking-tight">
              Machine Hourly Rates & Metal Margin Insights (2026 Edition)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Join 1,400+ plant heads and sales engineers receiving our verified benchmarks for CNC cycle times, scrap recovery, and procurement trends.
            </p>
          </div>

          <div className="w-full lg:w-auto shrink-0">
            {subscribed ? (
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-semibold p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <CheckCircle2 className="w-5 h-5" />
                <span>Subscribed! Check your inbox for the 2026 Benchmark PDF.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 max-w-md w-full" noValidate>
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="planthead@company.com"
                    aria-label="Work Email Address"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 text-sm placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                  {error && <p className="text-xs text-rose-500 mt-1">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 flex items-center justify-center gap-1.5 shrink-0 cursor-pointer shadow-sm"
                >
                  <span>Get Report</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200 dark:border-slate-800/60">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Info Column */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-700 p-0.5 shadow-sm">
                <div className="w-full h-full rounded-[6px] bg-slate-950 flex items-center justify-center font-mono font-black text-amber-400 text-sm">
                  KF
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-950 dark:text-slate-100">
                Kanchan<span className="text-amber-500">Flow</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              KanchanFlow is the unified shop-floor sales CRM engineered specifically for custom fabrication, precision CNC machining, and OEM suppliers. Eliminate spreadsheet bottlenecks and unbilled engineering revisions.
            </p>

            <div className="space-y-2 text-xs text-slate-500 dark:text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Manufacturing Hub Office: Bhosari MIDC, Pune 411026</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Engineering Desk: +91 20 6820 4400</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>rfq-support@kanchanflow.com</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>ISO 9001:2015 Audit Compliant Architecture</span>
            </div>
          </div>

          {/* Nav Section Columns */}
          {FOOTER_SECTIONS.slice(0, 3).map((col) => (
            <div key={col.title} className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-950 dark:text-slate-100">
                {col.title}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar: Copyright & Socials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-slate-200 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <p>
          © 2026 KanchanFlow Systems Inc. (kanchanflow.com). All rights reserved. Built for precision manufacturing.
        </p>

        <div className="flex items-center gap-6">
          <Link href="/features#security" className="hover:text-amber-500 transition-colors">
            Data Security & IP
          </Link>
          <Link href="/pricing" className="hover:text-amber-500 transition-colors">
            Terms of Service
          </Link>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500 transition-colors"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500 transition-colors"
            aria-label="Twitter"
          >
            Twitter / X
          </a>
        </div>
      </div>
    </footer>
  );
}
