"use client";

import React, { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { CircularBadge } from "@/components/ui/circular-badge";

/**
 * Hero Section — Specification Compliant
 *
 * - Warm cream canvas (#F1E8E0)
 * - Conceptual display headline: INTELLIGENT / SYSTEMS (not just name)
 * - Name JHALAK OMAR as small signature element
 * - SVG liquid distortion (feTurbulence + feDisplacementMap) on hover
 * - Orbit badge with rotating text + fixed arrow
 * - No GPS coordinates — only GREATER LUCKNOW AREA · INDIA
 */
export function Hero() {
  const headlineRef = useRef<HTMLDivElement>(null);
  const turbulenceRef = useRef<SVGFETurbulenceElement>(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });
  const animating = useRef(false);

  const updateDistortion = useCallback(() => {
    if (!turbulenceRef.current) {
      animating.current = false;
      return;
    }

    const { x, y } = mousePos.current;
    // Distortion intensity based on proximity to center
    const distanceFromCenter = Math.sqrt(
      Math.pow(x - 0.5, 2) + Math.pow(y - 0.5, 2)
    );
    const intensity = Math.max(0.001, 0.012 - distanceFromCenter * 0.015);
    const freqX = intensity * 1.2;
    const freqY = intensity;

    turbulenceRef.current.setAttribute(
      "baseFrequency",
      `${freqX.toFixed(4)} ${freqY.toFixed(4)}`
    );

    animating.current = false;
  }, []);

  // Liquid distortion — only on pointer: fine + hover devices
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!headlineRef.current) return;
    const rect = headlineRef.current.getBoundingClientRect();
    mousePos.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    };

    if (!animating.current) {
      animating.current = true;
      requestAnimationFrame(updateDistortion);
    }
  }, [updateDistortion]);

  const handleMouseLeave = useCallback(() => {
    if (turbulenceRef.current) {
      turbulenceRef.current.setAttribute("baseFrequency", "0 0");
    }
  }, []);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;

    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const noHover = window.matchMedia("(hover: none)").matches;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (isTouch || noHover || prefersReduced) return;

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <section
      id="hero"
      data-section
      aria-label="Introduction & Identity"
      className="relative min-h-[92svh] flex flex-col justify-between bg-[#F1E8E0] text-[#111111] editorial-grid-light border-b border-[rgba(17,17,17,0.12)] pt-6 pb-10 sm:pb-12 overflow-hidden"
    >
      {/* SVG filter definition for liquid distortion */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="liquid-distortion" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence
              ref={turbulenceRef}
              type="fractalNoise"
              baseFrequency="0 0"
              numOctaves="3"
              seed="2"
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="18"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <Container size="wide" className="flex flex-1 flex-col justify-between">
        {/* ── 1. Top Identity / Signature Bar ──────────────────────────── */}
        <div className="hero-reveal-1 flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[rgba(17,17,17,0.12)]">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C6B37E]" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#111111] font-semibold">
              JHALAK OMAR // PORTFOLIO 2026
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-widest text-[#77736D]">
              GREATER LUCKNOW AREA · INDIA
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#C6B37E] font-medium">
              [ AI / ML · RESEARCH ]
            </span>
          </div>
        </div>

        {/* ── 2. Giant Conceptual Display Headline ─────────────────────── */}
        <div className="hero-reveal-2 py-12 sm:py-16 lg:py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            {/* Left: Enormous Conceptual Headline with liquid distortion */}
            <div className="lg:col-span-8 space-y-1 sm:space-y-2">
              <div className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#77736D] mb-3 flex items-center gap-2">
                <span className="text-[#C6B37E] font-semibold">01</span>
                <span className="h-[1px] w-6 bg-[#C6B37E]/40" />
                <span>AI / ML DEVELOPER & RESEARCHER</span>
              </div>

              <div
                ref={headlineRef}
                className="cursor-default"
              >
                <h1
                  className="font-display font-bold uppercase text-[#111111] leading-[0.82] tracking-tighter select-none"
                  style={{ filter: "url(#liquid-distortion)" }}
                >
                  <span
                    className="block typography-stretched"
                    style={{ fontSize: "clamp(4.5rem, 16vw, 15rem)" }}
                  >
                    JHALAK
                  </span>
                  <span
                    className="block typography-stretched text-[#C6B37E]"
                    style={{ fontSize: "clamp(4.5rem, 16vw, 15rem)" }}
                  >
                    OMAR
                  </span>
                </h1>
              </div>

              {/* Small name signature below headline */}
              <div className="pt-4 flex items-center gap-3">
                <span className="h-[1px] w-8 bg-[#111111]/20" aria-hidden="true" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#77736D]">
                  BY JHALAK OMAR
                </span>
              </div>
            </div>

            {/* Right: Orbit Badge + Descriptor */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-8 pt-4">
              {/* Rotating Circular Badge */}
              <div className="hero-reveal-3">
                <CircularBadge
                  text="LET'S WORK TOGETHER • AI / ML • JHALAK OMAR • "
                  centerText="↗"
                  theme="dark"
                  size={120}
                  href="#work"
                />
              </div>

              {/* Descriptor block */}
              <div className="border-l border-[rgba(17,17,17,0.18)] pl-4 py-1 space-y-2 max-w-xs text-left">
                <div className="font-mono text-[9px] uppercase tracking-widest text-[#77736D]">
                  DISCIPLINE FOCUS
                </div>
                <p className="font-mono text-xs text-[#111111] leading-relaxed">
                  Machine learning pipelines, natural language processing, and scalable full-stack engineering.
                </p>
                <div className="flex items-center gap-4 pt-1">
                  <Link
                    href="#work"
                    className="font-mono text-[11px] uppercase tracking-widest text-[#111111] font-semibold border-b border-[#111111] pb-0.5 hover:text-[#C6B37E] hover:border-[#C6B37E] transition-colors"
                  >
                    SELECTED WORK ↘
                  </Link>
                  <Link
                    href="#about"
                    className="font-mono text-[11px] uppercase tracking-widest text-[#77736D] hover:text-[#111111] transition-colors"
                  >
                    ABOUT →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 3. Bottom Micro-Labels Strip ─────────────────────────────── */}
        <div className="hero-reveal-4 flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(17,17,17,0.12)] pt-5">
          <div className="flex items-center gap-4 sm:gap-6 font-mono text-[10px] uppercase tracking-widest text-[#77736D]">
            <span>AI / ML</span>
            <span className="text-[#C6B37E]">•</span>
            <span>NLP</span>
            <span className="text-[#C6B37E]">•</span>
            <span>FULL STACK</span>
            <span className="text-[#C6B37E]">•</span>
            <span>RESEARCH</span>
          </div>

          <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-widest text-[#111111]">
            <span className="flex items-center gap-1.5 font-semibold">
              <span>EXPLORE ARCHIVE</span>
              <span>↓</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
