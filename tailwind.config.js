/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navBtnBlue: "#43b2ca",
        navBoxBlue: "#1e6676",
        bgBlue1: "#005a76",
        bgBlue2: "#0084ae",
        darkBlueLink: "#005a77",
      },
      backgroundImage: {
        intro:
          "linear-gradient(to right bottom, rgba(33, 43, 52, 0.72), rgba(61, 80, 97, 0.6)), url('../src/components/intro/Gfycat.gif')",
        exp: "url('../src/components/exp/GifImage.gif')",
      },
      fontFamily: {
        mono: ["monospace", "ui-monospace", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        typewriterBig:
          "typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite",
        typewriterSmall:
          "typing 1.2s steps(40, end), blink-caret 0.75s step-end infinite",
        show: "fadeIn 1.5s",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink-caret": {
          "0%, 100%": { "border-color": "transparent" },
          "50%": { "border-color": "white" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100%" },
        },
      },
      boxShadow: {
        fancyBtn: "0.3em 0.3em 0 0 #1e6676, inset 0.3em 0.3em 0 0 #1e6676",
        fancyBtnHover: "0 0 0 0 lightblue, inset 6em 3.5em 0 0 lightblue",
        projHover: "6px 6px 0 2px #43b2ca",
      },
    },
  },
  plugins: [],
};
