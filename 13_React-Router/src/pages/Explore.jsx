import React from "react";
import {
  Search,
  SlidersHorizontal,
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const Explore = () => {
  const categories = [
    "All",
    "Popular",
    "Trending",
    "Latest",
    "Featured",
  ];

  const exploreItems = [
    {
      title: "Modern Workspace",
      category: "Featured",
      description:
        "A clean and focused environment designed for productivity.",
      number: "01",
    },
    {
      title: "Creative Studio",
      category: "Popular",
      description:
        "Explore ideas, tools and experiences built for creators.",
      number: "02",
    },
    {
      title: "Digital Experience",
      category: "Trending",
      description:
        "Discover new ways to interact with modern technology.",
      number: "03",
    },
    {
      title: "Future Interface",
      category: "Latest",
      description:
        "A fresh approach to simple and intelligent interfaces.",
      number: "04",
    },
    {
      title: "Smart Platform",
      category: "Popular",
      description:
        "Everything you need in one beautifully organized place.",
      number: "05",
    },
    {
      title: "Next Generation",
      category: "Trending",
      description:
        "Discover what's next with a completely modern experience.",
      number: "06",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] pt-[76px] text-white">

      {/* ================= HEADER ================= */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">

        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">

          {/* Small Label */}
          <div className="mb-5 flex items-center gap-2 text-sm font-medium text-indigo-400">
            <Sparkles size={16} />
            Explore
          </div>

          {/* Heading */}
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
                Discover something
                <span className="block bg-gradient-to-r from-indigo-300 to-slate-300 bg-clip-text text-transparent">
                  worth exploring.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">
                Browse through carefully selected experiences,
                ideas and discoveries. Find something that catches
                your attention.
              </p>
            </div>

            {/* Result Count */}
            <div className="hidden rounded-2xl border border-white/[0.07] bg-[#151b24] px-5 py-4 lg:block">
              <p className="text-xs text-slate-500">
                Available
              </p>

              <p className="mt-1 text-2xl font-bold">
                120+
              </p>

              <p className="text-xs text-slate-600">
                experiences
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= SEARCH & FILTER ================= */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          {/* Search */}
          <div className="flex w-full items-center rounded-xl border border-white/[0.08] bg-[#151b24] px-4 transition-all duration-300 focus-within:border-indigo-400/30 lg:max-w-md">

            <Search
              size={19}
              className="text-slate-500"
            />

            <input
              type="text"
              placeholder="Search experiences..."
              className="w-full bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-slate-600"
            />

          </div>


          {/* Filters */}
          <div className="flex items-center gap-2 overflow-x-auto">

            {categories.map((category, index) => (
              <button
                key={category}
                className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? "bg-indigo-500 text-white"
                    : "border border-white/[0.07] bg-[#151b24] text-slate-400 hover:border-white/[0.12] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}

            <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-[#151b24] text-slate-400 transition hover:text-white">
              <SlidersHorizontal size={17} />
            </button>

          </div>

        </div>

      </section>


      {/* ================= FEATURED ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">

        {/* Section Header */}
        <div className="mb-7 flex items-center justify-between">

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-slate-600">
              Curated for you
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Explore Collection
            </h2>
          </div>

          <button className="hidden items-center gap-2 text-sm text-slate-400 transition hover:text-indigo-300 sm:flex">
            View all
            <ArrowUpRight size={16} />
          </button>

        </div>


        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {exploreItems.map((item) => (
            <div
              key={item.number}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#151b24] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/20 hover:shadow-2xl hover:shadow-black/20"
            >

              {/* Card Visual */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#202a3a] via-[#171e29] to-[#111720]">

                {/* Decorative circles */}
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-indigo-400/10" />

                <div className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full border border-white/[0.04]" />

                <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-indigo-300">
                  <Sparkles size={17} />
                </div>

                <span className="absolute bottom-5 left-6 text-6xl font-bold text-white/[0.04]">
                  {item.number}
                </span>

                <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full border border-white/[0.08] bg-black/20 px-3 py-1.5 text-xs text-slate-400 backdrop-blur-md">
                  <TrendingUp size={13} />
                  {item.category}
                </div>

              </div>


              {/* Card Content */}
              <div className="p-6">

                <div className="flex items-start justify-between gap-4">

                  <div>
                    <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-indigo-300">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-slate-500 transition-all duration-300 group-hover:border-indigo-400/20 group-hover:bg-indigo-400/10 group-hover:text-indigo-300">
                    <ArrowUpRight size={16} />
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* ================= BOTTOM CTA ================= */}
      <section className="border-t border-white/[0.06] bg-[#10151d]">

        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-400/10 text-indigo-300">
            <Sparkles size={20} />
          </div>

          <h2 className="mt-5 text-2xl font-bold">
            Can't find what you're looking for?
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500">
            Keep exploring. New experiences and discoveries are
            added regularly.
          </p>

          <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#11151d] transition hover:bg-slate-200">
            Explore More
            <ArrowRight size={16} />
          </button>

        </div>

      </section>

    </main>
  );
};

export default Explore;