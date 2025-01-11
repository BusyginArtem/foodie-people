import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      dropShadow: {
        "black-075": "0 0 0.75rem rgba(0, 0, 0, 0.5)",
      },
      boxShadow: {
        "black-05": "0 0 0.5rem rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        loading: {
          "0%": {
            color: "#e9e9e9",
          },
          "50%": {
            color: "#b89b84",
          },
          "100%": {
            color: "#e9e9e9",
          },
        },
        "fade-slide-in-from-left": {
          "0%": {
            // ANCHOR
            opacity: "0",
            transform: "translateX(-1rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-slide-in-from-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(1rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-slide-in-from-bottom": {
          "0%": {
            opacity: "0",
            transform: "translateY(1rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        loading: "loading 1.2s ease-in-out infinite",
        "fade-slide-in-from-left":
          "fade-slide-in-from-left 1s ease-out forwards",
        "fade-slide-in-from-right":
          "fade-slide-in-from-right 1s ease-out forwards",
        "fade-slide-in-from-bottom":
          "fade-slide-in-from-bottom 1s ease-out forwards",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: PluginAPI["addUtilities"] }) {
      addUtilities({
        ".text-transparent-fill": {
          "-webkit-text-fill-color": "transparent",
          "-webkit-background-clip": "text",
          "background-clip": "text",
        },
        ".text-shadow": {
          "text-shadow": "0 0 18px rgba(248, 190, 42, 0.8)",
        },
      });
    },
  ],
} satisfies Config;
