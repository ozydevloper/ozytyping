/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        timerAnim: {
          '0%': {
            transform: 'rotate(0deg)',
            borderColor: 'rgb(248, 250, 252)',
          },
          '10%': { transform: 'rotate(20deg)' },
          '20%': { transform: 'rotate(40deg)' },
          '30%': { transform: 'rotate(80deg)' },
          '40%': { transform: 'rotate(120deg)' },
          '50%': {
            transform: 'rotate(160deg)',
            borderColor: 'rgb(100 116 139)',
          },
          '60%': { transform: 'rotate(200deg)' },
          '70%': { transform: 'rotate(240deg)' },
          '80%': { transform: 'rotate(280deg)' },
          '90%': { transform: 'rotate(320deg)' },
          '100%': {
            transform: 'rotate(360deg)',
            borderColor: 'rgb(248, 250, 252)',
          },
        },
        timerAnimColor: {
          '0%, 100%': { borderColor: 'rgb(248, 250, 252)' },
          '50%': { borderColor: 'rgb(100 116 139)' },
        },
      },
      animation: {
        timerAnim: 'timerAnim 1s ease-in-out infinite',
        timerAnimColor: 'timerAnimColor 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
