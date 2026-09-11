import React, { useContext } from "react";
import {
  Heart,
  Star,
  Trash2,
  ShoppingCart,
  ArrowUpRight,
  Sparkles,
  Package,
  Plus,
  Minus,
} from "lucide-react";
import { MyStore } from "../contextApi/AppContext";

const WishlistPage = () => {
        
  const { wishListItems, cartItems, incrementQuantityFnc, decrementQuantityFnc, addTOCartFnc } = useContext(MyStore);

  // ================= EMPTY WISHLIST =================
  if (!wishListItems || wishListItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#08090b] text-white flex items-center justify-center px-6 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-pink-600/10 blur-[120px] rounded-full" />

        <div className="relative text-center max-w-md">
          {/* Icon */}
          <div className="mx-auto w-20 h-20 rounded-3xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
            <Heart size={30} className="text-pink-400" />
          </div>

          <h1 className="text-2xl font-bold mt-6">Your wishlist is empty</h1>

          <p className="text-sm text-gray-500 mt-2 leading-6">
            Save the products you love and they'll be waiting for you here.
          </p>

          <button className="mt-7 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300">
            Explore Products
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#08090b] text-white px-6 md:px-10 py-8">
      {/* ================= HEADER ================= */}
      <section className="relative overflow-hidden rounded-3xl bg-[#0d0f12] border border-white/10 p-7 md:p-9">
        {/* Pink glow */}
        <div className="absolute -top-24 -right-20 w-64 h-64 bg-pink-600/10 blur-[100px] rounded-full" />

        {/* Purple glow */}
        <div className="absolute -bottom-28 -left-20 w-60 h-60 bg-purple-600/10 blur-[100px] rounded-full" />

        <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-5">
          {/* Heading */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-[11px] font-medium">
              <Sparkles size={13} />
              Your Favorites
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mt-4">Wishlist</h1>

            <p className="text-sm text-gray-500 mt-2 max-w-xl">
              Keep the things you love close and come back to them whenever
              you're ready.
            </p>
          </div>

          {/* Wishlist count */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center">
              <Heart size={18} className="text-pink-400 fill-pink-400" />
            </div>

            <div>
              <p className="text-lg font-bold">{wishListItems.length}</p>

              <p className="text-[10px] uppercase tracking-wider text-gray-600">
                Saved Items
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION TITLE ================= */}
      <div className="flex items-center justify-between mt-8 mb-5">
        <div>
          <h2 className="text-lg font-semibold">Your Favorites</h2>

          <p className="text-xs text-gray-600 mt-1">
            Products you've saved for later
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs text-gray-600">
          <Package size={14} />
          {wishListItems.length} products
        </div>
      </div>

      {/* ================= PRODUCT GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {wishListItems.map((product) => {
          const isAddedInCart = cartItems?.find((val) => val.id === product.id);

          return (
            <div
              key={product.id}
              className="group relative bg-[#0d0f12] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-pink-500/20 hover:-translate-y-1 transition-all duration-300"
            >
              {/* ================= IMAGE ================= */}
              <div className="relative h-60 bg-[#111318] overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                />

                {/* Wishlist badge */}
                <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-pink-500/10 border border-pink-400/20 backdrop-blur-md flex items-center justify-center">
                  <Heart size={15} className="text-pink-400 fill-pink-400" />
                </div>

                {/* Remove */}

                <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-gray-400 hover:text-red-400 hover:border-red-400/30 transition-all duration-300">
                  <Trash2 size={15} />
                </button>

                {/* Hover overlay */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* ================= CONTENT ================= */}
              <div className="p-5">
                {/* Category */}
                <p className="text-[10px] uppercase tracking-[0.15em] text-pink-400">
                  {product.brand || product.category}
                </p>

                {/* Title */}
                <h3 className="text-sm font-semibold text-white mt-1 truncate">
                  {product.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1.5 mt-3">
                  <Star size={13} className="text-yellow-400 fill-yellow-400" />

                  <span className="text-xs text-gray-400">
                    {product.rating}
                  </span>

                  <span className="text-[10px] text-gray-700">•</span>

                  <span className="text-[10px] text-gray-600">Saved</span>
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-5">
                  <div>
                    <p className="text-[10px] text-gray-600">Price</p>

                    <p className="text-lg font-bold mt-0.5">${product.price}</p>
                  </div>

                  {/* Add to cart */}
                  {isAddedInCart ? (
                    <div className="flex items-center bg-white/[0.04] border border-white/10 rounded-xl overflow-hidden">
                      <button
                        onClick={() => decrementQuantityFnc(product.id)}
                        className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5"
                      >
                        <Minus size={14} />
                      </button>

                      <span className="w-9 text-center text-sm font-semibold">
                        {isAddedInCart.quantity}
                      </span>

                      <button
                        onClick={() => incrementQuantityFnc(product.id)}
                        className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addTOCartFnc(product)}
                      className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center hover:bg-purple-500 hover:text-white transition-all duration-300"
                      title="Add to cart"
                    >
                      <ShoppingCart size={16} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WishlistPage;
