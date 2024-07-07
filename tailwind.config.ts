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
        critical_red: {
          50: "#FAC7C3",
          90: "#ED4337",
        },
        custom_blue: {
          10: "#F5F6FB",
          20: "#EBEEF6",
          30: "#D8DDED",
          40: "#C4CCE5",
          60: "#9DAAD3",
          80: "#6A77A0",
          90: "#505D86",
        },
        neutral: {
          10: "#F8FAFB",
          30: "#F4F6F9",
          40: "#F0F1F5",
          50: "#E1E4EC",
          100: "#97A0BC",
          110: "#7985A9",
          130: "#505D86",
          140: "#37446D",
          150: "#1D2A53",
        },
        primary: {
          50: "#FCDDEE",
          100: "#D83992",
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
