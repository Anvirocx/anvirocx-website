const services = [
  "Customer Support",
  "Virtual Assistants",
  "Website Development",
  "Shopify",
  "Video Editing",
  "AI Automation",
];

const businessHighlights = [
  {
    title: "Customer Operations",
    value: "24/7",
  },
  {
    title: "Remote Specialists",
    value: "Flexible",
  },
  {
    title: "Digital Services",
    value: "End-to-end",
  },
  {
    title: "Business Support",
    value: "Managed",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070a] text-white">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#05070a]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="#home"
            className="text-lg font-semibold tracking-[0.22em] text-white sm:text-xl"
          >
            ANVIROCX
          </a>

          <div className="hidden items-center gap-8 text-sm text-white/65 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>

            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#process" className="transition hover:text-white">
              Process
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-black transition hover:bg-white/90 sm:px-5 sm:text-sm"
          >
            Book Consultation
          </a>
        </div>
      </nav>

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 lg:px-8"
      >
        <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[150px]" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-purple-600/15 blur-[150px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/70 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Premium Business Solutions for Modern Companies
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Build, operate and scale with one reliable team.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              ANVIROCX helps growing companies manage customer operations,
              digital services and remote teams through flexible, efficient and
              professionally managed solutions.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-white/90"
              >
                Start a Conversation
              </a>

              <a
                href="#services"
                className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {services.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/55"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 blur-3xl" />

            <div className="relative rounded-[32px] border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-xl sm:p-5">
              <div className="rounded-[24px] border border-white/10 bg-[#0b0f16] p-5 sm:p-6">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-white/40">ANVIROCX Network</p>
                    <h2 className="mt-1 text-xl font-medium">
                      Managed Business Operations
                    </h2>
                  </div>

                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    Active
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {businessHighlights.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                    >
                      <p className="text-sm text-white/40">{item.title}</p>
                      <p className="mt-3 text-2xl font-semibold">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-sm text-white/40">
                        Built for ambitious teams
                      </p>

                      <p className="mt-2 max-w-sm text-sm leading-6 text-white/65">
                        One agency for operations, creative work, development
                        and remote team management.
                      </p>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-xl text-black">
                      ↗
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
