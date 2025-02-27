/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          xl: "1400px",
        },
        margin: "0 auto",
      },
      fontFamily: {
        sans: ["Poppins Regular"], 
      },
    },
  },
  plugins: [],
};

