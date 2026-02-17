"use client";

import { useState } from "react";
import { DollarSign, RefreshCcw, GitBranch, MoreVertical, Search, ChevronDown } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import StatCard from "@/components/dashboard/StatCard";

const ALL_TRANSACTIONS = [
  { id: 1, type: "Subscription", store: "Luisa Via Roma", country: "Kuwait", value: "$16,500.00", status: "Completed" },
  { id: 2, type: "Referral", store: "Revolve", country: "Kazakhstan", value: "$1,878.50", status: "Pending" },
  { id: 3, type: "Subscription", store: "Marks and Spencer", country: "Korea, South", value: "$102.00", status: "Refunded" },
  { id: 4, type: "Subscription", store: "MyTheresa", country: "Indonesia", value: "$15,000,000.00", status: "Canceled" },
  { id: 5, type: "Referral", store: "Coggles", country: "Italy", value: "$96.00", status: "Completed" },
  { id: 6, type: "Referral", store: "Amazon Fashion", country: "Japan", value: "$349.00", status: "Completed" },
  { id: 7, type: "Subscription", store: "Boohoo", country: "Honduras", value: "$680.00", status: "Completed" },
  { id: 8, type: "Subscription", store: "Rag and Bone", country: "Haiti", value: "$120,000.00", status: "Completed" },
  { id: 9, type: "Referral", store: "Net-A-Porter", country: "France", value: "$4,200.00", status: "Completed" },
  { id: 10, type: "Subscription", store: "ASOS", country: "UK", value: "$890.00", status: "Pending" },
  { id: 11, type: "Referral", store: "Farfetch", country: "Germany", value: "$2,300.00", status: "Completed" },
  { id: 12, type: "Subscription", store: "Zara", country: "Spain", value: "$450.00", status: "Refunded" },
  { id: 13, type: "Referral", store: "H&M", country: "Sweden", value: "$1,200.00", status: "Completed" },
  { id: 14, type: "Subscription", store: "Gucci", country: "Italy", value: "$25,000.00", status: "Completed" },
  { id: 15, type: "Referral", store: "Prada", country: "Italy", value: "$8,900.00", status: "Canceled" },
  { id: 16, type: "Subscription", store: "Burberry", country: "UK", value: "$3,400.00", status: "Completed" },
];

const STATUS_STYLES: Record<string, { bg: string; color: string }> = {
  Completed: { bg: "#E8F5E9", color: "#2E7D32" },
  Pending: { bg: "#F5F5F5", color: "#616161" },
  Refunded: { bg: "#FFF8E1", color: "#F57F17" },
  Canceled: { bg: "#FFEBEE", color: "#C62828" },
};

const STATS = [
  { title: "Total Subscriptions", value: "5,424,326", change: 5, iconBg: "#EDE7F6", iconColor: "#7B1FA2", icon: RefreshCcw },
  { title: "Subscription Revenue", value: "5,424,326", change: 5, iconBg: "#FFF3E0", iconColor: "#FF9800", icon: DollarSign },
  { title: "Referral Payout", value: "5,424,326", change: -5, iconBg: "#FCE4EC", iconColor: "#E8345A", icon: GitBranch },
];

