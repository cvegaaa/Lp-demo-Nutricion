/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta del sector nutrición: verdes naturales + crema + acento terracota
        forest: {
          50: '#f0f5f1',
          100: '#dcebe2',
          200: '#bbd6c6',
          300: '#8fb89f',
          400: '#5e9474',
          500: '#3d7a4f',
          600: '#2d5f3f',
          700: '#244d34',
          800: '#1f3d2a',
          900: '#15281c',
        },
        cream: {
          50: '#fdfbf6',
          100: '#faf7f0',
          200: '#f5efe1',
          300: '#ece2cd',
          400: '#ddcfb0',
        },
        clay: {
          400: '#e89b5c',
          500: '#d97742',
          600: '#c25f2f',
          700: '#9d4a26',
        },
        ink: '#1f2a24',
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(6deg)' },
        },
        'float-delayed': {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(14px) rotate(-5deg)' },
        },
        'blob-drift': {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.96)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both',
        'slow-zoom': 'slow-zoom 18s ease-in-out infinite alternate',
        float: 'float 7s ease-in-out infinite',
        'float-delayed': 'float-delayed 8s ease-in-out infinite',
        'blob-drift': 'blob-drift 16s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
