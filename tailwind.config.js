module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Arial', 'sans-serif'],
      'mono': ['Lucida Console', 'Courier', 'monospace'],
      montrealBold: ["montreal-bold"],
      montrealMedium: ["montreal-medium"],
      montrealRegular: ["montreal-regular"],
      montrealLight: ["montreal-light"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      colors: {
        palette: {
          blue: "#010C80",
          silver:"#99A1AC",
          orange:"#F75C0F",
          lightOrange:"#f87c3e",
          white: "#FFF",
          red:"#7E101A"
        },
        'black': '#000',
        'white': '#FFF',
        'example-color': {
          light: '#ffb288',
          DEFAULT: '#d18d67',
          dark: '#ce8860',
        },
      }
      
    },
    
  },
  plugins: []
}