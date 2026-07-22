import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Headphones,
  Layers3,
  ShoppingBag,
  Users,
} from "lucide-react";

import Container from "../../components/shared/Container";

export const metadata: Metadata = {
  title: "Case Studies | ANVIROCX Business Solutions",
  description:
    "Explore illustrative ANVIROCX engagement models across customer support, Shopify development, websites, virtual assistance, automation and remote teams.",
};

const caseStudies = [
  {
    slug: "ecommerce-customer-support",
    category: "Customer Support",
    title: "Structured customer support for a growing e-commerce business",
    description:
      "An illustrative model showing how email, chat, order queries and escalation workflows can be organized for a growing online store.",
    icon: Headphones,
    challenge:
      "Customer enquiries are spread across multiple channels, response quality varies and recurring order issues consume internal team time.",
    solution: [
      "Centralized email and chat handling",
      "Approved response templates and SOPs",
      "Order-status and refund coordination",
      "Escalation matrix for complex cases",
    ],
    outcomes: [
      "More consistent customer communication",
      "Clear ownership of support requests",
      "Reduced operational pressure on founders",
    ],
    serviceHref: "/services/customer-support",
  },
  {
    slug: "shopify-store-development",
    category: "Shopify Development",
    title: "Premium Shopify storefront for a product-based brand",
    description:
      "An illustrative Shopify engagement covering store structure, branded design, product organization and launch readiness.",
    icon: ShoppingBag,
    challenge:
      "The brand requires a professional storefront but lacks a clear site structure, branded shopping journey and properly organized product catalog.",
    solution: [
      "Store architecture and navigation planning",
      "Theme setup and visual customization",
      "Collection and product-page organization",
      "Mobile optimization and launch checks",
    ],
    outcomes: [
      "Stronger and more consistent brand presentation",
      "Simplified product discovery",
      "A launch-ready commerce foundation",
    ],
    serviceHref: "/services/shopify-development",
  },
  {
    slug: "business-website",
    category: "Website Development",
    title: "Conversion-focused website for a service business",
    description:
      "An illustrative project showing how a modern business website can communicate services clearly and generate qualified enquiries.",
    icon: Code2,
    challenge:
      "The company relies on referrals and social media but does not have a credible website explaining its services, process and value proposition.",
    solution: [
      "Clear information architecture",
      "Premium responsive interface",
      "Dedicated service pages",
      "Lead forms and conversion-focused calls to action",
    ],
    outcomes: [
      "Improved digital credibility",
      "Clearer service communication",
      "A centralized destination for outreach campaigns",
    ],
    serviceHref: "/services/website-development",
  },
  {
    slug: "virtual-assistant-operations",
    category: "Virtual Assistant",
    title: "Administrative support model for a busy founder",
    description:
      "An illustrative operating model for recurring inbox, calendar, research, documentation and coordination tasks.",
    icon: Users,
    challenge:
      "Routine administrative responsibilities take time away from sales, client delivery and business planning.",
    solution: [
      "Inbox and calendar assistance",
      "Document and spreadsheet management",
      "Online research and information organization",
      "Recurring task and follow-up tracking",
    ],
    outcomes: [
      "More time for high-priority responsibilities",
      "Better organization of recurring tasks",
      "Reduced administrative backlog",
    ],
    serviceHref: "/services/virtual-assistant",
  },
  {
    slug: "business-automation",
    category: "AI Automation",
    title: "Automated lead-management workflow for a service company",
    description:
      "An illustrative automation connecting enquiry capture, notifications, lead records and follow-up activities.",
    icon: Bot,
    challenge:
      "Leads arrive through different sources and require repetitive manual entry, assignment and follow-up.",
    solution: [
      "Automated lead capture",
      "CRM or spreadsheet record creation",
      "Internal notifications",
      "Follow-up reminders and workflow tracking",
    ],
    outcomes: [
      "Less repetitive manual work",
      "More consistent lead handling",
      "Improved visibility across the enquiry pipeline",
    ],
    serviceHref: "/services/ai-automation",
  },
  {
    slug: "managed-remote-team",
    category: "Managed Remote Teams",
    title: "Flexible remote operations team for business growth",
    description:
      "An illustrative delivery structure combining customer support, administrative assistance and back-office work.",
    icon: Layers3,
    challenge:
      "The business requires additional operational capacity but is not ready to build and manage multiple in-house roles.",
    solution: [
      "Defined remote team roles",
      "Documented responsibilities and workflows",
      "Central task coordination",
      "Routine performance and activity reporting",
    ],
    outcomes: [
      "Flexible access to operational capacity",
      "Clearer responsibility allocation",
      "A scalable foundation for future requirements",
    ],
    serviceHref: "/services/managed-remote-teams",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="case-studies-page">
      <section className="case-studies-hero">
        <div className="case-studies-hero-grid" />
        <div className="case-studies-glow case-studies-glow-one" />
        <div className="case-studies-glow case-studies-glow-two" />

        <Container>
          <div className="case-studies-topbar">
            <Link href="/" className="case-studies-logo">
              ANVIROCX
            </Link>

            <nav>
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>

          <div className="case-studies-hero-content">
            <p className="case-studies-eyebrow">Engagement examples</p>

            <h1>
              See how our services can support
              <span> real business challenges.</span>
            </h1>

            <p className="case-studies-intro">
              These illustrative examples demonstrate possible delivery models,
              workflows and outcomes. They are not presented as completed client
              engagements or guaranteed performance results.
            </p>

            <div className="case-studies-hero-actions">
              <Link href="#engagements">
                Explore examples
                <ArrowRight />
              </Link>

              <Link href="/contact">Discuss your requirements</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="case-studies-disclaimer">
        <Container>
          <div>
            <CheckCircle2 />
            <p>
              <strong>Transparent presentation:</strong> The examples below are
              illustrative engagement frameworks. Real case studies will only be
              published with accurate, supportable information.
            </p>
          </div>
        </Container>
      </section>

      <section className="case-studies-list" id="engagements">
        <Container>
          <div className="case-studies-heading">
            <p>Selected scenarios</p>
            <h2>Flexible solutions built around business requirements.</h2>
          </div>

          <div className="case-studies-grid">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;

              return (
                <article className="case-study-card" key={study.slug}>
                  <div className="case-study-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="case-study-card-heading">
                    <span>
                      <Icon />
                    </span>

                    <p>{study.category}</p>
                    <h3>{study.title}</h3>
                    <div>{study.description}</div>
                  </div>

                  <div className="case-study-columns">
                    <div>
                      <p className="case-study-label">Business challenge</p>
                      <span>{study.challenge}</span>
                    </div>

                    <div>
                      <p className="case-study-label">Potential solution</p>

                      <ul>
                        {study.solution.map((item) => (
                          <li key={item}>
                            <CheckCircle2 />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="case-study-label">Expected benefits</p>

                      <ul>
                        {study.outcomes.map((item) => (
                          <li key={item}>
                            <CheckCircle2 />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="case-study-card-footer">
                    <Link href={study.serviceHref}>
                      Explore {study.category}
                      <ArrowRight />
                    </Link>

                    <Link
                      href={`/contact?service=${encodeURIComponent(
                        study.category
                      )}`}
                    >
                      Discuss a similar requirement
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="case-studies-final">
        <Container>
          <div className="case-studies-final-card">
            <div>
              <p>Have a specific challenge?</p>

              <h2>
                Tell us what your business needs help with.
              </h2>

              <span>
                We will review your workflow and recommend a suitable service,
                operating structure and next step.
              </span>
            </div>

            <Link href="/contact">
              Start a conversation
              <ArrowRight />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
