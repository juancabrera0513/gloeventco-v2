import { useEffect, useMemo } from "react";
import NeonTitle from "../components/NeonTitle";

export default function Privacy() {
  const sectionTitle =
    "text-left text-xl md:text-2xl font-semibold text-[var(--color-neon-blue)]";
  const sectionSub = "mt-3 text-left text-gray-300 leading-relaxed";

  const card =
    "glass rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10";
  const hr = "border-white/10 my-10";

  const bullets =
    "list-disc pl-6 text-gray-300 space-y-2 marker:text-[var(--color-neon-blue)]";

  const metaLine = "text-left text-sm text-gray-400 leading-relaxed";

  const CANONICAL = "https://www.gloeventco.com/privacy";

  const meta = useMemo(
    () => ({
      title: "Privacy Policy | Glo Event Co",
      description: "Privacy Policy for Glo Event Co (Silent Night Events, LLC).",
      canonical: CANONICAL,
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
  }, [meta]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <header className="max-w-5xl mx-auto text-center">
        <NeonTitle
          title="Privacy Policy"
          id="privacy-policy"
          className="uppercase"
        />
      </header>

      <section className="mt-12 max-w-5xl mx-auto">
        <div className={card}>
          <div className={metaLine}>
            <div>
              <span className="text-gray-300">
                Silent Night Events, LLC doing business as Glo Event Co
              </span>{" "}
              (“Glo Event Co,” “we,” “us,” “our”)
            </div>
            <div>
              Website:{" "}
              <span className="text-gray-300">www.gloeventco.com</span> (the
              “Site”)
            </div>
            <div>
              Effective Date:{" "}
              <span className="text-gray-300">January 21, 2026</span>
            </div>
          </div>

          <hr className={hr} />

          <h2 className={sectionTitle}>1. Overview</h2>
          <p className={sectionSub}>
            This Privacy Policy describes how Glo Event Co collects, uses,
            shares, and protects information through our Site and Services. By
            using the Site or Services, you consent to these practices.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>2. Information We Collect</h2>
          <p className={sectionSub}>
            We may collect information you provide, including:
          </p>
          <ul className={`${bullets} mt-5`}>
            <li>Name</li>
            <li>Mailing or billing address</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name, employer, or job title (if provided)</li>
            <li>Event details and special requests</li>
          </ul>

          <h3 className="mt-8 text-left text-lg md:text-xl font-semibold text-white/90">
            Payment Information
          </h3>
          <p className={sectionSub}>
            If you purchase Services, we collect information necessary to
            process payment through third party payment processors. We do not
            store full credit card numbers on our servers.
          </p>

          <h3 className="mt-8 text-left text-lg md:text-xl font-semibold text-white/90">
            Automatically Collected Information
          </h3>
          <p className={sectionSub}>
            We may collect IP address, browser and device information, access
            times, referring pages, pages visited, and similar usage data for
            site operations, analytics, and security.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>3. How We Use Information</h2>
          <p className={sectionSub}>
            We use information to provide Services, communicate about bookings
            and support, process transactions, improve the Site, prevent fraud,
            maintain records, enforce agreements, and send marketing
            communications where permitted.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>4. Marketing Communications</h2>
          <p className={sectionSub}>
            You can opt out of marketing emails by using the unsubscribe link in
            our emails or by contacting us. Transactional emails may still be
            sent as needed.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>5. Photos, Video, and Event Media</h2>
          <p className={sectionSub}>
            We may capture photos and video at events where our Services are
            provided and use them for business purposes such as marketing and
            portfolio use.
          </p>
          <p className="mt-5 text-left text-gray-300 leading-relaxed">
            To opt out, email{" "}
            <span className="text-gray-200">info@gloeventco.com</span> before the
            event with the event date, location, and the name on the booking. We
            will make reasonable efforts to honor opt out requests, but cannot
            guarantee exclusion from all background or incidental capture.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>6. Sharing Information with Third Parties</h2>
          <p className={sectionSub}>
            We do not sell or rent customer lists. We may share information with
            trusted service providers (payment processing, hosting, analytics,
            email delivery, customer support, deliveries) only as needed to
            provide Services, and they must protect the information.
          </p>
          <p className="mt-5 text-left text-gray-300 leading-relaxed">
            We may disclose information if required by law or to protect rights,
            safety, and security.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>7. Cookies and Tracking</h2>
          <p className={sectionSub}>
            We use cookies and similar tools to improve functionality and user
            experience. You can manage cookies through your browser settings,
            though some Site features may not work properly.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>8. Links to Other Websites</h2>
          <p className={sectionSub}>
            We are not responsible for the privacy practices of third party
            sites linked from our Site.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>9. Data Storage and Security</h2>
          <p className={sectionSub}>
            We use reasonable safeguards to protect information, but no system
            is perfectly secure. Data may be stored with third party hosting
            vendors.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>10. Deletion Requests and Legal Retention</h2>
          <p className={sectionSub}>
            You may request deletion of personal information, subject to legal
            and operational exceptions such as fulfilling Services, maintaining
            records, preventing fraud, and enforcing agreements. We may need to
            verify your identity before processing requests.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>11. Children Under Thirteen</h2>
          <p className={sectionSub}>
            We do not knowingly collect personal information from children under
            13.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>12. Changes to This Privacy Policy</h2>
          <p className={sectionSub}>
            We may update this policy from time to time and will revise the
            Effective Date accordingly. Continued use means you accept the
            updated policy.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>13. Contact Information</h2>
          <div className={`${sectionSub} space-y-2`}>
            <div className="text-gray-200">
              Silent Night Events, LLC doing business as Glo Event Co
            </div>
            <div>11123 South Towne Square, Ste. B, St. Louis, MO 63123            </div>
            <div>
              Email: <span className="text-gray-200">info@gloeventco.com</span>
            </div>
            <div>
              Phone: <span className="text-gray-200">314-282-7888</span>
            </div>
          </div>

          <p className="mt-10 text-sm text-gray-400">
            Effective Date: January 21, 2026
          </p>
        </div>
      </section>
    </div>
  );
}
