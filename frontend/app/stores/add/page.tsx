"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Plus } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { api } from "@/lib/api";

export default function AddStorePage() {
  const [domain, setDomain] = useState("");
  const [planId, setPlanId] = useState("");
  const [status, setStatus] = useState("Pending");
  const [userEmail, setUserEmail] = useState("admin@minicart.localhost");
  const [availablePlans, setAvailablePlans] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const plans = await api.get("/plans");
        setAvailablePlans(plans);
        if (plans.length > 0) setPlanId(plans[0].id.toString());
      } catch (err) {
        console.error("Failed to fetch plans:", err);
      }
    };
    fetchPlans();
  }, []);

  const handleCreateStore = async () => {
    setIsLoading(true);
    setMessage(null);
    try {
      // In a real app, we'd search for user_id. Here we assume the seeded admin user
      const user = await api.get("/profile");

      await api.post("/stores", {
        domain: domain.endsWith(".localhost") ? domain : `${domain}.localhost`,
        plan_id: planId,
        status: status,
        user_id: user.id
      });
      setMessage({ type: "success", text: "Store created successfully!" });
      setDomain("");
    } catch (err: any) {
      setMessage({ type: "error", text: err.message || "Failed to create store" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <div style={{ display: "flex", flexDirection: "column", gap: "28px", padding: "8px" }}>
        {/* Page title + Breadcrumb */}
        <div>
          <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#190044", margin: 0 }}>
            Add New Store
          </h1>
          <p style={{ fontSize: "14px", marginTop: "4px", color: "#9FA2B4", display: "flex", alignItems: "center", gap: "6px" }}>
            <span>Home</span>
            <span style={{ fontSize: "12px" }}>›</span>
            <span style={{ color: "#E8345A" }}>Stores</span>
          </p>
        </div>

        {/* Form Card */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            border: "1px solid #E8E8F0",
            boxShadow: "0px 4px 16px rgba(0,0,0,0.04)",
            padding: "40px",
            maxWidth: "760px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {/* Domain */}
            <div>
              <label style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#190044", marginBottom: "8px" }}>
                Domain
              </label>
              <div style={{ display: "flex", borderRadius: "8px", border: "1px solid #E8E8F0", overflow: "hidden" }}>
                <input
                  type="text"
                  placeholder="Input domain name"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  style={{
                    flex: 1,
                    padding: "14px 16px",
                    fontSize: "14px",
                    color: "#190044",
                    border: "none",
                    outline: "none",
                  }}
                />
                <div style={{ backgroundColor: "#F5F6FA", padding: "14px 24px", color: "#190044", fontSize: "14px", fontWeight: 500, borderLeft: "1px solid #E8E8F0", display: "flex", alignItems: "center" }}>
                  .Localhost
                </div>
              </div>
            </div>

            {/* Plan */}
            <div>
              <label style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#190044", marginBottom: "8px" }}>
                Plan
              </label>
              <div style={{ position: "relative" }}>
                <select
                  value={planId}
                  onChange={(e) => setPlanId(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "14px 40px 14px 16px",
                    borderRadius: "8px",
                    border: "1px solid #E8E8F0",
                    backgroundColor: "#FFFFFF",
                    fontSize: "14px",
                    color: !planId ? "#9FA2B4" : "#190044",
                    appearance: "none",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  <option value="" disabled>Select plan</option>
                  {availablePlans.map((p) => (
                    <option key={p.id} value={p.id}>{p.title}</option>
                  ))}
                </select>
                <ChevronDown size={16} style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#9FA2B4" }} />
              </div>
            </div>

            {/* Status */}
            <div>
              <label style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#190044", marginBottom: "8px" }}>
                Status
              </label>
              <div style={{ position: "relative" }}>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "14px 40px 14px 16px",
                    borderRadius: "8px",
                    border: "1px solid #E8E8F0",
                    backgroundColor: "#FFFFFF",
                    fontSize: "14px",
                    color: "#190044",
                    appearance: "none",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  <option>Active</option>
                  <option>Pending</option>
                  <option>Expired</option>
                  <option>Suspended</option>
                </select>
                <ChevronDown size={16} style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#9FA2B4" }} />
              </div>
            </div>

            {/* User */}
            <div>
              <label style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#190044", marginBottom: "8px" }}>
                User
              </label>
              <div style={{ display: "flex", gap: "12px" }}>
                <input
                  type="text"
                  placeholder="Type to search"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  style={{ flex: 1, padding: "14px 16px", borderRadius: "8px", border: "1px solid #E8E8F0", fontSize: "14px", color: "#190044", outline: "none" }}
                />
                <button style={{ display: "flex", alignItems: "center", gap: "8px", padding: "14px 24px", borderRadius: "8px", border: "1px solid #E8345A", backgroundColor: "#FFFFFF", fontSize: "14px", fontWeight: 600, color: "#E8345A", cursor: "pointer" }}>
                  <Plus size={16} /> Add User
                </button>
              </div>
            </div>

            {/* Create Store button */}
            <button
              onClick={handleCreateStore}
              disabled={isLoading}
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "8px",
                backgroundColor: isLoading ? "#4B4B4B" : "#E8345A",
                color: "#FFFFFF",
                fontSize: "14px",
                fontWeight: 600,
                border: "none",
                cursor: isLoading ? "not-allowed" : "pointer",
                marginTop: "12px",
              }}
            >
              {isLoading ? "Creating Store..." : "Create Store"}
            </button>

            {message && (
              <div style={{ marginTop: "16px", padding: "12px", borderRadius: "8px", backgroundColor: message.type === "success" ? "#E6F4EA" : "#FDE8E8", color: message.type === "success" ? "#1E7E34" : "#C81E1E", fontSize: "13px", fontWeight: 600, textAlign: "center" }}>
                {message.text}
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}