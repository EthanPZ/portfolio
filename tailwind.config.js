/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#f8fafc",
      },

      height: {
        screen: "100dvh",
      },

      space: {
        elements: "1.5em",
        sections: "20em",
        sectionsMobile: "10em",
      },

      gap: {
        elements: "2.5em",
      },

      margin: {
        sections: "20em",
        elements: "1.5em",
        sectionsMobile: "10em",
      },

      padding: {
        pagePadding: "1.5rem 3rem",
        sections: "20em",
        sectionsMobile: "10em",
      },
    },

    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
