/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0B0D12',
        'royal-blue': '#0D21A1',
        'soft-white': '#F7F8FC',
        'deep-purple': '#8C8F94',
      },
      fontFamily: {
        'coolvetica': ['Coolvetica', 'Impact', 'Arial Black', 'sans-serif'],
        'montreal': ['Neue Montreal', 'Inter', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        'glass': '10px',
      },
    },
  },
  plugins: [],
};
