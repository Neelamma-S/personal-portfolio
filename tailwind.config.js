/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#8b5cf6",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease forwards",
      },
      rotate: {
        "x-6": "6deg",
        "y-6": "6deg",
      },
      // Perspective isn’t supported natively in Tailwind.
      // You can apply inline style like: style={{ perspective: '1000px' }}
    },
  },
  plugins: [],
};
