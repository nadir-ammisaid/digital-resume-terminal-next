/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: "#0a0e27",
          secondary: "#1e1e3f",
          header: "#2d2d5e",
          green: "#00ff00",
          text: "#8b8bb8",
          white: "#ffffff",
          error: "#ff5f56",
          info: "#5bc0de",
          warning: "#ffbd2e",
        },
      },
      fontFamily: {
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
