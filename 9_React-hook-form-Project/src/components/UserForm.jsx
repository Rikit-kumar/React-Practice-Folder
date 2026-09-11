import React, { useState } from "react";
import {useForm} from 'react-hook-form'

const UserForm = ({setUsers, setToggle}) => {

    const {register, reset, handleSubmit, formState:{errors}} =  useForm({
        mode : "onChange",
    });

    const onSubmitHandler = (data)=>{
        console.log(data);
        setUsers(prev => [...prev, data]);
        setToggle(prev => !prev);
        reset();
    }

  return (
    <div className="flex justify-center px-8 pb-12">
      <div className="w-full max-w-xl rounded-3xl border border-gray-100 bg-white p-10 shadow-2xl">
        {/* Heading */}

        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-3xl text-white shadow-lg">
            👤
          </div>

          <h1 className="text-3xl font-bold text-gray-900">Create User Card</h1>

          <p className="mt-2 text-gray-500">
            Fill in the details to create a beautiful user profile.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-6">
          {/* Name */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Full Name
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
                👤
              </span>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 outline-none transition-all duration-300 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                {...register('name',{
                    required: "* Name is Required",
                    minLength:{
                        value: 3,
                        message: "* Name must be at least 3 characters",
                    },
                    pattern:{
                        value: /^[A-Za-z\s]+$/,
                        message: "* Only letters and spaces are allowed",
                    }
                })}
              />
            </div>
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Image URL */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Image URL
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
                🖼️
              </span>

              <input
                type="text"
                placeholder="Paste image URL"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 outline-none transition-all duration-300 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                {...register('imageUrl',{
                    required: "* Image Url is Required"
                })}
              />
            </div>
            {errors.imageUrl && <p className="text-red-600 text-sm mt-1">{errors.imageUrl.message}</p>}
          </div>

          {/* Email */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email Address
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
                ✉️
              </span>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 outline-none transition-all duration-300 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                {...register('email',{
                    required: "* Email is Required",
                    pattern:{
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                        message: "* Enter a valid email"
                    }
                })}
              />
            </div>

            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Button */}

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95"
          >
            Create User Card
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
