import React, { useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {

  let [product, setProduct] = useState([
    {
      id: 1,
      name: "John Doe",
      title: "Wireless Headphones",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      category: "Electronics",
    },
    {
      id: 2,
      name: "Emma Watson",
      title: "Modern Chair",
      price: 4599,
      image:
        "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=500",
      category: "Furniture",
    },
    {
      id: 3,
      name: "Michael Smith",
      title: "Running Shoes",
      price: 3299,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      category: "Fashion",
    },
    {
      id: 4,
      name: "Sophia Brown",
      title: "Smart Watch",
      price: 6999,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      category: "Electronics",
    },
    {
      id: 5,
      name: "David Wilson",
      title: "Coffee Mug",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500",
      category: "Kitchen",
    },
    {
      id: 6,
      name: "Olivia Taylor",
      title: "Backpack",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500",
      category: "Accessories",
    },
    {
      id: 7,
      name: "James Anderson",
      title: "Gaming Keyboard",
      price: 2899,
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
      category: "Electronics",
    },
    {
      id: 8,
      name: "Ava Johnson",
      title: "Sunglasses",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
      category: "Fashion",
    },
    {
      id: 9,
      name: "William Harris",
      title: "DSLR Camera",
      price: 45999,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
      category: "Photography",
    },
    {
      id: 10,
      name: "Mia Davis",
      title: "Indoor Plant",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500",
      category: "Home Decor",
    },
  ]);

  const delFnc = (id)=>{
    let delProduct = product.filter((elem)=>elem.id !== id)
    setProduct(delProduct);
  }

  return (
    <main className="min-h-screen bg-slate-100 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="mb-10 text-center text-5xl font-extrabold text-gray-900">
          Our Products
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {product.map((product) => (
            <ProductCard key={product.id} product={product} del={delFnc} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
