/**
 * Site içeriği — tek kaynaktan yönetilir.
 * `tr` ve `en` aynı yapıdadır (`en: typeof tr`); bir alan eklenirse iki
 * dilde de eklenmelidir. Bileşenler dili URL'den okur (src/lib/dil.ts).
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
    // Slayt görselleri dekoratiftir (alt metin yok). Dosya yoksa slayt
    // etiketli yer tutucu olarak kalır. Önerilen: yatay, 2400×1600.
    slides: [
      { label: 'görsel · bağlar, gün doğumu', image: '/images/hero/01-baglar-gun-dogumu.jpeg' },
      { label: 'görsel · tüf vadisi', image: '/images/hero/02-tuf-vadisi.jpeg' },
      { label: 'görsel · kaya mahzen', image: '/images/hero/03-kaya-mahzen.jpeg' },
      { label: 'görsel · hasat', image: '/images/hero/04-hasat.jpeg' },
      { label: 'görsel · ürgüp panoraması', image: '/images/hero/05-urgup-panorama.jpeg' },
      { label: 'görsel · slayt 6', image: '/images/hero/06-slayt.jpeg' },
      { label: 'görsel · slayt 7', image: '/images/hero/07-slayt.jpeg' },
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
    archiveImage: '/images/miras/arsiv-1943.jpeg',
    archiveAlt: 'Turasan’ın kuruluş yıllarından arşiv fotoğrafı.',
    portraitLabel: 'portre · Hakan Turasan',
    // Aile mirası sayfasındaki "Bugün" bölümü de aynı dosyayı kullanır.
    portraitImage: '/images/miras/hakan-turasan.jpeg',
    portraitAlt: 'Hakan Turasan portresi.',
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
    // Harita görseli metin içerdiği için alt, aynı bilgiyi eksiksiz aktarır.
    mapAlt:
      'Türkiye haritası üzerinde bağ bölgeleri ve üzümleri: Kapadokya/Nevşehir — Emir, Kalecik Karası, Öküzgözü, Riesling; Denizli/Güney — Sauvignon Blanc, Chardonnay, Misket, Boğazkere, Cabernet Sauvignon, Cabernet Franc, Kalecik Karası, Merlot, Syrah; İzmir/Menderes — Misket; Tokat — Narince; Elazığ — Öküzgözü.',
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
    portraitImage: '/images/uretim/onolog.jpeg',
    portraitAlt: 'Turasan önoloğu, üretim alanında.',
    bandLabel: 'görsel · çelik tanklar ve üretim personeli',
    bandImage: '/images/uretim/celik-tanklar.jpeg',
    bandAlt: 'Paslanmaz çelik fermantasyon tankları ve üretim personeli.',
    cta: { label: 'Üretim sürecimiz', href: '/uretim-sureci' },
  },
  // Ana sayfadaki ödüller bölümü; liste src/content/awards.ts'ten gelir.
  awards: {
    id: 'oduller',
    overline: 'Ödüller',
    title: (yil: number) => `${yil} değerlendirmeleri`,
    intro: (yil: number) =>
      `Aşağıda, kurumumuzun ${yil} yılında katıldığı uluslararası yarışmalarda aldığı sonuçlar; yarışma, şarap ve derece düzeyinde listelenir.`,
    cta: { label: 'Tüm Ödüller', href: '/oduller' },
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
    descent: 'İletişim',
    labels: { address: 'Adres', email: 'E-posta', phone: 'Telefon', location: 'Konum' },
    city: 'Ürgüp',
    region: 'Nevşehir',
    address: 'Yunak Mah. Tevfik Fikret Cad. No: 6A-B, 50400 Ürgüp / Nevşehir',
    phone: '(0384) 341 49 61',
    // Ekranda yerel biçim görünür; tel: bağlantısı uluslararası biçimde olur ki
    // mobilden ve yurt dışından da doğru çevrilsin.
    phoneDial: '+903843414961',
    email: 'info@turasan.com.tr',
    mapCta: { label: 'Haritada aç', href: 'https://maps.google.com/?q=Turasan+%C5%9Earap%C3%A7%C4%B1l%C4%B1k+%C3%9Crg%C3%BCp' },
    /**
     * Gömülü harita. İşletme adıyla arama yapılır ki Google'daki işletme
     * kaydının iğnesine düşsün. API anahtarı gerekmez.
     */
    mapEmbed:
      'https://maps.google.com/maps?q=Turasan+%C5%9Earap%C3%A7%C4%B1l%C4%B1k+%C3%9Crg%C3%BCp&z=15&output=embed',
    mapTitle: 'Turasan Şarapçılık konumu — Google Haritalar',
    // Çerez tercihinde işlevsel çerezler kapalıyken haritanın yerinde görünür.
    mapPerde: {
      baslik: 'Harita',
      metin: 'Harita Google tarafından sağlanır; yüklendiğinde Google çerezleri kullanılabilir.',
      buton: 'Haritayı göster',
    },
    hoursTitle: 'Çalışma saatleri',
    hours: [
      { label: 'Hafta içi', value: '09.00 – 18.00' },
      { label: 'Hafta sonu', value: '10.00 – 17.00' },
    ],
    branchesCta: { label: 'Şubelerimiz ve Tesislerimiz', href: '/subelerimiz' },
  },
  /**
   * Sosyal medya — İletişim bölümünde ve footer'da aynı bileşenle render edilir.
   * `icon` alanı SocialLinks.astro içindeki çizimi seçer.
   *
   * Adresler kurumun kendi hesaplarıdır. Yeni bir ağ eklenecekse buraya bir
   * kayıt ekleyip SocialLinks.astro'ya aynı adla bir simge tanımlamak yeterli.
   */
  social: {
    title: 'Sosyal medya',
    links: [
      { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/turasanwines/' },
      { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/turasan/' },
    ],
  },
  footer: {
    about: 'Turasan Şarapçılık — Ürgüp, Kapadokya. 1943’ten beri.',
    langTitle: 'Dil',
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
          { label: 'Şubelerimiz ve Tesislerimiz', href: '/subelerimiz' },
        ],
      },
      {
        title: 'Kurumsal',
        links: [
          // `modal` verilen kayıtlar link değil, pencere açan buton olur.
          { label: 'KVKK Aydınlatma Metni', modal: 'kvkk' },
          { label: 'Çerez Politikası', modal: 'cerez' },
        ],
      },
    ],
    legal:
      '© 2026 Turasan Şarapçılık · Bu site bilgilendirme amaçlıdır; satış ve tanıtım içermez · 18+',
  },
  /**
   * Footer'daki kurumsal pencerelerin içeriği.
   *
   * DİKKAT — KVKK metni hukuki bir belgedir. Buradaki metin taslaktır;
   * yayına almadan önce hukuk danışmanı onayından geçirin. Özellikle
   * veri sorumlusu kimliği, saklama süreleri, aktarım yapılan taraflar
   * ve başvuru kanalı bilgileri eksiktir.
   */
  yasal: {
    kvkk: {
      baslik: 'KVKK Aydınlatma Metni',
      ustBaslik: '6698 Sayılı KVKK Uyarınca Kişisel Verilerin Korunması',
      giris:
        'Turasan Pazarlama Sanayi ve Ticaret Limited Şirketi olarak kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz. 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, şirketimiz ile paylaştığınız kişisel verileriniz hukuka ve dürüstlük kurallarına uygun olarak işlenmektedir.',
      bolumler: [
        {
          baslik: 'Verilerin İşlenme Amacı',
          metin:
            'Toplanan kişisel verileriniz; ürün ve hizmet dağıtım süreçlerinin yürütülmesi, iletişim faaliyetlerinin gerçekleştirilmesi, talep ve şikayetlerin değerlendirilmesi ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenmektedir.',
        },
        {
          baslik: 'Veri Sahibi Hakları',
          metin:
            'KVKK’nın 11. maddesi uyarınca veri sahipleri; kişisel verilerinin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, eksik veya yanlış işlenmişse düzeltilmesini ve silinmesini isteme hakkına sahiptir.',
        },
      ],
      kapat: 'Anladım / Kapat',
    },
    cerez: {
      baslik: 'Çerez (Cookie) Tercihleri',
      giris:
        'Aşağıdaki seçeneklerden çerez türü tercihlerinizi yapılandırabilirsiniz:',
      /**
       * `zorunlu: true` olan satır işaretli ve devre dışı gelir.
       * `varsayilan`, tercih daha önce kaydedilmemişse kullanılır.
       */
      turler: [
        {
          id: 'zorunlu',
          baslik: 'Zorunlu Çerezler',
          aciklama:
            'Web sitesinin temel işlevlerini yerine getirmesi için gerekli çerezlerdir.',
          zorunlu: true,
          varsayilan: true,
        },
        {
          id: 'analitik',
          baslik: 'Analitik Çerezler',
          aciklama:
            'Sitenin nasıl kullanıldığını anlamamıza ve performansını artırmamıza yardımcı olur.',
          zorunlu: false,
          varsayilan: true,
        },
        {
          id: 'pazarlama',
          baslik: 'Pazarlama ve İşlevsel Çerezler',
          aciklama:
            'Size daha kişiselleştirilmiş içerik ve teklifler sunmamızı sağlar.',
          zorunlu: false,
          varsayilan: false,
        },
      ],
      kaydet: 'Tercihleri Kaydet',
      kaydedildi: 'Tercihleriniz kaydedildi.',
      hata: 'Tercih kaydedilemedi — tarayıcınız site verilerini engelliyor olabilir.',
    },
  },
  /** Alt sayfa içerikleri */
  pages: {
    heritage: {
      title: 'Aile mirası',
      description: 'Turasan Şarapçılık’ın 1943’ten bugüne aile mirası: kuruluş, kuşaklar ve bugünkü yaklaşım.',
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
          image: '/images/aile-mirasi/kurulus-yillari.jpeg',
          alt: 'Kuruluş yıllarından arşiv fotoğrafı.',
        },
        {
          title: 'İkinci kuşak',
          body: [
            'Üretim bilgisi ve bağlar ikinci kuşağa devredildi; bu dönemde bağ alanları genişledi ve üretim kayıt altına alınarak sürdürüldü.',
          ],
          phLabel: 'görsel · arşiv, ikinci kuşak',
          image: '/images/aile-mirasi/ikinci-kusak.jpeg',
          alt: 'İkinci kuşak döneminden arşiv fotoğrafı.',
        },
        {
          title: 'Bugün',
          body: [
            'Bugün üretim, Hakan Turasan yönetiminde; geleneksel mahzen ile modern üretim tekniklerini bir arada kullanarak devam ediyor.',
          ],
          phLabel: 'portre · Hakan Turasan',
          // Ana sayfadaki Miras portresiyle aynı dosya.
          image: '/images/miras/hakan-turasan.jpeg',
          alt: 'Hakan Turasan portresi.',
        },
      ],
    },
    process: {
      title: 'Üretim süreci',
      description: 'Turasan’da üretim süreci: hasattan şişelemeye tanımlı aşamalar; kaya mahzen ve çelik tank bir arada.',
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
    branches: {
      title: 'Şubelerimiz ve Tesislerimiz',
      description: 'Turasan Pazarlama’nın genel merkezi, satış mağazası ve şarap evi, İstanbul bölge müdürlüğü ve Sakarya şubesi — adres ve iletişim bilgileri.',
      labels: { address: 'Adres', phone: 'Tel', fax: 'Faks' },
      overline: 'Lokasyonlarımız',
      lead:
        'Gelişmiş tesis ve şube ağımızla sizlere daha yakın ve hızlı hizmet sunuyoruz.',
    },
    awards: {
      docTitle: 'Ödül Arşivi',
      heading: 'Ödül arşivi',
      overline: 'Ödüller',
      description: 'Turasan Şarapçılık’ın uluslararası yarışma sonuçları; yarışma, şarap ve derece düzeyinde, yıla göre arşiv.',
      lead: (ilk: number, son: number, toplam: number) =>
        `${ilk}–${son} arasında uluslararası yarışmalarda alınan ${toplam} sonuç; yarışma, şarap ve derece düzeyinde, yeniden eskiye listelenir.`,
    },
    grapes: {
      docTitle: 'Üzümler ve Bölgeler',
      heading: 'Üzümler ve Bölgeler',
      overline: 'Bağcılık',
      description: 'Turasan’ın çalıştığı bölgeler ve bu bölgelerde yetişen üzümler: Kapadokya, Denizli/Güney, İzmir/Menderes, Tokat/Erbaa ve Elazığ.',
      lead: 'Üretimde kullanılan üzümler, farklı bölgelerdeki kendi bağlarımızdan ve anlaşmalı bağlardan gelir. Aşağıda her bölge ve o bölgede yetişen üzümler nesnel olarak listelenir.',
      regionalHeading: 'Bölgesel Bağlar',
      alsoGrown: 'Bu bölgede de yetiştirilir — açıklama:',
      inRegion: (bolge: string) => `${bolge} bölümünde`,
    },
    cellar: {
      title: 'Mahzen ve dinlendirme',
      description: 'Turasan’ın tüfe oyulmuş mahzeni: tarihçesi, sıcaklık ve nem koşulları, fıçı ve şişe dinlendirmesi, şaraba katkısı.',
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
  // Bileşenlere dağılmış küçük arayüz metinleri
  ui: {
    brand: 'Turasan Şarapçılık',
    home: 'Ana sayfa',
    mainMenu: 'Ana menü',
    mobileMenu: 'Mobil menü',
    menuOpen: 'Menüyü aç',
    menuClose: 'Menüyü kapat',
    // Dil geçişi bağlantısının etiketi hedef dilde yazılır
    switchLabel: 'Switch to English',
    descentNav: 'Sayfa bölümleri',
    descentHero: 'Giriş',
    loading: 'Site hazırlanıyor',
    closeWindow: 'Pencereyi kapat',
  },
};

/**
 * İngilizce içerik — /en/ altındaki sayfalar kullanır.
 * Yapısı `tr` ile birebir aynıdır; derleyici eksik alanı yakalar.
 * Ton Türkçedeki gibi nesneldir; davet/özendirme dili kullanılmaz.
 */
export const en: typeof tr = {
  meta: {
    title: 'Turasan Winery — Ürgüp, Cappadocia · Est. 1943',
    description:
      'Information about Turasan Winery: the 1943 heritage, the terroir of Cappadocia, cellars carved into tuff and the production process. Ürgüp, Nevşehir.',
  },
  nav: [
    { href: '/#miras', label: 'Heritage' },
    { href: '/#bagcilik', label: 'Viticulture' },
    { href: '/#uretim', label: 'Production' },
    { href: '/#oduller', label: 'Awards' },
    { href: '/#mahzen', label: 'Cellar' },
    { href: '/#iletisim', label: 'Contact' },
  ],
  hero: {
    logo: {
      name: 'Turasan',
      year: '1943',
    },
    sub: 'The story of a land that matures within tuff rock at the foot of Mount Erciyes — patiently, from one generation to the next.',
    scroll: 'Scroll',
    slides: [
      { label: 'image · vineyards at sunrise', image: '/images/hero/01-baglar-gun-dogumu.jpeg' },
      { label: 'image · tuff valley', image: '/images/hero/02-tuf-vadisi.jpeg' },
      { label: 'image · rock cellar', image: '/images/hero/03-kaya-mahzen.jpeg' },
      { label: 'image · harvest', image: '/images/hero/04-hasat.jpeg' },
      { label: 'image · Ürgüp panorama', image: '/images/hero/05-urgup-panorama.jpeg' },
      { label: 'image · slide 6', image: '/images/hero/06-slayt.jpeg' },
      { label: 'image · slide 7', image: '/images/hero/07-slayt.jpeg' },
    ],
  },
  heritage: {
    id: 'miras',
    overline: 'Heritage',
    title: 'From 1943 to today',
    body: [
      'Turasan was founded in Ürgüp in 1943 by Hasan Turasan. Since then, production has remained in the hands of the same family and in the same region.',
      'This continuity of more than eighty years was made possible by passing on knowledge of the vineyard, the cellar and production from one generation to the next. The same approach continues today, with production suited to the conditions of Cappadocia.',
    ],
    cta: { label: 'Family heritage', href: '/aile-mirasi' },
    archiveLabel: 'image · archive, 1943',
    archiveImage: '/images/miras/arsiv-1943.jpeg',
    archiveAlt: 'Archive photograph from Turasan’s founding years.',
    portraitLabel: 'portrait · Hakan Turasan',
    portraitImage: '/images/miras/hakan-turasan.jpeg',
    portraitAlt: 'Portrait of Hakan Turasan.',
    portraitCaption: 'Hakan Turasan — third generation',
  },
  vineyard: {
    id: 'bagcilik',
    overline: 'Viticulture',
    title: 'The terroir of Cappadocia',
    body: [
      'The soil of Cappadocia is formed of tuff, left behind by volcanic activity millions of years ago. Its free-draining structure and mineral content make it a distinctive ground for viticulture.',
      'The region’s high altitude and harsh continental climate accentuate the difference between day and night temperatures, so the grapes ripen slowly and evenly. Production relies on grapes from our own vineyards as well as from contracted vineyards in the region.',
    ],
    grapes: [
      {
        name: 'Emir',
        type: 'White',
        region: 'Nevşehir plateau',
        note: 'A white grape native to the region; high acidity with citrus and green apple notes.',
        href: '/uzumler-ve-bolgeler#emir',
      },
      {
        name: 'Narince',
        type: 'White',
        region: 'Originating in Tokat, grown in the region',
        note: 'Balanced body; floral nose, ripe pear and a light mineral finish.',
        href: '/uzumler-ve-bolgeler#narince',
      },
      {
        name: 'Kalecik Karası',
        type: 'Red',
        region: 'Originating in Kalecik, Ankara',
        note: 'A medium-bodied red; red fruit dominant, with soft tannins.',
        href: '/uzumler-ve-bolgeler#kalecik-karasi',
      },
      {
        name: 'Öküzgözü',
        type: 'Red',
        region: 'Originating in Elazığ',
        note: 'Lively acidity; sour cherry and black mulberry character, medium-length finish.',
        href: '/uzumler-ve-bolgeler#okuzgozu',
      },
    ],
    cta: { label: 'Grapes and regions', href: '/uzumler-ve-bolgeler' },
    mapAlt:
      'Map of Türkiye showing vineyard regions and their grapes: Cappadocia/Nevşehir — Emir, Kalecik Karası, Öküzgözü, Riesling; Denizli/Güney — Sauvignon Blanc, Chardonnay, Misket, Boğazkere, Cabernet Sauvignon, Cabernet Franc, Kalecik Karası, Merlot, Syrah; İzmir/Menderes — Misket; Tokat — Narince; Elazığ — Öküzgözü.',
  },
  production: {
    id: 'uretim',
    overline: 'Production',
    title: 'Between the rock cellar and the steel tank',
    body: [
      'Production takes place in two settings where tradition and technique work together: ageing in the stable, cool environment of cellars carved into tuff, and fermentation in temperature-controlled stainless steel tanks.',
      'The process is carried out together with French oenologists and food engineers. Every stage from harvest to bottling is defined and recorded, and the grapes reach the processing area shortly after leaving the vineyard.',
    ],
    portraitLabel: 'portrait · oenologist',
    portraitImage: '/images/uretim/onolog.jpeg',
    portraitAlt: 'Turasan’s oenologist in the production area.',
    bandLabel: 'image · steel tanks and production staff',
    bandImage: '/images/uretim/celik-tanklar.jpeg',
    bandAlt: 'Stainless steel fermentation tanks and production staff.',
    cta: { label: 'Our production process', href: '/uretim-sureci' },
  },
  awards: {
    id: 'oduller',
    overline: 'Awards',
    title: (yil: number) => `${yil} results`,
    intro: (yil: number) =>
      `Below are the results our company obtained in the international competitions it entered in ${yil}, listed by competition, wine and distinction.`,
    cta: { label: 'All Awards', href: '/oduller' },
  },
  cellar: {
    id: 'mahzen',
    overline: 'Cellar',
    title: 'A cellar carved into tuff',
    body: [
      'Ageing takes place in cellars carved into tuff rock in Ürgüp. The porous structure of the tuff keeps temperature and humidity within a narrow range inside, whatever the season outside.',
      'In this environment the wine rests first in oak barrels and then in the bottle. This balance, achieved without mechanical cooling, is why ageing in the region has followed the same method for centuries.',
    ],
    cta: { label: 'Cellar and ageing', href: '/mahzen' },
    image: '/images/mahzen/mahzen-koridor.jpeg',
    imageAlt: 'Cellar corridor carved into tuff rock, with oak barrels lined along the wall.',
    phLabel: 'image · rock cellar — public/images/mahzen/mahzen-koridor.jpeg',
  },
  contact: {
    id: 'iletisim',
    overline: 'Contact & Location',
    descent: 'Contact',
    labels: { address: 'Address', email: 'Email', phone: 'Phone', location: 'Location' },
    city: 'Ürgüp',
    region: 'Nevşehir',
    address: 'Yunak Mah. Tevfik Fikret Cad. No: 6A-B, 50400 Ürgüp / Nevşehir',
    phone: '(0384) 341 49 61',
    phoneDial: '+903843414961',
    email: 'info@turasan.com.tr',
    mapCta: { label: 'Open in maps', href: 'https://maps.google.com/?q=Turasan+%C5%9Earap%C3%A7%C4%B1l%C4%B1k+%C3%9Crg%C3%BCp&hl=en' },
    mapEmbed:
      'https://maps.google.com/maps?q=Turasan+%C5%9Earap%C3%A7%C4%B1l%C4%B1k+%C3%9Crg%C3%BCp&z=15&hl=en&output=embed',
    mapTitle: 'Turasan Winery location — Google Maps',
    mapPerde: {
      baslik: 'Map',
      metin: 'The map is provided by Google; Google cookies may be used once it loads.',
      buton: 'Show map',
    },
    hoursTitle: 'Opening hours',
    hours: [
      { label: 'Weekdays', value: '09:00 – 18:00' },
      { label: 'Weekends', value: '10:00 – 17:00' },
    ],
    branchesCta: { label: 'Our Branches and Facilities', href: '/subelerimiz' },
  },
  social: {
    title: 'Social media',
    links: [
      { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/turasanwines/' },
      { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/turasan/' },
    ],
  },
  footer: {
    about: 'Turasan Winery — Ürgüp, Cappadocia. Since 1943.',
    langTitle: 'Language',
    columns: [
      {
        title: 'Site',
        links: [
          { label: 'Heritage', href: '/#miras' },
          { label: 'Viticulture', href: '/#bagcilik' },
          { label: 'Grapes and Regions', href: '/uzumler-ve-bolgeler' },
          { label: 'Production', href: '/#uretim' },
          { label: 'Awards', href: '/#oduller' },
          { label: 'Cellar', href: '/#mahzen' },
          { label: 'Cellar and Ageing', href: '/mahzen' },
          { label: 'Contact', href: '/#iletisim' },
          { label: 'Our Branches and Facilities', href: '/subelerimiz' },
        ],
      },
      {
        title: 'Corporate',
        links: [
          { label: 'Privacy Notice (KVKK)', modal: 'kvkk' },
          { label: 'Cookie Policy', modal: 'cerez' },
        ],
      },
    ],
    legal:
      '© 2026 Turasan Winery · This website is for information only; it contains no sales or promotion · 18+',
  },
  /**
   * DİKKAT — KVKK metninin İngilizcesi bilgilendirme amaçlı bir çeviridir;
   * Türkçe metin gibi yayına almadan önce hukuk danışmanı onayından geçmelidir.
   */
  yasal: {
    kvkk: {
      baslik: 'Privacy Notice (KVKK)',
      ustBaslik: 'Protection of Personal Data under Law No. 6698 (KVKK)',
      giris:
        'As Turasan Pazarlama Sanayi ve Ticaret Limited Şirketi, we take the utmost care over the security of your personal data. In accordance with Turkish Law No. 6698 on the Protection of Personal Data (“KVKK”), the personal data you share with our company is processed lawfully and in good faith.',
      bolumler: [
        {
          baslik: 'Purpose of Processing',
          metin:
            'Your personal data is processed for the purposes of carrying out product and service distribution, conducting communication activities, evaluating requests and complaints, and fulfilling legal obligations.',
        },
        {
          baslik: 'Rights of Data Subjects',
          metin:
            'Under Article 11 of the KVKK, data subjects have the right to learn whether their personal data is processed, to request information if it has been processed, to learn the purpose of processing and whether it is used in line with that purpose, and to request its correction if incomplete or inaccurate, and its deletion.',
        },
      ],
      kapat: 'I understand / Close',
    },
    cerez: {
      baslik: 'Cookie Preferences',
      giris: 'You can configure your cookie preferences using the options below:',
      turler: [
        {
          id: 'zorunlu',
          baslik: 'Strictly Necessary Cookies',
          aciklama: 'Cookies required for the website to perform its basic functions.',
          zorunlu: true,
          varsayilan: true,
        },
        {
          id: 'analitik',
          baslik: 'Analytics Cookies',
          aciklama: 'Help us understand how the site is used and improve its performance.',
          zorunlu: false,
          varsayilan: true,
        },
        {
          id: 'pazarlama',
          baslik: 'Marketing and Functional Cookies',
          aciklama: 'Allow us to offer you more personalised content and offers.',
          zorunlu: false,
          varsayilan: false,
        },
      ],
      kaydet: 'Save Preferences',
      kaydedildi: 'Your preferences have been saved.',
      hata: 'Preferences could not be saved — your browser may be blocking site data.',
    },
  },
  pages: {
    heritage: {
      title: 'Family heritage',
      description: 'The family heritage of Turasan Winery from 1943 to today: the founding, the generations and today’s approach.',
      overline: 'Heritage',
      lead:
        'Three generations from 1943 to today; the same region, the same responsibility. This page tells the story of the founding and of the family in chronological order.',
      sections: [
        {
          title: 'Founding — 1943',
          body: [
            'Hasan Turasan began production in Ürgüp in 1943. The first cellar was carved into tuff rock using the method practised in the region for centuries.',
          ],
          phLabel: 'image · archive, founding years',
          image: '/images/aile-mirasi/kurulus-yillari.jpeg',
          alt: 'Archive photograph from the founding years.',
        },
        {
          title: 'Second generation',
          body: [
            'Production knowledge and the vineyards passed to the second generation; during this period the vineyard area grew and production continued on a recorded basis.',
          ],
          phLabel: 'image · archive, second generation',
          image: '/images/aile-mirasi/ikinci-kusak.jpeg',
          alt: 'Archive photograph from the second generation.',
        },
        {
          title: 'Today',
          body: [
            'Today production continues under the management of Hakan Turasan, combining the traditional cellar with modern production techniques.',
          ],
          phLabel: 'portrait · Hakan Turasan',
          image: '/images/miras/hakan-turasan.jpeg',
          alt: 'Portrait of Hakan Turasan.',
        },
      ],
    },
    process: {
      title: 'Production process',
      description: 'Turasan’s production process: defined stages from harvest to bottling, with the rock cellar and the steel tank side by side.',
      overline: 'Production',
      lead: 'From harvest to bottling, the process follows defined stages under controlled conditions.',
      steps: [
        {
          title: 'Harvest',
          body: 'The harvest date is set according to the ripeness of the grapes; they are picked by hand and brought to the processing area without delay.',
        },
        {
          title: 'Sorting and pressing',
          body: 'The grapes are sorted; pressing begins for the whites and maceration for the reds.',
        },
        {
          title: 'Fermentation',
          body: 'Fermentation takes place in temperature-controlled stainless steel tanks under the supervision of the oenologist.',
        },
        {
          title: 'Ageing',
          body: 'Ageing takes place all year round in the stable, cool environment of cellars carved into tuff.',
        },
        {
          title: 'Bottling',
          body: 'Bottling is carried out on a closed line; every batch is recorded.',
        },
      ],
    },
    branches: {
      title: 'Our Branches and Facilities',
      description: 'Turasan Pazarlama’s head office, sales store and wine house, Istanbul regional directorate and Sakarya branch — addresses and contact details.',
      labels: { address: 'Address', phone: 'Tel', fax: 'Fax' },
      overline: 'Our Locations',
      lead: 'With our network of facilities and branches, we offer you closer and faster service.',
    },
    awards: {
      docTitle: 'Awards Archive',
      heading: 'Awards archive',
      overline: 'Awards',
      description: 'Results of Turasan Winery in international competitions; an archive by year, listed by competition, wine and distinction.',
      lead: (ilk: number, son: number, toplam: number) =>
        `${toplam} results from international competitions between ${ilk} and ${son}, listed by competition, wine and distinction, from newest to oldest.`,
    },
    grapes: {
      docTitle: 'Grapes and Regions',
      heading: 'Grapes and Regions',
      overline: 'Viticulture',
      description: 'The regions Turasan works with and the grapes grown there: Cappadocia, Denizli/Güney, İzmir/Menderes, Tokat/Erbaa and Elazığ.',
      lead: 'The grapes used in production come from our own vineyards and from contracted vineyards in different regions. Each region and the grapes grown there are listed objectively below.',
      regionalHeading: 'Regional Vineyards',
      alsoGrown: 'Also grown in this region — description:',
      inRegion: (bolge: string) => `in the ${bolge} section`,
    },
    cellar: {
      title: 'Cellar and ageing',
      description: 'Turasan’s cellar carved into tuff: its history, temperature and humidity conditions, barrel and bottle ageing, and its contribution to the wine.',
      overline: 'Cellar',
      lead:
        'The cellar is not a store where wine simply waits; it is the space that sets the conditions for ageing. This page describes the cellar’s history, its physical conditions and its contribution to the wine.',
      conditions: [
        { label: 'Temperature', value: '11 – 14 °C, all year' },
        { label: 'Relative humidity', value: '70 – 85%' },
        { label: 'Light', value: 'No natural light; working lights only' },
        { label: 'Barrel ageing', value: '6 – 18 months, depending on the wine' },
        { label: 'Bottle ageing', value: 'At least 3 months before shipment' },
        { label: 'Climate control', value: 'No mechanical cooling' },
      ],
      sections: [
        {
          title: 'A structure carved into rock',
          body: [
            'In Cappadocia, tuff is a soft yet durable rock left behind by volcanic activity millions of years ago. It is soft enough to be worked by hand and strong enough to support itself once carved; storage and ageing spaces in the region have been opened this way for centuries.',
            'Turasan’s first cellar was opened the same way in 1943. As production grew over the following generations the cellar was enlarged; its essence, the choice to remain within the rock, has not changed.',
          ],
          image: '/images/mahzen/tuf-duvar.jpeg',
          alt: 'Close-up of the tuff wall of the cellar, showing carving marks.',
        },
        {
          title: 'Stable temperature and humidity',
          body: [
            'The thickness and porous structure of the tuff keep the seasonal swings outside from reaching the interior. The difference between summer and winter shrinks to a few degrees inside the cellar, and the temperature stays within a narrow range all year.',
            'The same structure also balances humidity. High relative humidity slows evaporation from the barrels and keeps corks from drying out. These conditions are achieved without mechanical climate control, through the behaviour of the rock itself.',
          ],
          image: '/images/mahzen/mahzen-genel.jpeg',
          alt: 'Vaulted interior of the cellar, with rock walls and working lights falling on the floor.',
        },
        {
          title: 'Barrel ageing',
          body: [
            'After fermentation, the reds and some of the whites are transferred to oak barrels. The barrel does not only add aroma; the very slow exchange of oxygen through its staves softens the tannins and allows the structure to settle.',
            'The duration is set according to the grape, the vintage and the intended character. Every barrel batch is recorded and tasted regularly under the oenologist’s supervision throughout ageing.',
          ],
          image: '/images/mahzen/ficilar.jpeg',
          alt: 'Rows of oak barrels stacked in the cellar.',
        },
        {
          title: 'Bottle ageing and contribution to the wine',
          body: [
            'After bottling, the wine rests horizontally in the cellar before shipment. At this stage the effect of the disturbance caused by bottling fades and the aromas come together.',
            'The cellar’s overall contribution lies not in a single stage but in continuity: the absence of temperature fluctuation slows ageing and makes it predictable; the dark environment protects light-sensitive compounds; high humidity limits loss of volume. As a result, the wine matures at a pace independent of the season outside.',
          ],
          image: '/images/mahzen/sise-dinlendirme.jpeg',
          alt: 'Bottles resting horizontally in cellar niches.',
        },
      ],
    },
  },
  ageGate: {
    logo: '/images/logo.png',
    logoAlt: 'Turasan 1943',
    body: [
      'This website belongs to the wine producer Turasan and is intended only for visitors aged 18 and over.',
      'To visit the site, you must be of legal drinking age.',
    ],
    prompt: 'Please verify your age before continuing.',
    yes: 'I am over 18',
    no: 'I am under 18',
    noHref: 'https://www.google.com',
    note: 'This website is for information only.',
    background: '/images/yas-kapisi-zemin.jpeg',
  },
  ui: {
    brand: 'Turasan Winery',
    home: 'Home',
    mainMenu: 'Main menu',
    mobileMenu: 'Mobile menu',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    switchLabel: 'Türkçeye geç',
    descentNav: 'Page sections',
    descentHero: 'Introduction',
    loading: 'Preparing the site',
    closeWindow: 'Close window',
  },
};

export const content: Record<Lang, typeof tr> = { tr, en };
