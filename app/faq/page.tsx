import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | ANVIROCX",
  description:
    "Answers to common questions about ANVIROCX services, pricing, onboarding, communication and delivery.",
};

const faqs = [
  {
    question: "What services does ANVIROCX provide?",
    answer:
      "ANVIROCX provides customer support, virtual assistance, back-office operations, website development, Shopify development, AI automation, video editing, graphic design, data entry and managed remote teams.",
  },
  {
    question: "How is pricing calculated?",
    answer:
      "Pricing depends on service type, project scope, working hours, complexity, team requirements, tools, volume and delivery timeline. A final quotation is provided after reviewing the requirements.",
  },
  {
    question: "Can I start with a small requirement?",
    answer:
      "Yes. Engagements can begin with a defined project, selected workflow or limited support requirement and scale as the business grows.",
  },
  {
    question: "Do you provide dedicated resources?",
    answer:
      "Dedicated, semi-dedicated and project-based engagement structures may be available depending on the service and workload.",
  },
  {
    question: "How does onboarding work?",
    answer:
      "The onboarding process generally includes requirement discovery, workflow review, responsibility alignment, tool access, documentation and launch planning.",
  },
  {
    question: "Which countries do you support?",
    answer:
      "ANVIROCX operates through remote delivery and can discuss requirements from businesses across different locations and time zones.",
  },
  {
    question: "How will progress be communicated?",
    answer:
      "Communication and reporting may include email updates, scheduled meetings, activity summaries, project tools and performance reports depending on the engagement.",
  },
  {
    question: "Can multiple services be combined?",
    answer:
      "Yes. Services can be combined into a tailored solution, such as customer support with back-office operations or website development with automation.",
  },
];

export default function FAQPage() {
  return (
    <main className="completion-page">
      <section className="completion-hero">
        <div className="completion-shell">
          <nav className="completion-nav">
            <Link href="/" className="completion-logo">ANVIROCX</Link>
            <div>
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>

          <div className="completion-hero-copy">
            <p>Frequently asked questions</p>
            <h1>Everything you need to know before getting started.</h1>
            <span>
              Learn more about our services, delivery approach, pricing and
              onboarding process.
            </span>
          </div>
        </div>
      </section>

      <section className="completion-faq-section">
        <div className="completion-shell">
          <div className="completion-faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <span>{faq.question}</span>
                  <b>+</b>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
