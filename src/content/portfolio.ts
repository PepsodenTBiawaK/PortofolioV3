import type { ProjectContent, CertificateContent } from "@/types/content";

// ISI WEBSITE DIATUR DARI FILE INI.
// Ubah nilai di antara tanda kutip; pertahankan nama isian, koma, dan kurung.
// Panduan dan contoh proyek/sertifikat: src/content/README.md.

// ============================================================================
// 01 — PROFIL
// image mengganti foto profil biasa. Foto pada model kartu 3D ada di card.glb.
// showLanyard: false memakai foto statis dan tidak memuat animasi 3D.
// ============================================================================
export const profile = {
  firstName: "Fadilah",
  lastName: "Aprianto",
  monogram: "fa",
  role: "UI/UX Designer · Web & Mobile",
  image: "/assets/images/profil.webp",
  showLanyard: true,
  portraitNote: "A PERSON BEHIND THE PIXELS.",
  portraitCaption: "Designer & curious mind",
  visualLabel: "Personal, by design.",
  visualCaption: "DESIGN & DEVELOPMENT",
  experience: [
    {
      label: "PENGALAMAN",
      title: "UI/UX Designer",
      detail: "PT Nusantara Infrastructure, Tbk.",
    },
    {
      label: "PENDIDIKAN",
      title: "Teknik Informatika",
      detail: "Universitas Paramadina",
    },
  ],
};

// ============================================================================
// 02 — KONTAK
// LinkedIn adalah tujuan tombol kontak utama. GitHub/Instagram boleh diisi "".
// ============================================================================
export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/fadilah-aprianto-6a651b322",
  github: "https://github.com/PepsodenTBiawaK",
  instagram: "https://www.instagram.com/fadilah_aprianto",
};

// ============================================================================
// 03 — TEKS HALAMAN
// firstLine = baris pertama judul. secondLine = awal baris kedua (opsional).
// accent = bagian judul berwarna hijau. paragraphs/items/tools boleh ditambah.
// ============================================================================
export const pageContent = {
  seo: {
    title: "Fadilah Aprianto — UI/UX Designer & Developer",
    description: "Pilihan karya UI/UX dan pengembangan web oleh Fadilah Aprianto. Merancang pengalaman digital yang jelas, berguna, dan dekat dengan penggunanya.",
  },
  navigation: [
    { href: "#projects", label: "Karya" },
    { href: "#about", label: "Tentang" },
    { href: "#approach", label: "Pendekatan" },
    { href: "#contact", label: "Kontak" },
  ],
  headerContactLabel: "Mari bicara",
  hero: {
    description: "Merancang pengalaman digital yang terasa jelas, berguna, dan dekat dengan penggunanya.",
    primaryButton: "Jelajahi karya",
    secondaryButton: "Sedikit tentang saya",
    footnote: ["Desain dengan empati.", "Dikembangkan dengan rasa ingin tahu."],
    editionLabel: "PORTOFOLIO",
    scrollLabel: "Pilihan karya di bawah",
    disciplines: "UI/UX · WEB · MOBILE",
  },
  work: {
    eyebrow: "01 / KARYA PILIHAN",
    heading: {
      firstLine: "Dari gagasan,",
      secondLine: "menjadi",
      accent: "pengalaman.",
    },
    intro: "Pilihan eksplorasi antarmuka dan pengembangan web. Setiap proyek membawa konteks dan tantangannya sendiri.",
  },
  about: {
    eyebrow: "02 / TENTANG SAYA",
    heading: { firstLine: "Rasa ingin tahu.", accent: "Sudut pandang baru." },
    lead: "Saya percaya desain yang baik dimulai dari memahami manusia di balik layar.",
    paragraphs: [
      "Saya Fadilah, UI/UX Designer di PT Nusantara Infrastructure, Tbk. sekaligus mahasiswa Teknik Informatika di Universitas Paramadina. Fokus saya ada pada antarmuka web dan mobile yang menyatukan kejelasan, fungsi, dan karakter visual.",
      "Perjalanan dari Tata Boga ke dunia digital membentuk perhatian saya pada detail. Kini, kreativitas itu bertemu dengan logika, kolaborasi, dan keinginan untuk terus belajar.",
    ],
    linkLabel: "Kenal lebih jauh di LinkedIn",
  },
  approach: {
    eyebrow: "03 / PENDEKATAN",
    heading: {
      firstLine: "Detail yang dipikirkan.",
      accent: "Tujuan yang dijaga.",
    },
    intro: "Tampilan yang menarik mendapat perhatian. Kejelasan dan kegunaan memberi alasan untuk tetap menggunakannya.",
    items: [
      {
        title: "Pahami konteks.",
        description: "Melihat kebutuhan pengguna, tujuan produk, dan batasan yang perlu dipertimbangkan sebelum menentukan bentuk.",
      },
      {
        title: "Susun pengalaman.",
        description: "Menghubungkan informasi, alur, dan interaksi agar setiap langkah terasa jelas dan memiliki arah.",
      },
      {
        title: "Perhatikan detail.",
        description: "Menjaga tipografi, ruang, dan konsistensi antarmuka, lalu mengeksplorasi bagaimana desain dapat diwujudkan.",
      },
    ],
    toolsLabel: "PERANGKAT KERJA",
    tools: ["Figma", "React", "Next.js", "Flutter", "Git"],
  },
  learning: {
    eyebrow: "04 / TERUS BELAJAR",
    heading: {
      firstLine: "Selalu ada ruang",
      secondLine: "untuk",
      accent: "bertumbuh.",
    },
    intro: "Sebagian langkah kecil dalam perjalanan memahami desain.",
  },
  contact: {
    eyebrow: "05 / MULAI PERCAKAPAN",
    heading: { firstLine: "Punya gagasan?", accent: "Mari bicarakan." },
    description: "Tentang desain, kolaborasi, atau kesempatan baru—saya senang mendengar cerita Anda.",
    buttonLabel: "Terhubung di LinkedIn",
    footnote: "IDE YANG BAIK DIMULAI DARI PERCAKAPAN.",
  },
  footer: { backToTopLabel: "Kembali ke atas ↑" },
};

