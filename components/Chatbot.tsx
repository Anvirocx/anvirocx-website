"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Check,
  Headphones,
  MessageCircle,
  Send,
  ShoppingBag,
  Sparkles,
  Users,
  X,
} from "lucide-react";

type Message = {
  id: number;
  sender: "bot" | "user";
  text: string;
};

type LeadData = {
  service: string;
  projectType: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  company: string;
  details: string;
};

const initialLeadData: LeadData = {
  service: "",
  projectType: "",
  budget: "",
  timeline: "",
  name: "",
  email: "",
  company: "",
  details: "",
};

const serviceOptions = [
  {
    label: "Customer Support",
    icon: Headphones,
  },
  {
    label: "Virtual Assistant",
    icon: Users,
  },
  {
    label: "Website Development",
    icon: Sparkles,
  },
  {
    label: "Shopify Store",
    icon: ShoppingBag,
  },
  {
    label: "Graphic Design",
    icon: Sparkles,
  },
  {
    label: "Video Editing",
    icon: Sparkles,
  },
  {
    label: "AI Automation",
    icon: Bot,
  },
  {
    label: "Data Entry",
    icon: Sparkles,
  },
  {
    label: "Managed Remote Team",
    icon: Users,
  },
];

const projectTypes: Record<string, string[]> = {
  "Customer Support": [
    "Email Support",
    "Live Chat Support",
    "Voice Support",
    "Complete Support Team",
  ],
  "Virtual Assistant": [
    "Administrative Assistant",
    "Executive Assistant",
    "Research Assistant",
    "Custom Requirement",
  ],
  "Website Development": [
    "Business Website",
    "E-commerce Website",
    "Landing Page",
    "Website Redesign",
    "Custom Project",
  ],
  "Shopify Store": [
    "New Shopify Store",
    "Store Redesign",
    "Product Upload",
    "Store Optimization",
  ],
  "Graphic Design": [
    "Social Media Creatives",
    "Website Graphics",
    "Brand Materials",
    "E-commerce Creatives",
  ],
  "Video Editing": [
    "Short-form Videos",
    "Product Videos",
    "YouTube Videos",
    "Advertisement Videos",
  ],
  "AI Automation": [
    "Workflow Automation",
    "Customer Support Automation",
    "Lead Automation",
    "Custom AI Solution",
  ],
  "Data Entry": [
    "Spreadsheet Entry",
    "Product Catalog Entry",
    "CRM Data Entry",
    "Large Data Project",
  ],
  "Managed Remote Team": [
    "Customer Support Team",
    "Operations Team",
    "Creative Team",
    "Custom Remote Team",
  ],
};

const budgetOptions = [
  "Under $500",
  "$500 – $2,000",
  "$2,000 – $5,000",
  "$5,000+",
  "Let’s discuss",
];

