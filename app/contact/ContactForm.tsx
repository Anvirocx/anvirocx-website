"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Send } from "lucide-react";

type ContactFormProps = {
  services: string[];
};

const countryCodes = [
  ["+91", "India"],
  ["+1", "USA / Canada"],
  ["+44", "United Kingdom"],
  ["+971", "UAE"],
  ["+966", "Saudi Arabia"],
  ["+974", "Qatar"],
  ["+965", "Kuwait"],
  ["+968", "Oman"],
  ["+61", "Australia"],
  ["+64", "New Zealand"],
  ["+65", "Singapore"],
  ["+60", "Malaysia"],
  ["+49", "Germany"],
  ["+33", "France"],
  ["+39", "Italy"],
  ["+34", "Spain"],
  ["+31", "Netherlands"],
  ["+41", "Switzerland"],
  ["+27", "South Africa"],
  ["+234", "Nigeria"],
  ["+254", "Kenya"],
  ["+55", "Brazil"],
  ["+52", "Mexico"],
];

export default function ContactForm({ services }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSending(true);

    try {
      const response = await fetch("https://formspree.io/f/mkolepen", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setSubmitted(true);
    } catch {
      form.submit();
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="contact-page-form-card contact-page-success">
        <CheckCircle2 />

        <h2>Your enquiry has been submitted.</h2>

        <p>
          Thank you for contacting ANVIROCX. Our team will review your
          requirements before responding.
        </p>

        <button type="button" onClick={() => setSubmitted(false)}>
          Submit another enquiry
          <ArrowRight />
        </button>
      </div>
    );
  }

  return (
    <div className="contact-page-form-card">
      <div className="contact-form-heading">
        <p>Project enquiry</p>
        <h2>Tell us about your requirements.</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="contact-form-grid">
          <label>
            <span>Full name *</span>
            <input
              name="name"
              type="text"
              placeholder="Your full name"
              required
            />
          </label>

          <label>
            <span>Business email *</span>
            <input
              name="email"
              type="email"
              placeholder="name@company.com"
              required
            />
          </label>
        </div>

        <div className="contact-form-grid">
          <label>
            <span>Company name *</span>
            <input
              name="company"
              type="text"
              placeholder="Company name"
              required
            />
          </label>

          <label>
            <span>Company website</span>
            <input
              name="website"
              type="url"
              placeholder="https://company.com"
            />
          </label>
        </div>

        <label>
          <span>Phone number</span>

          <div className="contact-phone-field">
            <select
              name="countryCode"
              defaultValue="+91"
              aria-label="Country code"
            >
              {countryCodes.map(([code, country]) => (
                <option key={`${code}-${country}`} value={code}>
                  {code} — {country}
                </option>
              ))}
            </select>

            <input
              name="phone"
              type="tel"
              inputMode="tel"
              placeholder="Phone number"
            />
          </div>
        </label>

        <div className="contact-form-grid">
          <label>
            <span>Service required *</span>
            <select name="service" defaultValue="" required>
              <option value="" disabled>
                Select a service
              </option>

              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}

              <option value="Not sure">Not sure yet</option>
            </select>
          </label>

          <label>
            <span>Preferred start</span>
            <select name="preferredStart" defaultValue="">
              <option value="" disabled>
                Select timeline
              </option>
              <option value="Immediately">Immediately</option>
              <option value="Within 2–4 weeks">Within 2–4 weeks</option>
              <option value="Within 1–3 months">Within 1–3 months</option>
              <option value="Currently researching">
                Currently researching
              </option>
            </select>
          </label>
        </div>

        <label>
          <span>Estimated monthly budget</span>
          <select name="budget" defaultValue="">
            <option value="" disabled>
              Select approximate budget
            </option>
            <option value="Under $500">Under $500</option>
            <option value="$500–$1,500">$500–$1,500</option>
            <option value="$1,500–$5,000">$1,500–$5,000</option>
            <option value="$5,000+">$5,000+</option>
            <option value="Need recommendation">Need recommendation</option>
          </select>
        </label>

        <label>
          <span>Business requirements *</span>
          <textarea
            name="requirements"
            rows={6}
            required
            placeholder="Describe your current challenge, expected workload, required services and desired outcome."
          />
        </label>

        <button
          type="submit"
          className="contact-form-submit"
          disabled={sending}
        >
          {sending ? "Submitting..." : "Submit enquiry"}
          <Send />
        </button>

        <p className="contact-form-disclaimer">
          By submitting this form, you agree to be contacted regarding your
          business enquiry.
        </p>
      </form>
    </div>
  );
}
