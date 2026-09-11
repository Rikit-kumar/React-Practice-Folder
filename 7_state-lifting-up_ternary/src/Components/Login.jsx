import React from "react";

const Login = ({ setToggle }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 mt-2">
            Login to continue to your account
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email Address
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-gray-700"
              >
                Password
              </label>

              <button
                type="button"
                className="text-sm text-indigo-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-indigo-600" />
              Remember Me
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Don't have an account?{" "}
          <button
            onClick={() => setToggle((prev) => !prev)}
            type="button"
            className="text-indigo-600 font-semibold hover:underline cursor-pointer"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
