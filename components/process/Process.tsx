"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Layers3,
  Rocket,
  Search,
  Sparkles,
} from "lucide-react";

import Container from "../shared/Container";

const steps = [
  {
    icon: Search,
    label: "Discover",
    title: "Understand the operation",
    description:
      "We study your goals, current workflows, customer journey and execution gaps before recommending anything.",
    meta: ["Business needs", "Workflow review", "Priority mapping"],
  },
  {
    icon: Compass,
    label: "Design",
    title: "Build the right system",
    description:
      "We create a focused delivery model with clear responsibilities, tools, timelines and measurable outcomes.",
    meta: ["Operating plan", "Team structure", "Success metrics"],
  },
  {
    icon: Layers3,
    label: "Launch",
    title: "Deploy with control",
    description:
      "Your selected team, workflows and reporting structure are launched through a structured onboarding process.",
    meta: ["Team onboarding", "Process setup", "Quality checks"],
  },
  {
    icon: Rocket,
    label: "Scale",
    title: "Improve continuously",
    description:
      "We monitor performance, solve bottlenecks and expand capacity as your business requirements evolve.",
    meta: ["Performance review", "Optimization", "Flexible scaling"],
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="process-section relative overflow-hidden py-28 sm:py-36 lg:py-44"
    >
      <div className="process-grid-bg absolute inset-0" />
      <div className="process-orb process-orb-one" />
      <div className="process-orb process-orb-two" />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <div className="process-eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              <span>How we work</span>
            </div>

            <h2 className="mt-7 max-w-[760px] text-[48px] font-semibold leading-[0.94] tracking-[-0.065em] text-slate-950 sm:text-[66px] lg:text-[78px]">
              From complexity
              <br />
              <span className="process-gradient-text">to clear execution.</span>
            </h2>
          </div>

          <p className="max-w-[620px] text-[16px] font-medium leading-8 text-slate-500 sm:text-[18px] lg:justify-self-end">
            A structured process that turns business requirements into
            dependable systems, accountable teams and measurable outcomes.
          </p>
        </div>

        <div className="process-timeline mt-20">
          <div className="process-spine" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{
                  duration: 0.72,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="process-step group"
              >
                <div className="process-node">
                  <span className="process-node-core" />
                </div>

                <div className="process-card">
                  <div className="process-card-glow" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex items-center gap-4">
                        <div className="process-icon-shell">
                          <Icon className="h-5 w-5" strokeWidth={1.8} />
                        </div>

                        <div>
                          <p className="process-step-label">{step.label}</p>
                          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300">
                            Phase {String(index + 1).padStart(2, "0")}
                          </p>
                        </div>
                      </div>

                      <div className="process-card-arrow">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>

                    <h3 className="mt-10 max-w-[640px] text-[30px] font-semibold leading-[1] tracking-[-0.05em] text-slate-950 sm:text-[40px]">
                      {step.title}
                    </h3>

                    <p className="mt-5 max-w-[700px] text-[15px] font-medium leading-7 text-slate-500">
                      {step.description}
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                      {step.meta.map((item) => (
                        <div key={item} className="process-meta-item">
                          <CheckCircle2 className="h-4 w-4 text-pink-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="process-progress-track mt-9">
                      <span style={{ width: `${25 * (index + 1)}%` }} />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="process-final-cta mt-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-pink-600/70">
              Ready to begin
            </p>

            <h3 className="mt-3 text-[27px] font-semibold tracking-[-0.045em] text-slate-950 sm:text-[34px]">
              Let’s build your next operating system.
            </h3>
          </div>

          <a href="/contact" className="process-cta-button group">
            Start a conversation
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
          </a>
        </div>
      </Container>
    </section>
  );
}
