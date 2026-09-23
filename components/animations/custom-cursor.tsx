"use client";

import React, { useEffect, useState, useRef } from "react";
import { useCursor } from "./cursor-context";

/**
 * Editorial Custom Cursor — Desktop Only
 *
 * Implements:
 * - Precise inner dot + smooth outer ring with mix-blend-difference
 * - Fluid transformation into interactive "VIEW ↗" / "OPEN ↗" badge on projects
 * - Automatically inverts across Cream (#F1E9DF) and Black (#080808) surfaces
 * - Disabled on touch devices and if prefers-reduced-motion
 */
export function CustomCursor() {
  const { state, label } = useCursor();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Smooth lerp animation for the outer ring
    let animId: number;
    const animate = () => {
      const ease = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  const isExpanded = state === "VIEW" || state === "OPEN" || state === "IMAGE";
  const displayLabel = label || (state === "VIEW" ? "VIEW ↗" : state === "OPEN" ? "OPEN ↗" : "");

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 hidden md:block ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Inner Dot (Instant) */}
      <div
        className={`fixed top-0 left-0 rounded-full transition-transform duration-100 mix-blend-difference bg-white ${
          isExpanded ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        style={{
          width: 5,
          height: 5,
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />

      {/* Outer Smooth Ring / Expanded Badge */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full transition-all duration-300 mix-blend-difference bg-white text-black font-mono font-bold uppercase tracking-widest ${
          isExpanded
            ? "w-20 h-20 text-[10px] scale-100"
            : "w-8 h-8 border border-white bg-transparent text-[0px] scale-100"
        }`}
      >
        {isExpanded && <span>{displayLabel}</span>}
      </div>
    </div>
  );
}
