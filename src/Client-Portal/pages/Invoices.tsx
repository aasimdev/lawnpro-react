import { Avatar, Box, Divider, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  IconCalendar,
  IconCall,
  IconCoin,
  IconInvoice,
  IconInvoiceDolor,
  IconLocation,
  IconMoneySend,
  IconPaymentSuccess,
} from '../../utils/SvgUtil';
import InvoiceDataTable from '../components/finance/invoice/InvoiceDataTable';

const invoicesData = [
  {
    id: 1,
    title: 'Invoices',
    value: '5',
    percentAge: '+48%',
    positive: true,
    icon: IconInvoiceDolor,
    iconColr: '#75A428',
    borderColr: '#D7EEA8',
  },
  {
    id: 2,
    title: 'invoiceS total',
    value: '$300',
    percentAge: '+33%',
    positive: true,
    icon: IconCoin,
    iconColr: '#E97135',
    borderColr: '#FFD5C0',
  },
  {
    id: 3,
    title: 'partial payments received',
    value: '$52',
    percentAge: '+7%',
    positive: true,
    icon: IconMoneySend,
    iconColr: '#75A428',
    borderColr: '#C2F5EE',
  },
  {
    id: 4, // Changed id to 4 to avoid duplicate id
    title: 'full paid invoices',
    value: '3',
    percentAge: '-24%',
    positive: false,
    icon: IconPaymentSuccess,
    iconColr: '#6895FF',
    borderColr: '#C0D5FF',
  },
];

export const Invoices = () => {
  return (
    <div className="px-8 pb-6 pt-20 bg-gray-week">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {invoicesData.map((items) => (
          <div key={items.id} className="p-4 bg-white border border-faded-light shadow-sm rounded-2xl">
            <Box display={'flex'} justifyContent={'space-between'}>
              <Box display={'flex'} flexDirection={'column'} gap={2}>
                <span className="text-mini text-gray-600 capitalize">{items.title}</span>
                <div className="flex gap-2 items-center">
                  <span className="text-3xl-plus font-medium leading-8">{items.value}</span>
                  <span
                    className={`${
                      items.positive ? 'bg-success-light text-success-dark' : 'bg-error-light text-error-dark'
                    } rounded-full px-2 py-0.5 text-xs font-medium`}
                  >
                    {items.percentAge}
                  </span>
                </div>
              </Box>
              <div
                className="w-10 h-10 rounded-full border flex justify-center items-center"
                style={{ borderColor: items.borderColr }}
              >
                <items.icon size={20} color={items.iconColr} />
              </div>
            </Box>
          </div>
        ))}
      </div>
      <div className="mt-4 bg-white p-4 rounded-2xl border border-faded-light shadow-sm">
        <Box display={'flex'} gap={1} alignItems={'center'} pb={2}>
          <IconInvoice size={24} color="#525866" />
          <span className="font-medium text-md text-text-dark">Invoices</span>
        </Box>
        <Divider orientation="horizontal" />
        <Box pt={2}>
          <InvoiceDataTable />
        </Box>
      </div>
    </div>
  );
};
