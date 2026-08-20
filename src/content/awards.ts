/**
 * Ödül arşivi — tek veri kaynağı. Veriler ÖDÜLLER.xlsx dosyasından aktarıldı;
 * listede olmayan ödül eklenmemiştir. Yeni ödül eklemek için `awards` dizisine
 * bir kayıt ekleyin; sayfalar bu dosyadan render edilir.
 *
 * Logo dosyaları: public/images/oduller/{slug}.png — dosya yoksa arayüz boş
 * yer tutucu gösterir, hata vermez.
 *
 * Not: Nihai metinlerin hukuk danışmanı onayından geçmesi önerilir; ödül
 * bilgisi kurumla ve yılla ilişkilendirilerek, övgü dili olmadan sunulur.
 */

export interface Award {
  /** Yarışma / kurum adı */
  competition: string;
  /** Ödülün alındığı yıl (sayı — filtreleme için) */
  year: number;
  /** İlgili şarap (rekoltesiyle) */
  wine: string;
  /** Derece (madalya ya da puan) */
  medal: string;
  /** Ek not (örn. özel derece) */
  note?: string;
  /** Yarışma logosu — public/ altındaki yol */
  logo: string;
}

/** Ana sayfada gösterilen yıl */
export const FEATURED_YEAR = 2026;

/** Yarışma → logo yolu (public/images/oduller/{slug}.png) */
export const competitionLogos: Record<string, string> = {
  'Chardonnay du Monde': '/images/oduller/chardonnay-du-monde.png',
  'China Wine & Spirits Awards': '/images/oduller/china-wine-spirits-awards.png',
  'Concours International de Lyon': '/images/oduller/concours-international-de-lyon.png',
  'Concours Mondial de Bruxelles': '/images/oduller/concours-mondial-de-bruxelles.png',
  'Gusto': '/images/oduller/gusto.png',
  'International Wine Challenge London': '/images/oduller/international-wine-challenge-london.png',
  'Japan Wine Challenge': '/images/oduller/japan-wine-challenge.png',
  'Master of Wine': '/images/oduller/master-of-wine.png',
  'Syrah du Monde': '/images/oduller/syrah-du-monde.png',
  'Vinalies Internationales': '/images/oduller/vinalies-internationales.png',
  'Wine Decanter': '/images/oduller/wine-decanter.png',
};

