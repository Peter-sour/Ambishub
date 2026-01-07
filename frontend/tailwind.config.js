/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warna tema "Ambis" yang elegan
        darkBody: "#0b0f19",
        darkSidebar: "#111827",
        darkCard: "#1f2937",
        // Aksen warna untuk status Grade PENS
        ambisGreen: "#10b981", // ON-TRACK (A)
        ambisYellow: "#f59e0b", // WARNING (A-)
        ambisRed: "#ef4444",    // DANGER
      },
      fontFamily: {
        // Menggunakan Inter atau Sans standar yang bersih
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}