"use client";

import { forwardRef, useCallback, useEffect, useMemo, useState } from "react";
import { ThemeTogglerProps } from "./ThemeToggler.type";
import { useTheme } from "next-themes";

export const ThemeToggler = forwardRef<HTMLButtonElement, ThemeTogglerProps>(
  (props, ref) => {
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

    if (!isMounted) {
      return null;
    }

    return (
      <button
        ref={ref}
        onClick={handleThemeChange}
        className="uppercase"
        {...props}
      >
        {currentTheme}
      </button>
    );
  }
);

ThemeToggler.displayName = "ThemeToggler";
