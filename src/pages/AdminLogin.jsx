import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function AdminLogin() {
  const nav = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/admin/calendar";

  const [email, setEmail] = useState("misty@gloeventco.com");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    let alive = true;
    async function run() {
      const { data } = await supabase.auth.getSession();
      if (!alive) return;
      if (data?.session?.user) nav(from, { replace: true });
    }
    run();
    return () => {
      alive = false;
    };
  }, [from, nav]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setBusy(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      if (!data?.user) throw new Error("Login failed.");

      nav(from, { replace: true });
    } catch (ex) {
      setErr(ex?.message || "Login error.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="bg-[color:var(--color-base-bg)]">
      <div className="mx-auto max-w-xl px-4 py-12">
        <div className="glass neon-border rounded-3xl p-6 md:p-8">
          <h1 className="text-3xl font-extrabold neon-text-cyan">
            Admin Login
          </h1>
          <p className="mt-2 text-sm text-gray-300">
            Sign in to manage calendar events.
          </p>

          {err ? (
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className="text-sm neon-text-pink font-extrabold">Error</div>
              <div className="text-sm text-gray-300 mt-1">{err}</div>
            </div>
          ) : null}

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <label className="block">
              <span className="text-sm font-semibold text-gray-200">Email</span>
              <input
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-gray-100 outline-none focus:ring-2 focus:ring-[rgba(0,131,253,.45)]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                autoComplete="email"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-gray-200">
                Password
              </span>
              <input
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-gray-100 outline-none focus:ring-2 focus:ring-[rgba(0,131,253,.45)]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                autoComplete="current-password"
                required
              />
            </label>

            <button
              disabled={busy}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-extrabold glo-hover"
              type="submit"
            >
              {busy ? "Signing in…" : "Sign in"}
            </button>

            <div className="text-xs text-gray-400 text-center">
              Tip: If you don’t have a password yet, create the user in Supabase
              Auth first.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
