import React, { useMemo, useState, useEffect } from "react";
import EventModal from "./EventModal";
import "./big-calendar.css"; 

const DOW = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"];
const MONTHS = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

const pad2 = (n) => String(n).padStart(2, "0");
const isoKey = (y, mIndex, d) => `${y}-${pad2(mIndex + 1)}-${pad2(d)}`;


function buildMonthMatrix(year, monthIndex) {
  const first = new Date(year, monthIndex, 1);
  const last = new Date(year, monthIndex + 1, 0);
  const daysInMonth = last.getDate();
  const startDow = first.getDay(); 

  const needed = startDow + daysInMonth;
  const totalCells = Math.ceil(needed / 7) * 7; 

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

function useIsMobile(breakpointPx = 720) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(`(max-width:${breakpointPx}px)`).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(`(max-width:${breakpointPx}px)`);
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, [breakpointPx]);

  return isMobile;
}

export default function BigCalendar({
  initialYear = 2026,
  initialMonthIndex = 1,
  accent = "blue",

  events = [],

  maxVisiblePerDay = 2,

  showMobileLegend = true,
  mobileLegendText = "Green glow = events on that day (tap a date to view details)",
}) {
  const isMobile = useIsMobile(720);

  const [view, setView] = useState({
    year: initialYear,
    monthIndex: initialMonthIndex,
  });

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
    for (const k of Object.keys(map)) {
      map[k].sort((a, b) =>
        String(a.title || "").localeCompare(String(b.title || ""))
      );
    }
    return map;
  }, [events]);

  const openDay = (dateKey, selectedId = null) => {
    const list = eventsByDate[dateKey] || [];
    if (!list.length) return; 
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

        <div className="caln__dow">
          {DOW.map((d) => (
            <div key={d} className="caln__dowcell">
              {d}
            </div>
          ))}
        </div>

        <div className="caln__grid">
          {cells.map((c, idx) => {
            const list = c.inMonth ? eventsByDate[c.key] || [] : [];
            const hasEvents = c.inMonth && list.length > 0;

            const visible = list.slice(0, maxVisiblePerDay);
            const extra = Math.max(0, list.length - visible.length);

            if (isMobile) {
              return (
                <button
                  key={`${c.key}-${idx}`}
                  type="button"
                  className={[
                    "caln__cell",
                    c.inMonth ? "" : "is-out",
                    hasEvents ? "caln__cell--hasEvents" : "",
                  ].join(" ")}
                  onClick={() => openDay(c.key, list[0]?.id ?? null)}
                  disabled={!hasEvents}
                  aria-label={
                    hasEvents
                      ? `Open events for ${c.key}`
                      : c.inMonth
                      ? `No events for ${c.key}`
                      : "Outside month"
                  }
                >
                  <div className="caln__dayRow">
                    <div className="caln__day">{c.day}</div>
                  </div>
                </button>
              );
            }

            return (
              <div
                key={`${c.key}-${idx}`}
                className={`caln__cell ${c.inMonth ? "" : "is-out"}`}
              >
                <div className="caln__dayRow">
                  <div className="caln__day">{c.day}</div>
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

        {isMobile && showMobileLegend ? (
          <div className="caln__legend">
            <span className="caln__legendDot" aria-hidden="true" />
            <span className="caln__legendText">{mobileLegendText}</span>
          </div>
        ) : null}
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
