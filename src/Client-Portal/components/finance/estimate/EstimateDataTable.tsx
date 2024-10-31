import React, { useState } from 'react';
import { Box, Button, Checkbox, Link, Menu, MenuItem, TextField } from '@mui/material';
import {
  IconCalendar,
  IconCalendarView,
  IconCoin,
  IconCompact,
  IconCsv,
  IconDoubleNote,
  IconDownload,
  IconFilter,
  IconMoneySend,
  IconNotes,
  IconPdf,
  IconPrinter,
  IconSearch,
  IconSorting,
} from '../../../../utils/SvgUtil';
import DropdownMenu from '../../../../components/DropdownMenu';
import { useNavigate } from 'react-router-dom';

type Property = {
  id: number;
  estimateNumber: string;
  estimateTotal: string;
  estimateDate: string;
  paidAmount: string;
  status: string;
  dotColor: string;
};

const properties: Property[] = [
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

const EstimateDataTable = () => {
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
              <th className="py-2 px-4 text-start">Number</th>
              <th className="py-2 px-4 text-start">Estimate Date</th>
              <th className="py-2 px-4 text-start">Estimate Total</th>
              <th className="py-2 px-4 text-start">Status</th>
              <th className="py-2 px-4 text-start">Notes</th>
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
                    {property.estimateNumber}
                  </Box>
                </td>
                <td className="py-2 px-4 text-sm font-normal border-b">
                  <div className="flex gap-2">
                    <IconCalendar size={20} color="#99A0AE" />
                    <span className="text-gray-600">{property.estimateDate}</span>
                  </div>
                </td>
                <td className="py-2 px-4 text-sm font-normal border-b">
                  <div className="flex gap-2">
                    <IconCoin size={20} color="#99A0AE" />
                    <span className="text-gray-600">{property.estimateTotal}</span>
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
                  <div className="flex gap-2">
                    <IconDoubleNote size={20} color="#99A0AE" />
                    <span className="text-gray-600 truncate">{property.paidAmount}</span>
                  </div>
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

export default EstimateDataTable;
