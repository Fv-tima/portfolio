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
        whitish: "#cecccd",
        greyed: "#5e6064",
        yellowy: "#afa071",
        blackey: "#3e4044",
        blacked: "#232428",
        greyn: "#8e8e8f",
      },
    },
  },
  plugins: [],
};
export default config;
