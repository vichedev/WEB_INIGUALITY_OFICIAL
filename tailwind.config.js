/** @type {import('tailwindcss').Config} */
export default {
  // Purge para eliminar clases no usadas en producción
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0369a1",
        relevo: "#06b6d4",
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 20s linear infinite",
      },
    },
  },
  // Eliminar clases no utilizadas en producción
  purge: {
    enabled: process.env.NODE_ENV === 'production', // Solo en producción
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    options: {
      safelist: [], // Puedes agregar clases específicas que no quieres eliminar
    },
  },
  plugins: [],
};
