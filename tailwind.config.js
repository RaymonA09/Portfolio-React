/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        customYellow: '#ffea89',
        customYellow1: 'rgb(255, 213, 137)',
        customViolet: 'rgb(133, 76, 230)',
      },
  	},
  },
  plugins: [require("tailwindcss-animate")],
}