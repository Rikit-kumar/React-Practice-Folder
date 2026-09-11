import React from "react";

const Navbar = ({ setToggle, setUpdateUser }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="group cursor-pointer">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 transition duration-300 group-hover:scale-105">
            Card<span className="text-indigo-600">Craft</span>
          </h1>
        </div>

        {/* Nav Links */}
        <nav>
          <ul className="flex items-center gap-10">
            {["Home", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="group relative text-[15px] font-medium tracking-wide text-slate-600 transition duration-300 hover:text-indigo-600"
                >
                  {item}

                  {/* Animated Underline */}
                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Button */}
        <button
          onClick={() =>{
            setToggle((prev) => !prev)
            setUpdateUser(null);
          } }
          className="group relative overflow-hidden rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-300/50"
        >
          <span className="relative z-10">Create User Card</span>

          {/* Hover Shine */}
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
