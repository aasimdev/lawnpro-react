import React, { useState } from 'react';
import { NoDataScreen } from '../../Client-Portal/components/NoDataScreen';
import { IconAddCircle, IconDateCalendar, IconFilter, IconSearch, IconSorting, IconWork } from '../../utils/SvgUtil';
import { Box, Button, Divider, TextField } from '@mui/material';
import { FilterDropdown } from '../../Client-Portal/components/FilterDropdown';
import DropdownMenu from '../../components/DropdownMenu';
import user from '../../assets/images/user-img.svg';

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

export const WorkRequest = () => {
  const [showContent, setShowContent] = useState(false);
  const [filterAnchorEl, setFilterAnchorEl] = useState<null | HTMLElement>(null);
  const openFilter = Boolean(filterAnchorEl);

  const handleButtonClick = () => {
    setShowContent(true);
  };

  const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  return (
    <div className="px-8 pb-6 pt-20 bg-gray-week">
      {!showContent && (
        <NoDataScreen
          title="Work Request"
          Icon={<IconWork size={24} color="#525866" />}
          desc={`You haven’t created any work requests yet. Need help with your lawn? Start by creating a work request now!`}
          btnIcon={<IconAddCircle size={20} color="#fff" />}
          btnTitle={'Create New Request'}
          path={''}
          onClick={handleButtonClick}
        />
      )}
      {showContent && (
        <div className="mt-4 bg-white p-4 rounded-2xl border border-faded-light shadow-sm ">
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} pb={2}>
            <Box display={'flex'} gap={1} alignItems={'center'}>
              <IconWork size={24} color="#525866" />
              <span className="font-medium text-md text-text-dark">Work Request</span>
            </Box>
            <Button
              sx={{
                borderRadius: '8px',
                border: 'none',
                color: '#ffff',
                background: '#75A428',
                '&:hover': { backgroundColor: '#a2c56a', color: '#fff' },
              }}
              startIcon={<IconAddCircle size={20} color="#fff" />}
            >
              New Request
            </Button>
          </Box>
          <Divider orientation="horizontal" />
          <div className="flex items-center justify-between pt-4 pb-6">
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
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Box display={'flex'} flexDirection={'column'} gap={1}>
              <Box display={'flex'} flexDirection={'column'}>
                <span className="text-text-dark font-bold text-sm">#10343</span>
                <span className="text-text-dark font-medium text-sm">Basic Landscaping</span>
              </Box>
              <Box display={'flex'} flexDirection={'column'} gap={0.4}>
                <span className="text-gray-600 font-normal text-xs">Customer</span>
                <Box display={'flex'} gap={0.5} alignItems={'center'}>
                  <img src={user} className="w-6 h-6 rounded-full" alt="" />
                  <span className="text-gray-600 font-normal text-sm">Ashley Carter</span>
                </Box>
              </Box>
            </Box>
            <div className="grid grid-cols-2 gap-2">
              <Box display={'flex'} flexDirection={'column'} gap={1}>
                <Box display={'flex'} flexDirection={'column'} gap={0.4}>
                  <span className="text-gray-600 font-normal text-xs">Status</span>
                  <div className="py-1 px-2  w-24  rounded-lg text-gray-600 items-center font-normal text-xs bg-white border border-faded-light flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-success-base"></div>
                    Completed
                  </div>
                </Box>
              </Box>
              <Box display={'flex'} flexDirection={'column'} gap={1}>
                <Box display={'flex'} flexDirection={'column'} gap={0.4}>
                  <span className="text-gray-600 font-normal text-xs">Created At</span>
                  <Box display={'flex'} gap={0.5} alignItems={'center'}>
                    <IconDateCalendar size={20} color="#525866" />
                    <span className="text-gray-600 font-normal text-sm">June 04, 2024</span>
                  </Box>
                </Box>
              </Box>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
