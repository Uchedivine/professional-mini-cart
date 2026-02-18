"use client";

import MainLayout from "@/components/layout/MainLayout";

export default function EmailTemplatesPage() {
    const templates = [
        {
            id: 1,
            name: "Welcome Email Template",
            title: "Welcome",
            message: "Dear (First name),\n\nLorem ipsum dolor sit amet consectetur. Nunc auctor cras purus quis ullamcorper auctor dapibus pellentesque eu. Euismod in quam metus volutpat eget proin nisl volutpat eget. Mattis dui massa faucibus aliquet. Scelerisque suspendisse sed diam ac nulla. Etiam libero est sed pulvinar ullamcorper sit."
        },
        {
            id: 2,
            name: "Reset Password Email Template",
            title: "Welcome",
            message: "Dear (First name),\n\nLorem ipsum dolor sit amet consectetur. Nunc auctor cras purus quis ullamcorper auctor dapibus pellentesque eu. Euismod in quam metus volutpat eget proin nisl volutpat eget. Mattis dui massa faucibus aliquet. Scelerisque suspendisse sed diam ac nulla. Etiam libero est sed pulvinar ullamcorper sit."
        },
        {
            id: 3,
            name: "Enrollment Notification Email Template",
            title: "Welcome",
            message: "Dear (First name),\n\nLorem ipsum dolor sit amet consectetur. Nunc auctor cras purus quis ullamcorper auctor dapibus pellentesque eu. Euismod in quam metus volutpat eget proin nisl volutpat eget. Mattis dui massa faucibus aliquet. Scelerisque suspendisse sed diam ac nulla. Etiam libero est sed pulvinar ullamcorper sit."
        },
        {
            id: 4,
            name: "Verification Email Template",
            title: "Welcome",
            message: "Dear (First name),\n\nLorem ipsum dolor sit amet consectetur. Nunc auctor cras purus quis ullamcorper auctor dapibus pellentesque eu. Euismod in quam metus volutpat eget proin nisl volutpat eget. Mattis dui massa faucibus aliquet. Scelerisque suspendisse sed diam ac nulla. Etiam libero est sed pulvinar ullamcorper sit."
        }
    ];

    return (
        <MainLayout>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "8px" }}>
                {/* Header Section */}
                <div>
                    <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#190044", margin: 0 }}>
                        Email Templates
                    </h1>
                    <p style={{ fontSize: "14px", marginTop: "4px", color: "#9FA2B4", display: "flex", alignItems: "center", gap: "6px" }}>
                        <span>Home</span>
                        <span style={{ fontSize: "12px" }}>›</span>
                        <span style={{ color: "#E8345A" }}>Email Templates</span>
                    </p>
                </div>

                {/* Template Cards List */}
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    {templates.map((template) => (
                        <div
                            key={template.id}
                            style={{
                                backgroundColor: "#FFFFFF",
                                borderRadius: "16px",
                                border: "1px solid #E8E8F0",
                                boxShadow: "0px 4px 16px rgba(0,0,0,0.04)",
                                padding: "32px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "24px"
                            }}
                        >
                            <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#190044", margin: 0 }}>
                                {template.id}. {template.name}
                            </h2>

                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                <label style={{ fontSize: "14px", fontWeight: 600, color: "#190044" }}>Title</label>
                                <input
                                    type="text"
                                    defaultValue={template.title}
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

                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                <label style={{ fontSize: "14px", fontWeight: 600, color: "#190044" }}>Message</label>
                                <textarea
                                    defaultValue={template.message}
                                    style={{
                                        width: "100%",
                                        minHeight: "140px",
                                        padding: "16px",
                                        borderRadius: "8px",
                                        border: "1px solid #E8E8F0",
                                        fontSize: "14px",
                                        color: "#9FA2B4",
                                        backgroundColor: "#FFFFFF",
                                        resize: "none",
                                        lineHeight: "1.6"
                                    }}
                                />
                            </div>

                            <div>
                                <button
                                    style={{
                                        backgroundColor: "#E8345A",
                                        color: "#FFFFFF",
                                        padding: "12px 32px",
                                        borderRadius: "8px",
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        border: "none",
                                        cursor: "pointer"
                                    }}
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}
