/**
 * Üzümler ve Bölgeler — tek veri kaynağı.
 *
 * Bölge → üzüm eşleşmeleri "Üzüm Listesi" belgesinden alınmıştır; belgede
 * olmayan eşleşme eklenmemiştir. Yeni üzüm eklemek için:
 *   1. `grapes` içine bir kayıt ekleyin,
 *   2. ilgili bölgenin `grapeIds` listesine id'sini yazın.
 *
 * Bir üzüm birden çok bölgede yetişiyorsa tam açıklaması yalnızca `primary`
 * bölgesinde gösterilir (anchor id'si de oradadır); diğer bölgelerde o
 * anchor'a çapraz bağlantı verilir. Böylece #kalecik-karasi gibi her anchor
 * sayfada tek kalır.
 *
 * Not: Riesling belgede "Kapadokya, Turasan" olarak geçiyor; "Turasan",
 * Kapadokya'daki kendi bağlarımız kabul edildi.
 */

export type GrapeType = 'Beyaz' | 'Kırmızı';

export interface Grape {
  /** Anchor id — sayfada #id olarak kullanılır */
  id: string;
  name: string;
  type: GrapeType;
  /** Tam açıklamanın gösterildiği bölge id'si */
  primary: string;
  /** Nesnel açıklama paragrafları */
  body: string[];
  /** İngilizce açıklama paragrafları */
  bodyEn: string[];
}

export interface Region {
  /** Anchor id */
  id: string;
  name: string;
  /** İngilizce ad */
  nameEn: string;
  /** Bu bölgede yetişen üzümlerin id'leri (belgedeki eşleşmeler) */
  grapeIds: string[];
}

export const grapes: Record<string, Grape> = {
  emir: {
    id: 'emir',
    name: 'Emir',
    type: 'Beyaz',
    primary: 'kapadokya',
    body: [
      'Kapadokya’ya özgü beyaz üzümdür; başka bölgelerde yaygın olarak yetiştirilmez. Tüf toprakta ve yüksek rakımda karakterini bulur.',
      'Yüksek asidite, narenciye ve yeşil elma tonları tipiktir; hafif gövdeli ve mineral yapıdadır.',
    ],
    bodyEn: [
      'A white grape native to Cappadocia; it is not widely grown in other regions. It finds its character in tuff soil at high altitude.',
      'High acidity with citrus and green apple notes is typical; it is light-bodied with a mineral structure.',
    ],
  },
  riesling: {
    id: 'riesling',
    name: 'Riesling',
    type: 'Beyaz',
    primary: 'kapadokya',
    body: [
      'Almanya–Ren kökenli beyaz üzümdür; Kapadokya’da Turasan bağlarında yetiştirilir.',
      'Yüksek asidite, yeşil elma ve narenciye tonları ile belirgin mineral karakter görülür.',
    ],
    bodyEn: [
      'A white grape originating in the Rhine, Germany; grown in Turasan vineyards in Cappadocia.',
      'High acidity, green apple and citrus notes, with a pronounced mineral character.',
    ],
  },
  'sauvignon-blanc': {
    id: 'sauvignon-blanc',
    name: 'Sauvignon Blanc',
    type: 'Beyaz',
    primary: 'denizli-guney',
    body: [
      'Fransa–Loire kökenli aromatik beyaz üzümdür.',
      'Bitkisel ve narenciye ağırlıklı burun, canlı asidite ve taze bir yapı tipiktir.',
    ],
    bodyEn: [
      'An aromatic white grape originating in the Loire, France.',
      'A herbaceous, citrus-led nose, lively acidity and a fresh structure are typical.',
    ],
  },
  chardonnay: {
    id: 'chardonnay',
    name: 'Chardonnay',
    type: 'Beyaz',
    primary: 'denizli-guney',
    body: [
      'Burgonya kökenli beyaz üzümdür; dünyada en yaygın yetiştirilen çeşitlerdendir.',
      'Elma ve turunçgil tonları görülür; karakteri uygulanan üretim yöntemine göre nötrden yuvarlağa uzanır.',
    ],
    bodyEn: [
      'A white grape originating in Burgundy; one of the most widely planted varieties in the world.',
      'Apple and citrus notes; its character ranges from neutral to rounded depending on the winemaking method.',
    ],
  },
  misket: {
    id: 'misket',
    name: 'Misket',
    type: 'Beyaz',
    primary: 'denizli-guney',
    body: [
      'Muskat ailesinden aromatik bir beyaz üzümdür.',
      'Çiçeksi ve üzümsü burun belirgindir; hafif gövdeli, aromatik yapıdadır.',
    ],
    bodyEn: [
      'An aromatic white grape from the Muscat family.',
      'A pronounced floral and grapey nose; light-bodied with an aromatic structure.',
    ],
  },
  narince: {
    id: 'narince',
    name: 'Narince',
    type: 'Beyaz',
    primary: 'tokat-erbaa',
    body: [
      'Kökeni Tokat–Kazova olan Narince, Anadolu’nun köklü beyaz üzümlerindendir.',
      'Dengeli gövde, çiçeksi burun, olgun armut ve hafif mineral bitiş görülür.',
    ],
    bodyEn: [
      'Originating in Kazova, Tokat, Narince is one of Anatolia’s long-established white grapes.',
      'Balanced body, a floral nose, ripe pear and a light mineral finish.',
    ],
  },
  bogazkere: {
    id: 'bogazkere',
    name: 'Boğazkere',
    type: 'Kırmızı',
    primary: 'denizli-guney',
    body: [
      'Diyarbakır kökenli kırmızı üzümdür; adını güçlü tanen yapısından alır.',
      'Koyu meyve karakteri, belirgin tanen ve uzun bitiş tipiktir.',
    ],
    bodyEn: [
      'A red grape originating in Diyarbakır; its name, meaning “throat scraper”, refers to its firm tannins.',
      'Dark fruit character, pronounced tannins and a long finish are typical.',
    ],
  },
  'cabernet-sauvignon': {
    id: 'cabernet-sauvignon',
    name: 'Cabernet Sauvignon',
    type: 'Kırmızı',
    primary: 'denizli-guney',
    body: [
      'Bordeaux kökenli kırmızı üzümdür; dünyada en yaygın yetiştirilen çeşitlerdendir.',
      'Siyah frenk üzümü karakteri, belirgin tanen ve uzun bitiş görülür.',
    ],
    bodyEn: [
      'A red grape originating in Bordeaux; one of the most widely planted varieties in the world.',
      'Blackcurrant character, pronounced tannins and a long finish.',
    ],
  },
  'cabernet-franc': {
    id: 'cabernet-franc',
    name: 'Cabernet Franc',
    type: 'Kırmızı',
    primary: 'denizli-guney',
    body: [
      'Bordeaux kökenli kırmızı üzümdür; Cabernet Sauvignon’un ebeveyn çeşitlerindendir.',
      'Kırmızı meyve ve hafif baharat tonları; Cabernet Sauvignon’a göre daha yumuşak tanen yapısı görülür.',
    ],
    bodyEn: [
      'A red grape originating in Bordeaux; one of the parent varieties of Cabernet Sauvignon.',
      'Red fruit and light spice notes; softer tannins than Cabernet Sauvignon.',
    ],
  },
  'kalecik-karasi': {
    id: 'kalecik-karasi',
    name: 'Kalecik Karası',
    type: 'Kırmızı',
    primary: 'denizli-guney',
    body: [
      'Ankara’nın Kalecik ilçesine özgü bu kırmızı üzüm, Anadolu’nun köklü çeşitlerindendir.',
      'Orta gövde, kırmızı meyve ağırlıklı aroma ve yumuşak tanen yapısı tipiktir.',
    ],
    bodyEn: [
      'Native to the Kalecik district of Ankara, this red grape is one of Anatolia’s long-established varieties.',
      'Medium body, red fruit-led aromas and soft tannins are typical.',
    ],
  },
  okuzgozu: {
    id: 'okuzgozu',
    name: 'Öküzgözü',
    type: 'Kırmızı',
    primary: 'elazig',
    body: [
      'Elazığ yöresine özgü Öküzgözü, Türkiye’nin en yaygın kırmızı üzümlerinden biridir.',
      'Canlı asidite, vişne ve karadut karakteri, orta uzunlukta bitiş görülür.',
    ],
    bodyEn: [
      'Native to the Elazığ area, Öküzgözü is one of the most widely grown red grapes in Türkiye.',
      'Lively acidity, sour cherry and black mulberry character, and a medium-length finish.',
    ],
  },
  merlot: {
    id: 'merlot',
    name: 'Merlot',
    type: 'Kırmızı',
    primary: 'denizli-guney',
    body: [
      'Bordeaux kökenli kırmızı üzümdür.',
      'Erik ve olgun kırmızı meyve tonları ile yumuşak tanen yapısı tipiktir.',
    ],
    bodyEn: [
      'A red grape originating in Bordeaux.',
      'Plum and ripe red fruit notes with soft tannins are typical.',
    ],
  },
  syrah: {
    id: 'syrah',
    name: 'Syrah',
    type: 'Kırmızı',
    primary: 'denizli-guney',
    body: [
      'Rhône kökenli kırmızı üzümdür.',
      'Koyu meyve ve karabiber tonları; orta–güçlü gövde görülür.',
    ],
    bodyEn: [
      'A red grape originating in the Rhône.',
      'Dark fruit and black pepper notes; medium to full body.',
    ],
  },
};