const timelineOptions = [
  "As soon as possible",
  "Within 2 weeks",
  "Within 1 month",
  "Within 2–3 months",
  "Flexible",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [leadData, setLeadData] = useState<LeadData>(initialLeadData);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      text: "Hi! Welcome to ANVIROCX. How can we help your business today?",
    },
  ]);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const timeout = window.setTimeout(() => {
      contentRef.current?.scrollTo({
        top: contentRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 100);

    return () => window.clearTimeout(timeout);
  }, [messages, step, isOpen]);

  function addMessage(sender: "bot" | "user", text: string) {
    setMessages((current) => [
      ...current,
      {
        id: Date.now() + Math.random(),
        sender,
        text,
      },
    ]);
  }

  function selectService(service: string) {
    setLeadData((current) => ({
      ...current,
      service,
      projectType: "",
    }));

    addMessage("user", service);

    window.setTimeout(() => {
      addMessage(
        "bot",
        `Great choice. What kind of ${service.toLowerCase()} assistance do you need?`,
      );
      setStep(1);
    }, 300);
  }

  function selectProjectType(projectType: string) {
    setLeadData((current) => ({
      ...current,
      projectType,
    }));

    addMessage("user", projectType);

    window.setTimeout(() => {
      addMessage("bot", "What budget range are you considering?");
      setStep(2);
    }, 300);
  }

  function selectBudget(budget: string) {
    setLeadData((current) => ({
      ...current,
      budget,
    }));

    addMessage("user", budget);

    window.setTimeout(() => {
      addMessage("bot", "When would you like the project or service to begin?");
      setStep(3);
    }, 300);
  }

  function selectTimeline(timeline: string) {
    setLeadData((current) => ({
      ...current,
      timeline,
    }));

    addMessage("user", timeline);

    window.setTimeout(() => {
      addMessage(
        "bot",
        "Perfect. Please share your contact details and a short description of your requirement.",
      );
      setStep(4);
    }, 300);
  }

  function goBack() {
    if (step === 0 || isSubmitting) return;

    setStep((current) => current - 1);
  }

  function resetChat() {
    setStep(0);
    setLeadData(initialLeadData);
    setIsSubmitting(false);
    setIsSubmitted(false);
    setMessages([
      {
        id: Date.now(),
        sender: "bot",
        text: "Hi! Welcome to ANVIROCX. How can we help your business today?",
      },
    ]);
  }

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!leadData.name.trim() || !leadData.email.trim()) {
      addMessage("bot", "Please enter your name and work email.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mkolepen", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: `New chatbot lead — ${leadData.service}`,
          source: "ANVIROCX Website Chatbot",
          service: leadData.service,
          projectType: leadData.projectType,
          budget: leadData.budget,
          timeline: leadData.timeline,
          name: leadData.name,
          email: leadData.email,
          company: leadData.company || "Not provided",
          projectDetails: leadData.details || "Not provided",
        }),
      });

      if (!response.ok) {
        throw new Error("Lead submission failed");
      }

      addMessage(
        "user",
        `${leadData.name} — ${leadData.email}`,
      );

      window.setTimeout(() => {
        addMessage(
          "bot",
          "Thank you! Your requirement has been submitted successfully. Our team will contact you shortly.",
        );
        setIsSubmitted(true);
        setStep(5);
      }, 300);
    } catch {
      addMessage(
        "bot",
        "We could not submit your request right now. Please try again in a moment.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="anvirocx-chatbot">
      {isOpen && (
        <section
          className="chatbot-panel"
          aria-label="ANVIROCX virtual assistant"
        >
          <header className="chatbot-header">
            <div className="chatbot-agent">
              <div className="chatbot-agent-icon">
                <Bot size={20} strokeWidth={1.8} />
                <span />
              </div>

              <div>
                <h2>ANVIROCX Assistant</h2>
                <p>
                  <span />
                  Online
                </p>
              </div>
            </div>

            <button
              type="button"
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              <X size={18} />
            </button>
          </header>

          <div ref={contentRef} className="chatbot-content">
            <div className="chatbot-security">
              <Sparkles size={13} />
              Business solutions assistant
            </div>

            <div className="chatbot-messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`chatbot-message chatbot-message-${message.sender}`}
                >
                  {message.sender === "bot" && (
                    <div className="chatbot-message-avatar">
                      <Bot size={14} />
                    </div>
                  )}

                  <p>{message.text}</p>
                </div>
              ))}
            </div>

            <div className="chatbot-options-area">
              {step === 0 && (
                <div className="chatbot-service-options">
                  {serviceOptions.map((service) => {
                    const Icon = service.icon;

                    return (
                      <button
                        type="button"
                        key={service.label}
                        onClick={() => selectService(service.label)}
                      >
                        <Icon size={17} strokeWidth={1.8} />
                        <span>{service.label}</span>
                        <ArrowRight size={15} />
                      </button>
                    );
                  })}
                </div>
              )}

              {step === 1 && (
                <div className="chatbot-chip-options">
                  {(projectTypes[leadData.service] || [
                    "Custom Requirement",
                  ]).map((option) => (
                    <button
                      type="button"
                      key={option}
                      onClick={() => selectProjectType(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {step === 2 && (
                <div className="chatbot-chip-options">
                  {budgetOptions.map((option) => (
                    <button
                      type="button"
                      key={option}
                      onClick={() => selectBudget(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {step === 3 && (
                <div className="chatbot-chip-options">
                  {timelineOptions.map((option) => (
                    <button
                      type="button"
                      key={option}
                      onClick={() => selectTimeline(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {step === 4 && (
                <form className="chatbot-lead-form" onSubmit={submitLead}>
                  <div className="chatbot-form-row">
                    <label>
                      <span>Name *</span>
                      <input
                        type="text"
                        required
                        value={leadData.name}
                        onChange={(event) =>
                          setLeadData((current) => ({
                            ...current,
                            name: event.target.value,
                          }))
                        }
                        placeholder="Your name"
                      />
                    </label>

                    <label>
                      <span>Work email *</span>
                      <input
                        type="email"
                        required
                        value={leadData.email}
                        onChange={(event) =>
                          setLeadData((current) => ({
                            ...current,
                            email: event.target.value,
                          }))
                        }
                        placeholder="name@company.com"
                      />
                    </label>
                  </div>

                  <label>
                    <span>Company</span>
                    <input
                      type="text"
                      value={leadData.company}
                      onChange={(event) =>
                        setLeadData((current) => ({
                          ...current,
                          company: event.target.value,
                        }))
                      }
                      placeholder="Company name"
                    />
                  </label>

                  <label>
                    <span>Project details</span>
                    <textarea
                      rows={3}
                      value={leadData.details}
                      onChange={(event) =>
                        setLeadData((current) => ({
                          ...current,
                          details: event.target.value,
                        }))
                      }
                      placeholder="Tell us briefly about your requirement..."
                    />
                  </label>

                  <button
                    type="submit"
                    className="chatbot-submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit requirement
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}

              {step === 5 && isSubmitted && (
                <div className="chatbot-success-card">
                  <div>
                    <Check size={24} />
                  </div>

                  <h3>Requirement submitted</h3>

                  <p>
                    We have received your project details and will contact you
                    through the email provided.
                  </p>

                  <a href="/contact">
                    Open contact page
                    <ArrowRight size={15} />
                  </a>

                  <button type="button" onClick={resetChat}>
                    Start another conversation
                  </button>
                </div>
              )}
            </div>
          </div>

          <footer className="chatbot-footer">
            {step > 0 && step < 5 ? (
              <button
                type="button"
                className="chatbot-back-button"
                onClick={goBack}
              >
                <ArrowLeft size={15} />
                Back
              </button>
            ) : (
              <span />
            )}

            <p>Powered by ANVIROCX</p>
          </footer>
        </section>
      )}

      <button
        type="button"
        className={`chatbot-floating-button ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        {isOpen ? <X size={23} /> : <MessageCircle size={23} />}

        {!isOpen && <span className="chatbot-notification-dot">1</span>}
      </button>

      {!isOpen && (
        <button
          type="button"
          className="chatbot-floating-label"
          onClick={() => setIsOpen(true)}
        >
          Need help?
        </button>
      )}
    </div>
  );
}
