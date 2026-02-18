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

interface NavChild {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  icon: string;
  hasChildren?: boolean;
  children?: NavChild[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
  { label: "Revenue", href: "/revenue", icon: "DollarSign" },
  { label: "Locations", href: "/locations", icon: "MapPin" },
  { 
    label: "Plans", 
    href: "/plans", 
    icon: "ClipboardList", 
    hasChildren: true,
    children: [
      { label: "Add Plan", href: "/plans/add" },
      { label: "Manage Plan", href: "/plans/manage" },
    ]
  },
  { 
    label: "Stores", 
    href: "/stores", 
    icon: "Store", 
    hasChildren: true,
    children: [
      { label: "Add Store", href: "/stores/add" },
      { label: "Manage Store", href: "/stores/manage" },
    ]
  },
  { 
    label: "Pages", 
    href: "/pages", 
    icon: "FileText", 
    hasChildren: true,
    children: [
      { label: "Add Page", href: "/pages/add" },
      { label: "Manage Page", href: "/pages/manage" },
    ]
  },
  { label: "Media", href: "/media", icon: "Image" },
  { label: "Users", href: "/users", icon: "Users" },
  { label: "Support", href: "/support", icon: "HeadphonesIcon", hasChildren: true },

  { 
  label: "Support", 
  href: "/support", 
  icon: "HeadphonesIcon", 
  hasChildren: true,
  children: [
    { label: "Support List", href: "/support/list" },
    { label: "Support Reply", href: "/support/reply" },
  ]
},
];

export const SYSTEM_ITEMS = [
  { label: "Profile Settings", href: "/settings/profile", icon: "Settings" },
  { label: "Payment Gateway", href: "/settings/payment", icon: "CreditCard" },
  { label: "Email Templates", href: "/settings/email", icon: "Mail" },
  { label: "Logo Management", href: "/settings/logo", icon: "Image" },
  { label: "Log Out", href: "/logout", icon: "LogOut" },
];