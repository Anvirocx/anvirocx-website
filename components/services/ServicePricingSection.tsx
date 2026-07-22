import Link from "next/link";
import {
  ArrowRight,
  Check,
  CircleDollarSign,
  Sparkles,
} from "lucide-react";

import Container from "../shared/Container";
import type { ServicePricing } from "../../data/servicePricing";

type ServicePricingSectionProps = {
  pricing: ServicePricing;
  serviceTitle: string;
};

export default function ServicePricingSection({
  pricing,
  serviceTitle,
}: ServicePricingSectionProps) {
  return (
    <section className="enterprise-pricing-section" id="pricing">
      <Container>
        <div className="enterprise-pricing-heading">
          <div>
            <p className="service-detail-label">{pricing.eyebrow}</p>

            <h2>{pricing.heading}</h2>
          </div>

          <p>{pricing.description}</p>
        </div>

        <div className="enterprise-pricing-grid">
          {pricing.plans.map((plan) => (
            <article
              key={plan.name}
              className={
                plan.featured
                  ? "enterprise-pricing-card enterprise-pricing-featured"
                  : "enterprise-pricing-card"
              }
            >
              {plan.featured && (
                <div className="enterprise-pricing-popular">
                  <Sparkles />
                  Recommended
                </div>
              )}

              <div className="enterprise-pricing-card-top">
                <CircleDollarSign />

                <p>{plan.name}</p>

                <h3>
                  {plan.price}
                  {plan.period && <span>{plan.period}</span>}
                </h3>

                <div>{plan.description}</div>
              </div>

              <div className="enterprise-pricing-features">
                {plan.features.map((feature) => (
                  <div key={feature}>
                    <span>
                      <Check />
                    </span>

                    <p>{feature}</p>
                  </div>
                ))}
              </div>

              <Link
                href={`#service-enquiry`}
                aria-label={`${plan.cta} for ${serviceTitle}`}
              >
                {plan.cta}
                <ArrowRight />
              </Link>
            </article>
          ))}
        </div>

        <div className="enterprise-pricing-note">
          <span>Important</span>
          <p>{pricing.note}</p>
        </div>
      </Container>
    </section>
  );
}
