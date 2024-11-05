import { Box, Checkbox, Divider } from '@mui/material';
import React, { useState } from 'react';
import {
  IconCalendar,
  IconCalendarView,
  IconCompact,
  IconDocumentAttachment,
  IconDocumentValidation,
  IconPrinter,
} from '../../utils/SvgUtil';
import GenericTable from '../components/GenericTable';

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
    title: 'View Document',
    icon: <IconCalendarView size={20} color="#525866" />,
    path: '/finance/documents/document-details',
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
    title: 'Date',
  },
  {
    id: 2,
    title: 'Document Name',
  },
];

const columns = [
  {
    id: 1,
    date: 'Oct 05, 2024',
    name: 'Payment Past Due',
  },
  {
    id: 2,
    date: 'Oct 04, 2024',
    name: 'Follow Up On Proposal ',
  },
  {
    id: 3,
    date: 'June 04, 2024',
    name: 'Proposal Cover Letter ',
  },
  {
    id: 4,
    date: 'June 01, 2024',
    name: 'Contract',
  },
  {
    id: 5,
    date: 'Jan 04, 2024',
    name: 'Lawn Care Contract',
  },
];

export const Documents = () => {
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
      <div className="mt-4 bg-white p-4 rounded-2xl border border-faded-light shadow-sm">
        <Box display={'flex'} gap={1} alignItems={'center'} pb={2}>
          <IconDocumentAttachment size={24} color="#525866" />
          <span className="font-medium text-md text-text-dark">Documents</span>
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
                <td
                  className={`py-2.5 px-3 w-60 text-sm font-normal ${index === columns.length - 1 ? '' : 'border-b'}`}
                >
                  <Box display={'flex'} gap={1} alignItems={'center'}>
                    <Checkbox
                      checked={selectedRows.includes(property.id)}
                      onChange={() => handleCheckboxChange(property.id)}
                    />
                    <IconCalendar size={20} color="#99A0AE" />

                    <span className="text-gray-600">{property.date}</span>
                  </Box>
                </td>
                <td className={`py-2.5 px-3 text-sm font-medium ${index === columns.length - 1 ? '' : 'border-b'}`}>
                  <Box display={'flex'} gap={2}>
                    <IconDocumentValidation size={20} color="#99A0AE" />
                    <span className="text-text-dark">{property.name}</span>
                  </Box>
                </td>

                <td className={`py-2.5 px-3 text-sm font-normal  ${index === columns.length - 1 ? '' : 'border-b'}`}>
                  <div className="cursor-pointer flex justify-end" onClick={handleClick}>
                    <IconCompact size={24} color="#525866" />
                  </div>
                </td>
              </tr>
            ))}
          </GenericTable>
        </Box>
      </div>
    </div>
  );
};
