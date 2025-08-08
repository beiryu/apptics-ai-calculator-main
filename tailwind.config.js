/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        aliceblue: "#e6ebf0",
        gray: {
          100: "#fafafa",
          200: "#7d7e80",
          300: "#242424",
          400: "rgba(255, 255, 255, 0)",
        },
        gainsboro: {
          100: "#e6e6e6",
          200: "#e1e4e6",
        },
        whitesmoke: {
          100: "#f5f5f5",
          200: "#f0f0f0",
        },
      },
      fontFamily: {
        "plus-jakarta-sans": ["var(--font-plus-jakarta-sans)", "Plus Jakarta Sans", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
