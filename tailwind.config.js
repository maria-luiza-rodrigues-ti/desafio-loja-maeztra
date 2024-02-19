/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Titillium Web", "sans-serif"],
        secondary: ["Montserrat", "sans-serif"],
      },
      colors: {
        lightBlack: "#353535",
        yellow: "#faa500",
        grey: "#efefef",
      },
      boxShadow: {
        header: "0px 4px 6px rgba(0,0,0, 0.08)",
      },
    },
  },
  plugins: [],
};
