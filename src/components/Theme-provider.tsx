"use client";

import type * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Inline type for NextThemesProvider props, compatible with next-themes
interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
