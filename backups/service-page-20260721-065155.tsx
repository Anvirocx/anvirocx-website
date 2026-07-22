import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Sparkles,
} from "lucide-react";

import Container from "../../../components/shared/Container";
import {
  getServiceBySlug,
  servicePages,
} from "../../../data/servicePages";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | ANVIROCX",
    };
  }

  return {
    title: `${service.title} ${service.highlightedTitle} | ANVIROCX`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="service-detail-page">
      <section className="service-detail-hero">
        <div className="service-detail-grid" />
        <div className="service-detail-glow service-detail-glow-one" />
        <div className="service-detail-glow service-detail-glow-two" />

        <Container className="service-detail-container">
          <header className="service-detail-header">
            <Link href="/services" className="service-detail-brand">
              ANVIROCX
            </Link>

            <nav>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/#contact" className="service-detail-header-cta">
                Let&apos;s talk
                <ArrowRight className="h-4 w-4" />
              </Link>
            </nav>
          </header>

          <div className="service-detail-hero-content">
            <Link href="/services" className="service-detail-back">
              <ArrowLeft className="h-4 w-4" />
              All services
            </Link>

            <div className="service-detail-eyebrow">
              <Icon className="h-4 w-4" />
              <span>{service.eyebrow}</span>
            </div>

            <h1>
              {service.title}
              <br />
              <span>{service.highlightedTitle}</span>
            </h1>

            <p>{service.description}</p>

            <div className="service-detail-actions">
              <Link href="/#contact" className="service-detail-primary-button">
                Discuss your requirements
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a href="/services" className="service-detail-secondary-button">
                Explore capabilities
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section id="service-overview" className="service-overview-section">
        <Container>
          <div className="service-overview-grid">
            <div>
              <p className="service-detail-label">Service overview</p>
              <h2>Dependable execution, designed around your business.</h2>
            </div>

            <div className="service-overview-copy">
              <p>{service.overview}</p>

              <div>
                <Sparkles className="h-5 w-5" />
                <p>
                  Every engagement is customized according to your goals,
                  workload, systems and preferred working model.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="service-capabilities-section">
        <Container>
          <div className="service-section-heading">
            <div>
              <p className="service-detail-label">What we provide</p>
              <h2>Complete support across the workflow.</h2>
            </div>

            <p>
              Select the capabilities you need or combine them into a complete
              managed solution.
            </p>
          </div>

          <div className="service-capabilities-grid">
            {service.services.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="service-benefits-section">
        <Container>
          <div className="service-benefits-shell">
            <div className="service-benefits-copy">
              <p className="service-detail-label">Business benefits</p>

              <h2>Built to improve quality, speed and scalability.</h2>

              <p>
                Our delivery model combines clear processes, skilled
                professionals and consistent communication.
              </p>

              <Link href="/#contact" className="service-detail-light-button">
                Build your solution
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="service-benefits-list">
              {service.benefits.map((benefit) => (
                <div key={benefit}>
                  <CheckCircle2 className="h-5 w-5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="service-process-section">
        <Container>
          <div className="service-section-heading">
            <div>
              <p className="service-detail-label">Our process</p>
              <h2>From requirement to reliable execution.</h2>
            </div>

            <p>
              A clear onboarding and delivery process keeps every engagement
              structured, transparent and aligned.
            </p>
          </div>

          <div className="service-process-grid">
            {service.process.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="service-faq-section">
        <Container>
          <div className="service-faq-layout">
            <div className="service-faq-heading">
              <div className="service-faq-icon">
                <HelpCircle className="h-6 w-6" />
              </div>

              <p className="service-detail-label">Frequently asked questions</p>
              <h2>Common questions about this service.</h2>
            </div>

            <div className="service-faq-list">
              {service.faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>
                    <span>{faq.question}</span>
                    <span className="service-faq-plus">+</span>
                  </summary>

                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="service-detail-final-section">
        <Container>
          <div className="service-detail-final-card">
            <div>
              <p className="service-detail-label">Start your project</p>
              <h2>Let&apos;s build the right solution for your business.</h2>
              <p>
                Share your requirements and we will recommend a suitable
                delivery model, workflow and team structure.
              </p>
            </div>

            <Link href="/#contact" className="service-detail-primary-button">
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
