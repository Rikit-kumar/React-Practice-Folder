import React from "react";
import {
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Clock3,
  Star,
  ChevronRight,
} from "lucide-react";

const Discover = () => {
  const trendingItems = [
    {
      number: "01",
      title: "The Future of Digital Experiences",
      category: "Trending",
      description:
        "Explore how modern platforms are changing the way people interact with technology.",
      stat: "+42%",
    },
    {
      number: "02",
      title: "Designing for Simplicity",
      category: "Popular",
      description:
        "Discover why simple interfaces are becoming the foundation of great products.",
      stat: "+36%",
    },
    {
      number: "03",
      title: "Building Better Experiences",
      category: "Featured",
      description:
        "A closer look at the ideas and principles behind memorable digital experiences.",
      stat: "+28%",
    },
  ];

  const recommendations = [
    {
      title: "Minimal Interfaces",
      category: "Design",
      rating: "4.9",
    },
    {
      title: "Creative Thinking",
      category: "Ideas",
      rating: "4.8",
    },
    {
      title: "Next Generation",
      category: "Technology",
      rating: "4.9",
    },
    {
      title: "Better Products",
      category: "Innovation",
      rating: "4.7",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] pt-[76px] text-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px]" />

        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/[0.07] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/[0.07] px-4 py-2 text-sm text-indigo-300">
                <Sparkles size={15} />
                Curated discoveries
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
                Find what
                <span className="block bg-gradient-to-r from-indigo-300 via-blue-300 to-slate-200 bg-clip-text text-transparent">
                  inspires you.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
                Discover ideas, experiences and trends selected to help you find
                something new, interesting and worth your time.
              </p>

              <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-400">
                Start Discovering
                <ArrowUpRight size={17} />
              </button>
            </div>

            {/* Right Visual */}
            <div className="relative hidden lg:block">
              <div className="rounded-3xl border border-white/[0.07] bg-[#151b24] p-6 shadow-2xl shadow-black/30">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-600">Today's discovery</p>

                    <h3 className="mt-1 font-semibold">Trending right now</h3>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300">
                    <TrendingUp size={19} />
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    "Digital Innovation",
                    "Modern Design",
                    "Creative Ideas",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#111720] p-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-600">
                          0{index + 1}
                        </span>

                        <span className="text-sm text-slate-300">{item}</span>
                      </div>

                      <ChevronRight size={15} className="text-slate-600" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRENDING ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-400">
              What's happening
            </p>

            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Trending discoveries
            </h2>
          </div>

          <button className="hidden items-center gap-2 text-sm text-slate-500 transition hover:text-indigo-300 sm:flex">
            See everything
            <ArrowUpRight size={15} />
          </button>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {trendingItems.map((item) => (
            <article
              key={item.number}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#151b24] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/20 hover:shadow-xl hover:shadow-black/20"
            >
              {/* Visual */}
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-[#202a3a] via-[#171e29] to-[#10151d]">
                <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-indigo-400/10 transition-transform duration-700 group-hover:scale-125" />

                <div className="absolute -bottom-20 -left-12 h-48 w-48 rounded-full border border-white/[0.04]" />

                <span className="absolute left-6 top-6 text-7xl font-bold text-white/[0.04]">
                  {item.number}
                </span>

                <div className="absolute bottom-5 left-6 flex items-center gap-2 rounded-full border border-white/[0.08] bg-black/20 px-3 py-1.5 text-xs text-slate-400 backdrop-blur-md">
                  <TrendingUp size={13} />
                  {item.category}
                </div>

                <div className="absolute bottom-5 right-6 text-sm font-semibold text-indigo-300">
                  {item.stat}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-indigo-300">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                <button className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white">
                  Discover more
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= RECOMMENDED ================= */}
      <section className="border-y border-white/[0.06] bg-[#10151d]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-600">
              Hand picked
            </p>

            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Recommended for you
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {recommendations.map((item) => (
              <div
                key={item.title}
                className="group cursor-pointer rounded-2xl border border-white/[0.07] bg-[#151b24] p-5 transition-all duration-300 hover:border-indigo-400/20 hover:bg-[#181f2a]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300">
                    <Sparkles size={17} />
                  </div>

                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Star
                      size={13}
                      className="fill-indigo-400 text-indigo-400"
                    />
                    {item.rating}
                  </div>
                </div>

                <h3 className="mt-6 font-semibold transition-colors group-hover:text-indigo-300">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs text-slate-600">{item.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LATEST ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-indigo-400">
              <Clock3 size={16} />

              <span className="text-sm font-medium">Freshly added</span>
            </div>

            <h2 className="mt-3 text-3xl font-bold">
              There's always something new.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Keep coming back to discover new ideas, experiences and trends as
              they appear.
            </p>
          </div>

          <button className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/[0.08] bg-[#151b24] px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-indigo-400/20 hover:text-white">
            Explore latest
            <ArrowUpRight size={16} />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Discover;
