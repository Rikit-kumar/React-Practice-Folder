import React, { useContext } from "react";
import { NavLink } from "react-router";
import {
  LayoutDashboard,
  Package,
  LogOut,
  User,
  ShoppingCart,
  Heart,
  BadgeIndianRupee,
} from "lucide-react";
import { MyStore } from "../contextApi/AppContext";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      path: "/main",
      icon: LayoutDashboard,
    },
    {
      name: "Users",
      path: "/main/users",
      icon: User,
    },
    {
      name: "Products",
      path: "/main/products",
      icon: Package,
    },
    {
      name: "Cart",
      path: "/main/cart",
      icon: ShoppingCart,
    },
    {
      name: "WishList",
      path: "/main/wishlist",
      icon: Heart,
    },
  ];

  const { cartItems, wishListItems } = useContext(MyStore);

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0d0f12] border-r border-white/10 flex flex-col z-50">
      {/* Logo */}
      <div className="h-20 px-6 flex items-center border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
            <BadgeIndianRupee size={20} className="text-white" />
          </div>

          <div>
            <h1 className="text-lg font-bold text-white tracking-tight">
              SastaSauda
            </h1>

            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
              DESI DEALS, DAILY
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-7">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600 px-3 mb-4">
          Workspace
        </p>

        <div className="space-y-2">
          {navLinks.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/main"}
                className={({ isActive }) =>
                  `group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-500/15 to-blue-500/10 text-white border border-purple-500/20"
                      : "text-gray-500 hover:text-white hover:bg-white/[0.04]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={19}
                      className={`transition-all duration-300 ${
                        isActive
                          ? "text-purple-400"
                          : "text-gray-500 group-hover:text-gray-300"
                      }`}
                    />

                    <span className="text-sm font-medium">{item.name}</span>

                    {/* Cart / Wishlist Count */}
                    {item.name === "Cart" && cartItems?.length > 0 && (
                      <span className="ml-auto min-w-5 h-5 px-1.5 rounded-full bg-purple-500/15 border border-purple-400/20 text-purple-300 text-[10px] font-bold flex items-center justify-center">
                        {cartItems.length}
                      </span>
                    )}

                    {item.name === "WishList" && wishListItems?.length > 0 && (
                      <span className="ml-auto min-w-5 h-5 px-1.5 rounded-full bg-pink-500/15 border border-pink-400/20 text-pink-300 text-[10px] font-bold flex items-center justify-center">
                        {wishListItems.length}
                      </span>
                    )}

                    {/* Active indicator */}
                    {isActive &&
                      item.name !== "Cart" &&
                      item.name !== "WishList" && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-400 shadow-lg shadow-purple-400/60" />
                      )}
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-white/10">
        <button className="group w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:text-red-400 hover:bg-red-500/[0.06] transition-all duration-300">
          <LogOut
            size={19}
            className="group-hover:-translate-x-0.5 transition-transform duration-300"
          />

          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Navbar;
