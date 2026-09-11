import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Navbar = () => {
  const { setIsCartOpen, cartItem } = useContext(MyStore);

  let cartLength = cartItem.length;

  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#050505]/90 px-6 py-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
        {/* Logo */}
        <div className="group flex cursor-pointer items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-red-500 shadow-lg shadow-blue-500/20 transition-all duration-300 group-hover:rotate-6 group-hover:shadow-red-500/30">
            <div className="absolute inset-[2px] rounded-[10px] bg-[#050505]" />

            <span className="relative text-lg font-black text-white">N</span>
          </div>

          <span className="text-xl font-bold tracking-tight text-white">
            Nova<span className="text-blue-500 ml-1">.</span>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex">
          <button
            onClick={() => setIsCartOpen(false)}
            className="group relative rounded-lg px-5 py-2.5 text-m font-medium text-gray-400 transition-all duration-300 hover:bg-white/5 hover:text-white"
          >
            Home
            <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/80 transition-all duration-300 group-hover:w-5" />
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            className="group relative rounded-lg px-5 py-2.5 text-m font-medium text-gray-400 transition-all duration-300 hover:bg-white/5 hover:text-white"
          >
            Cart
            <span className=" absolute top-1 right-1.1 ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500/15 px-1.5 text-[10px] font-bold text-red-400 transition-all duration-300 group-hover:bg-red-500 group-hover:text-white">
             {cartLength}
            </span>
            <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-red-500 shadow-lg shadow-red-500/80 transition-all duration-300 group-hover:w-5" />
          </button>
        </div>

        {/* Right Button */}
        <button className="group relative overflow-hidden rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/30">
          <span className="relative z-10 flex items-center gap-2">
            Shop Now
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>

          {/* Red hover glow */}
          <span className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-red-500 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-70" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
