module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-primary": "#feae49",
        "text-primary-darkest": "#fe920b",
        "black-white": "#a4a4a4",
        "silver-sand": "#1e1e2a",
        "dark-gray": "#3d424a",
        "light-gray": "#f3f6f8",
      },
      screens: {
        sm: "600px",
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