export const awards: Award[] = [
  // ---- 2026 ----
  { competition: 'Concours International de Lyon', year: 2026, wine: 'Turasan Blush 2025', medal: 'Altın Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2026, wine: 'Turasan Sauvignon Blanc 2025', medal: 'Altın Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  // ---- 2025 ----
  { competition: 'Concours International de Lyon', year: 2025, wine: 'Turasan Seneler Cabernet Sauvignon–Merlot–Syrah', medal: 'Gümüş Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2025, wine: 'Turasan Blush 2024', medal: 'Gümüş Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2025, wine: 'Turasan Seneler Cabernet Sauvignon', medal: 'Altın Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'Vinalies Internationales', year: 2025, wine: 'Turasan Blush 2024', medal: 'Altın Madalya', logo: competitionLogos['Vinalies Internationales'] },
  { competition: 'Vinalies Internationales', year: 2025, wine: 'Turasan Emir 2024', medal: 'Gümüş Madalya', logo: competitionLogos['Vinalies Internationales'] },
  { competition: 'Vinalies Internationales', year: 2025, wine: 'Turasan Narince 2024', medal: 'Altın Madalya', logo: competitionLogos['Vinalies Internationales'] },
  { competition: 'Vinalies Internationales', year: 2025, wine: 'Turasan Sauvignon Blanc 2024', medal: 'Altın Madalya', logo: competitionLogos['Vinalies Internationales'] },
  // ---- 2024 ----
  { competition: 'Concours Mondial de Bruxelles', year: 2024, wine: 'Turasan Seneler Cabernet Sauvignon–Merlot–Syrah 2022', medal: 'Altın Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  // ---- 2023 ----
  { competition: 'Concours International de Lyon', year: 2023, wine: 'Turasan Narince 2022', medal: 'Altın Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2023, wine: 'Turasan Narince 2022', medal: 'Gümüş Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2023, wine: 'Turasan Seneler Sauvignon Blanc 2022', medal: 'Gümüş Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  // ---- 2022 ----
  { competition: 'Concours International de Lyon', year: 2022, wine: 'Turasan Emir 2021', medal: 'Gümüş Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours International de Lyon', year: 2022, wine: 'Turasan Rosé 2021', medal: 'Altın Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours International de Lyon', year: 2022, wine: 'Turasan Seneler Öküzgözü 2020', medal: 'Altın Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2022, wine: 'Turasan Narince 2021', medal: 'Gümüş Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2022, wine: 'Turasan Seneler Cabernet Sauvignon–Merlot–Syrah 2020', medal: 'Gümüş Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  // ---- 2021 ----
  { competition: 'Concours International de Lyon', year: 2021, wine: 'Turasan Chardonnay 2020', medal: 'Altın Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours International de Lyon', year: 2021, wine: 'Turasan Rosé 2020', medal: 'Gümüş Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours International de Lyon', year: 2021, wine: 'Turasan Seneler Cabernet Sauvignon–Merlot–Syrah 2019', medal: 'Gümüş Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours International de Lyon', year: 2021, wine: 'Turasan Seneler Chardonnay 2019', medal: 'Altın Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours International de Lyon', year: 2021, wine: 'Turasan Seneler Narince 2019', medal: 'Altın Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2021, wine: 'Turasan Seneler Chardonnay 2019', medal: 'Altın Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'Vinalies Internationales', year: 2021, wine: 'Turasan Misket Sek 2020', medal: 'Gümüş Madalya', logo: competitionLogos['Vinalies Internationales'] },
  { competition: 'Vinalies Internationales', year: 2021, wine: 'Turasan Rosé 2020', medal: 'Gümüş Madalya', logo: competitionLogos['Vinalies Internationales'] },
  { competition: 'Vinalies Internationales', year: 2021, wine: 'Turasan Seneler Cabernet Sauvignon–Merlot–Syrah 2019', medal: 'Gümüş Madalya', logo: competitionLogos['Vinalies Internationales'] },
  { competition: 'Vinalies Internationales', year: 2021, wine: 'Turasan Seneler Narince 2019', medal: 'Altın Madalya', logo: competitionLogos['Vinalies Internationales'] },
  // ---- 2020 ----
  { competition: 'Concours International de Lyon', year: 2020, wine: 'Turasan Rosé 2019', medal: 'Gümüş Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours International de Lyon', year: 2020, wine: 'Turasan Seneler Chardonnay 2018', medal: 'Gümüş Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours International de Lyon', year: 2020, wine: 'Turasan Seneler Öküzgözü 2018', medal: 'Gümüş Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2020, wine: 'Turasan Seneler Cabernet Sauvignon–Merlot–Syrah 2018', medal: 'Altın Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2020, wine: 'Turasan Seneler Chardonnay 2018', medal: 'Altın Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'Vinalies Internationales', year: 2020, wine: 'Turasan Seneler Öküzgözü–Boğazkere 2018', medal: 'Gümüş Madalya', logo: competitionLogos['Vinalies Internationales'] },
  // ---- 2019 ----
  { competition: 'Concours International de Lyon', year: 2019, wine: 'Turasan Blush 2018', medal: 'Altın Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours International de Lyon', year: 2019, wine: 'Turasan Seneler Chardonnay 2017', medal: 'Altın Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours International de Lyon', year: 2019, wine: 'Turasan Syrah 2018', medal: 'Gümüş Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2019, wine: 'Turasan Syrah 2018', medal: 'Gümüş Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'Vinalies Internationales', year: 2019, wine: 'Turasan Seneler Cabernet Sauvignon–Merlot–Syrah 2017', medal: 'Gümüş Madalya', logo: competitionLogos['Vinalies Internationales'] },
  { competition: 'Vinalies Internationales', year: 2019, wine: 'Turasan Seneler Öküzgözü 2017', medal: 'Gümüş Madalya', logo: competitionLogos['Vinalies Internationales'] },
  // ---- 2018 ----
  { competition: 'Concours International de Lyon', year: 2018, wine: 'Turasan Blush 2017', medal: 'Gümüş Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours International de Lyon', year: 2018, wine: 'Turasan Emir 2017', medal: 'Altın Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours International de Lyon', year: 2018, wine: 'Turasan Narince 2017', medal: 'Altın Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours International de Lyon', year: 2018, wine: 'Turasan Seneler Chardonnay 2016', medal: 'Altın Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours International de Lyon', year: 2018, wine: 'Turasan Seneler Narince 2016', medal: 'Gümüş Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours International de Lyon', year: 2018, wine: 'Turasan Seneler Öküzgözü 2016', medal: 'Altın Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2018, wine: 'Seneler Cabernet Sauvignon–Merlot–Syrah2016', medal: 'Altın Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2018, wine: 'Seneler Narince 2016', medal: 'Gümüş Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'Vinalies Internationales', year: 2018, wine: 'Turasan Blush 2017', medal: 'Gümüş Madalya', logo: competitionLogos['Vinalies Internationales'] },
  { competition: 'Vinalies Internationales', year: 2018, wine: 'Turasan Seneler Cabernet Sauvignon–Merlot–Syrah 2016', medal: 'Gümüş Madalya', logo: competitionLogos['Vinalies Internationales'] },
  // ---- 2017 ----
  { competition: 'Concours International de Lyon', year: 2017, wine: 'Turasan Seneler Öküzgözü–Boğazkere 2015', medal: 'Gümüş Madalya', logo: competitionLogos['Concours International de Lyon'] },
  // ---- 2016 ----
  { competition: 'Concours International de Lyon', year: 2016, wine: 'Turasan Blush 2015', medal: 'Gümüş Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours International de Lyon', year: 2016, wine: 'Turasan Cabernet Sauvignon 2014', medal: 'Gümüş Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours International de Lyon', year: 2016, wine: 'Turasan Cabernet Sauvignon–Merlot–Syrah 2014', medal: 'Gümüş Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours International de Lyon', year: 2016, wine: 'Turasan Emir 2015', medal: 'Gümüş Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours International de Lyon', year: 2016, wine: 'Turasan Seneler Öküzgözü–Boğazkere 2014', medal: 'Gümüş Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2016, wine: 'Turasan Blush 2016', medal: 'Büyük Altın Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2016, wine: 'Turasan Kalecik Karası Argos 2011', medal: 'Gümüş Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2016, wine: 'Turasan Syrah Argos 2011', medal: 'Gümüş Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  // ---- 2015 ----
  { competition: 'Concours International de Lyon', year: 2015, wine: 'Seneler Cabernet Sauvignon–Merlot–Syrah 2012', medal: 'Gümüş Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours International de Lyon', year: 2015, wine: 'Seneler Sauvignon Blanc 2014', medal: 'Altın Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours International de Lyon', year: 2015, wine: 'Turasan Blush 2014', medal: 'Altın Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2015, wine: 'Turasan Blush 2014', medal: 'Altın Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'Syrah du Monde', year: 2015, wine: 'Turasan Syrah Argos 2011', medal: 'Gümüş Madalya', logo: competitionLogos['Syrah du Monde'] },
  { competition: 'Vinalies Internationales', year: 2015, wine: 'Turasan Syrah Argos 2011', medal: 'Gümüş Madalya', logo: competitionLogos['Vinalies Internationales'] },
  // ---- 2014 ----
  { competition: 'China Wine & Spirits Awards', year: 2014, wine: 'Turasan Beyaz 2013', medal: 'Altın Madalya', logo: competitionLogos['China Wine & Spirits Awards'] },
  { competition: 'China Wine & Spirits Awards', year: 2014, wine: 'Turasan Kırmızı 2013', medal: 'Altın Madalya', logo: competitionLogos['China Wine & Spirits Awards'] },
  { competition: 'Concours International de Lyon', year: 2014, wine: 'Turasan Merlot 2013', medal: 'Altın Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'Concours International de Lyon', year: 2014, wine: 'Turasan Syrah 2012', medal: 'Gümüş Madalya', logo: competitionLogos['Concours International de Lyon'] },
  { competition: 'International Wine Challenge London', year: 2014, wine: 'Seneler Narince 2012', medal: 'Bronz Madalya', logo: competitionLogos['International Wine Challenge London'] },
  { competition: 'International Wine Challenge London', year: 2014, wine: 'Seneler Öküzgözü 2012', medal: 'Bronz Madalya', logo: competitionLogos['International Wine Challenge London'] },
  { competition: 'Syrah du Monde', year: 2014, wine: 'Turasan Syrah 2012', medal: 'Gümüş Madalya', logo: competitionLogos['Syrah du Monde'] },
  { competition: 'Vinalies Internationales', year: 2014, wine: 'Turasan Syrah 2012', medal: 'Gümüş Madalya', logo: competitionLogos['Vinalies Internationales'] },
  // ---- 2013 ----
  { competition: 'China Wine & Spirits Awards', year: 2013, wine: 'Seneler Cabernet Sauvignon–Merlot–Syrah 2011', medal: 'Bronz Madalya', logo: competitionLogos['China Wine & Spirits Awards'] },
  { competition: 'China Wine & Spirits Awards', year: 2013, wine: 'Seneler Öküzgözü 2011', medal: 'Altın Madalya', logo: competitionLogos['China Wine & Spirits Awards'] },
  { competition: 'China Wine & Spirits Awards', year: 2013, wine: 'Turasan Beyaz 2012', medal: 'Gümüş Madalya', logo: competitionLogos['China Wine & Spirits Awards'] },
  { competition: 'China Wine & Spirits Awards', year: 2013, wine: 'Turasan Kırmızı 2011', medal: 'Gümüş Madalya', logo: competitionLogos['China Wine & Spirits Awards'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2013, wine: 'Seneler Narince 2011', medal: 'Gümüş Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2013, wine: 'Turasan Rosé 2012', medal: 'Gümüş Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'International Wine Challenge London', year: 2013, wine: 'Emir 2012', medal: 'Commended', logo: competitionLogos['International Wine Challenge London'] },
  { competition: 'International Wine Challenge London', year: 2013, wine: 'Narince 2012', medal: 'Bronz Madalya', logo: competitionLogos['International Wine Challenge London'] },
  { competition: 'International Wine Challenge London', year: 2013, wine: 'Seneler Cabernet Sauvignon–Merlot–Syrah 2011', medal: 'Commended', logo: competitionLogos['International Wine Challenge London'] },
  { competition: 'International Wine Challenge London', year: 2013, wine: 'Seneler Narince 2011', medal: 'Commended', logo: competitionLogos['International Wine Challenge London'] },
  { competition: 'International Wine Challenge London', year: 2013, wine: 'Seneler Öküzgözü–Boğazkere 2011', medal: 'Bronz Madalya', logo: competitionLogos['International Wine Challenge London'] },
  { competition: 'International Wine Challenge London', year: 2013, wine: 'Turasan Kırmızı 2011', medal: 'Commended', logo: competitionLogos['International Wine Challenge London'] },
  { competition: 'Master of Wine', year: 2013, wine: 'Argos Kalecik Karası 2011', medal: '89/100', logo: competitionLogos['Master of Wine'] },
  { competition: 'Master of Wine', year: 2013, wine: 'Misket Dömisek 2012', medal: '84/100', logo: competitionLogos['Master of Wine'] },
  { competition: 'Master of Wine', year: 2013, wine: 'Seneler Öküzgözü–Boğazkere 2011', medal: '89/100', logo: competitionLogos['Master of Wine'] },
  // ---- 2012 ----
  { competition: 'Chardonnay du Monde', year: 2012, wine: 'Turasan Chardonnay 2011', medal: 'Bronz Madalya', logo: competitionLogos['Chardonnay du Monde'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2012, wine: 'Seneler Öküzgözü–Boğazkere 2009', medal: 'Altın Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2012, wine: 'Turasan Chardonnay 2011', medal: 'Gümüş Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'International Wine Challenge London', year: 2012, wine: 'Seneler Cabernet Sauvignon–Merlot–Syrah 2010', medal: 'Bronz Madalya', logo: competitionLogos['International Wine Challenge London'] },
  { competition: 'International Wine Challenge London', year: 2012, wine: 'Seneler Chardonnay 2010', medal: 'Commended', logo: competitionLogos['International Wine Challenge London'] },
  { competition: 'International Wine Challenge London', year: 2012, wine: 'Seneler Öküzgözü–Boğazkere 2009', medal: 'Bronz Madalya', logo: competitionLogos['International Wine Challenge London'] },
  { competition: 'International Wine Challenge London', year: 2012, wine: 'Turasan Rosé 2011', medal: 'Bronz Madalya', logo: competitionLogos['International Wine Challenge London'] },
  { competition: 'Japan Wine Challenge', year: 2012, wine: 'Merlot 2010', medal: 'Bronz Madalya', logo: competitionLogos['Japan Wine Challenge'] },
  { competition: 'Japan Wine Challenge', year: 2012, wine: 'Rosé 2011', medal: 'Bronz Madalya', logo: competitionLogos['Japan Wine Challenge'] },
  { competition: 'Japan Wine Challenge', year: 2012, wine: 'Seneler Cabernet Sauvignon–Merlot–Syrah 2010', medal: 'Bronz Madalya', logo: competitionLogos['Japan Wine Challenge'] },
  { competition: 'Japan Wine Challenge', year: 2012, wine: 'Seneler Öküzgözü 2010', medal: 'Bronz Madalya', logo: competitionLogos['Japan Wine Challenge'] },
  { competition: 'Master of Wine', year: 2012, wine: 'Kalecik Karası Argos 2010', medal: '86/100', logo: competitionLogos['Master of Wine'] },
  { competition: 'Master of Wine', year: 2012, wine: 'Seneler Cabernet Sauvignon–Merlot–Syrah 2010', medal: '89/100', logo: competitionLogos['Master of Wine'] },
  { competition: 'Master of Wine', year: 2012, wine: 'Seneler Öküzgözü 2010', medal: '87/100', logo: competitionLogos['Master of Wine'] },
  { competition: 'Master of Wine', year: 2012, wine: 'Seneler Öküzgözü–Boğazkere 2009', medal: '88/100', logo: competitionLogos['Master of Wine'] },
  { competition: 'Master of Wine', year: 2012, wine: 'Syrah Argos 2010', medal: '87/100', logo: competitionLogos['Master of Wine'] },
  { competition: 'Master of Wine', year: 2012, wine: 'Turasan Rosé 2011', medal: '84/100', logo: competitionLogos['Master of Wine'] },
  { competition: 'Wine Decanter', year: 2012, wine: 'Seneler Cabernet Sauvignon–Merlot–Syrah 2010', medal: 'Gümüş Madalya', logo: competitionLogos['Wine Decanter'] },
  { competition: 'Wine Decanter', year: 2012, wine: 'Seneler Öküzgözü–Boğazkere 2009', medal: 'Gümüş Madalya', logo: competitionLogos['Wine Decanter'] },
  { competition: 'Wine Decanter', year: 2012, wine: 'Turasan Rosé 2011', medal: 'Bronz Madalya', logo: competitionLogos['Wine Decanter'] },
  // ---- 2011 ----
  { competition: 'Concours Mondial de Bruxelles', year: 2011, wine: 'Seneler Cabernet Sauvignon–Merlot–Syrah 2009', medal: 'Altın Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2011, wine: 'Turasan Cabernet Sauvignon 2009', medal: 'Altın Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2011, wine: 'Turasan Rosé 2010', medal: 'Gümüş Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'International Wine Challenge London', year: 2011, wine: 'Seneler Chardonnay 2009', medal: 'Commended', logo: competitionLogos['International Wine Challenge London'] },
  { competition: 'International Wine Challenge London', year: 2011, wine: 'Turasan Cabernet Sauvignon 2009', medal: 'Commended', logo: competitionLogos['International Wine Challenge London'] },
  { competition: 'International Wine Challenge London', year: 2011, wine: 'Turasan Rosé 2010', medal: 'Commended', logo: competitionLogos['International Wine Challenge London'] },
  { competition: 'Master of Wine', year: 2011, wine: 'Emir 2010', medal: '84/100', logo: competitionLogos['Master of Wine'] },
  { competition: 'Master of Wine', year: 2011, wine: 'Seneler Cabernet Sauvignon–Merlot–Syrah 2009', medal: '86/100', logo: competitionLogos['Master of Wine'] },
  { competition: 'Master of Wine', year: 2011, wine: 'Seneler Chardonnay 2009', medal: '84/100', logo: competitionLogos['Master of Wine'] },
  { competition: 'Master of Wine', year: 2011, wine: 'Seneler Öküzgözü–Boğazkere 2009', medal: '87/100', logo: competitionLogos['Master of Wine'] },
  { competition: 'Master of Wine', year: 2011, wine: 'Turasan Rosé 2010', medal: '88/100', note: 'First Rosé', logo: competitionLogos['Master of Wine'] },
  // ---- 2010 ----
  { competition: 'Concours Mondial de Bruxelles', year: 2010, wine: 'Seneler Cabernet Sauvignon–Merlot–Syrah 2008', medal: 'Altın Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2010, wine: 'Seneler Narince 2008', medal: 'Gümüş Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2010, wine: 'Seneler Öküzgözü 2008', medal: 'Gümüş Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2010, wine: 'Turasan Rosé 2009', medal: 'Altın Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'Gusto', year: 2010, wine: 'Turasan Merlot', medal: 'Altın Madalya', logo: competitionLogos['Gusto'] },
  { competition: 'Master of Wine', year: 2010, wine: 'Seneler Cabernet Sauvignon–Merlot–Syrah 2008', medal: '88/100', logo: competitionLogos['Master of Wine'] },
  { competition: 'Master of Wine', year: 2010, wine: 'Seneler Narince 2007', medal: '81/100', logo: competitionLogos['Master of Wine'] },
  // ---- 2009 ----
  { competition: 'Concours Mondial de Bruxelles', year: 2009, wine: 'Seneler Chardonnay 2007', medal: 'Gümüş Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2009, wine: 'Seneler Narince 2007', medal: 'Gümüş Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
  { competition: 'Concours Mondial de Bruxelles', year: 2009, wine: 'Seneler Öküzgözü 2007', medal: 'Gümüş Madalya', logo: competitionLogos['Concours Mondial de Bruxelles'] },
];

/** Yıla göre gruplanmış, yeniden eskiye sıralı liste */
export const awardsByYear: { year: number; items: Award[] }[] = [
  ...new Set(awards.map((a) => a.year)),
]
  .sort((a, b) => b - a)
  .map((year) => ({ year, items: awards.filter((a) => a.year === year) }));
