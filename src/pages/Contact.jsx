// src/pages/Contact.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import NeonTitle from "../components/NeonTitle";
import { EMAIL, PHONE, ADDRESS_HTML } from "../lib/constants";

export default function Contact() {
  // ✅ CheckCherry form config (must match your Cherry form fields)
  const CHECKCHERRY_HOST = "https://glo-event-co.checkcherry.com";
  const CHECKCHERRY_API_KEY = "N7K-KDWT-CHT";
  const CHECKCHERRY_CONTACT_FORM_ID = 5681;

  /**
   * phase:
   * - loading: initial load attempt (DOM embed)
   * - fallback: we switch to iframe mode (more reliable)
   * - ready: iframe finished loading (swap skeleton -> form)
   * - error: script failed or too many attempts
   */
  const [phase, setPhase] = useState("loading");
  const [attempt, setAttempt] = useState(0);
  const [useIframe, setUseIframe] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const containerRef = useRef(null);

  // data-props must be a string
  const widgetProps = useMemo(
    () =>
      JSON.stringify({
        apiKey: CHECKCHERRY_API_KEY,
        contactFormId: CHECKCHERRY_CONTACT_FORM_ID,
        iframe: useIframe, // ✅ fallback = true
        host: CHECKCHERRY_HOST,
      }),
    [useIframe]
  );

  // ✅ JSON-LD: ContactPage (good for SEO + clarity)
  const contactPageLD = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Glo Event Co",
      url: "https://www.gloeventco.com/contact",
      about: {
        "@type": "LocalBusiness",
        name: "Glo Event Co",
        telephone: PHONE,
        email: EMAIL,
        address: {
          "@type": "PostalAddress",
          streetAddress: "11123 South Towne Sq. Suite B",
          addressLocality: "St. Louis",
          addressRegion: "MO",
          postalCode: "63123",
          addressCountry: "US",
        },
        areaServed: { "@type": "Place", name: "St. Louis, MO" },
        url: "https://www.gloeventco.com/",
      },
    }),
    []
  );

  // ✅ Inject canonical + JSON-LD into <head> without Helmet
  useEffect(() => {
    const canonHref = "https://www.gloeventco.com/contact";

    // canonical
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonHref);

    // JSON-LD
    const id = "ld-contactpage";
    const existing = document.getElementById(id);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.text = JSON.stringify(contactPageLD);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, [contactPageLD]);

  // 1) Load the CheckCherry script once (and wait for it)
  useEffect(() => {
    let cancelled = false;

    const loadScriptOnce = () =>
      new Promise((resolve, reject) => {
        // already loaded
        if (window.__checkcherry_loaded) return resolve(true);

        const existing = document.getElementById("checkcherry-script");
        if (existing) {
          existing.addEventListener("load", () => resolve(true), { once: true });
          existing.addEventListener("error", reject, { once: true });
          return;
        }

        const script = document.createElement("script");
        script.id = "checkcherry-script";
        script.src = `${CHECKCHERRY_HOST}/api/checkcherry_widgets`;
        script.type = "text/javascript";
        script.async = true;
        script.charset = "utf-8";

        script.onload = () => {
          window.__checkcherry_loaded = true;
          resolve(true);
        };
        script.onerror = reject;

        document.body.appendChild(script);
      });

    loadScriptOnce()
      .then(() => {
        if (cancelled) return;
        // Kick the first render
        setAttempt((n) => n + 1);
      })
      .catch(() => {
        if (cancelled) return;
        setPhase("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // 2) Observe: detect when the iframe is injected, then wait for iframe.onload
  useEffect(() => {
    const host = containerRef.current;
    if (!host) return;

    setIframeLoaded(false); // new attempt => reset
    let done = false;

    const attach = (iframe) => {
      if (!iframe || done) return;
      done = true;

      const handleLoad = () => {
        setIframeLoaded(true);
        setPhase("ready");
      };

      // attach load listener
      iframe.addEventListener("load", handleLoad, { once: true });

      // safety: if load never fires, still show after 8s
      setTimeout(() => {
        if (!done) return;
        setIframeLoaded((v) => {
          if (!v) {
            setPhase("ready");
            return true;
          }
          return v;
        });
      }, 8000);
    };

    // if iframe already there
    attach(host.querySelector("iframe"));

    const obs = new MutationObserver(() => {
      const iframe = host.querySelector("iframe");
      if (iframe) attach(iframe);
    });

    obs.observe(host, { childList: true, subtree: true });

    return () => obs.disconnect();
  }, [attempt, useIframe]);

  // 3) Retry / fallback
  useEffect(() => {
    if (phase === "error" || phase === "ready") return;

    const t = setTimeout(() => {
      const host = containerRef.current;

      const hasIframe = !!host?.querySelector("iframe");
      const hasInputs =
        !!host?.querySelector("input") || !!host?.querySelector("textarea");

      if (hasIframe || hasInputs) {
        if (hasInputs && !hasIframe) {
          setIframeLoaded(true);
          setPhase("ready");
        }
        return;
      }

      if (!useIframe) {
        if (attempt < 2) {
          setAttempt((n) => n + 1);
          return;
        }
        setUseIframe(true);
        setPhase("fallback");
        setAttempt((n) => n + 1);
        return;
      }

      if (attempt < 4) {
        setAttempt((n) => n + 1);
        return;
      }

      setPhase("error");
    }, 2200);

    return () => clearTimeout(t);
  }, [attempt, useIframe, phase]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero */}
      <header className="max-w-5xl mx-auto text-center">
        <NeonTitle title="You + Us = Awesome" id="contact-heading" />
        <p className="mt-3 text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
          Reach out for availability and quotes.
        </p>
      </header>

      {/* Layout */}
      <div className="grid md:grid-cols-2 gap-8 mt-10 items-start">
        {/* LEFT */}
        <div className="glass rounded-2xl p-6 self-start">
          <h3 className="font-display text-xl text-[var(--color-neon-blue)]">
            Contact Info
          </h3>

          <div
            className="text-sm text-gray-300 mt-3 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: ADDRESS_HTML }}
          />

          <p className="mt-2">
            <a className="underline" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </p>
          <p>
            <a className="underline" href={`tel:${PHONE}`}>
              {PHONE}
            </a>
          </p>

          <p className="text-xs text-gray-500 mt-4">Office Hours: 10am – 5pm</p>

          <ul className="mt-6 space-y-3 text-sm text-gray-300">
            <li className="flex gap-2">
              <span className="text-[var(--color-neon-red)]">✔</span>
              Fast response from a local St. Louis team
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--color-neon-green)]">✔</span>
              Transparent pricing &amp; no hidden fees
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--color-neon-blue)]">✔</span>
              Professional setup &amp; on-site support available
            </li>
          </ul>
        </div>

        {/* RIGHT — CheckCherry Form */}
        <div className="glass rounded-2xl p-6">
          <h3 className="font-display text-xl text-[var(--color-neon-blue)]">
            Send us a message
          </h3>
          <p className="mt-2 text-sm text-gray-400">
            Fill out the form and we’ll get back to you soon.
          </p>

          {/* Skeleton */}
          {!iframeLoaded && phase !== "error" && (
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm text-gray-400">
                {phase === "fallback" ? "Loading secure form…" : "Loading form…"}
              </div>

              <div className="mt-3 space-y-3">
                <div className="h-11 rounded-xl bg-white/5 border border-white/10 animate-pulse" />
                <div className="h-11 rounded-xl bg-white/5 border border-white/10 animate-pulse" />
                <div className="h-11 rounded-xl bg-white/5 border border-white/10 animate-pulse" />
                <div className="h-11 rounded-xl bg-white/5 border border-white/10 animate-pulse" />
                <div className="h-28 rounded-xl bg-white/5 border border-white/10 animate-pulse" />
                <div className="h-11 w-44 rounded-none bg-white/5 border border-white/10 animate-pulse" />
              </div>
            </div>
          )}

          {/* Widget mount point */}
          <div
            ref={containerRef}
            className={`mt-6 transition-opacity duration-300 ${
              iframeLoaded
                ? "opacity-100"
                : "opacity-0 pointer-events-none h-0 overflow-hidden"
            }`}
          >
            <div
              key={`cc-${attempt}-${useIframe ? "iframe" : "dom"}`}
              className="checkcherry__widget__contact-form"
              data-props={widgetProps}
            />
          </div>

          {/* Error */}
          {phase === "error" && (
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm text-gray-300">
                The form is taking longer than expected.
              </div>
              <div className="mt-2 text-xs text-gray-500">
                You can email us at{" "}
                <a className="underline" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>{" "}
                or call{" "}
                <a className="underline" href={`tel:${PHONE}`}>
                  {PHONE}
                </a>
                .
              </div>
            </div>
          )}

          {/* Styling: match dark theme */}
          <style>{`
            .checkcherry__widget__contact-form { color: rgba(255,255,255,.9); }

            .checkcherry__widget__contact-form input,
            .checkcherry__widget__contact-form textarea,
            .checkcherry__widget__contact-form select {
              width: 100% !important;
              background: rgba(255,255,255,.06) !important;
              color: rgba(255,255,255,.92) !important;
              border: 1px solid rgba(255,255,255,.12) !important;
              border-radius: 12px !important;
              padding: 12px 14px !important;
              outline: none !important;
              box-shadow: none !important;
            }

            .checkcherry__widget__contact-form textarea {
              min-height: 140px !important;
              resize: vertical !important;
            }

            .checkcherry__widget__contact-form input::placeholder,
            .checkcherry__widget__contact-form textarea::placeholder {
              color: rgba(255,255,255,.55) !important;
            }

            .checkcherry__widget__contact-form input:focus,
            .checkcherry__widget__contact-form textarea:focus,
            .checkcherry__widget__contact-form select:focus {
              border-color: rgba(0,131,253,.55) !important;
              box-shadow: 0 0 0 3px rgba(0,131,253,.25) !important;
              background: rgba(0,0,0,.35) !important;
            }

            .checkcherry__widget__contact-form label {
              color: rgba(255,255,255,.82) !important;
              font-size: 14px !important;
            }

            .checkcherry__widget__contact-form button,
            .checkcherry__widget__contact-form input[type="submit"] {
              display: inline-flex !important;
              align-items: center !important;
              justify-content: center !important;
              width: auto !important;
              margin-top: 10px !important;
              padding: 10px 18px !important;
              min-height: 44px !important;
              font-weight: 700 !important;
              font-size: 18px !important;
              color: var(--color-neon-cyan) !important;
              background: transparent !important;
              border: 1px solid var(--color-neon-cyan) !important;
              border-radius: 0px !important;
              box-shadow: 0 0 12px rgba(0,200,255,.35) !important;
              transition: box-shadow .2s ease, background-color .2s ease, transform .2s ease !important;
              cursor: pointer !important;
            }

            .checkcherry__widget__contact-form button:hover,
            .checkcherry__widget__contact-form input[type="submit"]:hover {
              background: rgba(255,255,255,.05) !important;
              box-shadow: 0 0 18px rgba(0,200,255,.55) !important;
            }

            .checkcherry__widget__contact-form small,
            .checkcherry__widget__contact-form .help,
            .checkcherry__widget__contact-form .error {
              color: rgba(255,255,255,.7) !important;
            }
          `}</style>

          <p className="mt-4 text-xs text-gray-500">
            Prefer email? Reach us at{" "}
            <a className="underline" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
