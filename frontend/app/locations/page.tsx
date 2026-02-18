"use client";

import { useState } from "react";
import { Search, ChevronDown, MoreVertical, Plus } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

const ALL_LOCATIONS = [
  { id: 1, code: "NIG", country: "Nigeria", phone: "+234", syncDate: "8 Sep, 2020", active: true },
  { id: 2, code: "IND", country: "India", phone: "+91", syncDate: "17 Oct, 2020", active: false },
  { id: 3, code: "UK", country: "United Kingdom", phone: "+44", syncDate: "21 Sep, 2020", active: false },
  { id: 4, code: "RU", country: "Russia", phone: "+7", syncDate: "22 Oct, 2020", active: true },
  { id: 5, code: "CHN", country: "China", phone: "+86", syncDate: "17 Oct, 2020", active: true },
  { id: 6, code: "FR", country: "France", phone: "+33", syncDate: "1 Feb, 2020", active: true },
  { id: 7, code: "USA", country: "USA", phone: "+1", syncDate: "1 Feb, 2020", active: false },
  { id: 8, code: "KR", country: "Korea", phone: "+82", syncDate: "24 May, 2020", active: true },
  { id: 9, code: "GER", country: "Germany", phone: "+49", syncDate: "5 Mar, 2021", active: true },
  { id: 10, code: "JPN", country: "Japan", phone: "+81", syncDate: "12 Jun, 2021", active: false },
  { id: 11, code: "BRZ", country: "Brazil", phone: "+55", syncDate: "3 Jul, 2021", active: true },
  { id: 12, code: "AUS", country: "Australia", phone: "+61", syncDate: "19 Aug, 2021", active: true },
  { id: 13, code: "CAN", country: "Canada", phone: "+1", syncDate: "8 Sep, 2021", active: false },
  { id: 14, code: "MEX", country: "Mexico", phone: "+52", syncDate: "22 Oct, 2021", active: true },
  { id: 15, code: "ITA", country: "Italy", phone: "+39", syncDate: "14 Nov, 2021", active: true },
  { id: 16, code: "ESP", country: "Spain", phone: "+34", syncDate: "30 Dec, 2021", active: false },
  { id: 17, code: "NIG", country: "Nigeria", phone: "+234", syncDate: "8 Sep, 2020", active: true },
  { id: 18, code: "IND", country: "India", phone: "+91", syncDate: "17 Oct, 2020", active: false },
  { id: 19, code: "UK", country: "United Kingdom", phone: "+44", syncDate: "21 Sep, 2020", active: false },
  { id: 20, code: "RU", country: "Russia", phone: "+7", syncDate: "22 Oct, 2020", active: true },
  { id: 21, code: "CHN", country: "China", phone: "+86", syncDate: "17 Oct, 2020", active: true },
  { id: 22, code: "FR", country: "France", phone: "+33", syncDate: "1 Feb, 2020", active: true },
  { id: 23, code: "USA", country: "USA", phone: "+1", syncDate: "1 Feb, 2020", active: false },
  { id: 24, code: "KR", country: "Korea", phone: "+82", syncDate: "24 May, 2020", active: true },
  { id: 25, code: "GER", country: "Germany", phone: "+49", syncDate: "5 Mar, 2021", active: true },
  { id: 26, code: "JPN", country: "Japan", phone: "+81", syncDate: "12 Jun, 2021", active: false },
  { id: 27, code: "BRZ", country: "Brazil", phone: "+55", syncDate: "3 Jul, 2021", active: true },
  { id: 28, code: "AUS", country: "Australia", phone: "+61", syncDate: "19 Aug, 2021", active: true },
  { id: 29, code: "CAN", country: "Canada", phone: "+1", syncDate: "8 Sep, 2021", active: false },
  { id: 30, code: "MEX", country: "Mexico", phone: "+52", syncDate: "22 Oct, 2021", active: true },
  { id: 31, code: "ITA", country: "Italy", phone: "+39", syncDate: "14 Nov, 2021", active: true },
  { id: 32, code: "ESP", country: "Spain", phone: "+34", syncDate: "30 Dec, 2021", active: false },
];

interface Location {
  id: number;
  code: string;
  country: string;
  phone: string;
  syncDate: string;
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

export default function LocationsPage() {
  const [locations, setLocations] = useState<Location[]>(ALL_LOCATIONS);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [entries, setEntries] = useState(8);
  const [page, setPage] = useState(1);

  const toggleActive = (id: number) => {
    setLocations((prev) =>
      prev.map((l) => (l.id === id ? { ...l, active: !l.active } : l))
    );
  };

  const filtered = locations.filter((l) => {
    const matchSearch =
      l.country.toLowerCase().includes(search.toLowerCase()) ||
      l.code.toLowerCase().includes(search.toLowerCase()) ||
      l.phone.includes(search);
    const matchStatus =
      status === "All Status" ||
      (status === "Active" && l.active) ||
      (status === "Inactive" && !l.active);
    return matchSearch && matchStatus;
  });

  const totalPages = Math.ceil(filtered.length / entries);
  const paginated = filtered.slice((page - 1) * entries, page * entries);
  const totalShownStart = filtered.length === 0 ? 0 : (page - 1) * entries + 1;
  const totalShownEnd = Math.min(page * entries, filtered.length);

  const COLUMNS = ["Country Code", "Country", "Phone Code", "Sync Date", "Status", "Action"];

  return (
    <MainLayout>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

        {/* Page title + Add button */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
            <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#190044", margin: 0 }}>
              All Locations
            </h1>
            <p style={{ fontSize: "13px", marginTop: "6px", color: "#9FA2B4", display: "flex", alignItems: "center", gap: "6px" }}>
              <span>Home</span>
              <span style={{ fontSize: "12px" }}>›</span>
              <span style={{ color: "#E8345A" }}>Locations</span>
            </p>
          </div>
          <button
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
            Add Location
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
          {/* Card header: Countries + Show N Entries */}
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
              Countries
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
            {/* Search — roughly half width like Figma */}
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
                placeholder="Search country..."
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

            {/* Spacer */}
            <div style={{ flex: 1 }} />

            {/* Status dropdown */}
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
                {paginated.map((l) => (
                  <tr
                    key={l.id}
                    style={{ borderTop: "1px solid #E8E8F0", backgroundColor: "#FFFFFF", transition: "background-color 0.15s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLTableRowElement).style.backgroundColor = "#FAFAFA"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLTableRowElement).style.backgroundColor = "#FFFFFF"; }}
                  >
                    <td style={{ padding: "16px 20px", textAlign: "center", color: "#190044", fontWeight: 500, borderRight: "1px solid #E8E8F0" }}>
                      {l.code}
                    </td>
                    <td style={{ padding: "16px 20px", textAlign: "center", color: "#190044", borderRight: "1px solid #E8E8F0" }}>
                      {l.country}
                    </td>
                    <td style={{ padding: "16px 20px", textAlign: "center", color: "#190044", borderRight: "1px solid #E8E8F0" }}>
                      {l.phone}
                    </td>
                    <td style={{ padding: "16px 20px", textAlign: "center", color: "#9FA2B4", borderRight: "1px solid #E8E8F0" }}>
                      {l.syncDate}
                    </td>
                    <td style={{ padding: "16px 20px", textAlign: "center", borderRight: "1px solid #E8E8F0" }}>
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Toggle active={l.active} onToggle={() => toggleActive(l.id)} />
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