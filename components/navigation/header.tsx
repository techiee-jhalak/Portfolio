"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SITE_CONFIG } from "@/lib/constants";
import { useScrolled, useActiveSection } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

/**
 * Editorial Site Header — Adapts dynamically across Cream (#F1E9DF) and Black (#080808) surfaces.
 *
 * Requirements:
 * - Directly on cream canvas at hero top: no heavy container, no floating pill, no glass background.
 * - Tiny typography compared to hero display scale.
 * - Dynamic light/dark theme awareness based on active section.
 */
export function Header() {
  const isScrolled = useScrolled(30);
  const activeSectionId = useActiveSection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sections with Cream background (#F1E9DF)
  const isLightSection =
    !activeSectionId ||
    activeSectionId === "hero" ||
    activeSectionId === "research" ||
    activeSectionId === "contact";

  const theme = isLightSection ? "light" : "dark";

  return (
    <header
      className="sticky top-0 z-40 w-full transition-colors duration-300"
      role="banner"
    >
      <div
        className={cn(
          "transition-all duration-300",
          !isScrolled
            ? "bg-transparent border-b border-transparent py-2"
            : isLightSection
            ? "bg-[#F1E8E0]/95 backdrop-blur-md border-b border-[rgba(17,17,17,0.10)] py-0.5"
            : "bg-[#080808]/95 backdrop-blur-md border-b border-[rgba(245,242,237,0.08)] py-0.5"
        )}
      >
        <Container size="wide">
          <div className="flex h-13 items-center justify-between">
            {/* Editorial Logotype */}
            <Link
              href="/"
              aria-label={`${SITE_CONFIG.name} — return to top`}
              className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#111111]"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "inline-block h-1.5 w-1.5 transition-transform duration-150 group-hover:scale-125",
                  isLightSection ? "bg-[#111111]" : "bg-[#C6B37E]"
                )}
              />
              <span
                className={cn(
                  "font-display text-sm font-bold tracking-[0.1em] uppercase transition-colors duration-150",
                  isLightSection ? "text-[#111111]" : "text-[#F5F2ED]"
                )}
              >
                {SITE_CONFIG.logotype}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <DesktopNav theme={theme} />

            {/* Mobile Navigation Trigger & Dialog */}
            <MobileNav
              isOpen={mobileMenuOpen}
              onToggle={() => setMobileMenuOpen((prev) => !prev)}
              onClose={() => setMobileMenuOpen(false)}
              theme={theme}
            />
          </div>
        </Container>
      </div>
    </header>
  );
}
