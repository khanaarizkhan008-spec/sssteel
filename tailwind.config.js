/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Theme Surface Palette (Navy/Slate text & White/Light slate backgrounds)
        'midnight': {
          50: '#071325',   // Deepest Navy for high contrast text
          100: '#0a192f',  // Deep Navy Blue
          200: '#0f2b48',  // Rich Navy
          300: '#1e3a8a',  // Navy Accent
          400: '#334155',  // Dark Slate
          500: '#475569',  // Medium Slate
          600: '#94a3b8',  // Border / Muted
          700: '#cbd5e1',  // Soft Border
          800: '#f1f5f9',  // Soft Light Gray-Blue Surface
          900: '#ffffff',  // Pure White Card Surface
          950: '#f8fafc',  // Light Theme Main Page Background
        },
        // Mid Dark Green Palette (Primary Accent)
        'molten': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#34d399',
          400: '#236854',  // Lighter Forest Green
          500: '#1b4d3e',  // Primary Mid Dark Green Accent
          600: '#155e42',  // Forest Green
          700: '#10523b',  // Pine Green
          800: '#093928',  // Deep Forest Green
          900: '#052419',
        },
        // Navy Tones
        'navy': {
          50: '#f0f7ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#1e4d8c',
          600: '#163b66',
          700: '#0f2b48',
          800: '#0a192f',  // Deep Navy
          900: '#071325',  // Darkest Navy
          950: '#030814',
        },
        // Steel / Slate tones for Light Mode
        'steel': {
          50: '#ffffff',
          100: '#f8fafc',
          200: '#f1f5f9',
          300: '#e2e8f0',
          400: '#cbd5e1',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
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
        'metallic': 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 50%, #ffffff 100%)',
        'molten-glow': 'radial-gradient(circle, rgba(27, 77, 62, 0.25) 0%, transparent 70%)',
        'navy-glow': 'radial-gradient(circle, rgba(10, 25, 47, 0.15) 0%, transparent 70%)',
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
        'molten': '0 0 20px rgba(27, 77, 62, 0.25), 0 0 40px rgba(27, 77, 62, 0.15)',
        'molten-lg': '0 0 30px rgba(27, 77, 62, 0.35), 0 0 60px rgba(27, 77, 62, 0.2)',
        'steel': '0 4px 20px rgba(10, 25, 47, 0.08)',
        'steel-lg': '0 10px 40px rgba(10, 25, 47, 0.12)',
      },
    },
  },
  plugins: [],
}
