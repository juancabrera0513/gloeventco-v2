// src/components/ChooseExperience.jsx
import GlowButton from "./GlowButton";
import NeonTitle from "./NeonTitle";
import { BOOK_SILENT, BOOK_SELFIE, SDHR, DJAT, SFA } from "../lib/constants";

const EXPERIENCES = [
  {
    title: "Silent Disco Headphone Rental",
    img: "/images/silent-disco-headphones-st-louis.webp",
    glow:
      // Hover solo para dispositivos con hover real + fallback para touch
      "[@media(hover:hover)]:hover:shadow-[0_0_22px_rgba(255,69,103,.22)] " +
      "[@media(hover:hover)]:hover:border-[color:var(--color-neon-red)] " +
      "active:shadow-[0_0_22px_rgba(255,69,103,.18)] active:border-[color:var(--color-neon-red)] " +
      "focus-within:shadow-[0_0_22px_rgba(255,69,103,.18)] focus-within:border-[color:var(--color-neon-red)]",
    accentTitle: "text-[color:var(--color-neon-red)]",
    description:
      "St. Louis local rentals + clear instructions. Guests connect their own devices, skip shipping hassles, and we are here if you need help.",
    bullets: [
      "Local pick up or drop off available in the St. Louis area",
      "Guests connect their own devices and choose their channel",
      "Simple setup instructions included",
      "Local support if you need help",
    ],
    cta: { href: SDHR },
  },
  {
    title: "Silent Disco with DJ & Attendants",
    img: "/images/silent-disco-dj-st-louis.webp",
    glow:
      "[@media(hover:hover)]:hover:shadow-[0_0_22px_rgba(0,131,253,.22)] " +
      "[@media(hover:hover)]:hover:border-[color:var(--color-neon-blue)] " +
      "active:shadow-[0_0_22px_rgba(0,131,253,.18)] active:border-[color:var(--color-neon-blue)] " +
      "focus-within:shadow-[0_0_22px_rgba(0,131,253,.18)] focus-within:border-[color:var(--color-neon-blue)]",
    accentTitle: "text-[color:var(--color-neon-blue)]",
    description:
      "We bring the DJ, the equipment, and on-site attendants, so you can enjoy your event while we run the experience.",
    bullets: [
      "DJ included with multi channel music",
      "On site attendants to help guests and keep things running smoothly",
      "We handle setup, breakdown, and event flow",
      "Perfect for schools, corporate events, fundraisers, and large celebrations",
    ],
    cta: { href: DJAT },
  },
  {
    title: "Selfie Station Photo Booth Rental",
    img: "/images/digital-photo-booth-st-louis.png",
    glow:
      "[@media(hover:hover)]:hover:shadow-[0_0_22px_rgba(35,255,17,.18)] " +
      "[@media(hover:hover)]:hover:border-[color:var(--color-neon-green)] " +
      "active:shadow-[0_0_22px_rgba(35,255,17,.14)] active:border-[color:var(--color-neon-green)] " +
      "focus-within:shadow-[0_0_22px_rgba(35,255,17,.14)] focus-within:border-[color:var(--color-neon-green)]",
    accentTitle: "text-[color:var(--color-neon-green)]",
    description:
      "Modern selfie station style photo booth rentals made easy. Choose drop off delivery or add an attendant for a fully hosted experience.",
    bullets: [
      "All digital experience with instant sharing",
      "Custom branded overlays included",
      "Digital backdrops to match any theme",
      "AI face swapping options available",
      "Multi-Day Discounts",
    ],
    cta: { href: SFA },
  },
];

function Bullet({ children }) {
  return (
    <li
      className="
        rounded-lg px-4 py-3
        bg-white
        border border-gray-200
        text-gray-700
        leading-snug
        flex items-center
        min-h-[56px]
        transition-all
        [@media(hover:hover)]:hover:border-[color:var(--color-neon-blue)]
        [@media(hover:hover)]:hover:shadow-[0_0_14px_rgba(0,131,253,.25)]
        active:border-[color:var(--color-neon-blue)]
        active:shadow-[0_0_14px_rgba(0,131,253,.20)]
      "
    >
      {children}
    </li>
  );
}

export default function ChooseExperience({
  title = "Elevate Your Event with Glo",
  subtitle = "Silent Disco and Digital Photo Booth options with drop off or full service support. Book one or add both.",
}) {
  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <NeonTitle
          title={title}
          id="choose-experience-heading"
          className="uppercase"
        />

        <p
          className="
            mt-4
            text-center
            text-lg sm:text-xl md:text-2xl
            font-medium
            text-[color:var(--color-neon-red)]
            drop-shadow-[0_0_10px_rgba(255,69,103,.45)]
          "
        >
          {subtitle}
        </p>

        <div className="mt-12 sm:mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {EXPERIENCES.map((card) => (
            <article
              key={card.title}
              className={`
                group
                bg-white
                rounded-2xl
                border border-gray-200
                transition-all duration-300
                flex flex-col
                overflow-hidden
                ${card.glow}
                [@media(hover:hover)]:hover:-translate-y-1
                active:translate-y-0
              `}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-64 sm:h-72 md:h-80 object-cover object-top"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="px-5 sm:px-6 pb-6 pt-5 text-center flex flex-col flex-1">
                {/* Title: no lo fuerces con min-height en mobile */}
                <h3
                  className={`
                    text-2xl sm:text-[28px] md:text-3xl
                    font-semibold
                    ${card.accentTitle}
                    md:min-h-[96px]
                    overflow-hidden
                    [display:-webkit-box]
                    [-webkit-box-orient:vertical]
                    [-webkit-line-clamp:2]
                  `}
                >
                  {card.title}
                </h3>

                {/* ✅ FIX: en mobile deja 4 líneas y sin min-height fijo */}
                <p
                  className="
                    mt-3 text-gray-600
                    text-[15px] sm:text-base
                    leading-relaxed
                    overflow-hidden
                    [display:-webkit-box]
                    [-webkit-box-orient:vertical]
                    [-webkit-line-clamp:4]
                    sm:[-webkit-line-clamp:3]
                    md:[-webkit-line-clamp:3]
                  "
                >
                  {card.description}
                </p>

                <ul className="mt-6 grid gap-3 text-left flex-1">
                  {card.bullets.map((b) => (
                    <Bullet key={b}>{b}</Bullet>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8 flex justify-center">
                  <GlowButton
                    href={card.cta.href}
                    external
                    appearance="outline"
                    className="
                      w-full sm:w-auto
                      justify-center
                      px-4 py-2
                      text-base md:text-lg
                      font-body font-semibold
                      tracking-normal
                      !text-[var(--color-neon-red)]
                      !border !border-[var(--color-neon-red)]
                      rounded-none
                      bg-transparent
                      [box-shadow:0_0_12px_rgba(255,69,103,.35)]
                      [@media(hover:hover)]:hover:[box-shadow:0_0_18px_rgba(255,69,103,.55)]
                      [@media(hover:hover)]:hover:bg-white/5
                      active:[box-shadow:0_0_18px_rgba(255,69,103,.50)]
                      active:bg-white/5
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-white/30
                    "
                  >
                    See Pricing + Book Online
                  </GlowButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
