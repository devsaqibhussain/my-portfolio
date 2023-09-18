/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes:{
        sideBar:{
          "0%":{ transform: "translateY(100px)" },
          "100%":{transform: "translateY(0px)"}
        }
      },
      animation:{
        sideBar: "sideBar 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"
      }
    },
  },
  plugins: [],
}
