import React, { useContext } from "react";
import {
  Heart,
  Star,
  ShoppingBag,
  ArrowUpRight,
  Minus,
  Plus,
} from "lucide-react";
import { MyStore } from "../contextApi/AppContext";

const ProductsCard = ({ product, isInCart }) => {
  const {
    title,
    brand,
    category,
    description,
    discountPercentage,
    price,
    rating,
    stock,
    thumbnail,
    availabilityStatus,
  } = product;

  const {
    setCartItems,
    cartItems,
    addTOCartFnc,
    incrementQuantityFnc,
    decrementQuantityFnc,
    addToWishlistFnc,
    wishListItems,
  } = useContext(MyStore);

  const isInWishlist = wishListItems?.some((item) => item.id === product.id);

  // Calculate original price
  const originalPrice = (price / (1 - discountPercentage / 100)).toFixed(2);

  return (
    <div className="group relative bg-[#0d0f12] border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1">
      {/* ================= IMAGE ================= */}
      <div className="relative h-64 overflow-hidden bg-[#121419]">
        {/* Glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 blur-[70px] rounded-full group-hover:bg-purple-500/20 transition-all duration-500" />

        {/* Discount */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/20 text-purple-300 text-[11px] font-semibold backdrop-blur-md">
            -{discountPercentage}%
          </span>
        </div>

        {/* Wishlist */}
        <button
          onClick={() => addToWishlistFnc(product)}
          className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full backdrop-blur-md border flex items-center justify-center transition-all duration-300 ${
            isInWishlist
              ? "bg-red-500/15 border-red-400/30 text-red-400"
              : "bg-black/40 border-white/10 text-gray-400 hover:text-red-400 hover:border-red-400/30 hover:bg-red-500/10"
          }`}
        >
          <Heart
            size={17}
            className={`transition-all duration-300 ${
              isInWishlist
                ? "fill-red-400 text-red-400 scale-110"
                : "group-hover:scale-110"
            }`}
          />
        </button>

        {/* Product Image */}
        <img
          src={thumbnail}
          alt={title}
          className="relative z-[1] w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-110"
        />

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0d0f12] to-transparent pointer-events-none" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-5">
        {/* Brand + Stock */}
        <div className="flex items-center justify-between gap-3">
          <span className="text-[10px] uppercase tracking-[0.18em] text-purple-400 font-semibold">
            {brand}
          </span>

          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />

            <span className="text-[10px] text-gray-500">
              {availabilityStatus}
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-white mt-2 line-clamp-1 group-hover:text-purple-300 transition-colors">
          {title}
        </h2>

        {/* Category */}
        <p className="text-xs text-gray-600 capitalize mt-1">{category}</p>

        {/* Description */}
        <p className="text-xs text-gray-500 leading-5 mt-3 line-clamp-2">
          {description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">
          <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-yellow-400/5 border border-yellow-400/10">
            <Star size={13} className="fill-yellow-400 text-yellow-400" />

            <span className="text-xs font-medium text-gray-300">{rating}</span>
          </div>

          <span className="text-[11px] text-gray-600">
            {stock} items available
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06] my-5" />

        {/* Price + Button */}
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-[10px] text-gray-600 uppercase tracking-wider">
              Price
            </p>

            <div className="flex items-center gap-2 mt-1">
              <span className="text-xl font-bold text-white">${price}</span>

              <span className="text-xs text-gray-600 line-through">
                ${originalPrice}
              </span>
            </div>
          </div>

          {/* Add Button */}
          {isInCart ? (
            <div className="flex items-center bg-white/[0.03] border border-white/[0.07] rounded-xl overflow-hidden">
              <button
                onClick={() => decrementQuantityFnc(product.id)}
                className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.05] transition-all"
              >
                <Minus size={14} />
              </button>

              <span className="w-9 text-center text-sm font-semibold">
                {isInCart.quantity || 1}
              </span>

              <button
                onClick={() => incrementQuantityFnc(product.id)}
                className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.05] transition-all"
              >
                <Plus size={14} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => addTOCartFnc(product)}
              className="group/btn flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black text-xs font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              <ShoppingBag size={15} />

              <span>Add</span>

              <ArrowUpRight
                size={14}
                className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
