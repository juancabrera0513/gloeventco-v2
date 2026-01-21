// src/components/HomeFAQ.jsx
import NeonTitle from "./NeonTitle";

const faqs = [
  {
    q: "What services do you offer",
    a: `We offer Silent Disco Rentals, a full service Silent Disco DJ Experience with attendants, and Digital Photo Booth rentals with custom overlays, digital backdrops, and optional AI face swapping.`,
  },
  {
    q: "How does Silent Disco work",
    a: `Guests wear wireless headphones and choose their music channel. Everyone can dance together while listening to different music at the same time.`,
  },
  {
    q: "What is the difference between Silent Disco Rentals and the Silent Disco DJ Experience",
    a: `Rentals are a pick up or drop off option with clear instructions so you can run the event. The DJ Experience is full service with a DJ and on site attendants to manage setup, music, and guest support.`,
  },
  {
    q: "What is included with the Digital Photo Booth",
    a: `Our Digital Photo Booth is fully digital and includes a shareable gallery. We also offer custom branded overlays, digital backdrops to match any theme, and optional AI face swapping.`,
  },
  {
    q: "How do we get pricing and book",
    a: `Start by choosing your experience, then click Get A Quote for pricing options. If you want help deciding, you can connect with our team and we will recommend the best fit.`,
  },
];

// util: divide en párrafos por líneas en blanco
const renderAnswer = (text) =>
  String(text)
    .split(/\n\s*\n/)
    .map((p, i) => (
      <p key={i} className="text-gray-300 text-justify leading-relaxed">
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

export default function HomeFAQ({
  kicker,
  title = "Frequently Asked Questions",
  subtitle = "Quick answers to help you choose the right experience and plan with confidence.",
}) {
  return (
    <section className="bg-black border-b border-white/5" aria-labelledby="home-faq-heading">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          {kicker && (
            <div className="text-center text-xs tracking-widest text-gray-400">
              {kicker}
            </div>
          )}

          {/* ✅ Same title component/style as OurWork */}
          <NeonTitle title={title} id="home-faq-heading" />

          {/* ✅ Same subtitle sizing as OurWork */}
          {subtitle && (
            <p className="mt-3 text-gray-400 text-center text-base md:text-lg">
              {subtitle}
            </p>
          )}
        </div>

        <div className="mt-10 max-w-4xl mx-auto">
          <dl className="space-y-4">
            {faqs.map((f) => {
              const id = `home-faq-${slug(f.q)}`;
              return (
                <div
                  key={id}
                  className={[
                    "glass rounded-2xl neon-border overflow-hidden",
                    "glo-hover-green", // ✅ hover verde
                  ].join(" ")}
                >
                  <details className="group open:rounded-b-none">
                    <summary
                      id={id}
                      className="flex items-center justify-between cursor-pointer list-none px-5 py-4"
                    >
                      <dt className="font-semibold pr-4 text-gray-100">{f.q}</dt>

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

                    <dd className="px-5 pb-5 pt-1 space-y-3">
                      {renderAnswer(f.a)}
                    </dd>
                  </details>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
