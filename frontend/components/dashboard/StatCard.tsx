"use client";

import { TrendingUp, TrendingDown, LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
}

export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
  iconColor,
  iconBg,
}: StatCardProps) {
  const isPositive = change >= 0;

  return (
    <div
      // 1. Removed p-2 from here
      className="rounded-[16px] flex flex-col justify-between bg-white h-full min-h-[180px]"
      style={{
        padding: "24px", // 2. Added forced padding here
        border: "1px solid #E8E8F0",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.02)",
      }}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-[15px] font-medium text-[#6B7280]">
            {title}
          </p>
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: iconBg }}
          >
            <Icon size={22} color={iconColor} strokeWidth={1.5} />
          </div>
        </div>

        <p className="text-[32px] font-bold text-[#111827] tracking-tight mb-6">
          {value}
        </p>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold"
          style={{
            backgroundColor: isPositive ? "#ECFDF5" : "#FEF2F2",
            color: isPositive ? "#10B981" : "#EF4444",
            border: `1px solid ${isPositive ? "#D1FAE5" : "#FEE2E2"}`,
          }}
        >
          {isPositive ? (
            <TrendingUp size={12} strokeWidth={2.5} />
          ) : (
            <TrendingDown size={12} strokeWidth={2.5} />
          )}
          <span>{isPositive ? "+" : ""}{change}%</span>
        </div>

        <span className="text-[12px] font-medium text-[#9CA3AF]">
          {isPositive ? "Increased" : "Decreased"} from last month
        </span>
      </div>
    </div>
  );
}