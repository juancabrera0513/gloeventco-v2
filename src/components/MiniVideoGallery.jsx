import React from "react";

// videos importados aquí
import video1 from "/videos/silent-clip-1.mp4";
import video2 from "/videos/silent-clip-2.mp4";
import video3 from "/videos/silent-clip-3.mp4";
import video4 from "/videos/silent-clip-4.mp4";

export default function MiniVideoGallery({
  title = "What Does It Feel Like",
  subtitle = "A quick look at the energy, movement, and vibe guests experience on the dance floor.",
  aspect = "aspect-video", // 16:9 (1920×1080)
}) {
  const videos = [video1, video2, video3, video4];

  return (
    <section className="mt-24">
      {/* Title */}
      <h2 className="text-left text-2xl md:text-3xl font-semibold text-[var(--color-neon-blue)]">
        {title}
      </h2>

      {/* Subtitle */}
      <p className="mt-3 text-left text-gray-400 max-w-3xl">
        {subtitle}
      </p>

      {/* Videos: 1 col mobile / 2x2 desktop */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {videos.map((src, i) => (
          <figure
            key={i}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className={`relative w-full ${aspect}`}>
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src={src}
                controls
                playsInline
                preload="metadata"
              />
            </div>

            {/* overlay sutil */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0" />
          </figure>
        ))}
      </div>
    </section>
  );
}
