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
}

export interface Region {
  /** Anchor id */
  id: string;
  name: string;
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
  },
};

export const regions: Region[] = [
  {
    id: 'kapadokya',
    name: 'Kapadokya',
    grapeIds: ['emir', 'riesling', 'kalecik-karasi', 'okuzgozu'],
  },
  {
    id: 'denizli-guney',
    name: 'Denizli / Güney',
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
    grapeIds: ['misket'],
  },
  {
    id: 'tokat-erbaa',
    name: 'Tokat / Erbaa',
    grapeIds: ['narince'],
  },
  {
    id: 'elazig',
    name: 'Elazığ',
    grapeIds: ['okuzgozu'],
  },
];

/** Bölge id → ad (çapraz bağlantı metinleri için) */
export const regionName = (id: string): string =>
  regions.find((r) => r.id === id)?.name ?? id;
