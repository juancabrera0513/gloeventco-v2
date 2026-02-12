const pad3 = (n) => String(n).padStart(3, "0");

export const makeRange = (prefix, count, ext = "jpg") =>
  Array.from({ length: count }, (_, i) => `/carousel/${prefix}-${pad3(i + 1)}.${ext}`);

export const SD_PHOTOS = makeRange("sd-photo", 50, "jpg");

export const SD_VIDEOS = makeRange("sd-video", 1, "mp4"); 
export const PB_PHOTOS = makeRange("pb-photo", 1, "jpg"); 
export const PB_GIFS = makeRange("pb-gif", 1, "gif");    
export const PB_BOOMERANGS = makeRange("pb-video", 1, "mp4"); 
