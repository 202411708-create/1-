/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // MUJI-inspired color palette
        primary: '#8B7355',      // 따뜻한 브라운
        secondary: '#A89F91',    // 그레이 베이지
        accent: '#D4A574',       // 연한 베이지
        success: '#9CAF88',      // 연한 올리브
        warning: '#C9A66B',      // 연한 골드
        background: '#F5F3F0',   // 크림 베이지
        textDark: '#4A4238',     // 다크 브라운
        beige: {
          50: '#FAF9F7',
          100: '#F5F3F0',
          200: '#E8E4DF',
          300: '#D9D3CC',
          400: '#C4BCB3',
          500: '#A89F91',
          600: '#8B7355',
          700: '#6B5744',
          800: '#4A4238',
          900: '#2D2822',
        },
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'muji': '0 2px 8px rgba(74, 66, 56, 0.08)',
        'muji-lg': '0 4px 16px rgba(74, 66, 56, 0.12)',
      },
    },
  },
  plugins: [],
}
