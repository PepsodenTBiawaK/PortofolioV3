"use client";

import { useEffect, useRef } from "react";

// A compositor-only glow replaces the full-screen fluid simulation.
export default function SplashCursor() {
  const glow = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = matchMedia(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    let frame = 0;
    const move = (event: PointerEvent) => {
      if (!media.matches || document.hidden || !glow.current) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!glow.current) return;
        glow.current.style.transform = `translate3d(${event.clientX - 120}px, ${event.clientY - 120}px, 0)`;
        glow.current.style.opacity = "1";
      });
    };
    const hide = () => {
      if (glow.current) glow.current.style.opacity = "0";
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", hide);
    document.addEventListener("visibilitychange", hide);
    media.addEventListener("change", hide);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", hide);
      document.removeEventListener("visibilitychange", hide);
      media.removeEventListener("change", hide);
    };
  }, []);
  return (
    <div
      ref={glow}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-50 h-60 w-60 rounded-full opacity-0 motion-reduce:hidden"
      style={{
        background: "radial-gradient(circle, #03fa9712, transparent 70%)",
      }}
    />
  );
}
