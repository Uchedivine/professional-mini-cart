"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

export default function AddPagePage() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Select status");
  const [description, setDescription] = useState("");

  const handlePublish = () => {
    console.log({ title, status, description });
    alert("Page published!");
  };

  return (
    <MainLayout>
      <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        {/* Page title */}
        <div>
          <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#190044", marginBottom: "4px" }}>
            Add New Page
          </h1>
          <p style={{ fontSize: "14px", color: "#9FA2B4" }}>
            <span>Home</span>
            <span style={{ margin: "0 6px" }}>›</span>
            <span style={{ color: "#E8345A" }}>Pages</span>
          </p>
        </div>

        {/* Form card */}
        <div
          style={{
            borderRadius: "16px",
            backgroundColor: "#FFFFFF",
            padding: "32px",
            border: "1px solid #E8E8F0",
            boxShadow: "0px 4px 16px rgba(0,0,0,0.04)",
            maxWidth: "720px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Title */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#190044",
                  marginBottom: "8px",
                }}
              >
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
                  borderRadius: "12px",
                  border: "1px solid #E8E8F0",
                  fontSize: "14px",
                  color: "#190044",
                  outline: "none",
                  backgroundColor: "#FFFFFF",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#E8345A")}
                onBlur={(e) => (e.target.style.borderColor = "#E8E8F0")}
              />
            </div>

            {/* Status */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#190044",
                  marginBottom: "8px",
                }}
              >
                Status
              </label>
              <div style={{ position: "relative" }}>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  style={{
                    width: "100%",
                    appearance: "none",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    border: "1px solid #E8E8F0",
                    fontSize: "14px",
                    color: status === "Select status" ? "#9FA2B4" : "#190044",
                    backgroundColor: "#FFFFFF",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  <option disabled>Select status</option>
                  <option>Published</option>
                  <option>Draft</option>
                  <option>Publish</option>
                </select>
                <ChevronDown
                  size={16}
                  style={{
                    position: "absolute",
                    right: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#9FA2B4",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#190044",
                  marginBottom: "8px",
                }}
              >
                Description
              </label>
              <textarea
                placeholder="Description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={8}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "12px",
                  border: "1px solid #E8E8F0",
                  fontSize: "14px",
                  color: "#190044",
                  outline: "none",
                  resize: "none",
                  backgroundColor: "#FFFFFF",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#E8345A")}
                onBlur={(e) => (e.target.style.borderColor = "#E8E8F0")}
              />
            </div>

            {/* Publish button */}
            <button
              onClick={handlePublish}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "12px",
                border: "none",
                backgroundColor: "#E8345A",
                fontSize: "14px",
                fontWeight: 600,
                color: "#FFFFFF",
                cursor: "pointer",
                transition: "opacity 0.15s",
                marginTop: "8px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}