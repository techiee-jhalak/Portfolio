"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Container } from "@/components/layout/container";
import { expertiseData } from "@/data/skills";

/* ── Floating Tech Sticker Positions ────────────────────────────────────────── */
const FLOATING_STICKERS = [
  { label: "PYTHON", top: "8%", left: "2%", rotate: "-4deg", delay: "0s", duration: "4s", variant: "normal" },
  { label: "JAVASCRIPT", top: "22%", left: "6%", rotate: "3deg", delay: "0.6s", duration: "4.5s", variant: "alt" },
  { label: "REACT", top: "38%", left: "1%", rotate: "-2deg", delay: "1.2s", duration: "3.8s", variant: "normal" },
  { label: "NEXT.JS", top: "52%", left: "5%", rotate: "5deg", delay: "0.3s", duration: "5s", variant: "alt" },
  { label: "TRANSFORMERS", top: "66%", left: "3%", rotate: "-3deg", delay: "0.9s", duration: "4.2s", variant: "normal" },
  { label: "SCIKIT-LEARN", top: "15%", left: "10%", rotate: "2deg", delay: "1.5s", duration: "3.5s", variant: "alt" },
  { label: "PANDAS", top: "78%", left: "4%", rotate: "-1deg", delay: "0.4s", duration: "4.8s", variant: "normal" },
  { label: "STREAMLIT", top: "45%", left: "8%", rotate: "4deg", delay: "1.1s", duration: "3.6s", variant: "alt" },
  { label: "GIT", top: "88%", left: "6%", rotate: "-5deg", delay: "0.7s", duration: "4.4s", variant: "normal" },
] as const;

/* ── Reaction Symbols ───────────────────────────────────────────────────────── */
const REACTION_SYMBOLS = ["✦", "★", "◆", "✿", "⚡", "♦", "●", "▲"];

/**
 * Expertise Section — Specification Compliant
 *
 * Deep Black (#0A0A0A) section with gold accents.
 * Features:
 * - Floating tech stickers (left side, hidden below 640px)
 * - Purple reaction popup on row hover (desktop only, easter egg)
 * - Gold (#C6B37E) accents replacing green
 */
