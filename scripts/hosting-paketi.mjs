/**
 * Ankara Hosting yükleme paketi.
 *
 * Siteyi www.turasan.com.tr köküne göre dist-hosting/ klasörüne derler,
 * hosting/.htaccess'i ekler ve hepsini proje kökünde turasan-yayin.zip
 * olarak paketler. Zip, panelde public_html içine yüklenip açılır.
 *
 * Kullanım: npm run build:hosting
 */
import { execSync } from 'node:child_process';
import { copyFileSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';

const OUT = 'dist-hosting';
const ZIP = resolve('turasan-yayin.zip');

rmSync(OUT, { recursive: true, force: true });
rmSync(ZIP, { force: true });

execSync('npx astro build', {
  stdio: 'inherit',
  env: {
    ...process.env,
    SITE_URL: 'https://www.turasan.com.tr',
    SITE_BASE: '/',
    OUT_DIR: `./${OUT}`,
  },
});

copyFileSync(join('hosting', '.htaccess'), join(OUT, '.htaccess'));

// Windows'un kendi tar'ı zip üretebilir (-a biçimi uzantıdan seçer).
// "-C klasör ." gizli .htaccess dahil her şeyi zip'in köküne koyar.
if (process.platform === 'win32') {
  const tar = join(process.env.SystemRoot ?? 'C:\\Windows', 'System32', 'tar.exe');
  execSync(`"${tar}" -a -c -f "${ZIP}" -C ${OUT} .`, { stdio: 'inherit' });
} else {
  execSync(`zip -qr "${ZIP}" .`, { stdio: 'inherit', cwd: OUT });
}

console.log(`\nYükleme paketi hazır: ${ZIP}`);
