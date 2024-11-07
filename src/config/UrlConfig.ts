import { IconCredit, IconCustomers, IconDashboard, IconProperties, IconRepair, IconReviews, IconSettings, IconSingleUserUnfilled, IconTags, IconUserGroup } from "../utils/SvgUtil";
interface UrlConfigType {
    [path: string]: {
        title: string;
        icon: React.FC;
    }
}
export const UrlConfig: UrlConfigType = {
    '/dashboard': { title: 'Dashboard', icon: IconDashboard },
    '/customers': { title: 'Customers', icon: IconCustomers },
    '/customers/': { title: 'Customers', icon: IconCustomers },
    '/customers/add': { title: 'Add Customers', icon: IconCustomers },
    '/customers/add/': { title: 'Add Customers', icon: IconCustomers },
    '/properties': { title: 'Properties', icon: IconProperties },
    '/properties/': { title: 'Properties', icon: IconProperties },
    '/reviews': { title: 'Reviews', icon: IconReviews },
    '/reviews/': { title: 'Reviews', icon: IconReviews },
    '/customers/manage-cards': { title: 'Manage Credit Cards/ACH', icon: IconCredit },
    '/customers/manage-cards/': { title: 'Manage Credit Cards/ACH', icon: IconCredit },
    '/resource/employees': { title: 'Employees', icon: IconSingleUserUnfilled },
    '/resource/employees/': { title: 'Employees', icon: IconSingleUserUnfilled },
    '/resource/crews': { title: 'Crews', icon: IconUserGroup },
    '/resource/crews/': { title: 'Crews', icon: IconUserGroup },
    '/resource/vendors-suppliers': { title: 'Vendors', icon: IconSingleUserUnfilled },
    '/resource/items-services': { title: 'Items & Services', icon: IconSettings },
    '/resource/items-services/inventory-items': { title: 'Items & Services', icon: IconSettings },
    '/resource/items-services/packages': { title: 'Items / Services Packages', icon: IconSettings },
    '/resource/items-services/categories': { title: 'Items & Services Categories', icon: IconSettings },
    '/resource/equipments': { title: 'Trucks / Equipment', icon: IconRepair },
    '/resource/tags': { title: 'Tags', icon: IconTags },
}