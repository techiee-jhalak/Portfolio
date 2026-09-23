"use client";

/**
 * useActiveSection — Phase 3
 *
 * Detects which portfolio section is currently in view using IntersectionObserver.
 * Drives the active nav-link highlight in both desktop and mobile nav.
 * Cleans up observers on unmount.
 */

import { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/lib/constants";

type SectionId = (typeof NAV_ITEMS)[number]["id"];

export function useActiveSection(): SectionId | null {
  const [activeId, setActiveId] = useState<SectionId | null>(null);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(id as SectionId);
            }
          });
        },
        {
          // Fire when section enters the top 20-70% of the viewport
          rootMargin: "-10% 0px -70% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return activeId;
}
