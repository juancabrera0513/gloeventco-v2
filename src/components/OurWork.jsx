// src/components/OurWork.jsx
import NeonTitle from "./NeonTitle";

export default function OurWork({
  items = [],
  kicker,
  title = "Great for",
  subtitle = "Big energy with flexible options for any crowd",
}) {
  const palette = ["red", "blue", "green", "blue", "green", "red"];

  return (
    <section
      className="bg-black border-b border-white/5"
      aria-labelledby="our-work-heading"
    >
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          {kicker && (
            <div className="text-center text-xs tracking-widest text-gray-400">
              {kicker}
            </div>
          )}

          <NeonTitle title={title} id="our-work-heading" />

          {subtitle && (
            <p className="mt-3 text-gray-400 text-center text-base md:text-lg">
              {subtitle}
            </p>
          )}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ src, alt, title: itemTitle, blurb }, i) => {
            const key = `${src}-${i}`;
            const color = palette[i % palette.length];

            return (
              <div
                key={key}
                className={[
                  "group glass rounded-2xl overflow-hidden",
                  `glo-hover-${color}`,
                ].join(" ")}
              >
                <img
                  src={src}
                  alt={alt || itemTitle || "Showcase item"}
                  className="h-56 w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />

                <div className="p-5 text-center">
                  <h3 className="font-semibold text-gray-100">
                    {itemTitle || `Item ${i + 1}`}
                  </h3>

                  {blurb && (
                    <p className="text-sm text-gray-400 mt-1">
                      {blurb}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
