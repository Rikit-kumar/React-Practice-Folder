import React, { useContext, useEffect } from "react";
import { Users, Sparkles, UserRoundPlus, ArrowUpRight } from "lucide-react";
import { MyStore } from "../contextApi/AppContext";
import { getAllUsersData } from "../api/UserApi";
import UsersCard from "../components/UsersCard";

const UserPage = () => {
  const { setAllUserData, allUserData } = useContext(MyStore);

  useEffect(() => {
    const fetchUsersData = async () => {
      const apiUsers = await getAllUsersData();
      setAllUserData(apiUsers);
    };

    fetchUsersData();
  }, [setAllUserData]);

  // ================= LOADER =================
  if (allUserData.length === 0) {
    return (
      <div className="min-h-screen bg-[#08090b] flex items-center justify-center relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute w-72 h-72 bg-purple-600/10 blur-[100px] rounded-full top-1/3 left-1/2 -translate-x-1/2" />

        <div className="relative flex flex-col items-center">
          {/* Loader box */}
          <div className="relative w-20 h-20">
            {/* Glass background */}
            <div className="absolute inset-0 rounded-2xl border border-purple-500/20 bg-purple-500/5 backdrop-blur-xl" />

            {/* Spinning ring */}
            <div className="absolute inset-2 rounded-xl border border-purple-400/20 border-t-purple-400 animate-spin" />

            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles size={22} className="text-purple-400 animate-pulse" />
            </div>
          </div>

          <h2 className="mt-6 text-white font-semibold text-lg">
            Building your community
          </h2>

          <p className="text-gray-600 text-xs mt-2">
            Fetching user profiles...
          </p>

          {/* Loading dots */}
          <div className="flex gap-1.5 mt-5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" />

            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:150ms]" />

            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:300ms]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#08090b] text-white px-6 md:px-10 py-8">
      {/* ================= HEADER ================= */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0f12] p-7 md:p-9">
        {/* Purple glow */}
        <div className="absolute -right-20 -top-24 w-64 h-64 bg-purple-600/10 blur-[90px] rounded-full" />

        {/* Blue glow */}
        <div className="absolute -left-20 -bottom-32 w-60 h-60 bg-blue-600/10 blur-[90px] rounded-full" />

        <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-6">
          {/* Heading */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[11px] font-medium">
              <Sparkles size={13} />
              User Management
            </div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
              Explore Users
            </h1>

            <p className="text-gray-500 text-sm mt-2 max-w-xl leading-6">
              Manage and explore user profiles, accounts and community
              information from one place.
            </p>
          </div>

          {/* User count */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <Users size={18} className="text-purple-400" />
            </div>

            <div>
              <p className="text-lg font-bold">{allUserData.length}</p>

              <p className="text-[10px] uppercase tracking-wider text-gray-600">
                Total Users
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TOOLBAR ================= */}
      <div className="flex items-center justify-between mt-8 mb-5">
        <div>
          <h2 className="text-lg font-semibold">All Users</h2>

          <p className="text-xs text-gray-600 mt-1">
            Browse your community members
          </p>
        </div>

        <button className="hidden sm:flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors">
          Manage users
          <ArrowUpRight size={14} />
        </button>
      </div>

      {/* ================= USER GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {allUserData.map((val) => (
          <UsersCard key={val.id} user={val} />
        ))}
      </div>
    </div>
  );
};

export default UserPage;
