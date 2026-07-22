import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Globe2,
  Mail,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";

import Container from "../../components/shared/Container";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact ANVIROCX | Business Solutions",
  description:
    "Discuss customer support, virtual assistance, website development, Shopify, AI automation and managed remote team requirements with ANVIROCX.",
};

const services = [
  "Customer Support",
  "Virtual Assistant",
  "Back Office",
  "Website Development",
  "Shopify Development",
  "AI Automation",
  "Video Editing",
  "Graphic Design",
  "Data Entry",
  "Managed Remote Teams",
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-page-hero">
        <div className="contact-page-grid" />
        <div className="contact-page-glow contact-page-glow-one" />
        <div className="contact-page-glow contact-page-glow-two" />

        <Container>
          <header className="contact-page-header">
            <Link href="/" className="contact-page-brand">
              ANVIROCX
            </Link>

            <nav>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
            </nav>
          </header>

          <div className="contact-page-breadcrumb">
            <Link href="/">
              <ArrowLeft />
              Back to home
            </Link>
          </div>

          <div className="contact-page-hero-grid">
            <div className="contact-page-hero-copy">
              <div className="contact-page-eyebrow">
                <MessageSquareText />
                Start a conversation
              </div>

              <h1>
                Let&apos;s build the right
                <span> solution for your business.</span>
              </h1>

              <p>
                Tell us about your requirements, current challenges and expected
                outcome. We will review the details and recommend a suitable
                delivery model.
              </p>

              <div className="contact-page-trust">
                <div>
                  <Clock3 />
                  <span>
                    <strong>Fast response</strong>
                    We aim to review enquiries promptly.
                  </span>
                </div>

                <div>
                  <ShieldCheck />
                  <span>
                    <strong>Confidential discussion</strong>
                    Your business information is handled responsibly.
                  </span>
                </div>

                <div>
                  <Globe2 />
                  <span>
                    <strong>Remote delivery</strong>
                    Flexible support for businesses across locations.
                  </span>
                </div>
              </div>
            </div>

            <ContactForm services={services} />
          </div>
        </Container>
      </section>

      <section className="contact-page-expect">
        <Container>
          <div className="contact-page-expect-heading">
            <p>What happens next</p>
            <h2>A clear path from enquiry to execution.</h2>
          </div>

          <div className="contact-page-steps">
            <article>
              <span>01</span>
              <h3>Requirement review</h3>
              <p>
                We review your submitted details, priorities and expected scope.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Discovery conversation</h3>
              <p>
                Where required, we arrange a conversation to clarify workflows,
                tools and expectations.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Recommended solution</h3>
              <p>
                We recommend a suitable service structure, delivery approach and
                next steps.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Onboarding</h3>
              <p>
                Once confirmed, we align processes, responsibilities,
                communication and launch requirements.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="contact-page-direct">
        <Container>
          <div className="contact-page-direct-card">
            <div>
              <Mail />
              <div>
                <p>Prefer email?</p>
                <h2>Contact our business solutions team directly.</h2>
              </div>
            </div>

            <a href="mailto:hello@anvirocx.com">
              hello@anvirocx.com
              <ArrowRight />
            </a>
          </div>
        </Container>
      </section>

      <section className="contact-page-final">
        <Container>
          <div>
            <CheckCircle2 />
            <p>Not sure which service fits?</p>
            <h2>Share the business challenge instead.</h2>
            <span>
              We will help identify the most suitable service or combination of
              services.
            </span>

            <Link href="/services">
              Explore all services
              <ArrowRight />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
