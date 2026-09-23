"use client";

/**
 * Cursor Context — Architecture Preparation
 *
 * Provides a React context for future custom cursor state management.
 * The cursor itself (visual layer) has NOT been implemented yet — this is
 * the modular infrastructure that future components will consume via
 * useCursor() without touching layout.
 *
 * States: DEFAULT | VIEW | OPEN | IMAGE
 */

import React, { createContext, useContext, useState, useCallback } from "react";
import type { CursorState } from "./motion-tokens";

interface CursorContextValue {
  state: CursorState;
  label: string | undefined;
  setCursor: (state: CursorState, label?: string) => void;
  resetCursor: () => void;
}

const CursorContext = createContext<CursorContextValue>({
  state: "DEFAULT",
  label: undefined,
  setCursor: () => {},
  resetCursor: () => {},
});

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<CursorState>("DEFAULT");
  const [label, setLabel] = useState<string | undefined>(undefined);

  const setCursor = useCallback((newState: CursorState, newLabel?: string) => {
    setState(newState);
    setLabel(newLabel);
  }, []);

  const resetCursor = useCallback(() => {
    setState("DEFAULT");
    setLabel(undefined);
  }, []);

  return (
    <CursorContext.Provider value={{ state, label, setCursor, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
}

/**
 * Hook — use this in any component to read or set cursor state.
 * Example:
 *   const { setCursor, resetCursor } = useCursor();
 *   <div onMouseEnter={() => setCursor('VIEW')} onMouseLeave={resetCursor} />
 */
export function useCursor(): CursorContextValue {
  return useContext(CursorContext);
}
