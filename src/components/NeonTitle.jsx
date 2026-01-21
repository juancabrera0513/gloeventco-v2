// src/components/NeonTitle.jsx
export default function NeonTitle({
  title,
  as: Tag = "h2",
  id,
  className = "",
  align = "center", // center | left
}) {
  const alignWrap = align === "left" ? "justify-start text-left" : "justify-center text-center";

  return (
    <div className={`flex ${alignWrap}`}>
      <Tag
        id={id}
        className={[
          "neon-sign white",
          "text-3xl md:text-4xl lg:text-5xl",
          className,
        ].join(" ")}
      >
        {title}
      </Tag>
    </div>
  );
}
