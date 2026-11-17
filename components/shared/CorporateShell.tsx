import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function SiteHeader() {
  return <header className="border-b border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5"><Link href="/" className="text-2xl font-black tracking-tight text-slate-950">ANVIROCX<span className="text-blue-600">.</span></Link><nav aria-label="Main navigation" className="hidden gap-6 text-sm font-semibold text-slate-600 md:flex"><Link href="/services" className="hover:text-blue-700">Services</Link><Link href="/about" className="hover:text-blue-700">About</Link><Link href="/faq" className="hover:text-blue-700">FAQ</Link></nav><Link href="/contact" className="rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800">Let's Talk</Link></div></header>;
}
export function SiteFooter() {
  return <footer className="border-t border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-10 text-sm text-slate-500 md:flex-row"><p><span className="font-black text-slate-950">ANVIROCX.</span> Founder-led customer support.</p><nav className="flex flex-wrap gap-6"><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/faq">FAQ</Link><Link href="/contact">Contact</Link></nav></div></footer>;
}
export function PageHero({eyebrow,title,description}:{eyebrow:string;title:string;description:string}) {
  return <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50"><div className="mx-auto max-w-7xl px-6 py-20 md:py-28"><p className="text-sm font-bold uppercase tracking-widest text-blue-700">{eyebrow}</p><h1 className="mt-5 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{description}</p></div></section>;
}
export function Section({children,className=""}:{children:ReactNode;className?:string}) {
  return <section className={className}><div className="mx-auto max-w-7xl px-6 py-20">{children}</div></section>;
}
export function ContactCTA() {
  return <section className="bg-slate-950 px-6 py-20 text-center text-white"><h2 className="mx-auto max-w-3xl text-3xl font-bold md:text-4xl">Let's make customer support a strength of your brand.</h2><p className="mx-auto mt-5 max-w-xl text-slate-300">Share your goals and we'll explore a practical starting point.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white hover:bg-blue-500">Start a conversation <ArrowRight size={18}/></Link></section>;
}
