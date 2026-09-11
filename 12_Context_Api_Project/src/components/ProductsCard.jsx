import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";
import { toast } from "react-toastify";

const ProductCard = ({ product, isInCart }) => {
  const { setCartItem, incrementQuantity, decrementQuantity } = useContext(MyStore);

  const addToCartFnc = () => {
    setCartItem((prev) => [...prev, { ...product, quantity: 1 }]);
    toast.success("Product Added Successfully");
  };

  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-[#080808] p-3 shadow-2xl shadow-black/40 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-blue-500/10">
      {/* Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

      <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-red-500/10 blur-3xl transition-all duration-500 group-hover:bg-red-500/20" />

      {/* Image */}
      <div className="relative h-64 overflow-hidden rounded-2xl bg-[#111]">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-xs font-medium capitalize text-gray-300 backdrop-blur-md">
          {product.category}
        </span>

        {/* Discount */}
        <span className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg shadow-red-500/20">
          -{Math.round(product.discountPercentage)}%
        </span>
      </div>

      {/* Content */}
      <div className="relative px-2 pb-2 pt-5">
        {/* Rating */}
        <div className="mb-2 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="text-sm font-medium text-white">
              {product.rating}
            </span>
          </div>

          <span className="text-xs text-gray-600">•</span>

          <span className="text-xs text-gray-500">{product.stock} left</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-blue-400">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between gap-4">
          {/* Price */}
          <div>
            <p className="text-xs text-gray-500">Price</p>

            <p className="mt-0.5 text-2xl font-bold tracking-tight text-white">
              ${product.price}
            </p>
          </div>

          {/* Add Button */}
          {isInCart ? (
            <div className="mt-4 flex w-fit items-center overflow-hidden rounded-lg border border-white/10">
              <button
                onClick={() => decrementQuantity(isInCart.id)}
                className="px-3 py-1.5 text-gray-400 transition-colors hover:bg-red-500/10 hover:text-red-400"
              >
                −
              </button>

              <span className="min-w-10 border-x border-white/10 px-3 py-1.5 text-center text-sm text-white">
                {isInCart?.quantity}
              </span>

              <button
                onClick={() => incrementQuantity(isInCart.id)}
                className="px-3 py-1.5 text-gray-400 transition-colors hover:bg-blue-500/10 hover:text-blue-400"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => addToCartFnc()}
              className="group/btn relative overflow-hidden rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                Add to Cart
                <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                  →
                </span>
              </span>

              {/* Red glow */}
              <span className="absolute -right-5 -top-5 h-10 w-10 rounded-full bg-red-500 opacity-0 blur-xl transition-opacity duration-300 group-hover/btn:opacity-80" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