export default function RevenuePage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [type, setType] = useState("All Types");
  const [entries, setEntries] = useState(8);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<number[]>([]);

  const filtered = ALL_TRANSACTIONS.filter((t) => {
    const matchSearch =
      t.store.toLowerCase().includes(search.toLowerCase()) ||
      t.type.toLowerCase().includes(search.toLowerCase()) ||
      t.country.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status === "All Status" || t.status === status;
    const matchType = type === "All Types" || t.type === type;
    return matchSearch && matchStatus && matchType;
  });

  const totalPages = Math.ceil(filtered.length / entries);
  const paginated = filtered.slice((page - 1) * entries, page * entries);
  const totalShownStart = filtered.length === 0 ? 0 : (page - 1) * entries + 1;
  const totalShownEnd = Math.min(page * entries, filtered.length);

  const toggleSelect = (id: number) =>
    setSelected((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);

  const toggleAll = () =>
    setSelected(selected.length === paginated.length ? [] : paginated.map((t) => t.id));

  return (
    <MainLayout>
      <div style={{ padding: "24px" }}>
        {/* Page title */}
        <div style={{ marginBottom: "32px" }}>
          <h1 className="text-2xl font-bold" style={{ color: "#190044", marginBottom: "4px" }}>All Revenue</h1>
          <p className="text-sm" style={{ color: "#9FA2B4" }}>
            <span>Home</span>
            <span style={{ margin: "0 6px" }}>›</span>
            <span style={{ color: "#E8345A" }}>Revenue</span>
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "24px", marginBottom: "32px" }}>
          {STATS.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>

        {/* Transactions Table Card */}
        <div
          className="rounded-2xl bg-white overflow-hidden"
          style={{
            border: "1px solid #E8E8F0",
            boxShadow: "0px 4px 16px rgba(0,0,0,0.04)",
            padding: "24px"
          }}
        >
          {/* Card header */}
          <div
            className="flex items-center justify-between"
            style={{ borderBottom: "1px solid #E8E8F0", paddingBottom: "20px", marginBottom: "24px" }}
          >
            <h2 className="text-base font-semibold" style={{ color: "#190044" }}>
              Recent Transactions
            </h2>
            <div className="flex items-center gap-2 text-sm" style={{ color: "#9FA2B4" }}>
              <span>Show</span>
              <div
                className="relative flex items-center"
                style={{ border: "1px solid #E8E8F0", borderRadius: "8px", backgroundColor: "#FFFFFF" }}
              >
                <select
                  value={entries}
                  onChange={(e) => { setEntries(Number(e.target.value)); setPage(1); }}
                  className="appearance-none pl-4 pr-8 py-2 text-sm font-semibold outline-none cursor-pointer bg-transparent"
                  style={{ color: "#190044" }}
                >
                  {[5, 8, 10, 20].map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
                <ChevronDown size={14} className="absolute right-2.5 pointer-events-none" style={{ color: "#9FA2B4" }} />
              </div>
              <span>Entries</span>
            </div>
          </div>

          {/* Filters */}
          <div
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            style={{ borderBottom: "1px solid #E8E8F0", paddingBottom: "20px", marginBottom: "24px" }}
          >
            <div
              className="flex items-center gap-2 flex-1"
              style={{
                border: "1px solid #E8E8F0",
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                padding: "12px 16px"
              }}
            >
              <Search size={15} style={{ color: "#9FA2B4" }} />
              <input
                type="text"
                placeholder="Search transaction..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="bg-transparent outline-none text-sm flex-1"
                style={{ color: "#190044" }}
              />
            </div>

            {/* Status dropdown */}
            <div className="relative" style={{ minWidth: "160px" }}>
              <select
                value={status}
                onChange={(e) => { setStatus(e.target.value); setPage(1); }}
                className="appearance-none w-full text-sm outline-none cursor-pointer bg-transparent"
                style={{
                  border: "1px solid #E8E8F0",
                  borderRadius: "8px",
                  backgroundColor: "#FFFFFF",
                  color: "#190044",
                  padding: "12px 40px 12px 16px"
                }}
              >
                {["All Status", "Completed", "Pending", "Refunded", "Canceled"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute pointer-events-none" style={{ color: "#9FA2B4", right: "16px", top: "50%", transform: "translateY(-50%)" }} />
            </div>

            {/* Type dropdown */}
            <div className="relative" style={{ minWidth: "160px" }}>
              <select
                value={type}
                onChange={(e) => { setType(e.target.value); setPage(1); }}
                className="appearance-none w-full text-sm outline-none cursor-pointer bg-transparent"
                style={{
                  border: "1px solid #E8E8F0",
                  borderRadius: "8px",
                  backgroundColor: "#FFFFFF",
                  color: "#190044",
                  padding: "12px 40px 12px 16px"
                }}
              >
                {["All Types", "Subscription", "Referral"].map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute pointer-events-none" style={{ color: "#9FA2B4", right: "16px", top: "50%", transform: "translateY(-50%)" }} />
            </div>
          </div>

          {/* Table */}
          <table className="w-full text-sm" style={{ marginBottom: "20px" }}>
            <thead>
              <tr style={{ backgroundColor: "#F5F6FA" }}>
                <th style={{ padding: "16px 20px", textAlign: "left", width: "48px", borderRight: "1px solid #E8E8F0" }}>
                  <input
                    type="checkbox"
                    checked={selected.length === paginated.length && paginated.length > 0}
                    onChange={toggleAll}
                    className="cursor-pointer w-4 h-4 rounded"
                    style={{ accentColor: "#190044" }}
                  />
                </th>
                {["Type", "Store", "Country", "Value", "Status", "Action"].map((col, idx) => (
                  <th
                    key={col}
                    className="font-semibold text-sm"
                    style={{
                      padding: "16px 20px",
                      textAlign: "left",
                      color: "#190044",
                      borderRight: idx < 5 ? "1px solid #E8E8F0" : "none"
                    }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginated.map((t) => (
                <tr
                  key={t.id}
                  style={{
                    borderTop: "1px solid #E8E8F0",
                    backgroundColor: selected.includes(t.id) ? "#F9F9FF" : "#FFFFFF",
                    transition: "background-color 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    if (!selected.includes(t.id))
                      (e.currentTarget as HTMLTableRowElement).style.backgroundColor = "#FAFAFA";
                  }}
                  onMouseLeave={(e) => {
                    if (!selected.includes(t.id))
                      (e.currentTarget as HTMLTableRowElement).style.backgroundColor = "#FFFFFF";
                  }}
                >
                  <td style={{ padding: "16px 20px", borderRight: "1px solid #E8E8F0" }}>
                    <input
                      type="checkbox"
                      checked={selected.includes(t.id)}
                      onChange={() => toggleSelect(t.id)}
                      className="cursor-pointer w-4 h-4 rounded"
                      style={{ accentColor: "#190044" }}
                    />
                  </td>
                  <td style={{ padding: "16px 20px", color: "#190044", borderRight: "1px solid #E8E8F0" }}>{t.type}</td>
                  <td style={{ padding: "16px 20px", color: "#190044", borderRight: "1px solid #E8E8F0" }}>{t.store}</td>
                  <td style={{ padding: "16px 20px", color: "#190044", borderRight: "1px solid #E8E8F0" }}>{t.country}</td>
                  <td style={{ padding: "16px 20px", color: "#190044", fontWeight: 500, borderRight: "1px solid #E8E8F0" }}>{t.value}</td>
                  <td style={{ padding: "16px 20px", borderRight: "1px solid #E8E8F0" }}>
                    <span
                      className="rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: STATUS_STYLES[t.status].bg,
                        color: STATUS_STYLES[t.status].color,
                        padding: "6px 12px",
                        display: "inline-block"
                      }}
                    >
                      {t.status}
                    </span>
                  </td>
                  <td style={{ padding: "16px 20px" }}>
                    <button
                      className="p-1.5 rounded-lg transition-colors"
                      style={{ color: "#9FA2B4" }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F5F6FA")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                    >
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-3"
            style={{ borderTop: "1px solid #E8E8F0", paddingTop: "20px" }}
          >
            <p className="text-sm" style={{ color: "#9FA2B4" }}>
              Showing {totalShownStart} to {totalShownEnd} of {filtered.length} entries
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="text-sm rounded-lg font-medium transition-colors"
                style={{
                  border: "1px solid #E8E8F0",
                  color: page === 1 ? "#9FA2B4" : "#190044",
                  backgroundColor: "#FFFFFF",
                  cursor: page === 1 ? "not-allowed" : "pointer",
                  borderRadius: "8px",
                  padding: "10px 16px"
                }}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className="text-sm rounded-lg font-medium transition-colors"
                  style={{
                    backgroundColor: page === p ? "#E8345A" : "#FFFFFF",
                    color: page === p ? "#FFFFFF" : "#190044",
                    border: page === p ? "none" : "1px solid #E8E8F0",
                    borderRadius: "8px",
                    padding: "10px 14px",
                    minWidth: "40px"
                  }}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="text-sm rounded-lg font-medium transition-colors"
                style={{
                  border: "1px solid #E8E8F0",
                  color: page === totalPages ? "#9FA2B4" : "#190044",
                  backgroundColor: "#FFFFFF",
                  cursor: page === totalPages ? "not-allowed" : "pointer",
                  borderRadius: "8px",
                  padding: "10px 16px"
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout >
  );
}