export function Expertise() {
  const [hoverPopup, setHoverPopup] = useState<{ x: number; y: number; visible: boolean }>({
    x: 0,
    y: 0,
    visible: false,
  });
  const popupPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const animRef = useRef<number | null>(null);
  const isDesktop = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      isDesktop.current =
        !window.matchMedia("(pointer: coarse)").matches &&
        window.matchMedia("(hover: hover)").matches;
    }
  }, []);

  const handleRowMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDesktop.current) return;
    targetPos.current = { x: e.clientX + 16, y: e.clientY - 20 };
    setHoverPopup((prev) => ({ ...prev, visible: true }));

    if (!animRef.current) {
      const animate = () => {
        popupPos.current.x += (targetPos.current.x - popupPos.current.x) * 0.12;
        popupPos.current.y += (targetPos.current.y - popupPos.current.y) * 0.12;
        setHoverPopup({
          x: popupPos.current.x,
          y: popupPos.current.y,
          visible: true,
        });
        animRef.current = requestAnimationFrame(animate);
      };
      animRef.current = requestAnimationFrame(animate);
    }
  }, []);

  const handleRowMouseLeave = useCallback(() => {
    setHoverPopup((prev) => ({ ...prev, visible: false }));
    if (animRef.current) {
      cancelAnimationFrame(animRef.current);
      animRef.current = null;
    }
  }, []);

  return (
    <section
      id="expertise"
      data-section
      aria-label="Technical Expertise"
      className="relative bg-[#0A0A0A] text-[#F5F2ED] editorial-grid-dark border-b border-[rgba(245,242,237,0.10)] py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* ── Floating Tech Stickers (hidden below 640px) ─────────────────── */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block" aria-hidden="true">
        {FLOATING_STICKERS.map((sticker) => (
          <div
            key={sticker.label}
            className={sticker.variant === "alt" ? "float-sticker-alt" : "float-sticker"}
            style={{
              position: "absolute",
              top: sticker.top,
              left: sticker.left,
              "--float-rotate": sticker.rotate,
              "--float-delay": sticker.delay,
              "--float-duration": sticker.duration,
            } as React.CSSProperties}
          >
            <span className="inline-block px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-[#77736D]/60 bg-[#0A0A0A] border border-[rgba(245,242,237,0.06)] rounded shadow-sm select-none">
              {sticker.label}
            </span>
          </div>
        ))}
      </div>

      <Container size="wide">
        {/* ── 1. Section Index ─────────────────────────────────────────── */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <span className="font-mono text-[10px] font-semibold tracking-widest text-[#C6B37E] uppercase">
            03
          </span>
          <span className="h-[1px] w-8 bg-[rgba(245,242,237,0.2)]" aria-hidden="true" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D]">
            EXPERTISE
          </span>
        </div>

        {/* ── 2. Oversized Heading ──────────────────────────────────────── */}
        <div className="mb-16 sm:mb-20 lg:mb-24 overflow-hidden">
          <h2
            className="font-display font-bold uppercase text-[#F5F2ED] leading-none tracking-tighter"
            style={{
              fontSize: "clamp(4.25rem, 17vw, 15rem)",
              lineHeight: "0.85",
            }}
          >
            EXPERTISE
          </h2>
        </div>

        {/* ── 3. Opening Full-width Rule with Label ─────────────────────── */}
        <div className="flex items-center gap-4 mb-0 border-t border-[rgba(245,242,237,0.12)] pt-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D] select-none">
            TECHNICAL REPERTOIRE
          </span>
          <span className="h-[1px] flex-1 bg-[rgba(245,242,237,0.08)]" aria-hidden="true" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D] select-none hidden sm:inline">
            CORE COMPUTING & TOOLING
          </span>
        </div>

        {/* ── 4. Category Rows (Horizontal Bands) ───────────────────────── */}
        <div className="divide-y divide-[rgba(245,242,237,0.10)]">
          {expertiseData.map((category) => (
            <div
              key={category.number}
              className="group relative py-8 sm:py-10 lg:py-12 transition-colors duration-200"
              onMouseMove={handleRowMouseMove}
              onMouseLeave={handleRowMouseLeave}
            >
              {/* Subtle expanding gold hairline on hover */}
              <div
                className="absolute bottom-[-1px] left-0 h-[1px] w-0 bg-[#C6B37E]/60 transition-all duration-500 ease-out group-hover:w-full"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-4 lg:gap-x-8 items-start">
                {/* Left: Number + Category Label */}
                <div className="lg:col-span-4 flex items-baseline gap-4 lg:gap-5">
                  <span className="font-mono text-xs tracking-widest text-[#77736D] tabular-nums shrink-0 mt-1">
                    {category.number}
                  </span>
                  <h3
                    className="font-display font-bold uppercase text-[#F5F2ED] transition-colors duration-150 group-hover:text-[#C6B37E]"
                    style={{
                      fontSize: "clamp(1.5rem, 3.2vw, 2.5rem)",
                      letterSpacing: "-0.02em",
                      lineHeight: "1",
                    }}
                  >
                    {category.label}
                  </h3>
                </div>

                {/* Center: Description */}
                <div className="lg:col-span-3 flex items-center">
                  <p className="font-mono text-[11px] sm:text-xs text-[#77736D] leading-relaxed max-w-xs">
                    {category.description}
                  </p>
                </div>

                {/* Right: Skills as Monospace List + Arrow */}
                <div className="lg:col-span-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 lg:justify-end">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[11px] sm:text-xs uppercase tracking-wide text-[#77736D] transition-colors duration-100 group-hover:text-[#F5F2ED]"
                    >
                      {skill}
                    </span>
                  ))}
                  <span
                    className="text-[#77736D] text-sm group-hover:text-[#C6B37E] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-2 hidden sm:inline"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── 5. Closing Annotation Strip ───────────────────────────────── */}
        <div className="mt-16 sm:mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(245,242,237,0.10)] pt-8">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#77736D] select-none">
            ENGINEERING FOUNDATION: DATA STRUCTURES · TRANSFORMERS · APPLIED AI
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#77736D] select-none">
            INDEX // 03
          </span>
        </div>
      </Container>

      {/* ── Purple Reaction Popup (Easter Egg — Desktop Only) ──────────── */}
      {hoverPopup.visible && (
        <div
          className="fixed pointer-events-none z-50 hidden md:flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-white text-xs font-mono select-none"
          style={{
            left: hoverPopup.x,
            top: hoverPopup.y,
            background: "rgba(138, 66, 197, 0.85)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.12)",
            transform: "translate(0, 0)",
          }}
          aria-hidden="true"
        >
          {REACTION_SYMBOLS.slice(0, 4).map((sym, i) => (
            <span key={i} className="text-sm opacity-90">{sym}</span>
          ))}
        </div>
      )}
    </section>
  );
}
