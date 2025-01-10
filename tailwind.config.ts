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
      },
      animation: {
        loading: "loading 1.2s ease-in-out infinite",
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
