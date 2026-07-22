import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries | ANVIROCX",
  description: "Explore industries supported by ANVIROCX business, technology and operational solutions.",
};

export default function Page() {
  return (
    <main className="completion-page">
      <section className="completion-hero">
        <div className="completion-shell">
          <nav className="completion-nav">
            <Link href="/" className="completion-logo">ANVIROCX</Link>
            <div>
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/case-studies">Case Studies</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>

          <div className="completion-hero-copy">
            <p>Industries we support</p>
            <h1>Flexible solutions for modern businesses.</h1>
            <span>Our services can be adapted around your industry, workflows, customers, tools and operational requirements.</span>
          </div>
        </div>
      </section>

      <section className="completion-content">
        <div className="completion-shell">
          <div className="completion-grid">

          <article>
            <span>E</span>
            <h2>E-commerce</h2>
            <p>Customer support, Shopify development, product operations, data management and creative services.</p>
            <Link href="/contact?industry=E-commerce">Explore <b>→</b></Link>
          </article>

          <article>
            <span>S</span>
            <h2>SaaS</h2>
            <p>Customer experience, virtual assistance, onboarding support, automation and back-office operations.</p>
            <Link href="/contact?industry=SaaS">Explore <b>→</b></Link>
          </article>

          <article>
            <span>H</span>
            <h2>Healthcare</h2>
            <p>Structured administrative support, data processing and customer communication workflows.</p>
            <Link href="/contact?industry=Healthcare">Explore <b>→</b></Link>
          </article>

          <article>
            <span>F</span>
            <h2>Finance</h2>
            <p>Process-driven support, documentation, data operations and controlled administrative workflows.</p>
            <Link href="/contact?industry=Finance">Explore <b>→</b></Link>
          </article>

          <article>
            <span>R</span>
            <h2>Real Estate</h2>
            <p>Lead management, virtual assistance, website development and business coordination.</p>
            <Link href="/contact?industry=Real%20Estate">Explore <b>→</b></Link>
          </article>

          <article>
            <span>E</span>
            <h2>Education</h2>
            <p>Student support, data management, content operations and digital platform assistance.</p>
            <Link href="/contact?industry=Education">Explore <b>→</b></Link>
          </article>

          <article>
            <span>T</span>
            <h2>Travel & Hospitality</h2>
            <p>Reservation support, customer communication, back-office work and digital experiences.</p>
            <Link href="/contact?industry=Travel%20&%20Hospitality">Explore <b>→</b></Link>
          </article>

          <article>
            <span>L</span>
            <h2>Logistics</h2>
            <p>Order coordination, data entry, customer support and operational reporting.</p>
            <Link href="/contact?industry=Logistics">Explore <b>→</b></Link>
          </article>

          <article>
            <span>P</span>
            <h2>Professional Services</h2>
            <p>Administrative assistance, websites, automation and managed remote teams.</p>
            <Link href="/contact?industry=Professional%20Services">Explore <b>→</b></Link>
          </article>

          </div>
        </div>
      </section>

      <section className="completion-cta">
        <div className="completion-shell">
          <div>
            <p>Need a tailored solution?</p>
            <h2>Tell us what your business needs.</h2>
            <Link href="/contact">Start a conversation →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
