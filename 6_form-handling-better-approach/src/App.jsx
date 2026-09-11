import React, { useState } from "react";

const App = () => {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  console.log(formData);

  // const formHandler = (e) => {
  //   setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }) ) ;
  // };

  const formHandler = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex gap-10 items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Fill in your details below
        </p>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Full Name
            </label>

            <input
              onChange={formHandler}
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email Address
            </label>

            <input
              onChange={formHandler}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              onChange={formHandler}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition duration-300 cursor-pointer"
          >
            Register
          </button>
        </form>
      </div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          User Details
        </h2>

        <div className="space-y-4">
          <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
            <span className="font-semibold text-gray-700">Name</span>
            <span className="text-gray-900">
              {formData.name || "Not Provided"}
            </span>
          </div>

          <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
            <span className="font-semibold text-gray-700">Email</span>
            <span className="text-gray-900">
              {formData.email || "Not Provided"}
            </span>
          </div>

          <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
            <span className="font-semibold text-gray-700">Password</span>
            <span className="text-gray-900">
              {formData.password || "Not Provided"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
