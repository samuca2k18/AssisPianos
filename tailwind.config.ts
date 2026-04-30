import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          ebony: "#0A0908",
          charcoal: "#1A1714",
          walnut: "#4A3728",
          parchment: "#F5F0E8",
          champagne: "#C8A96E",
          gold: "#D4AF37",
          cream: "#FAF8F4",
          muted: "#8B7E6A",
        },
      },
      boxShadow: {
        soft: "0 12px 40px rgba(0, 0, 0, 0.15)",
        premium: "0 20px 60px rgba(0, 0, 0, 0.25)",
        glow: "0 0 30px rgba(200, 169, 110, 0.15)",
        "glow-strong": "0 0 50px rgba(200, 169, 110, 0.25)",
        "card-hover": "0 25px 50px rgba(0, 0, 0, 0.3), 0 0 30px rgba(200, 169, 110, 0.08)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      backgroundImage: {
        "premium-gradient":
          "linear-gradient(160deg, #0A0908 0%, #151210 40%, #1A1714 70%, #0F0D0B 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #C8A96E 0%, #D4AF37 50%, #E8C963 100%)",
        "card-gradient":
          "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
        "section-divider":
          "linear-gradient(90deg, transparent, rgba(200,169,110,0.3), transparent)",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.5" },
          "80%, 100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-hint": {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(8px)", opacity: "0.4" },
        },
      },
      animation: {
        shimmer: "shimmer 3s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-delayed": "float-slow 8s ease-in-out 2s infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "scroll-hint": "scroll-hint 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
