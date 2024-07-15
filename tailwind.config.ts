import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0079c8",
        secondary: "#000f32",
        disable: "#707070",
        gray: "#707070",
        dark: "#353535",
        orange: "#f97316",
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
