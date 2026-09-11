import React from "react";
import {
  ArrowUpRight,
  Package,
  ShoppingBag,
  Users,
  TrendingUp,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { NavLink } from "react-router";

const HomePage = () => {
  const stats = [
    {
      title: "Total Products",
      value: "120+",
      icon: Package,
      description: "Available products",
    },
    {
      title: "Categories",
      value: "12",
      icon: ShoppingBag,
      description: "Explore categories",
    },
    {
      title: "Active Users",
      value: "2.4K",
      icon: Users,
      description: "Growing community",
    },
    {
      title: "Growth",
      value: "+24%",
      icon: TrendingUp,
      description: "This month",
    },
  ];

  return (
    <div className="min-h-screen bg-[#08090b] text-white px-6 md:px-10 py-8">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#11131a] via-[#0d0f14] to-[#10121a] p-8 md:p-12">
        {/* Glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-600/20 blur-[100px] rounded-full" />

        <div className="absolute -bottom-32 left-1/3 w-72 h-72 bg-blue-600/10 blur-[100px] rounded-full" />

        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
            <Sparkles size={14} />
            Your personal dashboard
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Everything you need,
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              all in one place.
            </span>
          </h1>

          <p className="mt-5 text-gray-400 max-w-2xl text-sm md:text-base leading-7">
            Welcome to your dashboard. Explore products, discover new
            collections, manage your workspace and keep everything organized
            from one beautiful place.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <NavLink
              to="/main/products"
              className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-all duration-300"
            >
              Explore Products
              <ArrowUpRight
                size={17}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </NavLink>

            <button className="px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 text-sm font-medium hover:bg-white/[0.07] hover:text-white transition-all">
              View Overview
            </button>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="group p-5 rounded-2xl border border-white/10 bg-[#0d0f12] hover:border-purple-500/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:bg-purple-500/10 transition-colors">
                  <Icon
                    size={19}
                    className="text-gray-400 group-hover:text-purple-400 transition-colors"
                  />
                </div>

                <ArrowUpRight
                  size={16}
                  className="text-gray-700 group-hover:text-gray-400 transition-colors"
                />
              </div>

              <p className="text-gray-500 text-xs mt-5">{stat.title}</p>

              <h2 className="text-2xl font-bold mt-1">{stat.value}</h2>

              <p className="text-xs text-gray-600 mt-1">{stat.description}</p>
            </div>
          );
        })}
      </section>

      {/* ================= ABOUT DASHBOARD ================= */}
      <section className="grid lg:grid-cols-5 gap-5 mt-6">
        {/* About */}
        <div className="lg:col-span-3 rounded-2xl border border-white/10 bg-[#0d0f12] p-7">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/20 flex items-center justify-center">
              <Sparkles size={18} className="text-purple-400" />
            </div>

            <div>
              <p className="text-xs text-purple-400 uppercase tracking-widest">
                About
              </p>

              <h2 className="text-xl font-semibold">Your workspace</h2>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-7">
            This dashboard is designed to give you a simple and powerful
            overview of your digital workspace. From discovering products to
            exploring different collections, everything is organized into one
            clean interface.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mt-6">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-sm font-medium">Simple</p>
              <p className="text-xs text-gray-500 mt-1">
                Clean and easy navigation
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-sm font-medium">Powerful</p>
              <p className="text-xs text-gray-500 mt-1">
                Everything in one workspace
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-[#0d0f12] p-7">
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            Quick access
          </p>

          <h2 className="text-xl font-semibold mt-2">Get started</h2>

          <div className="space-y-3 mt-6">
            <NavLink
              to="/main/products"
              className="group flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-purple-500/[0.06] hover:border-purple-500/20 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Package size={17} className="text-purple-400" />
                </div>

                <div>
                  <p className="text-sm font-medium">Browse Products</p>

                  <p className="text-xs text-gray-600">
                    Explore the collection
                  </p>
                </div>
              </div>

              <ChevronRight
                size={17}
                className="text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all"
              />
            </NavLink>

            <button className="group w-full flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-all">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <TrendingUp size={17} className="text-blue-400" />
                </div>

                <div className="text-left">
                  <p className="text-sm font-medium">View Activity</p>

                  <p className="text-xs text-gray-600">Check recent activity</p>
                </div>
              </div>

              <ChevronRight
                size={17}
                className="text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all"
              />
            </button>
          </div>
        </div>
      </section>

      {/* ================= EXPLORE PRODUCTS ================= */}
      <section className="mt-6 rounded-2xl border border-white/10 bg-[#0d0f12] p-7">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs text-purple-400 uppercase tracking-widest">
              Discover
            </p>

            <h2 className="text-2xl font-bold mt-2">Explore Products</h2>

            <p className="text-sm text-gray-500 mt-2">
              Discover something interesting from our collection.
            </p>
          </div>

          <NavLink
            to="/main/products"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            View all
            <ArrowUpRight size={16} />
          </NavLink>
        </div>

        {/* Product Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7">
          {[
            {
              title: "Featured Collection",
              text: "Discover curated products",
              icon: Sparkles,
            },
            {
              title: "Trending Now",
              text: "See what's popular",
              icon: TrendingUp,
            },
            {
              title: "Latest Products",
              text: "Explore fresh arrivals",
              icon: Package,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.title}
                to="/main/products"
                className="group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.07] hover:border-purple-500/20 transition-all duration-300"
              >
                <div className="absolute -right-10 -top-10 w-28 h-28 bg-purple-500/10 blur-3xl rounded-full group-hover:bg-purple-500/20 transition-all" />

                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    <Icon size={19} className="text-purple-400" />
                  </div>

                  <h3 className="text-base font-semibold mt-5">{item.title}</h3>

                  <p className="text-xs text-gray-500 mt-1">{item.text}</p>

                  <div className="flex items-center gap-1 text-xs text-gray-500 group-hover:text-purple-400 mt-5 transition-colors">
                    Explore
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
