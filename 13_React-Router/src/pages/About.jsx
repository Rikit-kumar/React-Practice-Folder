import React from "react";
import {
  Sparkles,
  Target,
  Eye,
  Heart,
  ArrowUpRight,
  Check,
  Layers3,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Purpose First",
      description:
        "Every part of the experience has a reason. We focus on building useful features instead of unnecessary complexity.",
    },
    {
      icon: Eye,
      title: "Simple by Design",
      description:
        "Powerful doesn't have to mean complicated. We believe great products should feel natural from the first interaction.",
    },
    {
      icon: Heart,
      title: "Built for People",
      description:
        "Technology should make things easier. Everything we create starts with the people who will actually use it.",
    },
  ];

  const journey = [
    {
      year: "01",
      title: "The Beginning",
      description:
        "The idea started with a simple goal — create a digital experience that feels effortless and enjoyable.",
    },
    {
      year: "02",
      title: "Building the Experience",
      description:
        "We focused on combining thoughtful design, useful functionality and a consistent experience.",
    },
    {
      year: "03",
      title: "Growing Forward",
      description:
        "The platform continues to evolve with new ideas, better experiences and a focus on what's next.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] pt-[76px] text-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[130px]" />

        <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-blue-500/[0.07] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/[0.07] px-4 py-2 text-sm text-indigo-300">
                <Sparkles size={15} />
                About Nexora
              </div>

              <h1 className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
                We're building
                <span className="block bg-gradient-to-r from-indigo-300 via-blue-300 to-slate-200 bg-clip-text text-transparent">
                  something meaningful.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
                Nexora is built around a simple idea: technology should feel
                powerful without feeling complicated. We're creating an
                experience where discovery, exploration and useful information
                come together.
              </p>

              <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#11151d] transition hover:bg-slate-200">
                Explore the platform
                <ArrowUpRight size={16} />
              </button>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative mx-auto max-w-md rounded-3xl border border-white/[0.07] bg-[#151b24] p-6 shadow-2xl shadow-black/30">
                {/* Top */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300">
                      <Layers3 size={20} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold">Nexora</p>

                      <p className="mt-1 text-xs text-slate-600">
                        Experience more
                      </p>
                    </div>
                  </div>

                  <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/30" />
                </div>

                {/* Center */}
                <div className="mt-8 rounded-2xl border border-white/[0.06] bg-[#101720] p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-600">
                    Our philosophy
                  </p>

                  <p className="mt-4 text-xl font-semibold leading-8">
                    "Make powerful things feel simple."
                  </p>

                  <div className="mt-6 h-px bg-white/[0.06]" />

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-slate-600">
                      Built with purpose
                    </span>

                    <span className="text-xs text-indigo-300">2026</span>
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-white/[0.06] bg-[#101720] p-4 text-center">
                    <p className="text-lg font-bold">120+</p>
                    <p className="mt-1 text-[10px] text-slate-600">
                      Discoveries
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.06] bg-[#101720] p-4 text-center">
                    <p className="text-lg font-bold">4.9</p>
                    <p className="mt-1 text-[10px] text-slate-600">Rating</p>
                  </div>

                  <div className="rounded-xl border border-white/[0.06] bg-[#101720] p-4 text-center">
                    <p className="text-lg font-bold text-indigo-300">∞</p>
                    <p className="mt-1 text-[10px] text-slate-600">
                      Possibilities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Heading */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-400">
              Our story
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Started with a simple question.
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-base leading-8 text-slate-400">
              How can we create a digital platform that gives people more
              possibilities without overwhelming them?
            </p>

            <p className="text-base leading-8 text-slate-500">
              That question became the foundation of Nexora. Instead of filling
              the experience with endless features, we focused on creating
              something intentional — an interface where everything feels
              connected and easy to understand.
            </p>

            <p className="text-base leading-8 text-slate-500">
              Today, we're continuing to improve that idea, exploring new
              possibilities and building an experience that grows alongside the
              people who use it.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="border-y border-white/[0.06] bg-[#10151d]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-400">
              What we believe
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Principles behind the experience.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              These ideas guide how we think about design, technology and the
              experience we're building.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-white/[0.07] bg-[#151b24] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/20"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-7 text-lg font-semibold group-hover:text-indigo-300">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= JOURNEY ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-600">
            The journey
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            From an idea to an experience.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {journey.map((item) => (
            <div
              key={item.year}
              className="relative rounded-2xl border border-white/[0.07] bg-[#151b24] p-7"
            >
              <span className="text-5xl font-bold text-white/[0.05]">
                {item.year}
              </span>

              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {item.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs text-indigo-300">
                <Check size={14} />
                Part of our story
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 pb-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-indigo-400/10 bg-gradient-to-br from-[#1a2230] to-[#121720] px-6 py-16 text-center sm:px-12">
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[100px]" />

          <div className="relative">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-400/10 text-indigo-300">
              <Sparkles size={20} />
            </div>

            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold sm:text-4xl">
              Your next discovery is waiting.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500">
              Explore Nexora and discover a different way to experience the
              digital world.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#11151d] transition hover:bg-slate-200">
              Start Exploring
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
