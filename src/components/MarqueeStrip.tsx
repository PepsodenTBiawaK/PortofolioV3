'use client';
import React, { useMemo } from 'react';

type Item = {
  src: string;
  alt?: string;
  href?: string; // opsional: jika ingin klik ke link tertentu
};

type Props = {
  items: Item[];
  /** px/detik, default 60 (semakin besar semakin cepat) */
  speed?: number;
  /** tinggi strip (contoh '56px' atau '3.5rem') */
  height?: string;
  /** gap antar item (Tailwind class), default 'gap-8' */
  gapClassName?: string;
  /** grayscale untuk logo */
  grayscale?: boolean;
  /** padding horizontal container */
  pxClassName?: string; // default 'px-4 sm:px-6 md:px-8'
};

export default function MarqueeStrip({
  items,
  speed = 60,
  height = '56px',
  gapClassName = 'gap-8 sm:gap-10 md:gap-14',
  grayscale = true,
  pxClassName = 'px-4 sm:px-6 md:px-8',
}: Props) {
  // gandakan items agar loop mulus
  const loopItems = useMemo(() => [...items, ...items], [items]);

  // durasi animasi = (total width kira2) / speed → kita pakai heuristic:
  // asumsikan 180px per item (tergantung tinggi), lalu bagi speed (px/s).
  const estItemWidth = 180; // px, heuristic
  const durationSec = Math.max(10, Math.round((items.length * estItemWidth) / speed));

  return (
    <div
      className={`relative w-full ${pxClassName}`}
      style={{
        // mask gradient halus kanan-kiri
        WebkitMaskImage:
          'linear-gradient(90deg, transparent 0px, rgba(0,0,0,1) 40px, rgba(0,0,0,1) calc(100% - 40px), transparent 100%)',
        maskImage:
          'linear-gradient(90deg, transparent 0px, rgba(0,0,0,1) 40px, rgba(0,0,0,1) calc(100% - 40px), transparent 100%)',
      }}
    >
      <div
        className="overflow-hidden group"
        style={{
          height,
        }}
      >
        <div
          className={`flex ${gapClassName} items-center will-change-transform`}
          style={{
            animation: `marquee ${durationSec}s linear infinite`,
          }}
        >
          {loopItems.map((item, idx) => {
            const content = (
              // gambar
              <img
                key={idx}
                src={item.src}
                alt={item.alt ?? 'logo'}
                className={`h-full object-contain opacity-80 hover:opacity-100 transition ${
                  grayscale ? 'grayscale hover:grayscale-0' : ''
                }`}
                draggable={false}
              />
            );

            return item.href ? (
              <a key={idx} href={item.href} target="_blank" rel="noreferrer" className="inline-flex h-full">
                {content}
              </a>
            ) : (
              <div key={idx} className="inline-flex h-full">
                {content}
              </div>
            );
          })}
        </div>
      </div>

      {/* keyframes lokal */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        /* pause on hover */
        .group:hover > div {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
