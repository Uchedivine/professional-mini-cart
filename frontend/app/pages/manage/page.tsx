"use client";

import { useState } from "react";
import { Search, ChevronDown, MoreVertical, Plus } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

const ALL_PAGES = [
  { id: 1, user: "Super Admin", title: "About", slug: "About", status: "Published" },
  { id: 2, user: "Super Admin", title: "Events", slug: "Events", status: "Draft" },
  { id: 3, user: "Super Admin", title: "Dashboard", slug: "Dashboard", status: "Publish" },
  { id: 4, user: "Super Admin", title: "Blog", slug: "Blog", status: "Publish" },
  { id: 5, user: "Super Admin", title: "Contact", slug: "Contact", status: "Draft" },
  { id: 6, user: "Super Admin", title: "Help & support", slug: "Help & support", status: "Publish" },
  { id: 7, user: "Super Admin", title: "Resources", slug: "Resources", status: "Draft" },
  { id: 8, user: "Super Admin", title: "User profile", slug: "User profile", status: "Publish" },
  { id: 9, user: "Super Admin", title: "Settings", slug: "Settings", status: "Published" },
  { id: 10, user: "Super Admin", title: "FAQ", slug: "FAQ", status: "Draft" },
];

const STATUS_STYLES: Record<string, { bg: string; color: string }> = {
  Published: { bg: "#E6F4EA", color: "#1E7E34" },
  Draft: { bg: "#F2F2F2", color: "#545454" },
  Publish: { bg: "#E6F4EA", color: "#1E7E34" },
};

export default function ManagePagesPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [entries, setEntries] = useState(8);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<number[]>([]);

  const filtered = ALL_PAGES.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.slug.toLowerCase().includes(search.toLowerCase()) ||
      p.user.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status === "All Status" || p.status === status;
    return matchSearch && matchStatus;
  });

  const totalPages = Math.ceil(filtered.length / entries);
  const paginated = filtered.slice((page - 1) * entries, page * entries);
  const totalShownStart = filtered.length === 0 ? 0 : (page - 1) * entries + 1;
  const totalShownEnd = Math.min(page * entries, filtered.length);

  const toggleSelect = (id: number) =>
    setSelected((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);

  const toggleAll = () =>
    setSelected(selected.length === paginated.length && paginated.length > 0 ? [] : paginated.map((p) => p.id));

  const COLUMNS = ["User", "Title", "Slug", "Status", "Action"];

  return (
    <MainLayout>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "8px" }}>

        {/* Header Section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#190044", margin: 0 }}>
              Manage Pages
            </h1>
            <p style={{ fontSize: "14px", marginTop: "4px", color: "#9FA2B4", display: "flex", alignItems: "center", gap: "6px" }}>
              <span>Home</span>
              <span style={{ fontSize: "12px" }}>›</span>
              <span style={{ color: "#E8345A" }}>Pages</span>
            </p>
          </div>
          <button
            onClick={() => window.location.href = "/pages/add"}
            style={{
              backgroundColor: "#E8345A",
              color: "#FFFFFF",
              padding: "12px 24px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Plus size={18} />
            Add Page
          </button>
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
              Resent pages
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
                placeholder="Search pages..."
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
                {["All Status", "Published", "Draft", "Publish"].map((s) => (
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
                {paginated.map((p) => (
                  <tr
                    key={p.id}
                    style={{
                      borderTop: "1px solid #E8E8F0",
                      backgroundColor: selected.includes(p.id) ? "#F9F9FF" : "#FFFFFF",
                      transition: "background-color 0.15s",
                    }}
                    onMouseEnter={(e) => { if (!selected.includes(p.id)) (e.currentTarget as HTMLTableRowElement).style.backgroundColor = "#FAFAFA"; }}
                    onMouseLeave={(e) => { if (!selected.includes(p.id)) (e.currentTarget as HTMLTableRowElement).style.backgroundColor = "#FFFFFF"; }}
                  >
                    <td style={{ padding: "16px 20px", textAlign: "center", borderRight: "1px solid #E8E8F0" }}>
                      <input
                        type="checkbox"
                        checked={selected.includes(p.id)}
                        onChange={() => toggleSelect(p.id)}
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
                    <td style={{ padding: "16px 20px", textAlign: "center", fontWeight: 500, color: "#190044", borderRight: "1px solid #E8E8F0" }}>
                      {p.user}
                    </td>
                    <td style={{ padding: "16px 20px", textAlign: "center", color: "#190044", borderRight: "1px solid #E8E8F0" }}>
                      {p.title}
                    </td>
                    <td style={{ padding: "16px 20px", textAlign: "center", color: "#190044", borderRight: "1px solid #E8E8F0" }}>
                      {p.slug}
                    </td>
                    <td style={{ padding: "16px 20px", textAlign: "center", borderRight: "1px solid #E8E8F0" }}>
                      <span
                        style={{
                          padding: "6px 12px",
                          borderRadius: "999px",
                          fontSize: "12px",
                          fontWeight: 700,
                          backgroundColor: STATUS_STYLES[p.status]?.bg || "#F2F2F2",
                          color: STATUS_STYLES[p.status]?.color || "#545454",
                          display: "inline-block",
                        }}
                      >
                        {p.status}
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