"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/container";
import { profileData } from "@/data/profile";
import { socialLinksData } from "@/data/socials";
import { CircularBadge } from "@/components/ui/circular-badge";

/**
 * Contact Section — Specification Compliant
 *
 * Warm Cream (#F1E8E0) editorial closing poster.
 * Features:
 * - Enormous closing statement
 * - LEFT: Glass information rows (Email, LinkedIn, GitHub, Location)
 * - RIGHT: Glass form fields (Name, Email, Message) + submit button
 * - Orbit badge
 */
export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const email = profileData.email || "jhalakomar2006@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens mailto with pre-filled content
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(formData.message);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      data-section
      aria-label="Contact & Inquiries"
      className="relative bg-[#F1E8E0] text-[#111111] editorial-grid-light border-b border-[rgba(17,17,17,0.12)] py-24 sm:py-32 lg:py-44 overflow-hidden"
    >
      <Container size="wide">
        {/* ── 1. Section Index ─────────────────────────────────────────── */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <span className="font-mono text-[10px] font-semibold tracking-widest text-[#C6B37E] uppercase">
            07
          </span>
          <span className="h-[1px] w-8 bg-[#111111]/30" aria-hidden="true" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D]">
            CONTACT & INVITATION
          </span>
        </div>

        {/* ── 2. Enormous Closing Poster Statement & Badge ─────────────── */}
        <div className="mb-16 sm:mb-24 lg:mb-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-9">
            <h2
              className="font-display font-bold uppercase text-[#111111] leading-[0.85] tracking-tighter"
              style={{
                fontSize: "clamp(3.5rem, 11vw, 10.5rem)",
              }}
            >
              <span className="block typography-stretched">LET&apos;S BUILD</span>
              <span className="block typography-stretched">SOMETHING</span>
              <span className="block typography-stretched text-[#C6B37E]">INTELLIGENT.</span>
            </h2>
          </div>

          <div className="lg:col-span-3 flex lg:justify-end pb-2">
            <CircularBadge
              text="LET'S WORK TOGETHER • JHALAK OMAR • 2026 • "
              centerText="↗"
              theme="dark"
              size={124}
              href={`mailto:${email}`}
            />
          </div>
        </div>

        {/* ── 3. Opening Header Rule ──────────────────────────────────── */}
        <div className="flex items-center gap-4 border-t border-[rgba(17,17,17,0.14)] pt-4 mb-16 sm:mb-20">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D] select-none">
            COMMUNICATION CHANNELS
          </span>
          <span className="h-[1px] flex-1 bg-[rgba(17,17,17,0.10)]" aria-hidden="true" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D] select-none hidden sm:inline">
            DIRECT EMAIL // REPOSITORIES // DIALOGUE
          </span>
        </div>

        {/* ── 4. Main Contact Grid: Glass Info Rows + Glass Form ────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-start">
          {/* LEFT: Glass Information Rows */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D] block mb-4">
              CONTACT DETAILS
            </span>

            {/* Email Row */}
            <a
              href={`mailto:${email}`}
              className="group flex items-center justify-between p-4 rounded-xl bg-[#0A0A0A]/[0.04] border border-[rgba(17,17,17,0.10)] hover:border-[#C6B37E]/40 transition-all duration-200"
            >
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#77736D] block">EMAIL</span>
                <span className="font-display text-sm font-semibold text-[#111111] group-hover:text-[#C6B37E] transition-colors">{email}</span>
              </div>
              <span className="text-[#77736D] group-hover:text-[#C6B37E] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>

            {/* LinkedIn Row */}
            {socialLinksData
              .filter((s) => s.platform !== "Email")
              .map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl bg-[#0A0A0A]/[0.04] border border-[rgba(17,17,17,0.10)] hover:border-[#C6B37E]/40 transition-all duration-200"
                >
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#77736D] block">{social.platform.toUpperCase()}</span>
                    <span className="font-display text-sm font-semibold text-[#111111] group-hover:text-[#C6B37E] transition-colors">{social.username}</span>
                  </div>
                  <span className="text-[#77736D] group-hover:text-[#C6B37E] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </a>
              ))}

            {/* Location Row */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-[#0A0A0A]/[0.04] border border-[rgba(17,17,17,0.10)]">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#77736D] block">LOCATION</span>
                <span className="font-display text-sm font-semibold text-[#111111]">Greater Lucknow Area, India</span>
              </div>
            </div>

            {/* Copy email helper */}
            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="font-mono text-[11px] uppercase tracking-widest text-[#77736D] hover:text-[#111111] border-b border-[rgba(17,17,17,0.3)] hover:border-[#111111] pb-0.5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6B37E]"
              >
                {copied ? "COPIED ✓" : "COPY EMAIL"}
              </button>
              <span className="font-mono text-[10px] text-[#C6B37E] font-medium">● INBOX ACTIVE</span>
            </div>
          </div>

          {/* RIGHT: Glass Form Fields */}
          <div className="lg:col-span-7 lg:pl-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D] block mb-4">
              SEND A MESSAGE
            </span>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name field */}
              <div className="p-4 rounded-xl bg-[#0A0A0A]/[0.04] border border-[rgba(17,17,17,0.10)] focus-within:border-[#C6B37E]/50 transition-colors">
                <label className="font-mono text-[9px] uppercase tracking-widest text-[#77736D] block mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Your name"
                  className="w-full bg-transparent font-display text-sm text-[#111111] placeholder:text-[#77736D]/50 outline-none"
                  required
                />
              </div>

              {/* Email field */}
              <div className="p-4 rounded-xl bg-[#0A0A0A]/[0.04] border border-[rgba(17,17,17,0.10)] focus-within:border-[#C6B37E]/50 transition-colors">
                <label className="font-mono text-[9px] uppercase tracking-widest text-[#77736D] block mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder="your@email.com"
                  className="w-full bg-transparent font-display text-sm text-[#111111] placeholder:text-[#77736D]/50 outline-none"
                  required
                />
              </div>

              {/* Message field */}
              <div className="p-4 rounded-xl bg-[#0A0A0A]/[0.04] border border-[rgba(17,17,17,0.10)] focus-within:border-[#C6B37E]/50 transition-colors">
                <label className="font-mono text-[9px] uppercase tracking-widest text-[#77736D] block mb-2">
                  MESSAGE
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell me about your project or collaboration idea..."
                  rows={4}
                  className="w-full bg-transparent font-display text-sm text-[#111111] placeholder:text-[#77736D]/50 outline-none resize-none"
                  required
                />
              </div>

              {/* Submit button — light pill */}
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#F4F4F4] text-[#111111] font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#111111] hover:text-[#F4F4F4] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6B37E] focus-visible:ring-offset-2"
              >
                SEND MESSAGE
                <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </div>

        {/* ── 5. Closing Status ─────────────────────────────────────────── */}
        <div className="mt-20 sm:mt-28 flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(17,17,17,0.12)] pt-8">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#111111]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C6B37E] animate-pulse" aria-hidden="true" />
            <span>AVAILABLE FOR WORK // 2026</span>
          </div>

          <span className="font-mono text-[9px] uppercase tracking-widest text-[#77736D] select-none">
            PORTFOLIO // JHALAK OMAR
          </span>
        </div>
      </Container>
    </section>
  );
}
