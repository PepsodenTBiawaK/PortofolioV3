"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import {
  Component,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const Lanyard = dynamic(() => import("./Lanyard"), { ssr: false });

class SceneBoundary extends Component<
  { children: ReactNode; onError: () => void },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    this.props.onError();
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export default function HeroLanyard() {
  const container = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [ready, setReady] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);
  const handleError = useCallback(() => setReady(false), []);

  useEffect(() => {
    const media = matchMedia(
      "(min-width: 768px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    if (
      connection?.saveData ||
      /(^|-)2g$/.test(connection?.effectiveType ?? "")
    )
      return;
    let inView = false;
    let idle: number | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const update = () => {
      const visible = inView && !document.hidden && media.matches;
      setActive(visible);
      if (idle !== undefined) cancelIdleCallback(idle);
      if (timer !== undefined) clearTimeout(timer);
      if (!visible) return;
      // Paint the content before downloading the optional 3D scene.
      timer = setTimeout(() => {
        if ("requestIdleCallback" in window)
          idle = requestIdleCallback(() => setEnabled(true), { timeout: 2000 });
        else setEnabled(true);
      }, 1500);
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      update();
    });
    if (container.current) observer.observe(container.current);
    document.addEventListener("visibilitychange", update);
    media.addEventListener("change", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
      media.removeEventListener("change", update);
      if (idle !== undefined) cancelIdleCallback(idle);
      if (timer !== undefined) clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={container} className="relative w-full h-full">
      <div
        className={`absolute inset-0 flex items-center justify-center p-8 transition-opacity duration-500 ${ready && active ? "opacity-0" : "opacity-100"}`}
      >
        <div className="relative h-[min(36vh,340px)] aspect-[4/5] overflow-hidden rounded-3xl border border-[#03fa97]/30 shadow-[0_0_60px_#03fa9715]">
          <Image
            src="/assets/images/profil.webp"
            alt="Fadilah Aprianto"
            fill
            sizes="(min-width: 768px) 340px, 70vw"
            preload
            className="object-cover"
          />
        </div>
      </div>
      {enabled && (
        <SceneBoundary onError={handleError}>
          <Lanyard
            position={[0, 0, 14]}
            gravity={[0, -40, 0]}
            active={active}
            onReady={handleReady}
          />
        </SceneBoundary>
      )}
    </div>
  );
}
