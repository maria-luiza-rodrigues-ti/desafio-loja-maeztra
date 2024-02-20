/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Titillium Web", "sans-serif"],
        secondary: ["Montserrat", "sans-serif"],
        tercenary: ["Open Sans", "sans-serif"],
      },
      colors: {
        lightBlack: "#353535",
        yellow: "#faa500",
        grey: "#efefef",
        darkerGrey: "#464B54",
        mediumGrey: "#787D83",
        borderGrey: "#C4C4C4",
      },
      boxShadow: {
        header: "0px 4px 6px rgba(0,0,0, 0.08)",
      },
      keyframes: {
        slideDown: {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
      },
      animation: {
        slideDown: "slideDown 300ms ease-out",
        slideUp: "slideUp 300ms ease-out",
      },
    },
  },
  plugins: [],
};
