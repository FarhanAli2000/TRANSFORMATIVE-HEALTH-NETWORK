/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floatZoom: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-15px) scale(1.05)" }, // thoda upar + zoom
        },
      },
      animation: {
        floatZoom: "floatZoom 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
