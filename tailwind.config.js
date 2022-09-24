module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-primary": "#feae49",
        "text-primary-dark": "#fea028",
        "text-primary-darkest": "#fe9108",
        "text-secondary": "#a4a4a4",
        danger: "#ec4b28",
        "dark-gray": "#3d424a",
        success: "#32a42b",
        "dark-blue": "#05a297",
        "light-blue": "#14acde",
      },
      screens: {
        "modal-2": "700px",
        "modal-1": "875px",
      },
      animation: {
        "pulse-fast": "pulse 1.7s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 1.7s linear infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
