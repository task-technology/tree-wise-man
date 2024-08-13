import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0079c8",
        secondary: "#000f32",
        disable: "#707070",
        gray: "#707070",
        dark: "#353535",
        orange: "#f97316",
        solidBlack: "#000",
        solidWhite: "#fff",
        solidRed: "#b91c1c",
        slateLight: "#f8fafc",
        linkColor: "#808080",
        darkSlate: "#334155",
        lightBlue: "#4b74af",
        slateLightThird: "#cbd5e1",
        websiteBgColor: "#f5f5f5",
        grayForBorder: "#D9D9D9",
        successMsg: "#22c55e",
        fb: "#0865fc",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        hero_image: "url('/computer repair.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
};
export default config;
