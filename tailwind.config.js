/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  plugins: [require('@tailwindcss/forms')({ strategy: 'base' })],
};
