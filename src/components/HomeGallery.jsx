import NeonTitle from "./NeonTitle";
import GlowButton from "./GlowButton";

const palette = ["red", "blue", "green", "blue", "green", "red"];

export default function HomeGallery({
  title = "Glo'n Moments",
  subtitle = "A few favorite moments from events we have elevated.",
  images = Array.from({ length: 9 }).map(
    (_, i) => `/images/homegallery/sample-${i + 1}.png`
  ),
}) {
  const hoverClassByColor = (c) => {
    if (c === "red") return "hover-red";
    if (c === "blue") return "hover-blue";
    if (c === "green") return "hover-green";
    return "";
  };

  return (
    <section
      className="bg-black border-b border-white/5"
      aria-labelledby="home-gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <NeonTitle title={title} id="home-gallery-heading" />

          {subtitle && (
            <p className="mt-3 text-gray-400 text-base md:text-lg">
              {subtitle}
            </p>
          )}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, i) => {
            const hoverColor = palette[i % palette.length];
            const hoverClass = hoverClassByColor(hoverColor);

            return (
              <figure
                key={`${src}-${i}`}
                className={[
                  "group relative overflow-hidden rounded-2xl glass w-full aspect-square",
                  "neon-border", 
                  hoverClass,   
                ].join(" ")}
              >
                <img
                  src={src}
                  alt="Event highlight"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </figure>
            );
          })}
        </div>

      
      </div>
    </section>
  );
}
