/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#F5F6FA",
        surface: "#FFFFFF",
        ink: "#10152B",
        muted: "#6B7290",
        primary: "#3454D1",
        primaryDeep: "#233B99",
        mint: "#14B892",
        coral: "#FF6B57",
        line: "#E4E7F0",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
