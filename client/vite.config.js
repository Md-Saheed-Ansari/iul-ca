import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()], content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
 extend: {
  fontFamily: {
        sans: ['"Source Sans Pro"', "sans-serif"],
  },
 colors: {
 brand: {
 50: '#f4f7ff',
 100: '#e9effe',
 500: '#1f4d9b' // primary accent (adjust as needed)
 }
 },
 boxShadow: {
 soft: '0 10px 25px -10px rgba(0,0,0,0.15)'
 },
 borderRadius: {
 xl2: '1.25rem'
 }
 },
 },
})


