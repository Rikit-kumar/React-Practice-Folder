import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";
import { toast } from "react-toastify";

const Cart = () => {
  const { cartItem, setCartItem, setIsCartOpen, incrementQuantity, decrementQuantity, removeCartItem } = useContext(MyStore);

  const proceedFnc = ()=>{

    if(cartItem.length <= 0){
      toast.error('Cart is Empty')
    }else{
      toast.success('Order Placed Successfully');
      setIsCartOpen(false);
      setCartItem([]);
    }

  }



  return (
    <main className="min-h-screen bg-[#050505] px-5 pb-20 pt-32 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            Your Collection
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl">
            Shopping Cart
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            {cartItem.length} items in your cart
          </p>
        </div>

        {/* Cart Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">

          {/* Cart Items */}
          <div className="space-y-4">

            {cartItem.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-blue-500/20 sm:flex-row sm:items-center"
              >

                {/* Product Image */}
                <div className="h-28 w-full shrink-0 overflow-hidden rounded-xl bg-[#111] sm:h-28 sm:w-28">
                  <img
                    src={item.thumbnail || item.images?.[0]}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Product Info */}
                <div className="min-w-0 flex-1">

                  <p className="text-xs uppercase tracking-wider text-blue-500">
                    {item.category}
                  </p>

                  <h2 className="mt-1 truncate text-lg font-semibold text-white">
                    {item.title}
                  </h2>

                  <p className="mt-1 line-clamp-1 text-sm text-gray-500">
                    {item.description}
                  </p>

                  {/* Quantity UI only */}
                  <div className="mt-4 flex w-fit items-center overflow-hidden rounded-lg border border-white/10">

                    <button onClick={()=> decrementQuantity(item.id)} className="px-3 py-1.5 text-gray-400 transition-colors hover:bg-red-500/10 hover:text-red-400">
                      −
                    </button>

                    <span className="min-w-10 border-x border-white/10 px-3 py-1.5 text-center text-sm text-white">
                      {item.quantity}
                    </span>

                    <button onClick={()=> incrementQuantity(item.id)} className="px-3 py-1.5 text-gray-400 transition-colors hover:bg-blue-500/10 hover:text-blue-400">
                      +
                    </button>

                  </div>
                </div>

                {/* Price + Remove */}
                <div className="flex items-center justify-between gap-5 sm:flex-col sm:items-end">

                  <p className="text-lg font-bold text-white">
                    ${item.price}
                  </p>

                  <button onClick={()=> removeCartItem(item.id)} className="text-xs text-gray-500 transition-colors hover:text-red-400">
                    Remove
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-3xl border border-white/10 bg-white/[0.03] p-6 lg:sticky lg:top-28">

            <h2 className="text-xl font-semibold">
              Order Summary
            </h2>

            <div className="my-6 h-px bg-white/10" />

            <div className="space-y-4 text-sm">

              <div className="flex justify-between text-gray-500">
                <span>Items</span>

                <span className="text-gray-300">
                  {cartItem.length}
                </span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>

                <span className="text-gray-300">
                  $
                  {cartItem
                    .reduce((total, item) => total + item.price * item.quantity, 0)
                    .toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Shipping</span>

                <span className="text-green-400">
                  Free
                </span>
              </div>

            </div>

            <div className="my-6 h-px bg-white/10" />

            <div className="flex items-center justify-between">

              <span className="font-medium text-gray-400">
                Total
              </span>

              <span className="text-2xl font-bold text-white">
                $
                {cartItem
                  .reduce((total, item) => total + item.price * item.quantity, 0)
                  .toFixed(2)}
              </span>

            </div>

            <button onClick={()=> proceedFnc()} className="mt-6 w-full rounded-xl bg-white py-3.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/25">
              Proceed to Checkout →
            </button>

          </div>

        </div>
      </div>
    </main>
  );
};

export default Cart;

