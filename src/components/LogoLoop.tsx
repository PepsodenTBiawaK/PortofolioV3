import type { CSSProperties, ReactNode } from "react";

export type LogoItem = {
  node: ReactNode;
  href?: string;
  title?: string;
  ariaLabel?: string;
};

type LogoLoopProps = {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right";
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  ariaLabel?: string;
};

// CSS handles the decorative loop without a permanent JavaScript animation frame.
export default function LogoLoop({
  logos,
  speed = 120,
  direction = "left",
  logoHeight = 48,
  gap = 40,
  pauseOnHover = true,
  fadeOut = false,
  scaleOnHover = false,
  ariaLabel = "Technologies",
}: LogoLoopProps) {
  const style = {
    "--logo-size": `${logoHeight}px`,
    "--logo-gap": `${gap}px`,
    "--loop-duration": `${Math.max(1, (logos.length * (logoHeight + gap)) / Math.max(1, speed))}s`,
    "--loop-direction": direction === "right" ? "reverse" : "normal",
    maskImage: fadeOut
      ? "linear-gradient(to right, transparent, black 8%, black 92%, transparent)"
      : undefined,
  } as CSSProperties;
  return (
    <div
      aria-label={ariaLabel}
      className={`logo-loop flex h-full items-center overflow-hidden ${pauseOnHover ? "logo-loop-pause" : ""}`}
      style={style}
    >
      <div className="logo-loop-track flex w-max">
        {[0, 1, 2, 3].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy > 0 ? true : undefined}
            inert={copy > 0 ? true : undefined}
            className="flex shrink-0 items-center gap-[var(--logo-gap)] pr-[var(--logo-gap)]"
          >
            {logos.map((logo, index) => (
              <li
                key={logo.title ?? index}
                className={`flex h-[var(--logo-size)] w-[var(--logo-size)] shrink-0 items-center justify-center text-[length:var(--logo-size)] ${scaleOnHover ? "transition-transform hover:scale-110" : ""}`}
              >
                {logo.href ? (
                  <a
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={logo.ariaLabel ?? logo.title}
                  >
                    {logo.node}
                  </a>
                ) : (
                  logo.node
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
