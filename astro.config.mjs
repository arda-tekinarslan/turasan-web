// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * Yayın hedefi ortam değişkenleriyle seçilir; kodda başka bir şey değişmez.
 *
 * - Varsayılan (`npm run build`, GitHub Actions): GitHub Pages önizlemesi,
 *   alt klasörde — arda-tekinarslan.github.io/turasan-web
 * - `npm run build:hosting`: Ankara Hosting, alan adının kökü —
 *   www.turasan.com.tr (scripts/hosting-paketi.mjs bu değişkenleri verir)
 */
const SITE = process.env.SITE_URL ?? 'https://arda-tekinarslan.github.io';
const BASE = process.env.SITE_BASE ?? '/turasan-web';
const OUT = process.env.OUT_DIR ?? './dist';

export default defineConfig({
  site: SITE,
  base: BASE,
  outDir: OUT,
  // Not: /uzumler → /uzumler-ve-bolgeler yönlendirmesi src/pages/uzumler.astro
  // içindedir (Astro'nun `redirects` ayarı base yolunu hedefe eklemiyor).
  integrations: [
    sitemap({
      // Noindex yönlendirme sayfası site haritasına girmesin
      filter: (page) => !page.endsWith('/uzumler/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
