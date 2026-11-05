"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { Project } from "@/types/project";
import { ArrowRight, ArrowUpRight, Close } from "./Icons";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const titleId = useId();
  const images = [project.cover, ...project.images];

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element.showModal();
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex((value) => (value - 1 + images.length) % images.length);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setIndex((value) => (value + 1) % images.length);
      }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [images.length]);

  if (typeof document === "undefined") return null;
  return createPortal(
    <dialog
      ref={dialog}
      className="case-modal"
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="case-panel">
        <header className="case-header">
          <div>
            <span className="eyebrow">
              PROJECT NOTES / {project.discipline}
            </span>
            <h2 id={titleId}>{project.title}</h2>
          </div>
          <button
            type="button"
            className="icon-button"
            onClick={onClose}
            aria-label="Tutup detail proyek"
            autoFocus
          >
            <Close />
          </button>
        </header>
        <div className="case-content">
          <p className="case-summary">{project.description}</p>
          <div className="case-facts">
            <div>
              <span className="eyebrow">RUANG LINGKUP</span>
              <p>{project.discipline}</p>
            </div>
            {project.platform && (
              <div>
                <span className="eyebrow">PLATFORM</span>
                <p>{project.platform}</p>
              </div>
            )}
            {project.tags.length > 0 && (
              <div>
                <span className="eyebrow">PERANGKAT</span>
                <p>{project.tags.join(" · ")}</p>
              </div>
            )}
          </div>
          <div className="case-gallery">
            <Image
              src={images[index]}
              alt={`${project.title} - image ${index + 1}`}
              fill
              sizes="(min-width: 1100px) 1032px, 92vw"
              loading="eager"
              className="case-image"
            />
          </div>
          <div className="gallery-controls">
            <div className="gallery-thumbnails">
              {images.map((image, itemIndex) => (
                <button
                  key={image}
                  type="button"
                  aria-label={`Lihat gambar ${itemIndex + 1}`}
                  aria-pressed={index === itemIndex}
                  onClick={() => setIndex(itemIndex)}
                >
                  <Image src={image} alt="" fill sizes="80px" />
                </button>
              ))}
            </div>
            <div className="gallery-pagination">
              <button
                type="button"
                className="icon-button"
                aria-label="Gambar sebelumnya"
                onClick={() =>
                  setIndex(
                    (value) => (value - 1 + images.length) % images.length,
                  )
                }
              >
                <ArrowRight className="arrow-back" />
              </button>
              <span aria-live="polite">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                className="icon-button"
                aria-label="Gambar berikutnya"
                onClick={() => setIndex((value) => (value + 1) % images.length)}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
          {project.context && (
            <div className="case-context">
              <p className="eyebrow">KONTEKS PROYEK</p>
              <h3>{project.summary}</h3>
              <p>{project.context}</p>
            </div>
          )}
          {project.focus.length > 0 && (
            <div className="case-focus">
              <p className="eyebrow">CATATAN ANTARMUKA</p>
              <div>
                {project.focus.map((item, itemIndex) => (
                  <article key={item.title}>
                    <span>0{itemIndex + 1}</span>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          )}
          <footer className="case-footer">
            <p>
              {project.category === "design"
                ? "Dokumentasi ini menampilkan eksplorasi visual dan ruang lingkup antarmuka."
                : "Eksplorasi desain yang terhubung dengan pengembangan web dan mobile."}
            </p>
            {project.links?.map((link) => (
              <a
                className="button button-primary"
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
                <ArrowUpRight />
              </a>
            ))}
          </footer>
        </div>
      </div>
    </dialog>,
    document.body,
  );
}
