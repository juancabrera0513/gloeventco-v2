import { Link } from "react-router-dom";
import { EMAIL, PHONE } from "../lib/constants";

export default function Footer({
  logoSrc = "/images/glo-logo.webp",
  showTrustedBy = false,
}) {
  const title =
  "text-[15px] font-semibold tracking-wide " +
  "text-[#2f95ff] " +
  "[text-shadow:0_0_6px_rgba(0,131,253,.45)]";


  const itemLinkBase =
    "inline-flex items-center rounded-lg transition-all duration-300 " +
    "h-11 px-3 md:h-auto md:px-0 md:py-1.5 " +
    "text-white/90 hover:text-white " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20";

  const glowGreen =
    "hover:text-[#23ff11] " +
    "hover:[filter:drop-shadow(0_0_14px_rgba(35,255,17,.9))_drop-shadow(0_0_34px_rgba(35,255,17,.65))_drop-shadow(0_0_60px_rgba(35,255,17,.35))]";

  const glowRed =
    "hover:text-[#ff4567] " +
    "hover:[filter:drop-shadow(0_0_14px_rgba(255,69,103,.9))_drop-shadow(0_0_34px_rgba(255,69,103,.65))_drop-shadow(0_0_60px_rgba(255,69,103,.35))]";

  const glowBlue =
    "hover:text-[var(--color-neon-blue)] " +
    "hover:[filter:drop-shadow(0_0_14px_rgba(0,131,253,.9))_drop-shadow(0_0_34px_rgba(0,131,253,.65))_drop-shadow(0_0_60px_rgba(0,131,253,.35))]";

  const socialBtnBase =
    "inline-flex items-center justify-center h-10 w-10 rounded-full " +
    "border bg-white/5 transition-all duration-300 " +
    "focus-visible:outline-none focus-visible:ring-2";

  const socialBlue =
    "border-[color:var(--color-neon-blue)]/30 text-[color:var(--color-neon-blue)]/90 " +
    "hover:border-[color:var(--color-neon-blue)]/70 hover:bg-white/10 " +
    "hover:shadow-[0_0_0_1px_rgba(0,131,253,.25),0_0_22px_rgba(0,131,253,.35)] " +
    "focus-visible:ring-[color:var(--color-neon-blue)]/60";

  const socialPink =
    "border-[#ff4567]/30 text-[#ff4567]/90 " +
    "hover:border-[#ff4567]/70 hover:bg-white/10 " +
    "hover:shadow-[0_0_0_1px_rgba(255,69,103,.25),0_0_22px_rgba(255,69,103,.35)] " +
    "focus-visible:ring-[#ff4567]/60";

  const bottomLink =
    "underline underline-offset-4 transition-colors " +
    "text-white/80 hover:text-white " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 focus-visible:rounded";

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start">
          <div className="shrink-0">
            <img
              src={logoSrc}
              alt="Glo Event Co logo"
              className="h-28 w-auto md:h-32"
              loading="lazy"
            />
          </div>

          <div className="flex-1 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h4 className={title}>Brand</h4>

              <div className="mt-3">
                <div className="text-white text-lg font-semibold">
                  Glo Event Co
                </div>
                <div className="text-white/70 mt-1">Elevate Your Event</div>

                <p className="text-white/70 mt-4 max-w-sm leading-relaxed">
                  Locally owned and operated in St. Louis, Missouri.
                </p>

                <div className="mt-4 flex gap-3">
                  <a
                    href="https://www.facebook.com/gloeventco"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className={`${socialBtnBase} ${socialBlue}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12H16l-.4 3h-2.5v7A10 10 0 0 0 22 12Z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com/gloeventco"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className={`${socialBtnBase} ${socialPink}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm4.75-.9a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className={title}>Services</h4>
              <ul className="mt-3 space-y-1">
                <li>
                  <Link className={`${itemLinkBase} ${glowGreen}`} to="/services/silent-disco">
                    Silent Disco Rentals
                  </Link>
                </li>
                <li>
                  <Link className={`${itemLinkBase} ${glowRed}`} to="/services/silent-disco">
                    Silent Disco DJ Experience
                  </Link>
                </li>
                <li>
                  <Link className={`${itemLinkBase} ${glowBlue}`} to="/services/photo-booth">
                    Digital Photo Booth Rental
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className={title}>Company</h4>
              <ul className="mt-3 space-y-1">
                <li>
                  <Link className={`${itemLinkBase} ${glowGreen}`} to="/about">
                    About
                  </Link>
                </li>
                {showTrustedBy && (
                  <li>
                    <Link className={itemLinkBase} to="/trusted-by">
                      Trusted By
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            <div>
              <h4 className={title}>Contact</h4>
              <ul className="mt-3 space-y-1">
                <li>
                  <a className={`${itemLinkBase} ${glowGreen}`} href={`tel:${PHONE}`}>
                    {PHONE}
                  </a>
                </li>
                <li>
                  <a className={`${itemLinkBase} ${glowRed}`} href={`mailto:${EMAIL}`}>
                    {EMAIL}
                  </a>
                </li>
                <li>
                  <Link className={`${itemLinkBase} ${glowBlue}`} to="/contact">
                    Connect with our team
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-white/70">
          Serving St. Louis and surrounding areas since 2018. Travel available upon request.
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-white/70 flex flex-wrap gap-1">
            <span>{new Date().getFullYear()} © Glo Event Co. All rights reserved.</span>
            <span aria-hidden="true">|</span>
            <Link to="/privacy" className={bottomLink}>Privacy Policy</Link>
            <span aria-hidden="true">|</span>
            <Link to="/terms" className={bottomLink}>Terms and Conditions</Link>
          </div>

          <div className="text-xs text-white/80">
            Site by{" "}
            <a
              href="https://domiwebsites.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${bottomLink} hover:[filter:drop-shadow(0_0_12px_rgba(0,131,253,.35))]`}
            >
              Domi Websites
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
