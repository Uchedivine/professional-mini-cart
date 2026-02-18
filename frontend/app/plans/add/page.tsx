"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

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

export default function AddPlanPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("Select status");
  const [description, setDescription] = useState("");
  const [publishStatus, setPublishStatus] = useState("Inactive");
  const [discountEnabled, setDiscountEnabled] = useState(false);
  const [applyMonthly, setApplyMonthly] = useState(false);
  const [applyYearly, setApplyYearly] = useState(false);
  const [applyQuarterly, setApplyQuarterly] = useState(false);
  const [discountAmount, setDiscountAmount] = useState("");
  const [discountType, setDiscountType] = useState("Percentage");

  const handleCreatePlan = () => {
    console.log({
      title,
      price,
      status,
      description,
      publishStatus,
      discountEnabled,
      applyMonthly,
      applyYearly,
      applyQuarterly,
      discountAmount,
      discountType,
    });
    alert("Plan created!");
  };

  return (
    <MainLayout>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {/* Page title */}
        <div>
          <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#190044", margin: 0 }}>
            Add New Plan
          </h1>
          <p style={{ fontSize: "14px", marginTop: "4px", color: "#9FA2B4", display: "flex", alignItems: "center", gap: "6px" }}>
            <span>Home</span>
            <span style={{ fontSize: "12px" }}>›</span>
            <span style={{ color: "#E8345A" }}>Plans</span>
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px", alignItems: "start" }}>

          {/* Left form Card */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              border: "1px solid #E8E8F0",
              boxShadow: "0px 4px 16px rgba(0,0,0,0.04)",
              padding: "32px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Title */}
              <div>
                <label style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#190044", marginBottom: "8px" }}>
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Input title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid #E8E8F0",
                    fontSize: "14px",
                    color: "#190044",
                    outline: "none",
                    boxSizing: "border-box"
                  }}
                />
              </div>

              {/* Price */}
              <div>
                <label style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#190044", marginBottom: "8px" }}>
                  Price
                </label>
                <input
                  type="text"
                  placeholder="Input price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid #E8E8F0",
                    fontSize: "14px",
                    color: "#190044",
                    outline: "none",
                    boxSizing: "border-box"
                  }}
                />
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
                      padding: "12px 40px 12px 16px",
                      borderRadius: "8px",
                      border: "1px solid #E8E8F0",
                      backgroundColor: "#FFFFFF",
                      fontSize: "14px",
                      color: status === "Select status" ? "#9FA2B4" : "#190044",
                      appearance: "none",
                      outline: "none",
                      cursor: "pointer"
                    }}
                  >
                    <option disabled>Select status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                  <ChevronDown
                    size={16}
                    style={{
                      position: "absolute",
                      right: "16px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                      color: "#9FA2B4"
                    }}
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#190044", marginBottom: "8px" }}>
                  Description
                </label>
                <textarea
                  placeholder="Description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={6}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid #E8E8F0",
                    fontSize: "14px",
                    color: "#190044",
                    outline: "none",
                    resize: "none",
                    boxSizing: "border-box"
                  }}
                />
              </div>

              {/* Create Plan button */}
              <button
                onClick={handleCreatePlan}
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "8px",
                  backgroundColor: "#190044",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  marginTop: "8px"
                }}
              >
                Create Plan
              </button>
            </div>
          </div>

          {/* Right sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

            {/* Status card */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                border: "1px solid #E8E8F0",
                boxShadow: "0px 4px 16px rgba(0,0,0,0.04)",
                padding: "24px",
              }}
            >
              <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#190044", margin: "0 0 16px 0" }}>
                Status
              </h3>
              <div style={{ position: "relative" }}>
                <select
                  value={publishStatus}
                  onChange={(e) => setPublishStatus(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 40px 12px 16px",
                    borderRadius: "8px",
                    border: "1px solid #E8E8F0",
                    backgroundColor: "#FFFFFF",
                    fontSize: "14px",
                    color: "#190044",
                    appearance: "none",
                    outline: "none",
                    cursor: "pointer"
                  }}
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
                <ChevronDown
                  size={16}
                  style={{
                    position: "absolute",
                    right: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                    color: "#9FA2B4"
                  }}
                />
              </div>
              <button
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "8px",
                  backgroundColor: "#190044",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  marginTop: "16px"
                }}
              >
                Publish
              </button>
            </div>

            {/* Discount card */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                border: "1px solid #E8E8F0",
                boxShadow: "0px 4px 16px rgba(0,0,0,0.04)",
                padding: "24px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#190044", margin: 0 }}>
                  Discount
                </h3>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "14px", color: "#6B7280" }}>Enable Discount</span>
                  <Toggle
                    active={discountEnabled}
                    onToggle={() => setDiscountEnabled(!discountEnabled)}
                  />
                </div>

                <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: "20px" }}>
                  <p style={{ fontSize: "14px", fontWeight: 600, color: "#190044", marginBottom: "16px", marginTop: 0 }}>
                    Apply Discount to:
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {[
                      { label: "Monthly", checked: applyMonthly, setter: setApplyMonthly },
                      { label: "Yearly", checked: applyYearly, setter: setApplyYearly },
                      { label: "Quarterly", checked: applyQuarterly, setter: setApplyQuarterly },
                    ].map((item) => (
                      <label
                        key={item.label}
                        style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
                      >
                        <input
                          type="checkbox"
                          checked={item.checked}
                          onChange={(e) => item.setter(e.target.checked)}
                          style={{
                            width: "18px",
                            height: "18px",
                            borderRadius: "4px",
                            border: "1px solid #E8E8F0",
                            accentColor: "#190044",
                            cursor: "pointer"
                          }}
                        />
                        <span style={{ fontSize: "14px", color: "#190044" }}>{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: "20px" }}>
                  <p style={{ fontSize: "14px", fontWeight: 600, color: "#190044", marginBottom: "12px", marginTop: 0 }}>
                    Discount Amount
                  </p>
                  <div style={{ display: "flex", gap: "0px", borderRadius: "8px", border: "1px solid #E8E8F0", overflow: "hidden" }}>
                    <input
                      type="text"
                      placeholder="Enter amount"
                      value={discountAmount}
                      onChange={(e) => setDiscountAmount(e.target.value)}
                      style={{
                        flex: 1,
                        padding: "12px 16px",
                        border: "none",
                        fontSize: "14px",
                        color: "#190044",
                        outline: "none",
                      }}
                    />
                    <div style={{ position: "relative", width: "120px", borderLeft: "1px solid #E8E8F0" }}>
                      <select
                        value={discountType}
                        onChange={(e) => setDiscountType(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "12px 32px 12px 12px",
                          backgroundColor: "#F9FAFB",
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "#190044",
                          appearance: "none",
                          border: "none",
                          outline: "none",
                          cursor: "pointer"
                        }}
                      >
                        <option>Percentage</option>
                        <option>Fixed</option>
                      </select>
                      <ChevronDown
                        size={14}
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          pointerEvents: "none",
                          color: "#9FA2B4"
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}