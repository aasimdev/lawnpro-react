// menuConfig.ts
import React from "react";
import { IconDashboard, IconStartup, IconInvoice2Mail, IconCustomers, IconProperties, IconResources, IconAutomation, IconSchedule, IconTodo, IconNotes, IconTimeQuarter, IconDollarSquare, IconPlask, IconDocAttach, IconContracts, IconAnalytics, IconChatting, IconCallRinging, IconCalculator, IconStore, IconDatabase, IconMessage, IconMail, IconLeaf, IconStarSquare, IconCredit, IconCreditACH, IconCreditChange, IconSingleUserUnfilled, IconUserGroup, IconSettings, IconRepair, IconClipboard, IconTags } from "../utils/SvgUtil";
// import { ReactComponent as Invoice2MailSVG } from '../assets/icons/invoice2mail.svg'
export interface SidebarItem {
    title: string;
    icon: React.FC; // Icon component type
    url?: string;              // URL for standalone items
    subMenu?: SidebarItem[];    // Optional sub-menu items for parents
}

// Define the sidebar configuration
export const sidebarConfig: SidebarItem[] = [
    {
        title: "Get Started",
        icon: IconStartup,
        url: "/getting-started"
    },
    {
        title: "Dashboard",
        icon: IconDashboard,
        url: "/dashboard"
    },
    {
        title: "Invoices to be Mailed",
        icon: IconInvoice2Mail,
        url: "/invoicesToBeMailed"
    },
    {
        title: "Customers",
        icon: IconCustomers,
        subMenu: [
            {
                title: "Customers",
                icon: IconCustomers,
                url: "/customers"
            },
            {
                title: "Properties",
                icon: IconProperties,
                url: "/properties"
            },
            {
                title: "Reviews",
                icon: IconStarSquare,
                url: "/reviews"
            },
            {
                title: "Manage Credit Card",
                icon: IconCredit,
                url: "/customers/manage-cards"
            },
            {
                title: "Charge Cards / ACH on File",
                icon: IconCreditACH,
                url: "/charge-cards"
            },
            {
                title: "Auto-Charge Cards",
                icon: IconCreditChange,
                url: "/auto-charge"
            }
        ]
    },
    {
        title: "Resources",
        icon: IconResources,
        subMenu: [
            {
                title: "Employees",
                icon: IconSingleUserUnfilled,
                url: "/resource/employees"
            },
            {
                title: "Crews",
                icon: IconUserGroup,
                url: "/resource/crews"
            },
            {
                title: "Vendor/Suppliers",
                icon: IconSingleUserUnfilled,
                url: "/resource/vendors-suppliers"
            },
            {
                title: "Items & Suppliers",
                icon: IconSettings,
                url: "/resource/items-services"
            },
            {
                title: "Truck / Equipment",
                icon: IconRepair,
                url: "/resource/equipments"
            },
            {
                title: "Custom Fields",
                icon: IconClipboard,
                url: "/custom-fields"
            },
            {
                title: "Email Links",
                icon: IconMail,
                url: "/resource/email-links"
            },
            {
                title: "Tags",
                icon: IconTags,
                url: "/resource/tags"
            },
        ]
    },
    {
        title: "Automations",
        icon: IconAutomation,
        url: "/automations"
    },
    {
        title: "Schedule",
        icon: IconSchedule,
        url: "/scheduler"
    },
    {
        title: "To-do",
        icon: IconTodo,
        url: "/todo"
    },
    {
        title: "Notes",
        icon: IconNotes,
        url: "/notes"
    },
    {
        title: "Time Tracking",
        icon: IconTimeQuarter,
        url: "/time"
    },
    {
        title: "Finance",
        icon: IconDollarSquare,
        url: "/finances"
    },
    {
        title: "Chemicals",
        icon: IconPlask,
        url: "/chemicals"
    },
    {
        title: "Documents",
        icon: IconDocAttach,
        url: "/docs"
    },
    {
        title: "Visit Forms",
        icon: IconContracts,
        url: "/forms"
    },
    {
        title: "Reports",
        icon: IconAnalytics,
        url: "/reports"
    },
    {
        title: "Support",
        icon: IconChatting,
        url: "/support"
    },
    {
        title: "Calls",
        icon: IconCallRinging,
        url: "/crm/call-list"
    },
    {
        title: "Store",
        icon: IconStore,
        url: "/store/cart"
    },
    {
        title: "Calculators",
        icon: IconCalculator,
        url: "/calculators"
    },
    {
        title: "Backups",
        icon: IconDatabase,
        url: "/backup"
    },
    {
        title: "Texts",
        icon: IconMessage,
        url: "/sms/messages"
    },
    {
        title: "Emails",
        icon: IconMail,
        url: "/emails"
    },
    {
        title: "LawnBidder",
        icon: IconLeaf,
        url: "/lawnbidder"
    }
    // Add more pages as needed
];
