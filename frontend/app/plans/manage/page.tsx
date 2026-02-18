"use client";

import { useState } from "react";
import { Search, ChevronDown, MoreVertical, Plus } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

const ALL_PLANS = [
  { id: 1, name: "Starter Plan", price: "$351.02", discount: "Monthly", active: true },
  { id: 2, name: "Standard", price: "$630.44", discount: "Yearly", active: false },
  { id: 3, name: "Premium", price: "$767.50", discount: "Quarterly", active: true },
  { id: 4, name: "Platinum", price: "$943.65", discount: "Yearly", active: true },
  { id: 5, name: "Gold", price: "$779.58", discount: "Monthly", active: true },
  { id: 6, name: "Pro", price: "$601.13", discount: "Monthly", active: false },
  { id: 7, name: "Starter Premium", price: "$293.01", discount: "Yearly", active: true },
  { id: 8, name: "Starter Platinum", price: "$490.51", discount: "Monthly", active: false },
  { id: 9, name: "Business", price: "$1,200.00", discount: "Yearly", active: true },
  { id: 10, name: "Enterprise", price: "$2,500.00", discount: "Yearly", active: true },
  { id: 11, name: "Basic", price: "$199.99", discount: "Monthly", active: false },
  { id: 12, name: "Advanced", price: "$899.99", discount: "Quarterly", active: true },
];

interface Plan {
  id: number;
  name: string;
  price: string;
  discount: string;
  active: boolean;
}

function Toggle({ active, onToggle }: { active: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle status"
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        width: "48px",
        height: "26px",
        borderRadius: "999px",
        backgroundColor: active ? "#4CAF50" : "#D1D5DB",
        border: "none",
        padding: 0,
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          position: "absolute",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 1px 3px rgba(0,0,0,0.25)",
          transition: "transform 0.3s ease",
          transform: active ? "translateX(24px)" : "translateX(3px)",
        }}
      />
    </button>
  );
}

export default function ManagePlansPage() {
  const [plans, setPlans] = useState<Plan[]>(ALL_PLANS);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [entries, setEntries] = useState(8);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<number[]>([]);

  const toggleActive = (id: number) => {
    setPlans((prev) =>
      prev.map((p) => (p.id === id ? { ...p, active: !p.active } : p))
    );
  };

  const filtered = plans.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.price.includes(search) ||
      p.discount.toLowerCase().includes(search.toLowerCase());
    const matchStatus =
      status === "All Status" ||
      (status === "Active" && p.active) ||
      (status === "Inactive" && !p.active);
    return matchSearch && matchStatus;
  });

  const totalPages = Math.ceil(filtered.length / entries);
  const paginated = filtered.slice((page - 1) * entries, page * entries);
  const totalShownStart = filtered.length === 0 ? 0 : (page - 1) * entries + 1;
  const totalShownEnd = Math.min(page * entries, filtered.length);

  const toggleSelect = (id: number) =>
    setSelected((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);

  const toggleAll = () =>
    setSelected(selected.length === paginated.length ? [] : paginated.map((p) => p.id));

  const COLUMNS = ["Name", "Price", "Discount", "Status", "Action"];

  return (
    <MainLayout>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

        {/* Page title + Add button */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
            <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#190044", margin: 0 }}>
              Manage Plans
            </h1>
            <p style={{ fontSize: "13px", marginTop: "6px", color: "#9FA2B4", display: "flex", alignItems: "center", gap: "6px" }}>
              <span>Home</span>
              <span style={{ fontSize: "12px" }}>›</span>
              <span style={{ color: "#E8345A" }}>Plans</span>
            </p>
          </div>
          <button
            onClick={() => window.location.href = "/plans/add"}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#E8345A",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "8px",
              padding: "12px 20px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <Plus size={16} />
            Add Plan
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
          {/* Card header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 24px",
              borderBottom: "1px solid #E8E8F0",
            }}
          >
            <h2 style={{ fontSize: "15px", fontWeight: 600, color: "#190044", margin: 0 }}>
              Recent plans
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#9FA2B4" }}>
              <span>Show</span>
              <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                <select
                  value={entries}
                  onChange={(e) => { setEntries(Number(e.target.value)); setPage(1); }}
                  style={{
                    appearance: "none",
                    border: "1px solid #E8E8F0",
                    borderRadius: "8px",
                    backgroundColor: "#FFFFFF",
                    color: "#190044",
                    fontWeight: 600,
                    fontSize: "14px",
                    padding: "8px 32px 8px 12px",
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

          {/* Filters: Search + Status */}
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
                padding: "12px 16px",
                backgroundColor: "#FFFFFF",
                flex: "0 0 40%",
                maxWidth: "320px",
              }}
            >
              <Search size={15} style={{ color: "#9FA2B4", flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Search plans..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
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
                  border: "1px solid #E8E8F0",
                  borderRadius: "8px",
                  backgroundColor: "#FFFFFF",
                  color: "#190044",
                  fontSize: "14px",
                  padding: "12px 40px 12px 16px",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                {["All Status", "Active", "Inactive"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <ChevronDown
                size={14}
                style={{
                  position: "absolute",
                  right: "14px",
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
                        fontSize: "14px",
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
                      transition: "background-color 0.15s"
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
                    <td style={{ padding: "16px 20px", textAlign: "center", color: "#190044", fontWeight: 500, borderRight: "1px solid #E8E8F0" }}>
                      {p.name}
                    </td>
                    <td style={{ padding: "16px 20px", textAlign: "center", color: "#190044", fontWeight: 500, borderRight: "1px solid #E8E8F0" }}>
                      {p.price}
                    </td>
                    <td style={{ padding: "16px 20px", textAlign: "center", color: "#6B7280", borderRight: "1px solid #E8E8F0" }}>
                      {p.discount}
                    </td>
                    <td style={{ padding: "16px 20px", textAlign: "center", borderRight: "1px solid #E8E8F0" }}>
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Toggle active={p.active} onToggle={() => toggleActive(p.id)} />
                      </div>
                    </td>
                    <td style={{ padding: "16px 20px", textAlign: "center" }}>
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <button
                          style={{
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            color: "#9FA2B4",
                            padding: "6px",
                            borderRadius: "6px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F5F6FA")}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                        >
                          <MoreVertical size={16} />
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
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 24px",
              borderTop: "1px solid #E8E8F0",
            }}
          >
            <p style={{ fontSize: "14px", color: "#9FA2B4", margin: 0 }}>
              Showing {totalShownStart} to {totalShownEnd} of {filtered.length} entries
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                style={{
                  border: "1px solid #E8E8F0",
                  borderRadius: "8px",
                  color: page === 1 ? "#9FA2B4" : "#190044",
                  backgroundColor: "#FFFFFF",
                  cursor: page === 1 ? "not-allowed" : "pointer",
                  padding: "10px 16px",
                  fontSize: "14px",
                  fontWeight: 500,
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
                    padding: "10px 14px",
                    minWidth: "40px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                style={{
                  border: "1px solid #E8E8F0",
                  borderRadius: "8px",
                  color: page === totalPages ? "#9FA2B4" : "#190044",
                  backgroundColor: "#FFFFFF",
                  cursor: page === totalPages ? "not-allowed" : "pointer",
                  padding: "10px 16px",
                  fontSize: "14px",
                  fontWeight: 500,
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