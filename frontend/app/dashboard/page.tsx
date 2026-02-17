"use client";

import { useEffect, useState } from "react";
import { DollarSign, Store, Users, GitBranch } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import ConversionChart from "@/components/dashboard/ConversionChart";
import MainLayout from "@/components/layout/MainLayout";

// Define the shape of our data
interface StatData {
  title: string;
  value: string;
  change: number;
  iconBg: string;
  iconColor: string;
}

/**
 * FIXED: This function must be defined outside the component 
 * to be accessible by the useEffect hook.
 */
async function fetchDashboardStats(): Promise<StatData[]> {
  return [
    {
      title: "Total Revenue",
      value: "5,424,326",
      change: 5,
      iconBg: "#EEF2FF", // Soft Blue
      iconColor: "#6366F1",
    },
    {
      title: "Total Stores",
      value: "5,424,326",
      change: 5,
      iconBg: "#FFF7ED", // Soft Orange
      iconColor: "#F97316",
    },
    {
      title: "Total Referrals",
      value: "5,424,326",
      change: 5,
      iconBg: "#FDF2F8", // Soft Pink
      iconColor: "#DB2777",
    },
    {
      title: "Total Users",
      value: "5,424,326",
      change: -5,
      iconBg: "#F5F3FF", // Soft Purple
      iconColor: "#8B5CF6",
    },
  ];
}

const STAT_ICONS = [DollarSign, Store, GitBranch, Users];

export default function DashboardPage() {
  const [stats, setStats] = useState<StatData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats().then((data) => {
      setStats(data);
      setLoading(false);
    });
  }, []);

  return (
    <MainLayout>
      {/* Outer Wrapper with explicit padding */}
      <div style={{ padding: "24px" }}>
        
        {/* Page Title Section */}
        <div style={{ marginBottom: "40px" }}>
          <h1
            className="text-3xl font-bold"
            style={{ color: "#190044", marginBottom: "4px" }}
          >
            Dashboard
          </h1>
          <div className="flex items-center text-xs font-semibold" style={{ color: "#9FA2B4" }}>
            <span>Home</span>
            <span className="mx-2" style={{ fontWeight: "bold" }}>›</span>
            <span style={{ color: "#E8345A" }}>Dashboard</span>
          </div>
        </div>

        {/* Stat Cards Grid - Uses standard Grid classes for layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {loading ? (
            [...Array(4)].map((_, i) => (
              <div 
                key={i} 
                className="h-40 animate-pulse bg-gray-50 rounded-2xl" 
                style={{ border: "1px solid #E8E8F0" }}
              />
            ))
          ) : (
            stats.map((stat, index) => (
              <StatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                change={stat.change}
                icon={STAT_ICONS[index]}
                iconBg={stat.iconBg}
                iconColor={stat.iconColor}
              />
            ))
          )}
        </div>

        {/* Spacing Wrapper for Conversion Chart */}
        <div style={{ marginTop: "48px" }}>
          <ConversionChart />
        </div>

      </div>
    </MainLayout>
  );
}