"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

export default function PaymentGatewayPage() {
    const [paystackEnabled, setPaystackEnabled] = useState(true);
    const [flutterwaveEnabled, setFlutterwaveEnabled] = useState(true);

    return (
        <MainLayout>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "8px" }}>
                {/* Header Section */}
                <div>
                    <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#190044", margin: 0 }}>
                        Payment Gateway
                    </h1>
                    <p style={{ fontSize: "14px", marginTop: "4px", color: "#9FA2B4", display: "flex", alignItems: "center", gap: "6px" }}>
                        <span>Home</span>
                        <span style={{ fontSize: "12px" }}>›</span>
                        <span style={{ color: "#E8345A" }}>Payment Gateway</span>
                    </p>
                </div>

                {/* Main Content Grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "32px",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    border: "1px solid #E8E8F0",
                    boxShadow: "0px 4px 16px rgba(0,0,0,0.04)",
                    padding: "40px",
                }}>

                    {/* Paystack Settings Section */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                        <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#190044", marginBottom: "8px" }}>Paystack Settings</h2>

                        {/* Enable Toggle */}
                        <div style={{
                            border: "1px solid #E8E8F0",
                            borderRadius: "8px",
                            padding: "12px 16px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}>
                            <span style={{ fontSize: "14px", color: "#9FA2B4" }}>Enable</span>
                            <div
                                onClick={() => setPaystackEnabled(!paystackEnabled)}
                                style={{
                                    width: "36px",
                                    height: "20px",
                                    borderRadius: "99px",
                                    backgroundColor: paystackEnabled ? "#10B981" : "#E2E8F0",
                                    position: "relative",
                                    cursor: "pointer",
                                    transition: "background-color 0.2s"
                                }}
                            >
                                <div style={{
                                    width: "14px",
                                    height: "14px",
                                    borderRadius: "50%",
                                    backgroundColor: "#FFFFFF",
                                    position: "absolute",
                                    top: "3px",
                                    left: paystackEnabled ? "19px" : "3px",
                                    transition: "left 0.2s"
                                }} />
                            </div>
                        </div>

                        {/* Paystack Fields */}
                        {[
                            { label: "Test Public Key", placeholder: "Enter" },
                            { label: "Test Secret Key", placeholder: "Enter" },
                            { label: "Live Public Key", placeholder: "Enter" },
                            { label: "Live Secret Key", placeholder: "Enter" },
                            { label: "Merchant Email", placeholder: "Enter" },
                        ].map((field, idx) => (
                            <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                <label style={{ fontSize: "14px", fontWeight: 600, color: "#190044" }}>{field.label}</label>
                                <input
                                    type="text"
                                    placeholder={field.placeholder}
                                    style={{
                                        width: "100%",
                                        padding: "12px 16px",
                                        borderRadius: "8px",
                                        border: "1px solid #E8E8F0",
                                        fontSize: "14px",
                                        color: "#190044",
                                        backgroundColor: "#FFFFFF"
                                    }}
                                />
                            </div>
                        ))}

                        {/* Paystack Mode Select */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label style={{ fontSize: "14px", fontWeight: 600, color: "#190044" }}>Paystack Mode</label>
                            <div style={{ position: "relative" }}>
                                <select style={{
                                    width: "100%",
                                    appearance: "none",
                                    padding: "12px 16px",
                                    borderRadius: "8px",
                                    border: "1px solid #E8E8F0",
                                    backgroundColor: "#FFFFFF",
                                    fontSize: "14px",
                                    color: "#9FA2B4",
                                    cursor: "pointer"
                                }}>
                                    <option>Select</option>
                                    <option>Test</option>
                                    <option>Live</option>
                                </select>
                                <ChevronDown size={14} style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", color: "#9FA2B4", pointerEvents: "none" }} />
                            </div>
                        </div>

                        <div style={{ marginTop: "12px" }}>
                            <button style={{
                                backgroundColor: "#E8345A",
                                color: "#FFFFFF",
                                padding: "12px 32px",
                                borderRadius: "8px",
                                fontSize: "14px",
                                fontWeight: 600,
                                border: "none",
                                cursor: "pointer"
                            }}>
                                Save Changes
                            </button>
                        </div>
                    </div>

                    {/* Flutterwave Settings Section */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                        <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#190044", marginBottom: "8px" }}>Flutterwave Settings</h2>

                        {/* Enable Toggle */}
                        <div style={{
                            border: "1px solid #E8E8F0",
                            borderRadius: "8px",
                            padding: "12px 16px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}>
                            <span style={{ fontSize: "14px", color: "#9FA2B4" }}>Enable</span>
                            <div
                                onClick={() => setFlutterwaveEnabled(!flutterwaveEnabled)}
                                style={{
                                    width: "36px",
                                    height: "20px",
                                    borderRadius: "99px",
                                    backgroundColor: flutterwaveEnabled ? "#10B981" : "#E2E8F0",
                                    position: "relative",
                                    cursor: "pointer",
                                    transition: "background-color 0.2s"
                                }}
                            >
                                <div style={{
                                    width: "14px",
                                    height: "14px",
                                    borderRadius: "50%",
                                    backgroundColor: "#FFFFFF",
                                    position: "absolute",
                                    top: "3px",
                                    left: flutterwaveEnabled ? "19px" : "3px",
                                    transition: "left 0.2s"
                                }} />
                            </div>
                        </div>

                        {/* Flutterwave Fields */}
                        {[
                            { label: "Test Public Key", placeholder: "Enter" },
                            { label: "Test Secret Key", placeholder: "Enter" },
                            { label: "Test Encryption Key", placeholder: "Enter" },
                            { label: "Live Public Key", placeholder: "Enter" },
                            { label: "Live Secret Key", placeholder: "Enter" },
                            { label: "Live Encryption Key", placeholder: "Enter" },
                            { label: "Merchant Email", placeholder: "Enter" },
                        ].map((field, idx) => (
                            <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                <label style={{ fontSize: "14px", fontWeight: 600, color: "#190044" }}>{field.label}</label>
                                <input
                                    type="text"
                                    placeholder={field.placeholder}
                                    style={{
                                        width: "100%",
                                        padding: "12px 16px",
                                        borderRadius: "8px",
                                        border: "1px solid #E8E8F0",
                                        fontSize: "14px",
                                        color: "#190044",
                                        backgroundColor: "#FFFFFF"
                                    }}
                                />
                            </div>
                        ))}

                        {/* Flutterwave Mode Select */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label style={{ fontSize: "14px", fontWeight: 600, color: "#190044" }}>Flutterwave Mode</label>
                            <div style={{ position: "relative" }}>
                                <select style={{
                                    width: "100%",
                                    appearance: "none",
                                    padding: "12px 16px",
                                    borderRadius: "8px",
                                    border: "1px solid #E8E8F0",
                                    backgroundColor: "#FFFFFF",
                                    fontSize: "14px",
                                    color: "#9FA2B4",
                                    cursor: "pointer"
                                }}>
                                    <option>Select</option>
                                    <option>Test</option>
                                    <option>Live</option>
                                </select>
                                <ChevronDown size={14} style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", color: "#9FA2B4", pointerEvents: "none" }} />
                            </div>
                        </div>

                        <div style={{ marginTop: "12px" }}>
                            <button style={{
                                backgroundColor: "#E8345A",
                                color: "#FFFFFF",
                                padding: "12px 32px",
                                borderRadius: "8px",
                                fontSize: "14px",
                                fontWeight: 600,
                                border: "none",
                                cursor: "pointer"
                            }}>
                                Save Changes
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
