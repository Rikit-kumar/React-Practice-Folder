import React from "react";
import { ShoppingBag } from "lucide-react";
import { useContext } from "react";
import { MyStore } from "../context/MyCartContext";
import { toast } from "react-toastify";

const Cart = () => {
  const { cartItem, setIsCartOpen, setCartItem } = useContext(MyStore);

  const proceedToCheckOutFnc = () => {
    if (cartItem.length === 0) {
      toast.error("Cart has no Products");
      return;
    }

      toast.success("Order Placed Successfully");

      setCartItem([]);
      setIsCartOpen(false);
  };

  const subTotal = cartItem.reduce((total, val) => total + val.price, 0);
  const shipping = 0;
  const tax = subTotal * 0.08;
  const total = subTotal + tax + shipping;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-purple-100 pt-10 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[8px] text-violet-600">
            Shopping Cart
          </p>

          <h1 className="text-5xl font-bold text-gray-900">
            Your Selected Items
          </h1>

          <p className="mt-4 text-gray-500">
            Review your products before checkout.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          {/* LEFT */}

          <div className="space-y-6">
            {cartItem.map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl border border-white/50 bg-white/80 p-6 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex flex-col gap-6 md:flex-row">
                  {/* Image */}

                  <div className="flex h-44 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-violet-50 md:h-40 md:w-40">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-32 object-contain transition duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Details */}

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="mb-3 flex items-center justify-between">
                        <span className="rounded-full bg-violet-100 px-4 py-1 text-xs font-semibold capitalize text-violet-700">
                          {item.category}
                        </span>

                        <div className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                          ⭐ {item.rating?.rate || 4.5}
                        </div>
                      </div>

                      <h2 className="line-clamp-2 text-2xl font-bold text-gray-900">
                        {item.title}
                      </h2>

                      <p className="mt-3 line-clamp-2 text-gray-500">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom */}

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
                      {/* Quantity */}

                      <div className="flex items-center overflow-hidden rounded-xl border border-gray-200">
                        <button className="h-11 w-11 text-xl transition hover:bg-violet-50">
                          −
                        </button>

                        <span className="flex h-11 w-12 items-center justify-center font-semibold">
                          1
                        </span>

                        <button className="h-11 w-11 text-xl transition hover:bg-violet-50">
                          +
                        </button>
                      </div>

                      {/* Price */}

                      <div className="text-right">
                        <p className="text-sm text-gray-400">Price</p>

                        <h3 className="text-3xl font-bold text-violet-600">
                          ${item.price}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}

          <div>
            <div className="sticky top-28 rounded-3xl bg-white p-8 shadow-xl">
              <div className="mb-6 flex items-center gap-3">
                <ShoppingBag className="text-violet-600" />
                <h2 className="text-2xl font-bold">Order Summary</h2>
              </div>

              <div className="space-y-5">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subTotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">{shipping}</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <hr />

                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <button
                  onClick={() => proceedToCheckOutFnc()}
                  className="mt-6 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 py-4 font-semibold text-white transition hover:scale-[1.03]"
                >
                  Proceed to Checkout
                </button>

                <button onClick={()=> setIsCartOpen(false)} className="w-full rounded-2xl border py-4 font-semibold transition hover:bg-gray-100">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
