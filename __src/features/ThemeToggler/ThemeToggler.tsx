"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ThemeTogglerProps } from "./ThemeToggler.type";
import { cn } from "@/shared/lib";

export const ThemeToggler = ({ className, ...props }: ThemeTogglerProps) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  const currentTheme = useMemo(() => {
    return theme === "system" ? systemTheme : theme;
  }, [theme, systemTheme]);

  const handleThemeChange = useCallback(() => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  }, [currentTheme, setTheme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <AnimatePresence mode="popLayout">
      {isMounted && (
        <motion.button
          initial={{
            opacity: 0,
          }}
          exit={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          onClick={handleThemeChange}
          className={cn("uppercase", className)}
          aria-label={`Switch to ${
            currentTheme === "dark" ? "light" : "dark"
          } mode`}
          title={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
          {...props}
        >
          {currentTheme === "dark" ? "Light" : "Dark"}
        </motion.button>
      )}
    </AnimatePresence>
  );
};
