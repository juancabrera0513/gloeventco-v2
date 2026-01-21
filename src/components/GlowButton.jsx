// src/components/GlowButton.jsx
export default function GlowButton({
  children,
  href,
  onClick,
  external = false,

  // ✅ Nuevos: blue | red | green
  // ✅ Compat: cyan -> blue, pink -> red, mint -> green
  variant = "blue",

  // solid | glass | outline
  appearance = "solid",

  alwaysOn = false,
  className = "",
}) {
  const v =
    variant === "cyan"
      ? "blue"
      : variant === "pink"
      ? "red"
      : variant === "mint"
      ? "green"
      : variant;

  // ✅ Gradientes usando colores reales de tu marca
  const solidGrad =
    v === "red"
      ? "bg-gradient-to-br from-[var(--color-neon-red)] to-[var(--color-neon-blue)]"
      : v === "green"
      ? "bg-gradient-to-br from-[var(--color-neon-green)] to-[var(--color-neon-blue)]"
      : "bg-gradient-to-br from-[var(--color-neon-blue)] to-[var(--color-neon-green)]";

  // ✅ Hover / always-on por color
  const hoverCls =
    v === "red"
      ? alwaysOn
        ? "glo-on-red"
        : "glo-hover-red"
      : v === "green"
      ? alwaysOn
        ? "glo-on-green"
        : "glo-hover-green"
      : alwaysOn
      ? "glo-on-blue"
      : "glo-hover-blue";

  // ✅ Texto: en solid NO uses text-black (en neón se ve mal)
  // Añadimos un micro text-shadow para legibilidad
  const base =
    appearance === "solid"
      ? `text-white ${solidGrad} ${hoverCls} [text-shadow:0_1px_10px_rgba(0,0,0,.55)]`
      : appearance === "glass"
      ? `text-white bg-white/10 border border-white/20 backdrop-blur ${hoverCls}`
      : /* outline */
        `text-white border border-white/40 bg-transparent ${hoverCls}`;

  const inner = (
    <span
      className={[
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold",
        "whitespace-nowrap select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30",
        base,
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        className="inline-flex"
      >
        {inner}
      </a>
    );
  }

  return (
    <button onClick={onClick} type="button" className="inline-flex">
      {inner}
    </button>
  );
}
