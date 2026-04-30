/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Customize your portfolio colors here
        primary: '#1a1a2e',
        accent: '#e94560',
        surface: '#f8f9fa',
      },
    },
  },
  plugins: [],
};
