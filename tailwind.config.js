/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        secondary: '#00D4FF',
        accent: '#FF6B6B',
        dark: '#0A0E27',
        'dark-secondary': '#1A1F3A',
        'dark-tertiary': '#252D4A',
        light: '#F8FBFF',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0066FF 0%, #00D4FF 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0A0E27 0%, #1A1F3A 100%)',
        'gradient-accent': 'linear-gradient(135deg, #FF6B6B 0%, #FFB347 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-in': 'slideIn 0.5s ease-in',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'glow': '0 0 30px rgba(0, 102, 255, 0.3)',
        'glow-lg': '0 0 60px rgba(0, 102, 255, 0.4)',
      },
      scrollbar: {
        DEFAULT: {
          thumb: '#0066FF',
          track: '#F8FBFF',
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
