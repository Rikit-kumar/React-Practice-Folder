import React from "react";
import {
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  PackageCheck,
  Heart,
} from "lucide-react";
import { useNavigate } from "react-router";

const About = () => {

  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#101210] px-5 pb-24 pt-36 text-[#F4EDE1] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* ================= HERO ================= */}
        <section className="grid min-h-[70vh] grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D8B47A]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D8B47A]">
                The Auren Story
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              We believe
              <span className="block text-[#D8B47A]">less can be more.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#85877F] sm:text-lg">
              AUREN was created around a simple idea — everyday products should
              feel intentional, beautiful and worth keeping.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#666960]">
              We carefully curate products that combine timeless design,
              thoughtful details and everyday functionality.
            </p>

            <button onClick={()=> navigate('/products')} className="group mt-8 flex items-center gap-3 rounded-full bg-[#D8B47A] px-6 py-3.5 text-sm font-semibold text-[#101210] transition-all duration-300 hover:bg-[#E5C48E] hover:shadow-xl hover:shadow-[#D8B47A]/10">
              Explore Our Collection
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:rotate-12"
              />
            </button>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex min-h-[500px] items-center justify-center">
            {/* Glow */}
            <div className="absolute h-72 w-72 rounded-full bg-[#D8B47A]/10 blur-[100px]" />

            {/* Main Card */}
            <div className="relative h-[430px] w-[330px] rotate-3 rounded-[35px] border border-white/10 bg-[#171A17] p-3 shadow-2xl transition-transform duration-700 hover:rotate-0">
              <div className="flex h-full flex-col justify-between rounded-[28px] border border-[#D8B47A]/10 bg-gradient-to-br from-[#20231F] to-[#141614] p-8">
                <div className="flex items-start justify-between">
                  <span className="text-3xl font-bold tracking-widest text-[#D8B47A]">
                    A
                  </span>

                  <Sparkles size={22} className="text-[#D8B47A]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#666960]">
                    Established
                  </p>

                  <p className="mt-2 text-5xl font-semibold text-[#F4EDE1]">
                    2026
                  </p>

                  <div className="mt-8 h-px bg-white/10" />

                  <p className="mt-6 text-sm leading-6 text-[#85877F]">
                    Thoughtful products.
                    <br />
                    Timeless experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-12 left-2 rounded-2xl border border-white/10 bg-[#171A17]/90 px-5 py-4 shadow-xl backdrop-blur-xl sm:left-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D8B47A]/10">
                  <Heart size={18} className="text-[#D8B47A]" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#F4EDE1]">
                    Made with intention
                  </p>

                  <p className="text-xs text-[#666960]">
                    Designed for everyday life
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PHILOSOPHY ================= */}
        <section className="border-t border-white/10 py-24">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D8B47A]">
                Our Philosophy
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                Designed to
                <span className="block text-[#85877F]">stay timeless.</span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-[#85877F]">
                We don't believe in filling your space with things you don't
                need. Every product in our collection is selected with purpose —
                balancing aesthetics, quality and function.
              </p>

              <p className="mt-6 text-base leading-7 text-[#666960]">
                AUREN is about creating a more considered way of shopping. Fewer
                distractions. Better choices. Products that feel right today and
                still feel right tomorrow.
              </p>
            </div>
          </div>
        </section>

        {/* ================= VALUES ================= */}
        <section className="pb-24">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D8B47A]">
              What We Stand For
            </p>

            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              The AUREN standard.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {/* Card 1 */}
            <div className="group rounded-[26px] border border-white/10 bg-[#171A17] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#D8B47A]/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D8B47A]/10">
                <Sparkles size={21} className="text-[#D8B47A]" />
              </div>

              <h3 className="mt-8 text-xl font-semibold">Thoughtful Design</h3>

              <p className="mt-3 text-sm leading-7 text-[#85877F]">
                Every detail has a reason. We choose products that combine
                simplicity with character.
              </p>

              <span className="mt-8 block text-4xl font-semibold text-[#D8B47A]/20">
                01
              </span>
            </div>

            {/* Card 2 */}
            <div className="group rounded-[26px] border border-white/10 bg-[#171A17] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#D8B47A]/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D8B47A]/10">
                <ShieldCheck size={21} className="text-[#D8B47A]" />
              </div>

              <h3 className="mt-8 text-xl font-semibold">Quality First</h3>

              <p className="mt-3 text-sm leading-7 text-[#85877F]">
                We believe good design means very little without quality that
                can stand the test of time.
              </p>

              <span className="mt-8 block text-4xl font-semibold text-[#D8B47A]/20">
                02
              </span>
            </div>

            {/* Card 3 */}
            <div className="group rounded-[26px] border border-white/10 bg-[#171A17] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#D8B47A]/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D8B47A]/10">
                <PackageCheck size={21} className="text-[#D8B47A]" />
              </div>

              <h3 className="mt-8 text-xl font-semibold">Better Choices</h3>

              <p className="mt-3 text-sm leading-7 text-[#85877F]">
                A focused collection means less scrolling, less noise and more
                confidence in what you choose.
              </p>

              <span className="mt-8 block text-4xl font-semibold text-[#D8B47A]/20">
                03
              </span>
            </div>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="rounded-[30px] border border-white/10 bg-[#171A17] p-8 sm:p-12">
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            <div>
              <p className="text-4xl font-semibold text-[#D8B47A]">50+</p>

              <p className="mt-2 text-sm text-[#666960]">Curated Products</p>
            </div>

            <div>
              <p className="text-4xl font-semibold text-[#D8B47A]">4.9</p>

              <p className="mt-2 text-sm text-[#666960]">Average Rating</p>
            </div>

            <div>
              <p className="text-4xl font-semibold text-[#D8B47A]">24/7</p>

              <p className="mt-2 text-sm text-[#666960]">Customer Support</p>
            </div>

            <div>
              <p className="text-4xl font-semibold text-[#D8B47A]">100%</p>

              <p className="mt-2 text-sm text-[#666960]">Carefully Selected</p>
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="py-28 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D8B47A]">
            Find Something Worth Keeping
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
            Your next favorite thing
            <span className="text-[#D8B47A]"> might be here.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#85877F]">
            Explore our carefully selected collection and discover products
            designed to fit beautifully into everyday life.
          </p>

          <button onClick={()=> navigate('/products')} className="group mt-8 inline-flex items-center gap-3 rounded-full border border-[#D8B47A]/30 bg-[#D8B47A]/10 px-6 py-3.5 text-sm font-semibold text-[#D8B47A] transition-all duration-300 hover:bg-[#D8B47A] hover:text-[#101210]">
            Explore Collection
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
          </button>
        </section>
      </div>
    </main>
  );
};

export default About;
