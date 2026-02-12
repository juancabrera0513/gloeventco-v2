import { useEffect, useMemo } from "react";
import NeonTitle from "../components/NeonTitle";

export default function Terms() {
  const sectionTitle =
    "text-left text-xl md:text-2xl font-semibold text-[var(--color-neon-blue)]";
  const sectionSub = "mt-3 text-left text-gray-300 leading-relaxed";

  const card =
    "glass rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10";
  const hr = "border-white/10 my-10";

  const bullets =
    "list-disc pl-6 text-gray-300 space-y-2 marker:text-[var(--color-neon-blue)]";

  const CANONICAL = "https://www.gloeventco.com/terms";

  const meta = useMemo(
    () => ({
      title: "Terms and Conditions | Glo Event Co",
      description:
        "Terms and Conditions for using the Glo Event Co website and services.",
      canonical: CANONICAL,
      robots: "index,follow",
    }),
    [CANONICAL]
  );

  useEffect(() => {
    document.title = meta.title;

    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.setAttribute("name", "description");
      document.head.appendChild(desc);
    }
    desc.setAttribute("content", meta.description);

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", meta.canonical);

    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", meta.robots);
  }, [meta]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <header className="max-w-5xl mx-auto text-center">
        <NeonTitle
          title="Terms and Conditions"
          id="terms-and-conditions"
          className="uppercase"
        />
      </header>

      <section className="mt-12 max-w-5xl mx-auto">
        <div className={card}>
          <p className="text-gray-300 leading-relaxed">
            <strong>Agreement Between User and www.gloeventco.com</strong>
            <br />
            Silent Night Events, LLC doing business as Glo Event Co (“Glo Event
            Co,” “we,” “us,” “our”)
            <br />
            Effective Date: January 21, 2026
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>1. Acceptance of Terms</h2>
          <p className={sectionSub}>
            Welcome to www.gloeventco.com (the “Site”). The Site is owned and
            operated by Silent Night Events, LLC doing business as Glo Event Co.
            By accessing, browsing, purchasing from, or using the Site, you
            agree to these Terms and Conditions (the “Terms”) without
            modification. If you do not agree, do not use the Site.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>2. Site Purpose and Services</h2>
          <p className={sectionSub}>
            The Site is an ecommerce website. Glo Event Co provides event and
            entertainment rentals and related services, which may include,
            without limitation, silent disco headphone rentals, DJ experiences,
            digital selfie station or photo booth style experiences, lighting
            and event enhancements, and related staffing, delivery, setup, and
            marketing services (collectively, the “Services”).
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Some Services may be governed by separate rental, hire, event, or
            service agreements (“Service Agreements”). If a Service Agreement
            conflicts with these Terms, the Service Agreement controls for that
            transaction.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>3. Privacy Policy</h2>
          <p className={sectionSub}>
            Your use of the Site is subject to our Privacy Policy, which is
            incorporated into these Terms by reference.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>
            4. Electronic Communications and E Sign Consent
          </h2>
          <p className={sectionSub}>
            Visiting the Site, completing forms, signing agreements digitally,
            placing orders, or sending emails to Glo Event Co constitutes
            electronic communications. You consent to receive communications
            electronically and agree that electronic notices, agreements,
            disclosures, and other communications satisfy any legal requirement
            that such communications be in writing.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>5. Accounts and Security</h2>
          <p className={sectionSub}>
            If you create an account, you are responsible for maintaining the
            confidentiality of your login credentials and restricting access to
            your device. You accept responsibility for all activities under your
            account. You may not transfer your account to another person or
            entity. We may refuse or cancel service, terminate accounts, or
            remove or edit content in our sole discretion.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>6. Children and Minors</h2>
          <p className={sectionSub}>
            We do not knowingly collect personal information from children under
            13. If you are under 18, you may use the Site only with the
            involvement and permission of a parent or legal guardian.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>7. Pricing, Payments, and Taxes</h2>
          <p className={sectionSub}>
            Prices are subject to change without notice. Unless otherwise stated,
            prices do not include applicable taxes, delivery fees, venue fees,
            overtime, or add ons. You authorize us to charge the payment method
            you provide for amounts due under your order or Service Agreement.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>
            8. Retainers, Cancellations, Rescheduling, and Refunds
          </h2>

          <p className="mt-4 text-gray-300 leading-relaxed">
            <strong>8.1 Retainers</strong>
            <br />
            A retainer may be required upon execution of any Service Agreement or
            booking confirmation. Unless otherwise stated in writing, retainers
            are applied toward the total Service Fee and are nonrefundable.
          </p>

          <p className="mt-4 text-gray-300 leading-relaxed">
            <strong>8.2 Client Cancellations</strong>
            <br />
            Cancellation terms vary by Service and event date and are governed by
            the applicable Service Agreement and invoice terms. If no Service
            Agreement exists, all payments made are nonrefundable once scheduling,
            preparation, or equipment reservation has occurred, except where
            prohibited by law.
          </p>

          <p className="mt-4 text-gray-300 leading-relaxed">
            <strong>8.3 Rescheduling</strong>
            <br />
            If you request to reschedule, we will attempt to accommodate based on
            availability. Rescheduling may require additional fees and may be
            treated as a cancellation if we cannot accommodate your new date. Any
            retainer remains nonrefundable.
          </p>

          <p className="mt-4 text-gray-300 leading-relaxed">
            <strong>8.4 Force Majeure</strong>
            <br />
            We are not liable for delays, interruptions, or failure to perform due
            to events beyond our reasonable control, including weather, acts of
            God, venue issues, power outages, government actions, labor issues,
            transportation failures, illness, or other emergencies.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>25. Contact Us</h2>
          <p className={sectionSub}>
            Silent Night Events, LLC doing business as Glo Event Co
            <br />
            Mailing Address: 11123 South Towne Square, Ste. B, St. Louis, MO 63123
            <br />
            Email: info@gloeventco.com
            <br />
            Phone: 314-282-7888
          </p>
        </div>
      </section>
    </div>
  );
}
