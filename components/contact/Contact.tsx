"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Container from "../shared/Container";

const trustPoints = [
  "Clear scope before work begins",
  "Flexible engagement models",
  "Direct communication and reporting",
  "Built for long-term business growth",
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section relative overflow-hidden py-28 sm:py-36 lg:py-44"
    >
      <div className="contact-grid-bg absolute inset-0" />
      <div className="contact-orb contact-orb-one" />
      <div className="contact-orb contact-orb-two" />

      <Container className="relative z-10">
        <div className="contact-shell">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
            className="contact-content"
          >
            <div className="contact-eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Start a conversation</span>
            </div>

            <h2 className="mt-7 max-w-[700px] text-[48px] font-semibold leading-[0.94] tracking-[-0.065em] text-slate-950 sm:text-[66px] lg:text-[76px]">
              Let’s build what
              <br />
              <span className="contact-gradient-text">
                your business needs next.
              </span>
            </h2>

            <p className="mt-7 max-w-[610px] text-[16px] font-medium leading-8 text-slate-500 sm:text-[18px]">
              Tell us what you are trying to improve, build or scale. We will
              help you identify the right combination of people, technology
              and operations.
            </p>

            <div className="mt-10 space-y-4">
              {trustPoints.map((item) => (
                <div key={item} className="contact-trust-row">
                  <CheckCircle2 className="h-5 w-5 text-pink-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:hello@anvirocx.com"
                className="contact-info-card group"
              >
                <div className="contact-info-icon">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <span>Email us</span>
                  <strong>hello@anvirocx.com</strong>
                </div>

                <ArrowUpRight className="ml-auto h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </a>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <MessageSquare className="h-5 w-5" />
                </div>

                <div>
                  <span>Response time</span>
                  <strong>Within one business day</strong>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="contact-form-card"
          >
            <div className="contact-form-header">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-pink-600/70">
                  Project enquiry
                </p>

                <h3 className="mt-3 text-[30px] font-semibold tracking-[-0.045em] text-slate-950">
                  Tell us about your project
                </h3>
              </div>

              <div className="contact-secure-badge">
                <ShieldCheck className="h-4 w-4" />
                Secure
              </div>
            </div>

            <form
              action="https://formspree.io/f/mkolepen"
              method="POST"
              className="mt-9 space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="contact-field">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </label>

                <label className="contact-field">
                  <span>Work email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    required
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="contact-field">
                  <span>Company</span>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company name"
                  />
                </label>

                <label className="contact-field">
                  <span>Service needed</span>
                  <select name="service" defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Customer Support</option>
                    <option>Virtual Assistants</option>
                    <option>Back Office</option>
                    <option>Website Development</option>
                    <option>Shopify</option>
                    <option>Video Editing</option>
                    <option>Graphic Design</option>
                    <option>Data Entry</option>
                    <option>AI Automation</option>
                    <option>Managed Remote Teams</option>
                  </select>
                </label>
              </div>

              <label className="contact-field">
                <span>Project details</span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us what you need help with..."
                  required
                />
              </label>

              <button type="submit" className="contact-submit-button group">
                Send enquiry
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </button>

              <p className="text-center text-[10px] font-medium leading-5 text-slate-400">
                By submitting this form, you agree to be contacted regarding
                your enquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
