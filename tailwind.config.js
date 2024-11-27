/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        neue: ["Neue Machina Regular", "fira code"],
        neueLight: ["Neue Machina Light", "fira code"],
        neueBold: ["Neue Machina Ultrabold", "fira code"],
        raleway: ["Raleway", "fira code"],
      },
    },
  },
  plugins: [],
};
