/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'slide-in': 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right': 'slideRight 100ms ease-out',
        hide: 'hide 100ms ease-in',
        'swipe-out': '100ms ease-out',
      },
      colors: {
        primary: {
          50: '#F7F5FA',
          100: '#F4F0F7',
          200: '#DFD5EB',
          300: '#C8BDDB',
          400: '#9D93C2',
          500: '#726da8',
          600: '#5E5996',
          700: '#413D7D',
          800: '#2C2866',
          900: '#1A164D',
          950: '#0B0930',
        },
      },
    },
  },
  plugins: [require('@kobalte/tailwindcss')({ prefix: 'kb' })],
};
