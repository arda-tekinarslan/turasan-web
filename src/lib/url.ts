/**
 * Kök-göreli (/ ile başlayan) yolları dağıtım tabanıyla birleştirir.
 *
 * Site GitHub Pages'te alt klasörde yayınlandığı için gereklidir. Kendi alan
 * adına taşındığında astro.config'teki `base` kaldırılır, taban "/" olur ve
 * buradaki yollar olduğu gibi kalır — çağrı yerlerini değiştirmek gerekmez.
 *
 * "#bolum" gibi aynı sayfa bağlantıları ve dış adresler dokunulmadan geçer.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

export function withBase(path: string): string {
  return path.startsWith('/') ? `${BASE}${path}` : path;
}
