module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#161822",
        greenOB: "#22EDB2"
      },
      lineHeight: {
        '15': "3.5rem", 
      },
      letterSpacing: {
        ".25": ".25em"
      },
      backgroundImage: {
        'sloganSection': "url('src/resources/images/bg-home.jpg')",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
