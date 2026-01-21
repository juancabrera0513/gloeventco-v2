// src/pages/Availability.jsx (ejemplo)
import { useEffect } from "react";

export default function Availability() {
  useEffect(() => {
    // Evita cargarlo varias veces si navegas SPA
    if (document.querySelector('script[data-checkcherry="true"]')) return;

    const s = document.createElement("script");
    s.src = "https://glo-event-co.checkcherry.com/api/checkcherry_widgets";
    s.async = true;
    s.charset = "utf-8";
    s.setAttribute("data-checkcherry", "true");
    document.body.appendChild(s);
  }, []);

  const props = {
    apiKey: "N7K-KDWT-CHT",
    iframe: false,
    host: "https://glo-event-co.checkcherry.com",
    showBookNowButton: true,
    bookNowButtonText: "Book Now",
    showCustomBookingUrl: false,
    customBookingUrl: "",
    availableMessage:
      "Congratulations, we are currently available for this day and package. Just click 'Book Now' to reserve your date now.",
    unavailableMessage:
      "Sorry, but we are not able to take automated bookings for this date or package. Please contact us directly to check for available options.",
    theme: "normal",
  };

  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* ✅ CENTRADO + ancho controlado */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div
              className="checkcherry__widget__availability-calendar"
              data-props={JSON.stringify(props)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
