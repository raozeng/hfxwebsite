/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#137fec",
        "primary-dark": "#0b63b8",
        "background-light": "#f6f7f8",
        "background-dark": "#101922",
        "surface-dark": "#1c242e",
        "surface-highlight": "#283039",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "body": ["Noto Sans", "sans-serif"],
      },
      borderRadius: {
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
      },
      boxShadow: {
        'glow': '0 0 20px rgba(19, 127, 236, 0.3)',
        'glow-hover': '0 0 30px rgba(19, 127, 236, 0.5)',
      },
      backgroundImage: {
        'nebula-gradient': 'radial-gradient(circle at 50% 0%, rgba(19, 127, 236, 0.25) 0%, rgba(16, 25, 34, 0) 70%)',
        'grid-pattern': 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
        'card-gradient': 'linear-gradient(180deg, rgba(28, 33, 39, 0.8) 0%, rgba(20, 24, 30, 0.9) 100%)',
        'glass-gradient': 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'hainan-glow': 'conic-gradient(from 180deg at 50% 50%, #137fec 0deg, #0ea5e9 180deg, #137fec 360deg)'
      },
      backgroundSize: {
        'grid-sm': '40px 40px'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}

