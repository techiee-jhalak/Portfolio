"use client";

import React from "react";
import { Container } from "@/components/layout/container";
import { journeyData } from "@/data/experience";
import {
  openSourcePrograms,
  editorialAchievements,
} from "@/data/achievements";

/**
 * Journey Section — Specification Compliant
 *
 * Deep Black (#0A0A0A) section with gold (#C6B37E) accents.
 */
export function Journey() {
  return (
    <section
      id="journey"
      data-section
      aria-label="Experience, Academic Progression & Open Source"
      className="relative bg-[#0A0A0A] text-[#F5F2ED] editorial-grid-dark border-b border-[rgba(245,242,237,0.10)] py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      <Container size="wide">
        {/* ── 1. Section Index ─────────────────────────────────────────── */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <span className="font-mono text-[10px] font-semibold tracking-widest text-[#C6B37E] uppercase">
            06
          </span>
          <span className="h-[1px] w-8 bg-[rgba(245,242,237,0.2)]" aria-hidden="true" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D]">
            EXPERIENCE & PROGRESSION
          </span>
        </div>

        {/* ── 2. Oversized Heading ──────────────────────────────────────── */}
        <div className="mb-16 sm:mb-20 lg:mb-24 overflow-hidden">
          <h2
            className="font-display font-bold uppercase text-[#F5F2ED] leading-none tracking-tighter"
            style={{
              fontSize: "clamp(4.25rem, 16vw, 14.5rem)",
              lineHeight: "0.85",
            }}
          >
            JOURNEY
          </h2>
        </div>

        {/* ── 3. Opening Editorial Header ───────────────────────────────── */}
        <div className="flex items-center gap-4 mb-0 border-t border-[rgba(245,242,237,0.12)] pt-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D] select-none">
            CHRONOLOGY
          </span>
          <span className="h-[1px] flex-1 bg-[rgba(245,242,237,0.08)]" aria-hidden="true" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D] select-none hidden sm:inline">
            APPOINTMENTS · ACADEMIA · OPEN SOURCE
          </span>
        </div>

        {/* ── 4. Editorial Chronology ──────────────────────────────────── */}
        <div className="divide-y divide-[rgba(245,242,237,0.10)]">
          {journeyData.map((item, index) => (
            <article
              key={`${item.period}-${item.role}`}
              className="group relative py-12 sm:py-16 lg:py-20 transition-colors duration-200"
            >
              <div
                className="absolute bottom-[-1px] left-0 h-[1px] w-0 bg-[#C6B37E]/60 transition-all duration-500 ease-out group-hover:w-full"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-12 items-start">
                <div className="lg:col-span-5 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] tracking-widest text-[#C6B37E] uppercase font-medium">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-[1px] w-4 bg-[rgba(245,242,237,0.2)]" aria-hidden="true" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D]">
                      {item.type === "experience" ? "APPOINTMENT" : "ACADEMIC FOUNDATION"}
                    </span>
                  </div>

                  <div
                    className="font-display font-bold uppercase text-[#F5F2ED] leading-none tracking-tighter"
                    style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.75rem)" }}
                  >
                    {item.period}
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-semibold uppercase text-[#F5F2ED] tracking-tight group-hover:text-[#C6B37E] transition-colors duration-150">
                    {item.organization}
                  </h3>

                  {item.location && (
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#77736D]">
                      {item.location}
                    </p>
                  )}
                </div>

                <div className="lg:col-span-7 space-y-4 lg:pt-3">
                  <h4 className="font-mono text-sm sm:text-base font-semibold uppercase tracking-wider text-[#F5F2ED]">
                    {item.role}
                  </h4>

                  <p className="font-mono text-xs sm:text-[13px] text-[#77736D] leading-relaxed max-w-xl">
                    {item.description}
                  </p>

                  {item.details && item.details.length > 0 && (
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-2">
                      {item.details.map((detail) => (
                        <span
                          key={detail}
                          className="font-mono text-[10px] uppercase tracking-widest text-[#77736D]"
                        >
                          {"//"}  {detail}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── 5. Open Source ─────────────────────────────────────────────── */}
        <div className="mt-20 sm:mt-28 lg:mt-32 pt-12 border-t border-[rgba(245,242,237,0.12)]">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D] select-none">
              OPEN SOURCE CONTRIBUTIONS
            </span>
            <span className="h-[1px] flex-1 bg-[rgba(245,242,237,0.08)]" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D] select-none hidden sm:inline">
              PROGRAM ARCHIVE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {openSourcePrograms.map((program) => (
              <div
                key={program.code}
                className="group relative border-l border-[rgba(245,242,237,0.15)] pl-5 py-2 hover:border-[#C6B37E] transition-colors duration-200"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#C6B37E] font-medium mb-1">
                  {program.role}
                </div>
                <div className="font-display text-xl sm:text-2xl font-bold uppercase text-[#F5F2ED] tracking-tight group-hover:text-[#C6B37E] transition-colors duration-150">
                  {program.code}
                </div>
                <p className="font-mono text-[11px] text-[#77736D] tracking-wide mt-1">
                  {program.name}
                </p>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#77736D]/70 block mt-2">
                  {program.period} {"//"}  VERIFIED
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 6. Milestones ─────────────────────────────────────────────── */}
        <div className="mt-20 sm:mt-28 lg:mt-32 pt-12 border-t border-[rgba(245,242,237,0.12)]">
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D] select-none">
              MILESTONES & RECOGNITION
            </span>
            <span className="h-[1px] flex-1 bg-[rgba(245,242,237,0.08)]" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D] select-none hidden sm:inline">
              VERIFIED RECORD
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {editorialAchievements.map((item) => (
              <div key={`${item.line1}-${item.line2}`} className="space-y-2">
                <div
                  className="font-display font-bold uppercase text-[#F5F2ED] leading-none tracking-tighter"
                  style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
                >
                  {item.stat}
                </div>
                <div className="border-t border-[rgba(245,242,237,0.12)] pt-2">
                  <div className="font-mono text-xs uppercase tracking-wider text-[#C6B37E] font-semibold leading-tight">
                    {item.line1}
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#77736D] leading-tight">
                    {item.line2}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
