/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#51A8E6',
        'brand-white': '#FFFFFF',
        'dark-text': '#1a202c',
        'light-gray': '#f7fafc',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'blue-glow': '0 4px 30px rgba(81, 168, 230, 0.4)',
      },
      keyframes: {
        'gradient-pan': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        'gradient-pan': 'gradient-pan 15s ease infinite',
      },
    },
  },
  plugins: [],
};
