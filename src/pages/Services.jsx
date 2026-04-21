import { Link } from "react-router-dom";
import GlowCard from "../components/GlowCard";
import NeonTitle from "../components/NeonTitle";
import ServicesExtras from "../components/ServicesExtras";
import GlowButton from "../components/GlowButton";
import { DJAT, SDHR, SFA, PRICING, NEW_SDHR } from "../lib/constants";
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

      <section className="mt-20">
  <div className="grid md:grid-cols-2 gap-6 mt-12 items-stretch">
    {/* ===================== CARD 1 — Silent Disco ===================== */}
    <GlowCard variant="pink">
      <div className="not-prose w-full h-full flex flex-col">
        {/* Title (inside) */}
        <h3 className="font-display text-xl md:text-2xl text-[#ff4567] mb-4">
          Silent Disco Events
        </h3>

        {/* Image */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <img
            src="/images/silent-disco-headphones-st-louis.webp"
            alt="Silent disco headphone rentals in St. Louis"
            className="w-full h-56 md:h-64 object-cover"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </div>

        {/* Content */}
        <div className="mt-4 text-gray-300">
          <p className="leading-relaxed">
            High-energy entertainment without the noise—perfect for schools,
            parties, and events with mixed crowds.
          </p>

          <p className="mt-4 font-semibold text-[#ff4567]">Choose Your Experience:</p>
          <p className="mt-2">Headphone Rentals (DIY + easy pickup/drop-off)</p>
          <p className="mt-1">
            Full-Service Silent Disco (DJ + attendants + smooth event flow)
          </p>

          <p className="mt-4">
            <span className="font-semibold text-[#ff4567]">Great for:</span>{" "}
            school events… corporate parties… fundraisers… festivals… weddings
            (late-night)
          </p>
        </div>

        {/* Buttons (aligned) */}
        <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <ActionBtn href={LEARN_SILENT} variant="pink">
            Learn More
          </ActionBtn>
          <ActionBtn href={NEW_SDHR} variant="pink">
            See Pricing + Book Online
          </ActionBtn>
        </div>
      </div>
    </GlowCard>

    {/* ===================== CARD 2 — Photo Booth ===================== */}
    <GlowCard variant="mint">
      <div className="not-prose w-full h-full flex flex-col">
        {/* Title (inside) */}
        <h3 className="font-display text-xl md:text-2xl text-[#23ff11] mb-4">
          Photo Booth Experiences
        </h3>

        {/* Image */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <img
            src="/images/DropOffDigitalBooth.jpg"
            alt="Digital photo booth rental in St. Louis"
            className="w-full h-56 md:h-64 object-cover"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </div>

        {/* Content */}
        <div className="mt-4 text-gray-300">
          <p className="leading-relaxed">
            A modern photo booth experience built for instant sharing, polished
            branding, and content guests actually keep.
          </p>

          <p className="mt-4 font-semibold text-[#23ff11]">
            Choose your experience:
          </p>
          <p className="mt-2">Glo Pop Up (simple + shareable)</p>
          <p className="mt-1">Glo Transformation (AI wow moments)</p>
          <p className="mt-1">Glo Hosted (premium + managed)</p>
          <p className="mt-1">Glo Brand Spotlight (fully branded activation)</p>

          <p className="mt-4">
            <span className="font-semibold text-[#23ff11]">Great for:</span>{" "}
            weddings… birthdays… grad parties… corporate events… grand openings
          </p>
        </div>

        {/* Buttons (aligned) */}
        <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <ActionBtn href={LEARN_BOOTH} variant="green">
            Learn More
          </ActionBtn>
          <ActionBtn href={SFA} variant="green">
            See Pricing + Book Online
          </ActionBtn>
        </div>
      </div>
    </GlowCard>
  </div>

  {/* helper line */}
  <p className="mt-6 text-center text-sm text-white/70">
  Not sure which option fits?{" "}
  <Link
    to="/contact"
    className="text-white/90 font-semibold hover:text-[#23ff11] transition-colors"
  >
    Tell us your date + guest count…
  </Link>{" "}
  and we’ll recommend the best setup.
</p>

</section>

    
      <ServicesExtras quoteHref={QUOTE_HUB} connectHref={CONNECT_HREF} />
    </div>
  );
}
