/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
        keyframes: {
        bump: {
          '0%, 100%': { transform: 'scale(1)' }, // Initial and final state
          '50%': { transform: 'scale(1.1)' },   // Mid state (bump effect)
        },
      },
      animation: {
        bump: 'bump 0.3s ease-in-out', // Define the bump animation
      },
    },
  },
  plugins: [],
};
