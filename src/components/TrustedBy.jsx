// src/components/TrustedBy.jsx
import { useEffect, useMemo, useRef, useState } from "react";

const LOGOS = [
  { src: "/images/trustedby/1.png", alt: "Saint Louis Science Center logo" },
  { src: "/images/trustedby/2.png", alt: "Urban Chestnut Brewing Company logo" },
  { src: "/images/trustedby/3.png", alt: "Dave and Buster’s logo" },
  { src: "/images/trustedby/4.png", alt: "Hollywood Casino Amphitheatre logo" },
  { src: "/images/trustedby/5.png", alt: "SEMO Redhawks logo" },
  { src: "/images/trustedby/6.png", alt: "Love Like Jackson Foundation logo" },
  { src: "/images/trustedby/7.png", alt: "School District of Clayton logo" },
  { src: "/images/trustedby/8.png", alt: "The Chamber Kirkwood Des Peres Area logo" },
  { src: "/images/trustedby/9.png", alt: "St. Louis HERO Network logo" },
  { src: "/images/trustedby/10.png", alt: "J. Jill logo" },
  { src: "/images/trustedby/11.png", alt: "Saint Louis Art Museum logo" },
  { src: "/images/trustedby/12.png", alt: "Washington University in St. Louis logo" },
  { src: "/images/trustedby/13.png", alt: "Holiday Inn St. Louis Creve Coeur logo" },
  { src: "/images/trustedby/14.png", alt: "IKAGG Connect logo" },
  { src: "/images/trustedby/15.png", alt: "RISE Creating Opportunities for and with People logo" },
  { src: "/images/trustedby/16.png", alt: "Danforth Elementary School logo" },
  { src: "/images/trustedby/17.png", alt: "School knight mascot logo" },
  { src: "/images/trustedby/18.png", alt: "ASCEND logo" },
  { src: "/images/trustedby/19.png", alt: "Bracket Room Sports Lounge and Eatery logo" },
  { src: "/images/trustedby/20.png", alt: "Barnwell Middle School logo" },
  { src: "/images/trustedby/21.png", alt: "Breast Cancer Foundation of the Ozarks logo" },
];

export default function TrustedBy({
  speed = 40,

  // 🔧 Tamaño de logos
  boxClass = "h-16 sm:h-18 md:h-20",

  // 🔧 Espacio entre logos
  gapClass = "gap-6",
}) {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const loopLogos = useMemo(() => LOGOS.concat(LOGOS), []);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    // Respeta reduced-motion: si el user lo tiene activado, no calculamos animación
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      wrap.style.setProperty("--marquee-duration", `0s`);
      return;
    }

    const halfWidth = track.scrollWidth / 2;
    const duration = Math.max(halfWidth / Math.max(speed, 10), 20);
    wrap.style.setProperty("--marquee-duration", `${duration}s`);
  }, [speed, loopLogos.length]);

  const regionId = "trusted-by-logos-title";

  return (
    // ✅ Full-bleed seguro (evita overflow/scroll horizontal)
    <section
      className="relative left-1/2 w-[100vw] -translate-x-1/2 bg-gray-100 overflow-x-clip"
      aria-labelledby={regionId}
    >
      {/* Heading accesible */}
      <h2 id={regionId} className="sr-only">
        Trusted by
      </h2>

      {/* Label visible con mejor contraste */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <span
          className="
            text-sm md:text-base
            font-semibold tracking-widest uppercase
            text-gray-700
          "
        >
          Trusted By
        </span>
      </div>

      <div className="pt-10 md:pt-14 pb-6">
        <div
          ref={wrapRef}
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          onTouchCancel={() => setPaused(false)}
          role="region"
          aria-label="Trusted by logos carousel"
        >
          {/* Fade edges */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
              maskImage:
                "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            }}
          />

          <ul
            ref={trackRef}
            className={[
              "flex items-center w-max",
              gapClass,
              "trustedby-marquee",
              paused ? "trustedby-paused" : "",
              // ✅ si reduced-motion, evita animación via clase (por si tu CSS lo usa)
              "motion-reduce:translate-x-0 motion-reduce:animate-none",
            ].join(" ")}
          >
            {loopLogos.map((logo, i) => (
              <li key={`${logo.src}-${i}`} className="shrink-0">
                <div className={`${boxClass} flex items-center justify-center`}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="
                      h-full w-auto object-contain
                      opacity-90
                      transition-all duration-300 ease-out
                      hover:opacity-100
                      hover:scale-[1.04]
                      hover:[filter:drop-shadow(0_0_14px_rgba(0,131,253,.45))]
                    "
                  />
                </div>
              </li>
            ))}
          </ul>

          {/* (Opcional) Texto extra para screen readers si quieres más contexto */}
          <p className="sr-only">
            Logos of organizations that have worked with or trust Glo Event Co.
          </p>
        </div>
      </div>
    </section>
  );
}
