import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Headphones,
  Layers3,
  LayoutDashboard,
  Palette,
  PlayCircle,
  ShoppingBag,
  Sparkles,
  Users2,
} from "lucide-react";

import Container from "../../components/shared/Container";

export const metadata: Metadata = {
  title: "Services | ANVIROCX Business Solutions",
  description:
    "Explore ANVIROCX services including customer support, virtual assistance, web development, Shopify, AI automation, creative production and managed remote teams.",
};

const services = [
  {
    icon: Headphones,
    number: "01",
    title: "Customer Support",
    slug: "customer-support",
    description:
      "Professional email, chat and voice support designed to improve response times, customer satisfaction and retention.",
    features: [
      "Email and chat support",
      "Voice customer service",
      "Order and account assistance",
    ],
  },
  {
    icon: Users2,
    number: "02",
    title: "Virtual Assistants",
    slug: "virtual-assistant",
    description:
      "Reliable remote assistance for administrative tasks, coordination, research and daily business operations.",
    features: [
      "Administrative assistance",
      "Calendar and inbox support",
      "Research and coordination",
    ],
  },
  {
    icon: LayoutDashboard,
    number: "03",
    title: "Back Office Operations",
    slug: "back-office",
    description:
      "Structured operational support that helps teams manage documentation, records, reporting and repetitive workflows.",
    features: [
      "Documentation support",
      "Process administration",
      "Operational reporting",
    ],
  },
  {
    icon: Code2,
    number: "04",
    title: "Website Development",
    slug: "website-development",
    description:
      "Fast, responsive and conversion-focused websites built for modern brands, agencies and growing businesses.",
    features: [
      "Business websites",
      "Landing pages",
      "Next.js development",
    ],
  },
  {
    icon: ShoppingBag,
    number: "05",
    title: "Shopify Solutions",
    slug: "shopify-development",
    description:
      "Shopify design, setup and optimization services for brands that want a premium and reliable online store.",
    features: [
      "Store development",
      "Product setup",
      "Conversion optimization",
    ],
  },
  {
    icon: PlayCircle,
    number: "06",
    title: "Video Editing",
    slug: "video-editing",
    description:
      "Professional video editing for social media, advertisements, product content and business communication.",
    features: [
      "Short-form videos",
      "Product advertisements",
      "Corporate content",
    ],
  },
  {
    icon: Palette,
    number: "07",
    title: "Graphic Design",
    slug: "graphic-design",
    description:
      "Consistent visual design for digital campaigns, social platforms, websites and branded communication.",
    features: [
      "Social media creatives",
      "Website graphics",
      "Marketing materials",
    ],
  },
  {
    icon: Database,
    number: "08",
    title: "Data Entry",
    slug: "data-entry",
    description:
      "Accurate and organized data processing for product catalogs, business records, spreadsheets and digital systems.",
    features: [
      "Spreadsheet management",
      "Product catalog entry",
      "Data verification",
    ],
  },
  {
    icon: Bot,
    number: "09",
    title: "AI Automation",
    slug: "ai-automation",
    description:
      "Practical automation systems that reduce manual effort and improve speed across recurring business processes.",
    features: [
      "Workflow automation",
      "AI-assisted operations",
      "Process integration",
    ],
  },
  {
    icon: BriefcaseBusiness,
    number: "10",
    title: "Managed Remote Teams",
    slug: "managed-remote-teams",
    description:
      "Dedicated remote professionals supported through structured onboarding, reporting and performance management.",
    features: [
      "Dedicated resources",
      "Team management",
      "Flexible scaling",
    ],
  },
];

const engagementModels = [
  {
    title: "Project-based delivery",
    description:
      "A defined scope, timeline and outcome for website, creative, automation or operational projects.",
  },
  {
    title: "Dedicated resource",
    description:
      "A remote professional assigned to support your business on an ongoing basis.",
  },
  {
    title: "Managed team",
    description:
      "A coordinated team with structured responsibilities, quality monitoring and performance reporting.",
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      <section className="services-page-hero relative overflow-hidden">
        <div className="services-page-grid absolute inset-0" />
        <div className="services-page-orb services-page-orb-one" />
        <div className="services-page-orb services-page-orb-two" />

        <Container className="relative z-10">
          <div className="services-page-topbar">
            <Link href="/" className="services-page-brand">
              ANVIROCX
            </Link>

            <div className="services-page-topnav">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact" className="services-page-top-cta">
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="services-page-hero-content">
            <div className="services-page-eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Connected business capabilities</span>
            </div>

            <h1>
              Services built for
              <br />
              <span>modern business growth.</span>
            </h1>

            <p>
              From customer operations and remote teams to websites, creative
              production and AI automation, ANVIROCX brings essential business
              capabilities together through one dependable partner.
            </p>

            <div className="services-page-actions">
              <Link href="/contact" className="services-primary-button">
                Discuss your requirements
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a href="#all-services" className="services-secondary-button">
                Explore all services
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section id="all-services" className="services-list-section">
        <Container>
          <div className="services-list-heading">
            <div>
              <p className="services-section-label">What we deliver</p>
              <h2>One partner. Multiple capabilities.</h2>
            </div>

            <p>
              Choose an individual service or combine multiple capabilities
              into a coordinated business solution.
            </p>
          </div>

          <div className="services-main-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article key={service.slug} className="services-main-card">
                  <div className="services-card-top">
                    <div className="services-card-icon">
                      <Icon className="h-6 w-6" strokeWidth={1.7} />
                    </div>

                    <span>{service.number}</span>
                  </div>

                  <h2>{service.title}</h2>
                  <p>{service.description}</p>

                  <div className="services-card-features">
                    {service.features.map((feature) => (
                      <div key={feature}>
                        <CheckCircle2 className="h-4 w-4" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="services-card-link"
                  >
                    Explore service
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="services-engagement-section">
        <Container>
          <div className="services-engagement-shell">
            <div className="services-engagement-copy">
              <div className="services-dark-eyebrow">
                <Layers3 className="h-3.5 w-3.5" />
                <span>Flexible engagement</span>
              </div>

              <h2>A delivery model that fits your requirement.</h2>

              <p>
                Every business has different priorities, workloads and internal
                capabilities. Our engagement model can be structured around a
                specific project, a dedicated professional or a fully managed
                remote team.
              </p>

              <Link href="/contact" className="services-light-button">
                Find the right model
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="services-engagement-cards">
              {engagementModels.map((model, index) => (
                <article key={model.title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{model.title}</h3>
                    <p>{model.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="services-final-section">
        <Container>
          <div className="services-final-card">
            <div>
              <p className="services-section-label">Build with ANVIROCX</p>

              <h2>
                Need more than one service?
                <br />
                We can build a connected solution.
              </h2>

              <p>
                Tell us what your business is trying to improve. We will
                recommend the right combination of services, people and
                workflows.
              </p>
            </div>

            <Link href="/contact" className="services-primary-button">
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