export const regions: Region[] = [
  {
    id: 'kapadokya',
    name: 'Kapadokya',
    nameEn: 'Cappadocia',
    grapeIds: ['emir', 'riesling', 'kalecik-karasi', 'okuzgozu'],
  },
  {
    id: 'denizli-guney',
    name: 'Denizli / Güney',
    nameEn: 'Denizli / Güney',
    grapeIds: [
      'sauvignon-blanc',
      'chardonnay',
      'misket',
      'bogazkere',
      'cabernet-sauvignon',
      'cabernet-franc',
      'kalecik-karasi',
      'merlot',
      'syrah',
    ],
  },
  {
    id: 'izmir-menderes',
    name: 'İzmir / Menderes',
    nameEn: 'İzmir / Menderes',
    grapeIds: ['misket'],
  },
  {
    id: 'tokat-erbaa',
    name: 'Tokat / Erbaa',
    nameEn: 'Tokat / Erbaa',
    grapeIds: ['narince'],
  },
  {
    id: 'elazig',
    name: 'Elazığ',
    nameEn: 'Elazığ',
    grapeIds: ['okuzgozu'],
  },
];

/** Bölge id → ad (çapraz bağlantı metinleri için) */
export const regionName = (id: string, lang: 'tr' | 'en' = 'tr'): string => {
  const r = regions.find((x) => x.id === id);
  if (!r) return id;
  return lang === 'en' ? r.nameEn : r.name;
};

/** Üzüm türü etiketi — veri Türkçe tutulur, İngilizcesi burada eşlenir. */
export const grapeTypeLabel = (type: GrapeType, lang: 'tr' | 'en' = 'tr'): string =>
  lang === 'en' ? (type === 'Beyaz' ? 'White' : 'Red') : type;
