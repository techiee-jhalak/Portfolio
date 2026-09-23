"use client";

import React, { useState, useEffect, useRef } from "react";

/**
 * Preloader — Specification Compliance
 *
 * Full black viewport overlay:
 * - Large bold gold (#C6B37E) counter: 0% → 100%
 * - Circular pencil-inspired SVG loading glyph below
 * - On complete: expanding cream diamond clip-path wipe from center
 * - Only runs on initial page load (sessionStorage flag)
 * - Respects prefers-reduced-motion
 */
export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">(() => {
    // SSR-safe: start as "loading", we'll adjust in useEffect
    return "loading";
  });
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startTime = useRef(0);

  // Determine if preloader should show
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasLoaded = sessionStorage.getItem("jhalak-preloader-shown");
      if (hasLoaded) {
        setPhase("done");
        return;
      }

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) {
        sessionStorage.setItem("jhalak-preloader-shown", "true");
        setPhase("done");
        return;
      }

      setShouldAnimate(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Run animation loop
  useEffect(() => {
    if (!shouldAnimate || phase !== "loading") return;

    const runAnimation = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const duration = 1800;

      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));

      if (p < 1) {
        rafRef.current = requestAnimationFrame(runAnimation);
      } else {
        setTimeout(() => {
          setPhase("reveal");
          sessionStorage.setItem("jhalak-preloader-shown", "true");
          setTimeout(() => {
            setPhase("done");
          }, 900);
        }, 200);
      }
    };

    rafRef.current = requestAnimationFrame(runAnimation);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [shouldAnimate, phase]);

  if (phase === "done") return null;

  return (
    <>
      {/* Black overlay */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0A0A] transition-opacity duration-200 ${
          phase === "reveal" ? "pointer-events-none" : ""
        }`}
        style={{
          opacity: phase === "reveal" ? 0 : 1,
          transition: phase === "reveal" ? "opacity 0.6s ease 0.3s" : "none",
        }}
        aria-hidden="true"
      >
        {/* Large gold counter */}
        <div
          className="font-display font-bold text-[#C6B37E] tabular-nums select-none"
          style={{ fontSize: "clamp(3rem, 10vw, 8rem)", lineHeight: 1 }}
        >
          {progress}%
        </div>

        {/* Circular loading glyph */}
        <div className="mt-6">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className="animate-slow-spin"
          >
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="#C6B37E"
              strokeWidth="1"
              strokeDasharray="8 6"
              opacity="0.4"
            />
            <circle
              cx="24"
              cy="24"
              r="14"
              fill="none"
              stroke="#C6B37E"
              strokeWidth="0.5"
              strokeDasharray="3 5"
              opacity="0.3"
            />
            <line
              x1="24"
              y1="4"
              x2="24"
              y2="12"
              stroke="#C6B37E"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Small progress dot */}
        <div className="mt-4 flex items-center gap-2">
          <div
            className="h-1 bg-[#C6B37E]/30 rounded-full overflow-hidden"
            style={{ width: "60px" }}
          >
            <div
              className="h-full bg-[#C6B37E] rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Tiny label */}
        <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[#77736D] select-none">
          LOADING PORTFOLIO
        </div>
      </div>

      {/* Cream diamond reveal layer */}
      {phase === "reveal" && (
        <div
          className="fixed inset-0 z-[99] bg-[#F1E8E0] diamond-reveal pointer-events-none"
          aria-hidden="true"
        />
      )}
    </>
  );
}
