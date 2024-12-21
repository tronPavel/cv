/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#1A3E3E",
        dark: "#18121E",
        yellow: "#F2BE22",
      },
    },
  },
  plugins: [],
};
