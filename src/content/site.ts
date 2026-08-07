/**
 * Site içeriği — tek kaynaktan yönetilir.
 * İngilizce sürüm için `en` nesnesini doldurup sayfayı /en altında
 * aynı bileşenlerle render etmek yeterlidir.
 */

export type Lang = 'tr' | 'en';

export const tr = {
  meta: {
    title: 'Turasan Şarapçılık — Ürgüp, Kapadokya · Est. 1943',
    description:
      'Turasan Şarapçılık hakkında bilgilendirme sitesi: 1943 mirası, Kapadokya terroir’i, tüfe oyulmuş mahzenler ve ziyaret bilgileri. Ürgüp, Nevşehir.',
  },
  nav: [
    { href: '#miras', label: 'Miras' },
    { href: '#bagcilik', label: 'Bağcılık' },
    { href: '#uretim', label: 'Üretim' },
    { href: '#oduller', label: 'Ödüller' },
    { href: '#ziyaret', label: 'Ziyaret' },
    { href: '#iletisim', label: 'İletişim' },
  ],
  hero: {
    overline: 'Ürgüp, Kapadokya · Est. 1943',
    title: 'Turasan',
    sub: 'Erciyes’in eteklerinde, tüf kayaların içinde olgunlaşan bir toprağın hikâyesi — sabırla, kuşaktan kuşağa.',
    scroll: 'Kaydırın',
    // Gerçek fotoğraflar geldiğinde her yer tutucu bir <img> ile değişecek.
    slides: [
      'görsel · bağlar, gün doğumu',
      'görsel · tüf vadisi',
      'görsel · kaya mahzen',
      'görsel · hasat',
      'görsel · ürgüp panoraması',
    ],
  },
  heritage: {
    id: 'miras',
    overline: 'Miras',
    title: '1943’ten bugüne',
    body: [
      'Turasan, 1943 yılında Hasan Turasan tarafından Ürgüp’te kuruldu. Kuruluşundan bu yana üretim, aynı ailenin sorumluluğunda ve aynı yörede sürüyor.',
      'Seksen yılı aşkın bu süreklilik; bağ, mahzen ve üretim bilgisinin kuşaktan kuşağa aktarılmasıyla mümkün oldu. Bugün de aynı yaklaşımla, Kapadokya’nın koşullarına uygun üretim yapılıyor.',
    ],
    cta: { label: 'Aile mirası', href: '/aile-mirasi' },
    archiveLabel: 'görsel · arşiv, 1943',
    portraitLabel: 'portre · Hakan Turasan',
    portraitCaption: 'Hakan Turasan — üçüncü kuşak',
  },
  vineyard: {
    id: 'bagcilik',
    overline: 'Bağcılık',
    title: 'Kapadokya terroir’i',
    mapLabel: 'görsel · kapadokya bağ haritası',
    legend: [
      { key: 'own', label: 'Bağlarımız' },
      { key: 'partner', label: 'Anlaşmalı bağlar' },
    ],
    body: [
      'Kapadokya’nın toprağı, milyonlarca yıl önceki volkanik faaliyetin bıraktığı tüften oluşur. Süzek yapısı ve mineral içeriğiyle bu toprak, bağcılık için ayırt edici bir zemin sunar.',
      'Bölgenin yüksek rakımı ve sert kara iklimi, gündüz–gece sıcaklık farkını belirginleştirir; üzüm yavaş ve dengeli olgunlaşır. Üretim, kendi bağlarımızın yanı sıra bölgedeki anlaşmalı bağlardan alınan üzümlerle sürdürülür.',
    ],
    grapes: [
      {
        name: 'Emir',
        type: 'Beyaz',
        region: 'Nevşehir platosu',
        note: 'Yöreye özgü beyaz üzüm; yüksek asidite, narenciye ve yeşil elma tonları.',
      },
      {
        name: 'Narince',
        type: 'Beyaz',
        region: 'Tokat kökenli, bölgede yetiştirilir',
        note: 'Dengeli gövde; çiçeksi burun, olgun armut ve hafif mineral bitiş.',
      },
      {
        name: 'Kalecik Karası',
        type: 'Kırmızı',
        region: 'Ankara–Kalecik kökenli',
        note: 'Orta gövdeli kırmızı; kırmızı meyve ağırlıklı, yumuşak tanenli yapı.',
      },
      {
        name: 'Öküzgözü',
        type: 'Kırmızı',
        region: 'Elazığ kökenli',
        note: 'Canlı asidite; vişne ve karadut karakteri, orta uzunlukta bitiş.',
      },
    ],
    cta: { label: 'Üzümler', href: '/uzumler' },
  },
  craft: {
    id: 'uretim',
    overline: 'Üretim & Mahzen',
    title: 'Bağdan mahzene',
    body: [
      'Üretim, bağda başlar: hasat zamanı üzümün olgunluğuna göre belirlenir ve üzümler elle toplanır. İşleme, hasadı izleyen kısa süre içinde yapılır.',
      'Dinlendirme, tüfe oyulmuş mahzenlerde gerçekleşir. Tüfün doğal yalıtımı, yıl boyunca sabit ve serin bir ortam sağlar; bu, bölgede yüzyıllardır bilinen bir saklama yöntemidir.',
    ],
    cta: { label: 'Üretim sürecimiz', href: '#uretim' },
    phLabel: 'görsel · tüf mahzen',
  },
  visit: {
    id: 'ziyaret',
    overline: 'Ziyaret & Tadım',
    title: 'Mahzeni yerinde görün',
    body: [
      'Üretim tesisimiz ve tüf mahzenlerimiz, çalışma saatleri içinde ziyarete açıktır. Ziyaret sırasında üretim süreci ve bölge bağcılığı hakkında bilgi verilir.',
      'Grup ziyaretleri için önceden randevu alınması gerekir. Ayrıntılar için iletişim bölümündeki bilgileri kullanabilirsiniz.',
    ],
    hours: [
      { label: 'Hafta içi', value: '09.00 – 18.00' },
      { label: 'Hafta sonu', value: '10.00 – 17.00' },
    ],
    cta: { label: 'Yol tarifi & iletişim', href: '#iletisim' },
    phLabel: 'görsel · ziyaret alanı',
  },
  contact: {
    id: 'iletisim',
    overline: 'İletişim & Konum',
    title: 'Ürgüp, Nevşehir',
    address: 'Yunak Mah. Tevfik Fikret Cad. No: 6A-B, 50400 Ürgüp / Nevşehir',
    phone: '+90 (384) 000 00 00',
    email: 'info@turasan.example',
    mapLabel: 'harita · konum',
    hoursTitle: 'Çalışma saatleri',
  },
  footer: {
    about: 'Turasan Şarapçılık — Ürgüp, Kapadokya. 1943’ten beri.',
    columns: [
      {
        title: 'Site',
        links: [
          { label: 'Hakkımızda', href: '#miras' },
          { label: 'Bağlar', href: '#terroir' },
          { label: 'Üretim', href: '#uretim' },
          { label: 'Ziyaret', href: '#ziyaret' },
          { label: 'İletişim', href: '#iletisim' },
        ],
      },
      {
        title: 'Kurumsal',
        links: [
          { label: 'KVKK Aydınlatma Metni', href: '#' },
          { label: 'Çerez Politikası', href: '#' },
          { label: 'Gizlilik', href: '#' },
        ],
      },
    ],
    legal:
      '© 2026 Turasan Şarapçılık · Bu site bilgilendirme amaçlıdır; satış ve tanıtım içermez · 18+',
  },
  ageGate: {
    overline: 'Turasan Şarapçılık · Ürgüp',
    title: 'Bu site bilgilendirme amaçlıdır',
    body:
      'İçerik, alkollü içki üreticisi bir kuruluşa aittir ve yalnızca 18 yaş ve üzeri ziyaretçilere yöneliktir. Devam etmeden önce yaşınızı doğrulayın.',
    yes: '18 yaşından büyüğüm',
    no: 'Değilim',
    noHref: 'https://www.google.com',
  },
  langSwitch: { current: 'TR', other: 'EN', otherHref: '#' },
};

/** İngilizce sürüm iskeleti — çeviriler eklendiğinde /en sayfasında kullanılır. */
export const en: Partial<typeof tr> = {};

export const content: Record<Lang, typeof tr | Partial<typeof tr>> = { tr, en };
