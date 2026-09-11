import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const UserForm = ({ setUsers, setToggle, users, updateUser }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: updateUser,
  });

  const onSubmitHandle = (data) => {
    if (updateUser) {
      const updatedUsers = users.map((user) =>
        user.id === updateUser.id ? { ...user, ...data } : user,
      );
      
      setUsers(updatedUsers);
      localStorage.setItem("allUsers", JSON.stringify(updatedUsers));
    } else {
      const updatedUsers = [...users, { ...data, id: nanoid() }];

      setUsers(updatedUsers);
      localStorage.setItem("allUsers", JSON.stringify(updatedUsers));
    }

    reset();
    setToggle((prev) => !prev);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-purple-100 py-16 px-4">
      <div className="mx-auto max-w-lg">
        <div className="rounded-3xl border border-white/40 bg-white/70 p-8 shadow-2xl backdrop-blur-xl">
          {/* Heading */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-slate-800">
              Create User Card
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Fill in the details below to generate a new user profile.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmitHandle)} className="space-y-6">
            {/* Name */}
            <div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200"
                  {...register("name", {
                    required: "Name is Required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: "Only letters and spaces are allowed",
                    },
                  })}
                />
              </div>
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200"
                  {...register("email", {
                    required: "Email is Required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Image URL */}
            <div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Image URL
                </label>

                <input
                  type="url"
                  placeholder="Paste profile image URL"
                  className="w-full rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200"
                  {...register("imageUrl", {
                    required: "Image url is Required",
                  })}
                />
              </div>
              {errors.imageUrl && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.imageUrl.message}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="relative z-10">Create User Card</span>

              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserForm;
