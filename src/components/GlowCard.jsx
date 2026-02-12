export default function GlowCard({
  title,
  eyebrow,
  children,
  cta,
  href,
  variant = "blue", 
  alwaysOn = false,
}) {
  const hoverCls =
    variant === "pink"
      ? alwaysOn
        ? "glo-on-pink"
        : "glo-hover-pink"
      : variant === "mint"
      ? alwaysOn
        ? "glo-on-mint"
        : "glo-hover-mint glo-hover-green"
      : alwaysOn
      ? "glo-on"
      : "glo-hover";

  const titleCls =
    variant === "pink"
      ? "text-[#ff4567] drop-shadow-[0_0_10px_rgba(255,69,103,0.35)] group-hover:drop-shadow-[0_0_16px_rgba(255,69,103,0.85)]"
      : variant === "mint"
      ? "text-[#23ff11] drop-shadow-[0_0_10px_rgba(35,255,17,0.35)] group-hover:drop-shadow-[0_0_16px_rgba(35,255,17,0.85)]"
      : "text-[#0083fd] drop-shadow-[0_0_10px_rgba(0,131,253,0.35)] group-hover:drop-shadow-[0_0_16px_rgba(0,131,253,0.85)]";

  const eyebrowCls =
    variant === "pink"
      ? "text-[#ff4567]/90"
      : variant === "mint"
      ? "text-[#23ff11]/90"
      : "text-[#0083fd]/90";

  const ctaCls =
    variant === "pink"
      ? "glo-hover-soft-pink"
      : variant === "mint"
      ? "glo-hover-soft-green"
      : "glo-hover-soft";

  return (
    <div
      className={`group glass rounded-2xl p-6 transition-shadow ${hoverCls} h-full flex flex-col`}
    >
      {eyebrow && (
        <div className={`text-xs tracking-widest ${eyebrowCls}`}>{eyebrow}</div>
      )}

      <h3 className={`font-display text-xl mt-1 mb-3 ${titleCls}`}>{title}</h3>

      <div className="prose prose-invert max-w-none text-gray-300 flex-1 flex">
        {children}
      </div>

      {href && (
        <a
          className={`inline-block mt-4 underline underline-offset-4 ${ctaCls}`}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {cta || "Learn more →"}
        </a>
      )}
    </div>
  );
}