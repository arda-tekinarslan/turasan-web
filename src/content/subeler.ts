/**
 * Şubeler ve tesisler — tek veri kaynağı.
 *
 * Yeni bir lokasyon eklemek için `subeler` dizisine bir kayıt eklemek yeterli;
 * sayfa bu dosyadan render edilir, kart düzeni ve grid kendiliğinden uyum
 * sağlar. Silmek için kaydı çıkarın.
 *
 * Telefon/faks: `tel` ve `faks` ekranda görünen biçimdir; `telDial` ve
 * `faksDial` ise bağlantı için uluslararası biçimdir (+90...). Mobilden ve
 * yurt dışından doğru çevrilmesi için ikisi ayrı tutulur.
 */

export type SubeKategori =
  | 'Genel Merkez'
  | 'Satış & Şarap Evi'
  | 'Bölge Müdürlüğü'
  | 'Şube';

export interface Sube {
  /** Kart üstündeki kategori rozeti */
  kategori: SubeKategori;
  /** Ticari ünvan */
  unvan: string;
  /** Lokasyonun adı — kartın başlığı */
  ad: string;
  /** Lokasyonun İngilizce adı */
  adEn: string;
  adres: string;
  /** Ekranda görünen telefon */
  tel: string;
  /** tel: bağlantısı için uluslararası biçim */
  telDial: string;
  /** Ekranda görünen faks */
  faks: string;
  faksDial: string;
  /**
   * İsteğe bağlı harita bağlantısı. Verilmezse adresten bir arama
   * bağlantısı üretilir; belirli bir konum iğnesi isteniyorsa buraya
   * doğrudan harita adresi yazılabilir.
   */
  haritaHref?: string;
}

/** Kartın ünvan satırı her kayıtta aynı olduğu için tek yerde durur. */
const UNVAN = 'Turasan Pazarlama Sanayi ve Ticaret Limited Şirketi';

export const subeler: Sube[] = [
  {
    kategori: 'Genel Merkez',
    unvan: UNVAN,
    ad: 'Merkez',
    adEn: 'Headquarters',
    adres: 'Temenni Mahallesi Tevfik Fikret Caddesi Turasan No: 39 Ürgüp – Nevşehir',
    tel: '(384) 341 4961',
    telDial: '+903843414961',
    faks: '(384) 341 4872',
    faksDial: '+903843414872',
  },
  {
    kategori: 'Satış & Şarap Evi',
    unvan: UNVAN,
    ad: 'Satış Mağazası ve Şarap Evi (Ürgüp Şubesi)',
    adEn: 'Sales Store and Wine House (Ürgüp Branch)',
    adres: 'Temenni Mahallesi Tevfik Fikret Caddesi Turasan No: 44–44/1 Ürgüp – Nevşehir',
    tel: '(384) 341 4961',
    telDial: '+903843414961',
    faks: '(384) 341 4872',
    faksDial: '+903843414872',
  },
  {
    kategori: 'Bölge Müdürlüğü',
    unvan: UNVAN,
    ad: 'İstanbul Bölge Müdürlüğü',
    adEn: 'Istanbul Regional Directorate',
    adres: 'Ferhatpaşa Mahallesi 31. Sokak No: 52–54/A Ataşehir – İstanbul',
    tel: '(0216) 545 1860',
    telDial: '+902165451860',
    faks: '(0216) 545 1862',
    faksDial: '+902165451862',
  },
  {
    kategori: 'Şube',
    unvan: UNVAN,
    ad: 'Sakarya Şubesi',
    adEn: 'Sakarya Branch',
    adres: 'Erenler Mahallesi 1199. Sokak No: 4A Erenler – Sakarya',
    tel: '(264) 282 2234',
    telDial: '+902642822234',
    faks: '(264) 282 2235',
    faksDial: '+902642822235',
  },
];

/**
 * Rozet vurgusu — sitenin paleti bilinçli olarak dar tutulduğu için her
 * kategoriye ayrı renk verilmez. Genel merkez garnet ile öne çıkar,
 * diğerleri ochre kullanır. Yeni kategori eklenirse buraya da eklenmeli;
 * eşleşme bulunmazsa ochre'ye düşer.
 */
export const kategoriVurgusu: Record<SubeKategori, 'garnet' | 'ochre'> = {
  'Genel Merkez': 'garnet',
  'Satış & Şarap Evi': 'ochre',
  'Bölge Müdürlüğü': 'ochre',
  Şube: 'ochre',
};

/** Rozet metni — kategori anahtarı Türkçe tutulur, iki dildeki karşılığı burada. */
export const kategoriEtiketi: Record<SubeKategori, { tr: string; en: string }> = {
  'Genel Merkez': { tr: 'Genel Merkez', en: 'Head Office' },
  'Satış & Şarap Evi': { tr: 'Satış & Şarap Evi', en: 'Sales & Wine House' },
  'Bölge Müdürlüğü': { tr: 'Bölge Müdürlüğü', en: 'Regional Directorate' },
  Şube: { tr: 'Şube', en: 'Branch' },
};

/** Adresten harita arama bağlantısı — kayıtta haritaHref yoksa kullanılır. */
export function haritaBagi(s: Sube): string {
  return s.haritaHref ?? `https://maps.google.com/?q=${encodeURIComponent(s.adres)}`;
}
