"use client";

import React from "react";

interface CircularBadgeProps {
  text?: string;
  centerText?: string;
  theme?: "dark" | "light";
  size?: number;
  className?: string;
  onClick?: () => void;
  href?: string;
}

/**
 * Circular Interactive Editorial Badge — Specification Compliant
 *
 * SVG textPath ring rotates at ~22s per revolution.
 * Center arrow (↗) does NOT rotate — it stays fixed.
 * Gold (#C6B37E) accent on hover.
 */
export function CircularBadge({
  text = "LET'S WORK TOGETHER • AI / ML • JHALAK OMAR • ",
  centerText = "↗",
  theme = "dark",
  size = 112,
  className = "",
  onClick,
  href,
}: CircularBadgeProps) {
  const isDark = theme === "dark";
  const textColor = isDark ? "#111111" : "#F5F2ED";
  const borderColor = isDark ? "rgba(17, 17, 17, 0.2)" : "rgba(245, 242, 237, 0.2)";
  const arrowColor = isDark ? "#111111" : "#F5F2ED";

  // Unique ID for the SVG path
  const pathId = `badge-path-${text.slice(0, 10).replace(/[^a-zA-Z]/g, "")}`;

  const content = (
    <div
      className={`relative inline-flex items-center justify-center select-none group/badge transition-transform duration-300 hover:scale-105 ${className}`}
      style={{ width: size, height: size }}
      onClick={onClick}
    >
      {/* Rotating outer SVG ring with text — ONLY the text ring rotates */}
      <svg
        className="absolute inset-0 w-full h-full animate-slow-spin"
        viewBox="0 0 120 120"
        aria-hidden="true"
      >
        <defs>
          <path
            id={pathId}
            d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
          />
        </defs>
        <text
          fill={textColor}
          fontSize="9.5"
          fontFamily="var(--font-mono), monospace"
          fontWeight="500"
          letterSpacing="0.14em"
          className="uppercase"
        >
          <textPath href={`#${pathId}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Center circle + arrow — does NOT rotate (separate from spinning SVG) */}
      <div
        className="relative z-10 flex items-center justify-center rounded-full transition-colors duration-200 group-hover/badge:border-[#C6B37E]"
        style={{
          width: size * 0.44,
          height: size * 0.44,
          border: `1px solid ${borderColor}`,
        }}
      >
        <span
          className="font-mono text-base font-semibold transition-transform duration-200 group-hover/badge:translate-x-0.5 group-hover/badge:-translate-y-0.5"
          style={{ color: arrowColor }}
        >
          {centerText}
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} aria-label={text} className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6B37E]">
        {content}
      </a>
    );
  }

  return content;
}
