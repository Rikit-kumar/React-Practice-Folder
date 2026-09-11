import React, { useContext } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { MyApp } from "../contextApi/AppContext";

const Navbar = () => {

  let navigate = useNavigate();
  const {cartItems, wishListItems} = useContext(MyApp);

  return (
    <nav className="fixed top-5 left-1/2 z-50 w-[94%] max-w-7xl -translate-x-1/2">
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#101210]/95 px-7 py-5 shadow-2xl backdrop-blur-xl">
        {/* Logo */}
        <div className="group flex cursor-pointer items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D8B47A] text-lg font-bold text-[#101210] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
            A
          </div>

          <span className="text-2xl font-bold tracking-wide text-[#F4EDE1] transition-colors duration-300 group-hover:text-[#D8B47A]">
            AUREN
          </span>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-12 md:flex">
          {/* Home */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `group relative py-2 text-[18px] font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${
                isActive
                  ? "text-[#D8B47A]"
                  : "text-[#A7A39A] hover:text-[#F4EDE1]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                Home
                <span
                  className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#D8B47A] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </>
            )}
          </NavLink>

          {/* Products */}
          <NavLink
            to="/products"
            end
            className={({ isActive }) =>
              `group relative py-2 text-[18px] font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${
                isActive
                  ? "text-[#D8B47A]"
                  : "text-[#A7A39A] hover:text-[#F4EDE1]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                Products
                <span
                  className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#D8B47A] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </>
            )}
          </NavLink>

          {/* About */}
          <NavLink
            to="/about"
            end
            className={({ isActive }) =>
              `group relative py-2 text-[18px] font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${
                isActive
                  ? "text-[#D8B47A]"
                  : "text-[#A7A39A] hover:text-[#F4EDE1]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                About
                <span
                  className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#D8B47A] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </>
            )}
          </NavLink>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Wishlist */}
          <button onClick={()=> navigate('/wishlist')} className="group relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-[#F4EDE1] transition-all duration-300 hover:border-[#D8B47A]/40 hover:bg-[#D8B47A]/10 hover:text-[#D8B47A]">
            <Heart
              size={23}
              strokeWidth={1.8}
              className="transition-all duration-300 group-hover:scale-110 group-hover:fill-[#D8B47A]"
            />

            <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-[#101210] bg-[#D8B47A] px-1 text-xs font-bold text-[#101210]">
              {wishListItems.length}
            </span>
          </button>

          {/* Cart */}
          <button onClick={()=> navigate('/cart')} className="group relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-[#F4EDE1] transition-all duration-300 hover:border-[#D8B47A]/40 hover:bg-[#D8B47A]/10 hover:text-[#D8B47A]">
            <ShoppingBag
              size={23}
              strokeWidth={1.8}
              className="transition-all duration-300 group-hover:scale-110"
            />

            <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-[#101210] bg-[#D8B47A] px-1 text-xs font-bold text-[#101210]">
              {cartItems.length}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
