/**
 * Animation Configuration & Types
 * Prepares the architectural foundation for Motion (Framer Motion), GSAP, and Lenis.
 * Supports prefers-reduced-motion to ensure strict accessibility.
 */

export interface TransitionConfig {
  duration?: number;
  delay?: number;
  ease?: string | number[];
}

export const ANIMATION_PRESETS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  },
  fadeUp: {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  staggerContainer: {
    transition: { staggerChildren: 0.1 },
  },
} as const;
