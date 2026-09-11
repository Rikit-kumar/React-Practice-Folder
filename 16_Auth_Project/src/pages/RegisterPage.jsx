import React, { useState } from "react";
import { User, Mail, LockKeyhole, Eye, EyeOff, ArrowRight } from "lucide-react";
import { NavLink} from "react-router";
import { AuthHook } from "../hooks/AuthHook";


const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState();

  const {register, handleSubmit, registerHandleSubmit, reset, errors} = AuthHook();


  return (
    <div className="min-h-screen bg-[#08090b] text-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-80 h-80 bg-purple-600/20 rounded-full blur-[120px] -top-24 -right-20" />

      <div className="absolute w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] -bottom-32 -left-32" />

      {/* Register Card */}
      <div className="relative w-full max-w-md">
        {/* Gradient Border Glow */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/40 via-blue-500/20 to-purple-500/40 rounded-3xl blur-sm" />

        <div className="relative bg-[#101114]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl">
          {/* Logo */}
          <div className="flex justify-center mb-7">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <User size={22} />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Create Account
            </h1>

            <p className="text-gray-400 mt-2 text-sm">
              Join us and get started today
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(registerHandleSubmit)}
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  {...register("name", {
                    required: "User Name is Required",
                    minLength: {
                      value: 3,
                      message: "Minimum 3 character required",
                    },
                  })}
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-[#181a1f] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 outline-none text-sm placeholder:text-gray-600 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10 transition-all"
                />
              </div>
              {errors.name && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

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
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-[#181a1f] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 outline-none text-sm placeholder:text-gray-600 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10 transition-all"
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.email.message}
                </p>
              )}
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
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },

                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)\S+$/,
                      message: "Password must contain letters and numbers",
                    },
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="w-full bg-[#181a1f] border border-white/10 rounded-xl py-3.5 pl-11 pr-12 outline-none text-sm placeholder:text-gray-600 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10 transition-all"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {errors.password && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>


            {/* Register Button */}
            <button
              type="submit"
              className="group w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-purple-600/20 hover:shadow-purple-500/30"
            >
              Create Account
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-7">
            <div className="h-px bg-white/10 flex-1" />

            <span className="text-xs text-gray-500">OR</span>

            <div className="h-px bg-white/10 flex-1" />
          </div>

          {/* Login */}
          <p className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <NavLink
              to="/"
              className="text-purple-400 font-medium hover:text-purple-300 transition-colors"
            >
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
