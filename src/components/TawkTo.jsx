import { useEffect } from "react";

function isInIframe() {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
}

function removeTawk() {
  const script = document.getElementById("tawkto-script");
  if (script) script.remove();

  document
    .querySelectorAll('iframe[src*="tawk.to"], iframe[id^="tawk"], iframe[name^="tawk"]')
    .forEach((el) => el.remove());

  document
    .querySelectorAll("#tawkchat-container, .tawk-min-container, .tawk-button, .tawk-custom-color")
    .forEach((el) => el.remove());

  try {
    if (window.Tawk_API?.hideWidget) window.Tawk_API.hideWidget();
  } catch {}
}

export default function TawkTo({
  propertyId = "6983ccfd7399371c34c52641",
  widgetId = "1jgldhfn6",
}) {
  useEffect(() => {
    // ✅ si está en iframe: asegurarnos de que NO aparezca
    if (isInIframe()) {
      removeTawk();
      return;
    }

    // ✅ evitar duplicados
    if (document.getElementById("tawkto-script")) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    s1.id = "tawkto-script";
    s1.async = true;
    s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    document.body.appendChild(s1);

    return () => {
      removeTawk();
    };
  }, [propertyId, widgetId]);

  return null;
}
