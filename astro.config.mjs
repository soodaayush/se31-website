import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
console.log('GITHUB_ACTIONS:', process.env.GITHUB_ACTIONS);
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/se31-website/' : '/',
  vite: {
    plugins: [tailwindcss()],
    css: {
      postcss: {
        plugins: [],
      },
    },
  },
  integrations: [react()]
});
