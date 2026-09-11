import React, { useContext, useEffect } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import ProductsCard from "./components/ProductsCard";
import { MyStore } from "./context/MyContext";

const App = () => {
  const { isCartOpen, setProducts, products, cartItem } = useContext(MyStore);

  const getProductData = async () => {
    try {
      const resp = await axios.get(`https://dummyjson.com/products?limit=50`);

      setProducts(resp.data.products);
    } catch (error) {
      console.log("Product API Error:", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      {isCartOpen ? (
        <CartPage />
      ) : (
        <main className="px-5 pb-20 pt-32 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            {/* Header */}
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
                  Explore Collection
                </p>

                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Discover Products
                </h1>

                <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
                  Find something you love from our carefully selected collection
                  of products.
                </p>
              </div>

              {/* Product Count */}
              <div className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400">
                <span className="h-2 w-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/70" />
                {products.length} Products
              </div>
            </div>

            {/* Products Grid */}
            {products.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => {
                  const isInCart = cartItem.find(
                    (val) => val.id === product.id,
                  );

                  return (
                    <ProductsCard
                      key={product.id}
                      product={product}
                      isInCart={isInCart}
                    />
                  );
                })}
              </div>
            ) : (
              /* Loading */
              <div className="flex min-h-[400px] items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-blue-500" />

                  <p className="text-sm text-gray-500">Loading products...</p>
                </div>
              </div>
            )}
          </div>
        </main>
      )}
    </div>
  );
};

export default App;
