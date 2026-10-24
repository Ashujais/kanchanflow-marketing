"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Factory, Calendar, ShieldCheck } from "lucide-react";
import Button from "@/components/common/Button";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phone: "",
    companyName: "",
    plantLocation: "",
    processType: "CNC Machining",
    machineCount: "10-25 machines",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setIsSubmitted(false);
      setErrors({});
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) nextErrors.fullName = "Full name is required";
    if (!formData.workEmail.trim()) {
      nextErrors.workEmail = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      nextErrors.workEmail = "Please enter a valid work email address";
    }
    if (!formData.phone.trim()) {
      nextErrors.phone = "Phone number is required";
    } else if (formData.phone.replace(/\D/g, "").length < 10) {
      nextErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (!formData.companyName.trim()) nextErrors.companyName = "Company or plant name is required";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 text-slate-100 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="inline-flex p-3 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h3 id="modal-title" className="text-2xl font-bold text-slate-100">
              Walkthrough Scheduled!
            </h3>
            <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
              Thank you, <strong className="text-amber-400">{formData.fullName}</strong>. A KanchanFlow manufacturing solutions engineer will call you at <strong className="text-amber-400">{formData.phone}</strong> within 4 business hours to configure your plant sandboxed demo.
            </p>
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 text-left text-xs space-y-1.5 text-slate-300">
              <div className="font-semibold text-slate-100 uppercase tracking-wider text-[11px] text-amber-400">
                Next Steps (Zero Preparation Needed):
              </div>
              <p>• Have 1 sample 2D PDF or 3D STEP drawing ready to run through live estimation.</p>
              <p>• We will show your actual cycle time and margin calculation on your screen.</p>
            </div>
            <div className="pt-4">
              <Button onClick={onClose} variant="primary" size="md">
                Done & Return to Site
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30">
                <Factory className="w-4 h-4" />
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                Personalized Plant Walkthrough
              </span>
            </div>
            <h2 id="modal-title" className="text-2xl font-bold text-slate-100 tracking-tight">
              See KanchanFlow on Your Drawings
            </h2>
            <p className="text-slate-400 text-sm mt-1 mb-6">
              Spend 20 minutes with a manufacturing engineer. We will calculate live cycle times, scrap recovery, and BOM margins for your shop.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-medium text-slate-300 mb-1">
                    Your Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Anand Deshmukh"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-700 bg-slate-800/80 text-slate-100 placeholder-slate-500 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                  />
                  {errors.fullName && <p className="text-xs text-rose-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="companyName" className="block text-xs font-medium text-slate-300 mb-1">
                    Plant / Company Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Apex Precision Tech"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-700 bg-slate-800/80 text-slate-100 placeholder-slate-500 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                  />
                  {errors.companyName && <p className="text-xs text-rose-400 mt-1">{errors.companyName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="workEmail" className="block text-xs font-medium text-slate-300 mb-1">
                    Work Email <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="workEmail"
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="anand@apexprecision.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-700 bg-slate-800/80 text-slate-100 placeholder-slate-500 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                  />
                  {errors.workEmail && <p className="text-xs text-rose-400 mt-1">{errors.workEmail}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-slate-300 mb-1">
                    Mobile Number (for WhatsApp) <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98220 00000"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-700 bg-slate-800/80 text-slate-100 placeholder-slate-500 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                  />
                  {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="processType" className="block text-xs font-medium text-slate-300 mb-1">
                    Primary Manufacturing Process
                  </label>
                  <select
                    id="processType"
                    value={formData.processType}
                    onChange={(e) => setFormData({ ...formData, processType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-700 bg-slate-800/80 text-slate-100 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                  >
                    <option value="CNC Machining">CNC Milling & Turning</option>
                    <option value="Sheet Metal">Sheet Metal & Laser Cutting</option>
                    <option value="Plastic Moulding">Plastic Moulding / Toolroom</option>
                    <option value="Auto Ancillary">Tier-2/3 Automotive Ancillary</option>
                    <option value="Heavy Fabrication">Heavy Fabrication & Pressure Vessels</option>
                    <option value="Electrical Panels">Electrical Panels & Switchgear</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="machineCount" className="block text-xs font-medium text-slate-300 mb-1">
                    Active Machine Capacity
                  </label>
                  <select
                    id="machineCount"
                    value={formData.machineCount}
                    onChange={(e) => setFormData({ ...formData, machineCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-700 bg-slate-800/80 text-slate-100 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                  >
                    <option value="1-5 machines">1 - 5 CNC / Workstations</option>
                    <option value="6-15 machines">6 - 15 Machines</option>
                    <option value="16-40 machines">16 - 40 Machines (Precision Plant)</option>
                    <option value="40+ machines">40+ Multi-bay Plant / Enterprise</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                  icon={<Calendar className="w-4 h-4" />}
                >
                  {isSubmitting ? "Securing Walkthrough Slot..." : "Confirm 20-Min Live Demo"}
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>NDA guaranteed · We never share your CAD/contact data · No credit card</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
