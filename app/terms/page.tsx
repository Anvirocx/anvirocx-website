import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | ANVIROCX",
};

export default function LegalPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <nav className="legal-nav">
          <Link href="/" className="completion-logo">ANVIROCX</Link>
          <Link href="/">Return home</Link>
        </nav>

        <header>
          <p>ANVIROCX</p>
          <h1>Terms & Conditions</h1>
          <span>Last updated: July 2026</span>
        </header>

        <div className="legal-content">

          <section>
            <h2>Website information</h2>
            <p>The website provides general information about ANVIROCX services and does not itself create a binding service agreement.</p>
          </section>

          <section>
            <h2>Service proposals</h2>
            <p>Project scope, pricing, timelines, responsibilities and deliverables are confirmed separately through a written proposal or agreement.</p>
          </section>

          <section>
            <h2>Illustrative information</h2>
            <p>Examples, workflows and expected benefits shown on the website are illustrative and are not guaranteed outcomes.</p>
          </section>

          <section>
            <h2>Intellectual property</h2>
            <p>Website content, branding and original materials may not be copied or commercially reused without permission.</p>
          </section>

          <section>
            <h2>Third-party services</h2>
            <p>Projects may involve third-party platforms, subscriptions or applications governed by their own terms.</p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>Questions regarding these terms may be sent to hello@anvirocx.com.</p>
          </section>

        </div>

        <footer>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
          <Link href="/contact">Contact</Link>
        </footer>
      </div>
    </main>
  );
}
