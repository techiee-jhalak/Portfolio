import React from "react";
import { cn } from "@/lib/utils";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

/**
 * Standard Page Wrapper — Phase 3
 * Wraps top-level page views to provide consistent vertical sizing,
 * flex structure, and semantic main tag behavior.
 */
export function PageWrapper({ children, className, id }: PageWrapperProps) {
  return (
    <main
      id={id}
      className={cn("flex-1 flex flex-col w-full", className)}
    >
      {children}
    </main>
  );
}
