import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../effects/Reveal";

const SERVICES = [
  {
    title: "Email Support",
    description:
      "Friendly, on-brand replies to common customer questions, order enquiries and everyday support requests.",
    href: "/services/customer-support",
  },
  {
    title: "Live Chat Support",
    description:
      "Helpful live chat coverage during agreed hours, giving visitors and customers a timely human response.",
    href: "/services/customer-support",
  },
  {
    title: "Ticket Follow-ups",
    description:
      "Organized ticket tagging, follow-ups and escalation of issues that need your team's attention.",
    href: "/services/customer-support",
  },
  {
    title: "Customer Support Pilot",
    description:
      "Start with a clearly scoped paid pilot to test workflows, communication and fit before expanding.",
    href: "/contact",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-slate-950 via-blue-700 to-slate-900 bg-clip-text text-transparent sm:text-4xl">
              Email & Chat Support for Online Stores
            </h2>

            <p className="mt-4 max-w-2xl text-slate-500">
              Order questions, shipping updates, returns and support tickets—handled within your brand guidelines and agreed coverage hours.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
          >
            Discuss your needs
            <ArrowUpRight size={17} />
          </Link>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.07}>
              <Link
              href={service.href}
              className="group flex min-h-[210px] h-full flex-col justify-between rounded-2xl border border-pink-200/70 bg-white/55 p-6 shadow-[0_18px_50px_rgba(236,72,153,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:border-pink-400/50 hover:bg-white/80 hover:shadow-[0_24px_70px_rgba(59,130,246,0.14)]"
            >
              <div>
                <h3 className="text-lg font-semibold text-blue-600">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {service.description}
                </p>
              </div>

              <div className="mt-7 flex items-center justify-between text-sm font-semibold text-blue-600">
                <span className="bg-gradient-to-r from-blue-700 to-pink-500 bg-clip-text text-transparent">Explore service</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
