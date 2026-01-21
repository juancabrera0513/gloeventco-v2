// src/components/ServicesExtras.jsx
import { Link } from "react-router-dom";
import NeonTitle from "./NeonTitle";
import GlowButton from "./GlowButton";
import { BOOK_BASE } from "../lib/constants";

export default function ServicesExtras({
  quoteHref = "/pricing",
  connectHref = "/contact",

  // ✅ NEW: single centered video (replaces the 2 images)
  videoSrc = "/videos/Combined Services Video.webm",
  videoPoster = "",
  videoAlt = "Silent Disco and Photo Booth highlight video",
}) {
  const isInternal = (href = "") => href.startsWith("/");

  const CtaLink = ({ href, className, children }) => {
    if (isInternal(href)) {
      return (
        <Link to={href} className={className}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  };

  // ✅ Exact button style you sent (same color + shape)
  const glowOutlineRed = `
      px-4 py-1.5 md:px-6 md:py-2
      text-base md:text-lg
      font-body font-semibold
      tracking-normal
      !text-[var(--color-neon-red)]
      !border !border-[var(--color-neon-red)]
      rounded-none
      bg-transparent
      [box-shadow:0_0_12px_rgba(255,69,103,.35)]
      hover:[box-shadow:0_0_18px_rgba(255,69,103,.55)]
      hover:bg-white/5
    `.trim();

  const secondaryBtn =
    "inline-flex items-center justify-center h-11 px-5 rounded-xl font-semibold " +
    "bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20";

  const card =
    "glass rounded-2xl neon-border overflow-hidden glo-hover-green bg-white/5 border border-white/10";

  const sectionWrap = "bg-black border-b border-white/5";
  const kicker = "text-xs tracking-widest text-gray-400 text-center";

  const renderAnswer = (text) =>
    String(text)
      .split(/\n\s*\n/)
      .map((p, i) => (
        <p key={i} className="text-gray-400">
          {p}
        </p>
      ));

  const faqs = [
    {
      q: "What is the difference between Silent Disco Headphone Rentals and the Silent Disco DJ Experience",
      a: "Silent Disco Headphone Rentals are a DIY option with headphones, transmitters, and clear instructions so you can run the event. The Silent Disco DJ Experience is full service with DJs, attendants, delivery, and event management.",
    },
    {
      q: "Can the Digital Photo Booth be booked as a stand alone rental",
      a: "Yes. The Digital Photo Booth can be booked on its own as a drop off rental or as a fully supported option with an attendant.",
    },
    {
      q: "Can we combine Silent Disco and the Digital Photo Booth",
      a: "Yes. The photo booth can be booked on its own, or added as an add on at checkout when you book a Silent Disco Rental. Bundle pricing is applied automatically.",
    },
    {
      q: "Do you offer delivery",
      a: "Yes. Delivery is available for Silent Disco Headphone Rentals, and included with the Silent Disco DJ Experience. Photo Booth rentals include delivery, setup, and a quick walk through.",
    },
    {
      q: "What affects pricing",
      a: "Pricing depends on date, guest count, duration, service level, delivery needs, and any optional enhancements requested.",
    },
  ];

  // ✅ Helper that renders the exact GlowButton style, but works for internal/external
  const PricingGlowButton = ({ href, children }) => {
    const internal = isInternal(href);
    return (
      <GlowButton
        href={href}
        external={!internal}
        appearance="outline"
        className={glowOutlineRed}
      >
        {children}
      </GlowButton>
    );
  };

  return (
    <div className="space-y-0">
      {/* =========================
          Section: Combine Experiences
         ========================= */}
      <section className={sectionWrap} aria-labelledby="combine-experiences">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <NeonTitle title="Combine Experiences" id="combine-experiences" />
            <p className="mt-3 text-gray-400 text-center text-base md:text-lg">
              Two crowd favorites, one seamless plan.
            </p>
          </div>

          {/* ✅ NEW: single centered video */}
          <div className="mt-10 max-w-5xl mx-auto">
            <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <video
                className="w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover"
                src={videoSrc}
                poster={videoPoster || undefined}
                muted
                loop
                playsInline
                autoPlay
                controls={false}
                aria-label={videoAlt}
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
            </figure>
          </div>

          <div className="mt-10 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
              <p className="text-gray-300/95 leading-relaxed">
                Silent Disco + Digital Photo Booth is a favorite for weddings,
                corporate events, school celebrations, and community events. The
                photo booth can be booked on its own, or added as an add on at
                checkout when you book a Silent Disco Rental. Bundle pricing is
                applied automatically.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
  <PricingGlowButton
    href={BOOK_BASE}
    className="
      !text-[var(--color-neon-red)]
      !border !border-[var(--color-neon-red)]
      bg-transparent
      [box-shadow:0_0_12px_rgba(255,69,103,.35)]
      hover:[box-shadow:0_0_18px_rgba(255,69,103,.55)]
      hover:bg-white/5
    "
  >
                    See Pricing + Book Online
                    </PricingGlowButton>

  <CtaLink
    href={connectHref}
    className="
      inline-flex items-center justify-center
      px-4 py-1.5 md:px-6 md:py-2
      text-base md:text-lg
      font-body font-semibold
      tracking-normal
      !text-[var(--color-neon-green)]
      !border !border-[var(--color-neon-green)]
      rounded-xl
      bg-transparent
      [box-shadow:0_0_12px_rgba(35,255,17,.35)]
      hover:[box-shadow:0_0_18px_rgba(35,255,17,.55)]
      hover:bg-white/5
    "
  >
    Connect with Our Team
  </CtaLink>
</div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================
          Section: How It Works (mini)
         ========================= */}
      <section className={sectionWrap} aria-labelledby="how-it-works-mini">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <NeonTitle title="How It Works" id="how-it-works-mini" />
            <p className="mt-3 text-gray-400 text-center text-base md:text-lg">
              Quick steps to get your quote and lock in the right experience.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className={kicker}>STEP 1</div>
              <div className="mt-2 text-lg font-semibold text-white/90">
                Choose your service
              </div>
              <p className="mt-2 text-gray-400">
                Silent Disco Headphone Rentals, Silent Disco DJ Experience, or
                Digital Photo Booth Rental.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className={kicker}>STEP 2</div>
              <div className="mt-2 text-lg font-semibold text-white/90">
                Get A Quote or connect with our team
              </div>
              <p className="mt-2 text-gray-400">
                Request pricing fast, or connect with our team for help choosing
                the best fit.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className={kicker}>STEP 3</div>
              <div className="mt-2 text-lg font-semibold text-white/90">
                Event day made easy
              </div>
              <p className="mt-2 text-gray-400">
                Pick up + return or delivery, plus support from a local team.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
  <PricingGlowButton
    href={BOOK_BASE}
    className="
      w-full sm:w-auto
      !text-[var(--color-neon-red)]
      !border !border-[var(--color-neon-red)]
      bg-transparent
      [box-shadow:0_0_12px_rgba(255,69,103,.35)]
      hover:[box-shadow:0_0_18px_rgba(255,69,103,.55)]
      hover:bg-white/5
    "
  >
    See Pricing + Book Online
  </PricingGlowButton>

  <CtaLink
    href={connectHref}
    className="
      w-full sm:w-auto
      inline-flex items-center justify-center
      px-4 py-1.5 md:px-6 md:py-2
      text-base md:text-lg
      font-body font-semibold
      tracking-normal
      !text-[var(--color-neon-green)]
      !border !border-[var(--color-neon-green)]
      rounded-xl
      bg-transparent
      [box-shadow:0_0_12px_rgba(35,255,17,.35)]
      hover:[box-shadow:0_0_18px_rgba(35,255,17,.55)]
      hover:bg-white/5
    "
  >
    Connect with Our Team
  </CtaLink>
</div>


        </div>
      </section>

      {/* =========================
          Section: Services FAQ (Top 5)
         ========================= */}
      <section className={sectionWrap} aria-labelledby="services-faq-top5">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <NeonTitle title="Services FAQ" id="services-faq-top5" />
            <p className="mt-3 text-gray-400 text-center text-base md:text-lg">
              Quick answers to help you choose the right option.
            </p>
          </div>

          <div className="mt-10 max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className={card}>
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
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
  {/* Buttons: side-by-side on desktop, stacked on mobile */}
  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
    <PricingGlowButton
      href={BOOK_BASE}
      className="
        w-full sm:w-auto
        !text-[var(--color-neon-red)]
        !border !border-[var(--color-neon-red)]
        bg-transparent
        [box-shadow:0_0_12px_rgba(255,69,103,.35)]
        hover:[box-shadow:0_0_18px_rgba(255,69,103,.55)]
        hover:bg-white/5
      "
    >
      See Pricing + Book Online
    </PricingGlowButton>

    <CtaLink
      href={connectHref}
      className="
        w-full sm:w-auto
        inline-flex items-center justify-center
        px-4 py-1.5 md:px-6 md:py-2
        text-base md:text-lg
        font-body font-semibold
        tracking-normal
        !text-[var(--color-neon-green)]
        !border !border-[var(--color-neon-green)]
        rounded-xl
        bg-transparent
        [box-shadow:0_0_12px_rgba(35,255,17,.35)]
        hover:[box-shadow:0_0_18px_rgba(35,255,17,.55)]
        hover:bg-white/5
      "
    >
      Connect with Our Team
    </CtaLink>
  </div>

  {/* Text below buttons */}
  <div className="mt-4 text-sm text-gray-400">
    Not sure what fits your event?{" "}
    <span className="text-white/80">Connect with our team.</span>
  </div>
</div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
