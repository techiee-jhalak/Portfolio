"use client";

import React, { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { socialLinksData } from "@/data/socials";
import { useActiveSection } from "@/lib/hooks";
import { NavLink } from "./nav-link";

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  theme?: "light" | "dark";
}

export function MobileNav({ isOpen, onToggle, onClose, theme = "dark" }: MobileNavProps) {
  const activeSectionId = useActiveSection();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isLight = theme === "light";

  // Handle body scroll lock & Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("scroll-locked");

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);

      return () => {
        document.body.classList.remove("scroll-locked");
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.classList.remove("scroll-locked");
    }
  }, [isOpen, onClose]);

  const handleLinkClick = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <div className="md:hidden">
      {/* Menu Trigger Button */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest py-1 px-2.5 transition-colors focus-visible:outline-none focus-visible:ring-1 ${
          isLight
            ? "text-[#111111] border border-[rgba(17,17,17,0.25)] hover:border-[#111111] focus-visible:ring-[#111111]"
            : "text-[#F5F2ED] border border-[rgba(245,242,237,0.25)] hover:border-[#F5F2ED] focus-visible:ring-[#C6B37E]"
        }`}
      >
        <span className={isLight ? "text-[#111111] font-bold" : "text-[#C6B37E] font-bold"} aria-hidden="true">
          {isOpen ? "✕" : "+"}
        </span>
        <span>{isOpen ? "CLOSE" : "MENU"}</span>
      </button>

      {/* Full-Screen Overlay — Warm Cream Editorial Atmosphere */}
      {isOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          ref={menuRef}
          className="fixed inset-0 z-50 flex flex-col bg-[#F1E8E0] text-[#111111] px-6 py-6 overflow-y-auto animate-in fade-in duration-200"
        >
          {/* Header Row in Overlay */}
          <div className="flex items-center justify-between border-b border-[rgba(17,17,17,0.12)] pb-5">
            <Link
              href="/"
              onClick={handleLinkClick}
              className="flex items-center gap-2.5 font-display text-sm font-semibold tracking-wider uppercase text-[#111111]"
            >
              <span className="h-1.5 w-1.5 bg-[#111111]" aria-hidden="true" />
              <span>{SITE_CONFIG.logotype}</span>
            </Link>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#111111] py-1 px-3 border border-[rgba(17,17,17,0.3)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#111111]"
            >
              <span className="font-bold" aria-hidden="true">✕</span>
              <span>CLOSE</span>
            </button>
          </div>

          {/* Nav Items List with Editorial Numbers */}
          <nav aria-label="Mobile navigation links" className="flex-1 py-8">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#77736D] mb-4 select-none">
              {"// Navigation Index"}
            </div>
            <ul className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <NavLink
                    href={item.href}
                    index={item.index}
                    label={item.label}
                    isActive={activeSectionId === item.id}
                    onClick={handleLinkClick}
                    variant="mobile"
                    theme="light"
                  />
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Editorial Meta Information */}
          <div className="border-t border-[rgba(17,17,17,0.12)] pt-6 mt-auto space-y-4">
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-[#77736D]">
              <span className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#111111] animate-pulse" />
                Available for work
              </span>
              <span>2026 // v2.0</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-2">
              {socialLinksData.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#111111] hover:text-[#77736D] transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#111111]"
                >
                  <span>{social.platform}</span>
                  <span className="text-[10px]">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
