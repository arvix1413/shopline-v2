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
          blue: '#0066ff',
          navy: '#1a1a6e',
          purple: '#4a3fa0',
          green: '#00cc66',
          orange: '#ff6600',
        }
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
