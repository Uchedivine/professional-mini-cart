"use client";

import { useState } from "react";
import { Search, ChevronDown, MoreVertical, Plus } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

const USERS_DATA = [
    { id: 1, userId: "95214362", name: "Ralph Edwards", email: "debbie.bakker@example.com", type: "Admin", createdAt: "21 Sep, 2025", status: "Active", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ralph" },
    { id: 2, userId: "51746385", name: "Arlene McCoy", email: "debra.holt@example.com", type: "User", createdAt: "21 Sep, 2025", status: "Inactive", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arlene" },
    { id: 3, userId: "673971743", name: "Darlene Robertson", email: "kenzi.lawson@example.com", type: "Admin", createdAt: "21 Sep, 2025", status: "Suspended", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Darlene" },
    { id: 4, userId: "71667167", name: "Annette Black", email: "tim.jennings@example.com", type: "Admin", createdAt: "21 Sep, 2025", status: "Banned", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Annette" },
    { id: 5, userId: "96459761", name: "Cody Fisher", email: "deanna.curtis@example.com", type: "Admin", createdAt: "21 Sep, 2025", status: "Active", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cody" },
    { id: 6, userId: "96459761", name: "Jane Cooper", email: "tanya.hill@example.com", type: "User", createdAt: "21 Sep, 2025", status: "Active", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane" },
    { id: 7, userId: "96459761", name: "Leslie Alexander", email: "michael.mitc@example.com", type: "User", createdAt: "21 Sep, 2025", status: "Active", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leslie" },
    { id: 8, userId: "673971743", name: "Marvin McKinney", email: "bill.sanders@example.com", type: "Admin", createdAt: "21 Sep, 2025", status: "Active", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marvin" },
];

const STATUS_STYLES: Record<string, { bg: string; color: string }> = {
    Active: { bg: "#E6F4EA", color: "#1E7E34" },
    Inactive: { bg: "#F2F2F2", color: "#545454" },
    Suspended: { bg: "#FFF8E1", color: "#F59E0B" },
    Banned: { bg: "#FEE2E2", color: "#EF4444" },
};

export default function UsersPage() {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All Status");
    const [type, setType] = useState("All Types");
    const [entries, setEntries] = useState(8);
    const [page, setPage] = useState(1);
    const [selected, setSelected] = useState<number[]>([]);

    const filtered = USERS_DATA.filter((u) => {
        const matchSearch =
            u.name.toLowerCase().includes(search.toLowerCase()) ||
            u.userId.includes(search) ||
            u.email.toLowerCase().includes(search.toLowerCase());
        const matchStatus = status === "All Status" || u.status === status;
        const matchType = type === "All Types" || u.type === type;
        return matchSearch && matchStatus && matchType;
    });

    const totalPages = Math.ceil(filtered.length / entries);
    const paginated = filtered.slice((page - 1) * entries, page * entries);
    const totalShownStart = filtered.length === 0 ? 0 : (page - 1) * entries + 1;
    const totalShownEnd = Math.min(page * entries, filtered.length);

    const toggleSelect = (id: number) =>
        setSelected((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);

    const toggleAll = () =>
        setSelected(selected.length === paginated.length && paginated.length > 0 ? [] : paginated.map((u) => u.id));

    const COLUMNS = ["User ID", "Name", "Type", "Created At", "Status", "Action"];

    return (
        <MainLayout>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "8px" }}>

                {/* Header Section */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                        <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#190044", margin: 0 }}>
                            All User
                        </h1>
                        <p style={{ fontSize: "14px", marginTop: "4px", color: "#9FA2B4", display: "flex", alignItems: "center", gap: "6px" }}>
                            <span>Home</span>
                            <span style={{ fontSize: "12px" }}>›</span>
                            <span style={{ color: "#E8345A" }}>User</span>
                        </p>
                    </div>
                    <button
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
                        Add User
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
                            Resent Stores
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

                    {/* Filters: Search, Status, Type */}
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
                                flex: 1,
                                maxWidth: "320px",
                            }}
                        >
                            <Search size={15} style={{ color: "#9FA2B4" }} />
                            <input
                                type="text"
                                placeholder="Search user..."
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

                        <div style={{ display: "flex", gap: "12px" }}>
                            <div style={{ position: "relative", minWidth: "140px" }}>
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
                                    {["All Status", "Active", "Inactive", "Suspended", "Banned"].map((s) => (
                                        <option key={s}>{s}</option>
                                    ))}
                                </select>
                                <ChevronDown size={14} style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#9FA2B4" }} />
                            </div>

                            <div style={{ position: "relative", minWidth: "140px" }}>
                                <select
                                    value={type}
                                    onChange={(e) => { setType(e.target.value); setPage(1); }}
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
                                    {["All Types", "Admin", "User"].map((t) => (
                                        <option key={t}>{t}</option>
                                    ))}
                                </select>
                                <ChevronDown size={14} style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#9FA2B4" }} />
                            </div>
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
                                {paginated.map((u) => (
                                    <tr
                                        key={u.id}
                                        style={{
                                            borderTop: "1px solid #E8E8F0",
                                            backgroundColor: selected.includes(u.id) ? "#F9F9FF" : "#FFFFFF",
                                            transition: "background-color 0.15s",
                                        }}
                                        onMouseEnter={(e) => { if (!selected.includes(u.id)) (e.currentTarget as HTMLTableRowElement).style.backgroundColor = "#FAFAFA"; }}
                                        onMouseLeave={(e) => { if (!selected.includes(u.id)) (e.currentTarget as HTMLTableRowElement).style.backgroundColor = "#FFFFFF"; }}
                                    >
                                        <td style={{ padding: "16px 20px", textAlign: "center", borderRight: "1px solid #E8E8F0" }}>
                                            <input
                                                type="checkbox"
                                                checked={selected.includes(u.id)}
                                                onChange={() => toggleSelect(u.id)}
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
                                            {u.userId}
                                        </td>
                                        <td style={{ padding: "16px 20px", borderRight: "1px solid #E8E8F0" }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "flex-start" }}>
                                                <img
                                                    src={u.avatar}
                                                    alt={u.name}
                                                    style={{
                                                        width: "36px",
                                                        height: "36px",
                                                        borderRadius: "50%",
                                                        objectFit: "cover",
                                                        backgroundColor: "#F5F6FA",
                                                        flexShrink: 0,
                                                    }}
                                                />
                                                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                                                    <span style={{ fontWeight: 600, color: "#190044", fontSize: "14px" }}>{u.name}</span>
                                                    <span style={{ color: "#9FA2B4", fontSize: "12px" }}>{u.email}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td style={{ padding: "16px 20px", textAlign: "center", color: "#190044", borderRight: "1px solid #E8E8F0" }}>
                                            {u.type}
                                        </td>
                                        <td style={{ padding: "16px 20px", textAlign: "center", color: "#190044", borderRight: "1px solid #E8E8F0", whiteSpace: "nowrap" }}>
                                            {u.createdAt}
                                        </td>
                                        <td style={{ padding: "16px 20px", textAlign: "center", borderRight: "1px solid #E8E8F0" }}>
                                            <span
                                                style={{
                                                    padding: "6px 12px",
                                                    borderRadius: "999px",
                                                    fontSize: "12px",
                                                    fontWeight: 700,
                                                    backgroundColor: STATUS_STYLES[u.status]?.bg || "#F2F2F2",
                                                    color: STATUS_STYLES[u.status]?.color || "#545454",
                                                    display: "inline-block",
                                                }}
                                            >
                                                {u.status}
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
                                                        color: "#999999",
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
