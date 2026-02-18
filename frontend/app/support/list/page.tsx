"use client";

import { useState } from "react";
import { Search, ChevronDown, MoreVertical, Info, Clock, CheckCircle } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

const ALL_REQUESTS = [
  { id: 1, requestId: "982958195", createdAt: "17 Oct, 2025", userName: "Albert Flores", userEmail: "chronos@aol.com", initials: "AF", initialsColor: "#E8D5F2", subject: "General Inquiry", status: "Solved" },
  { id: 2, requestId: "081595952", createdAt: "22 Oct, 2025", userName: "Brooklyn Simmons", userEmail: "wkrebs@verizon.net", initials: "BS", initialsColor: "#E8D5F2", subject: "Issue With Dashboard Login", status: "Pending" },
  { id: 3, requestId: "982958195", createdAt: "8 Sep, 2025", userName: "Jerome Bell", userEmail: "bockelboy@att.net", initials: "JB", initialsColor: "#D5E5FF", subject: "Unable to Reset my Password", status: "Solved" },
  { id: 4, requestId: "081595952", createdAt: "21 Sep, 2025", userName: "Marvin McKinney", userEmail: "ateniese@mac.com", initials: "MM", initialsColor: "#E8D5F2", subject: "Request Technical Support", status: "Solved" },
  { id: 5, requestId: "523943855", createdAt: "24 May, 2025", userName: "Leslie Alexander", userEmail: "dowdy@yahoo.com", initials: "LA", initialsColor: "#FFE5CC", subject: "Feedback on Product/Service", status: "Solved" },
  { id: 6, requestId: "102138520", createdAt: "1 Feb, 2025", userName: "Savannah Nguyen", userEmail: "mobilep@mac.com", initials: "SN", initialsColor: "#E8D5F2", subject: "Partnership Proposal", status: "Pending" },
  { id: 7, requestId: "292206548", createdAt: "14 Jun 2025", userName: "Robert Fox", userEmail: "doormat@att.net", initials: "RF", initialsColor: "#FFD5E5", subject: "Report a Bug", status: "Pending" },
  { id: 8, requestId: "292206548", createdAt: "31 Apr, 2025", userName: "Ralph Edwards", userEmail: "doormat@att.net", initials: "RE", initialsColor: "#D5F5E3", subject: "Account Locked", status: "Solved" },
];

const STATUS_STYLES: Record<string, { bg: string; color: string }> = {
  Solved: { bg: "#E6F4EA", color: "#1E7E34" },
  Pending: { bg: "#F2F2F2", color: "#545454" },
};

const STATS = [
  { title: "Total Request", value: "5,432", icon: Info, iconColor: "#7B68EE", iconBg: "#F0EDFF" },
  { title: "Pending Request", value: "320", icon: Clock, iconColor: "#FF9800", iconBg: "#FFF3E0" },
  { title: "Solved Request", value: "5,110", icon: CheckCircle, iconColor: "#4CAF50", iconBg: "#E8F5E9" },
];

