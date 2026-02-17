"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  DollarSign,
  MapPin,
  ClipboardList,
  Store,
  FileText,
  Image as ImageIcon,
  Users,
  Headphones,
  Settings,
  CreditCard,
  Mail,
  LogOut,
  ChevronDown,
  X,
} from "lucide-react";
import { useState } from "react";
import { NAV_ITEMS, SYSTEM_ITEMS } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  LayoutDashboard,
  DollarSign,
  MapPin,
  ClipboardList,
  Store,
  FileText,
  Image: ImageIcon,
  Users,
  HeadphonesIcon: Headphones,
  Settings,
  CreditCard,
  Mail,
  LogOut,
};

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) =>
      prev.includes(label)
        ? prev.filter((i) => i !== label)
        : [...prev, label]
    );
  };

  const activeStyle = {
    backgroundColor: "#190044",
    color: "#FFFFFF",
    borderRadius: "10px",
    padding: "16px 24px", // Increased horizontal padding for more space
  };

  const inactiveStyle = {
    backgroundColor: "transparent",
    color: "#190044",
    borderRadius: "10px",
    padding: "16px 24px", // Same padding structure for consistency
  };

  // Removed px-4 py-4 since we're using inline padding now
  const navItemClass =
    "flex items-center gap-4 text-sm font-medium w-full transition-all duration-150";

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-30 h-full flex flex-col bg-white
          sidebar-transition lg:relative lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        style={{
          width: "260px",
          borderRight: "1px solid #E8E8F0",
        }}
      >
        {/* Logo */}
        <div
          className="flex items-center justify-between px-6"
          style={{
            borderBottom: "1px solid #E8E8F0",
            minHeight: "72px",
          }}
        >
          <Link href="/dashboard">
            <img
              src="/minicartlogo.png"
              alt="MiniCart"
              style={{ height: "34px", width: "auto", objectFit: "contain" }}
            />
          </Link>
          <button onClick={onClose} className="lg:hidden" style={{ color: "#9FA2B4" }}>
            <X size={20} />
          </button>
        </div>

        {/* Nav content */}
        <div className="flex-1 overflow-y-auto" style={{ padding: "24px 16px" }}>

          {/* MENU label */}
          <p
            style={{
              color: "#9FA2B4",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              paddingLeft: "16px",
              marginBottom: "16px", // 2. INCREASED SPACE BELOW LABEL (was 8px)
            }}
          >
            Menu
          </p>

          {/* Menu items */}
          {/* 3. INCREASED GAP: Changed gap from 4px to 16px, and bottom margin to 40px */}
          <nav style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
            {NAV_ITEMS.map((item) => {
              const Icon = ICON_MAP[item.icon];
              const isActive = pathname === item.href;
              const isExpanded = openMenus.includes(item.label);

              return (
                <div key={item.label}>
                  {item.hasChildren ? (
                    <button
                      onClick={() => toggleMenu(item.label)}
                      className={navItemClass}
                      style={isActive ? activeStyle : inactiveStyle}
                      onMouseEnter={(e) => {
                        if (!isActive)
                          e.currentTarget.style.backgroundColor = "#F5F6FA";
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive)
                          e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      <div className="flex items-center gap-4 flex-1">
                        {Icon && <Icon size={20} strokeWidth={1.7} />}
                        <span>{item.label}</span>
                      </div>
                      <ChevronDown
                        size={16}
                        strokeWidth={1.7}
                        style={{
                          transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s",
                        }}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={navItemClass}
                      style={isActive ? activeStyle : inactiveStyle}
                      onMouseEnter={(e) => {
                        if (!isActive)
                          e.currentTarget.style.backgroundColor = "#F5F6FA";
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive)
                          e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      {Icon && <Icon size={20} strokeWidth={1.7} />}
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* SYSTEM label */}
          <p
            style={{
              color: "#9FA2B4",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              paddingLeft: "16px",
              marginBottom: "16px", // 4. INCREASED SPACE BELOW LABEL (was 8px)
            }}
          >
            System
          </p>

          {/* System items */}
          {/* 5. INCREASED GAP: Changed gap from 4px to 16px */}
          <nav style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {SYSTEM_ITEMS.map((item) => {
              const Icon = ICON_MAP[item.icon];
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={navItemClass}
                  style={isActive ? activeStyle : inactiveStyle}
                  onMouseEnter={(e) => {
                    if (!isActive)
                      e.currentTarget.style.backgroundColor = "#F5F6FA";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive)
                      e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {Icon && <Icon size={20} strokeWidth={1.7} />}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}