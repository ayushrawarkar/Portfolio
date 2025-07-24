/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A6FA5",
        secondary: "#FF7F50",
        background: "#FFFFFF",
        "background-secondary": "#F8F9FA",
        text: "#333333",
        "text-secondary": "#666666",
        border: "#E0E0E0",
      },
    },
  },
  plugins: [],
};