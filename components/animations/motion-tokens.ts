"use client";

/**
 * Motion Tokens — Phase 2 Animation Architecture
 *
 * Reusable preset variants for Framer Motion / Motion One.
 * All presets respect prefers-reduced-motion.
 * Heavy GSAP + Lenis integration deferred to Phase 3.
 */

// ─── Easing Curves ─────────────────────────────────────────────────────────

export const EASING = {
  /** Fast out, slow in — natural deceleration */
  standard: [0.16, 1, 0.3, 1] as const,
  /** Sharp entry — snappy editorial feel */
  sharp: [0.4, 0, 0.2, 1] as const,
  /** Ease out — default fade/slide */
  easeOut: [0, 0, 0.2, 1] as const,
  /** Linear — for opacity only */
  linear: [0, 0, 1, 1] as const,
} as const;

// ─── Duration Scale ─────────────────────────────────────────────────────────

export const DURATION = {
  fast: 0.18,
  base: 0.35,
  slow: 0.55,
  verySlow: 0.9,
} as const;

// ─── Motion Variant Presets ─────────────────────────────────────────────────

/**
 * Fade In — opacity only, zero translation
 */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.base, ease: EASING.easeOut },
  },
} as const;

/**
 * Fade Up — subtle upward translate + fade
 */
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASING.standard },
  },
} as const;

/**
 * Fade Down — from above
 */
export const fadeDown = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASING.standard },
  },
} as const;

/**
 * Slide In from Left
 */
export const slideLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASING.standard },
  },
} as const;

/**
 * Slide In from Right
 */
export const slideRight = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASING.standard },
  },
} as const;

/**
 * Scale In — for cards and elements that grow in from slightly smaller
 */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.slow, ease: EASING.standard },
  },
} as const;

/**
 * Stagger Container — wraps children with staggered delay
 */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
} as const;

/**
 * Text Reveal — for character/word-level animation (use with split text later)
 */
export const textReveal = {
  hidden: { opacity: 0, y: "110%", clipPath: "inset(0 0 100% 0)" },
  visible: {
    opacity: 1,
    y: "0%",
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: DURATION.slow, ease: EASING.standard },
  },
} as const;

/**
 * Line Reveal — for horizontal dividers/underlines drawing across
 */
export const lineReveal = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: DURATION.slow, ease: EASING.standard },
  },
} as const;

// ─── Reduced Motion Safe Variants ───────────────────────────────────────────

/**
 * Returns the full variant if motion is allowed, or an instant no-animation
 * variant if prefers-reduced-motion is active.
 * Usage: pass `reducedMotion` flag from useReducedMotion().
 */
export function safeVariant<T extends object>(
  variant: T,
  reducedMotion: boolean
): T | { hidden: object; visible: object } {
  if (reducedMotion) {
    return {
      hidden: { opacity: 1 },
      visible: { opacity: 1, transition: { duration: 0 } },
    };
  }
  return variant;
}

// ─── Cursor State Types (modular, for future custom cursor) ─────────────────

export type CursorState = "DEFAULT" | "VIEW" | "OPEN" | "IMAGE";

export interface CursorConfig {
  state: CursorState;
  label?: string;
}
