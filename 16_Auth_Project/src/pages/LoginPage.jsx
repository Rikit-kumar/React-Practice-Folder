import React, { useContext, useState } from "react";
import { Eye, EyeOff, LockKeyhole, Mail, ArrowRight } from "lucide-react";
import { NavLink } from "react-router";
import { AuthHook } from "../hooks/AuthHook";
import { MyStore } from "../contextApi/AppContext";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { register, reset, handleSubmit, loginHandleSubmit, errors } =
    AuthHook();

  return (
    <div className="min-h-screen bg-[#08090b] text-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] -top-20 -left-20"></div>

      <div className="absolute w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] -bottom-32 -right-32"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-md">
        <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/40 via-purple-500/20 to-blue-500/40 rounded-3xl blur-sm"></div>

        <div className="relative bg-[#101114]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl">
          {/* Logo */}
          <div className="flex justify-center mb-7">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <LockKeyhole size={22} />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Welcome Back
            </h1>

            <p className="text-gray-400 mt-2 text-sm">
              Login to continue to your account
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(loginHandleSubmit)}
            className="space-y-5"
          >
            {/* Email */}
            <div>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  {...register("email", {
                    required: "Email is Required",
                  })}
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-[#181a1f] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 outline-none text-sm placeholder:text-gray-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10 transition-all"
                />
              </div>
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  {...register("password", {
                    required: "password is Required",
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full bg-[#181a1f] border border-white/10 rounded-xl py-3.5 pl-11 pr-12 outline-none text-sm placeholder:text-gray-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10 transition-all"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="group mt-2 w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30"
            >
              Login
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-7">
            <div className="h-px bg-white/10 flex-1"></div>

            <span className="text-xs text-gray-500">OR</span>

            <div className="h-px bg-white/10 flex-1"></div>
          </div>

          {/* Register */}
          <p className="text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <NavLink
              to="/register"
              className="text-blue-400 font-medium hover:text-blue-300 transition-colors"
            >
              Create account
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
