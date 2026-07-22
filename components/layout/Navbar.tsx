"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  ChevronDown,
  Code2,
  Database,
  Headphones,
  Menu,
  Palette,
  ShoppingBag,
  Users,
  Video,
  X,
} from "lucide-react";

const serviceGroups = [
  {
    title: "Business Operations",
    description: "Reliable support for daily business workflows.",
    services: [
      {
        label: "Customer Support",
        description: "Chat, email and customer experience support.",
        href: "/services/customer-support",
        icon: Headphones,
      },
      {
        label: "Virtual Assistants",
        description: "Flexible administrative and operational support.",
        href: "/services/virtual-assistants",
        icon: BriefcaseBusiness,
      },
      {
        label: "Back Office",
        description: "Structured processing and business operations.",
        href: "/services/back-office",
        icon: Database,
      },
      {
        label: "Data Entry",
        description: "Accurate and organised data management.",
        href: "/services/data-entry",
        icon: Database,
      },
    ],
  },
  {
    title: "Digital & Creative",
    description: "Technology and creative services built to scale.",
    services: [
      {
        label: "Website Development",
        description: "Modern, responsive business websites.",
        href: "/services/website-development",
        icon: Code2,
      },
      {
        label: "Shopify Development",
        description: "High-converting e-commerce experiences.",
        href: "/services/shopify-development",
        icon: ShoppingBag,
      },
      {
        label: "AI Automation",
        description: "Automate repetitive business workflows.",
        href: "/services/ai-automation",
        icon: Bot,
      },
      {
        label: "Video Editing",
        description: "Professional content for brands and creators.",
        href: "/services/video-editing",
        icon: Video,
      },
      {
        label: "Graphic Design",
        description: "Consistent visual communication for your brand.",
        href: "/services/graphic-design",
        icon: Palette,
      },
    ],
  },
];

