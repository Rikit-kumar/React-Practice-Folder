import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  BriefcaseBusiness,
  GraduationCap,
  ArrowUpRight,
  ShieldCheck,
  MoreHorizontal,
} from "lucide-react";

const UsersCard = ({ user }) => {
  const {
    firstName,
    lastName,
    username,
    email,
    phone,
    image,
    role,
    company,
    address,
    university,
  } = user;

  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-[#0d0f12] border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1">
      {/* ================= TOP GLOW ================= */}
      <div className="absolute -top-24 -right-20 w-52 h-52 rounded-full bg-purple-600/10 blur-[80px] group-hover:bg-purple-600/20 transition-all duration-700" />

      <div className="absolute -bottom-24 -left-20 w-52 h-52 rounded-full bg-blue-600/10 blur-[80px] group-hover:bg-blue-600/15 transition-all duration-700" />

      {/* ================= HEADER ================= */}
      <div className="relative h-24 bg-gradient-to-br from-purple-500/[0.12] via-blue-500/[0.06] to-transparent border-b border-white/[0.06]">
        {/* Decorative circles */}
        <div className="absolute top-5 right-8 w-16 h-16 rounded-full border border-white/[0.04]" />

        <div className="absolute top-8 right-11 w-10 h-10 rounded-full border border-purple-400/[0.08]" />

        {/* Role */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-wider text-purple-300">
            <ShieldCheck size={12} />
            {role}
          </span>
        </div>

        {/* More */}
        <button className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-gray-500 hover:text-white transition-colors">
          <MoreHorizontal size={16} />
        </button>
      </div>

      {/* ================= PROFILE ================= */}
      <div className="relative px-5 pb-5">
        {/* Avatar */}
        <div className="-mt-10 mb-4">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 blur-md opacity-20 group-hover:opacity-40 transition-opacity" />

            <img
              src={image}
              alt={fullName}
              className="relative w-20 h-20 rounded-2xl object-cover border-4 border-[#0d0f12] shadow-xl"
            />

            {/* Online indicator */}
            <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-[3px] border-[#0d0f12]" />
          </div>
        </div>

        {/* Name */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
              {fullName}
            </h2>

            <p className="text-xs text-gray-600 mt-1">@{username}</p>
          </div>

          <button className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.07] flex items-center justify-center text-gray-500 hover:text-white hover:bg-purple-500/10 hover:border-purple-500/20 transition-all">
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* ================= CONTACT ================= */}
        <div className="space-y-2.5 mt-5">
          {/* Email */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.025] border border-white/[0.05]">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
              <Mail size={14} className="text-purple-400" />
            </div>

            <div className="min-w-0">
              <p className="text-[9px] uppercase tracking-wider text-gray-600">
                Email
              </p>

              <p className="text-xs text-gray-400 truncate mt-0.5">{email}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.025] border border-white/[0.05]">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
              <Phone size={14} className="text-blue-400" />
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-wider text-gray-600">
                Phone
              </p>

              <p className="text-xs text-gray-400 mt-0.5">{phone}</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06] my-5" />

        {/* ================= DETAILS ================= */}
        <div className="space-y-3">
          {/* Company */}
          <div className="flex items-start gap-3">
            <BriefcaseBusiness
              size={15}
              className="text-gray-600 mt-0.5 shrink-0"
            />

            <div className="min-w-0">
              <p className="text-[9px] uppercase tracking-wider text-gray-600">
                Works at
              </p>

              <p className="text-xs text-gray-400 truncate mt-0.5">
                {company?.name}
              </p>

              <p className="text-[10px] text-gray-600 mt-0.5">
                {company?.title}
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3">
            <MapPin size={15} className="text-gray-600 mt-0.5 shrink-0" />

            <div className="min-w-0">
              <p className="text-[9px] uppercase tracking-wider text-gray-600">
                Location
              </p>

              <p className="text-xs text-gray-400 truncate mt-0.5">
                {address?.city}, {address?.state}
              </p>
            </div>
          </div>

          {/* University */}
          <div className="flex items-start gap-3">
            <GraduationCap
              size={15}
              className="text-gray-600 mt-0.5 shrink-0"
            />

            <div className="min-w-0">
              <p className="text-[9px] uppercase tracking-wider text-gray-600">
                Education
              </p>

              <p className="text-xs text-gray-400 truncate mt-0.5">
                {university}
              </p>
            </div>
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/[0.06]">
          <span className="text-[10px] text-gray-600">
            {company?.department} Department
          </span>

          <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Active
          </span>
        </div>
      </div>
    </div>
  );
};

export default UsersCard;
