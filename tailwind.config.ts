import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ws: {
          rose: "#c4827a",
          "rose-soft": "#FDF2F0",
          "rose-tint-8": "rgba(196,130,122,0.08)",
          "rose-tint-12": "rgba(196,130,122,0.12)",
          "rose-tint-25": "rgba(196,130,122,0.25)",
          mint: "#b4dbbb",
          destructive: "#C77D7D",
          canvas: "#F5F0EC",
          surface: "#FFFFFF",
          secondary: "#EFECE5",
          muted: "#E8E4DB",
          border: "#EAE5DB",
          "border-soft": "rgba(234,229,219,0.4)",
          hairline: "#f2f2f2",
          fg: "#1a1a1a",
          "fg-soft": "#333132",
          "fg-muted": "#6b6b6b",
          "fg-warm": "#7D7975",
          footer: "#EEE7DF",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      borderRadius: {
        "ws-xs": "6px",
        "ws-sm": "10px",
        "ws-md": "14px",
        "ws-lg": "16px",
        "ws-xl": "20px",
        "ws-2xl": "28px",
      },
      boxShadow: {
        "ws-card": "0 4px 20px rgba(0,0,0,0.04)",
        "ws-input": "0 2px 8px rgba(0,0,0,0.04)",
        "ws-primary": "0 8px 16px rgba(196,130,122,0.20)",
        "ws-sheet": "0 -8px 24px rgba(0,0,0,0.08)",
        "ws-phone":
          "0 40px 80px -20px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,.2)",
      },
      transitionTimingFunction: {
        "ws-spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "ws-out": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: {
        shell: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
