// menuConfig.ts
import React from "react";
import { IconDashboard, IconStartup, IconInvoice2Mail, IconCustomers, IconProperties, IconResources, IconAutomation, IconSchedule, IconTodo, IconNotes, IconTimeQuarter, IconDollarSquare, IconPlask, IconDocAttach, IconContracts, IconAnalytics, IconChatting, IconCallRinging, IconCalculator, IconStore, IconDatabase, IconMessage, IconMail, IconLeaf, IconStarSquare, IconCredit, IconCreditACH, IconCreditChange } from "../utils/SvgUtil";
// import { ReactComponent as Invoice2MailSVG } from '../assets/icons/invoice2mail.svg'

export interface SidebarSubmenuItem {
    title: string;
    icon: React.FC;
    url: string;
}
export interface SidebarMenuItem {
    title: string;
    icon: React.FC;
    subMenu?: Array<SidebarSubmenuItem>;
}

export interface SidebarConfig {
    [path: string]: SidebarMenuItem;
}

export const sidebarConfig: SidebarConfig = {
    '/getting-started': { title: 'Get Started', icon: IconStartup },
    '/dashboard': { title: 'Dashboard', icon: IconDashboard },
    '/invoicesToBeMailed': { title: "Invoices to be Mailed", icon: IconInvoice2Mail },
    '/customers': {
        title: "Customers",
        icon: IconCustomers,
        subMenu: [{
            title: "Customers",
            icon: IconCustomers,
            url: "/"
        }, {
            title: "Properties",
            icon: IconProperties,
            url: "/properties"
        }, {
            title: "Reviews",
            icon: IconStarSquare,
            url: "/reviews"
        }, {
            title: "Manage Credit Card",
            icon: IconCredit,
            url: "/manage-cards"
        }, {
            title: "Charge Cards / ACH on File",
            icon: IconCreditACH,
            url: "/charge-cards"
        }, {
            title: "Auto-Charge Cards",
            icon: IconCreditChange,
            url: "/auto-charge"
        }]
    },
    '/resources': {
        title: "Resources", icon: IconResources,
        subMenu: [{
            title: "Employees",
            icon: IconCustomers,
            url: "/emplyees"
        }, {
            title: "Crews",
            icon: IconProperties,
            url: "/crews"
        }]
    },
    '/automations': { title: "Automations", icon: IconAutomation },
    '/scheduler': { title: "Schedule", icon: IconSchedule },
    '/todo' : {title : "To-do", icon : IconTodo},
    '/notes' : {title : "Notes", icon : IconNotes},
    '/time' : {title : "Time Tracking", icon : IconTimeQuarter},
    '/finances' : {title : "Finance", icon : IconDollarSquare},
    '/chemicals' : {title : "Chemicals", icon : IconPlask},
    '/docs' : {title : "Documents", icon : IconDocAttach},
    '/forms' : {title : "Visit Forms", icon: IconContracts},
    '/reports' : {title : "Reports", icon: IconAnalytics},
    '/support' : {title : "Support", icon: IconChatting},
    '/crm/call-list' : {title : "Calls", icon: IconCallRinging},
    '/store/cart' : {title : "Store", icon: IconStore},
    '/calculators' : {title : "Calculators", icon: IconCalculator},
    '/backup' : {title : "Backups", icon: IconDatabase},
    '/sms/messages' : {title : "Texts", icon: IconMessage},
    '/emails' : {title : "Emails", icon: IconMail},
    '/lawnbidder' : {title : "LawnBidder", icon: IconLeaf},
    // Add more pages as needed
};
