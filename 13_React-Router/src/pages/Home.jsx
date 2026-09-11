import React from "react";
import {
  ArrowRight,
  Search,
  Sparkles,
  Zap,
  ShieldCheck,
  Layers3,
} from "lucide-react";
import { useNavigate } from "react-router";

const Home = () => {

  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#0d1117] pt-[76px] text-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />

        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              {/* Small Badge */}
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/[0.07] px-4 py-2 text-sm text-indigo-300">
                <Sparkles size={15} />
                <span>Built for a better experience</span>
              </div>

              {/* Heading */}
              <h1 className="max-w-2xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
                Discover a
                <span className="block bg-gradient-to-r from-indigo-300 via-blue-300 to-slate-200 bg-clip-text text-transparent">
                  smarter way
                </span>
                to explore.
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
                Everything you need, brought together in one modern experience.
                Explore, discover and manage everything from a single place.
              </p>

              {/* Search */}
              <div className="mt-9 flex max-w-xl items-center rounded-2xl border border-white/[0.08] bg-[#151b24] p-2 shadow-2xl shadow-black/20">
                <Search size={20} className="ml-3 text-slate-500" />

                <input
                  type="text"
                  placeholder="Search anything..."
                  className="w-full bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600"
                />

                <button className="flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-400">
                  Search
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Quick Links */}
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="text-sm text-slate-600">Popular:</span>

                <button className="text-sm text-slate-400 transition hover:text-indigo-300">
                  Trending
                </button>

                <button className="text-sm text-slate-400 transition hover:text-indigo-300">
                  New
                </button>

                <button className="text-sm text-slate-400 transition hover:text-indigo-300">
                  Featured
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative hidden lg:block">
              {/* Main Card */}
              <div className="relative mx-auto max-w-md rounded-3xl border border-white/[0.08] bg-[#151b24] p-5 shadow-2xl shadow-black/40">
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500">Overview</p>

                    <h3 className="mt-1 text-lg font-semibold">
                      Your workspace
                    </h3>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300">
                    <Layers3 size={18} />
                  </div>
                </div>

                {/* Fake Graph */}
                <div className="mt-8 flex h-40 items-end gap-3 rounded-2xl bg-[#10151d] p-5">
                  <div className="h-[35%] flex-1 rounded-t-lg bg-indigo-500/30" />
                  <div className="h-[55%] flex-1 rounded-t-lg bg-indigo-500/40" />
                  <div className="h-[45%] flex-1 rounded-t-lg bg-indigo-500/30" />
                  <div className="h-[72%] flex-1 rounded-t-lg bg-indigo-500/60" />
                  <div className="h-[62%] flex-1 rounded-t-lg bg-indigo-500/50" />
                  <div className="h-[88%] flex-1 rounded-t-lg bg-indigo-400" />
                </div>

                {/* Mini Stats */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/[0.06] bg-[#111720] p-4">
                    <p className="text-xs text-slate-500">Activity</p>

                    <p className="mt-2 text-xl font-semibold">+24.8%</p>
                  </div>

                  <div className="rounded-2xl border border-white/[0.06] bg-[#111720] p-4">
                    <p className="text-xs text-slate-500">Performance</p>

                    <p className="mt-2 text-xl font-semibold text-indigo-300">
                      Excellent
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-7 -left-8 flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#1a212c] p-4 shadow-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">Status</p>

                  <p className="text-sm font-semibold">Everything is good</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="border-t border-white/[0.06] bg-[#10151d]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-medium text-indigo-400">WHY CHOOSE US</p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything in one place.
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              A clean and focused experience designed to help you find what
              matters faster.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-5 md:grid-cols-3">
            {/* Card 1 */}
            <div className="group rounded-2xl border border-white/[0.07] bg-[#151b24] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/20">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300 transition group-hover:bg-indigo-400/15">
                <Sparkles size={20} />
              </div>

              <h3 className="mt-6 text-lg font-semibold">Simple Experience</h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Everything is organized with a clean interface that keeps things
                simple and easy to understand.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl border border-white/[0.07] bg-[#151b24] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/20">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-400/10 text-blue-300 transition group-hover:bg-blue-400/15">
                <Zap size={20} />
              </div>

              <h3 className="mt-6 text-lg font-semibold">Fast & Powerful</h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Quickly access the things you need without unnecessary
                complexity or distractions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl border border-white/[0.07] bg-[#151b24] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/20">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300 transition group-hover:bg-emerald-400/15">
                <ShieldCheck size={20} />
              </div>

              <h3 className="mt-6 text-lg font-semibold">Reliable & Secure</h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Designed with reliability and security in mind, giving you
                confidence while using the platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-indigo-400/10 bg-gradient-to-br from-[#171e2a] to-[#121720] p-10 text-center sm:p-16">
          <p className="text-sm font-medium text-indigo-400">
            READY TO EXPLORE?
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
            Start exploring something better.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500">
            Discover everything this platform has to offer and find your next
            favorite experience.
          </p>

          <button onClick={()=> navigate("/discover")} className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#11151d] transition-all duration-300 hover:bg-slate-200">
            Get Started
            <ArrowRight size={17} />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
