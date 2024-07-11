/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-dark": "#343A40",
        "gray-dark-700": "#374151",
        "shade-Of-Red": "#FF4136",
        "link-color": "#808080",
        "solid-white": "#FBFBFB",
        "solid-black": "#000000",
        "gray-for-border": "#D9D9D9",
        "blue-light": "#0088FF",
        "blue-dark": "#2c3094",
      },
    },
  },
  plugins: [],
};
