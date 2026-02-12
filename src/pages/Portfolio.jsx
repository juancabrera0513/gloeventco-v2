import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ImageCarousel3D from "../components/ImageCarousel3D";
import SplitNeonCarousel from "../components/SplitNeonCarousel";
import CubeCarousel from "../components/CubeCarousel";
import NeonTitle from "../components/NeonTitle";
import { BOOK_BASE } from "../lib/constants";

export default function Gallery() {
  useEffect(() => {
    document.title = "Gallery | Glo Event Co";
    const desc =
      "Event gallery featuring Silent Disco and Photo Booth highlights in St. Louis & surrounding areas.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  const PRICING = "https://glo-event-co.checkcherry.com";
  const QUOTE_RENTAL_BASE = `${PRICING}/reservation/package_group?service_id=9587`;

  const connectHref = "/contact";

  const isInternal = (href = "") => href.startsWith("/");

  const BtnLink = ({ href, className = "", children }) =>
    isInternal(href) ? (
      <Link to={href} className={className}>
        {children}
      </Link>
    ) : (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    );

  const glowBtnBase = `
    inline-flex items-center justify-center
    px-4 py-1.5 md:px-5 md:py-2
    text-base md:text-lg
    font-body font-semibold
    tracking-normal
    rounded-none
    bg-transparent
    border
    hover:bg-white/5
    transition-[box-shadow,background-color,transform] duration-200
    min-h-[44px]
    text-center
    whitespace-normal
    break-words
  `;

  const glowBtnMint =
    glowBtnBase +
    `
    !text-[#23ff11]
    !border-[#23ff11]
    [box-shadow:0_0_12px_rgba(35,255,17,.35)]
    hover:[box-shadow:0_0_18px_rgba(35,255,17,.55)]
  `;

  const glowBtnPink =
    glowBtnBase +
    `
    !text-[#ff4567]
    !border-[#ff4567]
    [box-shadow:0_0_12px_rgba(255,69,103,.35)]
    hover:[box-shadow:0_0_18px_rgba(255,69,103,.55)]
  `;

  const sdPhotos = Array.from({ length: 50 }).map(
    (_, i) =>
      `/carousel/silent-disco/photos/sd-photo-${String(i + 1).padStart(
        3,
        "0"
      )}.jpg`
  );

  const sdVideos = Array.from({ length: 12 }).map(
    (_, i) =>
      `/carousel/silent-disco/videos/sd-video-${String(i + 1).padStart(
        3,
        "0"
      )}.mp4`
  );

  const pbPhotos = Array.from({ length: 24 }).map(
    (_, i) =>
      `/carousel/photo-booth/photos/pb-photo-${String(i + 1).padStart(
        3,
        "0"
      )}.jpg`
  );

  const pbGifs = Array.from({ length: 18 }).map(
    (_, i) =>
      `/carousel/photo-booth/gifs/pb-gif-${String(i + 1).padStart(3, "0")}.gif`
  );

  const pbBooms = Array.from({ length: 15 }).map(
    (_, i) =>
      `/carousel/photo-booth/boomerangs/pb-boomerang-${String(i + 1).padStart(
        3,
        "0"
      )}.mp4`
  );

  
  const splitSlides = Array.from({ length: 10 }).map((_, idx) => {
    const n = idx + 1;
    return {
      leftSrc: `/images/split/left-${n}.png`,
      rightSrc: `/images/split/right-${n}.png`,
      bg: ["#27323c", "#19304a", "#2b2533", "#312f2d", "#0f2230"][idx % 5],
      alt: `Silent Disco Slide ${String(n).padStart(2, "0")}`,
      leftPos: "center",
      rightPos: "center",
    };
  });

  const cubeImages20 = Array.from({ length: 20 }).map(
    (_, i) => `/images/cube/${String(i + 1).padStart(3, "0")}.png`
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <header className="max-w-5xl mx-auto text-center">
        <NeonTitle title="Real Events. Raw Clips. Glo’n Moments." />
        <p className="mt-3 text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
          Browse Silent Disco photos and raw clips, plus Selfie Station photos,
          GIFs, and boomerangs, all in one place.
        </p>
      </header>

      <section className="mt-20 border-b border-white/5 pb-20">
        <p className="text-xs tracking-[0.3em] text-gray-400 text-center">
          SILENT DISCO
        </p>

        <h2 className="mt-3 text-center text-2xl md:text-3xl font-semibold text-white/90">
          Silent Disco in Action
        </h2>

        <p className="mt-3 text-center text-gray-400 max-w-4xl mx-auto">
          See the energy for yourself. Silent Disco keeps the venue quiet and the
          dance floor full, with guests choosing their own channel and singing
          along all night.
        </p>

        <div className="mt-14 text-center">
          <h3 className="text-xl font-semibold text-white/90">
            Silent Disco Event Photos
          </h3>
          <p className="mt-1 text-gray-300">Real events, real reactions.</p>
          <p className="mt-1 text-gray-400 text-sm max-w-3xl mx-auto">
            From schools to corporate to weddings, these are the snapshots that
            show the vibe.
          </p>

          <div className="mt-10 -mx-4 hidden md:flex justify-center">
            <div className="w-full">
              <section className="split-carousel-wrapper">
                <SplitNeonCarousel slides={splitSlides} />
              </section>
            </div>
          </div>

          <div className="mt-10 flex md:hidden justify-center">
            <CubeCarousel
              images={cubeImages20}
              size={320}
              delay={2400}
              speedMs={850}
              showButtons={true}
              pauseOnHover={false}
            />
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold text-white/90">Raw Videos</h3>
          <p className="mt-1 text-gray-300">
            Raw clips so you can see what it feels like in the moment.
          </p>
          <p className="mt-1 text-gray-400 text-sm max-w-3xl mx-auto">
            These quick clips capture the channel switches, the sing alongs, and
            the crowd reactions in real time.
          </p>

          <div className="mt-10 flex justify-center">
            <ImageCarousel3D items={sdVideos} ariaLabel="Silent Disco Videos" />
          </div>
        </div>
      </section>

  
      <section className="mt-20 border-b border-white/5 pb-20">
        <p className="text-xs tracking-[0.3em] text-gray-400 text-center">
          SELFIE STATION
        </p>

        <h2 className="mt-3 text-center text-2xl md:text-3xl font-semibold text-white/90">
          Selfie Station Highlights
        </h2>

        <p className="mt-3 text-center text-gray-400 max-w-4xl mx-auto">
          Fully digital, instantly shareable, and designed to match your theme.
          Custom branded overlays, digital backdrops, and photo moments your
          guests will not stop posting.
        </p>

        <div className="mt-14 text-center">
          <h3 className="text-xl font-semibold text-white/90">Photos</h3>
          <p className="mt-1 text-gray-300">Classic shots, modern booth.</p>
          <p className="mt-1 text-gray-400 text-sm max-w-3xl mx-auto">
            Includes 4x6 digital downloads with custom branded overlays.
          </p>

          <div className="mt-10 flex justify-center">
            <ImageCarousel3D items={pbPhotos} ariaLabel="Selfie Station Photos" />
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold text-white/90">GIFs</h3>
          <p className="mt-1 text-gray-300">
            A little motion, a lot of personality.
          </p>
          <p className="mt-1 text-gray-400 text-sm max-w-3xl mx-auto">
            Quick loops that capture the fun in a way photos cannot.
          </p>

          <div className="mt-10 flex justify-center">
            <ImageCarousel3D items={pbGifs} ariaLabel="Selfie Station GIFs" />
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold text-white/90">Boomerangs</h3>
          <p className="mt-1 text-gray-300">The moment, on repeat.</p>
          <p className="mt-1 text-gray-400 text-sm max-w-3xl mx-auto">
            Perfect for toasts, laughs, dance moves and the moments that deserve
            a replay.
          </p>

          <div className="mt-10 flex justify-center">
            <ImageCarousel3D
              items={pbBooms}
              ariaLabel="Selfie Station Boomerangs"
            />
          </div>
        </div>
      </section>

    
      <section className="mt-24">
        <div className="glass rounded-2xl p-8 md:p-10 border border-white/5 text-center max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-white/90">
            Let’s Elevate Your Event
          </h2>

          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            See pricing, then book online in minutes, or connect with our team
            for help choosing the best fit.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <BtnLink href={QUOTE_RENTAL_BASE} className={glowBtnMint}>
              See Pricing + Book Online
            </BtnLink>
            <BtnLink href={connectHref} className={glowBtnPink}>
              Connect with Our Team
            </BtnLink>
          </div>

          <p className="mt-5 text-sm text-gray-400 max-w-4xl mx-auto">
            Most photos and videos are from real events across the St. Louis
            area. Want to see examples similar to your event type? Connect with
            our team and we will send recommendations.
          </p>
        </div>
      </section>
    </div>
  );
}
