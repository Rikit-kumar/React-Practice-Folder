import React, { useContext } from "react";
import { MyStore } from "../context/MyCartContext";

const Navbar = () => {

    const {setIsCartOpen} = useContext(MyStore);

  return (
    <header className="sticky top-0 z-50 w-full px-6 py-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/20 bg-white/70 px-8 py-4 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-500 to-pink-500 text-lg font-bold text-white shadow-lg">
            RK
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-wide text-gray-900">
              HomeHive
            </h1>
            <p className="text-xs text-gray-500">Modern Living</p>
          </div>
        </div>

        {/* Center Links */}
        <ul className="flex items-center gap-10 rounded-full border border-gray-200 bg-gray-50 px-6 py-3 shadow-sm">
          <li onClick={()=> setIsCartOpen(false)} className="relative cursor-pointer font-medium text-gray-700 transition-all duration-300 hover:text-violet-600 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-violet-600 after:transition-all after:duration-300 hover:after:w-full">
            Home
          </li>

          <li onClick={()=> setIsCartOpen(true)} className="relative cursor-pointer font-medium text-gray-700 transition-all duration-300 hover:text-violet-600 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-violet-600 after:transition-all after:duration-300 hover:after:w-full">
            Cart
          </li>
        </ul>

        {/* Button */}
        <button className="rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-violet-400/40">
          Get Started
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
