"use client";
import { FocusCards } from "@/components/ui/focus-cards";
import { link } from "fs";
import { image } from "motion/react-client";
import { cover } from "three/src/extras/TextureUtils.js";

export default function FocusCardsDemo() {
  const cards = [
    {
      title: "Undangan Pernikahan Digital",
      src: "/assets/projects/Project1.svg",
      cover: "/assets/projects/Project1/Cover1.svg",
      description: "Aplikasi undangan pernikahan digital yang interaktif dan mudah digunakan, memungkinkan pasangan untuk berbagi momen spesial mereka dengan keluarga dan teman-teman secara online.",
      highlights: ["Desain menarik", "Fitur RSVP untuk tamu", "Story", "Galeri Foto", "Peta lokasi acara"],
      tags: ["Html", "CSS Vanilla", "JavaScript"],
      links: [{ label: "Undangan Digital", href: "https://pepsodentbiawak.github.io/fadilah-destiany-wedding" }],
      images: ["/assets/projects/Project1/Thumb1.svg", "/assets/projects/Project1/Thumb2.svg", "/assets/projects/Project1/Thumb3.svg"],
    },
    {
      title: "Aplikasi AbsenKuy",
      src: "/assets/projects/Project2.svg",
      cover: "/assets/projects/Project2/Cover2.svg",
      description: "Aplikasi AbsenKuy adalah solusi absensi digital yang memudahkan proses pencatatan kehadiran siswa secara efisien, digital, dan akurat.",
      highlights: ["Sistem absensi berbasis web & mobile", "Fitur laporan kehadiran", "Fitur Riwayat"],
      tags: ["React JS", "Tailwind CSS", "NodeJs", "MySql", "Dart", "Flutter"],
      links: [{ label: "AbsenKuy", href: "https://absenkuy-bay.vercel.app/" }],
      images: ["/assets/projects/Project2/Thumb1.svg", "/assets/projects/Project2/Thumb2.svg", "/assets/projects/Project2/Thumb3.svg"],
    },
    {
      title: "Portfolio V2",
      src: "/assets/projects/Project3.svg",
      cover: "/assets/projects/Project3/Cover3.svg",
      description: "Portfolio V2 adalah versi terbaru dari situs web portofolio pribadi yang menampilkan karya, pengalaman, dan keterampilan saya dengan desain yang lebih modern dengan menggunakan bahasa basic, tanpa framework apapun.",
      highlights: ["Desain modern", "Integrasi dengan media sosial", "Fitur blog"],
      tags: ["Html", "Css Vanilla", "JavaScript"],
      links: [{ label: "Portfolio-V2", href: "https://pepsodentbiawak.github.io/portofolioV2" }],
      images: ["/assets/projects/Project3/Thumb1.svg", "/assets/projects/Project3/Thumb2.svg",], 
    },
    { title: "Mobile App Nita", 
      src: "/assets/projects/Project4.svg",
      cover: "/assets/projects/Project4/Cover4.svg",
      description: "Aplikasi mobile Nita adalah platform inovatif yang dirancang untuk memudahkan pengguna toll sehari-hari, produktivitas, dan tetap terorganisir dengan fitur-fitur canggih dan antarmuka yang user-friendly.",
      highlights: ["Desain menarik", "Fitur Top Up Flazz", "Notifikasi"],
      tags: ["Figma", "Canva",],
      images: ["/assets/projects/Project4/Thumb1.svg", "/assets/projects/Project4/Thumb2.svg",],
      },
    { title: "Web App Nusafin", 
      src: "/assets/projects/Project5.svg",
      cover: "/assets/projects/Project5/Cover5.svg",
      description: "Nusafin adalah platform web inovatif yang dirancang untuk memudahkan pengguna dalam mengelola keuangan internal perusahaan dengan fitur-fitur canggih dan antarmuka yang user-friendly.",
      highlights: ["Desain User Friendly", "Fitur Manajemen Keuangan", "Laporan Keuangan"],
      tags: ["Figma", "Canva",],
      images: ["/assets/projects/Project5/Thumb1.svg",],
      },
    { title: "Mobile App Otto Parking", 
      src: "/assets/projects/Project6.svg",
      cover: "/assets/projects/Project6/Cover6.svg",
      description: "Aplikasi mobile Otto Parking adalah solusi inovatif untuk memudahkan pengguna dalam menemukan, memesan, dan membayar tempat parkir dengan cepat dan efisien melalui perangkat seluler mereka.",
      highlights: ["Desain menarik", "Fitur Pencarian Parkir", "Pembayaran Digital"],
      tags: ["Figma", "Canva",],
      images: ["/assets/projects/Project6/Thumb1.svg", "/assets/projects/Project6/Thumb2.svg",],},
  ];
  return <FocusCards cards={cards} />;
}
