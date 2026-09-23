"use client";

import React, { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { getFeaturedProjects, type Project } from "@/data/projects";
import { useCursor } from "@/components/animations/cursor-context";
import { CircularBadge } from "@/components/ui/circular-badge";

const projects = getFeaturedProjects();

/* ── Ghost Text per Project ─────────────────────────────────────────────────── */
const GHOST_TEXT: Record<string, [string, string]> = {
  "synapkeep-ai": ["CHURN", "ANALYTICS"],
  "sentiment-intelligence": ["DYNAMIC", "FUSION"],
  "foundher-ai": ["FOUNDER", "VENTURE"],
  "mood-companion": ["AFFECTIVE", "EMPATHY"],
};

/* ── Marquee Items ──────────────────────────────────────────────────────────── */
const TECH_MARQUEE = [
  "PYTHON", "STREAMLIT", "TRANSFORMERS", "DISTILBERT", "VADER", "SCIKIT-LEARN", "PANDAS", "NEXT.JS",
  "PYTHON", "STREAMLIT", "TRANSFORMERS", "DISTILBERT", "VADER", "SCIKIT-LEARN", "PANDAS", "NEXT.JS",
];

const CATEGORY_MARQUEE = [
  "AI / ML RESEARCH", "NLP DUAL-MODEL", "CHURN INTELLIGENCE", "VENTURE PLATFORM", "AFFECTIVE SYSTEMS",
  "AI / ML RESEARCH", "NLP DUAL-MODEL", "CHURN INTELLIGENCE", "VENTURE PLATFORM", "AFFECTIVE SYSTEMS",
];

/**
 * Work / Selected Work Section — Premium Cyberpunk/Terminal Editorial Pass
 *
 * Card Anatomy:
 * Category badge & Index/Year → Title → One-line description → Tech-tag chips → Terminal mock-panel → CTA row (LIVE ↗, VIEW PROJECT →, GITHUB ↗)
 */
export function Projects() {
  const stackRef = useRef<HTMLDivElement>(null);

  // GSAP ScrollTrigger stacking enhancement — desktop only
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.innerWidth < 1024;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isMobile || prefersReduced) return;

    let gsapModule: typeof import("gsap") | null = null;
    let scrollTriggerModule: typeof import("gsap/ScrollTrigger") | null = null;

    const initGSAP = async () => {
      try {
        gsapModule = await import("gsap");
        scrollTriggerModule = await import("gsap/ScrollTrigger");
        const gsap = gsapModule.gsap;
        const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

        gsap.registerPlugin(ScrollTrigger);

        const cards = stackRef.current?.querySelectorAll("[data-project-card]");
        if (!cards || cards.length === 0) return;

        cards.forEach((card, i) => {
          if (i === 0) return;

          gsap.fromTo(
            card,
            { y: 50, opacity: 0.9 },
            {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 30%",
                scrub: 1,
              },
            }
          );
        });

        return () => ScrollTrigger.getAll().forEach((t) => t.kill());
      } catch {
        // Degrades gracefully to native CSS sticky
      }
    };

    initGSAP();
  }, []);

  return (
    <section
      id="work"
      data-section
      aria-label="Selected Work & Engineering Projects"
      className="relative bg-[#0A0A0A] text-[#F5F2ED] editorial-grid-dark border-b border-[rgba(245,242,237,0.10)] py-24 sm:py-32 lg:py-40 overflow-clip"
    >
      {/* SVG Goo filter for dripping effect */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="goo-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <Container size="wide">
        {/* ── 1. Section Index ─────────────────────────────────────────── */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <span className="font-mono text-[10px] font-semibold tracking-widest text-[#C6B37E] uppercase">
            04
          </span>
          <span className="h-[1px] w-8 bg-[rgba(245,242,237,0.2)]" aria-hidden="true" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D]">
            SELECTED WORK
          </span>
        </div>

        {/* ── 2. Tech Marquee #1 ───────────────────────────────────────── */}
        <div className="mb-8 overflow-hidden border-y border-[rgba(245,242,237,0.06)] py-3">
          <div className="marquee-track">
            {TECH_MARQUEE.map((item, i) => (
              <span
                key={`tech-${i}`}
                className="font-mono text-[11px] uppercase tracking-widest text-[#C6B37E] whitespace-nowrap mx-4"
              >
                {item} <span className="text-[#C6B37E]/30 mx-2">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── 3. Gigantic Gold WORK Heading with Drip Effect ───────────── */}
        <div className="mb-8 sm:mb-12 overflow-hidden relative">
          <div style={{ filter: "url(#goo-filter)" }}>
            <h2
              className="font-display font-bold uppercase leading-none tracking-tighter select-none"
              style={{
                fontSize: "clamp(6rem, 22vw, 20rem)",
                lineHeight: "0.82",
                color: "#C6B37E",
              }}
            >
              WORK
            </h2>

            {/* Dripping blobs hanging from letters */}
            <div className="relative" aria-hidden="true">
              {[
                { left: "8%", delay: "0s", duration: "3.5s" },
                { left: "22%", delay: "0.8s", duration: "4s" },
                { left: "42%", delay: "0.3s", duration: "3.2s" },
                { left: "55%", delay: "1.2s", duration: "3.8s" },
                { left: "70%", delay: "0.5s", duration: "4.2s" },
                { left: "85%", delay: "1.5s", duration: "3s" },
              ].map((blob, i) => (
                <div
                  key={i}
                  className="absolute drip-blob rounded-full bg-[#C6B37E]"
                  style={{
                    left: blob.left,
                    top: "-4px",
                    width: "8px",
                    height: "12px",
                    "--drip-delay": blob.delay,
                    "--drip-duration": blob.duration,
                  } as React.CSSProperties}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── 4. Category Marquee #2 ───────────────────────────────────── */}
        <div className="mb-16 sm:mb-20 lg:mb-24 overflow-hidden border-y border-[rgba(245,242,237,0.06)] py-3">
          <div className="marquee-track-fast">
            {CATEGORY_MARQUEE.map((item, i) => (
              <span
                key={`cat-${i}`}
                className="font-mono text-[11px] uppercase tracking-widest text-[#F5F2ED]/50 whitespace-nowrap mx-4"
              >
                {item} <span className="text-[#F5F2ED]/15 mx-2">+</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── 5. Opening Header Rule ──────────────────────────────────── */}
        <div className="flex items-center gap-4 mb-2 border-t border-[rgba(245,242,237,0.12)] pt-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D] select-none">
            {projects.length} FEATURED AI SYSTEMS
          </span>
          <span className="h-[1px] flex-1 bg-[rgba(245,242,237,0.08)]" aria-hidden="true" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D] select-none hidden sm:inline">
            NEURAL PIPELINES · NLP FUSION · ML PLATFORMS
          </span>
        </div>

        {/* ── 6. Glass Project Cards with Ghost Typography ─────────────── */}
        <div ref={stackRef} className="space-y-16 sm:space-y-20 lg:space-y-24 py-8 sm:py-12">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              data-project-card
              className="lg:sticky transition-all duration-300"
              style={{
                top: `calc(5rem + ${index * 1.5}rem)`,
                zIndex: index + 1,
              }}
            >
              <GlassProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* ── 7. Archive Footer Bar ───────────────────────────────────── */}
        <div className="border-t border-[rgba(245,242,237,0.10)] pt-8 flex items-center justify-between">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#77736D] border-b border-[rgba(245,242,237,0.2)] pb-0.5 hover:text-[#C6B37E] hover:border-[#C6B37E] transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6B37E]"
          >
            FULL REPOSITORY ARCHIVE
            <span className="transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true">→</span>
          </Link>
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#77736D]/60 select-none hidden sm:inline">
            GITHUB // @techiee-jhalak
          </span>
        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   GlassProjectCard — Premium Cyberpunk/Terminal Glass Card
   Anatomy: Category/Index → Title → Description → Tech Chips → Terminal Panel → CTA Row
────────────────────────────────────────────────────────────────────────────── */
function GlassProjectCard({ project, index }: { project: Project; index: number }) {
  const { setCursor, resetCursor } = useCursor();
  const displayNum = String(index + 1).padStart(2, "0");
  const ghostText = GHOST_TEXT[project.slug] || ["AI", "SYSTEM"];
  const isHybridNLP = project.slug === "sentiment-intelligence";

  // Snappy GSAP terminal text stagger on card hover (150-250ms)
  const handleCardHover = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const panel = e.currentTarget.querySelector("[data-terminal-content]");
    if (!panel) return;
    const items = panel.querySelectorAll("[data-terminal-item]");
    if (items.length === 0) return;

    import("gsap").then(({ gsap }) => {
      gsap.fromTo(
        items,
        { opacity: 0.65, y: -1 },
        { opacity: 1, y: 0, duration: 0.2, stagger: 0.03, ease: "power1.out" }
      );
    });
  }, []);

  return (
    <article
      data-project-card="true"
      className="group relative"
      onMouseEnter={handleCardHover}
    >
      {/* ── Ghost Typography (Behind Card) ─────────────────────────── */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden z-0 transition-transform duration-700 ease-out group-hover:-translate-y-2"
        aria-hidden="true"
      >
        <span
          className="font-display font-bold uppercase text-[#F5F2ED]/[0.025] leading-none tracking-tighter whitespace-nowrap"
          style={{ fontSize: "clamp(5rem, 16vw, 14rem)" }}
        >
          {ghostText[0]}
        </span>
        <span
          className="font-display font-bold uppercase text-[#F5F2ED]/[0.025] leading-none tracking-tighter whitespace-nowrap"
          style={{ fontSize: "clamp(5rem, 16vw, 14rem)" }}
        >
          {ghostText[1]}
        </span>
      </div>

      {/* ── Refined Frosted Glass Card with Soft Inner Glow ─────────── */}
      <div
        className="relative z-10 p-6 sm:p-8 lg:p-10 rounded-2xl transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:scale-[1.008]"
        style={{
          background: "rgba(10, 10, 10, 0.78)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255, 255, 255, 0.07)",
          boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 20px 48px -12px rgba(0, 0, 0, 0.7)",
        }}
      >
        {/* 1. CATEGORY BADGE & INDEX / YEAR */}
        <div className="flex items-center justify-between mb-5 sm:mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#C6B37E]">
              {displayNum}
            </span>
            <span className="h-3 w-[1px] bg-white/15" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#8B1E2E]" aria-hidden="true" />
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#77736D]">
                {project.category}
              </span>
            </div>
          </div>

          <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#77736D]">
            <span>{"//"} {project.year || "2024"}</span>
          </div>
        </div>

        {/* 2. PROJECT TITLE (Strongest Element Inside Card) */}
        <Link
          href={`/projects/${project.slug}`}
          onMouseEnter={() => setCursor("VIEW")}
          onMouseLeave={resetCursor}
          className="block mb-4 sm:mb-5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6B37E] rounded"
        >
          {isHybridNLP ? (
            <h3 className="font-display font-bold uppercase tracking-tight text-[#F5F2ED] group-hover:text-[#C6B37E] transition-colors duration-200">
              <span
                className="block"
                style={{
                  fontSize: "clamp(1.75rem, 4.2vw, 3.5rem)",
                  lineHeight: "0.95",
                  letterSpacing: "-0.03em",
                }}
              >
                HYBRID SENTIMENT INTELLIGENCE
              </span>
              <span className="block font-mono text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#C6B37E] mt-2 uppercase">
                DYNAMIC FUSION
              </span>
            </h3>
          ) : (
            <h3
              className="font-display font-bold uppercase tracking-tight text-[#F5F2ED] group-hover:text-[#C6B37E] transition-colors duration-200"
              style={{
                fontSize: "clamp(1.75rem, 4.2vw, 3.5rem)",
                lineHeight: "0.95",
                letterSpacing: "-0.03em",
              }}
            >
              {project.title.toUpperCase()}
            </h3>
          )}
        </Link>

        {/* 3. ONE-LINE DESCRIPTION */}
        <p className="font-mono text-xs sm:text-[13px] text-[#A6A29A] leading-relaxed max-w-3xl mb-5">
          {project.shortDescription}
        </p>

        {/* 4. TECH-TAG CHIPS (Tight, Evenly-Padded Chip Row) */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-7">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2.5 py-1 rounded font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#D6D2CA] bg-white/[0.04] border border-white/[0.08] hover:border-[#C6B37E]/50 hover:text-[#F5F2ED] transition-colors select-none"
            >
              <span className="w-1 h-1 rounded-full bg-[#C6B37E]/60 mr-1.5" aria-hidden="true" />
              {tech}
            </span>
          ))}
        </div>

        {/* 5. TERMINAL MOCK-PANEL (Balanced Density & Line Count Across All 4) */}
        <div className="mb-6 sm:mb-7">
          <TerminalMockPanel slug={project.slug} />
        </div>

        {/* 6. CTA ROW (Clear Hierarchy: LIVE ↗ > VIEW PROJECT → > GITHUB ↗) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Primary Action: LIVE ↗ (Strongest Accent Treatment) */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/live relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-widest font-bold text-[#0A0A0A] bg-[#C6B37E] hover:bg-[#D8C692] shadow-[0_0_20px_rgba(198,179,126,0.35)] hover:shadow-[0_0_30px_rgba(198,179,126,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6B37E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
                aria-label={`Open live application for ${project.title} (opens in new tab)`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A] animate-pulse" aria-hidden="true" />
                <span>LIVE</span>
                <span className="transition-transform duration-200 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5">
                  ↗
                </span>
              </a>
            )}

            {/* Secondary Action: VIEW PROJECT → (Case Study Detail Link) */}
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold text-[#F5F2ED] bg-white/[0.04] border border-white/[0.12] hover:border-[#C6B37E] hover:text-[#C6B37E] hover:bg-white/[0.08] transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6B37E]"
              aria-label={`View case study for ${project.title}`}
            >
              <span>VIEW PROJECT</span>
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </Link>

            {/* Tertiary Action: GITHUB ↗ (Source Code) */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider text-[#77736D] hover:text-[#F5F2ED] border border-white/[0.06] hover:border-white/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6B37E]"
                aria-label={`View GitHub repository for ${project.title} (opens in new tab)`}
              >
                <span>GITHUB</span>
                <span className="transition-transform duration-200 hover:translate-x-0.5 hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            )}
          </div>

          {/* Project Orbit Badge */}
          <div className="shrink-0 hidden sm:block">
            <CircularBadge
              text={`VIEW PROJECT • ${project.liveUrl ? "LIVE" : "CASE STUDY"} • `}
              centerText="↗"
              theme="light"
              size={64}
              href={project.liveUrl || `/projects/${project.slug}`}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   TerminalMockPanel — Unified Cyberpunk Terminal Panels Across All 4 Systems
   Standardized 3-column architecture, identical line count, and balanced visual weight
────────────────────────────────────────────────────────────────────────────── */
function TerminalMockPanel({ slug }: { slug: string }) {
  const configs: Record<string, {
    title: string;
    status: string;
    item1: { label: string; name: string; detail: string; badge: string; meter: string };
    item2: { label: string; name: string; detail: string; badge: string; meter: string };
    item3: { label: string; name: string; detail: string; badge: string; meter: string };
    cli: string;
    cliStatus: string;
  }> = {
    "synapkeep-ai": {
      title: "synapkeep-ai // vector-churn-telemetry",
      status: "ENGINE: SCIKIT-LEARN + XGBOOST",
      item1: { label: "PREDICTION // CHURN", name: "Scikit-Learn Model", detail: "Risk Probability: 78.4%", badge: "HIGH", meter: "78%" },
      item2: { label: "PIPELINE // DATA_CORE", name: "Structured Features", detail: "SQL Feature Matrix", badge: "ENCODED", meter: "92%" },
      item3: { label: "ACTION // RETENTION", name: "Informed Decisions", detail: "Intervention Strategy", badge: "TRIGGERED", meter: "85%" },
      cli: "> churn_model.evaluate_cohort(input_stream) --top_k=5",
      cliStatus: "SYS READY",
    },
    "sentiment-intelligence": {
      title: "sentiment-nlp // distilbert-vader-hybrid",
      status: "MODE: CODE-MIXED HINGLISH",
      item1: { label: "TRANSFORMER // ATTN", name: "DistilBERT Stream", detail: "Context Weight: 0.65", badge: "FINE-TUNED", meter: "65%" },
      item2: { label: "LEXICON // VALENCE", name: "VADER Dictionary", detail: "Polarity Weight: 0.35", badge: "CALIBRATED", meter: "35%" },
      item3: { label: "FUSION // DYNAMIC", name: "Dual NLP Classifier", detail: "Classification Output", badge: "COMPOUND", meter: "88%" },
      cli: "> hybrid_fusion.evaluate(code_mixed_input) --lang=hinglish",
      cliStatus: "INFERENCE ACTIVE",
    },
    "foundher-ai": {
      title: "foundher-ai // venture-intelligence-core",
      status: "FRAMEWORK: AI CO-FOUNDER",
      item1: { label: "BENCHMARK // READINESS", name: "Venture Evaluation", detail: "GTM Traction Matrix", badge: "ACTIVE", meter: "76%" },
      item2: { label: "ECONOMICS // UNIT_CAC", name: "Business Modeling", detail: "LTV / CAC Projections", badge: "EVALUATED", meter: "84%" },
      item3: { label: "ADVISORY // ROADMAP", name: "Contextual Guidance", detail: "Operational Milestones", badge: "DISPATCHED", meter: "90%" },
      cli: "> venture_engine.analyze_pitch(rubric_matrix) --stage=seed",
      cliStatus: "MODEL READY",
    },
    "mood-companion": {
      title: "mood-companion // affective-telemetry-engine",
      status: "STATE: SYNCHRONIZED",
      item1: { label: "AFFECT // VECTOR", name: "Empathetic Telemetry", detail: "Valence Index: +0.74", badge: "CALM / STABLE", meter: "74%" },
      item2: { label: "TEMPORAL // TREND", name: "Daily Mood Telemetry", detail: "7-Day Cyclical Cadence", badge: "SYNCHRONIZED", meter: "80%" },
      item3: { label: "COMPUTING // ADAPTIVE", name: "Personal Analytics", detail: "Contextual Reflection", badge: "ONLINE", meter: "88%" },
      cli: "> affective_stream.compute_state(daily_cadence) --smooth=true",
      cliStatus: "SYS ONLINE",
    },
  };

  const c = configs[slug] || configs["synapkeep-ai"];

  return (
    <div
      data-terminal-content
      className="w-full max-w-4xl flex flex-col justify-between p-4 sm:p-5 border border-white/[0.08] bg-[#070707]/90 font-mono text-[11px] select-none rounded-xl shadow-inner relative overflow-hidden"
    >
      {/* Subtle terminal scanline grid */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(245,242,237,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,242,237,0.04) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />

      {/* Top Status Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5 relative z-10">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#C6B37E] shadow-[0_0_8px_rgba(198,179,126,0.6)]" />
          <span className="text-[#F5F2ED] font-semibold tracking-wider text-[11px] sm:text-xs">
            {c.title}
          </span>
        </div>
        <span className="text-[#77736D] text-[10px] uppercase tracking-wider hidden sm:inline">
          {c.status}
        </span>
      </div>

      {/* Balanced 3-Column Diagnostic Metrics (Uniform Line Count) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 py-3 text-[#77736D] relative z-10">
        {/* Module 1 */}
        <div data-terminal-item className="border border-white/[0.06] p-2.5 sm:p-3 space-y-1.5 rounded-lg bg-white/[0.015] hover:border-white/[0.12] transition-colors">
          <div className="text-[10px] text-[#C6B37E] uppercase tracking-wider">{c.item1.label}</div>
          <div className="text-white text-xs sm:text-[13px] font-semibold tracking-tight">{c.item1.name}</div>
          <div className="text-[10px] text-[#A6A29A] flex items-center justify-between pt-0.5">
            <span>{c.item1.detail}</span>
            <span className="text-[#C6B37E] font-semibold">{c.item1.badge}</span>
          </div>
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden mt-1">
            <div className="h-full bg-[#C6B37E]" style={{ width: c.item1.meter }} />
          </div>
        </div>

        {/* Module 2 */}
        <div data-terminal-item className="border border-white/[0.06] p-2.5 sm:p-3 space-y-1.5 rounded-lg bg-white/[0.015] hover:border-white/[0.12] transition-colors">
          <div className="text-[10px] text-[#C6B37E] uppercase tracking-wider">{c.item2.label}</div>
          <div className="text-white text-xs sm:text-[13px] font-semibold tracking-tight">{c.item2.name}</div>
          <div className="text-[10px] text-[#A6A29A] flex items-center justify-between pt-0.5">
            <span>{c.item2.detail}</span>
            <span className="text-[#C6B37E] font-semibold">{c.item2.badge}</span>
          </div>
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden mt-1">
            <div className="h-full bg-[#C6B37E]" style={{ width: c.item2.meter }} />
          </div>
        </div>

        {/* Module 3 */}
        <div data-terminal-item className="border border-white/[0.06] p-2.5 sm:p-3 space-y-1.5 rounded-lg bg-white/[0.015] hover:border-white/[0.12] transition-colors">
          <div className="text-[10px] text-[#C6B37E] uppercase tracking-wider">{c.item3.label}</div>
          <div className="text-white text-xs sm:text-[13px] font-semibold tracking-tight">{c.item3.name}</div>
          <div className="text-[10px] text-[#A6A29A] flex items-center justify-between pt-0.5">
            <span>{c.item3.detail}</span>
            <span className="text-[#C6B37E] font-semibold">{c.item3.badge}</span>
          </div>
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden mt-1">
            <div className="h-full bg-[#C6B37E]" style={{ width: c.item3.meter }} />
          </div>
        </div>
      </div>

      {/* Terminal CLI Command Line */}
      <div data-terminal-item className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[10px] text-[#77736D] relative z-10">
        <span className="truncate pr-2">{c.cli}</span>
        <span className="text-[#C6B37E] font-semibold shrink-0">{c.cliStatus}</span>
      </div>
    </div>
  );
}
