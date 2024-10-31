import React, { useState } from 'react';
import { Box, Button, Checkbox, Link, Menu, MenuItem, TextField } from '@mui/material';
import {
  IconCalendar,
  IconCalendarView,
  IconCoin,
  IconCompact,
  IconCsv,
  IconDownload,
  IconFilter,
  IconMoneySend,
  IconPdf,
  IconPrinter,
  IconSearch,
  IconSorting,
} from '../../../../utils/SvgUtil';
import DropdownMenu from '../../../../components/DropdownMenu';
import { useNavigate } from 'react-router-dom';

type Property = {
  id: number;
  invoiceNumber: string;
  invoiceTotal: string;
  invoiceDate: string;
  paidAmount: string;
  status: string;
  dotColor: string;
};

const properties: Property[] = [
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

const InvoiceDataTable = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuClick = (path: string) => {
    setAnchorEl(null); // Close the menu
    if (path && path !== '#') {
      navigate(path); // Navigate to the specified path
    }
  };

  const handleCheckboxChange = (id: number) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(id) ? prevSelectedRows.filter((rowId) => rowId !== id) : [...prevSelectedRows, id],
    );
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg shadow-sm w-72 border border-main-gray flex justify-between items-center">
            <Box display="flex" alignItems="center" gap={1}>
              <IconSearch size={20} color="#99A0AE" />
              <TextField
                variant="standard"
                placeholder="Search..."
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  border: 'none',
                  outline: 'none',
                  '& .MuiInputBase-input': { padding: 0 },
                  '& .MuiInputBase-input::placeholder': { color: '#99A0AE' },
                }}
              />
            </Box>
            <div className="w-7 h-5 cursor-pointer text-soft-400 text-mini rounded-md border border-main-gray flex justify-center items-center">
              ⌘1
            </div>
          </div>
          <span className="text-gray-600 text-xs">
            Total: <span className="text-black font-medium">{properties.length}</span>
          </span>
          <span className="text-gray-600 text-xs">
            Selected: <span className="text-black font-medium">{selectedRows.length}</span>
          </span>
        </div>
        <div className="flex items-center justify-end gap-3">
          <Button
            sx={{
              borderRadius: '8px',
              border: '1px solid #E1E4EA',
              color: '#525866',
              '&:hover': { backgroundColor: '#E1E4EA', color: '#000' },
            }}
            startIcon={<IconFilter size={20} color="#99A0AE" />}
          >
            Filter
          </Button>
          <DropdownMenu
            title="Sort by"
            className="bg-white text-[#525866] rounded-lg border-solid border-[1px] border-main-gray"
            items={[]}
            icon={<IconSorting size={20} color="#99A0AE" />}
          />
          <DropdownMenu
            title="Export"
            className="bg-white text-[#525866] rounded-lg border-solid border-[1px] border-main-gray"
            items={[
              { title: 'CSV', icon: <IconCsv size={20} /> },
              { title: 'PDF', icon: <IconPdf size={20} /> },
            ]}
            icon={<IconDownload size={20} color="#99A0AE" />}
          />
        </div>
      </div>
      {/* table  */}

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-week text-sm font-normal text-gray-600">
              <th className="py-2 px-4 text-start">Invoice Number</th>
              <th className="py-2 px-4 text-start">Invoice Date</th>
              <th className="py-2 px-4 text-start">Invoice Total</th>
              <th className="py-2 px-4 text-start">Paid Amount</th>
              <th className="py-2 px-4 text-start">Status</th>
              <th className="py-2 px-4 text-start"></th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr
                key={property.id}
                className={`hover:bg-primary-alpha ${selectedRows.includes(property.id) ? 'bg-primary-alpha' : ''}`}
              >
                <td className="py-2 text-sm font-normal px-4 border-b">
                  <Box display={'flex'} gap={2} alignItems={'center'}>
                    <Checkbox
                      checked={selectedRows.includes(property.id)}
                      onChange={() => handleCheckboxChange(property.id)}
                    />
                    {property.invoiceNumber}
                  </Box>
                </td>
                <td className="py-2 px-4 text-sm font-normal border-b">
                  <div className="flex gap-2">
                    <IconCalendar size={20} color="#99A0AE" />
                    <span className="text-gray-600">{property.invoiceDate}</span>
                  </div>
                </td>
                <td className="py-2 px-4 text-sm font-normal border-b">
                  <div className="flex gap-2">
                    <IconCoin size={20} color="#99A0AE" />
                    <span className="text-gray-600">{property.invoiceTotal}</span>
                  </div>
                </td>
                <td className="py-2 px-4 text-sm font-normal border-b">
                  <div className="flex gap-2">
                    <IconMoneySend size={20} color="#99A0AE" />
                    <span className="text-gray-600">{property.paidAmount}</span>
                  </div>
                </td>
                <td className="py-2 px-4 text-sm font-normal border-b">
                  <Box display={'flex'} gap={2} alignItems={'center'}>
                    <div className="p-1 rounded-md bg-white border border-main-gray flex gap-2 items-center text-mini text-gray-600">
                      <div className="w-1 h-1 rounded-full" style={{ background: property.dotColor }}></div>
                      {property.status}
                    </div>
                  </Box>
                </td>
                <td className="py-2 px-4 text-sm font-normal border-b">
                  <div className="cursor-pointer" onClick={handleClick}>
                    <IconCompact size={24} color="#525866" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          sx={{
            marginTop: '4px',
            '& .MuiMenu-paper': {
              borderRadius: '16px',
              boxShadow: '0px 16px 32px -12px rgba(14, 18, 27, 0.10)',
              border: '1px solid #E1E4EA',
            },
          }}
        >
          {action.map((ctx) => (
            <MenuItem key={ctx.id} onClick={() => handleMenuClick(ctx.path)} sx={{ display: 'flex', gap: 1 }}>
              {ctx.icon} {ctx.title}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export default InvoiceDataTable;
