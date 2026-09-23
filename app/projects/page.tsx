import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { projectsData } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work Archive",
  description: "Engineering, machine learning, and research projects by Jhalak Omar.",
};

export default function ProjectsPage() {
  return (
    <PageWrapper className="bg-[#080808] text-[#F5F2ED] editorial-grid-dark py-20 sm:py-28 min-h-screen">
      <Container size="wide">
        {/* Header */}
        <div className="space-y-4 mb-16 border-b border-[rgba(245,242,237,0.12)] pb-8">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-[#C6B37E]">
            <span>04</span>
            <span className="h-[1px] w-6 bg-[rgba(245,242,237,0.2)]" />
            <span>REPOSITORY ARCHIVE</span>
          </div>
          <h1
            className="font-display font-bold uppercase text-[#F5F2ED] leading-none tracking-tighter"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
          >
            PROJECT ARCHIVE
          </h1>
          <p className="font-mono text-xs sm:text-[13px] text-[#77736D] max-w-xl">
            Complete catalogue of verified artificial intelligence pipelines, natural language models, and web applications.
          </p>
        </div>

        {/* Project List */}
        <div className="divide-y divide-[rgba(245,242,237,0.10)]">
          {projectsData.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-8 hover:bg-[#101010] px-4 -mx-4 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6B37E]"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-3 font-mono text-[10px] text-[#C6B37E]">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{"//"}</span>
                  <span className="text-[#77736D]">{project.category}</span>
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] group-hover:text-[#C6B37E] transition-colors">
                  {project.title}
                </h2>
                <p className="font-mono text-xs text-[#77736D] max-w-2xl">{project.shortDescription}</p>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <div className="hidden md:flex flex-wrap gap-1.5 max-w-xs justify-end">
                  {project.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="font-mono text-[9px] uppercase px-2 py-0.5 border border-[rgba(245,242,237,0.10)] text-[#77736D]">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-[#77736D] group-hover:text-[#C6B37E] text-sm transition-transform duration-150 group-hover:translate-x-1 group-hover:-translate-y-1 font-mono">
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-[rgba(245,242,237,0.12)]">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#77736D] hover:text-[#F5F2ED] transition-colors"
          >
            <span>←</span>
            <span>RETURN TO OVERVIEW</span>
          </Link>
        </div>
      </Container>
    </PageWrapper>
  );
}
