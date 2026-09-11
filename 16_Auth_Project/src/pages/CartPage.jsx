import React, { useContext } from "react";
import {
  ShoppingCart,
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  Sparkles,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";
import { MyStore } from "../contextApi/AppContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const CartPage = () => {
  const { cartItems, setCartItems, incrementQuantityFnc, decrementQuantityFnc } = useContext(MyStore);

  const totalItems = cartItems?.reduce(
    (total, item) => total + (item.quantity || 1),
    0,
  );

  const subtotal = cartItems?.reduce((total, item) => total + item.price * (item.quantity || 1),0,);

  const shipping = subtotal > 0 ? 1.99 : 0;

  const total = subtotal + shipping;

  const navigate = useNavigate();
  const proceedToCheckOutFnc = ()=>{
    setCartItems([]);
    navigate('/main')
    toast.success('Order Placed Successfully');
  }

  // ================= EMPTY CART =================
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#08090b] text-white flex items-center justify-center px-6 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-purple-600/10 blur-[120px] rounded-full" />

        <div className="relative text-center max-w-md">
          <div className="mx-auto w-20 h-20 rounded-3xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
            <ShoppingCart size={30} className="text-purple-400" />
          </div>

          <h1 className="text-2xl font-bold mt-6">Your cart is empty</h1>

          <p className="text-sm text-gray-500 mt-2 leading-6">
            Looks like you haven't added anything to your cart yet. Explore our
            collection and find something you love.
          </p>

          <button onClick={()=> navigate('/main/products')} className="mt-7 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
            Explore Products
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#08090b] text-white px-6 md:px-10 py-8">
      {/* ================= HEADER ================= */}
      <section className="relative overflow-hidden rounded-3xl bg-[#0d0f12] border border-white/10 p-7 md:p-9">
        {/* Glows */}
        <div className="absolute -top-24 -right-20 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />

        <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[11px] font-medium">
              <Sparkles size={13} />
              Your Collection
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mt-4">
              Shopping Cart
            </h1>

            <p className="text-sm text-gray-500 mt-2">
              Review your selected products before checkout.
            </p>
          </div>

          {/* Cart Count */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <ShoppingCart size={18} className="text-purple-400" />
            </div>

            <div>
              <p className="text-lg font-bold">{totalItems}</p>

              <p className="text-[10px] uppercase tracking-wider text-gray-600">
                Items
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CART CONTENT ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6 mt-8">
        {/* ================= PRODUCTS ================= */}
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#0d0f12] border border-white/[0.07] rounded-2xl p-4 md:p-5 hover:border-purple-500/20 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row gap-5">
                {/* Product Image */}
                <div className="w-full sm:w-32 h-32 rounded-2xl bg-[#121419] border border-white/[0.06] overflow-hidden shrink-0">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-purple-400">
                        {item.brand || item.category}
                      </p>

                      <h2 className="text-base md:text-lg font-semibold mt-1 truncate">
                        {item.title}
                      </h2>

                      <p className="text-xs text-gray-600 mt-1">
                        Product ID #{item.id}
                      </p>
                    </div>

                    {/* Delete */}
                    <button className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-gray-600 hover:text-red-400 hover:bg-red-500/[0.06] hover:border-red-500/20 transition-all">
                      <Trash2 size={16} />
                    </button>
                  </div>

                  {/* Bottom */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                    {/* Quantity */}
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase tracking-wider text-gray-600 mr-1">
                        Quantity
                      </span>

                      <div className="flex items-center bg-white/[0.03] border border-white/[0.07] rounded-xl overflow-hidden">
                        <button onClick={()=> decrementQuantityFnc(item.id)} className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.05] transition-all">
                          <Minus size={14} />
                        </button>

                        <span className="w-9 text-center text-sm font-semibold">
                          {item.quantity || 1}
                        </span>

                        <button onClick={()=> incrementQuantityFnc(item.id)} className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.05] transition-all">
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="text-[10px] text-gray-600">
                        {item.quantity || 1} × ${item.price}
                      </p>

                      <p className="text-lg font-bold text-white mt-0.5">
                        ${(item.price * (item.quantity || 1)).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= ORDER SUMMARY ================= */}
        <aside className="h-fit sticky top-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#0d0f12] border border-white/10 p-6">
            {/* Glow */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-purple-600/10 blur-[80px] rounded-full" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Order Summary</h2>

                <PackageCheck size={19} className="text-purple-400" />
              </div>

              {/* Price */}
              <div className="space-y-4 mt-7">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>

                  <span className="text-gray-300">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Shipping</span>

                  <span className="text-gray-300">${shipping.toFixed(2)}</span>
                </div>

                <div className="h-px bg-white/[0.07]" />

                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-gray-600">Total</p>

                    <p className="text-2xl font-bold mt-1">
                      ${total.toFixed(2)}
                    </p>
                  </div>

                  <span className="text-[10px] text-emerald-400">
                    Inclusive
                  </span>
                </div>
              </div>

              {/* Checkout */}
              <button onClick={()=> proceedToCheckOutFnc()} className="w-full mt-7 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 hover:scale-[1.01] transition-all duration-300">
                Proceed to Checkout
                <ArrowRight size={16} />
              </button>

              {/* Secure */}
              <div className="flex items-center justify-center gap-2 mt-5 text-[10px] text-gray-600">
                <ShieldCheck size={14} className="text-emerald-500" />
                Secure checkout & protected payment
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="rounded-2xl bg-[#0d0f12] border border-white/[0.07] p-4">
              <p className="text-xs font-medium">Fast Delivery</p>

              <p className="text-[10px] text-gray-600 mt-1">Quick shipping</p>
            </div>

            <div className="rounded-2xl bg-[#0d0f12] border border-white/[0.07] p-4">
              <p className="text-xs font-medium">Secure</p>

              <p className="text-[10px] text-gray-600 mt-1">Safe checkout</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CartPage;
