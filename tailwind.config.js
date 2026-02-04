/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // indigo
        secondary: "#8b5cf6", // purple
      },
    },
  },
  plugins: [],
};
