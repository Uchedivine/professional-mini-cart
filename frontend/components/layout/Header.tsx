"use client";

import { Search, Moon, Bell, Menu, ChevronDown } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header
      className="h-16 flex items-center justify-between px-6 border-b"
      style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E8F0" }}
    >
      {/* Left — Hamburger (mobile only) + Search */}
      <div className="flex items-center gap-4 flex-1">
        {/* Hamburger - mobile only */}
        <button
          onClick={onMenuClick}
          className="lg:hidden text-gray-500 hover:text-gray-700"
        >
          <Menu size={22} />
        </button>

        {/* Search bar */}
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-lg flex-1 max-w-sm"
          style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E8F0" }}
        >
          <Search size={16} style={{ color: "#9FA2B4" }} />
          <input
            type="text"
            placeholder="Search or type command"
            className="bg-transparent outline-none text-sm flex-1"
            style={{ color: "#190044" }}
          />
        </div>
      </div>

      {/* Right — Icons + User */}
      <div className="flex items-center gap-4 ml-4">
        {/* Moon icon */}
        <button
          className="p-2 border border-[#F3F4F6] rounded-full hover:bg-gray-50 transition-colors"
          style={{ color: "#374151" }}
        >
          <Moon size={20} />
        </button>

        {/* Bell icon */}
        <button
          className="relative p-2 border border-[#F3F4F6] rounded-full hover:bg-gray-50 transition-colors"
          style={{ color: "#374151" }}
        >
          <Bell size={20} />
          {/* Notification dot */}
          <span
            className="absolute top-0 right-0 w-3 h-3 rounded-full border-2 border-white"
            style={{ backgroundColor: "#F97316" }}
          />
        </button>

        {/* User */}
        <div className="flex items-center gap-3 cursor-pointer pl-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-[#F3F4F6]">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
              alt="Jane Austin"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <p
              className="text-sm font-bold text-[#111827]"
            >
              Jane Austin
            </p>
            <ChevronDown size={16} className="text-[#6B7280]" />
          </div>
        </div>
      </div>
    </header>
  );
}