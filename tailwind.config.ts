import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#FDFBF7", // Principal off-white background
          light: "#F5EFE6", // Secondary beige background
          wood: "#3E2723", // Dark brown for text
          dark: "#1E1A18", // Almost black for headings/contrast
          parchment: "#EBE3D5", // Border or subtle element color
          champagne: "#C8A96E", // Accent
          gold: "#D4AF37", // Strong Accent
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(62, 39, 35, 0.04)",
        premium: "0 15px 40px rgba(62, 39, 35, 0.08)",
        glow: "0 8px 30px rgba(200, 169, 110, 0.15)",
        "glow-strong": "0 12px 40px rgba(200, 169, 110, 0.25)",
        "card-hover": "0 20px 40px rgba(62, 39, 35, 0.08), 0 0 20px rgba(200, 169, 110, 0.1)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      backgroundImage: {
        "light-gradient":
          "linear-gradient(160deg, #FDFBF7 0%, #F5EFE6 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #C8A96E 0%, #D4AF37 50%, #E8C963 100%)",
        "card-gradient":
          "linear-gradient(145deg, #FFFFFF 0%, #FDFBF7 100%)",
        "section-divider":
          "linear-gradient(90deg, transparent, rgba(200,169,110,0.4), transparent)",
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
          "0%": { transform: "scale(1)", opacity: "0.3" },
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
