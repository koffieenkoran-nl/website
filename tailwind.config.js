/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#FDF8F0',
          100: '#F9EDDB',
          200: '#F2D9B3',
          300: '#E8BF82',
          400: '#DCA050',
          500: '#D4892F',
          600: '#C47024',
          700: '#A3551F',
          800: '#854520',
          900: '#6D3A1D',
          950: '#3B1C0D',
        },
        koran: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          950: '#022C22',
        },
        cream: {
          50: '#FFFBF5',
          100: '#FEF7ED',
          200: '#FDEFD9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
