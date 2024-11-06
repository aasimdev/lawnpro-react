import { Box, Checkbox, Divider } from '@mui/material';
import React, { useState } from 'react';
import {
  IconCalendar,
  IconCalendarView,
  IconCoin,
  IconCompact,
  IconInvoice,
  IconInvoiceDolor,
  IconLeftArrow,
  IconMoneySend,
  IconPaymentSuccess,
  IconPrinter,
} from '../../utils/SvgUtil';
import GenericTable from '../../components/client-portal/GenericTable';
import { NoDataScreen } from '../../components/client-portal/NoDataScreen';

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
    title: 'Invoices Due',
    value: '$300',
    percentAge: '+33%',
    positive: true,
    icon: IconCoin,
    iconColr: '#E97135',
    borderColr: '#FFD5C0',
  },
  {
    id: 3,
    title: 'Invoices Past Due',
    value: '$52',
    percentAge: '+7%',
    positive: true,
    icon: IconMoneySend,
    iconColr: '#75A428',
    borderColr: '#C2F5EE',
  },
  {
    id: 4,
    title: 'Invoices Paid in Full',
    value: '3',
    percentAge: '-24%',
    positive: false,
    icon: IconPaymentSuccess,
    iconColr: '#6895FF',
    borderColr: '#C0D5FF',
  },
];

const columns = [
  {
    id: 1,
    invoiceNumber: '100624',
    invoiceTotal: '$60.00',
    invoiceDate: 'Oct 04, 2024',
    paidAmount: '$10.00',
    status: 'Partial Paid',
    dotColor: '#FF8447',
  },
  {
    id: 2,
    invoiceNumber: '100625',
    invoiceTotal: '$100.00',
    invoiceDate: 'Oct 03, 2024',
    paidAmount: '$20.00',
    status: 'Full Paid',
    dotColor: '#75A428',
  },
  {
    id: 3,
    invoiceNumber: '100624',
    invoiceTotal: '$60.00',
    invoiceDate: 'Oct 04, 2024',
    paidAmount: '$10.00',
    status: 'Partial Paid',
    dotColor: '#FF8447',
  },
  {
    id: 4,
    invoiceNumber: '100624',
    invoiceTotal: '$60.00',
    invoiceDate: 'Oct 04, 2024',
    paidAmount: '$10.00',
    status: 'Partial Paid',
    dotColor: '#FF8447',
  },
  {
    id: 5,
    invoiceNumber: '100624',
    invoiceTotal: '$60.00',
    invoiceDate: 'Oct 04, 2024',
    paidAmount: '$10.00',
    status: 'Partial Paid',
    dotColor: '#FF8447',
  },
  // Add more invoice objects as needed
];

const tableHead = [
  {
    id: 1,
    title: 'Invoice Number',
  },
  {
    id: 2,
    title: 'Invoice Date',
  },
  {
    id: 3,
    title: 'Invoice Total',
  },
  {
    id: 4,
    title: 'Paid Amount',
  },
  {
    id: 5,
    title: 'Status',
  },
];

const status = [
  {
    title: 'All',
  },
  {
    title: 'Partial Paid',
  },
  {
    title: 'Full Paid',
  },
];

const action = [
  {
    id: 1,
    title: 'View Invoice',
    icon: <IconCalendarView size={20} color="#525866" />,
    path: '/finance/invoices/invoice-details',
  },
  {
    id: 2,
    title: 'Print',
    icon: <IconPrinter size={20} color="#525866" />,
    path: '#',
  },
];

export const Invoices = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  console.log(selectedRows, 'selectedRows');

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
  const isSelected = (id: number) => selectedRows.includes(id);

  return (
    <div className="px-8 pb-6 pt-20 bg-gray-week">
      {columns.length > 0 ? (
        <>
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
                    className={`hover:bg-primary-alpha ${isSelected(property.id) ? 'bg-primary-alpha' : ''}`}
                  >
                    <td className={`py-3 px-3 text-sm font-normal ${index === columns.length - 1 ? '' : 'border-b'}`}>
                      <Box display={'flex'} gap={2} alignItems={'center'}>
                        <Checkbox
                          checked={isSelected(property.id)}
                          onChange={() => handleCheckboxChange(property.id)}
                        />
                        {property.invoiceNumber}
                      </Box>
                    </td>
                    <td className={`py-3 px-3 text-sm font-normal ${index === columns.length - 1 ? '' : 'border-b'}`}>
                      <div className="flex gap-2">
                        <IconCalendar size={20} color="#99A0AE" />
                        <span className="text-gray-600">{property.invoiceDate}</span>
                      </div>
                    </td>
                    <td className={`py-3 px-3 text-sm font-normal ${index === columns.length - 1 ? '' : 'border-b'}`}>
                      <div className="flex gap-2">
                        <IconCoin size={20} color="#99A0AE" />
                        <span className="text-gray-600">{property.invoiceTotal}</span>
                      </div>
                    </td>
                    <td className={`py-3 px-3 text-sm font-normal ${index === columns.length - 1 ? '' : 'border-b'}`}>
                      <div className="flex gap-2">
                        <IconMoneySend size={20} color="#99A0AE" />
                        <span className="text-gray-600">{property.paidAmount}</span>
                      </div>
                    </td>
                    <td className={`py-3 px-3 text-sm font-normal ${index === columns.length - 1 ? '' : 'border-b'}`}>
                      <Box display={'flex'} gap={2} alignItems={'center'}>
                        <div className="p-1 rounded-md bg-white border border-main-gray flex gap-2 items-center text-mini text-gray-600">
                          <div className="w-1 h-1 rounded-full" style={{ background: property.dotColor }} />
                          <span>{property.status}</span>
                        </div>
                      </Box>
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
          Icon={<IconInvoice size={24} color="#525866" />}
          desc={`It looks like there are no records to show at the moment. Currently you don't have any invoices available.`}
          btnIcon={<IconLeftArrow size={20} color="#fff" />}
          btnTitle={'Go back to Dashbaord'}
          path={'/client-dashboard'}
        />
      )}
    </div>
  );
};
