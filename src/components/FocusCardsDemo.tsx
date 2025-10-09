"use client";
import { FocusCards } from "@/components/ui/focus-cards";

export default function FocusCardsDemo() {
  const cards = [
    { title: "Undangan Pernikahan Digital", src: "/assets/projects/Project1.svg" },
    { title: "Aplikasi AbsenKuy",            src: "/assets/projects/Project2.svg" },
    { title: "Mobile App Nita",              src: "/assets/projects/Project3.svg" },
    { title: "Web App Nusafin",              src: "/assets/projects/Project4.svg" },
    { title: "Mobile App Otto Parking",      src: "/assets/projects/Project5.svg" },
    { title: "Mobile App Otto Parking",      src: "/assets/projects/Project6.svg" },
  ];
  return <FocusCards cards={cards} />;
}
