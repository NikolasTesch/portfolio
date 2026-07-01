import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7b39fc",
          dark: "#2b2344",
        },
        bg: "var(--bg)",
        surface: "var(--surface)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        border: "var(--border)",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)", "sans-serif"],
        cabin: ["var(--font-cabin)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 10px 40px -10px rgba(123,57,252,0.5)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "drift-a": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(8vw, 6vh) scale(1.15)" },
          "66%": { transform: "translate(-6vw, 10vh) scale(0.9)" },
        },
        "drift-b": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-10vw, -8vh) scale(1.1)" },
          "66%": { transform: "translate(7vw, -5vh) scale(1.2)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "drift-a": "drift-a 22s ease-in-out infinite",
        "drift-b": "drift-b 28s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
