/**
 * Site içeriği — tek kaynaktan yönetilir.
 * `tr` ve `en` aynı yapıdadır (`en: typeof tr`); bir alan eklenirse iki
 * dilde de eklenmelidir. Bileşenler dili URL'den okur (src/lib/dil.ts).
 */

export type Lang = 'tr' | 'en';

/** Aile mirası sayfasındaki kuşak bölümleri; `donem` ve `items` isteğe bağlı. */
type KusakBolumu = {
  title: string;
  donem?: string;
  body: string[];
  /** Madde listesi — kalın başlık + açıklama */
  items?: { title: string; body: string }[];
  /** Fotoğraf isteğe bağlı — verilmezse bölüm tek sütun render edilir */
  phLabel?: string;
  image?: string;
  alt?: string;
};

export const tr = {
  meta: {
    title: 'Turasan Şarapçılık — Ürgüp, Kapadokya · Est. 1943',
    description:
      'Turasan Şarapçılık hakkında bilgilendirme sitesi: 1943 mirası, Kapadokya teruarı, tüfe oyulmuş mahzenler ve üretim süreci. Ürgüp, Nevşehir.',
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
    sub: '1943’ten beri tüf kayaların sessizliğinde olgunlaşan tutku; Kapadokya’nın ruhunu kuşaktan kuşağa yaşatan köklü bir miras.',
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
      'Turasan, 1943 yılında büyükdedemiz Hasan Turasan tarafından Ürgüp’te temelleri atılan, Kapadokya bölgesinde kurulan ilk şarap üreticisidir.',
      'Seksen yılı aşan bu zamansız süreklilik; bağa, mahzene ve şarapçılık zanaatına dair köklü birikimin kuşaktan kuşağa tutku ve incelikle aktarılmasıyla mümkün oldu. Bugün de aynı rafine yaklaşımla, ileri teknolojiyle nitelikli üretimimize yön veriyoruz.',
    ],
    cta: { label: 'Aile mirası', href: '/aile-mirasi' },
    archiveLabel: 'görsel · arşiv, 1943',
    archiveImage: '/images/miras/arsiv-1943.jpeg',
    archiveAlt: 'Turasan’ın kuruluş yıllarından arşiv fotoğrafı.',
    portraitLabel: 'portre · Hasan Turasan',
    // Aile mirası sayfasındaki üçüncü kuşak bölümü de aynı dosyayı kullanır.
    portraitImage: '/images/miras/hakan-turasan.jpeg',
    portraitAlt: 'Hasan Turasan portresi.',
    portraitCaption: 'Hasan Turasan — üçüncü kuşak',
  },
  vineyard: {
    id: 'bagcilik',
    overline: 'Bağcılık',
    title: 'Kapadokya teruarı',
    // Harita artık interaktif (TerroirHaritasi.astro) ve verisini
    // src/content/regions.ts'ten alıyor; yer tutucu etiketi ile lejant kalktı.
    body: [
      'Milyonlarca yıl boyunca yanardağların püskürttüğü lav ve küller, Kapadokya bağlarına hayat veren tüflü toprak yapısını oluşturmuştur. Gözenekli yapısıyla nemi tutan bu volkanik topraklar, asmaların doğal dengesini korurken şaraplarımıza belirgin bir mineral zenginlik katar.',
      'Kapadokya, bağcılık ve şarapçılık kültürünün dünyadaki en eski merkezlerinden biridir. 4.000 yılı aşan bu köklü gelenek, Hititlerden günümüze kayalara oyulmuş mahzenlerde ve asırlık bağlarda varlığını sürdürmektedir. Ortalama 1.000 – 1.200 metre rakımdaki bağlar, sert karasal iklimin tüm ayrıcalığını taşır. Yüksek irtifadaki belirgin gece-gündüz sıcaklık farkı; üzümlerin aromatik profilini ve doğal asiditesini koruyarak yavaş, dengeli bir olgunlaşma sağlar.',
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
        note: 'Hafif gövdeli kırmızı; kırmızı meyve ağırlıklı, yumuşak tanenli yapı.',
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
      'Üretim yolculuğumuz; doğal tüf kaya mahzenlerin serinliğinde dinlenen Fransız meşe fıçıları ile teknolojinin hassasiyetini sunan paslanmaz çelik tanklar arasında şekillenir. Fransız önologlarımızın ve gıda mühendislerimizin kontrolüyle, bağdan özenle seçilmiş üzümlerimizin fermantasyondan olgunlaşmaya kadar her anı titizlikle kayıt altına alınır.',
    ],
    portraitLabel: 'portre · önolog',
    portraitImage: '/images/uretim/onolog.jpeg',
    portraitAlt: 'Turasan önoloğu, üretim alanında.',
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
      'Kapadokya’nın milyonlarca yıllık volkanik geçmişinden süzülen tüf kayalar, mahzenimizin ruhunu oluşturur. Usta ellerin çekiç ve murç darbeleriyle, sabırla oyularak gün ışığına çıkarılan bu özel yeraltı sığınağı; sadece bir saklama alanı değil, şarabın yaşayan habitatıdır.',
      'Tüf kayanın nefes alan gözenekli dokusu, dış dünyadaki mevsim değişimlerini kapıda bırakır. Taşın kendi bünyesinde sunduğu bu doğal mikroklima; yıl boyunca sabit kalan ideal sıcaklığı ve nem dengesini kendiliğinden sağlar.',
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
    // Konum başlığında şehirden sonra gösterilir; boşsa yalnızca şehir görünür.
    region: '',
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
      { label: 'Hafta içi', value: '09.00 – 19.00' },
      { label: 'Hafta sonu', value: '09.00 – 19.00' },
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
        '1943’ten bugüne dört kuşak; aynı yöre, aynı sorumluluk. Bu sayfa, kuruluşun ve ailenin hikâyesini kronolojik olarak aktarır.',
      sections: [
        {
          title: 'Hasan Turasan',
          donem: '1943 – 1959',
          body: [
            'Turasan’ın temelleri, 1943 yılında emekli öğretmen büyükdedemiz Hasan Turasan tarafından Ürgüp’te atıldı. Bölge bağcılarının yetiştirdiği bereketli üzümleri hak ettiği değere kavuşturma arzusuyla yola çıkan Hasan Turasan; dönemin Tekel Bakanı Suat Hayri Ürgüplü’nün teşviki ve yönlendirmesiyle bu tarihi adımı attı. Böylece Turasan, Cumhuriyet döneminde Kapadokya bölgesinde kurulan ilk özel şarap üreticisi unvanıyla Türk bağcılık tarihine adını yazdı.',
          ],
          phLabel: 'görsel · arşiv, kuruluş yılları',
          image: '/images/aile-mirasi/kurulus-yillari.jpeg',
          alt: 'Kuruluş yıllarından arşiv fotoğrafı.',
        },
        {
          title: 'Rüştü Turasan',
          donem: '1959 – 1990',
          body: [
            'Kurucumuz büyükdedemiz Hasan Turasan’ın toprağa diktiği ilk tohumları köklü bir yapıya dönüştüren Rüştü Turasan, ailemizin ikinci kuşak lideri olarak Turasan Şarapçılık’ın büyüme serüvenine yön vermiştir.',
            'Geleneksel imkânlarla başlayan mütevazı üretimi devralan Rüştü Turasan; tesisleşme ve kapasite artırımı hamleleriyle Kapadokya bağcılığının ulusal ölçekte tanınan bir seviyeye gelmesine zemin hazırlamıştır.',
          ],
          phLabel: 'görsel · arşiv, ikinci kuşak',
          image: '/images/aile-mirasi/ikinci-kusak.jpeg',
          alt: 'İkinci kuşak döneminden arşiv fotoğrafı.',
        },
        {
          title: 'Hasan Turasan',
          body: [
            '1984 yılında aile şirketinde işbaşı yapan ve 1990 yılından itibaren Yönetim Kurulu Başkanlığını üstlenen Hasan Turasan, dedesi ve babasından devraldığı mirası rafine bir şarapçılık vizyonuyla buluşturan üçüncü kuşak temsilcisidir.',
            'Hasan Turasan liderliğinde marka, kitlesel üretim anlayışının ötesine geçerek bağdan şişeye kadar kalite ve teruar odaklı “şarap evi” disiplinini merkeze almıştır:',
          ],
          items: [
            {
              title: 'Modern Bağcılık Hamlesi',
              body: '1990’lı yıllardan itibaren Kapadokya bölgesinde modern yüksek sistem bağcılığını uygulayan ilk üretici olmuş, geleneksel bağcılığı çağdaş tekniklerle modernize etmiştir.',
            },
            {
              title: 'Prestijli Uluslararası Ödüller',
              body: 'Concours Mondial de Bruxelles, Decanter ve International Wine Challenge gibi dünyanın en prestijli yarışmalarından çok sayıda altın ve gümüş madalyayı Kapadokya’ya getirmiştir.',
            },
            {
              title: 'Yerli Üzümlerin Global Temsili',
              body: 'Kapadokya’nın özgün beyaz üzümü Emir başta olmak üzere Öküzgözü, Boğazkere ve Narince gibi Anadolu’nun yerel çeşitlerini yüksek kalitede işleyerek yerli teruarın dünyadaki görünürlüğünü artırmıştır.',
            },
            {
              title: '“Seneler” Koleksiyonu ve Fransız Danışmanlığı',
              body: 'Fransız önologların danışmanlığında tesis ve bağ yatırımlarını yenilemiş, markanın ikonik serisi olan Seneler koleksiyonunu hayata geçirmiştir.',
            },
            {
              title: 'Diplomatik Temsil',
              body: 'Sektörel vizyonunun yanı sıra 2014 yılından bu yana İç Anadolu Bölgesi İspanya Fahri Konsolosluğu görevini de yürüterek bölgesel ve uluslararası ilişkilere katkı sağlamaktadır.',
            },
          ],
          phLabel: 'portre · Hasan Turasan',
          image: '/images/miras/hakan-turasan.jpeg',
          alt: 'Hasan Turasan portresi.',
        },
        {
          title: 'Sevgi ve Miras',
          body: [
            'Hasan Turasan’ın hayatını Selda Turasan ile birleştirmesiyle, Turasan ailesinin hikâyesinde yeni ve güçlü bir dönem başladı. Birbirlerine duydukları sevgi ve inançla çıktıkları bu yolculukta, aile yaşamını iş hayatıyla aynı değerler etrafında buluşturarak Turasan’ın geleceğine birlikte yön verdiler.',
            'Turasan mirasının yarınlardaki teminatı olan dördüncü kuşak temsilcileri Zeynep Turasan ve Hakan Turasan, eğitim hayatlarına başarıyla devam ederek aile geleneğini geleceğe hazırlamaktadır.',
          ],
        },
      ] as KusakBolumu[],
    },
    process: {
      title: 'Üretim süreci',
      // Sayfanın büyük başlığı; `title` sekme başlığında kullanılır.
      heading: 'Zanaat ve Bilimin Dengesi: Hasattan Şişeye Üretim Yolculuğumuz',
      description: 'Turasan’da üretim süreci: hasattan şişelemeye tanımlı aşamalar; Fransız meşe fıçıları ve paslanmaz çelik tanklar.',
      overline: 'Üretim',
      lead:
        'Fransız önologlarımız ve gıda mühendislerimiz için fıçı veya tank seçimi basit bir teknik karar değil; her rekoltenin kendi hikâyesini anlatma sanatıdır. Üzümün bu mucizevi yolculuğunda gözettiğimiz temel adımlar ve hassasiyetler şunlardır:',
      steps: [
        {
          title: 'Özenli Hasat ve Zamanla Yarış',
          body: 'Üzümlerimiz en ideal olgunluk anında toplanır ve aromatik zenginliğini kaybetmemesi için vakit kaybetmeden işleme alanına ulaştırılır.',
        },
        {
          title: 'Titiz Ayıklama ve Hassas Presleme',
          body: 'Hasat edilen üzümler arasından yalnızca kusursuz taneler ayrıştırılır. Bu aşamada süreç şarabın türüne göre farklılaşır; beyaz üzümlerde kabuk ve çekirdeğe zarar vermeyen nazik bir preslemeyle en saf özsu elde edilirken, kırmızı üzümlerde renk, tanen ve aromaların şıraya geçmesi için presleme öncesinde kabukla temas süreci yürütülür.',
        },
        {
          title: 'Sıcaklık Kontrollü Fermantasyon',
          body: 'Çelik tanklarda fermantasyon ısısı anlık olarak denetlenir; böylece üzümün en hassas meyvemsi aromaları kaybolmadan korunur.',
        },
        {
          title: 'Uyumlu Dinlendirme',
          body: 'Şarap fıçıya alınacaksa, fıçı tipi üzümün yapısına göre seçilir. Fıçıda veya tanktaki dinlendirme süreci, önolog ve mühendislerimizin düzenli tadımlarıyla tam zirve noktasında tamamlanır.',
        },
        {
          title: 'Steril ve Güvenli Şişeleme',
          body: 'Gıda mühendislerimiz, oksijen temasını minimalde tutarak mikrobiyolojik saflığı güvenceye alır ve şarabın saf karakterini şişeye mühürler.',
        },
      ],
      // Adımların altında yan yana duran iki yöntem bölümü
      sections: [
        {
          title: 'Fransız Meşe Fıçıları: Zamana Atılan Olgun İmza',
          body: 'Fransız meşe fıçılarımız, şarabın ahşabın mikro gözeneklerinden yavaşça nefes almasını sağlayarak tanenleri yumuşatır ve gövdeye ipeksi bir derinlik kazandırır. Fıçının hafif kavrulmuş dokusundan şaraba süzülen vanilya, baharat ve tatlı odunsu notalar; özellikle olgunlaşmaya yatkın kırmızılarımızın ve özel beyazlarımızın karakterini zenginleştirir.',
        },
        {
          title: 'Paslanmaz Çelik Tanklar: Teruarın En Saf Hali',
          body: 'Sıcaklığın milimetrik olarak yönetildiği paslanmaz çelik tanklarımız, üzümün dalından koparıldığı andaki o canlı meyve aromalarını ve ferahlatıcı asiditeyi olduğu gibi korur. Oksijenle teması keserek meyvenin kendi öz karakterini öne çıkaran bu yöntem, bölge toprağının mineral yapısını ve üzümün saf kimliğini doğrudan bardağınıza taşır.',
        },
      ],
    },
    branches: {
      title: 'Şubelerimiz ve Tesislerimiz',
      description: 'Turasan Pazarlama’nın Ürgüp, İstanbul ve Sakarya bölge müdürlükleri — adres ve iletişim bilgileri.',
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
      description: 'Turasan’ın tüfe oyulmuş mahzeni: tarihçesi, sıcaklık ve nem koşulları, şişede dinlendirme ve şaraba katkısı.',
      overline: 'Mahzen',
      lead:
        'Mahzen, şarabın beklediği bir depo değil; dinlendirme koşullarını belirleyen bir mekândır. Bu sayfa mahzenin tarihçesini, fiziksel koşullarını ve şaraba katkısını aktarır.',
      conditions: [
        { label: 'Sıcaklık', value: '11 – 16 °C' },
        { label: 'Nem', value: '%60 – 80' },
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
            '1943 yılında Turasan’ın ilk mahzenini de aynı yöntemle, sabır ve emekle kayaçların bağrına oyduk. Nesiller boyu büyüyen üretimimizle birlikte alanlarımız genişledi; ancak hikâyemizin özü hiç değişmedi. Doğanın ve kayanın kalbinde kalma kararlılığımızı bugün de aynı özenle sürdürüyoruz.',
          ],
          image: '/images/mahzen/tuf-duvar.jpeg',
          alt: 'Mahzenin oyma izleri görünen tüf duvarı, yakın çekim.',
        },
        {
          title: 'Sabit sıcaklık ve nem',
          body: [
            'Tüf kayacın kalın ve gözenekli dokusu, dış havadaki mevsimsel sıcaklık dalgalanmalarını içeriye yansıtmaz. Yaz ve kış arasındaki sıcaklık farkı mahzen içinde sadece birkaç dereceyle sınırlı kalır; ortam tüm yıl boyunca dengede kalır.',
            'Bu özel yapı, nem kontrolünü de kendiliğinden sağlar. Yüksek bağıl nem oranı, fıçılardaki buharlaşmayı yavaşlatırken mantarların kurumasını önler. Tüm bu ideal koşullar, hiçbir mekanik iklimlendirme sistemine ihtiyaç duyulmadan, tamamen kayanın kendi doğal karakteriyle sağlanır.',
          ],
          image: '/images/mahzen/mahzen-genel.jpeg',
          alt: 'Mahzenin tonozlu iç mekânı; kaya duvarlar ve zemine vuran çalışma aydınlatması.',
        },
        {
          title: 'Şişede dinlendirme ve şaraba katkısı',
          body: [
            'Şişeleme sonrasında şarap, sevkiyat öncesinde mahzenimizde yatay konumda dinlendirilir. Bu süreç, şişeleme sırasında oluşan sarsıntının etkisini dindirirken aromaların birbiriyle dengeli bir şekilde bütünleşmesini sağlar.',
            'Mahzenin şaraba katkısı tek bir aşamayla sınırlı değildir; süreç boyunca kesintisiz devam eder. Sıcaklık dalgalanmalarının olmaması olgunlaşmayı yavaşlatır ve kontrol edilebilir kılar; karanlık ortam ışığa duyarlı hassas bileşenleri korur; yüksek nem ise hacim kaybını en aza indirir. Tüm bu koşullar sayesinde şarap, dış dünyadaki mevsimsel değişimlerden etkilenmeden kendi ideal ritminde olgunlaşır.',
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
    sub: 'A passion maturing in the stillness of tuff rock since 1943; a deep-rooted heritage that keeps the spirit of Cappadocia alive from generation to generation.',
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
      'Founded in Ürgüp in 1943 by our great-grandfather Hasan Turasan, Turasan is the first wine producer established in the Cappadocia region.',
      'This timeless continuity of more than eighty years was made possible by passing on a deep-rooted knowledge of the vineyard, the cellar and the craft of winemaking from one generation to the next, with passion and finesse. Today, with the same refined approach, we guide our quality production with advanced technology.',
    ],
    cta: { label: 'Family heritage', href: '/aile-mirasi' },
    archiveLabel: 'image · archive, 1943',
    archiveImage: '/images/miras/arsiv-1943.jpeg',
    archiveAlt: 'Archive photograph from Turasan’s founding years.',
    portraitLabel: 'portrait · Hasan Turasan',
    portraitImage: '/images/miras/hakan-turasan.jpeg',
    portraitAlt: 'Portrait of Hasan Turasan.',
    portraitCaption: 'Hasan Turasan — third generation',
  },
  vineyard: {
    id: 'bagcilik',
    overline: 'Viticulture',
    title: 'The terroir of Cappadocia',
    body: [
      'Over millions of years, the lava and ash erupted by volcanoes formed the tuff soil that gives life to the vineyards of Cappadocia. Retaining moisture through their porous structure, these volcanic soils preserve the natural balance of the vines while lending our wines a distinct mineral richness.',
      'Cappadocia is one of the oldest centres of viticulture and winemaking in the world. This deep-rooted tradition of more than 4,000 years lives on, from the Hittites to the present day, in cellars carved into rock and in centuries-old vineyards. Lying at an average altitude of 1,000 – 1,200 metres, the vineyards carry all the distinction of a harsh continental climate. The marked difference between day and night temperatures at high altitude preserves the aromatic profile and natural acidity of the grapes, allowing slow, balanced ripening.',
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
        note: 'A light-bodied red; red fruit dominant, with soft tannins.',
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
      'Our production journey takes shape between French oak barrels resting in the coolness of natural tuff rock cellars and stainless steel tanks that offer the precision of technology. Under the supervision of our French oenologists and food engineers, every moment of our carefully selected grapes, from fermentation to maturation, is meticulously recorded.',
    ],
    portraitLabel: 'portrait · oenologist',
    portraitImage: '/images/uretim/onolog.jpeg',
    portraitAlt: 'Turasan’s oenologist in the production area.',
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
      'Tuff rock, distilled from Cappadocia’s volcanic past of millions of years, forms the soul of our cellar. Patiently carved out and brought to light by the hammer and chisel of skilled hands, this special underground refuge is not merely a storage space but the living habitat of the wine.',
      'The breathing, porous texture of the tuff leaves the changing seasons of the outside world at the door. This natural microclimate, offered by the stone itself, maintains an ideal temperature and humidity balance that stays constant throughout the year.',
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
    // Konum başlığında şehirden sonra gösterilir; boşsa yalnızca şehir görünür.
    region: '',
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
      { label: 'Weekdays', value: '09:00 – 19:00' },
      { label: 'Weekends', value: '09:00 – 19:00' },
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
        'Four generations from 1943 to today; the same region, the same responsibility. This page tells the story of the founding and of the family in chronological order.',
      sections: [
        {
          title: 'Hasan Turasan',
          donem: '1943 – 1959',
          body: [
            'The foundations of Turasan were laid in Ürgüp in 1943 by our great-grandfather Hasan Turasan, a retired teacher. Setting out with the wish to give the abundant grapes grown by the region’s vine growers the value they deserved, Hasan Turasan took this historic step with the encouragement and guidance of Suat Hayri Ürgüplü, then Minister of Monopolies. Turasan thus wrote its name into the history of Turkish viticulture as the first private wine producer established in the Cappadocia region in the Republican era.',
          ],
          phLabel: 'image · archive, founding years',
          image: '/images/aile-mirasi/kurulus-yillari.jpeg',
          alt: 'Archive photograph from the founding years.',
        },
        {
          title: 'Rüştü Turasan',
          donem: '1959 – 1990',
          body: [
            'Rüştü Turasan, who turned the first seeds planted by our founder and great-grandfather Hasan Turasan into a deep-rooted enterprise, guided the growth of Turasan Winery as the second-generation leader of our family.',
            'Taking over a modest production that had begun with traditional means, Rüştü Turasan laid the groundwork, through new facilities and increased capacity, for Cappadocian viticulture to reach a nationally recognised level.',
          ],
          phLabel: 'image · archive, second generation',
          image: '/images/aile-mirasi/ikinci-kusak.jpeg',
          alt: 'Archive photograph from the second generation.',
        },
        {
          title: 'Hasan Turasan',
          body: [
            'Hasan Turasan, who joined the family company in 1984 and has served as Chairman of the Board since 1990, is the third-generation representative who brought the heritage inherited from grandfather and father together with a refined vision of winemaking.',
            'Under Hasan Turasan’s leadership, the brand moved beyond a mass-production mindset and placed the discipline of a quality- and terroir-focused “wine house”, from vineyard to bottle, at its centre:',
          ],
          items: [
            {
              title: 'Modern Viticulture',
              body: 'From the 1990s onwards, Turasan became the first producer in the Cappadocia region to apply modern high-trellis viticulture, modernising traditional vine growing with contemporary techniques.',
            },
            {
              title: 'Prestigious International Awards',
              body: 'Numerous gold and silver medals have been brought to Cappadocia from some of the world’s most prestigious competitions, such as Concours Mondial de Bruxelles, Decanter and the International Wine Challenge.',
            },
            {
              title: 'Global Representation of Native Grapes',
              body: 'By working Anatolia’s local varieties to a high standard — above all Emir, Cappadocia’s distinctive white grape, along with Öküzgözü, Boğazkere and Narince — the international visibility of native terroir has grown.',
            },
            {
              title: 'The “Seneler” Collection and French Consultancy',
              body: 'Investments in facilities and vineyards were renewed under the consultancy of French oenologists, and the Seneler collection, the brand’s iconic series, was brought to life.',
            },
            {
              title: 'Diplomatic Representation',
              body: 'Alongside this vision for the sector, Hasan Turasan has served since 2014 as Honorary Consul of Spain for the Central Anatolia Region, contributing to regional and international relations.',
            },
          ],
          phLabel: 'portrait · Hasan Turasan',
          image: '/images/miras/hakan-turasan.jpeg',
          alt: 'Portrait of Hasan Turasan.',
        },
        {
          title: 'Love and Heritage',
          body: [
            'When Hasan Turasan and Selda Turasan joined their lives, a new and strong chapter began in the story of the Turasan family. On this journey, undertaken with love and faith in one another, they brought family life and business together around the same values and shaped Turasan’s future together.',
            'Zeynep Turasan and Hakan Turasan, the fourth-generation representatives and the future of the Turasan heritage, are successfully continuing their education and preparing the family tradition for the years ahead.',
          ],
        },
      ],
    },
    process: {
      title: 'Production process',
      heading: 'The Balance of Craft and Science: Our Production Journey from Harvest to Bottle',
      description: 'Turasan’s production process: defined stages from harvest to bottling; French oak barrels and stainless steel tanks.',
      overline: 'Production',
      lead: 'For our French oenologists and food engineers, choosing between barrel and tank is not a simple technical decision; it is the art of letting each vintage tell its own story. These are the key steps and points of care we observe on the grape’s remarkable journey:',
      steps: [
        {
          title: 'Careful Harvest and a Race Against Time',
          body: 'Our grapes are picked at the ideal moment of ripeness and brought to the processing area without delay so that they keep their aromatic richness.',
        },
        {
          title: 'Meticulous Sorting and Precise Pressing',
          body: 'Only flawless berries are selected from the harvested grapes. At this stage the process differs according to the type of wine: for white grapes, gentle pressing that does not damage skins and seeds yields the purest juice, while for red grapes a period of skin contact takes place before pressing so that colour, tannins and aromas pass into the must.',
        },
        {
          title: 'Temperature-Controlled Fermentation',
          body: 'Fermentation temperature in the steel tanks is monitored continuously, so the grape’s most delicate fruity aromas are preserved.',
        },
        {
          title: 'Harmonious Ageing',
          body: 'If the wine is to be aged in barrel, the type of barrel is chosen according to the structure of the grape. Ageing in barrel or tank is completed at its very peak, guided by regular tastings by our oenologists and engineers.',
        },
        {
          title: 'Sterile and Safe Bottling',
          body: 'Our food engineers keep oxygen contact to a minimum, safeguarding microbiological purity and sealing the wine’s pure character into the bottle.',
        },
      ],
      sections: [
        {
          title: 'French Oak Barrels: A Mature Signature Over Time',
          body: 'Our French oak barrels let the wine breathe slowly through the micro-pores of the wood, softening the tannins and giving the body a silky depth. The notes of vanilla, spice and sweet wood that pass into the wine from the barrel’s lightly toasted interior enrich the character of our reds suited to ageing and of our special whites.',
        },
        {
          title: 'Stainless Steel Tanks: Terroir in Its Purest Form',
          body: 'In our stainless steel tanks, where temperature is managed with millimetric precision, the lively fruit aromas and refreshing acidity of the grape at the moment it is picked are preserved just as they are. By cutting off contact with oxygen, this method brings out the fruit’s own character and carries the mineral structure of the region’s soil and the pure identity of the grape straight to your glass.',
        },
      ],
    },
    branches: {
      title: 'Our Branches and Facilities',
      description: 'Turasan Pazarlama’s regional directorates in Ürgüp, Istanbul and Sakarya — addresses and contact details.',
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
      description: 'Turasan’s cellar carved into tuff: its history, temperature and humidity conditions, bottle ageing and its contribution to the wine.',
      overline: 'Cellar',
      lead:
        'The cellar is not a store where wine simply waits; it is the space that sets the conditions for ageing. This page describes the cellar’s history, its physical conditions and its contribution to the wine.',
      conditions: [
        { label: 'Temperature', value: '11 – 16 °C' },
        { label: 'Humidity', value: '60 – 80%' },
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
            'In 1943 we carved Turasan’s first cellar into the heart of the rock in the same way, with patience and effort. As our production grew over the generations our spaces expanded, yet the essence of our story has never changed. Today we continue, with the same care, our commitment to remaining at the heart of nature and the rock.',
          ],
          image: '/images/mahzen/tuf-duvar.jpeg',
          alt: 'Close-up of the tuff wall of the cellar, showing carving marks.',
        },
        {
          title: 'Stable temperature and humidity',
          body: [
            'The thick, porous texture of the tuff keeps seasonal temperature swings in the outside air from reaching the interior. The difference between summer and winter is limited to just a few degrees inside the cellar, and the environment stays in balance all year round.',
            'This special structure also regulates humidity on its own. High relative humidity slows evaporation from the barrels and keeps corks from drying out. All these ideal conditions are provided entirely by the rock’s own natural character, without the need for any mechanical climate control system.',
          ],
          image: '/images/mahzen/mahzen-genel.jpeg',
          alt: 'Vaulted interior of the cellar, with rock walls and working lights falling on the floor.',
        },
        {
          title: 'Bottle ageing and contribution to the wine',
          body: [
            'After bottling, the wine rests horizontally in our cellar before shipment. This process eases the effect of the disturbance caused during bottling and allows the aromas to come together in balance.',
            'The cellar’s contribution to the wine is not limited to a single stage; it continues uninterrupted throughout the process. The absence of temperature fluctuations slows maturation and keeps it controllable; the dark environment protects delicate light-sensitive compounds; and high humidity keeps loss of volume to a minimum. Thanks to all these conditions, the wine matures at its own ideal rhythm, unaffected by the seasonal changes of the outside world.',
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
