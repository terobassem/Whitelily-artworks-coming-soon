import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: {
            DEFAULT: "#244C43",
            dark: "#1A3630",
            light: "#35655A",
            subtle: "#EDF3F1",
          },
          coral: {
            DEFAULT: "#E6A18D",
            light: "#F5CEBE",
            dark: "#CE7E67",
            subtle: "#FDF5F2",
          },
          gold: {
            DEFAULT: "#D6B75D",
            light: "#EAD694",
            dark: "#B8983E",
            subtle: "#FAF6EB",
          },
          ivory: {
            DEFAULT: "#F6F0E5",
            light: "#FAF7F2",
            dark: "#EDE4D3",
          },
          sage: {
            DEFAULT: "#A9B99D",
            light: "#CCD7C4",
            dark: "#839575",
            subtle: "#F2F6F0",
          },
          terracotta: {
            DEFAULT: "#B87862",
            light: "#D19885",
            dark: "#965A46",
            subtle: "#FAF1ED",
          },
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        art: "0 10px 30px -10px rgba(36, 76, 67, 0.12)",
        "art-lg": "0 20px 45px -15px rgba(36, 76, 67, 0.2)",
        "glow-gold": "0 0 25px rgba(214, 183, 93, 0.35)",
        "glow-coral": "0 0 25px rgba(230, 161, 141, 0.35)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-up": "fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
