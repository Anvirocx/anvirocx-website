import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Globe2,
  Layers3,
  ShieldCheck,
} from "lucide-react";

const trustStats = [
  {
    value: "10+",
    label: "Business Solutions",
    icon: Layers3,
  },
  {
    value: "24/7",
    label: "Support Capability",
    icon: Clock3,
  },
  {
    value: "Global",
    label: "Remote Delivery",
    icon: Globe2,
  },
  {
    value: "Custom",
    label: "Engagement Models",
    icon: ShieldCheck,
  },
];

const industries = [
  "E-commerce",
  "SaaS",
  "Healthcare",
  "Finance",
  "Real Estate",
  "Education",
  "Travel",
  "Hospitality",
  "Logistics",
  "Professional Services",
];

const technologies = [
  "Shopify",
  "Next.js",
  "React",
  "WordPress",
  "Zendesk",
  "Freshdesk",
  "Intercom",
  "HubSpot",
  "Slack",
  "Google Workspace",
  "Microsoft 365",
  "AI Automation",
];

const benefits = [
  "Flexible delivery structures",
  "Clear communication and reporting",
  "Scalable remote resources",
  "Documented business workflows",
];

export default function TrustAndIndustries() {
  return (
    <section className="home-enterprise-section">
      <div className="home-enterprise-container">
        <div className="home-enterprise-stats">
          {trustStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <article key={stat.label}>
                <span>
                  <Icon />
                </span>

                <div>
                  <strong>{stat.value}</strong>
                  <p>{stat.label}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="home-enterprise-main">
          <div className="home-enterprise-copy">
            <p className="home-enterprise-eyebrow">
              Built for modern businesses
            </p>

            <h2>
              One reliable partner for
              <span> digital and operational growth.</span>
            </h2>

            <p className="home-enterprise-description">
              ANVIROCX combines business operations, customer experience,
              technology and creative services into flexible solutions designed
              around your requirements.
            </p>

            <div className="home-enterprise-benefits">
              {benefits.map((benefit) => (
                <div key={benefit}>
                  <CheckCircle2 />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="home-enterprise-actions">
              <Link href="/services">
                Explore solutions
                <ArrowRight />
              </Link>

              <Link href="/contact">
                Discuss requirements
              </Link>
            </div>
          </div>

          <div className="home-enterprise-industries">
            <div className="home-enterprise-panel-heading">
              <p>Industries we support</p>
              <span>
                Flexible solutions for service-led and digital businesses.
              </span>
            </div>

            <div className="home-industry-grid">
              {industries.map((industry, index) => (
                <div key={industry}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="home-technology-section">
          <div>
            <p>Technology ecosystem</p>
            <h3>Working with the platforms modern teams depend on.</h3>
          </div>

          <div className="home-technology-list">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
