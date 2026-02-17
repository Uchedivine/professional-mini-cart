"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { MoreVertical } from "lucide-react";

const chartData = [
  { month: "Jan", Revenue: 200, Stores: 150, Referrals: 100, Users: 120 },
  { month: "Feb", Revenue: 380, Stores: 280, Referrals: 200, Users: 220 },
  { month: "Mar", Revenue: 250, Stores: 180, Referrals: 140, Users: 160 },
  { month: "Apr", Revenue: 320, Stores: 220, Referrals: 180, Users: 200 },
  { month: "May", Revenue: 100, Stores: 80, Referrals: 60, Users: 70 },
  { month: "Jun", Revenue: 180, Stores: 140, Referrals: 100, Users: 120 },
  { month: "Jul", Revenue: 280, Stores: 200, Referrals: 150, Users: 170 },
  { month: "Aug", Revenue: 210, Stores: 160, Referrals: 120, Users: 140 },
  { month: "Sep", Revenue: 350, Stores: 250, Referrals: 190, Users: 210 },
  { month: "Oct", Revenue: 260, Stores: 190, Referrals: 150, Users: 170 },
  { month: "Nov", Revenue: 220, Stores: 160, Referrals: 130, Users: 140 },
  { month: "Dec", Revenue: 300, Stores: 210, Referrals: 170, Users: 190 },
];

export default function ConversionChart() {
  return (
    <div
      className="rounded-xl bg-white"
      style={{
        padding: "24px", // Forced padding for the whole card
        border: "1px solid #E8E8F0",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.02)",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-[#111827]">
          Conversion Funnel
        </h2>
        <button className="p-1.5 text-gray-400 hover:bg-gray-50 rounded-lg transition-colors">
          <MoreVertical size={20} />
        </button>
      </div>

      {/* Custom Legend */}
      <div className="flex items-center gap-6 mb-8 pl-1">
        {[
          { label: "Revenue", color: "#E8345A" },
          { label: "Stores", color: "#FEE2E2" },
          { label: "Referrals", color: "#FEE2E2" },
          { label: "Users", color: "#FEE2E2" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm font-medium text-gray-500">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div style={{ width: '100%', height: 340 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 0, right: 0, left: -25, bottom: 0 }}
            barSize={12}
            barGap={0}
          >
            <CartesianGrid
              vertical={false}
              stroke="#F3F4F6"
              strokeDasharray="0"
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 13, fontWeight: 500 }}
              dy={15}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 13, fontWeight: 500 }}
              domain={[0, 400]}
              ticks={[0, 100, 200, 300, 400]}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
              }}
            />
            <Bar
              dataKey="Revenue"
              fill="#E8345A"
              radius={[20, 20, 20, 20]}
            />
            <Bar dataKey="Stores" hide />
            <Bar dataKey="Referrals" hide />
            <Bar dataKey="Users" hide />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}