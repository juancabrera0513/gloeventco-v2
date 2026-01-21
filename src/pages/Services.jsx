// src/pages/Services.jsx
import { Link } from "react-router-dom";
import GlowCard from "../components/GlowCard";
import NeonTitle from "../components/NeonTitle";
import ServicesExtras from "../components/ServicesExtras";
import { DJAT, SDHR, SFA } from "../lib/constants";

export default function Services() {
  const CONNECT_HREF = "/contact";

  const QUOTE_HUB = "/pricing";
  const QUOTE_SILENT_RENTALS = `${QUOTE_HUB}#silent-disco-rentals`;
  const QUOTE_SILENT_DJ = `${QUOTE_HUB}#silent-disco-dj-experience`;
  const QUOTE_BOOTH_DROPOFF = `${QUOTE_HUB}#photo-booth-dropoff`;
  const QUOTE_BOOTH_FULL = `${QUOTE_HUB}#photo-booth-full-service`;

  const LEARN_SILENT_RENTALS = "/services/silent-disco";
  const LEARN_SILENT_DJ = "/services/silent-disco";
  const LEARN_BOOTH_DROPOFF = "/services/photo-booth";
  const LEARN_BOOTH_FULL = "/services/photo-booth";
  

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

  // Section headings
  const sectionTitle =
    "text-left text-2xl md:text-3xl font-semibold text-[var(--color-neon-blue)]";
  const sectionSub = "mt-3 text-left text-gray-400 max-w-3xl";

  const cardTitleCenter = "text-center";

  // Button base (keep original visual sizing)
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

  // Keep buttons same width behavior as before (no stretching)
  const actionRowCenter = "mt-5 flex flex-col sm:flex-row gap-3 justify-center";

      const CardImage = ({ src, alt }) => (
        <div className="-mx-6 -mt-6 mb-5 overflow-hidden rounded-t-2xl relative">
          <img
            src={src}
            alt={alt}
            className="w-full h-56 md:h-64 object-cover"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/55 to-transparent" />
        </div>
      );

  /**
   * ✅ FIX:
   * Use a 2-row grid inside each card:
   * - Row 1 (content) takes remaining height
   * - Row 2 (footer) stays aligned across cards
   */
  const cardLayout = "grid h-full grid-rows-[1fr_auto]";
  const contentArea = "min-h-0";
  const footerArea = "pt-6";

  // Description clamp
  const descClamp =
    "!m-0 text-gray-300 min-h-[72px] md:min-h-[80px] " +
    "overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]";

  // Bullet block
  const bulletsBase =
    "!mt-4 !mb-0 list-disc pl-6 text-gray-300 space-y-2 " +
    "min-h-[260px] md:min-h-[284px]";

  const priceRow = "!m-0 text-sm text-white/80 min-h-[24px]";

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <title>Services | Glo Event Co</title>
      <meta
        name="description"
        content="Two crowd favorites. Choose Silent Disco or Digital Photo Booth, then pick drop off or full service."
      />

      {/* ✅ PAGE HEADING (same as HowItWorks / OurWork) */}
      <header className="max-w-5xl mx-auto">
        {/* (optional) kicker like other sections, leave empty for now */}
        {/* <div className="text-center text-xs tracking-widest text-gray-400">KICKER</div> */}

        <NeonTitle title="Services" id="services-heading" className="uppercase" />

        <p className="mt-3 text-gray-400 text-center text-base md:text-lg">
          Two crowd favorites. Choose Silent Disco or Digital Photo Booth, then pick
          drop off or full service.
        </p>
      </header>

      {/* Silent Disco */}
      <section className="mt-20">
        <h2 className={sectionTitle}>Silent Disco</h2>
        <p className={sectionSub}>
          Pick DIY rentals with local support, or go full service with a DJ and
          attendants.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12 items-stretch">
          {/* MINT card */}
          <GlowCard
            title={
              <span className={cardTitleCenter}>
                Silent Disco Headphone Rentals
              </span>
            }
            variant="mint"
          >
            <div className={cardLayout}>
              <div className={contentArea}>
                <CardImage
                  src="/images/silent-disco-headphones-st-louis.webp"
                  alt="Silent Disco Headphone Rentals"
                />

                <p className={descClamp}>
                  DIY friendly headphone rentals with clear instructions, local
                  support when you need it, and local pick up or delivery
                  options.
                </p>

                <ul className={`${bulletsBase} marker:text-[#23ff11]`}>
                  <li>24 hour rental includes headphones + 3 transmitters</li>
                  <li>
                    Guests choose their channel and enjoy the music you provide
                  </li>
                  <li>Pick up + return locally, or opt for delivery</li>
                  <li>Simple setup instructions included</li>
                  <li>Local support available if you need help</li>
                  <li className="opacity-0 select-none">Spacer</li>
                </ul>
              </div>

              <div className={footerArea}>
                <p className={priceRow}>
                  <span className="text-white/60">Starting at:</span>{" "}
                  <strong className="text-[#23ff11]">From $5 per headphone</strong>
                </p>

                <div className={actionRowCenter}>
                  <BtnLink href={LEARN_SILENT_RENTALS} className={glowBtnMint}>
                    Learn More
                  </BtnLink>
                  <BtnLink href={SDHR} className={glowBtnMint}>
                    See Pricing + Book Online
                  </BtnLink>
                </div>
              </div>
            </div>
          </GlowCard>

          {/* PINK card */}
          <GlowCard
            title={
              <span className={cardTitleCenter}>
                Silent Disco DJ Experience
              </span>
            }
            variant="pink"
          >
            <div className={cardLayout}>
              <div className={contentArea}>
                <CardImage
                  src="/images/dj-experience.jpg"
                  alt="Silent Disco DJ Experience"
                />

                <p className={descClamp}>
                  Full service silent disco with a DJ and attendants. We manage
                  setup, music flow, and guest support from start to finish.
                </p>

                <ul className={`${bulletsBase} marker:text-[#ff4567]`}>
                  <li>3 channel LED wireless headphones included</li>
                  <li>
                    Choose 1, 2, or 3 DJs playing your custom song list plus
                    guest requests
                  </li>
                  <li>
                    Any channel not hosted by a DJ will feature a playlist in
                    the genre of your choice
                  </li>
                  <li>
                    Includes delivery, on site attendants, event management
                    during your event, and clean up
                  </li>
                  <li>Ideal for large and high energy events</li>
                  <li className="opacity-0 select-none">Spacer</li>
                </ul>
              </div>

              <div className={footerArea}>
                <p className={priceRow}>
                  <span className="text-white/60">Starting at:</span>{" "}
                  <strong className="text-[#ff4567]">
                    From $8.15 per headphone
                  </strong>
                </p>

                <div className={actionRowCenter}>
                  <BtnLink href={LEARN_SILENT_DJ} className={glowBtnPink}>
                    Learn More
                  </BtnLink>
                  <BtnLink href={DJAT} className={glowBtnPink}>
                    See Pricing + Book Online
                  </BtnLink>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>

        <p className="mt-8 text-sm text-center text-gray-400">
          Digital Photo Booth can be added to Silent Disco Rentals or the Silent
          Disco DJ Experience.
        </p>
      </section>

      {/* Photo Booth */}
      <section className="mt-24">
        <h2 className={sectionTitle}>Digital Photo Booth Rental</h2>
        <p className={sectionSub}>
          A modern selfie station style photo booth that is fully digital with
          instant sharing, custom branded overlays, digital backdrops, and
          optional AI face swapping.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12 items-stretch">
          {/* GREEN */}
          <GlowCard title="Drop Off Digital Photo Booth" variant="mint">
            <div className={cardLayout}>
              <div className={contentArea}>
                <CardImage
                  src="/images/DropOffDigitalBooth.jpg"
                  alt="Drop Off Digital Photo Booth"
                />

                <p className={descClamp}>
                  A stand alone digital photo booth delivered ready to use with
                  instant sharing and custom branding options. We set it up and
                  show you exactly how it works.
                </p>

                <ul className={`${bulletsBase} marker:text-[#23ff11]`}>
                  <li>We deliver, set it up, and show you how to use it</li>
                  <li>Custom branded overlays included</li>
                  <li>4x6 digital downloads, GIFs, and boomerangs included</li>
                  <li>Digital backdrops to match any theme</li>
                  <li>Digital props included</li>
                  <li>
                    Optional enhancements available upon request including
                    physical props, physical backdrops, data and email
                    collection, AI face swapping, and more
                  </li>
                </ul>
              </div>

              <div className={footerArea}>
                <p className={priceRow}>
                  <span className="text-white/60">Starting at:</span>{" "}
                  <strong className="text-[#23ff11]">$595 for 10 hours</strong>
                </p>

                <div className={actionRowCenter}>
                  <BtnLink href={LEARN_BOOTH_DROPOFF} className={glowBtnMint}>
                    Learn More
                  </BtnLink>
                  <BtnLink href={SFA} className={glowBtnMint}>
                    See Pricing + Book Online
                  </BtnLink>
                </div>
              </div>
            </div>
          </GlowCard>

          {/* RED */}
          <GlowCard title="Full Service Photo Booth With Attendant" variant="pink">
            <div className={cardLayout}>
              <div className={contentArea}>
                <CardImage
                  src="/images/photo-booth-attendant.jpg" 
                  alt="Full Service Photo Booth With Attendant"
                />

                <p className={descClamp}>
                  A fully supported digital photo booth experience with instant
                  sharing and custom branding options. We set it up and an
                  attendant guides guests throughout your event.
                </p>

                <ul className={`${bulletsBase} marker:text-[#ff4567]`}>
                  <li>
                    We deliver, set it up, and an attendant guides guests during
                    your event
                  </li>
                  <li>Custom branded overlays included</li>
                  <li>4x6 digital downloads, GIFs, and boomerangs included</li>
                  <li>Digital backdrops to match any theme</li>
                  <li>Digital props included</li>
                  <li>
                    Optional enhancements available upon request including
                    physical props, physical backdrops, data and email
                    collection, AI face swapping, and more
                  </li>
                </ul>
              </div>

              <div className={footerArea}>
                <p className={priceRow}>
                  <span className="text-white/60">Starting at:</span>{" "}
                  <strong className="text-[#ff4567]">$895 for 3 hours</strong>
                </p>

                <div className={actionRowCenter}>
                  <BtnLink href={LEARN_BOOTH_FULL} className={glowBtnPink}>
                    Learn More
                  </BtnLink>
                  <BtnLink href={SFA} className={glowBtnPink}>
                    See Pricing + Book Online
                  </BtnLink>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>

        <p className="mt-8 text-sm text-center text-gray-400">
          Digital Photo Booth can be booked on its own or paired with Silent
          Disco.
        </p>
      </section>

      <ServicesExtras
        quoteHref={QUOTE_HUB}
        connectHref={CONNECT_HREF}
      />
    </div>
  );
}
