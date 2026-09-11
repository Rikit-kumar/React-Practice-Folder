import React, { useState } from "react";
import Register from "./Components/register";
import Login from "./Components/Login";
import UserCard from "./Components/UserCard";

const App = () => {
  const [toogle, setToggle] = useState(true);
  const [users, setUsers] = useState([]);

  return (
    <div>
      
      {/* {toogle ? (
        <Register setToggle={setToggle}  />
      ) : (
        <Login setToggle={setToggle} />
      )} */}

      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto p-8">
          <h1 className="text-4xl font-bold text-center mb-10 text-indigo-600">
            User Registration
          </h1>

          <div className="grid lg:grid-cols-[420px_1fr] gap-10">

            <div>
              <Register setToggle={setToggle} setUsers={setUsers} />
            </div>


            <div>
              {/* <h2 className="text-2xl font-semibold mb-6">Registered Users</h2> */}

              {users.length === 0 ? (
                <div className="bg-white rounded-xl shadow-md p-10 text-center text-gray-500">
                  No users registered yet.
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {users.map((user, index) => (
                    <UserCard key={index} user={user} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
