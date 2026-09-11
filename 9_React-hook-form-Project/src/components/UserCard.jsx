import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="group w-full overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {" "}
      {/* Cover */}
      <div className="relative h-28 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600">
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
          <div className="rounded-full bg-white p-1 shadow-lg">
            <img
              src={user.imageUrl}
              alt={user.name}
              className="h-24 w-24 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="px-6 pb-6 pt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>

        <p className="mt-2 text-sm text-gray-500 break-all">{user.email}</p>

        {/* Status */}

        <div className="mt-4 flex justify-center">
          <span className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
            Active User
          </span>
        </div>

        {/* Buttons */}

        <div className="mt-6 flex gap-3">
          <button className="flex-1 rounded-xl border border-indigo-600 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-600 hover:text-white">
            Edit
          </button>

          <button className="flex-1 rounded-xl bg-gradient-to-r from-red-500 to-rose-500 py-3 font-semibold text-white shadow-lg transition hover:scale-105">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
