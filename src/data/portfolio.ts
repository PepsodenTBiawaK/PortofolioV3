import type { Project } from "@/types/project";

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/fadilah-aprianto-6a651b322",
  github: "https://github.com/PepsodenTBiawaK",
  instagram: "https://www.instagram.com/fadilah_aprianto",
};

export const projects: Project[] = [
  {
    id: "nusafin",
    title: "Web App Nusafin",
    name: "Nusafin",
    category: "design",
    discipline: "UI/UX Design",
    platform: "Aplikasi web · Keuangan internal",
    summary: "Menata kompleksitas keuangan dalam antarmuka yang terstruktur.",
    description:
      "Desain aplikasi web untuk pengelolaan keuangan internal perusahaan, dengan tampilan pengajuan, riwayat transaksi, dan laporan dalam satu pengalaman yang konsisten.",
    context:
      "Pengelolaan keuangan internal melibatkan informasi yang padat: jenis pengajuan, nominal, perusahaan, dan status proses. Nusafin mengeksplorasi cara menyajikan informasi tersebut dalam alur web yang terorganisir.",
    focus: [
      {
        title: "Hierarki informasi",
        description:
          "Ringkasan dan tabel pengajuan menempatkan status serta informasi keuangan dalam kelompok yang mudah ditelusuri.",
      },
      {
        title: "Alur pengajuan",
        description:
          "Formulir dibagi menjadi tahapan dengan informasi perusahaan dan detail pembayaran yang terstruktur.",
      },
      {
        title: "Konsistensi antarmuka",
        description:
          "Navigasi, komponen formulir, dan pola tampilan dipertahankan di berbagai halaman aplikasi.",
      },
    ],
    cover: "/assets/projects/Project5/Cover5.webp",
    preview: "/assets/projects/Project5/Thumb1.webp",
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
    description:
      "Eksplorasi desain ulang aplikasi Nita, mencakup layanan perjalanan, top up Flazz, notifikasi, dan materi informasi di dalam aplikasi.",
    context:
      "Aplikasi layanan jalan tol menggabungkan beragam kebutuhan dalam ruang layar yang terbatas. Proyek ini menampilkan eksplorasi antarmuka Nita dan penyajian layanan serta informasi di dalamnya.",
    focus: [
      {
        title: "Akses layanan",
        description:
          "Layanan perjalanan dan kebutuhan pembayaran ditempatkan dalam tampilan utama aplikasi mobile.",
      },
      {
        title: "Komunikasi visual",
        description:
          "Materi informasi dan promosi disesuaikan dengan konteks layar aplikasi.",
      },
      {
        title: "Eksplorasi tampilan",
        description:
          "Dokumentasi visual menampilkan perbandingan dan pengembangan desain antarmuka.",
      },
    ],
    cover: "/assets/projects/Project4/Cover4.webp",
    preview: "/assets/projects/Project4/Cover4.webp",
    images: [
      "/assets/projects/Project4/Thumb1.webp",
      "/assets/projects/Project4/Thumb2.webp",
    ],
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
    description:
      "Desain ulang antarmuka aplikasi parkir dengan eksplorasi tampilan masuk, riwayat parkir, pencarian, dan pembayaran digital.",
    context:
      "Informasi kendaraan, waktu masuk, dan waktu keluar perlu terbaca pada layar mobile. Dokumentasi proyek memperlihatkan pengembangan tampilan masuk serta riwayat parkir melalui perbandingan sebelum dan sesudah.",
    focus: [
      {
        title: "Informasi riwayat",
        description:
          "Informasi kendaraan dan waktu parkir dikelompokkan dalam tampilan riwayat berbentuk kartu.",
      },
      {
        title: "Tampilan masuk",
        description:
          "Eksplorasi halaman login memberi penekanan pada identitas produk dan elemen formulir.",
      },
      {
        title: "Perbandingan visual",
        description:
          "Tampilan sebelum dan sesudah disajikan untuk memperlihatkan perubahan komposisi antarmuka.",
      },
    ],
    cover: "/assets/projects/Project6/Cover6.webp",
    preview: "/assets/projects/Project6/Thumb1.webp",
    images: [
      "/assets/projects/Project6/Thumb1.webp",
      "/assets/projects/Project6/Thumb2.webp",
    ],
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
    description:
      "Aplikasi pencatatan kehadiran siswa yang mencakup absensi, riwayat, dan laporan, dengan antarmuka web serta mobile.",
    context:
      "AbsenKuy mengeksplorasi perpindahan pencatatan kehadiran ke pengalaman digital. Halaman web dan mobile menampilkan kebutuhan utama berupa pencatatan, penelusuran riwayat, serta laporan kehadiran.",
    focus: [
      {
        title: "Pencatatan kehadiran",
        description:
          "Antarmuka ditujukan untuk kebutuhan absensi siswa secara digital.",
      },
      {
        title: "Web dan mobile",
        description:
          "Eksplorasi implementasi menggunakan React untuk web serta Flutter untuk aplikasi mobile.",
      },
      {
        title: "Riwayat dan laporan",
        description:
          "Data kehadiran disajikan melalui tampilan riwayat dan laporan.",
      },
    ],
    cover: "/assets/projects/Project2/Cover2.webp",
    preview: "/assets/projects/Project2/Cover2.webp",
    images: [
      "/assets/projects/Project2/Thumb1.webp",
      "/assets/projects/Project2/Thumb2.webp",
      "/assets/projects/Project2/Thumb3.webp",
    ],
    tags: ["React", "Tailwind CSS", "Node.js", "MySQL", "Flutter"],
    links: [
      { label: "Buka aplikasi", href: "https://absenkuy-bay.vercel.app/" },
    ],
  },
  {
    id: "undangan-digital",
    title: "Undangan Pernikahan Digital",
    name: "Undangan Digital",
    category: "development",
    discipline: "Web Development",
    platform: "Website · Proyek personal",
    summary: "Ruang digital untuk berbagi cerita dan merayakan momen personal.",
    description:
      "Website undangan pernikahan personal dengan cerita pasangan, galeri foto, RSVP, dan informasi lokasi acara.",
    context:
      "Informasi sebuah perayaan perlu disajikan dengan jelas sekaligus terasa personal. Website ini menggabungkan cerita, dokumentasi foto, serta detail acara dalam satu halaman undangan.",
    focus: [
      {
        title: "Cerita dan suasana",
        description:
          "Cerita pasangan serta galeri foto menjadi bagian dari pengalaman membuka undangan.",
      },
      {
        title: "Informasi acara",
        description:
          "Detail dan peta lokasi membantu tamu menemukan informasi perayaan.",
      },
      {
        title: "Interaksi tamu",
        description:
          "Fitur RSVP melengkapi website undangan yang dikembangkan menggunakan HTML, CSS, dan JavaScript.",
      },
    ],
    cover: "/assets/projects/Project1/Cover1.webp",
    preview: "/assets/projects/Project1/Cover1.webp",
    images: [
      "/assets/projects/Project1/Thumb1.webp",
      "/assets/projects/Project1/Thumb2.webp",
      "/assets/projects/Project1/Thumb3.webp",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        label: "Buka undangan",
        href: "https://pepsodentbiawak.github.io/fadilah-destiany-wedding",
      },
    ],
  },
  {
    id: "portfolio-v2",
    title: "Portfolio V2",
    name: "Portfolio V2",
    category: "development",
    discipline: "Web Design & Development",
    platform: "Website · Portofolio personal",
    summary: "Eksplorasi awal untuk membangun identitas dan kehadiran digital.",
    description:
      "Versi terdahulu website portofolio pribadi yang dikembangkan menggunakan HTML, CSS, dan JavaScript tanpa framework.",
    context:
      "Proyek personal ini menjadi ruang eksplorasi desain serta pengembangan web. Karya, keterampilan, dan tautan sosial disusun sebagai bagian dari identitas digital pribadi.",
    focus: [
      {
        title: "Identitas personal",
        description:
          "Tampilan website memperkenalkan profil, karya, dan keterampilan.",
      },
      {
        title: "Fondasi web",
        description:
          "Pengembangan menggunakan HTML, CSS, dan JavaScript tanpa framework.",
      },
      {
        title: "Perkembangan karya",
        description:
          "Dokumentasi portofolio sebelumnya memperlihatkan bagian dari perjalanan eksplorasi web.",
      },
    ],
    cover: "/assets/projects/Project3/Cover3.webp",
    preview: "/assets/projects/Project3/Cover3.webp",
    images: [
      "/assets/projects/Project3/Thumb1.webp",
      "/assets/projects/Project3/Thumb2.webp",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        label: "Buka website",
        href: "https://pepsodentbiawak.github.io/portofolioV2",
      },
    ],
  },
];

export const certificates = [
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
