/**
 * robots.txt — site haritası adresi yayın hedefine göre üretilir
 * (GitHub Pages önizlemesi ya da www.turasan.com.tr). Sabit bir dosyada
 * adres elle yazıldığında hedef değişince yanlış kalıyordu.
 */
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const kok = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  const harita = new URL(`${kok}sitemap-index.xml`, site);
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${harita}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
