import React from "react";
import { Container } from "@/components/layout/container";
import { profileData } from "@/data/profile";
import { socialLinksData } from "@/data/socials";

/**
 * Editorial Site Footer — Final Visual Rebuild
 *
 * Minimal deep black (#080808) publication colophon:
 * - JHALAK OMAR
 * - AI / ML · RESEARCH · FULL STACK
 * - GREATER LUCKNOW AREA, INDIA
 * - Typography-based links (GITHUB ↗, LINKEDIN ↗, LEETCODE ↗, EMAIL ↗)
 * - 2026
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#080808] text-[#F5F2ED] border-t border-[rgba(245,242,237,0.10)] py-12 sm:py-16" role="contentinfo">
      <Container size="wide">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          {/* Identity & Technical Domain */}
          <div className="space-y-2">
            <h2 className="font-display text-sm sm:text-base font-bold uppercase tracking-wider text-[#F5F2ED]">
              {profileData.name}
            </h2>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#77736D]">
              AI / ML · RESEARCH · FULL STACK
            </p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#77736D]/60">
              {profileData.location.toUpperCase()}
            </p>
          </div>

          {/* Typography Links & Year */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
            <nav aria-label="Footer links">
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {socialLinksData.map((social) => (
                  <li key={social.platform}>
                    <a
                      href={social.url}
                      target={social.platform === "Email" ? undefined : "_blank"}
                      rel={social.platform === "Email" ? undefined : "noopener noreferrer"}
                      className="font-mono text-[11px] uppercase tracking-widest text-[#77736D] hover:text-[#F5F2ED] transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6B37E]"
                    >
                      <span>{social.platform}</span>
                      <span className="text-[10px]" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D] select-none">
              &copy; {currentYear}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
