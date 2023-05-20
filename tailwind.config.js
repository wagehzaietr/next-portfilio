/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        bg: "#ecf0f3",
        text: "#ff014f",
        text2: "#3c3e41",
        cartoon: "#5e5e61",
        linergradint: "bg-gradient-to-br from-gray-300 via-white to-gray-100",
      },
    },
  },
  plugins: [],
};
