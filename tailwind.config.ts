
import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* fontFamily: {
        title: ["var(--font-alegreya)", "serif"],
        body: ["var(--font-mulish)", "sans-serif"],
      }, */
    },
    fontSize: {
      xs: "14px",
      sm: "16px",
      md: "18px",
      lg: "20px",
      xl: "24px",
      "2xl": "32px",
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

export default config;
