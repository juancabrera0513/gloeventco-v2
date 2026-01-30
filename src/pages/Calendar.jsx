// src/pages/Calendar.jsx
import { useEffect, useMemo, useState } from "react";
import BigCalendar from "../components/BigCalendar";
import { supabase } from "../lib/supabaseClient";

const BUCKET = "calendar";

function toPublicUrl(path) {
  if (!path) return "";
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data?.publicUrl || "";
}

export default function Calendar() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  // ✅ Start view (optional)
  const initialYear = 2026;
  const initialMonthIndex = 1; // Feb = 1

  useEffect(() => {
    let alive = true;

    async function load() {
      setLoading(true);
      setErr("");

      try {
        const { data, error } = await supabase
          .from("calendar_events")
          .select("id, event_date, title, description, url, image_path")
          .order("event_date", { ascending: true })
          .limit(1000);

        if (error) throw error;

        const mapped =
          (data || []).map((r) => ({
            id: r.id,
            date: r.event_date, // ✅ BigCalendar espera date: "YYYY-MM-DD"
            title: r.title || "",
            description: r.description || "",
            url: r.url || "",
            image_url: toPublicUrl(r.image_path || ""),
          })) || [];

        if (!alive) return;
        setEvents(mapped);
      } catch (e) {
        if (!alive) return;
        setErr(e?.message || "Failed to load calendar events.");
      } finally {
        if (!alive) return;
        setLoading(false);
      }
    }

    load();
    return () => {
      alive = false;
    };
  }, []);

  const hint = useMemo(() => {
    if (loading) return "Loading events…";
    if (err) return `Error: ${err}`;
    if (!events.length) return "No events yet.";
    return "";
  }, [loading, err, events.length]);

  return (
    <section className="bg-[color:var(--color-base-bg)]">
      <div className="mx-auto max-w-7xl px-4 py-10">
        {hint ? (
          <div className="mb-6 glass neon-border rounded-2xl p-4 text-sm text-gray-200">
            {hint}
          </div>
        ) : null}

        <BigCalendar
          initialYear={initialYear}
          initialMonthIndex={initialMonthIndex}
          accent="blue"
          events={events}
          maxVisiblePerDay={2}
        />
      </div>
    </section>
  );
}
