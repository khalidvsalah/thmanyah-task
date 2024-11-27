import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        text: "var(--text)",
        "off-white": "var(--off-white)",
        orange: "var(--orange)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        custom: "0 0 0 3px rgba(0,0,0,.02)",
      },
    },
  },
  plugins: [],
} satisfies Config;
