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
        darkBg: '#111111',
        darkCard: '#1a1a1a',
        lightText: '#eeeeee',
        subtleText: '#888888',
      },
    },
  },
  plugins: [],
};
export default config;
