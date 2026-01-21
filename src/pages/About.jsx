// src/pages/About.jsx
import { Link } from "react-router-dom";
import NeonTitle from "../components/NeonTitle";

export default function About() {
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

  // ✅ Buttons (same system you’ve been using)
  const glowBtnBase = `
    inline-flex items-center justify-center
    px-4 py-1.5 md:px-6 md:py-2
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

  // ✅ Pricing button (RED)
  const glowBtnPink =
    glowBtnBase +
    `
    !text-[#ff4567]
    !border-[#ff4567]
    [box-shadow:0_0_12px_rgba(255,69,103,.35)]
    hover:[box-shadow:0_0_18px_rgba(255,69,103,.55)]
  `;

  // ✅ Connect button (GREEN)
  const glowBtnMint =
    glowBtnBase +
    `
    !text-[#23ff11]
    !border-[#23ff11]
    [box-shadow:0_0_12px_rgba(35,255,17,.35)]
    hover:[box-shadow:0_0_18px_rgba(35,255,17,.55)]
  `;

  const sectionTitle =
    "text-left text-2xl md:text-3xl font-semibold text-[var(--color-neon-blue)]";
  const sectionSub = "mt-3 text-left text-gray-400 max-w-3xl";

  const cardBase =
    "glass rounded-2xl border border-white/10 bg-white/5 p-7 md:p-8";

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <title>About | Glo Event Co</title>
      <meta
        name="description"
        content="Locally owned and proudly based in St. Louis. Learn how Glo Event Co grew from a passion for Silent Disco into a full event experience company."
      />

      {/* Hero */}
      <header className="max-w-5xl mx-auto text-center">
        <NeonTitle
          title="About Glo Event Co"
          id="about-heading"
          className="uppercase"
        />

        <p className="mt-3 text-gray-400 text-center text-base md:text-lg max-w-3xl mx-auto">
          Locally owned + proudly based in St. Louis
        </p>

        <p className="mt-6 text-gray-300 text-center text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
          Glo Event Co was built on one simple idea… events should feel effortless
          for the host and unforgettable for the guests.
        </p>

        <p className="mt-5 text-gray-300 text-center text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
          What started in 2018 as a passion for Silent Disco has grown into a full
          event experience company serving St. Louis and beyond. Today, we bring
          the energy with Silent Disco headphone rentals, full service Silent Disco
          DJ experiences, and modern digital photo booth rentals designed to match
          your vibe.
        </p>
      </header>

      {/* Content */}
      <main className="mt-16 grid gap-8">
        {/* How it started */}
        <section className={cardBase} aria-labelledby="how-it-started">
          {/* ✅ Change: items-start (no “empty” vertical centering) */}
          {/* ✅ Change: slightly wider text column, smaller image column */}
          <div className="grid md:grid-cols-[1.35fr_0.65fr] gap-8 items-start">
            {/* LEFT: Text */}
            <div className="min-w-0">
              <h2 id="how-it-started" className={sectionTitle}>
                How it started
              </h2>

              <p className={`${sectionSub} text-left`}>
                Founder Misty King discovered Silent Disco while traveling and immediately
                fell in love with the concept. The idea was instant… a packed dance floor,
                crystal clear music, and the ability to actually talk without speakers blasting.
              </p>

              <p className="mt-5 text-gray-300 leading-relaxed text-left">
                Back home, St. Louis didn’t have a locally owned Silent Disco company — so she
                created one. From school fundraisers and corporate events to private parties
                and destination celebrations, the goal has always been the same: elevate the
                moment and make it easy for the people planning it.
              </p>
            </div>

            {/* RIGHT: Image */}
            {/* ✅ Change: make it more compact (shorter) but still not cropped */}
            <div className="w-full max-w-[220px] md:max-w-[240px] ml-auto">
  <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 bg-black/40">
    <img
      src="/images/about/how-it-started.jpg"
      alt="Early Silent Disco events by Glo Event Co"
      className="absolute inset-0 w-full h-full object-contain"
    />
  </div>
</div>

          </div>
        </section>

        {/* From Silent Night Events to Glo Event Co */}
        <section className={cardBase} aria-labelledby="rebrand">
          <h2 id="rebrand" className={sectionTitle}>
            From Silent Night Events to Glo Event Co
          </h2>

          <p className={`${sectionSub} text-left`}>
            As demand grew, the vision got bigger. Silent Night Events evolved into Glo Event Co, a
            rebrand that reflects what we do best: creating high energy, modern experiences with clean
            setups, clear communication, and a team that shows up ready. Along the way, we expanded the
            lineup to include modern, fully digital photo booth experiences that pair perfectly with
            Silent Disco and elevate every event.
          </p>

          <p className="mt-5 text-gray-300 leading-relaxed text-left">
            We’ve come a long way since the early days, and we’re proud of it. Glo Event Co is now
            supported by a growing team of event professionals who help bring rentals, DJ experiences,
            and photo booth moments to life across the region.
          </p>
        </section>

        {/* What we believe */}
        <section className={cardBase} aria-labelledby="beliefs">
          <h2 id="beliefs" className={sectionTitle}>
            What we believe
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-lg font-semibold text-[var(--color-neon-red)]">
                Local support matters
              </h3>
              <p className="mt-2 text-gray-300 leading-relaxed">
                You shouldn’t have to worry about shipping delays, missing equipment, or “good luck”
                instructions.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-lg font-semibold text-[var(--color-neon-blue)]">
                Events should feel easy
              </h3>
              <p className="mt-2 text-gray-300 leading-relaxed">
                Clear processes, simple setup, and real humans you can reach when you need help.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-lg font-semibold text-[var(--color-neon-green)]">
                Details make the difference
              </h3>
              <p className="mt-2 text-gray-300 leading-relaxed">
                Clean gear, polished presentation, and experiences that feel intentional.
              </p>
            </div>
          </div>
        </section>

        {/* Ready to bring the Glo */}
        <section className={`${cardBase} text-center`} aria-labelledby="ready-to-glo">
          <h2 id="ready-to-glo" className="text-2xl md:text-3xl font-semibold text-white/90">
            Ready to bring the Glo
          </h2>

          <p className="mt-3 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Whether you’re planning a DIY party at home, a school event, a wedding, a fundraiser,
            or a corporate celebration, we’ll help you choose the best fit — and make the experience
            smooth from start to finish.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <BtnLink href={QUOTE_RENTAL_BASE} className={`${glowBtnPink} w-full sm:w-auto`}>
              See Pricing + Book Online
            </BtnLink>
            <BtnLink href={connectHref} className={`${glowBtnMint} w-full sm:w-auto`}>
              Connect with Our Team
            </BtnLink>
          </div>

          <p className="mt-4 text-sm text-gray-400">
            Serving St. Louis and surrounding areas since 2018. Travel available upon request.
          </p>
        </section>
      </main>
    </div>
  );
}
