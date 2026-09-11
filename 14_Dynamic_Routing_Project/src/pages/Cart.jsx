import React, { useContext } from "react";
import {
  Minus,
  Plus,
  Trash2,
  ArrowLeft,
  ShoppingBag,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { MyApp } from "../contextApi/AppContext";
import { toast } from "react-toastify";

const Cart = () => {
       
  const { cartItems, setCartItems, incrementQuantity, decrementQuantity, deleteProductsFromCart} = useContext(MyApp);

  const subtotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const totalItems = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  let navigate = useNavigate();
  const proceedTOCheckoutFnc = ()=>{
    setCartItems([]);
    toast.success('Order Placed Successfully');
    navigate('/');
  }

  return (
    <main className="min-h-screen bg-[#101210] px-5 pb-24 pt-40 text-[#F4EDE1] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#D8B47A]">
            Your Selection
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Shopping Cart
          </h1>

          <p className="mt-4 text-[#85877F]">
            {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          /* ================= EMPTY CART ================= */
          <div className="flex min-h-[450px] flex-col items-center justify-center rounded-[30px] border border-white/10 bg-[#171A17] px-6 text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#D8B47A]/20 bg-[#D8B47A]/10">
              <ShoppingBag
                size={32}
                className="text-[#D8B47A]"
                strokeWidth={1.5}
              />
            </div>

            <h2 className="text-2xl font-semibold text-[#F4EDE1]">
              Your cart is empty
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-[#85877F]">
              Looks like you haven't added anything to your cart yet. Explore
              our collection and find something you love.
            </p>

            <NavLink
              to="/products"
              className="mt-7 flex items-center gap-2 rounded-full bg-[#D8B47A] px-6 py-3 text-sm font-semibold text-[#101210] transition-all duration-300 hover:bg-[#E5C48E] hover:shadow-lg hover:shadow-[#D8B47A]/10"
            >
              Explore Products
              <ArrowLeft size={16} className="rotate-180" />
            </NavLink>
          </div>
        ) : (
          /* ================= CART CONTENT ================= */
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
            {/* ================= PRODUCTS ================= */}
            <div className="space-y-4">
              {cartItems.map((item) => {
                const itemTotal = item.price * item.quantity;

                return (
                  <div
                    key={item.id}
                    className="group flex gap-5 rounded-[26px] border border-white/10 bg-[#171A17] p-4 transition-all duration-300 hover:border-[#D8B47A]/30 hover:bg-[#1A1D1A]"
                  >
                    {/* Product Image */}
                    <div className="h-32 w-32 shrink-0 overflow-hidden rounded-[18px] bg-[#20231F] sm:h-40 sm:w-40">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D8B47A]">
                              {item.brand}
                            </p>

                            <h3 className="mt-1 line-clamp-1 text-lg font-semibold text-[#F4EDE1] sm:text-xl">
                              {item.title}
                            </h3>
                          </div>

                          <button onClick={()=> deleteProductsFromCart(item.id)} className="shrink-0 text-[#666960] transition-colors duration-300 hover:text-red-400">
                            <Trash2 size={18} strokeWidth={1.7} />
                          </button>
                        </div>

                        <p className="mt-2 text-sm text-[#85877F]">
                          ${item.price.toFixed(2)} per item
                        </p>
                      </div>

                      {/* Bottom */}
                      <div className="mt-4 flex items-center justify-between">
                        {/* Quantity */}
                        <div className="flex items-center rounded-full border border-white/10 bg-[#101210]">
                          <button onClick={()=> decrementQuantity(item.id)} className="flex h-9 w-9 items-center justify-center text-[#A7A39A] transition-colors hover:text-[#D8B47A]">
                            <Minus size={14} />
                          </button>

                          <span className="w-8 text-center text-sm font-semibold text-[#F4EDE1]">
                            {item.quantity}
                          </span>

                          <button onClick={()=> incrementQuantity(item.id)} className="flex h-9 w-9 items-center justify-center text-[#A7A39A] transition-colors hover:text-[#D8B47A]">
                            <Plus size={14} />
                          </button>
                        </div>

                        {/* Item Total */}
                        <span className="text-lg font-semibold text-[#F4EDE1]">
                          ${itemTotal.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Continue Shopping */}
              <NavLink
                to="/products"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#A7A39A] transition-colors hover:text-[#D8B47A]"
              >
                <ArrowLeft size={16} />
                Continue Shopping
              </NavLink>
            </div>

            {/* ================= ORDER SUMMARY ================= */}
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <div className="rounded-[28px] border border-white/10 bg-[#171A17] p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B47A]">
                  Order Summary
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-[#F4EDE1]">
                  Your Order
                </h2>

                {/* Price */}
                <div className="mt-8 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#85877F]">Subtotal</span>

                    <span className="text-[#F4EDE1]">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-[#85877F]">Shipping</span>

                    <span className="text-[#8EAF91]">Free</span>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div className="flex items-end justify-between">
                    <span className="text-sm text-[#85877F]">Total</span>

                    <span className="text-3xl font-semibold tracking-tight text-[#D8B47A]">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Checkout */}
                <button onClick={()=> proceedTOCheckoutFnc()} className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#D8B47A] py-4 text-sm font-bold text-[#101210] transition-all duration-300 hover:bg-[#E5C48E] hover:shadow-xl hover:shadow-[#D8B47A]/10">
                  Proceed to Checkout
                  <ArrowLeft size={16} className="rotate-180" />
                </button>

                {/* Benefits */}
                <div className="mt-7 space-y-4 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3">
                    <Truck size={18} className="text-[#D8B47A]" />
                    <span className="text-xs text-[#85877F]">
                      Free shipping on your order
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <ShieldCheck size={18} className="text-[#D8B47A]" />
                    <span className="text-xs text-[#85877F]">
                      Secure & protected checkout
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
