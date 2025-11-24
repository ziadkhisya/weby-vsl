import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F14",
        "ink-2": "#0F1520",
        grid: "#10151d",
        accent: "#4C77FF",
        "accent-2": "#9DB4FF",
      },
      fontFamily: {
        sans: [
          "var(--font-poppins)",
          "Poppins",
          ...defaultTheme.fontFamily.sans,
        ],
        display: [
          "var(--font-poppins)",
          "Poppins",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
          lg: "3rem",
        },
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [typography, forms, aspectRatio],
};

export default config;
