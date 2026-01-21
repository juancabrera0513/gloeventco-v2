// src/components/ImageCarousel3D.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";

const isVideoSrc = (src = "") =>
  typeof src === "string" && /\.(mp4|webm|mov)(\?.*)?$/i.test(src || "");

export default function ImageCarousel3D({
  items = [], // strings o { src, type?, poster?, alt? }
  ariaLabel = "3D image carousel",

  // size tuning
  maxW = 420,
  maxH = 280,

  // timing
  duration = 10, // una vuelta completa del 3D (seconds)

  // behavior
  step = 2, // ✅ overlap: [1,2,3] -> [3,4,5] -> [5,6,7]
  autoPlayVideo = true,
}) {
  const normalized = useMemo(() => {
    return (items || [])
      .map((it) => {
        if (!it) return null;

        if (typeof it === "string") {
          const src = it;
          return {
            src,
            alt: "Event highlight",
            poster: undefined,
            isVideo: isVideoSrc(src),
          };
        }

        const src = it.src || it.url || it.path;
        if (!src) return null;

        return {
          src,
          alt: it.alt || "Event highlight",
          poster: it.poster,
          isVideo: it.type === "video" ? true : isVideoSrc(src),
        };
      })
      .filter(Boolean);
  }, [items]);

  if (!normalized.length) return null;

  const contentRef = useRef(null);

  // ✅ index del item que va al frente del carrusel (no "pages")
  const [frontIndex, setFrontIndex] = useState(0);

  // ✅ swap EXACTO al terminar el ciclo de animación
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (normalized.length <= 3) return;

    const onIter = () => {
      setFrontIndex((i) => {
        const next = (i + step) % normalized.length;
        return next;
      });
    };

    el.addEventListener("animationiteration", onIter);
    return () => el.removeEventListener("animationiteration", onIter);
  }, [normalized.length, step]);

  // ✅ slides con overlap:
  // [i, i+1, i+2] luego i += 2 => [i+2, i+3, i+4]
  const slides = useMemo(() => {
    const n = normalized.length;

    // si hay 1 o 2, repetimos para que siempre haya 3 caras
    if (n === 1) return [normalized[0], normalized[0], normalized[0]];
    if (n === 2) return [normalized[0], normalized[1], normalized[0]];

    const a = normalized[frontIndex % n];
    const b = normalized[(frontIndex + 1) % n];
    const c = normalized[(frontIndex + 2) % n];
    return [a, b, c];
  }, [normalized, frontIndex]);

  const styleVars = {
    "--ic-maxw": `${maxW}px`,
    "--ic-maxh": `${maxH}px`,
    "--ic-duration": `${duration}s`,
  };

  return (
    <figure className="ic3d" aria-label={ariaLabel} style={styleVars}>
      <div ref={contentRef} className="ic3d__content">
        {slides.map((it, idx) => (
          <div key={`${it.src}-${idx}`} className="ic3d__item">
            {it.isVideo ? (
              <video
                className="ic3d__img"
                src={it.src}
                poster={it.poster}
                muted
                loop
                playsInline
                preload="metadata"
                autoPlay={autoPlayVideo}
              />
            ) : (
              <img
                className="ic3d__img"
                src={it.src}
                alt={it.alt}
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            )}
          </div>
        ))}
      </div>
    </figure>
  );
}
