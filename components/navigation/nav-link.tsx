"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface NavLinkProps {
  href: string;
  index?: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  variant?: "desktop" | "mobile";
  theme?: "light" | "dark";
}

/**
 * Editorial NavLink — Adapts dynamically across Cream (#F1E9DF) and Black (#080808) surfaces.
 */
export function NavLink({
  href,
  index,
  label,
  isActive = false,
  onClick,
  className,
  variant = "desktop",
  theme = "dark",
}: NavLinkProps) {
  const isLight = theme === "light";

  if (variant === "mobile") {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          "group flex items-start gap-5 py-4 border-b focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#111111]",
          isLight
            ? "border-[rgba(17,17,17,0.12)]"
            : "border-[rgba(245,242,237,0.10)]",
          className
        )}
      >
        {index && (
          <span
            className={cn(
              "font-mono text-[11px] tracking-widest mt-1.5 w-6 shrink-0",
              isLight ? "text-[#77736D]" : "text-[#77736D]"
            )}
          >
            {index}
          </span>
        )}
        <span
          className={cn(
            "font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight transition-colors duration-150",
            isActive
              ? isLight ? "text-[#111111] underline underline-offset-4 decoration-1" : "text-[#C6B37E]"
              : isLight ? "text-[#111111]/80 group-hover:text-[#111111]" : "text-[#F5F2ED]/80 group-hover:text-[#F5F2ED]"
          )}
        >
          {label}
        </span>
      </Link>
    );
  }

  // Desktop variant
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group relative flex items-center gap-1.5 font-display text-[13px] font-medium tracking-wide uppercase transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent",
        isActive
          ? isLight ? "text-[#111111] font-semibold" : "text-[#F5F2ED] font-semibold"
          : isLight ? "text-[#77736D] hover:text-[#111111]" : "text-[#77736D] hover:text-[#F5F2ED]",
        className
      )}
    >
      {isActive && (
        <span
          aria-hidden="true"
          className={cn(
            "absolute -left-2.5 top-1/2 -translate-y-1/2 h-1 w-1 rounded-full",
            isLight ? "bg-[#111111]" : "bg-[#C6B37E]"
          )}
        />
      )}
      {label}
    </Link>
  );
}
