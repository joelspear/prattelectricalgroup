import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand color - Pratt Electrical blue
        primary: {
          50: '#e6f7fc',
          100: '#ccf0fa',
          200: '#99e1f5',
          300: '#66d2f0',
          400: '#33c3eb',
          500: '#00aeef', // Pratt Electrical brand blue
          600: '#008bbf',
          700: '#00688f',
          800: '#004660',
          900: '#002330',
        },
        // Secondary - black for professional accents
        secondary: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#808080',
          500: '#000000', // Black
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        // Neutral colors - Pratt brand
        charcoal: '#000000',
        'neutral-light': '#f3f3f4', // Pratt light gray
        'neutral-mid': '#E5E7EB',
        // Success green
        success: '#10B981',
        // Background and foreground for CSS variables
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'counter': 'counter 2s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
