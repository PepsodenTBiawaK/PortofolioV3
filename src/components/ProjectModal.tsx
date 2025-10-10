"use client";

import React, { useEffect, useState } from "react";

export type ProjectDetail = {
  title: string;
  cover: string;                 // gambar utama
  description?: string;
  highlights?: string[];
  tags?: string[];
  links?: { label: string; href: string }[];
  images?: string[];             // OPSIONAL: galeri tambahan
};

type Props = {
  open: boolean;
  onClose: () => void;
  project?: ProjectDetail | null;
};

export default function ProjectModal({ open, onClose, project }: Props) {
  // 1) Hooks SELALU dipanggil di awal (jangan dikondisikan)
  const [idx, setIdx] = useState(0);

  // Bangun list gambar aman walau project null
  const imgs = project ? [project.cover, ...(project.images ?? [])] : [];
  const total = imgs.length;
  const hasCarousel = total > 1;

  // Kunci body scroll saat open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Reset ke slide 0 saat project berubah
  useEffect(() => {
    setIdx(0);
  }, [project]);

  // Jaga index tetap valid kalau total berubah
  useEffect(() => {
    if (idx >= total) setIdx(0);
  }, [total, idx]);

  // Keyboard: Esc tutup, panah kiri/kanan untuk navigasi
  useEffect(() => {
    if (!open || total <= 0) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + total) % total);
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, total, onClose]);

  // 2) Setelah SEMUA hooks, boleh return null
  if (!open || !project) return null;

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <button
        aria-label="Close backdrop"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Panel (scroll konten, scrollbar disembunyikan) */}
      <div className="relative z-[61] mx-auto my-6 w-[min(92vw,960px)] max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0B0F14] p-4 sm:p-6 no-scrollbar">
        {/* Header */}
        <div className="flex items-start gap-3">
          <h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
          <button
            className="ml-auto rounded-full p-2 hover:bg-white/10 transition text-white/80"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Media / Carousel */}
        <div className="mt-4 relative w-full overflow-hidden rounded-lg">
          {total > 0 && (
            <img
              src={imgs[idx]}
              alt={`${project.title} - image ${idx + 1}`}
              className="w-full h-auto object-cover"
              loading="eager"
            />
          )}

          {hasCarousel && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white p-2"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white p-2"
                aria-label="Next"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {hasCarousel && (
          <div className="mt-3 flex gap-2 overflow-x-auto no-scrollbar scroll-smooth">
            {imgs.map((src, i) => (
              <button
                key={`${project.title}-thumb-${i}`}
                onClick={() => setIdx(i)}
                className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-md border transition ${
                  i === idx ? "border-[#03fa97]" : "border-white/10 hover:border-white/30"
                }`}
                aria-label={`Go to image ${i + 1}`}
              >
                <img src={src} alt={`thumb ${i + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Body */}
        <div className="mt-4 space-y-4">
          {!!project.description && (
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
          )}

          {!!project.highlights?.length && (
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              {project.highlights.map((h, i) => (
                <li key={`${project.title}-hl-${i}`}>{h}</li>
              ))}
            </ul>
          )}

          {!!project.tags?.length && (
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((t, i) => (
                <span
                  key={`${project.title}-tag-${i}`}
                  className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {!!project.links?.length && (
            <div className="flex flex-wrap gap-3 pt-2">
              {project.links.map((l, i) => (
                <a
                  key={`${project.title}-link-${i}`}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex px-4 py-2 rounded-full border border-[#03fa97]/40 bg-white/5 hover:bg-[#03fa97]/10 text-sm text-white transition"
                >
                  {l.label} →
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
