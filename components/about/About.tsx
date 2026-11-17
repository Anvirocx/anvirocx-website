"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Globe2,
  Headphones,
  Layers3,
  Sparkles,
  Users2,
} from "lucide-react";

import Container from "../shared/Container";

const operatingLayers = [
  {
    icon: Headphones,
    title: "Email Support",
    text: "Clear, helpful replies to routine questions, order enquiries and customer requests.",
  },
  {
    icon: Bot,
    title: "Live Chat",
    text: "Friendly real-time assistance during the coverage hours agreed with your business.",
  },
  {
    icon: Layers3,
    title: "Ticket Management",
    text: "Categorization, follow-ups and escalation so customer requests stay organized.",
  },
  {
    icon: Users2,
    title: "Clear Reporting",
    text: "A concise weekly summary of common questions, open issues and recurring themes.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="about-bento-section relative overflow-hidden py-28 sm:py-36 lg:py-44"
    >
      <div className="about-bento-grid-bg absolute inset-0" />

      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <div className="about-eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              <span>A practical support partner</span>
            </div>

            <h2 className="mt-7 max-w-[720px] text-[48px] font-semibold leading-[0.94] tracking-[-0.065em] text-slate-950 sm:text-[66px] lg:text-[78px]">
              Customer care,
              <br />
              <span className="about-gradient-text">
                handled with care.
              </span>
            </h2>
          </div>

          <p className="max-w-[640px] text-[16px] font-medium leading-8 text-slate-500 sm:text-[18px] lg:justify-self-end">
            ANVIROCX provides founder-led email and live chat support for small businesses that want customers to feel heard without hiring a full in-house team.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-12">
          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-bento-card about-bento-main lg:col-span-7"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-5">
                <div className="about-icon-shell">
                  <Globe2 className="h-6 w-6" />
                </div>

                <span className="about-status-badge">
                  <span />
                  Support built around you
                </span>
              </div>

              <div className="mt-16">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-pink-600/70">
                  A focused support service
                </p>

                <h3 className="mt-5 text-[36px] font-semibold leading-[1] tracking-[-0.055em] text-slate-950 sm:text-[50px]">
                  One clear scope.
                  <br />
                  Consistent customer care.
                </h3>

                <p className="mt-6 max-w-[570px] text-[15px] font-medium leading-7 text-slate-500">
                  We agree on channels, working hours, workflows and escalation rules before support begins.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-bento-card about-bento-side lg:col-span-5"
          >
            <h3 className="text-[32px] font-semibold tracking-[-0.05em] text-slate-950">
              Less coordination.
              <br />
              More execution.
            </h3>

            <div className="mt-12 space-y-4">
              {[
                "Email and live chat support",
                "Agreed coverage hours and scope",
                "Ticket follow-ups and escalation",
                "Weekly summary and direct communication",
              ].map((item) => (
                <div key={item} className="about-check-row">
                  <CheckCircle2 className="h-5 w-5 text-pink-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a href="/contact" className="about-text-link group">
              Discuss your support needs
              <ArrowUpRight className="h-4 w-4 group-hover:rotate-45" />
            </a>
          </motion.article>

          {operatingLayers.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="about-bento-card about-layer-card lg:col-span-3"
              >
                <div className="about-layer-icon">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-8 text-[21px] font-semibold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-[14px] leading-6 text-slate-500">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
