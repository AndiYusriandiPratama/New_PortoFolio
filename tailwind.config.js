/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        kaushan: ["Kaushan Script", "cursive"],
      },
      colors: {
        dark: {
          DEFAULT: "010101",
          100: "#0a0b1e",
          200: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      },
    },
  },
  plugins: [],
};
