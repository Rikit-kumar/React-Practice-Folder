import React, { useContext } from "react";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { MyStore } from "../context/MyCartContext";

const ProductCard = ({ product }) => {
  const { setCartItem } = useContext(MyStore);

  const addCart = (data) => {
    return setCartItem((prev) => [...prev, product]);
  };

  return (
    <div className="group relative w-[380px] overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
      {/* Wishlist */}
      <button className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110">
        <Heart size={18} className="text-gray-600" />
      </button>

      {/* Category */}
      <span className="absolute left-5 top-5 z-20 rounded-full bg-violet-100 px-4 py-1 text-xs font-semibold text-violet-700 capitalize">
        {product.category}
      </span>

      {/* Product Image */}
      <div className="flex h-72 items-center justify-center bg-gradient-to-br from-gray-50 to-violet-50 p-10">
        <img
          src={product.image}
          alt={product.title}
          className="h-52 object-contain transition duration-500 group-hover:scale-110 group-hover:rotate-2"
        />
      </div>

      {/* Card Body */}
      <div className="space-y-4 p-6">
        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1">
            <Star size={15} className="fill-yellow-500 text-yellow-500" />
            <span className="text-sm font-semibold">{product.rating.rate}</span>
          </div>

          <span className="text-sm text-gray-500">
            {product.rating.count} Reviews
          </span>
        </div>

        {/* Title */}
        <h2 className="line-clamp-2 text-lg font-bold text-gray-800">
          {product.title}
        </h2>

        {/* Description */}
        <p className="line-clamp-3 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Bottom */}
        <div className="flex items-center justify-between pt-3">
          <div>
            <p className="text-sm text-gray-500">Price</p>

            <h3 className="text-3xl font-bold text-violet-700">
              ${product.price}
            </h3>
          </div>

          <button
            onClick={() => addCart()}
            className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <ShoppingCart size={18} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
