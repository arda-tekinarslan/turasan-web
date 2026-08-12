/**
 * Yaş kapısının paylaşılan durumu.
 *
 * Hem AgeGate hem YuklemeEkrani bu anahtarı okur. Ortak bir yerde durmasının
 * sebebi, yükleme ekranının "kapı bu oturumda zaten onaylandı mı?" sorusunu
 * AgeGate script'inin çalışma sırasına bağlı kalmadan yanıtlayabilmesidir.
 */

/** Onayın oturum boyunca saklandığı anahtar (sessionStorage). */
export const YAS_ONAY_KEY = 'turasan-age-ok';

/** Bu oturumda onay verilmiş mi? */
export function yasOnayiVar(): boolean {
  return sessionStorage.getItem(YAS_ONAY_KEY) === '1';
}
