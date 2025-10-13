"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  /** minimal tampil (ms) biar ga “kedip” */
  minDuration?: number;
  /** batas maksimum nunggu (ms) */
  maxWait?: number;
  /** opsional: logo */
  logoSrc?: string;
  /** warna aksen untuk spinner / teks */
  accent?: string;
  /** teks pendek di bawah logo */
  caption?: string;
};

export default function SplashScreen({
  minDuration = 1200,
  maxWait = 3500,
  logoSrc,
  accent = "#03fa97",
  caption = "Loading your experience…",
}: Props) {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  const loadedRef = useRef(false);
  const minTimerRef = useRef<number | null>(null);
  const maxTimerRef = useRef<number | null>(null);

  // Kunci scroll saat mount
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      // pulihkan saat unmount (fallback)
      document.body.style.overflow = prevOverflow || "auto";
    };
  }, []);

  // Pulihkan scroll segera setelah splash tidak terlihat
  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "auto";
    }
  }, [visible]);

  // Logika durasi minimum / maksimum & penutupan
  useEffect(() => {
    const start = performance.now();

    function maybeClose() {
      const minElapsed = performance.now() - start >= minDuration;
      if (loadedRef.current && minElapsed && !leaving) {
        setLeaving(true);
        // beri waktu transisi fade-out
        window.setTimeout(() => setVisible(false), 350);
      }
    }

    function forceClose() {
      if (!leaving) {
        setLeaving(true);
        window.setTimeout(() => setVisible(false), 350);
      }
    }

    const markReady = () => {
      loadedRef.current = true;
      maybeClose();
    };

    // timer minimal tampil
    minTimerRef.current = window.setTimeout(maybeClose, minDuration) as unknown as number;

    // batas maksimal nunggu (fallback)
    maxTimerRef.current = window.setTimeout(forceClose, maxWait) as unknown as number;

    // ready-state listener
    if (document.readyState === "complete") {
      markReady();
    } else {
      window.addEventListener("load", markReady, { once: true });
    }

    return () => {
      if (minTimerRef.current) clearTimeout(minTimerRef.current);
      if (maxTimerRef.current) clearTimeout(maxTimerRef.current);
      window.removeEventListener("load", markReady);
    };
  }, [minDuration, maxWait, leaving]);

  // Jangan render apa pun kalau sudah tidak visible
  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center
        transition-opacity duration-300
        ${leaving ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      style={{
        background:
          "radial-gradient(1200px 600px at 50% 30%, rgba(3,250,151,0.06), transparent 60%), #06090E",
      }}
      aria-label="Splash screen"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex flex-col items-center text-center px-6">
        {/* Logo (opsional) */}
        {logoSrc ? (
          <div className="mb-6">
            <Image
              src={logoSrc}
              alt="Logo"
              width={96}
              height={96}
              priority
              className="rounded-xl"
            />
          </div>
        ) : null}

        {/* Judul singkat */}
        <h1 className="text-white text-xl sm:text-2xl font-semibold tracking-wide">
          Fadilah Aprianto
        </h1>
        <p className="text-gray-300 text-sm sm:text-base mt-1">
           
        </p>

        {/* Spinner */}
        <div className="mt-8 h-10 w-10 relative">
          <div
            className="absolute inset-0 animate-spin rounded-full border-2"
            style={{
              borderColor: `${accent}40`,
              borderTopColor: accent,
            }}
          />
        </div>

        {/* Caption */}
        <p className="text-gray-400 text-xs sm:text-sm mt-4">{caption}</p>
      </div>
    </div>
  );
}
