// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // GitHub Pages önizlemesi alt klasörde yayınlanır.
  // Kendi alan adına geçerken: site'ı gerçek adresle değiştirin ve base'i silin.
  site: 'https://arda-tekinarslan.github.io',
  base: '/turasan-web',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
