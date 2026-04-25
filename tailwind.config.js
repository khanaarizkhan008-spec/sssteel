/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Midnight Forged Steel Palette
        'midnight': {
          50: '#F5F5F7',
          100: '#E5E5E7',
          200: '#D4D4D8',
          300: '#A1A1AA',
          400: '#71717A',
          500: '#52525B',
          600: '#3F3F46',
          700: '#27272A',
          800: '#1A1A24',
          900: '#0A0A0A',
          950: '#050508',
        },
        // Molten Safety Orange accents
        'molten': {
          50: '#FFF5F0',
          100: '#FFE5D5',
          200: '#FFC5A5',
          300: '#FF9565',
          400: '#FF6B35',
          500: '#FF4500', // Primary accent
          600: '#E63900',
          700: '#CC2F00',
          800: '#992400',
          900: '#661800',
        },
        // Steel tones
        'steel': {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        'display': ['Boska', 'serif'],
        'body': ['Outfit', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 8vw, 6rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero': ['clamp(2rem, 6vw, 4.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'metallic': 'linear-gradient(135deg, #1A1A24 0%, #2A2A34 50%, #1A1A24 100%)',
        'molten-glow': 'radial-gradient(circle, rgba(255,69,0,0.4) 0%, transparent 70%)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee-left': 'marquee-left 30s linear infinite',
        'marquee-right': 'marquee-right 30s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'marquee-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      boxShadow: {
        'molten': '0 0 20px rgba(255, 69, 0, 0.3), 0 0 40px rgba(255, 69, 0, 0.2)',
        'molten-lg': '0 0 30px rgba(255, 69, 0, 0.5), 0 0 60px rgba(255, 69, 0, 0.3)',
        'steel': '0 4px 20px rgba(0, 0, 0, 0.5)',
        'steel-lg': '0 10px 40px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}
