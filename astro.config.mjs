// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  base: '/se31-website', // TODO: Adjust this to your GitHub Pages repository name
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});