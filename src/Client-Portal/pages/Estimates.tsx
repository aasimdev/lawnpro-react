import { Avatar, Box, Divider, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IconCheckCircle, IconCoin, IconEstimates } from '../../utils/SvgUtil';
import EstimateDataTable from '../components/finance/estimate/EstimateDataTable';

const invoicesData = [
  {
    id: 1,
    title: 'estimates',
    value: '6',
    percentAge: '+48%',
    positive: true,
    icon: IconEstimates,
    iconColr: '#75A428',
    borderColr: '#D7EEA8',
  },
  {
    id: 2,
    title: 'estimates total',
    value: '$140.00',
    percentAge: '+33%',
    positive: true,
    icon: IconCoin,
    iconColr: '#E97135',
    borderColr: '#FFD5C0',
  },
  {
    id: 3,
    title: 'approved estimates',
    value: '3',
    percentAge: '+7%',
    positive: true,
    icon: IconCheckCircle,
    iconColr: '#178C7D',
    borderColr: '#C2F5EE',
  },
];

export const Estimates = () => {
  return (
    <div className="px-8 pb-6 pt-20 bg-gray-week">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
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
          <IconEstimates size={24} color="#525866" />
          <span className="font-medium text-md text-text-dark">Estimates</span>
        </Box>
        <Divider orientation="horizontal" />
        <Box pt={2}>
          <EstimateDataTable />
        </Box>
      </div>
    </div>
  );
};
