import React, { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Products", to: "/products" },
    { name: "About", to: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full px-6 py-4 backdrop-blur-md bg-white/70 dark:bg-slate-900/80 border-b border-slate-200/60 dark:border-slate-800/60 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            ✦
          </div>
          <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-700 dark:from-white dark:via-indigo-200 dark:to-slate-300 bg-clip-text text-transparent">
            Brand<span className="text-indigo-600 dark:text-indigo-400">.</span>
          </span>
        </div>

        {/* Middle: Navigation Links */}
        <div className="hidden md:flex items-center gap-1 rounded-full px-4 py-1.5 bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className="relative px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors duration-300 group"
            >
              {link.name}
              {/* Animated underline indicator */}
              <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 -translate-x-1/2 transition-all duration-300 ease-out group-hover:w-3/4 rounded-full" />
            </NavLink>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Sign In
          </button>

          <button className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4 pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className="px-3 py-2 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-indigo-600 transition-all"
            >
              {link.name}
            </NavLink>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            <button className="w-full py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
              Sign In
            </button>
            <button className="w-full py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-lg shadow-md shadow-indigo-500/25">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
