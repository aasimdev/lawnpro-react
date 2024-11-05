import React from 'react';
import { Box } from '@mui/material';
import { IconCalendar, IconCard, IconCash, IconCoin, IconFolder, IconMoneySend } from '../../../../utils/SvgUtil';

type Property = {
  id: number;
  method: string;
  tip: string;
  date: string;
  details: string;
  amount: string;
};

const properties: Property[] = [
  {
    id: 1,
    method: 'Cash',
    tip: '$60.00',
    date: 'Oct 04, 2024',
    details: `$850 added to Customer's credit - Credit Added 05/28/24`,
    amount: '$850.00',
  },
  {
    id: 2,
    method: 'Card',
    tip: '$100.00',
    date: 'Oct 03, 2024',
    details: `$150 for Invoice # 815093 - Payment Added 05/28/24`,
    amount: '$850.00',
  },
  {
    id: 3,
    method: 'Cash',
    tip: '$60.00',
    date: 'Oct 04, 2024',
    details: `$850 added to Customer's credit - Credit Added 05/28/24`,
    amount: '$850.00',
  },
];

const PaymentsDataTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-week text-sm font-normal text-gray-600">
            <th className="py-2 px-3 text-start">Date</th>
            <th className="py-2 px-3 text-start">Tip</th>
            <th className="py-2 px-3 text-start">Method</th>
            <th className="py-2 px-3 text-start">Details</th>
            <th className="py-2 px-3 text-start">Notes</th>
            <th className="py-2 px-3 text-start">Amount</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id} className={`hover:bg-primary-alpha  `}>
              <td className="py-3 px-3 text-sm font-normal border-b">
                <div className="flex gap-2">
                  <IconCalendar size={20} color="#99A0AE" />
                  <span className="text-gray-600">{property.date}</span>
                </div>
              </td>
              <td className="py-3 px-3 text-sm font-normal border-b">
                <div className="flex gap-2">
                  <IconCoin size={20} color="#99A0AE" />
                  <span className="text-gray-600">{property.tip}</span>
                </div>
              </td>

              <td className="py-2 text-sm font-normal text-gray-600 px-3 border-b">
                <Box display={'flex'} gap={1} alignItems={'center'}>
                  {property.method === 'Cash' ? <IconCash size={20} color="#99A0AE" /> : <IconCard size={20} />}
                  {property.method}
                </Box>
              </td>

              <td className="py-3 px-3 text-sm font-normal border-b">
                <div className="flex gap-2">
                  <IconFolder size={20} color="#99A0AE" />
                  <span className="text-gray-600 truncate" style={{ maxWidth: '250px' }} title={property.details}>
                    {property.details}
                  </span>
                </div>
              </td>

              <td className="py-3 px-3 text-sm font-normal border-b">
                <div className="flex gap-2"></div>
              </td>
              <td className="py-3 px-3 text-sm font-normal border-b">
                <Box display={'flex'} gap={2} alignItems={'center'}>
                  <IconMoneySend size={20} color="#99A0AE" />
                  <span className="text-gray-600 truncate" style={{ maxWidth: '250px' }}>
                    {property.amount}
                  </span>
                </Box>
              </td>
            </tr>
          ))}
          {/* <tr className="hover:bg-primary-alpha">
            <td className="py-3 px-3 text-sm font-normal">
              <span className="text-gray-600">Total</span>
            </td>
            <td className="py-3 px-3 text-sm font-normal">
              <div className="flex gap-2 text-gray-600">
                <IconCoin size={20} color="#99A0AE" />
                $0.00
              </div>
            </td>
            <td className="py-3 px-3 text-sm font-normal"></td>
            <td className="py-3 px-3 text-sm font-normal"></td>
            <td className="py-3 px-3 text-sm font-normal"></td>
            <td className="py-3 px-3 text-sm font-normal">
              <div className="flex gap-2 items-center pr-8 2xl:pr-20">
                <IconMoneySend size={20} color="#99A0AE" />
                <span className="text-gray-600 truncate">$1010.00</span>
              </div>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsDataTable;
