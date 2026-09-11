import React, { useContext, useEffect } from "react";
import { getAllProductsData } from "../api/ProductsApi";
import { MyApp } from "../contextApi/AppContext";
import ProductsCard from "../components/ProductsCard";

const Products = () => {
  const { setAllProducts, allProducts, cartItems } = useContext(MyApp);

  useEffect(() => {
    const fetchProductsData = async () => {
      const apiProducts = await getAllProductsData();
      setAllProducts(apiProducts);
    };

    fetchProductsData();
  }, []);

  return (
    <main className="min-h-screen bg-[#101210] px-5 pb-24 pt-36 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D8B47A]">
              Our Collection
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-[#F4EDE1] sm:text-5xl lg:text-6xl">
              Explore our <span className="text-[#D8B47A]">products.</span>
            </h1>

            <p className="mt-5 max-w-xl text-[16px] leading-7 text-[#A7A39A]">
              Discover thoughtfully selected products designed to bring quality,
              simplicity and style into your everyday life.
            </p>
          </div>

          {/* Product Count */}
          <div className="flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3">
            <span className="h-2 w-2 rounded-full bg-[#D8B47A]" />

            <span className="text-sm font-medium text-[#A7A39A]">
              {allProducts.length} Products
            </span>
          </div>
        </div>

        {/* ================= PRODUCT GRID ================= */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">


          {allProducts.map((val) => {
          const isInCart = cartItems.find((item)=>{
            return item.id === val.id;
          })
            return <ProductsCard key={val.id} product={val} isInCart={isInCart}/>;
          })}
        </div>
      </div>
    </main>
  );
};

export default Products;
