// src/components/HomeReadyCTA.jsx
import NeonTitle from "./NeonTitle"
import GlowButton from "./GlowButton"
import { BOOK_BASE, BOOK_SELFIE, BOOK_SILENT } from "../lib/constants"



export default function HomeReadyCTA({
  title = "Ready to make your event glo?",
  subtitle = "Choose your experience, get your quote, and we will help you bring it all together with local support from start to finish.",
}) {
  const connectHref = "/contact";

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div
          className="
            rounded-2xl px-6 py-10 text-white
            bg-gradient-to-br from-[#0b0b12] via-[#0a1020] to-[#06121e]
            shadow-[0_0_36px_rgba(0,131,253,.45)]
            glo-hover
          "
        >
          {/* ✅ Same title style as previous sections */}
          <NeonTitle title={title} />

          <p className="mt-3 text-gray-100 text-base md:text-lg max-w-3xl mx-auto">
            {subtitle}
          </p>

          {/* ✅ GlowButtons stacked vertically – SAME STYLE AS REQUESTED */}
          <div className="mt-6 flex flex-col items-center gap-4">
          <GlowButton
  href={BOOK_BASE}
  external
  appearance="outline"
  className="
    w-full sm:w-auto
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
  "
>
  See Pricing + Book Online
</GlowButton>



<GlowButton
  href={connectHref}
  appearance="outline"
  className="
    w-full sm:w-auto
    px-4 py-1.5 md:px-6 md:py-2
    text-base md:text-lg
    font-body font-semibold
    tracking-normal
    !text-[var(--color-neon-green)]
    !border !border-[var(--color-neon-green)]
    rounded-none
    bg-transparent
    [box-shadow:0_0_12px_rgba(0,255,170,.35)]
    hover:[box-shadow:0_0_18px_rgba(0,255,170,.55)]
    hover:bg-white/5
  "
>
  Connect with Our Team
</GlowButton>

          </div>

          <p className="mt-4 text-sm text-gray-200 max-w-2xl mx-auto">
            Not sure what fits your event? Connect with our team and we will guide you.
          </p>
        </div>
      </div>
    </section>
  )
}
