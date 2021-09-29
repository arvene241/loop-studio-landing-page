module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Alata: ["'Alata', sans-serif"],
      Josefin: ["'Josefin Sans', sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        lg: "1200px",
        xl: "1200px",
        "2xl": "1200px",
      }
    },
    extend: {
      colors: {
        'loop-white': "hsl(0, 0%, 100%)",
        'loop-black': "hsl(0, 0%, 0%)",
        'loop-d-gray': "hsl(0, 0%, 55%)",
        'loop-vd-gray': "hsl(0, 0%, 41%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
