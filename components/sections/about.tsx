import React from "react";
import { Container } from "@/components/layout/container";
import { profileData } from "@/data/profile";

/**
 * About Section — Specification Compliant
 *
 * Deep Black (#0A0A0A) dark editorial spread with gold accents.
 */
export function About() {
  const { about } = profileData;

  return (
    <section
      id="about"
      data-section
      aria-label="About & Identity"
      className="relative bg-[#0A0A0A] text-[#F5F2ED] editorial-grid-dark border-b border-[rgba(245,242,237,0.10)] py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      <Container size="wide">
        {/* ── 1. Section Index ─────────────────────────────────────────── */}
        <div className="flex items-center gap-3 mb-14 sm:mb-20">
          <span className="font-mono text-[10px] font-semibold tracking-widest text-[#C6B37E] uppercase">
            02
          </span>
          <span className="h-[1px] w-8 bg-[rgba(245,242,237,0.2)]" aria-hidden="true" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D]">
            ABOUT & IDENTITY
          </span>
        </div>

        {/* ── 2. Primary Typographic Statement ─────────────────────────── */}
        <div className="mb-16 sm:mb-22 lg:mb-28">
          <h2
            aria-label="I build at the intersection of AI, software and research."
            className="font-display font-bold uppercase leading-[0.88] tracking-tight"
            style={{
              fontSize: "clamp(2.75rem, 7.5vw, 6.75rem)",
            }}
          >
            <span className="block text-[#F5F2ED]">I BUILD AT THE</span>
            <span className="block sm:pl-[6vw] text-[#E3DEDB]">
              INTERSECTION OF
            </span>
            <span className="block text-[#F5F2ED]">
              AI, SOFTWARE
              <span className="text-[#C6B37E]" aria-hidden="true"> &</span>
            </span>
            <span className="block text-[#77736D]">RESEARCH.</span>
          </h2>
        </div>

        {/* ── 3. Asymmetric Content Area ───────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-14 lg:gap-x-16 items-start">
          {/* Main editorial narrative — 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <div className="h-[1px] w-12 bg-[#C6B37E]" aria-hidden="true" />

            <p className="font-display text-lg sm:text-xl text-[#F5F2ED] leading-relaxed max-w-2xl font-normal">
              {about.leadParagraph}
            </p>
            <p className="font-mono text-xs sm:text-[13px] text-[#77736D] leading-relaxed max-w-2xl">
              {about.secondaryParagraph}
            </p>
          </div>

          {/* Right: Focus areas list — 5 cols */}
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-0 lg:pt-2">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#77736D] mb-4">
                CORE DOMAINS & INQUIRY
              </p>
              <ul className="divide-y divide-[rgba(245,242,237,0.10)]" aria-label="Areas of focus">
                {about.focusAreas.map((area) => (
                  <li key={area.number} className="group py-3.5 flex items-start gap-4">
                    <span className="font-mono text-[10px] text-[#C6B37E] mt-0.5 tabular-nums shrink-0 w-5">
                      {area.number}
                    </span>
                    <div className="space-y-1">
                      <p className="font-display text-sm font-semibold uppercase tracking-wide text-[#F5F2ED] group-hover:text-[#C6B37E] transition-colors duration-100">
                        {area.title}
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-[#77736D] leading-normal">
                        {area.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── 4. Full-width Rule ───────────────────────────────────────── */}
        <div className="h-[1px] w-full bg-[rgba(245,242,237,0.10)] mt-20 sm:mt-24 mb-16 sm:mb-20" aria-hidden="true" />

        {/* ── 5. Identity Strip ────────────────────────────────────────── */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4">
            <div className="space-y-1.5">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#77736D]">
                NAME
              </p>
              <p className="font-display text-sm font-semibold uppercase tracking-wide text-[#F5F2ED]">
                {profileData.name}
              </p>
            </div>

            <div className="space-y-1.5">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#77736D]">
                DISCIPLINE
              </p>
              <p className="font-display text-sm font-semibold uppercase tracking-wide text-[#F5F2ED]">
                Computer Science
              </p>
            </div>

            <div className="space-y-1.5">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#77736D]">
                SPECIALISATION
              </p>
              <p className="font-display text-sm font-semibold uppercase tracking-wide text-[#F5F2ED]">
                AI / ML Systems
              </p>
            </div>

            <div className="space-y-1.5">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#77736D]">
                LOCATION
              </p>
              <p className="font-display text-sm font-semibold uppercase tracking-wide text-[#F5F2ED]">
                Greater Lucknow Area
                <span className="block font-mono text-[10px] font-normal text-[#77736D] normal-case tracking-normal">
                  Uttar Pradesh, India
                </span>
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-widest text-[#77736D] select-none">
            {profileData.focus.map((item, i) => (
              <React.Fragment key={item}>
                <span>{item}</span>
                {i < profileData.focus.length - 1 && (
                  <span aria-hidden="true" className="text-[#C6B37E]/40">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