const navigationLinks = [
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Resources", href: "/resources" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={clsx(
          "fixed left-1/2 top-5 z-[100] -translate-x-1/2 transition-all duration-500",
          scrolled
            ? "w-[92%] max-w-7xl"
            : "w-[96%] max-w-[1400px]"
        )}
      >
        <div
          className={clsx(
            "flex items-center justify-between rounded-full border backdrop-blur-2xl transition-all duration-500",
            scrolled
              ? "border-slate-200/80 bg-white/90 px-5 py-3 shadow-[0_20px_70px_rgba(15,23,42,0.16)]"
              : "border-white/70 bg-white/75 px-6 py-4 shadow-[0_10px_40px_rgba(15,23,42,0.08)] lg:px-8"
          )}
        >
          <a
            href="/"
            className="bg-gradient-to-r from-slate-950 via-blue-700 to-blue-500 bg-clip-text text-lg font-bold tracking-[-0.04em] text-transparent"
          >
            ANVIROCX
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((value) => !value)}
                className="group flex items-center gap-1.5 py-3 text-sm font-medium text-slate-500 transition hover:text-slate-950"
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown
                  size={15}
                  className={clsx(
                    "transition-transform duration-200",
                    servicesOpen && "rotate-180"
                  )}
                />
              </button>

              <div
                className={clsx(
                  "absolute left-1/2 top-full w-[860px] -translate-x-1/2 pt-4 transition-all duration-200",
                  servicesOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                )}
              >
                <div className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-3 shadow-[0_30px_100px_rgba(15,23,42,0.2)]">
                  <div className="grid grid-cols-[1fr_1.25fr_260px] gap-2">
                    {serviceGroups.map((group) => (
                      <div
                        key={group.title}
                        className="rounded-[22px] bg-slate-50 p-5"
                      >
                        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
                          {group.title}
                        </p>

                        <p className="mt-2 text-xs leading-5 text-slate-500">
                          {group.description}
                        </p>

                        <div className="mt-4 space-y-1">
                          {group.services.map((service) => {
                            const Icon = service.icon;

                            return (
                              <a
                                key={service.label}
                                href={service.href}
                                className="group/item flex gap-3 rounded-2xl p-3 transition hover:bg-white hover:shadow-sm"
                              >
                                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-blue-600">
                                  <Icon size={17} />
                                </span>

                                <span>
                                  <span className="flex items-center gap-1 text-sm font-semibold text-slate-900">
                                    {service.label}
                                    <ArrowUpRight
                                      size={13}
                                      className="opacity-0 transition group-hover/item:opacity-100"
                                    />
                                  </span>

                                  <span className="mt-1 block text-[11px] leading-4 text-slate-500">
                                    {service.description}
                                  </span>
                                </span>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    ))}

                    <div className="flex flex-col rounded-[22px] bg-slate-950 p-6 text-white">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-500/20 text-blue-300">
                        <Users size={20} />
                      </span>

                      <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.14em] text-blue-300">
                        Managed Teams
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.04em]">
                        Build a flexible remote team around your business.
                      </h3>

                      <p className="mt-3 text-xs leading-5 text-white/55">
                        Combine multiple capabilities into one managed delivery
                        solution.
                      </p>

                      <a
                        href="/services/managed-remote-teams"
                        className="mt-auto flex items-center justify-between rounded-xl bg-white px-4 py-3 text-xs font-bold text-slate-950"
                      >
                        Explore managed teams
                        <ArrowRight size={15} />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-4 pb-2 pt-4">
                    <p className="text-xs text-slate-500">
                      Need help selecting the right solution?
                    </p>

                    <a
                      href="/services"
                      className="flex items-center gap-2 text-xs font-bold text-blue-600"
                    >
                      View all services
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {navigationLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative py-3 text-sm font-medium text-slate-500 transition hover:text-slate-950"
              >
                {item.label}

                <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/contact"
              className="hidden items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 sm:flex"
            >
              Start Project
              <ArrowUpRight size={16} />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-950 lg:hidden"
              aria-label="Open navigation menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={clsx(
          "fixed inset-0 z-[150] bg-slate-950 transition-all duration-300 lg:hidden",
          mobileOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        )}
      >
        <div className="flex h-full flex-col overflow-y-auto px-5 py-5 text-white">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="text-lg font-bold tracking-[-0.04em]"
              onClick={() => setMobileOpen(false)}
            >
              ANVIROCX
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15"
              aria-label="Close navigation menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="mt-12">
            <button
              type="button"
              onClick={() =>
                setMobileServicesOpen((currentValue) => !currentValue)
              }
              className="flex w-full items-center justify-between border-b border-white/10 py-5 text-left text-2xl font-medium"
            >
              Services
              <ChevronDown
                size={20}
                className={clsx(
                  "transition-transform",
                  mobileServicesOpen && "rotate-180"
                )}
              />
            </button>

            {mobileServicesOpen && (
              <div className="border-b border-white/10 py-4">
                {serviceGroups.flatMap((group) => group.services).map((service) => {
                  const Icon = service.icon;

                  return (
                    <a
                      key={service.label}
                      href={service.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-2 py-3 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
                    >
                      <Icon size={17} className="text-blue-400" />
                      {service.label}
                    </a>
                  );
                })}

                <a
                  href="/services/managed-remote-teams"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-2 py-3 text-sm text-white/70"
                >
                  <Users size={17} className="text-blue-400" />
                  Managed Remote Teams
                </a>
              </div>
            )}

            {navigationLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between border-b border-white/10 py-5 text-2xl font-medium"
              >
                {item.label}
                <ArrowUpRight size={19} className="text-white/35" />
              </a>
            ))}

            <a
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between border-b border-white/10 py-5 text-2xl font-medium"
            >
              Contact
              <ArrowUpRight size={19} className="text-white/35" />
            </a>
          </nav>

          <div className="mt-auto pt-10">
            <a
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between rounded-2xl bg-blue-600 px-5 py-5 text-sm font-bold"
            >
              Start your project
              <ArrowRight size={18} />
            </a>

            <p className="mt-5 text-xs leading-5 text-white/40">
              Customer support, digital solutions, automation and managed
              remote teams.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
