// src/pages/Privacy.jsx
import NeonTitle from "../components/NeonTitle";

export default function Privacy() {
  // Match your site styling
  const sectionTitle =
    "text-left text-xl md:text-2xl font-semibold text-[var(--color-neon-blue)]";
  const sectionSub = "mt-3 text-left text-gray-300 leading-relaxed";

  const card =
    "glass rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10";
  const hr = "border-white/10 my-10";

  // Optional: consistent list styling if your text includes <ul>/<li>
  const bullets =
    "list-disc pl-6 text-gray-300 space-y-2 marker:text-[var(--color-neon-blue)]";

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <title>Privacy Policy | Glo Event Co</title>
      <meta
        name="description"
        content="Privacy Policy for Glo Event Co (Silent Night Events, LLC)."
      />

      {/* HERO */}
      <header className="max-w-5xl mx-auto text-center">
        <NeonTitle title="Privacy Policy" id="privacy-policy" className="uppercase" />
        {/* If you want a subtitle, add it here — otherwise delete this line */}
        {/* <p className="mt-3 text-gray-400 text-base md:text-lg">Last updated: ...</p> */}
      </header>

      {/* CONTENT */}
      <section className="mt-12 max-w-5xl mx-auto">
        <div className={card}>
          {/* Paste your policy content BELOW using the same text you already have.
              You can keep it as <p>, <ul>, headings, etc. */}

          {/* Example structure only (DO NOT change your text): */}
          <h2 className={sectionTitle}>Independence</h2>
          <div className={sectionSub}>
            {/* PASTE YOUR PARAGRAPHS HERE (unchanged) */}
          </div>

          <hr className={hr} />

          <h2 className={sectionTitle}>Collection of your Personal Information</h2>
          <div className={sectionSub}>
            {/* PASTE YOUR PARAGRAPHS HERE (unchanged) */}
          </div>

          {/* If your policy includes bullet lists, use this style */}
          <ul className={`${bullets} mt-5`}>
            {/* PASTE YOUR <li> ITEMS HERE (unchanged) */}
          </ul>

          <hr className={hr} />

          <h2 className={sectionTitle}>Use of your Personal Information</h2>
          <div className={sectionSub}>
            {/* PASTE YOUR PARAGRAPHS HERE (unchanged) */}
          </div>

          <hr className={hr} />

          <h2 className={sectionTitle}>Sharing Information with Third Parties</h2>
          <div className={sectionSub}>
            {/* PASTE YOUR PARAGRAPHS HERE (unchanged) */}
          </div>

          <hr className={hr} />

          <h2 className={sectionTitle}>Tracking User Behavior</h2>
          <div className={sectionSub}>
            {/* PASTE YOUR PARAGRAPHS HERE (unchanged) */}
          </div>

          <hr className={hr} />

          <h2 className={sectionTitle}>Automatically Collected Information</h2>
          <div className={sectionSub}>
            {/* PASTE YOUR PARAGRAPHS HERE (unchanged) */}
          </div>

          <hr className={hr} />

          <h2 className={sectionTitle}>Use of Cookies</h2>
          <div className={sectionSub}>
            {/* PASTE YOUR PARAGRAPHS HERE (unchanged) */}
          </div>

          <hr className={hr} />

          <h2 className={sectionTitle}>Links</h2>
          <div className={sectionSub}>
            {/* PASTE YOUR PARAGRAPHS HERE (unchanged) */}
          </div>

          <hr className={hr} />

          <h2 className={sectionTitle}>Right to Deletion</h2>
          <div className={sectionSub}>
            {/* PASTE YOUR PARAGRAPHS HERE (unchanged) */}
          </div>

          <ul className={`${bullets} mt-5`}>
            {/* PASTE YOUR <li> ITEMS HERE (unchanged) */}
          </ul>

          <hr className={hr} />

          <h2 className={sectionTitle}>Children Under Thirteen</h2>
          <div className={sectionSub}>
            {/* PASTE YOUR PARAGRAPHS HERE (unchanged) */}
          </div>

          <hr className={hr} />

          <h2 className={sectionTitle}>E-mail Communications</h2>
          <div className={sectionSub}>
            {/* PASTE YOUR PARAGRAPHS HERE (unchanged) */}
          </div>

          <hr className={hr} />

          <h2 className={sectionTitle}>External Data Storage Sites</h2>
          <div className={sectionSub}>
            {/* PASTE YOUR PARAGRAPHS HERE (unchanged) */}
          </div>

          <hr className={hr} />

          <h2 className={sectionTitle}>Changes to this Statement</h2>
          <div className={sectionSub}>
            {/* PASTE YOUR PARAGRAPHS HERE (unchanged) */}
          </div>

          <hr className={hr} />

          <h2 className={sectionTitle}>Contact Information</h2>
          <div className={sectionSub}>
            {/* PASTE YOUR CONTACT BLOCK HERE (unchanged) */}
          </div>

          {/* Optional: footer note area */}
          {/* <p className="mt-10 text-sm text-gray-400">Effective as of ...</p> */}
        </div>
      </section>
    </div>
  );
}
