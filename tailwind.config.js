/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Fredoka', 'sans-serif'],
        body: ['Nunito', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        'card-sm': '12px',
        'card-md': '18px',
        'card-lg': '28px',
        'card-xl': '40px',
      },
      boxShadow: {
        'card-sm': '0 2px 6px rgba(15,23,42,.06)',
        'card-md': '0 8px 24px rgba(14,165,233,.12)',
        'card-lg': '0 20px 50px rgba(14,165,233,.18)',
        'card-orange': '0 12px 30px rgba(249,115,22,.3)',
      },
      transitionTimingFunction: {
        custom: 'cubic-bezier(.22,.61,.36,1)',
      },
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.05)' },
        },
        'pulse-dot': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.4)', opacity: '0.6' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(.22,.61,.36,1) both',
        'fade-in-up-1': 'fade-in-up 0.9s cubic-bezier(.22,.61,.36,1) 0.1s both',
        'fade-in-up-2': 'fade-in-up 1.0s cubic-bezier(.22,.61,.36,1) 0.2s both',
        'fade-in-up-3': 'fade-in-up 1.1s cubic-bezier(.22,.61,.36,1) 0.3s both',
        float: 'float 12s ease-in-out infinite',
        'float-delayed': 'float 12s ease-in-out -6s infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
