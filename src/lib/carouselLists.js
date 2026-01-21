// src/lib/carouselLists.js
const pad3 = (n) => String(n).padStart(3, "0");

// ✅ genera /carousel/sd-photo-001.jpg ... /carousel/sd-photo-050.jpg
export const makeRange = (prefix, count, ext = "jpg") =>
  Array.from({ length: count }, (_, i) => `/carousel/${prefix}-${pad3(i + 1)}.${ext}`);

// ---- Your 5 sets (ajusta counts cuando tengas todo) ----
export const SD_PHOTOS = makeRange("sd-photo", 50, "jpg");

// placeholders (cambia counts y ext según lo que subas)
export const SD_VIDEOS = makeRange("sd-video", 1, "mp4"); // ejemplo
export const PB_PHOTOS = makeRange("pb-photo", 1, "jpg"); // ejemplo
export const PB_GIFS = makeRange("pb-gif", 1, "gif");     // ejemplo
export const PB_BOOMERANGS = makeRange("pb-video", 1, "mp4"); // ejemplo
