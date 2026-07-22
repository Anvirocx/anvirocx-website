import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Layers3,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  Users2,
} from "lucide-react";

import Container from "../../components/shared/Container";

export const metadata: Metadata = {
  title: "About ANVIROCX | Business Solutions Agency",
  description:
    "Learn how ANVIROCX helps growing businesses improve customer experience, digital execution, automation and remote operations.",
};

const values = [
  {
    icon: Target,
    title: "Outcome focused",
    description:
      "Every engagement begins with a clear business objective and measurable expectations.",
  },
  {
    icon: ShieldCheck,
    title: "Dependable execution",
    description:
      "Structured workflows, transparent communication and consistent quality remain central to delivery.",
  },
  {
    icon: Lightbulb,
    title: "Practical innovation",
    description:
      "We use technology and automation where they create real efficiency—not unnecessary complexity.",
  },
  {
    icon: Users2,
    title: "Flexible partnership",
    description:
      "Our solutions adapt as your team, workload and operational requirements continue to evolve.",
  },
];

const capabilities = [
  "Customer experience operations",
  "Virtual assistance and back office",
  "Website and Shopify development",
  "Video editing and graphic design",
  "Data entry and process support",
  "AI automation and workflow improvement",
  "Managed remote teams",
  "Flexible global delivery",
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-page-hero relative overflow-hidden">
        <div className="about-page-grid absolute inset-0" />
        <div className="about-page-orb about-page-orb-one" />
        <div className="about-page-orb about-page-orb-two" />

        <Container className="relative z-10">
          <div className="about-page-topbar">
            <Link href="/" className="about-back-link">
              ANVIROCX
            </Link>

            <Link href="/contact" className="about-top-cta">
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="about-page-hero-content">
            <div className="about-page-eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              <span>About ANVIROCX</span>
            </div>

            <h1>
              One partner for
              <br />
              <span>modern business execution.</span>
            </h1>

            <p>
              ANVIROCX helps businesses strengthen customer experience,
              improve digital execution, automate repetitive workflows and
              build dependable remote operations.
            </p>

            <div className="about-page-actions">
              <Link href="/contact" className="about-primary-button">
                Discuss your requirements
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link href="/#services" className="about-secondary-button">
                Explore services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="about-story-section">
        <Container>
          <div className="about-story-grid">
            <div>
              <p className="about-section-label">Our purpose</p>

              <h2>
                Helping businesses move from operational pressure to clear,
                scalable execution.
              </h2>
            </div>

            <div className="about-story-copy">
              <p>
                Growing businesses often rely on disconnected freelancers,
                tools and service providers. This creates communication gaps,
                inconsistent quality and unnecessary management overhead.
              </p>

              <p>
                ANVIROCX brings multiple business capabilities together through
                one coordinated delivery partner. Our role is to understand the
                requirement, build the right system and support reliable
                execution.
              </p>

              <p>
                Whether the requirement is customer support, digital
                development, creative production, automation or a managed
                remote team, the focus remains the same: dependable outcomes
                and long-term business value.
              </p>
            </div>
          </div>

          <div className="about-stat-grid">
            <div className="about-stat-card">
              <strong>01</strong>
              <span>Integrated business partner</span>
            </div>

            <div className="about-stat-card">
              <strong>24/7</strong>
              <span>Operations-ready approach</span>
            </div>

            <div className="about-stat-card">
              <strong>Flexible</strong>
              <span>Engagement and team structure</span>
            </div>

            <div className="about-stat-card">
              <strong>Global</strong>
              <span>Remote delivery capability</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="about-values-section">
        <Container>
          <div className="about-values-heading">
            <div>
              <p className="about-section-label">How we operate</p>
              <h2>Principles behind every engagement.</h2>
            </div>

            <p>
              Our approach combines clear ownership, thoughtful planning and
              consistent communication from onboarding through ongoing
              delivery.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article key={value.title} className="about-value-card">
                  <div className="about-value-icon">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>

                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="about-capabilities-section">
        <Container>
          <div className="about-capabilities-shell">
            <div className="about-capabilities-content">
              <div className="about-page-eyebrow">
                <Layers3 className="h-3.5 w-3.5" />
                <span>Connected capabilities</span>
              </div>

              <h2>
                The expertise required to build, operate and scale modern
                businesses.
              </h2>

              <p>
                Instead of managing multiple disconnected vendors, businesses
                can access coordinated support across operations, technology,
                creative execution and automation.
              </p>

              <Link href="/#services" className="about-dark-button">
                View all services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="about-capabilities-list">
              {capabilities.map((capability) => (
                <div key={capability}>
                  <CheckCircle2 className="h-4 w-4" />
                  <span>{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="about-final-section">
        <Container>
          <div className="about-final-card">
            <div className="about-final-icon">
              <Globe2 className="h-6 w-6" />
            </div>

            <div>
              <p className="about-section-label">Build with ANVIROCX</p>
              <h2>Let’s create a better way to operate your business.</h2>
            </div>

            <Link href="/contact" className="about-primary-button">
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
