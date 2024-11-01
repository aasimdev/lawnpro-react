import { IconCustomers, IconDashboard } from "../utils/SvgUtil";
interface UrlConfigType {
    [path: string]: {
        title: string;
        icon: React.FC;
    }
}
export const UrlConfig: UrlConfigType = {
    '/dashboard': { title: 'Dashboard', icon: IconDashboard },
    '/customers/': { title: 'Customers', icon: IconCustomers },
    '/customers/add': { title: 'Add Customers', icon: IconCustomers },
}