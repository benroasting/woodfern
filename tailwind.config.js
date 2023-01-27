/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
      livory: ["livory", "serif"],
      proxima: ["proxima-nova", "sans-serif"],
    },
    fontWeight: {
      thin: "100",
      light: "300",
      normal: "400",
      bold: "700",
    },
    fontSize: {
      xs: "0.6rem",
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      colors: {
        terracota: "rgba(194,147,97,.93)",
      },
    },
  },
  plugins: [],
};
