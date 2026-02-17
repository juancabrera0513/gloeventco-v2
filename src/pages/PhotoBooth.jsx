import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import GlowCard from "../components/GlowCard";
import NeonTitle from "../components/NeonTitle";
import GlowButton from "../components/GlowButton";
import { SFA, DROP_OFF, PB_ATTENDANCE, LINK_GloPopUpExperience, LINK_GloTransformationExperience, LINK_GloHostedExperience, LINK_GloBrandSpotlightExperience} from "../lib/constants";

const isVideoSrc = (src = "") =>
  typeof src === "string" && /\.(mp4|webm|mov)(\?.*)?$/i.test(src || "");

function Media({
  src,
  alt = "",
  className = "",
  object = "object-contain",
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
  const connectHref = "/contact";
  const isInternal = (href = "") => href.startsWith("/");

  const { hash } = useLocation();

  useEffect(() => {
    if (hash !== "#gallery") return;

    const targetId = "gallery";

    const tryScroll = () => {
      const el = document.getElementById(targetId);
      if (!el) return false;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return true;
    };

    if (tryScroll()) return;

    let tries = 0;
    const maxTries = 20;
    const t = setInterval(() => {
      tries += 1;
      if (tryScroll() || tries >= maxTries) clearInterval(t);
    }, 50);

    return () => clearInterval(t);
  }, [hash]);

  const ActionBtn = ({ href, variant, children, className = "" }) => {
    const btnClass =
      (className ? className + " " : "") +
      "w-full sm:w-auto justify-center mx-auto";

    if (isInternal(href)) {
      return (
        <Link to={href} className="inline-flex justify-center">
          <GlowButton
            appearance="outline"
            variant={variant}
            size="lg"
            className={btnClass}
          >
            {children}
          </GlowButton>
        </Link>
      );
    }

    return (
      <GlowButton
        href={href}
        external
        appearance="outline"
        variant={variant}
        size="lg"
        className={btnClass}
      >
        {children}
      </GlowButton>
    );
  };

  const sectionTitle =
    "text-left text-2xl md:text-3xl font-semibold text-[var(--color-neon-blue)]";
  const sectionSub = "mt-3 text-left text-gray-400 max-w-3xl";

  const whatIsVideoSrc = "/videos/photo-booth-action-vertical.mp4";
  const whatIsVideoPoster = "/images/photo-booth-action-poster.jpg";

  const includedMedia = [
    {
      front: "/images/whatsIncluded/overlay-sample-hover.jpg",
      back: "/images/whatsIncluded/overlay-sample.jpg",
      alt: "Custom branded overlay example",
    },
    {
      front: "/images/whatsIncluded/backdrop-sample-hover.jpg",
      back: "/images/whatsIncluded/backdrop-sample.jpg",
      alt: "Digital backdrop example",
    },
    {
      front: "/images/whatsIncluded/gif-moment-hover.mp4",
      back: "/images/whatsIncluded/gif-moment-hover.mp4",
      alt: "GIF or boomerang moment example",
    },
  ];

  const GloPopUpExperience = "/images/GloPopUpExperience.png";
  const GloTransformationExperience = "/images/GloTransformationExperience.png";
  const GloHostedExperience = "/images/GloHostedExperience.png";
  const GloBrandSpotlightExperience =
    "/images/GloBrandSpotlightExperience.png";

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

  const photoBoothServiceLD = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Digital Photo Booth Rental",
    alternateName: ["Selfie Station", "Photo Booth"],
    provider: {
      "@type": "LocalBusiness",
      name: "Glo Event Co",
      telephone: "314-282-7888",
      email: "info@gloeventco.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "11123 South Towne Sq. Suite B",
        addressLocality: "St. Louis",
        addressRegion: "MO",
        postalCode: "63123",
        addressCountry: "US",
      },
      url: "https://www.gloeventco.com/",
    },
    areaServed: { "@type": "Place", name: "St. Louis, MO" },
    keywords: [
      "digital photo booth",
      "photo booth rental",
      "selfie station",
      "photo booth St. Louis",
      "digital photo booth St. Louis",
      "AI face swapping photo booth",
    ],
    url: "https://www.gloeventco.com/services/photo-booth",
  };

  const photoBoothFaqLD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  useEffect(() => {
    const canonHref = "https://www.gloeventco.com/services/photo-booth";

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonHref);

    const ids = ["ld-pb-service", "ld-pb-faq"];
    ids.forEach((id) => {
      const existing = document.getElementById(id);
      if (existing) existing.remove();
    });

    const s1 = document.createElement("script");
    s1.id = ids[0];
    s1.type = "application/ld+json";
    s1.text = JSON.stringify(photoBoothServiceLD);
    document.head.appendChild(s1);

    const s2 = document.createElement("script");
    s2.id = ids[1];
    s2.type = "application/ld+json";
    s2.text = JSON.stringify(photoBoothFaqLD);
    document.head.appendChild(s2);

    return () => {
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
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

      <section className="mt-20">
        <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-8 items-stretch">
          <div className="flex flex-col">
            <h2 className={sectionTitle}>
              Turn your event into a share-worthy moment.{" "}
            </h2>

            <p className={sectionSub}>
              Photo booth experiences that light up the room, keep guests
              engaged, and make hosting feel effortless—from simple drop-off
              setups to fully hosted, fully branded activations.
            </p>
            <p>
              {" "}
              <br /> <strong>Perfect for:</strong> weddings… schools… corporate
              events… birthdays… fundraisers… grand openings <br />{" "}
            </p>

            <div className="mt-6 glass rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
              <ul className="list-disc pl-6 text-gray-300 space-y-2 marker:text-[var(--color-neon-blue)]">
                <li>Tap… snap… share in seconds (QR + text)</li>
                <li>Photos, GIFs, and boomerangs built in</li>
                <li>Clean, modern setup that fits your vibe</li>
                <li>Full event gallery delivered after the event</li>
                <li>
                  Optional upgrades: AI effects… custom overlays… backdrops…
                  premium props
                </li>
              </ul>

              <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3 items-center justify-center md:justify-start w-full">
                <ActionBtn href={SFA} variant="red">
                  See Pricing + Book Online
                </ActionBtn>
                <ActionBtn href={connectHref} variant="green">
                  Connect with Our Team
                </ActionBtn>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[270px]">
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

      <section className="mt-24">
        <h2 className={sectionTitle}>Make It Effortless. Make It Memorable.</h2>
        <p className={sectionSub}>
          Most people don’t need a photo booth… They need a way to:
        </p>

        <div className="mt-10 glass rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <ul className="list-disc pl-6 text-gray-300 space-y-2 marker:text-[var(--color-neon-blue)]">
            <li>Keep guests entertained without extra planning</li>
            <li>Create content worth sharing (not just random snapshots)</li>
            <li>Make the experience feel intentional and on-brand</li>
            <li>Avoid awkward lines, confusion, or equipment stress</li>
          </ul>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {includedMedia.map((it, idx) => (
              <figure
                key={`${it.front}-${idx}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <div className="relative w-full aspect-[4/3] bg-black/40">
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                    <Media
                      src={it.front}
                      alt={it.alt}
                      className="absolute inset-0 w-full h-full"
                      object="object-contain"
                      autoPlay
                    />
                  </div>

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

          <p>
            <br />
            That’s exactly what our packages are built for.
          </p>

          <p>
            <br />
            Whether you want something simple and shareable or fully hosted and
            fully branded, we make it easy to choose the right experience.
          </p>
        </div>
      </section>

      {/* ===================== PACKAGES (UPDATED: NO GlowCard) ===================== */}
      <section className="mt-24">
        <h2 className={sectionTitle}>Pick Your Level of Glo</h2>
        <p className={sectionSub}>
          From simple + shareable… to fully hosted… to fully branded brand
          activations.
        </p>

        <div className="mt-12 grid gap-8 max-w-6xl mx-auto">
          {/* ===================== CARD 1 (mint) ===================== */}
          <div
            className="
              group
              rounded-2xl border border-white/10
bg-[#0a0a0a]
              p-6 md:p-8 overflow-hidden
              transition-shadow
              glo-hover-mint glo-hover-green
            "
          >
            <h3
              className="
                text-[#23ff11] font-display text-xl md:text-2xl mb-4 text-left
                drop-shadow-[0_0_10px_rgba(35,255,17,0.35)]
                group-hover:drop-shadow-[0_0_16px_rgba(35,255,17,0.85)]
              "
            >
              Glo Pop Up Experience
            </h3>

            <div className="grid md:grid-cols-[360px_1fr] gap-6 md:gap-8 items-start">
              <div className="flex justify-start">
                <div className="mt-2 md:mt-6 w-full max-w-[360px]">
                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                    <img
                      src={GloPopUpExperience}
                      alt="Glo Pop Up Experience"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>

              <div className="text-gray-300 min-w-0">
                <h4 className="text-[#23ff11] font-bold text-lg md:text-xl leading-tight">
                  Simple… shareable… effortless
                </h4>

                <p className="mt-2 text-base leading-relaxed">
                  An easy photo booth experience for casual events, instant
                  sharing, and quick setup.
                </p>

                <p className="mt-3 text-base">
                  <span className="text-gray-100 font-semibold">Starting at:</span>{" "}
                  <span className="text-[#23ff11] font-bold">$495 for 3 hrs</span>
                </p>

                <p className="mt-4 text-[#23ff11] font-semibold">Includes:</p>

                <ul className="mt-2 list-disc pl-5 space-y-1.5 marker:text-[#23ff11] text-base">
                  <li>Drop off + pickup</li>
                  <li>Premium template overlay selection</li>
                  <li>4×6 photos, GIFs, and Boomerangs</li>
                  <li>Instant sharing via QR code + text</li>
                  <li>Download link to the full event photo + video gallery</li>
                </ul>

                <p className="mt-4 text-base">
                  <span className="text-[#23ff11] font-semibold">Best for:</span>{" "}
                  private parties… birthdays… grad parties… open houses… casual
                  gatherings
                </p>

                <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
                <ActionBtn href={LINK_GloPopUpExperience} variant="red" className="!w-auto">
                    Ready to Book
                  </ActionBtn>
                  <ActionBtn href={connectHref} variant="green" className="!w-auto">
                    Connect with Our Team
                  </ActionBtn>
                </div>
              </div>
            </div>
          </div>

          {/* ===================== CARD 2 (pink) ===================== */}
          <div
            className="
              group
              rounded-2xl border border-white/10
              bg-black
              p-6 md:p-8 overflow-hidden
              transition-shadow
              glo-hover-pink
            "
          >
           <h3
  className="
  
  text-[#ff4567] font-display text-xl md:text-2xl mb-4 text-left
  drop-shadow-[0_0_10px_rgba(255,69,103,0.35)]
  group-hover:drop-shadow-[0_0_16px_rgba(255,69,103,0.85)]
"
>
  Glo Transformation Experience
</h3>

            <div className="grid md:grid-cols-[360px_1fr] gap-6 md:gap-8 items-start">
              <div className="flex justify-start">
                <div className="mt-2 md:mt-6 w-full max-w-[360px]">
                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                    <img
                      src={GloTransformationExperience}
                      alt="Glo Transformation Experience"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>

              <div className="text-gray-300 min-w-0">
                <h4 className="text-[#ff4567] font-bold text-lg md:text-xl leading-tight">
                  AI effects… big reactions… unforgettable content
                </h4>

                <p className="mt-2 text-base leading-relaxed">
                  Guests transform with immersive AI effects that create instant
                  wow moments and highly shareable media.
                </p>

                <p className="mt-3 text-base">
                  <span className="text-gray-100 font-semibold">Starting at:</span>{" "}
                  <span className="text-[#ff4567] font-bold">$795 for 3 hrs</span>
                </p>

                <p className="mt-4 text-[#ff4567] font-semibold">Includes:</p>

                <ul className="mt-2 list-disc pl-5 space-y-1.5 marker:text-[#ff4567] text-base">
                  <li>Drop off + pickup</li>
                  <li>Choose 2–3 AI effects from our curated collection</li>
                  <li>Premium template overlay selection</li>
                  <li>4×6 photos, GIFs, and Boomerangs</li>
                  <li>Instant sharing via QR code + text</li>
                  <li>Download link to the full event photo + video gallery</li>
                </ul>

                <p className="mt-4 text-base">
                  <span className="text-[#ff4567] font-semibold">Best for:</span>{" "}
                  schools… fundraisers… themed parties… corporate events… large
                  groups
                </p>

                <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
                <ActionBtn href={LINK_GloTransformationExperience} variant="red" className="!w-auto">
                  Ready to Book
                  </ActionBtn>
                  <ActionBtn href={connectHref} variant="green" className="!w-auto">
                    Connect with Our Team
                  </ActionBtn>
                </div>
              </div>
            </div>
          </div>

          {/* ===================== CARD 3 (mint) ===================== */}
          <div
            className="
              group
              rounded-2xl border border-white/10
              bg-black
              p-6 md:p-8 overflow-hidden
              transition-shadow
              glo-hover-mint glo-hover-green
            "
          >
            <h3
              className="
                text-[#23ff11] font-display text-xl md:text-2xl mb-4 text-left
                drop-shadow-[0_0_10px_rgba(35,255,17,0.35)]
                group-hover:drop-shadow-[0_0_16px_rgba(35,255,17,0.85)]
              "
            >
              Glo Hosted Experience
            </h3>

            <div className="grid md:grid-cols-[360px_1fr] gap-6 md:gap-8 items-start">
              <div className="flex justify-start">
                <div className="mt-2 md:mt-6 w-full max-w-[360px]">
                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                    <img
                      src={GloHostedExperience}
                      alt="Glo Hosted Experience"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>

              <div className="text-gray-300 min-w-0">
                <h4 className="text-[#23ff11] font-bold text-lg md:text-xl leading-tight">
                  Premium setup… guided flow… zero stress
                </h4>

                <p className="mt-2 text-base leading-relaxed">
                  A fully hosted photo booth experience with hands-on support,
                  premium props, and a physical backdrop.
                </p>

                <p className="mt-3 text-base">
                  <span className="text-gray-100 font-semibold">Starting at:</span>{" "}
                  <span className="text-[#23ff11] font-bold">$995 for 3 hrs</span>
                </p>

                <p className="mt-4 text-[#23ff11] font-semibold">Includes:</p>

                <ul className="mt-2 list-disc pl-5 space-y-1.5 marker:text-[#23ff11] text-base">
                  <li>Onsite attendant</li>
                  <li>Drop off, setup, and breakdown</li>
                  <li>Choice of physical backdrop from our curated selection</li>
                  <li>Premium props</li>
                  <li>Custom event overlay</li>
                  <li>4×6 photos, GIFs, and Boomerangs</li>
                  <li>Instant sharing via QR code + text</li>
                  <li>Download link to the full event photo + video gallery</li>
                </ul>

                <p className="mt-4 text-base">
                  <span className="text-[#23ff11] font-semibold">Best for:</span>{" "}
                  weddings… receptions… ticketed events… corporate celebrations…
                  school dances
                </p>

                <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
                <ActionBtn href={LINK_GloHostedExperience} variant="red" className="!w-auto">
Ready to Book                  </ActionBtn>
                  <ActionBtn href={connectHref} variant="green" className="!w-auto">
                    Connect with Our Team
                  </ActionBtn>
                </div>
              </div>
            </div>
          </div>

          {/* ===================== CARD 4 (pink) ===================== */}
          <div
            className="
              group
              rounded-2xl border border-white/10
              bg-black
              p-6 md:p-8 overflow-hidden
              transition-shadow
              glo-hover-pink
            "
          >
            <h3
              className="
                text-[#ff4567] font-display text-xl md:text-2xl mb-4 text-left
                drop-shadow-[0_0_10px_rgba(255,69,103,0.35)]
                group-hover:drop-shadow-[0_0_16px_rgba(255,69,103,0.85)]
              "
            >
              Glo Brand Spotlight Experience
            </h3>

            <div className="grid md:grid-cols-[360px_1fr] gap-6 md:gap-8 items-start">
              <div className="flex justify-start">
                <div className="mt-2 md:mt-6 w-full max-w-[360px]">
                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                    <img
                      src={GloBrandSpotlightExperience}
                      alt="Glo Brand Spotlight Experience"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>

              <div className="text-gray-300 min-w-0">
                <h4 className="text-[#ff4567] font-bold text-lg md:text-xl leading-tight">
                  Fully branded… highly engaging… built for impact
                </h4>

                <p className="mt-2 text-base leading-relaxed">
                  A premium brand activation that turns your booth into a
                  branded guest journey with calls to action.
                </p>

                <p className="mt-3 text-base">
                  <span className="text-gray-100 font-semibold">Starting at:</span>{" "}
                  <span className="text-[#ff4567] font-bold">$1,495 for 4 hrs</span>
                </p>

                <p className="mt-4 text-[#ff4567] font-semibold">Includes:</p>

                <ul className="mt-2 list-disc pl-5 space-y-1.5 marker:text-[#ff4567] text-base">
                  <li>Onsite attendant</li>
                  <li>Drop off, setup, and breakdown</li>
                  <li>Custom AI prompt included</li>
                  <li>Custom overlay design</li>
                  <li>Custom start screen + experience screen</li>
                  <li>Branded buttons + on-screen calls to action</li>
                  <li>4×6 photos, GIFs, and Boomerangs</li>
                  <li>Instant sharing via QR code + text</li>
                  <li>Download link to the full event photo + video gallery</li>
                </ul>

                <p className="mt-4 text-base">
                  <span className="text-[#ff4567] font-semibold">Best for:</span>{" "}
                  conferences… chambers… networking… grand openings… product
                  launches
                </p>

                <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
                <ActionBtn href={LINK_GloBrandSpotlightExperience} variant="red" className="!w-auto">
                    Ready to Book
                  </ActionBtn>
                  <ActionBtn href={connectHref} variant="green" className="!w-auto">
                    Connect with Our Team
                  </ActionBtn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24" id="gallery">
        <h2 className={sectionTitle}>Gallery Highlights</h2>
        <p className={sectionSub}>
          A quick look at recent booth moments and branding examples.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.slice(0, 12).map((src, i) => (
            <figure
              key={`${src}-${i}`}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative w-full aspect-[4/5] md:aspect-[3/4] bg-black">
                <Media
                  src={src}
                  alt="Digital photo booth highlight"
                  className="absolute inset-0 w-full h-full"
                  object="object-contain"
                  autoPlay
                />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0" />
            </figure>
          ))}
        </div>
      </section>

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
            const hoverClass = i % 2 === 0 ? "glo-hover-green" : "glo-hover-pink";

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
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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

          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <ActionBtn href={SFA} variant="red">
              See Pricing + Book Online
            </ActionBtn>
            <ActionBtn href={connectHref} variant="green">
              Connect with Our Team
            </ActionBtn>
          </div>
        </div>
      </section>
    </div>
  );
}
