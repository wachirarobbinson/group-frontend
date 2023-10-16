/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: "#e3e7f3",
        cornflowerblue: {
          "100": "#6881cd",
          "200": "rgba(104, 129, 205, 0.5)",
        },
        white: "#fff",
        rosybrown: "#bc9696",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        karma: "Karma",
        "jacques-francois-shadow": "'Jacques Francois Shadow'",
        nunito: "Nunito",
        playball: "Playball",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      xl: "20px",
      "5xl": "24px",
      "13xl": "32px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};