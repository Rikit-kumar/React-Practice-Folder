import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import UserCard from "./components/UserCard";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-indigo-50">
      <Navbar setToggle={setToggle} />

      <main className="mx-auto max-w-7xl px-6 py-10">
        {toggle ? (
          <>
            {/* Header */}

            <div className="mb-10 flex flex-col items-center justify-between gap-4 md:flex-row">
              <div>
                <h1 className="text-4xl font-bold text-gray-900">
                  User Dashboard
                </h1>

                <p className="mt-2 text-gray-500">
                  Manage and organize your user cards effortlessly.
                </p>
              </div>

              <div className="rounded-2xl bg-white px-6 py-4 shadow-lg">
                <p className="text-sm text-gray-500">Total Users</p>

                <h2 className="text-3xl font-bold text-indigo-600">
                  {users.length}
                </h2>
              </div>
            </div>

            {/* Empty State */}

            {users.length === 0 ? (
              <div className="flex h-[55vh] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 bg-white shadow-md">
                <div className="mb-5 text-7xl">👥</div>

                <h2 className="text-2xl font-bold text-gray-800">
                  No Users Yet
                </h2>

                <p className="mt-2 text-center text-gray-500">
                  Click the{" "}
                  <span className="font-semibold">Create User Card</span> button
                  to add your first user.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {users.map((user) => (
                  <UserCard key={user.email} user={user} />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center justify-center">
            <UserForm setUsers={setUsers} setToggle={setToggle} />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
