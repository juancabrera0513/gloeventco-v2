import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import "./split-spinner-carousel.css";

const SPIN_DUR = 650;

export default function SplitNeonCarousel({
  slides: slidesProp,
  className = "",
  enableKeyboard = true,

  // autoplay
  autoPlay = true,
  autoPlayDelay = 1400,

  // margins
  marginY = 16,
  marginX = 16,
}) {
  const defaultSlides = useMemo(
    () => [
      { leftSrc: "/images/split/left-1.png", rightSrc: "/images/split/right-1.png", bg: "#27323c", alt: "Slide 01", leftPos: "center", rightPos: "center" },
      { leftSrc: "/images/split/left-2.png", rightSrc: "/images/split/right-2.png", bg: "#19304a", alt: "Slide 02", leftPos: "center", rightPos: "center" },
      { leftSrc: "/images/split/left-3.png", rightSrc: "/images/split/right-3.png", bg: "#2b2533", alt: "Slide 03", leftPos: "center", rightPos: "center" },
      { leftSrc: "/images/split/left-4.png", rightSrc: "/images/split/right-4.png", bg: "#312f2d", alt: "Slide 04", leftPos: "center", rightPos: "center" },
      { leftSrc: "/images/split/left-5.png", rightSrc: "/images/split/right-5.png", bg: "#0f2230", alt: "Slide 05", leftPos: "center", rightPos: "center" },
      { leftSrc: "/images/split/left-6.png", rightSrc: "/images/split/right-6.png", bg: "#27323c", alt: "Slide 06", leftPos: "center", rightPos: "center" },
      { leftSrc: "/images/split/left-7.png", rightSrc: "/images/split/right-7.png", bg: "#19304a", alt: "Slide 07", leftPos: "center", rightPos: "center" },
      { leftSrc: "/images/split/left-8.png", rightSrc: "/images/split/right-8.png", bg: "#2b2533", alt: "Slide 08", leftPos: "center", rightPos: "center" },
      { leftSrc: "/images/split/left-9.png", rightSrc: "/images/split/right-9.png", bg: "#312f2d", alt: "Slide 09", leftPos: "center", rightPos: "center" },
      { leftSrc: "/images/split/left-10.png", rightSrc: "/images/split/right-10.png", bg: "#0f2230", alt: "Slide 10", leftPos: "center", rightPos: "center" },
    ],
    []
  );

  const slides = slidesProp?.length ? slidesProp : defaultSlides;
  const limit = slides.length;

  const stageRef = useRef(null);
  const rootRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(true);

  // ✅ aplica variables en PX para que el cubo mantenga proporción
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const apply = () => {
      const h = el.clientHeight;
      const innerH = Math.max(1, h - marginY * 2);
      const half = innerH / 2;

      el.style.setProperty("--page-margin-y", `${marginY}px`);
      el.style.setProperty("--page-margin-x", `${marginX}px`);
      el.style.setProperty("--height", `${innerH}px`);
      el.style.setProperty("--half-height", `${half}px`);
      el.style.setProperty("--neg-half-height", `${-half}px`);

      const perspective = Math.max(600, innerH * 2.2);
      el.style.setProperty("--perspective", `${perspective}px`);
    };

    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, [marginY, marginX]);

  // ✅ autoplay solo si visible
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        setInView(!!e?.isIntersecting && (e.intersectionRatio ?? 0) >= 0.35);
      },
      {
        root: null,
        threshold: [0, 0.15, 0.35, 0.5, 0.75, 1],
        rootMargin: "150px 0px",
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const clampIndex = useCallback(
    (i) => (i >= limit ? 0 : i < 0 ? limit - 1 : i),
    [limit]
  );

  const spinTo = useCallback(
    (targetIndex) => {
      if (disabled) return;
      if (targetIndex === activeIndex) return;

      const safe = clampIndex(targetIndex);
      const inc = safe > activeIndex ? 1 : -1;

      setDisabled(true);
      setNextIndex(safe);

      const stage = stageRef.current;
      if (stage) {
        stage.classList.remove("js-spin-fwd", "js-spin-bwd");
        stage.classList.add(inc > 0 ? "js-spin-fwd" : "js-spin-bwd");
      }

      window.setTimeout(() => {
        const stage2 = stageRef.current;
        if (stage2) {
          stage2.classList.add("js-transitions-disabled");
          stage2.classList.remove("js-spin-fwd", "js-spin-bwd");
        }

        setActiveIndex(safe);
        setNextIndex(null);

        window.setTimeout(() => {
          const stage3 = stageRef.current;
          if (stage3) stage3.classList.remove("js-transitions-disabled");
          setDisabled(false);
        }, 80);
      }, SPIN_DUR);
    },
    [activeIndex, clampIndex, disabled]
  );

  const spin = useCallback(
    (inc = 1) => {
      if (!inc) return;
      spinTo(clampIndex(activeIndex + inc));
    },
    [activeIndex, clampIndex, spinTo]
  );

  // ✅ teclado
  useEffect(() => {
    if (!enableKeyboard) return;

    const onKeyUp = (e) => {
      if (disabled) return;

      if (e.key === "ArrowLeft" || e.key === "ArrowUp") spin(-1);
      if (e.key === "ArrowRight" || e.key === "ArrowDown") spin(1);
    };

    window.addEventListener("keyup", onKeyUp);
    return () => window.removeEventListener("keyup", onKeyUp);
  }, [disabled, enableKeyboard, spin]);

  // ✅ autoplay
  useEffect(() => {
    if (!autoPlay) return;
    if (!inView) return;
    if (paused) return;
    if (disabled) return;
    if (limit <= 1) return;

    const minDelay = SPIN_DUR + 180;
    const delay = Math.max(autoPlayDelay, minDelay);

    const t = window.setTimeout(() => spin(1), delay);
    return () => window.clearTimeout(t);
  }, [autoPlay, autoPlayDelay, inView, paused, disabled, limit, spin]);

  const Face = ({ i }) => {
    const isActive = i === activeIndex;
    const isNext = nextIndex === i;

    const faceClass = ["spinner__face", isActive ? "js-active" : "", isNext ? "js-next" : ""]
      .join(" ")
      .trim();

    const slide = slides[i];

    return (
      <div
        className={faceClass}
        data-index={i}
        style={{ backgroundColor: slide.bg || "#111" }}
        aria-hidden={!isActive && !isNext}
      >
        <div className="content" data-type={`slide-${i + 1}`}>
          <div className="content__left">
            <img
              src={slide.leftSrc}
              alt={slide.alt ? `${slide.alt} left` : `Slide ${i + 1} left`}
              className="split-img"
              style={{ objectPosition: slide.leftPos || "center" }}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              draggable="false"
            />
          </div>

          <div className="content__right">
            <img
              src={slide.rightSrc}
              alt={slide.alt ? `${slide.alt} right` : `Slide ${i + 1} right`}
              className="split-img"
              style={{ objectPosition: slide.rightPos || "center" }}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              draggable="false"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      ref={rootRef}
      className={`split-carousel-root ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      onTouchCancel={() => setPaused(false)}
    >
      <div className="carousel">
        {/* ✅ Flechas verticales fijas (derecha) */}
        <div className="split-nav-vertical" aria-label="Carousel navigation">
          <button
            type="button"
            className="split-nav split-nav--up"
            onClick={() => spin(-1)}
            disabled={disabled}
            aria-label="Previous slide"
          >
            <span aria-hidden="true">▲</span>
          </button>

          <button
            type="button"
            className="split-nav split-nav--down"
            onClick={() => spin(1)}
            disabled={disabled}
            aria-label="Next slide"
          >
            <span aria-hidden="true">▼</span>
          </button>
        </div>

        <div className="carousel__stage" ref={stageRef} aria-label="Split image carousel">
          <div className="spinner spinner--left">
            {slides.map((_, i) => (
              <Face key={`L-${i}`} i={i} />
            ))}
          </div>

          <div className="spinner spinner--right">
            {slides.map((_, i) => (
              <Face key={`R-${i}`} i={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
