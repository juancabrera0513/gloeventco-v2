import { useEffect } from "react";

export default function EventModal({
  open,
  onClose,
  dateLabel = "",
  events = [],
  activeId = null,
  onSelect,
  accent = "blue", // blue | red | green
}) {
  const active = events.find((e) => e.id === activeId) || events[0];

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
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

      <div className={`calm calm--${accent}`}>
        {/* Header */}
        <div className="calm__top">
          <div className="calm__meta">
            <div className="calm__date">{dateLabel}</div>
            <div className="calm__count">
              {events.length} event{events.length === 1 ? "" : "s"}
            </div>
          </div>

          <button type="button" className="calm__close" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="calm__body">
          {/* Left list */}
          <aside className="calm__list">
            {events.map((ev) => {
              const isActive = ev.id === (active?.id ?? null);
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

          {/* Right detail */}
          <section className="calm__detail">
            {active?.image_url ? (
              <div className="calm__imgWrap">
                <img
                  src={active.image_url}
                  alt={active.title || "Event image"}
                  className="calm__img"
                  loading="lazy"
                />
              </div>
            ) : null}

            <h3 className="calm__title">{active?.title}</h3>

            {active?.description ? (
              <p className="calm__desc">{active.description}</p>
            ) : (
              <p className="calm__desc calm__desc--muted">
                No additional details.
              </p>
            )}

            <div className="calm__actions">
              {active?.url ? (
                <a
                  href={active.url}
                  target="_blank"
                  rel="noreferrer"
                  className="calm__btn"
                >
                  Open link
                </a>
              ) : null}

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
