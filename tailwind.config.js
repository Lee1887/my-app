/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    minHeight: {
      "1/2": "60%",
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        red: "#B91C1C",
        blue: "#1E3A8A",
        extend: {
          width: {
            375: "24rem",
          },
        },
        plugins: [],
      },
    },
  },
};
