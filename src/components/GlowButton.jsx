// src/components/GlowButton.jsx
export default function GlowButton({
  children,
  href,
  onClick,
  external = false,

  // blue | red | green (compat: cyan/pink/mint)
  variant = "blue",

  // solid | glass | outline
  appearance = "solid",

  // sm | md | lg
  size = "md",

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

  // Gradientes (solid)
  const solidGrad =
    v === "red"
      ? "bg-gradient-to-br from-[var(--color-neon-red)] to-[var(--color-neon-blue)]"
      : v === "green"
      ? "bg-gradient-to-br from-[var(--color-neon-green)] to-[var(--color-neon-blue)]"
      : "bg-gradient-to-br from-[var(--color-neon-blue)] to-[var(--color-neon-green)]";

  // Glow hover
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

  // Tamaños consistentes
  const sizeCls =
    size === "lg"
      ? "px-6 py-2 text-base md:text-lg"
      : size === "sm"
      ? "px-3 py-1.5 text-sm"
      : "px-4 py-2 text-sm md:text-base";

  // Outline color por variant (texto + borde)
  const outlineColor =
    v === "red"
      ? "text-[var(--color-neon-red)] border-[var(--color-neon-red)]"
      : v === "green"
      ? "text-[var(--color-neon-green)] border-[var(--color-neon-green)]"
      : "text-[var(--color-neon-blue)] border-[var(--color-neon-blue)]";

  // Base por appearance
  const base =
    appearance === "solid"
      ? `text-white ${solidGrad} ${hoverCls} [text-shadow:0_1px_10px_rgba(0,0,0,.55)]`
      : appearance === "glass"
      ? `text-white bg-white/10 border border-white/20 backdrop-blur ${hoverCls}`
      : // outline
        `bg-transparent border hover:bg-white/5 ${outlineColor} ${hoverCls}`;

  const inner = (
    <span
      className={[
        "inline-flex items-center justify-center",
        "font-body font-semibold tracking-normal",
        "whitespace-nowrap select-none",
        "rounded-xl", // ✅ SIEMPRE redondeado
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30",
        sizeCls,
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
