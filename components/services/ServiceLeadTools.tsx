"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  MessageCircle,
  Send,
  X,
} from "lucide-react";

type ServiceLeadToolsProps = {
  serviceTitle: string;
  serviceSlug: string;
  questions: string[];
};

const countryCodes = [
  ["+1", "USA / Canada"],
  ["+44", "United Kingdom"],
  ["+91", "India"],
  ["+971", "UAE"],
  ["+966", "Saudi Arabia"],
  ["+974", "Qatar"],
  ["+965", "Kuwait"],
  ["+973", "Bahrain"],
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

function getReply(question: string, serviceTitle: string) {
  const normalized = question.toLowerCase();

  if (
    normalized.includes("price") ||
    normalized.includes("cost") ||
    normalized.includes("hire")
  ) {
    return `Pricing for ${serviceTitle} depends on scope, workload, coverage, tools and the delivery model. Submit the enquiry form and the team can recommend a suitable structure.`;
  }

  if (
    normalized.includes("onboard") ||
    normalized.includes("start") ||
    normalized.includes("process")
  ) {
    return "We begin with discovery, define the scope and workflow, complete onboarding and then launch with agreed reporting and escalation processes.";
  }

  if (
    normalized.includes("tool") ||
    normalized.includes("crm") ||
    normalized.includes("software")
  ) {
    return "The team can work with approved business tools when access, permissions, documentation and technical compatibility are available.";
  }

  if (
    normalized.includes("time") ||
    normalized.includes("long") ||
    normalized.includes("turnaround")
  ) {
    return "The timeline depends on complexity and preparation requirements. A clearer estimate can be shared after reviewing your requirements.";
  }

  return `This can be customized for your ${serviceTitle} requirements. Share your business needs through the enquiry form and the ANVIROCX team can review them.`;
}

export default function ServiceLeadTools({
  serviceTitle,
  serviceSlug,
  questions,
}: ServiceLeadToolsProps) {
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const reply = useMemo(
    () =>
      selectedQuestion
        ? getReply(selectedQuestion, serviceTitle)
        : "",
    [selectedQuestion, serviceTitle],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mkolepen", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
      form.reset();
    } catch {
      form.submit();
    }
  }

  return (
    <>
      <section id="service-enquiry" className="enterprise-enquiry-section">
        <div className="enterprise-enquiry-shell">
          <div className="enterprise-enquiry-copy">
            <span className="enterprise-kicker">Start a conversation</span>

            <h2>
              Tell us what you need from our{" "}
              <span>{serviceTitle}</span> team.
            </h2>

            <p>
              Share a few details about your business, existing workflow and
              expected outcome. We will use the information to understand your
              requirements before responding.
            </p>

            <div className="enterprise-enquiry-points">
              <div>
                <CheckCircle2 />
                Requirement-based recommendation
              </div>

              <div>
                <CheckCircle2 />
                Flexible delivery structure
              </div>

              <div>
                <CheckCircle2 />
                Clear onboarding process
              </div>
            </div>
          </div>

          <div className="enterprise-form-card">
            {submitted ? (
              <div className="enterprise-form-success">
                <CheckCircle2 />
                <h3>Thank you for your enquiry.</h3>
                <p>
                  Your requirements have been submitted successfully. Our team
                  will review the details before responding.
                </p>

                <button type="button" onClick={() => setSubmitted(false)}>
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="service" value={serviceTitle} />
                <input
                  type="hidden"
                  name="serviceSlug"
                  value={serviceSlug}
                />

                <div className="enterprise-form-grid">
                  <label>
                    <span>Full name *</span>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                    />
                  </label>

                  <label>
                    <span>Business email *</span>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                    />
                  </label>

                  <label>
                    <span>Company name *</span>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="Company name"
                    />
                  </label>

                  <label>
                    <span>Company website</span>
                    <input
                      type="url"
                      name="website"
                      placeholder="https://company.com"
                    />
                  </label>
                </div>

                <label>
                  <span>Phone number</span>

                  <div className="enterprise-phone-field">
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
                      type="tel"
                      name="phone"
                      inputMode="tel"
                      placeholder="Phone number"
                    />
                  </div>
                </label>

                <div className="enterprise-form-grid">
                  <label>
                    <span>Company size</span>
                    <select name="companySize" defaultValue="">
                      <option value="" disabled>
                        Select company size
                      </option>
                      <option value="1-10">1–10 people</option>
                      <option value="11-50">11–50 people</option>
                      <option value="51-200">51–200 people</option>
                      <option value="201-500">201–500 people</option>
                      <option value="500+">500+ people</option>
                    </select>
                  </label>

                  <label>
                    <span>Preferred start</span>
                    <select name="preferredStart" defaultValue="">
                      <option value="" disabled>
                        Select timeline
                      </option>
                      <option value="immediately">Immediately</option>
                      <option value="2-4-weeks">Within 2–4 weeks</option>
                      <option value="1-3-months">Within 1–3 months</option>
                      <option value="researching">Currently researching</option>
                    </select>
                  </label>
                </div>

                <label>
                  <span>Tell us about your requirements *</span>
                  <textarea
                    name="requirements"
                    required
                    rows={6}
                    placeholder={`Describe your ${serviceTitle.toLowerCase()} requirements, expected workload, current challenges and preferred working model.`}
                  />
                </label>

                <button type="submit" className="enterprise-submit-button">
                  Submit requirements
                  <Send />
                </button>

                <p className="enterprise-form-note">
                  By submitting this form, you agree to be contacted about your
                  enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <button
        type="button"
        className="service-chat-trigger"
        onClick={() => setChatOpen(true)}
        aria-label={`Ask about ${serviceTitle}`}
      >
        <MessageCircle />
        <span>Ask about this service</span>
      </button>

      {chatOpen && (
        <aside className="service-chat-panel" aria-label="Service assistant">
          <header>
            <div>
              <span className="service-chat-avatar">
                <Bot />
              </span>

              <div>
                <strong>ANVIROCX Assistant</strong>
                <small>{serviceTitle}</small>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setChatOpen(false)}
              aria-label="Close chatbot"
            >
              <X />
            </button>
          </header>

          <div className="service-chat-body">
            <div className="service-chat-message">
              Hi! I can help you understand our {serviceTitle} service. Select a
              question below.
            </div>

            <div className="service-chat-questions">
              {questions.map((question) => (
                <button
                  type="button"
                  key={question}
                  onClick={() => setSelectedQuestion(question)}
                >
                  {question}
                  <ArrowRight />
                </button>
              ))}
            </div>

            {selectedQuestion && (
              <>
                <div className="service-chat-message service-chat-user">
                  {selectedQuestion}
                </div>

                <div className="service-chat-message">{reply}</div>
              </>
            )}
          </div>

          <footer>
            <a href="#service-enquiry" onClick={() => setChatOpen(false)}>
              Discuss requirements
              <ArrowRight />
            </a>
          </footer>
        </aside>
      )}
    </>
  );
}
