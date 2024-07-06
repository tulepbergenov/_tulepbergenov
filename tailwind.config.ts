import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./__src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "app-fm-inter": ["var(--app-fm-inter)", "system-ui"],
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};

export default config;
