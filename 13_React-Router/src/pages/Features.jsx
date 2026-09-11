import React from "react";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Search,
  Layers3,
  BarChart3,
  UserRound,
  ArrowUpRight,
  Check,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Discovery",
      description:
        "Find what you're looking for quickly with a clean and intuitive discovery experience.",
      color: "indigo",
    },
    {
      icon: Zap,
      title: "Fast Experience",
      description:
        "Move through the platform quickly with a responsive interface built around simplicity.",
      color: "blue",
    },
    {
      icon: Layers3,
      title: "Organized Content",
      description:
        "Everything is structured into meaningful sections so you can stay focused.",
      color: "violet",
    },
    {
      icon: ShieldCheck,
      title: "Secure Platform",
      description:
        "Your experience is designed with reliability and security at its core.",
      color: "emerald",
    },
    {
      icon: BarChart3,
      title: "Useful Insights",
      description:
        "Understand what's trending and discover patterns through useful information.",
      color: "orange",
    },
    {
      icon: UserRound,
      title: "Personal Experience",
      description:
        "A personalized environment that makes the things you care about easier to find.",
      color: "cyan",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] pt-[76px] text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">

        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/3 top-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-24">

          {/* Badge */}
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/[0.07] px-4 py-2 text-sm text-indigo-300">
            <Sparkles size={15} />
            Powerful features
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
            Everything you need.
            <span className="block bg-gradient-to-r from-indigo-300 via-blue-300 to-slate-200 bg-clip-text text-transparent">
              Nothing you don't.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            Powerful tools wrapped inside a simple experience.
            Explore the features designed to make your journey
            faster, smarter and more enjoyable.
          </p>

        </div>
      </section>


      {/* ================= FEATURE HIGHLIGHT ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="overflow-hidden rounded-3xl border border-white/[0.07] bg-[#151b24]">

          <div className="grid lg:grid-cols-2">

            {/* Content */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-400/10 text-indigo-300">
                <Sparkles size={22} />
              </div>

              <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-indigo-400">
                Featured capability
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Designed around the way you explore.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Every part of the experience is carefully designed
                to help you discover, explore and interact without
                unnecessary complexity.
              </p>

              <div className="mt-7 space-y-3">

                {[
                  "Clean and intuitive interface",
                  "Fast navigation between experiences",
                  "Personalized discovery",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-400/10 text-indigo-300">
                      <Check size={12} />
                    </span>

                    {item}
                  </div>
                ))}

              </div>

            </div>


            {/* Visual */}
            <div className="relative min-h-[400px] overflow-hidden bg-gradient-to-br from-[#202a3a] via-[#171e29] to-[#10151d]">

              {/* Decorative Glow */}
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[80px]" />

              {/* Main UI Card */}
              <div className="absolute left-1/2 top-1/2 w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/[0.08] bg-[#151b24]/90 p-5 shadow-2xl backdrop-blur-xl">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300">
                      <Sparkles size={16} />
                    </div>

                    <div>
                      <div className="h-2 w-24 rounded-full bg-white/10" />
                      <div className="mt-2 h-1.5 w-16 rounded-full bg-white/5" />
                    </div>

                  </div>

                  <div className="h-7 w-7 rounded-lg bg-white/5" />

                </div>


                <div className="mt-6 grid grid-cols-3 gap-3">

                  <div className="h-24 rounded-xl border border-white/[0.06] bg-[#101720]" />
                  <div className="h-24 rounded-xl border border-indigo-400/10 bg-indigo-400/[0.04]" />
                  <div className="h-24 rounded-xl border border-white/[0.06] bg-[#101720]" />

                </div>


                <div className="mt-3 h-20 rounded-xl border border-white/[0.06] bg-[#101720]" />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURE GRID ================= */}
      <section className="border-y border-white/[0.06] bg-[#10151d]">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          {/* Header */}
          <div className="mb-12 max-w-2xl">

            <p className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-400">
              Built with purpose
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Powerful by design.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Every feature has a purpose — giving you useful
              functionality without making the experience feel
              complicated.
            </p>

          </div>


          {/* Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-white/[0.07] bg-[#151b24] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/20 hover:bg-[#181f2a]"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300 transition-all duration-300 group-hover:bg-indigo-400/15">
                      <Icon size={20} />
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-slate-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-300"
                    />

                  </div>

                  <h3 className="mt-7 text-lg font-semibold transition-colors group-hover:text-indigo-300">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="grid overflow-hidden rounded-3xl border border-white/[0.07] bg-[#151b24] sm:grid-cols-2 lg:grid-cols-4">

          <div className="border-b border-white/[0.06] p-8 sm:border-r lg:border-b-0">
            <p className="text-3xl font-bold">99.9%</p>
            <p className="mt-2 text-sm text-slate-500">
              Platform reliability
            </p>
          </div>

          <div className="border-b border-white/[0.06] p-8 lg:border-b-0 lg:border-r">
            <p className="text-3xl font-bold">120+</p>
            <p className="mt-2 text-sm text-slate-500">
              Experiences available
            </p>
          </div>

          <div className="border-b border-white/[0.06] p-8 sm:border-r sm:border-b-0">
            <p className="text-3xl font-bold">24/7</p>
            <p className="mt-2 text-sm text-slate-500">
              Always available
            </p>
          </div>

          <div className="p-8">
            <p className="text-3xl font-bold text-indigo-300">
              4.9/5
            </p>
            <p className="mt-2 text-sm text-slate-500">
              User satisfaction
            </p>
          </div>

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
              Built to make things simpler.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500">
              Explore the platform and experience everything
              these features have to offer.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#11151d] transition hover:bg-slate-200">
              Explore Now
              <ArrowUpRight size={16} />
            </button>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Features;