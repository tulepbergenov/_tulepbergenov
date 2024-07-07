"use client";

import { Layout } from "@/shared/types";
import { ReactLenis } from "lenis/react";

export const Lenis = ({ children }: Layout) => {
  return <ReactLenis root>{children}</ReactLenis>;
};
