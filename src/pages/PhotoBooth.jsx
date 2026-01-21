// src/pages/PhotoBooth.jsx
import { Link } from "react-router-dom";
import GlowCard from "../components/GlowCard";
import NeonTitle from "../components/NeonTitle";
import { BOOK_BASE, SFA, DROP_OFF, PB_ATTENDANCE } from "../lib/constants";

const isVideoSrc = (src = "") =>
  typeof src === "string" && /\.(mp4|webm|mov)(\?.*)?$/i.test(src || "");

function Media({
  src,
  alt = "",
  className = "",
  object = "object-contain", // "object-contain" | "object-cover"
  autoPlay = true,
}) {
  const vid = isVideoSrc(src);

  if (vid) {
    return (
      <video
        className={className + " " + object}
        src={src}
        muted
        loop
        playsInline
        autoPlay={autoPlay}
        preload="metadata"
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className + " " + object}
      loading="lazy"
      decoding="async"
      draggable={false}
    />
  );
}

export default function PhotoBooth() {
  const PRICING = "/pricing";
  const CONNECT = "/contact";

  // Pricing anchors (ajusta si tus ids son diferentes)
  const QUOTE_HUB = "/pricing";
  const QUOTE_BOOTH_DROPOFF = `${QUOTE_HUB}#photo-booth-dropoff`;
  const QUOTE_BOOTH_FULL = `${QUOTE_HUB}#photo-booth-full-service`;

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

  // =========================
  // Buttons (mismo sistema)
  // =========================
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

  // Typography (igual a Services)
  const sectionTitle =
    "text-left text-2xl md:text-3xl font-semibold text-[var(--color-neon-blue)]";
  const sectionSub = "mt-3 text-left text-gray-400 max-w-3xl";

  // =========================
  // WHAT IT IS (RIGHT SIDE) video vertical
  // =========================
  const whatIsVideoSrc = "/videos/photo-booth-action-vertical.mp4"; // <-- vertical video
  const whatIsVideoPoster = "/images/photo-booth-action-poster.jpg"; // optional

  // =========================
  // WHAT'S INCLUDED (3 visibles + 3 hover)
  // front = visible, back = hover
  // (pueden ser .jpg o .mp4)
  // =========================
  const includedMedia = [
    {
      front: "/images/whatsIncluded/overlay-sample-hover.jpg",
      back: "/images/whatsIncluded/overlay-sample.jpg", // <-- cambia a tu media (img o video)
      alt: "Overlay example",
    },
    {
      front: "/images/whatsIncluded/backdrop-sample-hover.jpg",
      back: "/images/whatsIncluded/backdrop-sample.jpg", // <-- cambia a tu media (img o video)
      alt: "Digital backdrop example",
    },
    {
      front: "/images/whatsIncluded/gif-moment-hover.mp4",
      back: "/images/whatsIncluded/gif-moment-hover.mp4", // <-- cambia a tu media (img o video)
      alt: "GIF or boomerang moment",
    },
  ];

  

  const cardImgDropoff = "/images/DropOffDigitalBooth.jpg";
  const cardImgFull = "/images/photo-booth-attendant.jpg";

  const brandOverlayImg = "/images/branding-overlay.jpg";
  const brandBackdropImg = "/images/branding-backdrop.jpg";

  // =========================
  // Great for
  // =========================
  const greatFor = [
    {
      title: "Weddings",
      text: "Keeps guests engaged with shareable moments and a polished setup.",
    },
    {
      title: "Corporate Events",
      text: "Branded overlays + gallery links for instant team content.",
    },
    {
      title: "Schools + PTO",
      text: "High participation, easy flow, and tons of fun group shots.",
    },
    {
      title: "Fundraisers",
      text: "Sponsor logos + shareable moments to boost visibility.",
    },
    {
      title: "Birthdays",
      text: "GIFs, boomerangs, and instant sharing make it a highlight.",
    },
    {
      title: "Churches + Youth",
      text: "Venue friendly, easy to run, and creates keepsakes.",
    },
  ];

  // =========================
  // FAQ (accordion)
  // =========================
  const faqs = [
    {
      q: "What is included with the Digital Photo Booth",
      a: "A fully digital booth with a shareable gallery. We include custom branded overlays, digital backdrops to match your theme, and optional AI face swapping.",
    },
    {
      q: "Is the Photo Booth fully digital",
      a: "Yes. Guests receive their photos instantly through sharing, and you get access to the full gallery after your event.",
    },
    {
      q: "Can the Photo Booth be booked as a stand alone rental",
      a: "Yes. You can book it as a drop off rental or as a fully supported option with an attendant.",
    },
    {
      q: "Can we customize overlays and backdrops",
      a: "Yes. We can match your event theme, colors, and branding with a custom overlay and digital backdrops.",
    },
    {
      q: "How do we get pricing and book",
      a: "Click See Pricing + Book Online to view options. If you want help deciding, connect with our team and we’ll recommend the best fit.",
    },
  ];

  const faqCardBase =
    "glass rounded-2xl neon-border overflow-hidden bg-white/5 border border-white/10";

  const renderAnswer = (text) =>
    String(text)
      .split(/\n\s*\n/)
      .map((p, i) => (
        <p key={i} className="text-gray-300 leading-relaxed">
          {p}
        </p>
      ));

  const slug = (s) =>
    s
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  // =========================
  // Mini gallery (algunos pueden ser video)
  // =========================
  const galleryItems = [
    "/images/galleryHighlights/booth-g-1.jpg",
    "/images/galleryHighlights/booth-g-2.jpg",
    "/images/galleryHighlights/booth-g-3.jpg",
    "/images/galleryHighlights/booth-g-4.jpg",
    "/images/galleryHighlights/booth-g-5.jpg",
    "/images/galleryHighlights/booth-g-6.jpg",
    "/images/galleryHighlights/booth-g-7.mp4",
    "/images/galleryHighlights/booth-g-8.mp4",
    "/images/galleryHighlights/booth-g-9.mp4",
    "/images/galleryHighlights/booth-g-10.mp4",
    "/images/galleryHighlights/booth-g-11.mp4",
    "/images/galleryHighlights/booth-g-12.mp4",
  ];

  const connectHref = "/contact";

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <title>Digital Photo Booth Rental | Glo Event Co</title>
      <meta
        name="description"
        content="Digital Photo Booth rentals in St. Louis. Fully digital booth with shareable gallery, custom branded overlays, digital backdrops, and optional AI face swapping."
      />

      {/* =========================
          1) HERO
         ========================= */}
      <header className="max-w-5xl mx-auto">
        <NeonTitle
          title="Digital Photo Booth Rental"
          id="photo-booth-heading"
          className="uppercase"
        />
        <p className="mt-3 text-gray-400 text-center text-base md:text-lg">
          A modern, fully digital photo booth experience with instant sharing,
          custom branded overlays, digital backdrops, and optional AI face
          swapping.
        </p>
      </header>

      {/* =========================
          2) WHAT IT IS
         ========================= */}
      <section className="mt-20">
        <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-8 items-stretch">
          {/* LEFT */}
          <div className="flex flex-col">
            <h2 className={sectionTitle}>What is a Digital Photo Booth</h2>

            <p className={sectionSub}>
              A Digital Photo Booth is a selfie station style photo booth that
              runs completely digitally. Guests take photos, GIFs, and
              boomerangs, then share instantly. After your event, you have
              access to a complete, shareable gallery—plus branding options that
              make it feel premium and personalized.
            </p>

            {/* ✅ sin flex-1 para quitar el “gris/vacio” abajo */}
            <div className="mt-6 glass rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
              <ul className="list-disc pl-6 text-gray-300 space-y-2 marker:text-[var(--color-neon-blue)]">
                <li>Fully digital experience with instant sharing</li>
                <li>Shareable gallery for you and your guests</li>
                <li>Custom overlays + digital backdrops</li>
                <li>Optional AI face swapping enhancements</li>
              </ul>

              {/* ✅ botones SIEMPRE uno arriba del otro (desktop + mobile) */}
              <div className="mt-10 flex flex-col gap-4 items-center md:items-start">
                <BtnLink href={SFA} className={glowBtnPink}>
                  See Pricing + Book Online
                </BtnLink>
                <BtnLink href={connectHref} className={glowBtnMint}>
                  Connect with Our Team
                </BtnLink>
              </div>
            </div>
          </div>

          {/* RIGHT (VIDEO vertical) */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[320px]">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-transparent aspect-[9/16]">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={whatIsVideoSrc}
                  poster={whatIsVideoPoster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          3) WHAT'S INCLUDED
         ========================= */}
      <section className="mt-24">
        <h2 className={sectionTitle}>What’s Included</h2>
        <p className={sectionSub}>
          Everything you need for a smooth, premium booth experience—plus
          branding options that look amazing in the final media.
        </p>

        <div className="mt-10 glass rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <ul className="list-disc pl-6 text-gray-300 space-y-2 marker:text-[var(--color-neon-blue)]">
            <li>Photos, GIFs, and boomerangs</li>
            <li>Instant sharing + post event gallery</li>
            <li>Custom branded overlay (name/date/logo available)</li>
            <li>Digital backdrops to match your theme</li>
            <li>
              Optional add ons: data capture, email collection, AI face swapping,
              and more
            </li>
          </ul>

          {/* ✅ 3 visibles + hover swap (cada una cambia individual) */}
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {includedMedia.map((it, idx) => (
              <figure
                key={`${it.front}-${idx}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                {/* frame */}
                <div className="relative w-full aspect-[4/3] bg-black/40">
                  {/* FRONT */}
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                    <Media
                      src={it.front}
                      alt={it.alt}
                      className="absolute inset-0 w-full h-full"
                      object="object-contain"
                      autoPlay
                    />
                  </div>

                  {/* BACK (HOVER) */}
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <Media
                      src={it.back}
                      alt={it.alt}
                      className="absolute inset-0 w-full h-full"
                      object="object-contain"
                      autoPlay
                    />
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          4) TWO WAYS TO BOOK
         ========================= */}
      <section className="mt-24">
        <h2 className={sectionTitle}>Two Ways to Book</h2>
        <p className={sectionSub}>
          Choose a simple drop off option, or go full service with an attendant
          to guide guests and keep the flow smooth.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12 items-stretch">
          {/* Drop Off */}
          <GlowCard
            title={
              <span className="text-center block">
                Drop Off Digital Photo Booth
              </span>
            }
            variant="mint"
          >
            <div className="grid h-full grid-rows-[auto_1fr_auto]">
              <div className="-mx-6 -mt-6 mb-5 overflow-hidden rounded-t-2xl relative">
                <img
                  src={cardImgDropoff}
                  alt="Drop off digital photo booth setup"
                  className="w-full h-56 md:h-64 object-cover"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/55 to-transparent" />
              </div>

              <div className="min-h-0">
                <p className="text-gray-300">
                  Delivered ready to use with instant sharing and custom branding
                  options. We set it up and show you exactly how it works.
                </p>

                <ul className="!mt-4 !mb-0 list-disc pl-6 text-gray-300 space-y-2 marker:text-[#23ff11]">
                  <li>We deliver, set it up, and show you how to use it</li>
                  <li>Custom branded overlays included</li>
                  <li>4x6 digital downloads, GIFs, and boomerangs included</li>
                  <li>Digital backdrops to match any theme</li>
                  <li>Digital props included</li>
                  <li>Optional enhancements available upon request</li>
                </ul>
              </div>

              <div className="pt-6">
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <BtnLink href={DROP_OFF} className={glowBtnPink}>
                    See Pricing + Book Online
                  </BtnLink>
                  <BtnLink href={connectHref} className={glowBtnMint}>
                    Connect with Our Team
                  </BtnLink>
                </div>
              </div>
            </div>
          </GlowCard>

          {/* Full Service */}
          <GlowCard
            title={
              <span className="text-center block">
                Full Service Photo Booth With Attendant
              </span>
            }
            variant="pink"
          >
            <div className="grid h-full grid-rows-[auto_1fr_auto]">
              <div className="-mx-6 -mt-6 mb-5 overflow-hidden rounded-t-2xl relative">
                <img
                  src={cardImgFull}
                  alt="Photo booth attendant helping guests"
                  className="w-full h-56 md:h-64 object-cover"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/55 to-transparent" />
              </div>

              <div className="min-h-0">
                <p className="text-gray-300">
                  A fully supported photo booth experience. We set it up and an
                  attendant guides guests during your event for a smooth flow
                  and premium feel.
                </p>

                <ul className="!mt-4 !mb-0 list-disc pl-6 text-gray-300 space-y-2 marker:text-[#ff4567]">
                  <li>Delivery + setup included</li>
                  <li>Attendant guides guests and manages the flow</li>
                  <li>Custom branded overlays included</li>
                  <li>Photos, GIFs, and boomerangs included</li>
                  <li>Digital backdrops + props included</li>
                  <li>Optional enhancements available upon request</li>
                </ul>
              </div>

              <div className="pt-6">
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <BtnLink href={PB_ATTENDANCE} className={glowBtnPink}>
                    See Pricing + Book Online
                  </BtnLink>
                  <BtnLink href={connectHref} className={glowBtnMint}>
                    Connect with Our Team
                  </BtnLink>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* =========================
          Gallery Highlights
         ========================= */}
      <section className="mt-24">
        <h2 className={sectionTitle}>Gallery Highlights</h2>
        <p className={sectionSub}>
          A quick look at recent booth moments and branding examples.
        </p>

        {/* ✅ cajas más GRANDES y más VERTICALES para que quepan retratos (como tu screenshot) */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.slice(0, 12).map((src, i) => (
            <figure
              key={`${src}-${i}`}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative w-full aspect-[4/5] md:aspect-[3/4] bg-black">
                <Media
                  src={src}
                  alt="Photo booth highlight"
                  className="absolute inset-0 w-full h-full"
                  object="object-contain"
                  autoPlay
                />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0" />
            </figure>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:justify-start">
          {/* <BtnLink href="/portfolio" className={glowBtnPink}>
            View Full Gallery
          </BtnLink> */}
        </div>
      </section>

      {/* =========================
          5) GREAT FOR
         ========================= */}
      <section className="mt-24">
        <h2 className={sectionTitle}>Great For</h2>
        <p className={sectionSub}>
          Weddings, corporate events, schools, fundraisers, birthdays, and
          community events.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {greatFor.map((t, idx) => (
            <GlowCard
              key={t.title}
              title={<span className="text-center block">{t.title}</span>}
              variant={idx % 3 === 0 ? "mint" : idx % 3 === 1 ? "blue" : "pink"}
            >
              <div className="w-full">
                <p className="text-gray-300">{t.text}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>


      {/* =========================
          7) FAQ
         ========================= */}
      <section className="mt-24" aria-labelledby="photo-booth-faqs">
        <h2 id="photo-booth-faqs" className={sectionTitle}>
          Photo Booth FAQs
        </h2>
        <p className={sectionSub}>
          Quick answers to help you choose the right option.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {faqs.map((f, i) => {
            const id = `pb-faq-${slug(f.q)}`;
            const hoverClass =
              i % 2 === 0 ? "glo-hover-green" : "glo-hover-pink";

            return (
              <div key={id} className={`${faqCardBase} ${hoverClass}`}>
                <details className="group open:rounded-b-none">
                  <summary className="flex items-center justify-between cursor-pointer list-none px-5 py-4">
                    <span className="font-semibold pr-4 text-gray-100">
                      {f.q}
                    </span>

                    <span
                      className="ml-auto inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 neon-border transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 5v14M5 12h14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="px-5 pb-5 pt-1 space-y-3">
                    {renderAnswer(f.a)}
                  </div>
                </details>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================
          8) FINAL CTA
         ========================= */}
      <section className="mt-24">
        <div
          className="
            rounded-2xl px-6 py-10 text-white
            bg-gradient-to-br from-[#0b0b12] via-[#0a1020] to-[#06121e]
            shadow-[0_0_36px_rgba(0,131,253,.45)] glo-hover
            text-center
          "
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white/90">
            Ready to bring the Glo to your event
          </h2>
          <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
            See pricing and book online, or connect with our team if you want
            help choosing the best fit.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <BtnLink href={SFA} className={glowBtnPink}>
              See Pricing + Book Online
            </BtnLink>
            <BtnLink href={connectHref} className={glowBtnMint}>
              Connect with Our Team
            </BtnLink>
          </div>
        </div>
      </section>
    </div>
  );
}

