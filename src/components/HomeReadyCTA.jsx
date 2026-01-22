// src/components/HomeReadyCTA.jsx
import NeonTitle from "./NeonTitle";
import GlowButton from "./GlowButton";
import { BOOK_BASE } from "../lib/constants";

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
          <NeonTitle title={title} />

          <p className="mt-3 text-gray-100 text-base md:text-lg max-w-3xl mx-auto">
            {subtitle}
          </p>

          {/* ✅ Botones: side-by-side */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <GlowButton
              href={BOOK_BASE}
              external
              appearance="outline"
              variant="red"
              size="lg"
            >
              See Pricing + Book Online
            </GlowButton>

            <GlowButton
              href={connectHref}
              appearance="outline"
              variant="green"
              size="lg"
            >
              Connect with Our Team
            </GlowButton>
          </div>

          <p className="mt-4 text-sm text-gray-200 max-w-2xl mx-auto">
            Not sure what fits your event? Connect with our team and we will
            guide you.
          </p>
        </div>
      </div>
    </section>
  );
}
