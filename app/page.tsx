import Link from "next/link";
import { ArrowRight, CheckCircle2, Headphones, Mail, MessageSquare, ShieldCheck, Sparkles, TicketCheck } from "lucide-react";

const services = [
  { title: "Email Support", description: "Thoughtful, on-brand replies to customer questions, order updates, and everyday requests.", Icon: Mail },
  { title: "Live Chat", description: "Helpful real-time conversations that make shopping and post-purchase support easier.", Icon: MessageSquare },
  { title: "Ticket Management", description: "Organized support queues, clear priorities, and consistent follow-through.", Icon: TicketCheck },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-black tracking-tight text-slate-950">ANVIROCX<span className="text-blue-600">.</span></Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#why-us" className="hover:text-blue-700">Why ANVIROCX</a>
            <a href="#process" className="hover:text-blue-700">How it works</a>
          </nav>
          <Link href="/contact" className="rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800">Let's Talk</Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center lg:py-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800"><Sparkles size={16}/> Customer support for growing businesses</div>
            <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.09] tracking-tight text-slate-950 md:text-6xl">Exceptional customer support. <span className="text-blue-700">Without the overhead.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">Founder-led email, live chat, and ticket support for e-commerce brands that want every customer conversation handled with care.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-7 py-4 font-semibold text-white hover:bg-blue-800">Discuss Your Support Needs <ArrowRight size={18}/></Link>
              <a href="#services" className="inline-flex items-center rounded-xl border border-slate-300 px-7 py-4 font-semibold text-slate-800 hover:bg-white">Explore Services</a>
            </div>
            <div className="mt-9 flex flex-wrap gap-5 text-sm text-slate-600"><span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-blue-700"/> Founder-led</span><span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-blue-700"/> Flexible scope</span><span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-blue-700"/> Human-first</span></div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-blue-950/10 md:p-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-5"><div className="flex items-center gap-3"><div className="rounded-xl bg-blue-100 p-3 text-blue-700"><Headphones size={23}/></div><div><p className="font-bold">Support workspace</p><p className="text-xs text-slate-500">Illustrative workflow</p></div></div><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Customer-first</span></div>
            <div className="space-y-4 pt-6">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5"><div className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-800"><Mail size={17} className="text-blue-700"/> Email inquiry</div><p className="text-sm text-slate-600">“Could you help me with my order status?”</p><div className="mt-4 rounded-xl bg-white p-4 text-sm leading-6 text-slate-700">Absolutely — happy to help. Let me check the details and share an update.</div></div>
              <div className="flex items-center gap-4 rounded-2xl border border-slate-100 p-5"><MessageSquare className="text-blue-700"/><div><p className="font-semibold">Live chat conversations</p><p className="text-sm text-slate-500">Clear, friendly responses</p></div><CheckCircle2 className="ml-auto text-emerald-600"/></div>
              <div className="flex items-center gap-4 rounded-2xl border border-slate-100 p-5"><TicketCheck className="text-blue-700"/><div><p className="font-semibold">Organized ticket queue</p><p className="text-sm text-slate-500">Follow-ups stay on track</p></div><CheckCircle2 className="ml-auto text-emerald-600"/></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24"><p className="text-sm font-bold uppercase tracking-widest text-blue-700">What we do</p><h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">Customer conversations, handled with care.</h2><p className="mt-5 max-w-2xl text-lg text-slate-600">Practical support services designed around the channels your customers already use.</p><div className="mt-12 grid gap-6 md:grid-cols-3">{services.map(({title,description,Icon})=><div key={title} className="rounded-3xl border border-slate-200 p-8 shadow-sm"><div className="mb-7 inline-flex rounded-2xl bg-blue-50 p-4 text-blue-700"><Icon size={27}/></div><h3 className="text-2xl font-bold">{title}</h3><p className="mt-4 leading-7 text-slate-600">{description}</p></div>)}</div></section>

      <section id="why-us" className="bg-slate-950 py-24 text-white"><div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center"><div><p className="text-sm font-bold uppercase tracking-widest text-blue-300">Why ANVIROCX</p><h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">A support partner who treats your brand like it matters.</h2><p className="mt-6 text-lg leading-8 text-slate-300">ANVIROCX is founder-led. That means direct communication, a focused approach, and support processes shaped around your business rather than a one-size-fits-all script.</p></div><div className="space-y-5">{[["Direct communication","Work directly with the person responsible for your support."],["Brand-aligned responses","Set the tone, policies, and escalation rules that fit your store."],["Start with a pilot","Explore a defined initial scope before considering ongoing support."]].map(([title,desc])=><div key={title} className="flex gap-4 rounded-2xl border border-white/15 bg-white/5 p-6"><ShieldCheck className="shrink-0 text-blue-300"/><div><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 text-slate-300">{desc}</p></div></div>)}</div></div></section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-24"><p className="text-sm font-bold uppercase tracking-widest text-blue-700">Simple onboarding</p><h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">A straightforward way to get started.</h2><div className="mt-12 grid gap-8 md:grid-cols-3">{[["01","Tell us about your store","Share your channels, typical questions, and current support challenges."],["02","Define the workflow","Agree on coverage, response guidelines, escalation paths, and scope."],["03","Start small and refine","Begin with an agreed pilot and improve the process based on feedback."]].map(([n,t,d])=><div key={n} className="border-t-2 border-blue-700 pt-6"><p className="text-3xl font-extrabold text-blue-700">{n}</p><h3 className="mt-5 text-xl font-bold">{t}</h3><p className="mt-3 leading-7 text-slate-600">{d}</p></div>)}</div></section>

      <section className="bg-blue-700 px-6 py-20 text-center text-white"><h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">Ready to make customer support feel effortless?</h2><p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">Tell us what your customers need. We'll discuss a practical support setup for your business.</p><Link href="/contact" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-blue-800 hover:bg-blue-50">Get in Touch <ArrowRight size={18}/></Link></section>
      <footer className="border-t border-slate-200 px-6 py-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-slate-500 md:flex-row"><p><span className="font-black text-slate-950">ANVIROCX.</span> Customer support, thoughtfully delivered.</p><div className="flex flex-wrap gap-6"><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/contact">Contact</Link><Link href="/faq">FAQ</Link></div></div></footer>
    </main>
  );
}
