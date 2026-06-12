/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#08070d',       // Space black
          surface: '#111019',  // Deep obsidian slate
          card: '#161522',     // Glassmorphism card fill
          border: '#2a273b',   // Thin slate border
        },
        light: {
          bg: '#f8fafc',       // Soft slate white
          surface: '#ffffff',  // Pure white
          card: '#f1f5f9',     // Cool slate light card
          border: '#e2e8f0',   // Subtle gray border
        },
        neon: {
          cyan: '#00f2fe',
          blue: '#4facfe',
          indigo: '#6366f1',
          violet: '#a855f7',
          pink: '#ec4899',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'glow-cyan': 'glowCyan 3s ease-in-out infinite alternate',
        'glow-violet': 'glowViolet 3s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowCyan: {
          '0%': { boxShadow: '0 0 5px rgba(0, 242, 254, 0.2), 0 0 10px rgba(0, 242, 254, 0.1)' },
          '100%': { boxShadow: '0 0 15px rgba(0, 242, 254, 0.5), 0 0 25px rgba(0, 242, 254, 0.2)' },
        },
        glowViolet: {
          '0%': { boxShadow: '0 0 5px rgba(168, 85, 247, 0.2), 0 0 10px rgba(168, 85, 247, 0.1)' },
          '100%': { boxShadow: '0 0 15px rgba(168, 85, 247, 0.5), 0 0 25px rgba(168, 85, 247, 0.2)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
