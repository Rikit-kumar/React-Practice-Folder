import React from "react";
import { NavLink } from "react-router";
import { UserRound, LogOut, Sparkles } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Discover", path: "/discover" },
    { name: "Features", path: "/features" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.07] bg-[#11151d]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[86px] max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <NavLink
          to="/"
          className="group flex items-center gap-3"
        >
          {/* Logo Icon */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#1c2430] text-indigo-400 shadow-lg shadow-black/20 transition-all duration-300 group-hover:border-indigo-400/30 group-hover:bg-[#222c3a] group-hover:shadow-indigo-500/10">
            <Sparkles
              size={19}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
          </div>

          {/* Logo Text */}
          <div className="leading-none">
            <h1 className="text-lg font-bold tracking-tight text-white">
              Nexora
            </h1>

            <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.22em] text-slate-500">
              Experience More
            </p>
          </div>
        </NavLink>

        {/* Navigation Links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative rounded-xl px-4 py-2.5 text-m font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#1c2430] text-white shadow-sm"
                    : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-100"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-indigo-400" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">

          {/* Profile */}
          <button
            title="Profile"
            className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-[#171d27] text-slate-400 transition-all duration-300 hover:border-indigo-400/30 hover:bg-[#1d2633] hover:text-indigo-300"
          >
            <UserRound
              size={18}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </button>

          {/* Logout */}
          <button
            title="Logout"
            className="group flex h-10 items-center gap-2 rounded-xl border border-white/[0.08] bg-[#171d27] px-4 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-red-400/20 hover:bg-red-400/[0.08] hover:text-red-300"
          >
            <LogOut
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />

            <span className="hidden sm:block">
              Logout
            </span>
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;