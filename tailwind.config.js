/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        novera: 'Novera Modern, sans-serif',
      },
      colors: {
        headerText: 'var(--header-text-color)',
        headerTextInvert: 'var(--header-text-invert-color)',
      },
      screens: {
        1150: '1150px',
        550: '550px',

        'max-2xl': { max: '1439px' },
        'max-1300': { max: '1300px' },
        'max-xl': { max: '1279px' },
        'max-1200': { max: '1200px' },
        'max-1100': { max: '1100px' },
        'max-lg': { max: '1023px' },
        'max-992': { max: '992px' },
        'max-md': { max: '767px' },
        'max-sm': { max: '639px' },
        max550: { max: '550px' },
        max350: { max: '350px' },
      },
    },
  },
  plugins: [],
};
