"use client";

import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import Container from "../shared/Container";

const footerLinks = {
  Services: [
    ["Customer Support", "/services/customer-support"],
    ["AI Automation", "/services/ai-automation"],
    ["Website Development", "/services/website-development"],
    ["Managed Teams", "/services/managed-remote-teams"],
  ],
  Company: [
    ["About", "/about"],
    ["Process", "/#process"],
    ["Contact", "/contact"],
  ],
};

export default function Footer() {
  return (
    <footer className="premium-footer relative overflow-hidden">
      <div className="footer-grid-bg absolute inset-0" />
      <div className="footer-glow footer-glow-one" />
      <div className="footer-glow footer-glow-two" />

      <Container className="relative z-10">
        <div className="footer-cta-panel">
          <div>
            <div className="footer-eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Ready when you are</span>
            </div>

            <h2 className="mt-6 max-w-[820px] text-[44px] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-[62px] lg:text-[76px]">
              Build the team.
              <br />
              Launch the system.
              <br />
              <span>Scale with confidence.</span>
            </h2>
          </div>

          <a href="/contact" className="footer-main-cta group">
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
          </a>
        </div>

        <div className="footer-main-grid">
          <div className="footer-brand-column">
            <a href="#" className="footer-brand">
              <span className="footer-logo-mark">AX</span>

              <span>
                <strong>ANVIROCX</strong>
                <small>Business Solutions</small>
              </span>
            </a>

            <p className="mt-7 max-w-[420px] text-[15px] font-medium leading-7 text-white/45">
              Customer experience, digital execution, AI automation and
              managed remote teams—connected through one dependable business
              partner.
            </p>

            <a
              href="mailto:hello@anvirocx.com"
              className="footer-email-link group"
            >
              <Mail className="h-4 w-4" />
              hello@anvirocx.com
              <ArrowUpRight className="ml-auto h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="footer-link-column">
              <p>{heading}</p>

              <div className="mt-6 space-y-4">
                {links.map(([label, href]) => (
                  <a key={label} href={href}>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="footer-link-column">
            <p>Availability</p>

            <div className="footer-status-card mt-6">
              <span className="footer-status-dot" />

              <div>
                <strong>Systems online</strong>
                <small>Accepting new enquiries</small>
              </div>
            </div>

            <div className="mt-5 text-[12px] font-medium leading-6 text-white/35">
              Remote delivery
              <br />
              English & Hindi support
              <br />
              Flexible global coverage
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ANVIROCX. All rights reserved.</p>

          <div>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
