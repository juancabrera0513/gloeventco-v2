import { useEffect, useMemo } from "react";

function normalizeUrl(url) {
  if (!url) return "";
  const u = String(url).trim();
  if (!u) return "";
  if (u.startsWith("/")) return `${window.location.origin}${u}`;
  if (/^https?:\/\//i.test(u)) return u;
  if (u.includes(".") && !u.includes(" ")) return `https://${u}`;
  return u;
}

export default function EventModal({
  open,
  onClose,
  dateLabel = "",
  events = [],
  activeId = null,
  onSelect,
  accent = "blue",
}) {
  const activeIndex = useMemo(() => {
    const idx = events.findIndex((e) => e.id === activeId);
    return idx >= 0 ? idx : 0;
  }, [events, activeId]);

  const active = events[activeIndex] || null;
  const safeUrl = useMemo(
    () => normalizeUrl(active?.url || ""),
    [active?.url]
  );

  const hasMultiple = events.length > 1;
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < events.length - 1;

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="calm__overlay" role="dialog" aria-modal="true">
      <button
        className="calm__backdrop"
        type="button"
        onClick={onClose}
        aria-label="Close modal"
      />

      <div className={`calm calm--${accent}`} role="document">
        <div className="calm__top">
          <div className="calm__meta">
            <div className="calm__date">{dateLabel}</div>
            <div className="calm__count">
              {events.length} event{events.length === 1 ? "" : "s"}
            </div>
          </div>

          <button
            type="button"
            className="calm__close"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {hasMultiple && (
          <div className="calm__mobileNav">
            <button
              className="calm__navBtn"
              disabled={!hasPrev}
              onClick={() =>
                hasPrev && onSelect(events[activeIndex - 1].id)
              }
            >
              ‹ Prev
            </button>

            <span className="calm__navLabel">
              {activeIndex + 1} / {events.length}
            </span>

            <button
              className="calm__navBtn"
              disabled={!hasNext}
              onClick={() =>
                hasNext && onSelect(events[activeIndex + 1].id)
              }
            >
              Next ›
            </button>
          </div>
        )}

        <div className="calm__body">
          <aside className="calm__list">
            {events.map((ev) => {
              const isActive = ev.id === active?.id;
              return (
                <button
                  key={ev.id}
                  type="button"
                  className={`calm__item ${isActive ? "is-active" : ""}`}
                  onClick={() => onSelect?.(ev.id)}
                >
                  <div className="calm__itemTitle">{ev.title}</div>
                </button>
              );
            })}
          </aside>

          <section className="calm__detail">
            {active?.image_url && (
              <div className="calm__hero">
                <img
                  src={active.image_url}
                  alt={active.title}
                  className="calm__heroImg"
                />
                <div className="calm__heroGlow" />
              </div>
            )}

            <h3 className="calm__title">{active?.title}</h3>

            {active?.description ? (
              <p className="calm__desc">{active.description}</p>
            ) : (
              <p className="calm__desc calm__desc--muted">
                No additional details.
              </p>
            )}

            <div className="calm__actions">
              {safeUrl && (
                <a
                  href={safeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="calm__btn"
                >
                  Open link
                </a>
              )}

              <button
                type="button"
                className="calm__btn calm__btn--ghost"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
