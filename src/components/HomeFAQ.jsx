import NeonTitle from "./NeonTitle";

const faqs = [
  {
    q: "What services do you offer",
    a: `We offer Silent Disco Rentals, a full service Silent Disco DJ Experience with attendants, and Digital Photo Booth rentals with custom overlays, digital backdrops, and optional AI face swapping.`,
  },
  {
    q: "What is Silent Disco",
    a: `A Silent Disco (or “Silent Party”) is a dance party where the music plays through wireless headphones instead of speakers. Guests tune in to the music being broadcast to their headsets and dance together on the same floor. To anyone not wearing headphones, it looks like everyone is dancing in silence… until someone starts singing along. It’s a fun, high-energy experience that keeps the volume down while the party stays turned up.`,
  },
  {
    q: "What is the difference between Silent Disco Rentals and the Silent Disco DJ Experience",
    a: `Silent Disco Rentals are our DIY option for hosts who want to run the party themselves. You’ll receive your requested number of headphones plus 3 transmitters (3 music channels). Each transmitter connects to your own device—phone, laptop, iPad, etc.—so you can play Spotify, Apple Music, playlists, or curated mixes you already love. We include clear, step-by-step instructions, and you can choose pickup or delivery to make it easy.`,
  },
  {
    q: "What is included with the Digital Photo Booth",
    a: `Our Digital Photo Booth is fully digital and includes a shareable gallery. We also offer custom branded overlays, digital backdrops to match any theme, and optional AI face swapping.`,
  },
  {
    q: "How do we get pricing and book",
    a: `Getting started is easy. Choose the option that works best for you:

See Pricing + Book Online
Click See Pricing + Book Online to view packages, pricing, and secure your date.

Connect with Our Team
Have questions or want a custom experience? Connect with our team and we’ll recommend the best fit.`,
  },
];

const renderAnswer = (text) =>
  String(text)
    .split(/\n\s*\n/)
    .map((p, i) => (
      <p key={i} className="text-gray-300 text-justify leading-relaxed">
        {p}
      </p>
    ));

const slug = (s) =>
  String(s || "")
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
    <section
      className="bg-black border-b border-white/5"
      aria-labelledby="home-faq-heading"
    >
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          {kicker && (
            <div className="text-center text-xs tracking-widest text-gray-400">
              {kicker}
            </div>
          )}

          <NeonTitle title={title} id="home-faq-heading" />

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
              const panelId = `${id}-panel`;

              return (
                <div
                  key={id}
                  className={[
                    "glass rounded-2xl neon-border overflow-hidden",
                    "glo-hover-green",
                  ].join(" ")}
                >
                  <dt className="m-0">
                    <details className="group">
                      <summary
                        id={id}
                        className="flex items-center justify-between cursor-pointer list-none px-5 py-4"
                        aria-controls={panelId}
                      >
                        <span className="font-semibold pr-4 text-gray-100">
                          {f.q}
                        </span>

                        <span
                          className="ml-auto inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 neon-border transition-transform group-open:rotate-45"
                          aria-hidden="true"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 5v14M5 12h14"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                      </summary>

                      <dd
                        id={panelId}
                        className="px-5 pb-5 pt-1 space-y-3"
                        aria-labelledby={id}
                      >
                        {renderAnswer(f.a)}
                      </dd>
                    </details>
                  </dt>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
