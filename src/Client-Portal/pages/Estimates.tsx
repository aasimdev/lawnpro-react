import { Box, Checkbox, Divider } from '@mui/material';
import React, { useState } from 'react';
import {
  IconCalendar,
  IconCalendarView,
  IconCheckCircle,
  IconCoin,
  IconCompact,
  IconDoubleNote,
  IconEstimates,
  IconLeftArrow,
  IconPrinter,
} from '../../utils/SvgUtil';
import { NoDataScreen } from '../components/NoDataScreen';
import GenericTable from '../components/GenericTable';

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

const status = [
  {
    title: 'All',
  },
  {
    title: 'Pending',
  },
  {
    title: 'Declined',
  },
  {
    title: 'Approved',
  },
];

const action = [
  {
    id: 1,
    title: 'View Estimate',
    icon: <IconCalendarView size={20} color="#525866" />,
    path: '/finance/estimates/estimate-details',
  },
  {
    id: 2,
    title: 'Print',
    icon: <IconPrinter size={20} color="#525866" />,
    path: '#',
  },
];

const tableHead = [
  {
    id: 1,
    title: 'Number',
  },
  {
    id: 2,
    title: 'Estimate  Date',
  },
  {
    id: 3,
    title: 'Estimate  Total',
  },
  {
    id: 4,
    title: 'Status',
  },
  {
    id: 5,
    title: 'Notes',
  },
];

const columns = [
  {
    id: 1,
    estimateNumber: '100624',
    estimateTotal: '$60.00',
    estimateDate: 'Oct 04, 2024',
    paidAmount: 'Client requested revision',
    status: 'Draft',
    dotColor: '#717784',
  },
  {
    id: 2,
    estimateNumber: '100625',
    estimateTotal: '$100.00',
    estimateDate: 'Oct 03, 2024',
    paidAmount: 'Client requested revision',
    status: 'Pending',
    dotColor: '#FF8447',
  },
  {
    id: 3,
    estimateNumber: '100624',
    estimateTotal: '$60.00',
    estimateDate: 'Oct 04, 2024',
    paidAmount: 'Client requested revision',
    status: 'Approved',
    dotColor: '#75A428',
  },
  {
    id: 4,
    estimateNumber: '100624',
    estimateTotal: '$60.00',
    estimateDate: 'Oct 04, 2024',
    paidAmount: 'Client requested revision',
    status: 'Declined',
    dotColor: '#FB3748',
  },
  {
    id: 5,
    estimateNumber: '100624',
    estimateTotal: '$60.00',
    estimateDate: 'Oct 04, 2024',
    paidAmount: 'Client requested revision',
    status: 'Pending',
    dotColor: '#FF8447',
  },
];

export const Estimates = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCheckboxChange = (id: number) => {
    setSelectedRows((prevSelectedRows: number[]) =>
      prevSelectedRows.includes(id) ? prevSelectedRows.filter((rowId) => rowId !== id) : [...prevSelectedRows, id],
    );
  };

  const handleSelectAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedRows(columns.map((property: { id: any }) => property.id));
    } else {
      setSelectedRows([]);
    }
  };

  const isAllSelected = columns.length > 0 && selectedRows.length === columns.length;
  // const isSelected = (id: number) => selectedRows.includes(id);
  return (
    <div className="px-8 pb-6 pt-20 bg-gray-week">
      {columns.length > 0 ? (
        <>
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
              <GenericTable
                head={tableHead}
                status={status}
                action={action}
                setAnchorEl={setAnchorEl}
                anchorEl={anchorEl}
                selectedRows={selectedRows}
                handleSelectAllChange={handleSelectAllChange}
                isAllSelected={isAllSelected}
                properties={columns}
              >
                {columns.map((property, index) => (
                  <tr
                    key={property.id}
                    className={`hover:bg-primary-alpha ${selectedRows.includes(property.id) ? 'bg-primary-alpha' : ''}`}
                  >
                    <td className={`py-3 px-3 text-sm font-normal ${index === columns.length - 1 ? '' : 'border-b'}`}>
                      <Box display={'flex'} gap={2} alignItems={'center'}>
                        <Checkbox
                          checked={selectedRows.includes(property.id)}
                          onChange={() => handleCheckboxChange(property.id)}
                        />
                        {property.estimateNumber}
                      </Box>
                    </td>
                    <td className={`py-3 px-3 text-sm font-normal ${index === columns.length - 1 ? '' : 'border-b'}`}>
                      <div className="flex gap-2">
                        <IconCalendar size={20} color="#99A0AE" />
                        <span className="text-gray-600">{property.estimateDate}</span>
                      </div>
                    </td>
                    <td className={`py-3 px-3 text-sm font-normal ${index === columns.length - 1 ? '' : 'border-b'}`}>
                      <div className="flex gap-2">
                        <IconCoin size={20} color="#99A0AE" />
                        <span className="text-gray-600">{property.estimateTotal}</span>
                      </div>
                    </td>
                    <td className={`py-3 px-3 text-sm font-normal ${index === columns.length - 1 ? '' : 'border-b'}`}>
                      <Box display={'flex'} gap={2} alignItems={'center'}>
                        <div className="p-1 rounded-md bg-white border border-main-gray flex gap-2 items-center text-mini text-gray-600">
                          <div className="w-1 h-1 rounded-full" style={{ background: property.dotColor }}></div>
                          {property.status}
                        </div>
                      </Box>
                    </td>
                    <td className={`py-3 px-3 text-sm font-normal ${index === columns.length - 1 ? '' : 'border-b'}`}>
                      <div className="flex gap-2">
                        <IconDoubleNote size={20} color="#99A0AE" />
                        <span className="text-gray-600 truncate">{property.paidAmount}</span>
                      </div>
                    </td>

                    <td className={`py-3 px-3 text-sm font-normal ${index === columns.length - 1 ? '' : 'border-b'}`}>
                      <div className="cursor-pointer" onClick={handleClick}>
                        <IconCompact size={24} color="#525866" />
                      </div>
                    </td>
                  </tr>
                ))}
              </GenericTable>
            </Box>
          </div>
        </>
      ) : (
        <NoDataScreen
          title="Invoices"
          Icon={<IconEstimates size={24} color="#525866" />}
          desc={`It looks like there are no records to show at the moment. Currently you don't have any estimates available.`}
          btnIcon={<IconLeftArrow size={20} color="#fff" />}
          btnTitle={'Go back to Dashbaord'}
          path={'/client-dashboard'}
        />
      )}
    </div>
  );
};
