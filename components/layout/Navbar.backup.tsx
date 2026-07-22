"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-5 left-1/2 z-[100] -translate-x-1/2 transition-all duration-500",
        scrolled ? "w-[92%] max-w-7xl" : "w-[96%] max-w-[1400px]"
      )}
    >
      <div
        className={clsx(
          "flex items-center justify-between rounded-full border backdrop-blur-2xl transition-all duration-500",
          scrolled
            ? "border-slate-200/80 bg-white/80 shadow-[0_20px_70px_rgba(0,0,0,.45)] px-6 py-3"
            : "border-slate-200/70 bg-white/70 px-8 py-4"
        )}
      >
        <a
          href="/contact"
          className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-lg font-semibold tracking-[-0.04em] text-transparent"
        >
          <span>ANVIROCX</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative text-sm font-medium text-slate-500 transition hover:text-[#07111f]"
            >
              {item.label}

              <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-blue-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a href="/contact" className="nav-cta">
          Start Project
          <ArrowUpRight size={16} />
        </a>
      </div>
    </header>
  );
}
