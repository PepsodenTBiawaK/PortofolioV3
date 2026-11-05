# Portfolio Fadilah Aprianto

Portofolio pribadi berbasis Next.js App Router, React, TypeScript, dan Tailwind CSS. Ditujukan untuk deployment Next.js standar di Vercel melalui GitHub; tidak memerlukan database, API eksternal, atau environment variable.

## Pengembangan

Gunakan Node.js **24.x** (lihat `.nvmrc` dan `engines`), lalu:

```sh
npm ci
npm run dev
```

Buka http://localhost:3000. Untuk memperbarui isi website, edit **[`src/content/portfolio.ts`](src/content/portfolio.ts)**. Panduan dan contoh salin-tempel tersedia di **[`src/content/README.md`](src/content/README.md)**.

File konten mengatur profil, kontak, teks halaman, proyek, serta sertifikat. Proyek baru cukup diisi `id`, `name`, `category`, `summary`, dan `cover`; detail tambahan bersifat opsional. Urutan daftar menentukan urutan tampil, dan `visible: false` menyembunyikan proyek/sertifikat. Semuanya tetap statis, tanpa CMS atau database, dan diterbitkan melalui commit/push ke GitHub.

Struktur halaman ada di `src/app/page.tsx`, penghubung konten ke komponen di `src/data/portfolio.ts`, token dan layout di `src/app/globals.css`, serta aset di `public/assets`.

## Arah desain dan konten

Tampilan menggunakan charcoal, putih hangat, dan aksen sage. Geist Sans dipasangkan dengan Geist Serif; seluruh font disajikan lokal. Karya ditempatkan langsung setelah hero, diikuti profil/pengalaman, pendekatan desain, pembelajaran, dan kontak.

- Frame gambar kartu proyek, kartu unggulan, galeri detail, dan thumbnail memakai rasio 16:9 yang sama. Gambar ditampilkan utuh dengan `object-fit: contain`, termasuk saat hover. Rasio dikendalikan oleh satu token `--project-image-ratio` di `src/app/globals.css`.
- Filter membagi enam karya menjadi UI/UX Design dan Development.
- Detail proyek memuat ruang lingkup, galeri, konteks, serta catatan antarmuka. Konten tidak menambahkan metrik, riset, atau hasil pengujian yang belum diberikan.
- Navigasi mobile mendukung Escape dan menutup setelah tautan dipilih. Detail proyek memakai dialog native dengan fokus yang dibatasi browser.
- LinkedIn menjadi kontak utama sesuai pilihan pemilik. Tombol email/CV tidak ditampilkan karena informasi tersebut belum tersedia.

## Pemeriksaan sebelum push

```sh
npm run check
npm audit
npm run test:e2e
```

`check` memeriksa isian konten, ID proyek ganda, tautan, nama/path file (termasuk huruf besar/kecil), anggaran ukuran aset, TypeScript, dan build produksi. Gambar proyek selain 16:9 mendapat peringatan. Pemeriksaan konten saja dapat dijalankan dengan `npm run check:content`. Pengujian browser memakai build produksi, jadi jalankan `check` terlebih dahulu. Di Windows pengujian memakai Google Chrome yang sudah terpasang. Di CI, Playwright memakai Chromium yang dipasang oleh workflow GitHub Actions.

Workflow `.github/workflows/check.yml` menjalankan build, audit, dan pengujian browser pada push/PR. Dependabot memeriksa pembaruan npm dan GitHub Actions setiap minggu; pembaruan perlu ditinjau dan digabungkan sebelum masuk produksi.

## Perilaku performa

- Halaman utama merupakan Server Component dan diprerender menjadi HTML statis.
- Konten langsung terlihat tanpa splash screen yang menahan scroll.
- Lanyard 3D dimuat terpisah setelah konten tampil, hanya ketika area visual desktop terlihat, pointer presisi tersedia, serta reduced motion/data saver/koneksi 2G tidak aktif. Layout di bawah 900px menggunakan foto kecil di samping nama. Kegagalan memuat 3D juga mempertahankan foto.
- Render dan fisika lanyard berhenti saat hero keluar layar atau tab tidak aktif.
- Tipografi dan micro-interaction menggunakan CSS. Library GSAP dan Motion serta komponen dekoratif lama sudah dihapus dari dependency aktif.
- Gambar memakai WebP dan `next/image`; gambar di bawah layar dimuat secara lazy, dan gambar detail proyek baru dimuat saat modal dibuka.
- Modal mendukung Escape, panah kiri/kanan, pembatasan fokus keyboard, serta pengembalian fokus ke kartu asal.

## Menambah gambar

Simpan master desain di luar folder `public` agar tidak ikut deployment. Gunakan WebP; hindari ekspor SVG berisi foto/base64. Image budget maksimal 512 KiB per gambar, dengan total `public` maksimal 10 MiB.

Untuk proyek baru, siapkan `cover` dalam rasio **16:9**, misalnya **1600 × 900 px** atau **1920 × 1080 px**. Tambahkan satu objek proyek di `src/content/portfolio.ts`. `preview` dan `images` boleh ditambahkan jika membutuhkan gambar kartu berbeda atau galeri tambahan; gunakan rasio yang sama. Semua frame mengikuti rasio 16:9 tanpa perlu mengubah CSS per proyek. Gambar dengan rasio lain tetap ditampilkan utuh dan mendapat ruang kosong seperlunya.

Jika master berupa SVG dengan struktur folder `projects/`, `certificates/`, `tools/`, atau `images/profil.jpg`, konversi menggunakan:

```sh
node scripts/optimize-assets.mjs path/to/original/assets
```

Script membaca master dan menulis WebP ke `public/assets`, tanpa menghapus master. Referensi gambar di file konten perlu disesuaikan saat menambah gambar baru. Original aset yang diganti pada optimasi November 2026 masih tersedia di riwayat Git.

## Deployment Vercel

Hubungkan repository GitHub ke Vercel dengan preset **Next.js**, Node.js **24.x**, install command `npm ci`, dan build command `npm run build`. Biarkan output directory mengikuti default Next.js. Commit `package-lock.json`, aset WebP baru, perubahan kode, dan penghapusan aset lama bersama-sama.

Perubahan lokal baru terbit setelah di-push ke branch deployment yang terhubung. Tidak diperlukan migrasi hosting atau `vercel.json` khusus.

## Hasil optimasi 5 November 2026

- 37 aset SVG proyek, sertifikat, dan tools: **302.004.674 byte → 1.606.646 byte** (berkurang **99,5%**). Foto profil juga dikonversi ke WebP.
- Total seluruh aset di `public` setelah pembersihan: **2.576.204 byte**, sekitar **2,46 MiB**.
- Next.js **16.4.5**, React/React DOM **19.3.1**, Tailwind CSS **4.3.4**, TypeScript **7.0.2**, dan dependency aktif lainnya diperbarui. Versi dipin dan dikunci dalam lockfile. Tipe Node mengikuti runtime 24.x.
- Audit online awal: **8 paket bermasalah** (2 moderate, 4 high, 2 critical). Setelah pembaruan: **0 kerentanan yang dilaporkan npm audit** pada waktu pemeriksaan.
- Lihat [rilis keamanan Next.js 16.4.5](https://github.com/vercel/next.js/releases/tag/v16.4.5) untuk advisori upstream.

Persentase di atas mengukur ukuran file aset, bukan persentase percepatan halaman. Kecepatan di produksi tetap dipengaruhi perangkat, koneksi, dan cache Vercel; Core Web Vitals produksi belum diukur dari checkout lokal ini.
