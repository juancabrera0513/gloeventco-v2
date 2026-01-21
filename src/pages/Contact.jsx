// src/pages/Contact.jsx
import React, { useState } from "react";
import NeonTitle from "../components/NeonTitle";
import GlowButton from "../components/GlowButton";
import { EMAIL, PHONE, ADDRESS_HTML } from "../lib/constants";

export default function Contact() {
  const [preferred, setPreferred] = useState("Email");

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <title>Contact | Glo Event Co</title>
      <meta
        name="description"
        content="Reach out for availability and quotes. St. Louis & surrounding areas."
      />

      {/* Hero */}
      <header className="max-w-5xl mx-auto text-center">
        <NeonTitle title="You + Us = Awesome" id="contact-heading" />

        <p className="mt-3 text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
          Reach out for availability and quotes.
        </p>
      </header>

      {/* Layout */}
      <div className="grid md:grid-cols-2 gap-8 mt-10 items-start">
        {/* LEFT */}
        <div className="glass rounded-2xl p-6 self-start">
          <h3 className="font-display text-xl text-[var(--color-neon-blue)]">
            Contact Info
          </h3>

          <div
            className="text-sm text-gray-300 mt-3 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: ADDRESS_HTML }}
          />

          <p className="mt-2">
            <a className="underline" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </p>
          <p>
            <a className="underline" href={`tel:${PHONE}`}>
              {PHONE}
            </a>
          </p>

          <p className="text-xs text-gray-500 mt-4">Office Hours: 10am – 5pm</p>

          <ul className="mt-6 space-y-3 text-sm text-gray-300">
            <li className="flex gap-2">
              <span className="text-[var(--color-neon-red)]">✔</span>
              Fast response from a local St. Louis team
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--color-neon-green)]">✔</span>
              Transparent pricing & no hidden fees
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--color-neon-blue)]">✔</span>
              Professional setup & on-site support available
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <form
          className="glass rounded-2xl p-6 space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="text-sm">Name</label>
            <input
              className="mt-1 w-full rounded-md bg-white/5 border-white/10"
              required
            />
          </div>

          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-md bg-white/5 border-white/10"
              required
            />
          </div>

          <div>
            <label className="text-sm">Phone Number</label>
            <input
              type="tel"
              placeholder="(314) 123-4567"
              className="mt-1 w-full rounded-md bg-white/5 border-white/10"
            />
          </div>

          <div>
            <label className="text-sm">Preferred contact method</label>
            <select
  value={preferred}
  onChange={(e) => setPreferred(e.target.value)}
  className="
    mt-1 w-full rounded-md
    bg-white/5 text-white
    border border-white/10
    focus:outline-none
    focus:ring-2 focus:ring-[var(--color-neon-blue)]/60
    focus:bg-black
    appearance-none
  "
>
  <option className="bg-black text-white">Email</option>
  <option className="bg-black text-white">Phone</option>
</select>

            <p className="text-xs text-gray-500 mt-1">
              Choose how you want us to reach you.
            </p>
          </div>

          <div>
            <label className="text-sm">Message</label>
            <textarea
              rows="4"
              className="mt-1 w-full rounded-md bg-white/5 border-white/10"
              required
            />
          </div>

          <GlowButton
            appearance="outline"
            className="
              mt-2
              px-6 py-2
              text-base md:text-lg
              font-body font-semibold
              !text-[var(--color-neon-cyan)]
              !border !border-[var(--color-neon-cyan)]
              rounded-none
              bg-transparent
              [box-shadow:0_0_12px_rgba(0,200,255,.35)]
              hover:[box-shadow:0_0_18px_rgba(0,200,255,.55)]
              hover:bg-white/5
            "
          >
            Send Message
          </GlowButton>
        </form>
      </div>
    </div>
  );
}
