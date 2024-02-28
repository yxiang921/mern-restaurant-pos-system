/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg": "url('src/assets/banner-bg.png')",
      },
      colors: {
        "orange-color": "#fa6400",
        "white-color": "#fefefe",
        "gray-color": "#f5f5f6",
      },
      backgroundColor: {
        "orange-color": "#fa6400",
        "white-color": "#fefefe",
        "gray-color": "#f5f5f6",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
