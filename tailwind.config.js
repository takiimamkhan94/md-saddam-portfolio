/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#050816',
          900: '#07111f',
          800: '#0d1829',
        },
        accent: {
          cyan: '#46d7ff',
          blue: '#3385ff',
          indigo: '#6b7bff',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(70, 215, 255, 0.16), 0 20px 80px rgba(27, 64, 132, 0.35)',
        card: '0 20px 60px rgba(2, 8, 23, 0.45)',
        floaty: '0 30px 100px rgba(4, 10, 28, 0.55)',
        inset: 'inset 0 1px 0 rgba(255, 255, 255, 0.06), inset 0 -1px 0 rgba(148, 163, 184, 0.08)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(rgba(70, 215, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(70, 215, 255, 0.07) 1px, transparent 1px)',
        'panel-sheen':
          'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02) 30%, rgba(70,215,255,0.08) 70%, rgba(255,255,255,0.03))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.95' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
