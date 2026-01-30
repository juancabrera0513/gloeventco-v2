import React, { useMemo, useState } from "react";
import EventModal from "./EventModal";

const DOW = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"];
const MONTHS = [
  "JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE",
  "JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER",
];

const pad2 = (n) => String(n).padStart(2, "0");
const isoKey = (y, mIndex, d) => `${y}-${pad2(mIndex + 1)}-${pad2(d)}`;

/**
 * ✅ Month grid with dynamic weeks (4/5/6),
 * and blank out-of-month cells (no March numbers inside Feb view).
 */
function buildMonthMatrix(year, monthIndex) {
  const first = new Date(year, monthIndex, 1);
  const last = new Date(year, monthIndex + 1, 0);
  const daysInMonth = last.getDate();
  const startDow = first.getDay(); // 0=Sun

  const needed = startDow + daysInMonth;
  const totalCells = Math.ceil(needed / 7) * 7; // 28/35/42

  const cells = [];
  for (let i = 0; i < totalCells; i++) {
    const dayNum = i - startDow + 1;

    if (dayNum < 1 || dayNum > daysInMonth) {
      cells.push({
        inMonth: false,
        day: "",
        key: `blank-${year}-${monthIndex}-${i}`,
      });
    } else {
      cells.push({
        inMonth: true,
        day: dayNum,
        key: isoKey(year, monthIndex, dayNum),
      });
    }
  }
  return cells;
}

function formatDateLabel(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, (m || 1) - 1, d || 1);
  return date.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BigCalendar({
  initialYear = 2026,
  initialMonthIndex = 1,
  accent = "blue",

  // ✅ events: { id, date:'YYYY-MM-DD', title, description?, url?, image_url? }
  events = [],

  // ✅ show only N cards per day
  maxVisiblePerDay = 2,
}) {
  const [view, setView] = useState({
    year: initialYear,
    monthIndex: initialMonthIndex,
  });

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDate, setModalDate] = useState("");
  const [activeId, setActiveId] = useState(null);

  const { year, monthIndex } = view;
  const monthTitle = `${MONTHS[monthIndex]}  ${year}`;

  const cells = useMemo(
    () => buildMonthMatrix(year, monthIndex),
    [year, monthIndex]
  );

  const eventsByDate = useMemo(() => {
    const map = {};
    for (const ev of events || []) {
      if (!ev?.date || !ev?.id) continue;
      (map[ev.date] ||= []).push(ev);
    }
    // stable order by title (simple)
    for (const k of Object.keys(map)) {
      map[k].sort((a, b) =>
        String(a.title || "").localeCompare(String(b.title || ""))
      );
    }
    return map;
  }, [events]);

  const openDay = (dateKey, selectedId = null) => {
    const list = eventsByDate[dateKey] || [];
    const fallbackId = list[0]?.id ?? null;
    setModalDate(dateKey);
    setActiveId(selectedId || fallbackId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalDate("");
    setActiveId(null);
  };

  const goPrev = () => {
    closeModal();
    setView((v) =>
      v.monthIndex === 0
        ? { year: v.year - 1, monthIndex: 11 }
        : { year: v.year, monthIndex: v.monthIndex - 1 }
    );
  };

  const goNext = () => {
    closeModal();
    setView((v) =>
      v.monthIndex === 11
        ? { year: v.year + 1, monthIndex: 0 }
        : { year: v.year, monthIndex: v.monthIndex + 1 }
    );
  };

  const accentSoft =
    accent === "red"
      ? "glo-hover-soft-pink"
      : accent === "green"
      ? "glo-hover-soft-green"
      : "glo-hover-soft";

  const dayEvents = modalDate ? eventsByDate[modalDate] || [] : [];

  return (
    <>
      <section className={`caln caln--${accent}`} aria-label={monthTitle}>
        {/* Header */}
        <header className="caln__header caln__header--nav">
          <button
            type="button"
            className={`caln__navbtn ${accentSoft}`}
            onClick={goPrev}
            aria-label="Previous month"
            title="Previous month"
          >
            ‹
          </button>

          <h1 className="caln__title neon-sign cyan">{monthTitle}</h1>

          <button
            type="button"
            className={`caln__navbtn ${accentSoft}`}
            onClick={goNext}
            aria-label="Next month"
            title="Next month"
          >
            ›
          </button>
        </header>

        {/* DOW */}
        <div className="caln__dow">
          {DOW.map((d) => (
            <div key={d} className="caln__dowcell">
              {d}
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="caln__grid">
          {cells.map((c, idx) => {
            const list = c.inMonth ? eventsByDate[c.key] || [] : [];
            const visible = list.slice(0, maxVisiblePerDay);
            const extra = Math.max(0, list.length - visible.length);

            return (
              <div
                key={`${c.key}-${idx}`}
                className={`caln__cell ${c.inMonth ? "" : "is-out"}`}
              >
                <div className="caln__dayRow">
                  <div className="caln__day">{c.day}</div>
                  {c.inMonth && list.length > 0 ? (
                    <div className="caln__pill">{list.length}</div>
                  ) : null}
                </div>

                <div className="caln__events">
                  {visible.map((ev) => (
                    <button
                      key={ev.id}
                      type="button"
                      className="cal-evt cal-evt--confirmed"
                      onClick={() => openDay(c.key, ev.id)}
                      title={ev.title}
                    >
                      <span className="cal-evt__title">{ev.title}</span>
                    </button>
                  ))}

                  {c.inMonth && extra > 0 ? (
                    <button
                      type="button"
                      className={`cal-evt cal-evt--more ${accentSoft}`}
                      onClick={() => openDay(c.key, visible[0]?.id ?? null)}
                      title="View more"
                    >
                      +{extra} more
                    </button>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <EventModal
        open={modalOpen}
        onClose={closeModal}
        dateLabel={modalDate ? formatDateLabel(modalDate) : ""}
        events={dayEvents}
        activeId={activeId}
        onSelect={setActiveId}
        accent={accent}
      />
    </>
  );
}
