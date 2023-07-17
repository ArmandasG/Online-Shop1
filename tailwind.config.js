/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'contact-us': "url('/icons/Contact-us.png')",
      }
    },
  },
  plugins: [],
}

