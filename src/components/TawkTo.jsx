import { useEffect } from "react";

export default function TawkTo({
  propertyId = "6983ccfd7399371c34c52641",
  widgetId = "1jgldhfn6",
}) {
  useEffect(() => {
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
      const script = document.getElementById("tawkto-script");
      if (script) script.remove();
    };
  }, [propertyId, widgetId]);

  return null; 
}
