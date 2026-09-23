"use client";

import React from "react";
import { NAV_ITEMS } from "@/lib/constants";
import { useActiveSection } from "@/lib/hooks";
import { NavLink } from "./nav-link";

interface DesktopNavProps {
  theme?: "light" | "dark";
}

export function DesktopNav({ theme = "dark" }: DesktopNavProps) {
  const activeSectionId = useActiveSection();
  const isLight = theme === "light";

  return (
    <div className="hidden md:flex items-center gap-5 lg:gap-8">
      {/* Availability indicator */}
      <span className="hidden xl:inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest select-none text-[#77736D]">
        <span
          aria-hidden="true"
          className={`inline-block h-1.5 w-1.5 rounded-full ${
            isLight ? "bg-[#111111]" : "bg-[#C6B37E]"
          } animate-pulse`}
        />
        Available for work
      </span>

      {/* Nav items list */}
      <nav aria-label="Main navigation">
        <ul className="flex items-center gap-4 lg:gap-5 xl:gap-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <NavLink
                href={item.href}
                label={item.label}
                isActive={activeSectionId === item.id}
                variant="desktop"
                theme={theme}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
