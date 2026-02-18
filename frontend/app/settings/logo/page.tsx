"use client";

import { useState } from "react";
import { X } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

export default function LogoManagementPage() {
    const [logos, setLogos] = useState({
        favicon: { name: "No Chosen File", preview: true },
        mainLogoWhite: { name: "No Chosen File", preview: true },
        mainLogoDark: { name: "No Chosen File", preview: true },
        adminLogoWhite: { name: "No Chosen File", preview: true },
        adminLogoDark: { name: "No Chosen File", preview: true },
    });

    const categories = [
        { id: "favicon", label: "Favicon" },
        { id: "mainLogoWhite", label: "Main Logo White" },
        { id: "mainLogoDark", label: "Main Logo Dark" },
        { id: "adminLogoWhite", label: "Admin Logo White" },
        { id: "adminLogoDark", label: "Admin Logo Dark" },
    ];

    const handleFileChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setLogos(prev => ({
                ...prev,
                [id]: { ...prev[id as keyof typeof prev], name: file.name }
            }));
        }
    };

    const removePreview = (id: string) => {
        setLogos(prev => ({
            ...prev,
            [id]: { ...prev[id as keyof typeof prev], preview: false }
        }));
    };

    return (
        <MainLayout>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "8px" }}>
                {/* Header Section */}
                <div>
                    <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#190044", margin: 0 }}>
                        Logo Management
                    </h1>
                    <p style={{ fontSize: "14px", marginTop: "4px", color: "#9FA2B4", display: "flex", alignItems: "center", gap: "6px" }}>
                        <span>Home</span>
                        <span style={{ fontSize: "12px" }}>›</span>
                        <span style={{ color: "#E8345A" }}>Logo Management</span>
                    </p>
                </div>

                {/* Logo Cards Grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "24px",
                    alignItems: "start"
                }}>
                    {categories.map((cat, idx) => (
                        <div
                            key={cat.id}
                            style={{
                                backgroundColor: "#FFFFFF",
                                borderRadius: "16px",
                                border: "1px solid #E8E8F0",
                                boxShadow: "0px 4px 16px rgba(0,0,0,0.04)",
                                padding: "24px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                                gridColumn: idx >= 3 ? "span 1" : undefined,
                                // Center the bottom 2 cards visually if needed, but per figma they just follow grid
                            }}
                        >
                            <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#190044", margin: 0 }}>
                                {cat.label}
                            </h2>

                            <hr style={{ border: "none", borderTop: "1px solid #E8E8F0", margin: 0 }} />

                            {/* Custom File Upload */}
                            <div style={{ position: "relative" }}>
                                <input
                                    type="file"
                                    onChange={(e) => handleFileChange(cat.id, e)}
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        opacity: 0,
                                        cursor: "pointer",
                                        zIndex: 2
                                    }}
                                />
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    border: "1px solid #E8E8F0",
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                    fontSize: "13px"
                                }}>
                                    <div style={{
                                        backgroundColor: "#F5F6FA",
                                        color: "#190044",
                                        padding: "10px 16px",
                                        fontWeight: 600,
                                        borderRight: "1px solid #E8E8F0"
                                    }}>
                                        Select File
                                    </div>
                                    <div style={{
                                        color: "#9FA2B4",
                                        padding: "10px 16px",
                                        flex: 1,
                                        backgroundColor: "#FFFFFF"
                                    }}>
                                        {logos[cat.id as keyof typeof logos].name}
                                    </div>
                                </div>
                            </div>

                            {/* Preview Area */}
                            <div style={{
                                height: "160px",
                                backgroundColor: "#FFFFFF",
                                borderRadius: "8px",
                                border: "1px solid #E8E8F0",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "20px"
                            }}>
                                {logos[cat.id as keyof typeof logos].preview && (
                                    <>
                                        <button
                                            onClick={() => removePreview(cat.id)}
                                            style={{
                                                position: "absolute",
                                                top: "12px",
                                                right: "12px",
                                                backgroundColor: "transparent",
                                                border: "none",
                                                color: "#190044",
                                                cursor: "pointer",
                                                padding: 0
                                            }}
                                        >
                                            <X size={20} />
                                        </button>
                                        <img
                                            src="/minicartlogo.png"
                                            alt="Logo Preview"
                                            style={{ maxWidth: "80%", maxHeight: "60%", objectFit: "contain" }}
                                        />
                                    </>
                                )}
                            </div>

                            {/* Save Button */}
                            <button
                                style={{
                                    backgroundColor: "#D97706",
                                    color: "#FFFFFF",
                                    padding: "12px",
                                    borderRadius: "8px",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    border: "none",
                                    cursor: "pointer",
                                    width: "100%"
                                }}
                            >
                                Save
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}
