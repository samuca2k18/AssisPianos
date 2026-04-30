import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          ebony: "#0E0D0B",
          charcoal: "#1C1917",
          walnut: "#4A3728",
          parchment: "#F3EDE2",
          champagne: "#C8A974",
        },
      },
      boxShadow: {
        soft: "0 12px 40px rgba(0, 0, 0, 0.12)",
        premium: "0 18px 60px rgba(0, 0, 0, 0.18)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      backgroundImage: {
        "premium-noise":
          "radial-gradient(circle at 12% 18%, rgba(200,169,116,0.14), transparent 34%), radial-gradient(circle at 85% 5%, rgba(74,55,40,0.25), transparent 38%), linear-gradient(155deg, #0E0D0B 0%, #191613 48%, #221D17 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
