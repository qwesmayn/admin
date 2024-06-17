/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui']
      },
      backgroundImage: {
        'radial-gradient-top': 'radial-gradient(circle at center top, #8F00FF -199%, transparent 27%)',
        'custom-gradient_main': 'linear-gradient(360deg, #0B0713 0%, #130925 100%)',
      }
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.bg-custom-gradient': {
          'background-image': 'linear-gradient(90deg, #6922FF 0%, #8B54FF 52.5%, #6922FF 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 80%)',
          'background-blend-mode': 'overlay'
        }
      }, ['responsive', 'hover']);
    }),
  ],
}