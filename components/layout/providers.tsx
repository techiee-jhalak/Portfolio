"use client";

import React from "react";
import { CursorProvider } from "@/components/animations/cursor-context";
import { CustomCursor } from "@/components/animations/custom-cursor";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll";
import { Preloader } from "@/components/animations/preloader";

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Root Client Providers boundary
 * Combines Preloader, Cursor context, Custom Cursor visual layer, and Lenis smooth scrolling.
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <CursorProvider>
      <SmoothScrollProvider>
        <Preloader />
        <CustomCursor />
        {children}
      </SmoothScrollProvider>
    </CursorProvider>
  );
}
