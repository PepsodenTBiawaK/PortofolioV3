"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import ProjectModal, { ProjectDetail } from "@/components/ProjectModal";

export type Card = {
  title: string;
  src: string; // thumbnail
  cover?: string;
  description?: string;
  highlights?: string[];
  tags?: string[];
  links?: { label: string; href: string }[];
  images?: string[]; // galeri tambahan
};

export const CardView = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    onOpen,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    onOpen: () => void;
  }) => (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out border border-white/10 hover:border-[#03fa97]/30",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className=" text-start text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </button>
  )
);
CardView.displayName = "CardView";

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<ProjectDetail | null>(null);

  const handleOpen = (card: Card) => {
    setActive({
      title: card.title,
      cover: card.cover || card.src,
      description: card.description,
      highlights: card.highlights,
      tags: card.tags,
      links: card.links,
      images: card.images,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActive(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
        {cards.map((card, index) => (
          <CardView
            key={`${card.title}-${index}`}  // ✅ unik
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            onOpen={() => handleOpen(card)}
          />
        ))}
      </div>

      <ProjectModal open={open} onClose={handleClose} project={active} />
    </>
  );
}
