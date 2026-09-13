/**
 * Dil yardımcıları.
 *
 * Dil URL'den okunur: /en ile başlayan yollar İngilizce, geri kalanı Türkçe.
 * Böylece bileşenlere dil prop'u taşımak gerekmez; her bileşen kendi
 * Astro.url'inden dilini bulur. İngilizce sayfalar src/pages/en/ altında,
 * Türkçe sayfaların aynı bileşenlerini render eder.
 */
import { tr, en, type Lang } from '../content/site';
import { withBase } from './url';

const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Taban yolu (ör. /turasan-web) düşülmüş yol. */
function tabansizYol(url: URL): string {
  let yol = url.pathname;
  if (BASE && yol.startsWith(BASE)) yol = yol.slice(BASE.length);
  return yol || '/';
}

export function dilBul(url: URL): Lang {
  const yol = tabansizYol(url);
  return yol === '/en' || yol.startsWith('/en/') ? 'en' : 'tr';
}

export const icerik = (lang: Lang) => (lang === 'en' ? en : tr);

/**
 * Kök-göreli bir yolu dile göre öneklendirip tabanla birleştirir.
 * "/aile-mirasi" → "/en/aile-mirasi", "/#miras" → "/en/#miras".
 * "#bolum" gibi aynı sayfa bağlantıları ve dış adresler olduğu gibi geçer.
 */
export function yol(lang: Lang, path: string): string {
  if (lang === 'en' && path.startsWith('/')) path = `/en${path}`;
  return withBase(path);
}

/** Bulunulan sayfanın diğer dildeki karşılığı (taban dahil). */
export function karsiDilYolu(url: URL): string {
  const lang = dilBul(url);
  const yolu = tabansizYol(url);
  const hedef = lang === 'en' ? yolu.replace(/^\/en(?=\/|$)/, '') || '/' : `/en${yolu}`;
  return withBase(hedef);
}
