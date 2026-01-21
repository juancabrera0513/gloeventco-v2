import CubeCarousel from "../components/CubeCarousel";

export default function Showcase() {
  const images20 = Array.from({ length: 20 }).map(
    (_, i) => `/images/cube/${String(i + 1).padStart(3, "0")}.png`
  );

  return (
    <section style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <CubeCarousel images={images20} size={340} delay={2800} speedMs={900} />
    </section>
  );
}
