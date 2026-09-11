import React, { useContext } from "react";
import {
  Heart,
  Star,
  ShoppingBag,
  ArrowUpRight,
  Minus,
  Plus,
} from "lucide-react";
import { MyApp } from "../contextApi/AppContext";
import { useNavigate } from "react-router";

const ProductsCard = ({ product, isInCart }) => {
  const {
    title,
    brand,
    description,
    price,
    discountPercentage,
    rating,
    availabilityStatus,
    thumbnail,
  } = product;

  const {
    addToCartFnc,
    addToWishListFnc,
    decrementQuantity,
    incrementQuantity,
  } = useContext(MyApp);

  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(
    2,
  );

  const navigate = useNavigate();

  return (
    <div className="group overflow-hidden rounded-[26px] border border-white/10 bg-[#171A17] p-3 transition-all duration-500 hover:-translate-y-2 hover:border-[#D8B47A]/40 hover:bg-[#1A1D1A] hover:shadow-2xl hover:shadow-black/40">
      {/* ================= IMAGE ================= */}
      <div className="relative aspect-[4/4.5] overflow-hidden rounded-[20px] bg-[#20231F]">
        <img onClick={()=> navigate(`/detail/${product.id}`)}
          src={thumbnail}
          alt={title}
          className="h-full w-full cursor-pointer object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101210]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* ================= STOCK ================= */}
        <div className="absolute left-4 top-4">
          <span
            className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold backdrop-blur-md ${
              availabilityStatus === "In Stock"
                ? "border-[#D8B47A]/20 bg-[#101210]/80 text-[#D8B47A]"
                : "border-red-400/20 bg-red-950/80 text-red-300"
            }`}
          >
            {availabilityStatus}
          </span>
        </div>

        {/* ================= WISHLIST ================= */}
        <button
          onClick={() => addToWishListFnc(product)}
          aria-label="Add to wishlist"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#101210]/85 text-[#F4EDE1] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#D8B47A]/50 hover:bg-[#D8B47A] hover:text-[#101210]"
        >
          <Heart
            size={18}
            strokeWidth={1.8}
            className="transition-transform duration-300"
          />
        </button>

        {/* ================= DISCOUNT ================= */}
        {discountPercentage > 0 && (
          <div className="absolute bottom-4 left-4 rounded-full bg-[#D8B47A] px-3 py-1.5 text-[11px] font-bold tracking-wide text-[#101210]">
            -{Math.round(discountPercentage)}%
          </div>
        )}

        {/* ================= ADD TO CART ================= */}
        {isInCart ? (
          <div className="absolute bottom-4 right-4 flex items-center rounded-full border border-white/10 bg-[#101210]/90 backdrop-blur-md">
            <button
              onClick={() => decrementQuantity(isInCart.id)}
              className="flex h-9 w-9 items-center justify-center text-[#A7A39A] transition-colors hover:text-[#D8B47A]"
            >
              <Minus size={14} />
            </button>

            <span className="w-8 text-center text-sm font-semibold text-[#F4EDE1]">
              {isInCart.quantity}
            </span>

            <button
              onClick={() => incrementQuantity(isInCart.id)}
              className="flex h-9 w-9 items-center justify-center text-[#A7A39A] transition-colors hover:text-[#D8B47A]"
            >
              <Plus size={14} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCartFnc(product)}
            aria-label="Add to cart"
            className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#F4EDE1]/20 bg-[#F4EDE1] text-[#101210] shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#D8B47A]"
          >
            <ShoppingBag size={18} strokeWidth={1.8} />
          </button>
        )}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="px-2 pb-2 pt-5">
        {/* Brand + Rating */}
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D8B47A]">
            {brand}
          </p>

          <div className="flex items-center gap-1 text-sm font-medium text-[#A7A39A]">
            <Star size={13} fill="#D8B47A" strokeWidth={0} />

            {rating}
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-2 line-clamp-1 text-xl font-semibold tracking-tight text-[#F4EDE1] transition-colors duration-300 group-hover:text-[#D8B47A]">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#85877F]">
          {description}
        </p>

        {/* Divider */}
        <div className="my-5 h-px bg-white/[0.07]" />

        {/* Price + View */}
        <div className="flex items-end justify-between">
          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold tracking-tight text-[#F4EDE1]">
              ${discountedPrice}
            </span>

            {discountPercentage > 0 && (
              <span className="mb-0.5 text-sm text-[#666960] line-through">
                ${price.toFixed(2)}
              </span>
            )}
          </div>

          {/* View Product */}
          <button
            onClick={() => navigate(`/detail/${product.id}`)}
            aria-label="View product"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#A7A39A] transition-all duration-300 hover:scale-110 hover:border-[#D8B47A] hover:bg-[#D8B47A] hover:text-[#101210]"
          >
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
