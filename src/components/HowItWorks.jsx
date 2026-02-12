import NeonTitle from "./NeonTitle"

const STEPS = [
  {
    number: "1",
    title: "Choose your experience",
    text: "Silent Disco Headphone Rentals, Silent Disco DJ Experience, and Digital Photo Booth Rentals. Built to elevate your event.",
    glow: "rgba(255,69,103,.35)",
    border: "var(--color-neon-red)",
    textColor: "var(--color-neon-red)",
  },
  {
    number: "2",
    title: "Confirm availability and book",
    text: "Book online in minutes, or connect with our event planning team for recommendations.",
    glow: "rgba(0,131,253,.35)",
    border: "var(--color-neon-blue)",
    textColor: "var(--color-neon-blue)",
  },
  {
    number: "3",
    title: "Event day made easy",
    text: "Pick up, drop off, or full service support with simple instructions and on site help when needed.",
    glow: "rgba(35,255,17,.30)",
    border: "var(--color-neon-green)",
    textColor: "var(--color-neon-green)",
  },
]

export default function HowItWorks({
  heading = "How It Works",
  subtitle = "Book online in minutes or connect with our event planning team. Either way, we make it easy.",
  kicker,
}) {
  return (
    <section className="bg-black border-b border-white/5" aria-labelledby="how-it-works-heading">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          {kicker && (
            <div className="text-center text-xs tracking-widest text-gray-400">
              {kicker}
            </div>
          )}

          <NeonTitle
            title={heading}
            id="how-it-works-heading"
            className="uppercase" 
          />

          {subtitle && (
            <p className="mt-3 text-gray-400 text-center text-base md:text-lg">
              {subtitle}
            </p>
          )}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {STEPS.map((s) => (
            <article
              key={s.number}
              className="
                bg-black rounded-2xl border p-8
                transition-all duration-300 hover:-translate-y-1
              "
              style={{ borderColor: s.border, boxShadow: `0 0 18px ${s.glow}` }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="
                    flex-shrink-0 w-12 h-12
                    flex items-center justify-center
                    font-extrabold text-xl border-2
                  "
                  style={{ color: s.textColor, borderColor: s.border, boxShadow: `0 0 14px ${s.glow}` }}
                >
                  {s.number}
                </div>

                <div>
                  <h3 className="text-xl font-semibold" style={{ color: s.textColor }}>
                    {s.title}
                  </h3>
                  <p className="mt-2 text-gray-300 leading-relaxed">
                    {s.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
