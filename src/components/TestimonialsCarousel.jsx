// src/components/TestimonialsCarousel.jsx
import React, { useMemo } from "react";
import { TESTIMONIALS } from "../lib/constants";

const isVideoSrc = (src = "") =>
  typeof src === "string" && /\.(mp4|webm|mov)(\?.*)?$/i.test(src || "");

// ✅ Hover palette order (6 cards)
const palette = ["red", "blue", "green", "blue", "green", "red"];

export default function TestimonialsCarousel({
  items = [],
  title = "Real Events + Real Reviews",
  subtitle =
    "Locally owned and operated in St. Louis and proud to support events across the region.\nHere is what clients say about working with our team",
  kicker = "",
  cardHSm = 240,
  cardHMd = 255,
  cardHLg = 270,
  quoteHSm = 150,
  quoteHMd = 160,
  quoteHLg = 165,
}) {
  const data = useMemo(() => {
    const base = items?.length ? items : TESTIMONIALS;
    return (base || []).slice(0, 6);
  }, [items]);

  // ✅ Map palette color -> hover class you already use in your CSS system
  // Make sure these classes exist in your globals (examples below).
  const hoverClassByColor = (c) => {
    if (c === "red") return "hover-red";
    if (c === "blue") return "hover-blue";
    if (c === "green") return "hover-green";
    return "";
  };

  const Card = ({ t, i }) => {
    const mediaSrc = t.image || t.photo || t.avatar;
    const alt = t.alt || t.name || "Testimonial";
    const isVideo = isVideoSrc(mediaSrc);

    const metaParts = [t.name, t.company || t.role, t.event].filter(Boolean);

    const cardHeight =
      typeof window === "undefined"
        ? cardHSm
        : window.matchMedia("(min-width:1024px)").matches
        ? cardHLg
        : window.matchMedia("(min-width:768px)").matches
        ? cardHMd
        : cardHSm;

    const quoteHeight =
      typeof window === "undefined"
        ? quoteHSm
        : window.matchMedia("(min-width:1024px)").matches
        ? quoteHLg
        : window.matchMedia("(min-width:768px)").matches
        ? quoteHMd
        : quoteHSm;

    // ✅ pick hover color by index
    const hoverColor = palette[i % palette.length];
    const hoverClass = hoverClassByColor(hoverColor);

    return (
      <article
        className={[
          "rounded-2xl overflow-hidden neon-border glo-hover bg-black/40 backdrop-blur min-w-0",
          hoverClass,
        ].join(" ")}
      >
        <div className="h-full flex flex-col" style={{ height: cardHeight }}>
          {/* Media + Text */}
          <div className="grid grid-cols-[160px_1fr] flex-1 min-h-0 items-center">
            {/* Media */}
            <div className="bg-black/20 flex items-center justify-center">
              <div className="w-[110px] h-[110px] sm:w-[120px] sm:h-[120px] lg:w-[130px] lg:h-[130px] rounded-full overflow-hidden flex items-center justify-center">
                {isVideo ? (
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src={mediaSrc} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={mediaSrc}
                    alt={alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                )}
              </div>
            </div>

            {/* Text */}
            <div className="p-4 min-w-0 flex flex-col">
              <div
                className="text-gray-100 text-[15px] leading-snug overflow-auto pr-2"
                style={{ height: quoteHeight, paddingTop: 2 }}
              >
                <blockquote className="m-0">{t.quote}</blockquote>
              </div>
            </div>
          </div>

          {/* Meta */}
          {metaParts.length ? (
            <div className="px-4 pb-3 pt-1">
              <div className="text-[9.5px] text-gray-400 leading-tight flex flex-wrap gap-x-1 gap-y-0.5 justify-center text-center">
                {metaParts.map((part, idx) => (
                  <span key={idx} className="min-w-0">
                    {idx > 0 && <span className="text-gray-500 mr-0.5">•</span>}
                    <span className="break-words">{part}</span>
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </article>
    );
  };

  return (
    <section className="bg-black border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          {kicker && (
            <p className="text-xs tracking-widest text-gray-500">{kicker}</p>
          )}
          <h2 className="neon-sign white text-3xl md:text-4xl lg:text-5xl mt-2">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-gray-400 text-base md:text-lg whitespace-pre-line">
              {subtitle}
            </p>
          )}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((t, i) => (
            <Card key={(t.name || "t") + i} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
