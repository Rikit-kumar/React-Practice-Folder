import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="mt-16 w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300">
      {/* User Image */}
      <div className="h-56 overflow-hidden">
        <img
          src={user.imageUrl}
          alt={user.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* User Details */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {user.name}
        </h2>

        <p className="text-gray-500 mt-1">
          {user.email}
        </p>

        {/* <div className="mt-5 space-y-3">
          <div className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg">
            <span className="font-semibold text-gray-700">
              {user.password}
            </span>

            <span className="text-gray-600">
              {"•".repeat(user.password.length)}
            </span>
          </div>
        </div> */}

        {/* <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition cursor-pointer">
          View Profile
        </button> */}
      </div>
    </div>
  );
};

export default UserCard;