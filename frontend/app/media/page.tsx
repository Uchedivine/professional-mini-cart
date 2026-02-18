"use client";

import { useState } from "react";
import { Plus, Search, MoreVertical, RefreshCw, ChevronDown } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

const ALL_MEDIA = [
  { id: 1, name: "Name of image.pdf", size: "6.82 KB", uploaded: "1m", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop" },
  { id: 2, name: "Name of image.pdf", size: "6.82 KB", uploaded: "1m", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop" },
  { id: 3, name: "Name of image.pdf", size: "6.82 KB", uploaded: "1m", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop" },
  { id: 4, name: "Name of image.pdf", size: "6.82 KB", uploaded: "1m", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=300&fit=crop" },
  { id: 5, name: "Name of image.pdf", size: "6.82 KB", uploaded: "1m", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop" },
  { id: 6, name: "Name of image.pdf", size: "6.82 KB", uploaded: "1m", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=300&fit=crop" },
  { id: 7, name: "Name of image.pdf", size: "6.82 KB", uploaded: "1m", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop" },
  { id: 8, name: "Name of image.pdf", size: "6.82 KB", uploaded: "1m", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop" },
  { id: 9, name: "Name of image.pdf", size: "6.82 KB", uploaded: "1m", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop" },
  { id: 10, name: "Name of image.pdf", size: "6.82 KB", uploaded: "1m", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=300&fit=crop" },
  { id: 11, name: "Name of image.pdf", size: "6.82 KB", uploaded: "1m", image: "https://images.unsplash.com/photo-1525357816819-392d2380d821?w=400&h=300&fit=crop" },
  { id: 12, name: "Name of image.pdf", size: "6.82 KB", uploaded: "1m", image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=300&fit=crop" },
  { id: 13, name: "Name of image.pdf", size: "6.82 KB", uploaded: "1m", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop" },
  { id: 14, name: "Name of image.pdf", size: "6.82 KB", uploaded: "1m", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop" },
  { id: 15, name: "Name of image.pdf", size: "6.82 KB", uploaded: "1m", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop" },
  { id: 16, name: "Name of image.pdf", size: "6.82 KB", uploaded: "1m", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop" },
];

export default function MediaPage() {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(12);
  const [page, setPage] = useState(1);

  const filtered = ALL_MEDIA.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / entries);
  const paginated = filtered.slice((page - 1) * entries, page * entries);
  const totalShownStart = filtered.length === 0 ? 0 : (page - 1) * entries + 1;
  const totalShownEnd = Math.min(page * entries, filtered.length);

  const handleUpload = () => {
    alert("Upload functionality");
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <MainLayout>
      <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        {/* Page title + Upload button */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
            <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#190044", marginBottom: "4px" }}>
              Media Library
            </h1>
            <p style={{ fontSize: "14px", color: "#9FA2B4" }}>
              <span>Home</span>
              <span style={{ margin: "0 6px" }}>›</span>
              <span style={{ color: "#E8345A" }}>Media</span>
            </p>
          </div>
          <button
            onClick={handleUpload}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 20px",
              borderRadius: "12px",
              border: "none",
              backgroundColor: "#E8345A",
              fontSize: "14px",
              fontWeight: 600,
              color: "#FFFFFF",
              cursor: "pointer",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <Plus size={16} />
            Upload
          </button>
        </div>

        {/* Container */}
        <div
          style={{
            borderRadius: "16px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E8E8F0",
            boxShadow: "0px 4px 16px rgba(0,0,0,0.04)",
            padding: "32px",
          }}
        >
          {/* Controls bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              marginBottom: "32px",
              flexWrap: "wrap",
            }}
          >
            {/* Left: Show entries */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#9FA2B4" }}>
              <span>Show</span>
              <div style={{ position: "relative", display: "flex", alignItems: "center", border: "1px solid #E8E8F0", borderRadius: "8px", backgroundColor: "#FFFFFF" }}>
                <select
                  value={entries}
                  onChange={(e) => { setEntries(Number(e.target.value)); setPage(1); }}
                  style={{
                    appearance: "none",
                    padding: "8px 32px 8px 16px",
                    fontSize: "14px",
                    fontWeight: 600,
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                    backgroundColor: "transparent",
                    color: "#190044",
                  }}
                >
                  {[6, 12, 24, 48].map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
                <ChevronDown size={14} style={{ position: "absolute", right: "10px", color: "#9FA2B4", pointerEvents: "none" }} />
              </div>
              <span>Entries</span>
            </div>

            {/* Right: Search + Refresh */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 16px",
                  borderRadius: "12px",
                  border: "1px solid #E8E8F0",
                  backgroundColor: "#FFFFFF",
                  minWidth: "280px",
                }}
              >
                <Search size={16} style={{ color: "#9FA2B4" }} />
                <input
                  type="text"
                  placeholder="Search library..."
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                  style={{
                    backgroundColor: "transparent",
                    outline: "none",
                    border: "none",
                    fontSize: "14px",
                    flex: 1,
                    color: "#190044",
                  }}
                />
              </div>
              <button
                onClick={handleRefresh}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  border: "1px solid #E8E8F0",
                  backgroundColor: "#FFFFFF",
                  cursor: "pointer",
                  transition: "background-color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F5F6FA")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
              >
                <RefreshCw size={18} style={{ color: "#9FA2B4" }} />
              </button>
            </div>
          </div>

          {/* Media grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
              marginBottom: "32px",
            }}
          >
            {paginated.map((item) => (
              <div
                key={item.id}
                style={{
                  borderRadius: "12px",
                  border: "1px solid #E8E8F0",
                  backgroundColor: "#FFFFFF",
                  overflow: "hidden",
                  boxShadow: "0px 2px 8px rgba(0,0,0,0.04)",
                  transition: "box-shadow 0.15s, transform 0.15s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0px 4px 16px rgba(0,0,0,0.08)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0px 2px 8px rgba(0,0,0,0.04)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Image */}
                <div style={{ position: "relative", paddingTop: "75%", backgroundColor: "#F5F6FA" }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <button
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      border: "none",
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.95)")}
                  >
                    <MoreVertical size={16} style={{ color: "#190044" }} />
                  </button>
                </div>

                {/* Info */}
                <div style={{ padding: "12px 16px" }}>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#190044",
                      marginBottom: "6px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.name}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#9FA2B4" }}>
                    <span>⏱ Uploaded : {item.uploaded}</span>
                    <span>{item.size}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "24px",
              borderTop: "1px solid #E8E8F0",
            }}
          >
            <p style={{ fontSize: "14px", color: "#9FA2B4" }}>
              Showing {totalShownStart} to {totalShownEnd} of {filtered.length} entries
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                style={{
                  padding: "8px 16px",
                  fontSize: "14px",
                  borderRadius: "8px",
                  fontWeight: 500,
                  border: "1px solid #E8E8F0",
                  color: page === 1 ? "#9FA2B4" : "#190044",
                  backgroundColor: "#FFFFFF",
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
                    width: "36px",
                    height: "36px",
                    fontSize: "14px",
                    borderRadius: "8px",
                    fontWeight: 500,
                    backgroundColor: page === p ? "#E8345A" : "#FFFFFF",
                    color: page === p ? "#FFFFFF" : "#190044",
                    border: page === p ? "none" : "1px solid #E8E8F0",
                    cursor: "pointer",
                  }}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                style={{
                  padding: "8px 16px",
                  fontSize: "14px",
                  borderRadius: "8px",
                  fontWeight: 500,
                  border: "1px solid #E8E8F0",
                  color: page === totalPages ? "#9FA2B4" : "#190044",
                  backgroundColor: "#FFFFFF",
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