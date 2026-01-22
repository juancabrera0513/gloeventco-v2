// src/pages/SilentDisco.jsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import GlowCard from "../components/GlowCard";
import NeonTitle from "../components/NeonTitle";
import GlowButton from "../components/GlowButton";
import MiniVideoGallery from "../components/MiniVideoGallery";

export default function SilentDisco() {
  const PRICING = "https://glo-event-co.checkcherry.com";
  const CONNECT = "/contact";

  const QUOTE_RENTALS = `${PRICING}/reservation/event_type?package_group_id=13679`;
  const QUOTE_DJ = `${PRICING}/reservation/event_type?package_group_id=13678`;
  const QUOTE_RENTAL_BASE = `${PRICING}/reservation/package_group?service_id=9587`;

  // ✅ Video (public/videos/...)
  const videoSrc = "/videos/silent-disco.webm";

  const isInternal = (href = "") => href.startsWith("/");

  // ✅ Standard CTA: internal -> <Link>, external -> GlowButton external
  // ✅ Centered by default (mobile + desktop)
  const ActionBtn = ({ href, variant, children, className = "" }) => {
    const btnClass =
      (className ? className + " " : "") +
      "w-full sm:w-auto justify-center mx-auto";

    if (isInternal(href)) {
      return (
        <Link to={href} className="inline-flex justify-center">
          <GlowButton
            appearance="outline"
            variant={variant}
            size="lg"
            className={btnClass}
          >
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
        className={btnClass}
      >
        {children}
      </GlowButton>
    );
  };

  // ✅ Typography
  const sectionTitle =
    "text-left text-2xl md:text-3xl font-semibold text-[var(--color-neon-blue)]";
  const sectionSub = "mt-3 text-left text-gray-400 max-w-3xl";

  const anchorOffset = "scroll-mt-28";

  // ✅ FAQ style
  const faqCardBase =
    "glass rounded-2xl neon-border overflow-hidden bg-white/5 border border-white/10";
  const renderAnswer = (text) =>
    String(text)
      .split(/\n\s*\n/)
      .map((p, i) => (
        <p key={i} className="text-gray-300 leading-relaxed">
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

  // Steps
  const STEPS = [
    {
      number: "1",
      title: "Music plays on 3 channels",
      text: "Every Silent Disco rental and DJ Experience includes 3 transmitters (3 music channels). With the DJ Experience, our DJ plays different genres across all three channels. With Rentals, you connect the transmitters to your own devices (phone, laptop, iPad, etc.) and play your music.",
      glow: "rgba(255,69,103,.35)",
      border: "var(--color-neon-red)",
      textColor: "var(--color-neon-red)",
    },
    {
      number: "2",
      title: "Guests put on wireless headphones",
      text: "Guests grab a headset, power it on, and adjust the volume to their comfort level. The headphones are lightweight and easy to use, and each one clearly indicates the available channels so guests can switch music at any time.",
      glow: "rgba(0,131,253,.35)",
      border: "var(--color-neon-blue)",
      textColor: "var(--color-neon-blue)",
    },
    {
      number: "3",
      title: "Guests choose a channel and dance together",
      text: "Guests select their channel and can switch anytime—so the dance floor stays full and everyone enjoys their favorite music.",
      glow: "rgba(35,255,17,.30)",
      border: "var(--color-neon-green)",
      textColor: "var(--color-neon-green)",
    },
  ];

  const greatFor = [
    {
      title: "Schools + PTO Events",
      text: "High energy and noise friendly for gyms, cafeterias, and auditoriums.",
    },
    {
      title: "Churches + Youth Groups",
      text: "Venue friendly dancing with a fun wow moment.",
    },
    {
      title: "Corporate Events",
      text: "Team energy without volume battles or noise complaints.",
    },
    {
      title: "Weddings",
      text: "Mixed ages, mixed tastes—everyone can find their channel.",
    },
    {
      title: "Fundraisers",
      text: "Keep the crowd engaged and the program flowing.",
    },
    {
      title: "Birthdays + Festivals",
      text: "Flexible indoor/outdoor setups with big event energy.",
    },
  ];

  const faqs = [
    {
      q: "How many channels are available",
      a: "Most events use 3 channels, so guests can switch between different music styles anytime. Every Silent Disco Rental and Full Service DJ Experience includes 3 transmitters, giving you 3 music channels for the party.",
    },
    {
      q: "Do we need WiFi",
      a: "Yes. While the Silent Disco system itself runs through our transmitters and wireless headphones (not the venue’s WiFi), some of our DJs require a reliable WiFi connection during the event. If you’re booking the DJ Experience, we recommend confirming WiFi access at your venue so everything runs smoothly.",
    },
    {
      q: "Do we need a DJ for a rental",
      a: "No. For rentals, you can provide your own music source. If you want the full experience, book the DJ Experience.",
    },
    {
      q: "How far in advance should we book",
      a: "Dates book quickly for weekends and peak seasons. Booking early helps you get your preferred time and service level.",
    },
    {
      q: "What space and power do you need",
      a: "We’ll guide you based on your venue. Rentals are flexible, and full service includes setup planning.",
    },
    {
      q: "Can we add a Digital Photo Booth too",
      a: "Yes. The photo booth can be booked on its own or added at checkout when booking a Silent Disco Rental. Bundle pricing is applied automatically.",
    },
  ];

  // ✅ JSON-LD: Service (Silent Disco)
  const silentDiscoServiceLD = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Silent Disco Rental",
    provider: {
      "@type": "LocalBusiness",
      name: "Glo Event Co",
      telephone: "314-282-7888",
      email: "info@gloeventco.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "11123 South Towne Sq. Suite B",
        addressLocality: "St. Louis",
        addressRegion: "MO",
        postalCode: "63123",
        addressCountry: "US",
      },
      url: "https://www.gloeventco.com/",
    },
    areaServed: { "@type": "Place", name: "St. Louis, MO" },
    keywords: [
      "silent disco",
      "silent disco rental",
      "silent disco St. Louis",
      "wireless headphones party",
      "silent disco DJ",
      "silent disco headphones",
    ],
    url: "https://www.gloeventco.com/services/silent-disco",
  };

  // ✅ JSON-LD: FAQPage (matches your FAQ section)
  const silentDiscoFaqLD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Silent Disco Rentals in St. Louis | Glo Event Co</title>
        <meta
          name="description"
          content="A silent disco is a dance party where guests wear wireless headphones and choose their music channel. Book silent disco rentals or a DJ experience in St. Louis."
        />
        <link
          rel="canonical"
          href="https://www.gloeventco.com/services/silent-disco"
        />

        {/* JSON-LD Service */}
        <script type="application/ld+json">
          {JSON.stringify(silentDiscoServiceLD)}
        </script>

        {/* JSON-LD FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify(silentDiscoFaqLD)}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* ✅ Page Hero */}
        <header className="max-w-5xl mx-auto text-center">
          <NeonTitle
            title="Silent Disco"
            id="silent-disco-heading"
            className="uppercase"
          />

          <p className="mt-3 text-gray-400 text-center text-base md:text-lg max-w-3xl mx-auto">
            A silent disco is a dance party where guests wear wireless headphones
            and choose their music channel. The room stays quiet, but the energy
            is loud.
          </p>

          {/* Video */}
          <div className="mt-10 max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black aspect-video">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src={videoSrc}
                controls
                playsInline
                preload="metadata"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0" />
            </div>
          </div>

          {/* ✅ Buttons centered on mobile */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <ActionBtn href={QUOTE_RENTAL_BASE} variant="red">
              See Pricing + Book Online
            </ActionBtn>
            <ActionBtn href={CONNECT} variant="green">
              Connect with Our Team
            </ActionBtn>
          </div>
        </header>

        {/* ✅ MAIN CONTENT */}
        <main className="mt-14 min-w-0">
          {/* Section 1: How it works */}
          <section id="how-it-works" className={anchorOffset}>
            <h2 className={sectionTitle}>
              What is Silent Disco and How Does it Work?
            </h2>
            <p className={sectionSub}>
              A Silent Disco is a dance party where guests listen to music
              through wireless headphones instead of speakers. Everyone dances
              together, but each person can choose what they want to hear.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {STEPS.map((s) => (
                <article
                  key={s.number}
                  className="bg-black rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: s.border,
                    boxShadow: `0 0 18px ${s.glow}`,
                  }}
                >
                  <div className="grid grid-cols-[48px_1fr] gap-x-5 gap-y-3">
                    <div
                      className="w-12 h-12 flex items-center justify-center font-extrabold text-xl border-2 rounded-xl"
                      style={{
                        color: s.textColor,
                        borderColor: s.border,
                        boxShadow: `0 0 14px ${s.glow}`,
                      }}
                    >
                      {s.number}
                    </div>

                    <h3
                      className="text-lg font-semibold leading-tight"
                      style={{ color: s.textColor }}
                    >
                      {s.title}
                    </h3>

                    {s.text && (
                      <p className="col-span-2 text-sm text-gray-300 leading-relaxed text-justify">
                        {s.text}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-8 text-gray-300">
              <span className="text-white/80 font-semibold">Perfect for:</span>{" "}
              Venues with noise limits, mixed age groups, outdoor events,
              corporate events, school events, and guests with different music
              tastes.
            </p>
          </section>

          {/* Section 2: Why */}
          <section id="why" className={`${anchorOffset} mt-20`}>
            <h2 className={sectionTitle}>Why Silent Disco Works</h2>
            <p className={sectionSub}>
              It keeps the energy high while giving guests control over what they
              hear.
            </p>

            <div className="mt-10 glass rounded-2xl p-6 border border-white/5">
              <ul className="list-disc pl-6 text-gray-300 space-y-3 marker:text-[var(--color-neon-blue)]">
                <li>
                  Keeps the venue noise friendly while the dance floor stays full
                </li>
                <li>
                  Guests can switch channels anytime so everyone stays happy
                </li>
                <li>Great for all ages and mixed crowds</li>
                <li>No speaker volume battles or noise complaints</li>
                <li>Easy to pause for announcements and keep the party moving</li>
                <li>Creates a fun “wow” moment guests remember</li>
                <li>Works indoors or outdoors with flexible setups</li>
              </ul>
            </div>
          </section>

          {/* Mini video gallery */}
          <div className="mt-20">
            <MiniVideoGallery />
          </div>

          {/* Section 3: Two ways to book */}
          <section id="ways" className={`${anchorOffset} mt-20`}>
            <h2 className={sectionTitle}>Two Ways to Book</h2>
            <p className={sectionSub}>Choose DIY rentals or go full service with a DJ team.</p>

            <div className="grid md:grid-cols-2 gap-6 mt-12 items-stretch">
              <GlowCard
                title={
                  <span className="text-center block">
                    Silent Disco Headphone Rentals
                  </span>
                }
                variant="mint"
              >
                <div className="w-full flex flex-col">
                  <p className="text-gray-300">
                    DIY friendly headphone rentals with clear instructions and local support.
                    Pick up and return locally, or choose delivery.
                  </p>

                  <ul className="list-disc pl-6 mt-4 text-gray-300 space-y-2 marker:text-[#23ff11]">
                    <li>24 hour rental includes headphones + 3 transmitters</li>
                    <li>Guests choose their channel and enjoy the music you provide</li>
                    <li>Pick up + return locally, or choose delivery</li>
                    <li>Simple setup instructions included</li>
                    <li>Local support available if you need help</li>
                  </ul>

                  <div className="mt-auto pt-6 flex flex-col sm:flex-row justify-center items-center gap-3 w-full">
                    <ActionBtn href={QUOTE_RENTALS} variant="red">
                      See Pricing + Book Online
                    </ActionBtn>
                    <ActionBtn href={CONNECT} variant="green">
                      Connect with Our Team
                    </ActionBtn>
                  </div>
                </div>
              </GlowCard>

              <GlowCard
                title={
                  <span className="text-center block">
                    Silent Disco DJ Experience
                  </span>
                }
                variant="pink"
              >
                <div className="w-full flex flex-col">
                  <p className="text-gray-300">
                    Full service silent disco with a DJ team and attendants. We manage setup,
                    music flow, and guest support from start to finish.
                  </p>

                  <ul className="list-disc pl-6 mt-4 text-gray-300 space-y-2 marker:text-[#ff4567]">
                    <li>3 channel LED wireless headphones included</li>
                    <li>Choose 1, 2, or 3 DJs playing your custom song list</li>
                    <li>Any unhosted channel runs a curated playlist</li>
                    <li>Delivery, on-site attendants, and clean up included</li>
                    <li>Ideal for large and high energy events</li>
                  </ul>

                  <div className="mt-auto pt-6 flex flex-col sm:flex-row justify-center items-center gap-3 w-full">
                    <ActionBtn href={QUOTE_DJ} variant="red">
                      See Pricing + Book Online
                    </ActionBtn>
                    <ActionBtn href={CONNECT} variant="green">
                      Connect with Our Team
                    </ActionBtn>
                  </div>
                </div>
              </GlowCard>
            </div>
          </section>

          {/* Section 4: Great for */}
          <section id="great-for" className={`${anchorOffset} mt-20`}>
            <h2 className={sectionTitle}>Great For</h2>
            <p className={sectionSub}>
              Schools + PTO events, churches + youth groups, corporate events, weddings,
              fundraisers, birthdays, and community festivals.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {greatFor.map((t, idx) => (
                <GlowCard
                  key={t.title}
                  title={<span className="text-center block">{t.title}</span>}
                  variant={idx % 3 === 0 ? "mint" : idx % 3 === 1 ? "blue" : "pink"}
                >
                  <div className="w-full">
                    <p className="text-gray-300">{t.text}</p>
                  </div>
                </GlowCard>
              ))}
            </div>
          </section>

          {/* Section 5: FAQs */}
          <section id="faqs" className={`${anchorOffset} mt-20`}>
            <h2 className={sectionTitle}>Silent Disco FAQs</h2>
            <p className={sectionSub}>Quick answers to help you plan the right setup.</p>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {faqs.map((f, i) => {
                const id = `sd-faq-${slug(f.q)}`;
                const hoverClass = i % 2 === 0 ? "glo-hover-green" : "glo-hover-pink";

                return (
                  <div key={id} className={`${faqCardBase} ${hoverClass}`}>
                    <details className="group open:rounded-b-none">
                      <summary
                        id={id}
                        className="flex items-center justify-between cursor-pointer list-none px-5 py-4"
                      >
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
                );
              })}
            </div>
          </section>

          {/* Final CTA */}
          <section id="ready" className={`${anchorOffset} mt-24`}>
            <div className="glass rounded-2xl p-8 md:p-10 border border-white/5 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-white/90">
                Ready to bring the Glo to your event
              </h2>
              <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
                See pricing and book online, or connect with our team if you want help choosing
                the best fit.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center items-center">
                <ActionBtn href={QUOTE_RENTAL_BASE} variant="red">
                  See Pricing + Book Online
                </ActionBtn>
                <ActionBtn href={CONNECT} variant="green">
                  Connect with Our Team
                </ActionBtn>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
