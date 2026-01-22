// src/pages/Home.jsx
import { Helmet } from "react-helmet-async";

import GlowButton from "../components/GlowButton";
import NeonSign from "../components/NeonSign";
import TrustedBy from "../components/TrustedBy";
import OurWork from "../components/OurWork";
import ChooseExperience from "../components/ChooseExperience";

import TestimonialsCarousel from "../components/TestimonialsCarousel";
import {
  OUR_WORK,
  TESTIMONIALS,
  PRICING,
} from "../lib/constants";

import HowItWorks from "../components/HowItWorks";
import HomeGallery from "../components/HomeGallery";
import HomeFAQ from "../components/HomeFAQ";
import HomeReadyCTA from "../components/HomeReadyCTA";

export default function Home() {
  // JSON-LD “Service” para Photo Booth / Selfie Station (SEO)
  const photoBoothServiceLD = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Photo Booth Rental",
    alternateName: ["Selfie Station", "Photo Booth"],
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
      "photo booth",
      "selfie station",
      "photo booth rental St. Louis",
      "event photo booth",
      "photo booth St. Louis",
    ],
  };

  const localBusinessLD = {
    "@context": "https://schema.org",
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
    sameAs: ["https://glo-event-co.checkcherry.com"],
  };

  return (
    <>
      <Helmet>
        <title>Glo Event Co | Silent Disco & Photo Booth Rentals in St. Louis</title>
        <meta
          name="description"
          content="Silent Disco + Photo Booth (Selfie Station) rentals in St. Louis and nearby areas. Modern experiences for weddings, corporate events, and private parties."
        />
        <link rel="canonical" href="https://www.gloeventco.com/" />

        {/* JSON-LD LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessLD)}
        </script>

        {/* JSON-LD Service (Photo Booth / Selfie Station) */}
        <script type="application/ld+json">
          {JSON.stringify(photoBoothServiceLD)}
        </script>
      </Helmet>

      <main className="flex-1 glo-scope">
        {/* HERO */}
        <section className="relative border-b border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center isolate">
            {/* Texto */}
            <div className="relative z-10 min-w-0">
              <p className="text-xs tracking-widest text-gray-400">
                ST. LOUIS & SURROUNDING AREAS
              </p>

              <NeonSign
                as="h1"
                color="pink"
                flicker="slow"
                className="
                  mt-3 leading-none
                  whitespace-nowrap
                  font-display font-extrabold
                  tracking-widest
                  text-[clamp(1.8rem,8.5vw,2.4rem)]
                  sm:text-[clamp(2.1rem,8vw,2.8rem)]
                  md:text-6xl
                "
              >
                Glo Event Co
              </NeonSign>

              {/* Subtítulo */}
              <p className="mt-3 text-xl sm:text-2xl md:text-3xl text-gray-200 flex items-center gap-3 flex-wrap">
                <span className="neon-text-cyan">Silent Disco</span>

                <span className="neon-text-cyan text-2xl md:text-3xl leading-none">
                  +
                </span>

                <span className="neon-text-mint">Photo Booth</span>
              </p>

              {/* línea oculta para SEO extra sin afectar UI */}
              <p className="sr-only">
                Silent Disco rentals and Photo Booth rentals in St. Louis,
                Missouri and surrounding areas by Glo Event Co.
              </p>

              <p className="mt-5 text-gray-400 max-w-xl">
                Modern experiences for weddings, corporate events, and private
                parties. Clean setups, local support, and custom branding that
                keeps guests talking.
              </p>

              <div className="mt-8 flex justify-center md:justify-start">
                <GlowButton
                  href={PRICING}
                  external
                  appearance="outline"
                  variant="red"
                  size="lg"
                  tone="square"
                >
                  See Pricing + Book Online
                </GlowButton>
              </div>
            </div>

            {/* Media (Video) */}
            <div className="relative rounded-2xl glass glo-on-blue glo-hover z-0 mt-6 md:mt-0 overflow-hidden">
              <video
                className="w-full h-[320px] sm:h-[380px] md:h-[420px] object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/images/silent-disco-st-louis-event-poster.webp"
                aria-label="Silent disco event in St. Louis with wireless LED headphones"
              >
                <source
                  src="/videos/silent-disco-st-louis-event-hero.webm"
                  type="video/webm"
                />
                <source
                  src="/videos/silent-disco-st-louis-event-hero.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* Glow overlay constante */}
              <div className="pointer-events-none absolute inset-0 glo-video-glow" />
            </div>
          </div>
        </section>

        {/* LOGOS */}
        <TrustedBy />

        {/* Silent Disco */}
        <ChooseExperience />

        <HowItWorks />

        <OurWork items={OUR_WORK} />
        <TestimonialsCarousel items={TESTIMONIALS} />

        <HomeGallery />

        <HomeFAQ />

        <HomeReadyCTA />
      </main>
    </>
  );
}
