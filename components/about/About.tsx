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
    title: "Customer Operations",
    text: "Email, chat and voice support systems focused on speed, quality and customer trust.",
  },
  {
    icon: Bot,
    title: "Automation Layer",
    text: "Smart workflows that reduce repetitive work and keep everyday operations moving.",
  },
  {
    icon: Layers3,
    title: "Digital Execution",
    text: "Websites, Shopify, creative production and digital support delivered through one team.",
  },
  {
    icon: Users2,
    title: "Managed Teams",
    text: "Flexible specialists for back office, virtual assistance, editing, design and data work.",
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
              <span>One connected business partner</span>
            </div>

            <h2 className="mt-7 max-w-[720px] text-[48px] font-semibold leading-[0.94] tracking-[-0.065em] text-slate-950 sm:text-[66px] lg:text-[78px]">
              More than an agency.
              <br />
              <span className="about-gradient-text">
                An operating layer.
              </span>
            </h2>
          </div>

          <p className="max-w-[640px] text-[16px] font-medium leading-8 text-slate-500 sm:text-[18px] lg:justify-self-end">
            ANVIROCX brings customer experience, technology, automation and
            managed remote talent together—so growing companies can execute
            faster without managing multiple disconnected vendors.
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
                  Systems connected
                </span>
              </div>

              <div className="mt-16">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-pink-600/70">
                  Integrated delivery model
                </p>

                <h3 className="mt-5 text-[36px] font-semibold leading-[1] tracking-[-0.055em] text-slate-950 sm:text-[50px]">
                  One relationship.
                  <br />
                  Multiple capabilities.
                </h3>

                <p className="mt-6 max-w-[570px] text-[15px] font-medium leading-7 text-slate-500">
                  From customer support to digital delivery and automation,
                  every service works inside one coordinated operating system.
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
                "Clear ownership across every workflow",
                "Flexible capacity as needs change",
                "Consistent communication and reporting",
                "Human expertise supported by automation",
              ].map((item) => (
                <div key={item} className="about-check-row">
                  <CheckCircle2 className="h-5 w-5 text-pink-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a href="/contact" className="about-text-link group">
              Build your operating system
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
