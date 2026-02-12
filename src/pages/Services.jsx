import { Link } from "react-router-dom";
import GlowCard from "../components/GlowCard";
import NeonTitle from "../components/NeonTitle";
import ServicesExtras from "../components/ServicesExtras";
import GlowButton from "../components/GlowButton";
import { DJAT, SDHR, SFA, PRICING } from "../lib/constants";
import { useEffect } from "react";

export default function Services() {
  const CONNECT_HREF = "/contact";

  const QUOTE_HUB = PRICING;

  const LEARN_SILENT = "/services/silent-disco";
  const LEARN_BOOTH = "/services/photo-booth";

  const isInternal = (href = "") => href.startsWith("/");

  const ActionBtn = ({ href, variant, children }) => {
    if (isInternal(href)) {
      return (
        <Link to={href} className="inline-flex">
          <GlowButton appearance="outline" variant={variant} size="lg">
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
      >
        {children}
      </GlowButton>
    );
  };

  const sectionTitle =
    "text-left text-2xl md:text-3xl font-semibold text-[var(--color-neon-blue)]";
  const sectionSub = "mt-3 text-left text-gray-400 max-w-3xl";

  const actionRowCenter =
    "mt-5 flex flex-col sm:flex-row gap-3 justify-center items-center";

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

  const cardLayout = "grid h-full grid-rows-[1fr_auto]";
  const contentArea = "min-h-0";
  const footerArea = "pt-6";

  const descClamp =
    "!m-0 text-gray-300 min-h-[72px] md:min-h-[80px] " +
    "overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]";

  const bulletsBase =
    "!mt-4 !mb-0 list-disc pl-6 text-gray-300 space-y-2 " +
    "min-h-[260px] md:min-h-[284px]";

  const priceRow = "!m-0 text-sm text-white/80 min-h-[24px]";

  useEffect(() => {
    const href = "https://www.gloeventco.com/services";
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <header className="max-w-5xl mx-auto">
        <NeonTitle title="Services" id="services-heading" className="uppercase" />
        <p className="mt-3 text-gray-400 text-center text-base md:text-lg">
          Two crowd favorites. Choose Silent Disco or Digital Photo Booth, then
          pick drop off or full service.
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
          <GlowCard title="Silent Disco Headphone Rentals" variant="mint">
            <div className={cardLayout}>
              <div className={contentArea}>
                <CardImage
                  src="/images/silent-disco-headphones-st-louis.webp"
                  alt="Silent disco headphone rentals in St. Louis"
                />

                <p className={descClamp}>
                  DIY friendly headphone rentals with clear instructions and
                  local support when you need it.
                </p>

                <ul className={`${bulletsBase} marker:text-[#23ff11]`}>
                  <li>24 hour rental includes headphones + 3 transmitters</li>
                  <li>Guests choose their channel and enjoy the music</li>
                  <li>Local pick up or delivery options</li>
                  <li>Simple setup instructions included</li>
                  <li>Local support available</li>
                  <li className="opacity-0 select-none">Spacer</li>
                </ul>
              </div>

              <div className={footerArea}>
                <p className={priceRow}>
                  <span className="text-white/60">Starting at:</span>{" "}
                  <strong className="text-[#23ff11]">From $5 per headphone</strong>
                </p>

                <div className={actionRowCenter}>
                  <ActionBtn href={LEARN_SILENT} variant="green">
                    Learn More
                  </ActionBtn>
                  <ActionBtn href={SDHR} variant="green">
                    See Pricing + Book Online
                  </ActionBtn>
                </div>
              </div>
            </div>
          </GlowCard>

          <GlowCard title="Silent Disco DJ Experience" variant="pink">
            <div className={cardLayout}>
              <div className={contentArea}>
                <CardImage
                  src="/images/dj-experience.jpg"
                  alt="Silent disco DJ experience in St. Louis"
                />

                <p className={descClamp}>
                  Full service silent disco with a DJ and attendants handling
                  everything.
                </p>

                <ul className={`${bulletsBase} marker:text-[#ff4567]`}>
                  <li>3 channel LED wireless headphones</li>
                  <li>1–3 DJs plus playlists</li>
                  <li>Delivery, attendants, and cleanup included</li>
                  <li>High energy crowd control</li>
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
                  <ActionBtn href={LEARN_SILENT} variant="red">
                    Learn More
                  </ActionBtn>
                  <ActionBtn href={DJAT} variant="red">
                    See Pricing + Book Online
                  </ActionBtn>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Photo Booth */}
      <section className="mt-24">
        <h2 className={sectionTitle}>Digital Photo Booth Rental</h2>
        <p className={sectionSub}>
          A modern digital selfie station with instant sharing and custom
          branding.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12 items-stretch">
          <GlowCard title="Drop Off Digital Photo Booth" variant="mint">
            <div className={cardLayout}>
              <div className={contentArea}>
                <CardImage
                  src="/images/DropOffDigitalBooth.jpg"
                  alt="Drop off digital photo booth rental in St. Louis"
                />

                <p className={descClamp}>
                  Delivered ready to use with instant sharing and branded
                  overlays.
                </p>

                <ul className={`${bulletsBase} marker:text-[#23ff11]`}>
                  <li>Delivery + setup included</li>
                  <li>Custom branded overlays</li>
                  <li>GIFs, boomerangs, and downloads</li>
                  <li>Digital backdrops and props</li>
                </ul>
              </div>

              <div className={footerArea}>
                <p className={priceRow}>
                  <span className="text-white/60">Starting at:</span>{" "}
                  <strong className="text-[#23ff11]">$595 for 10 hours</strong>
                </p>

                <div className={actionRowCenter}>
                  <ActionBtn href={LEARN_BOOTH} variant="green">
                    Learn More
                  </ActionBtn>
                  <ActionBtn href={SFA} variant="green">
                    See Pricing + Book Online
                  </ActionBtn>
                </div>
              </div>
            </div>
          </GlowCard>

          <GlowCard title="Full Service Photo Booth With Attendant" variant="pink">
            <div className={cardLayout}>
              <div className={contentArea}>
                <CardImage
                  src="/images/photo-booth-attendant.jpg"
                  alt="Full service photo booth with attendant in St. Louis"
                />

                <p className={descClamp}>
                  Fully supported photo booth experience with an on site
                  attendant.
                </p>

                <ul className={`${bulletsBase} marker:text-[#ff4567]`}>
                  <li>Attendant guided experience</li>
                  <li>Custom branding included</li>
                  <li>Instant sharing</li>
                  <li>Optional upgrades available</li>
                </ul>
              </div>

              <div className={footerArea}>
                <p className={priceRow}>
                  <span className="text-white/60">Starting at:</span>{" "}
                  <strong className="text-[#ff4567]">$895 for 3 hours</strong>
                </p>

                <div className={actionRowCenter}>
                  <ActionBtn href={LEARN_BOOTH} variant="red">
                    Learn More
                  </ActionBtn>
                  <ActionBtn href={SFA} variant="red">
                    See Pricing + Book Online
                  </ActionBtn>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      <ServicesExtras quoteHref={QUOTE_HUB} connectHref={CONNECT_HREF} />
    </div>
  );
}
