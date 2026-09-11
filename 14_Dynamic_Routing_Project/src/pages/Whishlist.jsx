import React, { useContext } from "react";
import {
  Heart,
  ShoppingBag,
  Trash2,
  Star,
  ArrowUpRight,
  ArrowLeft,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { MyApp } from "../contextApi/AppContext";

const Whishlist = () => {
  const { wishListItems, deleteProductFromWishlist } = useContext(MyApp);
  const navigation = useNavigate();

  return (
    <main className="min-h-screen bg-[#101210] px-5 pb-24 pt-40 text-[#F4EDE1] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#D8B47A]" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D8B47A]">
              Your Favorites
            </span>
          </div>

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Wishlist
              </h1>

              <p className="mt-3 text-sm text-[#85877F]">
                Products you've saved for later.
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8B47A]/20 bg-[#D8B47A]/10">
              <Heart size={18} className="text-[#D8B47A]" fill="#D8B47A" />
            </div>
          </div>
        </div>

        {/* ================= EMPTY WISHLIST ================= */}
        {wishListItems.length === 0 ? (
          <div className="flex min-h-[430px] flex-col items-center justify-center rounded-[30px] border border-white/10 bg-[#171A17] px-6 text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#D8B47A]/20 bg-[#D8B47A]/10">
              <Heart size={32} strokeWidth={1.5} className="text-[#D8B47A]" />
            </div>

            <h2 className="text-2xl font-semibold">Your wishlist is waiting</h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-[#85877F]">
              Save the products you love and come back to them whenever you're
              ready.
            </p>

            <NavLink
              to="/products"
              className="mt-7 flex items-center gap-2 rounded-full bg-[#D8B47A] px-6 py-3 text-sm font-semibold text-[#101210] transition-all duration-300 hover:bg-[#E5C48E] hover:shadow-lg hover:shadow-[#D8B47A]/10"
            >
              Explore Products
              <ArrowUpRight size={16} />
            </NavLink>
          </div>
        ) : (
          /* ================= WISHLIST PRODUCTS ================= */
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {wishListItems.map((product) => {
              const discountedPrice = (
                product.price -
                (product.price * product.discountPercentage) / 100
              ).toFixed(2);

              return (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-[26px] border border-white/10 bg-[#171A17] p-3 transition-all duration-500 hover:-translate-y-2 hover:border-[#D8B47A]/40 hover:bg-[#1A1D1A] hover:shadow-2xl hover:shadow-black/40"
                >
                  {/* ================= IMAGE ================= */}
                  <div className="relative aspect-[4/4.5] overflow-hidden rounded-[20px] bg-[#20231F]">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101210]/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Wishlist */}
                    <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#D8B47A]/20 bg-[#101210]/80 text-[#D8B47A] backdrop-blur-md transition-all duration-300 hover:bg-red-500/10 hover:text-red-400">
                      <Heart size={18} fill="#D8B47A" strokeWidth={1.8} />
                    </button>

                    {/* Discount */}
                    {product.discountPercentage > 0 && (
                      <span className="absolute bottom-4 left-4 rounded-full bg-[#D8B47A] px-3 py-1.5 text-[11px] font-bold text-[#101210]">
                        -{Math.round(product.discountPercentage)}%
                      </span>
                    )}
                  </div>

                  {/* ================= CONTENT ================= */}
                  <div className="px-2 pb-2 pt-5">
                    {/* Brand + Rating */}
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D8B47A]">
                        {product.brand}
                      </p>

                      <div className="flex items-center gap-1 text-sm text-[#A7A39A]">
                        <Star size={13} fill="#D8B47A" strokeWidth={0} />

                        {product.rating}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mt-2 line-clamp-1 text-xl font-semibold tracking-tight text-[#F4EDE1] transition-colors duration-300 group-hover:text-[#D8B47A]">
                      {product.title}
                    </h3>

                    {/* Price */}
                    <div className="mt-5 flex items-end justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-semibold text-[#F4EDE1]">
                          ${discountedPrice}
                        </span>

                        {product.discountPercentage > 0 && (
                          <span className="text-sm text-[#666960] line-through">
                            ${product.price.toFixed(2)}
                          </span>
                        )}
                      </div>

                      <button onClick={()=> navigation(`/detail/${product.id}`)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#A7A39A] transition-all duration-300 hover:border-[#D8B47A] hover:bg-[#D8B47A] hover:text-[#101210]">
                        <ArrowUpRight size={17} />
                      </button>
                    </div>

                    {/* Divider */}
                    <div className="my-5 h-px bg-white/[0.07]" />

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#D8B47A] py-3 text-xs font-bold text-[#101210] transition-all duration-300 hover:bg-[#E5C48E]">
                        <ShoppingBag size={15} />
                        Add to Cart
                      </button>

                      <button onClick={()=> deleteProductFromWishlist(product.id)} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#666960] transition-all duration-300 hover:border-red-400/30 hover:bg-red-400/10 hover:text-red-400">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default Whishlist;