export default function SupportListPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [entries, setEntries] = useState(8);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<number[]>([]);

  const filtered = ALL_REQUESTS.filter((r) => {
    const matchSearch =
      r.requestId.includes(search) ||
      r.userName.toLowerCase().includes(search.toLowerCase()) ||
      r.userEmail.includes(search) ||
      r.subject.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status === "All Status" || r.status === status;
    return matchSearch && matchStatus;
  });

  const totalPages = Math.ceil(filtered.length / entries);
  const paginated = filtered.slice((page - 1) * entries, page * entries);
  const totalShownStart = filtered.length === 0 ? 0 : (page - 1) * entries + 1;
  const totalShownEnd = Math.min(page * entries, filtered.length);

  const toggleSelect = (id: number) =>
    setSelected((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);

  const toggleAll = () =>
    setSelected(selected.length === paginated.length && paginated.length > 0 ? [] : paginated.map((r) => r.id));

  const COLUMNS = ["Request ID", "Created At", "User", "Subject", "Status", "Action"];

  return (
    <MainLayout>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "8px" }}>

        {/* Header Section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#190044", margin: 0 }}>
              All Requests
            </h1>
            <p style={{ fontSize: "14px", marginTop: "4px", color: "#9FA2B4", display: "flex", alignItems: "center", gap: "6px" }}>
              <span>Home</span>
              <span style={{ fontSize: "12px" }}>›</span>
              <span style={{ color: "#E8345A" }}>Support List</span>
            </p>
          </div>
        </div>

        {/* Stat Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E8E8F0",
                  borderRadius: "16px",
                  padding: "24px",
                  boxShadow: "0px 4px 16px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                  <div>
                    <p style={{ fontSize: "14px", color: "#9FA2B4", marginBottom: "8px" }}>{stat.title}</p>
                    <p style={{ fontSize: "32px", fontWeight: 700, color: "#190044", margin: 0 }}>{stat.value}</p>
                  </div>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: stat.iconBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={24} style={{ color: stat.iconColor }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Table Card */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            border: "1px solid #E8E8F0",
            boxShadow: "0px 4px 16px rgba(0,0,0,0.04)",
            overflow: "hidden",
          }}
        >
          {/* Card Title & Show Entries */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px 24px",
              borderBottom: "1px solid #E8E8F0",
            }}
          >
            <h2 style={{ fontSize: "15px", fontWeight: 600, color: "#190044", margin: 0 }}>
              All Requests
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#9FA2B4" }}>
              <span>Show</span>
              <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                <select
                  value={entries}
                  onChange={(e) => { setEntries(parseInt(e.target.value)); setPage(1); }}
                  style={{
                    appearance: "none",
                    padding: "8px 32px 8px 12px",
                    borderRadius: "8px",
                    border: "1px solid #E8E8F0",
                    backgroundColor: "#FFFFFF",
                    color: "#190044",
                    fontSize: "14px",
                    fontWeight: 600,
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  {[5, 8, 10, 20].map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
                <ChevronDown size={14} style={{ position: "absolute", right: "10px", pointerEvents: "none", color: "#9FA2B4" }} />
              </div>
              <span>Entries</span>
            </div>
          </div>

          {/* Filters: Search & Status */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "16px 24px",
              borderBottom: "1px solid #E8E8F0",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid #E8E8F0",
                borderRadius: "8px",
                padding: "10px 16px",
                backgroundColor: "#FFFFFF",
                flex: "0 0 40%",
                maxWidth: "320px",
              }}
            >
              <Search size={15} style={{ color: "#9FA2B4" }} />
              <input
                type="text"
                placeholder="Search request..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                style={{
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  fontSize: "14px",
                  color: "#190044",
                  width: "100%",
                }}
              />
            </div>

            <div style={{ flex: 1 }} />

            <div style={{ position: "relative", minWidth: "160px" }}>
              <select
                value={status}
                onChange={(e) => { setStatus(e.target.value); setPage(1); }}
                style={{
                  appearance: "none",
                  width: "100%",
                  padding: "10px 40px 10px 16px",
                  borderRadius: "8px",
                  border: "1px solid #E8E8F0",
                  backgroundColor: "#FFFFFF",
                  color: "#190044",
                  fontSize: "14px",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                {["All Status", "Solved", "Pending"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <ChevronDown
                size={14}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: "#9FA2B4",
                }}
              />
            </div>
          </div>

          {/* Table */}
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ backgroundColor: "#F5F6FA" }}>
                  <th style={{ padding: "16px 20px", width: "48px", borderRight: "1px solid #E8E8F0" }}>
                    <input
                      type="checkbox"
                      checked={selected.length === paginated.length && paginated.length > 0}
                      onChange={toggleAll}
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "4px",
                        border: "1px solid #D1D5DB",
                        accentColor: "#190044",
                        cursor: "pointer"
                      }}
                    />
                  </th>
                  {COLUMNS.map((col, idx) => (
                    <th
                      key={col}
                      style={{
                        padding: "16px 20px",
                        textAlign: "center",
                        fontWeight: 600,
                        color: "#190044",
                        borderRight: idx < COLUMNS.length - 1 ? "1px solid #E8E8F0" : "none",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginated.map((r) => (
                  <tr
                    key={r.id}
                    style={{
                      borderTop: "1px solid #E8E8F0",
                      backgroundColor: selected.includes(r.id) ? "#F9F9FF" : "#FFFFFF",
                      transition: "background-color 0.15s",
                    }}
                    onMouseEnter={(e) => { if (!selected.includes(r.id)) (e.currentTarget as HTMLTableRowElement).style.backgroundColor = "#FAFAFA"; }}
                    onMouseLeave={(e) => { if (!selected.includes(r.id)) (e.currentTarget as HTMLTableRowElement).style.backgroundColor = "#FFFFFF"; }}
                  >
                    <td style={{ padding: "16px 20px", textAlign: "center", borderRight: "1px solid #E8E8F0" }}>
                      <input
                        type="checkbox"
                        checked={selected.includes(r.id)}
                        onChange={() => toggleSelect(r.id)}
                        style={{
                          width: "18px",
                          height: "18px",
                          borderRadius: "4px",
                          border: "1px solid #D1D5DB",
                          accentColor: "#190044",
                          cursor: "pointer"
                        }}
                      />
                    </td>
                    <td style={{ padding: "16px 20px", textAlign: "center", color: "#190044", borderRight: "1px solid #E8E8F0" }}>
                      {r.requestId}
                    </td>
                    <td style={{ padding: "16px 20px", textAlign: "center", color: "#190044", borderRight: "1px solid #E8E8F0", whiteSpace: "nowrap" }}>
                      {r.createdAt}
                    </td>
                    <td style={{ padding: "16px 20px", borderRight: "1px solid #E8E8F0" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "flex-start" }}>
                        <div
                          style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            backgroundColor: r.initialsColor,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "12px",
                            fontWeight: 700,
                            color: "#190044",
                            flexShrink: 0,
                          }}
                        >
                          {r.initials}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ fontWeight: 600, color: "#190044", fontSize: "14px" }}>{r.userName}</span>
                          <span style={{ color: "#9FA2B4", fontSize: "12px" }}>{r.userEmail}</span>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: "16px 20px", textAlign: "center", color: "#190044", borderRight: "1px solid #E8E8F0" }}>
                      {r.subject}
                    </td>
                    <td style={{ padding: "16px 20px", textAlign: "center", borderRight: "1px solid #E8E8F0" }}>
                      <span
                        style={{
                          padding: "6px 12px",
                          borderRadius: "999px",
                          fontSize: "12px",
                          fontWeight: 700,
                          backgroundColor: STATUS_STYLES[r.status]?.bg || "#F2F2F2",
                          color: STATUS_STYLES[r.status]?.color || "#545454",
                          display: "inline-block",
                        }}
                      >
                        {r.status}
                      </span>
                    </td>
                    <td style={{ padding: "16px 20px", textAlign: "center" }}>
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <button
                          style={{
                            padding: "6px",
                            borderRadius: "6px",
                            backgroundColor: "transparent",
                            border: "none",
                            color: "#9FA2B4",
                            cursor: "pointer",
                          }}
                        >
                          <MoreVertical size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px 24px",
              borderTop: "1px solid #E8E8F0",
            }}
          >
            <p style={{ fontSize: "14px", color: "#9FA2B4", margin: 0 }}>
              Showing {totalShownStart} to {totalShownEnd} of {filtered.length} entries
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                style={{
                  padding: "10px 16px",
                  borderRadius: "8px",
                  border: "1px solid #E8E8F0",
                  backgroundColor: "#FFFFFF",
                  color: page === 1 ? "#9FA2B4" : "#190044",
                  fontSize: "14px",
                  fontWeight: 500,
                  cursor: page === 1 ? "not-allowed" : "pointer",
                }}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  style={{
                    backgroundColor: page === p ? "#E8345A" : "#FFFFFF",
                    color: page === p ? "#FFFFFF" : "#190044",
                    border: page === p ? "none" : "1px solid #E8E8F0",
                    borderRadius: "8px",
                    width: "40px",
                    height: "40px",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {p}
                </button>
              ))}
              <button
                disabled={page === totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                style={{
                  padding: "10px 16px",
                  borderRadius: "8px",
                  border: "1px solid #E8E8F0",
                  backgroundColor: "#FFFFFF",
                  color: page === totalPages ? "#9FA2B4" : "#190044",
                  fontSize: "14px",
                  fontWeight: 500,
                  cursor: page === totalPages ? "not-allowed" : "pointer",
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}