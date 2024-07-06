"use client";

import { Layout } from "@/shared/types";
import { ReactLenis, useLenis } from "lenis/react";

export const Lenis = ({ children }: Layout) => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return <ReactLenis root>{children}</ReactLenis>;
};
