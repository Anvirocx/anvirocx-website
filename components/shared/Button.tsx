import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  if (variant === "primary") {
    return (
      <a
        href={href}
        className={`primary-cta group inline-flex items-center justify-center rounded-full bg-black px-7 py-4 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2563EB] hover:shadow-[0_20px_50px_rgba(37,99,235,0.28)] ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-7 py-4 text-[14px] font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-lg ${className}`}
    >
      {children}
    </a>
  );
}
