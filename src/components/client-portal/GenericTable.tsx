import React, { useState } from 'react';
import { Box, Button, Checkbox, Menu, MenuItem, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IconCsv, IconDownload, IconFilter, IconPdf, IconSearch, IconSorting } from '../../utils/SvgUtil';
import { FilterDropdown } from '../../components/client-portal/FilterDropdown';
import DropdownMenu from '../../components/DropdownMenu';

type InvoiceDataTableProps = {
  head: Array<{ id: React.Key; title: string }>;
  status?: any;
  action?: Array<{ id: React.Key; path: string; icon: JSX.Element; title: string }>;
  children?: React.ReactNode;
  anchorEl?: null | HTMLElement;
  setAnchorEl?: React.Dispatch<React.SetStateAction<null | HTMLElement>>;
  selectedRows?: number[];
  handleSelectAllChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isAllSelected?: boolean;
  properties?: any;
  payment?: string;
};

const GenericTable: React.FC<InvoiceDataTableProps> = ({
  head,
  status,
  action = [],
  children,
  setAnchorEl,
  anchorEl,
  selectedRows = [],
  handleSelectAllChange,
  isAllSelected = false,
  properties = { length: 0 },
  payment,
}) => {
  const navigate = useNavigate();
  const [filterAnchorEl, setFilterAnchorEl] = useState<null | HTMLElement>(null);
  const openFilter = Boolean(filterAnchorEl);

  const handleClose = () => {
    if (setAnchorEl) setAnchorEl(null);
  };

  const handleMenuClick = (path: string) => {
    if (setAnchorEl) setAnchorEl(null);
    if (path && path !== '#') {
      navigate(path);
    }
  };

  const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {payment === 'payment' ? (
        ''
      ) : (
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
              <div className="px-1.5 py-0.5 cursor-pointer text-soft-400 text-xs rounded-md border border-main-gray  ">
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
                '&:hover': { backgroundColor: 'transparent', color: '#525866' },
              }}
              startIcon={<IconFilter size={20} color="#99A0AE" />}
              onClick={handleFilterClick}
            >
              Filter
            </Button>

            <FilterDropdown
              filterAnchorEl={filterAnchorEl}
              open={openFilter}
              handleFilterClose={handleFilterClose}
              status={status}
            />

            <DropdownMenu
              title="Sort by"
              className="bg-white text-gray-600 rounded-lg border-solid border-[1px] border-main-gray"
              items={[{ title: 'Ascending' }, { title: 'Descending' }]}
              icon={<IconSorting size={20} color="#99A0AE" />}
            />

            <DropdownMenu
              title="Export"
              className="bg-white text-gray-600 rounded-lg border-solid border-[1px] border-main-gray"
              items={[
                { title: 'CSV', icon: <IconCsv size={20} /> },
                { title: 'PDF', icon: <IconPdf size={20} /> },
              ]}
              icon={<IconDownload size={20} color="#99A0AE" />}
            />
          </div>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-max min-w-full">
          <thead className="bg-gray-week ">
            <tr>
              <th className="py-1 px-3 text-start   text-sm font-normal text-gray-600 ">
                <span className="flex gap-2 items-center">
                  {payment !== 'payment' && (
                    <Checkbox
                      checked={isAllSelected}
                      indeterminate={selectedRows.length > 0 && selectedRows.length < head.length}
                      onChange={handleSelectAllChange}
                    />
                  )}
                  {head[0].title}
                </span>
              </th>
              {head.slice(1).map((heading) => (
                <th key={heading.id} className="py-1 px-3 text-sm font-normal text-gray-600 text-start">
                  {heading.title}
                </th>
              ))}
              {payment !== 'payment' && <th className="py-1 px-3 text-start"></th>}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
        {payment !== 'payment' && (
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
        )}
      </div>
    </div>
  );
};

export default GenericTable;
