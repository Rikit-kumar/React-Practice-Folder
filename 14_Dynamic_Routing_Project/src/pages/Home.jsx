import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router";

const Home = () => {

  const navigate = useNavigate();

  const cards = [
    {
      number: "01",
      title: "New Arrivals",
      description: "Discover the latest pieces curated for you.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
    },
    {
      number: "02",
      title: "Premium Collection",
      description: "Timeless pieces with a modern touch.",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80",
    },
    {
      number: "03",
      title: "Everyday Essentials",
      description: "Simple products made for everyday life.",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <main className="bg-[#F5F1E8] text-[#101210]">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen overflow-hidden bg-[#101210] px-6 pt-32">
        {/* Background Glow */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#D8B47A]/10 blur-[120px]" />

        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 lg:grid-cols-2">
          {/* Hero Content */}
          <div className="relative z-10">
            {/* Small Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#D8B47A]/30 bg-[#D8B47A]/5 px-4 py-2 text-sm font-medium text-[#D8B47A]">
              <Sparkles size={15} />
              Curated for modern living
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-[#F4EDE1] sm:text-6xl lg:text-7xl">
              Elevate your
              <span className="block text-[#D8B47A]">everyday style.</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#A7A39A]">
              Discover thoughtfully selected products designed to bring
              simplicity, elegance and character into your everyday life.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <button onClick={()=> navigate('/products')} className="group flex items-center gap-3 rounded-full bg-[#D8B47A] px-7 py-4 text-[16px] font-semibold text-[#101210] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E5C48E] hover:shadow-xl hover:shadow-[#D8B47A]/20">
                Explore Collection
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button onClick={()=> navigate('/products')} className="rounded-full border border-white/15 px-7 py-4 text-[16px] font-medium text-[#F4EDE1] transition-all duration-300 hover:border-[#D8B47A]/50 hover:bg-white/5">
                Discover More
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex items-center gap-10">
              <div>
                <p className="text-2xl font-semibold text-[#F4EDE1]">250+</p>

                <p className="mt-1 text-sm text-[#77766F]">Curated Products</p>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div>
                <p className="text-2xl font-semibold text-[#F4EDE1]">4.9</p>

                <p className="mt-1 text-sm text-[#77766F]">Customer Rating</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-[420px] w-[420px] rounded-full bg-[#D8B47A]/10 blur-[90px]" />

            <div className="relative h-[520px] w-full max-w-[480px] overflow-hidden rounded-[40px] border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85"
                alt="Premium collection"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101210]/80 via-transparent to-transparent" />

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#101210]/70 p-5 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#A7A39A]">
                      Featured Collection
                    </p>

                    <p className="mt-1 text-xl font-medium text-[#F4EDE1]">
                      The Essentials
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D8B47A] text-[#101210]">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COLLECTION CARDS ================= */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#A77D45]">
              Explore
            </p>

            <div className="flex items-end justify-between">
              <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Something for every
                <span className="text-[#A77D45]"> moment.</span>
              </h2>

              <button onClick={()=> navigate('/products')} className="hidden items-center gap-2 text-[16px] font-medium transition-all duration-300 hover:gap-3 hover:text-[#A77D45] sm:flex">
                View all
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-5 md:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.number}
                className="group relative h-[430px] cursor-pointer overflow-hidden rounded-[28px]"
              >
                {/* Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Number */}
                <span className="absolute right-6 top-6 text-sm font-medium text-white/70">
                  {card.number}
                </span>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="mb-2 text-sm text-white/60">
                    {card.description}
                  </p>

                  <div className="flex items-end justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-white">
                      {card.title}
                    </h3>

                    {/* Arrow */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#101210] transition-all duration-300 group-hover:rotate-[-45deg]">
                      <ArrowRight size={19} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SMALL CTA ================= */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#101210] px-8 py-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#D8B47A]">
            Discover more
          </p>

          <h2 className="text-4xl font-semibold text-[#F4EDE1] sm:text-5xl">
            Designed for your
            <span className="text-[#D8B47A]"> lifestyle.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[#A7A39A]">
            Explore our collection and find products that perfectly match your
            style.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
