import React, { useRef } from "react";

const Form = () => {

  // console.log("app re render")

  const formRef = useRef({});
  const formElem = useRef();

  
  const handleSubmit = (e)=>{
    e.preventDefault();

    // console.log(formRef.current);
    // console.log(formElem);

    console.log(formRef.current.productName.value);
    console.log(formRef.current.price.value);
    console.log(formRef.current.imageUrl.value);

    formElem.current.reset();
  }


  return (
    <div className="min-h-screen  w-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <form ref={formElem} onSubmit={handleSubmit} className="w-[420px] bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-5">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Add Product
        </h1>

        <p className="text-center text-gray-500">
          Fill in the product details below
        </p>

        <input ref={(e) => formRef.current.productName = e}
          type="text"
          placeholder="Enter Product Name"
          className="w-full border border-gray-300 rounded-xl p-3 text-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition"
        />

        <input ref={(e) => formRef.current.price = e}
          type="number"
          placeholder="Enter Price"
          className="w-full border border-gray-300 rounded-xl p-3 text-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition"
        />

        <input ref={(e) => formRef.current.imageUrl = e}
          type="url"
          placeholder="Product Image URL"
          className="w-full border border-gray-300 rounded-xl p-3 text-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition"
        />

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-3 rounded-xl transition duration-300 cursor-pointer active:scale-95">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Form;
