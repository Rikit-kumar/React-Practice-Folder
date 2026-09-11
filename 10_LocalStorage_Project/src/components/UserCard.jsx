import React from "react";

const UserCard = ({ users, deleteUser, setToggle, setUpdateUser }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/30 bg-white/80 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
      {/* Top Gradient */}
      <div className="h-24 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600"></div>

      {/* Decorative Blur */}
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/20 blur-3xl"></div>

      <div className="relative px-6 pb-6">
        {/* Profile Image */}
        <div className="-mt-14 flex justify-center">
          <div className="rounded-full bg-white p-1 shadow-xl">
            <img
              src={users.imageUrl}
              alt={users.name}
              className="h-28 w-28 rounded-full border-4 border-indigo-500 object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Name */}
        <h2 className="mt-5 text-center text-2xl font-bold text-slate-800">
          {users.name}
        </h2>

        {/* Email */}
        <p className="mt-2 text-center text-sm text-slate-500 break-all">
          {users.email}
        </p>

        {/* Status */}
        <div className="mt-5 flex justify-center">
          <span className="rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold text-emerald-700">
            ● Active User
          </span>
        </div>

        <div className="my-6 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>

        <div className="flex gap-3">

          <button
            onClick={() => {
              setUpdateUser(users);
              setToggle((prev) => !prev);
            }}
            className="flex-1 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3 font-semibold text-white shadow-md transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            ✏️ Update
          </button>

          <button
            onClick={() => deleteUser(users.id)}
            className="flex-1 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 py-3 font-semibold text-white shadow-md transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            🗑 Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
