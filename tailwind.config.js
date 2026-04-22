/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FBF6EB',
          100: '#F7EFDC',
          200: '#F1E5C7',
          300: '#E8D5A8',
          DEFAULT: '#F5ECD9',
        },
        terracotta: {
          50: '#F9E7DD',
          100: '#F0C8B4',
          200: '#DE8F72',
          DEFAULT: '#C15F3C',
          600: '#A94C2B',
          700: '#8A3A1E',
          900: '#5A2512',
        },
        sage: {
          50: '#EEF1E7',
          100: '#D8DFC9',
          200: '#B3C0A1',
          DEFAULT: '#8AA083',
          600: '#6F8668',
          700: '#536A4E',
          900: '#2E3D2B',
        },
        ink: {
          DEFAULT: '#3D2E26',
          soft: '#5C4A3F',
          faint: '#8A7A6E',
        },
        mulberry: '#7D3C55',
        saffron: '#D9A441',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'ui-serif', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        stitch: '0 1px 0 0 rgba(61,46,38,0.08), 0 12px 40px -16px rgba(193,95,60,0.25)',
        thread: '0 20px 50px -24px rgba(193,95,60,0.4)',
      },
      backgroundImage: {
        'paper-noise':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.24 0 0 0 0 0.18 0 0 0 0 0.15 0 0 0 0.08 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        drift: {
          '0%,100%': { transform: 'translate(0,0) rotate(0deg)' },
          '50%': { transform: 'translate(20px,-30px) rotate(8deg)' },
        },
        driftAlt: {
          '0%,100%': { transform: 'translate(0,0) rotate(-6deg)' },
          '50%': { transform: 'translate(-18px,22px) rotate(4deg)' },
        },
        sway: {
          '0%,100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        drawStitch: {
          from: { strokeDashoffset: '300' },
          to: { strokeDashoffset: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        thread: {
          '0%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-40' },
        },
      },
      animation: {
        drift: 'drift 14s ease-in-out infinite',
        'drift-alt': 'driftAlt 17s ease-in-out infinite',
        sway: 'sway 6s ease-in-out infinite',
        'draw-stitch': 'drawStitch 2.4s ease-out forwards',
        marquee: 'marquee 40s linear infinite',
        thread: 'thread 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};
