import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | ANVIROCX",
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
          <h1>Privacy Policy</h1>
          <span>Last updated: July 2026</span>
        </header>

        <div className="legal-content">

          <section>
            <h2>Information we collect</h2>
            <p>We may collect information submitted through enquiry forms, including your name, business email, company name, telephone number and project requirements.</p>
          </section>

          <section>
            <h2>How information is used</h2>
            <p>Submitted information may be used to respond to enquiries, understand requirements, prepare service recommendations and communicate regarding a potential engagement.</p>
          </section>

          <section>
            <h2>Information sharing</h2>
            <p>We do not sell personal information. Information may only be shared with service providers when necessary to operate the website or respond to an enquiry.</p>
          </section>

          <section>
            <h2>Data security</h2>
            <p>Reasonable steps are taken to protect submitted information, although no online system can guarantee absolute security.</p>
          </section>

          <section>
            <h2>Your choices</h2>
            <p>You may contact us to request correction or deletion of information previously submitted, subject to applicable obligations.</p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>Questions regarding this policy may be sent to hello@anvirocx.com.</p>
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
