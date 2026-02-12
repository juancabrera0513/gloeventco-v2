import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { LOGO_TEXT } from "../lib/constants";

const logoSrc = "/images/glo-event-co-logo.webp";
const CLIENT_PORTAL_URL = "https://glo-event-co.checkcherry.com/users/sign_in";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  

  const closeMobile = () => setOpen(false);

  const linkBase = "px-2 py-1 rounded underline-offset-4";
  const linkClasses = (isActive) =>
    `${linkBase} glo-hover-soft hover:underline ${
      isActive ? "text-white" : "text-gray-300"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-[color:var(--color-base-bg)]/70 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <NavLink
            end
            to="/"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                scrollTop();
              } else {
                closeMobile();
              }
            }}
            className="flex items-center gap-3 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded-lg"
            aria-label="Go to Home"
          >
            <img
              src={logoSrc}
              alt="Glo Event Co logo"
              className="h-20 w-auto sm:h-22 md:h-24"
              fetchPriority="high"
              decoding="async"
              draggable={false}
            />
          </NavLink>

          <div className="flex-1 lg:flex-none flex justify-center lg:justify-start px-2">
            <span className="font-display text-lg sm:text-xl md:text-2xl tracking-widest neon-text-cyan text-center">
              {LOGO_TEXT}
            </span>
          </div>

          <button
            className="lg:hidden p-2 rounded neon-border glo-hover shrink-0"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>

          <div className="hidden lg:flex items-center gap-5">
            <nav className="flex items-center gap-5">
              <NavLink end to="/" className={({ isActive }) => linkClasses(isActive)}>
                Home
              </NavLink>

              <NavLink to="/services" className={({ isActive }) => linkClasses(isActive)}>
                Services
              </NavLink>

              <NavLink
                to="/services/silent-disco"
                className={({ isActive }) => linkClasses(isActive)}
              >
                Silent Disco
              </NavLink>

              <NavLink
                to="/services/photo-booth"
                className={({ isActive }) => linkClasses(isActive)}
              >
                Photo Booth
              </NavLink>

              <NavLink to="/contact" className={({ isActive }) => linkClasses(isActive)}>
                Connect
              </NavLink>

              <a
                href={CLIENT_PORTAL_URL}
                target="_blank"
                rel="noreferrer"
                className={`${linkBase} text-gray-300 glo-hover-soft hover:underline`}
                title="Client Portal"
              >
                Client Portal
              </a>
            </nav>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-white/5 pt-3 pb-4">
            <nav className="flex flex-col gap-4">
              <NavLink
                end
                to="/"
                className={({ isActive }) => linkClasses(isActive)}
                onClick={() => closeMobile()}
              >
                Home
              </NavLink>

              <NavLink
                to="/services"
                className={({ isActive }) => linkClasses(isActive)}
                onClick={() => closeMobile()}
              >
                Services
              </NavLink>

              <NavLink
                to="/services/silent-disco"
                className={({ isActive }) => linkClasses(isActive)}
                onClick={() => closeMobile()}
              >
                Silent Disco
              </NavLink>

              <NavLink
                to="/services/photo-booth"
                className={({ isActive }) => linkClasses(isActive)}
                onClick={() => closeMobile()}
              >
                Photo Booth
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) => linkClasses(isActive)}
                onClick={() => closeMobile()}
              >
                Connect
              </NavLink>

              <a
                href={CLIENT_PORTAL_URL}
                target="_blank"
                rel="noreferrer"
                className="px-2 py-1 rounded text-gray-300 glo-hover-soft hover:underline"
                onClick={() => closeMobile()}
              >
                Client Portal
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
