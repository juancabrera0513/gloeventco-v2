import { useEffect, useMemo, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

const BUCKET = "calendar";
const PAGE_SIZE = 10;

function toPublicUrl(path) {
  if (!path) return "";
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data?.publicUrl || "";
}

export default function AdminCalendar() {
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState("");
  const [err, setErr] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [eventDate, setEventDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const [currentImagePath, setCurrentImagePath] = useState("");
  const [file, setFile] = useState(null);

  const [saving, setSaving] = useState(false);

  const pageCount = useMemo(
    () => Math.max(1, Math.ceil((total || 0) / PAGE_SIZE)),
    [total]
  );

  const imagePreviewUrl = useMemo(() => {
    if (file) return URL.createObjectURL(file);
    return toPublicUrl(currentImagePath);
  }, [file, currentImagePath]);

  useEffect(() => {
    return () => {
      if (file) URL.revokeObjectURL(imagePreviewUrl);
    };
    
  }, [file]);

  const load = async (nextPage = page) => {
    setLoading(true);
    setErr("");

    const p = Math.min(Math.max(1, nextPage), pageCount || 1);
    const from = (p - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    try {
      const { data, error, count } = await supabase
        .from("calendar_events")
        .select(
          "id, event_date, title, description, url, image_path, created_at",
          { count: "exact" }
        )
        .order("event_date", { ascending: true })
        .order("created_at", { ascending: true })
        .range(from, to);

      if (error) throw error;

      setRows(data || []);
      setTotal(count || 0);
      setPage(p);
    } catch (e) {
      setErr(e?.message || "Failed to load events.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load(1);
  }, []);

  useEffect(() => {
    if (page > pageCount) load(pageCount);
  }, [pageCount]);

  const resetForm = () => {
    setEditingId(null);
    setEventDate("");
    setTitle("");
    setDescription("");
    setUrl("");
    setCurrentImagePath("");
    setFile(null);
  };

  const loadIntoForm = (ev) => {
    setEditingId(ev.id);
    setEventDate(ev.event_date || "");
    setTitle(ev.title || "");
    setDescription(ev.description || "");
    setUrl(ev.url || "");
    setCurrentImagePath(ev.image_path || "");
    setFile(null);

    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {}
  };

  async function uploadImageIfAny() {
    if (!file) return currentImagePath || "";

    if (currentImagePath) {
      await supabase.storage.from(BUCKET).remove([currentImagePath]);
    }

    const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
    const safeExt = ext.length <= 5 ? ext : "jpg";
    const path = `events/${Date.now()}-${Math.random()
      .toString(16)
      .slice(2)}.${safeExt}`;

    const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type || "image/jpeg",
    });

    if (error) throw error;
    return path;
  }

  async function onSave(e) {
    e.preventDefault();
    setSaving(true);
    setErr("");

    try {
      if (!eventDate) throw new Error("Pick a date.");
      if (!title.trim()) throw new Error("Title is required.");

      const image_path = await uploadImageIfAny();

      if (editingId) {
        const { error } = await supabase
          .from("calendar_events")
          .update({
            event_date: eventDate,
            title: title.trim(),
            description: description.trim() || null,
            url: url.trim() || null,
            image_path: image_path || null,
          })
          .eq("id", editingId);

        if (error) throw error;
      } else {
        const { error } = await supabase.from("calendar_events").insert({
          event_date: eventDate,
          title: title.trim(),
          description: description.trim() || null,
          url: url.trim() || null,
          image_path: image_path || null,
        });

        if (error) throw error;
      }

      resetForm();
      await load(page);
    } catch (e2) {
      setErr(e2?.message || "Save failed.");
    } finally {
      setSaving(false);
    }
  }

  async function onDelete(ev) {
    const ok = window.confirm(`Delete this event?\n\n${ev.title}\n${ev.event_date}`);
    if (!ok) return;

    setBusyId(ev.id);
    setErr("");

    try {
      const { error } = await supabase
        .from("calendar_events")
        .delete()
        .eq("id", ev.id);

      if (error) throw error;

      if (ev.image_path) {
        await supabase.storage.from(BUCKET).remove([ev.image_path]);
      }

      if (editingId === ev.id) resetForm();

      await load(page);
    } catch (e) {
      setErr(e?.message || "Failed to delete.");
    } finally {
      setBusyId("");
    }
  }

  async function onRemoveImage() {
    setFile(null);

    if (editingId) {
      setSaving(true);
      setErr("");
      try {
        if (currentImagePath) {
          await supabase.storage.from(BUCKET).remove([currentImagePath]);
        }

        const { error } = await supabase
          .from("calendar_events")
          .update({ image_path: null })
          .eq("id", editingId);

        if (error) throw error;

        setCurrentImagePath("");
        await load(page);
      } catch (e) {
        setErr(e?.message || "Failed to remove image.");
      } finally {
        setSaving(false);
      }
    } else {
      setCurrentImagePath("");
    }
  }

  return (
    <section className="bg-[color:var(--color-base-bg)]">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex items-end justify-between gap-3 flex-wrap">
          <h1 className="neon-sign cyan text-2xl md:text-3xl font-extrabold tracking-widest uppercase">
            Admin Calendar
          </h1>

          <div className="text-xs text-gray-400">
            Total: <b className="text-gray-200">{total}</b>
          </div>
        </div>

        {err ? (
          <div className="mt-4 glass neon-border rounded-2xl p-4 text-sm text-red-200">
            {err}
          </div>
        ) : null}

        <form onSubmit={onSave} className="mt-6 glass neon-border rounded-2xl p-5">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="text-sm text-gray-300 tracking-widest uppercase">
              {editingId ? (
                <>
                  Editing:{" "}
                  <span className="font-extrabold neon-text-green">#{editingId}</span>
                </>
              ) : (
                "Create New Event"
              )}
            </div>

            {editingId ? (
              <button
                type="button"
                onClick={resetForm}
                className="h-10 px-4 rounded-xl border border-white/10 bg-transparent text-gray-100 glo-hover-soft"
              >
                Cancel Edit
              </button>
            ) : null}
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <label className="block">
              <div className="text-xs tracking-widest uppercase text-gray-300">Date</div>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-gray-100"
                required
              />
            </label>

            <label className="block">
              <div className="text-xs tracking-widest uppercase text-gray-300">
                Title (shows on calendar)
              </div>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-gray-100"
                placeholder="Casey James’ Petite Party…"
                required
              />
            </label>

            <label className="block md:col-span-2">
              <div className="text-xs tracking-widest uppercase text-gray-300">Description</div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-gray-100"
                rows={3}
                placeholder="Drop-off at 6pm…"
              />
            </label>

            <label className="block md:col-span-2">
              <div className="text-xs tracking-widest uppercase text-gray-300">URL (optional)</div>
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-gray-100"
                placeholder="https://www.gloeventco.com/contact"
              />
            </label>

            <div className="block md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="text-xs tracking-widest uppercase text-gray-300">
                  Image (optional)
                </div>

                {(currentImagePath || file) ? (
                  <button
                    type="button"
                    onClick={onRemoveImage}
                    disabled={saving}
                    className="h-9 px-4 rounded-xl border border-white/10 bg-[rgba(255,69,103,0.12)] text-gray-100 glo-hover-pink disabled:opacity-60"
                  >
                    Remove Image
                  </button>
                ) : null}
              </div>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="mt-3 block w-full text-sm text-gray-200 file:mr-3 file:rounded-xl file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-gray-100 hover:file:bg-white/15"
              />

              {imagePreviewUrl ? (
                <div className="mt-3 overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src={imagePreviewUrl}
                    alt="Preview"
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="mt-2 text-xs text-gray-400">No image.</div>
              )}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={saving}
              className="h-11 rounded-xl px-5 font-extrabold tracking-wide uppercase border border-white/10 bg-white/10 text-gray-100 glo-hover"
            >
              {saving ? "Saving…" : editingId ? "Save Changes" : "Create Event"}
            </button>

            <button
              type="button"
              onClick={() => load(page)}
              className="h-11 rounded-xl px-5 font-extrabold tracking-wide uppercase border border-white/10 bg-transparent text-gray-100 glo-hover-soft"
            >
              Refresh
            </button>
          </div>
        </form>

        <div className="mt-8 glass neon-border rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between gap-3 p-4 border-b border-white/10 flex-wrap">
            <div className="text-sm text-gray-300 tracking-widest uppercase">Events</div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => load(1)}
                disabled={loading || page <= 1}
                className="h-10 px-3 rounded-xl border border-white/10 bg-white/5 text-gray-100 disabled:opacity-50"
              >
                «
              </button>
              <button
                type="button"
                onClick={() => load(page - 1)}
                disabled={loading || page <= 1}
                className="h-10 px-3 rounded-xl border border-white/10 bg-white/5 text-gray-100 disabled:opacity-50"
              >
                ‹
              </button>

              <div className="px-3 text-sm text-gray-200">
                Page <b>{page}</b> / <b>{pageCount}</b>
              </div>

              <button
                type="button"
                onClick={() => load(page + 1)}
                disabled={loading || page >= pageCount}
                className="h-10 px-3 rounded-xl border border-white/10 bg-white/5 text-gray-100 disabled:opacity-50"
              >
                ›
              </button>
              <button
                type="button"
                onClick={() => load(pageCount)}
                disabled={loading || page >= pageCount}
                className="h-10 px-3 rounded-xl border border-white/10 bg-white/5 text-gray-100 disabled:opacity-50"
              >
                »
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[980px] w-full text-sm">
              <thead className="bg-white/5 text-gray-300">
                <tr>
                  <th className="text-left px-4 py-3 font-extrabold tracking-widest uppercase">
                    Date
                  </th>
                  <th className="text-left px-4 py-3 font-extrabold tracking-widest uppercase">
                    Title
                  </th>
                  <th className="text-left px-4 py-3 font-extrabold tracking-widest uppercase">
                    Link
                  </th>
                  <th className="text-left px-4 py-3 font-extrabold tracking-widest uppercase">
                    Image
                  </th>
                  <th className="text-right px-4 py-3 font-extrabold tracking-widest uppercase">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/10">
                {loading ? (
                  <tr>
                    <td className="px-4 py-4 text-gray-300" colSpan={5}>
                      Loading…
                    </td>
                  </tr>
                ) : rows.length === 0 ? (
                  <tr>
                    <td className="px-4 py-4 text-gray-400" colSpan={5}>
                      No events.
                    </td>
                  </tr>
                ) : (
                  rows.map((ev) => {
                    const img = toPublicUrl(ev.image_path || "");
                    return (
                      <tr key={ev.id} className="hover:bg-white/3">
                        <td className="px-4 py-3 text-gray-200 whitespace-nowrap">
                          {ev.event_date}
                        </td>

                        <td className="px-4 py-3 text-gray-100 font-semibold">
                          <div className="line-clamp-2">{ev.title}</div>
                          {ev.description ? (
                            <div className="mt-1 text-xs text-gray-400 line-clamp-1">
                              {ev.description}
                            </div>
                          ) : null}
                        </td>

                        <td className="px-4 py-3 text-gray-200">
                          {ev.url ? (
                            <a
                              href={ev.url}
                              target="_blank"
                              rel="noreferrer"
                              className="underline glo-hover-soft"
                            >
                              Open
                            </a>
                          ) : (
                            <span className="text-gray-500">—</span>
                          )}
                        </td>

                        <td className="px-4 py-3">
                          {img ? (
                            <a href={img} target="_blank" rel="noreferrer" className="inline-flex">
                              <img
                                src={img}
                                alt={ev.title}
                                className="h-10 w-14 rounded-lg object-cover border border-white/10"
                                loading="lazy"
                              />
                            </a>
                          ) : (
                            <span className="text-gray-500">—</span>
                          )}
                        </td>

                        <td className="px-4 py-3 text-right whitespace-nowrap">
                          <button
                            type="button"
                            onClick={() => loadIntoForm(ev)}
                            className="h-10 rounded-xl px-4 mr-2 font-extrabold tracking-wide uppercase border border-white/10 bg-white/5 text-gray-100 glo-hover-soft"
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            onClick={() => onDelete(ev)}
                            disabled={busyId === ev.id}
                            className="h-10 rounded-xl px-4 font-extrabold tracking-wide uppercase border border-white/10 bg-[rgba(255,69,103,0.12)] text-gray-100 glo-hover-pink disabled:opacity-60"
                          >
                            {busyId === ev.id ? "Deleting…" : "Delete"}
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t border-white/10 flex items-center justify-between gap-3 flex-wrap">
            <div className="text-xs text-gray-400">
              Showing{" "}
              <b className="text-gray-200">
                {rows.length ? (page - 1) * PAGE_SIZE + 1 : 0}
              </b>
              {" - "}
              <b className="text-gray-200">{(page - 1) * PAGE_SIZE + rows.length}</b>{" "}
              of <b className="text-gray-200">{total}</b>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => load(page - 1)}
                disabled={loading || page <= 1}
                className="h-10 px-4 rounded-xl border border-white/10 bg-white/5 text-gray-100 disabled:opacity-50"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={() => load(page + 1)}
                disabled={loading || page >= pageCount}
                className="h-10 px-4 rounded-xl border border-white/10 bg-white/5 text-gray-100 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-500">
          Notes: Images are optional. Edit loads into the form. Removing image deletes it from Storage too.
        </div>
      </div>
    </section>
  );
}
