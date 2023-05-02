/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#111827",
        darkFill: "#1F2937",
        lightBg: "#D1D5DB",
        lightFill: "#BAC3D2",
      },
    },
  },
  plugins: [],
};
