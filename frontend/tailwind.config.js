/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // Aggiungi questa riga per includere i file nella cartella app
    './pages/**/*.{js,ts,jsx,tsx}', // Aggiungi questa riga per includere i file nella cartella pages
    './components/**/*.{js,ts,jsx,tsx}', // Aggiungi questa riga per includere i file nella cartella components
    './src/**/*.{js,ts,jsx,tsx}', // Aggiungi questa riga per includere i file nella cartella src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
