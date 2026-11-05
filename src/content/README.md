# Mulai mengubah isi portofolio

**Edit satu file: [`portfolio.ts`](./portfolio.ts).** File ini berisi teks, profil, proyek, sertifikat, dan tautan sosial. Desain dan rasio frame 16:9 tetap diatur oleh komponen website.

Cari bagian bernomor di dalam file dengan **Ctrl+F**:

| Bagian              | Untuk mengubah                                             |
| ------------------- | ---------------------------------------------------------- |
| `01 — PROFIL`       | Nama, foto profil, identitas, dan pengalaman               |
| `02 — KONTAK`       | LinkedIn, GitHub, dan Instagram                            |
| `03 — TEKS HALAMAN` | Hero, judul bagian, About, pendekatan, dan tombol          |
| `04 — PROYEK`       | Menambah, mengubah, mengurutkan, atau menyembunyikan karya |
| `05 — SERTIFIKAT`   | Nama sertifikat, penyelenggara, dan tautannya              |

## Mengubah tulisan

Ubah tulisan **di antara tanda kutip**, misalnya:

```ts
description: "Tulis perkenalan baru Anda di sini.",
```

Pertahankan tanda kutip, koma, kurung, dan nama pengaturannya. Jika kalimat mengandung tanda kutip ganda, tulis `\"` atau ganti tanda kutip dalam kalimat menjadi tanda kutip tunggal.

## Menambah proyek: cukup lima isian

1. Buat folder di `public/assets/projects/nama-proyek/`.
2. Simpan gambar WebP 16:9, misalnya `cover.webp` berukuran 1600×900 atau 1920×1080. Usahakan tiap gambar di bawah 512 KiB.
3. Di bagian `04 — PROYEK`, salin contoh ini ke dalam daftar `projects`, sebelum tanda `];` penutupnya:

```ts
{
  id: "nama-proyek", // Unik, tanpa spasi; gunakan tanda hubung.
  name: "Nama Proyek",
  category: "design", // "design" atau "development".
  summary: "Cerita singkat tentang proyek ini.",
  cover: "/assets/projects/nama-proyek/cover.webp",
},
```

Website otomatis memakai `name` sebagai judul detail dan `cover` sebagai gambar kartu. Tidak perlu mengisi judul/gambar yang sama dua kali. Urutan blok di daftar adalah urutan tampil; proyek terlihat pertama menjadi kartu unggulan.

Anda bisa menambahkan isian berikut **di dalam blok proyek yang sama**:

```ts
title: "Judul lebih lengkap untuk detail proyek",
discipline: "UI/UX Design",
platform: "Aplikasi mobile · Pendidikan",
description: "Penjelasan lebih panjang tentang proyek.",
context: "Latar belakang dan masalah yang ingin diatasi.",
preview: "/assets/projects/nama-proyek/preview.webp", // Jika gambar kartu berbeda.
images: [
  "/assets/projects/nama-proyek/halaman-1.webp",
  "/assets/projects/nama-proyek/halaman-2.webp",
],
tags: ["Figma", "React"],
focus: [
  { title: "Fokus desain", description: "Penjelasan keputusan antarmuka." },
],
links: [
  { label: "Buka website", href: "https://contoh.com" },
],
visible: false, // Sembunyikan sementara; ganti true atau hapus baris untuk tampil.
```

Bagian detail yang belum diisi tidak ditampilkan. Proyek tersembunyi tidak dihitung pada filter. Ini hanya pengaturan tampilan website: source dan file di `public` tetap dapat diakses jika repository/URL-nya publik, sehingga jangan menyimpan materi rahasia di sana.

## Menambah sertifikat

Di bagian `05 — SERTIFIKAT`, tambahkan satu blok:

```ts
{
  title: "Nama Sertifikat",
  issuer: "Nama Penyelenggara",
  href: "https://alamat-verifikasi-sertifikat.com",
},
```

Jika tidak memiliki tautan verifikasi, simpan PDF/gambar di `public/assets/certificates/`, lalu gunakan:

```ts
{
  title: "Nama Sertifikat",
  issuer: "Nama Penyelenggara",
  image: "/assets/certificates/sertifikat-baru.pdf",
},
```

Tombol sertifikat membuka `href` jika tersedia; jika tidak, membuka file `image`. Sertifikat tetap boleh portrait atau landscape. Tambahkan `visible: false` untuk menyembunyikannya sementara. Urutan tampil mengikuti urutan daftar.

## Foto profil dan tautan

- `profile.image` mengganti foto kecil di hero, foto About, dan foto pengganti ketika 3D tidak dimuat. Untuk foto, cukup gunakan WebP di `public/assets/images/`.
- Foto pada **model kartu 3D** tertanam di `public/assets/lanyard/card.glb`; mengganti foto profil biasa tidak mengganti isi model tersebut.
- `profile.showLanyard: false` menampilkan foto statis pada area desktop dan menghentikan pemuatan 3D.
- Edit URL pada `socialLinks` untuk mengganti akun. LinkedIn tetap menjadi kontak utama; GitHub/Instagram boleh dikosongkan dengan `""` agar tautannya disembunyikan.
- Path gambar dimulai `/assets/...`, **bukan** `public/assets/...`. Nama file harus persis, termasuk huruf besar/kecil, agar bekerja di Vercel.

## Memeriksa dan menerbitkan

```sh
npm run dev
```

Lihat hasilnya di http://localhost:3000. Sebelum commit/push:

```sh
npm run check
```

Pemeriksaan akan membantu menemukan ID ganda, isian pokok yang kosong, dan file gambar yang tidak ditemukan. Gambar proyek dengan rasio selain 16:9 mendapat peringatan, tetapi tetap ditampilkan utuh dalam frame 16:9.

Setelah benar, commit dan push **file konten serta file gambar/PDF baru** bersama-sama. Vercel akan membangun ulang website dari GitHub. Perubahan tidak membutuhkan CMS, database, atau akun tambahan.
