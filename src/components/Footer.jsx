import { Link } from "react-router-dom";
import { EMAIL, PHONE } from "../lib/constants";

export default function Footer({
  logoSrc = "/images/glo-logo.webp",
  showTrustedBy = false,
}) {
  // Títulos de columna
  const title = "text-[15px] font-semibold tracking-wide text-blue-400";

  /**
   * Item link:
   * - Mobile: área tocable
   * - Desktop: alineado limpio (como Company)
   */
  const itemLink =
    "inline-flex items-center rounded-lg transition-colors " +
    "h-11 px-3 md:h-auto md:px-0 md:py-1.5 md:rounded-none " +
    "text-white/90 hover:text-white hover:bg-white/5 md:hover:bg-transparent " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20";

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start">
          {/* Logo */}
          <div className="shrink-0">
            <img
              src={logoSrc}
              alt="Glo Event Co logo"
              className="h-28 w-auto md:h-32"
              loading="lazy"
            />
          </div>

          {/* Columns */}
          <div className="flex-1 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            {/* Column 1: Brand */}
            <div>
              <h4 className={title}>Brand</h4>

              <div className="mt-3">
                <div className="text-white text-lg font-semibold">
                  Glo Event Co
                </div>
                <div className="text-white-400 mt-1">Elevate Your Event</div>

                <p className="text-whhite-400 mt-4 max-w-sm leading-relaxed">
                  Locally owned and operated in St. Louis, Missouri.
                </p>
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className={title}>Services</h4>

              <div className="mt-3">
                <ul className="space-y-1 list-none p-0 m-0">
                  <li>
                    <Link className={itemLink} to="/services/silent-disco">
                      Silent Disco Rentals
                    </Link>
                  </li>
                  <li>
                    <Link className={itemLink} to="/services/silent-disco">
                      Silent Disco DJ Experience
                    </Link>
                  </li>
                  <li>
                    <Link className={itemLink} to="services/photo-booth">
                      Digital Photo Booth Rental
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className={title}>Company</h4>

              <div className="mt-3">
                <ul className="space-y-1 list-none p-0 m-0">
                  <li>
                    <Link className={itemLink} to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    {/* <Link className={itemLink} to="/portfolio">
                      Gallery
                    </Link> */}
                  </li>

                  {showTrustedBy && (
                    <li>
                      <Link className={itemLink} to="/trusted-by">
                        Trusted By
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className={title}>Contact</h4>

              <div className="mt-3">
                <ul className="space-y-1 list-none p-0 m-0">
                  <li>
                    <a className={itemLink} href={`tel:${PHONE}`}>
                      {PHONE}
                    </a>
                  </li>
                  <li>
                    <a className={itemLink} href={`mailto:${EMAIL}`}>
                      {EMAIL}
                    </a>
                  </li>
                  <li>
                    <Link className={itemLink} to="/contact">
                      Connect with our team
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Centered region note */}
        <div className="mt-12 text-center text-sm text-gray-400">
          Serving St. Louis and surrounding areas since 2018. Travel available
          upon request.
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs text-gray-500 flex flex-wrap gap-1">
  <span>{new Date().getFullYear()} © Glo Event Co. All rights reserved.</span>
  <span>|</span>
  <Link
    to="/privacy"
    className="underline underline-offset-4 hover:text-white"
  >
    Privacy Policy
  </Link>
  <span>|</span>
  <Link
    to="/terms"
    className="underline underline-offset-4 hover:text-white"
  >
    Terms and Conditions
  </Link>
</div>


          <div className="text-xs text-gray-500">
            Site by{" "}
            <a
              href="https://domiwebsites.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-gray-300 hover:text-white"
            >
              Domi Websites
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
