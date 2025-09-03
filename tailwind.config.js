/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss}", // agar tumhara globals.css yaha hai to
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
