export const COLORS = {
  primary: "#190044",
  accent: "#E8345A",
  yellow: "#FFB800",
  background: "#F5F6FA",
  white: "#FFFFFF",
  textPrimary: "#190044",
  textSecondary: "#9FA2B4",
  border: "#E8E8F0",
};

export const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
  { label: "Revenue", href: "/revenue", icon: "DollarSign" },
  { label: "Locations", href: "/locations", icon: "MapPin" },
  { label: "Plans", href: "/plans", icon: "ClipboardList", hasChildren: true },
  { label: "Stores", href: "/stores", icon: "Store", hasChildren: true },
  { label: "Pages", href: "/pages", icon: "FileText", hasChildren: true },
  { label: "Media", href: "/media", icon: "Image" },
  { label: "Users", href: "/users", icon: "Users" },
  { label: "Support", href: "/support", icon: "HeadphonesIcon", hasChildren: true },
];

export const SYSTEM_ITEMS = [
  { label: "Profile Settings", href: "/settings/profile", icon: "Settings" },
  { label: "Payment Gateway", href: "/settings/payment", icon: "CreditCard" },
  { label: "Email Templates", href: "/settings/email", icon: "Mail" },
  { label: "Logo Management", href: "/settings/logo", icon: "Image" },
  { label: "Log Out", href: "/logout", icon: "LogOut" },
];