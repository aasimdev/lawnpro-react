// menuConfig.ts
import React from 'react';
import {
  IconDashboard,
  IconInvoice2Mail,
  IconFinance,
  IconRate,
  IconWork,
  IconDocuments,
  IconPayments,
  IconEstimates,
  IconInvoice,
} from '../utils/SvgUtil';
// import { ReactComponent as Invoice2MailSVG } from '../assets/icons/invoice2mail.svg'

export interface SubMenuItem {
  title: string;
  icon: React.FC;
  url: string;
}
export interface MenuItem {
  title: string;
  icon: React.FC;
  subMenu?: Array<SubMenuItem>;
}

export interface ClientMenuConfig {
  [path: string]: MenuItem;
}

const clientMenuConfig: ClientMenuConfig = {
  '/client-dasboard': { title: 'Dashboard', icon: IconDashboard },
  '/customers': {
    title: 'Finance',
    icon: IconFinance,
    subMenu: [
      {
        title: 'Invoices',
        icon: IconInvoice,
        url: '/invoices',
      },
      {
        title: 'Estimates',
        icon: IconEstimates,
        url: '/estimates',
      },
      {
        title: 'Payments',
        icon: IconPayments,
        url: '/payments',
      },
      {
        title: 'Documents',
        icon: IconDocuments,
        url: '/documents',
      },
    ],
  },
  '/pictures': { title: 'Pictures', icon: IconInvoice2Mail },
  '/work-request': { title: 'Work Request', icon: IconWork },
  '/rate-us': { title: 'Rate Us!', icon: IconRate },

  // Add more pages as needed
};

export default clientMenuConfig;
