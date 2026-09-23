import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { getProjectBySlug, projectsData } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="flex-1 bg-[#080808] text-[#F5F2ED] editorial-grid-dark py-16 sm:py-24 lg:py-32 min-h-screen">
      <Container className="max-w-5xl">
        {/* Back navigation */}
        <div className="mb-12 sm:mb-16">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#77736D] hover:text-[#F5F2ED] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6B37E]"
          >
            <span aria-hidden="true">←</span>
            BACK TO SELECTED WORK
          </Link>
        </div>

        <article>
          {/* Header */}
          <header className="space-y-8 border-b border-[rgba(245,242,237,0.12)] pb-12 sm:pb-16 mb-12 sm:mb-16">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#C6B37E]">
                {project.category}
              </span>
              {project.year && (
                <>
                  <span className="h-[1px] w-6 bg-[rgba(245,242,237,0.2)]" aria-hidden="true" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D]">
                    {project.year}
                  </span>
                </>
              )}
            </div>

            <h1
              className="font-display font-bold uppercase text-[#F5F2ED] leading-none tracking-tighter"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 6.5rem)",
                lineHeight: "0.88",
              }}
            >
              {project.title}
            </h1>

            <p className="font-mono text-sm sm:text-base text-[#77736D] leading-relaxed max-w-2xl">
              {project.shortDescription}
            </p>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-widest text-[#F5F2ED] border-b border-[#F5F2ED]/40 pb-0.5 hover:text-[#C6B37E] hover:border-[#C6B37E] transition-colors flex items-center gap-1.5"
                >
                  LIVE SYSTEM
                  <span>↗</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-widest text-[#77736D] hover:text-[#F5F2ED] transition-colors flex items-center gap-1.5"
                >
                  GITHUB REPOSITORY
                  <span>↗</span>
                </a>
              )}
            </div>
          </header>

          {/* Body Sections */}
          <div className="space-y-16 sm:space-y-20">
            {/* Overview */}
            {project.detailedDescription && (
              <section aria-label="Project overview">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C6B37E]">OVERVIEW</span>
                  <span className="h-[1px] flex-1 bg-[rgba(245,242,237,0.10)]" aria-hidden="true" />
                </div>
                <p className="font-display text-base sm:text-lg text-[#F5F2ED]/90 leading-relaxed max-w-3xl">
                  {project.detailedDescription}
                </p>
              </section>
            )}

            {/* Problem & Solution */}
            {(project.problem || project.solution) && (
              <section
                aria-label="Problem and solution"
                className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16"
              >
                {project.problem && (
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D]">PROBLEM</span>
                      <span className="h-[1px] flex-1 bg-[rgba(245,242,237,0.08)]" aria-hidden="true" />
                    </div>
                    <p className="font-mono text-xs sm:text-[13px] text-[#77736D] leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                )}
                {project.solution && (
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#C6B37E]">SOLUTION</span>
                      <span className="h-[1px] flex-1 bg-[rgba(245,242,237,0.08)]" aria-hidden="true" />
                    </div>
                    <p className="font-mono text-xs sm:text-[13px] text-[#F5F2ED]/90 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
              </section>
            )}

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <section aria-label="Key features">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D]">KEY ARCHITECTURAL HIGHLIGHTS</span>
                  <span className="h-[1px] flex-1 bg-[rgba(245,242,237,0.10)]" aria-hidden="true" />
                </div>
                <ul className="divide-y divide-[rgba(245,242,237,0.10)]">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 py-3.5">
                      <span className="font-mono text-[10px] text-[#77736D] mt-0.5 tabular-nums shrink-0 w-5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-xs sm:text-[13px] text-[#F5F2ED]/85 leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Technologies */}
            {project.technologies.length > 0 && (
              <section aria-label="Technologies">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D]">TECH STACK</span>
                  <span className="h-[1px] flex-1 bg-[rgba(245,242,237,0.10)]" aria-hidden="true" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="font-mono text-[10px] uppercase px-3 py-1 border border-[rgba(245,242,237,0.12)] bg-[#101010] text-[#77736D]">
                      {t}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Footer Navigation */}
          <footer className="mt-20 sm:mt-24 pt-8 border-t border-[rgba(245,242,237,0.12)] flex items-center justify-between">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#77736D] hover:text-[#F5F2ED] transition-colors"
            >
              <span>←</span>
              <span>SELECTED WORK</span>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#77736D] hover:text-[#F5F2ED] transition-colors"
            >
              <span>FULL ARCHIVE</span>
              <span>→</span>
            </Link>
          </footer>
        </article>
      </Container>
    </main>
  );
}
