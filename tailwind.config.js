/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-breathe': 'gradientShift 10s ease-in-out infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': {
            backgroundPosition: '50% 0%',
          },
          '50%': {
            backgroundPosition: '50% 100%',
          },
        },
      },
      backgroundSize: {
        '200': '200% 200%',
      },
    },
  },
  plugins: [],
};
