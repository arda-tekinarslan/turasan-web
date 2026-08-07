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
  production: {
    id: 'uretim',
    overline: 'Üretim',
    title: 'Kaya mahzeni ile çelik tank arasında',
    body: [
      'Üretim, gelenekle tekniğin bir arada işlediği iki mekânda sürer: dinlendirme, tüfe oyulmuş kaya mahzenlerin sabit ve serin ortamında; fermantasyon, sıcaklık kontrollü paslanmaz çelik tanklarda yapılır.',
      'Süreç, Fransız önologlar ve gıda mühendisleriyle birlikte yürütülür. Hasattan şişelemeye her aşama tanımlı ve kayıtlıdır; üzüm, bağdan işleme alanına kısa sürede ulaştırılır.',
    ],
    portraitLabel: 'portre · önolog',
    bandLabel: 'görsel · çelik tanklar ve üretim personeli',
    cta: { label: 'Üretim sürecimiz', href: '/uretim-sureci' },
  },
  // Örnek yer tutucu veriler — nihai liste ve dil, hukuk danışmanı
  // onayından geçmelidir. Ödül bilgisi ürünle değil, kurumla ve üretim
  // yılıyla ilişkilendirilir.
  awards: {
    id: 'oduller',
    overline: 'Ödüller',
    title: '2026 değerlendirmeleri',
    intro:
      'Aşağıda, kurumumuzun 2026 yılında katıldığı uluslararası yarışmalarda aldığı sonuçlar yarışma, kategori ve yıl düzeyinde listelenir.',
    items: [
      { competition: 'Decanter World Wine Awards', category: 'Beyaz şaraplar', year: '2026', logoLabel: 'logo · dwwa' },
      { competition: 'International Wine & Spirit Competition', category: 'Kırmızı şaraplar', year: '2026', logoLabel: 'logo · iwsc' },
      { competition: 'Mundus Vini', category: 'Beyaz şaraplar', year: '2026', logoLabel: 'logo · mundus vini' },
      { competition: 'Concours Mondial de Bruxelles', category: 'Kırmızı şaraplar', year: '2026', logoLabel: 'logo · cmb' },
    ],
    cta: { label: 'Tüm ödüller', href: '/oduller' },
  },
  // Ton: "ziyaret bilgisi" — davet/özendirme dili kullanılmaz.
  visit: {
    id: 'ziyaret',
    overline: 'Ziyaret',
    title: 'Mahzeni yerinde görün',
    body: [
      'Kaya mahzen ve üretim alanı, çalışma saatleri içinde ziyarete açıktır. Ziyaret sırasında üretim süreci ve bölge bağcılığı hakkında bilgi verilir.',
    ],
    info: [
      { label: 'Günler', value: 'Pazartesi – Pazar' },
      { label: 'Hafta içi', value: '09.00 – 18.00' },
      { label: 'Hafta sonu', value: '10.00 – 17.00' },
      { label: 'Grup ziyaretleri', value: 'En az üç iş günü önceden randevu gerekir' },
      { label: 'Ulaşım', value: 'Ürgüp merkezine yürüme mesafesindedir; otopark mevcuttur' },
    ],
    cta: { label: 'Yol tarifi & iletişim', href: '#iletisim' },
    phLabel: 'görsel · kaya mahzen',
  },
  contact: {
    id: 'iletisim',
    overline: 'İletişim & Konum',
    city: 'Ürgüp',
    region: 'Nevşehir',
    address: 'Yunak Mah. Tevfik Fikret Cad. No: 6A-B, 50400 Ürgüp / Nevşehir',
    phone: '+90 (384) 000 00 00',
    email: 'info@turasan.example',
    mapCta: { label: 'Haritada aç', href: 'https://maps.google.com/?q=Turasan+%C5%9Earap%C3%A7%C4%B1l%C4%B1k+%C3%9Crg%C3%BCp' },
    mapLabel: 'harita · gömülü konum (lazy-load)',
    hoursTitle: 'Çalışma saatleri',
    hours: [
      { label: 'Hafta içi', value: '09.00 – 18.00' },
      { label: 'Hafta sonu', value: '10.00 – 17.00' },
    ],
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
