"use client";

const services = [
  "Live Chat Support",
  "Email Support",
  "Voice Support",
  "Help Desk Support",
  "Virtual Assistant",
  "Back Office Support",
];

const platforms = ["Zendesk", "Freshdesk", "Intercom", "HubSpot", "Salesforce", "Zoho Desk", "Slack", "Microsoft Teams", "Shopify", "Gorgias"];

const industries = ["SaaS", "E-commerce", "Healthcare", "Finance", "Real Estate", "Travel", "Education", "Logistics"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-black tracking-widest">ANVIRO<span className="text-blue-500">CX</span></div>
          <div className="hidden gap-8 text-sm text-gray-300 md:flex">
            <a href="#services">Services</a><a href="#platforms">Platforms</a><a href="#industries">Industries</a><a href="#contact">Contact</a>
          </div>
          <a href="#contact" className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold hover:bg-blue-500">Request Consultation</a>
        </div>
      </nav>

      <section className="relative overflow-hidden px-6 pt-40 pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb66,transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-6 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">Trusted Customer Experience Partner</p>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">Customer Support That Scales With Your Business</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">ANVIROCX empowers businesses with exceptional customer support through live chat, email, and voice solutions — helping you deliver faster responses, happier customers, and seamless experiences 24/7.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-full bg-blue-600 px-7 py-3 font-semibold hover:bg-blue-500">Request a Consultation</a>
              <a href="#services" className="rounded-full border border-white/15 px-7 py-3 font-semibold hover:bg-white/10">Explore Services</a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <div className="grid grid-cols-2 gap-4">
              {["Chat", "Email", "Voice", "Help Desk"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-[#0f172a] p-6">
                  <div className="mb-5 h-11 w-11 rounded-full bg-blue-600/25" />
                  <h3 className="text-lg font-bold">{item} Support</h3>
                  <p className="mt-2 text-sm text-gray-400">Reliable support for modern businesses.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#07111f] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">Our Services</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <div key={service} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <h3 className="text-xl font-bold">{service}</h3>
                <p className="mt-3 text-gray-400">Professional, reliable, and scalable support delivered with a customer-first approach.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="platforms" className="px-6 py-24 text-center">
        <h2 className="text-4xl font-black">Platforms We Support</h2>
        <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-4">
          {platforms.map((tool) => <span key={tool} className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-gray-300">{tool}</span>)}
        </div>
      </section>

      <section id="industries" className="bg-[#07111f] px-6 py-24 text-center">
        <h2 className="text-4xl font-black">Industries We Serve</h2>
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-5 md:grid-cols-4">
          {industries.map((industry) => <div key={industry} className="rounded-2xl border border-white/10 bg-white/5 p-6">{industry}</div>)}
        </div>
      </section>
<section className="bg-[#07111f] px-6 py-24">
  <div className="mx-auto max-w-7xl">
    <h2 className="text-center text-4xl font-black">Why Choose ANVIROCX</h2>
    <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
      Built for businesses that need dependable, flexible, and human-first support.
    </p>

    <div className="mt-12 grid gap-5 md:grid-cols-3">
      {[
        "24/7 Availability",
        "Dedicated Support Teams",
        "Fast Onboarding",
        "Flexible Scaling",
        "Secure Process",
        "Customer-First Approach",
      ].map((item) => (
        <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-7">
          <h3 className="text-xl font-bold">{item}</h3>
          <p className="mt-3 text-gray-400">
            Professional support designed to help your business serve customers better.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="px-6 py-24">
  <div className="mx-auto max-w-7xl">
    <h2 className="text-center text-4xl font-black">How We Work</h2>

    <div className="mt-12 grid gap-5 md:grid-cols-5">
      {[
        "Submit Request",
        "Discovery Call",
        "Custom Plan",
        "Team Onboarding",
        "Go Live",
      ].map((step, i) => (
        <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-blue-400">Step {i + 1}</p>
          <h3 className="mt-3 font-bold">{step}</h3>
        </div>
      ))}
    </div>
  </div>
</section>
      <section id="contact" className="px-6 py-28 text-center">
  <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12">
    <h2 className="text-4xl font-black md:text-5xl">
      Let’s Discuss Your Support Needs
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-gray-400">
      Share your requirements with ANVIROCX. Our team will review your request and get back to you.
    </p>

    <form
  action="https://formspree.io/f/mkolepen"
method="POST"
  className="mt-10 grid gap-4 text-left"
    >
      <input
  className="..."
  placeholder="Full Name"
  name="name"
      />

      <input
        className="rounded-2xl border border-white/10 bg-[#020617] px-5 py-4 text-white outline-none placeholder:text-gray-500"
        placeholder="Company Name"
        name="company"
      />

      <input
        className="rounded-2xl border border-white/10 bg-[#020617] px-5 py-4 text-white outline-none placeholder:text-gray-500"
        placeholder="Business Email"
        name="email"
        type="email"
      />
      <select
  className="rounded-2xl border border-white/10 bg-[#020617] px-5 py-4 text-gray-400 outline-none"
  name="service"
>
  <option>Service Required</option>
  <option>Live Chat Support</option>
  <option>Email Support</option>
  <option>Voice Support</option>
  <option>Virtual Assistant</option>
  <option>Back Office Support</option>
</select>
      <textarea
        className="min-h-36 rounded-2xl border border-white/10 bg-[#020617] px-5 py-4 text-white outline-none placeholder:text-gray-500"
        placeholder="Tell us about your requirements"
        name="message"
      />
<button type="submit" className="rounded-full bg-blue-600 px-8 py-4 ...">        Submit Request
      </button>
    </form>

    <p className="mt-8 text-gray-400">
      Or email us at{" "}
      <a href="mailto:hello@anvirocx.com" className="text-blue-400">
        hello@anvirocx.com
      </a>
    </p>
  </div>
</section>

      <footer className="border-t border-white/10 bg-[#020617] px-6 py-10">
  <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
    <div>
      <div className="text-2xl font-black tracking-widest text-white">
        ANVIRO<span className="text-blue-500">CX</span>
      </div>
      <p className="mt-2">Empowering Businesses with Exceptional Customer Support.</p>
    </div>

    <div className="flex flex-wrap gap-5">
      <a href="#services" className="hover:text-white">Services</a>
      <a href="#industries" className="hover:text-white">Industries</a>
      <a href="#contact" className="hover:text-white">Contact</a>
      <a href="https://instagram.com/" target="_blank" className="hover:text-white">Instagram</a>
    </div>

          <p>© 2026 ANVIROCX. All Rights Reserved.</p>
    </div>
  </footer>
</main>
);
}