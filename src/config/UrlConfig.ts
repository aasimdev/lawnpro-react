import { IconCredit, IconCustomers, IconDashboard, IconProperties, IconReviews } from "../utils/SvgUtil";
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
}