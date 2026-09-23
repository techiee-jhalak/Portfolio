import React from "react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Expertise } from "@/components/sections/expertise";
import { Projects } from "@/components/sections/projects";
import { Research } from "@/components/sections/research";
import { Journey } from "@/components/sections/journey";
import { Contact } from "@/components/sections/contact";

/**
 * Portfolio Home Page — Complete Editorial Publication
 *
 * Visual Sequence:
 * 01 / HERO       — Typographic Monolith & Opening Statement
 * 02 / ABOUT      — Identity, Philosophy & Technical Core
 * 03 / EXPERTISE  — Technical Spread & Domains
 * 04 / WORK       — Selected Projects & Asymmetric Case Studies
 * 05 / RESEARCH   — Verified Publication Archive & Inquiries
 * 06 / JOURNEY    — Chronology, Open Source & Milestones
 * 07 / CONTACT    — Oversized Typographic Invitation & Channels
 */
export default function Home() {
  return (
    <PageWrapper>
      {/* ── 01 Opening Experience ─────────────────────────────────────── */}
      <Hero />

      {/* ── 02 Identity & Approach ───────────────────────────────────── */}
      <About />

      {/* ── 03 Technical Expertise ───────────────────────────────────── */}
      <Expertise />

      {/* ── 04 Selected Work ──────────────────────────────────────────── */}
      <Projects />

      {/* ── 05 Research & Inquiries ──────────────────────────────────── */}
      <Research />

      {/* ── 06 Experience & Progression ──────────────────────────────── */}
      <Journey />

      {/* ── 07 Contact & Dialogue ────────────────────────────────────── */}
      <Contact />
    </PageWrapper>
  );
}
