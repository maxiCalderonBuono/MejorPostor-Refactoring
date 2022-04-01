module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-primary": "#3d3d3d",
        "text-secondary": "#a4a4a4",
        danger: "#ec4b28",
        background_main: "#eaeaea",
        background_nav: "3196DA",
        success: "#32a42b",
        "dark-blue": "#05a297",
        "light-blue": "#14acde",
      },
      fontFamily: {
        poppins: "Poppins",
        sans: "Helvetica, Arial, sans-serif",
      },
      screens: {
        "modal-2": "700px",
        "modal-1": "875px",
        
      },
    },
  },
  plugins: [],
};
