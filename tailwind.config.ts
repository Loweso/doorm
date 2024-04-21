import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["var(--font-poppins)"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      bgColor: "#EFEBE3",
      accentColor: {
        lightBlue: "#8CB9BD",
        earthyBrown: "#B67352",
        earthyYellow: "#ECB159",
      },
      headings: {
        earthyBrown: "#B67352",
        earthyYellow: "#ECB159",
      },
      content: {
        darkBrown: "#6D5D55",
        white: "#FEFBF6",
      },
    },
  },
  plugins: [],
};
export default config;
