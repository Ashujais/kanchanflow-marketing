import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "slate" | "green" | "cyan" | "rose";
  size?: "sm" | "md";
  className?: string;
  dot?: boolean;
}

export default function Badge({
  children,
  variant = "gold",
  size = "sm",
  className = "",
  dot = false,
}: BadgeProps) {
  const sizeStyles = {
    sm: "px-2 py-0.5 text-[11px] font-mono tracking-wider uppercase",
    md: "px-2.5 py-1 text-xs font-mono tracking-wider uppercase",
  };

  const variantStyles = {
    gold: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30",
    slate: "bg-slate-200 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700",
    green: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30",
    cyan: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30",
    rose: "bg-rose-500/10 text-rose-700 dark:text-rose-400 border border-rose-500/30",
  };

  const dotColors = {
    gold: "bg-amber-500",
    slate: "bg-slate-400",
    green: "bg-emerald-500 animate-pulse",
    cyan: "bg-cyan-500",
    rose: "bg-rose-500",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md font-semibold select-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]}`} />}
      {children}
    </span>
  );
}
