import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | ANVIROCX",
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
          <h1>Cookie Policy</h1>
          <span>Last updated: July 2026</span>
        </header>

        <div className="legal-content">

          <section>
            <h2>What cookies are</h2>
            <p>Cookies are small data files that websites may store in a browser to support functionality and understand website usage.</p>
          </section>

          <section>
            <h2>Essential cookies</h2>
            <p>Essential cookies may be used where required for website functionality, security or form operation.</p>
          </section>

          <section>
            <h2>Analytics</h2>
            <p>Analytics tools may be introduced to understand general website performance and visitor interactions.</p>
          </section>

          <section>
            <h2>Third-party tools</h2>
            <p>Embedded forms or other third-party services may apply their own cookies according to their respective policies.</p>
          </section>

          <section>
            <h2>Browser controls</h2>
            <p>Visitors can manage or block cookies through their browser settings, although some website features may be affected.</p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>Questions regarding cookies may be sent to hello@anvirocx.com.</p>
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
