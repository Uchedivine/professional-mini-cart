"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

export default function SupportReplyPage() {
  const [reply, setReply] = useState("");

  return (
    <MainLayout>
      <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        {/* Page title */}
        <div>
          <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#190044", marginBottom: "4px" }}>
            Support Reply
          </h1>
          <p style={{ fontSize: "14px", color: "#9FA2B4" }}>
            <span>Home</span>
            <span style={{ margin: "0 6px" }}>›</span>
            <span style={{ color: "#E8345A" }}>Support Reply</span>
          </p>
        </div>

        {/* Two column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px" }}>
          {/* Left: Conversation */}
          <div style={{ borderRadius: "16px", backgroundColor: "#FFFFFF", border: "1px solid #E8E8F0", boxShadow: "0px 4px 16px rgba(0,0,0,0.04)", padding: "24px" }}>
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px", paddingBottom: "16px", borderBottom: "1px solid #E8E8F0" }}>
              <div>
                <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#190044", marginBottom: "4px" }}>
                  Request #982958195 - General Inquiry
                </h2>
                <p style={{ fontSize: "12px", color: "#9FA2B4" }}>Mon, 3:20 PM (3 days ago)</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "14px", color: "#9FA2B4" }}>4 of 120</span>
                <button style={{ width: "32px", height: "32px", borderRadius: "8px", border: "1px solid #E8E8F0", backgroundColor: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <ChevronLeft size={16} style={{ color: "#190044" }} />
                </button>
                <button style={{ width: "32px", height: "32px", borderRadius: "8px", border: "1px solid #E8E8F0", backgroundColor: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <ChevronRight size={16} style={{ color: "#190044" }} />
                </button>
              </div>
            </div>

            {/* Message */}
            <div style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  {/* Avatar Circle */}
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "#F5F6FA",
                      border: "1px solid #E8E8F0",
                      flexShrink: 0
                    }}
                  />
                  <div>
                    <p style={{ fontSize: "16px", fontWeight: 600, color: "#190044", marginBottom: "2px" }}>Leslie Alexander</p>
                    <p style={{ fontSize: "12px", color: "#9FA2B4" }}>jackson.graham@example.com</p>
                  </div>
                </div>
                <p style={{ fontSize: "12px", color: "#9FA2B4" }}>Mon, 3:20 PM (3 days ago)</p>
              </div>

              <div style={{ fontSize: "14px", lineHeight: "1.6", color: "#190044", paddingLeft: "52px" }}>
                <p style={{ marginBottom: "12px" }}>Hi Jane Austin</p>
                <p style={{ marginBottom: "12px" }}>I hope you're doing well.</p>
                <div style={{ color: "#616161", position: "relative" }}>
                  <p style={{ marginBottom: "12px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  {/* Visual indicator bar? Looking at the image, there's a light right bar, possibly a scrollbar or container edge. */}
                </div>
              </div>
            </div>

            {/* Reply box */}
            <div style={{ paddingLeft: "52px" }}>
              <textarea
                placeholder="Type Your reply here....."
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                rows={6}
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "8px",
                  border: "1px solid #E8E8F0",
                  fontSize: "14px",
                  color: "#190044",
                  outline: "none",
                  resize: "none",
                  backgroundColor: "#FFFFFF",
                  boxSizing: "border-box"
                }}
              />
            </div>
          </div>

          {/* Right: Request Details */}
          <div style={{ borderRadius: "16px", backgroundColor: "#FFFFFF", border: "1px solid #E8E8F0", boxShadow: "0px 4px 16px rgba(0,0,0,0.04)", padding: "24px", height: "fit-content" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#190044", marginBottom: "24px" }}>Request Details</h3>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {/* User */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderTop: "1px solid #E8E8F0" }}>
                <span style={{ fontSize: "14px", color: "#9FA2B4" }}>User</span>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#190044" }}>Albert Flores</span>
              </div>

              {/* Email */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderTop: "1px solid #E8E8F0" }}>
                <span style={{ fontSize: "14px", color: "#9FA2B4" }}>Email</span>
                <span style={{ fontSize: "14px", fontWeight: 600, color: "#190044", textAlign: "right", maxWidth: "160px" }}>jackson.graham@example.com</span>
              </div>

              {/* Request ID */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderTop: "1px solid #E8E8F0" }}>
                <span style={{ fontSize: "14px", color: "#9FA2B4" }}>Request ID</span>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#190044" }}>#982958195</span>
              </div>

              {/* Created At */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderTop: "1px solid #E8E8F0" }}>
                <span style={{ fontSize: "14px", color: "#9FA2B4" }}>Created At</span>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#190044" }}>17 Oct, 2025</span>
              </div>

              {/* Status */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderTop: "1px solid #E8E8F0" }}>
                <span style={{ fontSize: "14px", color: "#9FA2B4" }}>Status</span>
                <span style={{
                  padding: "4px 10px",
                  borderRadius: "999px",
                  fontSize: "11px",
                  fontWeight: 600,
                  backgroundColor: "#E6F4EA",
                  color: "#1E7E34",
                  border: "1px solid rgba(30, 126, 52, 0.1)"
                }}>
                  In Progress
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
