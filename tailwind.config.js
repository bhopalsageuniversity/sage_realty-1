/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nav: ['"Be Vietnam Pro"', "sans-serif"],
        navold: ['"Jomolhari"', "sans-serif"],
        velvet:['"Velvetique"'],
        rollgateI:['"RollgatesItalic"'],
        rollgate:['"Rollgates"'],
        body: ['"Raleway"', "sans-serif"],
        lavish: ['"Lavishly Yours"', "cursive"],
        heading: ['"Julius Sans One"', "sans-serif"],
        poppin: ['"Poppins"', "sans-serif"],
        anton: ['"Anton"', "sans-serif"]
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 45s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
};
