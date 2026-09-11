import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">MyApp</h1>

      <div className="flex gap-8">
        <NavLink to="/" className="hover:text-blue-400 transition-colors">
          Home
        </NavLink>

        <NavLink to="about" className="hover:text-blue-400 transition-colors">
          About
        </NavLink>

        <NavLink
          to="contact"
          className="hover:text-blue-400 transition-colors"
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
