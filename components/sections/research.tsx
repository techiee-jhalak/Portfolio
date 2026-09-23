"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/container";
import { researchData, type ResearchItem } from "@/data/research";

/**
 * Research Section — Final Visual Rebuild
 *
 * Warm Cream (#F1E9DF) light editorial section with subtle architectural grid.
 * Printed research archive index styling with black typography, thin dark dividers, and zero cards.
 */
export function Research() {
  return (
    <section
      id="research"
      data-section
      aria-label="Research Publications & Inquiries"
      className="relative bg-[#F1E8E0] text-[#111111] editorial-grid-light border-b border-[rgba(17,17,17,0.12)] py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      <Container size="wide">
        {/* ── 1. Section Index ─────────────────────────────────────────── */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <span className="font-mono text-[10px] font-semibold tracking-widest text-[#111111] uppercase">
            05
          </span>
          <span className="h-[1px] w-8 bg-[#111111]/30" aria-hidden="true" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D]">
            RESEARCH & INQUIRY
          </span>
        </div>

        {/* ── 2. Oversized Heading ──────────────────────────────────────── */}
        <div className="mb-16 sm:mb-20 lg:mb-24 overflow-hidden">
          <h2
            className="font-display font-bold uppercase text-[#111111] leading-none tracking-tighter"
            style={{
              fontSize: "clamp(4.25rem, 16vw, 14.5rem)",
              lineHeight: "0.85",
            }}
          >
            RESEARCH
          </h2>
        </div>

        {/* ── 3. Opening Editorial Rule ─────────────────────────────────── */}
        <div className="flex items-center gap-4 mb-0 border-t border-[rgba(17,17,17,0.14)] pt-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D] select-none">
            {researchData.length} VERIFIED RESEARCH TOPICS
          </span>
          <span className="h-[1px] flex-1 bg-[rgba(17,17,17,0.10)]" aria-hidden="true" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D] select-none hidden sm:inline">
            ZERO-KNOWLEDGE · CODE-MIXED NLP · PREDICTIVE ML
          </span>
        </div>

        {/* ── 4. Printed Editorial Archive Index ────────────────────────── */}
        <div className="divide-y divide-[rgba(17,17,17,0.12)]">
          {researchData.map((item, index) => (
            <ResearchEntry
              key={item.number}
              item={item}
              isLast={index === researchData.length - 1}
            />
          ))}
        </div>

        {/* ── 5. Closing Annotation Strip ───────────────────────────────── */}
        <div className="mt-16 sm:mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(17,17,17,0.12)] pt-8">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#77736D] select-none">
            ACADEMIC INQUIRY: ALGORITHMIC RIGOR · STATISTICAL SIGNIFICANCE · REPRODUCIBILITY
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#77736D] select-none">
            ARCHIVE // 2026
          </span>
        </div>
      </Container>
    </section>
  );
}

function ResearchEntry({
  item,
}: {
  item: ResearchItem;
  isLast: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="group relative py-12 sm:py-16 lg:py-20 transition-colors duration-200">
      {/* Subtle black underline expanding on hover */}
      <div
        className="absolute bottom-[-1px] left-0 h-[1px] w-0 bg-[#111111] transition-all duration-500 ease-out group-hover:w-full"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-12 items-start">
        {/* Left: Article Index */}
        <div className="lg:col-span-2 flex items-baseline gap-4">
          <span className="font-mono text-sm tracking-widest text-[#77736D] tabular-nums font-semibold group-hover:text-[#111111] transition-colors duration-150">
            {item.number}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D]/60 sm:hidden">
            {"//"} RESEARCH ARCHIVE
          </span>
        </div>

        {/* Center: Title & Description */}
        <div className="lg:col-span-7 space-y-4">
          {/* Metadata label */}
          <div className="font-mono text-[10px] uppercase tracking-widest text-[#77736D] transition-colors duration-150 group-hover:text-[#111111]">
            {item.researchArea}
          </div>

          {/* Large title */}
          <h3
            className="font-display font-semibold uppercase text-[#111111] leading-[1.08] transition-transform duration-200 group-hover:translate-x-1"
            style={{
              fontSize: "clamp(1.4rem, 3.2vw, 2.75rem)",
              letterSpacing: "-0.025em",
            }}
          >
            {item.title}
          </h3>

          {/* Short description */}
          <p className="font-mono text-xs sm:text-[13px] text-[#77736D] leading-relaxed max-w-2xl pt-1">
            {item.description}
          </p>

          {/* Expandable methodology tags */}
          {isExpanded && item.technologies.length > 0 && (
            <div className="pt-3 border-t border-[rgba(17,17,17,0.10)] flex flex-wrap gap-x-4 gap-y-1.5 animate-in fade-in duration-200">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D] select-none">
                DOMAINS:
              </span>
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] uppercase tracking-wider text-[#111111]"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Right: Interaction Trigger */}
        <div className="lg:col-span-3 flex lg:justify-end items-start pt-2">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            className="group/btn inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#111111] border-b border-[#111111]/40 pb-0.5 hover:border-[#111111] transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#111111]"
          >
            <span>{isExpanded ? "COLLAPSE" : "READ / DETAILS"}</span>
            <span
              className={`transition-transform duration-150 ${
                isExpanded ? "rotate-180" : "group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              }`}
              aria-hidden="true"
            >
              {isExpanded ? "↑" : "↗"}
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}
