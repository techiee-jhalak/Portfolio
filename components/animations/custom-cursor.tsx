"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useCursor } from "./cursor-context";

type HoverMode = "DEFAULT" | "LINK" | "CARD" | "TEXT" | "IMAGE" | "HIDDEN";

/**
 * Editorial Custom Animated Cursor
 *
 * Requirements fulfilled:
 * - Two-layer system: ~8px inner gold dot (near-instant) + ~38px outer ring (eased trailing)
 * - Buttery-smooth 60fps tracking via GSAP quickTo (zero React state updates on mousemove)
 * - Muted gold (#C6B37E) theme with high-contrast dual-tone shadow (visible on both cream and dark backgrounds)
 * - Contextual hover modes: Link/Button expand, Project Card focus, Body Text vertical beam, Media subtle tint
 * - Subtle magnetic attraction on key CTAs (LIVE, GITHUB, CONTACT, [data-magnetic])
 * - Bulletproof desktop detection: never fails on Windows touch laptops or hybrid devices
 * - Native cursor safety: Native cursor hidden only after active mouse movement is detected
 * - Inputs/Textareas retain native text cursor
 * - Accessibility: prefers-reduced-motion disables trailing and magnetic pull
 */
export function CustomCursor() {
  const { state: contextState, label: contextLabel } = useCursor();

  const containerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  // Keep track of active hover mode without forcing re-renders
  const currentModeRef = useRef<HoverMode>("DEFAULT");
  const magneticTargetRef = useRef<HTMLElement | null>(null);
  const hasInitializedRef = useRef(false);

  useEffect(() => {
    // Only disable on mobile phones (screen width < 768 with mobile user agent)
    const isMobilePhone =
      /Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) &&
      window.innerWidth < 768;
    if (isMobilePhone) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    const container = containerRef.current;

    if (!ring || !dot || !container) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Set initial transform origin and placement off-screen
    gsap.set([ring, dot], {
      xPercent: -50,
      yPercent: -50,
      x: -100,
      y: -100,
    });

    // Performant GSAP quickTo setters
    const ringDuration = prefersReduced ? 0 : 0.25;
    const dotDuration = prefersReduced ? 0 : 0.03;

    const setRingX = gsap.quickTo(ring, "x", { duration: ringDuration, ease: "power2.out" });
    const setRingY = gsap.quickTo(ring, "y", { duration: ringDuration, ease: "power2.out" });
    const setDotX = gsap.quickTo(dot, "x", { duration: dotDuration, ease: "power2.out" });
    const setDotY = gsap.quickTo(dot, "y", { duration: dotDuration, ease: "power2.out" });

    // Apply visual styling for hover modes
    const applyMode = (mode: HoverMode) => {
      if (currentModeRef.current === mode) return;
      currentModeRef.current = mode;

      if (prefersReduced) {
        gsap.to(ring, {
          scale: mode === "LINK" ? 1.3 : mode === "CARD" ? 1.2 : 1,
          scaleX: mode === "TEXT" ? 0.2 : 1,
          scaleY: mode === "TEXT" ? 0.7 : 1,
          duration: 0.05,
        });
        return;
      }

      switch (mode) {
        case "LINK":
          // Smooth expansion, strengthened gold border and soft translucent fill
          gsap.to(ring, {
            scale: 1.65,
            scaleX: 1.65,
            scaleY: 1.65,
            borderColor: "#C6B37E",
            backgroundColor: "rgba(198, 179, 126, 0.18)",
            boxShadow: "0 0 0 1px rgba(10, 10, 10, 0.25), 0 0 24px rgba(198, 179, 126, 0.45)",
            borderRadius: "9999px",
            duration: 0.28,
            ease: "power2.out",
          });
          gsap.to(dot, {
            scale: 0.25,
            opacity: 0.3,
            duration: 0.2,
            ease: "power2.out",
          });
          break;

        case "CARD":
          // Project card highlight
          gsap.to(ring, {
            scale: 1.45,
            scaleX: 1.45,
            scaleY: 1.45,
            borderColor: "rgba(198, 179, 126, 0.95)",
            backgroundColor: "rgba(198, 179, 126, 0.12)",
            boxShadow: "0 0 0 1px rgba(10, 10, 10, 0.2), 0 0 20px rgba(198, 179, 126, 0.35)",
            borderRadius: "9999px",
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(dot, {
            scale: 0.6,
            opacity: 0.8,
            duration: 0.2,
            ease: "power2.out",
          });
          break;

        case "TEXT":
          // Editorial vertical beam cursor
          gsap.to(ring, {
            scale: 1,
            scaleX: 0.15,
            scaleY: 0.8,
            borderColor: "#0A0A0A",
            backgroundColor: "#C6B37E",
            boxShadow: "0 0 0 1px rgba(198, 179, 126, 0.5)",
            borderRadius: "2px",
            duration: 0.22,
            ease: "power2.out",
          });
          gsap.to(dot, {
            scale: 0,
            opacity: 0,
            duration: 0.15,
            ease: "power2.out",
          });
          break;

        case "IMAGE":
          // Slightly expanded circular mode with gentle transparency
          gsap.to(ring, {
            scale: 1.4,
            scaleX: 1.4,
            scaleY: 1.4,
            borderColor: "rgba(198, 179, 126, 0.85)",
            backgroundColor: "rgba(10, 10, 10, 0.4)",
            boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.15)",
            borderRadius: "9999px",
            duration: 0.28,
            ease: "power2.out",
          });
          gsap.to(dot, {
            scale: 0.5,
            opacity: 0.6,
            duration: 0.2,
            ease: "power2.out",
          });
          break;

        case "HIDDEN":
          // Hidden over text fields to preserve native editing cursor
          gsap.to(container, { opacity: 0, duration: 0.15 });
          break;

        case "DEFAULT":
        default:
          gsap.to(container, { opacity: 1, duration: 0.2 });
          gsap.to(ring, {
            scale: 1,
            scaleX: 1,
            scaleY: 1,
            borderColor: "#C6B37E",
            backgroundColor: "rgba(198, 179, 126, 0.08)",
            boxShadow: "0 0 0 1px rgba(10, 10, 10, 0.18), 0 0 16px rgba(198, 179, 126, 0.25)",
            borderRadius: "9999px",
            duration: 0.28,
            ease: "power2.out",
          });
          gsap.to(dot, {
            scale: 1,
            opacity: 1,
            duration: 0.2,
            ease: "power2.out",
          });
          break;
      }
    };

    // Subtle Magnetic Interaction
    const handleMagneticMove = (e: MouseEvent, target: HTMLElement) => {
      if (prefersReduced) return;
      const rect = target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;

      const pull = 0.15;
      const maxPull = 4;
      const moveX = Math.max(-maxPull, Math.min(maxPull, distX * pull));
      const moveY = Math.max(-maxPull, Math.min(maxPull, distY * pull));

      gsap.to(target, {
        x: moveX,
        y: moveY,
        duration: 0.2,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const resetMagneticTarget = (target: HTMLElement | null) => {
      if (!target) return;
      gsap.to(target, {
        x: 0,
        y: 0,
        duration: 0.45,
        ease: "elastic.out(1, 0.4)",
        overwrite: "auto",
      });
    };

    // Mouse Event Listeners
    const handleMouseMove = (e: MouseEvent) => {
      if (!hasInitializedRef.current) {
        hasInitializedRef.current = true;
        document.documentElement.classList.add("custom-cursor-active");
        gsap.to(container, { opacity: 1, duration: 0.15, overwrite: "auto" });
      }

      setDotX(e.clientX);
      setDotY(e.clientY);
      setRingX(e.clientX);
      setRingY(e.clientY);

      // Check magnetic attraction on key CTAs
      if (magneticTargetRef.current) {
        handleMagneticMove(e, magneticTargetRef.current);
      }
    };

    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Input / Textarea safety check: hide custom cursor to keep native caret
      if (target.closest("input, textarea, [contenteditable='true'], select")) {
        applyMode("HIDDEN");
        return;
      }

      // Check for magnetic CTA targets (LIVE, GITHUB, CONTACT, [data-magnetic])
      const magneticEl = target.closest<HTMLElement>(
        "a.group\\/live, a[href*='github.com'], a[href='#contact'], [data-magnetic='true']"
      );
      if (magneticEl) {
        magneticTargetRef.current = magneticEl;
      } else if (magneticTargetRef.current) {
        resetMagneticTarget(magneticTargetRef.current);
        magneticTargetRef.current = null;
      }

      // 1. Links & Interactive Buttons
      const clickable = target.closest("a, button, [role='button'], .cursor-pointer, [data-cursor='pointer']");
      if (clickable) {
        applyMode("LINK");
        return;
      }

      // 2. Project Cards
      const card = target.closest("[data-project-card], article, [data-cursor='card']");
      if (card) {
        applyMode("CARD");
        return;
      }

      // 3. Images and Visual Media
      const media = target.closest("img, video, canvas, [data-cursor='image']");
      if (media) {
        applyMode("IMAGE");
        return;
      }

      // 4. Selectable / Readable Body Text
      const textNode = target.closest("p, blockquote, .editorial-prose");
      if (textNode) {
        applyMode("TEXT");
        return;
      }

      // Default state
      applyMode("DEFAULT");
    };

    const handleMouseLeave = () => {
      if (magneticTargetRef.current) {
        resetMagneticTarget(magneticTargetRef.current);
        magneticTargetRef.current = null;
      }
      gsap.to(container, { opacity: 0, duration: 0.2, overwrite: "auto" });
    };

    const handleMouseEnter = () => {
      if (currentModeRef.current !== "HIDDEN") {
        gsap.to(container, { opacity: 1, duration: 0.15, overwrite: "auto" });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handlePointerOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handlePointerOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (magneticTargetRef.current) {
        resetMagneticTarget(magneticTargetRef.current);
      }
    };
  }, []);

  // Synchronize contextual state (e.g. from useCursor() on project cards)
  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    if (contextState === "VIEW" || contextState === "OPEN") {
      gsap.to(ring, {
        scale: 1.8,
        scaleX: 1.8,
        scaleY: 1.8,
        borderColor: "#C6B37E",
        backgroundColor: "rgba(10, 10, 10, 0.88)",
        borderRadius: "9999px",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(dot, { scale: 0, opacity: 0, duration: 0.2 });
    }
  }, [contextState]);

  const displayBadge =
    contextLabel || (contextState === "VIEW" ? "VIEW ↗" : contextState === "OPEN" ? "OPEN ↗" : null);

  return (
    <div
      ref={containerRef}
      className="custom-cursor fixed inset-0 pointer-events-none z-[99999] overflow-hidden opacity-0 will-change-[opacity]"
      aria-hidden="true"
    >
      {/* Outer Eased Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-[38px] h-[38px] rounded-full flex items-center justify-center will-change-transform select-none backdrop-blur-[1px]"
        style={{
          transformOrigin: "center center",
          border: "2px solid #C6B37E",
          backgroundColor: "rgba(198, 179, 126, 0.08)",
          boxShadow: "0 0 0 1px rgba(10, 10, 10, 0.18), 0 0 16px rgba(198, 179, 126, 0.25)",
        }}
      >
        {displayBadge && (
          <span
            ref={labelRef}
            className="text-[9px] font-mono tracking-widest text-[#0A0A0A] font-bold px-1.5 py-0.5 rounded-full bg-[#C6B37E] whitespace-nowrap shadow-sm"
          >
            {displayBadge}
          </span>
        )}
      </div>

      {/* Inner Fast Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[8px] h-[8px] rounded-full will-change-transform"
        style={{
          transformOrigin: "center center",
          backgroundColor: "#C6B37E",
          boxShadow: "0 0 0 1.5px #0A0A0A, 0 0 10px rgba(198, 179, 126, 0.9)",
        }}
      />
    </div>
  );
}
