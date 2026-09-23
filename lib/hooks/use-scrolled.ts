"use client";

/**
 * useScrolled — Phase 3
 *
 * Returns true once the page has scrolled past a threshold.
 * Used to apply the scrolled visual state to the header.
 */

import { useState, useEffect } from "react";

export function useScrolled(threshold = 40): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > threshold);
    }

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