// ============================================================================
// 04 — PROYEK
// Urutan blok = urutan tampil. Proyek pertama yang terlihat menjadi unggulan.
// Wajib: id, name, category, summary, cover. Isian lainnya boleh ditambahkan nanti.
// Tambahkan visible: false di proyek mana pun untuk menyembunyikannya.
// Contoh salin-tempel: src/content/README.md.
// ============================================================================
export const projects: ProjectContent[] = [
  {
  id: "bozzbill",
  title: "Web App BozzBill",
  name: "BozzBill",
  category: "development",
  discipline: "Web Development",
  platform: "Aplikasi web · Komunitas billiard",
  summary: "Membantu komunitas Bozz Billiard memantau performa, latihan, dan keanggotaan.",
  description: "Pengembangan aplikasi web untuk komunitas Bozz Billiard Tebet. BozzBill membantu para player melihat performa mereka saat bermain, mencatat aktivitas latihan melalui jurnal drilling, dan mendukung pengelolaan keanggotaan komunitas.",
  context: "Aktivitas bermain dan latihan komunitas dapat menghasilkan perkembangan yang diamati jika sistem pencatatannya belum terorganisir. BozzBill menyediakan satu platform untuk melihat performa player, mendokumentasikan latihan, dan mengelola informasi keanggotaan.",
  focus: [
    {
      title: "Performa player",
      description: "Menyajikan catatan performa agar player dapat meninjau perkembangan mereka dari sesi bermain di komunitas.",
    },
    {
      title: "Jurnal drilling",
      description: "Mendukung pencatatan latihan drilling sehingga player dapat mendokumentasikan latihan dan meninjau progresnya.",
    },
    {
      title: "Manajemen keanggotaan",
      description: "Membantu pengelolaan informasi dan status keanggotaan para player dalam komunitas.",
    },
  ],
  cover: "/assets/projects/Project8/Cover8.webp",
  preview: "/assets/projects/Project8/Cover8.webp",
  images: ["/assets/projects/Project8/Cover8.webp"],
  tags: ["PHP", "Laravel 13", "Blade", "Tailwind CSS 4", "Vite", "Pest", "MySQL"],
  links: [{ label: "Buka aplikasi", href: "https://bozzbill.my.id" }],
},
  {
  id: "o5hub",
  title: "Web Platform O5Hub",
  name: "O5Hub",
  category: "development",
  discipline: "Web Development",
  platform: "Platform web",
  summary: "Menghadirkan akses informasi dan layanan dalam satu platform web.",
  description: "Pengembangan platform web O5Hub dengan struktur halaman yang membantu pengguna menemukan informasi dan mengakses layanan secara terorganisir.",
  context: "Informasi dan layanan yang tersebar dapat menyulitkan pengguna menemukan hal yang dibutuhkan. O5Hub menyatukannya dalam pengalaman web yang lebih terarah dan mudah dijelajahi.",
  focus: [
    {
      title: "Struktur halaman",
      description: "Konten dan navigasi disusun agar pengguna dapat memahami susunan platform dan menemukan informasi dengan mudah.",
    },
    {
      title: "Pengalaman responsif",
      description: "Tampilan dirancang agar tetap nyaman digunakan pada berbagai ukuran layar.",
    },
    {
      title: "Pengembangan antarmuka",
      description: "Halaman web dibangun dengan pola antarmuka yang konsisten dan mendukung kebutuhan platform.",
    },
  ],
  cover: "/assets/projects/Project7/Cover7.webp",
  preview: "/assets/projects/Project7/Cover7.webp",
  images: ["/assets/projects/Project7/Cover7.webp"],
  tags: ["PHP", "Laravel 13", "Blade", "Tailwind CSS 4", "Vite", "Pest", "MySQL"],
  links: [{ label: "Buka aplikasi", href: "https://o5hub.my.id" }],
},
{
    id: "nusafin",
    title: "Web App Nusafin",
    name: "Nusafin",
    category: "design",
    discipline: "UI/UX Design",
    platform: "Aplikasi web · Keuangan internal",
    summary: "Menata kompleksitas keuangan dalam antarmuka yang terstruktur.",
    description: "Desain aplikasi web untuk pengelolaan keuangan internal perusahaan, dengan tampilan pengajuan, riwayat transaksi, dan laporan dalam satu pengalaman yang konsisten.",
    context: "Pengelolaan keuangan internal melibatkan informasi yang padat: jenis pengajuan, nominal, perusahaan, dan status proses. Nusafin mengeksplorasi cara menyajikan informasi tersebut dalam alur web yang terorganisir.",
    focus: [
      {
        title: "Hierarki informasi",
        description: "Ringkasan dan tabel pengajuan menempatkan status serta informasi keuangan dalam kelompok yang mudah ditelusuri.",
      },
      {
        title: "Alur pengajuan",
        description: "Formulir dibagi menjadi tahapan dengan informasi perusahaan dan detail pembayaran yang terstruktur.",
      },
      {
        title: "Konsistensi antarmuka",
        description: "Navigasi, komponen formulir, dan pola tampilan dipertahankan di berbagai halaman aplikasi.",
      },
    ],
    cover: "/assets/projects/Project5/Cover5.webp",
    preview: "/assets/projects/Project5/Cover5.webp",
    images: ["/assets/projects/Project5/Thumb1.webp"],
    tags: ["Figma", "Canva"],
  },
  {
    id: "nita",
    title: "Mobile App Nita",
    name: "Nita",
    category: "design",
    discipline: "Redesign UI/UX",
    platform: "Aplikasi mobile · Layanan jalan tol",
    summary: "Pengalaman mobile untuk perjalanan dan kebutuhan sehari-hari.",
    description: "Eksplorasi desain ulang aplikasi Nita, mencakup layanan perjalanan, top up Flazz, notifikasi, dan materi informasi di dalam aplikasi.",
    context: "Aplikasi layanan jalan tol menggabungkan beragam kebutuhan dalam ruang layar yang terbatas. Proyek ini menampilkan eksplorasi antarmuka Nita dan penyajian layanan serta informasi di dalamnya.",
    focus: [
      {
        title: "Akses layanan",
        description: "Layanan perjalanan dan kebutuhan pembayaran ditempatkan dalam tampilan utama aplikasi mobile.",
      },
      {
        title: "Komunikasi visual",
        description: "Materi informasi dan promosi disesuaikan dengan konteks layar aplikasi.",
      },
      {
        title: "Eksplorasi tampilan",
        description: "Dokumentasi visual menampilkan perbandingan dan pengembangan desain antarmuka.",
      },
    ],
    cover: "/assets/projects/Project4/Cover4.webp",
    preview: "/assets/projects/Project4/Cover4.webp",
    images: ["/assets/projects/Project4/Thumb1.webp", "/assets/projects/Project4/Thumb2.webp"],
    tags: ["Figma", "Canva"],
  },
  {
    id: "otto-parking",
    title: "Mobile App Otto Parking",
    name: "Otto Parking",
    category: "design",
    discipline: "Redesign UI/UX",
    platform: "Aplikasi mobile · Parkir digital",
    summary: "Eksplorasi pengalaman parkir melalui desain antarmuka mobile.",
    description: "Desain ulang antarmuka aplikasi parkir dengan eksplorasi tampilan masuk, riwayat parkir, pencarian, dan pembayaran digital.",
    context: "Informasi kendaraan, waktu masuk, dan waktu keluar perlu terbaca pada layar mobile. Dokumentasi proyek memperlihatkan pengembangan tampilan masuk serta riwayat parkir melalui perbandingan sebelum dan sesudah.",
    focus: [
      {
        title: "Informasi riwayat",
        description: "Informasi kendaraan dan waktu parkir dikelompokkan dalam tampilan riwayat berbentuk kartu.",
      },
      {
        title: "Tampilan masuk",
        description: "Eksplorasi halaman login memberi penekanan pada identitas produk dan elemen formulir.",
      },
      {
        title: "Perbandingan visual",
        description: "Tampilan sebelum dan sesudah disajikan untuk memperlihatkan perubahan komposisi antarmuka.",
      },
    ],
    cover: "/assets/projects/Project6/Cover6.webp",
    preview: "/assets/projects/Project6/Thumb1.webp",
    images: ["/assets/projects/Project6/Thumb1.webp", "/assets/projects/Project6/Thumb2.webp"],
    tags: ["Figma", "Canva"],
  },
  {
    id: "absenkuy",
    title: "Aplikasi AbsenKuy",
    name: "AbsenKuy",
    category: "development",
    discipline: "UI/UX & Development",
    platform: "Web & mobile · Absensi digital",
    summary: "Pencatatan kehadiran yang terhubung melalui web dan mobile.",
    description: "Aplikasi pencatatan kehadiran siswa yang mencakup absensi, riwayat, dan laporan, dengan antarmuka web serta mobile.",
    context: "AbsenKuy mengeksplorasi perpindahan pencatatan kehadiran ke pengalaman digital. Halaman web dan mobile menampilkan kebutuhan utama berupa pencatatan, penelusuran riwayat, serta laporan kehadiran.",
    focus: [
      {
        title: "Pencatatan kehadiran",
        description: "Antarmuka ditujukan untuk kebutuhan absensi siswa secara digital.",
      },
      {
        title: "Web dan mobile",
        description: "Eksplorasi implementasi menggunakan React untuk web serta Flutter untuk aplikasi mobile.",
      },
      {
        title: "Riwayat dan laporan",
        description: "Data kehadiran disajikan melalui tampilan riwayat dan laporan.",
      },
    ],
    cover: "/assets/projects/Project2/Cover2.webp",
    preview: "/assets/projects/Project2/Cover2.webp",
    images: ["/assets/projects/Project2/Thumb1.webp", "/assets/projects/Project2/Thumb2.webp", "/assets/projects/Project2/Thumb3.webp"],
    tags: ["React", "Tailwind CSS", "Node.js", "MySQL", "Flutter"],
    links: [{ label: "Buka aplikasi", href: "https://absenkuy-bay.vercel.app/" }],
  },
  {
    id: "undangan-digital",
    title: "Undangan Pernikahan Digital",
    name: "Undangan Digital",
    category: "development",
    discipline: "Web Development",
    platform: "Website · Proyek personal",
    summary: "Ruang digital untuk berbagi cerita dan merayakan momen personal.",
    description: "Website undangan pernikahan personal dengan cerita pasangan, galeri foto, RSVP, dan informasi lokasi acara.",
    context: "Informasi sebuah perayaan perlu disajikan dengan jelas sekaligus terasa personal. Website ini menggabungkan cerita, dokumentasi foto, serta detail acara dalam satu halaman undangan.",
    focus: [
      {
        title: "Cerita dan suasana",
        description: "Cerita pasangan serta galeri foto menjadi bagian dari pengalaman membuka undangan.",
      },
      {
        title: "Informasi acara",
        description: "Detail dan peta lokasi membantu tamu menemukan informasi perayaan.",
      },
      {
        title: "Interaksi tamu",
        description: "Fitur RSVP melengkapi website undangan yang dikembangkan menggunakan HTML, CSS, dan JavaScript.",
      },
    ],
    cover: "/assets/projects/Project1/Cover1.webp",
    preview: "/assets/projects/Project1/Cover1.webp",
    images: ["/assets/projects/Project1/Thumb1.webp", "/assets/projects/Project1/Thumb2.webp", "/assets/projects/Project1/Thumb3.webp"],
    tags: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        label: "Buka undangan",
        href: "https://pepsodentbiawak.github.io/fadilah-destiany-wedding",
      },
    ],
  },
  // {
  //   id: "portfolio-v2",
  //   title: "Portfolio V2",
  //   name: "Portfolio V2",
  //   category: "development",
  //   discipline: "Web Design & Development",
  //   platform: "Website · Portofolio personal",
  //   summary: "Eksplorasi awal untuk membangun identitas dan kehadiran digital.",
  //   description: "Versi terdahulu website portofolio pribadi yang dikembangkan menggunakan HTML, CSS, dan JavaScript tanpa framework.",
  //   context: "Proyek personal ini menjadi ruang eksplorasi desain serta pengembangan web. Karya, keterampilan, dan tautan sosial disusun sebagai bagian dari identitas digital pribadi.",
  //   focus: [
  //     {
  //       title: "Identitas personal",
  //       description: "Tampilan website memperkenalkan profil, karya, dan keterampilan.",
  //     },
  //     {
  //       title: "Fondasi web",
  //       description: "Pengembangan menggunakan HTML, CSS, dan JavaScript tanpa framework.",
  //     },
  //     {
  //       title: "Perkembangan karya",
  //       description: "Dokumentasi portofolio sebelumnya memperlihatkan bagian dari perjalanan eksplorasi web.",
  //     },
  //   ],
  //   cover: "/assets/projects/Project3/Cover3.webp",
  //   preview: "/assets/projects/Project3/Cover3.webp",
  //   images: ["/assets/projects/Project3/Thumb1.webp", "/assets/projects/Project3/Thumb2.webp"],
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   links: [
  //     {
  //       label: "Buka website",
  //       href: "https://pepsodentbiawak.github.io/portofolioV2",
  //     },
  //   ],
  // },
];

// ============================================================================
// 05 — SERTIFIKAT
// Isi href dengan alamat verifikasi atau image dengan path gambar/PDF lokal.
// Urutan blok = urutan tampil. visible: false menyembunyikan sertifikat.
// ============================================================================
export const certificates: CertificateContent[] = [
  {
    title: "Figma — Skill Test Certification",
    issuer: "Sribu Academy",
    image: "/assets/certificates/Certificate1.webp",
    href: "https://academy.sribu.com/certificate/SRB-230925-14D8-1048",
  },
  {
    title: "Intro to UI/UX Design",
    issuer: "Purwadhika Digital Technology School",
    image: "/assets/certificates/Certificate2.webp",
    href: "https://purwadhika.com/verify-certificate/PWDK-ITUUDFC-250923-0000002",
  },
  {
    title: "Intro to UI/UX Design",
    issuer: "Le Wagon",
    image: "/assets/certificates/Certificate3.webp",
    href: "https://app.lewagon.school/certificates/qsdaxvpjbw",
  },
];
