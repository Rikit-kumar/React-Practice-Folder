import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-xl font-bold text-white shadow-lg">
            U
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900">UserCards</h1>
            <p className="text-xs text-gray-500">Dashboard</p>
          </div>
        </div>

        <ul className="hidden items-center gap-10 text-l md:flex">
          <li>
            <a
              href="#"
              className="relative text-gray-700 font-medium transition hover:text-indigo-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="relative text-gray-700 font-medium transition hover:text-indigo-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#"
              className="relative text-gray-700 font-medium transition hover:text-indigo-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full"
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          onClick={() => setToggle((prev) => !prev)}
          className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          + Create User Card
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
