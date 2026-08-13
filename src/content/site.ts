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
  // "/#..." biçimi, alt sayfalardan da ana sayfadaki bölüme götürür.
  nav: [
    { href: '/#miras', label: 'Miras' },
    { href: '/#bagcilik', label: 'Bağcılık' },
    { href: '/#uretim', label: 'Üretim' },
    { href: '/#oduller', label: 'Ödüller' },
    { href: '/#ziyaret', label: 'Ziyaret' },
    { href: '/#iletisim', label: 'İletişim' },
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
    // Harita artık interaktif (TerroirHaritasi.astro) ve verisini
    // src/content/regions.ts'ten alıyor; yer tutucu etiketi ile lejant kalktı.
    body: [
      'Kapadokya’nın toprağı, milyonlarca yıl önceki volkanik faaliyetin bıraktığı tüften oluşur. Süzek yapısı ve mineral içeriğiyle bu toprak, bağcılık için ayırt edici bir zemin sunar.',
      'Bölgenin yüksek rakımı ve sert kara iklimi, gündüz–gece sıcaklık farkını belirginleştirir; üzüm yavaş ve dengeli olgunlaşır. Üretim, kendi bağlarımızın yanı sıra bölgedeki anlaşmalı bağlardan alınan üzümlerle sürdürülür.',
    ],
    // Kart tasarımı/metni sabit; href yalnızca detay sayfasındaki anchor'a götürür.
    grapes: [
      {
        name: 'Emir',
        type: 'Beyaz',
        region: 'Nevşehir platosu',
        note: 'Yöreye özgü beyaz üzüm; yüksek asidite, narenciye ve yeşil elma tonları.',
        href: '/uzumler-ve-bolgeler#emir',
      },
      {
        name: 'Narince',
        type: 'Beyaz',
        region: 'Tokat kökenli, bölgede yetiştirilir',
        note: 'Dengeli gövde; çiçeksi burun, olgun armut ve hafif mineral bitiş.',
        href: '/uzumler-ve-bolgeler#narince',
      },
      {
        name: 'Kalecik Karası',
        type: 'Kırmızı',
        region: 'Ankara–Kalecik kökenli',
        note: 'Orta gövdeli kırmızı; kırmızı meyve ağırlıklı, yumuşak tanenli yapı.',
        href: '/uzumler-ve-bolgeler#kalecik-karasi',
      },
      {
        name: 'Öküzgözü',
        type: 'Kırmızı',
        region: 'Elazığ kökenli',
        note: 'Canlı asidite; vişne ve karadut karakteri, orta uzunlukta bitiş.',
        href: '/uzumler-ve-bolgeler#okuzgozu',
      },
    ],
    cta: { label: 'Üzümler ve bölgeler', href: '/uzumler-ve-bolgeler' },
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
    phone: '(0384) 341 49 61',
    // Ekranda yerel biçim görünür; tel: bağlantısı uluslararası biçimde olur ki
    // mobilden ve yurt dışından da doğru çevrilsin.
    phoneDial: '+903843414961',
    email: 'info@turasan.com.tr',
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
          { label: 'Miras', href: '/#miras' },
          { label: 'Bağcılık', href: '/#bagcilik' },
          { label: 'Üzümler ve Bölgeler', href: '/uzumler-ve-bolgeler' },
          { label: 'Üretim', href: '/#uretim' },
          { label: 'Ödüller', href: '/#oduller' },
          { label: 'Ziyaret', href: '/#ziyaret' },
          { label: 'İletişim', href: '/#iletisim' },
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
  /** Alt sayfa içerikleri */
  pages: {
    heritage: {
      title: 'Aile mirası',
      overline: 'Miras',
      lead:
        '1943’ten bugüne üç kuşak; aynı yöre, aynı sorumluluk. Bu sayfa, kuruluşun ve ailenin hikâyesini kronolojik olarak aktarır.',
      sections: [
        {
          title: 'Kuruluş — 1943',
          body: [
            'Hasan Turasan, 1943 yılında Ürgüp’te üretime başladı. İlk mahzen, yörede yüzyıllardır kullanılan yöntemle tüf kayaya oyuldu.',
          ],
          phLabel: 'görsel · arşiv, kuruluş yılları',
        },
        {
          title: 'İkinci kuşak',
          body: [
            'Üretim bilgisi ve bağlar ikinci kuşağa devredildi; bu dönemde bağ alanları genişledi ve üretim kayıt altına alınarak sürdürüldü.',
          ],
          phLabel: 'görsel · arşiv, ikinci kuşak',
        },
        {
          title: 'Bugün',
          body: [
            'Bugün üretim, Hakan Turasan yönetiminde; geleneksel mahzen ile modern üretim tekniklerini bir arada kullanarak devam ediyor.',
          ],
          phLabel: 'portre · Hakan Turasan',
        },
      ],
    },
    process: {
      title: 'Üretim süreci',
      overline: 'Üretim',
      lead:
        'Hasattan şişelemeye süreç, tanımlı aşamalarla ve kontrollü koşullarda yürütülür.',
      steps: [
        {
          title: 'Hasat',
          body: 'Hasat zamanı üzümün olgunluğuna göre belirlenir; üzümler elle toplanır ve kısa sürede işleme alanına ulaştırılır.',
        },
        {
          title: 'Ayıklama ve presleme',
          body: 'Üzümler ayıklanır; beyazlarda presleme, kırmızılarda maserasyon süreci başlar.',
        },
        {
          title: 'Fermantasyon',
          body: 'Fermantasyon, sıcaklık kontrollü paslanmaz çelik tanklarda, önolog gözetiminde yürütülür.',
        },
        {
          title: 'Dinlendirme',
          body: 'Dinlendirme, tüfe oyulmuş kaya mahzenlerin yıl boyu sabit ve serin ortamında gerçekleşir.',
        },
        {
          title: 'Şişeleme',
          body: 'Şişeleme, kapalı hat üzerinde yapılır; her parti kayıt altına alınır.',
        },
      ],
    },
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
