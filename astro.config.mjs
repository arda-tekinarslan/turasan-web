// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.turasan.example', // canlıya alırken gerçek alan adıyla değiştirin
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
