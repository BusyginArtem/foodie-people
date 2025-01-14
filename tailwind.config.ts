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
        "black-5-03": "0 2px 5px rgba(0, 0, 0, 0.3)",
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
        flash: {
          "0%": {
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
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
        flash: "flash 1s ease-in-out infinite alternate",
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
