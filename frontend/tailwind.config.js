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
        shopline: {
          blue: '#356DFF',
          navy: '#00142D',
          dark: '#354253',
          bg: '#F2F7FC',
          purple: '#A56DFF',
        }
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
