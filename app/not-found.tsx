import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center py-32">
      <Container size="narrow" className="text-center space-y-8">

        {/* Large 404 */}
        <div className="relative inline-block">
          <span
            aria-hidden="true"
            className="font-display text-[10rem] sm:text-[14rem] font-bold leading-none tracking-tight text-border select-none"
          >
            404
          </span>
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Route not found
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-display text-lg font-semibold text-foreground">
            This page does not exist.
          </p>
          <p className="font-mono text-xs text-muted tracking-wide max-w-sm mx-auto">
            The route you&apos;re looking for may have been moved or removed.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted hover:text-accent transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
        >
          <span aria-hidden="true">&larr;</span>
          Return to index
        </Link>
      </Container>
    </main>
  );
}
