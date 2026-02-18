"use client";

import { useState, useMemo, useEffect } from "react";
import { User, Briefcase, Mail, Phone, Calendar, UserPlus, CheckCircle, ChevronDown, Eye, EyeOff, Upload } from "lucide-react";
import { Country, State, City } from 'country-state-city';
import MainLayout from "@/components/layout/MainLayout";

export default function ProfileSettingsPage() {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [isAdmin, setIsAdmin] = useState(true);
    const [isVerified, setIsVerified] = useState(true);

    // Form States
    const [firstName, setFirstName] = useState("Jane");
    const [lastName, setLastName] = useState("Austin");
    const [email, setEmail] = useState("trungkienpsktnd@gmail.com");
    const [phone, setPhone] = useState("07023859914");
    const [address, setAddress] = useState("775 Rolling Green Rd.");
    const [birthday, setBirthday] = useState("Oct 03, 1976");
    const [gender, setGender] = useState("Female");

    // Dynamic Location States
    const [countryCode, setCountryCode] = useState("NG"); // Default Nigeria
    const [stateCode, setStateCode] = useState("RI"); // Default Rivers
    const [cityName, setCityName] = useState("Port-Harcourt");

    const countries = useMemo(() => Country.getAllCountries(), []);
    const states = useMemo(() => State.getStatesOfCountry(countryCode), [countryCode]);
    const cities = useMemo(() => City.getCitiesOfState(countryCode, stateCode), [countryCode, stateCode]);

    // Reset state and city when country changes
    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newCountryCode = e.target.value;
        setCountryCode(newCountryCode);
        const firstState = State.getStatesOfCountry(newCountryCode)[0];
        if (firstState) {
            setStateCode(firstState.isoCode);
            const firstCity = City.getCitiesOfState(newCountryCode, firstState.isoCode)[0];
            setCityName(firstCity ? firstCity.name : "");
        } else {
            setStateCode("");
            setCityName("");
        }
    };

    // Reset city when state changes
    const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newStateCode = e.target.value;
        setStateCode(newStateCode);
        const firstCity = City.getCitiesOfState(countryCode, newStateCode)[0];
        setCityName(firstCity ? firstCity.name : "");
    };

    return (
        <MainLayout>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "8px" }}>
                {/* Header Section */}
                <div>
                    <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#190044", margin: 0 }}>
                        Profile Settings
                    </h1>
                    <p style={{ fontSize: "14px", marginTop: "4px", color: "#9FA2B4", display: "flex", alignItems: "center", gap: "6px" }}>
                        <span>Home</span>
                        <span style={{ fontSize: "12px" }}>›</span>
                        <span style={{ color: "#E8345A" }}>Profile Settings</span>
                    </p>
                </div>

                {/* Main Card */}
                <div
                    style={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: "16px",
                        border: "1px solid #E8E8F0",
                        boxShadow: "0px 4px 16px rgba(0,0,0,0.04)",
                        padding: "32px",
                    }}
                >
                    <h2 style={{ fontSize: "20px", fontWeight: 600, color: "#190044", marginBottom: "32px", display: "flex", alignItems: "center", gap: "10px" }}>
                        My Profile <span style={{ fontWeight: 400, color: "#E8E8F0" }}>|</span> <span style={{ color: "#190044" }}>{firstName} {lastName}</span>
                    </h2>

                    <div style={{ display: "flex", gap: "32px" }}>
                        {/* Left Sidebar */}
                        <div style={{ width: "320px", display: "flex", flexDirection: "column", gap: "24px" }}>
                            {/* Profile Picture Box */}
                            <div style={{ border: "1px solid #E8E8F0", borderRadius: "12px", padding: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
                                <div style={{ width: "80px", height: "80px", borderRadius: "8px", overflow: "hidden", backgroundColor: "#F5F6FA" }}>
                                    <img
                                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${firstName}`}
                                        alt="Profile"
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: "15px", fontWeight: 600, color: "#190044", margin: "0 0 4px 0" }}>Profile Picture</h4>
                                    <p style={{ fontSize: "12px", color: "#9FA2B4", margin: "0 0 12px 0" }}>JPG, GIF or PNG, Max size 1MB</p>
                                    <button style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "6px",
                                        backgroundColor: "#D97706",
                                        color: "#FFFFFF",
                                        border: "none",
                                        padding: "8px 12px",
                                        borderRadius: "8px",
                                        fontSize: "12px",
                                        fontWeight: 600,
                                        cursor: "pointer"
                                    }}>
                                        <Upload size={14} /> Upload Picture
                                    </button>
                                </div>
                            </div>

                            {/* Account Summary Tiles */}
                            <div style={{ border: "1px solid #E8E8F0", borderRadius: "12px", overflow: "hidden" }}>
                                <div style={{ padding: "16px 20px", backgroundColor: "#FFFFFF" }}>
                                    <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#190044", margin: 0 }}>Account Details</h3>
                                </div>

                                {[
                                    { label: "User ID", value: "#32984", icon: UserPlus },
                                    { label: "Position", value: "Admin", icon: Briefcase },
                                    { label: "Email Address", value: email, icon: Mail },
                                    { label: "Phone Number", value: phone, icon: Phone },
                                    { label: "Age", value: birthday, icon: Calendar },
                                    { label: "Gender", value: gender, icon: User },
                                ].map((item, idx) => (
                                    <div key={idx} style={{
                                        padding: "16px 20px",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px",
                                        borderTop: "1px solid #E8E8F0"
                                    }}>
                                        <div style={{ width: "36px", height: "36px", borderRadius: "8px", backgroundColor: "#F5F6FA", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <item.icon size={18} style={{ color: "#190044" }} />
                                        </div>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <p style={{ fontSize: "11px", color: "#9FA2B4", margin: "0 0 2px 0" }}>{item.label}</p>
                                            <p style={{ fontSize: "13px", fontWeight: 600, color: "#190044", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.value}</p>
                                        </div>
                                    </div>
                                ))}

                                {/* Account Status with Toggles */}
                                <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px", borderTop: "1px solid #E8E8F0" }}>
                                    <div style={{ width: "36px", height: "36px", borderRadius: "8px", backgroundColor: "#F5F6FA", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <CheckCircle size={18} style={{ color: "#190044" }} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <p style={{ fontSize: "11px", color: "#9FA2B4", margin: "0 0 4px 0" }}>Account Status</p>
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                            <span style={{ fontSize: "11px", fontWeight: 700, color: "#1E7E34", backgroundColor: "#E6F4EA", padding: "2px 8px", borderRadius: "99px", display: "flex", alignItems: "center", gap: "4px" }}>
                                                Active <CheckCircle size={10} />
                                            </span>
                                            <button style={{ backgroundColor: "#D97706", color: "#FFFFFF", border: "none", padding: "4px 10px", borderRadius: "8px", fontSize: "11px", fontWeight: 600, cursor: "pointer" }}>Change</button>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #E8E8F0" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                        <div style={{ width: "36px", height: "36px", borderRadius: "8px", backgroundColor: "#F5F6FA", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <User size={18} style={{ color: "#190044" }} />
                                        </div>
                                        <div>
                                            <p style={{ fontSize: "13px", fontWeight: 600, color: "#190044", margin: 0 }}>Admin Status</p>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => setIsAdmin(!isAdmin)}
                                        style={{
                                            width: "36px",
                                            height: "20px",
                                            borderRadius: "99px",
                                            backgroundColor: isAdmin ? "#3B82F6" : "#E2E8F0",
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
                                            left: isAdmin ? "19px" : "3px",
                                            transition: "left 0.2s"
                                        }} />
                                    </div>
                                </div>

                                <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #E8E8F0" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                        <div style={{ width: "36px", height: "36px", borderRadius: "8px", backgroundColor: "#F5F6FA", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <CheckCircle size={18} style={{ color: "#190044" }} />
                                        </div>
                                        <div>
                                            <p style={{ fontSize: "13px", fontWeight: 600, color: "#190044", margin: 0 }}>Email Verification</p>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => setIsVerified(!isVerified)}
                                        style={{
                                            width: "36px",
                                            height: "20px",
                                            borderRadius: "99px",
                                            backgroundColor: isVerified ? "#3B82F6" : "#E2E8F0",
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
                                            left: isVerified ? "19px" : "3px",
                                            transition: "left 0.2s"
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Main Form Area */}
                        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "32px" }}>
                            {/* Account Details Form Section */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                                <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#190044", margin: 0 }}>Account Details</h3>

                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                        <label style={{ fontSize: "14px", fontWeight: 600, color: "#190044" }}>First Name</label>
                                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #E8E8F0", fontSize: "14px", color: "#190044" }} />
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                        <label style={{ fontSize: "14px", fontWeight: 600, color: "#190044" }}>Last Name</label>
                                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #E8E8F0", fontSize: "14px", color: "#190044" }} />
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                        <label style={{ fontSize: "14px", fontWeight: 600, color: "#190044" }}>Email Address</label>
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #E8E8F0", fontSize: "14px", color: "#190044" }} />
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                        <label style={{ fontSize: "14px", fontWeight: 600, color: "#190044" }}>Phone Number</label>
                                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #E8E8F0", fontSize: "14px", color: "#190044" }} />
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", gridColumn: "span 2" }}>
                                        <label style={{ fontSize: "14px", fontWeight: 600, color: "#190044" }}>Address</label>
                                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #E8E8F0", fontSize: "14px", color: "#190044" }} />
                                    </div>

                                    {/* Dynamic Country */}
                                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                        <label style={{ fontSize: "14px", fontWeight: 600, color: "#190044" }}>Country</label>
                                        <div style={{ position: "relative" }}>
                                            <select
                                                value={countryCode}
                                                onChange={handleCountryChange}
                                                style={{ width: "100%", appearance: "none", padding: "12px 40px 12px 16px", borderRadius: "8px", border: "1px solid #E8E8F0", backgroundColor: "#FFFFFF", fontSize: "14px", color: "#190044", cursor: "pointer" }}
                                            >
                                                {countries.map((c) => (
                                                    <option key={c.isoCode} value={c.isoCode}>{c.name}</option>
                                                ))}
                                            </select>
                                            <ChevronDown size={14} style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", color: "#9FA2B4", pointerEvents: "none" }} />
                                        </div>
                                    </div>

                                    {/* Dynamic State */}
                                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                        <label style={{ fontSize: "14px", fontWeight: 600, color: "#190044" }}>Select State</label>
                                        <div style={{ position: "relative" }}>
                                            <select
                                                value={stateCode}
                                                onChange={handleStateChange}
                                                disabled={states.length === 0}
                                                style={{ width: "100%", appearance: "none", padding: "12px 40px 12px 16px", borderRadius: "8px", border: "1px solid #E8E8F0", backgroundColor: states.length === 0 ? "#F9FAFB" : "#FFFFFF", fontSize: "14px", color: "#190044", cursor: states.length === 0 ? "not-allowed" : "pointer" }}
                                            >
                                                {states.length === 0 && <option value="">No States Available</option>}
                                                {states.map((s) => (
                                                    <option key={s.isoCode} value={s.isoCode}>{s.name}</option>
                                                ))}
                                            </select>
                                            <ChevronDown size={14} style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", color: "#9FA2B4", pointerEvents: "none" }} />
                                        </div>
                                    </div>

                                    {/* Dynamic City */}
                                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                        <label style={{ fontSize: "14px", fontWeight: 600, color: "#190044" }}>Select City</label>
                                        <div style={{ position: "relative" }}>
                                            <select
                                                value={cityName}
                                                onChange={(e) => setCityName(e.target.value)}
                                                disabled={cities.length === 0}
                                                style={{ width: "100%", appearance: "none", padding: "12px 40px 12px 16px", borderRadius: "8px", border: "1px solid #E8E8F0", backgroundColor: cities.length === 0 ? "#F9FAFB" : "#FFFFFF", fontSize: "14px", color: "#190044", cursor: cities.length === 0 ? "not-allowed" : "pointer" }}
                                            >
                                                {cities.length === 0 && <option value="">No Cities Available</option>}
                                                {cities.map((city) => (
                                                    <option key={city.name} value={city.name}>{city.name}</option>
                                                ))}
                                            </select>
                                            <ChevronDown size={14} style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", color: "#9FA2B4", pointerEvents: "none" }} />
                                        </div>
                                    </div>

                                    {/* Dynamic Gender Selection with Icon */}
                                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                        <label style={{ fontSize: "14px", fontWeight: 600, color: "#190044" }}>Select Gender</label>
                                        <div style={{ position: "relative" }}>
                                            <select
                                                value={gender}
                                                onChange={(e) => setGender(e.target.value)}
                                                style={{ width: "100%", appearance: "none", padding: "12px 40px 12px 44px", borderRadius: "8px", border: "1px solid #E8E8F0", backgroundColor: "#FFFFFF", fontSize: "14px", color: "#190044", cursor: "pointer" }}
                                            >
                                                {["Male", "Female", "Other", "Prefer not to say"].map((g) => (
                                                    <option key={g} value={g}>{g}</option>
                                                ))}
                                            </select>
                                            <div style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                                                <User size={16} style={{ color: "#190044" }} />
                                            </div>
                                            <ChevronDown size={14} style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", color: "#9FA2B4", pointerEvents: "none" }} />
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                        <label style={{ fontSize: "14px", fontWeight: 600, color: "#190044" }}>Birthday</label>
                                        <div style={{ position: "relative" }}>
                                            <input
                                                type="text"
                                                value={birthday}
                                                onChange={(e) => setBirthday(e.target.value)}
                                                style={{ width: "100%", padding: "12px 40px 12px 16px", borderRadius: "8px", border: "1px solid #E8E8F0", fontSize: "14px", color: "#190044" }}
                                            />
                                            <ChevronDown size={14} style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", color: "#9FA2B4", pointerEvents: "none" }} />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "12px" }}>
                                    <button style={{
                                        border: "1px solid #E8345A",
                                        backgroundColor: "transparent",
                                        color: "#E8345A",
                                        padding: "12px 32px",
                                        borderRadius: "8px",
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        cursor: "pointer"
                                    }}>
                                        Save Changes
                                    </button>
                                </div>
                            </div>

                            {/* Password Information Card */}
                            <div style={{ border: "1px solid #E8E8F0", borderRadius: "12px", padding: "24px" }}>
                                <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#190044", margin: "0 0 24px 0" }}>Password Information</h3>

                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                        <label style={{ fontSize: "14px", fontWeight: 600, color: "#190044" }}>Current Password</label>
                                        <div style={{ position: "relative" }}>
                                            <input
                                                type={showCurrentPassword ? "text" : "password"}
                                                defaultValue="trungkien"
                                                style={{ width: "100%", padding: "12px 40px 12px 16px", borderRadius: "8px", border: "1px solid #E8E8F0", backgroundColor: "#F8F9FD", fontSize: "14px", color: "#190044" }}
                                            />
                                            <div
                                                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                                style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", cursor: "pointer", color: "#9FA2B4" }}
                                            >
                                                {showCurrentPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                        <label style={{ fontSize: "14px", fontWeight: 600, color: "#190044" }}>Change Password</label>
                                        <div style={{ position: "relative" }}>
                                            <input
                                                type={showNewPassword ? "text" : "password"}
                                                defaultValue="trungkien"
                                                style={{ width: "100%", padding: "12px 40px 12px 16px", borderRadius: "8px", border: "1px solid #E8E8F0", backgroundColor: "#F8F9FD", fontSize: "14px", color: "#190044" }}
                                            />
                                            <div
                                                onClick={() => setShowNewPassword(!showNewPassword)}
                                                style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", cursor: "pointer", color: "#9FA2B4" }}
                                            >
                                                {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "24px" }}>
                                    <button style={{
                                        border: "1px solid #E8345A",
                                        backgroundColor: "transparent",
                                        color: "#E8345A",
                                        padding: "12px 32px",
                                        borderRadius: "8px",
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        cursor: "pointer"
                                    }}>
                                        Change Password
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Global Save Changes Button at Bottom */}
                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <button style={{
                        backgroundColor: "#E8345A",
                        color: "#FFFFFF",
                        padding: "16px 120px",
                        borderRadius: "8px",
                        fontSize: "16px",
                        fontWeight: 700,
                        border: "none",
                        cursor: "pointer",
                        width: "60%"
                    }}>
                        Save Changes
                    </button>
                </div>
            </div>
        </MainLayout>
    );
}
