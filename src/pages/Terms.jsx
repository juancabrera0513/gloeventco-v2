import { useEffect, useMemo } from "react";
import NeonTitle from "../components/NeonTitle";

export default function Terms() {
  const sectionTitle =
    "text-left text-xl md:text-2xl font-semibold text-[var(--color-neon-blue)]";
  const sectionSub = "mt-3 text-left text-gray-300 leading-relaxed";

  const card = "glass rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10";
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
    []
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
            incorporated into these Terms by reference. Please review it to
            understand our data collection and use practices.
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
            transportation failures, illness, or other emergencies. In such cases,
            we may offer rescheduling, a credit, or another remedy as determined
            in our discretion or as stated in the Service Agreement.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>
            9. Client Responsibilities for Rentals and On Site Services
          </h2>
          <p className={sectionSub}>You agree to:</p>
          <ul className={bullets}>
            <li>
              Provide safe, reasonable access for delivery, setup, and pickup,
              including any required parking or load in instructions.
            </li>
            <li>
              Ensure the venue permits the Services and that you have obtained
              any required permissions, permits, and approvals.
            </li>
            <li>
              Provide a safe environment, including appropriate security where
              needed and a responsible adult contact on site.
            </li>
            <li>
              Protect rented equipment from theft, liquids, excessive heat, and
              physical damage.
            </li>
            <li>
              If your event requires internet access for any specific service
              component (for example certain DJ or production needs), you are
              responsible for ensuring venue internet availability as agreed in
              advance.
            </li>
          </ul>

          <hr className={hr} />

          <h2 className={sectionTitle}>10. Loss, Theft, and Damage to Equipment</h2>
          <p className={sectionSub}>
            For rentals, you are responsible for the care, custody, and control
            of all equipment from the time it is delivered or made available
            until it is returned and checked in by Glo Event Co.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            You authorize us to charge your payment method for:
          </p>
          <ul className={bullets}>
            <li>Missing items, theft, or loss</li>
            <li>Damage beyond normal wear</li>
            <li>Excessive cleaning, repair, or replacement costs</li>
            <li>
              Late returns, overtime, or additional pickup trips caused by client
              or venue delays
            </li>
          </ul>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Exact rates and replacement values may be listed in your Service
            Agreement or checkout terms.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>11. Media Release and Use of Photos and Video</h2>

          <p className="mt-4 text-gray-300 leading-relaxed">
            <strong>11.1 Event Media and Marketing Use</strong>
            <br />
            Glo Event Co may photograph or record video at events where our
            Services are provided. All photos and videos displayed on our website
            and marketing platforms are captured at real events.
            <br />
            By participating in an event where Glo Event Co provides Services
            (including renters, hosts, attendees, and participants), you grant
            Glo Event Co permission to use your image, likeness, and voice
            captured in photo, audio, or video for lawful business purposes,
            including marketing, advertising, social media, website use,
            portfolio, and promotional materials, without compensation.
          </p>

          <p className="mt-4 text-gray-300 leading-relaxed">
            <strong>11.2 Opt Out Procedure</strong>
            <br />
            If you do not want to be photographed or recorded, you must notify us
            in writing before the event by emailing hello@gloeventco.com with the
            event date, location, and the name on the booking. We will make
            reasonable efforts to honor opt out requests, but we cannot guarantee
            exclusion from all background or incidental capture in public or
            crowded event environments.
          </p>

          <p className="mt-4 text-gray-300 leading-relaxed">
            <strong>11.3 Minors</strong>
            <br />
            A parent or legal guardian is responsible for providing consent for
            minors in their care. If you are a host or organizer, you are
            responsible for obtaining any permissions required by your venue,
            school, organization, or applicable law regarding minors.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>12. User Content, Reviews, and Submissions</h2>
          <p className={sectionSub}>
            If you submit reviews, testimonials, photos, videos, or other content
            to us (including via email, text, forms, or social media), you grant
            Glo Event Co a nonexclusive, worldwide, royalty free license to use,
            reproduce, modify, publish, and display that content for business
            purposes, unless you clearly request otherwise in writing.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>
            13. Links to Third Party Sites and Services
          </h2>
          <p className={sectionSub}>
            The Site may contain links to third party websites (“Linked Sites”).
            Linked Sites are not under our control, and we are not responsible
            for their content, updates, or practices. Links are provided as a
            convenience and do not imply endorsement.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Some Services may be delivered or supported by third parties. By
            using the Site and Services, you acknowledge that we may share
            information with third parties as needed to provide the requested
            Services.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>
            14. No Unlawful or Prohibited Use and Intellectual Property
          </h2>
          <p className={sectionSub}>
            You are granted a limited, nonexclusive, nontransferable, revocable
            license to access and use the Site in accordance with these Terms.
            You agree not to use the Site for any unlawful purpose, to interfere
            with Site operations, or to attempt unauthorized access.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            All content on the Site, including text, graphics, logos, images, and
            software, is owned by Glo Event Co or its licensors and is protected
            by intellectual property laws. You may not copy, reproduce,
            distribute, reverse engineer, or exploit Site content without prior
            written permission.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>15. International Users</h2>
          <p className={sectionSub}>
            The Site is controlled and operated from the United States. If you
            access the Site from outside the U.S., you are responsible for
            complying with local laws.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>16. Indemnification</h2>
          <p className={sectionSub}>
            You agree to indemnify, defend, and hold harmless Glo Event Co and
            its officers, directors, employees, agents, and affiliates from any
            claims, losses, liabilities, damages, costs, and expenses (including
            reasonable attorney’s fees) arising out of your use of the Site or
            Services, your violation of these Terms, your event activities, or
            your violation of any law or third party rights.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>17. Arbitration</h2>
          <p className={sectionSub}>
            If the parties cannot resolve a dispute arising out of or relating to
            these Terms or the Site, the dispute will be resolved by final and
            binding arbitration under the Federal Arbitration Act, administered
            by the American Arbitration Association or a similar service, by a
            single neutral arbitrator, in a location mutually agreed upon by the
            parties. The arbitrator’s award will be final and may be entered in
            any court with jurisdiction. The prevailing party may recover
            reasonable attorney’s fees and costs. This provision survives
            termination.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>18. Class Action Waiver</h2>
          <p className={sectionSub}>
            Arbitration will occur only on an individual basis. Class actions,
            class arbitrations, and representative actions are not permitted. The
            arbitrator may not consolidate claims or preside over any form of
            representative proceeding unless both parties agree.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>19. Disclaimer of Warranties</h2>
          <p className="mt-4 text-gray-300 leading-relaxed font-semibold uppercase">
            THE SITE AND ALL INFORMATION, PRODUCTS, AND SERVICES ARE PROVIDED “AS
            IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY LAW, GLO
            EVENT CO DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
            NONINFRINGEMENT.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>20. Limitation of Liability</h2>
          <p className="mt-4 text-gray-300 leading-relaxed font-semibold uppercase">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL GLO EVENT CO
            BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
            PUNITIVE DAMAGES, OR FOR LOSS OF PROFITS, DATA, OR USE, ARISING OUT
            OF OR RELATED TO THE SITE OR SERVICES, EVEN IF ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGES.
            <br />
            IN NO EVENT WILL GLO EVENT CO’S TOTAL LIABILITY EXCEED THE AMOUNT
            PAID BY YOU TO GLO EVENT CO FOR THE SPECIFIC SERVICE GIVING RISE TO
            THE CLAIM.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Some jurisdictions do not allow certain limitations, so portions of
            this section may not apply to you.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>21. Termination and Access Restriction</h2>
          <p className={sectionSub}>
            We may terminate or restrict your access to the Site, Services, or
            any portion thereof at any time, without notice, for any lawful
            reason.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>22. Governing Law and Venue</h2>
          <p className={sectionSub}>
            These Terms are governed by the laws of the State of Missouri,
            without regard to conflict of law principles. To the extent a dispute
            is not subject to arbitration or to enforce an arbitration award, you
            consent to jurisdiction and venue in state or federal courts located
            in Jefferson County, Missouri.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>23. Severability and Entire Agreement</h2>
          <p className={sectionSub}>
            If any provision is found unenforceable, that provision will be
            modified to reflect the intent as closely as possible, and the
            remainder will remain in effect. These Terms, together with the
            Privacy Policy and any applicable Service Agreement, constitute the
            entire agreement between you and Glo Event Co regarding the Site and
            Services.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>24. Changes to Terms</h2>
          <p className={sectionSub}>
            We may change these Terms at any time. The most current version will
            supersede prior versions. Continued use of the Site after changes
            means you accept the revised Terms.
          </p>

          <hr className={hr} />

          <h2 className={sectionTitle}>25. Contact Us</h2>
          <p className={sectionSub}>
            Questions about these Terms may be sent to:
            <br />
            Silent Night Events, LLC doing business as Glo Event Co
            <br />
            Mailing Address: 4051 Jeffco Blvd. Suite 6, Arnold, MO 63010
            <br />
            Email: info@gloeventco.com
            <br />
            Call: 314-282-7888
            <br />
            Text: 314-798-9900
          </p>
        </div>
      </section>
    </div>
  );
}
