import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./__src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "fm-inter": ["var(--fm-inter)", "system-ui"],
      },
      colors: {
        "clr-dark": "#141414",
        "clr-light": "#F3F3F3",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [
    require("tailwindcss-text-rendering"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};

export default config;
