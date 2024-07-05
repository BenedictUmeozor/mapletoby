import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom_blue: {
          20: "#EBEEF6",
          30: "#D8DDED",
          80: "#6A77A0",
        },
        neutral: {
          30: "#F4F6F9",
          50: "#E1E4EC",
          150: "#1D2A53",
        },
        shade: {
          120: "#1B1B1B",
        },
      },
    },
  },
  plugins: [],
};
export default config;
