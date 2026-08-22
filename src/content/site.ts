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
      'Turasan Şarapçılık hakkında bilgilendirme sitesi: 1943 mirası, Kapadokya terroir’i, tüfe oyulmuş mahzenler ve üretim süreci. Ürgüp, Nevşehir.',
  },
  // "/#..." biçimi, alt sayfalardan da ana sayfadaki bölüme götürür.
  nav: [
    { href: '/#miras', label: 'Miras' },
    { href: '/#bagcilik', label: 'Bağcılık' },
    { href: '/#uretim', label: 'Üretim' },
    { href: '/#oduller', label: 'Ödüller' },
    { href: '/#mahzen', label: 'Mahzen' },
    { href: '/#iletisim', label: 'İletişim' },
  ],
  hero: {
    /**
     * Hero'daki logo görselinin alternatif metni buradan kurulur
     * ("Turasan 1943"). Görselin kendisi public/images/logo-koyu-zemin.png.
     */
    logo: {
      name: 'Turasan',
      year: '1943',
    },
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
  // Ton: nesnel anlatım — davet/özendirme dili kullanılmaz.
  cellar: {
    id: 'mahzen',
    overline: 'Mahzen',
    title: 'Tüfe oyulmuş mahzen',
    body: [
      'Dinlendirme, Ürgüp’te tüf kayaya oyulmuş mahzenlerde yapılır. Tüfün gözenekli yapısı, dışarıda mevsim ne olursa olsun içeride sıcaklığı ve nemi dar bir aralıkta tutar.',
      'Şarap bu ortamda önce meşe fıçılarda, ardından şişede dinlenir. Mekanik soğutmaya ihtiyaç duyulmadan sağlanan bu denge, yörede dinlendirmenin yüzyıllardır aynı yöntemle sürmesinin sebebidir.',
    ],
    cta: { label: 'Mahzen ve dinlendirme', href: '/mahzen' },
    // Dosya yoksa yer tutucu görünür; yolu buradan değiştirin.
    image: '/images/mahzen/mahzen-koridor.jpeg',
    imageAlt: 'Tüf kayaya oyulmuş mahzen koridoru; duvar boyunca dizilmiş meşe fıçılar.',
    phLabel: 'görsel · kaya mahzen — public/images/mahzen/mahzen-koridor.jpeg',
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
          { label: 'Mahzen', href: '/#mahzen' },
          { label: 'Mahzen ve Dinlendirme', href: '/mahzen' },
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
    cellar: {
      title: 'Mahzen ve dinlendirme',
      overline: 'Mahzen',
      lead:
        'Mahzen, şarabın beklediği bir depo değil; dinlendirme koşullarını belirleyen bir mekândır. Bu sayfa mahzenin tarihçesini, fiziksel koşullarını ve şaraba katkısını aktarır.',
      /**
       * DİKKAT — sıcaklık, nem ve süre değerleri yer tutucudur; Kapadokya
       * tüf mahzenleri için tipik aralıklardır. Yayına almadan önce kendi
       * ölçümlerinizle doğrulayın ve gerekiyorsa güncelleyin.
       */
      conditions: [
        { label: 'Sıcaklık', value: '11 – 14 °C, yıl boyu' },
        { label: 'Bağıl nem', value: '%70 – 85' },
        { label: 'Işık', value: 'Doğal ışık almaz; yalnızca çalışma aydınlatması' },
        { label: 'Fıçıda dinlendirme', value: 'Ürüne göre 6 – 18 ay' },
        { label: 'Şişede dinlendirme', value: 'Sevkiyat öncesi en az 3 ay' },
        { label: 'İklimlendirme', value: 'Mekanik soğutma kullanılmaz' },
      ],
      sections: [
        {
          title: 'Kayaya oyulmuş bir yapı',
          body: [
            'Kapadokya’da tüf, milyonlarca yıl önceki volkanik faaliyetin bıraktığı yumuşak ama dayanıklı bir kayaçtır. Elle işlenebilecek kadar yumuşak, oyulduktan sonra kendini taşıyacak kadar sağlamdır; bölgede depolama ve dinlendirme alanları yüzyıllardır bu yöntemle açılmıştır.',
            'Turasan’ın ilk mahzeni de 1943’te aynı yöntemle açıldı. Sonraki kuşaklarda üretim büyüdükçe mahzen genişletildi; yapının özü, yani kayanın içinde kalma tercihi değişmedi.',
          ],
          image: '/images/mahzen/tuf-duvar.jpeg',
          alt: 'Mahzenin oyma izleri görünen tüf duvarı, yakın çekim.',
        },
        {
          title: 'Sabit sıcaklık ve nem',
          body: [
            'Tüfün kalınlığı ve gözenekli yapısı, dışarıdaki mevsim salınımını içeriye taşımaz. Yaz ile kış arasındaki fark, mahzen içinde birkaç dereceye iner; sıcaklık yıl boyu dar bir aralıkta kalır.',
            'Aynı yapı nemi de dengeler. Yüksek bağıl nem, fıçılardaki buharlaşmayı yavaşlatır ve mantarların kurumasını önler. Bu koşullar mekanik iklimlendirme olmadan, kayanın kendi davranışıyla sağlanır.',
          ],
          image: '/images/mahzen/mahzen-genel.jpeg',
          alt: 'Mahzenin tonozlu iç mekânı; kaya duvarlar ve zemine vuran çalışma aydınlatması.',
        },
        {
          title: 'Fıçıda dinlendirme',
          body: [
            'Kırmızılar ve bir kısım beyaz, fermantasyon sonrası meşe fıçılara alınır. Fıçı, şaraba yalnızca aroma katmaz; duvarından geçen çok yavaş oksijen alışverişi tanenlerin yumuşamasını ve yapının oturmasını sağlar.',
            'Süre üzüme, rekolteye ve hedeflenen karaktere göre belirlenir. Her fıçı partisi kayıt altına alınır ve dinlendirme boyunca önolog gözetiminde düzenli olarak tadılır.',
          ],
          image: '/images/mahzen/ficilar.jpeg',
          alt: 'Mahzende üst üste istiflenmiş meşe fıçı sıraları.',
        },
        {
          title: 'Şişede dinlendirme ve şaraba katkısı',
          body: [
            'Şişeleme sonrası şarap, sevkiyattan önce mahzende yatay olarak dinlendirilir. Bu aşamada şişeleme sırasında oluşan sarsıntının etkisi geçer, aromalar bütünleşir.',
            'Mahzenin toplam katkısı tek bir aşamada değil, sürekliliktedir: sıcaklık dalgalanmasının olmaması yaşlanmayı yavaşlatır ve öngörülebilir kılar; karanlık ortam ışığa duyarlı bileşenleri korur; yüksek nem hacim kaybını sınırlar. Sonuçta şarap, dışarıdaki mevsimden bağımsız bir hızda olgunlaşır.',
          ],
          image: '/images/mahzen/sise-dinlendirme.jpeg',
          alt: 'Mahzen nişlerinde yatay olarak dinlendirilen şişeler.',
        },
      ],
    },
  },
  ageGate: {
    /** Kart üstündeki logo — kart zemini krem olduğu için lacivert asıl sürüm. */
    logo: '/images/logo.png',
    logoAlt: 'Turasan 1943',
    /** Her madde ekranda ayrı bir paragraf; masaüstünde ikişer satır sarar. */
    body: [
      'Bu web sitesi şarap üreticisi Turasan’a aittir ve yalnızca 18 yaş ve üzeri ziyaretçilere yöneliktir.',
      'Siteyi ziyaret edebilmek için yasal alkol tüketim yaşında olmanız gerekmektedir.',
    ],
    prompt: 'Devam etmeden önce yaşınızı doğrulayın.',
    yes: '18 Yaşından Büyüğüm',
    no: '18 Yaşından Küçüğüm',
    noHref: 'https://www.google.com',
    note: 'Bu site bilgilendirme amaçlıdır.',
    /** Tam ekran taş doku zemini. Dosya yoksa tüf tonlarında gradyan görünür. */
    background: '/images/yas-kapisi-zemin.jpeg',
  },
  langSwitch: { current: 'TR', other: 'EN', otherHref: '#' },
};

/** İngilizce sürüm iskeleti — çeviriler eklendiğinde /en sayfasında kullanılır. */
export const en: Partial<typeof tr> = {};

export const content: Record<Lang, typeof tr | Partial<typeof tr>> = { tr, en };
