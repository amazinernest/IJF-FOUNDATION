/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#1B365D', // Core Navy
          900: '#0A192F', // Midnight Dark
          950: '#060D1A',
        },
        coral: {
          50: '#FFF5F5',
          100: '#FED7D7',
          200: '#FEB2B2',
          300: '#FC8181',
          400: '#F56565',
          500: '#E63946', // Primary Accent Coral
          600: '#D62828',
          700: '#9B2C2C',
        },
        amber: {
          50: '#FFFDF5',
          100: '#FEFCBF',
          200: '#FAF089',
          300: '#F6E05E',
          400: '#F4A261', // Warm Sun Gold
          500: '#ECC94B',
          600: '#D69E2E',
        },
        linen: {
          50: '#FCFBF9',
          100: '#FAF7F2', // Editorial Warm Canvas
          200: '#F4EFE6',
          300: '#E8E1D3',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(10, 25, 47, 0.08)',
        'card-hover': '0 20px 40px -15px rgba(27, 54, 93, 0.12)',
        'glow': '0 0 25px rgba(230, 57, 70, 0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
