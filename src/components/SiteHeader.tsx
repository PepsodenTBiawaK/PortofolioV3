"use client";

import { useEffect, useRef, useState } from "react";
import { socialLinks } from "@/data/portfolio";
import { ArrowUpRight, Close } from "./Icons";

const navigation = [
  { href: "#projects", label: "Karya" },
  { href: "#about", label: "Tentang" },
  { href: "#approach", label: "Pendekatan" },
  { href: "#contact", label: "Kontak" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries.find((item) => item.isIntersecting);
        if (entry) setActive(`#${entry.target.id}`);
      },
      { rootMargin: "-15% 0px -60% 0px" },
    );
    navigation.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const desktop = matchMedia("(min-width: 600px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", key);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", key);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);

  return (
    <header ref={header} className="site-header">
      <div className="shell header-inner">
        <a
          className="wordmark"
          href="#top"
          aria-label="Fadilah Aprianto — kembali ke atas"
          onClick={() => setOpen(false)}
        >
          <span className="wordmark-symbol">
            fa<span>·</span>
          </span>
          <span className="wordmark-caption">
            FADILAH
            <br />
            APRIANTO
          </span>
        </a>
        <nav
          id="main-navigation"
          aria-label="Navigasi utama"
          className={`main-navigation ${open ? "is-open" : ""}`}
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-contact"
          >
            Mari bicara <ArrowUpRight />
          </a>
        </nav>
        <a
          className="header-contact"
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          Mari bicara <ArrowUpRight />
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <Close />
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
