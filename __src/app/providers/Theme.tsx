"use client";

import { Layout } from "@/shared/types";
import { ThemeProvider } from "next-themes";

export const Theme = ({ children }: Layout) => {
  return <ThemeProvider attribute="data-theme">{children}</ThemeProvider>;
};
