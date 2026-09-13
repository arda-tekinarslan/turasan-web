/**
 * Çerez tercihinin paylaşılan durumu.
 *
 * Tercih penceresi (YasalMetinler) yazar; tercihe bağlı yüklenen içerikler
 * (ör. İletişim'deki Google Haritalar) okur. Anahtar tek yerde durur ki iki
 * taraf birbirinden habersiz farklı değer kullanmasın — yas-kapisi.ts ile
 * aynı yaklaşım.
 */

/** Tercihin saklandığı anahtar (localStorage). */
export const CEREZ_KEY = 'turasan-cerez-tercihi';

/** Tercih kaydedildiğinde document üzerinde yayınlanan olay. */
export const CEREZ_OLAY = 'cerez:kaydedildi';

export type CerezTercihi = Record<string, boolean>;

/** Kayıtlı tercihi döndürür; yoksa ya da okunamıyorsa null. */
export function cerezTercihiOku(): CerezTercihi | null {
  try {
    const ham = localStorage.getItem(CEREZ_KEY);
    return ham ? (JSON.parse(ham) as CerezTercihi) : null;
  } catch {
    return null;
  }
}
