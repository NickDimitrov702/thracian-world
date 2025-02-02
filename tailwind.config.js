/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    
      colors: {
        nav: "#18222f",
        page: "#2b3441",
        projectsTiels: "#47566a",
        "card-hover": "#4f5e74",
        "default-text": "#f1f3f5",
        "backgroundMain": "#454840",
        projectPageBg: "#3b5249",
        "layoutBg":"#070707",
      }
    },
  },
  plugins: [],
};
