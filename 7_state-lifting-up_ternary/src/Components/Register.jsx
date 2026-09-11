import React, { useState } from "react";

const Register = ({ setToggle, setUsers }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    imageUrl: "",
  });

//   const [users, setUsers] = useState([]);

  const handleInpChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prev) => [...prev, formData]);
    setFormData({
      name: "",
      email: "",
      password: "",
      imageUrl: "",
    });
  };

  return (
    <div className="min-h-screen  from-indigo-100 via-white to-purple-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
          <p className="text-gray-500 mt-2">Join us by creating your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              {" "}
              Full Name{" "}
            </label>

            <input
              onChange={handleInpChange}
              value={formData.name}
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              {" "}
              Email Address{" "}
            </label>

            <input
              onChange={handleInpChange}
              value={formData.email}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              {" "}
              Password{" "}
            </label>

            <input
              onChange={handleInpChange}
              value={formData.password}
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition"
            />
          </div>

          <div>
            <label
              htmlFor="imageUrl"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              {" "}
              Image URL{" "}
            </label>

            <input
              onChange={handleInpChange}
              value={formData.imageUrl}
              type="url"
              id="imageUrl"
              name="imageUrl"
              placeholder="Enter Image URL"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition"
            />
          </div>

          {/* Register Button */}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition duration-300 cursor-pointer"
          >
            {" "}
            Create Account{" "}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Already have an account?{" "}
          <button
            onClick={() => setToggle((prev) => !prev)}
            type="button"
            className="text-indigo-600 font-semibold hover:underline cursor-pointer"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
