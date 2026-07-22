"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Code2, Headphones, Users } from "lucide-react";

import Container from "../shared/Container";
import AIGlobe from "./AIGlobe";

const capabilities = [
  {
    icon: Headphones,
    title: "Customer Experience",
    subtitle: "Human-first support",
  },
  {
    icon: Code2,
    title: "Digital Products",
    subtitle: "Web and commerce",
  },
  {
    icon: Bot,
    title: "AI Automation",
    subtitle: "Smart workflows",
  },
  {
    icon: Users,
    title: "Remote Teams",
    subtitle: "Flexible specialists",
  },
];

export default function Hero() {
  return (
    <section className="white-tech-hero relative overflow-hidden bg-white pb-24 pt-36 text-[#07111f] lg:min-h-screen lg:pb-20 lg:pt-32">
      <div className="white-tech-grid absolute inset-0" />
      <div className="white-hero-glow white-glow-one" />
      <div className="white-hero-glow white-glow-two" />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="white-status-pill"
            >
              <span className="white-status-dot" />

              <span>Premium business systems for modern companies</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-[760px] text-[55px] font-semibold leading-[0.91] tracking-[-0.07em] sm:text-[75px] lg:text-[84px] xl:text-[96px]"
            >
              Build better.
              <br />
              Operate smarter.
              <br />
              <span className="white-gradient-heading">Scale globally.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="mt-8 max-w-[650px] text-[16px] font-medium leading-8 text-slate-500 sm:text-[18px]"
            >
              ANVIROCX connects customer support, digital execution, AI
              automation and managed remote teams into one dependable growth
              system.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a href="/services" className="white-primary-cta group">
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </a>

              <a href="/services" className="white-secondary-cta">
                Explore capabilities
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 42, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1.1,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[720px]"
          >
            <AIGlobe />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.42 }}
          className="white-capability-grid"
        >
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="white-capability-card">
                <div className="white-capability-icon">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>

                <div>
                  <p>{item.title}</p>
                  <span>{item.subtitle}</span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
