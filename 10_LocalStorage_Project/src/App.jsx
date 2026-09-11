import React, { use, useState } from "react";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import UserCard from "./components/UserCard";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState(()=>{
    return JSON.parse(localStorage.getItem('allUsers')) || [];
  });

  const [updateUser, setUpdateUser] = useState(null);

  const deleteUser = (id)=>{
    let filterUser = users.filter((val, index)=>{
      return val.id !== id;
    })

    setUsers(filterUser);
    localStorage.setItem('allUsers', JSON.stringify(filterUser));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-purple-100">
      <Navbar setUpdateUser={setUpdateUser} setToggle={setToggle} />

      <main className="mx-auto max-w-7xl px-6 py-10">
        {toggle ? (
          <>
            {/* Heading */}
            <div className="mb-10 text-center">
              <h1 className="text-4xl font-bold text-slate-800">
                User Directory
              </h1>

              <p className="mt-2 text-slate-500">
                Browse all created user cards.
              </p>
            </div>

            {/* Cards */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {users.map((user) => (
                <UserCard key={user.id} users={user} deleteUser={deleteUser} setUpdateUser={setUpdateUser} setToggle={setToggle}/>
              ))}
            </div>

            {/* Empty State */}
            {users.length === 0 && (
              <div className="mt-20 text-center">
                <h2 className="text-2xl font-semibold text-slate-700">
                  No Users Found
                </h2>

                <p className="mt-2 text-slate-500">
                  Create your first user card to get started.
                </p>
              </div>
            )}
          </>
        ) : (
          <UserForm users={users} setUsers={setUsers} setToggle={setToggle} updateUser={updateUser}/>
        )}
      </main>
    </div>
  );
};

export default App;
