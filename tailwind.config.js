/** @type {import('tailwindcss').Config} */
module.exports = {
  // 'mode: jit' removido pois já é o padrão
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adicione extensões de framework se usar
  ],
  theme: {
    extend: {
      // Use o extend apenas se quiser adicionar algo novo. 
      // Se os breakpoints são os padrão, não precisa declará-los aqui.
    },
  },
  plugins: [],
}
