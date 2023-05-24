module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Futura", "Arial", "sans-serif"],
      mono: ["Lucida Console", "Courier", "monospace"],
      neueLight: ["Neue-Light"],
      neueRegular: ["Neue-Regular"],
      neueBold: ["Neue-Bold"],
      suisseLight: ["Suisse-Light"],
      suisseRegular: ["Suisse-Regular"],
      suisseBold: ["Suisse-Bold"],
      futuraLight: ["Futura-Light"],
    },
    screens: {
      xsm: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "2000px",
    },
    extend: {
      colors: {
        black: "#000",
        white: "#FFF",
        gray: "fbae17",
        palette: {
          blue: "#233D5B",
          silver:"#99A1AC",
          orange:"#F75C0F",
          lightOrange:"#f87c3e",
          white: "#FFF",
        },
      },
      textUnderlineOffset : {
        16 : '16px'
      },
      height: (theme) => ({
        "50vh": "50vh",
        "75vh": "75vh",
      }),
    },
  },
  plugins: [],
};
