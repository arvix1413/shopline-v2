/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#5B5FF0',
          blue: '#5B5FF0',
          deep: '#484CE8',
          soft: '#9B9EF8',
          ink: '#12131F',
          panel: '#15162A',
          light: '#F6F7FB',
          orange: '#F97316',
          navy: '#12131F',
          dark: '#354253',
          bg: '#F6F7FB',
          purple: '#9B9EF8',
        },
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', 'sans-serif'],
        brand: ['Outfit', 'Noto Sans TC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
