import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources | ANVIROCX",
  description: "Business guides, engagement examples and frequently asked questions from ANVIROCX.",
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
            <p>Knowledge centre</p>
            <h1>Resources for better business decisions.</h1>
            <span>Explore practical information about outsourcing, digital projects, remote operations and business automation.</span>
          </div>
        </div>
      </section>

      <section className="completion-content">
        <div className="completion-shell">
          <div className="completion-grid">

          <article>
            <span>C</span>
            <h2>Case Studies</h2>
            <p>Review illustrative business challenges, delivery structures and possible solutions.</p>
            <Link href="/case-studies">Explore <b>→</b></Link>
          </article>

          <article>
            <span>F</span>
            <h2>Frequently Asked Questions</h2>
            <p>Find answers about pricing, onboarding, delivery, security and communication.</p>
            <Link href="/faq">Explore <b>→</b></Link>
          </article>

          <article>
            <span>S</span>
            <h2>Service Guides</h2>
            <p>Explore detailed capabilities, processes, pricing structures and engagement options.</p>
            <Link href="/services">Explore <b>→</b></Link>
          </article>

          <article>
            <span>P</span>
            <h2>Project Consultation</h2>
            <p>Share your requirements and receive a recommended next step.</p>
            <Link href="/contact">Explore <b>→</b></Link>
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
