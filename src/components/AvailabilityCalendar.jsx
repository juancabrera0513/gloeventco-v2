import { useEffect, useMemo } from "react";

const SCRIPT_SRC =
  "https://glo-event-co.checkcherry.com/api/checkcherry_widgets";

export default function AvailabilityCalendar({
  className = "",
  propsOverride = {},
}) {
  const dataProps = useMemo(() => {
    const base = {
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
      eventTypeId: 37664,
      eventTypeToken: "97Q-EKP9-7F9",
    };

    return JSON.stringify({ ...base, ...propsOverride });
  }, [propsOverride]);

  useEffect(() => {
    // ✅ Load script once
    const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (existing) return;

    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.type = "text/javascript";
    s.async = true;
    s.charset = "utf-8";
    document.body.appendChild(s);

    return () => {
      // (no cleanup) keep it cached for SPA navigation
    };
  }, []);

  return (
    <div className={className}>
      <div
        className="checkcherry__widget__availability-calendar"
        data-props={dataProps}
      />
    </div>
  );
}
