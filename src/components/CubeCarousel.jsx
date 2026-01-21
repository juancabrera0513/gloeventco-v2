import React, { useEffect, useMemo, useRef, useState } from "react";
import "./cube-carousel.css";

const mod = (n, m) => ((n % m) + m) % m;

export default function CubeCarousel({
  images,
  size = 340,
  delay = 2800,
  speedMs = 900,
  showButtons = true,
  pauseOnHover = true,
}) {
  // Default: /images/cube/001.png ... /020.png
  const defaultImages = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => {
      const n = String(i + 1).padStart(3, "0");
      return `/images/cube/${n}.png`;
    });
  }, []);

  const list = (images?.length ? images : defaultImages).filter(Boolean);
  const safe = list.length ? list : defaultImages;

  const containerRef = useRef(null);
  const cubeRef = useRef(null);
  const timerRef = useRef(null);

  // rot: which physical face is currently "front" (0..3)
  // 0 => physical front is front
  // 1 => physical right is front
  // 2 => physical back is front
  // 3 => physical left is front
  const [rot, setRot] = useState(0);
  const rotRef = useRef(0);

  // index of image currently shown on the FRONT (logical front)
  const [frontIndex, setFrontIndex] = useState(0);
  const frontIndexRef = useRef(0);

  // physical faces' current background images (these rarely change: we update only the hidden one)
  const [faceImgs, setFaceImgs] = useState(() => {
    const get = (k) => safe[mod(k, safe.length)];
    return {
      front: get(0),
      right: get(1),
      back: get(2),
      left: get(3),
    };
  });

  // keep refs in sync (avoid stale values inside handlers)
  useEffect(() => {
    rotRef.current = rot;
  }, [rot]);

  useEffect(() => {
    frontIndexRef.current = frontIndex;
  }, [frontIndex]);

  const z = size / 2;

  // Mapping for a given rotation:
  const frontP = ["front", "right", "back", "left"];
  const rightP = ["right", "back", "left", "front"];
  const backP = ["back", "left", "front", "right"];
  const leftP = ["left", "front", "right", "back"];

  const getPositionOfPhysical = (physical, r) => {
    if (frontP[r] === physical) return "front";
    if (rightP[r] === physical) return "right";
    if (backP[r] === physical) return "back";
    return "left";
  };

  const desiredImgForPosition = (pos, nextFrontIdx) => {
    const base = nextFrontIdx;
    const offset = pos === "front" ? 0 : pos === "right" ? 1 : pos === "back" ? 2 : 3;
    return safe[mod(base + offset, safe.length)];
  };

  const applyTransform = (deg) => {
    const el = cubeRef.current;
    if (!el) return;
    el.style.transition = `transform ${speedMs}ms ease`;
    el.style.transform = `rotateY(${deg}deg)`;
  };

  // ✅ Key trick: update ONLY the currently-hidden face (current "back") BEFORE rotating.
  const prepareHiddenFaceFor = (dir) => {
    const r = rotRef.current;
    const fi = frontIndexRef.current;

    const rNext = mod(r + (dir === "next" ? 1 : -1), 4);
    const fiNext = mod(fi + (dir === "next" ? 1 : -1), safe.length);

    const hiddenPhysicalNow = backP[r]; // only this is fully hidden right now
    const posInNext = getPositionOfPhysical(hiddenPhysicalNow, rNext);
    const imgNeeded = desiredImgForPosition(posInNext, fiNext);

    setFaceImgs((prev) => ({
      ...prev,
      [hiddenPhysicalNow]: imgNeeded,
    }));

    return { rNext, fiNext };
  };

  const go = (dir) => {
    // avoid double triggers mid-animation
    const el = cubeRef.current;
    if (!el) return;
    if (el.dataset.animating === "1") return;
    el.dataset.animating = "1";

    // 1) update hidden face only
    const { rNext, fiNext } = prepareHiddenFaceFor(dir);

    // 2) rotate
    const currentAngle = Number(el.dataset.angle || "0");
    const nextAngle = currentAngle + (dir === "next" ? -90 : +90);
    el.dataset.angle = String(nextAngle);
    applyTransform(nextAngle);

    // 3) after transition ends, commit new logical state (no image changes here)
    const onEnd = (e) => {
      if (e.propertyName !== "transform") return;
      el.removeEventListener("transitionend", onEnd);

      setRot(rNext);
      setFrontIndex(fiNext);

      el.dataset.animating = "0";
    };

    el.addEventListener("transitionend", onEnd);
  };

  const goNext = () => go("next");
  const goPrev = () => go("prev");

  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const start = () => {
    stop();
    timerRef.current = setInterval(() => {
      goNext();
    }, delay);
  };

  useEffect(() => {
    // init face images for current list
    const get = (k) => safe[mod(k, safe.length)];
    setFaceImgs({
      front: get(frontIndexRef.current + 0),
      right: get(frontIndexRef.current + 1),
      back: get(frontIndexRef.current + 2),
      left: get(frontIndexRef.current + 3),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safe.length]);

  useEffect(() => {
    start();
    return () => stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, safe.length]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !pauseOnHover) return;

    const onEnter = () => stop();
    const onLeave = () => start();

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pauseOnHover, delay, safe.length]);

  return (
    <div
      className="cc-container"
      ref={containerRef}
      style={{
        ["--cc-size"]: `${size}px`,
        ["--cc-z"]: `${z}px`,
        ["--cc-speed"]: `${speedMs}ms`,
      }}
    >
      <div className="cc-scene">
        <div ref={cubeRef} className="cc-cube" data-angle="0" data-animating="0">
          <div className="cc-face cc-front" style={{ backgroundImage: `url("${faceImgs.front}")` }} />
          <div className="cc-face cc-right" style={{ backgroundImage: `url("${faceImgs.right}")` }} />
          <div className="cc-face cc-back" style={{ backgroundImage: `url("${faceImgs.back}")` }} />
          <div className="cc-face cc-left" style={{ backgroundImage: `url("${faceImgs.left}")` }} />
        </div>

        {showButtons && (
          <div className="cc-btns">
            <button type="button" className="cc-btn" onClick={goPrev} aria-label="Previous">
              ‹
            </button>
            <button type="button" className="cc-btn" onClick={goNext} aria-label="Next">
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
